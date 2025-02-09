import { createRoot } from 'react-dom/client'
import './assets/styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <App />
)
