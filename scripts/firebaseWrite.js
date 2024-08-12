const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "groups": {
        "Shadow Garden": {
            "order": 1,
            "Seven Shadows": {
                "order": 1,
                "characters": []
            },
            "Numbers": {
                "order": 2,
                "characters": []
            },
            "Members": {
                "order": 3,
                "characters": [
                    "Garden Member",
                    "Garden Members"
                ]
            }
        },
        "Midgar": {
            "order": 2,
            "Midgar Academy": {
                "order": 1,
                "characters": []
            },
            "Crimson Order": {
                "order": 2,
                "characters": []
            },
            "Midgar Kingdom": {
                "order": 3,
                "characters": []
            },
            "General": {
                "order": 4,
                "characters": [
                    "Captain's Daughter",
                    "Duke's Second Son",
                    "Knight Captain"
                ]
            }
        },
        "Oriana": {
            "order": 3,
            "Oriana Kingdom": {
                "order": 1,
                "characters": [
                    "Newwealth",
                    "Parton"
                ]
            },
            "General": {
                "order": 2,
                "characters": [
                    "Oriana Noble A",
                    "Oriana Noble B",
                    "Oriana Noble C"
                ]
            }
        },
        "Cult of Diablos": {
            "order": 4,
            "Knights of Rounds": {
                "order": 1,
                "characters": []
            },
            "Members": {
                "order": 2,
                "characters": []
            },
            "Children": {
                "order": 3,
                "characters": [
                    "Maximilian"
                ]
            },
            "Generic": {
                "order": 4,
                "characters": [
                    "Cult Leader",
                    "Cult Member Boss",
                    "Cult Member C",
                    "Cult Members",
                    "Cultist",
                    "Cultist A",
                    "Cultist B",
                    "Cultist C",
                    "Cultist D",
                    "Cultist E",
                    "Cultist F"
                ]
            }
        },
        "Velgalta": {
            "order": 5,
            "General": {
                "order": 1,
                "characters": [
                    "Velgalta Soldier",
                    "Velgalta Soldier A",
                    "Velgalta Soldier B",
                    "Velgalta Soldier C",
                    "Velgalta Soldier D",
                    "Velgalta Soldier E",
                    "Velgalta Soldiers"
                ]
            }
        },
        "Others": {
            "order": 6,
            "Apocrypha": {
                "order": 1,
                "characters": []
            },
            "Dragons": {
                "order": 2,
                "characters": [
                    "Malak",
                    "Malak Swarm",
                    "Malaks",
                    "Nidhogg"
                ]
            },
            "Earth": {
                "order": 3,
                "characters": [
                    "Akane's Butler",
                    "Kidnapper A",
                    "Kidnapper B"
                ]
            },
            "Lawless City": {
                "order": 4,
                "characters": []
            },
            "Major Corporate Alliance": {
                "order": 5,
                "characters": [
                    "Leaf One",
                    "Leaf Two",
                    "Leaf Three",
                    "Zabra"
                ]
            },
            "Shangri-La Frontier": {
                "order": 6,
                "characters": []
            },
            "Templars": {
                "order": 7,
                "characters": [
                    "Templar A",
                    "Templar B",
                    "Templar C",
                    "Templar Leader",
                    "Templar Leader A",
                    "Templar Leader B",
                    "Templar Leader C",
                    "Templar Leader D",
                    "Templars"
                ]
            },
            "Vampires": {
                "order": 8,
                "characters": []
            },
            "General": {
                "order": 9,
                "characters": [
                    "Toppe Batterius"
                ]
            }
        },
        "Generic": {
            "order": 7,
            "General": {
                "order": 1,
                "characters": [
                    "Attendees",
                    "Bookie",
                    "Broadcast",
                    "Church Member",
                    "Civilian",
                    "Coworker",
                    "Crowd",
                    "Disciple",
                    "Elven Coachwoman",
                    "Elven Guardswoman",
                    "Fan Passerby",
                    "Female Pilgrim",
                    "Follower A",
                    "Follower B",
                    "Guard",
                    "Heckler",
                    "Junior",
                    "Maid",
                    "Manager",
                    "Medic",
                    "Mother",
                    "Old Man",
                    "Paladin",
                    "Passerby A",
                    "Passerby B",
                    "Passerby C",
                    "Passerby D",
                    "Pickpocket",
                    "Priest",
                    "Researcher",
                    "Sailor",
                    "Scientist",
                    "Soldier",
                    "Subordinate",
                    "Vampire",
                    "Veteran Paladin"
                ]
            },
            "Bandits": {
                "order": 2,
                "characters": [
                    "Bandit",
                    "Bandit A",
                    "Bandit B",
                    "Bandit Boss",
                    "Bandits"
                ]
            },
            "Business": {
                "order": 3,
                "characters": [
                    "Branch Manager",
                    "Cake Shop Assistant",
                    "Clerk",
                    "Merchant",
                    "Merchant A",
                    "Merchant A Secretary",
                    "Merchant B",
                    "Merchant C",
                    "Mitsugoshi Staff",
                    "Quiche Stall Owner",
                    "Shop Staff",
                    "Skewer Stall Owner",
                    "Soup Stall Owner",
                    "Staff",
                    "Wounded Merchant"
                ]
            },
            "Casino": {
                "order": 4,
                "characters": [
                    "Dealer"
                ]
            },
            "Children": {
                "order": 5,
                "characters": [
                    "Boy",
                    "Boy A",
                    "Boy B",
                    "Boy C",
                    "Boys",
                    "Children",
                    "Girl",
                    "Girl A",
                    "Girl B"
                ]
            },
            "Committee": {
                "order": 6,
                "characters": [
                    "Boy Cmte. Member A",
                    "Boy Cmte. Member B",
                    "Committee Member",
                    "Committee Members",
                    "Committee Person",
                    "Girl Cmte. Member A",
                    "Girl Cmte. Member B"
                ]
            },
            "Deceased": {
                "order": 7,
                "characters": [
                    "Deceased Child",
                    "Deceased Elderly",
                    "Deceased Man",
                    "Deceased Woman"
                ]
            },
            "Events": {
                "order": 8,
                "characters": [
                    "Announcer",
                    "Audience",
                    "Participant",
                    "Participant A",
                    "Participant B",
                    "Participant C",
                    "Referee",
                    "Spectator",
                    "Spectator A",
                    "Spectator B",
                    "Spectator Woman"
                ]
            },
            "Kingdom": {
                "order": 9,
                "characters": [
                    "Aristocrat",
                    "Aristocrats",
                    "Civil Servant",
                    "Civil Servants",
                    "Margrave",
                    "Noblewoman"
                ]
            },
            "Knights": {
                "order": 10,
                "characters": [
                    "Dark Knight",
                    "Female DK Trainee",
                    "Knight",
                    "Knight A",
                    "Knights"
                ]
            },
            "Mercenaries": {
                "order": 11,
                "characters": [
                    "Mercenary B",
                    "Mercenary Boss",
                    "Mercenary C",
                    "Mercenary Veteran",
                    "Mundane Mercenary"
                ]
            },
            "Monsters": {
                "order": 12,
                "characters": [
                    "Alpha Wolf",
                    "Basilisk",
                    "Boar",
                    "Boss Monster",
                    "Evil Spirit",
                    "Ghoul",
                    "Little Cuckoo-kun",
                    "Merry Whip",
                    "Monster",
                    "Mr. Vendy"
                ]
            },
            "Mysterious": {
                "order": 13,
                "characters": [
                    "Mysterious Captain",
                    "Mysterious Man A",
                    "Mysterious Man B",
                    "Mysterious Man C",
                    "Mysterious Man D",
                    "Mysterious Soldier A",
                    "Mysterious Soldier B",
                    "Mysterious Soldier C",
                    "Mysterious Soldier D",
                    "Mysterious Soldier E",
                    "Mysterious Soldiers",
                    "Mysterious Voice"
                ]
            },
            "News": {
                "order": 14,
                "characters": [
                    "Editor",
                    "MNA Journalist",
                    "News Reporter",
                    "Reporter"
                ]
            },
            "Rogues": {
                "order": 16,
                "characters": [
                    "Rogue A",
                    "Rogue B",
                    "Rogue Leader"
                ]
            },
            "School": {
                "order": 17,
                "characters": [
                    "Classmate",
                    "Female Student",
                    "Female Student A",
                    "Male Student A",
                    "Student",
                    "Teacher"
                ]
            },
            "Therianthropes": {
                "order": 18,
                "characters": [
                    "Bearded Participant",
                    "Bearded T-thrope",
                    "Fox T-thrope",
                    "McKen Ro",
                    "Pigtailed T-thrope",
                    "Rabbit T-thrope",
                    "Raccoon T-thrope",
                    "Red Horse T-thrope",
                    "T-thrope Opponent",
                    "T-thrope Spectator",
                    "T-thrope Spectators",
                    "Therianthrope A",
                    "Therianthrope B",
                    "Tiger T-thrope",
                    "White Horse T-thrope"
                ]
            }
        }
    },
    "characters": [
        {
            "name": "None",
            "name_variants": [],
            "name_mirrors": [{"base": "None", "alt": ""}],
            "group": "Generic",
            "subgroup": "",
            "order": 1
        },
        {
            "name": "Akane Nishino",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Earth",
            "order": 1
        },
        {
            "name": "Alexia Midgar",
            "name_variants": [
                "??? (Alexia Midgar)",
                "Alexia & Claire (Alexia)",
                "Alexia Midgar & Natsume Kafka (Alexia Midgar)",
                "Sherry & Alexia (Alexia)"
            ],
            "name_mirrors": [
                {
                    "base": "Alexia Midgar",
                    "alt": "Alexia"
                },
                {
                    "base": "??? (Alexia Midgar)",
                    "alt": "????? (Alexia Midgar"
                },
                {
                    "base": "Sherry & Alexia (Alexia)",
                    "alt": "Shelly and Alexia (Alexia)"
                }
            ],
            "group": "Midgar",
            "subgroup": "Midgar Academy",
            "order": 1
        },
        {
            "name": "Claire Kagenou",
            "name_variants": [
                "??? (Claire Kagenou)",
                "Alexia & Claire (Claire)"
            ],
            "name_mirrors": [
                {
                    "base": "Claire Kagenou",
                    "alt": "Claire"
                }
            ],
            "group": "Midgar",
            "subgroup": "Midgar Academy",
            "order": 2
        },
        {
            "name": "Po Tato",
            "name_variants": [
                "Skel & Po (Po)"
            ],
            "name_mirrors": [
                {
                    "base": "Po Tato",
                    "alt": "Po"
                }
            ],
            "group": "Midgar",
            "subgroup": "Midgar Academy",
            "order": 3
        },
        {
            "name": "Sherry Barnett",
            "name_variants": [
                "Sherry & Alexia (Sherry)"
            ],
            "name_mirrors": [
                {
                    "base": "Sherry Barnett",
                    "alt": "Sherry"
                },
                {
                    "base": "Sherry & Alexia (Alexia)",
                    "alt": "Shelly and Alexia (Alexia)"
                }
            ],
            "group": "Midgar",
            "subgroup": "Midgar Academy",
            "order": 4
        },
        {
            "name": "Skel Etal",
            "name_variants": [
                "Skel & Po (Skel)"
            ],
            "name_mirrors": [
                {
                    "base": "Skel Etal",
                    "alt": "Skel"
                }
            ],
            "group": "Midgar",
            "subgroup": "Midgar Academy",
            "order": 5
        },
        {
            "name": "Iris Midgar",
            "name_variants": [],
            "name_mirrors": [
                {
                    "base": "Iris Midgar",
                    "alt": "Iris"
                }
            ],
            "group": "Midgar",
            "subgroup": "Crimson Order",
            "order": 1
        },
        {
            "name": "Marco Granger",
            "name_variants": [
                "Dark Knight Trainee"
            ],
            "name_mirrors": [],
            "group": "Midgar",
            "subgroup": "Crimson Order",
            "order": 2
        },
        {
            "name": "Glen",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Midgar",
            "subgroup": "Crimson Order",
            "order": 3
        },
        {
            "name": "Klaus Midgar",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Midgar",
            "subgroup": "Midgar Kingdom",
            "order": 1
        },
        {
            "name": "Mr. Kagenou",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Midgar",
            "subgroup": "Midgar Kingdom",
            "order": 2
        },
        {
            "name": "Mrs. Kagenou",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Midgar",
            "subgroup": "Midgar Kingdom",
            "order": 3
        },
        {
            "name": "Cid Kagenou",
            "name_variants": [
                "Shadow",
                "Mundane Mann",
                "John Smith",
                "Minoru Kageno",
                "Stylish Bandit Slayer",
                "Stylish Ruffian Slayer",
                "Nuru",
                "??? (Cid Kagenou)",
                "??? (Shadow)",
                "??? (Minoru Kageno)",
                "??? (Stylish Bandit Slayer)",
                "??? (Nuru)",
                "None (Cid Kagenou)",
                "Cid & Sunraku (Cid)",
                "John Smith & Yukime (John Smith)",
                "Sunraku & Shadow (Shadow)",
                "3 People (Cid)"
            ],
            "name_mirrors": [
                {
                    "base": "??? (Shadow)",
                    "alt": "???? (Shadow)"
                },
                {
                    "base": "Cid Kagenou",
                    "alt": "Cid"
                }
            ],
            "group": "Shadow Garden",
            "subgroup": "",
            "order": 1
        },
        {
            "name": "Alpha",
            "name_variants": [
                "??? (Alpha)",
                "Everyone (Alpha)",
                "None (Alpha)",
                "Seven Shadows (Alpha)",
                "Alpha & Beta (Alpha)",
                "Alpha & Eta (Alpha)",
                "Alpha & Gamma (Alpha)",
                "Alpha & Nu (Alpha)",
                "Alpha & Zeta (Alpha)",
                "Everyone (Alpha)"
            ],
            "name_mirrors": [],
            "group": "Shadow Garden",
            "subgroup": "Seven Shadows",
            "order": 1
        },
        {
            "name": "Beta",
            "name_variants": [
                "Natsume Kafka",
                "??? (Beta)",
                "??? (Natsume Kafka",
                "Everyone (Beta)",
                "None (Beta)",
                "Seven Shadows (Beta)",
                "Fictional Shadow",
                "Fictional Zenon",
                "Alexia Midgar & Natsume Kafka (Natsume Kafka)",
                "Alpha & Beta (Beta)",
                "Beta & Epsilon (Beta)",
                "Beta & Gamma (Beta)",
                "Beta & Zeta (Beta)",
                "Zeta & Beta (Beta)",
                "Beta & Delta & Zeta (Beta)",
                "Beta & Gamma & Epsilon (Beta)"
            ],
            "name_mirrors": [
                {
                    "base": "Natsume Kafka",
                    "alt": "Natsume"
                },
                {
                    "base": "??? (Natsume Kafka)",
                    "alt": "??? (Natsume)"
                }
            ],
            "group": "Shadow Garden",
            "subgroup": "Seven Shadows",
            "order": 2
        },
        {
            "name": "Gamma",
            "name_variants": [
                "Luna",
                "??? (Gamma)",
                "Everyone (Gamma)",
                "None (Gamma)",
                "Seven Shadows (Gamma)",
                "Alpha & Gamma (Gamma)",
                "Beta & Gamma (Gamma)",
                "Gamma & Epsilon (Gamma)",
                "Gamma & Iota (Gamma)",
                "Beta & Gamma & Epsilon (Gamma)",
                "Gamma & Epsilon & Eta (Gamma)"
            ],
            "name_mirrors": [
                {
                    "base": "Gamma & Epsilon & Eta (Gamma)",
                    "alt": "Gamma& Epsilon & Eta (Gamma)"
                }
            ],
            "group": "Shadow Garden",
            "subgroup": "Seven Shadows",
            "order": 3
        },
        {
            "name": "Delta",
            "name_variants": [
                "Deltan",
                "??? (Delta)",
                "Everyone (Delta)",
                "Seven Shadows (Delta)",
                "Delta & Zeta (Delta)",
                "Beta & Delta & Zeta (Delta)"
            ],
            "name_mirrors": [],
            "group": "Shadow Garden",
            "subgroup": "Seven Shadows",
            "order": 4
        },
        {
            "name": "Epsilon",
            "name_variants": [
                "Shiron",
                "??? (Epsilon)",
                "Everyone (Epsilon)",
                "Seven Shadows (Epsilon)",
                "Beta & Epsilon (Epsilon)",
                "Gamma & Epsilon (Epsilon)",
                "Zeta & Epsilon (Epsilon)",
                "Beta & Gamma & Epsilon (Epsilon)",
                "Gamma & Epsilon & Eta (Epsilon)"
            ],
            "name_mirrors": [
                {
                    "base": "Gamma & Epsilon & Eta (Epsilon)",
                    "alt": "Gamma& Epsilon & Eta (Epsilon)"
                }
            ],
            "group": "Shadow Garden",
            "subgroup": "Seven Shadows",
            "order": 5
        },
        {
            "name": "Zeta",
            "name_variants": [
                "Zetan",
                "??? (Zeta)",
                "Everyone (Zeta)",
                "Seven Shadows (Zeta)",
                "Alpha & Zeta (Zeta)",
                "Beta & Zeta (Zeta)",
                "Delta & Zeta (Zeta)",
                "Zeta & Epsilon (Zeta)",
                "Zeta & Eta (Zeta)",
                "Beta & Delta & Zeta (Zeta)"
            ],
            "name_mirrors": [
                {
                    "base": "Gamma & Epsilon & Eta (Epsilon)",
                    "alt": "Gamma& Epsilon & Eta (Epsilon)"
                }
            ],
            "group": "Shadow Garden",
            "subgroup": "Seven Shadows",
            "order": 5
        },
        {
            "name": "Eta",
            "name_variants": [
                "??? (Eta)",
                "Everyone (Eta)",
                "Seven Shadows (Eta)",
                "Alpha & Eta (Eta)",
                "Zeta & Eta (Eta)",
                "Gamma & Epsilon & Eta (Eta)"
            ],
            "name_mirrors": [
                {
                    "base": "Gamma & Epsilon & Eta (Eta)",
                    "alt": "Gamma& Epsilon & Eta (Eta)"
                }
            ],
            "group": "Shadow Garden",
            "subgroup": "Seven Shadows",
            "order": 7
        },
        {
            "name": "Iota",
            "name_variants": [
                "None (Iota)",
                "Gamma & Iota (Iota)"
            ],
            "name_mirrors": [],
            "group": "Shadow Garden",
            "subgroup": "Numbers",
            "order": 1
        },
        {
            "name": "Lambda",
            "name_variants": [
                "Mound of Flesh (Lambda)",
                "None (Lambda)",
                "Tawny Elf (Lambda)"
            ],
            "name_mirrors": [],
            "group": "Shadow Garden",
            "subgroup": "Numbers",
            "order": 2
        },
        {
            "name": "Nu",
            "name_variants": [
                "No. 93",
                "??? (No. 93)",
                "Alpha & Nu (Nu)",
                "Characterised Alpha"
            ],
            "name_mirrors": [
                {
                    "base": "No. 93",
                    "alt": "93"
                }
            ],
            "group": "Shadow Garden",
            "subgroup": "Numbers",
            "order": 2
        },
        {
            "name": "Chi",
            "name_variants": [
                "No. 111",
                "Karen",
                "??? (Karen)",
                "Characterised Cult Member",
                "Characterised Eta",
                "Characterised Shadow",
                "Chi & Omega (Chi)",
                "No. 111 & No. 122 (No. 111)"
            ],
            "name_mirrors": [],
            "group": "Shadow Garden",
            "subgroup": "Numbers",
            "order": 4
        },
        {
            "name": "Omega",
            "name_variants": [
                "No. 122",
                "Characterised Gamma",
                "Characterised Zeta",
                "Possessed (Omega)",
                "Chi & Omega (Omega)",
                "No. 111 & No. 122 (No. 122)"
            ],
            "name_mirrors": [],
            "group": "Shadow Garden",
            "subgroup": "Numbers",
            "order": 5
        },
        {
            "name": "Victoria",
            "name_variants": [
                "No. 559",
                "??? (Victoria)"
            ],
            "name_mirrors": [],
            "group": "Shadow Garden",
            "subgroup": "Members",
            "order": 2
        },
        {
            "name": "No. 664",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Shadow Garden",
            "subgroup": "Members",
            "order": 2
        },
        {
            "name": "No. 665",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Shadow Garden",
            "subgroup": "Members",
            "order": 3
        },
        {
            "name": "Annerose Nichtsehen",
            "name_variants": [
                "None (Annerose)"
            ],
            "name_mirrors": [
                {
                    "base": "Annerose Nichtsehen",
                    "alt": "Annerose"
                }
            ],
            "group": "Velgalta",
            "subgroup": "",
            "order": 1
        },
        {
            "name": "Rude",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Velgalta",
            "subgroup": "",
            "order": 2
        },
        {
            "name": "Curie Oso",
            "name_variants": [],
            "name_mirrors": [
                {
                    "base": "Curie Oso",
                    "alt": "Curious Noblewoman"
                }
            ],
            "group": "Velgalta",
            "subgroup": "General",
            "order": 1
        },
        {
            "name": "Arthur Pencilgon",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Shangri-La Frontier",
            "order": 1
        },
        {
            "name": "OiKatzo",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Shangri-La Frontier",
            "order": 2
        },
        {
            "name": "Sunraku",
            "name_variants": [
                "??? (Sunraku)",
                "Cid & Sunraku (Sunraku)",
                "Sunraku & Shadow (Sunraku)"
            ],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Shangri-La Frontier",
            "order": 3
        },
        {
            "name": "Wethermon",
            "name_variants": [
                "??? (Wethermon)"
            ],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Shangri-La Frontier",
            "order": 4
        },
        {
            "name": "Aurora",
            "name_variants": [
                "??? (Aurora)",
                "Massive Mound of Magic",
                "3 People (Aurora)"
            ],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "",
            "order": 1
        },
        {
            "name": "Beatrix",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "",
            "order": 2
        },
        {
            "name": "Goldy Gilded",
            "name_variants": [
                "Goldy & Quinton (Goldy)"
            ],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "",
            "order": 3
        },
        {
            "name": "Quinton",
            "name_variants": [
                "Goldy & Quinton (Quinton)"
            ],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "",
            "order": 4
        },
        {
            "name": "Yukime",
            "name_variants": [
                "John Smith & Yukime (Yukime)"
            ],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "",
            "order": 5
        },
        {
            "name": "Olivier",
            "name_variants": [
                "Alpha Look-alike",
                "??? (Olivier)"
            ],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Apocrypha",
            "order": 1
        },
        {
            "name": "Freya",
            "name_variants": [
                "??? (Freya)"
            ],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Apocrypha",
            "order": 2
        },
        {
            "name": "Lili",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Apocrypha",
            "order": 3
        },
        {
            "name": "Duet",
            "name_variants": [
                "Beta Look-alike"
            ],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Apocrypha",
            "order": 4
        },
        {
            "name": "Pente",
            "name_variants": [
                "Epsilon Look-alike"
            ],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Apocrypha",
            "order": 5
        },
        {
            "name": "Mordred",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Cult of Diablos",
            "subgroup": "Knights of Rounds",
            "order": 1
        },
        {
            "name": "Jack Nelson",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Cult of Diablos",
            "subgroup": "Knights of Rounds",
            "order": 2
        },
        {
            "name": "Sergey Gorman",
            "name_variants": [
                "??? (Sergey Gorman)",
                "None (Sergey Gorman)"
            ],
            "name_mirrors": [
                {
                    "base": "Sergey Gorman",
                    "alt": "Sergey"
                },
                {
                    "base": "Sergey Gorman",
                    "alt": "Sergei"
                }
            ],
            "group": "Cult of Diablos",
            "subgroup": "Knights of Rounds",
            "order": 2
        },
        {
            "name": "Lutheran Barnett",
            "name_variants": [
                "Sir Gaunt"
            ],
            "name_mirrors": [],
            "group": "Cult of Diablos",
            "subgroup": "Knights of Rounds",
            "order": 3
        },
        {
            "name": "Gettan",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Cult of Diablos",
            "subgroup": "Members",
            "order": 1
        },
        {
            "name": "Perv Asshat",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Cult of Diablos",
            "subgroup": "Members",
            "order": 2
        },
        {
            "name": "Zenon Griffey",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Cult of Diablos",
            "subgroup": "Members",
            "order": 3
        },
        {
            "name": "Kouadoi",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Cult of Diablos",
            "subgroup": "Children",
            "order": 1
        },
        {
            "name": "Nanigashi",
            "name_variants": [
                "??? (Nanigashi)"
            ],
            "name_mirrors": [],
            "group": "Cult of Diablos",
            "subgroup": "Children",
            "order": 2
        },
        {
            "name": "Rex",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Cult of Diablos",
            "subgroup": "Children",
            "order": 3
        },
        {
            "name": "Grease",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Cult of Diablos",
            "subgroup": "Members",
            "order": 2
        },
        {
            "name": "Cult Member",
            "name_variants": [],
            "name_mirrors": [
                {
                    "base": "Cult Member",
                    "alt": "Bandit?"
                }
            ],
            "group": "Cult of Diablos",
            "subgroup": "Generic",
            "order": -1
        },
        {
            "name": "Cult Member A",
            "name_variants": [
                "Cult Member A & B (Cult Member A)"
            ],
            "name_mirrors": [],
            "group": "Cult of Diablos",
            "subgroup": "Generic",
            "order": -1
        },
        {
            "name": "Cult Member B",
            "name_variants": [
                "Cult Member A & B (Cult Member B)"
            ],
            "name_mirrors": [],
            "group": "Cult of Diablos",
            "subgroup": "Generic",
            "order": -1
        },
        {
            "name": "Bishop Drake",
            "name_variants": [],
            "name_mirrors": [
                {
                    "base": "Bishop Drake",
                    "alt": "Bishop of Orum"
                }
            ],
            "group": "Others",
            "subgroup": "Templars",
            "order": 1
        },
        {
            "name": "Templar",
            "name_variants": [
                "??? (Templar)"
            ],
            "name_mirrors": [
                {
                    "base": "??? (Templar)",
                    "alt": "????? (Templar)"
                }
            ],
            "group": "Others",
            "subgroup": "Templars",
            "order": 1
        },
        {
            "name": "Claudia",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Lawless City",
            "order": 1
        },
        {
            "name": "Juggernaut",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Lawless City",
            "order": 2
        },
        {
            "name": "Marie",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Lawless City",
            "order": 3
        },
        {
            "name": "Kana",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Lawless City",
            "order": 3
        },
        {
            "name": "Natsu",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Lawless City",
            "order": 4
        },
        {
            "name": "White Demon",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Lawless City",
            "order": 5
        },
        {
            "name": "Garter Kikuchi",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Major Corporate Alliance",
            "order": 1
        },
        {
            "name": "Elisabeth",
            "name_variants": [
                "3 People (Elisabeth)"
            ],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Vampires",
            "order": 1
        },
        {
            "name": "Crimson",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Vampires",
            "order": 2
        },
        {
            "name": "Mary",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Vampires",
            "order": 3
        },
        {
            "name": "Customer",
            "name_variants": [
                "??? (Customer)"
            ],
            "name_mirrors": [],
            "group": "Generic",
            "subgroup": "Business",
            "order": -1
        },
        {
            "name": "Dog T-thrope Priest",
            "name_variants": [],
            "name_mirrors": [
                {
                    "base": "Dog T-thrope Priest",
                    "alt": "Dog T.thrope Priest"
                }
            ],
            "group": "Generic",
            "subgroup": "Therianthropes",
            "order": -1
        },
        {
            "name": "Joker",
            "name_variants": [
                "??? (Joker)"
            ],
            "name_mirrors": [],
            "group": "Generic",
            "subgroup": "Casino",
            "order": 1
        },
        {
            "name": "King",
            "name_variants": [
                "??? (King)"
            ],
            "name_mirrors": [],
            "group": "Generic",
            "subgroup": "Casino",
            "order": 2
        },
        {
            "name": "Rose Oriana",
            "name_variants": [
                "No. 666"
            ],
            "name_mirrors": [
                {
                    "base": "Rose Oriana",
                    "alt": "Rose"
                },
                {
                    "base": "No. 666",
                    "alt": "No.666"
                }
            ],
            "group": "Oriana",
            "subgroup": "",
            "order": 1
        },
        {
            "name": "Kevin",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Oriana",
            "subgroup": "Oriana Kingdom",
            "order": 1
        },
        {
            "name": "Margaret",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Oriana",
            "subgroup": "Oriana Kingdom",
            "order": 2
        },
        {
            "name": "Raphael Oriana",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Oriana",
            "subgroup": "Oriana Kingdom",
            "order": 3
        },
        {
            "name": "Reina Oriana",
            "name_variants": [],
            "name_mirrors": [],
            "group": "Oriana",
            "subgroup": "Oriana Kingdom",
            "order": 4
        },
        {
            "name": "Mercenary A",
            "name_variants": [
                "??? (Mercenary A)"
            ],
            "name_mirrors": [],
            "group": "Generic",
            "subgroup": "Mercenaries",
            "order": 1
        },
        {
            "name": "Mist Dragon",
            "name_variants": [
                "??? (Mist Dragon)",
                "None (Mist Dragon)"
            ],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Dragons",
            "order": 1
        },
        {
            "name": "Shishiodoshi",
            "name_variants": [
                "Shishi(?)"
            ],
            "name_mirrors": [],
            "group": "Generic",
            "subgroup": "Monsters",
            "order": -1
        }
    ]
}
// let setDoc = db.collection('data').doc('an_s2_e8').set(data['s2']);

//let setDoc = db.collection('data').doc('ssc_p2_c2-12').set(data['p2']['c2-12']);

//let setDoc = db.collection('data').doc('apo_p1_c1-1').set(data['p1']['c1-1']);

// let setDoc = db.collection('data').doc('es_tghms').set(data['tghms']);

// let setDoc = db.collection('data').doc('ln_v5').set(data['v5']);

// let setDoc = db.collection('data').doc('an_s101').set(data['kj1']);

// let setDoc = db.collection('data').doc('info').set(data);

let setDoc = db.collection('data').doc('characters').set(data);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
