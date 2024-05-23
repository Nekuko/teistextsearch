import React from 'react';
import Collapsible from 'react-collapsible';
import AnimeResults from './AnimeResults';

function CharacterResults({ anData, images, filterState, highlight }) {
  const mediumNames = {
    'an': 'Anime',
    'mog': 'Master of Garden',
  };

  const characterImages = images.characterImages;

  const totalCharacters = Object.values(anData).reduce((total, characterData) => total + characterData.count, 0);

  return (
    <div className="characters-trigger">
      <Collapsible  trigger={`Characters (Total: ${totalCharacters})`}>
        {Object.keys(anData).map((character, index) => {
          const characterData = anData[character];
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

                  return (
                    <div className="medium-trigger">
                        <Collapsible key={medium} trigger={`${mediumName} (Total: ${mediumData.count})`}>
                        <AnimeResults main={false} anData={mediumData} images={images} filterState={filterState} highlight={highlight} />
                        </Collapsible>
                    </div>
                  );
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
