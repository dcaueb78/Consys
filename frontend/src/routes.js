import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/login';
import Main from './pages/main';
import Container from './pages/container';

import Header from './components/Header';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route component={Header} />
            <Route path="/" exact component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/container" component={Container} />
        </BrowserRouter>
    );
}