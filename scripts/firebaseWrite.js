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
                  "Forbidden Stacks",
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
              "characters": []
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
                  "Kidnapper A",
                  "Kidnapper B"
              ]
          },
          "Fire Force": {
              "order": 4,
              "characters": []
          },
          "Lawless City": {
              "order": 5,
              "characters": []
          },
          "Major Corporate Alliance": {
              "order": 6,
              "characters": [
                  "Leaf One",
                  "Leaf Two",
                  "Leaf Three",
                  "Zabra"
              ]
          },
          "Shangri-La Frontier": {
              "order": 7,
              "characters": []
          },
          "Templars": {
              "order": 8,
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
              "order": 9,
              "characters": []
          },
          "General": {
              "order": 10,
              "characters": [
                  "Fatty McSpecs",
                  "Toppe Batterius",
                  "Scarface",
                  "Zeta's Father",
                  "Zeta's Mother"
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
                  "Butler",
                  "Church Member",
                  "Civilian",
                  "Chief",
                  "Coworker",
                  "Crowd",
                  "Disciple",
                  "Elven Coachwoman",
                  "Elven Guardswoman",
                  "Fan Passerby",
                  "Female Pilgrim",
                  "Follower A",
                  "Follower B",
                  "Forum User",
                  "Guard",
                  "Heckler",
                  "Junior",
                  "Maid",
                  "Man A",
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
                  "Supervisor",
                  "Vampire",
                  "Veteran Paladin",
                  "Villager A",
                  "Villager B",
                  "Villager C",
                  "Villagers",
                  "Woman A"
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
                  "Mr. Vendy",
                  "Saurva",
                  "Spirit"
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
          "name": "Narrator",
          "name_variants": [],
          "name_mirrors": [
              {
                  "base": "Narrator",
                  "alt": ""
              }
          ],
          "group": "Generic",
          "subgroup": "",
          "order": 1,
          "url": ""
      },
      {
          "name": "Akane Nishino",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Earth",
          "order": 1,
          "url": "characterIcons/AkaneNishinoIcon.webp"
      },
      {
          "name": "Akira Nishino",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Earth",
          "order": 2,
          "url": "characterIcons/AkiraNishinoIcon.webp"
      },
      {
          "name": "Haitani",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Earth",
          "order": 3,
          "url": "characterIcons/HaitaniIcon.webp"
      },
      {
          "name": "Yuudai Saejima",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Earth",
          "order": 4,
          "url": "characterIcons/YuudaiSaejimaIcon.webp"
      },
      {
          "name": "Yuuka",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Earth",
          "order": 5,
          "url": "characterIcons/YuukaIcon.webp"
      },
      {
          "name": "Alexia Midgar",
          "name_variants": [
              "??? (Alexia Midgar)",
              "Alexia & Claire (Alexia)",
              "Alexia Midgar & Natsume Kafka (Alexia Midgar)",
              "Rose & Alexia (Alexia)",
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
          "order": 1,
          "url": "characterIcons/AlexiaMidgarIcon.webp"
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
          "order": 2,
          "url": "characterIcons/ClaireKagenouIcon.webp"
      },
      {
          "name": "Christina Hope",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Midgar",
          "subgroup": "Midgar Academy",
          "order": 3,
          "url": "characterIcons/ChristinaHopeIcon.webp"
      },
      {
          "name": "Eliza Dakuaikan",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Midgar",
          "subgroup": "Midgar Academy",
          "order": 4,
          "url": ""
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
          "order": 5,
          "url": "characterIcons/PoTatoIcon.webp"
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
          "order": 6,
          "url": "characterIcons/SherryBarnettIcon.webp"
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
          "order": 7,
          "url": "characterIcons/SkelEtalIcon.webp"
      },
      {
          "name": "Suzuki Hope",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Midgar",
          "subgroup": "Midgar Academy",
          "order": 8,
          "url": "characterIcons/SuzukiHopeIcon.webp"
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
          "order": 1,
          "url": "characterIcons/IrisMidgarIcon.webp"
      },
      {
          "name": "Adder",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Midgar",
          "subgroup": "Crimson Order",
          "order": 2,
          "url": ""
      },
      {
          "name": "Marco Granger",
          "name_variants": [
              "Dark Knight Trainee"
          ],
          "name_mirrors": [],
          "group": "Midgar",
          "subgroup": "Crimson Order",
          "order": 3,
          "url": "characterIcons/MarcoGrangerIcon.webp"
      },
      {
          "name": "Glen",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Midgar",
          "subgroup": "Crimson Order",
          "order": 4,
          "url": "characterIcons/GlenIcon.webp"
      },
      {
          "name": "Klaus Midgar",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Midgar",
          "subgroup": "Midgar Kingdom",
          "order": 1,
          "url": "characterIcons/KlausMidgarIcon.webp"
      },
      {
          "name": "Mr. Kagenou",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Midgar",
          "subgroup": "Midgar Kingdom",
          "order": 2,
          "url": "characterIcons/MrKagenouIcon.webp"
      },
      {
          "name": "Mrs. Kagenou",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Midgar",
          "subgroup": "Midgar Kingdom",
          "order": 3,
          "url": "characterIcons/MrsKagenouIcon.webp"
      },
      {
          "name": "Cid Kagenou",
          "name_variants": [
              "Shadow",
              "Mundane Mann",
              "John Smith",
              "Suzuki Hope",
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
              "Cid & Beta & Epsilon (Cid)",
              "Shadow & Benimaru (Shadow)",
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
              },
              {
                  "base": "Shadow & Benimaru (Shadow)",
                  "alt": "Shadow&Benimaru (Shadow)"
              }
          ],
          "group": "Shadow Garden",
          "subgroup": "",
          "order": 1,
          "url": {
              "base": "characterIcons/CidKagenouIcon.webp",
              "Shadow": "characterIcons/ShadowIcon.webp",
              "Mundane Mann": "characterIcons/MundaneMannIcon.webp",
              "John Smith": "characterIcons/JohnSmithIcon.webp",
              "Minoru Kageno": "characterIcons/MinoruKagenoIcon.webp",
              "Stylish Bandit Slayer": "characterIcons/StylishBanditSlayerIcon.webp",
              "Stylish Ruffian Slayer": "characterIcons/StylishRuffianSlayerIcon.webp",
              "Nuru": "characterIcons/NuruIcon.webp",
              "Suzuki Hope": "characterIcons/SuzukiHopeIcon.webp"
          }
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
              "Alpha & Freya (Alpha)",
              "Alpha & Gamma (Alpha)",
              "Alpha & Nu (Alpha)",
              "Alpha & Zeta (Alpha)",
              "Everyone (Alpha)"
          ],
          "name_mirrors": [],
          "group": "Shadow Garden",
          "subgroup": "Seven Shadows",
          "order": 1,
          "url": "characterIcons/AlphaIcon.webp"
      },
      {
          "name": "Beta",
          "name_variants": [
              "Natsume Kafka",
              "??? (Beta)",
              "??? (Natsume Kafka)",
              "Everyone (Beta)",
              "None (Beta)",
              "Seven Shadows (Beta)",
              "Fictional Alpha",
              "Fictional Delta",
              "Fictional Epsilon",
              "Fictional Eta",
              "Fictional Freya",
              "Fictional Gamma",
              "Fictional Lili",
              "Fictional Olivier",
              "Fictional Shadow",
              "Fictional Zenon",
              "Alexia Midgar & Natsume Kafka (Natsume Kafka)",
              "Alpha & Beta (Beta)",
              "Beta & Epsilon (Beta)",
              "Beta & Eta (Beta)",
              "Beta & Gamma (Beta)",
              "Beta & Zeta (Beta)",
              "Beta & Delta & Zeta (Beta)",
              "Beta & Gamma & Epsilon (Beta)",
              "Cid & Beta & Epsilon (Beta)"
          ],
          "name_mirrors": [
              {
                  "base": "Natsume Kafka",
                  "alt": "Natsume"
              },
              {
                  "base": "??? (Natsume Kafka)",
                  "alt": "??? (Natsume)"
              },
              {
                  "base": "Beta & Zeta (Beta)",
                  "alt": "Zeta & Beta (Beta)"
              }
          ],
          "group": "Shadow Garden",
          "subgroup": "Seven Shadows",
          "order": 2,
          "url": {
              "base": "characterIcons/BetaIcon.webp",
              "Natsume Kafka": "characterIcons/NatsumeKafkaIcon.webp"
          }
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
          "order": 3,
          "url": "characterIcons/GammaIcon.webp"
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
          "order": 4,
          "url": "characterIcons/DeltaIcon.webp"
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
              "Cid & Beta & Epsilon (Epsilon)",
              "Gamma & Epsilon & Eta (Epsilon)",
              "Epsilon & Chi & Omega (Epsilon)"
          ],
          "name_mirrors": [
              {
                  "base": "Gamma & Epsilon & Eta (Epsilon)",
                  "alt": "Gamma& Epsilon & Eta (Epsilon)"
              }
          ],
          "group": "Shadow Garden",
          "subgroup": "Seven Shadows",
          "order": 5,
          "url": {
              "base": "characterIcons/EpsilonIcon.webp",
              "Shiron": "characterIcons/ShironIcon.webp"
          }
      },
      {
          "name": "Zeta",
          "name_variants": [
              "Zetan",
              "??? (Zeta)",
              "Everyone (Zeta)",
              "None (Zeta)",
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
                  "base": "Beta & Zeta (Zeta)",
                  "alt": "Zeta & Beta (Zeta)"
              }
          ],
          "group": "Shadow Garden",
          "subgroup": "Seven Shadows",
          "order": 5,
          "url": "characterIcons/ZetaIcon.webp"
      },
      {
          "name": "Eta",
          "name_variants": [
              "??? (Eta)",
              "Everyone (Eta)",
              "Seven Shadows (Eta)",
              "Alpha & Eta (Eta)",
              "Beta & Eta (Eta)",
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
          "order": 7,
          "url": "characterIcons/EtaIcon.webp"
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
          "order": 1,
          "url": "characterIcons/IotaIcon.webp"
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
          "order": 2,
          "url": "characterIcons/LambdaIcon.webp"
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
          "order": 2,
          "url": "characterIcons/NuIcon.webp"
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
              "No. 111 & No. 122 (No. 111)",
              "Epsilon & Chi & Omega (Chi)"
          ],
          "name_mirrors": [],
          "group": "Shadow Garden",
          "subgroup": "Numbers",
          "order": 4,
          "url": "characterIcons/ChiIcon.webp"
      },
      {
          "name": "Omega",
          "name_variants": [
              "No. 122",
              "Characterised Gamma",
              "Characterised Zeta",
              "Possessed (Omega)",
              "Chi & Omega (Omega)",
              "No. 111 & No. 122 (No. 122)",
              "Epsilon & Chi & Omega (Omega)"
          ],
          "name_mirrors": [],
          "group": "Shadow Garden",
          "subgroup": "Numbers",
          "order": 5,
          "url": "characterIcons/OmegaIcon.webp"
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
          "order": 2,
          "url": "characterIcons/VictoriaIcon.webp"
      },
      {
          "name": "No. 664",
          "name_variants": [
              "No. 664 & No. 665 (No. 664)",
              "No. 664 & No. 665 & No. 666 (No. 664)"
          ],
          "name_mirrors": [],
          "group": "Shadow Garden",
          "subgroup": "Members",
          "order": 2,
          "url": "characterIcons/664Icon.webp"
      },
      {
          "name": "No. 665",
          "name_variants": [
              "No. 664 & No. 665 (No. 665)",
              "No. 664 & No. 665 & No. 666 (No. 665)"
          ],
          "name_mirrors": [],
          "group": "Shadow Garden",
          "subgroup": "Members",
          "order": 3,
          "url": "characterIcons/665Icon.webp"
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
          "order": 1,
          "url": "characterIcons/AnneroseNichtsehenIcon.webp"
      },
      {
          "name": "Rude",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Velgalta",
          "subgroup": "",
          "order": 2,
          "url": ""
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
          "order": 1,
          "url": ""
      },
      {
          "name": "Benimaru",
          "name_variants": [
              "Shadow & Benimaru (Benimaru)"
          ],
          "name_mirrors": [
              {
                  "base": "Shadow & Benimaru (Benimaru)",
                  "alt": "Shadow&Benimaru (Benimaru)"
              }
          ],
          "group": "Others",
          "subgroup": "Fire Force",
          "order": 1,
          "url": "characterIcons/BenimaruIcon.webp"
      },
      {
          "name": "Shinra",
          "name_variants": [
              "Shinra & Tamaki (Shinra)"
          ],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Fire Force",
          "order": 2,
          "url": "characterIcons/ShinraIcon.webp"
      },
      {
          "name": "Tamaki",
          "name_variants": [
              "Shinra & Tamaki (Tamaki)"
          ],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Fire Force",
          "order": 1,
          "url": "characterIcons/TamakiIcon.webp"
      },
      {
          "name": "Arthur Pencilgon",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Shangri-La Frontier",
          "order": 1,
          "url": "characterIcons/ArthurPencilgonIcon.webp"
      },
      {
          "name": "OiKatzo",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Shangri-La Frontier",
          "order": 2,
          "url": "characterIcons/OiKatzoIcon.webp"
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
          "order": 3,
          "url": "characterIcons/SunrakuIcon.webp"
      },
      {
          "name": "Wethermon",
          "name_variants": [
              "??? (Wethermon)"
          ],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Shangri-La Frontier",
          "order": 4,
          "url": ""
      },
      {
          "name": "Aurora",
          "name_variants": [
              "Witch Claire",
              "??? (Witch Claire)",
              "Massive Mound of Magic",
              "3 People (Aurora)"
          ],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "",
          "order": 1,
          "url": "characterIcons/AuroraIcon.webp"
      },
      {
          "name": "Beatrix",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "",
          "order": 2,
          "url": "characterIcons/BeatrixIcon.webp"
      },
      {
          "name": "Nina",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "",
          "order": 2,
          "url": "characterIcons/NinaIcon.webp"
      },
      {
          "name": "Goldy Gilded",
          "name_variants": [
              "Goldy & Quinton (Goldy)"
          ],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "",
          "order": 4,
          "url": "characterIcons/GoldyGildedIcon.webp"
      },
      {
          "name": "Quinton",
          "name_variants": [
              "Goldy & Quinton (Quinton)"
          ],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "",
          "order": 5,
          "url": "characterIcons/QuintonIcon.webp"
      },
      {
          "name": "Yukime",
          "name_variants": [
              "John Smith & Yukime (Yukime)"
          ],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "",
          "order": 6,
          "url": "characterIcons/YukimeIcon.webp"
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
          "order": 1,
          "url": "characterIcons/OlivierIcon.webp"
      },
      {
          "name": "Freya",
          "name_variants": [
              "??? (Freya)",
              "Alpha & Freya (Freya)"
          ],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Apocrypha",
          "order": 2,
          "url": "characterIcons/FreyaIcon.webp"
      },
      {
          "name": "Lili",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Apocrypha",
          "order": 3,
          "url": "characterIcons/LiliIcon.webp"
      },
      {
          "name": "Duet",
          "name_variants": [
              "Beta Look-alike"
          ],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Apocrypha",
          "order": 4,
          "url": "characterIcons/DuetIcon.webp"
      },
      {
          "name": "Sarasa",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Apocrypha",
          "order": 5,
          "url": "characterIcons/SarasaIcon.webp"
      },
      {
          "name": "Pente",
          "name_variants": [
              "Epsilon Look-alike"
          ],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Apocrypha",
          "order": 6,
          "url": "characterIcons/PenteIcon.webp"
      },
      {
          "name": "Nonna",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Apocrypha",
          "order": 7,
          "url": "characterIcons/NonnaIcon.webp"
      },
      {
          "name": "Rouge",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Apocrypha",
          "order": 8,
          "url": "characterIcons/RougeIcon.webp"
      },
      {
          "name": "Fenrir",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Knights of Rounds",
          "order": 1,
          "url": "characterIcons/FenrirIcon.webp"
      },
      {
          "name": "Mordred",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Knights of Rounds",
          "order": 2,
          "url": "characterIcons/MordredIcon.webp"
      },
      {
          "name": "Petos",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Knights of Rounds",
          "order": 3,
          "url": "characterIcons/PetosIcon.webp"
      },
      {
          "name": "Jack Nelson",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Knights of Rounds",
          "order": 4,
          "url": "characterIcons/JackNelsonIcon.webp"
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
          "order": 5,
          "url": "characterIcons/SergeyGormanIcon.webp"
      },
      {
          "name": "Lutheran Barnett",
          "name_variants": [
              "Sir Gaunt"
          ],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Knights of Rounds",
          "order": 6,
          "url": {
              "base": "characterIcons/LutheranBarnettIcon.webp",
              "Sir Gaunt": "characterIcons/SirGauntIcon.webp"
          }
      },
      {
          "name": "Issac",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Members",
          "order": 1,
          "url": "characterIcons/IssacIcon.webp"
      },
      {
          "name": "Gettan",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Members",
          "order": 2,
          "url": "characterIcons/GettanIcon.webp"
      },
      {
          "name": "Grease",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Members",
          "order": 3,
          "url": "characterIcons/GreaseIcon.webp"
      },
      {
          "name": "Perv Asshat",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Members",
          "order": 4,
          "url": "characterIcons/PervAsshatIcon.webp"
      },
      {
          "name": "Zenon Griffey",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Members",
          "order": 5,
          "url": "characterIcons/ZenonGriffeyIcon.webp"
      },
      {
          "name": "Chuvi",
          "name_variants": [
              "??? (Chuvi)"
          ],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Children",
          "order": 1,
          "url": ""
      },
      {
          "name": "Dark Spider",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Children",
          "order": 2,
          "url": ""
      },
      {
          "name": "Kanen",
          "name_variants": [
              "??? (Kanen)"
          ],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Children",
          "order": 3,
          "url": ""
      },
      {
          "name": "Kouadoi",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Children",
          "order": 4,
          "url": "characterIcons/KouadoiIcon.webp"
      },
      {
          "name": "Jean",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Children",
          "order": 5,
          "url": ""
      },
      {
          "name": "Maximilian",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Children",
          "order": 6,
          "url": ""
      },
      {
          "name": "Nanigashi",
          "name_variants": [
              "??? (Nanigashi)"
          ],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Children",
          "order": 7,
          "url": ""
      },
      {
          "name": "Rex",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Children",
          "order": 8,
          "url": "characterIcons/RexIcon.webp"
      },
      {
          "name": "Willow",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Children",
          "order": 9,
          "url": ""
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
          "order": -1,
          "url": ""
      },
      {
          "name": "Cult Member A",
          "name_variants": [
              "Cult Member A & B (Cult Member A)"
          ],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Generic",
          "order": -1,
          "url": ""
      },
      {
          "name": "Cult Member B",
          "name_variants": [
              "Cult Member A & B (Cult Member B)"
          ],
          "name_mirrors": [],
          "group": "Cult of Diablos",
          "subgroup": "Generic",
          "order": -1,
          "url": ""
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
          "order": 1,
          "url": ""
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
          "order": 1,
          "url": ""
      },
      {
          "name": "Claudia",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Lawless City",
          "order": 1,
          "url": "characterIcons/ClaudiaIcon.webp"
      },
      {
          "name": "Juggernaut",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Lawless City",
          "order": 2,
          "url": "characterIcons/JuggernautIcon.webp"
      },
      {
          "name": "Marie",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Lawless City",
          "order": 3,
          "url": "characterIcons/MarieIcon.webp"
      },
      {
          "name": "Kana",
          "name_variants": [
              "Natsu & Kana (Kana)"
          ],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Lawless City",
          "order": 3,
          "url": "characterIcons/KanaIcon.webp"
      },
      {
          "name": "Natsu",
          "name_variants": [
              "Natsu & Kana (Natsu)"
          ],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Lawless City",
          "order": 4,
          "url": "characterIcons/NatsuIcon.webp"
      },
      {
          "name": "White Demon",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Lawless City",
          "order": 5,
          "url": "characterIcons/WhiteDemonIcon.webp"
      },
      {
          "name": "Garter Kikuchi",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Major Corporate Alliance",
          "order": 1,
          "url": "characterIcons/GarterKikuchiIcon.webp"
      },
      {
          "name": "Elisabeth",
          "name_variants": [
              "3 People (Elisabeth)"
          ],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Vampires",
          "order": 1,
          "url": "characterIcons/ElisabethIcon.webp"
      },
      {
          "name": "Crimson",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Vampires",
          "order": 2,
          "url": "characterIcons/CrimsonIcon.webp"
      },
      {
          "name": "Mary",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Others",
          "subgroup": "Vampires",
          "order": 3,
          "url": "characterIcons/MaryIcon.webp"
      },
      {
          "name": "Customer",
          "name_variants": [
              "??? (Customer)"
          ],
          "name_mirrors": [],
          "group": "Generic",
          "subgroup": "Business",
          "order": -1,
          "url": ""
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
          "order": -1,
          "url": ""
      },
      {
          "name": "Joker",
          "name_variants": [
              "??? (Joker)"
          ],
          "name_mirrors": [],
          "group": "Generic",
          "subgroup": "Casino",
          "order": 1,
          "url": ""
      },
      {
          "name": "King",
          "name_variants": [
              "??? (King)"
          ],
          "name_mirrors": [],
          "group": "Generic",
          "subgroup": "Casino",
          "order": 2,
          "url": ""
      },
      {
          "name": "Rose Oriana",
          "name_variants": [
              "No. 666",
              "Rose & Alexia (Rose)",
              "No. 664 & No. 665 & No. 666 (No. 666)"
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
          "order": 1,
          "url": {
              "base": "characterIcons/RoseOrianaIcon.webp",
              "No. 666": "characterIcons/666Icon.webp"
          }
      },
      {
          "name": "Kevin",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Oriana",
          "subgroup": "Oriana Kingdom",
          "order": 1,
          "url": "characterIcons/KevinIcon.webp"
      },
      {
          "name": "Margaret",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Oriana",
          "subgroup": "Oriana Kingdom",
          "order": 2,
          "url": "characterIcons/MargaretIcon.webp"
      },
      {
          "name": "Raphael Oriana",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Oriana",
          "subgroup": "Oriana Kingdom",
          "order": 3,
          "url": "characterIcons/RaphaelOrianaIcon.webp"
      },
      {
          "name": "Reina Oriana",
          "name_variants": [],
          "name_mirrors": [],
          "group": "Oriana",
          "subgroup": "Oriana Kingdom",
          "order": 4,
          "url": "characterIcons/ReinaOrianaIcon.webp"
      },
      {
          "name": "Mercenary A",
          "name_variants": [
              "??? (Mercenary A)"
          ],
          "name_mirrors": [],
          "group": "Generic",
          "subgroup": "Mercenaries",
          "order": 1,
          "url": ""
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
          "order": 1,
          "url": "characterIcons/MistDragonIcon.webp"
      },
      {
          "name": "Shishiodoshi",
          "name_variants": [
              "Shishi(?)"
          ],
          "name_mirrors": [],
          "group": "Generic",
          "subgroup": "Monsters",
          "order": -1,
          "url": ""
      }
  ]
}

// let setDoc = db.collection('data').doc('an_s2_e8').set(data['s2']);

// let setDoc = db.collection('data').doc('ssc_p3_c3-6').set(data['p3']['c3-6']);

//let setDoc = db.collection('data').doc('apo_p1_c1-2').set(data['p1']['c1-2']);

// let setDoc = db.collection('data').doc('es_bheif').set(data['bheif']);

// let setDoc = db.collection('data').doc('ln_v5').set(data['v5']);

// let setDoc = db.collection('data').doc('an_s1_e1').set(data['s1']);

// let setDoc = db.collection('data').doc('info').set(data);

let setDoc = db.collection('data').doc('characters').set(data);

// let setDoc = db.collection('data').doc('medium_images').set(data);

// let setDoc = db.collection('data').doc('dropdowns').set(data);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
