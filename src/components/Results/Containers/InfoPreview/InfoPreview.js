// InfoPreview.js
import React, { useState, useEffect } from 'react';
import './InfoPreview.css'; // Import the CSS file

function InfoPreview({ info, position }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (info) {
      setIsLoaded(true);
    }
  }, [info]);

  return (
    <div className="info-preview-content" style={{ top: position.top, left: position.left }}>
      <div dangerouslySetInnerHTML={{ __html: isLoaded ? info : 'Loading...' }} />
    </div>
  );
}

export default InfoPreview;
