import './QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <div className="qs-wrapper">
      <div className="qs-hero">
        <video autoPlay muted loop playsInline className="qs-video">
          <source src="/assets/video_inicio.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        <div className="qs-overlay">
          <h1>Innovación sin límites</h1>
          <p>En IPREMIUM, la tecnología es parte de tu estilo de vida.</p>
        </div>
      </div>

      <section className="qs-section fade-in">
        <img src="https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164227060/ar-feature-galaxy-z-fold5-design-537050062?$FB_TYPE_J_FNB$" alt="Misión" />
        <div>
          <h2>Nuestra misión</h2>
          <p>Ofrecerte siempre lo último en tecnología móvil, con el respaldo, la confianza y la garantía que merecés.</p>
        </div>
      </section>

      <section className="qs-section fade-in reverse">
        <img src="https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164267288/ar-feature-galaxy-z-fold5-performance-537050071?$FB_TYPE_J_FNB$" alt="Equipo técnico" />
        <div>
          <h2>Asesoramiento experto</h2>
          <p>Te ayudamos a elegir el celular perfecto según tu estilo de vida. No vendemos productos, ofrecemos soluciones.</p>
        </div>
      </section>

      <section className="qs-benefits fade-in">
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>📱 Últimos modelos de las mejores marcas</li>
          <li>🚚 Envíos express a todo el país</li>
          <li>🛡️ Garantía oficial y sitio 100% seguro</li>
          <li>💬 Atención personalizada por expertos</li>
        </ul>
      </section>
    </div>
  );
};

export default QuienesSomos;
