import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "react-oidc-context";


const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_oqNfCbxDA",
  client_id: "4ho4ntrl0hniluavp3nf21su71",
  redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope: "phone openid email",
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
    <App />
    </AuthProvider>
  </StrictMode>,
)
