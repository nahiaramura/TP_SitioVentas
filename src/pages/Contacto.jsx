

const Contacto = () => {
  return (
    <div className="contacto">
      <h2>Contacto</h2>
      <form className="form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />
        <textarea placeholder="Mensaje" rows="5" required></textarea>
        <button className="btn">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
