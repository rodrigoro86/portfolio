const version = import.meta.env.VITE_VERSION || 'dev'

export default function Footer() {
  return (
    <footer>
      <p>© 2026 Rodrigo Broslavschi. Todos os direitos reservados.</p>
      <div className="footer-right">
        <span>rodrigobroslavschi@gmail.com</span>
        <span className="version-badge">v{version}</span>
      </div>
    </footer>
  )
}
