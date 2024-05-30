import React, { useMemo } from 'react';
import Collapsible from 'react-collapsible';
import AnimeResults from './AnimeResults';
import SSCResults from './SSCResults'; // Import SSCResults

function CharacterResults({ anData, sscData, images, filterState, highlight }) {
  const mediumNames = {
    'an': 'Anime',
    'ssc': 'Seven Shadows Chronicles',
  };




  function combineData(sscData, anData) {
    let sscDataCopy = JSON.parse(JSON.stringify(sscData));
    let anDataCopy = JSON.parse(JSON.stringify(anData));

    let combinedData = { ...sscDataCopy };

    if (typeof sscData === 'undefined') {
      combinedData = {};
    }

    if (typeof anData !== 'undefined') {
      for (let character in anData) {
        if (combinedData[character]) {
          combinedData[character].count += anData[character].count;
          combinedData[character].mediums = { ...combinedData[character].mediums, ...anDataCopy[character].mediums };
        } else {
          combinedData[character] = anData[character];
        }
      }
    }
    return combinedData;
  }
  const combinedData = combineData(sscData, anData);

  const characterImages = images.characterImages;

  const totalCharacters = Object.values(combinedData).reduce((total, characterData) => total + characterData.count, 0);

  return (
    <div className="characters-trigger">
      <Collapsible trigger={`Characters (Total: ${totalCharacters})`}>
        {Object.keys(combinedData).map((character, index) => {
          const characterData = combinedData[character];
          const mediums = characterData.mediums;

          return (
            <div key={character}>
              <Collapsible trigger={
                <>
                  <div className="character-trigger" title={character}>
                    {characterImages[character] && <img className="character-title-image" src={characterImages[character]} alt={character} />}
                    {`${character.replace(' (All)', '')} (Total: ${characterData.count})`}
                  </div>
                </>
              }>
                {Object.keys(mediums).map((medium) => {
                  const mediumData = mediums[medium];
                  const mediumName = mediumNames[medium] || medium;

                  if (medium === 'ssc') {
                    return (
                      <Collapsible trigger={`Master of Garden (Total: ${mediumData.count})`}>
                        <div className="medium-trigger">
                          <Collapsible key={medium} trigger={`${mediumName} (Total: ${mediumData.count})`}>
                            <SSCResults main={false} sscData={mediumData} images={images} filterState={filterState} highlight={highlight} />
                          </Collapsible>
                        </div>
                      </Collapsible>
                    );
                  }

                  if (medium === 'an') {
                    return (
                      <div className="medium-trigger">
                        <Collapsible key={medium} trigger={`${mediumName} (Total: ${mediumData.count})`}>
                          <AnimeResults main={false} anData={mediumData} images={images} filterState={filterState} highlight={highlight} />
                        </Collapsible>
                      </div>
                    );
                  }
                })}
              </Collapsible>
            </div>
          );
        })}
      </Collapsible>
    </div>
  );
}

export default CharacterResults;
