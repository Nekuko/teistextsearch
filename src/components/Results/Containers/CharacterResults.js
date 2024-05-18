import React from 'react';
import Collapsible from 'react-collapsible';
import AnimeResults from './AnimeResults';

function CharacterResults({ anData, characterImages }) {
  const mediumNames = {
    'an': 'Anime',
    'mog': 'Master of Garden',
  };

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
                <div className="character-trigger">
                  {characterImages[character] && <img src={characterImages[character]} alt={character} />}
                  {`${character} (Total: ${characterData.count})`}
                </div>
                </>
              }>
                {Object.keys(mediums).map((medium) => {
                  const mediumData = mediums[medium];
                  const mediumName = mediumNames[medium] || medium;

                  return (
                    <div className="medium-trigger">
                        <Collapsible key={medium} trigger={`${mediumName} (Total: ${mediumData.count})`}>
                        <AnimeResults anData={mediumData} characterImages={characterImages} />
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
