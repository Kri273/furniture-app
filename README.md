# Mobile Furniture App (Expo)

This is a mobile application built with **Expo React Native**.
The project focuses on UI, navigation, and app structure.
The application currently does **not use a backend** — most data is hardcoded for demonstration purposes.

## Features

### Splash Screen

* App splash screen when opening the application.

### Authentication (Login / Register)

* Login and Register screens exist.
* Username and password are required.
* Authentication is **not connected to a backend**, so credentials are not validated.
* Some user data is passed to the Profile screen after login.

### Navigation

* Navigation between all screens works.
* Users can move between Home, Favorites, Profile.

### Home Page

* Displays product/listing information.
* Data is currently **hardcoded**.
* No backend integration.

### Favorites

* Users can add/remove favorites.
* Favorites functionality works locally.
* Data is hardcoded.

### Detailed Screen

* Shows more detailed information about a selected item.
* Multiple images are displayed with a carousel indicator.

### Profile

* Displays user profile information.
* Some data comes from the login input.
* Remaining information is hardcoded.

### Settings

* Displays user profile information.
* User data can be edited only locally.
* Some data comes from the login input.
* Remaining information is hardcoded.

### New Listing Page

* Page for adding a new listing exists.
* Adding a listing is currently **hardcoded** (no database or backend).

## Project Status

* App UI completed
* Navigation completed
* No backend
* No database
* No API integration
* Console has no errors

## Technologies Used

- Expo
- React Native
- React
- Expo Router
- React Navigation
- TypeScript
- AsyncStorage
- React Native Reanimated
- React Native Gesture Handler
- React Native SVG
- ESLint

## Installation

1. Install dependencies:

```
npm install
```

2. Start Expo:

```
npx expo start
```

3. Open the app using:

* Expo Go (mobile)
* Android emulator
* iOS simulator

## Author

Kri273

## Notes

This project was created for learning purposes and focuses mainly on frontend mobile development using Expo.
