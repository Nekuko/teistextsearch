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
import { fetchLNData, fetchWNData, fetchAPOData, fetchESData, fetchSSCData, fetchANData, fetchDropdowns } from '../../utils/firebaseFunctions';
import { VERSIONS } from '../../versions';
import { ESMAPREVERSE } from '../../esMap';


function SearchPage() {
    const [mediumFlash, setMediumFlash] = useState(false);
    const [keywordsFlash, setKeywordsFlash] = useState(false);
    const [versionData, setVersionData] = useState(null);
    const [dropdowns, setDropdowns] = useState();
    const [fetchCount, setFetchCount] = useState(0);

    async function fetchAllDropdowns() {
        if (fetchCount > 0) {
            return; // If fetchCount is greater than 0, return early
        }
        setFetchCount(fetchCount + 1);
    
        try {
            let dropdownData = await fetchDropdowns(versionData, setVersionData);
            setDropdowns(dropdownData.data);
            if (dropdownData.versionUpdated) {
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
            
        } catch (error) {
            console.error("Error fetching dropdown data:", error);
            // Handle any errors that might occur during the asynchronous operations
        }
    }

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
            "ssitw": covers.ESSSITWCover
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


    const [dropdownStates, setDropdownStates] = React.useState(() => {
        //const savedState = sessionStorage.getItem('dropdownStates');
        const savedState = null;
        if (savedState) {
            return JSON.parse(savedState);
        } else {
            return {
                'SHADOW GARDEN': {
                    openGroup: false,
                    checked: false,
                    open: false,
                    filters: '',
                    groups: {
                        "Seven Shadows": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Alpha": {
                                    "Alpha": false,
                                    "??? (Alpha)": false,
                                    "Everyone (Alpha)": false,
                                    "Seven Shadows (Alpha)": false,
                                    "None (Alpha)": false,
                                    "Alpha & Beta (Alpha)": false,
                                    "Alpha & Eta (Alpha)": false,
                                    "Alpha & Gamma (Alpha)": false,
                                    "Alpha & Nu (Alpha)": false,
                                    "Alpha & Zeta (Alpha)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Beta": {
                                    "Beta": false,
                                    "??? (Beta)": false,
                                    "None (Beta)": false,
                                    "Natsume Kafka": false,
                                    "??? (Natsume Kafka)": false,
                                    "Everyone (Beta)": false,
                                    "Seven Shadows (Beta)": false,
                                    "Alexia Midgar & Natsume Kafka (Natsume Kafka)": false,
                                    "Alpha & Beta (Beta)": false,
                                    "Beta & Epsilon (Beta)": false,
                                    "Beta & Gamma (Beta)": false,
                                    "Beta & Delta & Zeta (Beta)": false,
                                    "Zeta & Beta (Beta)": false,
                                    "Fictional Zenon": false,
                                    "Fictional Shadow": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Gamma": {
                                    "Gamma": false,
                                    "??? (Gamma)": false,
                                    "None (Gamma)": false,
                                    "Luna": false,
                                    "Everyone (Gamma)": false,
                                    "Seven Shadows (Gamma)": false,
                                    "Alpha & Gamma (Gamma)": false,
                                    "Beta & Gamma (Gamma)": false,
                                    "Gamma & Epsilon (Gamma)": false,
                                    "Gamma & Epsilon & Eta (Gamma)": false,
                                    "Gamma & Iota (Gamma)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Delta": {
                                    "Delta": false,
                                    "Deltan": false,
                                    "??? (Delta)": false,
                                    "Everyone (Delta)": false,
                                    "Seven Shadows (Delta)": false,
                                    "Delta & Zeta (Delta)": false,
                                    "Beta & Delta & Zeta (Delta)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Epsilon": {
                                    "Epsilon": false,
                                    "Shiron": false,
                                    "??? (Epsilon)": false,
                                    "Everyone (Epsilon)": false,
                                    "Seven Shadows (Epsilon)": false,
                                    "Beta & Epsilon (Epsilon)": false,
                                    "Gamma & Epsilon (Epsilon)": false,
                                    "Gamma & Epsilon & Eta (Epsilon)": false,
                                    "Zeta & Epsilon (Epsilon)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Zeta": {
                                    "Zeta": false,
                                    "??? (Zeta)": false,
                                    "Zetan": false,
                                    "Everyone (Zeta)": false,
                                    "Seven Shadows (Zeta)": false,
                                    "Alpha & Zeta (Zeta)": false,
                                    "Delta & Zeta (Zeta)": false,
                                    "Zeta & Beta (Zeta)": false,
                                    "Zeta & Epsilon (Zeta)": false,
                                    "Zeta & Eta (Zeta)": false,
                                    "Beta & Delta & Zeta (Zeta)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Eta": {
                                    "Eta": false,
                                    "??? (Eta)": false,
                                    "Everyone (Eta)": false,
                                    "Seven Shadows (Eta)": false,
                                    "Alpha & Eta (Eta)": false,
                                    "Zeta & Eta (Eta)": false,
                                    "Gamma & Epsilon & Eta (Eta)": false,
                                    "checked": false,
                                    "open": false
                                }
                            }
                        },
                        "Numbers": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Iota": {
                                    "Iota": false,
                                    "None (Iota)": false,
                                    "Gamma & Iota (Iota)": false,
                                    "checked": false,
                                    "open": false,
                                },
                                "Lambda": {
                                    "Lambda": false,
                                    "Mound of Flesh (Lambda)": false,
                                    "Tawny Elf (Lambda)": false,
                                    "None (Lambda)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Nu": {
                                    "Nu": false,
                                    "No. 93": false,
                                    "Characterised Alpha": false,
                                    "??? (No. 93)": false,
                                    "Alpha & Nu (Nu)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Chi": {
                                    "Chi": false,
                                    "No. 111": false,
                                    "Karen": false,
                                    "Characterised Cult Member": false,
                                    "Characterised Eta": false,
                                    "Characterised Shadow": false,
                                    "??? (Karen)": false,
                                    "Chi & Omega (Chi)": false,
                                    "No. 111 & No. 122 (No. 111)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Omega": {
                                    "Omega": false,
                                    "No. 122": false,
                                    "Possessed (Omega)": false,
                                    "Characterised Gamma": false,
                                    "Characterised Zeta": false,
                                    "Chi & Omega (Omega)": false,
                                    "No. 111 & No. 122 (No. 122)": false,
                                    "checked": false,
                                    "open": false
                                }
                            }
                        },
                        "Members": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Victoria": {
                                    "Victoria": false,
                                    "??? (Victoria)": false,
                                    "No. 559": false,
                                    "checked": false,
                                    "open": false
                                },
                                "No. 664": {
                                    "checked": false,
                                },
                                "No. 665": {
                                    "checked": false,
                                },
                                "Garden Member": {
                                    "checked": false
                                },
                                "Garden Members": {
                                    "checked": false
                                }
                            }
                        }
                    },
                    characters: {
                        "Cid Kagenou": {
                            "Cid Kagenou": false,
                            "??? (Cid Kagenou)": false,
                            "None (Cid Kagenou)": false,
                            "Shadow": false,
                            "??? (Shadow)": false,
                            "Mundane Mann": false,
                            "John Smith": false,
                            "Minoru Kageno": false,
                            "??? (Minoru Kageno)": false,
                            "Stylish Ruffian Slayer": false,
                            "Stylish Bandit Slayer": false,
                            "??? (Stylish Bandit Slayer)": false,
                            "Cid & Sunraku (Cid)": false,
                            "John Smith & Yukime (John Smith)": false,
                            "Sunraku & Shadow (Shadow)": false,
                            "Nuru": false,
                            "??? (Nuru)": false,
                            "checked": false,
                            "open": false
                        }
                    }
                },
                'MIDGAR': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
                    groups: {
                        "Crimson Order": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Iris Midgar": {
                                    "checked": false,
                                },
                                "Glen": {
                                    "checked": false,
                                },
                                "Marco Granger": {
                                    "Marco Granger": false,
                                    "Dark Knight Trainee": false,
                                    "open": false,
                                    "checked": false,
                                }
                            }
                        },
                        "Midgar Academy": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Alexia Midgar": {
                                    "Alexia Midgar": false,
                                    "??? (Alexia Midgar)": false,
                                    "Alexia & Claire (Alexia Midgar)": false,
                                    "Alexia Midgar & Natsume Kafka (Alexia Midgar)": false,
                                    "Shelly and Alexia (Alexia Midgar)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Claire Kagenou": {
                                    "Claire Kagenou": false,
                                    "??? (Claire Kagenou)": false,
                                    "Alexia & Claire (Claire Kagenou)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Sherry Barnett": {
                                    "Sherry Barnett": false,
                                    "Shelly and Alexia (Sherry Barnett)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Po Tato": {
                                    "Po Tato": false,
                                    "Skel & Po (Po)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Skel Etal": {
                                    "Skel Etal": false,
                                    "Skel & Po (Skel)": false,
                                    "open": false,
                                    "checked": false,
                                },
                            }
                        },
                        "Midgar Kingdom": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Klaus Midgar": {
                                    "checked": false,
                                },
                                "Mr. Kagenou": {
                                    "checked": false,
                                },
                                "Mrs. Kagenou": {
                                    "checked": false,
                                },
                            }
                        },
                        "General": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Captain's Daughter": {
                                    "checked": false,
                                },
                                "Duke's Second Son": {
                                    "checked": false,
                                },
                                "Knight Captain": {
                                    "checked": false,
                                }
                            }
                        }
                    }
                },
                'ORIANA': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
                    groups: {
                        "Generic": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Oriana Noble A": {
                                    "checked": false,
                                },
                                "Oriana Noble B": {
                                    "checked": false,
                                },
                                "Oriana Noble C": {
                                    "checked": false,
                                }
                            }
                        },
                        "Oriana Kingdom": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Kevin": {
                                    "checked": false,
                                },
                                "Margaret": {
                                    "checked": false,
                                },
                                "Newwealth": {
                                    "checked": false,
                                },
                                "Parton": {
                                    "checked": false,
                                },
                                "Raphael Oriana": {
                                    "checked": false,
                                },
                                "Reina Oriana": {
                                    "checked": false,
                                },
                            }
                        }
                    },
                    characters: {
                        "Rose Oriana": {
                            "Rose Oriana": false,
                            "No. 666": false,
                            "checked": false,
                            "open": false
                        }
                    }
                },
                'VELGALTA': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
                    groups: {
                        "Generic": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Curie Oso": {
                                    "checked": false,
                                },
                                "Velgalta Soldier": {
                                    "checked": false,
                                },
                                "Velgalta Soldiers": {
                                    "checked": false,
                                },
                                "Velgalta Soldier A": {
                                    "checked": false,
                                },
                                "Velgalta Soldier B": {
                                    "checked": false,
                                },
                                "Velgalta Soldier C": {
                                    "checked": false,
                                },
                                "Velgalta Soldier D": {
                                    "checked": false,
                                },
                                "Velgalta Soldier E": {
                                    "checked": false,
                                }
                            }
                        }
                    },
                    characters: {
                        "Annerose Nichtsehen": {
                            "Annerose Nichtsehen": false,
                            "None (Annerose)": false,
                            "open": false,
                            "checked": false,
                        },
                        "Rude": {
                            "checked": false,
                        }
                    }
                },
                'CULT OF DIABLOS': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
                    groups: {
                        "Knights of Rounds": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Jack Nelson": {
                                    "checked": false,
                                },
                                "Lutheran Barnett": {
                                    "Lutheran Barnett": false,
                                    "Sir Gaunt": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Mordred": {
                                    "checked": false,
                                },
                                "Sergey Gorman": {
                                    "Sergey Gorman": false,
                                    "??? (Sergey Gorman)": false,
                                    "None (Sergey Gorman)": false,
                                    "checked": false,
                                    "open": false
                                }
                            }
                        },
                        "Children": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Kouadoi": {
                                    "checked": false,
                                },
                                "Maximilian": {
                                    "checked": false,
                                },
                                "Nanigashi": {
                                    "Nanigashi": false,
                                    "??? (Nanigashi)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Rex": {
                                    "checked": false,
                                }
                            }
                        },
                        "Members": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Gettan": {
                                    "checked": false,
                                },
                                "Grease": {
                                    "checked": false,
                                },
                                "Perv Asshat": {
                                    "checked": false,
                                },
                                "Zenon Griffey": {
                                    "checked": false,
                                }
                            }
                        },
                        "Generic": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Cultist": {
                                    "checked": false,
                                },
                                "Cultist A": {
                                    "checked": false,
                                },
                                "Cultist B": {
                                    "checked": false,
                                },
                                "Cultist C": {
                                    "checked": false,
                                },
                                "Cultist D": {
                                    "checked": false,
                                },
                                "Cultist E": {
                                    "checked": false,
                                },
                                "Cultist F": {
                                    "checked": false,
                                },
                                "Cult Leader": {
                                    "checked": false,
                                },
                                "Cult Members": {
                                    "checked": false,
                                },
                                "Cult Member": {
                                    "checked": false,
                                },
                                "Cult Member Boss": {
                                    "checked": false
                                },
                                "Cult Member A": {
                                    "Cult Member A": false,
                                    "Cult Member A & B (Cult Member A)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Cult Member B": {
                                    "Cult Member B": false,
                                    "Cult Member A & B (Cult Member B)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Cult Member C": {
                                    "checked": false,
                                },
                            }
                        }
                    }
                },
                'OTHERS': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
                    characters: {
                        "Aurora": {
                            "Aurora": false,
                            "??? (Aurora)": false,
                            "checked": false,
                            "open": false
                        },
                        "Beatrix": {
                            "checked": false,
                        },
                        "Goldy Gilded": {
                            "Goldy Gilded": false,
                            "Goldy & Quinton (Goldy)": false,
                            "open": false,
                            "checked": false,
                        },
                        "Quinton": {
                            "Quinton": false,
                            "Goldy & Quinton (Quinton)": false,
                            "open": false,
                            "checked": false,
                        }
                    },
                    groups: {
                        "Dragons": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Malak": {
                                    "Malak": false,
                                    "Malaks": false,
                                    "Malak Swarm": false,
                                    "open": false,
                                    "checked": false
                                },
                                "Mist Dragon": {
                                    "Mist Dragon": false,
                                    "??? (Mist Dragon)": false,
                                    "None (Mist Dragon)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Nidhogg": {
                                    "checked": false,
                                }
                            }
                        },
                        "Lawless City": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Claudia": {
                                    "checked": false,
                                },
                                "Crimson": {
                                    "checked": false,
                                },
                                "Elisabeth": {
                                    "checked": false,
                                },
                                "Juggernaut": {
                                    "checked": false,
                                },
                                "Kana": {
                                    "checked": false,
                                },
                                "Marie": {
                                    "checked": false,
                                },
                                "Mary": {
                                    "checked": false,
                                },
                                "Natsu": {
                                    "checked": false,
                                },
                                "Vampire": {
                                    "checked": false,
                                },
                                "Yukime": {
                                    "Yukime": false,
                                    "John Smith & Yukime (Yukime)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "White Demon": {
                                    "checked": false,
                                }
                            }
                        },
                        "MCA": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Garter Kikuchi": {
                                    "checked": false,
                                },
                                "Leaf One": {
                                    "checked": false
                                },
                                "Leaf Two": {
                                    "checked": false
                                },
                                "Leaf Three": {
                                    "checked": false
                                },
                                "Zabra": {
                                    "checked": false
                                },
                            }
                        },
                        "Shangri-La Frontier": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Arthur Pencilgon": {
                                    "checked": false,
                                },
                                "OiKatzo": {
                                    "checked": false,
                                },
                                "Sunraku": {
                                    "Sunraku": false,
                                    "??? (Sunraku)": false,
                                    "Sunraku & Shadow (Sunraku)": false,
                                    "Cid & Sunraku (Sunraku)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Wethermon": {
                                    "Wethermon": false,
                                    "??? (Wethermon)": false,
                                    "open": false,
                                    "checked": false,
                                },
                            }
                        },
                        "Templars": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Templar": {
                                    "Templar": false,
                                    "????? (Templar)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Templars": {
                                    "checked": false,
                                },
                                "Templar A": {
                                    "checked": false,
                                },
                                "Templar B": {
                                    "checked": false,
                                },
                                "Templar C": {
                                    "checked": false,
                                },
                                "Templar Leader": {
                                    "checked": false,
                                },
                                "Templar Leader A": {
                                    "checked": false,
                                },
                                "Templar Leader B": {
                                    "checked": false,
                                },
                                "Templar Leader C": {
                                    "checked": false,
                                },
                                "Templar Leader D": {
                                    "checked": false,
                                },
                                "Bishop Drake": {
                                    "Bishop Drake": false,
                                    "Bishop of Orum": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Follower A": {
                                    "checked": false,
                                },
                                "Follower B": {
                                    "checked": false,
                                },
                            }
                        },
                        "Side Characters": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Toppe Batterius": {
                                    "checked": false,
                                }
                            }
                        }
                    }
                },
                'EARTH': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
                    characters: {
                        "Akane Nishino": {
                            "checked": false
                        },
                        "Kidnapper A": {
                            "checked": false
                        },
                        "Kidnapper B": {
                            "checked": false
                        },
                        "Akane's Butler": {
                            "checked": false
                        }
                    }
                },
                'APOCRYPHA': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
                    groups: {
                        "Heroes": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Olivier": {
                                    "Olivier": false,
                                    "??? (Olivier)": false,
                                    "Alpha Look-alike": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Freya": {
                                    "Freya": false,
                                    "??? (Freya)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Lili": {
                                    "checked": false,
                                },
                                "Duet": {
                                    "Duet": false,
                                    "Beta Look-alike": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Pente": {
                                    "Pente": false,
                                    "Epsilon Look-alike": false,
                                    "open": false,
                                    "checked": false,
                                },
                            }
                        },
                        "Other": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Diablos": {
                                    "checked": false,
                                },
                                "Mysterious Voice": {
                                    "checked": false,
                                }
                            }
                        }
                    }
                },
                'GENERIC': {
                    openGroup: false,
                    checked: false,
                    filters: '',
                    open: false,
                    characters: {
                        "None": {
                            "checked": false,
                        }
                    },
                    groups: {
                        "General": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Announcer": {
                                    "checked": false,
                                },
                                "Aristocrat": {
                                    "checked": false,
                                },
                                "Aristocrats": {
                                    "checked": false,
                                },
                                "Attendees": {
                                    "checked": false,
                                },
                                "Bookie": {
                                    "checked": false,
                                },
                                "Broadcast": {
                                    "checked": false,
                                },
                                "Church Member": {
                                    "checked": false,
                                },
                                "Civil Servant": {
                                    "checked": false,
                                },
                                "Civil Servants": {
                                    "checked": false,
                                },
                                "Civilian": {
                                    "checked": false,
                                },
                                "Coworker": {
                                    "checked": false,
                                },
                                "Disciple": {
                                    "checked": false,
                                },
                                "Elven Coachwoman": {
                                    "checked": false,
                                },
                                "Elven Guardswoman": {
                                    "checked": false,
                                },
                                "Fan Passerby": {
                                    "checked": false,
                                },
                                "Female Pilgrim": {
                                    "checked": false,
                                },
                                "Guard": {
                                    "checked": false,
                                },
                                "Heckler": {
                                    "checked": false,
                                },
                                "Junior": {
                                    "checked": false,
                                },
                                "Old Man": {
                                    "checked": false,
                                },
                                "Paladin": {
                                    "checked": false,
                                },
                                "Passerby A": {
                                    "checked": false,
                                },
                                "Passerby B": {
                                    "checked": false,
                                },
                                "Passerby C": {
                                    "checked": false,
                                },
                                "Passerby D": {
                                    "checked": false,
                                },
                                "Pickpocket": {
                                    "checked": false,
                                },
                                "Priest": {
                                    "checked": false,
                                },
                                "Maid": {
                                    "checked": false,
                                },
                                "Manager": {
                                    "checked": false,
                                },
                                "Margrave": {
                                    "checked": false,
                                },
                                "Medic": {
                                    "checked": false,
                                },
                                "Mother": {
                                    "checked": false
                                },
                                "Noblewoman": {
                                    "checked": false,
                                },
                                "Referee": {
                                    "checked": false,
                                },
                                "Researcher": {
                                    "checked": false,
                                },
                                "Sailor": {
                                    "checked": false
                                },
                                "Scientist": {
                                    "checked": false
                                },
                                "Soldier": {
                                    "checked": false
                                },
                                "Subordinate": {
                                    "checked": false
                                },
                                "Veteran Paladin": {
                                    "checked": false
                                }
                            }
                        },
                        "Bandits": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Bandit": {
                                    "checked": false,
                                },
                                "Bandits": {
                                    "checked": false,
                                },
                                "Bandit A": {
                                    "checked": false,
                                },
                                "Bandit B": {
                                    "checked": false,
                                },
                                "Bandit Boss": {
                                    "checked": false,
                                },
                            }
                        },
                        "Business": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Branch Manager": {
                                    "checked": false,
                                },
                                "Cake Shop Assistant": {
                                    "checked": false,
                                },
                                "Customer": {
                                    "Customer": false,
                                    "??? (Customer)": false,
                                    "checked": false,
                                    "open": false,
                                },
                                "Clerk": {
                                    "checked": false,
                                },
                                "Merchant": {
                                    "checked": false,
                                },
                                "Merchant A": {
                                    "checked": false,
                                },
                                "Merchant A Secretary": {
                                    "checked": false,
                                },
                                "Merchant B": {
                                    "checked": false,
                                },
                                "Merchant C": {
                                    "checked": false,
                                },
                                "Wounded Merchant": {
                                    "checked": false,
                                },
                                "Mitsugoshi Staff": {
                                    "checked": false
                                },
                                "Quiche Stall Owner": {
                                    "checked": false,
                                },
                                "Shop Staff": {
                                    "checked": false,
                                },
                                "Skewer Stall Owner": {
                                    "checked": false,
                                },
                                "Soup Stall Owner": {
                                    "checked": false,
                                },
                                "Sailor": {
                                    "checked": false,
                                },
                                "Staff": {
                                    "checked": false
                                }
                            }
                        },
                        "Casino": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Joker": {
                                    "Joker": false,
                                    "??? (Joker)": false,
                                    "checked": false,
                                    "open": false,
                                },
                                "King": {
                                    "King": false,
                                    "??? (King)": false,
                                    "checked": false,
                                    "open": false,
                                },
                                "Dealer": {
                                    "checked": false,
                                }
                            }
                        },
                        "Children": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Children": {
                                    "checked": false,
                                },
                                "Boy": {
                                    "checked": false,
                                },
                                "Boys": {
                                    "checked": false,
                                },
                                "Boy A": {
                                    "checked": false,
                                },
                                "Boy B": {
                                    "checked": false,
                                },
                                "Boy C": {
                                    "checked": false,
                                },
                                "Girl": {
                                    "checked": false,
                                },
                                "Girl A": {
                                    "checked": false,
                                },
                                "Girl B": {
                                    "checked": false,
                                }
                            }
                        },
                        "Committee": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Committee Member": {
                                    "checked": false,
                                },
                                "Committee Members": {
                                    "checked": false,
                                },
                                "Committe Person": {
                                    "checked": false,
                                },
                                "Boy Cmte. Member A": {
                                    "checked": false,
                                },
                                "Boy Cmte. Member B": {
                                    "checked": false,
                                },
                                "Girl Cmte. Member A": {
                                    "checked": false,
                                },
                                "Girl Cmte. Member B": {
                                    "checked": false,
                                }
                            }
                        },
                        "Events": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Announcer": {
                                    "checked": false,
                                },
                                "Audience": {
                                    "checked": false,
                                },
                                "Crowd": {
                                    "checked": false,
                                },
                                "Participant": {
                                    "checked": false,
                                },
                                "Participant A": {
                                    "checked": false,
                                },
                                "Participant B": {
                                    "checked": false,
                                },
                                "Participant C": {
                                    "checked": false,
                                },
                                "Bearded Participant": {
                                    "checked": false,
                                },
                                "Spectator": {
                                    "checked": false,
                                },
                                "Spectator A": {
                                    "checked": false,
                                },
                                "Spectator B": {
                                    "checked": false,
                                },
                                "Spectator Woman": {
                                    "checked": false
                                },
                            }
                        },
                        "Knights": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Knight": {
                                    "checked": false,
                                },
                                "Knights": {
                                    "checked": false,
                                },
                                "Knight A": {
                                    "checked": false,
                                },
                                "Dark Knight": {
                                    "checked": false,
                                },
                                "Female DK Trainee": {
                                    "checked": false,
                                },
                            }
                        },
                        "Mercenaries": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Mercenary A": {
                                    "Mercenary A": false,
                                    "??? (Mercenary A)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Mercenary B": {
                                    "checked": false,
                                },
                                "Mercenary C": {
                                    "checked": false,
                                },
                                "Mercenary Veteran": {
                                    "checked": false,
                                },
                                "Mercenary Boss": {
                                    "checked": false,
                                },
                                "Mundane Mercenary": {
                                    "checked": false,
                                }
                            }
                        },
                        "Monsters": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Monster": {
                                    "checked": false,
                                },
                                "Boss Monster": {
                                    "checked": false,
                                },
                                "Alpha Wolf": {
                                    "checked": false,
                                },
                                "Basilisk": {
                                    "checked": false,
                                },
                                "Boar": {
                                    "checked": false
                                },
                                "Evil Spirit": {
                                    "checked": false,
                                },
                                "Ghoul": {
                                    "checked": false,
                                },
                                "Merry Whip": {
                                    "checked": false
                                },
                                "Little Cuckoo-kun": {
                                    "checked": false
                                },
                                "Mr. Vendy": {
                                    "checked": false
                                },
                                "Shishiodoshi": {
                                    "Shishiodoshi": false,
                                    "Shishi(?)": false,
                                    "open": false,
                                    "checked": false
                                }
                            }
                        },
                        "Mysterious": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Mysterious Captain": {
                                    "checked": false,
                                },
                                "Mysterious Man A": {
                                    "checked": false,
                                },
                                "Mysterious Man B": {
                                    "checked": false,
                                },
                                "Mysterious Man C": {
                                    "checked": false,
                                },
                                "Mysterious Man D": {
                                    "checked": false,
                                },
                                "Mysterious Soldiers": {
                                    "checked": false,
                                },
                                "Mysterious Soldier A": {
                                    "checked": false,
                                },
                                "Mysterious Soldier B": {
                                    "checked": false,
                                },
                                "Mysterious Soldier C": {
                                    "checked": false,
                                },
                                "Mysterious Soldier D": {
                                    "checked": false,
                                },
                                "Mysterious Soldier E": {
                                    "checked": false,
                                },
                            }
                        },
                        "News": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Editor": {
                                    "checked": false,
                                },
                                "MNA Journalist": {
                                    "checked": false,
                                },
                                "News Reporter": {
                                    "checked": false,
                                },
                                "Reporter": {
                                    "checked": false,
                                }
                            }
                        },
                        "Rogues": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Rogue A": {
                                    "checked": false,
                                },
                                "Rogue B": {
                                    "checked": false,
                                },
                                "Rogue Leader": {
                                    "checked": false,
                                },
                            }
                        },
                        "School": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Classmate": {
                                    "checked": false,
                                },
                                "Student": {
                                    "checked": false,
                                },
                                "Female Student": {
                                    "checked": false,
                                },
                                "Female Student A": {
                                    "checked": false,
                                },
                                "Male Student A": {
                                    "checked": false,
                                },
                                "Teacher": {
                                    "checked": false,
                                },
                            }
                        },
                        "Therianthropes": {
                            openGroup: false,
                            checked: false,
                            open: false,
                            filters: '',
                            characters: {
                                "Therianthrope A": {
                                    "checked": false,
                                },
                                "Therianthrope B": {
                                    "checked": false,
                                },
                                "T-thrope Opponent": {
                                    "checked": false,
                                },
                                "T-thrope Spectator": {
                                    "checked": false,
                                },
                                "T-thrope Spectators": {
                                    "checked": false,
                                },
                                "Bearded T-thrope": {
                                    "checked": false,
                                },
                                "Dog T-thrope Priest": {
                                    "checked": false,
                                },
                                "Fox T-thrope": {
                                    "checked": false,
                                },
                                "Pigtailed T-thrope": {
                                    "checked": false,
                                },
                                "Rabbit T-thrope": {
                                    "checked": false,
                                },
                                "Raccoon T-thrope": {
                                    "checked": false,
                                },
                                "Red Horse T-thrope": {
                                    "checked": false,
                                },
                                "Tiger T-thrope": {
                                    "checked": false,
                                },
                                "White Horse T-thrope": {
                                    "checked": false,
                                },
                                "McKen Ro": {
                                    "checked": false,
                                },
                            }
                        },
                    }
                },
            };
        }
    });

    useEffect(() => {
        sessionStorage.setItem('dropdownStates', JSON.stringify(dropdownStates));
    }, [dropdownStates]);

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

    const namedCharacters = ["Cid Kagenou", "Akane Nishino", "Alpha", "Beta", "Gamma", "Delta",
        "Zeta", "Eta", "Alexia Midgar", "Iris Midgar", "Lambda", "Yukime", "Nu", "Victoria", "Rose Oriana", "Claire Kagenou",
        "Olivier", "Freya", "Lili", "Duet", "Pente", "Sherry Barnett", "Po Tato", "Skel Etal"
    ];

    const nameMap = {
        'Cid Kagenou (All)': ['Cid', 'Cid Kagenou', 'John Smith', 'Mundane Mann', 'Minoru Kageno', 'Shadow', 'Stylish Ruffian Slayer', '??? (Stylish Bandit Slayer)', '??? (Cid Kagenou)',
            '??? (Minoru Kageno)', 'Minoru Kageno', 'Nuru', '??? (Nuru)', 'Sunraku & Shadow (Shadow)', 'Cid & Sunraku (Cid)', 'John Smith & Yukime (John Smith)'
        ],
        'Cid Kagenou': ['Cid Kagenou', 'Cid', '??? (Cid Kagenou)'],
        '??? (Shadow)': ['???? (Shadow)'],
        'Claire Kagenou (All)': ['Claire Kagenou', 'Claire', '??? (Claire Kagenou)', "Alexia & Claire (Claire Kagenou)"],
        'Claire Kagenou': ['Claire Kagenou', 'Claire', '??? (Claire Kagenou)'],
        'Alexia Midgar (All)': ['Alexia Midgar', 'Alexia', '????? (Alexia Midgar)', 'Shelly and Alexia (Alexia Midgar)', "??? (Alexia Midgar)", "Alexia & Claire (Alexia Midgar)", 'Alexia Midgar & Natsume Kafka (Alexia Midgar)'],
        'Alexia Midgar': ['Alexia Midgar', 'Alexia', 'Shelly and Alexia (Alexia Midgar)', "??? (Alexia Midgar)"],
        '??? (Alexia Midgar)': ['????? (Alexia Midgar)'],
        'Iris Midgar': ['Iris Midgar', 'Iris'],
        'Sherry Barnett (All)': ['Sherry Barnett', 'Sherry', 'Shelly and Alexia (Sherry Barnett)'],
        'Sherry Barnett': ['Sherry Barnett', 'Sherry', 'Shelly and Alexia (Sherry Barnett)'],
        'Po Tato (All)': ['Po Tato', 'Po', 'Skel & Po (Po)'],
        'Po Tato': ['Po Tato', 'Po'],
        'Skel Etal (All)': ['Skel Etal', 'Skel & Po (Skel)', 'Skel'],
        'Skel Etal': ['Skel Etal', 'Skel'],
        'Rose Oriana (All)': ['Rose Oriana', 'Rose', 'No.666', 'No. 666'],
        'Rose Oriana': ['Rose Oriana', 'Rose'],
        'No. 666': ['No. 666', 'No.666'],
        'Alpha (All)': ['Alpha', '??? (Alpha)', 'Alpha & Nu (Alpha)', 'Alpha & Eta (Alpha)', 'None (Alpha)', 'Everyone (Alpha)', 'Alpha & Gamma (Alpha)', 'Alpha & Zeta (Alpha)', 'Alpha & Beta (Alpha)', 'Seven Shadows (Alpha)'],
        'Alpha': ['Alpha', '??? (Alpha)', 'None (Alpha)'],
        'Beta (All)': ['Beta', 'Natsume Kafka', 'Natsume', '??? (Natsume Kafka)', '??? (Natsume)', 'None (Beta)', 'Everyone (Beta)', 'Beta & Epsilon (Beta)',
            'Alpha & Beta (Beta)', 'Beta & Gamma (Beta)', '??? (Beta)', 'Seven Shadows (Beta)', 'Beta & Delta & Zeta (Beta)', 'Alexia Midgar & Natsume Kafka (Natsume Kafka)',
            'Fictional Shadow', 'Fictional Zenon', 'Zeta & Beta (Beta)'],
        'Beta': ['Natsume Kafka', 'Beta', '??? (Beta)', 'None (Beta)'],
        'Natsume Kafka': ['Natsume Kafka', 'Natsume'],
        '??? (Natsume Kafka)': ['??? (Natsume)'],
        'Gamma (All)': ['Gamma', 'Everyone (Gamma)', '??? (Gamma)', 'Seven Shadows (Gamma)', 'None (Gamma)', 'Beta & Gamma (Gamma)',
            'Gamma& Epsilon & Eta (Gamma)', 'Gamma & Epsilon (Gamma)', 'Luna', 'Alpha & Gamma (Gamma)', "Gamma & Iota (Iota)"],
        'Gamma': ['Gamma', '??? (Gamma)', 'None (Gamma)'],
        "Delta (All)": ['Delta', 'Everyone (Delta)', '??? (Delta)', 'Seven Shadows (Delta)', 'Delta & Zeta (Delta)', 'Beta & Delta & Zeta (Delta)', "Deltan"],
        "Delta": ['Delta', '??? (Delta)'],
        'Epsilon (All)': ['Epsilon', 'Everyone (Epsilon)', 'Beta & Epsilon (Epsilon)', '??? (Epsilon)', 'Seven Shadows (Epsilon)',
            'Gamma& Epsilon & Eta (Epsilon)', 'Gamma & Epsilon (Epsilon)', 'Zeta & Epsilon (Epsilon)', 'Shiron'],
        'Epsilon': ['Epsilon', '??? (Epsilon)', 'Shiron'],
        'Zeta (All)': ['Zeta', 'Everyone (Zeta)', 'Alpha & Zeta (Zeta)', 'Zeta & Eta (Zeta)', '??? (Zeta)', 'Seven Shadows (Zeta)', 'Delta & Zeta (Zeta)', 'Beta & Delta & Zeta (Zeta)', "Zetan",
            "Zeta & Epsilon (Zeta)", 'Zeta & Beta (Zeta)'
        ],
        'Zeta': ['Zeta', '??? (Zeta)'],
        'Eta (All)': ['Eta', 'Everyone (Eta)', 'Zeta & Eta (Eta)', 'Seven Shadows (Eta)', '??? (Eta)', 'Gamma& Epsilon & Eta (Eta)', 'Alpha & Eta (Eta)'],
        'Gamma & Epsilon & Eta (Eta)': ['Gamma& Epsilon & Eta (Eta)'],
        'Gamma & Epsilon & Eta (Gamma)': ['Gamma& Epsilon & Eta (Gamma)'],
        'Gamma & Epsilon & Eta (Epsilon)': ['Gamma& Epsilon & Eta (Epsilon)'],
        'Eta': ['Eta', '??? (Eta)'],
        'Chi (All)': ["Chi", "Chi & Omega (Chi)", "Karen", "??? (Karen)", "No. 111", "No. 111 & No. 122 (No. 111)", "Characterised Shadow", "Characterised Eta", "Characterised Cult Member"],
        'Omega (All)': ["Omega", "Chi & Omega (Omega)", "Possessed (Omega)", "No. 111 & No. 122 (No. 122)", "No. 122", "Characterised Zeta", "Characterised Gamma"],
        'Lambda (All)': ['Lambda', 'Tawny Elf (Lambda)', 'None (Lambda)'],
        'Lambda': ['Lambda', 'None (Lambda)'],
        'Iota (All)': ['Iota', 'None (Iota)', 'Gamma & Iota (Iota)'],
        'Iota': ['Iota', 'None (Iota)'],
        'Diablos': ['Massive Mound of Magic'],
        'Olivier (All)': ['Olivier', 'Alpha Look-alike', '??? (Olivier)'],
        'Olivier': ['Olivier', 'Alpha Look-alike', '??? (Olivier)'],
        'Duet (All)': ['Duet', 'Beta Look-alike'],
        'Duet': ['Duet', 'Beta Look-alike'],
        'Pente (All)': ['Pente', 'Epsilon Look-alike'],
        'Pente': ['Pente', 'Epsilon Look-alike'],
        'Freya (All)': ['Freya', '??? (Freya)'],
        'Freya': ['Freya', '??? (Freya)'],
        'Aurora (All)': ['Aurora', '??? (Aurora)'],
        'Aurora': ['Aurora', '??? (Aurora)'],
        'Nanigashi (All)': ['Nanigashi', '??? (Nanigashi)'],
        'Nanigashi': ['Nanigashi', '??? (Nanigashi)'],
        'Victoria (All)': ['Victoria', 'No. 559', '??? (Victoria)'],
        'Victoria': ['Victoria', '??? (Victoria)'],
        'Yukime (All)': ['Yukime', 'No. 559', '??? (Victoria)', 'John Smith & Yukime (Yukime)'],
        'Nu (All)': ['Nu', '93', 'No. 93', '??? (No. 93)', 'Alpha & Nu (Nu)', 'Characterised Alpha'],
        'No. 93': ['93', 'No. 93', '??? (No. 93)'],
        'Shishiodoshi (All)': ['Shishiodoshi', 'Shishi(?)'],
        'Customer (All)': ['Customer', '??? (Customer)'],
        'Customer': ['??? (Customer)'],
        'King (All)': ['King', '??? (King)'],
        'King': ['King', '??? (King)'],
        'Joker (All)': ['Joker', '??? (Joker)'],
        'Joker': ['Joker', '??? (Joker)'],
        'Dog T-thrope Priest': ['Dog T.thrope Priest'],
        'Wethermon (All)': ['Wethermon', '??? (Wethermon)'],
        'Wethermon': ['Wethermon', '??? (Wethermon)'],
        'Sunraku (All)': ['Sunraku', '??? (Sunraku)', 'Cid & Sunraku (Sunraku)', 'Sunraku & Shadow (Sunraku)'],
        'Sunraku': ['Sunraku', '??? (Sunraku)'],
        'Mist Dragon (All)': ['Mist Dragon', '??? (Mist Dragon)', 'None (Mist Dragon)'],
        'Mist Dragon': ['Mist Dragon', '??? (Mist Dragon)', 'None (Mist Dragon)'],
        'Templar (All)': ['Templar', '????? (Templar)'],
        'Templar': ['Templar', '????? (Templar)'],
        'Cult Member A (All)': ['Cult Member A', 'Cult Member A & B (Cult Member A)'],
        'Cult Member B (All)': ['Cult Member B', 'Cult Member A & B (Cult Member B)'],
        'Cult Member': ['Cult Member', 'Bandit?'],
        'Marco Granger (All)': ['Marco Granger', 'Dark Knight Trainee'],
        'Mercenary A (All)': ['Mercenary A', '??? (Mercenary A)'],
        'Sergey Gorman (All)': ['Sergey Gorman', '??? (Sergey Gorman)', "Sergey", "Sergei"],
        'Sergey': ['Sergei'],
        'Bishop Drake (All)': ['Bishop Drake', 'Bishop of Orum'],
        'Curie Oso': ['Curious Noblewoman'],
        'Annerose Nichtsehen (All)': ['Annerose Nichtsehen', 'Annerose', 'None (Annerose)'],
        'Annerose Nichtsehen': ['Annerose Nichtsehen', 'Annerose', 'None (Annerose)'],
        'Lutheran Barnett (All)': ['Lutheran Barnett', 'Sir Gaunt'],
        'None': ['']
    };

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
        Object.entries(dropdownStates).forEach(([group, dropdown]) => {
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

        console.log(animeCheckedItems)

        if (animeCheckedItems.length > 0) {
            anCheckedData = await fetchANData(animeCheckedItems, versionData, setVersionData);
        }

        if (lnCheckedItems.length > 0) {
            lnCheckedData = await fetchLNData(lnCheckedItems, versionData, setVersionData);
        }

        if (wnCheckedItems.length > 0) {
            wnCheckedData = await fetchWNData(wnCheckedItems, versionData, setVersionData);
        }

        if (esCheckedItems.length > 0) {
            esCheckedData = await fetchESData(esCheckedItems, versionData, setVersionData);
        }

        if (apoCheckedItems.length > 0) {
            apoCheckedData = await fetchAPOData(apoCheckedItems, versionData, setVersionData);
        }

        if (sscCheckedItems.length > 0) {
            sscCheckedData = await fetchSSCData(sscCheckedItems, versionData, setVersionData);
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
            setResultsKey(1);

        } else if (resultsKeyString === "2") {
            setResultsKey(2);

        } else if (resultsKeyString === "12") {
            setResultsKey(3);
        } else {
            setResultsKey(0);
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

    useEffect(() => {
        fetchAllDropdowns();
    }, [dropdowns]);

    if (dropdowns === undefined) {
        return;
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
                dropdownStates={dropdownStates}
                setDropdownStates={setDropdownStates}
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
