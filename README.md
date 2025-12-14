# LinguaChat

A real-time multilingual messaging application built with Ionic React that enables seamless communication across 12 different languages with automatic translation.

## 🌟 Features

- **Real-time Translation**: Automatic message translation when languages differ
- **12 Supported Languages**: English, Spanish, French, German, Hindi, Korean, Japanese, Chinese (Simplified), Portuguese, Italian, Russian, Arabic
- **Modern UI**: Clean, iOS-inspired interface with smooth animations
- **Rich Chat Features**: 
  - Online/offline status indicators
  - Read receipts with double checkmarks
  - Message actions (copy, delete)
  - Typing indicators
  - Date dividers
  - Original/translated text toggle
- **Cross-platform**: Built with Ionic React for iOS and Android
- **User Profiles**: Statistics, achievements, and activity tracking
- **Settings**: Comprehensive customization options

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Ionic CLI** (optional, but recommended)
- **Xcode** (for iOS development on macOS)
- **CocoaPods** (for iOS dependencies)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd lingua-chat
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in the terminal).

### 4. Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 Running on iOS

### Prerequisites for iOS

1. **Install CocoaPods** (if not already installed):
   ```bash
   sudo gem install cocoapods
   ```

2. **Install iOS Capacitor Plugin**:
   ```bash
   npm install @capacitor/ios@^7.0.0
   ```

3. **Add iOS Platform**:
   ```bash
   npx cap add ios
   ```

4. **Build the Web Assets**:
   ```bash
   npm run build
   ```

5. **Sync with iOS**:
   ```bash
   npx cap sync ios
   ```

6. **Open in Xcode**:
   ```bash
   npx cap open ios
   ```

   **Important**: Always open the `.xcworkspace` file, not the `.xcodeproj` file!

7. **In Xcode**:
   - Select the "App" scheme
   - Choose a simulator (e.g., iPhone 17, iPhone 17 Pro)
   - Click the Run button (▶) or press `Cmd+R`

### Troubleshooting iOS

If you encounter CocoaPods encoding errors:

```bash
export LANG=en_US.UTF-8
cd ios/App
pod install
```

Or add to your `~/.zshrc`:
```bash
export LANG=en_US.UTF-8
```

## 🔧 Configuration

### Google Translate API (Optional)

For enhanced translation quality, you can configure Google Translate API:

1. Get a Google Cloud API key with Translation API enabled
2. Create a `.env` file in the root directory:
   ```env
   VITE_GOOGLE_TRANSLATE_API_KEY=your_api_key_here
   ```
3. The app will automatically use Google Translate API if the key is provided
4. If no API key is set, the app falls back to MyMemory Translation API

## 📁 Project Structure

```
lingua-chat/
├── src/
│   ├── components/          # Reusable components (Tabs, etc.)
│   ├── context/             # React Context (TranslationContext)
│   ├── data/                # Mock data (chatHistory, contacts)
│   ├── pages/               # Page components
│   │   ├── LoginPage.tsx
│   │   ├── ChatsPage.tsx
│   │   ├── ChatDetailPage.tsx
│   │   ├── SettingsPage.tsx
│   │   ├── ProfilePage.tsx
│   │   └── AboutPage.tsx
│   ├── services/            # Services (translationService)
│   ├── theme/               # Theme variables
│   └── App.tsx              # Main app component
├── ios/                     # iOS native project
├── public/                  # Static assets
├── dist/                    # Build output
└── package.json
```

## 🛠️ Technologies Used

- **Ionic React** - Cross-platform mobile framework
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Capacitor** - Native runtime
- **React Router** - Navigation
- **Ionicons** - Icon library

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test.unit` - Run unit tests
- `npm test.e2e` - Run end-to-end tests

## 🌐 Supported Languages

1. English (en)
2. Spanish (es)
3. French (fr)
4. German (de)
5. Hindi (hi)
6. Korean (ko)
7. Japanese (ja)
8. Chinese Simplified (zh-CN)
9. Portuguese (pt)
10. Italian (it)
11. Russian (ru)
12. Arabic (ar)

## 🎯 Usage

1. **Login**: Enter your name and select your preferred language
2. **Browse Conversations**: View all your conversations in the Messages tab
3. **Start Chatting**: Click on any contact to start or continue a conversation
4. **Automatic Translation**: Messages are automatically translated when languages differ
5. **View Original Text**: Click the info icon to see original/translated text details
6. **Customize**: Use the Settings tab to customize your experience

## 🔍 Key Features Explained

### Translation System
- Messages are automatically translated when sender and receiver speak different languages
- Original text is preserved and can be viewed via info icons
- Uses Google Translate API (if configured) or MyMemory API as fallback

### Message Features
- **Read Receipts**: Double checkmark indicates message has been read
- **Message Actions**: Long-press messages to copy or delete
- **Typing Indicators**: Shows when contacts are typing
- **Date Dividers**: Messages grouped by date for better organization

### Navigation
- Bottom tab bar for easy navigation between Messages, Settings, Profile, and About
- Tab bar automatically hides on login and chat detail pages

## 🐛 Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Clear node_modules and reinstall if needed: `rm -rf node_modules && npm install`

### iOS Build Issues
- Make sure CocoaPods is installed: `pod --version`
- Run `pod install` in the `ios/App` directory
- Always open `.xcworkspace`, not `.xcodeproj`

### Translation Not Working
- Check browser console for errors
- Verify API key is set correctly in `.env` file
- The app will fallback to MyMemory API if Google Translate fails

## 📄 License

This project is part of a course assignment.

## 👥 Author

Created for CSE 518 Project

## 🙏 Acknowledgments

- Ionic Framework
- Google Translate API
- MyMemory Translation API

