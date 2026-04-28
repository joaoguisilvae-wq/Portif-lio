# 🎨 Portfólio Pessoal

Um portfólio moderno e interativo construído com **React 19**, **TypeScript** e **Tailwind CSS**. Apresenta suporte multilíngue (Português, Espanhol, Inglês) e animações fluidas com partículas.

## ✨ Features

- 🌍 **Suporte Multilíngue**: Interface disponível em Português, Espanhol e Inglês
- 🎯 **Navegação Intuitiva**: Roteamento completo com React Router v7
- 🎪 **Animações Dinâmicas**: Efeito de partículas interativas na home
- 🎨 **Design Moderno**: Componentes UI customizáveis com shadcn e Tailwind CSS
- 📱 **Responsivo**: Layout adaptável para todos os dispositivos
- ⚡ **Performance**: Otimizado com Vite para build rápido
- 🔤 **Tipagem Completa**: TypeScript para maior segurança

## 🛠️ Tecnologias Utilizadas

- **React** 19.2.4
- **TypeScript** 5.7.2
- **Vite** 6.x
- **Tailwind CSS** 4.2.4
- **React Router DOM** 7.14.1
- **TsParticles** 3.9.1
- **shadcn/ui** - Componentes reutilizáveis
- **Lucide React** - Ícones modernos
- **ESLint** - Linting de código

## 📋 Pré-requisitos

- Node.js 18+
- npm ou pnpm

## 🚀 Como Executar

1. **Clone o repositório**

   ```bash
   git clone https://github.com/joaoguisilvae-wq/Portif-lio.git
   cd Portfolio
   ```

2. **Instale as dependências**

   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

4. **Acesse em seu navegador**
   ```
   http://localhost:5173
   ```

## 📦 Build para Produção

```bash
pnpm build
# ou
npm run build
```

Para visualizar a build localmente:

```bash
pnpm preview
# ou
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ChangeLanguage.tsx    # Seletor de idioma
│   ├── Footer.tsx             # Rodapé
│   ├── Navbar.tsx             # Barra de navegação
│   ├── Home/
│   │   ├── HomeContent.tsx    # Conteúdo da home
│   │   └── Particles.tsx      # Animação de partículas
│   └── ui/
│       └── button.tsx         # Componentes UI
├── Routes/
│   ├── Home.tsx               # Página home
│   ├── About.tsx              # Página sobre mim
│   ├── Projects.tsx           # Página de projetos
│   └── Contact.tsx            # Página de contato
├── assets/
│   ├── locales/               # Arquivos de tradução (i18n)
│   │   ├── pt.json
│   │   ├── en.json
│   │   └── esp.json
│   └── img/                   # Imagens do projeto
├── lib/
│   └── utils.ts               # Funções utilitárias
├── App.tsx                    # Componente principal
├── main.tsx                   # Ponto de entrada
└── index.css                  # Estilos globais
```

## 🎯 Páginas

- **Home** - Apresentação pessoal com animações
- **Sobre Mim** - Informações e experiência
- **Projetos** - Portfólio de trabalhos
- **Contato** - Formulário e informações de contato

## 🌐 Idiomas Suportados

- 🇧🇷 Português (pt)
- 🇬🇧 Inglês (en)
- 🇪🇸 Espanhol (es)

## 📝 Scripts Disponíveis

- `pnpm dev` - Inicia servidor de desenvolvimento
- `pnpm build` - Build para produção
- `pnpm preview` - Visualiza build localmente
- `pnpm lint` - Verifica erros de linting

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com ❤️
