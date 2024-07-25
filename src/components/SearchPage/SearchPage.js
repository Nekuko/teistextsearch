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
import { fetchLNData, fetchWNData, fetchAPOData, fetchESData, fetchSSCData, fetchANData } from '../../utils/firebaseFunctions';
import { VERSIONS } from '../../versions';
import { ESMAPREVERSE } from '../../esMap';


function SearchPage() {
    const [mediumFlash, setMediumFlash] = useState(false);
    const [keywordsFlash, setKeywordsFlash] = useState(false);


    const [animeDropdownState, setAnimeDropdownState] = React.useState(() => {
        const savedState = sessionStorage.getItem('animeDropdownState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            if (parsedState.version === VERSIONS['animeDropdownState']) {
                return parsedState;
            }
        }

        return {
            mainChecked: false,
            filter: '',
            version: VERSIONS['animeDropdownState'],
            openSeasons: {},
            seasonsChecked: {
                "Season 1": {
                    "s1e1": {
                        "title": "1 | The Hated Classmate",
                        "checked": false
                    },
                    "s1e2": {
                        "title": "2 | Shadow Garden is Born",
                        "checked": false
                    },
                    "s1e3": {
                        "title": "3 | Fencer Ordinaire",
                        "checked": false
                    },
                    "s1e4": {
                        "title": "4 | Sadism's Rewards",
                        "checked": false
                    },
                    "s1e5": {
                        "title": "5 | I Am...",
                        "checked": false
                    },
                    "s1e6": {
                        "title": "6 | Pretenders",
                        "checked": false
                    },
                    "s1e7": {
                        "title": "7 | A Fencing Tournament of Intrigue & Bloodshed",
                        "checked": false
                    },
                    "s1e8": {
                        "title": "8 | Dark Knight Academy Under Attack",
                        "checked": false
                    },
                    "s1e9": {
                        "title": "9 | The End of a Lie",
                        "checked": false
                    },
                    "s1e10": {
                        "title": "10 | The Sacred Land, City of Deception",
                        "checked": false
                    },
                    "s1e11": {
                        "title": "11 | The Goddess's Trial",
                        "checked": false
                    },
                    "s1e12": {
                        "title": "12 | The Truth Within the Memories",
                        "checked": false
                    },
                    "s1e13": {
                        "title": "13 | A Bloody Showdown as an Offering to Annihilation",
                        "checked": false
                    },
                    "s1e14": {
                        "title": "14 | Your Lie, Your Wish",
                        "checked": false
                    },
                    "s1e15": {
                        "title": "15 | The Strongest Weakest Man",
                        "checked": false
                    },
                    "s1e16": {
                        "title": "16 | Unseen Intentions",
                        "checked": false
                    },
                    "s1e17": {
                        "title": "17 | Moonlight That Pierces the Darkness",
                        "checked": false
                    },
                    "s1e18": {
                        "title": "18 | Betting on a Moment",
                        "checked": false
                    },
                    "s1e19": {
                        "title": "19 | Dancing Puppet",
                        "checked": false
                    },
                    "s1e20": {
                        "title": "20 | Advent of the Demon",
                        "checked": false
                    },
                    "checked": false
                },
                "Season 2": {
                    "s2e1": {
                        "title": "1 | The Lawless City",
                        "checked": false
                    },
                    "s2e2": {
                        "title": "2 | The Haven",
                        "checked": false
                    },
                    "s2e3": {
                        "title": "3 | The Hour Of Awakening",
                        "checked": false
                    },
                    "s2e4": {
                        "title": "4 | Mask of Falsehood",
                        "checked": false
                    },
                    "s2e5": {
                        "title": "5 | He Who Pulls the Strings",
                        "checked": false
                    },
                    "s2e6": {
                        "title": "6 | John Smith",
                        "checked": false
                    },
                    "s2e7": {
                        "title": "7 | Something Precious",
                        "checked": false
                    },
                    "s2e8": {
                        "title": "8 | Tears of the Dragon",
                        "checked": false
                    },
                    "s2e9": {
                        "title": "9 | The Key",
                        "checked": false
                    },
                    "s2e10": {
                        "title": "10 | The Caged Bird",
                        "checked": false
                    },
                    "s2e11": {
                        "title": "11 | Determination",
                        "checked": false
                    },
                    "s2e12": {
                        "title": "12 | Highest",
                        "checked": false
                    },
                    "checked": false
                },
                "Kage-Jitsu!": {
                    "s101e1": {
                        "title": "1 | The Seven Shadows want their operation to succeed!",
                        "checked": false
                    },
                    "s101e2": {
                        "title": "2 | The Seven Shadows want to finish up an amazing war chronicle!",
                        "checked": false
                    },
                    "s101e3": {
                        "title": "3 | The Seven Shadows want to make delicious chocolate!",
                        "checked": false
                    },
                    "s101e4": {
                        "title": "4 | The Seven Shadows want to procure the legendary coffee!",
                        "checked": false
                    },
                    "s101e5": {
                        "title": "5 | The Seven Shadows want to create an Artifact!",
                        "checked": false
                    },
                    "s101e6": {
                        "title": "6 | The Seven Shadows want to recommend cute underwear!",
                        "checked": false
                    },
                    "s101e7": {
                        "title": "7 | The Seven Shadows want to select cute underwear!",
                        "checked": false
                    },
                    "s101e8": {
                        "title": "8 | The Seven Shadows want to bathe in the finest hot spa!",
                        "checked": false
                    },
                    "s101e9": {
                        "title": "9 | The Seven Shadows want to get along together!",
                        "checked": false
                    },
                    "s101e10": {
                        "title": "10 | The Seven Shadows want to gain awesome muscles!",
                        "checked": false
                    },
                    "s101e11": {
                        "title": "11 | The Seven Shadows want to understand what \"Bubble\" means!",
                        "checked": false
                    },
                    "s101e12": {
                        "title": "12 | The Seven Shadows want to create a new taste!",
                        "checked": false
                    },
                    "s101e13": {
                        "title": "13 | The Seven Shadows want to see friendliness being displayed!",
                        "checked": false
                    },
                    "s101e14": {
                        "title": "14 | The Seven Shadows want to receive words of praise!",
                        "checked": false
                    },
                    "s101e15": {
                        "title": "15 | The Seven Shadows want to enjoy pleasant music!",
                        "checked": false
                    },
                    "s101e16": {
                        "title": "16 | The Seven Shadows want to put on amazing underwear!",
                        "checked": false
                    },
                    "s101e17": {
                        "title": "17 | The Seven Shadows want to continue this operation!",
                        "checked": false
                    },
                    "checked": false
                },
                "Kage-Jitsu! 2nd": {
                    "s102e1": {
                        "title": "1 | The Seven Shadows want to improve their branding!",
                        "checked": false
                    },
                    "s102e2": {
                        "title": "2 | Shichikage wants to develop cute clothes!",
                        "checked": false
                    },
                    "s102e3": {
                        "title": "3 | The Seven Shadows want to create a trend!",
                        "checked": false
                    },
                    "s102e4": {
                        "title": "4 | The Seven Shadows want to make awesome banknotes!",
                        "checked": false
                    },
                    "s102e5": {
                        "title": "5 | The Seven Shadows want to be praised for their success!",
                        "checked": false
                    },
                    "s102e6": {
                        "title": "6 | The Seven Shadows want to hunt in the Lawless City!",
                        "checked": false
                    },
                    "s102e7": {
                        "title": "7 | The Seven Shadows want to follow the Lord they believe in!",
                        "checked": false
                    },
                    "s102e8": {
                        "title": "8 | The Seven Shadows want to blather on once in a while!",
                        "checked": false
                    },
                    "s102e9": {
                        "title": "9 | The Seven Shadows want to be seen as a bit smarter!",
                        "checked": false
                    },
                    "s102e10": {
                        "title": "10 | The Seven Shadows want to get more familiar with music!",
                        "checked": false
                    },
                    "s102e11": {
                        "title": "11 | The Seven Shadows want to show off their growth!",
                        "checked": false
                    },
                    "s102e12": {
                        "title": "12 | The Seven Shadows won't be shaken no matter what!",
                        "checked": false
                    },
                    "checked": false
                }
            },
            episodeFilters: {}
        }
    });

    React.useEffect(() => {
        sessionStorage.setItem('animeDropdownState', JSON.stringify(animeDropdownState));
    }, [animeDropdownState]);


    const [mogDropdownState, setMogDropdownState] = React.useState(() => {
        const savedState = sessionStorage.getItem('mogDropdownState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            if (parsedState.version === VERSIONS['mogDropdownState']) {
                return parsedState;
            }
        }
        return {
            mogMainChecked: false,
            filter: '',
            openParts: {},
            version: VERSIONS['mogDropdownState'],
            categoryFilters: {},
            sectionFilters: {},
            partsChecked: {
                "Seven Shadows Chronicles": {
                    "Part 1 | Rise of Garden": {
                        "1-1 | Shadow Garden, Mobilize!": {
                            "e1": {
                                "checked": false,
                                "title": "Prelude"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Garden Policy"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Shadow Garden Covert Op"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Possessed Search"
                            },
                            "e5": {
                                "checked": false,
                                "title": "After the Rescue"
                            },
                            "checked": false
                        },
                        "1-2 | Ancient Dragon of Alexandria": {
                            "e1": {
                                "checked": false,
                                "title": "The Lost City"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Abyss Woods"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Tale of Ruin"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Shadow's Sword"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Future Unlocked"
                            },
                            "checked": false
                        },
                        "1-3 | Have Mercy! Eta's Protocol": {
                            "e1": {
                                "checked": false,
                                "title": "Eta's Scheme"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Defense System"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Magic Gear"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Try, Try Again"
                            },
                            "e5": {
                                "checked": false,
                                "title": "The Gear's Value"
                            },
                            "checked": false
                        },
                        "1-4 | Behold! Tuna Chaos": {
                            "e1": {
                                "checked": false,
                                "title": "Day Off Together"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Going Fishing"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Tasty Tuna Sammy"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Victory Formula"
                            },
                            "e5": {
                                "checked": false,
                                "title": "A King is Born"
                            },
                            "checked": false
                        },
                        "1-5 | Here Comes Trouble": {
                            "e1": {
                                "checked": false,
                                "title": "News Beginnings"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Open the Door"
                            },
                            "e3": {
                                "checked": false,
                                "title": "N. Kafka is Born"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Mystery Paladin"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Point Blank"
                            },
                            "checked": false
                        },
                        "1-6 | Intense! Unstoppable Alpha": {
                            "e1": {
                                "checked": false,
                                "title": "Poking the Bear"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Re-Infiltration"
                            },
                            "e3": {
                                "checked": false,
                                "title": "BBQ Provocation"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Merciless Probe"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Grace Thy Blade"
                            },
                            "checked": false
                        },
                        "1-7 | Brutal! Delta's Night Hunt": {
                            "e1": {
                                "checked": false,
                                "title": "Mountaineering"
                            },
                            "e2": {
                                "checked": false,
                                "title": "As Cats and Dogs"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Begin the Hunt"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Brutal Diplomacy"
                            },
                            "e5": {
                                "checked": false,
                                "title": "My Fangs Rejoice"
                            },
                            "checked": false
                        },
                        "1-8 | She is Beauty, She is Grace!": {
                            "e1": {
                                "checked": false,
                                "title": "Inspired by Ire"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Presentation Row"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Shadow Power!"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Epsilon's Justice"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Pianist Shiron"
                            },
                            "checked": false
                        },
                        "1-9 | Watch Out, Gamma!": {
                            "e1": {
                                "checked": false,
                                "title": "Morning Shopping"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Luna's Past"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Luna: The Truth"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Gamma Capriccio"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Shadow World Foe"
                            },
                            "checked": false
                        },
                        "1-10 | Mitsugoshi, Ltd. is Open!": {
                            "e1": {
                                "checked": false,
                                "title": "Info Wars Begin"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Plot at A-Okay Co."
                            },
                            "e3": {
                                "checked": false,
                                "title": "Deception Op"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Mitsugoshi Credo"
                            },
                            "e5": {
                                "checked": false,
                                "title": "No Shadows Left"
                            },
                            "checked": false
                        },
                        "1-11 | Deal! Arranged Booking": {
                            "e1": {
                                "checked": false,
                                "title": "Beta Reminisces"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Harsh Happenings"
                            },
                            "e3": {
                                "checked": false,
                                "title": "2 Birds 1 Stone"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Sponsor's Intent"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Ebony Swirl"
                            },
                            "checked": false
                        },
                        "1-12 | Natsume & Shiron Hang Out!": {
                            "e1": {
                                "checked": false,
                                "title": "City-State Duo"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Fleeting Vacance"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Jugang Ruins"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Beta—Behind You!"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Great Collapse"
                            },
                            "checked": false
                        },
                        "1-13 | Visions... Zeta and the Prophet": {
                            "e1": {
                                "checked": false,
                                "title": "Spy Request"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Saintly Prayer"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Secret Cathedral"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Wonky Background"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Victoria—Prophet"
                            },
                            "checked": false
                        },
                        "1-14 | The Garden on the Eve of Battle!": {
                            "e1": {
                                "checked": false,
                                "title": "Can You Lift?"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Research & Hair"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Garden's Enemy"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Cherish Shadow"
                            },
                            "e5": {
                                "checked": false,
                                "title": "To the Prelude"
                            },
                            "checked": false
                        },
                        "1 Final | Final Battle! Templar Fanatics": {
                            "e1": {
                                "checked": false,
                                "title": "Battlefront: Part 1"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Battlefront: Part 2"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Battlefront: Part 3"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Reunion in Flame"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Prelude to a New Battle"
                            },
                            "checked": false
                        },
                        "checked": false
                    },
                    "Part 2 | Sturm of Velgalta": {
                        "2-1 | Operation: Rescue & Recover": {
                            "e1": {
                                "checked": false,
                                "title": "Zeta's Departure"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Lurk in Darkness, Hunt Down Shadows"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Possessed Heiress"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Nicoletta Marquez"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Opeartion: Rescue"
                            },
                            "checked": false
                        },
                        "2-2 | A Brilliant Mission!": {
                            "e1": {
                                "checked": false,
                                "title": "Slow and Slay"
                            },
                            "e2": {
                                "checked": false,
                                "title": "The Weakest Link"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Pitfall Experiments"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Prophetess' Doubt"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Destined Numbers"
                            },
                            "checked": false
                        },
                        "2-3 | Investigation! In Search of Oil": {
                            "e1": {
                                "checked": false,
                                "title": "Buried Black Gold"
                            },
                            "e2": {
                                "checked": false,
                                "title": "The Land of Madlid"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Nyle River Trouble"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Malak the Malevolent"
                            },
                            "e5": {
                                "checked": false,
                                "title": "The Perfect Base"
                            },
                            "checked": false
                        },
                        "2-4 | Possessed Cult Leader": {
                            "e1": {
                                "checked": false,
                                "title": "Keep Investigating"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Two \"Seven Blades\""
                            },
                            "e3": {
                                "checked": false,
                                "title": "Confronting Sergey"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Not Even a Scratch"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Glorious Escape"
                            },
                            "checked": false
                        },
                        "2-5 |  Cult Secrets Revealed!": {
                            "e1": {
                                "checked": false,
                                "title": "Possessed Lady Karen"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Two Ruthless Choices"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Cult Secrets Unveiled"
                            },
                            "e4": {
                                "checked": false,
                                "title": "To Know Thyself"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Loss and Rebirth"
                            },
                            "checked": false
                        },
                        "2-6 | The Garden Heads North": {
                            "e1": {
                                "checked": false,
                                "title": "Mysterious \"Tears\""
                            },
                            "e2": {
                                "checked": false,
                                "title": "Countering Regeneration"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Altered History"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Vengeance is Mine"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Journey to the North"
                            },
                            "checked": false
                        },
                        "2-7 | Blood Pact! Unlikely Pair": {
                            "e1": {
                                "checked": false,
                                "title": "Secret Villa Seizure"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Secret Fund in Laugus"
                            },
                            "e3": {
                                "checked": false,
                                "title": "RIP Mundane Man"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Authorized Savagery"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Without Loyalties"
                            },
                            "checked": false
                        },
                        "2-8 | Seven Blades Swordswoman": {
                            "e1": {
                                "checked": false,
                                "title": "Her Name is Annerose"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Naive Swordswoman"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Luna & Annerose"
                            },
                            "e4": {
                                "checked": false,
                                "title": "A Knight's Honor"
                            },
                            "e5": {
                                "checked": false,
                                "title": "What is Passed Down"
                            },
                            "checked": false
                        },
                        "2-9 | The Ones We Protect": {
                            "e1": {
                                "checked": false,
                                "title": "Fallout"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Painted Lies"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Reason to Fight"
                            },
                            "e4": {
                                "checked": false,
                                "title": "The Ones We Protect"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Embarkment"
                            },
                            "checked": false
                        },
                        "2-10 | Duel! Defeat Malak!": {
                            "e1": {
                                "checked": false,
                                "title": "Path of the Dragon"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Evolutionary Dead-End"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Muscles Are Stored"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Break Apart!"
                            },
                            "e5": {
                                "checked": false,
                                "title": "White Diamond"
                            },
                            "checked": false
                        },
                        "2-11 | Faith and Conviction": {
                            "e1": {
                                "checked": false,
                                "title": "People in the Stands"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Shadow Actress"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Trust's Companion"
                            },
                            "e4": {
                                "checked": false,
                                "title": "A Saint Gone Mad"
                            },
                            "e5": {
                                "checked": false,
                                "title": "False Oracles"
                            },
                            "checked": false
                        },
                        "2-12 | Evil Ambition's End": {
                            "e1": {
                                "checked": false,
                                "title": "The First Child"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Numbers Advantage"
                            },
                            "e3": {
                                "checked": false,
                                "title": "\"He\" is Here"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Dragon Awakes"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Summit of Strength"
                            },
                            "checked": false
                        },
                        "2-13 | Hero...... Lured by Illusions": {
                            "e1": {
                                "checked": false,
                                "title": "A New Journey"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Sergey's Hideout"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Artificial Dragons"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Ambition's End"
                            },
                            "e5": {
                                "checked": false,
                                "title": "A Mysterious Elf"
                            },
                            "checked": false
                        },
                        "checked": false
                    },
                    "Part 3 | Secret of Sacra": {
                        "3-1 | Shadow Garden Revamp": {
                            "e1": {
                                "checked": false,
                                "title": "A Bitter Retreat"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Reorganizing"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Girls Reshuffled"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Lambda's Favorite"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Take No One Lightly"
                            },
                            "checked": false
                        },
                        "3-2 | The Hero Revealed!": {
                            "e1": {
                                "checked": false,
                                "title": "Secret of the Heroes"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Church and Heroes"
                            },
                            "e3": {
                                "checked": false,
                                "title": "Truth Amidst Lies"
                            },
                            "e4": {
                                "checked": false,
                                "title": "The Lost Tribe"
                            },
                            "e5": {
                                "checked": false,
                                "title": "Olivier's Face"
                            },
                            "checked": false
                        },
                        "3-3 | Alexandria Rebellion": {
                            "e1": {
                                "checked": false,
                                "title": "The Situation Begins"
                            },
                            "e2": {
                                "checked": false,
                                "title": "I Won't Hurt You..."
                            },
                            "e3": {
                                "checked": false,
                                "title": "Override Experiment"
                            },
                            "e4": {
                                "checked": false,
                                "title": "Outcome of the Duel"
                            },
                            "e5": {
                                "checked": false,
                                "title": "End of Scenario"
                            },
                            "checked": false
                        },
                        "checked": false
                    },
                    "checked": false
                },
                "Event Stories": {
                    "Holiday Rhapsody": {
                        "e1": {
                            "checked": false,
                            "title": "Holiday Rhapsody Ep.1"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Holiday Rhapsody Ep.2"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Holiday Rhapsody Ep.3"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Holiday Rhapsody Ep.4"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Holiday Rhapsody Ep.5"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Holiday Rhapsody Ep.6"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Holiday Rhapsody Ep.7"
                        },
                        "checked": false
                    },
                    "Fantastic! The Great Ize-athelon!": {
                        "e1": {
                            "checked": false,
                            "title": "Fantastic! The Great Ize-athelon! Ep.1"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Fantastic! The Great Ize-athelon! Ep.2"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Fantastic! The Great Ize-athelon! Ep.3"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Fantastic! The Great Ize-athelon! Ep.4"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Fantastic! The Great Ize-athelon! Ep.5"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Fantastic! The Great Ize-athelon! Ep.6"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Fantastic! The Great Ize-athelon! Ep.7"
                        },
                        "checked": false
                    },
                    "Natural vs. Artificial: Chocolate Showdown!": {
                        "e1": {
                            "checked": false,
                            "title": "Natural vs. Artificial: Chocolate Showdown!"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Natural vs. Artificial: Chocolate Showdown!"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Natural vs. Artificial: Chocolate Showdown!"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Natural vs. Artificial: Chocolate Showdown!"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Natural vs. Artificial: Chocolate Showdown!"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Natural vs. Artificial: Chocolate Showdown!"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Natural vs. Artificial: Chocolate Showdown!"
                        },
                        "checked": false
                    },
                    "Rose of Garden": {
                        "e1": {
                            "checked": false,
                            "title": "Rose of Garden"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Rose of Garden"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Rose of Garden"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Rose of Garden"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Rose of Garden"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Rose of Garden"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Rose of Garden"
                        },
                        "checked": false
                    },
                    "HIGHEST DREAM": {
                        "e1": {
                            "checked": false,
                            "title": "HIGHEST DREAM"
                        },
                        "e2": {
                            "checked": false,
                            "title": "HIGHEST DREAM"
                        },
                        "e3": {
                            "checked": false,
                            "title": "HIGHEST DREAM"
                        },
                        "e4": {
                            "checked": false,
                            "title": "HIGHEST DREAM"
                        },
                        "e5": {
                            "checked": false,
                            "title": "HIGHEST DREAM"
                        },
                        "e6": {
                            "checked": false,
                            "title": "HIGHEST DREAM"
                        },
                        "e7": {
                            "checked": false,
                            "title": "HIGHEST DREAM"
                        },
                        "checked": false
                    },
                    "Clever & Lucky Bunny Girls!": {
                        "e1": {
                            "checked": false,
                            "title": "Clever & Lucky Bunny Girls!"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Clever & Lucky Bunny Girls!"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Clever & Lucky Bunny Girls!"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Clever & Lucky Bunny Girls!"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Clever & Lucky Bunny Girls!"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Clever & Lucky Bunny Girls!"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Clever & Lucky Bunny Girls!"
                        },
                        "checked": false
                    },
                    "Shadows Unite! Let's party!": {
                        "e1": {
                            "checked": false,
                            "title": "Shadows Unite! Let's party!"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Shadows Unite! Let's party!"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Shadows Unite! Let's party!"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Shadows Unite! Let's party!"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Shadows Unite! Let's party!"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Shadows Unite! Let's party!"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Shadows Unite! Let's party!"
                        },
                        "checked": false
                    },
                    "Truth Seekers": {
                        "e1": {
                            "checked": false,
                            "title": "Truth Seekers"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Truth Seekers"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Truth Seekers"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Truth Seekers"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Truth Seekers"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Truth Seekers"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Truth Seekers"
                        },
                        "checked": false
                    },
                    "Midsummer Triangle": {
                        "e1": {
                            "checked": false,
                            "title": "Midsummer Triangle"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Midsummer Triangle"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Midsummer Triangle"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Midsummer Triangle"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Midsummer Triangle"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Midsummer Triangle"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Midsummer Triangle"
                        },
                        "checked": false
                    },
                    "Dreamy Summer Sunset": {
                        "e1": {
                            "checked": false,
                            "title": "Dreamy Summer Sunset"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Dreamy Summer Sunset"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Dreamy Summer Sunset"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Dreamy Summer Sunset"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Dreamy Summer Sunset"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Dreamy Summer Sunset"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Dreamy Summer Sunset"
                        },
                        "checked": false
                    },
                    "Interlude": {
                        "e1": {
                            "checked": false,
                            "title": "Interlude"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Interlude"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Interlude"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Interlude"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Interlude"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Interlude"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Interlude"
                        },
                        "checked": false
                    },
                    "Let's Smile! Halloween Night!": {
                        "e1": {
                            "checked": false,
                            "title": "Let's Smile! Halloween Night!"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Let's Smile! Halloween Night!"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Let's Smile! Halloween Night!"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Let's Smile! Halloween Night!"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Let's Smile! Halloween Night!"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Let's Smile! Halloween Night!"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Let's Smile! Halloween Night!"
                        },
                        "checked": false
                    },
                    "Amnesia?! Noob Again!": {
                        "e1": {
                            "checked": false,
                            "title": "Amnesia?! Noob Again!"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Amnesia?! Noob Again!"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Amnesia?! Noob Again!"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Amnesia?! Noob Again!"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Amnesia?! Noob Again!"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Amnesia?! Noob Again!"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Amnesia?! Noob Again!"
                        },
                        "checked": false
                    },
                    "A Gift from Miss Santa!": {
                        "e1": {
                            "checked": false,
                            "title": "A Gift from Miss Santa!"
                        },
                        "e2": {
                            "checked": false,
                            "title": "A Gift from Miss Santa!"
                        },
                        "e3": {
                            "checked": false,
                            "title": "A Gift from Miss Santa!"
                        },
                        "e4": {
                            "checked": false,
                            "title": "A Gift from Miss Santa!"
                        },
                        "e5": {
                            "checked": false,
                            "title": "A Gift from Miss Santa!"
                        },
                        "e6": {
                            "checked": false,
                            "title": "A Gift from Miss Santa!"
                        },
                        "e7": {
                            "checked": false,
                            "title": "A Gift from Miss Santa!"
                        },
                        "checked": false
                    },
                    "Run! The Great Ize-athlon 2.0!": {
                        "e1": {
                            "checked": false,
                            "title": "Run! The Great Ize-athlon 2.0!"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Run! The Great Ize-athlon 2.0!"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Run! The Great Ize-athlon 2.0!"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Run! The Great Ize-athlon 2.0!"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Run! The Great Ize-athlon 2.0!"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Run! The Great Ize-athlon 2.0!"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Run! The Great Ize-athlon 2.0!"
                        },
                        "checked": false
                    },
                    "Masquerade": {
                        "e1": {
                            "checked": false,
                            "title": "Masquerade"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Masquerade"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Masquerade"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Masquerade"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Masquerade"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Masquerade"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Masquerade"
                        },
                        "checked": false
                    },
                    "Be Mine! Sweet Valentine": {
                        "e1": {
                            "checked": false,
                            "title": "Be Mine! Sweet Valentine"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Be Mine! Sweet Valentine"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Be Mine! Sweet Valentine"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Be Mine! Sweet Valentine"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Be Mine! Sweet Valentine"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Be Mine! Sweet Valentine"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Be Mine! Sweet Valentine"
                        },
                        "checked": false
                    },
                    "Trash-Game Hunter Meets Shadow": {
                        "e1": {
                            "checked": false,
                            "title": "Trash-Game Hunter Meets Shadow"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Trash-Game Hunter Meets Shadow"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Trash-Game Hunter Meets Shadow"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Trash-Game Hunter Meets Shadow"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Trash-Game Hunter Meets Shadow"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Trash-Game Hunter Meets Shadow"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Trash-Game Hunter Meets Shadow"
                        },
                        "checked": false
                    },
                    "HIGHEST DREAM II": {
                        "e1": {
                            "checked": false,
                            "title": "HIGHEST DREAM II"
                        },
                        "e2": {
                            "checked": false,
                            "title": "HIGHEST DREAM II"
                        },
                        "e3": {
                            "checked": false,
                            "title": "HIGHEST DREAM II"
                        },
                        "e4": {
                            "checked": false,
                            "title": "HIGHEST DREAM II"
                        },
                        "e5": {
                            "checked": false,
                            "title": "HIGHEST DREAM II"
                        },
                        "e6": {
                            "checked": false,
                            "title": "HIGHEST DREAM II"
                        },
                        "e7": {
                            "checked": false,
                            "title": "HIGHEST DREAM II"
                        },
                        "checked": false
                    },
                    "The Producer in Shadow!": {
                        "e1": {
                            "checked": false,
                            "title": "The Producer in Shadow!"
                        },
                        "e2": {
                            "checked": false,
                            "title": "The Producer in Shadow!"
                        },
                        "e3": {
                            "checked": false,
                            "title": "The Producer in Shadow!"
                        },
                        "e4": {
                            "checked": false,
                            "title": "The Producer in Shadow!"
                        },
                        "e5": {
                            "checked": false,
                            "title": "The Producer in Shadow!"
                        },
                        "e6": {
                            "checked": false,
                            "title": "The Producer in Shadow!"
                        },
                        "e7": {
                            "checked": false,
                            "title": "The Producer in Shadow!"
                        },
                        "checked": false
                    },
                    "Stranded! Summer in the Wild?!": {
                        "e1": {
                            "checked": false,
                            "title": "Stranded! Summer in the Wild?!"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Stranded! Summer in the Wild?!"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Stranded! Summer in the Wild?!"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Stranded! Summer in the Wild?!"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Stranded! Summer in the Wild?!"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Stranded! Summer in the Wild?!"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Stranded! Summer in the Wild?!"
                        },
                        "checked": false
                    },
                    "checked": false
                },
                "Apocrypha": {
                    "1 | Requiem for Scattered Shadows": {
                        "1 | Millennium Past": {
                            "e1": {
                                "checked": false,
                                "title": "Episode 1"
                            },
                            "e2": {
                                "checked": false,
                                "title": "Episode 2"
                            },
                            "e3-1": {
                                "checked": false,
                                "title": "Episode 3-1"
                            },
                            "e3-2": {
                                "checked": false,
                                "title": "Episode 3-2"
                            },
                            "e3-3": {
                                "checked": false,
                                "title": "Episode 3-3"
                            },
                            "e4-1": {
                                "checked": false,
                                "title": "Episode 4-1"
                            },
                            "e4-2": {
                                "checked": false,
                                "title": "Episode 4-2"
                            },
                            "e5-1": {
                                "checked": false,
                                "title": "Episode 5-1"
                            },
                            "e5-2": {
                                "checked": false,
                                "title": "Episode 5-2"
                            },
                            "e5-3": {
                                "checked": false,
                                "title": "Episode 5-3"
                            },
                            "e6": {
                                "checked": false,
                                "title": "Episode 6"
                            },
                            "e7": {
                                "checked": false,
                                "title": "Episode 7"
                            },
                            "e8-1": {
                                "checked": false,
                                "title": "Episode 8-1"
                            },
                            "e8-2": {
                                "checked": false,
                                "title": "Episode 8-2"
                            },
                        },
                        "checked": false
                    },
                    "checked": false
                }
            }
        }
    });

    React.useEffect(() => {
        sessionStorage.setItem('mogDropdownState', JSON.stringify(mogDropdownState));
    }, [mogDropdownState]);




    const [lnDropdownState, setLNDropdownState] = React.useState(() => {
        const savedState = sessionStorage.getItem('lnDropdownState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            if (parsedState.version === VERSIONS['lnDropdownState']) {
                return parsedState;
            }
        }
        return {
            lnMainChecked: false,
            lnFilter: '',
            openVolumes: {},
            version: VERSIONS['lnDropdownState'],
            volumesChecked: {
                "Volume 1": {
                    "checked": false,
                    "v1c1": {
                        "checked": false,
                        "title": "P | Preparing the Perfect Stage!"
                    },
                    "v1c2": {
                        "checked": false,
                        "title": "1 | Starting the Shadowbroker Tutorial!"
                    },
                    "v1c3": {
                        "checked": false,
                        "title": "2 | Assuming the Role of a Side Character at School!"
                    },
                    "v1c4": {
                        "checked": false,
                        "title": "3 | My Official Beginning as a Mastermind in Action!"
                    },
                    "v1c5": {
                        "checked": false,
                        "title": "4 | The Two Sides of the Shadow Garden?!"
                    },
                    "v1c6": {
                        "checked": false,
                        "title": "5 | Mastering the Peaceful Life of a Nobody!"
                    },
                    "v1c7": {
                        "checked": false,
                        "title": "6 | That Scene Where Terrorists Take Over the School"
                    },
                    "v1c8": {
                        "checked": false,
                        "title": "F | My Idea of the Ultimate Shadow Commander!"
                    },
                    "v1c9": {
                        "checked": false,
                        "title": "A | The Chronicles of Master Shadow Complete Version: Volume 1"
                    }
                },
                "Volume 2": {
                    "checked": false,
                    "v2c1": {
                        "checked": false,
                        "title": "P | To Lindwurm, the Sacred Land!"
                    },
                    "v2c2": {
                        "checked": false,
                        "title": "1 | Fun Times at the Goddess's Trial!"
                    },
                    "v2c3": {
                        "checked": false,
                        "title": "2 | Investigating the Sanctuary!"
                    },
                    "v2c4": {
                        "checked": false,
                        "title": "3 | When Things Get Boring, It's Time for Explosives!"
                    },
                    "v2c5": {
                        "checked": false,
                        "title": "4 | This Situation Calls for a \"Who Is That Guy?!\""
                    },
                    "v2c6": {
                        "checked": false,
                        "title": "5 | A Battle to Attract Only MVPs!"
                    },
                    "v2c7": {
                        "checked": false,
                        "title": "6 | A Mastermind Always Plays Piano Under Moonlight!"
                    },
                    "v2c8": {
                        "checked": false,
                        "title": "7 | Showing Off a Smidgen of My Strength!"
                    },
                    "v2c9": {
                        "checked": false,
                        "title": "8 | Lay Your Eyes on My True Powers!"
                    },
                    "v2c10": {
                        "checked": false,
                        "title": "F | Just Who Is This Mysterious Badass?!"
                    },
                    "v2c11": {
                        "checked": false,
                        "title": "A | The Chronicles of Master Shadow Complete Version: Volume II"
                    }
                },
                "Volume 3": {
                    "checked": false,
                    "v3c1": {
                        "checked": false,
                        "title": "P | Heading to the Lawless City over Fall Break!"
                    },
                    "v3c2": {
                        "checked": false,
                        "title": "1 | Lawless City Bandit Hunting!"
                    },
                    "v3c3": {
                        "checked": false,
                        "title": "2 | Storming the Crimson Tower!"
                    },
                    "v3c4": {
                        "checked": false,
                        "title": "3 | Pursuing the Blood Queen!"
                    },
                    "v3c5": {
                        "checked": false,
                        "title": "X | Field Notes on a Little Brother—by Young Claire!"
                    },
                    "v3c6": {
                        "checked": false,
                        "title": "4 | I'll Destroy It All and Start from Scratch!"
                    },
                    "v3c7": {
                        "checked": false,
                        "title": "5 | Printing Fake Money as Mitsugoshi Throws Down with the Major Corporate Alliance!"
                    },
                    "v3c8": {
                        "checked": false,
                        "title": "6 | Circulating Counterfeit Cash!"
                    },
                    "v3c9": {
                        "checked": false,
                        "title": "E | The One to Destroy It All and Start from Scratch—with Fake Bills!"
                    },
                    "v3c10": {
                        "checked": false,
                        "title": "A | The Chronicles of Master Shadow Complete Version: Volume III"
                    }
                },
                "Volume 4": {
                    "checked": false,
                    "v4c1": {
                        "checked": false,
                        "title": "P | It's Time for a War in the Oriana Kingdom!"
                    },
                    "v4c2": {
                        "checked": false,
                        "title": "1 | Putting the Kibosh on Rose Oriana's Wedding!"
                    },
                    "v4c3": {
                        "checked": false,
                        "title": "2 | Begin Operation: Obstruction!"
                    },
                    "v4c4": {
                        "checked": false,
                        "title": "3 | Crashing the Ceremony!"
                    },
                    "v4c5": {
                        "checked": false,
                        "title": "X | Rise of the Fancy Hoodlum Slayer!"
                    },
                    "v4c6": {
                        "checked": false,
                        "title": "4 | Lurking in the Darkness in Fantastical Japan!"
                    },
                    "v4c7": {
                        "checked": false,
                        "title": "5 | Sneaking Around in Japan, Just Like the Old Days!!"
                    },
                    "v4c8": {
                        "checked": false,
                        "title": "6 | Something Smells Fishy... But an Eminence in Shadow Always Cracks the Case!"
                    },
                    "v4c9": {
                        "checked": false,
                        "title": "E | Behold, a Full-Fledged Eminence in Shadow!"
                    },
                    "v4c10": {
                        "checked": false,
                        "title": "A | The Chronicles of Master Shadow Complete Edition: Volume IV"
                    }
                },
                "Volume 5": {
                    "checked": false,
                    "v5c1": {
                        "checked": false,
                        "title": "P | The Case of the Missing Students and the Not-So-Peaceful Academy!"
                    },
                    "v5c2": {
                        "checked": false,
                        "title": "1 | Claire's Back, and Her Symptoms Are Worse Than Ever!"
                    },
                    "v5c3": {
                        "checked": false,
                        "title": "2 | Morning Comes, and There's an Impaler on the Loose!!"
                    },
                    "v5c4": {
                        "checked": false,
                        "title": "3 | The Case Is Closed, So It's Time for a Flashback!"
                    },
                    "v5c5": {
                        "checked": false,
                        "title": "4 | Peace in Our Time!"
                    },
                    "v5c6": {
                        "checked": false,
                        "title": "5 | Terrorists Attack the School...Again!!"
                    },
                    "v5c7": {
                        "checked": false,
                        "title": "E | I'd Let the Whole World Burn, If That's What It Took!"
                    },
                    "v5c8": {
                        "checked": false,
                        "title": "A | Eta's Research Journal"
                    }
                },
                "Volume 6": {
                    "checked": false,
                    "v6c1": {
                        "checked": false,
                        "title": "P | The Clandestine Ruler of the Midgar Kingdom...I'm so Jealous!"
                    },
                    "v6c2": {
                        "checked": false,
                        "title": "1 | Enter \"Jack The Rippler\"!"
                    },
                    "v6c3": {
                        "checked": false,
                        "title": "2 | Surprise Assassins at the Sleepover!"
                    },
                    "v6c4": {
                        "checked": false,
                        "title": "3 | Let's Decipher the Crime Announcement!"
                    },
                    "v6c5": {
                        "checked": false,
                        "title": "4 | And then a Monster becomes a Legend!"
                    },
                    "v6c6": {
                        "checked": false,
                        "title": "I | The Monster's Successor!"
                    },
                    "v6c7": {
                        "checked": false,
                        "title": "X | Oath of the Plains"
                    },
                    "v6c8": {
                        "checked": false,
                        "title": "5 | Welcome to Shadow Garden!"
                    },
                    "v6c9": {
                        "checked": false,
                        "title": "E | The Scent of That Day"
                    },
                    "v6c10": {
                        "checked": false,
                        "title": "A | Alpha's Organizational Management Diary."
                    }
                }
            },
            chapterFilters: {}
        };
    });

    React.useEffect(() => {
        sessionStorage.setItem('lnDropdownState', JSON.stringify(lnDropdownState));
    }, [lnDropdownState]);

    const [wnDropdownState, setWNDropdownState] = React.useState(() => {
        const savedState = sessionStorage.getItem('wnDropdownState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            if (parsedState.version === VERSIONS['wnDropdownState']) {
                return parsedState;
            }
        }
        return {
            wnMainChecked: false,
            wnFilter: '',
            openVolumes: {},
            version: VERSIONS['wnDropdownState'],
            volumesChecked: {
                "Volume 1": {
                    "checked": false,
                    "v1c1": {
                        "checked": false,
                        "title": "Remaining Within the Limits of Being Human Means You Would Be Vaporized By a Nuke"
                    },
                    "v1c2": {
                        "checked": false,
                        "title": "Bandits Are Basically Just Walking Bonus Stages"
                    },
                    "v1c3": {
                        "checked": false,
                        "title": "Sudden Emergence of the Order of Diabolos?!"
                    },
                    "v1c4": {
                        "checked": false,
                        "title": "If Only He Had Hair......"
                    },
                    "v1c5": {
                        "checked": false,
                        "title": "Real Member of the Order, and Real Person of the Curse"
                    },
                    "v1c6": {
                        "checked": false,
                        "title": "Your Drug Test Result is 'Positive'"
                    },
                    "v1c7": {
                        "checked": false,
                        "title": "A Simple Fighting Lesson, Power in Shadows Style (With Only This Much, You Are Also a Power in the Shadows?!)"
                    },
                    "v1c8": {
                        "checked": false,
                        "title": "Powers in the Shadows are Lonely"
                    },
                    "v1c9": {
                        "checked": false,
                        "title": "The Frolicking of Those Who Know Nothing of the World of Shadows"
                    },
                    "v1c10": {
                        "checked": false,
                        "title": "Apparently He Discovered Her Secret And Is Blackmailing Her......"
                    },
                    "v1c11": {
                        "checked": false,
                        "title": "Conflict is Entertaining When You Are Uninvolved"
                    },
                    "v1c12": {
                        "checked": false,
                        "title": "Hi, My Name Is Pochi! Nice to Meet You, Everyone!"
                    },
                    "v1c13": {
                        "checked": false,
                        "title": "Incidentally, I'm In the Zenon Faction"
                    },
                    "v1c14": {
                        "checked": false,
                        "title": "It Would Take Serious Effort To Make Me Truly Flip Out"
                    },
                    "v1c15": {
                        "checked": false,
                        "title": "Oh Wow, What a Wonderful Idea (In a Monotone Voice)"
                    },
                    "v1c16": {
                        "checked": false,
                        "title": "Currently Writing the Complete Version of 'The War Chronicles of Shadow-sama'"
                    },
                    "v1c17": {
                        "checked": false,
                        "title": "Fragment of Diabolos! Squish!"
                    },
                    "v1c18": {
                        "checked": false,
                        "title": "Keep Watching from Below the Stage"
                    },
                    "v1c19": {
                        "checked": false,
                        "title": "Far Off Memory"
                    },
                    "v1c20": {
                        "checked": false,
                        "title": "\"I AM......\""
                    },
                    "v1c21": {
                        "checked": false,
                        "title": "[Urgent Question] The Way to Dispose of a Dead Body on Campus [Anon]"
                    }
                },
                "Volume 2": {
                    "checked": false,
                    "v2c22": {
                        "checked": false,
                        "title": "That Which Anyone Would Overlook"
                    },
                    "v2c23": {
                        "checked": false,
                        "title": "Otherworld General Trading Company Mitsugoshi Co."
                    },
                    "v2c24": {
                        "checked": false,
                        "title": "7 Girls and 1 Guy. Obviously Someone's Going to Be Left Out"
                    },
                    "v2c25": {
                        "checked": false,
                        "title": "Respite in an Alleyway"
                    },
                    "v2c26": {
                        "checked": false,
                        "title": "Ugh, My Head..."
                    },
                    "v2c27": {
                        "checked": false,
                        "title": "High Heels & One Piece & White Legs"
                    },
                    "v2c28": {
                        "checked": false,
                        "title": "Otherworld-Style Valentine's Day"
                    },
                    "v2c29": {
                        "checked": false,
                        "title": "A Mob Can Tell"
                    },
                    "v2c30": {
                        "checked": false,
                        "title": "Bastard"
                    },
                    "v2c31": {
                        "checked": false,
                        "title": "Can You Keep Up With Me?"
                    },
                    "v2c32": {
                        "checked": false,
                        "title": "The Undying Magic Swordsman"
                    },
                    "v2c33": {
                        "checked": false,
                        "title": "What Every Boy in the Universe Dreams Of"
                    },
                    "v2c34": {
                        "checked": false,
                        "title": "There Are Times When A Mob Has to Act"
                    },
                    "v2c35": {
                        "checked": false,
                        "title": "The Romance of Looking Down From a Rooftop"
                    },
                    "v2c36": {
                        "checked": false,
                        "title": "Relieved That It's More Decent Than Expected"
                    },
                    "v2c37": {
                        "checked": false,
                        "title": "The Course of an Advanced Psychological Battle"
                    },
                    "v2c38": {
                        "checked": false,
                        "title": "Lending Just a Tiny Bit of Help"
                    },
                    "v2c39": {
                        "checked": false,
                        "title": "Wanting to Live for Just One More Day"
                    },
                    "v2c40": {
                        "checked": false,
                        "title": "That Which is Truly Important"
                    },
                    "v2c41": {
                        "checked": false,
                        "title": "Arrival of the Summer Rain"
                    }
                },
                "Volume 3": {
                    "checked": false,
                    "v3c42": {
                        "checked": false,
                        "title": "Proposing the Leech-style Mob Life"
                    },
                    "v3c43": {
                        "checked": false,
                        "title": "That Thing That's As Enigmatic as Wooden Swords At Tourist Spots"
                    },
                    "v3c44": {
                        "checked": false,
                        "title": "Holy Sword Excalibur"
                    },
                    "v3c45": {
                        "checked": false,
                        "title": "Plan A Has Failed, Shift to Plan B"
                    },
                    "v3c46": {
                        "checked": false,
                        "title": "A Woman Who Seems Shady and A Woman Who Seems Cheap and A Woman Who Seems Blissful"
                    },
                    "v3c47": {
                        "checked": false,
                        "title": "The Theory That When a Bomb Goes Off It Can Erase Everything Else That Had Happened"
                    },
                    "v3c48": {
                        "checked": false,
                        "title": "Please Believe That There Really Are Times When Those Who Have No Intention of Looking Still End up Seeing"
                    },
                    "v3c49": {
                        "checked": false,
                        "title": "Those That Don't Understand Are Boring"
                    },
                    "v3c50": {
                        "checked": false,
                        "title": "The Heroine Who Directed and Acted in Her Own Production"
                    },
                    "v3c51": {
                        "checked": false,
                        "title": "The Birth of 'Precise'"
                    },
                    "v3c52": {
                        "checked": false,
                        "title": "The Truth Within Memories"
                    },
                    "v3c53": {
                        "checked": false,
                        "title": "The Escape Plan of a Fragile, Dainty Girl"
                    },
                    "v3c54": {
                        "checked": false,
                        "title": "Gratz for Taking First Place in the 'Humans Who Can't Use Magic' Tournament"
                    },
                    "v3c55": {
                        "checked": false,
                        "title": "Just Look at What You Want to Look At Then"
                    },
                    "v3c56": {
                        "checked": false,
                        "title": "Genes, Age, or Stress?"
                    },
                    "v3c57": {
                        "checked": false,
                        "title": "Everything Is Within His Expectations"
                    },
                    "v3c58": {
                        "checked": false,
                        "title": "That Which Can Only Be Drawn By the Chosen"
                    },
                    "v3c59": {
                        "checked": false,
                        "title": "Inescapable Attack"
                    },
                    "v3c60": {
                        "checked": false,
                        "title": "Puzzle Piece"
                    }
                },
                "Volume 4": {
                    "checked": false,
                    "v4c61": {
                        "checked": false,
                        "title": "The Girl and the Sound of Rain"
                    },
                    "v4c62": {
                        "checked": false,
                        "title": "I Am a Man Who Rides the Waves"
                    },
                    "v4c63": {
                        "checked": false,
                        "title": "The Mysterious Young Swordsman Jimina"
                    },
                    "v4c64": {
                        "checked": false,
                        "title": "Spartan Hazing From a Festival Regular!"
                    },
                    "v4c65": {
                        "checked": false,
                        "title": "No Need to Rush, Youngster, For Life is Long"
                    },
                    "v4c66": {
                        "checked": false,
                        "title": "The Harmless Poyoyon and Mole"
                    },
                    "v4c67": {
                        "checked": false,
                        "title": "Sure-Win Golden Dragon's Sure-Win Formula"
                    },
                    "v4c68": {
                        "checked": false,
                        "title": "The Match Where The Stronger One Gets All the Attention"
                    },
                    "v4c69": {
                        "checked": false,
                        "title": "Evil ** Kill ** Dragon!!"
                    },
                    "v4c70": {
                        "checked": false,
                        "title": "In Expectation of This Happening"
                    },
                    "v4c71": {
                        "checked": false,
                        "title": "Beta's Job"
                    },
                    "v4c72": {
                        "checked": false,
                        "title": "A Power in the Shadows Playing Under the Moonlight"
                    },
                    "v4c73": {
                        "checked": false,
                        "title": "The Girl Who Dreams a Dream and the Boy Who Walks a Dream"
                    },
                    "v4c74": {
                        "checked": false,
                        "title": "The Single Ray of Light Shining Into the Darkness"
                    },
                    "v4c75": {
                        "checked": false,
                        "title": "The Girls' Paths, and His Decision"
                    },
                    "v4c76": {
                        "checked": false,
                        "title": "The Basics of Human Relationships Is Abandonment Play"
                    },
                    "v4c77": {
                        "checked": false,
                        "title": "And Who Are You?"
                    },
                    "v4c78": {
                        "checked": false,
                        "title": "What Always Ends up Happening from Stopping at the Last Instant"
                    },
                    "v4c79": {
                        "checked": false,
                        "title": "I've Won! (Assured)"
                    },
                    "v4c80": {
                        "checked": false,
                        "title": "Exactly Who Are You?"
                    },
                    "v4c81": {
                        "checked": false,
                        "title": "Breakfast at the Special Seating NAO"
                    },
                    "v4c82": {
                        "checked": false,
                        "title": "The Smelly Man is Part of the Plan"
                    },
                    "v4c83": {
                        "checked": false,
                        "title": "From A Far Away Height..."
                    },
                    "v4c84": {
                        "checked": false,
                        "title": "Final Duty"
                    },
                    "v4c85": {
                        "checked": false,
                        "title": "Mysterious Masked Swordsman Slayer, At Your Service!!"
                    },
                    "v4c86": {
                        "checked": false,
                        "title": "Summit of the Path of the Sword"
                    },
                    "v4c87": {
                        "checked": false,
                        "title": "Your Real Enemy"
                    },
                    "v4c88": {
                        "checked": false,
                        "title": "Ashes of a Dream"
                    }
                },
                "Volume 5": {
                    "checked": false,
                    "v5c89": {
                        "checked": false,
                        "title": "Being Gatekeeper A is Great!"
                    },
                    "v5c90": {
                        "checked": false,
                        "title": "It's Already Completely Healed"
                    },
                    "v5c91": {
                        "checked": false,
                        "title": "What Belongs to Bandits Also Belongs to Me"
                    },
                    "v5c92": {
                        "checked": false,
                        "title": "Two Loser (Dogs) and a Watchdog"
                    },
                    "v5c93": {
                        "checked": false,
                        "title": "Shockingly Huge Bargain Sale, Only in Outlaw City!!"
                    },
                    "v5c94": {
                        "checked": false,
                        "title": "Stop Throbbing..."
                    },
                    "v5c95": {
                        "checked": false,
                        "title": "From Mob Escape to Mob Revenge"
                    },
                    "v5c96": {
                        "checked": false,
                        "title": "For the Sake of This Day, I Have Prepared This... Hole!!"
                    },
                    "v5c97": {
                        "checked": false,
                        "title": "Rampage... The Streets are... Blood... Run..."
                    },
                    "v5c98": {
                        "checked": false,
                        "title": "Tough Lady"
                    },
                    "v5c99": {
                        "checked": false,
                        "title": "The Three Currents"
                    },
                    "v5c100": {
                        "checked": false,
                        "title": "War of Monsters"
                    },
                    "v5c101": {
                        "checked": false,
                        "title": "The Rumored Shadow Garden"
                    },
                    "v5c102": {
                        "checked": false,
                        "title": "Two Lasses"
                    },
                    "v5c103": {
                        "checked": false,
                        "title": "What are you doi-?!"
                    },
                    "v5c104": {
                        "checked": false,
                        "title": "Don't You Dare Steal My Role, Girl"
                    },
                    "v5c105": {
                        "checked": false,
                        "title": "The Man Who Was Too Early"
                    },
                    "v5c106": {
                        "checked": false,
                        "title": "What Do YOU Understand About This Pain?! (Blood Pressure)"
                    },
                    "v5c107": {
                        "checked": false,
                        "title": "Her Duty"
                    },
                    "v5c108": {
                        "checked": false,
                        "title": "Overwhelmingly Terrible at Explanations"
                    },
                    "v5c109": {
                        "checked": false,
                        "title": "The Queen of Blood"
                    },
                    "v5c110": {
                        "checked": false,
                        "title": "Her Master"
                    },
                    "v5c111": {
                        "checked": false,
                        "title": "Mission Complete"
                    },
                    "v5c112": {
                        "checked": false,
                        "title": "There's No Helping It When the Left Hand Begins to Ache"
                    }
                },
                "Volume 6": {
                    "checked": false,
                    "v6c113": {
                        "checked": false,
                        "title": "Kyaaa! Not so rough!"
                    },
                    "v6c114": {
                        "checked": false,
                        "title": "Super Elite Agent, Whose Name Is"
                    },
                    "v6c115": {
                        "checked": false,
                        "title": "The World Is Whispering To Me"
                    },
                    "v6c116": {
                        "checked": false,
                        "title": "Do You Really Think So?"
                    },
                    "v6c117": {
                        "checked": false,
                        "title": "The smell of wood."
                    },
                    "v6c118": {
                        "checked": false,
                        "title": "Golden retriever"
                    },
                    "v6c119": {
                        "checked": false,
                        "title": "Ol, Its Ol!!"
                    },
                    "v6c120": {
                        "checked": false,
                        "title": "Blind Big Wolf"
                    },
                    "v6c121": {
                        "checked": false,
                        "title": "Great Trading Alliance"
                    },
                    "v6c122": {
                        "checked": false,
                        "title": "The Malaise Of Mitsugoshi"
                    },
                    "v6c123": {
                        "checked": false,
                        "title": "Sample"
                    },
                    "v6c124": {
                        "checked": false,
                        "title": "The Power of a Super Elite Agent"
                    },
                    "v6c125": {
                        "checked": false,
                        "title": "The First To Notice The Change"
                    },
                    "v6c126": {
                        "checked": false,
                        "title": "Don't Get In The Way"
                    },
                    "v6c127": {
                        "checked": false,
                        "title": "Black Jaguar"
                    },
                    "v6c128": {
                        "checked": false,
                        "title": "The Supreme Code"
                    },
                    "v6c129": {
                        "checked": false,
                        "title": "It's All That Fool's Fault"
                    },
                    "v6c130": {
                        "checked": false,
                        "title": "Goodbye, John Smith"
                    },
                    "v6c131": {
                        "checked": false,
                        "title": "His Back"
                    },
                    "v6c132": {
                        "checked": false,
                        "title": "Finally, This Day Has Come"
                    },
                    "v6c133": {
                        "checked": false,
                        "title": "Yukime and Gettan"
                    },
                    "v6c134": {
                        "checked": false,
                        "title": "Rumor of the counterfeit bills"
                    },
                    "v6c135": {
                        "checked": false,
                        "title": "John Smith was their esteemed master."
                    },
                    "v6c136": {
                        "checked": false,
                        "title": "You made me angry... . ."
                    },
                    "v6c137": {
                        "checked": false,
                        "title": "The man who is burning with revenge"
                    },
                    "v6c138": {
                        "checked": false,
                        "title": "Those who lost their eyes"
                    },
                    "v6c139": {
                        "checked": false,
                        "title": "Even if we talk, it will be a waste of time"
                    },
                    "v6c140": {
                        "checked": false,
                        "title": "Gettan......"
                    },
                    "v6c141": {
                        "checked": false,
                        "title": "Everything is his"
                    },
                    "v6c142": {
                        "checked": false,
                        "title": "The bloody Demon King who betrayed his dream"
                    }
                },
                "Volume 7": {
                    "checked": false,
                    "v7c143": {
                        "checked": false,
                        "title": "That Ordinary Boy is Revealed to be—!"
                    },
                    "v7c145": {
                        "checked": false,
                        "title": "His name is Kageno Minoru [Cid's Past Life]"
                    },
                    "v7c146": {
                        "checked": false,
                        "title": "Mystery Man"
                    },
                    "v7c147": {
                        "checked": false,
                        "title": "Not Enough Calories At All"
                    },
                    "v7c148": {
                        "checked": false,
                        "title": "When it's All Over"
                    },
                    "v7c149": {
                        "checked": false,
                        "title": "Code 0"
                    },
                    "v7c150": {
                        "checked": false,
                        "title": "Who Do You Think You're Dealing With?"
                    },
                    "v7c151": {
                        "checked": false,
                        "title": "The Princess's Mob Friend"
                    },
                    "v7c152": {
                        "checked": false,
                        "title": "Evil Encroaching"
                    },
                    "v7c153": {
                        "checked": false,
                        "title": "Looks like We're Done"
                    },
                    "v7c154": {
                        "checked": false,
                        "title": "Soul Searching"
                    },
                    "v7c155": {
                        "checked": false,
                        "title": "Sorry, Ya Lost Me."
                    },
                    "v7c156": {
                        "checked": false,
                        "title": "Action Spy"
                    },
                    "v7c157": {
                        "checked": false,
                        "title": "Cut Down Anything!"
                    },
                    "v7c158": {
                        "checked": false,
                        "title": "Beacon of Revolt"
                    },
                    "v7c159": {
                        "checked": false,
                        "title": "I Can Hear Him But From Where..."
                    },
                    "v7c160": {
                        "checked": false,
                        "title": "My Time to Shine?"
                    },
                    "v7c161": {
                        "checked": false,
                        "title": "The Ringleader is Here!?"
                    },
                    "v7c162": {
                        "checked": false,
                        "title": "Sigh, really didn't want to make a scene, man~"
                    },
                    "v7c163": {
                        "checked": false,
                        "title": "The Power of Diabolos"
                    },
                    "v7c164": {
                        "checked": false,
                        "title": "Where is He?"
                    },
                    "v7c165": {
                        "checked": false,
                        "title": "Demon Lord Unleashed"
                    },
                    "v7c166": {
                        "checked": false,
                        "title": "Mordred"
                    },
                    "v7c167": {
                        "checked": false,
                        "title": "What Were Ideal Powers in Shadows in My Mind?"
                    }
                },
                "Volume 8": {
                    "checked": false,
                    "v8c168": {
                        "checked": false,
                        "title": "In This Troop You Will Earn A Lot of Money"
                    },
                    "v8c169": {
                        "checked": false,
                        "title": "The Dream Of Two Men"
                    },
                    "v8c170": {
                        "checked": false,
                        "title": "Mob Character's Field Trip"
                    },
                    "v8c171": {
                        "checked": false,
                        "title": "Three Ojisans"
                    },
                    "v8c172": {
                        "checked": false,
                        "title": "Vow of Black Rose"
                    },
                    "v8c173": {
                        "checked": false,
                        "title": "Don't Upstage Me"
                    },
                    "v8c174": {
                        "checked": false,
                        "title": "Do Not Kick the Platform"
                    },
                    "v8c175": {
                        "checked": false,
                        "title": "Evil God・Instant Kill・Sword"
                    },
                    "v8c176": {
                        "checked": false,
                        "title": "Died On the Spot"
                    },
                    "v8c177": {
                        "checked": false,
                        "title": "So-called Master"
                    },
                    "v8c178": {
                        "checked": false,
                        "title": "The End of Mob Character"
                    },
                    "v8c179": {
                        "checked": false,
                        "title": "A Small Part of the Abyss-like Plan"
                    },
                    "v8c180": {
                        "checked": false,
                        "title": "She's the Type of Person Who Always Exaggerates"
                    },
                    "v8c181": {
                        "checked": false,
                        "title": "The Other Side Connecting the Past, Present and Future"
                    },
                    "v8c182": {
                        "checked": false,
                        "title": "Infatuated with That Courage and Insight"
                    },
                    "v8c183": {
                        "checked": false,
                        "title": "We Are Friends After All!"
                    },
                    "v8c184": {
                        "checked": false,
                        "title": "If He Was Born Before A Thousand Years Ago"
                    },
                    "v8c185": {
                        "checked": false,
                        "title": "Terrible Interests"
                    },
                    "v8c186": {
                        "checked": false,
                        "title": "Two People with Social Phobia"
                    },
                    "v8c187": {
                        "checked": false,
                        "title": "Epsilon's Secret Recipe"
                    },
                    "v8c188": {
                        "checked": false,
                        "title": "Epsilon in Gorgeous Disguise"
                    },
                    "v8c189": {
                        "checked": false,
                        "title": "Take A Walk in the Forest"
                    },
                    "v8c190": {
                        "checked": false,
                        "title": "Everything Is Connected, All of Which Meets His Expectations"
                    },
                    "v8c191": {
                        "checked": false,
                        "title": "Let Me Show You Perfect Magic Control"
                    },
                    "v8c192": {
                        "checked": false,
                        "title": "It's Not My Fault The Shot Went Awry"
                    },
                    "v8c193": {
                        "checked": false,
                        "title": "Great Sacrifice for World Peace and Science"
                    },
                    "v8c194": {
                        "checked": false,
                        "title": "The Secret One Wants to Hide the Most"
                    },
                    "v8c195": {
                        "checked": false,
                        "title": "A Natural Phenomenon of Unknown Cause or A Paranormal Phenomenon"
                    },
                    "v8c196": {
                        "checked": false,
                        "title": "Battle of Darkness"
                    },
                    "v8c197": {
                        "checked": false,
                        "title": "Forget to Close the Door"
                    },
                    "v8c198": {
                        "checked": false,
                        "title": "It's All The Americans' Fault"
                    },
                    "v8c199": {
                        "checked": false,
                        "title": "Mysterious Architect Eta Lloyd Wright"
                    },
                    "v8c200": {
                        "checked": false,
                        "title": "The Only Food Left Is DX"
                    },
                    "v8c201": {
                        "checked": false,
                        "title": "Fraudulent Company"
                    },
                    "v8c202": {
                        "checked": false,
                        "title": "Seems Like Never Coming Back"
                    }
                }
            },
            chapterFilters: {}
        };
    });

    React.useEffect(() => {
        sessionStorage.setItem('wnDropdownState', JSON.stringify(wnDropdownState));
    }, [wnDropdownState]);

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
            "Rose Oriana": characterCovers.RoseOrianaIcon,
            "No. 666": characterCovers.No666Icon,
            "Sherry Barnett": characterCovers.SherryBarnettIcon,
            "Skel Etal": characterCovers.SkelEtalIcon,
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
            "3-3": covers.SSC33Cover
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
                                    "Beta & Gamma (Gamma)": false,
                                    "Gamma & Epsilon (Gamma)": false,
                                    "Gamma & Epsilon & Eta (Gamma)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Delta": {
                                    "Delta": false,
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
                                    "??? (Epsilon)": false,
                                    "Everyone (Epsilon)": false,
                                    "Seven Shadows (Epsilon)": false,
                                    "Beta & Epsilon (Epsilon)": false,
                                    "Gamma & Epsilon (Epsilon)": false,
                                    "Gamma & Epsilon & Eta (Epsilon)": false,
                                    "checked": false,
                                    "open": false
                                },
                                "Zeta": {
                                    "Zeta": false,
                                    "??? (Zeta)": false,
                                    "Everyone (Zeta)": false,
                                    "Seven Shadows (Zeta)": false,
                                    "Alpha & Zeta (Zeta)": false,
                                    "Delta & Zeta (Zeta)": false,
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
                                    "??? (No. 93)": false,
                                    "open": false,
                                    "checked": false,
                                },
                                "Chi": {
                                    "Chi": false,
                                    "No. 111": false,
                                    "Karen": false,
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
                            "Sunraku & Shadow (Shadow)": false,
                            "Cid & Sunraku (Cid)": false,
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
                        }
                    },
                    characters: {
                        "Rose Oriana": {
                            "Rose Oriana": false,
                            "No. 666": false,
                            "checked": false,
                            "open": false
                        },
                        "Raphael Oriana": {
                            "checked": false,
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
                            "checked": false,
                        },
                        "Quinton": {
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
                                "Yukime": {
                                    "checked": false,
                                }
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
        'Cid Kagenou (All)': ['Cid', 'Cid Kagenou', 'Mundane Mann', 'Minoru Kageno', 'Shadow', 'Stylish Ruffian Slayer', '??? (Stylish Bandit Slayer)', '??? (Cid Kagenou)',
            '??? (Minoru Kageno)', 'Minoru Kageno', 'Nuru', '??? (Nuru)', 'Sunraku & Shadow (Shadow)', 'Cid & Sunraku (Cid)'
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
        'Skel Etal (All)': ['Skel Etal', 'Skel & Po (Skel)'],
        'Skel Etal': ['Skel Etal', 'Skel'],
        'Rose Oriana (All)': ['Rose Oriana', 'Rose', 'No.666'],
        'Rose Oriana': ['Rose Oriana', 'Rose'],
        'No. 666': ['No. 666', 'No.666'],
        'Alpha (All)': ['Alpha', '??? (Alpha)', 'None (Alpha)', 'Everyone (Alpha)', 'Alpha & Zeta (Alpha)', 'Alpha & Beta (Alpha)', 'Seven Shadows (Alpha)'],
        'Alpha': ['Alpha', '??? (Alpha)', 'None (Alpha)'],
        'Beta (All)': ['Beta', 'Natsume Kafka', 'Natsume', '??? (Natsume Kafka)', '??? (Natsume)', 'None (Beta)', 'Everyone (Beta)', 'Beta & Epsilon (Beta)',
            'Alpha & Beta (Beta)', 'Beta & Gamma (Beta)', '??? (Beta)', 'Seven Shadows (Beta)', 'Beta & Delta & Zeta (Beta)', 'Alexia Midgar & Natsume Kafka (Natsume Kafka)',
            'Fictional Shadow', 'Fictional Zenon'],
        'Beta': ['Natsume Kafka', 'Beta', '??? (Beta)', 'None (Beta)'],
        'Natsume Kafka': ['Natsume Kafka', 'Natsume'],
        '??? (Natsume Kafka)': ['??? (Natsume)'],
        'Gamma (All)': ['Gamma', 'Everyone (Gamma)', '??? (Gamma)', 'Seven Shadows (Gamma)', 'None (Gamma)', 'Beta & Gamma (Gamma)',
            'Gamma& Epsilon & Eta (Gamma)', 'Gamma & Epsilon (Gamma)', 'Luna'],
        'Gamma': ['Gamma', '??? (Gamma)', 'None (Gamma)'],
        "Delta (All)": ['Delta', 'Everyone (Delta)', '??? (Delta)', 'Seven Shadows (Delta)', 'Delta & Zeta (Delta)', 'Beta & Delta & Zeta (Delta)'],
        "Delta": ['Delta', '??? (Delta)'],
        'Epsilon (All)': ['Epsilon', 'Everyone (Epsilon)', 'Beta & Epsilon (Epsilon)', '??? (Epsilon)', 'Seven Shadows (Epsilon)',
            'Gamma& Epsilon & Eta (Epsilon)', 'Gamma & Epsilon (Epsilon)'],
        'Epsilon': ['Epsilon', '??? (Epsilon)'],
        'Zeta (All)': ['Zeta', 'Everyone (Zeta)', 'Alpha & Zeta (Zeta)', 'Zeta & Eta (Zeta)', '??? (Zeta)', 'Seven Shadows (Zeta)', 'Delta & Zeta (Zeta)', 'Beta & Delta & Zeta (Zeta)'],
        'Zeta': ['Zeta', '??? (Zeta)'],
        'Eta (All)': ['Eta', 'Everyone (Eta)', 'Zeta & Eta (Eta)', 'Seven Shadows (Eta)', '??? (Eta)', 'Gamma& Epsilon & Eta (Eta)'],
        'Gamma & Epsilon & Eta (Eta)': ['Gamma& Epsilon & Eta (Eta)'],
        'Gamma & Epsilon & Eta (Gamma)': ['Gamma& Epsilon & Eta (Gamma)'],
        'Gamma & Epsilon & Eta (Epsilon)': ['Gamma& Epsilon & Eta (Epsilon)'],
        'Eta': ['Eta', '??? (Eta)'],
        'Chi (All)': ["Chi", "Chi & Omega (Chi)", "Karen", "??? (Karen)", "No. 111", "No. 111 & No. 122 (No. 111)"],
        'Omega (All)': ["Omega", "Chi & Omega (Omega)", "Possessed (Omega)", "No. 111 & No. 122 (No. 122)", "No. 122"],
        'Lambda (All)': ['Lambda', 'Tawny Elf (Lambda)', 'None (Lambda)'],
        'Lambda': ['Lambda', 'None (Lambda)'],
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
        'Nu (All)': ['Nu', '93', 'No. 93', '??? (No. 93)'],
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

    const [versionData, setVersionData] = useState(null);


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
