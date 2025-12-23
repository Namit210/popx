# PopX

A modern React-based mobile app UI built with Vite, featuring user authentication flow with smooth page transitions.

## Features

- **Welcome Screen** - Landing page with options to create account or login
- **Account Creation** - Multi-field registration form with validation
- **Login** - Email/password authentication with button activation on form completion
- **Account Settings** - User profile display with dynamic data from registration/login
- **Smooth Transitions** - Fade animations between screen changes
- **Custom Components** - Reusable styled input fields and buttons

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool with HMR
- **React Router DOM** - Client-side routing and navigation
- **CSS** - Custom styling with Rubik font

## Project Structure

```
src/
├── components/
│   ├── CustButton.jsx    # Reusable button component
│   └── StyledInput.jsx   # Floating label input component
├── pages/
│   ├── Home.jsx          # Welcome/landing page
│   ├── Create.jsx        # Account creation form
│   ├── Login.jsx         # Login form
│   └── Settings.jsx      # Account settings/profile
├── assets/               # Images and icons
├── App.jsx               # Main app with routing
├── App.css               # Global styles and animations
└── main.jsx              # Entry point
```

## Navigation Flow

1. **Home** (`/`) → Welcome screen
2. **Create Account** (`/create`) → Registration form → Settings
3. **Login** (`/login`) → Login form (activates when fields filled) → Settings
4. **Settings** (`/settings`) → Displays user name and email from form data

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Components

### StyledInput
Floating label input field with customizable styles.
```jsx
<StyledInput 
  label="Email" 
  placeholder="Enter email" 
  type="email"
  name="email"
  value={value}
  onChange={handleChange}
  req={true}
  asterisk="show"
/>
```

### CustButton
Customizable button component with onClick support.
```jsx
<CustButton color="#6C25FF" onClick={handleClick}>
  Submit
</CustButton>
```

## License

MIT
