import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "react-oidc-context";



const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_3dLSBkiYv",
  client_id: "1487qlgi773gpg7gq7sbn3gsa5",
  redirect_uri: "http://localhost:5173/home",
  response_type: "code",
  scope: "email openid phone",
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
    <App />
    </AuthProvider>
  </StrictMode>,
)
