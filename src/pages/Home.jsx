import { Link } from 'react-router-dom';
import videoInicio from "../assets/video_inicio.mp4";
import bannerImg from '../assets/BANNER.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-video-container">
        <video autoPlay muted loop className="home-video">
        <source src={videoInicio} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>
      <div className="home-content">
        <img src={bannerImg} alt="Banner" className="home-banner" />
        <div className="home-cta">
          <Link to="/productos" className="btn-comprar">Comprar</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
