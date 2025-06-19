import './Contacto.css';
import { motion } from 'framer-motion';

const Contacto = () => {
  return (
    <motion.div 
      className="contacto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="form-container">
        <h2>Contacto</h2>
        <form className="form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo" required />
          <textarea placeholder="Mensaje" rows="5" required></textarea>
          <button className="btn">Enviar</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contacto;
