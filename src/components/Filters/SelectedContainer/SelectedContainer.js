// SelectedContainer.js
import React from 'react';
import './SelectedContainer.css';

function SelectedContainer({ mogDropdownState, animeDropdownState, lnDropdownState, dropdownStates, volumes, namedActive, canonActive }) {
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

  // For Seven Shadows Chronicles
  let sscCheckedItems = [];
  for (let group in mogDropdownState.partsChecked) {
    if (group === "Seven Shadows Chronicles") {
      for (let part in mogDropdownState.partsChecked[group]) {
        for (let section in mogDropdownState.partsChecked[group][part]) {
          if (section !== 'checked') {
            for (let episode in mogDropdownState.partsChecked[group][part][section]) {
              if (episode !== 'checked' && mogDropdownState.partsChecked[group][part][section][episode]) {
                sscCheckedItems.push(`${group}_${part}_${section}_${episode}`);
              }
            }
          }
        }
      }
    }
  }

  // For Event Stories
  let esCheckedItems = [];
  for (let group in mogDropdownState.partsChecked) {
    if (group === "Event Stories") {
      for (let part in mogDropdownState.partsChecked[group]) {
        for (let episode in mogDropdownState.partsChecked[group][part]) {
          if (episode !== 'checked' && mogDropdownState.partsChecked[group][part][episode]) {
            esCheckedItems.push(`${group}_${part}_${episode}`);
          }
        }
      }
    }


  }

  const getSelectedESList = () => {
    let groupedEpisodes = {};

    // Sort the items first
    let sortedItems = esCheckedItems.sort((a, b) => parseInt(a.split('_e')[1]) - parseInt(b.split('_e')[1]));

    sortedItems.forEach(item => {
      let [key, episode] = item.split('_e');
      key = key.replace('Event Stories', 'ES').replace(/_/g, ' ');
      episode = parseInt(episode);

      if (!groupedEpisodes[key]) {
        groupedEpisodes[key] = [{ start: episode, end: episode, hoverText: key }];
      } else {
        let lastGroup = groupedEpisodes[key][groupedEpisodes[key].length - 1];
        if (lastGroup.end + 1 === episode) { // Check if the episode is consecutive
          lastGroup.end = episode;
        } else {
          groupedEpisodes[key].push({ start: episode, end: episode, hoverText: key });
        }
      }
    });

    let selectedList = [];

    for (let key in groupedEpisodes) {
      groupedEpisodes[key].forEach(group => {
        if (group.start === 1 && group.end === 7) {
          selectedList.push({
            text: `MOG ${key}`,
            hoverText: `Master of Garden, ${group.hoverText.replace('ES', 'Event Stories,')}`
          });
        } else {
          selectedList.push({
            text: `MOG ${key}${group.start !== group.end ? ' E' + group.start + '-' + group.end : ' E' + group.start}`,
            hoverText: `Master of Garden, ${group.hoverText.replace('ES', 'Event Stories,')}${group.start !== group.end ? ', Episodes ' + group.start + '-' + group.end : ', Episode ' + group.start}`
          });
        }
      });
    }

    if (selectedList.length === 19 && Object.keys(selectedList).every(key => !selectedList[key].text.includes("Episode"))) {
      return [{text: "MOG Event Stories", hoverText: "Master of Garden, Event Stories"}]
    }

    let mainGroups = ["MOG ES Rose of Garden", "MOG ES Truth Seekers", "MOG ES Interlude", "MOG ES Masquerade"];
    if (mainGroups.every(group => selectedList.some(item => item.text === group))) {
      selectedList = selectedList.filter(item => !mainGroups.includes(item.text));
      selectedList.push({ text: "MOG ES Auxiliary Chapters", hoverText: "Master of Garden, Event Stories, Auxiliary Chapters" });
    }

    return selectedList;
  }



  const getSelectedSSCList = () => {
    const shortNames = {
      'Seven Shadows Chronicles': 'SSC',
      'Rise of Garden': 'ROG',
      'Sturm of Velgalta': 'SOV',
      'Secret of Sacra': 'SOS'
    };
    let sscList = [];
    let groupedEpisodes = {};

    sscCheckedItems.forEach(item => {
      let parts = item.split('_');
      let group = parts[0];
      let shortGroup = shortNames[group]
      let partName = parts[1].split(' | ')[1];
      let partStart = parts[1].split(' | ')[0];
      let shortPartName = shortNames[partName];
      let section = parts[2].split(' | ')[0]
      let sectionName = parts[2].split(' | ')[1]
      let episode = parseInt(parts[3].replace('e', ''));

      let key = `MOG ${shortGroup} ${shortPartName} C${section}`;
      if (!groupedEpisodes[key]) {
        groupedEpisodes[key] = { start: episode, end: episode, hoverText: `Master of Garden, ${group}, ${partStart} ${partName}, Chapter ${section} ${sectionName}` };
      } else {
        if (episode === groupedEpisodes[key].end + 1) {
          groupedEpisodes[key].end = episode;
        } else {
          sscList.push({
            text: `${key}${groupedEpisodes[key].start !== groupedEpisodes[key].end ? ' E' + groupedEpisodes[key].start + '-' + groupedEpisodes[key].end : ' E' + groupedEpisodes[key].start}`,
            hoverText: `${groupedEpisodes[key].hoverText}${groupedEpisodes[key].start !== groupedEpisodes[key].end ? ', Episodes ' + groupedEpisodes[key].start + '-' + groupedEpisodes[key].end : ', Episode ' + groupedEpisodes[key].start}`
          });
          groupedEpisodes[key] = { start: episode, end: episode, hoverText: `Master of Garden, ${group}, ${partStart} ${partName}, Chapter ${section} ${sectionName}` };
        }
      }
    });

    Object.keys(groupedEpisodes).forEach(key => {
      let episodeText = '';
      let hoverText = '';
      if (groupedEpisodes[key].end - groupedEpisodes[key].start === 4) {
        episodeText = '';
        hoverText = '';
      } else {
        episodeText = ` E${groupedEpisodes[key].start}${groupedEpisodes[key].start !== groupedEpisodes[key].end ? '-' + groupedEpisodes[key].end : ''}`;
        hoverText = `, ${groupedEpisodes[key].start !== groupedEpisodes[key].end ? 'Episodes ' : 'Episode '}${groupedEpisodes[key].start}${groupedEpisodes[key].start !== groupedEpisodes[key].end ? '-' + groupedEpisodes[key].end : ''}`;
      }
      sscList.push({
        text: `${key}${episodeText}`,
        hoverText: `${groupedEpisodes[key].hoverText}${hoverText}`
      });

      sscList.sort((a, b) => {
        // Split the text into main parts and sub-parts.
        let aParts = a.text.split(' ');
        let bParts = b.text.split(' ');
        let aNum;
        let bNum;

        // Compare the main parts first.
        let aMainPart = aParts[3].split("-")[0].replace("C", "");
        let bMainPart = bParts[3].split("-")[0].replace("C", "");

        if (aMainPart < bMainPart) return -1;
        if (aMainPart > bMainPart) return 1;

        if (aParts[4] === "Final") {
          aNum = "C-1-99";
        } else {
          aNum = aParts[3];
        }
        if (bParts[4] === "Final") {
          bNum = "C-1-99";
        } else {
          bNum = bParts[3];
        }
        // If the main parts are equal, compare the sub-parts.
        if (aNum && bNum) {
          let aSubPart = Number(aNum.replace(/[^0-9]/g, ''));
          let bSubPart = Number(bNum.replace(/[^0-9]/g, ''));

          if (aSubPart < bSubPart) return -1;
          if (aSubPart > bSubPart) return 1;
        }

        // If all parts are equal, the items are equal.
        return 0;
      });

      return sscList;
    });

    let groupParts = [];
    let currentGroup = null;
    let currentStart = null;
    let currentEnd = null;
    let currentText = null;
    let currentHover = null;
    let groupCount = 0;

    sscList.forEach(item => {
      let text = item.text;
      let hoverText = item.hoverText;
      let parts = text.split(' ');
      let partNumber = parts[3].replace('C', '');
      let partMain;
      let subMain;
      if (parts[4] === "Final") {
        partMain = "1"
        subMain = "15"
      } else {
        partMain = partNumber.split("-")[0]
        subMain = partNumber.split("-")[1]
      }


      if (currentGroup === null) {
        if (parts[parts.length - 1].includes("E")) {
          groupParts.push({ text: text, hoverText: hoverText })
        } else {
          currentGroup = partMain;
          currentStart = subMain;
          currentEnd = subMain;
          currentText = text;
          currentHover = hoverText;
          groupCount = 1;
        }

      } else {
        if (parseInt(subMain) - parseInt(currentStart) === groupCount && !parts[parts.length - 1].includes("E") && currentGroup === partMain) {
          currentEnd = subMain;
          groupCount++;
        } else if (parts[parts.length - 1].includes("E")) {
          if (currentStart !== currentEnd) {
            let hoverSplit = currentHover.split(',');
            let subPartSplit = hoverSplit[3].split(' ');
            let newHoverText = `${hoverSplit[0]},${hoverSplit[1]},${hoverSplit[2]}, Chapters ${subPartSplit[2]}-${currentEnd}`
            groupParts.push({
              text: `${currentText.split('-')[0]}-${currentStart}-${currentEnd.replace("15", "F")}`,
              hoverText: newHoverText
            })
          } else {
            if (currentText !== null) {
              groupParts.push({ text: currentText, hoverText: currentHover })
            }
          }
          currentGroup = null;
          currentStart = null;
          currentEnd = null;
          currentText = null;
          groupCount = 0;
          groupParts.push({ text: text, hoverText: hoverText })

        } else {
          if (currentStart === currentEnd) {
            if (currentStart !== currentEnd) {
              let hoverSplit = currentHover.split(',');
              let subPartSplit = hoverSplit[3].split(' ');
              let newHoverText = `${hoverSplit[0]},${hoverSplit[1]},${hoverSplit[2]}, Chapters ${subPartSplit[2]}-${currentEnd}`
              groupParts.push({
                text: `${currentText.split('-')[0]}-${currentStart}-${currentEnd.replace("15", "F")}`,
                hoverText: newHoverText
              })
            } else {
              if (currentText !== null) {
                groupParts.push({ text: currentText, hoverText: currentHover })
              }
            }
            groupParts.push({ text: text, hoverText: hoverText })
            currentGroup = null;
            currentStart = null;
            currentEnd = null;
            currentText = null;
            groupCount = 0;
          } else {
            groupParts.push({
              text: `${currentText.split('-')[0]}-${currentStart}-${currentEnd.replace("15", "F")}`,
              hoverText: currentHover
            })
            currentGroup = partMain;
            currentStart = subMain;
            currentEnd = subMain;
            currentText = text;
            currentHover = hoverText;
            groupCount = 1;
          }

        }
      }
    });

    if (currentStart !== currentEnd) {
      let hoverSplit = currentHover.split(',');
      let subPartSplit = hoverSplit[3].split(' ');
      let newHoverText = `${hoverSplit[0]},${hoverSplit[1]},${hoverSplit[2]}, Chapters ${subPartSplit[2]}-${currentEnd.replace("15", "F")}`
      groupParts.push({
        text: `${currentText.split('-')[0]}-${currentStart}-${currentEnd.replace("15", "F")}`,
        hoverText: newHoverText
      })
    } else {
      if (currentText !== null) {
        groupParts.push({ text: currentText, hoverText: currentHover })
      }
    }



    let groupedMainParts = [];
    groupParts.forEach(item => {
      if (item.text === "MOG SSC ROG C1-1-F") {
        groupedMainParts.push({ text: "MOG SSC Rise of Garden", hoverText: "Master of Garden, Seven Shadows Chronicles, Part 1 Rise of Garden" })
      } else if (item.text === "MOG SSC SOV C2-1-13") {
        groupedMainParts.push({ text: "MOG SSC Sturm of Velgalta", hoverText: "Master of Garden, Seven Shadows Chronicles, Part 2 Sturm of Velgalta" })
      } else if (item.text === "MOG SSC SOS C3-1") {
        groupedMainParts.push({ text: "MOG SSC Secret of Sacra", hoverText: "Master of Garden, Seven Shadows Chronicles, Part 3 Secret of Sacra" })
      } else {
        groupedMainParts.push(item)
      }
    });



    let mainGroups = ["MOG SSC Rise of Garden", "MOG SSC Sturm of Velgalta", "MOG SSC Secret of Sacra"];
    if (mainGroups.every(group => groupedMainParts.some(item => item.text === group))) {
      groupedMainParts = groupedMainParts.filter(item => !mainGroups.includes(item.text));
      groupedMainParts.push({ text: "MOG Seven Shadows Chronicles", hoverText: "Master of Garden, Seven Shadows Chronicles" });
    }

    return groupedMainParts;

  };










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
          lnList.push(...ranges.map(range => typeof range === 'string' ? { text: `LN V${volume.name.split(' ')[1]} ${range}`, hoverText: `Light Novel, Volume ${volume.name.split(' ')[1]}, ${range.includes('-') ? 'Chapters' : 'Chapter'} ${range.split('C')[1].replace('-F', '-Final')}` } : { text: `LN V${volume.name.split(' ')[1]} ${range.type}`, hoverText: `Light Novel Volume ${volume.name.split(' ')[1]} ${range.type}` }));
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
              newList.push({ text: `AN S${seasonNumber} E${start}${start !== end ? `-${end}` : ''}`, hoverText: `Anime Season ${seasonNumber}, Episode${start !== end ? `s ${start}-${end}` : ` ${start}`}` });
              start = episodes[i];
              end = start;
            }
          }
          if (start <= end) {
            newList.push({ text: `AN S${seasonNumber} E${start}${start !== end ? `-${end}` : ''}`, hoverText: `Anime Season ${seasonNumber}, Episode${start !== end ? `s ${start}-${end}` : ` ${start}`}` });
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
  const selectedSSCList = getSelectedSSCList();
  const selectedESList = getSelectedESList();
  let mogCombined = [...selectedSSCList, ...selectedESList];
  if (canonActive) {
    if (mogCombined.length === 2) {
      if (mogCombined[0].text === "MOG Seven Shadows Chronicles" && mogCombined[1].text === "MOG ES Auxiliary Chapters") {
        mogCombined = [{text: "Master of Garden", hoverText: "Master of Garden"}]
      }
    }
  } else {
    if (mogCombined.length === 2) {
      if (mogCombined[0].text === "MOG Seven Shadows Chronicles" && mogCombined[1].text === "MOG Event Stories") {
        mogCombined = [{text: "Master of Garden", hoverText: "Master of Garden"}]
      }
    }
  
  }



  const selectedMediumList = [...selectedLNList, ...selectedAnimeList, ...mogCombined]
  if (selectedMediumList.length === 0) {
    const mediumText = canonActive ? 'Any Canon Medium' : 'Any Medium';
    selectedMediumList.push({ text: mediumText, hoverText: mediumText });
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
