import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Sistema de Delivery Interplanetário</h1>
      <nav>
        <ul>
          <li>
            <Link to="/register">Cadastrar Endereço</Link>
          </li>
          <li>
            <Link to="/edit">Editar Endereço</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
