# PassNest - Password Manager

A modern, secure, and user-friendly password manager built with React and Vite. PassNest helps you store, manage, and organize your passwords safely with a clean, intuitive interface.

![PassNest Logo](https://img.shields.io/badge/PassNest-Password%20Manager-blue?style=for-the-badge&logo=shield&logoColor=white)

## 🚀 Features

### Core Functionality

- **🔐 Secure Password Storage** - Store passwords safely in browser's localStorage
- **➕ Add Passwords** - Easy form to add new website credentials
- **✏️ Edit Passwords** - Update existing passwords with a single click
- **🗑️ Delete Passwords** - Remove passwords with confirmation dialog
- **👁️ Password Visibility Toggle** - Show/hide passwords individually
- **🔍 Smart Truncation** - Website names limited to 12 words to prevent UI overflow

### User Experience

- **📱 Responsive Design** - Works seamlessly on desktop and mobile
- **🎨 Clean Interface** - Modern light theme with professional styling
- **⚡ Fast Performance** - Built with Vite for optimal speed
- **🔄 Real-time Updates** - Changes reflect immediately
- **💾 Persistent Storage** - Data persists across browser sessions

### Security Features

- **🔒 Local Storage** - Passwords stored locally on your device
- **🛡️ No External Servers** - Complete privacy and control
- **✅ Form Validation** - Ensures all required fields are filled
- **⚠️ Confirmation Dialogs** - Prevents accidental deletions

## 🛠️ Technologies Used

- **Frontend Framework:** React 19.1.0
- **Build Tool:** Vite 7.0.3
- **Styling:** Tailwind CSS 4.1.11
- **Icons:** React Icons 5.5.0
- **Language:** JavaScript (ES6+)

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/password-manager.git
   cd password-manager
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 🎯 Usage Guide

### Adding a New Password

1. Fill in the form at the top of the page:
   - **Website:** Enter the website URL or name
   - **Username:** Enter your username or email
   - **Password:** Enter your password
2. Click **"Add Password"** to save

### Managing Existing Passwords

- **View Password:** Click the eye icon next to any password
- **Edit Password:** Click the edit icon to modify credentials
- **Delete Password:** Click the delete icon and confirm removal

### Form Features

- **Password Visibility:** Toggle password visibility while typing
- **Form Validation:** All fields are required before submission
- **Auto-clear:** Form clears automatically after successful submission

## 📁 Project Structure

```
password_manager/
├── public/
├── src/
│   ├── components/
│   │   ├── Manager.jsx      # Main password manager component
│   │   └── Navbar.jsx       # Navigation bar component
│   ├── App.jsx              # Main application component
│   ├── App.css              # Global styles
│   └── main.jsx             # Application entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔧 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint for code quality

## 🎨 UI Components

### Manager Component

- **Form Section:** Three-column layout for website, username, and password
- **Table Display:** Clean table showing all saved passwords
- **Action Buttons:** Edit and delete functionality for each entry

### Navbar Component

- **Brand Logo:** PassNest branding with shield icon
- **Navigation:** Clean, minimalist navigation bar
- **Responsive:** Adapts to different screen sizes

## 🔐 Security Considerations

- **Local Storage Only:** Passwords are stored locally in your browser
- **No Cloud Sync:** Data never leaves your device
- **Client-Side Only:** No server communication for password data
- **Regular Backups:** Consider exporting your data regularly

## 🌐 Browser Compatibility

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)

## 📱 Responsive Design

PassNest is fully responsive and works on:

- 🖥️ Desktop computers
- 💻 Laptops
- 📱 Tablets
- 📞 Mobile phones

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the excellent framework
- Vite for the fast build tool
- Tailwind CSS for the utility-first styling
- React Icons for the beautiful icons

## 📞 Support

If you have any questions or issues, please:

1. Check the existing issues
2. Create a new issue with detailed description
3. Follow the issue template

---

**Made with ❤️ by Hardik-Raghuvanshi**

_Keep your passwords safe and organized with PassNest!_
