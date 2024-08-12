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
import * as characterCovers from '../../images/characterIcons';
import * as covers from '../../images/covers';
import { fetchLNData, fetchWNData, fetchAPOData, fetchESData, fetchSSCData, fetchANData, fetchDropdowns, fetchVersionData, fetchCharactersData } from '../../utils/firebaseFunctions';
import { VERSIONS } from '../../versions';
import { ESMAPREVERSE } from '../../esMap';
import { faGaugeSimpleMed } from '@fortawesome/free-solid-svg-icons';

function createCharacterDropdowns(data) {
    let dropdowns = {};
    let names = {};
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
        let {group, name, name_mirrors, name_variants, order, subgroup} = value;
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

        } else{
            newRoute[name] = {
                "checked": false
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


    return {"dropdowns": dropdowns, "names": names};

}


function SearchPage() {
    const [versionData, setVersionData] = useState();
    const [mediumFlash, setMediumFlash] = useState(false);
    const [keywordsFlash, setKeywordsFlash] = useState(false);
    const [dropdowns, setDropdowns] = useState();
    const [loading, setLoading] = useState(true);
    const [resultsText, setResultsText] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                let versionDataTemp;
                const storedVersionData = sessionStorage.getItem('versionData');
                if (storedVersionData) {
                    const parsedData = JSON.parse(storedVersionData);
                    const currentTime = Date.now();
                    const expirationTime = 5 * 60 * 1000; // Set expiration to 5 minutes

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
                if (dropdownData.versionUpdated && dropdownData !== undefined) {
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
                setDropdowns(dropdownData.data);
                sessionStorage.setItem("animeDropdown", JSON.stringify(dropdownData.data["anime"]));
                sessionStorage.setItem("lnDropdown", JSON.stringify(dropdownData.data["ln"]));
                sessionStorage.setItem("mogDropdown", JSON.stringify(dropdownData.data["mog"]));
                sessionStorage.setItem("wnDropdown", JSON.stringify(dropdownData.data["wn"]));

                let characterData = await fetchCharactersData(versionDataTemp, setVersionData);
                if (characterData.versionUpdated && characterData !== undefined) {
                    let characterDropdownData = createCharacterDropdowns(characterData.data);
                    setCharacterDropdowns(characterDropdownData.dropdowns);
                    setNameMap(characterDropdownData.names);
                    sessionStorage.setItem("characterDropdowns", JSON.stringify(characterDropdownData.dropdowns));
                    sessionStorage.setItem("nameMap", JSON.stringify(characterDropdownData.names));
                    setCharacterDropdowns(characterDropdownData.dropdowns);
                    setNameMap(characterDropdownData.names);
                    sessionStorage.setItem("characterDropdowns", JSON.stringify(characterDropdownData.dropdowns));
                    sessionStorage.setItem("nameMap", JSON.stringify(characterDropdownData.names));
                }
                

            } catch (error) {
                console.error('Error fetching data:', error);
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
            return { keywords: [], caseSensitive: false, exactMatch: false };
        }
    });

    // Use an effect to update sessionStorage whenever the state changes
    useEffect(() => {
        sessionStorage.setItem('filterState', JSON.stringify(filterState));
    }, [filterState]);


    const images = {
        "characterImages": {
            "Shadow": characterCovers.ShadowIcon,
            "??? (Shadow)": characterCovers.ShadowIcon,
            "Sunraku & Shadow (Shadow)": characterCovers.ShadowIcon,
            "Cid Kagenou": characterCovers.CidKagenouIcon,
            "Minoru Kageno": characterCovers.MinoruKagenoIcon,
            "??? (Minoru Kageno)": characterCovers.MinoruKagenoIcon,
            "Stylish Ruffian Slayer": characterCovers.StylishRuffianSlayerIcon,
            "Mundane Mann": characterCovers.MundaneMannIcon,
            "John Smith": characterCovers.JohnSmithIcon,
            "Stylish Bandit Slayer": characterCovers.StylishBanditSlayerIcon,
            "??? (Stylish Bandit Slayer)": characterCovers.StylishBanditSlayerIcon,
            "Nuru": characterCovers.NuruIcon,
            "??? (Nuru)": characterCovers.NuruIcon,
            "Aurora": characterCovers.AuroraIcon,
            "Annerose Nichtsehen": characterCovers.AnneroseNichtsehenIcon,
            "Akane Nishino": characterCovers.AkaneNishinoIcon,
            "Alexia Midgar": characterCovers.AlexiaMidgarIcon,
            "Alpha": characterCovers.AlphaIcon,
            "Beatrix": characterCovers.BeatrixIcon,
            "Beta": characterCovers.BetaIcon,
            "Natsume Kafka": characterCovers.NatsumeKafkaIcon,
            "??? (Natsume Kafka)": characterCovers.NatsumeKafkaIcon,
            "Claire Kagenou": characterCovers.ClaireKagenouIcon,
            "Delta": characterCovers.DeltaIcon,
            "Epsilon": characterCovers.EpsilonIcon,
            "Eta": characterCovers.EtaIcon,
            "Gamma": characterCovers.GammaIcon,
            "Iris Midgar": characterCovers.IrisMidgarIcon,
            "Po Tato": characterCovers.PoTatoIcon,
            "Po": characterCovers.PoTatoIcon,
            "Rose Oriana": characterCovers.RoseOrianaIcon,
            "No. 666": characterCovers.No666Icon,
            "Sherry Barnett": characterCovers.SherryBarnettIcon,
            "Skel Etal": characterCovers.SkelEtalIcon,
            "Skel": characterCovers.SkelEtalIcon,
            "Zeta": characterCovers.ZetaIcon,
            "Nu": characterCovers.NuIcon,
            "Lambda": characterCovers.LambdaIcon,
            "Yukime": characterCovers.YukimeIcon,
            "Victoria": characterCovers.VictoriaIcon,
            "Lili": characterCovers.LiliIcon,
            "Olivier": characterCovers.OlivierIcon,
            "Pente": characterCovers.PenteIcon,
            "Duet": characterCovers.DuetIcon,
            "Freya": characterCovers.FreyaIcon,
            "Chi": characterCovers.ChiIcon,
            "Claudia": characterCovers.ClaudiaIcon,
            "Crimson": characterCovers.CrimsonIcon,
            "Goldy Gilded": characterCovers.GoldyGildedIcon,
            "Grease": characterCovers.GreaseIcon,
            "Jack Nelson": characterCovers.JackNelsonIcon,
            "Lutheran Barnett": characterCovers.LutheranBarnettIcon,
            "Marco Granger": characterCovers.MarcoGrangerIcon,
            "Marie": characterCovers.MarieIcon,
            "Mary": characterCovers.MaryIcon,
            "Mist Dragon": characterCovers.MistDragonIcon,
            "Omega": characterCovers.OmegaIcon,
            "Quinton": characterCovers.QuintonIcon,
            "Sergey Gorman": characterCovers.SergeyGormanIcon,
            "Sir Gaunt": characterCovers.SirGauntIcon,
            "White Demon": characterCovers.WhiteDemonIcon,
            "Zenon Griffey": characterCovers.ZenonGriffeyIcon,
            "Glen": characterCovers.GlenIcon,
            "Mr. Kagenou": characterCovers.MrKagenouIcon,
            "Mrs. Kagenou": characterCovers.MrsKagenouIcon,
            "Rex": characterCovers.RexIcon,
            "Perv Asshat": characterCovers.PervAsshatIcon,
            "Mordred": characterCovers.MordredIcon,
            "No. 664": characterCovers.No664Icon,
            "No. 665": characterCovers.No665Icon,
            "Klaus Midgar": characterCovers.KlausMidgarIcon,
            "Raphael Oriana": characterCovers.RaphaelOrianaIcon,
            "Elisabeth": characterCovers.ElisabethIcon,
            "Juggernaut": characterCovers.JuggernautIcon,
            "Kana": characterCovers.KanaIcon,
            "Natsu": characterCovers.NatsuIcon,
            "Garter Kikuchi": characterCovers.GarterIcon,
            "Gettan": characterCovers.GettanIcon,
            "Iota": characterCovers.IotaIcon,
            "Kouadoi": characterCovers.KouadoiIcon,
            "Reina Oriana": characterCovers.ReinaOrianaIcon

        },
        "lnCoverImages": {
            "v1": covers.LNV1Cover,
            "v2": covers.LNV2Cover,
            "v3": covers.LNV3Cover,
            "v4": covers.LNV4Cover,
            "v5": covers.LNV5Cover,
            "v6": covers.LNV6Cover
        },
        "animeCoverImages": {
            "s1": covers.ANS1Cover,
            "s2": covers.ANS2Cover,
            "Kage-Jitsu!": covers.KJ1Cover,
            "Kage-Jitsu! 2nd": covers.KJ2Cover,
            "s101": covers.KJ1Cover,
            "s102": covers.KJ2Cover,
        },
        "sscCoverImages": {
            "ssc": covers.SSCCover,
            "1-1": covers.SSC11Cover,
            "1-2": covers.SSC12Cover,
            "1-3": covers.SSC13Cover,
            "1-4": covers.SSC14Cover,
            "1-5": covers.SSC15Cover,
            "1-6": covers.SSC16Cover,
            "1-7": covers.SSC17Cover,
            "1-8": covers.SSC18Cover,
            "1-9": covers.SSC19Cover,
            "1-10": covers.SSC110Cover,
            "1-11": covers.SSC111Cover,
            "1-12": covers.SSC112Cover,
            "1-13": covers.SSC113Cover,
            "1-14": covers.SSC114Cover,
            "1-15": covers.SSC1FCover,
            "2-1": covers.SSC21Cover,
            "2-2": covers.SSC22Cover,
            "2-3": covers.SSC23Cover,
            "2-4": covers.SSC24Cover,
            "2-5": covers.SSC25Cover,
            "2-6": covers.SSC26Cover,
            "2-7": covers.SSC27Cover,
            "2-8": covers.SSC28Cover,
            "2-9": covers.SSC29Cover,
            "2-10": covers.SSC210Cover,
            "2-11": covers.SSC211Cover,
            "2-12": covers.SSC212Cover,
            "2-13": covers.SSC213Cover,
            "3-1": covers.SSC31Cover,
            "3-2": covers.SSC32Cover,
            "3-3": covers.SSC33Cover,
            "3-4": covers.SSC34Cover
        },
        "esCoverImages": {
            "Event Stories": covers.ESCover,
            "hr": covers.ESHRCover,
            "ftgi": covers.ESFTGICover,
            "nvacs": covers.ESNvACSCover,
            "rog": covers.ESROGCover,
            "hd": covers.ESHDCover,
            "clbg": covers.ESCLBGCover,
            "sulp": covers.ESSULPCover,
            "ts": covers.ESTSCover,
            "mt": covers.ESMTCover,
            "dss": covers.ESDSSCover,
            "i": covers.ESICover,
            "lshn": covers.ESLSHNCover,
            "ana": covers.ESANACover,
            "agfms": covers.ESAGFMSCover,
            "rtgi2": covers.ESRTGI2Cover,
            "m": covers.ESMCover,
            "bmsv": covers.ESBMSVCover,
            "tghms": covers.ESTGHMSCover,
            "hd2": covers.ESHD2Cover,
            "tpis": covers.ESTPISCover,
            "ssitw": covers.ESSSITWCover,
            "adswy": covers.ESADSWYCover
        },
        "apoCoverImages": {
            "Apocrypha": covers.APOCover,
            "1": covers.APO1Cover,
            "1-1": covers.APO11Cover,
            "1-1-1": covers.APO111Cover,
            "1-1-2": covers.APO112Cover,
            "1-1-3-1": covers.APO1131Cover,
            "1-1-3-2": covers.APO1132Cover,
            "1-1-3-3": covers.APO1133Cover,
            "1-1-4-1": covers.APO1141Cover,
            "1-1-4-2": covers.APO1142Cover,
            "1-1-5-1": covers.APO1151Cover,
            "1-1-5-2": covers.APO1152Cover,
            "1-1-5-3": covers.APO1153Cover,
            "1-1-6": covers.APO116Cover,
            "1-1-7": covers.APO117Cover,
            "1-1-8-1": covers.APO1181Cover,
            "1-1-8-2": covers.APO1182Cover,
        }
    };

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

    const namedCharacters = ["Akane Nishino", "Alexia Midgar", "Alpha", "Annerose Nichtsehen", "Aurora", 
        "Beatrix", "Beta", "Chi", "Cid Kagenou", "Claire Kagenou", "Claudia", "Crimson", "Delta", "Duet",
        "Elisabeth", "Epsilon", "Eta", "Freya", "Gamma", "Garter Kikuchi", "Gettan", "Glen", "Goldy Gilded",
        "Grease", "Iota", "Iris Midgar", "Jack Nelson", "Juggernaut", "Kana", "Kevin", "Klaus Midgar",
        "Kouadoi", "Lambda", "Lili", "Lutheran Barnett", "Marco Granger", "Margaret", "Marie", "Mary",
        "Mist Dragon", "Mordred", "Mr. Kagenou", "Mrs. Kagenou", "Natsu", "No. 664", "No. 665", "Nu", "Olivier",
        "Omega", "Pente", "Perv Asshat", "Po Tato", "Quinton", "Raphael Oriana", "Reina Oriana", "Rex",
        "Rose Oriana", "Sergey Gorman", "Sherry Barnett", "Skel Etal", "Victoria", "White Demon", "Yukime",
        "Zenon Griffey", "Zeta"];

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




    async function handleSearch() {
        clearResults();
        setSavedFilterState(filterState);
        // Collect all checked items from animeDropdownState
        const animeCheckedItems = Object.entries(animeDropdownState.seasonsChecked)
            .flatMap(([season, episodes]) =>
                Object.entries(episodes)
                    .filter(([episodeId, episodeData]) => episodeData.checked && episodeId !== 'checked')
                    .map(([episodeId]) => {
                        const [season, ep] = episodeId.split('e');
                        return `an_${season}_e${ep}`;
                    })
            );

        const lnCheckedItems = Object.entries(lnDropdownState.volumesChecked)
            .flatMap(([volume, chapters]) =>
                Object.entries(chapters)
                    .filter(([chapter, value]) => value.checked && chapter !== 'checked')
                    .map(([chapter, value]) => {
                        return `ln_${chapter.split("c")[0]}_c${chapter.split("c")[1]}`;
                    })
            );

        const wnCheckedItems = Object.entries(wnDropdownState.volumesChecked)
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


        console.log(esCheckedItems)
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
            animeResults = searchAnime(animeCheckedItems, animeText, filterState.keywords, nameMap, checkedCharacters, filterState.caseSensitive, filterState.exactMatch, namedActive, namedCharacters);
            lnResults = searchLN(lnCheckedItems, lnText, filterState.keywords, filterState.caseSensitive, filterState.exactMatch);
            wnResults = searchWN(wnCheckedItems, wntext, filterState.keywords, filterState.caseSensitive, filterState.exactMatch);
            sscResults = searchSSC(sscCheckedItems, sscText, filterState.keywords, nameMap, checkedCharacters, filterState.caseSensitive, filterState.exactMatch, namedActive, namedCharacters);
            esResults = searchES(esCheckedItems, esText, filterState.keywords, nameMap, checkedCharacters, filterState.caseSensitive, filterState.exactMatch, namedActive, namedCharacters);
            apoResults = searchAPO(apoCheckedItems, apoText, filterState.keywords, nameMap, checkedCharacters, filterState.caseSensitive, filterState.exactMatch, namedActive, namedCharacters)
            // Update the state with the search results
            setSearchResults({ anime: animeResults, ln: lnResults, wn: wnResults, ssc: { ...sscResults }, es: { ...esResults }, apo: { ...apoResults } });
        }
    }

    if (loading) {
        return <div>Loading...</div>; // Display a loading message or spinner
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
                resultsKey={resultsKey}
                setResultsKey={setResultsKey}
            />
        </div>
    );
}

export default SearchPage;
