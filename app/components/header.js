/**
 *
 * App.js
 *
 */
import React from 'react';

class header extends React.Component {
  render() {
    // Dans tous les cas, afficher, générer un txt
    return <div className="header" >Machine1{this.props.number }</div>

  }
}

// Le composant sera accessible avec le nom "Machine"
export default header;
