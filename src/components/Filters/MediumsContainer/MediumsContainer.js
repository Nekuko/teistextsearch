// MediumsContainer.js
import React, { useMemo, useState } from 'react';
import AnimeDropdownMenu from '../menus/AnimeDropdownMenu'; // Import the AnimeDropdownMenu component
import LNDropdownMenu from '../menus/LNDropdownMenu'; // Import the LNDropdownMenu component
import './MediumsContainer.css'; // Import the CSS file

function MediumsContainer({animeDropdownState, updateAnimeDropdownState, lnDropdownState, updateLNDropdownState }) {
    const { mainChecked } = animeDropdownState;
    const { lnMainChecked } = lnDropdownState;
    const [openAnime, setOpenAnime] = useState(false);
    const [openLN, setOpenLN] = useState(false);
      
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

    const volume1Chapters = useMemo(() => [
      { id: 'v1c1', name: 'P | Preparing the Perfect Stage!' },
      { id: 'v1c2', name: '1 | Starting the Shadowbroker Tutorial!' },
      { id: 'v1c3', name: '2 | Assuuming the Role of a Side Character at School!' },
      { id: 'v1c4', name: "4 | My Official Beginning as a Mastermind in Action!" },
      { id: 'v1c5', name: '5 | The Two Sides of the Shadow Garden?!' },
      { id: 'v1c6', name: '6 | Mastering the Peaceful Life of a Nobody!' },
      { id: 'v1c7', name: '7 | That Scene Where Terrorists Take Over the School' },
      { id: 'v1c8', name: 'F | My Idea of the Ultimate Shadow Commander!' },
      { id: 'v1c9', name: 'A | Appendix' },
    ], []);
  
    const volume2Chapters = useMemo(() => [
    { id: 'v2c1', name: 'P | To Lindwurm, the Sacred Land!' },
    { id: 'v2c2', name: "1 | Fun Times at the Goddess's Trial!"},
    { id: 'v2c3', name: '2 | Investigating the Sanctuary!' },
    { id: 'v2c4', name: "3 | When Things Get Borings, It's Time for Explosives!" },
    { id: 'v2c5', name: '4 | This Situation Calls for a "Who Is That Guy?!"'},
    { id: 'v2c6', name: '5 | A Battle to Attract Only MVPS!' },
    { id: 'v2c7', name: '6 | A Mastermind Always Plays Piano Under Moonlight!' },
    { id: 'v2c8', name: '7 | Showing Off a Smidgen of My Strength' },
    { id: 'v2c9', name: '8 | Lay Your Eyes on My True Powers!' },
    { id: 'v2c10', name: 'F | Just Who Is This Mysterious Badass?!' },
    { id: 'v2c11', name: 'A | Appendix' },
    ], []);

    const volume3Chapters = useMemo(() => [
      { id: 'v3c1', name: 'P | Heading to the Lawless City over Fall Break!' },
      { id: 'v3c2', name: "1 | Lawless City Bandit Hunting!"},
      { id: 'v3c3', name: '2 | Storming the Crimson Tower' },
      { id: 'v3c4', name: "3 | Pursuing the Blood Queen" },
      { id: 'v3c5', name: 'X | Field Notes on a Little Brother—by Young Claire!'},
      { id: 'v3c6', name: "4 | I'll Destroy It All and Start from Scratch!" },
      { id: 'v3c7', name: '5 | Printing Fake Money as Mitsughoshi Throws Down with the Major Corporate Alliance!' },
      { id: 'v3c8', name: '6 | Circulating Counterfeit Cash!' },
      { id: 'v3c9', name: 'E | The One to Destroy It ALl and Start from Scratch—with Fake Bills!' },
      { id: 'v3c10', name: 'A | Appendix' },
      ], []);

    const volume4Chapters = useMemo(() => [
      { id: 'v4c1', name: "P | It's Time for a War in the Oriana Kingdom!" },
      { id: 'v4c2', name: "1 | Putting the Kibosh on Rose Oriana's Wedding!"},
      { id: 'v4c3', name: '2 | Begin Operation Obstruction!' },
      { id: 'v4c4', name: "3 | Crashing the Ceremony!" },
      { id: 'v4c5', name: 'X | Rise of the Fancy Hoodlum Slayer!'},
      { id: 'v4c6', name: "4 | Lurking in the Darkness in Fantastical Japan!" },
      { id: 'v4c7', name: '5 | Sneaking around in Japan, Just Like the Old Days!!' },
      { id: 'v4c8', name: '6 | Something Smells Fishy...But an Eminence in Shadow Always Cracks the Case!' },
      { id: 'v4c9', name: 'E | Behond, a Full-Fledged Eminence in Shadow!' },
      { id: 'v4c10', name: 'A | Appendix' },
      ], []);

    const volumes = useMemo(() => [
    { name: "Volume 1", chapters: volume1Chapters },
    { name: "Volume 2", chapters: volume2Chapters },
    { name: "Volume 3", chapters: volume3Chapters },
    { name: "Volume 4", chapters: volume4Chapters}
    ], [volume1Chapters, volume2Chapters, volume3Chapters, volume4Chapters]);

    
    

    const handleMainCheck = () => {
      const isMainChecked = !mainChecked;
      updateAnimeDropdownState('mainChecked', isMainChecked);
    
      // Update the seasonsChecked state for each episode in each season
      const updatedSeasonsChecked = {};
      seasons.forEach(season => {
        updatedSeasonsChecked[season.name] = season.episodes.reduce((acc, episode) => {
          acc[episode.id] = isMainChecked;
          return acc;
        }, {});
    
        // Update the checked property for the season
        updatedSeasonsChecked[season.name].checked = isMainChecked;
      });
    
      updateAnimeDropdownState('seasonsChecked', updatedSeasonsChecked);
    };
    
    
    
    

    const handleLNMainCheck = () => {
      const isLNMainChecked = !lnMainChecked;
      updateLNDropdownState('lnMainChecked', isLNMainChecked);
    
      // Update the seasonsChecked state for each episode in each season
      const updatedVolumesChecked = {};
      volumes.forEach(volume => {
        updatedVolumesChecked[volume.name] = volume.chapters.reduce((acc, chapter) => {
          acc[chapter.id] = isLNMainChecked;
          return acc;
        }, {});
    
        // Update the checked property for the season
        updatedVolumesChecked[volume.name].checked = isLNMainChecked;
      });
    
      updateLNDropdownState('volumesChecked', updatedVolumesChecked);
    };

    return (
        <div className="mediums-container">
        <h2 className="mediums-title">MEDIUMS</h2>
        <div className="checkbox-container">
            <LNDropdownMenu 
            lnDropdownState={lnDropdownState}
            updateLNDropdownState={updateLNDropdownState}
            volumes={volumes}
            openLN={openLN}
            setOpenLN={setOpenLN}
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
            openAnime={openAnime}
            setOpenAnime={setOpenAnime}
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
