import React, { useState, useEffect } from 'react';
import './MediaPage.css';
import { fetchGenericData, fetchVersionData, fetchGenericImages } from '../../utils/firebaseFunctions';
import ImageGrid from './ImageGrid';
import ImageOverlay from './ImageOverlay';

function MediaPage() {
  const [versionData, setVersionData] = useState();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false)
  const [mediaData, setMediaData] = useState();

  const [imageOpen, setImageOpen] = useState(false);
  const [imageData, setImageData] = useState({});

  useEffect(() => {
    if (!imageOpen) {
      setImageData({});
    }
  }, [imageOpen]);

  useEffect(() => {
    async function fetchData() {
      try {
        let versionDataTemp;
        let storedVersionData = sessionStorage.getItem('versionData');
        if (storedVersionData) {
          const parsedData = JSON.parse(storedVersionData);
          const currentTime = Date.now();
          const expirationTime = 30 * 60 * 1000;
          if (parsedData.timestamp && currentTime - parsedData.timestamp < expirationTime) {
            // Data is still valid, use it
            setVersionData(parsedData.data);
            versionDataTemp = parsedData.data;
          } else {
            // Fetch new data
            const data = await fetchVersionData(versionData);
            versionDataTemp = data;
            setVersionData(data);
            sessionStorage.setItem('versionData', JSON.stringify({ data, timestamp: currentTime }));
          }
        } else {
          // Fetch data if not found in session storage
          let data = await fetchVersionData(versionData);
          versionDataTemp = data;
          setVersionData(data);
          sessionStorage.setItem('versionData', JSON.stringify({ data, timestamp: Date.now() }));
        }

        let mediaData;
        if (!mediaData) {
          mediaData = await fetchGenericData(versionDataTemp, setVersionData, "media");
          setMediaData(mediaData.data);
        }

        let savedMediaImages = sessionStorage.getItem('mediaImages');
        if (savedMediaImages) {
          savedMediaImages = JSON.parse(savedMediaImages);
        }
        let urls = Object.values(mediaData.data.notes).filter(item => item.jp_image).map(item => item.jp_image)

        if (mediaData.versionUpdated || Object.keys(savedMediaImages).length === 0 || savedMediaImages === null) {
          let imageURLS = await fetchGenericImages(urls, "notes");
          setMediaImages(imageURLS);
          sessionStorage.setItem("mediaImages", JSON.stringify(imageURLS));
        }
        

      } catch (error) {
        console.error('Error fetching data:', error);
        setErrors(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const [mediaImages, setMediaImages] = useState(() => {
    const savedState = sessionStorage.getItem('mediaImages');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      return parsedState;
    }
    return {}
  });

  useEffect(() => {
    sessionStorage.setItem('mediaImages', JSON.stringify(mediaImages));
  }, [mediaImages]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading || errors) {
    return (
      <div className="info-page">
        <h1 className="filters-header">MEDIA</h1>
        <div className="info-content">
          <div className="info-main">
            <h1 className="info-header">DIRECTOR'S NOTES</h1>
            <div className="notes-container">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="note-item empty-item"></div>
              ))}
              <br/>
            </div>
          </div>
          <button title={"To Top"} className="scroll-top-button" onClick={scrollToTop}>UP</button>
        </div>
      </div>
    );
  }

  function manageImageData(data, reference) {
    if (reference === 'notes') {
      setImageData({full: data.full, specific: data.specific, original: mediaData.notes});
    setImageOpen(true);
    }
  }

  return (
    <div className="info-page">
      <h1 className="filters-header">MEDIA</h1>
      <div className="info-content">
        <div className="info-main">
          <h1 className="info-header">DIRECTOR'S NOTES</h1>
          <ImageGrid data={mediaData.notes} mediaImages={mediaImages} manageImageData={manageImageData}/>
        </div>
        <button title={"To Top"} className="scroll-top-button" onClick={scrollToTop}>UP</button>
      </div>
      {imageOpen && (
        <ImageOverlay images={mediaImages} fullImageData={imageData} imageOpen={imageOpen} setImageOpen={setImageOpen} />
      )}
    </div>
  );
};

export default MediaPage;