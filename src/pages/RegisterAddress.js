import React from 'react';

const RegisterAddress = () => {
  return (
    <div>
      <h1>Cadastro de Endereço</h1>
      <form>
        <div>
          <label htmlFor="lot">Lote:</label>
          <input type="text" id="lot" name="lot" required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterAddress;
