import { useEffect, useRef } from 'react'

const LINES = [
  { type: 'prompt', cmd: 'python train.py --model rain_prediction' },
  { type: 'out', text: '🔄 Loading dataset...', cls: 'term-out' },
  { type: 'out', text: '✅ 142,800 samples loaded', cls: 'term-green' },
  { type: 'out', text: '🧠 Training XGBoost model...', cls: 'term-out' },
  { type: 'out', text: '   Epoch 1/50 — loss: 0.342', cls: 'term-out' },
  { type: 'out', text: '   Epoch 50/50 — loss: 0.091', cls: 'term-out' },
  { type: 'out', text: '✅ Accuracy: 94.3%  F1: 0.921', cls: 'term-green' },
  { type: 'blank' },
  { type: 'prompt', cmd: 'mlflow run . --experiment-name rain_v3' },
  { type: 'out', text: '📦 Logging params & metrics...', cls: 'term-out' },
  { type: 'out', text: '✅ Run ID: a3f8c1d9  logged', cls: 'term-green' },
  { type: 'blank' },
  { type: 'prompt', cmd: 'dvc push' },
  { type: 'out', text: '☁️  Syncing 3 files to remote...', cls: 'term-blue' },
  { type: 'out', text: '✅ Everything is up to date.', cls: 'term-green' },
  { type: 'blank' },
  { type: 'prompt', cmd: 'docker build -t rain-api:latest .' },
  { type: 'out', text: '🐳 Building image...', cls: 'term-blue' },
  { type: 'out', text: '✅ Successfully built  a7b3d2e1', cls: 'term-green' },
]

const delay = ms => new Promise(r => setTimeout(r, ms))

export default function Terminal() {
  const bodyRef = useRef(null)
  const started = useRef(false)
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    async function run() {
      if (started.current) return
      started.current = true
      const body = bodyRef.current
      body.innerHTML = ''

      for (const line of LINES) {
        if (cancelled) return
        if (line.type === 'blank') {
          body.appendChild(document.createElement('br'))
          await delay(200)
          continue
        }
        if (line.type === 'prompt') {
          const span = document.createElement('span')
          span.className = 'term-line'
          span.innerHTML = '<span class="term-prompt">➜ ~ </span><span class="term-cmd"></span>'
          body.appendChild(span)
          const cmdEl = span.querySelector('.term-cmd')
          for (const ch of line.cmd) {
            if (cancelled) return
            cmdEl.textContent += ch
            await delay(28)
          }
          await delay(300)
        } else {
          const span = document.createElement('span')
          span.className = `term-line ${line.cls || ''}`
          span.textContent = line.text
          body.appendChild(span)
          await delay(180)
        }
        body.scrollTop = body.scrollHeight
      }

      if (!cancelled) {
        const cursor = document.createElement('span')
        cursor.className = 'term-cursor'
        body.appendChild(cursor)
      }
    }

    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) run()
    }, { threshold: 0.3 })

    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [])

  return (
    <div className="about-terminal" ref={containerRef}>
      <div className="term-bar">
        <span className="term-dot" style={{ background: '#ff5f57' }} />
        <span className="term-dot" style={{ background: '#ffbd2e' }} />
        <span className="term-dot" style={{ background: '#28c840' }} />
        <span className="term-title">rodrigo@mlops ~ bash</span>
      </div>
      <div className="term-body" ref={bodyRef} />
    </div>
  )
}
