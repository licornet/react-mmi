/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  render() {
    // Dans tous les cas, afficher, générer un txt
    return <p>Pourquoi,  {this.props.title } {this.props.isActive } {this.props.number }</p>
    

  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
