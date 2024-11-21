import React from 'react';
import './MediaPage.css';
import NuNoAuth from '../../images/icons/NuNoAuth.webp'

function MediaPage() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="info-page">
      <h1 className="filters-header">MEDIA</h1>
      <div className="info-content">
        <div className="info-main">
          <h1 className="info-header">DIRECTOR'S NOTES</h1>
          <div className="info-info">
          </div>
        </div>
        <div className="info-main">
          <h1 className="info-header">INTERVIEWS</h1>
          <button title={"To Top"} className="scroll-top-button" onClick={scrollToTop}>UP</button>
        </div>
      </div>

    </div>
  );
}

export default MediaPage;
