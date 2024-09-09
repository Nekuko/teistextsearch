// SearchPage.js
import React, { useState, useEffect } from 'react';
import './SearchPage.css'; // Import the CSS file
import Filters from '../Filters/Filters'; // Import the Filters component
import Results from '../Results/Results' // Import the Results component
import { searchLN } from '../Search/searchLN';
import { searchAnime } from '../Search/searchAnime';
import { searchSSC } from '../Search/searchSSC';
import { searchES } from '../Search/searchES';
import { searchWN } from '../Search/searchWN';
import { searchAPO } from '../Search/searchAPO';
import { fetchLNData, fetchWNData, fetchAPOData, fetchESData, fetchSSCData, fetchANData, fetchDropdowns, fetchVersionData, fetchCharactersData, fetchCharacterImages, fetchMediumImageData, fetchMediumImages } from '../../utils/firebaseFunctions';
import { ESMAPREVERSE } from '../../esMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faLightbulb, faC, faRotateRight, faN, faTimes } from '@fortawesome/free-solid-svg-icons'
import { VscCaseSensitive } from "react-icons/vsc";
import { ReactComponent as WholeWord } from '../../svgs/codicon--whole-word.svg';
import { ReactComponent as Regex } from '../../svgs/codicon--regex.svg';
import { analytics } from '../../firebase';
import { logEvent } from 'firebase/analytics'

function createCharacterDropdowns(data) {
    let dropdowns = {};
    let names = {};
    let characterImages = {};
    const groups = data.groups;
    const characters = data.characters;
    for (const [key, value] of Object.entries(groups).sort((a, b) => {
        const groupA = parseInt(a[1]['order'], 10);
        const groupB = parseInt(b[1]['order'], 10);
        return groupA - groupB;
    })) {
        if (key !== 'order') {
            dropdowns[key.toUpperCase()] = {
                openGroup: false,
                checked: false,
                open: false,
                filters: '',
                groups: {},
                characters: {},
            }
            for (const [groupKey, groupValue] of Object.entries(value).sort((a, b) => {
                const groupA = parseInt(a[1]['order'], 10);
                const groupB = parseInt(b[1]['order'], 10);
                return groupA - groupB;
            })) {

                if (groupKey !== 'order') {
                    dropdowns[key.toUpperCase()].groups[groupKey] = {
                        openGroup: false,
                        checked: false,
                        open: false,
                        filters: '',
                        characters: {}
                    }
                    for (const character of groupValue.characters) {
                        dropdowns[key.toUpperCase()].groups[groupKey].characters[character] = {
                            "checked": false
                        }
                    }
                }
            }
        }

    }


    for (const [key, value] of Object.entries(characters.reverse())) {
        let { group, name, name_mirrors, name_variants, subgroup, url } = value;
        let route;
        if (subgroup) {
            route = dropdowns[group.toUpperCase()].groups[subgroup].characters;
        } else {
            route = dropdowns[group.toUpperCase()].characters;
        }
        let newRoute = {};
        if (name_variants.length > 0) {
            names[`${name} (All)`] = [name]
            newRoute[name] = {}
            newRoute[name][name] = false;
            for (const variant of name_variants) {
                newRoute[name][variant] = false;
                names[`${name} (All)`].push(variant)
            }
            newRoute[name].checked = false;
            newRoute[name].open = false;

        } else {
            newRoute[name] = {
                "checked": false
            }
        }
        if (typeof url === 'string') {
            if (url) {
                let variant = name;
                characterImages[name] = url;
                for (const name_variant of name_variants) {
                    if (variant === name_variant) {
                        characterImages[variant] = url
                    } else if (name_variant.includes(`(${variant})`)) {
                        characterImages[name_variant] = url;
                    }
                }
            }
        } else {
            for (const name_variant of name_variants) {
                for (const variant of Object.keys(url)) {
                    if (variant !== 'base') {
                        if (variant === name_variant) {
                            characterImages[variant] = url[variant]
                        } else if (name_variant.includes(`(${variant})`)) {
                            characterImages[name_variant] = url[variant];
                        }
                    } else {
                        characterImages[name] = url.base;
                    }
                }
            }
        }

        if (name_mirrors.length > 0) {
            for (const mirror of name_mirrors) {
                if (!names[mirror['base']]) {
                    names[mirror['base']] = [];
                }
                names[mirror['base']].push(mirror['alt'])
                if (name_variants.length > 0) {
                    names[`${name} (All)`].push(mirror['alt'])
                }
            }
        }
        for (const [x, y] of Object.entries(route)) {
            newRoute[x] = y;
        }
        if (subgroup) {
            route = dropdowns[group.toUpperCase()].groups[subgroup].characters = newRoute;
        } else {
            route = dropdowns[group.toUpperCase()].characters = newRoute;
        }

    }

    return { "dropdowns": dropdowns, "names": names, "characterImages": characterImages };

}


