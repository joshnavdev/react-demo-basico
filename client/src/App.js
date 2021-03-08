// Importar react
import React from 'react';
// Crear componente react
const App = () => {
  return (
    <div className="container">
      <h1>Mi muro</h1>
      <label className="form-label">Buscador</label>
      <input className="form-control" />
      <div>PostLists</div>
      <button className="btn btn-light">Agregar Publicación</button>
    </div>
  );
};

// exportart compoennte
export default App;
