import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './Redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrapping the app with Provider to make the Redux store accessible globally */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