function SearchPage() {
    const [versionData, setVersionData] = useState();
    const [mediumFlash, setMediumFlash] = useState(false);
    const [keywordsFlash, setKeywordsFlash] = useState(false);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(false);
    const [resultsText, setResultsText] = useState('');


    useEffect(() => {
        async function fetchData() {
            try {
                let versionDataTemp;
                let storedVersionData = sessionStorage.getItem('versionData');
                if (storedVersionData) {
                    const parsedData = JSON.parse(storedVersionData);
                    const currentTime = Date.now();
                    const expirationTime = 30 * 60 * 1000;

                    if (parsedData.timestamp && currentTime - parsedData.timestamp < expirationTime) {
                        // Data is still valid, use it
                        setVersionData(parsedData.data);
                        versionDataTemp = parsedData.data;
                    } else {
                        // Fetch new data
                        const data = await fetchVersionData(versionData);
                        versionDataTemp = data;
                        setVersionData(data);
                        sessionStorage.setItem('versionData', JSON.stringify({ data, timestamp: currentTime }));
                    }
                } else {
                    // Fetch data if not found in session storage
                    const data = await fetchVersionData(versionData);
                    versionDataTemp = data;
                    setVersionData(data);
                    sessionStorage.setItem('versionData', JSON.stringify({ data, timestamp: Date.now() }));
                }

                // Fetch dropdown data
                let dropdownData = await fetchDropdowns(versionDataTemp, setVersionData);
                let animeDropdown = sessionStorage.getItem("animeDropdown");
                let lnDropdown = sessionStorage.getItem("lnDropdown");
                let mogDropdown = sessionStorage.getItem("mogDropdown");
                let wnDropdown = sessionStorage.getItem("wnDropdown");
                if (animeDropdown) {
                    animeDropdown = JSON.parse(animeDropdown);
                }
                if (lnDropdown) {
                    lnDropdown = JSON.parse(lnDropdown);
                }
                if (mogDropdown) {
                    mogDropdown = JSON.parse(mogDropdown);
                }
                if (wnDropdown) {
                    wnDropdown = JSON.parse(wnDropdown);
                }
                if (dropdownData.versionUpdated || Object.keys(animeDropdown).length === 0 ||
                    Object.keys(lnDropdown).length === 0 || Object.keys(mogDropdown).length === 0
                    || Object.keys(wnDropdown).length === 0) {
                    // Update dropdown states based on the data
                    setAnimeDropdownState(dropdownData.data["anime"]);
                    setMogDropdownState(dropdownData.data["mog"]);
                    setLNDropdownState(dropdownData.data["ln"]);
                    setWNDropdownState(dropdownData.data["wn"]);

                    // Save data to sessionStorage
                    sessionStorage.setItem("animeDropdown", JSON.stringify(dropdownData.data["anime"]));
                    sessionStorage.setItem("lnDropdown", JSON.stringify(dropdownData.data["ln"]));
                    sessionStorage.setItem("mogDropdown", JSON.stringify(dropdownData.data["mog"]));
                    sessionStorage.setItem("wnDropdown", JSON.stringify(dropdownData.data["wn"]));
                }
                sessionStorage.setItem("animeDropdown", JSON.stringify(dropdownData.data["anime"]));
                sessionStorage.setItem("lnDropdown", JSON.stringify(dropdownData.data["ln"]));
                sessionStorage.setItem("mogDropdown", JSON.stringify(dropdownData.data["mog"]));
                sessionStorage.setItem("wnDropdown", JSON.stringify(dropdownData.data["wn"]));

                let characterData = await fetchCharactersData(versionDataTemp, setVersionData);
                let savedCharacterDropdowns = sessionStorage.getItem('characterDropdowns');
                let savedNameMap = sessionStorage.getItem('nameMap');
                if (savedCharacterDropdowns) {
                    savedCharacterDropdowns = JSON.parse(savedCharacterDropdowns);
                }
                if (savedNameMap) {
                    savedNameMap = JSON.parse(savedNameMap);
                }

                if (characterData.versionUpdated || Object.keys(savedCharacterDropdowns).length === 0 ||
                    Object.keys(savedNameMap).length === 0) {
                    let characterDropdownData = createCharacterDropdowns(characterData.data);
                    let uniqueURLS = Array.from(new Set(Object.values(characterDropdownData.characterImages)));
                    let imageURLS = await fetchCharacterImages(uniqueURLS);
                    let newCharacterImages = {};
                    for (const [key, value] of Object.entries(characterDropdownData.characterImages)) {
                        newCharacterImages[key] = imageURLS[value];
                    }
                    setCharacterImages(newCharacterImages);
                    sessionStorage.setItem("characterImages", JSON.stringify(newCharacterImages));
                    setCharacterDropdowns(characterDropdownData.dropdowns);
                    setNameMap(characterDropdownData.names);
                    sessionStorage.setItem("characterDropdowns", JSON.stringify(characterDropdownData.dropdowns));
                    sessionStorage.setItem("nameMap", JSON.stringify(characterDropdownData.names));
                    setCharacterDropdowns(characterDropdownData.dropdowns);
                    setNameMap(characterDropdownData.names);
                    sessionStorage.setItem("characterDropdowns", JSON.stringify(characterDropdownData.dropdowns));
                    sessionStorage.setItem("nameMap", JSON.stringify(characterDropdownData.names));
                }

                let mediumImageData = await fetchMediumImageData(versionDataTemp, setVersionData);
                let savedMediumImages = sessionStorage.getItem('mediumImages');
                if (savedMediumImages) {
                    savedMediumImages = JSON.parse(savedMediumImages);
                }

                let urls = [];
                for (const [group, subgroup] of Object.entries(mediumImageData.data)) {
                    for (const [key, url] of Object.entries(subgroup)) {
                        urls.push({ url: url, key: key, group: group });
                    }
                }
                if (mediumImageData.versionUpdated || Object.keys(savedMediumImages).length === 0) {
                    let imageURLS = await fetchMediumImages(urls);
                    setMediumImages(imageURLS);
                    sessionStorage.setItem("mediumImages", JSON.stringify(imageURLS));
                }


            } catch (error) {
                console.error('Error fetching data:', error);
                setErrors(true);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);


    const [animeDropdownState, setAnimeDropdownState] = useState(() => {
        const savedState = sessionStorage.getItem('animeDropdown');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }
        return {}
    });

    useEffect(() => {
        sessionStorage.setItem('animeDropdown', JSON.stringify(animeDropdownState));
    }, [animeDropdownState]);

    const [mediumImages, setMediumImages] = useState(() => {
        const savedState = sessionStorage.getItem('mediumImages');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }
        return {}
    });

    useEffect(() => {
        sessionStorage.setItem('mediumImages', JSON.stringify(mediumImages));
    }, [mediumImages]);

    const [lnDropdownState, setLNDropdownState] = useState(() => {
        const savedState = sessionStorage.getItem('lnDropdown');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }

        return {}
    });

    useEffect(() => {
        sessionStorage.setItem('lnDropdown', JSON.stringify(lnDropdownState));
    }, [lnDropdownState]);

    const [wnDropdownState, setWNDropdownState] = useState(() => {
        const savedState = sessionStorage.getItem('wnDropdown');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }

        return {}
    });

    useEffect(() => {
        sessionStorage.setItem('wnDropdown', JSON.stringify(wnDropdownState));
    }, [wnDropdownState]);

    const [mogDropdownState, setMogDropdownState] = useState(() => {
        const savedState = sessionStorage.getItem('mogDropdown');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }

        return {}
    });
    useEffect(() => {
        sessionStorage.setItem('mogDropdown', JSON.stringify(mogDropdownState));
    }, [mogDropdownState]);


    const [filterState, setFilterState] = useState(() => {
        // Try to get the state from sessionStorage
        const savedState = sessionStorage.getItem('filterState');
        if (savedState) {
            // If found, parse and return the saved state
            return JSON.parse(savedState);
        } else {
            // If not found, return the initial state
            return { keywords: [], caseSensitive: false, exactMatch: false, regex: false, expression: '' };
        }
    });

    // Use an effect to update sessionStorage whenever the state changes
    useEffect(() => {
        sessionStorage.setItem('filterState', JSON.stringify(filterState));
    }, [filterState]);

    const [resultState, setResultState] = useState(() => {
        // Try to get the state from sessionStorage
        const savedState = sessionStorage.getItem('resultState');
        if (savedState) {
            // If found, parse and return the saved state
            return JSON.parse(savedState);
        } else {
            // If not found, return the initial state
            return { highlight: false, sortMode: 0, sortAsc: true };
        }
    });

    // Use an effect to update sessionStorage whenever the state changes
    useEffect(() => {
        sessionStorage.setItem('resultState', JSON.stringify(resultState));
    }, [resultState]);




    const [characterDropdowns, setCharacterDropdowns] = useState(() => {
        const savedState = sessionStorage.getItem('characterDropdowns');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }

        return {}
    });

    useEffect(() => {
        sessionStorage.setItem('characterDropdowns', JSON.stringify(characterDropdowns));
    }, [characterDropdowns]);

    const [characterImages, setCharacterImages] = useState(() => {
        const savedState = sessionStorage.getItem('characterImages');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }

        return {}
    });

    useEffect(() => {
        sessionStorage.setItem('characterImages', JSON.stringify(characterImages));
    }, [characterImages]);

    const [nameMap, setNameMap] = useState(() => {
        const savedState = sessionStorage.getItem('nameMap');

        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }

        return {}
    });

    useEffect(() => {
        sessionStorage.setItem('nameMap', JSON.stringify(nameMap));
    }, [nameMap]);

    const [namedActive, setNamedActive] = useState(() => {
        // Get the initial value from sessionStorage or default to false
        const saved = sessionStorage.getItem('namedActive');
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });

    // Use an effect to update sessionStorage when namedActive changes
    useEffect(() => {
        sessionStorage.setItem('namedActive', JSON.stringify(namedActive));
    }, [namedActive]);


    const [namedCharacters, setNamedCharacters] = useState(() => {
        // Get the initial value from sessionStorage or default to false
        const savedState = sessionStorage.getItem('namedCharacters');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }

        return ['Akane Nishino', 'Alexia Midgar', 'Alpha', 'Annerose Nichtsehen', 'Aurora', 'Beatrix', 'Beta', 'Chi', 'Cid Kagenou', 'Claire Kagenou', 'Claudia', 
      'Crimson', 'Delta', 'Duet', 'Elisabeth', 'Epsilon', 'Eta', 'Freya', 'Gamma', 'Garter Kikuchi', 'Gettan', 'Glen', 'Goldy Gilded', 'Grease', 'Iota', 
      'Iris Midgar', 'Jack Nelson', 'Juggernaut', 'Kana', 'Kevin', 'Klaus Midgar', 'Kouadoi', 'Lambda', 'Lili', 'Lutheran Barnett', 'Marco Granger', 
      'Margaret', 'Marie', 'Mary', 'Mist Dragon', 'Mordred', 'Mr. Kagenou', 'Mrs. Kagenou', 'Natsu', 'No. 664', 'No. 665', 'Nonna', 'Nu', 'Olivier', 
      'Omega', 'Pente', 'Perv Asshat', 'Po Tato', 'Quinton', 'Raphael Oriana', 'Reina Oriana', 'Rex', 'Rose Oriana', 'Rouge', 'Sarasa', 'Sergey Gorman', 
      'Sherry Barnett', 'Skel Etal', 'Victoria', 'White Demon', 'Yukime', 'Zenon Griffey', 'Zeta']
    });

    // Use an effect to update sessionStorage when namedActive changes
    useEffect(() => {
        sessionStorage.setItem('namedCharacters', JSON.stringify(namedCharacters));
    }, [namedCharacters]);

    const [canonActive, setCanonActive] = useState(() => {
        // Get the initial value from sessionStorage or default to false
        const saved = sessionStorage.getItem('canonActive');
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });

    // Use an effect to update sessionStorage when canonActive changes
    useEffect(() => {
        sessionStorage.setItem('canonActive', JSON.stringify(canonActive));
    }, [canonActive]);

    const canonES = ["Rose of Garden", "Truth Seekers", "Interlude", "Masquerade"]



    const updateAnimeDropdownState = (key, value) => {
        setAnimeDropdownState(prevState => ({
            ...prevState,
            [key]: value
        }));
    }

    const updateLNDropdownState = (key, value) => {
        setLNDropdownState(prevState => ({
            ...prevState,
            [key]: value
        }));
    }

    const updateWNDropdownState = (key, value) => {
        setWNDropdownState(prevState => ({
            ...prevState,
            [key]: value
        }));
    }

    const [searchResults, setSearchResults] = useState({});
    const [resultsKey, setResultsKey] = useState(0);
    const [savedFilterState, setSavedFilterState] = useState(filterState);

    function clearResults() {
        setSearchResults({});
    }

    const images = {
        "characterImages": characterImages,
        "lnCoverImages": mediumImages.lnCoverImages,
        "animeCoverImages": mediumImages.animeCoverImages,
        "sscCoverImages": mediumImages.sscCoverImages,
        "esCoverImages": mediumImages.esCoverImages,
        "apoCoverImages": mediumImages.apoCoverImages
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    async function getAllMediums() {
        const animeCheckedItems = Object.entries(animeDropdownState.seasonsChecked)
            .flatMap(([season, episodes]) =>
                Object.entries(episodes)
                    .filter(([episodeId, episodeData]) => !episodeData.checked && episodeId !== 'checked')
                    .map(([episodeId]) => {
                        const [season, ep] = episodeId.split('e');
                        return `an_${season}_e${ep}`;
                    })
            );

        const lnCheckedItems = Object.entries(lnDropdownState.volumesChecked)
            .flatMap(([volume, chapters]) =>
                Object.entries(chapters)
                    .filter(([chapter, value]) => !value.checked && chapter !== 'checked')
                    .map(([chapter, value]) => {
                        return `ln_${chapter.split("c")[0]}_c${chapter.split("c")[1]}`;
                    })
            );

        const wnCheckedItems = Object.entries(wnDropdownState.volumesChecked)
            .flatMap(([volume, chapters]) =>
                Object.entries(chapters)
                    .filter(([chapter, value]) => !value.checked && chapter !== 'checked')
                    .map(([chapter, value]) => {
                        return `wn_${chapter.split("c")[0].replace("v", "")}_${chapter.split("c")[1]}`;
                    })
            );

        let sscCheckedItems = [];
        for (let group in mogDropdownState.partsChecked) {
            if (group === "Seven Shadows Chronicles") {
                for (let part in mogDropdownState.partsChecked[group]) {
                    for (let section in mogDropdownState.partsChecked[group][part]) {
                        if (section !== 'checked') {
                            for (let episode in mogDropdownState.partsChecked[group][part][section]) {
                                if (episode !== 'checked' && !mogDropdownState.partsChecked[group][part][section][episode].checked) {
                                    sscCheckedItems.push(`ssc_p${part.split(" ")[1]}_c${section.split("|")[0].trim().replace(" Final", "-15")}_${episode}`);
                                }
                            }
                        }
                    }
                }
            }
        }



        let apoCheckedItems = [];
        for (let group in mogDropdownState.partsChecked) {
            if (group === "Apocrypha") {
                for (let part in mogDropdownState.partsChecked[group]) {
                    for (let section in mogDropdownState.partsChecked[group][part]) {
                        if (section !== 'checked') {
                            for (let episode in mogDropdownState.partsChecked[group][part][section]) {
                                if (episode !== 'checked' && !mogDropdownState.partsChecked[group][part][section][episode].checked) {
                                    apoCheckedItems.push(`apo_p${part.split(" | ")[0]}_c${part.split(" | ")[0]}-${section.split("|")[0].trim().replace(" Final", "-15")}_${episode}`);
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
                        if (episode !== 'checked' && !mogDropdownState.partsChecked[group][part][episode].checked) {
                            if (canonActive) {
                                if (canonES.includes(part)) {
                                    esCheckedItems.push(`es_${ESMAPREVERSE[part]}_${episode}`);
                                }  
                            } else {
                                esCheckedItems.push(`es_${ESMAPREVERSE[part]}_${episode}`);
                            }
                            
                        }
                    }
                }
            }
        }

        return {
            animeCheckedItems: animeCheckedItems, wnCheckedItems: wnCheckedItems, esCheckedItems: esCheckedItems, apoCheckedItems: apoCheckedItems,
            lnCheckedItems: lnCheckedItems, sscCheckedItems: sscCheckedItems
        }
    }



    async function handleSearch(addedWord) {
        clearResults();
        setSavedFilterState(filterState);
        if (filterState.regex) {
            try {
                new RegExp(filterState.expression);
            } catch (error) {
                setResultsText(error.message);
                return;
            }
        }
        // Collect all checked items from animeDropdownState
        let animeCheckedItems = Object.entries(animeDropdownState.seasonsChecked)
            .flatMap(([season, episodes]) =>
                Object.entries(episodes)
                    .filter(([episodeId, episodeData]) => episodeData.checked && episodeId !== 'checked')
                    .map(([episodeId]) => {
                        const [season, ep] = episodeId.split('e');
                        return `an_${season}_e${ep}`;
                    })
            );

        let lnCheckedItems = Object.entries(lnDropdownState.volumesChecked)
            .flatMap(([volume, chapters]) =>
                Object.entries(chapters)
                    .filter(([chapter, value]) => value.checked && chapter !== 'checked')
                    .map(([chapter, value]) => {
                        return `ln_${chapter.split("c")[0]}_c${chapter.split("c")[1]}`;
                    })
            );

        let wnCheckedItems = Object.entries(wnDropdownState.volumesChecked)
            .flatMap(([volume, chapters]) =>
                Object.entries(chapters)
                    .filter(([chapter, value]) => value.checked && chapter !== 'checked')
                    .map(([chapter, value]) => {
                        return `wn_${chapter.split("c")[0].replace("v", "")}_${chapter.split("c")[1]}`;
                    })
            );


        // Helper function to get checked character entries
        const getCheckedCharacterEntries = (character, { checked, ...subnames }) => {
            const entries = [];
            if (checked) {
                const subnamesEntries = Object.entries(subnames);
                const hasSubnames = subnamesEntries.length > 0;
                const checkedSubnames = subnamesEntries
                    .filter(([subname, checked]) => checked && subname !== 'checked' && subname !== 'open')
                    .map(([subname]) => subname);
                if (hasSubnames) {
                    if (subnamesEntries.every(([subname, checked]) => subname === 'checked' || subname === 'open' || checked)) {
                        // If every item of the subnames is checked, add the main name with '(All)'
                        entries.push(character + ' (All)');
                    } else {
                        entries.push(...checkedSubnames);
                    }
                } else {
                    // If the character has no subnames, add the character
                    entries.push(character);
                }
            }
            return entries;
        };

        const checkedCharacters = [];
        Object.entries(characterDropdowns).forEach(([group, dropdown]) => {
            // Check if there are groups within the dropdown and iterate over them
            if (dropdown.groups) {
                Object.values(dropdown.groups).forEach(group => {
                    // Add group characters
                    Object.entries(group.characters).forEach(([character, attributes]) => {
                        checkedCharacters.push(...getCheckedCharacterEntries(character, attributes));
                    });
                });
            }
            // Add standalone characters not within groups
            if (dropdown.characters) {
                Object.entries(dropdown.characters).forEach(([character, attributes]) => {
                    checkedCharacters.push(...getCheckedCharacterEntries(character, attributes));
                });
            }
        });




        let sscCheckedItems = [];
        for (let group in mogDropdownState.partsChecked) {
            if (group === "Seven Shadows Chronicles") {
                for (let part in mogDropdownState.partsChecked[group]) {
                    for (let section in mogDropdownState.partsChecked[group][part]) {
                        if (section !== 'checked') {
                            for (let episode in mogDropdownState.partsChecked[group][part][section]) {
                                if (episode !== 'checked' && mogDropdownState.partsChecked[group][part][section][episode].checked) {
                                    sscCheckedItems.push(`ssc_p${part.split(" ")[1]}_c${section.split("|")[0].trim().replace(" Final", "-15")}_${episode}`);
                                }
                            }
                        }
                    }
                }
            }
        }



        let apoCheckedItems = [];
        for (let group in mogDropdownState.partsChecked) {
            if (group === "Apocrypha") {
                for (let part in mogDropdownState.partsChecked[group]) {
                    for (let section in mogDropdownState.partsChecked[group][part]) {
                        if (section !== 'checked') {
                            for (let episode in mogDropdownState.partsChecked[group][part][section]) {
                                if (episode !== 'checked' && mogDropdownState.partsChecked[group][part][section][episode].checked) {
                                    apoCheckedItems.push(`apo_p${part.split(" | ")[0]}_c${part.split(" | ")[0]}-${section.split("|")[0].trim().replace(" Final", "-15")}_${episode}`);
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
                            esCheckedItems.push(`es_${ESMAPREVERSE[part]}_${episode}`);
                        }
                    }
                }
            }
        }

        let anCheckedData;
        let lnCheckedData;
        let wnCheckedData;
        let apoCheckedData;
        let sscCheckedData;
        let esCheckedData;

        if (animeCheckedItems.length === 0
            && lnCheckedItems.length === 0
            && wnCheckedItems.length === 0
            && esCheckedItems.length === 0
            && apoCheckedItems.length === 0
            && sscCheckedItems.length === 0) {
            let data = await getAllMediums();
            if (checkedCharacters.length === 0) {
                lnCheckedItems = data.lnCheckedItems;
                wnCheckedItems = data.wnCheckedItems;
            }
            
            esCheckedItems = data.esCheckedItems;
            apoCheckedItems = data.apoCheckedItems;
            sscCheckedItems = data.sscCheckedItems;
            animeCheckedItems = data.animeCheckedItems;
        }


        if (animeCheckedItems.length > 0) {
            anCheckedData = await fetchANData(animeCheckedItems, versionData, setVersionData, setResultsText);
        }

        if (lnCheckedItems.length > 0) {
            lnCheckedData = await fetchLNData(lnCheckedItems, versionData, setVersionData, setResultsText);
        }

        if (wnCheckedItems.length > 0) {
            wnCheckedData = await fetchWNData(wnCheckedItems, versionData, setVersionData, setResultsText);
        }

        if (esCheckedItems.length > 0) {
            esCheckedData = await fetchESData(esCheckedItems, versionData, setVersionData, setResultsText);
        }

        if (apoCheckedItems.length > 0) {
            apoCheckedData = await fetchAPOData(apoCheckedItems, versionData, setVersionData, setResultsText);
        }

        if (sscCheckedItems.length > 0) {
            sscCheckedData = await fetchSSCData(sscCheckedItems, versionData, setVersionData, setResultsText);
        }




        // Initialize separate objects to hold the anime and light novel results
        let animeResults = {};
        let lnResults = {};
        let sscResults = {};
        let esResults = {};
        let wnResults = {};
        let apoResults = {};

        const lnText = { "ln": { ...lnCheckedData } }
        const wntext = { "wn": { ...wnCheckedData } }
        const animeText = { "an": { ...anCheckedData } }
        const sscText = { "ssc": { ...sscCheckedData } }
        const esText = { "es": { ...esCheckedData } }
        const apoText = { "apo": { ...apoCheckedData } }

        let resultsKeyString = '';

        if (lnCheckedItems.length === 0 &&
            wnCheckedItems.length === 0 &&
            animeCheckedItems.length === 0 &&
            sscCheckedItems.length === 0 &&
            esCheckedItems.length === 0 &&
            apoCheckedItems.length === 0
        ) {
            resultsKeyString = resultsKeyString + "2";
        }

        if (resultsKeyString === "1") {
            setResultsText('No Keywords Selected.')

        } else if (resultsKeyString === "2") {
            setResultsText('No Mediums Selected.')

        } else if (resultsKeyString === "12") {
            setResultsText('No Mediums or Keywords Selected.')
        } else {
            setResultsText('No Results.')
        }

        if (Object.keys(lnText.ln).length === 0 &&
            Object.keys(wntext.wn).length === 0 &&
            Object.keys(animeText.an).length === 0 &&
            Object.keys(sscText.ssc).length === 0 &&
            Object.keys(esText.es).length === 0 &&
            Object.keys(apoText.apo).length === 0
        ) {
            setSearchResults({ anime: {}, ln: {}, wn: {}, ssc: {}, es: {}, apo: {} });
            setMediumFlash(true);
            return;
        } else {
            let keywords;
            if (filterState.regex) {
                keywords = [filterState.expression]
            } else {
                keywords = filterState.keywords;
            }
            if (typeof addedWord === 'string' && addedWord && (!filterState.regex)) {
                keywords.push(addedWord);
            }
            animeResults = searchAnime(animeCheckedItems, animeText, keywords, nameMap, checkedCharacters, filterState.caseSensitive, filterState.exactMatch, filterState.regex, namedActive, namedCharacters);
            lnResults = searchLN(lnCheckedItems, lnText, keywords, filterState.caseSensitive, filterState.exactMatch, filterState.regex);
            wnResults = searchWN(wnCheckedItems, wntext, keywords, filterState.caseSensitive, filterState.exactMatch, filterState.regex);
            sscResults = searchSSC(sscCheckedItems, sscText, keywords, nameMap, checkedCharacters, filterState.caseSensitive, filterState.exactMatch, filterState.regex, namedActive, namedCharacters);
            esResults = searchES(esCheckedItems, esText, keywords, nameMap, checkedCharacters, filterState.caseSensitive, filterState.exactMatch, filterState.regex, namedActive, namedCharacters);
            apoResults = searchAPO(apoCheckedItems, apoText, keywords, nameMap, checkedCharacters, filterState.caseSensitive, filterState.exactMatch, filterState.regex, namedActive, namedCharacters)
            // Update the state with the search results
            setSearchResults({ anime: animeResults, ln: lnResults, wn: wnResults, ssc: { ...sscResults }, es: { ...esResults }, apo: { ...apoResults } });
            scrollToBottom();
        }
    }

    if (loading || errors) {
        return (
            <div className="search-page">
                <h1 className="filters-header">FILTERS</h1>
                <div className="filters">
                    <div className="row-container">
                        <div className={`mediums-container ${mediumFlash ? 'flash-selected' : ''}`}>
                            <h2 className={`mediums-title ${mediumFlash ? 'flash' : ''}`}>MEDIUMS</h2>
                            <p>Loading...</p>
                            <FontAwesomeIcon
                                icon={faC}
                                className={`canon-button ${true ? 'active' : ''}`}
                                title='Canon Only'
                            />
                            <FontAwesomeIcon
                                icon={faRotateRight}
                                className="reset-button"
                                title="Reset"
                            />
                        </div>
                        <div className="characters-container">
                            <h2 className="characters-title">CHARACTERS</h2>
                            <p>Loading...</p>
                            <div className="checkbox-container">
                            </div>
                            <FontAwesomeIcon
                                icon={faN}
                                className={`named-button ${true ? 'active' : ''}`}
                                title='"Named" Only'
                            />
                            <FontAwesomeIcon
                                icon={faRotateRight}
                                className="reset-button"
                                title="Reset"
                            />
                        </div>

                        <div className={`selected-container`}>
                            <h2 className="selected-title">SELECTED</h2>
                            <p>Loading...</p>
                        </div>
                    </div>
                    <div className={`keywords-container ${keywordsFlash ? 'flash-selected' : ''}`}>
                        <h2 className={`keywords-title ${keywordsFlash ? 'flash' : ''}`}>KEYWORDS</h2>
                        <div className="keywords-input-wrapper">
                            <div className="keywords-input-container">
                                <input
                                    type="text"
                                    className="keywords-input"
                                    placeholder="Enter keywords / phrases..."
                                    defaultValue=''
                                />
                            </div>
                            <div className="icons-container">
                                <VscCaseSensitive
                                    className={`case-sensitive-icon ${filterState.caseSensitive ? 'active' : ''}`}
                                    title="Match Case"
                                />
                                <WholeWord
                                    className={`whole-word-icon ${filterState.exactMatch ? 'active' : ''}`}
                                    title="Match Whole Word(s)"
                                />
                                <Regex
                                    className={`regex-icon ${false ? 'active' : ''}`}
                                    title="Regular Expression"
                                />

                                <button className="delete-all" title="Delete all">
                                    <FontAwesomeIcon className="delete-all-icon" icon={faTimes} />
                                </button>
                            </div>


                        </div>
                        <p className="input-instructions">Press enter after each keyword/phrase</p>
                    </div>
                    <div className="keywords-search">
                        <button className="search-button">SEARCH</button> {/* Search button */}

                    </div>
                </div>
                <div>
                    <h1 className="results-header">RESULTS</h1>
                    <div className="results-container">
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            className={`highlight-icon ${true ? 'active' : ''}`}
                            title="Highlight Keywords"
                        />
                        <FontAwesomeIcon
                            icon={faTrashCan}
                            className={`reset-icon`}
                            title="Clear Results"
                        />
                        <div className="content-wrapper">
                        </div>
                    </div>
                </div>

            </div >
        );
    }

    // Add a button in your JSX to trigger the search
    return (
        <div className="search-page">
            <Filters
                wnDropdownState={wnDropdownState}
                updateWNDropdownState={updateWNDropdownState}
                animeDropdownState={animeDropdownState}
                updateAnimeDropdownState={updateAnimeDropdownState}
                lnDropdownState={lnDropdownState}
                updateLNDropdownState={updateLNDropdownState}
                filterState={filterState}
                setFilterState={setFilterState}
                dropdownStates={characterDropdowns}
                setDropdownStates={setCharacterDropdowns}
                images={images}
                namedActive={namedActive}
                namedCharacters={namedCharacters}
                canonActive={canonActive}
                setCanonActive={setCanonActive}
                canonES={canonES}
                setNamedActive={setNamedActive}
                mogDropdownState={mogDropdownState}
                setMogDropdownState={setMogDropdownState}
                handleSearch={handleSearch}
                mediumFlash={mediumFlash}
                setMediumFlash={setMediumFlash}
                keywordsFlash={keywordsFlash}
                setKeywordsFlash={setKeywordsFlash}
            />
            <Results
                resultsText={resultsText}
                setResultsText={setResultsText}
                setSearchResults={setSearchResults}
                wnDropdownState={wnDropdownState}
                lnDropdownState={lnDropdownState}
                mogDropdownState={mogDropdownState}
                animeDropdownState={animeDropdownState}
                results={searchResults}
                images={images}
                filterState={savedFilterState}
                resultState={resultState}
                setResultState={setResultState}
                resultsKey={resultsKey}
                setResultsKey={setResultsKey}
            />
        </div>
    );
}

export default SearchPage;
