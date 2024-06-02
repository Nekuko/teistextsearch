import React, { useMemo } from 'react';
import Collapsible from 'react-collapsible';
import AnimeResults from './AnimeResults';
import SSCResults from './SSCResults'; // Import SSCResults
import ESResults from './ESResults';

function CharacterResults({ anData, sscData, esData, images, filterState, highlight }) {
  const mediumNames = {
    'an': 'Anime',
    'ssc': 'Seven Shadows Chronicles',
    'es': "Event Stories"
  };


  function combineData(sscData, anData, esData) {
    let sscDataCopy = JSON.parse(JSON.stringify(sscData));
    let anDataCopy = JSON.parse(JSON.stringify(anData));
    let esDataCopy = JSON.parse(JSON.stringify(esData));

    let combinedData = { ...sscDataCopy };

    if (typeof sscDataCopy === 'undefined') {
      combinedData = {};
    }

    if (typeof anDataCopy !== 'undefined') {
      for (let character in anData) {
        if (combinedData[character]) {
          combinedData[character].count += anDataCopy[character].count;
          combinedData[character].mediums = { ...combinedData[character].mediums, ...anDataCopy[character].mediums };
        } else {
          combinedData[character] = anDataCopy[character];
        }
      }
    }

    if (typeof esDataCopy !== 'undefined') {
      for (let character in esData) {
        if (combinedData[character]) {
          combinedData[character].count += esDataCopy[character].count;
          combinedData[character].mediums = { ...combinedData[character].mediums, ...esDataCopy[character].mediums };
        } else {
          combinedData[character] = esDataCopy[character];
        }
      }
    }

    // Add 'mg' dictionary for each character if it has a medium called 'es' or 'ssc'
    for (let character in combinedData) {
      if (combinedData[character].mediums['es'] || combinedData[character].mediums['ssc']) {
        combinedData[character].mediums['mg'] = {};
        if (combinedData[character].mediums['es']) {
          combinedData[character].mediums['mg']['es'] = combinedData[character].mediums['es'];
          combinedData[character].mediums['mg']['count'] = (combinedData[character].mediums['mg']['count'] || 0) + combinedData[character].mediums['es']['count'];
          delete combinedData[character].mediums['es'];
        }
        if (combinedData[character].mediums['ssc']) {
          combinedData[character].mediums['mg']['ssc'] = combinedData[character].mediums['ssc'];
          combinedData[character].mediums['mg']['count'] = (combinedData[character].mediums['mg']['count'] || 0) + combinedData[character].mediums['ssc']['count'];
          delete combinedData[character].mediums['ssc'];
        }
      }
    }

    return combinedData;
  }

  const combinedData = combineData(sscData, anData, esData);
  console.log(combinedData)

  const characterImages = images.characterImages;

  const totalCharacters = Object.values(combinedData).reduce((total, characterData) => total + characterData.count, 0);

  return (
    <div className="characters-trigger">
      <Collapsible trigger={`Characters (Total: ${totalCharacters})`}>
        {Object.keys(combinedData).map((character, index) => {
          const characterData = combinedData[character];
          const mediums = characterData.mediums;
          let characterImageName = character;
          if (characterImageName.endsWith("(All)")) {
            characterImageName = characterImageName.replace(" (All)", "");
          }

          return (
            <div key={character}>
              <Collapsible trigger={
                <>
                  <div className="character-trigger" title={character}>
                    {characterImages[characterImageName] && <img className="character-title-image" src={characterImages[characterImageName]} alt={character} />}
                    {`${character.replace(' (All)', '')} (Total: ${characterData.count})`}
                  </div>
                </>
              }>
                {Object.keys(mediums).map((medium) => {
                  const mediumData = mediums[medium];
                  const mediumName = mediumNames[medium] || medium;

                  if (medium === 'mg') {
                    return (
                      <Collapsible trigger={`Master of Garden (Total: ${mediumData.count})`}>
                        <div className="medium-trigger">
                          {mediumData['ssc'] && (
                            <Collapsible key={'ssc'} trigger={`Seven Shadows Chronicles (Total: ${mediumData['ssc'].count})`}>
                              <SSCResults main={false} sscData={mediumData['ssc']} images={images} filterState={filterState} highlight={highlight} />
                            </Collapsible>
                          )}
                          {mediumData['es'] && (
                            <Collapsible key={'es'} trigger={`Event Stories (Total: ${mediumData['es'].count})`}>
                              <ESResults main={false} anData={mediumData['es']} images={images} filterState={filterState} highlight={highlight} />
                            </Collapsible>
                          )}
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
