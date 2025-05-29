# NFT Marketplace

A modern NFT (Non-Fungible Token) marketplace built with React, TypeScript, and Vite. This platform enables users to explore, buy, sell, and trade unique digital assets and collectibles in a secure and user-friendly environment.

## 🚀 Features

- **Modern UI/UX Design**: Clean and intuitive interface for seamless user experience
- **Secure Authentication**: User authentication and authorization system
- **NFT Management**: Create, buy, sell, and trade NFTs
- **Wallet Integration**: Connect and manage crypto wallets
- **Smart Search**: Advanced search and filtering capabilities
- **Responsive Design**: Fully responsive across all devices
- **Real-time Updates**: Live price updates and notifications
- **Form Validation**: Secure form handling with Formik and Yup
- **Type Safety**: Full TypeScript implementation for robust development
- **State Management**: Centralized state management with Redux
- **Beautiful UI**: Modern styling with SCSS modules

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM 7
- **API Client**: Axios
- **Form Management**: Formik with Yup
- **Styling**: SCSS/Sass
- **Icons**: Lucide React
- **Notifications**: React Toastify
- **Development**: ESLint, TypeScript

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 📁 Project Structure

```
.
├── public/                # Static public assets
│   └── vite.svg          # Vite logo
├── src/
│   ├── api/              # API integration and services
│   ├── assets/           # Project assets
│   │   ├── fonts/        # Custom fonts
│   │   ├── icons/        # Icon assets
│   │   ├── images/       # Image assets
│   │   └── react.svg     # React logo
│   ├── components/       # Reusable components
│   │   └── forms/        # Form components
│   ├── hooks/            # Custom React hooks
│   ├── Layout/           # Layout components
│   ├── pages/            # Page components
│   ├── shared/           # Shared resources
│   │   ├── constants/    # Constants and enums
│   │   ├── data/         # Static data
│   │   └── types/        # TypeScript types
│   ├── store/            # Redux store
│   │   ├── store.ts      # Store configuration
│   │   └── slices/       # Redux slices
│   ├── styles/           # Global styles
│   │   ├── _mixins.scss  # SCSS mixins
│   │   ├── _variables.scss # SCSS variables
│   │   └── reset.scss    # CSS reset
│   ├── utils/            # Utility functions
│   ├── index.css         # Root CSS
│   ├── main.tsx          # App entry point
│   ├── router.ts         # Route definitions
│   └── vite-env.d.ts     # Vite type declarations

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

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Lint code with ESLint
- `npm run preview` - Preview production build locally

## 🔧 Configuration Files

- **vite.config.ts** - Vite configuration
- **tsconfig.json** - TypeScript configuration
- **eslint.config.js** - ESLint configuration
- **package.json** - Project dependencies and scripts

## 🔒 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_API_URL=your_api_url
VITE_WALLET_NETWORK=mainnet_or_testnet
VITE_CONTRACT_ADDRESS=your_contract_address
```

## 🧪 Directory Details

- **api/**: API integration layer with backend services
- **assets/**: Static files like images, fonts, and icons
- **components/**: Reusable UI components
- **hooks/**: Custom React hooks for shared logic
- **Layout/**: Layout components and templates
- **pages/**: Page components with routing
- **shared/**: Shared utilities, types, and constants
- **store/**: Redux store configuration and slices
- **styles/**: Global styles, variables, and mixins
- **utils/**: Helper functions and utilities

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
