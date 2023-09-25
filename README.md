# 🌏 React-Native Cultural Exchange Tablet Web App 🌍

## 📋 Overview

This project is a React Native application optimized for tablet devices that serves as a platform for cultural exchange. Leveraging the capabilities of React Native Web, this application is not only suitable for mobile devices but is also fully functional as a web application.

## 🌟 Features

- **📅 Calendar**: Displays events related to cultural exchange, pulled dynamically from a Firebase backend.
- **🔖 Event Cards**: Detailed cards for each event with descriptions, dates, and images.
- **🌙 Dark Mode**: A toggleable dark mode for enhanced usability in different lighting conditions.
- **🗓️ Month Picker**: An intuitive month picker that filters events based on the selected month.
  
## 🛠️ Technologies Used

- React Native
- React Native Web
- Firebase
- Chakra UI
- Ant Design

## 📦 Prerequisites

- Node.js
- npm or bun
- Firebase account

## ⚙️ Installation

1. **📥 Clone the repository:**
    ```bash
    git clone https://github.com/KnownAsMomoVV/tablet-clone-v2.git
    ```

2. **📁 Navigate to the project directory:**
    ```bash
    cd tablet-clone-v2
    ```

3. **🔧 Install dependencies using npm or bun:**
    ```bash
    npm install
    # or
    bun install
    ```

4. **🔐 Set up your Firebase configuration** by creating a `firebaseConfig.js` in the `src` folder and adding your Firebase credentials.

5. **🚀 Run the application:**
    ```bash
    npm start
    # or
    bun start
    ```

## 🚀 Deployment to Vercel

1. **🌐 Export the project for web:**
    ```bash
    npx expo export:web
    ```
  
2. **🌐 Deploy to Vercel** as per your usual workflow.

## ⚙️ Configuration

The application relies on a `DarkModeContext` for dark mode functionality. Update `DarkModeContext.js` for any theme-related changes.

## 🎮 How to Use

1. **📅 Calendar**: Navigate through the calendar to see scheduled events.
2. **🔖 Event Cards**: Click on any event card to see more details.
3. **🌙 Dark Mode**: Use the Dark Mode toggle to switch between themes.
4. **🗓️ Month Picker**: Use the month picker to filter events by month.

## 👥 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📜 License

This project is licensed under the MIT License. See `LICENSE` for more information.
