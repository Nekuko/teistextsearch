const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "adswy": {
        "e1": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So summer vacation's almost over...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1jH8LQm9cS8G1jJUUp2HKGQrCP2-6sbnZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Well, I did spend most of it getting pampered to death.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1NPoh310gEEDhMs5tKvKj_94GNma6Kyha/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Gotta say though, desert island life was a blast. Nothin' wrong with a little adventure, especially on summer break.",
                "line": 3,
                "url": "https://drive.google.com/file/d/12_8u_8hx_dsflkCekFQDVVyrOAkEt-1p/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh, that reminds me, Alpha gave me an invitation from Gamma. What's it say\u2014",
                "line": 4,
                "url": "https://drive.google.com/file/d/1t1ELxn1MZEEZZnd2AoXi0t5RWOXAfbK2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(\"Preparations for the event I mentioned previously are complete. Thus, I request your attendance this evening.\" Okay.)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1IWc3rnmWWoYN-nLjNprcbA7Ev-RrL4rv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Actually, I don't know too much about events in this world. But if they going to the trouble to invite me like this, I bet it'll be fun.)",
                "line": 6,
                "url": "https://drive.google.com/file/d/1C5Bjtcp03R4mM6Di_nirzyjL-BRxtST2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(What if its some crazy hero-selection ceremony where people draw a sword stuck in a stone?!)",
                "line": 7,
                "url": "https://drive.google.com/file/d/1jctBaGyEsaX2OZtDdn_VTLXZqlBMh_Qg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Yeah! That'd be rad! As classic as it comes!)",
                "line": 8,
                "url": "https://drive.google.com/file/d/1sOWBkabXxf3Qq-qDF5x1N4ec-qidYtSL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Heh... The birth of a future hero is something I'm definitely not gonna miss out on!)",
                "line": 9,
                "url": "https://drive.google.com/file/d/1WIjPP4hOrQUMbNCZsui0lhNLo2Qw2WOC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 10,
                "url": "https://drive.google.com/file/d/1O-Sp3delsElkc1joXKNTPxXUHKH7fRBr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(A night market with lines of stalls, a big tower standing in the middle of the space, paper lanterns hanging everywhere...)",
                "line": 11,
                "url": "https://drive.google.com/file/d/1lZBGEdcOGEtIFBCzHV3sjZjNEEoi8Flw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(This is a summer festival...! A place for lantern festival dances! What happened to crowning a new hero?!)",
                "line": 12,
                "url": "https://drive.google.com/file/d/1gvUUrlmSXBlu9gvhpG6cCK4EtO6k5HYS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "N-Now that think about it, maybe I did talk about lantern dances a bit...",
                "line": 13,
                "url": "https://drive.google.com/file/d/1JYcci6KVa4978F-2dEiwwCMo3-YWjBRy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Still, how on earth did they get the folksy feel of a summer festival down so perfectly...)",
                "line": 14,
                "url": "https://drive.google.com/file/d/10LwqtpGyRHf9S8PyfTYIeZWX_6zHR2Pa/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "...My good sir?",
                "line": 15,
                "url": "https://drive.google.com/file/d/1OP8oBFRzykfqDievXtq3VrYwzPgS0XTr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hm?",
                "line": 16,
                "url": "https://drive.google.com/file/d/16m-l5mIeA9DBnxWfLXZknbC9FtmDnGX7/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Ah, I had a feeling it was you. To think I would find you here.",
                "line": 17,
                "url": "https://drive.google.com/file/d/115YMrpv8HctvOg65A780FoV2gEh5h5Hq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wait, I know you... You're the Blood Qu\u2014",
                "line": 18,
                "url": "https://drive.google.com/file/d/1uFGN9NYwMKM7e_mLQgcHd_vpq_V3V8Iw/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Please, do not speak that name. It's ill-suited to such a delightful evening as this.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1OkDkLkPzKuda1viyeP0AZk9tBoyBn0hd/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "For today, I am simply Elisabeth, a harmless citizen enjoying a pleasurable outing.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1Y59Dq2nVb04MZxe2xFBqula_ReQZ57AQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Ah, I get it. So you're going incognito.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1iBSeauN-qrIku9_B1eOPsmuxi5PkeQfE/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Are you not as well?",
                "line": 22,
                "url": "https://drive.google.com/file/d/16ZL00d1ClWyjmpby8buMtT82wUwp704g/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Guess you got me there.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1Yxfm7OPRWsSdhPaPEhsl0l1yvyKnr09E/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Still, I admit I am surprised. The festivals of this age are so different. Another reminder of how much time has passed while I slept.",
                "line": 24,
                "url": "https://drive.google.com/file/d/14v158lHg1VwStk6yU_cLK_v_gXokMUgw/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Why look, good sir. Those lanterns are made of paper. The way the light wavers is very pretty.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1mFV2TLD9Aq8pQfnuaUigTVzFBtpv3owI/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "You would never find cultural refinement and lively crowds like this 1,000 years ago.",
                "line": 26,
                "url": "https://drive.google.com/file/d/13NfZE7cw8HkuD2GeEcErm94Ca7T9_eK2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hahaha...",
                "line": 27,
                "url": "https://drive.google.com/file/d/1AYOlamQ0WvP4eEsZIjFCqDjT24HbW8BL/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "So, well...what do you think?",
                "line": 28,
                "url": "https://drive.google.com/file/d/1uvHdtBl1Eqt45m38JGDK7o6ozhWYOGHS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh? Oh, yeah, it's really lively.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1Dy84GM-LIXjIY4X9x0QC2IvL474uF8dQ/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "I did not mean the festival. Oh, you are so cruel.",
                "line": 30,
                "url": "https://drive.google.com/file/d/18ngKFvJZcoIdC0hpj-57MRI6W4czlIC9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Cruel...? How so?",
                "line": 31,
                "url": "https://drive.google.com/file/d/1X3oWE2YtE7zi6Ez6rwi2v4WSIGRpd-Nc/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "How can you see a woman all dressed up and say nothing?",
                "line": 32,
                "url": "https://drive.google.com/file/d/1SbI28oezivPd2yj81AnZ8-dajS8aWpwI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh, you mean that yukata? Where in the world did you find one?",
                "line": 33,
                "url": "https://drive.google.com/file/d/1K12TyzDWZU7lAeJJHM7u84q5TYsK-38O/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "I popped by Mitsugoshi on the way here. They truly stock the most wonderful things. I quite enjoyed my time there.",
                "line": 34,
                "url": "https://drive.google.com/file/d/19ITkrR4yVKsTO4NcQMrJZXeJKhhGeqTh/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "This attire is very uncommon, no? I simply had to have it, and even asked if I might wear it on the spot... So, what do you think...?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1YZ400MbFp6bLVSr_Jy8Qz5byHBD1chTe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "You look nice.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1ww7diAYs8IGnBgsKLyGC4zWgVGJIC60L/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Heehee, thank you, my good sir. A compliment from a gentleman while dressed for a special occasion is all the more welcome, don't you think?",
                "line": 37,
                "url": "https://drive.google.com/file/d/1A0r8s9F3qiNRJHXYapQQWznRd0Er_6Aw/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Then...how about me?",
                "line": 38,
                "url": "https://drive.google.com/file/d/1ZiPk9wGBF7Jq3MqPOvoDpWEdE18kxqNZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh yeah, real nice.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1igsHMjY50TADihGBtAUeGDhNvDemWU-r/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Wait, what? Who said that...?",
                "line": 40,
                "url": "https://drive.google.com/file/d/1ut3nXsFBe7maRQot63dWShsr1r1zLPtW/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "It wasn't me.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1tcfzCUEKWGNBfSVh6ZvvBRax1VGNKaqR/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "How unkind... You didn't even look.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1_aZafjgom4RHJXPFleQmqwrvOVP19auL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "N-No way...",
                "line": 43,
                "url": "https://drive.google.com/file/d/1YcoMfXCvveGl8eVhgdZgu5QbI0s4Kqxv/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Good evening, Mister.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1bbiiuv4yfnCZma4D9xEFUCpzGjXnrK80/view?usp=drivesdk"
            }
        ],
        "e2": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Violet...?!",
                "line": 1,
                "url": "https://drive.google.com/file/d/10JEXVl4gbpk8E2q_M2WhSkcKgqyNiPn1/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Oh, I recognize you from before...",
                "line": 2,
                "url": "https://drive.google.com/file/d/1GhGCK1QuIeDUGVrCEap1Oq8FtxzweTI4/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Long time no see.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1ISj0N_tlq6gl15tku_5k3jS4d2o5QA59/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...Huh? Do these two know each other? Never would've expected that.)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1axxOSO_DEW8k54MLpBtnQgX5_hnRI9cw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So, why are you here, Violet?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1b3gcNmKEAdq7mivvDrZntj7rsFZoRD7K/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I don't quite know myself... Perhaps this event has something to do with it.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1qUeLHuAnfSAsErWIApI5RosfXTWMLGjy/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "It's as if these odd sounds and lights beckoned me. And then I was here, and I found you two.",
                "line": 7,
                "url": "https://drive.google.com/file/d/16SR_EcfWRBzNz4KOhcpnT7OzchEq6OQB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh...",
                "line": 8,
                "url": "https://drive.google.com/file/d/1iqnDbICvnn-5NuIwUGullEZvV6wO0BMF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Wait, doesn't Obon have something to with ancestors coming back to vist?)",
                "line": 9,
                "url": "https://drive.google.com/file/d/1xS-IX5-rO-6x7wO0OQJMCxJt_BLv-cBH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Maybe that's why Violet was drawn here, too.)",
                "line": 10,
                "url": "https://drive.google.com/file/d/15xgI-hUtUJ_1HE27gkgPj0Q5XMBlCh_7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Aw man, they didn't have to copy that part, too! Guessing they probably didn't mean to, though!)",
                "line": 11,
                "url": "https://drive.google.com/file/d/1GnpPK7D6ix9xFHLtB1j7-oxA2YaCxc43/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Do you have any idea as to why, good sir?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1TQslQVRsbwHJWPAzfnsrZYihKFzx1fmB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Nope, not at all. No way I'd know anything.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1tVI-fIa5gBNCnFknOJd9oDZhcjiT4702/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Hehe, well, I'll take your word for it.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1tw-vQc_wmiky-hGykvzWkrI37xLVLGFo/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "At any rate, I'm here. But I'm afraid my little trip astray is temporary... I can't stay here forever.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1QHBk3u97yhXy_-rbKv7dPh_onG2GwI67/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "You have to go back right away?",
                "line": 16,
                "url": "https://drive.google.com/file/d/1yir47pnEFUnaBRLKw_0Qjy8YOO2rocU-/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Well, I don't know. Personally, I'd like to have a little fun first, since I'm here and all.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1tnMku8Skm0Pyau2ySQY91BFXOPo4oYHy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(She sure doesn't seem too concerned... Not that it has anything to do with me, though.)",
                "line": 18,
                "url": "https://drive.google.com/file/d/1XlgTRJ0AugTT8Ix5BzEU31BROGZZMX7-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Okay, well, enjoy the summer festival.",
                "line": 19,
                "url": "https://drive.google.com/file/d/15PMV9PkQS5rQJ7q3rTYVk1gWhkIBGe3A/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "My, what a cold thing to say. I'd say it's fate that we met here. What's the harm in having a look around together?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1a54UNlIoF74XR58B1Ypxdln2x-nsWV8Q/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh...?",
                "line": 21,
                "url": "https://drive.google.com/file/d/12HnM0_ShM5GyXSybxVlexOzB5EQldigH/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Now wait just a moment. You say it's fate that you met here. Well, I believe that it's fate that I encountered him as well.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1wr_Myo4WFT7v25xmupynWXv6ytpMxRAr/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Being unfamiliar with modern customs as I am...I was hoping you would show me around, my dear sir. Please, won't you honor me with your company?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1Tj34LIrDa0KYDoT-ym21iJufVwL7Uuro/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Uhhh... Personally, I think we should all go our separate ways. We'd stick out like a sore thumb as a group...",
                "line": 24,
                "url": "https://drive.google.com/file/d/1nLVsvJq8E7zs_OSQmjdWi8NQ_O3buNes/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "You have a point... But I think more good would come of us being together.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1n2rp4WSTMR5uFsDhVK0uULvxL9K1l6bZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I dunno about that...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1lzsxu_N2QEPy2JwCa0MKtrkZyrQpITxC/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "You don't see it? There are many souls of the departed gathering in the area. I'm sure they were drawn here like me.",
                "line": 27,
                "url": "https://drive.google.com/file/d/17JhqN-ZUMTTPHXGgYedUPJVNC8hle2A9/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I don't think anyone has noticed yet...but if these souls remain here, I can imagine it might lead to trouble.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1kjTI8LndbRh0p4VvsPZTXZ7pK77Cmwj5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So what you're saying is...they could turn into evil spirits or something?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1K3HeTqrJ1HfUjwJr03laj4vjgfEj3bYn/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Yes, that's highly likely. If all the souls that have wandered were to turn malevolent and lash out...I'm certain the damage would be grievous.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1D09R0mnvkgJMr5jTtNZfqPbMYJBtoAuF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "There's that many of them?",
                "line": 31,
                "url": "https://drive.google.com/file/d/1UCetCg14QOsBYYRWFfBWmOH-DPvoDVds/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "They're everywhere. There, you see? That man over there is one...",
                "line": 32,
                "url": "https://drive.google.com/file/d/1W6RzdIqI_hOZbgl_USPBlEGmCM_dXpRo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(He looks pretty normal at a glance... But I do kinda pick up something weird about his magic. Maybe he's a dead soul.)",
                "line": 33,
                "url": "https://drive.google.com/file/d/1I-OXmaPS2cDW-P0Pp9DQ7oq3q7CfKj1P/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "It's as you say. I can tell that the gentleman over there is not a normal person as well.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1nYpZSyBA02WsSjuAWkXqdye-q5PKF9sl/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "The souls don't seem harmful for the moment... But if they continue to gather unabated, they will eventually change for the worse.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1eCfgGVBsoqm3meaBn-1FW1vIiVBVopOC/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Correct. The living and dead can't intermingle. For the attachments of the dead are toxic to the living.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1JhPT4wpSi4A4qZYgrEZzePcForHG_EBC/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Besides, all they did was get lost. It's so sad to see them tormented by their lingering regrets toward life simply because of that.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1RueV5_o1BL13_D813-pCxc9UTcW3Tl6y/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "So I was thinking it might be best to speak with them so that they can return to where they belong. And enjoy the festival while we do, naturally.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1nRI0b08IREvhM4mVItRWtBbP_1nAx3MX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Got it. I understand the situation now.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1exMz8bOB-Q-mJ_V9c0wjQ73EsYl0XD2b/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...But it's that last part that you really care about, right?",
                "line": 40,
                "url": "https://drive.google.com/file/d/1wQ1nYuQrXCIJjfYXAdCjfa7LPw3WcT4V/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "No, that's not true. But doesn't it make more sense to enjoy ourselves if we're going to be doing the same thing anyway?",
                "line": 41,
                "url": "https://drive.google.com/file/d/1qniZuTb9CYxy2oerF--OsEtjU3rWx6_t/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 42,
                "url": "https://drive.google.com/file/d/1tyxFUaNYYtrcF7Janq9H8OnPhRJUnt7S/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I understand the situation...but not gonna lie, it doesn't seem like there's much in it for me.)",
                "line": 43,
                "url": "https://drive.google.com/file/d/1FomATi5VzZ5V2NPlaBs2ynM7xVBwj8Xt/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "I will assist you. This is festival is so wonderful, after all. Enjoying it to the end together sounds like a fine idea.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1PCjZY9G2MQB3BStT6T8bVc9eAUC2TqsM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(They could probably handle any fighting on their own, too...)",
                "line": 45,
                "url": "https://drive.google.com/file/d/15uPWv7SYcTB1GMJpJTRBSQyFGx3ygzsC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...Hold on a sec.)",
                "line": 46,
                "url": "https://drive.google.com/file/d/19yvKGvGrflt-U2u9xmbBXQE5J6xPudzM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(A festival is underway, peaceful and without incident...except behind it all unfolds a epic battle against ghosts! That totally sounds like a shadowbroker scenario!)",
                "line": 47,
                "url": "https://drive.google.com/file/d/1hbLcYNSbVaooaEEwJun23uy0flmD2qZt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I can even look on from my hidden vantage point at all those happy families talking about how fun this all is! Hell yeah...!)",
                "line": 48,
                "url": "https://drive.google.com/file/d/1VZkFeWMEwXIFOj5Bf7kGFHqRNTn3yZEv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Okay, okay, I'll help, too.",
                "line": 49,
                "url": "https://drive.google.com/file/d/17x07NycpZN-gCmQtc7hZ-W18lIW69qNO/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Hehe, I had a feeling you'd say that.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1HKCxfjp7nycYiWtMlUTdYXOQy9BbsX8J/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Marvelous, good sir. You are so kind.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1BNzXLSALplP3Ws2Uzs9m4HosrpYr_fV4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright, now let's go see the festival.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1Yn-Fd5SowSmggXAC3IoB_jjMDH0m_mDi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Let the secret ghost-busting mission begin!)",
                "line": 53,
                "url": "https://drive.google.com/file/d/1xgEE8zonLxK5_6P-W7iDtm7l8HgwQc2C/view?usp=drivesdk"
            }
        ],
        "e3": [
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "So...where do we start?",
                "line": 1,
                "url": "https://drive.google.com/file/d/1iBHV58zNhrLPglS7i_Vs-KcNF2sxBOY_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hmm, let's see... I'll let you two decide. Is there anything in particular you'd like to see?",
                "line": 2,
                "url": "https://drive.google.com/file/d/1Fh13pobRm9oHjul5iu6LP8IQy-ranx32/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "It's all so new to me that I can't choose. All of the stands look so delightful and charming.",
                "line": 3,
                "url": "https://drive.google.com/file/d/13zqGDpHqiJyGXWB5KibwzN74Nz02ptAl/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Yes, it's true. If time allows, I'd love to see everything...",
                "line": 4,
                "url": "https://drive.google.com/file/d/15Czzzm7tfXz306f2h-EMuyM4zqtcCgn5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "In that case, what say we split up and you each go check out whatever interests you? Then you can swap info later. How about that?",
                "line": 5,
                "url": "https://drive.google.com/file/d/11j-nHC37AwV2MckjoXkH-G4ZhsLn2ADs/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "What a great idea! We should be able to cover much more ground in groups of two.",
                "line": 6,
                "url": "https://drive.google.com/file/d/10MlKVqdkxqHZSqDdLhVFe2oOyeBxfiIu/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Yes, I agree. It's the best, most efficient option. Now, why don't you start by accompanying her first?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1P2urew44oPTyvB5Rs7fbDuGHKt4Jiz1A/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Dear me, are you certain? Wouldn't you prefer to have a gentlemanly escort as you take in the sights?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1wwEU3P-f_eEvBTj_HmaoB_Ex9t93BSxE/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Of course I would. But all things require a guiding hand in the beginning, and I don't like the idea of leaving you on your own.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1S8xNjrZkQqItEZb2OLiG5Lr7iJ8MBC4F/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "True. Elisabeth here is kind of a lost lamb when it comes to the modern world.",
                "line": 10,
                "url": "https://drive.google.com/file/d/17Uc01gXxtlaKAtp8CEWxb-ICYVOniN5d/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Thank you both for your concern.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1nrhjkvXsSaWfMpvnSkZxWP6q_GxQbQV2/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Hehe, you're welcome. Well, catch you later.",
                "line": 12,
                "url": "https://drive.google.com/file/d/195ZWDB7OplT3uM7p0OD6kP1ocG0aXsXc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "How about we get moving, too?",
                "line": 13,
                "url": "https://drive.google.com/file/d/1ejulJoTUx3kpog5j9YkL7qngD7rfqvxn/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Yes, let's. Might I ask for your company, good sir?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1ZttWYsI0YT8aipdgh_3HyHRd4hQhISFw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Sure, that's why I'm here. So where to first?",
                "line": 15,
                "url": "https://drive.google.com/file/d/1cBrmEeByxkOMkBM5Zs2tbXREnkzU5Vkp/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "I'm curious about the foods being sold in the night market. I confess that I'm a light eater, but I was hoping to sample as many things as possible...",
                "line": 16,
                "url": "https://drive.google.com/file/d/19158xAfVPrCiYHSvG0zJ1SNZsUDNMYTo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright, then we'll start with something that isn't too heavy.",
                "line": 17,
                "url": "https://drive.google.com/file/d/18tdo0OuRybNzSWbGzo1HlZ7KOiKOvBqv/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "What is this...?",
                "line": 18,
                "url": "https://drive.google.com/file/d/1gq9wGccTvLWVhPjFwPTHXTkgpBMpyvny/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "A shaved ice stand. I thought it'd be good since it won't fill you up much and is also a summer festival standby.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1mS7xyjwzDd5n3Gm2UPlZ_mhI8Vwlf6L0/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Is this...nothing more that sweet syrup poured over ice? I fail to see what could be so remarkable about that...",
                "line": 20,
                "url": "https://drive.google.com/file/d/1xzncTg32zsJEh5FQzinRSpawKUvQF-vj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Don't overthink it. You'll understand once you have a bite.",
                "line": 21,
                "url": "https://drive.google.com/file/d/10yvy5IaYfFbSXOrb6zvT-M6v5HjOWvTd/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Well, if you insist... I shall give it a try.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1w6JPEP49-g5kfcqxXpwJs1vhGo2qBpJU/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Oh my goodness...!",
                "line": 23,
                "url": "https://drive.google.com/file/d/1iHAJJJ87RZQvRPAlGUeW8njEIqyKY3Ub/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "This...this is a delicacy!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1s-LNGcMX9Q5cQjt2366El3i4Z3bOp-ZP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "See?",
                "line": 25,
                "url": "https://drive.google.com/file/d/1d_4H2RuGFWKmMOtMW1Zv2dKz3GqIRd7h/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "The texture of the shaved ice is like fluffy powdered snow... And this strawberry syrup\u2014a tart tincture that melts in the mouth alongside the ice... Absolutely wonderful.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1agPOD03DGyonBBvOHJJLsOvsjZVLuvYg/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "I'm sorry that I ever looked down on it as mere ice shavings doused in syrup.",
                "line": 27,
                "url": "https://drive.google.com/file/d/13ggOLqeXicpppvcjtgx225GVg445qOhM/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "I love how soft and easy it is to eat, with the pleasant surprise that it is not overly filling at all. The people of this era have created a true frozen marvel.",
                "line": 28,
                "url": "https://drive.google.com/file/d/12g1uX4w4s42zAcrU9N8zPRiXI5cH94pJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Heheheh, don't get too surprised just yet. Wait until you try cotton candy.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1UBGQattFv-arjl9GEQwbcj6olaTS75uT/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Cotton...candy? Given the name, I'm guessing it must be sweet?",
                "line": 30,
                "url": "https://drive.google.com/file/d/1nxc88rKx_avqqS618cQtdD9H1RYnyoqX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Here, try some.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1F4gZAdQ_lwZsaMSlE11IEPfJqAkyC_x5/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "My, it's as fluffy as a cloud! I wonder what it will taste like...",
                "line": 32,
                "url": "https://drive.google.com/file/d/15uNEq9sGkLp09-NLqYG62OKn183KKxhv/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "...Oh, it melts inside the mouth right away! It's like trying to bite into mist, and yet so sweet it makes my tongue tingle... Heehee, splendid, like something out of a dream.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1EmupUpwN7lN8ZF5cgas8uoBVBcFCat_U/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Sounds like you're a fan.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1Tu-wDYYgvGZr7ETQvHh_SU5ReoVrg_z0/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Yes, to say the least. Unlike ice, this cotton candy will not melt with time, so I can likely even take some back as a souvenir for Mary.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1ukPBicdi1PrMhtRKq6Fmt8tWy2ZXScnE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(A souvenir, huh... The thing is, cotton candy sucks in warm air and hardens really fast...)",
                "line": 36,
                "url": "https://drive.google.com/file/d/18y0dLXSnAxu7mjBS2hRev0XuNPbS9Sop/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Nah, I'll spare her the cruel truth. THose little next-day letdowns are part of the summer festival experience, too.)",
                "line": 37,
                "url": "https://drive.google.com/file/d/1NbeIjRmFBM6_FskGB9e4RaX91c73eMk3/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Say, my good sir. That stall over there says \"sculpted candy.\" Do you mind if we have a look?",
                "line": 38,
                "url": "https://drive.google.com/file/d/1ZcqCgTKmctOYycn2sgTjEJVp2mgnM_1G/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Not at all.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1PXwCCf-7fn4QmLnSKxbH23v9jMhDB-_E/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hm...? That man standing over there...",
                "line": 40,
                "url": "https://drive.google.com/file/d/1tIN0-9XbJS6aBZcNrpzXH7vfyBR0NuhS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Excuse me.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1XA4JTGaSBGzkNobvUKqhW1RbuxmCxyVq/view?usp=drivesdk"
            },
            {
                "name": "Deceased Man",
                "name_variant": "Deceased Man",
                "subtitle": "What is it?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1yNZr6KTBTi4qLl6r07rBGCtNWjBqSxlW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "It's not a good idea for you to stay here. Don't you think you should head home?",
                "line": 43,
                "url": "https://drive.google.com/file/d/11-Hd7msQl9N4CJ_HP8u6Eg6OxD3SER2s/view?usp=drivesdk"
            },
            {
                "name": "Deceased Man",
                "name_variant": "Deceased Man",
                "subtitle": "...Oh, so you mean that little feeling I had was right? I thought that might be the case. Well, I've had my fun, so guess I'll be heading back.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1k7EuMkNl4lPCg-2l2d9-13ei8CynxTa5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(He left way easier than I expected... Kinda feel bad about interrupting his fun, but it is what it is.)",
                "line": 45,
                "url": "https://drive.google.com/file/d/1yGqxQMlE4dHkdQab7EhRbR1Dxg-0zhOi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Now where's Elisabeth...)",
                "line": 46,
                "url": "https://drive.google.com/file/d/1usZWFoban7UOtm2lEmGt9z4N-jAou7xs/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Wow, so you make it to order on the spot? In that case...can you make me a bat?",
                "line": 47,
                "url": "https://drive.google.com/file/d/1MDK8OEyRG1uct_XZpq8zSH5X3uhG7XWc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(She's totally engrossed in the candy-making... Which means maybe I can go check up on Violet.)",
                "line": 48,
                "url": "https://drive.google.com/file/d/1HP4fpwjvrf0NoB6zE4X4IZZ7Wcjfh3Lt/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Oh, drat, I missed again... But even when I hit, the targets never fall! This is so difficult...",
                "line": 49,
                "url": "https://drive.google.com/file/d/1cewxZWJe1iWJm6JQvZktwZkWqgkVm3z5/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Do I have to use a gun to play this game?",
                "line": 50,
                "url": "https://drive.google.com/file/d/1JaZnD_YAQ3AtAX0Lhuc6TY052t8cfEWx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "That's what we call doing whatever it takes to win and then getting so caught up in the doing that you forget about the winning... But yeah, this is a target range, so you have to use a gun.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1aiQ1iChOMOQNL-qzttnj4IIZk845Ncd1/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Oh...how long have you been watching? You mean imp. You could've said something earlier.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1HNNSwfJEtzQynNuEUZ2O8cCasy_oI4fx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Well, I didn't want to break your concentration. But, hey, can I give you little advice?",
                "line": 53,
                "url": "https://drive.google.com/file/d/1AgpV06n62QzQdPgPUkpt9ab9NSnwua-V/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Yes, please do.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1xpXLFEUUF56qYBIE9E3JyDUcnjF-lftN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "It's easier to keep your aim steady if you hold the gun with both hands. Use just one and it tends to drift.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1HD8BWoMDfur6z_4kXFFapP_OHak_aJ06/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Also, the big prizes don't tip over easy. So instead of just trying to shoot it and knock it down, you want to aim where you think will throw of its center of gravity.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1OAGlT9YyEI018M1Hs5kn6l-kpITKbUSS/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Trust the modern boy to even be an expert on target shooting.",
                "line": 57,
                "url": "https://drive.google.com/file/d/1Yh05WCDwxSln9HrmN0Ki8GS4s8pQymJ6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I wouldn't call myself an expert, it's just that I've done this before.",
                "line": 58,
                "url": "https://drive.google.com/file/d/10a-hF2z-jsJQ4hBInPcuiUZ0qLqTUcIj/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Okay, then I'll take your advice...and aim with both hands...",
                "line": 59,
                "url": "https://drive.google.com/file/d/1myjzcK4gzsb3vRWCmSBFH7UYaPzLT8Pn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wow, not bad. All three shots hit. Congrats on nabbing the prize.",
                "line": 60,
                "url": "https://drive.google.com/file/d/11cC_r5Ygf86yCjGcV_WQvBgnSO_r2-xP/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Hehe, oh, I'm not through yet.",
                "line": 61,
                "url": "https://drive.google.com/file/d/1zdJz_j8yO25buG89FKqkd0he_Z_oyKSl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Now you hit will all five shots. Somebody sure is a quick learner. I'm impressed.",
                "line": 62,
                "url": "https://drive.google.com/file/d/10RB0ag8T_KCYMTNd8YfjaYwartIlq6Fv/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Maybe it's because I had a good teacher.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1Au15TomVW1F5T9gj_NAIhtL-hO3GcArv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So much flattery. What're you scheming?",
                "line": 64,
                "url": "https://drive.google.com/file/d/1aPAClrso5qHaLpAIsfQkzmxQsE06vUJx/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "The truth is, I've become aware of something very distressing. I was hoping we might discuss it.",
                "line": 65,
                "url": "https://drive.google.com/file/d/1NER8iIryOOG6Y4B3wxhAiBeg_RAko6K9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Something very distressing?",
                "line": 66,
                "url": "https://drive.google.com/file/d/1Cp14w5weJEpinBcBAa1OL3wZV2MP-nj-/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Well, you're aware of my current situation, yes? It's not like I was able to bring anything with me.",
                "line": 67,
                "url": "https://drive.google.com/file/d/1lrn1ACyR5LIiCOulYnMycr7GmcyRJQV7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "O-Okay, and...?",
                "line": 68,
                "url": "https://drive.google.com/file/d/1hg79WN5mfMTknb8I-kMFj_cOpaZsBnqm/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "So can I borrow the money for the target game?",
                "line": 69,
                "url": "https://drive.google.com/file/d/15m6bhupj2eJIcnMItAYlYErPlJkVFB-G/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Wait, so without a single zeni on her, she was able to play with just a promise to pay later? Violet sure knows how to get her way...)",
                "line": 70,
                "url": "https://drive.google.com/file/d/1cwhOA7a2yDfkW91ZQF6NnWaj7_33jagC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Sure, I can loan you a little. But I do mean just a little. And make sure to pay me back. I barely squeak by on my allowance as it is.",
                "line": 71,
                "url": "https://drive.google.com/file/d/1vCLcsROA3BpFFzU6JFaIeQCE35XIJdAR/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Hehe, of course. And thank you. I know I can always count on you.",
                "line": 72,
                "url": "https://drive.google.com/file/d/1W7hvc7tDEKZLUMg7uniaHqhrmp8-YFNa/view?usp=drivesdk"
            }
        ],
        "e4": [
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Hehe, that was a lot of fun. Where shall we go next?",
                "line": 1,
                "url": "https://drive.google.com/file/d/1oJ9amnaKlmgiRAqDNOZKY6w5dTvtyAb7/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Ah, so this is where you ran off to.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1iNyiH9yGq1fgkMGRMHR09oJlTzLttEu2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh, hey, Elisabeth. How was your tour of the food stands? Find anything yummy?",
                "line": 3,
                "url": "https://drive.google.com/file/d/1DcF78wbRI-O0Rp6jYpzg2M-itHV46Hrz/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "After the sculpted candy, I sampled a dish called \"okonomiyaki,\" The aroma of the sauce was to die for... It was everything I ever wanted.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1db6oFTbRsEcBD3eEHOxeJxnBASN6XyLf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh yeah, you're preaching to the choir. The sauce they use in those flour dishes is awesome. Sometimes I can hardly stop myself from eating more.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1flkbUY5GgD2hGhVXm6uFOfv46L4xBHme/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Hehe, it certainly sounds like you used your time to the fullest. Would you care to join us at the next stand?",
                "line": 6,
                "url": "https://drive.google.com/file/d/1b3T8opIyL9Y83Y0jSM9MqijKCRG9kjg1/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Oh, is that an invitation? How delightful. Where were you planning to visit next?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1kl6HcqCItE1QcwaIO-vDusr4H5G5KZ7z/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Uh, hey, aren't you guys forgetting the real mission here?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1Xvvnt0rtCaW6bLUxuHjpGOh4nSj-weHI/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Are we not enjoying the festival?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1HcDz9e0L_pXAIpl1dEI8HIDvKHMnHOdQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Um, that's not what I mean.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1ishSWGoqDPxdJ757RoglhskGUl_qgPaM/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Hehe, yes, yes, I know. Our goal here is to guide the souls of the deceased... But there's something I want to do first.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1A3zCx8Fcg_D_4TP4B23sVj73JJ1rI0Qv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Something you want to do...? Other than checking out the stalls?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1xgjfBnlZfSBVr13Nk4TzCXqcQqMaB0kv/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "I was hoping I might have another duel with Violet.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1FahxkHjB6HoWNs_rB5A9fPlVAmbwyEE_/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Dear me, now that is interesting. I would be honored to grant your request.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1M3x5-xQ8gaf3OyK04OMr-O6YxHOWT4_T/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Uh, how did we end up here...?",
                "line": 15,
                "url": "https://drive.google.com/file/d/1UnVtCmLsO9SY_569RNAfJQN2zeGkLPXq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(As I recall...these two both have pretty wild fighting styles.)",
                "line": 16,
                "url": "https://drive.google.com/file/d/1vvWMsPfa470lJDa8_Xnxq1yND18WToYj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hey, if you go at it here, it won't be a festival anymore. And we'd probably end up with a lot more dead folks, too.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1c0ZnhWEoSW96hpXpHcBH-P7bR-NM9zJg/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Heehee, oh, don't be silly.",
                "line": 18,
                "url": "https://drive.google.com/file/d/19UVQ25EElidPYRusPoiBYXmrUHLnp-uC/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "This is the perfect stage.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1vJuoYVeQ5TjzvqLmAhItjXIkSmeVX5M5/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Now, how about we settle this with some goldfish scooping?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1zYd3JvXmJoIVmRFYCjHF7ZSX_jkFxSkw/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "What a marvelous idea. That stand did catch my eye earlier.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1Ef8Hto8_OtEIo6_yk14HSHpiJ1tMIDCW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Well, I guess that'd be okay.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1B6PTh6Tf2IMwXh8MvyCRleRuInNdwQ9D/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(But these two are definitely losing sight of the big picture...)",
                "line": 23,
                "url": "https://drive.google.com/file/d/1CnrZQ82YvtLvGirPaHpz6qH6y02Y75-B/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Okay, let's go over the rules. The winner is whoever catches the most fish with three paper scoops. No interference allowed. Are we clear?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1gkUEjZDJyOTFw-W8gkgUJk0dakmgHoTj/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "I have no objections.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1MkmfUiFxbRVmw4Ny5mbCSWyvaB3WGmsa/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Me neither.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1CkJ4S-a20WRBiPjfcaUGStq-4EgfEc8p/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright, then let the game...begin!",
                "line": 27,
                "url": "https://drive.google.com/file/d/19OuVd18a1WE2ikAi7ch85HQtINZYmiPK/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Now, my fishy friends clad in pretty gold...I beseech you to aid me in my hour of need. If you would kindly come this wa\u2014AH!",
                "line": 28,
                "url": "https://drive.google.com/file/d/1LwiCcaQx-rby4Uy_MaUN_ck2zdzL2Ser/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Uh-oh, it ripped.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1pY91d7uQkKuyCE58hiVTR-l91tQfx9QD/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I suppose the trick is to snatch them up quickly, before the scoop tears. Just keep my aim steady and...oh.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1QFSpHzjYYJAN90Vbsx3FkbYhiELRl6hD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Looks like yours ripped, too.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1hzucYmZ1rgswLgYTJxfMCSDU9ENeyCLS/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "I know better than most that nothing is certain in life...but these scoops are so thin, so weak, so fickle. I must be careful with my remaining two...",
                "line": 32,
                "url": "https://drive.google.com/file/d/1pzrZN5ejlpssL4q_hsxPltrC_TH-QV_t/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Perhaps I was a touch too hasty. I'll get it right next time...",
                "line": 33,
                "url": "https://drive.google.com/file/d/1njyB6aicJdRBmUmOggaQzx-H21456CUG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(While they're so into it, maybe I'll go get in some ghost-busting.)",
                "line": 34,
                "url": "https://drive.google.com/file/d/1sp3xMMBWgJeU913qYiEjvYF2sN3Aqwl-/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Nice and quiet, so the fish don't notice... Oh no. Another blunder.",
                "line": 35,
                "url": "https://drive.google.com/file/d/12zaVOnT7zIPzOVSMw-ZqfHbOJmoGL9Qh/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "What, no?! It tore right through the scoop and swam away...",
                "line": 36,
                "url": "https://drive.google.com/file/d/15VLANCehavhEnEmJ_DX-V5wB7b3D517I/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Having a spot of trouble, are we?",
                "line": 37,
                "url": "https://drive.google.com/file/d/1R63PXGq03sY55DuMGDOntNek0qK4-t04/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I could say the same for you.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1SXd9iPle4VShu6GO-K83JGDVJMF7Aa50/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "...Say, Violet. I have a proposal.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1AOL5w53xER4g_nt8PE-WW_ye3qqp5ru-/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "What a coincidence. I was about to make a proposal to you as well. I'm sure we must be on the same train of thought.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1KTQ7ZXFVBnyZhkyabxTAiWbAVo3DgNAW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Okay, that's that. I swept that area...",
                "line": 41,
                "url": "https://drive.google.com/file/d/1iEN4YHOtCsgmrnnmq2MTU2oxxjwmRFJU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "How's it going? Do we have a winner?",
                "line": 42,
                "url": "https://drive.google.com/file/d/15CqQKQ-FqH_Tg-Eqbkc_UjwhrBwk8x6b/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "See for yourself. Neither of us caught a single fish. ...Which I suppose means we have a draw.",
                "line": 43,
                "url": "https://drive.google.com/file/d/12s1tHV0otDLl2wApHorntokG9ti6CpEI/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "This does not make for a proper contest, but most importantly we aren't enjoying the game.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1FHYa9tDro3JuiJHZqhqybRrHINcJGO-W/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Say, good sir. Won't you teach us the secret of how to play?",
                "line": 45,
                "url": "https://drive.google.com/file/d/1u7LViZW3PXE9gq8lKDxPQAPDBhbugG5O/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh... Okay, I think I get the picture.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1mEBmgI-zXsElmcL4XZ56HJITkEnQFFAM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Turns out they're both more easy-going than I thought. But, whatever, looks like they're having a good time.)",
                "line": 47,
                "url": "https://drive.google.com/file/d/1BCE3hBfX5l6srERk_ylG3E6UHceLJYPY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright, I can give you some pointers.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1yEIX0jhS-81SOmBRVbYbUInO9PogYU02/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "We're counting on you, professor.",
                "line": 49,
                "url": "https://drive.google.com/file/d/16f-OLaYkHoBmIoNhDhM586KEpwUE6ki5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Can you drop the professor part?",
                "line": 50,
                "url": "https://drive.google.com/file/d/17pRKnhPL3siJuEDXpGx_NWcNCkdbMUI1/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Come, good sir. Stop being bashful and commence with the lesson, if you would.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1SQtjOKLHqmy_c8c1ZSjl62sk0obllja9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Okay, okay. Now, the first thing is to\u2014",
                "line": 52,
                "url": "https://drive.google.com/file/d/1HHRlKB11z44cSJVUW4Aji0IyiZ7YiyfZ/view?usp=drivesdk"
            }
        ],
        "e5": [
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Look at all of these fish! Eeheehee, and it's all thanks to my gifted instructor.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1pXzMjM6FPNcL2WNIm5g8CJHofNB3eK8s/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "The same goes for me. I think my favorite is this one with the big tail fin.",
                "line": 2,
                "url": "https://drive.google.com/file/d/13yJqBQr8alFOj86LzeqEtJAK2ArJIpwp/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "This small fellow is very brave and cute as well, don't you think? I need to come up with a name.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1j87WyMJI2ujadiJKbPvGDruBDNk1hcp4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Glad you both had fun. So, can we consider this \"duel\" over?",
                "line": 4,
                "url": "https://drive.google.com/file/d/1WFUwd3ke8SyKGELmz8d3pr3WM59FmGzd/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Why, I'm having such a good time that making things into any sort of competition is beginning to seem rather droll. What say you, Violet?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1ymLLPlltjtuC65ubgEMOLfs2OOaf6RL4/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I agree. The duel was only ever meant to add a bit of spice to the fun, after all.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1iTTifdLTJ2t8djDR3IVhUUebqD-BKm7R/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "In that case, it's time you started helping with talking to the ghosts.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1LqARROAQWmkzpf5NUgGE2xbk6gn8BB1x/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Oh, right, that was our main goal, wasn't it.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1obhMuMcHCqr7ANrrE_OB82PqFLcdF_eK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Says the one who mentioned it in the first place.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1ikhAxWORSTROQXUg6ThxQ_6ONeWv6R9o/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Just joking. I'd never leave all the work to you. But the festival in this world is just so fun that honestly I'd rather just keep on enjoying it.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1ARClT4RnnB4Tc6-A3RVUC8L28TS9l-Jn/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Goodness, yes, I understand completely. Modern festivals offer so very much to see.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1eVfUjTEabgsL7oXSvGF-CWa6el6oPCbl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I do get where you're coming from, yeah.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1epZvbCxgTuXVstLc4W5N6HvouyYXg0ZR/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Of course you do. And in that light, it makes it all the more sad that we have to spoil the fun of the deceased as well.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1Rea4eKFm81no8BAZBIx9xGWY61BD-iL3/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "It was the energy of the festival that called them here, after all. They haven't done any harm, so I only wish there was a way we could all relish this moment in time together...",
                "line": 14,
                "url": "https://drive.google.com/file/d/13FNjVvxZvHAtoKCUw1Y8hN2hFee_ADdv/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Yes, I agree. It would be so nice to offer those of the distant past a brief moment of comfort.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1CU0mXp1LJ3nF0YeI4_QRTr0vOmiLmX0e/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "...",
                "line": 16,
                "url": "https://drive.google.com/file/d/1tJodwW3u7sL4gdzcQTNfCfUXApCCKMGR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Elisabeth?",
                "line": 17,
                "url": "https://drive.google.com/file/d/17ioqChmuTiNe6GW6uuyZl1eXRgAVXFRM/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "...Oh, I just had a passing thought. That it would have been so nice to have festivals like this during my reign.",
                "line": 18,
                "url": "https://drive.google.com/file/d/125GZsHADKSr7rvHpWY-cKjMUZzwEf9pZ/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "If only I could have enjoyed such peaceful moments of merrymaking with old friends and subjects, all of us as equals... But this is nothing I haven't said before.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1ceRIXfCJUkIYLDvolwsPt2l8J8CqpCZ_/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Indeed. Sadly, that sight didn't become a reality in our day.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1NLfN5oA9UIIonrvKkV9GWzEj-OQQs3w0/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "But it did now, all this time later. That's not so bad, is it?",
                "line": 21,
                "url": "https://drive.google.com/file/d/1a9m-llSPIXOlTcX42iX9lPVIafN0Mj61/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "You have the right of it, Violet. We must make sure this festive night ends on an even higher note.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1Y-jVtfTJf1WraptiBijse9k3Zlu9z2sL/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Dragging our feet to prolong the end won't make the fun last forever, either. If they have somewhere to return to, then return they must.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1Tf-oqZXpZPAL_eadH1pnUMTs4bunXnjL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "And what happens if they don't?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1pu_qpBshGCnn9h4-XuP58CAV-ZRepOR-/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Their sense of self and purpose will gradually fade, leaving them nothing more than wandering spirits.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1jgg3IMfvUDf94i9JeVLZibGEwiaQiRuf/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Some will likely seek out the living from loneliness, while others may be driven by envy to do harm.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1SE-FvbCDOx0zFaMMjQfeJEcWjPQeuVo4/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "All with no end, no sense of self... How pitiful to become a being that only causes injury to others.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1wwLatYf1F2-NPQKhJJWFbD7gO-Ree9CH/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Indeed. All the more reason why we must urge them to go back from where they came.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1RQL2GuLtgHM6oNTRtBZNrHlREp0hkEy6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "You guys...",
                "line": 29,
                "url": "https://drive.google.com/file/d/1MSZFhuUfDnOwiO6DbEdKytJAgGM6S3ya/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(So they aren't just caught up in the festival. They're really putting thought into this.)",
                "line": 30,
                "url": "https://drive.google.com/file/d/1s_xFiZ5jDHz1zzrFMEKZXjyDgh36H1wD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Well, they won't outdo me! I gotta make a shadow operative move, protecting everyone by secretly busting ghosts on the night the of the busy festival!)",
                "line": 31,
                "url": "https://drive.google.com/file/d/1qwbrNYqKnDVP0eoUaWxzpxScsaogAPwG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "All right, playtime's over, you two. From here on, we need to focus on sending the dead home in a way that doesn't alert the normal folks around us.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1CeVKyAqBzohawaRJuf4wma7EpJtzQ5iL/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Someone sure is motivated now.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1rgQjXxxsK3IUIkiD4KOzMhf4_dCX1OHE/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "So you have compassion even for the deceased. What a gentle soul you are...",
                "line": 34,
                "url": "https://drive.google.com/file/d/1nSHrPqpns0vSBp9nC0FGjnZYoMSDNxsv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...I think they're reading me wrong, but hey, at least they seem enthused now.)",
                "line": 35,
                "url": "https://drive.google.com/file/d/1ss99qkcSgaNenECXYPdHchkeAskPmUAJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Now, are we working under any kind of time limit here?",
                "line": 36,
                "url": "https://drive.google.com/file/d/1h6KSCeL9-VieOQjbtge9-Le6wOBLX3t5/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I...think it would be best to consider the end of the festival our limit. After all, the festival is what brought us here.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1xDftBe8XbIDpomXVGPrPQZTB4GuEh2gr/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "It would probably be safe to assume that the drawn here will only be in their right minds while the festival is underway.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1t6_iZSvZa10M2n-5hFHJXUutW3_Lf07Y/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I can almost guarantee that once it's over, they'll begin to lose their focus...",
                "line": 39,
                "url": "https://drive.google.com/file/d/12bJ4-uGXx7KCJDE6U2qmsOofHEZuQhb_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Okay...so how about we set the fireworks at the end of the festival as our deadline?",
                "line": 40,
                "url": "https://drive.google.com/file/d/1GbBtQmHXW4vcTM31_73lUQZr2FPIXCvG/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Yes, that sounds reasonable. We can split up and seek out the ghosts individually.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1Yh42M469PHZL-y7GbHEf46ISPfY0aZyP/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Now, let's get down to business. It's time to send these spirits on their way.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1Ff10vFgqa5q80jY9qZdXoGQVFlY7VqTk/view?usp=drivesdk"
            }
        ],
        "e6": [
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Hello. It's a splendid night, isn't it? I hope you'll pardon this sudden intrusion.",
                "line": 1,
                "url": "https://drive.google.com/file/d/19UQ0b7vcB8fe0OIlE_nImiAB1hzcNSse/view?usp=drivesdk"
            },
            {
                "name": "Deceased Elderly",
                "name_variant": "Deceased Elderly",
                "subtitle": "Dear me, what a darling young lady you are. What can this old woman do for you?",
                "line": 2,
                "url": "https://drive.google.com/file/d/1nhAeMVimsU3fFTWgt-FjStsIhtVQNwa_/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "I believe maybe you've noticed...but it's nearly time to be returning home. I simply thought I would give you a reminder, just in case.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1NNqCDPQNnD6ulzU1m3QEiONdNkhHXhZk/view?usp=drivesdk"
            },
            {
                "name": "Deceased Elderly",
                "name_variant": "Deceased Elderly",
                "subtitle": "My, I appreciate the kind effort. But, yes, I know I must be leaving.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1b2uZfkobiTjnwhnsMLRWstRSklEf-bdB/view?usp=drivesdk"
            },
            {
                "name": "Deceased Elderly",
                "name_variant": "Deceased Elderly",
                "subtitle": "There is a part of me that wishes I could stay a little while longer... But as they say, sometimes not enough is just right.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1MzxAk7l67snCYSYBb5gOJPmnUTQxdAuC/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Yes, I know the feeling. The gorgeous lights, the sounds of people enjoying themselves... It's hard to leave that behind, isn't it.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1iFg_AjBsX7xVZdWsEHkIRZj9BC2Vy3w9/view?usp=drivesdk"
            },
            {
                "name": "Deceased Elderly",
                "name_variant": "Deceased Elderly",
                "subtitle": "It is... But I don't want to worry anyone. Perhaps it's time I was on my way.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1LxONhQuureOpVFeSQsRM4dYvvfp-5dCe/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "I shall see you off, so that you make it back safely.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1vZu9MC1NRAfHluuHd6sST6lgj7DbfOVC/view?usp=drivesdk"
            },
            {
                "name": "Deceased Elderly",
                "name_variant": "Deceased Elderly",
                "subtitle": "Thank you, young lady. I do so hope we see another night like this\u2014",
                "line": 9,
                "url": "https://drive.google.com/file/d/1SzNH-TLI3XuZknPHgYx0VMvaCQKoZgmE/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Hey, what's the matter, boy?",
                "line": 10,
                "url": "https://drive.google.com/file/d/1az6O1wjrmXwFU2IX7adtwwda45oz90IR/view?usp=drivesdk"
            },
            {
                "name": "Deceased Child",
                "name_variant": "Deceased Child",
                "subtitle": "I don't know how I got here... Where am I...? Where's my mom...?",
                "line": 11,
                "url": "https://drive.google.com/file/d/1yM0LTWo4HetbFu-eohH6fwSTuzReNTz-/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Oh, you poor thing. You're completely lost and have no idea what's happening, do you.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1dfPQ-xQ6bZoqoszExWHeXNTBujduRh3Z/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "But don't you worry. Just take a deep breath and look around you. I'm sure you'll find the way home.",
                "line": 13,
                "url": "https://drive.google.com/file/d/19CxnU3v9XkbhoIEnjV1TSQPfnmgjnNYg/view?usp=drivesdk"
            },
            {
                "name": "Deceased Child",
                "name_variant": "Deceased Child",
                "subtitle": "The way home... Hey, is that it over there, where the light is?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1CtSEJroSnIiUioG4wI8Bc0zB5x5Ie2M2/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Yes, that's right. You be careful on the way back, okay? Don't go running and trip and fall.",
                "line": 15,
                "url": "https://drive.google.com/file/d/14pM-zJZVNrCdJke2vhWKIIk2gRCGhW0p/view?usp=drivesdk"
            },
            {
                "name": "Deceased Child",
                "name_variant": "Deceased Child",
                "subtitle": "Aren't you leaving, too? You aren't coming with me?",
                "line": 16,
                "url": "https://drive.google.com/file/d/15KQeP8Htc9ITPnYpzE6z_7i8V0h0IyqU/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "What?",
                "line": 17,
                "url": "https://drive.google.com/file/d/1p3cuiKoegoFPb1gLzzp6rj8vE1GFWE27/view?usp=drivesdk"
            },
            {
                "name": "Deceased Child",
                "name_variant": "Deceased Child",
                "subtitle": "Because you're just like me, right? So I thought maybe you'd be going, too.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1BiSWM20oZF98rzf3FMKayhPwRsA89YfB/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Hehe, oh, you're worried about me. Thanks, kiddo. But I can't go with you. My home is a tiny bit closer to where we are now, you see.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1FoihuSBXXvKzV3SlKnQWeaYdZHHdDVhU/view?usp=drivesdk"
            },
            {
                "name": "Deceased Child",
                "name_variant": "Deceased Child",
                "subtitle": "Oh... Well, I'm gonna go, then. Take care, lady! Bye-bye!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1Nc0kez1iI1ObvUH2HsgfclCcBTimYVTB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hey, the dead are really thinning out. Things are moving a pretty decent pace.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1jLG2HL7IBHCuVWMn24DOIahoVN3npFFL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Hey, there's one. Maybe she's the last of 'em. I'll go chat her up.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1L1eEN_HdQFY1NtMr11gKBUFi4QDrC2yF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Excuse me! You're one of the deceased, right? The festival's almost over, so it'd be best if you left.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1PE1ezprL_BTDUhL5GbQOac4hY_lIqC6W/view?usp=drivesdk"
            },
            {
                "name": "Deceased Woman",
                "name_variant": "Deceased Woman",
                "subtitle": "I'm...looking for someone... I can't leave until I find him...!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1PgF5jqovZaS3LdhZ_NsKkEbU8R8yIlPY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh... But that doesn't really change anything. If you don't leave before the end of the festival, something bad could\u2014",
                "line": 25,
                "url": "https://drive.google.com/file/d/1dDL12PVkvCvWUxir9qoMJrItCTRjDaA4/view?usp=drivesdk"
            },
            {
                "name": "Deceased Woman",
                "name_variant": "Deceased Woman",
                "subtitle": "That has nothing to do with me! I want to see him! I won't leave until I do!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1dZJwMe-c6uyEMMAGVRhvvrimUJbBxs4m/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Uh, but if you don't leave, you'll turn into an evil spirit, so it actually doesn't have something to do with you...",
                "line": 27,
                "url": "https://drive.google.com/file/d/1K_LvsyIijyu42ckJ0Viq7XQe-cXjZOk8/view?usp=drivesdk"
            },
            {
                "name": "Deceased Woman",
                "name_variant": "Deceased Woman",
                "subtitle": "So what if I become an evil spirit! Does that in some way inconvenience you?!",
                "line": 28,
                "url": "https://drive.google.com/file/d/1VMs5o-DhouBwXjmQhxjT1p1XiMLcF-w-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Sh-She's really lost it...",
                "line": 29,
                "url": "https://drive.google.com/file/d/1E7I_V3Lcn-_ECXdKdCUF6SAGzuAGHNm-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Maybe the best play here is find this guy she's looking for. That seems like the quickest way to resolve this.)",
                "line": 30,
                "url": "https://drive.google.com/file/d/1K0xx7ip4OXuI3tCfUmwujw47ByK8RCrw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Okay, then let me help. What's this guy like?",
                "line": 31,
                "url": "https://drive.google.com/file/d/1EyLn9z3ssP54Kg6blTOHDinRHFuwueJW/view?usp=drivesdk"
            },
            {
                "name": "Deceased Woman",
                "name_variant": "Deceased Woman",
                "subtitle": "He's slim and tall and kind...and a despicable slug of a man who betrayed my trust and was unfaithful the entire time.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1dHMn7nQJlXT4GCH7M8eXHRjQ2Mn3IZqJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(What the?! Something in the air feels different...)",
                "line": 33,
                "url": "https://drive.google.com/file/d/1EFpgEmmxtAPLMJl8CnCghNYIhzuE2Gz5/view?usp=drivesdk"
            },
            {
                "name": "Deceased Woman",
                "name_variant": "Deceased Woman",
                "subtitle": "I swear I will find him and have my revenge... He will regret the day he trampled on my heart...",
                "line": 34,
                "url": "https://drive.google.com/file/d/1qJw8l6ecHhjCJOC8jaI8gtk5MjULBCN0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Damn, that sounds like an evil spirit to me!)",
                "line": 35,
                "url": "https://drive.google.com/file/d/13ng_U85jb6Dx41oEOiR-ifDT6LU42yxo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "About that revenge, do you know where this guy is now?",
                "line": 36,
                "url": "https://drive.google.com/file/d/1izlXfh2qZAt-91glodGbptP3vMM1dl_s/view?usp=drivesdk"
            },
            {
                "name": "Deceased Woman",
                "name_variant": "Deceased Woman",
                "subtitle": "I won't give up until I find him... This is my first chance in the hundred years since I died... No, he will not escape me...",
                "line": 37,
                "url": "https://drive.google.com/file/d/15enmLhlzsJ4QIxbDr_HRt2VXpYaBEsOB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Okay... Well, if it's been a hundred years, then chances are this man's dead, too, no? I'm not sure you'll find him...",
                "line": 38,
                "url": "https://drive.google.com/file/d/1b8-7IBmKZj1Igac4YXgr6P4gILa4kdpn/view?usp=drivesdk"
            },
            {
                "name": "Deceased Woman",
                "name_variant": "Deceased Woman",
                "subtitle": "I will if I don't stop until I do!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1Z3-SWfbz3mvghbrfgvIrPw1bAaFU1Ui2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Things are starting to move...! Is she a poltergeist?!)",
                "line": 40,
                "url": "https://drive.google.com/file/d/1oXW3j3eMLTnKhgbbR9vGttgmyIqfjoxy/view?usp=drivesdk"
            },
            {
                "name": "Deceased Woman",
                "name_variant": "Deceased Woman",
                "subtitle": "No one will get in my way...! I will find him, and I will have my revenge!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1eP2JZUiBe195Sm7VdsT2-zup1wa9UonY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yep, she's definitely going bad!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1RMGWuB9C3G7xU0yrAwuyRFekYi1F5Z8g/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Is everything all right, good sir?",
                "line": 43,
                "url": "https://drive.google.com/file/d/12Yzkwow3JmZ3Eth_8YHjhIrrHfAJuWC0/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Oh dear... It seems you've really made her angry.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1vjvNWOGM1o_8oPK9t9NQAzDYTJHpejbR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hey, she blew up all on her own... Anyway, what do you think I should do?",
                "line": 45,
                "url": "https://drive.google.com/file/d/1ld_yKn2fK3q4UKGczIXjELPJDf3NRS3I/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "At this point, we're going to have to force her to stop. I doubt we'd be able to talk her down in this state.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1dh3tpYTOUkbvYCXsxbSoPIzXbkh1fe_V/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Angry spirit of the departed, be at peace... Exhaust your fury in battle with us. I am certain that will calm you.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1iemQZ5n0f1TQ8S_RAvwQCAHgzdlzPRTn/view?usp=drivesdk"
            }
        ],
        "e7": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "The poltergeist stuff has chilled out, so maybe she's vented some her anger, too.",
                "line": 1,
                "url": "https://drive.google.com/file/d/10OYw4xkGdFVKG2bMdqUsnjbzUWERFmFC/view?usp=drivesdk"
            },
            {
                "name": "Deceased Woman",
                "name_variant": "Deceased Woman",
                "subtitle": "Leave me alone! I...I must have my revenge!",
                "line": 2,
                "url": "https://drive.google.com/file/d/18Ngv159je8fPoQhAGNfgkwgyY1dpOLvW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Welp, never mind.",
                "line": 3,
                "url": "https://drive.google.com/file/d/120w4jXpYcNaJ8fZtuA9vf48MVQJCH1Tv/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Seems like she still has more to let go of, hm?",
                "line": 4,
                "url": "https://drive.google.com/file/d/1roy580BfTF2dJIT03HVWd7ju7x-Sqrkn/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Violet, may I ask for your assistance?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1UYX1y68KWs2ereSt1GSw2SgMA2Guexhc/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Yes, of course.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1cwm6SlRxupA02nT3y6rffeVoK-SxYlnq/view?usp=drivesdk"
            },
            {
                "name": "Deceased Woman",
                "name_variant": "Deceased Woman",
                "subtitle": "*sniff, sob*... Why...why are you stopping me...? All I want to do is see him...",
                "line": 7,
                "url": "https://drive.google.com/file/d/1_OgzYPn3j-ilm1zXAiOIbnmGE0ImzHOt/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "...I have some familiarity with how you feel. That the time you had together was so wonderful makes the betrayal all the more painful, more heart-breaking.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1UFautPexI9tegbyu0FzqSr0kxJZgGyiN/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "That's why you want help, why you want to see him, is it not?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1n0L81AZJTx1Q_9acVzBbgCk0OdgsXLmB/view?usp=drivesdk"
            },
            {
                "name": "Deceased Woman",
                "name_variant": "Deceased Woman",
                "subtitle": "*sob*...",
                "line": 10,
                "url": "https://drive.google.com/file/d/1muW7gu01rgy3GFejD5rIWgxTZCcM0DZe/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Those pleasant memories, and the suffering you feel now, must be brought to an end.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1tY-lDXdOGK3lbmPW_MQEVMPiIBFQwCdG/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Otherwise, you won't be able to move on. If you stay here, you'll become something else, something doomed to wander lost for eternity.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1vEDoBCTACBce42LQgGIqJuGypYhloIdW/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Your happy memories, your pain, your desires\u2014all of it will vanish. You will no longer be you.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1XhaouWQBxKPo3RPBL0nCZvTJC-S3-hUk/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "That isn't a fate you want for yourself, is it?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1KJC2rd-SlSeiCXDMTOcqrsJCg5yurkMe/view?usp=drivesdk"
            },
            {
                "name": "Deceased Woman",
                "name_variant": "Deceased Woman",
                "subtitle": "...No. I...will leave. I can see my time here is over.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1ikze2JTkVzatpyTPoOV-mDO2j7wqky47/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Take care on the way back.",
                "line": 16,
                "url": "https://drive.google.com/file/d/19lPAtppnRlVBA7nwvizUsSk_MNgRzVfw/view?usp=drivesdk"
            },
            {
                "name": "Deceased Woman",
                "name_variant": "Deceased Woman",
                "subtitle": "I'm sorry for the trouble I caused. Farewell...",
                "line": 17,
                "url": "https://drive.google.com/file/d/1NCYqM5q53OgfgHLG9hidVaEnp2qk2ddx/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "I pray that she, too, is able to rest peacefully.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1M_VFAnDteLze5cGS0yAuIr0onYtclbgm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Was she the last one? I think we might've seen them all on their way.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1EgOzex53s2npCzNbhaewqdybNoyH_phm/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "...We sincerely apologize for the malfunction.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1tJNnZM60GG4122HBlHQhiuXKaALcsRVq/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "We have confirmed that everything is back in working order and the festival can resume. The fireworks will begin shortly\u2014",
                "line": 21,
                "url": "https://drive.google.com/file/d/1CPgkprocdLMTnwA5XA5qU_1rA5ZbwR0B/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I'm glad we finished in time. I was hoping we could enjoy the closing fireworks show in peace.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1RKAJWTk-bwno90fTQiCI21ORBVhPrfc3/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Well, I have an idea to go get something to eat. That was a lot of work, so I could use a little snack. Ah, how nice. There was still so much I wanted to try.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1k6EdmDjKc_GYPruLZCNL7bNuUw3IW75_/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Sorry for the imposition, but would you two mind finding us a spot?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1LQlNSP7uBacxyk7Zdo2i-o0bWvhAMh8w/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "No problem. We'll go on ahead.",
                "line": 25,
                "url": "https://drive.google.com/file/d/13GnvojTh54DB1lozLDGs1OYONmso8bBJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hey, it's started!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1jPmezTnFfZ5jDAvtDxG3kqNXAZ4nIc9f/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "How beautiful! They're like great flowers bursting into bloom. The very meaning of the word magnificent.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1VydkD2kJNEvcIFVXtBO6BI8FlqrzoNAF/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Yes, that's so true. It's the perfect way to bring the festival to a close.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1O4ddcppMYnpletC7C1G4mZsozzLgjjG4/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "All in all, this was a splendid evening. Everything I sampled from the vendors was scrumptious, and you and I had a most delightful duel.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1_EQkMEF8rHmIQ5-bx6HAIzVNqeCyRyl-/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I enjoyed the target range and candy carving, too. If we get the chance, I'd love to try both with you.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1YU14T1-lc3qRno-dqSGmMhZxLev9_q9R/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Yes, I would love that as well! I'll hold you to that promise, Violet.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1IJXvHVje9uH0RGV956sdbDRtDQWQn1qM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'm glad that you both had such a great time.",
                "line": 32,
                "url": "https://drive.google.com/file/d/17z5Rt5PCg7N5PSCIojwKIi19W4pQjaTX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "3 People (Cid)",
                "subtitle": "...",
                "line": 33,
                "url": "https://drive.google.com/file/d/14OgjqE90pIh-kG0xg5Pv871F32hsbU6K/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "3 People (Aurora)",
                "subtitle": "...",
                "line": 33,
                "url": "https://drive.google.com/file/d/14OgjqE90pIh-kG0xg5Pv871F32hsbU6K/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "3 People (Elisabeth)",
                "subtitle": "...",
                "line": 33,
                "url": "https://drive.google.com/file/d/14OgjqE90pIh-kG0xg5Pv871F32hsbU6K/view?usp=drivesdk"
            },{
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Once these fireworks end, that's pretty much it for summer, too...",
                "line": 34,
                "url": "https://drive.google.com/file/d/1Ki7-8qiUqopQSFQz67E9uXJqximfPphS/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "All things must come to an end, otherwise we can't move forward, hm?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1C5mp2PA6tMLS2SIR0szNYkfR8j8wtkKf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Didn't you just say that earlier?",
                "line": 36,
                "url": "https://drive.google.com/file/d/14Xztyx1_T9brQwfFjwMML6m8ZcGMF8MH/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Oh, maybe I did.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1vAN_dw8eEx4xP1qz9GRA1NSTpjd81S1j/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "Heehee...",
                "line": 38,
                "url": "https://drive.google.com/file/d/1cnZEyDO-ozPkdzkhSIuuNIm3grCCe02A/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "So, did you enjoy yourself tonight, good sir?",
                "line": 39,
                "url": "https://drive.google.com/file/d/1_hEMD7Setrxr8gwaJke8dve7hwiwjA1A/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hmm, well, I guess you could say it was productive.",
                "line": 40,
                "url": "https://drive.google.com/file/d/122vvx8KKPiN4lqkdmkMh6fSZrnWYMR6S/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "But not \"fun\"? How very like you to choose such a word.",
                "line": 41,
                "url": "https://drive.google.com/file/d/105Xwg0m6EIHVm8s4oto3THufewA_jWuW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "What about you, Violet\u2014",
                "line": 42,
                "url": "https://drive.google.com/file/d/1WTml6nRapO6UWFrQvt87elXWQM5_k-mS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Huh? Violet?",
                "line": 43,
                "url": "https://drive.google.com/file/d/1-z-55NHf5HqmMHmgJPpttyU8PmDLn-Q2/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "This concludes the fireworks display. Thank you all very much for coming this evening.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1TQcORj0OXVyLkD8bfZRTXuIvVQjxqmdX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 45,
                "url": "https://drive.google.com/file/d/1z0NLxKJMeWPrUURtXD2ruHYM1-ohPlAo/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "...It seems she had to return as well. Back to whence she belongs.",
                "line": 46,
                "url": "https://drive.google.com/file/d/15p9J7Kb56aPSVpiTaVLHGuTcF4UEtaAQ/view?usp=drivesdk"
            },
            {
                "name": "Elisabeth",
                "name_variant": "Elisabeth",
                "subtitle": "It's time I make my way home as well. Mary will begin to worry if I stay out too late. Thank you for the delightfully thrilling night, my good sir.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1xjSYeFrBH2LaVRm8sp9xxrnIu9llkDJj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Man, what a weird night.",
                "line": 48,
                "url": "https://drive.google.com/file/d/12-XqmAORR9v2sKV8TWBa2nFzhrcL_rzF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(First there was a Japanese festival, and then a ghost-busting adventure...)",
                "line": 49,
                "url": "https://drive.google.com/file/d/16Rn2zaR4sN3wwrXjpR2czHRhJ77Ygrhn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Nothing wrong with lantern dances, but...the dead folks wandering in is kind of a problem.)",
                "line": 50,
                "url": "https://drive.google.com/file/d/12woZiHjI08w5Hy0PsbjPxHwjuS5S_foK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Better put in a word with Gamma so they do something different next year.)",
                "line": 51,
                "url": "https://drive.google.com/file/d/1lQ_cCREFPa_ZETrD19c4KdQld1ToEY3k/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Next year, huh.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1LIfBMSCtzUSP6DPXCmsNd1QoZob_0wUs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Another summer comes to an end.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1-FoMdiIAE2CZnRqRpphr44d7F8kE5PPp/view?usp=drivesdk"
            }
        ]
    }
}
// let setDoc = db.collection('data').doc('an_s2_e12').set(data['s2']);

//let setDoc = db.collection('data').doc('ssc_p3_c3-4').set(data['p3']['c3-4']);

let setDoc = db.collection('data').doc('es_adswy').set(data['adswy']);

// let setDoc = db.collection('data').doc('ln_v5').set(data['v5']);

// let setDoc = db.collection('data').doc('an_s101').set(data['kj1']);

// let setDoc = db.collection('data').doc('dropdowns').set(data);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
