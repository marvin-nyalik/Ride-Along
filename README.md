# Ride-Along
**Ride-Along** is a ride-hailing mobile application built using React Native and Expo. Inspired by platforms like Uber, this app enables users to select their current location and desired destination, view nearby drivers on an interactive map, and choose a driver to complete their ride. The app leverages Expo’s server capabilities to handle API routes, ensuring a smooth and responsive user experience.

## Features

- **Location Selection:** Users can easily set their pick-up and drop-off points using the app’s interface.
- **Driver Availability:** The app shows available drivers nearby on a real-time map.
- **Driver Selection:** Users can review and select their preferred driver from the list of nearby options.
- **User-Friendly Interface:** The app is designed to be intuitive and easy to navigate, with a focus on user experience.

## Technologies Used

- **Frontend:**
  - **React Native**: For building the mobile application.
  - **Expo**: To streamline development and manage the app’s lifecycle.
  - **React Navigation**: For managing in-app navigation.
  - **Map APIs (e.g., Google Maps)**: To display maps and handle geolocation services.
  - **Zustand**: For efficient and simple state management.

- **Backend:**
  - **Expo Server Capabilities**: To handle API routes and backend logic within the Expo ecosystem.

## Installation and Setup

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.
- **Expo CLI**: For running and managing the React Native application.
- **Google Maps API Key**: Obtain an API key for using map services.

### Steps to Run the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/marvin-nyalik/Ride-Along.git
   cd ride-along
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the root directory and add your Google Maps API key.
   - Example `.env`:
     ```env
     EXPO_PUBLIC_GOOGLE_API_KEY=your_google_maps_api_key
     ```

4. **Start the Application:**
   ```bash
   npx expo start -c --tunnel
   ```

5. **Run on a Device or Simulator:**
   - Scan the QR code using the Expo Go app on your device, or run the app on an iOS or Android emulator.

## API Routes

- **User Location:** Handles user location data, including latitude, longitude, and address.
- **Driver Data:** Manages the retrieval and display of nearby drivers.
- **Ride Management:** Handles the logic for selecting a driver and managing ride details.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to suggest improvements or report bugs.

## License

This project is licensed under the MIT License.

