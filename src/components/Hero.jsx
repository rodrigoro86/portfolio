export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-text">RB</div>
      <div className="hero-content">
        <div className="hero-tag">Olá, Mundo!!!</div>
        <h1 className="hero-name">Sou <em>Rodrigo</em><br />Broslavschi</h1>
        <p className="hero-role">Desenvolvedor Sênior · Engenheiro de IA &amp; MLOps</p>
        <div className="hero-btns">
          <a href="#contact" className="btn btn-primary">Entre em contato</a>
          <a href="#projects" className="btn btn-outline">Meus projetos</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo-frame">
          <img
            src="/uploads/rodrigo-broslavschi.png"
            alt="Rodrigo Broslavschi"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
        <div className="hero-card">
          <div className="hero-card-num">5+</div>
          <div className="hero-card-label">Anos de experiência</div>
        </div>
        <div className="hero-card2">
          <div className="status-dot" />
          <div className="hero-card2-text">
            <strong>Disponível</strong>
            para projetos
          </div>
        </div>
      </div>
    </section>
  )
}
