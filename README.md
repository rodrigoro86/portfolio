# Portfólio — Rodrigo Broslavschi

Site de portfólio pessoal construído com React + Vite, servido via nginx em Docker Swarm com deploy automatizado por GitHub Actions.

## Tecnologias

- **Frontend:** React 18, Vite 5
- **Servidor:** nginx (Alpine)
- **Infraestrutura:** Docker Swarm, Traefik, Portainer
- **CI/CD:** GitHub Actions

## Estrutura do projeto

```
├── src/
│   ├── App.jsx               # Componente raiz + scroll reveal
│   ├── index.css             # Estilos globais
│   ├── main.jsx              # Entry point React
│   └── components/
│       ├── Nav.jsx           # Navegação + menu mobile
│       ├── Hero.jsx          # Seção inicial
│       ├── Terminal.jsx      # Animação de terminal
│       ├── About.jsx         # Sobre mim
│       ├── Skills.jsx        # Habilidades
│       ├── Experience.jsx    # Experiência + Formação
│       ├── Projects.jsx      # Projetos
│       ├── Contact.jsx       # Contato
│       └── Footer.jsx        # Rodapé com versão
├── public/
│   └── uploads/              # Foto e CV (servidos como assets estáticos)
├── Dockerfile                # Multi-stage: node build → nginx serve
├── docker-compose.yml        # Stack Swarm com Traefik
└── .github/workflows/
    └── deploy.yml            # Pipeline de deploy
```

## Desenvolvimento local

```bash
npm install
npm run dev
```

O site fica disponível em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy

O deploy é feito automaticamente via GitHub Actions a cada push na branch `main`.

### Fluxo

```
git push origin main
        ↓
GitHub Actions — SSH no servidor
        ↓
git pull + docker build (com hash do commit como versão)
        ↓
docker stack deploy → serviço atualizado no Swarm
```

### Secrets necessários no GitHub

| Secret | Descrição |
|---|---|
| `SSH_HOST` | IP ou hostname do servidor |
| `SSH_USER` | Usuário SSH |
| `SSH_PRIVATE_KEY` | Chave privada SSH |
| `SSH_PORT` | Porta SSH (padrão: 22) |
| `DEPLOY_PATH` | Caminho do repositório no servidor |
| `STACK_NAME` | Nome do stack no Docker Swarm |

### Versionamento automático

A versão exibida no rodapé do site é o hash curto do commit git, injetada em tempo de build via variável de ambiente:

```bash
docker build --build-arg VERSION=$(git rev-parse --short HEAD) -t portifolio .
```

## Domínio

O site está disponível em:
- `https://www.rodrigobroslavschi.com.br`
- `https://rodrigobroslavschi.com.br`

Certificado SSL gerenciado automaticamente pelo Traefik via Let's Encrypt.
