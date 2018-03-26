/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import footer from '../../components/footer.js';
import header from '../../components/header.js';

// On peut aussi importer du CSS de la meme facon.
import '../../CSS/style.css';

export default function App() {
  return (
      <div className="machine">
      <Machine number="1"  isActive="yes" title="je suis une Poule ?"/>
      <Machine number="2"  isActive="no" title="je suis un Dindon ?"/>
      <Machine number="3"  isActive="no" title="je suis un Vache ?"/>
      <Machine number="4"  isActive="no" title="je suis un Mouton ?"/>
      
    </div>
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.
  
  );
}
