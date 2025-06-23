import React, { useEffect, useState } from 'react';
import styles from '../EventosPublicos/EventosPublico.module.css'
import api from '../../services/api';

export default function EventosPublicos() {
  const [evento, setEvento] = useState([]);

  const listarEventos = async () => {
    const res = await api.get("/postagem");
    setEvento(res.data);
  };

  useEffect(() => {
    listarEventos();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Próximos Eventos</h2>
      <ul className={styles.userList}>
        {evento.map((postagem) => (
          <li key={postagem.id} className={styles.card}>
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
          </li>
        ))}
      </ul>
    </div>
  );
}