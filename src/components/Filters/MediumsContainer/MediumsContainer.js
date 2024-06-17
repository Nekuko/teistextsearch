// MediumsContainer.js
import React, { useEffect, useState } from 'react';
import AnimeDropdownMenu from '../menus/AnimeDropdownMenu'; // Import the AnimeDropdownMenu component
import LNDropdownMenu from '../menus/LNDropdownMenu'; // Import the LNDropdownMenu component
import MOGDropdownMenu from '../menus/MOGDropdownMenu'; // Import the MOGDropdownMenu component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight, faC } from '@fortawesome/free-solid-svg-icons';
import './MediumsContainer.css'; // Import the CSS file
import WNDropdownMenu from '../menus/WNDropdownMenu';

function MediumsContainer({ wnDropdownState, updateWNDropdownState, animeDropdownState, updateAnimeDropdownState, lnDropdownState, updateLNDropdownState, mogDropdownState, setMogDropdownState, images, canonActive, setCanonActive, canonES,  mediumFlash, setMediumFlash }) {
  const { mainChecked } = animeDropdownState;
  const { lnMainChecked } = lnDropdownState;
  const { mogMainChecked } = mogDropdownState; // parts derived from mogDropdownState
  const { wnMainChecked } = wnDropdownState;
  const [openAnime, setOpenAnime] = useState(false);
  const [openLN, setOpenLN] = useState(false);
  const [openMOG, setOpenMOG] = useState(false);
  const [openWN, setOpenWN] = useState(false);

  
  useEffect(() => {
    if (mediumFlash) {
      // Set a timeout to turn off the flash after a delay
      const timeoutId = setTimeout(() => {
        setMediumFlash(false);
      }, 1000); // Adjust this value to control the duration of the flash

      // Clean up the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [mediumFlash, setMediumFlash]);



  const handleReset = () => {
    // Reset anime dropdown state
    updateAnimeDropdownState('mainChecked', false);
    updateAnimeDropdownState('filter', '')
    updateAnimeDropdownState('episodeFilters', {})
    updateAnimeDropdownState('seasonsChecked', resetSeasonsChecked(animeDropdownState.seasonsChecked));
    updateAnimeDropdownState('openSeasons', {})
    setOpenAnime(false);

    // Reset LN dropdown state
    updateLNDropdownState('lnMainChecked', false);
    updateLNDropdownState('lnFilter', '');
    updateLNDropdownState('chapterFilters', {});
    updateLNDropdownState('volumesChecked', resetVolumesChecked(lnDropdownState.volumesChecked));
    updateLNDropdownState('openVolumes', {})
    setOpenLN(false);

    updateWNDropdownState('wnMainChecked', false);
    updateWNDropdownState('wnFilter', '');
    updateWNDropdownState('chapterFilters', {});
    updateWNDropdownState('volumesChecked', resetWNVolumesChecked(wnDropdownState.volumesChecked));
    updateWNDropdownState('openVolumes', {})
    setOpenWN(false);

    // Reset MOG dropdown state
    resetMogDropdownState()
    setOpenMOG(false);
    setCanonActive(false);

  };

  const handleCanon = () => {
    const isActive = !canonActive;
    setCanonActive(isActive);
    let partsChecked = mogDropdownState.partsChecked["Event Stories"]
  
    // If canonActive is being set to true, uncheck all non-canon stories
    if (isActive) {
      const updatedPartsChecked = { ...partsChecked };
  
      // Iterate over all parts and episodes for 'Event Stories'
      Object.keys(updatedPartsChecked).forEach(part => {
        if (part !== 'checked') {
          // If part is not in canonES, uncheck this part and its episodes
          if (!canonES.includes(part)) {
            updatedPartsChecked[part].checked = false;
            Object.keys(updatedPartsChecked[part]).forEach(episode => {
              if (episode !== 'checked') {
                updatedPartsChecked[part][episode].checked = false;
              }
            });
          }
        }
      });
  
      // Update the mogDropdownState with the updated partsChecked
      setMogDropdownState(prevState => ({
        ...prevState,
        partsChecked: {
          ...prevState.partsChecked,
          "Event Stories": updatedPartsChecked
        }
      }));
    }
  }



  const resetMogDropdownState = () => {
    setMogDropdownState(prevState => {
      let newState = JSON.parse(JSON.stringify(prevState)); // create a deep copy
  
      // Reset "Seven Shadows Chronicles"
      for (let part in newState.partsChecked["Seven Shadows Chronicles"]) {
        for (let subpart in newState.partsChecked["Seven Shadows Chronicles"][part]) {
          if (typeof newState.partsChecked["Seven Shadows Chronicles"][part][subpart] === 'object') {
            newState.partsChecked["Seven Shadows Chronicles"][part][subpart].checked = false;
            for (let episode in newState.partsChecked["Seven Shadows Chronicles"][part][subpart]) {
              if (episode !== 'checked') {
                newState.partsChecked["Seven Shadows Chronicles"][part][subpart][episode].checked = false;
              }
            }
          } else {
            newState.partsChecked["Seven Shadows Chronicles"][part][subpart] = false;
          }
        }
      }
  
      // Reset "Event Stories"
      for (let story in newState.partsChecked["Event Stories"]) {
        if (typeof newState.partsChecked["Event Stories"][story] === 'object') {
          newState.partsChecked["Event Stories"][story].checked = false;
          for (let episode in newState.partsChecked["Event Stories"][story]) {
            if (episode !== 'checked') {
              newState.partsChecked["Event Stories"][story][episode].checked = false;
            }
          }
        } else {
          newState.partsChecked["Event Stories"][story] = false;
        }
      }

      for (let part in newState.partsChecked["Apocrypha"]) {
        for (let subpart in newState.partsChecked["Apocrypha"][part]) {
          if (typeof newState.partsChecked["Apocrypha"][part][subpart] === 'object') {
            newState.partsChecked["Apocrypha"][part][subpart].checked = false;
            for (let episode in newState.partsChecked["Apocrypha"][part][subpart]) {
              if (episode !== 'checked') {
                newState.partsChecked["Apocrypha"][part][subpart][episode].checked = false;
              }
            }
          } else {
            newState.partsChecked["Apocrypha"][part][subpart] = false;
          }
        }
      }
  
      newState.mogMainChecked = false;
      newState.partsChecked["Seven Shadows Chronicles"].checked = false;
      newState.partsChecked["Event Stories"].checked = false;
      newState.partsChecked["Apocrypha"].checked = false;
      newState.filter = '';
      newState.openParts = {};
      newState.categoryFilters = {};
      newState.sectionFilters = {};
  
      return newState;
    });
  };
  



  // Helper function to reset seasonsChecked
  const resetSeasonsChecked = () => {
    const resetState = {};
    Object.keys(animeDropdownState.seasonsChecked).forEach(season => {
      resetState[season] = { ...animeDropdownState.seasonsChecked[season] };
      Object.keys(resetState[season]).forEach(episode => {
        if (episode !== 'checked') {
          resetState[season][episode] = {
            title: resetState[season][episode].title,
            checked: false
          };
        }
      });

      // Reset the checked property for the season
      resetState[season].checked = false;
    });

    return resetState;
  };


  const resetVolumesChecked = (volumesChecked) => {
    // Directly mutate the volumesChecked object
    Object.keys(volumesChecked).forEach(volumeName => {
      const volume = volumesChecked[volumeName];
      Object.keys(volume).forEach(chapterKey => {
        if (chapterKey !== 'checked') {
          volume[chapterKey].checked = false;
        }
      });

      // Reset the checked property for the volume
      volume.checked = false;
    });

    // Return the mutated volumesChecked object
    return volumesChecked;
  };

  const resetWNVolumesChecked = (volumesChecked) => {
    // Directly mutate the volumesChecked object
    Object.keys(volumesChecked).forEach(volumeName => {
      const volume = volumesChecked[volumeName];
      Object.keys(volume).forEach(chapterKey => {
        if (chapterKey !== 'checked') {
          volume[chapterKey].checked = false;
        }
      });

      // Reset the checked property for the volume
      volume.checked = false;
    });

    // Return the mutated volumesChecked object
    return volumesChecked;
  };

  const handleMainCheck = () => {
    const isMainChecked = !mainChecked;
    updateAnimeDropdownState('mainChecked', isMainChecked);

    // Update the seasonsChecked state for each episode in each season
    const updatedSeasonsChecked = {};
    Object.keys(animeDropdownState.seasonsChecked).forEach(season => {
      updatedSeasonsChecked[season] = { ...animeDropdownState.seasonsChecked[season] };
      Object.keys(updatedSeasonsChecked[season]).forEach(episode => {
        if (episode !== 'checked') {
          updatedSeasonsChecked[season][episode] = {
            title: updatedSeasonsChecked[season][episode].title,
            checked: isMainChecked
          };
        }
      });

      // Update the checked property for the season
      updatedSeasonsChecked[season].checked = isMainChecked;
    });

    updateAnimeDropdownState('seasonsChecked', updatedSeasonsChecked);
  };


  const handleLNMainCheck = () => {
    const isLNMainChecked = !lnMainChecked;
    updateLNDropdownState('lnMainChecked', isLNMainChecked);

    // Update the volumesChecked state for each chapter in each volume
    const updatedVolumesChecked = {};
    Object.keys(lnDropdownState.volumesChecked).forEach(volumeName => {
      const volume = lnDropdownState.volumesChecked[volumeName];
      const updatedVolume = {};
      Object.keys(volume).forEach(chapterKey => {
        if (chapterKey !== 'checked') {
          updatedVolume[chapterKey] = {
            ...volume[chapterKey],
            checked: isLNMainChecked
          };
        }
      });

      // Update the checked property for the volume
      updatedVolume.checked = isLNMainChecked;
      updatedVolumesChecked[volumeName] = updatedVolume;
    });

    updateLNDropdownState('volumesChecked', updatedVolumesChecked);
  };

  const handleMOGMainCheck = () => {
    setMogDropdownState(prevState => {
      const isMOGMainChecked = !prevState.mogMainChecked;
      const updatedPartsChecked = { ...prevState.partsChecked };

      // Update the checked state of all parts, sections, and episodes for 'Seven Shadows Chronicles'
      const storyTypes = ['Seven Shadows Chronicles', 'Apocrypha'];

      storyTypes.forEach(storyType => {
        Object.keys(updatedPartsChecked[storyType]).forEach(part => {
          if (part !== 'checked') {
            updatedPartsChecked[storyType][part].checked = isMOGMainChecked;
            Object.keys(updatedPartsChecked[storyType][part]).forEach(section => {
              if (section !== 'checked') {
                updatedPartsChecked[storyType][part][section].checked = isMOGMainChecked;
                Object.keys(updatedPartsChecked[storyType][part][section]).forEach(episode => {
                  if (episode !== 'checked' && typeof updatedPartsChecked[storyType][part][section][episode] === 'object') {
                    updatedPartsChecked[storyType][part][section][episode].checked = isMOGMainChecked;
                  }
                });
              }
            });
          }
        });
      });
      

      // Update the checked state of all parts and episodes for 'Event Stories'
      const eventType = 'Event Stories';
      Object.keys(updatedPartsChecked[eventType]).forEach(part => {
        if (part !== 'checked') {
          // If canonActive is true and part is not in canonES, skip updating the checked state for this part and its episodes
          if (!(canonActive && !canonES.includes(part))) {
            updatedPartsChecked[eventType][part].checked = isMOGMainChecked;
            Object.keys(updatedPartsChecked[eventType][part]).forEach(episode => {
              if (episode !== 'checked' && typeof updatedPartsChecked[eventType][part][episode] === 'object') {
                updatedPartsChecked[eventType][part][episode].checked = isMOGMainChecked;
              }
            });
          }
        }
      });
      // Check if all parts are unchecked for both 'Seven Shadows Chronicles' and 'Event Stories'
      ['Seven Shadows Chronicles', 'Event Stories', 'Apocrypha'].forEach(storyType => {
        const allPartsUnchecked = Object.values(updatedPartsChecked[storyType]).every(part => !part.checked);

        if (allPartsUnchecked) {
          // If all parts are unchecked, uncheck the storyType checkbox
          updatedPartsChecked[storyType].checked = false;
        } else {
          // If not all parts are unchecked, check the storyType checkbox
          updatedPartsChecked[storyType].checked = true;
        }
      });

      return {
        ...prevState,
        mogMainChecked: isMOGMainChecked,
        partsChecked: updatedPartsChecked
      };
    });
  };


  const handleWNMainCheck = () => {
    const isWNMainChecked = !wnMainChecked;
    updateWNDropdownState('wnMainChecked', isWNMainChecked);

    // Update the volumesChecked state for each chapter in each volume
    const updatedVolumesChecked = {};
    Object.keys(wnDropdownState.volumesChecked).forEach(volumeName => {
      const volume = wnDropdownState.volumesChecked[volumeName];
      const updatedVolume = {};
      Object.keys(volume).forEach(chapterKey => {
        if (chapterKey !== 'checked') {
          updatedVolume[chapterKey] = {
            ...volume[chapterKey],
            checked: isWNMainChecked
          };
        }
      });

      // Update the checked property for the volume
      updatedVolume.checked = isWNMainChecked;
      updatedVolumesChecked[volumeName] = updatedVolume;
    });

    updateWNDropdownState('volumesChecked', updatedVolumesChecked);
  };











  return (
    <div className={`mediums-container ${mediumFlash  ? 'flash-selected' : ''}`}>
      <h2 className={`mediums-title ${mediumFlash  ? 'flash' : ''}`}>MEDIUMS</h2>
      <div className="checkbox-container">
        <LNDropdownMenu
          lnDropdownState={lnDropdownState}
          updateLNDropdownState={updateLNDropdownState}
          openLN={openLN}
          setOpenLN={setOpenLN}
          volumeImages={images.lnCoverImages}
        />
        <input
          type="checkbox"
          checked={lnMainChecked}
          onChange={handleLNMainCheck}
        />
      </div>
      <div className="checkbox-container">
        <WNDropdownMenu
          wnDropdownState={wnDropdownState}
          updateWNDropdownState={updateWNDropdownState}
          openWN={openWN}
          setOpenWN={setOpenWN}
          volumeImages={images.animeCoverImages}
        />
        <input
          type="checkbox"
          checked={wnMainChecked}
          onChange={handleWNMainCheck}
        />
      </div>
      <div className="checkbox-container">
        <AnimeDropdownMenu
          animeDropdownState={animeDropdownState}
          updateAnimeDropdownState={updateAnimeDropdownState}
          openAnime={openAnime}
          setOpenAnime={setOpenAnime}
          seasonImages={images.animeCoverImages}
        />
        <input
          type="checkbox"
          checked={mainChecked}
          onChange={handleMainCheck}
        />
      </div>
      <div className="checkbox-container">
        <MOGDropdownMenu
          mogDropdownState={mogDropdownState}
          setMogDropdownState={setMogDropdownState}
          openMOG={openMOG}
          setOpenMOG={setOpenMOG}
          canonActive={canonActive}
          canonES={canonES}
          images={images}
        />
        <input
          type="checkbox"
          checked={mogMainChecked}
          onChange={handleMOGMainCheck}
        />
      </div>
      <FontAwesomeIcon
        icon={faC}
        className={`canon-button ${canonActive ? 'active' : ''}`}
        title='Canon Only'
        onClick={handleCanon}
      />
      <FontAwesomeIcon
        icon={faRotateRight}
        className="reset-button"
        onClick={handleReset}
        title="Reset"
      />
    </div>
  );
}

export default MediumsContainer;