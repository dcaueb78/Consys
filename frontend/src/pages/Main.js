import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

import api from '../services/api';

export default function Main({ history }) {
    if (!localStorage.getItem('login')) {
        history.push(`/`);
    }

    const [containers, setContainers] = useState('');

    useEffect(() => {
        async function loadContainers() {
            const response = await api.get('/containers', {
                headers: {
                    container: true,
                }
            })
            setContainers(response.data);
        }
        loadContainers();
    })

    async function logout(e) {
        e.preventDefault();
        localStorage.removeItem('login');
        history.push(`/`);
    }

    return (
        <div>
            <button className="logout" onClick={logout}>Sair</button>
            <div className="main-container">
                <h1>Listagem de Containers</h1>
                <table>
                    <thead>
                        <tr>
                            <th>MOTORISTA</th>
                            <th>TIPO DE CARGA</th>
                            <th>TAMANHO DA CARGA</th>
                        </tr>
                    </thead>
                    {containers.length > 0 ? (
                        <tbody>
                            {containers.map(container => (
                                <tr key={container._id}>
                                    <td>{container.motoristName}</td>
                                    <td>{container.type}</td>
                                    <td>{container.size}</td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                            <tbody>
                                <tr></tr>
                                <tr></tr>
                                <tr></tr>
                            </tbody>
                        )}
                </table>
                <Link to="/container">
                    <button className="add-container">Adicionar Container</button>
                </Link>
            </div>
        </div>
    )
}