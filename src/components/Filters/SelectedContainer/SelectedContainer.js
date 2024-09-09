// SelectedContainer.js
import React, { useRef, useState, useEffect } from 'react';
import './SelectedContainer.css';

function SelectedContainer({ wnDropdownState, mogDropdownState, animeDropdownState, lnDropdownState, dropdownStates, namedActive, canonActive }) {
  let animeCheckedItems = [];
  if (!Object.keys(lnDropdownState).length || !Object.keys(mogDropdownState).length || !Object.keys(animeDropdownState).length || !Object.keys(wnDropdownState).length) {
    return;
  }

  const apoCheckedItems = mogDropdownState.partsChecked["Apocrypha"];



  if (animeDropdownState && animeDropdownState.seasonsChecked) {
    animeCheckedItems = Object.entries(animeDropdownState.seasonsChecked)
      .flatMap(([season, episodes]) =>
        Object.entries(episodes)
          .filter(([episodeId, episodeData]) => episodeData.checked && episodeId !== 'checked')
          .map(([episodeId]) => {
            const [season, ep] = episodeId.split('e');
            return `an_${season}_e${ep}`;
          })
      );
  }


  let sscCheckedItems = [];
  for (let group in mogDropdownState.partsChecked) {
    if (group === "Seven Shadows Chronicles") {
      for (let part in mogDropdownState.partsChecked[group]) {
        for (let section in mogDropdownState.partsChecked[group][part]) {
          if (section !== 'checked') {
            for (let episode in mogDropdownState.partsChecked[group][part][section]) {
              if (episode !== 'checked' && mogDropdownState.partsChecked[group][part][section][episode].checked) {
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
          if (episode !== 'checked' && mogDropdownState.partsChecked[group][part][episode].checked) {
            esCheckedItems.push(`es_${part}_${episode}`);
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
      key = key.replace('es', 'ES').replace(/_/g, ' ');
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

    if (selectedList.length === Object.keys(mogDropdownState.partsChecked['Event Stories']).length - 1 && Object.keys(selectedList).every(key => !selectedList[key].text.includes("Episode"))) {
      return [{ text: "MOG Event Stories", hoverText: "Master of Garden, Event Stories" }]
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
    sscCheckedItems = sscCheckedItems.sort();

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
      } else if (item.text === "MOG SSC SOS C3-1-5") {
        groupedMainParts.push({ text: "MOG SSC Secret of Sacra", hoverText: "Master of Garden, Seven Shadows Chronicles, Part 3 Secret of Sacra" })
      } else {
        groupedMainParts.push(item)
      }
    });

    let containsC3_1 = false;
    let containsC3_2_3 = false;
    let containsC2_1 = false;
    let containsC2_2_13 = false;

    for (const item of groupParts) {
      if (item.text === "MOG SSC SOS C3-1") {
        containsC3_1 = true;
      } else if (item.text === "MOG SSC SOS C3-2-5") {
        containsC3_2_3 = true;
      } else if (item.text === "MOG SSC SOV C2-1") {
        containsC2_1 = true;
      } else if (item.text === "MOG SSC SOV C2-2-13") {
        containsC2_2_13 = true;
      }
    }

    if (containsC2_1 && containsC2_2_13) {
      groupedMainParts.push({ text: "MOG SSC Sturm of Velgalta", hoverText: "Master of Garden, Seven Shadows Chronicles, Part 2 Sturm of Velgalta" })
      groupedMainParts = groupedMainParts.filter(item => {
        return item.text !== "MOG SSC SOV C2-1" && item.text !== "MOG SSC SOV C2-2-13";
      });
    }

    if (containsC3_1 && containsC3_2_3) {
      groupedMainParts.push({ text: "MOG SSC Secret of Sacra", hoverText: "Master of Garden, Seven Shadows Chronicles, Part 3 Secret of Sacra" })
      groupedMainParts = groupedMainParts.filter(item => {
        return item.text !== "MOG SSC SOS C3-1" && item.text !== "MOG SSC SOS C3-2-5";
      });
    }



    let mainGroups = ["MOG SSC Rise of Garden", "MOG SSC Sturm of Velgalta", "MOG SSC Secret of Sacra"];
    if (mainGroups.every(group => groupedMainParts.some(item => item.text === group))) {
      groupedMainParts = groupedMainParts.filter(item => !mainGroups.includes(item.text));
      groupedMainParts.push({ text: "MOG Seven Shadows Chronicles", hoverText: "Master of Garden, Seven Shadows Chronicles" });
    }

    return groupedMainParts;

  };

  const getSelectedAPOList = () => {
    let apoList = [];
    const shortName = {
      "1 | Requiem for Scattered Shadows": "RFSS",
      "1 | Millennium Past": "MP",
      "2 | Heroes of Time": "HOT"
    };

    // Check if all parts, chapters, and episodes are checked
    const allChecked = Object.values(apoCheckedItems).every(part => {
      // Check if part is an object with a 'checked' property or if it's directly true
      const partChecked = typeof part === 'object' ? part.checked : part === true;
      return partChecked && (!part.checked || Object.values(part).every(chapter => {
        // Check if chapter is an object with a 'checked' property or if it's directly true
        const chapterChecked = typeof chapter === 'object' ? chapter.checked : chapter === true;
        return chapterChecked && (!chapter.checked || Object.values(chapter).every(episode => {
          // Check if episode is an object with a 'checked' property or if it's directly true
          const episodeChecked = typeof episode === 'object' ? episode.checked : episode === true;
          return episodeChecked;
        }));
      }));
    });

    if (allChecked) {
      apoList.push({
        text: 'MOG Apocrypha',
        hoverText: 'Master of Garden, Apocrypha'
      });
      return apoList; // Return the list with only 'Apocrypha' if everything is checked
    }

    Object.entries(apoCheckedItems).forEach(([part, chapters]) => {
      if (part === 'checked') {
        return;
      }
      const allChaptersChecked = Object.entries(chapters).every(([chapterKey, episodes]) => {
        if (chapterKey === 'checked') {
          return true; // Skip 'checked' property
        }
        return episodes.checked && Object.entries(episodes).every(([episodeKey, episode]) => {
          if (episodeKey === 'checked') {
            return true; // Skip 'checked' property
          }
          return episode.checked;
        });
      });


      if (allChaptersChecked) {
        apoList.push({
          text: `MOG APO ${part.split("|")[1]}`,
          hoverText: `Master of Garden, Apocrypha,${part.split("|")[1]}`
        });
        return; // Skip the rest of this iteration since all chapters and episodes are checked
      }
      Object.entries(chapters).forEach(([chapter, episodes]) => {
        if (chapter === 'checked') {
          // Skip the rest of this iteration if chapter is 'checked'
          return;
        }
        // Exclude the 'checked' property right from the start
        const filteredEpisodes = Object.fromEntries(Object.entries(episodes).filter(([key, _]) => key !== 'checked'));

        // Now iterate over filteredEpisodes instead of episodes
        const allEpisodesChecked = Object.values(filteredEpisodes).every(episode => episode.checked);


        if (allEpisodesChecked) {
          apoList.push({
            text: `MOG APO ${chapter.split("|")[1]}`,
            hoverText: `Master of Garden, Apocrypha,${chapter.split("|")[1]}`
          });
        } else {
          let episodeGroups = {};
          // Group episodes by their main episode number, ensuring title exists
          Object.entries(episodes).sort().forEach(([episodeKey, episodeValue]) => {
            if (episodeValue && episodeValue.title) {
              const mainEpisodeNumber = episodeKey.includes('-') ? episodeKey.split('-')[0] : episodeKey;
              if (!episodeGroups[mainEpisodeNumber]) {
                episodeGroups[mainEpisodeNumber] = {
                  checked: [],
                  unchecked: [],
                  title: episodeValue.title.includes('-') ? episodeValue.title.split('-')[0].trim() : episodeValue.title
                };
              }
              if (episodeValue.checked) {
                episodeGroups[mainEpisodeNumber].checked.push(episodeKey);
              } else {
                episodeGroups[mainEpisodeNumber].unchecked.push(episodeKey);
              }
            }
          });

          // Add episodes to apoList
          Object.values(episodeGroups).forEach(group => {
            if (group.unchecked.length === 0 && group.checked.length > 1) { // All parts of an episode are checked
              apoList.push({
                text: `MOG APO ${shortName[part] || part} ${shortName[chapter] || chapter} ${group.title.replace("Episode ", "E")}`,
                hoverText: `Master of Garden, Apocrypha,${part.split("|")[1]},${chapter.split("|")[1]}, ${group.title}`
              });
            } else { // Not all parts are checked or it's a single part episode
              // Combine adjacent parts
              const combinedParts = group.checked.sort().reduce((acc, episodeKey, index, array) => {
                const nextKey = array[index + 1];
                const mainEpisodeNumber = episodeKey.includes('-') ? episodeKey.split('-')[0] : episodeKey;
                const currentPartNumber = episodeKey.includes('-') ? parseInt(episodeKey.split('-')[1]) : null;
                const nextPartNumber = nextKey && nextKey.includes('-') ? parseInt(nextKey.split('-')[1]) : null;

                if (currentPartNumber !== null && nextPartNumber && currentPartNumber + 1 === nextPartNumber) {
                  if (!acc.temp) acc.temp = [currentPartNumber];
                  acc.temp.push(nextPartNumber);
                } else {
                  if (acc.temp) {
                    acc.combined.push(`${mainEpisodeNumber}-${acc.temp[0]}-${acc.temp[acc.temp.length - 1]}`);
                    acc.temp = null;
                  } else {
                    acc.combined.push(episodeKey);
                  }
                }
                return acc;
              }, { combined: [], temp: null }).combined;

              combinedParts.forEach(partNumber => {
                let hoverText = `Master of Garden, Apocrypha,${part.split("|")[1]},${chapter.split("|")[1]}, `;

                // Check if partNumber contains two dashes and adjust hoverText accordingly
                const dashCount = (partNumber.match(/-/g) || []).length;
                hoverText += dashCount === 2 ? "Episodes " : "Episode ";
                hoverText += partNumber.replace("e", "");
                apoList.push({
                  text: `MOG APO ${shortName[part] || part} ${shortName[chapter] || chapter} ${partNumber.replace("e", "E")}`,
                  hoverText: hoverText
                });
              });
            }



          });
        }

      });

    });
    const groupAdjacentEpisodes = (list) => {
      const grouped = list.reduce((acc, item, index, array) => {
        const currentEpisode = item.text.split(' ')[4]; // Assuming 'E1', 'E2', etc. are at this position
        const nextEpisode = array[index + 1] ? array[index + 1].text.split(' ')[4] : null;

        // Check if current or next episode contains a dash
        const hasCurrentDash = currentEpisode.includes('-');
        const hasNextDash = nextEpisode ? nextEpisode.includes('-') : false;

        if (!hasCurrentDash) {
          const currentNumber = parseInt(currentEpisode.replace('E', ''));
          const nextNumber = hasNextDash ? null : nextEpisode ? parseInt(nextEpisode.replace('E', '')) : null;

          if (nextNumber && currentNumber + 1 === nextNumber) {
            if (!acc.temp) acc.temp = [currentEpisode];
            acc.temp.push(nextEpisode);
          } else {
            if (acc.temp) {
              const lastOccurrenceRegexText = new RegExp(`E${acc.temp[acc.temp.length - 1].replace('E', '')}$`);
              // Replace only the last occurrence of 'Episode <number>' in hoverText
              const lastOccurrenceRegexHover = new RegExp(`Episode ${acc.temp[acc.temp.length - 1].replace('E', '')}$`);

              acc.grouped.push({
                text: item.text.replace(lastOccurrenceRegexText, `E${acc.temp[0].replace('E', '')}-${acc.temp[acc.temp.length - 1].replace('E', '')}`),
                hoverText: item.hoverText.replace(lastOccurrenceRegexHover, `Episodes ${acc.temp[0].replace('E', '')}-${acc.temp[acc.temp.length - 1].replace('E', '')}`)
              });
              acc.temp = null;
            } else {
              acc.grouped.push(item);
            }
          }
        } else {
          if (acc.temp) {
            // Replace only the last occurrence of E<number> in text and hoverText
            const lastOccurrenceRegex = new RegExp(`${acc.temp[acc.temp.length - 1]}$`);
            acc.grouped.push({
              text: item.text.replace(lastOccurrenceRegex, `${acc.temp[0]}-${acc.temp[acc.temp.length - 1].replace('E', '')}`),
              hoverText: item.hoverText.replace(lastOccurrenceRegex, `Episodes ${acc.temp[0]}-${acc.temp[acc.temp.length - 1].replace('E', '')}`)
            });
            acc.temp = null;
          }
          acc.grouped.push(item);
        }
        return acc;
      }, { grouped: [], temp: null }).grouped;

      return grouped;
    };

    apoList = groupAdjacentEpisodes(apoList);

    // Return the new list with combined episodes
    return apoList;

  };

  const getSelectedWNList = () => {
    let wnList = [];
    const volumesChecked = wnDropdownState.volumesChecked
    const totalVolumes = Object.keys(volumesChecked).length;
    const checkedVolumes = Object.values(volumesChecked).filter(volume => {
      // Get only the chapters from the volume
      const chapters = Object.entries(volume).filter(([key]) => key.startsWith('v'));
      // Check if all chapters are checked
      return chapters.every(([, chapter]) => chapter.checked);
    }).length;

    if (wnDropdownState.wnMainChecked && totalVolumes === checkedVolumes) {
      wnList.push({ text: 'Web Novel', hoverText: 'Web Novel' });
    } else {
      Object.entries(volumesChecked).sort((a, b) => {
        return a[0].localeCompare(b[0])
      }).forEach(([volumeName, volume]) => {
        const checkedChapters = Object.entries(volume).filter(([chapterKey, chapter]) => chapter.checked).sort((a, b) => {
          const aNum = parseInt(a[0].split("c")[1], 10)
          const bNum = parseInt(b[0].split("c")[1], 10)
          return aNum - bNum;
        });
        if (checkedChapters.length === Object.keys(volume).length - 1) {
          wnList.push({ text: `Web Novel Volume ${volumeName.split(' ')[1]}`, hoverText: `Web Novel Volume ${volumeName.split(' ')[1]}` });
        }
        else {
          let ranges = [];
          let rangeStart = null;
          let rangeEnd = null;
          for (let i = 0; i < checkedChapters.length; i++) {
            const chapterNumber = parseInt(checkedChapters[i][0].split('c')[1]);
            if (rangeStart === null) {
              rangeStart = chapterNumber;
              rangeEnd = chapterNumber;
            }
            rangeEnd = chapterNumber;
            if (i === checkedChapters.length - 1 || (i + 1 < checkedChapters.length && parseInt(checkedChapters[i + 1][0].split('c')[1]) !== chapterNumber + 1)) {
              ranges.push(`C${rangeStart}${rangeStart !== rangeEnd ? `-${rangeEnd}` : ''}`);
              rangeStart = null;
              rangeEnd = null;
            }
          }
          // Add this to handle the case where the last chapter is checked but not added to the range
          if (rangeStart !== null) {
            ranges.push(`C${rangeStart}${rangeStart !== rangeEnd ? `-${rangeEnd}` : ''}`);
          }
          ranges.sort((a, b) => parseInt(a.split('C')[1]) - parseInt(b.split('C')[1]));
          wnList.push(...ranges.map(range => ({ text: `WN V${volumeName.split(' ')[1]} ${range}`, hoverText: `Web Novel, Volume ${volumeName.split(' ')[1]}, ${range.includes('-') ? 'Chapters' : 'Chapter'} ${range.split('C')[1]}` })));
        }
      });
    }
    return wnList;
  };

  const getSelectedLNList = () => {
    let lnList = [];
    const volumesChecked = lnDropdownState.volumesChecked;
    const totalVolumes = Object.keys(volumesChecked).length;
    const checkedVolumes = Object.values(volumesChecked).filter(volume => {
      const chapters = Object.entries(volume).filter(([key]) => key.startsWith('v'));
      return chapters.every(([, chapter]) => chapter.checked);
    }).length;

    if (lnDropdownState.lnMainChecked && totalVolumes === checkedVolumes) {
      lnList.push({ text: 'Light Novel', hoverText: 'Light Novel' });
    } else {
      Object.entries(volumesChecked).sort((a, b) => {
        return a[0].localeCompare(b[0])
      }).forEach(([volumeName]) => {
        const volume = volumesChecked[volumeName];
        const checkedChapters = Object.values(volume).filter(chapter => chapter.checked).sort((a, b) => {
          const aKey = Object.keys(volume).find(key => volume[key].title === a.title);
          const bKey = Object.keys(volume).find(key => volume[key].title === b.title);
          const aNum = parseInt(aKey.split("c")[1], 10)
          const bNum = parseInt(bKey.split("c")[1], 10)
          return aNum - bNum;
        });
        if (checkedChapters.length === Object.keys(volume).length - 1) {
          lnList.push({ text: `Light Novel Volume ${volumeName.split(' ')[1]}`, hoverText: `Light Novel Volume ${volumeName.split(' ')[1]}` });
        }
        else {
          let ranges = [];
          let rangeStart = null;
          let rangeEnd = null;
          let chapterId = null; // Define chapterId here
          for (let i = 0; i < checkedChapters.length; i++) {
            const chapterNumber = checkedChapters[i].title.split('|')[0].trim();
            chapterId = checkedChapters[i].id; // Update chapterId here
            let chapterType = '';
            switch (chapterNumber) {
              case 'P':
                chapterType = 'Prologue';
                ranges.push({ id: chapterId, type: chapterType });
                continue;
              case 'E':
                if (volumeName === "Volume 3") {
                  if (volumesChecked["Volume 3"]["v3c8"].checked) {
                    chapterType = 'E';
                  } else {
                    chapterType = 'Epilogue';
                    ranges.push({ id: chapterId, type: chapterType });
                    continue;
                  }
                } else if (volumeName === "Volume 4") {
                  if (volumesChecked["Volume 4"]["v4c8"].checked) {
                    chapterType = 'E';
                  } else {
                    chapterType = 'Epilogue';
                    ranges.push({ id: chapterId, type: chapterType });
                    continue;
                  }

                } else if (volumeName === "Volume 5") {
                  if (volumesChecked["Volume 5"]["v5c6"].checked) {
                    chapterType = 'E';
                  } else {
                    chapterType = 'Epilogue';
                    ranges.push({ id: chapterId, type: chapterType });
                    continue;
                  }
                } else if (volumeName === "Volume 6") {
                  if (volumesChecked["Volume 6"]["v6c8"].checked) {
                    chapterType = 'E';
                  } else {
                    chapterType = 'Epilogue';
                    ranges.push({ id: chapterId, type: chapterType });
                    continue;
                  }
                }
                break;
              case 'F':
                if (volumeName === "Volume 1") {
                  if (volumesChecked["Volume 1"]["v1c7"].checked) {
                    chapterType = 'F';
                  } else {
                    chapterType = 'Final Chapter';
                    ranges.push({ id: chapterId, type: chapterType });
                    continue;
                  }
                } else if (volumeName === "Volume 2") {
                  if (volumesChecked["Volume 2"]["v2c9"].checked) {
                    chapterType = 'F';
                  } else {
                    chapterType = 'Final Chapter';
                    ranges.push({ id: chapterId, type: chapterType });
                    continue;
                  }
                }
                break;
              case 'I':
                chapterType = 'Intermission';
                ranges.push({ id: chapterId, type: chapterType });
                continue;
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
            if (i === checkedChapters.length - 1 || (i + 1 < checkedChapters.length && checkedChapters[i + 1].title.split('|')[0].trim() !== 'F' && checkedChapters[i + 1].title.split('|')[0].trim() !== 'E' && parseInt(checkedChapters[i + 1].title.split('|')[0].trim()) !== chapterType + 1)) {
              ranges.push(`C${rangeStart}${rangeStart !== rangeEnd ? `-${rangeEnd}` : ''}`);
              rangeStart = null;
              rangeEnd = null;
            }
          }

          // Add this to handle the case where the last chapter is checked but not added to the range
          if (rangeStart !== null) {
            ranges.push(`C${rangeStart}${rangeStart !== rangeEnd ? `-${rangeEnd}` : ''}`);
          }
          lnList.push(...ranges.map(range => typeof range === 'string' ? { text: `LN V${volumeName.split(' ')[1]} ${range}`, hoverText: `Light Novel, Volume ${volumeName.split(' ')[1]}, ${range.includes('-') ? 'Chapters' : 'Chapter'} ${range.split('C')[1].replace('-F', '-Final').replace('-E', '-Epilogue')}` } : { text: `LN V${volumeName.split(' ')[1]} ${range.type}`, hoverText: `Light Novel Volume ${volumeName.split(' ')[1]} ${range.type}` }));
          lnList = lnList.sort((a, b) => {
            let [aLN, aVol, aName] = a.text.split(" ");
            let [bLN, bVol, bName] = b.text.split(" ");

            if (aVol !== bVol) {
              return bVol - aVol;
            }

            const isAE = aName.includes("-E") || aName === 'Epilogue';
            const isBE = bName.includes("-E") || bName === 'Epilogue';
            const isAppendixA = aName === 'Appendix';
            const isAppendixB = bName === 'Appendix';
        
            if (isAppendixA && isAppendixB) {
                return 0;
            }
        
            if (isAppendixA) {
                return 1;
            }
            if (isAppendixB) {
                return -1;
            }
        
            if (isAE && isBE) {
                return 0;
            }
        
            if (isAE) {
                return 1;
            }
            if (isBE) {
                return -1;
            }
        
            return 0;
          });
        }
      });
    }
    return lnList;
  };

  const getSelectedAnimeList = () => {
    const totalEpisodes = { 'an_s1': 20, 'an_s2': 12, "an_s101": 17, "an_s102": 12 };
    const countEpisodes = animeCheckedItems.reduce((acc, item) => {
      const season = item.split('_e')[0];
      acc[season] = (acc[season] || 0) + 1;
      return acc;
    }, {});

    let newList = [];
    if (countEpisodes['an_s1'] === totalEpisodes['an_s1'] && countEpisodes['an_s2'] === totalEpisodes['an_s2']
      && countEpisodes['an_s101'] === totalEpisodes['an_s101'] && countEpisodes['an_s102'] === totalEpisodes['an_s102']) {
      newList.push({ text: 'Anime', hoverText: 'Anime' });
    } else {
      ['an_s1', 'an_s2', 'an_s101', 'an_s102'].forEach(season => {
        const seasonNumber = season.split('_s')[1]; // Extract the season number correctly
        if (countEpisodes[season] === totalEpisodes[season]) {
          if (seasonNumber === '101') {
            newList.push({ text: `Kage-Jitsu!`, hoverText: `Kage-Jitsu!` });
          } else if (seasonNumber === '102') {
            newList.push({ text: `Kage-Jitsu! 2nd`, hoverText: `Kage-Jitsu! 2nd` });
          } else {
            newList.push({ text: `Anime Season ${seasonNumber}`, hoverText: `Anime Season ${seasonNumber}` });
          }

        } else {
          const episodes = animeCheckedItems.filter(item => item.split("_e")[0] === season).map(item => parseInt(item.split('_e')[1]));
          episodes.sort((a, b) => a - b);

          let start = episodes[0];
          let end = start;
          for (let i = 1; i < episodes.length; i++) {
            if (episodes[i] === end + 1) {
              end = episodes[i];
            } else {
              if (seasonNumber === '101') {
                newList.push({ text: `KJ E${start}${start !== end ? `-${end}` : ''}`, hoverText: `Kage-Jitsu!, Episode${start !== end ? `s ${start}-${end}` : ` ${start}`}` });
              } else if (seasonNumber === '102') {
                newList.push({ text: `KJ2 E${start}${start !== end ? `-${end}` : ''}`, hoverText: `Kage-Jitsu! 2nd, Episode${start !== end ? `s ${start}-${end}` : ` ${start}`}` });
              } else {
                newList.push({ text: `AN S${seasonNumber} E${start}${start !== end ? `-${end}` : ''}`, hoverText: `Anime Season ${seasonNumber}, Episode${start !== end ? `s ${start}-${end}` : ` ${start}`}` });
              }


              start = episodes[i];
              end = start;
            }
          }
          if (start <= end) {
            if (seasonNumber === '101') {
              newList.push({ text: `KJ E${start}${start !== end ? `-${end}` : ''}`, hoverText: `Kage-Jitsu!, Episode${start !== end ? `s ${start}-${end}` : ` ${start}`}` });
            } else if (seasonNumber === '102') {
              newList.push({ text: `KJ2 E${start}${start !== end ? `-${end}` : ''}`, hoverText: `Kage-Jitsu! 2nd, Episode${start !== end ? `s ${start}-${end}` : ` ${start}`}` });
            } else {
              newList.push({ text: `AN S${seasonNumber} E${start}${start !== end ? `-${end}` : ''}`, hoverText: `Anime Season ${seasonNumber}, Episode${start !== end ? `s ${start}-${end}` : ` ${start}`}` });
            }

          }
        }
      });
    }
    return newList;
  };

  const getSelectedCharacterList = () => {
    let characterList = [];
    Object.values(dropdownStates).forEach(dropdown => {
      // Check if there are groups and iterate over them
      if (dropdown.groups) {
        Object.values(dropdown.groups).forEach(group => {
          // Add group characters
          Object.entries(group.characters).forEach(([character, attributes]) => {
            characterList = characterList.concat(getCharacterEntries(character, attributes));
          });
        });
      }
      // Add standalone characters not within groups
      if (dropdown.characters) {
        Object.entries(dropdown.characters).forEach(([character, attributes]) => {
          characterList = characterList.concat(getCharacterEntries(character, attributes));
        });
      }
    });

    return characterList;
  };

  // Helper function to get character entries
  const getCharacterEntries = (character, attributes) => {
    let entries = [];
    const subnames = Object.entries(attributes).filter(([name, checked]) => name !== 'checked' && name !== 'open');
    const checkedSubnames = subnames.filter(([name, checked]) => checked);
    if (subnames.length > 0 && subnames.length === checkedSubnames.length) {
      // If all subnames are checked, add the main character name with '(All)' after it to the list
      // Include a list of all the variants in the hover text
      const variants = subnames.map(([name]) => name).join(', ');
      entries.push({ text: `${character} (All)`, hoverText: `${variants}` });
    } else if (checkedSubnames.length > 0) {
      // If some subnames are checked, add them to the list
      checkedSubnames.forEach(([subname]) => {
        entries.push({ text: subname, hoverText: subname });
      });
    } else if (attributes.checked) {
      // If the main character is checked and there are no checked subnames, add the main character to the list
      entries.push({ text: character, hoverText: character });
    }
    return entries;
  };


  // Call the function to get the new list
  const selectedAnimeList = getSelectedAnimeList();
  const selectedLNList = getSelectedLNList();
  const selectedCharacterList = getSelectedCharacterList();
  const selectedSSCList = getSelectedSSCList();
  const selectedESList = getSelectedESList();
  const selectedAPOList = getSelectedAPOList();
  const selectedWNList = getSelectedWNList();

  let mogCombined = [...selectedSSCList, ...selectedESList, ...selectedAPOList];
  if (mogCombined.length === 3) {
    if (mogCombined[0].text === "MOG Seven Shadows Chronicles" &&
      mogCombined[1].text === "MOG Event Stories"
      && mogCombined[2].text === "MOG Apocrypha") {
      mogCombined = [{ text: "Master of Garden", hoverText: "Master of Garden" }]
    }
    if (mogCombined[0].text === "MOG Seven Shadows Chronicles"
      && mogCombined[1].text === "MOG ES Auxiliary Chapters"
      && mogCombined[2].text === "MOG Apocrypha") {
      mogCombined = [{ text: "Master of Garden (Canon)", hoverText: "Master of Garden (Canon)" }]
    }
  }



  const selectedMediumList = [...selectedLNList, ...selectedWNList, ...selectedAnimeList, ...mogCombined]
  if (selectedMediumList.length === 0) {
    const mediumText = canonActive ? 'Any Canon Medium' : 'Any Medium';
    selectedMediumList.push({ text: mediumText, hoverText: mediumText });
  }

  if (selectedCharacterList.length === 0) {
    const characterText = namedActive ? 'Any "Named" Character' : 'Any Character';
    selectedCharacterList.push({ text: characterText, hoverText: characterText });
  }

  return (
    <div className={`selected-container`}>
      <h2 className="selected-title">SELECTED</h2>
      <p className={`selected-subtitle`}>MEDIUMS</p>
      <div className={`selected-input-container`}>
        {selectedMediumList.map((item, index) => (
          <div className="selected-bubble" key={index} title={item.hoverText}>
            {item.text}
          </div>
        ))}
      </div>
      <br />
      <p className="selected-subtitle-char">CHARACTERS</p>
      <div className="selected-input-container">
        {selectedCharacterList.sort((a, b) => {
          return a.text.localeCompare(b.text);
        }).map((item, index) => (
          <div className="selected-bubble" key={index} title={item.hoverText}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedContainer;
