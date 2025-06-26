import { Link } from 'react-router-dom';
import { marcas } from '../data/data';
import logo from '../assets/LOGO.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
      <img src={logo} alt="CellStore Logo" className="logo-img" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quienes-somos">Quienes somos</Link></li>
        <li className="dropdown">
        <Link to="/productos">Productos</Link>
          <ul className="dropdown-menu">
            <li><Link to="/productos">Ver todos</Link></li>
            {marcas.map(m => (
              <li key={m.id}><Link to={`/productos/marca/${m.id}`}>{m.nombre}</Link></li>
            ))}
          </ul>
        </li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
