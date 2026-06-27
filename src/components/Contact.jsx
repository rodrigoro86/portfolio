export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="section-label reveal" style={{ justifyContent: 'center' }}>Vamos conectar</div>
        <h2 className="contact-title reveal reveal-delay-1">
          Vamos trabalhar<br /><em>juntos?</em>
        </h2>
        <p className="contact-sub reveal reveal-delay-2">
          Aberto a oportunidades, projetos freelance e colaborações. Entre em contato e vamos conversar.
        </p>
        <div className="contact-links reveal reveal-delay-3">
          <a href="mailto:rodrigobroslavschi@gmail.com" className="contact-link">
            <span>✉</span> rodrigobroslavschi@gmail.com
          </a>
          <a href="https://linkedin.com/in/rodrigo-broslavschi" target="_blank" rel="noreferrer" className="contact-link">
            <span>in</span> LinkedIn
          </a>
          <a href="tel:+5511985377430" className="contact-link">
            <span>☎</span> (11) 98537-7430
          </a>
        </div>
      </div>
    </section>
  )
}
