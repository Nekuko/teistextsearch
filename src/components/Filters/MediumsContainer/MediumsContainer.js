// MediumsContainer.js
import React, { useMemo } from 'react';
import AnimeDropdownMenu from '../menus/AnimeDropdownMenu'; // Import the AnimeDropdownMenu component
import LNDropdownMenu from '../menus/LNDropdownMenu'; // Import the LNDropdownMenu component
import './MediumsContainer.css'; // Import the CSS file

function MediumsContainer({animeDropdownState, updateAnimeDropdownState, lnDropdownState, updateLNDropdownState }) {
    const { mainChecked } = animeDropdownState;
    const { lnMainChecked, volumesChecked} = lnDropdownState;
      
    const season1Episodes = useMemo(() => [
        { id: 's1e1', name: '1 | The Hated Classmate' },
        { id: 's1e2', name: '2 | Shadow Garden is Born' },
        { id: 's1e3', name: '3 | Fencer Ordinaire' },
        { id: 's1e4', name: "4 | Sadism's Rewards" },
        { id: 's1e5', name: '5 | I Am...' },
        { id: 's1e6', name: '6 | Pretenders' },
        { id: 's1e7', name: '7 | A Fencing Tournament of Intrigue & Bloodshed' },
        { id: 's1e8', name: '8 | Dark Knight Academy Under Attack' },
        { id: 's1e9', name: '9 | The End of a Lie' },
        { id: 's1e10', name: '10 | The Sacred Land, City of Deception' },
        { id: 's1e11', name: "11 | The Goddess's Trial" },
        { id: 's1e12', name: '12 | The Truth Within the Memories' },
        { id: 's1e13', name: '13 | A Bloody Showdown as an Offering to Annihilation' },
        { id: 's1e14', name: '14 | Your Lie, Your Wish' },
        { id: 's1e15', name: '15 | The Strongest Weakest Man' },
        { id: 's1e16', name: '16 | Unseen Intentions' },
        { id: 's1e17', name: '17 | Moonlight That Pierces the Darkness' },
        { id: 's1e18', name: '18 | Betting on a Moment' },
        { id: 's1e19', name: '19 | Dancing Puppet' },
        { id: 's1e20', name: '20 | Advent of the Demon' },
      ], []);
    
    const season2Episodes = useMemo(() => [
    { id: 's2e1', name: '1 | The Lawless City' },
    { id: 's2e2', name: '2 | The Haven'},
    { id: 's2e3', name: '3 | The Hour Of Awakening' },
    { id: 's2e4', name: '4 | Mask of Falsehood' },
    { id: 's2e5', name: '5 | He Who Pulls the Strings' },
    { id: 's2e6', name: '6 | John Smith' },
    { id: 's2e7', name: '7 | Something Precious' },
    { id: 's2e8', name: '8 | Tears of the Dragon' },
    { id: 's2e9', name: '9 | The Key' },
    { id: 's2e10', name: '10 | The Caged Bird' },
    { id: 's2e11', name: '11 | Determination' },
    { id: 's2e12', name: '12 | Highest' }
    ], []);

    const seasons = useMemo(() => [
    { name: "Season 1", episodes: season1Episodes },
    { name: "Season 2", episodes: season2Episodes }
    ], [season1Episodes, season2Episodes]);

    const handleMainCheck = () => {
        const isMainChecked = !mainChecked;
        updateAnimeDropdownState('mainChecked', isMainChecked);
      
        // Update the mainChecked state for each season
        const updatedMainChecked = {};
        Object.keys(mainChecked).forEach(season => {
          updatedMainChecked[season] = isMainChecked;
        });
      
        // Update the seasonsChecked state for each episode in each season
        const updatedSeasonsChecked = {};
        seasons.forEach(season => {
          updatedSeasonsChecked[season.name] = season.episodes.reduce((acc, episode) => {
            acc[episode.id] = isMainChecked;
            return acc;
          }, {});
        });
      
        updateAnimeDropdownState('seasonsChecked', updatedSeasonsChecked);
        updateAnimeDropdownState('mainChecked', updatedMainChecked);
      };
      
    
    

    const handleLNMainCheck = () => {
        const isLNMainChecked = !lnMainChecked;
        updateLNDropdownState('lnMainChecked', isLNMainChecked);
    
        if (isLNMainChecked) {
            const updatedVolumesChecked = Object.keys(volumesChecked).reduce((acc, volume) => {
                const volumeChapters = Object.keys(volumesChecked[volume]);
                acc[volume] = volumeChapters.reduce((volumeAcc, chapter) => {
                volumeAcc[chapter] = true; // Corrected line
                return volumeAcc;
                }, {});
                return acc;
            }, {});

        updateLNDropdownState('volumesChecked', updatedVolumesChecked);
        }
    };

    return (
        <div className="mediums-container">
        <h2 className="mediums-title">MEDIUMS</h2>
        <div className="checkbox-container">
            <LNDropdownMenu 
            lnDropdownState={lnDropdownState}
            updateLNDropdownState={updateLNDropdownState}
            />
            <input
            type="checkbox"
            checked={lnMainChecked}
            onChange={handleLNMainCheck}
            />
        </div>
        <div className="checkbox-container">
            <AnimeDropdownMenu 
            animeDropdownState={animeDropdownState}
            updateAnimeDropdownState={updateAnimeDropdownState}
            seasons={seasons}
            />
            <input
            type="checkbox"
            checked={mainChecked}
            onChange={handleMainCheck}
            />
        </div>
    </div>
    );
    }
    
export default MediumsContainer;
