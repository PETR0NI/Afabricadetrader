# Landing Page - Fábrica de Traders

Landing page moderna e responsiva desenvolvida com Next.js e React para promover a Fábrica de Traders, com integração obrigatória ao cadastro na corretora Bullex.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **React 18**
- **CSS Modules** para estilização
- **JavaScript/JSX**

## 📋 Requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
├── app/
│   ├── layout.js          # Layout principal
│   ├── page.js            # Página inicial
│   └── globals.css        # Estilos globais
├── components/
│   ├── Hero.jsx           # Seção hero com elementos gamificados
│   ├── WhatIsSection.jsx  # Seção explicativa
│   ├── VideoSection.jsx   # Seção de vídeo
│   ├── BenefitsCards.jsx  # Cards de benefícios
│   ├── GamifiedSteps.jsx  # Passos gamificados
│   ├── FinalCTA.jsx       # CTA final com botões bloqueados
│   └── *.module.css       # Estilos de cada componente
├── package.json
├── next.config.js
└── jsconfig.json
```

## 🎨 Identidade Visual

- **Cores principais:**
  - Preto escuro: `#0b0b0b` / `#000000`
  - Verde Bullex: `#00ff4c` / `#00ff7f`
  
- **Estética:** Moderna, tecnológica, com elementos gamificados e efeitos neon

## ✨ Funcionalidades

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Animações suaves ao scroll (IntersectionObserver)
- ✅ Efeitos hover com glow e transformações
- ✅ Sistema de bloqueio/desbloqueio de botões
- ✅ Fluxo obrigatório: cadastro Bullex → liberação de comunidades
- ✅ Elementos gamificados (nível de trader, HUD, stepper)

## 🔄 Fluxo de Uso

1. Usuário acessa a landing page
2. Navega pelas seções explicativas
3. Assiste ao vídeo (placeholder)
4. Visualiza os benefícios
5. Vê os passos gamificados
6. No CTA final:
   - Clica em "Cadastro Bullex" (único ativo)
   - Após clicar, os botões de Telegram e WhatsApp são liberados
   - Pode então acessar as comunidades

## 📝 Personalização

### Links

Edite os links nos componentes:
- `components/FinalCTA.jsx` - Links de cadastro e comunidades
- `components/VideoSection.jsx` - URL do vídeo

### Textos

Todos os textos podem ser editados diretamente nos componentes JSX.

### Cores

As cores estão definidas em `app/globals.css` como variáveis CSS.

## 🚀 Build para Produção

```bash
npm run build
npm start
```

## 📄 Licença

Este projeto foi desenvolvido para uso interno.


