import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FaTrash, FaEdit } from "react-icons/fa";

import api from "../../services/api";

export default function Main({ history, match }) {
  if (!localStorage.getItem("login")) {
    history.push(`/`);
  }

  const [containers, setContainers] = useState("");

  if (match.params.id) {
    api.delete(`/containers/${match.params.id}`);
    history.push("/main")
  }

  useEffect(() => {
    async function loadContainers() {
      const response = await api.get("/containers", {
        headers: {
          container: true
        }
      });
      setContainers(response.data);
    }
    loadContainers();
  });

  async function logout(e) {
    e.preventDefault();
    localStorage.removeItem("login");
    history.push(`/`);
  }

  return (
    <div>
      <div className="main-container">
        <h1>Listagem de Containers</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>MOTORISTA</th>
              <th>TIPO</th>
              <th>TAMANHO</th>
              <th>AÇÃO</th>
            </tr>
          </thead>
          {containers.length > 0 ? (
            <tbody>
              {containers.map((container, index) => (
                <tr key={container._id}>
                  <td>{index}</td>
                  <td>{container.motoristName}</td>
                  <td>{container.type}</td>
                  <td>{container.size} pés</td>
                  <td>
                    <Link to={"/edit/" + container._id}>
                      <FaEdit color="rgb(11, 109, 238)" size="18" />
                    </Link>
                    <Link to={"/main/delete/" + container._id}>
                      <FaTrash color="red" size="18" />
                    </Link>
                  </td>
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
  );
}
