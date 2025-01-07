// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Styles globaux
import App from './App'; // Ton composant principal
import { AuthProvider } from 'react-oidc-context'; // Le provider Cognito
import { AppProvider } from './context'; // Le provider du contexte des livres

// Configuration de Cognito
const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_BIXyxCi9J",
  client_id: "4hc3tbougdmom12gi2349ni01g",
  redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope: "phone openid email",
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <AppProvider> 
        <App /> 
      </AppProvider>
    </AuthProvider>
  </StrictMode>
);
