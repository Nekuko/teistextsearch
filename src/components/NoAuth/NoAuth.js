import React from 'react';
import './NoAuth.css';
import NuNoAuth from '../../images/icons/NuNoAuth.webp'

function NoAuth() {
  return (
    <div className="noauth">
      <img src={NuNoAuth} alt="NuNoAuth" className="nu-logo" />
      <h1>Not authorised.</h1>
    </div>
  );
}

export default NoAuth;
