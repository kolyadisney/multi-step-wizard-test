# Multi-Step Wizard Form

A modern, responsive multi-step form wizard built with React, Material-UI, and TypeScript. Features a sleek design, form validation, and a smooth user experience.

![Multi-Step Wizard Demo](demo.gif)

## 🚀 Features

- **Multi-step Form Navigation**: Intuitive step-by-step form progression
- **Form Validation**: Real-time validation using Zod
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Dark Mode Support**: Built-in light/dark theme support
- **Animated Transitions**: Smooth animations using Framer Motion
- **Type Safety**: Built with TypeScript for robust type checking
- **Modern UI**: Material-UI v7 components with custom styling

## 🛠 Tech Stack

- React 19
- TypeScript
- Material-UI v7
- Framer Motion
- React Hook Form
- Zod
- Zustand
- Vite
- ESLint + Prettier

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/multi-step-wizard.git
cd multi-step-wizard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
src/
├── components/
│   ├── form/
│   │   ├── form-factory/
│   │   └── form-text-field/
│   ├── steps/
│   │   ├── step-account-details/
│   │   ├── step-address-details/
│   │   ├── step-review/
│   │   └── step-user-details/
│   ├── wizard/
│   └── wizard-stepper/
├── constants/
├── store/
├── theme/
└── validation/
```

## 🎯 Component Overview

### Form Factory
A flexible form generator that handles:
- Form state management
- Field validation
- Error handling
- Custom field rendering

### Wizard Navigation
Handles step navigation with features like:
- Progress tracking
- Step validation
- Back/Next navigation
- Completion handling

### Form Fields
Custom form fields with:
- Material-UI integration
- Error states
- Icon support
- Password visibility toggle

## 🔒 Form Validation

Form validation is handled using Zod schemas. Each step has its own validation schema:

- Account Details: Username and password validation
- Address Details: Address field validation
- User Details: Personal information validation

## 🎨 Theming

The project uses Material-UI's theming system with:
- Custom color palette
- Dark/Light mode support
- Responsive typography
- Custom component styles

## 📱 Responsive Design

The wizard is fully responsive with:
- Mobile-first approach
- Adaptive layouts
- Touch-friendly inputs
- Responsive typography

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Material-UI team for the amazing component library
- React Hook Form for the powerful form management
- Framer Motion for the smooth animations
