# IEEE St. Mary's University Hub Website

A modern, responsive website for the IEEE Student Chapter at St. Mary's University, built with Vite, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, recruiter-friendly design with IEEE branding
- 🌙 Dark/light theme toggle
- 📱 Fully responsive design
- 🚀 Fast loading with Vite
- 📊 Dynamic content from JSON files
- 🔗 Easy GitHub Pages deployment

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ieee-stmu/STMU-IEEE-Hub.git
cd STMU-IEEE-Hub/website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
website/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── data/          # JSON data files
│   ├── types/         # TypeScript type definitions
│   ├── contexts/      # React contexts
│   └── main.tsx       # Application entry point
├── public/            # Static assets
└── dist/              # Build output
```

## Customization

### Adding Members

Edit `src/data/members.json` to add or update member information.

### Adding Projects

Edit `src/data/projects.json` to add or update project information.

### Styling

The website uses Tailwind CSS with custom IEEE colors defined in `tailwind.config.js`:

- Primary Blue: `#00629B`
- Secondary Blue: `#0095C8`
- Accent Yellow: `#FFB81C`
- Dark Gray: `#2E2E2E`
- Light Gray: `#F5F5F5`

## Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The website will be available at: `https://ieee-stmu.github.io/STMU-IEEE-Hub/`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: stmuieee1852@gmail.com
- GitHub: [@StMarys-IEEE](https://github.com/StMarys-IEEE)
- Instagram: [@stmu_ieee](https://www.instagram.com/stmu_ieee/)


