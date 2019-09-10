import React, { useState } from 'react';
import './style.css';

import api from '../../services/api';

import logo from '../../assets/logo.png';

export default function Login({ history }) {
    
    const [login, setLogin] = useState('');

    const [password, setPassword] = useState('');
    if(localStorage.getItem('login')){
        history.push(`/main/`);
    }

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/login', {
            login,
            password
        })

        const { userLogin, signIn } = response.data;
        
        if(signIn === true){
            localStorage.setItem('login', userLogin);
            history.push(`/main`);
        }
    }

    return (
        <div className="login-container">
            <form id="login-container-form" onSubmit={handleSubmit}>
                <img id="logo" className="logo" src={logo} alt="Tindev" />
                <input 
                    placeholder="Digite seu usuário"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
                <input 
                    placeholder="Digite sua senha"
                    value={password}
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}