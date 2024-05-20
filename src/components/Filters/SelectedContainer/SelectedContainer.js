// SelectedContainer.js
import React from 'react';
import './SelectedContainer.css';

function SelectedContainer({ animeDropdownState, lnDropdownState, dropdownState }) {
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

  // Function to process animeCheckedItems and create a new list
  // Function to process animeCheckedItems and create a new list
// Function to process animeCheckedItems and create a new list
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
              newList.push({ text: `AN S${seasonNumber} E${start}${start !== end ? `-${end}` : ''}`, hoverText: `Anime Season ${seasonNumber} Episodes ${start}-${end}` });
              start = episodes[i];
              end = start;
            }
          }
          if (start <= end) {
            newList.push({ text: `AN S${seasonNumber} E${start}${start !== end ? `-${end}` : ''}`, hoverText: `Anime Season ${seasonNumber} Episodes ${start}-${end}` });
          }
        }
      });
    }
    return newList;
  };
  
  

  // Call the function to get the new list
  const selectedAnimeList = getSelectedAnimeList();

  return (
    <div className="selected-container">
      <h2 className="selected-title">SELECTED</h2>
      <div className="selected-input-container">
        {selectedAnimeList.map((item, index) => (
          <div className="selected-bubble" key={index} title={item.hoverText}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedContainer;
