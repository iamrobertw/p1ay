# Mobile App Demo with React Native and Expo

A simple demo application built with React Native and Expo, featuring form validation, API integration, and animations.

## Features

- 📱 Three distinct screens with different functionalities
- 🔄 Navigation between screens
- 📝 Form with validation using Yup and React Hook Form
- 🌐 API integration with React Query
- ✨ Animations with Moti
- 🎨 Styled with Tailwind CSS (twrnc)
- 🌓 Light/dark mode support

## Screens

1. **Home Screen**:

   - App title
   - Navigation buttons with icons

2. **Form Screen**:

   - Form with name and email fields
   - Form validation
   - Success message on valid submission

3. **Quotes Screen**:
   - Random quote fetched from API
   - Loading state and error handling
   - Generate new quote button
   - Auto-refresh feature
   - Animated quote appearance

## Technologies Used

- Expo Router for navigation
- React Query for data fetching
- Yup for form validation
- React Hook Form for form management
- Tailwind CSS (twrnc) for styling
- Moti for animations

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository
2. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

3. Start the development server:

   ```
   npm start
   ```

   or

   ```
   yarn start
   ```

4. Open the app on your device using Expo Go app by scanning the QR code, or run on an emulator.

## Project Structure

```
src/
├── app/              # App screens
│   ├── _layout.jsx   # Root layout with navigation setup
│   ├── index.jsx     # Home screen
│   ├── form.jsx      # Form screen
│   └── quotes.jsx    # Quotes screen
├── components/       # Reusable components
│   ├── Button.jsx
│   └── ScreenHeader.jsx
└── utils/            # Utility functions and configuration
    ├── api.js        # API service
    ├── queryClient.js # React Query setup
    ├── tw.js         # Tailwind setup
    └── validationSchema.js # Form validation schema
```

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
