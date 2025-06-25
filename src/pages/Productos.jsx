import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';
import CardCelular from '../components/CardCelular';
import './Productos.css';

const Productos = () => {
  const { idMarca } = useParams();
  const marcaId = parseInt(idMarca);

  const celularesFiltrados = idMarca
    ? celulares.filter(c => c.marcaId === marcaId)
    : celulares;

  return (
    <div className="productos">
      <div className="grid">
        {celularesFiltrados.map(cel => (
          <CardCelular key={cel.id} celular={cel} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
