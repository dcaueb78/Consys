import React, { useState } from 'react';
import './Container.css';

import api from '../services/api';

import logo from '../assets/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Login({ history }) {

    const [motoristName, setMotoristName] = useState('');
    const [type, setType] = useState('');
    const [size, setSize] = useState('');

    if (!localStorage.getItem('login')) {
        history.push(`/`);
    }

    const username = localStorage.getItem('login');

    async function handleSubmit(e) {
        e.preventDefault();
        const _creator = localStorage.getItem('login');
        const response = await api.post('/containers', {
            _creator,
            motoristName,
            type,
            size
        })

        const { _id } = response.data;
        if (_id) {
            history.push(`/main`);
        }
    }

    function back(e){
        history.push(`/main`);
    }

    async function logout(e) {
        e.preventDefault();
        localStorage.removeItem('login');
        history.push(`/`);
    }

    return (
        <div className="container">
            <div className="logout-button">
                <h1 className="name">Conectado como </h1>
                <FontAwesomeIcon className="perfil-ico" icon={faUser} />
                <h1 className="username">{username}</h1>
                <button className="logout" onClick={logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
            </div>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <img className="logo" src={logo} alt="Tindev" />
                    <h1>Cadastro de Container</h1>
                    <input
                        placeholder="Nome do motorista"
                        value={motoristName}
                        onChange={e => setMotoristName(e.target.value)}
                    />
                    <input
                        placeholder="Tipo de carga"
                        value={type}
                        onChange={e => setType(e.target.value)}
                    />
                    <input
                        placeholder="Tamanho da Carga"
                        value={size}
                        onChange={e => setSize(e.target.value)}
                    />
                    <button type="submit">Cadastrar Container</button>
                    <button onClick={back} >Voltar</button>
                </form>
            </div>
        </div>
    );
}