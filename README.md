# 🛍️ Minha Loja

**Minha Loja** é uma aplicação web desenvolvida com **Next.js 13+**, **Tailwind CSS** e **NextUI (HeroUI)**, que consome dados da **FakeStore API** para exibir uma vitrine de produtos. Este projeto foi criado como uma atividade prática para consolidar conhecimentos em desenvolvimento front-end moderno.

## 🔗 Links

- 🔸 Aplicação Online: [https://minha-loja-atualizad.vercel.app](https://minha-loja-atualizad.vercel.app)
- 🔸 Repositório no GitHub: [https://github.com/Nymeriasz/Minha-Loja](https://github.com/Nymeriasz/Minha-Loja)

## 🚀 Tecnologias Utilizadas

- [Next.js 13+](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextUI (HeroUI)](https://www.heroui.com/)
- [FakeStore API](https://fakestoreapi.com/)

## 🧪 API Utilizada

Este projeto consome dados da FakeStore API, uma API pública com produtos fictícios, ideal para prototipagem de e-commerces.

## ✅ Funcionalidades

- Listagem de produtos em tempo real usando a FakeStore API
- Interface moderna e responsiva com Tailwind CSS + NextUI
- Navegação entre páginas com o App Router do Next.js

## 📦 Como Rodar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/Nymeriasz/Minha-Loja.git
```

2. Acesse o diretório do projeto:
```bash
cd Minha-Loja
```

3. Instale as dependências:
```bash
npm install
# ou
yarn install
```
  
4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```
 
5. Acesse no navegador:
```bash
[cd Minha-Loja](http://localhost:3000)
```

## 📁 Estrutura de Pastas (resumida)
```bash
📦Minha-Loja
┣ 📁src/app/       # Diretório principal da aplicação
┃ ┣ 📁components/  # Componentes reutilizáveis (Navbar, Cards, etc.)
┃ ┣ 📁context/     # Contexto global (ex: carrinho)
┃ ┣ 📁login/       # Página de login
┃ ┣ 📁produtos/    # Página de listagem de produtos
┃ ┗ 📁carrinho/    # Página do carrinho

┣ 📁public/              # Arquivos públicos (favicon)
┣ 📄tailwind.config.js   # Configuração do Tailwind CSS
┣ 📄tsconfig.json        # Configuração do TypeScript
┣ 📄next.config.js       # Configuração do Next.js
┗ 📄package.json         # Dependências e scripts do projeto
