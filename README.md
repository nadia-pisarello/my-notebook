# 📝 Notes App

A simple **notes application** built with [Expo](https://expo.dev/) and React Native.  
Allows you to **create, view, edit, and delete notes** directly on your device.

![Expo](https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React%20Native-20232A?logo=react&logoColor=61DAFB)

---

## 📖 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Roadmap](#-roadmap)

---

## ✨ Features

- 📄 Create new notes with title and body
- 👀 View details of each note
- ✏️ Edit a note directly from its detail screen
- ❌ Delete notes
- 💾 _(Coming soon)_ Persist notes with `AsyncStorage`
- 🎨 _(Coming soon)_ Improve UI with custom styles

---

## 📂 Project Structure

```
app/
 ├─ _layout.tsx         # Main navigation layout
 ├─ index.tsx           # Home screen (notes list)
 ├─ new-note.tsx        # Screen to create a new note
 ├─ note/[id].tsx       # Note detail/edit screen
 └─ not-found.tsx       # Not found screen
context/
 └─ note-context.tsx    # Global notes context
components/
 └─ (coming soon)       # Reusable components (e.g., Card, Button)
hooks/
 └─ use-note-provider.ts   # Hook for accessing the notes context
provider/
 └─ note-provider.ts      # Notes provider logic
types/
 └─ note.ts               # Note type definition
```

---

## 🛠️ Tech Stack

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- React Context API & Hooks

---

## ⚡ Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd my-notebook
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Run on your device or emulator**
   - Use the Expo Go app or an emulator to preview the app.

---

## 🗺️ Roadmap

- [ ] Persist notes with `AsyncStorage`
- [ ] Add reusable UI components
- [ ] Improve overall UI/UX
- [ ] Add search and filter functionality
- [ ] Implement note categories or tags

---

Feel free to contribute or suggest improvements!
