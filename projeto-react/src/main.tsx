import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

//Alterar este arquico para usar rotas
//É importante envolver a aplicação com BrowserRouter para habilitar o roteamento com React Router
//StrictMode ajuda a identificar problemas pontencialmente perigosos no código durante o desenvolvimento
//createRoot é a nova API do React 18 para renderizar a aplicação na raiz do DOM
//importar global css para estilização geral da aplicação
