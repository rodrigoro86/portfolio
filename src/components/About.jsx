import Terminal from './Terminal'

export default function About() {
  return (
    <section id="about">
      <div style={{ position: 'relative' }}>
        <span className="section-bg-word">Sobre</span>
        <div className="about-grid">
          <Terminal />
          <div className="about-text">
            <div className="section-label reveal">Sobre Mim</div>
            <h2 className="section-title reveal reveal-delay-1" style={{ marginBottom: '28px', fontSize: 'clamp(32px,4vw,48px)' }}>
              Desenvolvedor &amp;<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>AI Engineer</em>
            </h2>
            <p className="reveal reveal-delay-2">
              Desenvolvedor com sólida experiência em projetos de Inteligência Artificial utilizando Python, com foco em práticas de MLOps. Especializado na automação de pipelines de machine learning, versionamento de dados e modelos com DVC e MLflow, e integração contínua com CI/CD.
            </p>
            <p className="reveal reveal-delay-3">
              Proficiente em bibliotecas como Pandas, GeoPandas, Scikit-learn e FastAPI, aplicadas ao tratamento de dados geoespaciais e à construção de APIs para entrega de modelos em produção.
            </p>
            <div className="about-details reveal reveal-delay-4">
              {[
                ['Nome',        'Rodrigo Broslavschi'],
                ['Localização', 'São Paulo, BR'],
                ['E-mail',      <a href="mailto:rodrigobroslavschi@gmail.com">rodrigobroslavschi@gmail.com</a>],
                ['Telefone',    '(11) 98537-7430'],
                ['Idiomas',     'PT · EN (Intermediário)'],
                ['LinkedIn',    <a href="https://linkedin.com/in/rodrigo-broslavschi" target="_blank" rel="noreferrer">rodrigo-broslavschi</a>],
              ].map(([key, val]) => (
                <div className="about-row" key={key}>
                  <div className="about-key">{key}</div>
                  <div className="about-val">{val}</div>
                </div>
              ))}
            </div>
            <a href="/uploads/cv-rodrigo-pt.pdf" download className="btn btn-primary reveal" style={{ display: 'inline-flex' }}>
              Baixar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
