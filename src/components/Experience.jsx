const EXPERIENCE = [
  {
    period: '2024 — Present',
    company: 'SIPREMO',
    role: 'Desenvolvedor Sênior',
    items: [
      'Desenvolvimento e implementação de modelos de ML para predição de eventos meteorológicos',
      'Integração de dados de satélites e previsões do tempo',
      'Implementação de práticas MLOps com MLflow e DVC',
      'Pipelines CI/CD com GitHub Actions e Docker',
      'APIs RESTful de alta performance com FastAPI',
    ],
  },
  {
    period: '2019 — 2024',
    company: 'ATECH',
    role: 'Analista de Infraestrutura · Grupo EMBRAER',
    items: [
      'Manutenção de sistemas críticos de controle de tráfego aéreo',
      'Desenvolvimento de ferramentas robustas em Python',
      'Tratamento e análise de dados geográficos',
      'Calibração precisa de sistemas de controle de tráfego aéreo',
      'Otimização de rotas aéreas via análise geoespacial',
    ],
  },
]

const EDUCATION = [
  { year: '2024 — 2025', degree: 'MBA em Data Science & Big Data', school: 'Faculdade de Informática e Administração Paulista · FIAP' },
  { year: '2015 — 2019', degree: 'Bacharelado em Engenharia Elétrica', school: 'Universidade Nove de Julho · UNINOVE' },
]

export default function Experience() {
  return (
    <section id="experience">
      <div style={{ position: 'relative' }}>
        <span className="section-bg-word">Trabalho</span>
        <div className="section-label reveal">Onde trabalhei</div>
        <h2 className="section-title reveal reveal-delay-1">Experiência</h2>

        <div className="exp-grid">
          {EXPERIENCE.map((exp, i) => (
            <div key={exp.company} className={`exp-card reveal reveal-delay-${i + 1}`}>
              <div className="exp-period">{exp.period}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-role">{exp.role}</div>
              <ul className="exp-list">
                {exp.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px' }}>
          <div className="section-label reveal" style={{ marginTop: '60px' }}>Formação</div>
        </div>
        <div className="edu-grid">
          {EDUCATION.map((edu, i) => (
            <div key={edu.degree} className={`edu-card reveal reveal-delay-${i + 1}`}>
              <div className="edu-year">{edu.year}</div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
