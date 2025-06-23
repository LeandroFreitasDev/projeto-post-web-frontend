import React, { useState } from 'react'
import styles from '../Cadastro/Cadastro.module.css'
import api from '../../services/api';

export default function Cadastro() {
    const [evento, setEvento] = useState({ imagem: '', evento: '', data: '', hora: '', local: '', descricao: '' })

    const handleChange = (e) => {
        setEvento({ ...evento, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/postagem', evento);
            alert('Cadastro de evento realizado com sucesso!');
        } catch (error) {
            alert('Erro ao cadastrar evento.');
            console.error(error);
        }
    };


    return (
        <div className={styles.container}>
            <h2>Cadastro de Evento</h2>
            <form onSubmit={handleSubmit}>
                <input name='imagem' placeholder='Imagem' onChange={handleChange} required className={styles.input} />
                <input name='evento' placeholder='Evento' onChange={handleChange} required className={styles.input} />
                <input name='data' placeholder='Data' onChange={handleChange} required className={styles.input} />
                <input name='hora' placeholder='Hora' onChange={handleChange} required className={styles.input} />
                <input name='local' placeholder='Local' onChange={handleChange} required className={styles.input} />
                <input name='descricao' placeholder='Descrição' onChange={handleChange} required className={styles.input} />
                <button type='sumit' className={styles.button}>Cadastrar</button>
            </form>
        </div>
    )
}
