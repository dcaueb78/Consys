import React, { Component } from 'react';
import {withRouter} from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'

import './style.css';

class Header extends Component {

    logout = (e) => {
        e.preventDefault();

        const { history } = this.props;
        localStorage.removeItem('login');
        history.push('/');
    };

    render() {        
        if(window.location.pathname === '/') return null;

        const username = localStorage.getItem('login');
        return (
            <header className="main-header">
                <div className="logout-button">
                    <h1 className="name">Conectado como </h1>
                    <FontAwesomeIcon className="perfil-ico" icon={faUser} />
                    <h1 className="username">{ username }</h1>
                    <button className="logout" onClick={this.logout}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </button>
                </div>
            </header>
        );
    }
    
}

export default withRouter(Header);