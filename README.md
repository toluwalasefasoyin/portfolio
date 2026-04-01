# Tolu Fasoyin — Software Engineer Portfolio

A modern, professional portfolio website showcasing my journey as a Software Engineering student and aspiring full-stack developer. Built with React, TypeScript, and Vite for a fast, responsive, and visually compelling user experience.

## 🎯 About

This portfolio highlights my expertise in building full-stack applications using Java, Spring Boot, React, and modern web technologies. It features my professional projects, technical skills, and provides a direct line to connect with me for internship and collaboration opportunities.

## ✨ Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, sophisticated interface with smooth animations and transitions
- **Project Showcase**: Detailed presentation of key projects with links to live demos and GitHub repositories
- **Skills Directory**: Organized categorization of technical expertise across languages, frameworks, tools, and concepts
- **Resume Integration**: Easy access to download or view my complete resume
- **Contact Section**: Multiple contact channels including email, LinkedIn, and GitHub
- **Performance Optimized**: Built with Vite for lightning-fast load times and development experience

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite 8.0.3
- **Routing**: React Router DOM
- **Animations**: Framer Motion (ready for implementation)
- **Typography**: Google Fonts (Syne, DM Sans)
- **Deployment**: GitHub, Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/toluwalasefasoyin/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The optimized build will be generated in the `dist/` directory.

## 📁 Project Structure

```
src/
  ├── components/      # Reusable React components
  │   ├── Navbar.tsx   # Navigation header
  │   ├── Hero.tsx     # Hero section with CTA buttons
  │   ├── About.tsx    # About me section with stats
  │   ├── Projects.tsx # Project showcase grid
  │   ├── Skills.tsx   # Technical skills categorized
  │   └── Contact.tsx  # Contact information
  ├── data/            # Static data and content
  │   └── index.ts     # Projects and skills data
  ├── App.tsx          # Main application component
  └── main.tsx         # React entry point
```

## 🎨 Design Features

- **Color Scheme**: Midnight Blue (#0f172a) with Teal (#0d9488) accents
- **Animations**: Fade-up effects on scroll, parallax mouse-follow interactions
- **Typography**: Professional font pairing optimized for readability
- **Accessibility**: Semantic HTML and keyboard navigation support

## 📞 Connect With Me

- **Email**: [toluwalasefasoyin13@gmail.com](mailto:toluwalasefasoyin13@gmail.com)
- **LinkedIn**: [linkedin.com/in/toluwalasefasoyin](https://linkedin.com/in/toluwalasefasoyin)
- **GitHub**: [github.com/toluwalasefasoyin](https://github.com/toluwalasefasoyin)
- **Resume**: Available on the portfolio website

## 🌍 Live Demo

Visit my portfolio at: [portfolio.vercel.app](https://portfolio.vercel.app)

## 📝 License

This project is open source and available under the MIT License.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
