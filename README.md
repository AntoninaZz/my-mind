
# My Mind Memory Game

## Project Overview
"My Mind" is a memory training mobile app built with React Native and Expo. The app includes a memory game where users must remember and match pairs of cards. Additionally, the app integrates with SDKs such as Appsflyer, Firebase, and OneSignal for analytics, push notifications, and tracking.
  
- **Data Storage**: Utilizes `AsyncStorage` to store user data on the device.

- **Geolocation-Based Content Display**:
  - If the user is in **Ukraine**, the main game content is displayed.
  - If the user is outside of **Ukraine**, a webview with Wikipedia is shown.

- **Game Logic**:
  - A memory game where users are shown cards briefly, and they must remember their positions to match pairs.
  - The game is passed when all card pairs are matched correctly.

## Technologies Used
- **React Native**: Framework for building the mobile app.
- **Expo**: Development tool for React Native apps.
- **Appsflyer SDK**: For app tracking.
- **Firebase SDK**: For backend services and analytics.
- **OneSignal SDK**: For push notifications.
- **AsyncStorage**: To persist data locally on the device.
- **React Navigation**: For screen navigation.

## Important Notes:
- The project includes placeholders for Appsflyer, Firebase, and OneSignal SDKs. Replace the fake keys and IDs with your actual credentials for production use.