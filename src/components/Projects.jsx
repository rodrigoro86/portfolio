const PROJECTS = [
  {
    num: '01',
    title: 'Predição de Chuva',
    desc: 'Pipeline MLOps implementado para automatizar a coleta, processamento e modelagem de dados meteorológicos, com foco na predição de chuvas. Integração de dados de satélites com modelos de ML supervisionados.',
    tags: ['Python', 'MLflow', 'DVC', 'Scikit-learn', 'Docker'],
  },
  {
    num: '02',
    title: 'Predição de Pragas',
    desc: 'Pipeline MLOps voltado à predição de pragas, integrando dados climáticos e geoespaciais com versionamento de dados e monitoramento contínuo dos modelos em produção.',
    tags: ['Python', 'GeoPandas', 'MLflow', 'DVC', 'FastAPI'],
  },
  {
    num: '03',
    title: 'Air Traffic Control Tools',
    desc: 'Desenvolvimento de ferramentas e softwares robustos em Python para manutenção de sistemas críticos de controle de tráfego aéreo. Análise de dados geográficos para calibração e otimização de rotas aéreas.',
    tags: ['Python', 'GeoPandas', 'PostGIS', 'Rasterio'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div style={{ position: 'relative' }}>
        <span className="section-bg-word">Projetos</span>
        <div className="section-label reveal">O que construí</div>
        <h2 className="section-title reveal reveal-delay-1">Projetos Principais</h2>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div key={p.num} className={`proj-card reveal reveal-delay-${i + 1}`}>
              <div className="proj-num">{p.num}</div>
              <div className="proj-title">{p.title}</div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map(tag => <span key={tag} className="proj-tag">{tag}</span>)}
              </div>
              <div className="proj-arrow">↗</div>
            </div>
          ))}
          <div
            className="proj-card reveal reveal-delay-4"
            style={{ background: 'var(--bg3)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '16px', minHeight: '280px' }}
          >
            <div style={{ fontSize: '48px', color: 'var(--border)' }}>+</div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--muted)' }}>Mais projetos em breve</div>
            <a href="mailto:rodrigobroslavschi@gmail.com" className="btn btn-outline" style={{ marginTop: '8px' }}>Entre em contato</a>
          </div>
        </div>
      </div>
    </section>
  )
}
