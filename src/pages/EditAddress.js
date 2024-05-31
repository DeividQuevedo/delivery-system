import React from 'react';

const EditAddress = () => {
  return (
    <div>
      <h1>Edição de Endereço</h1>
      <form>
        <div>
          <label htmlFor="lot">Lote:</label>
          <input type="text" id="lot" name="lot" required />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditAddress;
