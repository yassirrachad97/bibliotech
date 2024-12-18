export default function BookActions({ onDetailsClick }) {
    return (
      <button 
        onClick={onDetailsClick}
        className="text-amber-600 hover:text-amber-800 transition-colors"
      >
        Détails
      </button>
    );
  }