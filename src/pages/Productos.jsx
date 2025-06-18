import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/data';
import CardCelular from '../components/CardCelular';

const Productos = () => {
  const { idMarca } = useParams();
  const marcaId = parseInt(idMarca);

  const celularesFiltrados = idMarca
    ? celulares.filter(c => c.marcaId === marcaId)
    : celulares;

  const marca = marcas.find(m => m.id === marcaId);

  return (
    <div className="productos">
      <h2>{idMarca ? `Celulares ${marca?.nombre}` : 'Todos los Celulares'}</h2>
      <div className="grid">
        {celularesFiltrados.map(cel => (
          <CardCelular key={cel.id} celular={cel} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
