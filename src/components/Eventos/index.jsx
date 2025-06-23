import React, { useEffect, useState } from 'react'
import styles from './Eventos.module.css'
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

export default function Eventos() {
  const [evento, setEvento] = useState([]);
  const [editando, setEditando] = useState(null);
  const [form, setForm] = useState({ imagem: '', evento: '', data: '', hora: '', local: '', descricao: '' });

  const navigate = useNavigate();

  const listarEventos = async () => {
    const res = await api.get("/postagem");
    setEvento(res.data);
  };

  useEffect(() => {
    listarEventos();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/postagem/${id}`);
    listarEventos();
  }

  const handleEdit = (postagem) => {
    setEditando(postagem.id);
    setForm(postagem);
  }

  const handleSave = async () => {
    await api.put(`/postagem/${editando}`, form);
    setEditando(null);
    setForm({ imagem: '', evento: '', data: '', hora: '', local: '', descricao: '' });
    listarEventos();
  }


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Gerenciar Eventos</h2>
        <button onClick={() => navigate('/cadastro')} className={styles.addButton}>
          + Adicionar Evento
        </button>
      </header>

      <ul className={styles.userList}>
        {evento.map((postagem) => (
          <li key={postagem.id} className={styles.card}>
            {editando === postagem.id ? (
              <>
                <input
                  value={form.imagem}
                  onChange={e => setForm({ ...form, imagem: e.target.value })}
                  className={styles.input}
                />
                <input
                  value={form.evento}
                  onChange={e => setForm({ ...form, evento: e.target.value })}
                  className={styles.input}
                />
                <input
                  value={form.data}
                  onChange={e => setForm({ ...form, data: e.target.value })}
                  className={styles.input}
                />
                <input
                  value={form.hora}
                  onChange={e => setForm({ ...form, hora: e.target.value })}
                  className={styles.input}
                />
                <input
                  value={form.local}
                  onChange={e => setForm({ ...form, local: e.target.value })}
                  className={styles.input}
                />
                <input
                  value={form.descricao}
                  onChange={e => setForm({ ...form, descricao: e.target.value })}
                  className={styles.input}
                />
                <button onClick={handleSave} className={styles.button}>Salvar</button>
              </>
            ) : (
              <>
                <img
                  src={postagem.imagem}
                  alt={`Imagem do evento ${postagem.evento}`}
                  className={styles.cardImage}
                />
                <h3 className={styles.cardTitle}>{postagem.evento}</h3>
                <p><strong>Data:</strong> {postagem.data}</p>
                <p><strong>Hora:</strong> {postagem.hora}</p>
                <p><strong>Local:</strong> {postagem.local}</p>
                <p><strong>Descrição:</strong> {postagem.descricao}</p>
                <div className={styles.cardButtons}>
                  <button onClick={() => handleEdit(postagem)} className={styles.button}>Editar</button>
                  <button onClick={() => handleDelete(postagem.id)} className={styles.buttonDelete}>Excluir</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
