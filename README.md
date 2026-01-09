# Ahmed Eltyeb Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases Ahmed Eltyeb's work as a Front End Web Developer with a clean, professional design and smooth animations.

## 🚀 Live Demo

Check out the live portfolio at: [https://a-eltyeb.github.io/a-eltyeb-portfolio/](https://a-eltyeb.github.io/a-eltyeb-portfolio/)

## ✨ Features

- **Responsive Design**: Works seamlessly across all device sizes
- **Modern UI/UX**: Clean, professional design with attention to detail
- **Smooth Animations**: Framer Motion powered animations for enhanced user experience
- **Dark/Light Mode**: Toggle between color schemes based on user preference
- **Component-Based Architecture**: Modular, reusable components built with shadcn/ui
- **Performance Optimized**: Fast loading times and efficient rendering
- **Accessibility Focused**: Proper semantic HTML and ARIA attributes

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (v18.3.1)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom configurations
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with Radix UI primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: [TanStack Query](https://tanstack.com/query) (React Query)
- **Routing**: [React Router DOM](https://reactrouter.com/)

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact section
│   ├── Experience.tsx   # Experience section
│   ├── Footer.tsx       # Footer component
│   ├── Header.tsx       # Header/Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── Projects.tsx     # Projects section
│   ├── Skills.tsx       # Skills section
│   └── ...              # Other section components
├── pages/               # Page components
│   ├── Index.tsx        # Main page layout
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── assets/              # Static assets (images, etc.)
└── App.tsx              # Main application component
```

## 📋 Sections

- **Hero**: Introduction with profile picture and call-to-action buttons
- **Skills**: Technical skills with animated progress indicators
- **Projects**: Showcase of featured projects with links
- **About**: Personal information and background
- **Experience**: Work experience timeline
- **Testimonials**: Client feedback and recommendations
- **Partners**: Partner companies or technologies marquee
- **Contact**: Contact form and information
- **Footer**: Copyright and additional links

## 🔧 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmedaltyeb/a-eltyeb-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd a-eltyeb-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:8080/a-eltyeb-portfolio/`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run lint` - Lint the codebase
- `npm run preview` - Preview the production build locally
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Customization

### Theme Configuration

The project uses a custom theme defined in `tailwind.config.ts` with CSS variables for colors. You can customize the theme by modifying the CSS variables in `src/index.css`.

### Adding Your Own Content

1. Update the profile image in `src/assets/ahmed-profile.png`
2. Modify content in each section component (About, Experience, Projects, etc.)
3. Update contact information in the Contact component
4. Add your own projects to the Projects component
5. Update the CV file in the `public` directory

### Adding New Skills

Skills are defined in the Skills component. Add or modify skills by updating the skills array in the component.

## 🚀 Deployment

### GitHub Pages

The project is configured for GitHub Pages deployment:

1. Update the `homepage` field in `package.json` if needed
2. Run `npm run deploy` to build and deploy to GitHub Pages

### Other Platforms

The project can be deployed to any static hosting platform (Vercel, Netlify, etc.) by building with `npm run build` and uploading the `dist` folder.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Name**: Ahmed Eltyeb Khalifa
- **Email**: khalifa.ahmedeltyeb@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/ahmed-eltyeb/](https://www.linkedin.com/in/ahmed-eltyeb/)
- **GitHub**: [https://github.com/ahmedaltyeb](https://github.com/ahmedaltyeb)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for the smooth animations
- [Lucide React](https://lucide.dev/) for the consistent icon set
- All the open-source libraries that made this project possible