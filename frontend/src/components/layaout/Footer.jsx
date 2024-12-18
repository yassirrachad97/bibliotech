import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">À propos</h3>
            <p className="text-amber-200">
              Votre bibliothèque virtuelle pour découvrir et gérer vos livres préférés.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-amber-200">À propos</a></li>
              <li><a href="/contact" className="hover:text-amber-200">Contact</a></li>
              <li><a href="/terms" className="hover:text-amber-200">Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-amber-200">Email: contact@bibliotheque.fr</p>
            <p className="text-amber-200">Tél: (123) 456-7890</p>
          </div>
        </div>
        <div className="border-t border-amber-800 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Ma Bibliothèque. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}