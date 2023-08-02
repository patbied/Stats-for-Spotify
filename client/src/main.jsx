import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { AuthProvider } from './context/AuthProvider.jsx'
// import {store} from './app/store.js'
// import { Provider } from 'react-redux'
// import './css/bootstrap.min.css'
import './css/mycss.css'
const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <AuthProvider> 
      
        <App />
      
  </AuthProvider>
  </QueryClientProvider>
  // </React.StrictMode>,
)
