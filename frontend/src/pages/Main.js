import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'

import api from '../services/api';

export default function Main({ history }) {
    if (!localStorage.getItem('login')) {
        history.push(`/`);
    }

    const username = localStorage.getItem('login');

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
            <div className="logout-button">
                <h1 className="name">Conectado como </h1>
                <FontAwesomeIcon className="perfil-ico" icon={faUser} />
                <h1 className="username">{username}</h1>
                <button className="logout" onClick={logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
            </div>
            <div className="main-container">
                <h1>Listagem de Containers</h1>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>MOTORISTA</th>
                            <th>TIPO</th>
                            <th>TAMANHO</th>
                        </tr>
                    </thead>
                    {containers.length > 0 ? (
                        <tbody>
                            {containers.map((container,index) => (
                                <tr key={container._id}>
                                    <td>{index}</td>
                                    <td>{container.motoristName}</td>
                                    <td>{container.type}</td>
                                    <td>{container.size} pés</td>
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