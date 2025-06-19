// Nuevo QuienesSomos.jsx con estilo premium y animaciones
import './QuienesSomos.css';
import { motion } from 'framer-motion';
import videoMision from '../assets/Mision.mp4';
import videoAsesoramiento from '../assets/Asesoramientno.mp4';
import { Link } from 'react-router-dom';

const QuienesSomos = () => {
  return (
    <motion.div className="qs-wrapper">
      <div className="qs-hero">
        <video autoPlay muted loop playsInline className="qs-video">
          <source src="/assets/video_inicio.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        <div className="qs-overlay">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Innovación sin límites
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            En IPREMIUM, la tecnología es parte de tu estilo de vida.
          </motion.p>
        </div>
      </div>

      <motion.section className="qs-section"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <video autoPlay muted loop playsInline className="qs-video-mision">
        <source src={videoMision} type="video/mp4" />
      Tu navegador no soporta videos.
    </video>
    
        <div>
          <h2>Nuestra misión</h2>
          <p>Ofrecerte siempre lo último en tecnología móvil, con el respaldo, la confianza y la garantía que merecés.</p>
        </div>
      </motion.section>

      <motion.section className="qs-section reverse"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
       <video autoPlay muted loop playsInline className="qs-video-mision">
            <source src={videoAsesoramiento} type="video/mp4" />
        Tu navegador no soporta videos.
        </video>
        <div>
          <h2>Asesoramiento experto</h2>
          <p>Te ayudamos a elegir el celular perfecto según tu estilo de vida. No vendemos productos, ofrecemos soluciones.</p>
          <Link to="/contacto" className="btn-cta">Contactanos</Link>
        </div>
      </motion.section>

      <motion.section className="qs-benefits"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
      </motion.section>
    </motion.div>
  );
};

export default QuienesSomos;
