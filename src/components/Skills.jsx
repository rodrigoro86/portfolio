const SKILLS = [
  {
    name: 'Python', pct: 95,
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="skill-icon" alt="" />,
  },
  {
    name: 'Machine Learning', pct: 90,
    icon: (
      <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    name: 'MLOps · MLflow · DVC', pct: 88,
    icon: (
      <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    name: 'FastAPI', pct: 85,
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" className="skill-icon" alt="" />,
  },
  {
    name: 'Docker', pct: 82,
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="skill-icon" alt="" />,
  },
  {
    name: 'Geospatial · GeoPandas · PostGIS', pct: 80,
    icon: (
      <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2c-4 4-4 16 0 20M12 2c4 4 4 16 0 20"/>
      </svg>
    ),
  },
]

const TAGS = ['Git', 'DVC', 'MLflow', 'Docker', 'Linux', 'FastAPI', 'Cloud', 'CI/CD', 'GitHub Actions', 'Scikit-learn', 'Pandas', 'GeoPandas', 'PostGIS', 'Rasterio']

export default function Skills() {
  return (
    <section id="skills">
      <div style={{ position: 'relative' }}>
        <span className="section-bg-word">Habilidades</span>
        <div className="section-label reveal">O que faço</div>
        <h2 className="section-title reveal reveal-delay-1">Minhas Habilidades</h2>
        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <div key={skill.name} className={`skill-item reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="skill-header">
                <span className="skill-name">{skill.icon}{skill.name}</span>
                <span className="skill-pct">{skill.pct}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ '--pct': `${skill.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="skills-tags reveal">
          {TAGS.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
    </section>
  )
}
