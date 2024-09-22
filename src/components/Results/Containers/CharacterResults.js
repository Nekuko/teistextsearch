import React from 'react';
import Collapsible from 'react-collapsible';
import AnimeResults from './AnimeResults';
import SSCResults from './SSCResults'; // Import SSCResults
import ESResults from './ESResults';
import APOResults from './APOResults';
import LightNovelCharacterResults from './LightNovelCharacterResults';

function CharacterResults({ namedCharacters, namedActive, lnDropdownState, lnData, anData, sscData, esData, apoData, images, filterState, highlight, mogDropdownState, animeDropdownState }) {
  const mediumNames = {
    'an': 'Anime',
    'ssc': 'Seven Shadows Chronicles',
    'es': "Event Stories",
    "apo": "Apocrypha"
  };


  function combineData(sscData, anData, esData, apoData, lnData) {
    let sscDataCopy = JSON.parse(JSON.stringify(sscData));
    let anDataCopy = JSON.parse(JSON.stringify(anData));
    let esDataCopy = JSON.parse(JSON.stringify(esData));
    let apoDataCopy = JSON.parse(JSON.stringify(apoData));
    let lnDataCopy = JSON.parse(JSON.stringify(lnData));

    let combinedData = { ...sscDataCopy };

    if (typeof sscDataCopy === 'undefined') {
      combinedData = {};
    }

    if (typeof lnDataCopy !== 'undefined') {
      for (let character in lnData) {
        if (combinedData[character]) {
          combinedData[character].count += lnDataCopy[character].count;
          combinedData[character].mediums = { ...combinedData[character].mediums, ...lnDataCopy[character].mediums };
        } else {
          combinedData[character] = lnDataCopy[character];
        }
      }
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

    if (typeof apoDataCopy !== 'undefined') {
      for (let character in apoData) {
        if (combinedData[character]) {
          combinedData[character].count += apoDataCopy[character].count;
          combinedData[character].mediums = { ...combinedData[character].mediums, ...apoDataCopy[character].mediums };
        } else {
          combinedData[character] = apoDataCopy[character];
        }
      }
    }

    // Add 'mg' dictionary for each character if it has a medium called 'es' or 'ssc'
    for (let character in combinedData) {
      if (combinedData[character].mediums['es'] || combinedData[character].mediums['ssc'] || combinedData[character].mediums['apo']) {
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
        if (combinedData[character].mediums['apo']) {
          combinedData[character].mediums['mg']['apo'] = combinedData[character].mediums['apo'];
          combinedData[character].mediums['mg']['count'] = (combinedData[character].mediums['mg']['count'] || 0) + combinedData[character].mediums['apo']['count'];
          delete combinedData[character].mediums['apo'];
        }
      }
    }

    return combinedData;
  }

  const combinedData = combineData(sscData, anData, esData, apoData, lnData);

  const characterImages = images.characterImages;

  const totalCharacters = Object.values(combinedData).reduce((total, characterData) => total + characterData.count, 0);

  return (
    <div className="characters-trigger">
      <Collapsible trigger={`Characters (Total: ${totalCharacters})`}>
        {Object.keys(combinedData).sort((a, b) => combinedData[b].count - combinedData[a].count).map((character, i) => {
          const characterData = combinedData[character];
          const mediums = characterData.mediums;
          let characterImageName = character;
          if (characterImageName.endsWith("(All)")) {
            characterImageName = characterImageName.replace(" (All)", "");
          }

          return (
            <div key={`${mediums}-${character}`}>
              <Collapsible trigger={
                <>
                  <div className="character-trigger" title={character}>
                    {characterImages[characterImageName] && <img className="character-title-image" src={characterImages[characterImageName]} alt={character} />}
                    {`${character.replace(' (All)', '')} (Total: ${characterData.count})`}
                  </div>
                </>
              }>
                {Object.keys(mediums).map((medium, index) => {
                  const mediumData = mediums[medium];
                  const mediumName = mediumNames[medium] || medium;
                  if (medium === 'ln') {
                    return (
                      <div key={`${medium}-${character}-ln`} className="medium-trigger">
                        <Collapsible trigger={`Light Novel (Total: ${mediumData.count})`}>
                          <LightNovelCharacterResults namedCharacters={namedCharacters} namedActive={namedActive} character={characterImageName} lnDropdownState={lnDropdownState} lnData={mediumData} images={images} filterState={filterState} highlight={highlight} />
                        </Collapsible>
                      </div>
                    );
                  }

                  if (medium === 'mg') {
                    return (
                      <Collapsible key={`${mediums}-${character}-mog`} trigger={`Master of Garden (Total: ${mediumData.count})`}>
                        <div className="medium-trigger">
                          {mediumData['ssc'] && (
                            <Collapsible trigger={`Seven Shadows Chronicles (Total: ${mediumData['ssc'].count})`}>
                              <SSCResults main={false} sscData={mediumData['ssc']} images={images} filterState={filterState} highlight={highlight} partsChecked={mogDropdownState.partsChecked['Seven Shadows Chronicles']} />
                            </Collapsible>
                          )}
                          {mediumData['es'] && (
                            <Collapsible trigger={`Event Stories (Total: ${mediumData['es'].count})`}>
                              <ESResults main={false} anData={mediumData['es']} images={images} filterState={filterState} highlight={highlight} />
                            </Collapsible>
                          )}
                          {mediumData['apo'] && (
                            <Collapsible trigger={`Apocrypha (Total: ${mediumData['apo'].count})`}>
                              <APOResults main={false} sscData={mediumData['apo']} images={images} filterState={filterState} highlight={highlight} partsChecked={mogDropdownState.partsChecked['Apocrypha']} />
                            </Collapsible>
                          )}
                        </div>
                      </Collapsible>
                    );
                  }

                  if (medium === 'an') {
                    return (
                      <div key={`${mediums}-${character}-an`} className="medium-trigger">
                        <Collapsible trigger={`${mediumName} (Total: ${mediumData.count})`}>
                          <AnimeResults animeDropdownState={animeDropdownState} main={false} anData={mediumData} images={images} filterState={filterState} highlight={highlight} />
                        </Collapsible>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </Collapsible>
              <br />
            </div>

          );
        })}
      </Collapsible>
    </div>
  );
}

export default CharacterResults;
