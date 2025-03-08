# Redux Explorer

![Redux Explorer](https://github.com/user-attachments/assets/658840bd-2e49-49f0-bfcb-29447f6b8caa)

## 🚀 Live Demo
🔗 [Redux Explorer](https://redux-explorer.vercel.app/)

## 📌 About the Project
Redux Explorer is a simple yet powerful demonstration of state management using **Redux Toolkit** in a React application. It provides a counter with increment, decrement, multiplication, and reset functionalities, showcasing the core concepts of Redux state management.

## 🛠️ Built With
- **React.js** - Frontend JavaScript library
- **Redux Toolkit** - State management solution
- **Tailwind CSS** - Styling framework for modern UI design
- **Vercel** - Hosting platform for deployment

## 🎯 Features
- 🔼 **Increment** - Increases the counter by 1
- 🔽 **Decrement** - Decreases the counter by 1
- ✖ **Multiply by 2** - Multiplies the counter value by 2
- 🔄 **Reset** - Resets the counter to the initial value

## 📂 Project Structure
```
Redux-Explorer/
│-- src/
│   ├── components/        # Reusable UI components
│   ├── Redux/             # Redux store and slices
│   ├── App.jsx            # Main application entry point
│   ├── index.js           # React DOM rendering
│-- public/                # Static assets
│-- package.json           # Project dependencies and scripts
│-- README.md              # Documentation file
```

## 🛠️ Installation & Setup
Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/theashrafislam/redux-explorer.git
cd redux-explorer
```

### 2️⃣ Install Dependencies
```bash
npm install  # or yarn install
```

### 3️⃣ Install Redux Toolkit & React-Redux
```bash
npm install @reduxjs/toolkit react-redux  # or yarn add @reduxjs/toolkit react-redux
```

### 4️⃣ Run the Development Server
```bash
npm run dev  # or yarn dev
```

The application will be available at `http://localhost:5173/` (if using Vite) or `http://localhost:3000/` (if using CRA).

## 🏗️ State Management (Redux Toolkit)
This project uses Redux Toolkit to manage the global state. The store and slices are structured as follows:

### **Redux Store (`store.js`)**
```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

### **Counter Slice (`counterSlice.js`)**
```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value *= action.payload; },
    reset: (state) => { state.value = 0; },
  },
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

## 📜 How to Contribute
1. **Fork** the repository.
2. **Create a new branch**: `git checkout -b feature-branch`
3. **Make your changes** and commit: `git commit -m 'Added new feature'`
4. **Push to the branch**: `git push origin feature-branch`
5. **Open a Pull Request** 🎉

## 📄 License
This project is licensed under the **MIT License**.

---

## ✨ Author
Developed by **Ashraful Islam**  
🌐 Portfolio: [theashrafislam.com](https://theashrafislam.com)  
📧 Email: [hello@theashrafislam.com](mailto:hello@theashrafislam.com)  
🔗 LinkedIn: [Ashraful Islam](https://www.linkedin.com/in/theashrafislam/)