import { Link } from 'react-router-dom';
import './CardCelular.css';

const CardCelular = ({ celular }) => {
  return (
    <div className="card">
      <img src={celular.fotos[0]} alt={celular.nombre} />

      <h3>{celular.nombre}</h3>
      <p>${celular.precio}</p>
      <Link to={`/producto/${celular.id}`} className="btn">Ver más</Link>
    </div>
  );
};

export default CardCelular;
