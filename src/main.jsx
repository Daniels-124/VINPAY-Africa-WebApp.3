import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import './components/styles/Navbar.css'
import './components/styles/HeroSection.css'
import './components/styles/Features.css'
import './components/styles/HowItWorks.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
