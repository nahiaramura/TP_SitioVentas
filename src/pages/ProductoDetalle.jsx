import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';
import './ProductoDetalle.css';

const ProductoDetalle = () => {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === parseInt(idCelular));

  if (!celular) return <p>Producto no encontrado</p>;

  return (
    <div className="detalle">
      <h2>{celular.nombre}</h2>
      <div className="detalle-content">
        <img src={celular.fotos[0]} alt={celular.nombre} />
        <div>
          <p>{celular.descripcion}</p>
          <h3>${celular.precio}</h3>
          <button className="btn">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
