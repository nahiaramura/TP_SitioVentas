import './Productos.css'; 
import { useEffect, useState } from 'react';
import { celulares } from '../data/data';
import { useParams } from 'react-router-dom';
import CardCelular from '../components/CardCelular';

const Productos = () => {
  const { idMarca } = useParams();
  const [filtrados, setFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const celularesFiltrados = idMarca ? celulares.filter(c => c.marcaId === parseInt(idMarca)) : celulares;
    setFiltrados(celularesFiltrados);}, [idMarca]);

  const handleBusqueda = (e) => {
    const valor = e.target.value.toLowerCase();
    setBusqueda(valor);
    const celularesFiltrados = idMarca ? celulares.filter(c => c.marcaId === parseInt(idMarca)) : celulares;
    const resultado = celularesFiltrados.filter(c => c.nombre.toLowerCase().includes(valor));
    setFiltrados(resultado);
  };

  return (
    <div className="productos">
      <h2>Catálogo de Celulares</h2>

      <input type="text" placeholder="Buscar por nombre..." value={busqueda} onChange={handleBusqueda}
        style={{
          padding: '10px',
          marginBottom: '20px',
          width: '100%',
          maxWidth: '400px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />

      <div className="productos-grid">
        {filtrados.map(celular => (<CardCelular key={celular.id} celular={celular} />))}
      </div>
    </div>
  );
};

export default Productos;
