# NFT Marketplace

A modern NFT marketplace built with React, TypeScript, and Vite where users can buy, sell, and trade unique digital assets and collectibles.

## 🚀 Features

- Modern UI/UX design
- Responsive layout
- Redux state management
- Form validation with Formik and Yup
- Type-safe development with TypeScript
- SCSS modules for styling
- React Router for navigation
- Axios for API requests
- Toast notifications

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Language**: TypeScript 5.8
- **State Management**: Redux Toolkit
- **Styling**: SCSS/Sass
- **UI Components**: Custom components with Lucide React icons
- **Form Handling**: Formik with Yup validation
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Development Tools**: ESLint, TypeScript ESLint

## 📁 Project Structure

```
src/
├── api/            # API integration and services
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # Reusable UI components
├── constants/      # Constants and configurations
├── data/          # Static data and mock data
├── helpers/        # Helper functions and utilities
│   ├── _mixins.scss   # SCSS mixins
│   ├── _variables.scss # SCSS variables
│   └── reset.scss     # CSS reset
├── hooks/         # Custom React hooks
├── Layout/        # Layout components
├── pages/         # Page components
├── store/         # Redux store setup and slices
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── validations/   # Form validation schemas
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nft-marketplace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint

## 🔧 Configuration

- **TypeScript**: Configured with strict mode and modern features
- **ESLint**: Extended configuration with TypeScript and React support
- **Vite**: Optimized build setup with HTTPS support via mkcert
- **SCSS**: Global variables and mixins auto-imported

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
