/**
 *
 * footer.js
 *
 */
import React from 'react';

class footer extends React.Component {
  render() {
    // Dans tous les cas, afficher, générer un txt
     return <div className="footerr" >Machine1{this.props.number }</div>

  }
}

// Le composant sera accessible avec le nom "Machine"
export default footer;
