// ImagePreview.js
import React, { useState } from 'react';
import './ImagePreview.css'; // Import the CSS file

function ImagePreview({ src, position }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="image-preview-content" style={{ top: position.top, left: position.left }}>
      <img src={src} alt="Preview" onLoad={handleImageLoad} style={{ boxShadow: isLoaded ? '0px 0px 8px 6px #c8000f' : 'none' }} />
    </div>
  );
}

export default ImagePreview;
