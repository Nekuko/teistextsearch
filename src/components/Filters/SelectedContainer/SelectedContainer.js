// SelectedContainer.js
import React from 'react';
import './SelectedContainer.css';

function SelectedContainer({ animeDropdownState, lnDropdownState, dropdownStates, volumes, namedActive }) {
  let animeCheckedItems = [];

  if (animeDropdownState && animeDropdownState.seasonsChecked) {
    animeCheckedItems = Object.entries(animeDropdownState.seasonsChecked)
      .flatMap(([season, episodes]) => 
        Object.entries(episodes)
          .filter(([episode, checked]) => checked && episode !== 'checked')
          .map(([episode]) => {
            const [season, ep] = episode.split('e');
            return `an_${season}_e${ep}`;
          })
      );
  }

  const getSelectedLNList = () => {
    let lnList = [];
    const totalVolumes = volumes.length;
    const checkedVolumes = volumes.filter(volume => volume.chapters.every(chapter => lnDropdownState.volumesChecked[volume.name][chapter.id])).length;
  
    if (lnDropdownState.lnMainChecked && totalVolumes === checkedVolumes) {
      lnList.push({ text: 'Light Novel', hoverText: 'Light Novel' });
    } else {
      volumes.forEach(volume => {
        const checkedChapters = volume.chapters.filter(chapter => lnDropdownState.volumesChecked[volume.name][chapter.id]);
        if (checkedChapters.length === volume.chapters.length) {
          lnList.push({ text: `Light Novel Volume ${volume.name.split(' ')[1]}`, hoverText: `Light Novel Volume ${volume.name.split(' ')[1]}` });
        } else {
          let ranges = [];
          let rangeStart = null;
          let rangeEnd = null;
          let chapterId = null; // Define chapterId here
          for (let i = 0; i < checkedChapters.length; i++) {
            const chapterNumber = checkedChapters[i].name.split('|')[0].trim();
            chapterId = checkedChapters[i].id; // Update chapterId here
            let chapterType = '';
            switch (chapterNumber) {
              case 'P':
                chapterType = 'Prologue';
                ranges.push({ id: chapterId, type: chapterType });
                continue;
              case 'E':
                chapterType = 'Epilogue';
                ranges.push({ id: chapterId, type: chapterType });
                continue;
              case 'F':
                chapterType = 'F';
                break;
              case 'X':
                chapterType = 'Auxiliary Chapter';
                ranges.push({ id: chapterId, type: chapterType });
                continue;
              case 'A':
                chapterType = 'Appendix';
                ranges.push({ id: chapterId, type: chapterType });
                continue;
              default:
                chapterType = parseInt(chapterNumber);
            }
            if (rangeStart === null) {
              rangeStart = chapterType;
              rangeEnd = chapterType;
            } 
            rangeEnd = chapterType;
            if (i === checkedChapters.length - 1 || (i + 1 < checkedChapters.length && checkedChapters[i + 1].name.split('|')[0].trim() !== 'F' && parseInt(checkedChapters[i + 1].name.split('|')[0].trim()) !== chapterType + 1)) {
              if (rangeStart === 'F') {
                ranges.push({ id: chapterId, type: 'Final Chapter' });
              } else if (rangeEnd === 'F') {
                ranges.push(`C${rangeStart}-F`);
              } else {
                ranges.push(`C${rangeStart}${rangeStart !== rangeEnd ? `-${rangeEnd}` : ''}`);
              }
              rangeStart = null;
              rangeEnd = null;
            }
          }
          // Add this to handle the case where the last chapter is checked but not added to the range
          if (rangeStart !== null) {
            if (rangeStart === 'F') {
              ranges.push({ id: chapterId, type: 'Final Chapter' });
            } else if (rangeEnd === 'F') {
              ranges.push(`C${rangeStart}-F`);
            } else {
              ranges.push(`C${rangeStart}${rangeStart !== rangeEnd ? `-${rangeEnd}` : ''}`);
            }
          }
          lnList.push(...ranges.map(range => typeof range === 'string' ? { text: `LN V${volume.name.split(' ')[1]} ${range}`, hoverText: `Light Novel Volume ${volume.name.split(' ')[1]} ${range.includes('-') ? 'Chapters' : 'Chapter'} ${range.split('C')[1].replace('-F', '-Final')}` } : { text: `LN V${volume.name.split(' ')[1]} ${range.type}`, hoverText: `Light Novel Volume ${volume.name.split(' ')[1]} ${range.type}` }));
        }
      });
    }
    return lnList;
  };
  
const getSelectedAnimeList = () => {
    const totalEpisodes = { 'an_s1': 20, 'an_s2': 12 };
    const countEpisodes = animeCheckedItems.reduce((acc, item) => {
      const season = item.split('_e')[0];
      acc[season] = (acc[season] || 0) + 1;
      return acc;
    }, {});
  
    let newList = [];
    if (countEpisodes['an_s1'] === totalEpisodes['an_s1'] && countEpisodes['an_s2'] === totalEpisodes['an_s2']) {
      newList.push({ text: 'Anime', hoverText: 'Anime' });
    } else {
      ['an_s1', 'an_s2'].forEach(season => {
        const seasonNumber = season.split('_s')[1]; // Extract the season number correctly
        if (countEpisodes[season] === totalEpisodes[season]) {
          newList.push({ text: `Anime Season ${seasonNumber}`, hoverText: `Anime Season ${seasonNumber}` });
        } else {
          const episodes = animeCheckedItems.filter(item => item.includes(season)).map(item => parseInt(item.split('_e')[1]));
          episodes.sort((a, b) => a - b);
  
          let start = episodes[0];
          let end = start;
          for (let i = 1; i < episodes.length; i++) {
            if (episodes[i] === end + 1) {
              end = episodes[i];
            } else {
              newList.push({ text: `AN S${seasonNumber} E${start}${start !== end ? `-${end}` : ''}`, hoverText: `Anime Season ${seasonNumber} Episode${start !== end ? `s ${start}-${end}` : ` ${start}`}` });
              start = episodes[i];
              end = start;
            }
          }
          if (start <= end) {
            newList.push({ text: `AN S${seasonNumber} E${start}${start !== end ? `-${end}` : ''}`, hoverText: `Anime Season ${seasonNumber} Episode${start !== end ? `s ${start}-${end}` : ` ${start}`}` });
          }
        }
      });
    }
    return newList;
  };

const getSelectedCharacterList = () => {
  let characterList = [];
  Object.values(dropdownStates).forEach(group => {
    Object.entries(group.characters).forEach(([character, attributes]) => {
      const subnames = Object.entries(attributes).filter(([name, checked]) => name !== 'checked' && name !== 'open');
      const checkedSubnames = subnames.filter(([name, checked]) => checked);
      if (subnames.length > 0 && subnames.length === checkedSubnames.length) {
        // If all subnames are checked, add the main character name with '(All)' after it to the list
        // Include a list of all the variants in the hover text
        const variants = subnames.map(([name]) => name).join(', ');
        characterList.push({ text: `${character} (All)`, hoverText: `${variants}` });
      } else if (checkedSubnames.length > 0) {
        // If some subnames are checked, add them to the list
        checkedSubnames.forEach(([subname]) => {
          characterList.push({ text: subname, hoverText: subname });
        });
      } else if (attributes.checked) {
        // If the main character is checked and there are no checked subnames, add the main character to the list
        characterList.push({ text: character, hoverText: character });
      }
    });
  });
  return characterList;
};

  // Call the function to get the new list
  const selectedAnimeList = getSelectedAnimeList();
  const selectedLNList = getSelectedLNList();
  const selectedCharacterList = getSelectedCharacterList();


  const selectedMediumList = [...selectedLNList, ...selectedAnimeList]
  if (selectedMediumList.length === 0) {
    selectedMediumList.push({ text: 'Any Medium', hoverText: 'Any Medium' });
  }

  if (selectedCharacterList.length === 0) {
    const characterText = namedActive ? 'Any "Named" Character' : 'Any Character';
    selectedCharacterList.push({ text: characterText, hoverText: characterText });
  }

  return (
    <div className="selected-container">
      <h2 className="selected-title">SELECTED</h2>
      <p className="selected-subtitle">MEDIUMS</p>
      <div className="selected-input-container">
        {selectedMediumList.map((item, index) => (
          <div className="selected-bubble" key={index} title={item.hoverText}>
            {item.text}
          </div>
        ))}
      </div>
      <p className="selected-subtitle-char">CHARACTERS</p>
      <div className="selected-input-container">
        {selectedCharacterList.map((item, index) => (
          <div className="selected-bubble" key={index} title={item.hoverText}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedContainer;
