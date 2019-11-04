import React, { useState, useEffect } from "react";
import "./style.css";

import api from "../../services/api";
import logo from "../../assets/logo.png";

export default function Login({ match, history }) {
  const [motoristName, setMotoristName] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");

  if (!localStorage.getItem("login")) {
    history.push(`/`);
  }

  const [container, setContainer] = useState("");

  useEffect(() => {
    async function loadContainer() {
      const { data } = await api.get(`/containers/${match.params.id}`);
      setMotoristName(data.motoristName);
      setType(data.type);
      setSize(data.size);
    }
    loadContainer();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.put(`/containers/${match.params.id}`, {
      motoristName,
      type,
      size
    });

    history.push(`/main`);
  }

  function back(e) {
    history.push(`/main`);
  }

  return (
    <div className="container">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <img className="logo" src={logo} alt="Tindev" />
          <h1>Edição de Container</h1>
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
          <button onClick={back}>Voltar</button>
        </form>
      </div>
    </div>
  );
}
