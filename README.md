# TMT - Transfer Milano Transportation

Site de serviço de transfer e turismo privado em Milão, Itália.

**Website**: [tmtransferlux.it](https://tmtransferlux.it)

---

## 📋 Sobre o Projeto

TMT (Transfer Milano Transportation) é um site multilíngue para serviços de transfer privado de/para aeroportos de Milão (Malpensa, Linate, Bergamo) e tours turísticos pela região da Lombardia.

### Funcionalidades Principais

- **Transfer Aeroporto**: Preços fixos para transfers de/para Malpensa, Linate e Bergamo
- **Tours Turísticos**: Lago di Como, Lago Maggiore, San Siro e outros destinos
- **Multi-idioma**: Suporte para Italiano (IT), Inglês (EN), Português (PT) e Francês (FR)
- **Calculadora de Preços**: Ferramenta para calcular preventivos de transfer
- **Intro Animada**: Animação "Welcome to TMT" estilo Apple no primeiro acesso
- **SEO Otimizado**: Structured data, meta tags e hreflang para múltiplos idiomas

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **Vite** | Build tool rápido para desenvolvimento |
| **React 18** | Biblioteca de UI |
| **TypeScript** | Tipagem estática |
| **Tailwind CSS** | Framework CSS utility-first |
| **shadcn/ui** | Componentes de UI acessíveis |
| **React Router DOM** | Roteamento SPA |
| **Framer Motion** | Animações |
| **Lucide React** | Ícones |
| **React Hook Form + Zod** | Formulários e validação |

---

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Imagens e logos
├── components/       # Componentes React
│   ├── ui/           # Componentes shadcn/ui
│   ├── Header.tsx    # Cabeçalho do site
│   ├── Footer.tsx    # Rodapé
│   ├── WelcomeIntro.tsx  # Animação de boas-vindas
│   └── LanguageSelector.tsx  # Seletor de idioma
├── contexts/         # Contextos React (LanguageContext)
├── hooks/            # Custom hooks
├── lib/              # Utilitários
├── locales/          # Traduções (translations.ts)
├── pages/            # Páginas do site
│   ├── Index.tsx     # Homepage
│   ├── Transfers.tsx # Página de transfers
│   ├── TouristTours.tsx  # Tours turísticos
│   ├── NostriVeicoli.tsx # Nossos veículos
│   ├── ChiSiamo.tsx  # Quem somos
│   ├── Contact.tsx   # Contato
│   ├── CalcoloPreventivo.tsx  # Calculadora de preços
│   ├── MilanoTariffe.tsx  # Tarifas Milano
│   └── MilanoPremiumMobility.tsx  # Página premium
└── index.css         # Estilos globais e tema
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/lovableatheris-sketch/milan-sightseeing-chauffeur.git

# Entrar no diretório
cd milan-sightseeing-chauffeur

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:8080`

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Visualiza build de produção |
| `npm run lint` | Executa ESLint |

---

## 🌐 Sistema de Idiomas

O site suporta 4 idiomas através do `LanguageContext`:

- 🇮🇹 **Italiano** (padrão)
- 🇬🇧 **English**
- 🇧🇷 **Português**
- 🇫🇷 **Français**

As traduções estão em `src/locales/translations.ts`.

---

## ⚠️ Notas sobre Erros de Lint

O projeto pode mostrar alguns avisos/erros de lint que **NÃO afetam a funcionalidade**:

1. **`no-empty` (2 ocorrências)**: Blocos catch vazios em `WelcomeIntro.tsx` - usado intencionalmente para ignorar erros de sessionStorage
2. **`no-empty-object-type` (2 ocorrências)**: Interfaces vazias nos componentes shadcn/ui - padrão do shadcn
3. **`react-refresh/only-export-components` (8 avisos)**: Arquivos que exportam constantes junto com componentes - não afeta produção
4. **`no-require-imports`**: Uso de require() no `tailwind.config.ts` - necessário para plugins Tailwind

Esses são problemas de **estilo de código**, não de funcionalidade. O site funciona normalmente.

---

## 📱 Contato

- **WhatsApp**: +39 389 143 0907
- **Email**: thomastagliatti2022@gmail.com

---

## 📄 Licença

Projeto privado - TMTransferLux © 2024
