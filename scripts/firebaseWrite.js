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
            }
        },
        "Midgar": {
            "order": 2,
            "Midgary Academy": {
                "order": 1,
                "characters": []
            },
            "Crimson Order": {
                "order": 2,
                "characters": []
            },
            "General": {
                "order": 3,
                "characters": ["Captain's Daughter", "Duke's Second Son"]
            }
        },
        "Cult of Diablos": {
            "order": 3,
            "Generic": {
                "order": 1,
                "characters": ["Cult Leader", "Cult Member Boss", "Cult Member C", "Cult Members", "Cultist", "Cultist A", "Cultist B", "Cultist C", "Cultist D", "Cultist E", "Cultist F"]
            }
        },
        "Velgalta": {
            "order": 4,
            "General": {
                "order": 1,
                "characters": []
            }
        },
        "Others": {
            "order": 5,
            "Earth": {
                "order": 1,
                "characters": ["Akane's Butler"]
            },
            "Lawless City": {
                "order": 2,
                "characters": []
            },
            "Shangri-La Frontier": {
                "order": 3,
                "characters": []
            },
            "Templars": {
                "order": 4,
                "characters": []
            },
            "Vampires": {
                "order": 5,
                "characters": []
            }
        },
        "Generic": {
            "order": 8,
            "General": {
                "order": 1,
                "characters": ["Announcer", "Attendees", "Audience", "Bookie", "Broadcast", "Church Member", "Civilian", "Coworker", "Crowd", "Disciple", "Elven Coachwoman", "Elven Guardswoman"]
            },
            "Bandits": {
                "order": 2,
                "characters": ["Bandit", "Bandit A", "Bandit B", "Bandit Boss"]
            },
            "Business": {
                "order": 3,
                "characters": ["Branch Manager", "Cake Shop Assistant", "Clerk"]
            },
            "Casino": {
                "order": 4,
                "characters": ["Dealer"]
            },
            "Children": {
                "order": 5,
                "characters": ["Boy", "Boy A", "Boy B", "Boy C", "Boys", "Children"]
            },
            "Committee": {
                "order": 6,
                "characters": ["Boy Cmte. Member A", "Boy Cmte. Member B", "Committee Member", "Committee Members", "Committee Person"]
            },
            "Deceased": {
                "order": 7,
                "characters": ["Deceased Child", "Deceased Elderly", "Deceased Man", "Deceased Woman"]
            },
            "Kingdom": {
                "order": 8,
                "characters": ["Aristocrat", "Aristocrats", "Civil Servant", "Civil Servants"]
            },
            "Knights": {
                "order": 9,
                "characters": ["Dark Knight"]
            },
            "Monsters": {
                "order": 10,
                "characters": ["Alpha Wolf", "Basilisk", "Boar", "Boss Monster"]
            },
            "News": {
                "order": 11,
                "characters": ["Editor"]
            },
            "School": {
                "order": 12,
                "characters": ["Classmate"]
            },
            "Therianthropes": {
                "order": 13,
                "characters": ["Bearded Participant", "Bearded T-thrope"]
            }
        }
    },
    "characters":
    [
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
            "name_variants": ["Alexia", "??? (Alexia Midgar)", "Alexia & Claire (Alexia)", "Alexia Midgar & Natsume Kafka (Alexia Midgar)", 
            "Sherry & Alexia (Alexia)"],
            "name_mirrors": [{"base": "??? (Alexia Midgar)", "alt": "????? (Alexia Midgar"}, {"base": "Sherry & Alexia (Alexia)", "alt":"Shelly and Alexia (Alexia)"}],
            "group": "Midgar",
            "subgroup": "Midgar Academy",
            "order": 1
        },
        {
            "name": "Claire Kagenou",
            "name_variants": ["Claire", "??? (Claire Kagenou)", "Alexia & Claire (Claire)"],
            "name_mirrors": [],
            "group": "Midgar",
            "subgroup": "Midgar Academy",
            "order": 2
        },
        {
            "name": "Marco Granger",
            "name_variants": ["Dark Knight Trainee"],
            "name_mirrors": [],
            "group": "Midgar",
            "subgroup": "Crimson Order",
            "order": 2
        },
        {
            "name": "Cid Kagenou",
            "name_variants": ["Cid", "Shadow", "Mundane Mann", "John Smith", "Minoru Kageno", "Stylish Bandit Slayer", "Stylish Ruffian Slayer", "Nuru", "??? (Cid Kagenou)", "??? (Shadow)", "??? (Minoru Kageno)", 
            "??? (Stylish Bandit Slayer)", "??? (Nuru)", "None (Cid Kagenou)", "Cid & Sunraku (Cid)", "John Smith & Yukime (John Smith)"],
            "name_mirrors": [{"base": "??? (Shadow)", "alt": "???? (Shadow)"}],
            "group": "Shadow Garden",
            "subgroup": "",
            "order": 1
        },
        {
            "name": "Alpha",
            "name_variants": ["??? (Alpha)", "Everyone (Alpha)", "None (Alpha)", "Seven Shadows (Alpha)", "Alpha & Beta (Alpha)", 
            "Alpha & Eta (Alpha)", "Alpha & Gamma (Alpha)", "Alpha & Nu (Alpha)", "Alpha & Zeta (Alpha)", "Everyone (Alpha)"],
            "name_mirrors": [],
            "group": "Shadow Garden",
            "subgroup": "Seven Shadows",
            "order": 1
        },
        {
            "name": "Beta",
            "name_variants": ["Natsume Kafka", "??? (Beta)", "Everyone (Beta)", "None (Beta)", "Seven Shadows (Beta)", "Fictional Shadow", "Fictional Zenon", "Alpha & Beta (Beta)", 
            "Beta & Epsilon (Beta)", "Beta & Gamma (Beta)", "Beta & Zeta (Beta)", "Zeta & Beta (Beta)", "Beta & Delta & Zeta (Beta)", "Beta & Gamma & Epsilon (Beta)"],
            "name_mirrors": [{"base": "Natsume Kafka", "alt": "Natsume"}],
            "group": "Shadow Garden",
            "subgroup": "Seven Shadows",
            "order": 2
        },
        {
            "name": "Delta",
            "name_variants": ["Deltan", "??? (Delta)", "Everyone (Delta)", "Seven Shadows (Delta)", "Delta & Zeta (Delta)", "Beta & Delta & Zeta (Delta)"],
            "name_mirrors": [],
            "group": "Shadow Garden",
            "subgroup": "Seven Shadows",
            "order": 4
        },
        {
            "name": "Epsilon",
            "name_variants": ["Shiron", "??? (Epsilon)", "Everyone (Epsilon)", "Seven Shadows (Epsilon)", "Beta & Epsilon (Epsilon)", "Gamma & Epsilon (Epsilon)", "Zeta & Epsilon (Epsilon)",
            "Gamma & Epsilon & Eta (Epsilon)", "Beta & Gamma & Epsilon (Epsilon)"],
            "name_mirrors": [{"base": "Gamma & Epsilon & Eta (Epsilon)", "alt": "Gamma& Epsilon & Eta (Epsilon)"}],
            "group": "Shadow Garden",
            "subgroup": "Seven Shadows",
            "order": 5
        },
        {
            "name": "Chi",
            "name_variants": ["No. 111", "Karen", "??? (Karen)", "Characterised Cult Member", "Characterised Eta", "Characterised Shadow", "Chi & Omega (Chi)"],
            "name_mirrors": [],
            "group": "Shadow Garden",
            "subgroup": "Numbers",
            "order": 4
        },
        {
            "name": "Annerose Nichtsehen",
            "name_variants": ["Annerose", "None (Annerose)"],
            "name_mirrors": [],
            "group": "Velgalta",
            "subgroup": "",
            "order": 1
        },
        {
            "name": "Curie Oso",
            "name_variants": [],
            "name_mirrors": [{"base": "Curie Oso", "alt": "Curious Noblewoman"}],
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
            "name": "Aurora",
            "name_variants": ["??? (Aurora)", "Massive Mound of Magic", "3 People (Aurora)"],
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
            "name": "Duet",
            "name_variants": ["Beta Look-alike"],
            "name_mirrors": [],
            "group": "Others",
            "subgroup": "Apocrypha",
            "order": -1
        },
        {
            "name": "Cult Member",
            "name_variants": ["??? (Aurora)", "3 People (Aurora)"],
            "name_mirrors": [{"base": "Cult Member", "alt": "Bandit?"}],
            "group": "Cult of Diablos",
            "subgroup": "Generic",
            "order": -1
        },
        {
            "name": "Cult Member A",
            "name_variants": ["Cult Member A (Cult Member A & B (Cult Member A))"],
            "name_mirrors": [],
            "group": "Cult of Diablos",
            "subgroup": "Generic",
            "order": -1
        },
        {
            "name": "Cult Member B",
            "name_variants": ["Cult Member B (Cult Member A & B (Cult Member B))"],
            "name_mirrors": [],
            "group": "Cult of Diablos",
            "subgroup": "Generic",
            "order": -1
        },
        {
            "name": "Bishop Drake",
            "name_variants": [],
            "name_mirrors": [{"base": "Bishop Drake", "alt": "Bishop of Orum"}],
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
            "name": "Elisabeth",
            "name_variants": ["3 People (Elisabeth)"],
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
            "name": "Customer",
            "name_variants": ["??? (Customer)"],
            "name_mirrors": [],
            "group": "Generic",
            "subgroup": "Business",
            "order": -1
        },
        {
            "name": "Dog T-thrope Priest",
            "name_variants": [],
            "name_mirrors": [{"base": "Dog T-thrope Priest", "alt": "Dog T.thrope Priest"}],
            "group": "Generic",
            "subgroup": "Therianthropes",
            "order": -1
        }
]
}
//let setDoc = db.collection('data').doc('an_s1_e1').set(data['s1']);

//let setDoc = db.collection('data').doc('ssc_p3_c3-4').set(data['p3']['c3-4']);

//let setDoc = db.collection('data').doc('apo_p1_c1-1').set(data['p1']['c1-1']);

// let setDoc = db.collection('data').doc('es_dss').set(data['dss']);

// let setDoc = db.collection('data').doc('ln_v5').set(data['v5']);

// let setDoc = db.collection('data').doc('an_s101').set(data['kj1']);

// let setDoc = db.collection('data').doc('info').set(data);

let setDoc = db.collection('data').doc('characters').set(data);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
