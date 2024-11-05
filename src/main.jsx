import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContext from './context/AuthContext.jsx'
import Taskcontext from './context/Taskcontext.jsx'




createRoot(document.getElementById('root')).render(
  
  <StrictMode>

    <Taskcontext>
    <AuthContext>
    <App />
    </AuthContext>
    </Taskcontext>
   
    
  </StrictMode>,
)
