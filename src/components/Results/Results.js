import React, { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import LightNovelCharacterResults from './Containers/LightNovelCharacterResults';
import ContextOverlay from './Containers/ContextOverlay/ContextOverlay';
import LightNovelResults from './Containers/LightNovelResults';
import WebNovelResults from './Containers/WebNovelResults';
import AnimeResults from './Containers/AnimeResults';
import CharacterResults from './Containers/CharacterResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import './Results.css';
import SSCResults from './Containers/SSCResults';
import ESResults from './Containers/ESResults';
import APOResults from './Containers/APOResults';

function Results({ namedCharacters, namedActive, resultsText, setResultsText, results, images, filterState, resultState, setResultState, animeDropdownState, lnDropdownState, wnDropdownState, mogDropdownState, setSearchResults }) {
  const noResults = Object.keys(results).every(key => Object.keys(results[key]).length === 0);

  let lnResults = results && results.ln ? results.ln.ln : null;
  const lnCharacterResults = results && results.lnChar ? results.lnChar.ln : null;
  const wnResults = results && results.wn ? results.wn.wn : null;
  const anResults = results && results.anime ? results.anime.an : null;
  const sscResults = results && results.ssc ? results.ssc.ssc : null;
  const esResults = results && results.es ? results.es.es : null;
  const apoResults = results && results.apo ? results.apo.apo : null;

  const [highlight, setHighlight] = useState(resultState.highlight);
  const [contextOpen, setContextOpen] = useState(false);
  const [contextData, setContextData] = useState({title: "Context"});

  useEffect(() => {
    if (!contextOpen) {
      setContextData({ title: "Context" }); // Reset context data to default
    }
  }, [contextOpen]);

  const toggleHighlight = () => {
    setHighlight(!highlight);
    setResultState(prevState => ({ ...prevState, highlight: !highlight }));
  };

  const resetResults = () => {
    setSearchResults({});
    setResultsText('');
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function manageContextData(data, reference) {
    if (reference === 'ln') {
      let volumeKey = data.volumeKey;
      let chapterKey = data.chapterKey;
      setContextData({reference: reference, title: `${data.volumeTitle}, ${data.chapterTitle}`, surrounding: data.full[volumeKey][chapterKey], current: data.sentence.line});
    } else if (reference === 'wn') {
      let volumeKey = data.volumeKey;
      let chapterKey = data.chapterKey;
      setContextData({reference: reference, title: `${data.volumeTitle}, Chapter ${chapterKey} | ${data.chapterTitle}`, surrounding: data.full[volumeKey][chapterKey], current: data.sentence.line});
    } else if (reference === 'an') {
      let seasonKey = data.seasonKey;
      let episodeKey = data.episodeKey;
      setContextData({reference: reference, title: `${data.seasonTitle}, Episode ${data.episodeTitle}`, surrounding: data.full[seasonKey][episodeKey], current: data.sentence.line});
    } else if (reference === 'es') {
      let seasonKey = data.seasonKey;
      let episodeKey = data.episodeKey;
      setContextData({reference: reference, title: `${data.seasonTitle}, ${data.episodeTitle}`, surrounding: data.full[seasonKey][episodeKey], current: data.sentence.line});
    } else if (reference === 'ssc') {
      let chapterKey = data.chapterKey;
      let episodeKey = data.episodeKey;
      setContextData({reference: reference, title: `${data.partTitle}, Chapter ${data.chapterTitle}, Episode ${episodeKey.replace("e", "")} | ${data.episodeTitle}`, surrounding: data.full[data.partKey][chapterKey][episodeKey], current: data.sentence.line});
    } else if (reference === 'apo') {
      let chapterKey = data.chapterKey;
      let episodeKey = data.episodeKey;
      setContextData({reference: reference, title: `Part ${data.partTitle}, Chapter ${data.chapterTitle}, ${data.episodeTitle}`, surrounding: data.full[data.partKey][chapterKey][episodeKey], current: data.sentence.line});
    }
    setContextOpen(true);
  }

  // Check if .an key exists in results.anime and if there are any characters to show
  const lnCharacter = results && results.lnChar && !results.lnChar.ln && Object.keys(results.lnChar).length > 0;
  const anCharacter = results && results.anime && !results.anime.an && Object.keys(results.anime).length > 0;
  const sscCharacter = results && results.ssc && !results.ssc.ssc && Object.keys(results.ssc).length > 0;
  const apoCharacter = results && results.apo && !results.apo.apo && Object.keys(results.apo).length > 0;
  const esCharacter = results && results.es && !results.es.es && Object.keys(results.es).length > 0;

  let mgCount = 0;
  if (sscCharacter === false && esCharacter === false && apoCharacter === false) {
    if (sscResults) {
      mgCount += sscResults.count;
    }
    if (esResults) {
      mgCount += esResults.count;
    }
    if (apoResults) {
      mgCount += apoResults.count;
    }
  }

  let lnCount = 0;
  let lnVolumeCount = 0;
  if (lnResults) {
    lnVolumeCount = lnVolumeCount + Object.keys(lnResults.volumes).length
  }
  if (lnCharacterResults) {
    lnVolumeCount = lnVolumeCount + Object.keys(lnCharacterResults.volumes).length
  }
  if (lnCharacter === false && lnCharacterResults) {
    let lnCharacterCopy = JSON.parse(JSON.stringify(lnCharacterResults))
    lnCount = lnCount + lnCharacterCopy.count;
  }

  if (lnResults) {
    lnCount = lnCount + lnResults.count;
  }



  return (
    <div>
      <h1 className="results-header">RESULTS</h1>
      <div className="results-container">
        <FontAwesomeIcon
          icon={faLightbulb}
          className={`highlight-icon ${highlight ? 'active' : ''}`}
          onClick={toggleHighlight}
          title="Highlight Keywords"
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          className={`reset-icon`}
          onClick={resetResults}
          title="Clear Results"
        />
        <div className="content-wrapper">
          {noResults ? (
            <div>
              <p>{resultsText}</p>
            </div>
          ) : (
            <>
              {((anCharacter || esCharacter || sscCharacter || apoCharacter || lnCharacter) && (
                <>
                  <CharacterResults manageContextData={manageContextData} full={results.full} namedCharacters={namedCharacters} namedActive={namedActive} lnData={results.lnChar} lnDropdownState={lnDropdownState} animeDropdownState={animeDropdownState} anData={results.anime} sscData={results.ssc} esData={results.es} apoData={results.apo} images={images} highlight={highlight} filterState={filterState} mogDropdownState={mogDropdownState} />
                  <br />
                </>
              ))}
              {(lnResults || lnCharacterResults) && (
                <>
                  <Collapsible className="ln-results" trigger={`Light Novel (Total: ${lnCount})`}>
                    {lnCharacterResults && (
                      <LightNovelCharacterResults manageContextData={manageContextData} full={results.full.ln} namedCharacters={namedCharacters} namedActive={namedActive} lnCount={lnVolumeCount} lnDropdownState={lnDropdownState} lnData={lnCharacterResults} images={images} filterState={filterState} highlight={highlight} />
                    )}
                    {lnResults && (
                      <LightNovelResults manageContextData={manageContextData} full={results.full.ln} lnCount={lnVolumeCount} lnDropdownState={lnDropdownState} lnData={lnResults} images={images} highlight={highlight} filterState={filterState} />
                    )}
                  </Collapsible>
                  <br />
                </>
              )}
              {anResults && (
                <>
                  <Collapsible className="an-results" trigger={`Anime (Total: ${anResults.count})`}>
                    <AnimeResults manageContextData={manageContextData} full={results.full.an} animeDropdownState={animeDropdownState} anData={anResults} images={images} highlight={highlight} filterState={filterState} main={true} />
                  </Collapsible>
                  <br />
                </>
              )}
              {((sscResults || esResults || apoResults) && (mgCount > 0)) && (
                <>
                  <Collapsible trigger={`Master of Garden (Total: ${mgCount})`}>
                    {sscResults && (
                      <>
                        <Collapsible key={'ssc'} trigger={
                          <>
                            <div className="season-trigger">
                              {images.sscCoverImages["ssc"] && <img className="ssc-image" src={images.sscCoverImages["ssc"]} alt={"Seven Shadows Chronicles"} />}
                              {`Seven Shadows Chronicles (Total: ${sscResults.count})`}
                            </div>
                          </>
                        }>
                          <SSCResults full={results.full.ssc} manageContextData={manageContextData} main={true} sscData={sscResults} images={images} filterState={filterState} highlight={highlight} partsChecked={mogDropdownState.partsChecked['Seven Shadows Chronicles']} />
                        </Collapsible>
                        <br />
                      </>
                    )}
                    {esResults && (
                      <>
                        <Collapsible key={'es'} trigger={
                          <>
                            <div className="season-trigger">
                              {images.esCoverImages["Event Stories"] && <img className="es-image" src={images.esCoverImages["Event Stories"]} alt={"Event Stories"} />}
                              {`Event Stories (Total: ${esResults.count})`}
                            </div>
                          </>
                        }>
                          <ESResults full={results.full.es} manageContextData={manageContextData} main={true} anData={esResults} images={images} filterState={filterState} highlight={highlight} />
                        </Collapsible>
                        <br />
                      </>
                    )}
                    {apoResults && (
                      <Collapsible key={'apo'} trigger={
                        <>
                          <div className="season-trigger">
                            {images.apoCoverImages["Apocrypha"] && <img className="apo-image-small" src={images.apoCoverImages["Apocrypha"]} alt={"Apocrypha"} />}
                            {`Apocrypha (Total: ${apoResults.count})`}
                          </div>
                        </>
                      }>
                        <APOResults full={results.full.apo} manageContextData={manageContextData} main={true} sscData={apoResults} images={images} filterState={filterState} highlight={highlight} partsChecked={mogDropdownState.partsChecked['Apocrypha']} />
                      </Collapsible>
                    )}
                  </Collapsible>
                  <br />
                </>
              )}
              {wnResults && (
                <>
                  <Collapsible className="ln-results" trigger={`Web Novel (Total: ${wnResults.count})`}>
                    <WebNovelResults manageContextData={manageContextData} full={results.full.wn} wnDropdownState={wnDropdownState} wnData={wnResults} volumeImages={images.lnCoverImages} highlight={highlight} filterState={filterState} />
                  </Collapsible>
                  <br />
                </>
              )}
            </>
          )}
        </div>
        {!noResults && (
          <button title={"To Top"} className="scroll-top-button" onClick={scrollToTop}>UP</button>
        )}
      </div>
      {contextOpen && (
        <ContextOverlay images={images} contextData={contextData} contextOpen={contextOpen} setContextOpen={setContextOpen} />
      )}
    </div>
  );
}

export default Results;
