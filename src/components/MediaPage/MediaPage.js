import React, { useState, useEffect } from 'react';
import './MediaPage.css';
import { fetchGenericData, fetchVersionData } from '../../utils/firebaseFunctions';

function MediaPage() {
  const [versionData, setVersionData] = useState();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false)
  const [mediaData, setMediaData] = useState();

  useEffect(() => {
    async function fetchData() {
        try {
            let versionDataTemp;
            let storedVersionData = sessionStorage.getItem('versionData');
            if (storedVersionData) {
                const parsedData = JSON.parse(storedVersionData);
                const currentTime = Date.now();
                const expirationTime = 30 * 60 * 1000;
                //parsedData.timestamp && currentTime - parsedData.timestamp < expirationTime
                if (false) {
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

            if (!mediaData) {
                let mediaData = await fetchGenericData(versionDataTemp, setVersionData, "media");
                setMediaData(mediaData.data);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
            setErrors(true);
        } finally {
            setLoading(false);
        }
    }

    fetchData();
}, [mediaData]);

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
            <div className="info-info">
            </div>
          </div>
          <button title={"To Top"} className="scroll-top-button" onClick={scrollToTop}>UP</button>
        </div>

      </div>
    );
  }

  return (
    <div className="info-page">
      <h1 className="filters-header">MEDIA</h1>
      <div className="info-content">
        <div className="info-main">
          <h1 className="info-header">DIRECTOR'S NOTES</h1>
          <div className="info-info">
          </div>
        </div>
        <button title={"To Top"} className="scroll-top-button" onClick={scrollToTop}>UP</button>
      </div>

    </div>
  );
}

export default MediaPage;
