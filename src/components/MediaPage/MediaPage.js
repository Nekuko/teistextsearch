import React from 'react';
import './MediaPage.css';
import NuNoAuth from '../../images/icons/NuNoAuth.webp'

function MediaPage() {
  return (
    <div className="noauth">
      <img src={NuNoAuth} alt="NuNoAuth" className="nu-logo" />
      <h1>Not authorised.</h1>
    </div>
  );
}

export default MediaPage;
