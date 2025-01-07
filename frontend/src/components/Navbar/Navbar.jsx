import React from "react";
import { useAuth } from "react-oidc-context";

function Navbar() {
  const auth = useAuth();



  const signOutRedirect = () => {
    auth.removeUser();
    const clientId = "4hc3tbougdmom12gi2349ni01g";
    const logoutUri = "http://localhost:5173/";
    const cognitoDomain = "https://us-east-1bixyxci9j.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };


  return (
    <nav className="bg-blue-600 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
      
        <div className="text-xl font-bold">
          <a href="/">Bibliothèque</a>
        </div>

      
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="hover:text-yellow-300">
              Accueil
            </a>
          </li>
          <li>
            <a href="/books" className="hover:text-yellow-300">
              Livres
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-yellow-300">
              About
            </a>
          </li>
         
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {auth.isLoading ? (
            <span>Chargement...</span>
          ) : auth.isAuthenticated ? (
            <>
              <span className="hidden sm:inline">{auth.user?.profile.email}</span>
              <button
                className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                onClick={signOutRedirect}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              onClick={() => auth.signinRedirect()}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
