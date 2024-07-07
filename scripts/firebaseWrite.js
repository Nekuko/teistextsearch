const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "tghms": {
        "e1": [
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Shangri-La Frontier, a full-dive VR game often referred to as god-tier. Today three friends are having another lively session within its world...",
                "line": 1,
                "url": "https://drive.google.com/file/d/11vj3UFRg1gOzDv0VZJRqmg4IfA11R-ZW/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "And...there! One more left!",
                "line": 2,
                "url": "https://drive.google.com/file/d/1Wp9V8HMNBOTCX52oL93pF5f7rlnuSs7B/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "It's headed your way, Sunraku! Take it down!",
                "line": 3,
                "url": "https://drive.google.com/file/d/1Au7x1CywL1cZ4kTeZ2j9YvG5EsfDUiVG/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Yup, I'm on it",
                "line": 4,
                "url": "https://drive.google.com/file/d/1HBYKB92bTNEIVa9mkITbGXYsQ4GZieXq/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Come on, let's make this easy!",
                "line": 5,
                "url": "https://drive.google.com/file/d/1wtzK4Y4F7-OABA_R4u-JR4j1tFlQ3EmU/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "...Okay, guess that's that. Good work, you two!",
                "line": 6,
                "url": "https://drive.google.com/file/d/1dwYNTqOPPdRqs5tyl61oVAPEDKRdqaVX/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Higher-level monsters sure are great for farming XP. I'm gaining levels like crazy.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1EtN5vONg-m0VY5OypKuUcr4Ida-0inDp/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Good, it's about time you stood on your own two feet. I can't babysit sit lowbies forever, you know.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1W7C-3fk5IK0jm1G7J5zEDHLZb1WodRey/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "And just whose fault is it that I lost levels to begin with, hmm?!",
                "line": 9,
                "url": "https://drive.google.com/file/d/10nnLFJgfxTjcCgv1dfG2jhVncXY-Jg8y/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Huh... Hey, check your drops, guys. Did you get anything weird?",
                "line": 10,
                "url": "https://drive.google.com/file/d/133SxWRPHYstgUvVgEzAwSQobQ1JtN-dB/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Anything weird? Let me take a look...",
                "line": 11,
                "url": "https://drive.google.com/file/d/1KkNg75IRSiAdP3rLBYgEIf7-uxWI-SEr/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Oh, you mean this? What the... It looks like a VR headset.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1clL78sKBJHfxCJ_yDQQ3MzE0JvrwETb_/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Yup, that's it. Are they saying we should do VR in VR?",
                "line": 13,
                "url": "https://drive.google.com/file/d/18nCBQwT95RjUKYylPeOQdJ-Tlpuj8yBI/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "No telling unless we try. Okay, Sunraku, put it on.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1An9xPrLEaTMMvkfWRdejVIYmRUHe8dV_/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Hey, don't just assume I'll be the lab rat. I'll give it a go, though.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1Y9K9rtA6gkLWyYK_5G58r9DyW9g6xYQY/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "...",
                "line": 16,
                "url": "https://drive.google.com/file/d/1lqptgAcmDi-NOF_yYCHKDh5dzAKjuA08/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "...Well?",
                "line": 17,
                "url": "https://drive.google.com/file/d/1u5G35O-wS1F5z021ANhMs2kHPnDIKT5J/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "...Whoa. Is this some kinda unique ev\u2014",
                "line": 18,
                "url": "https://drive.google.com/file/d/18JesBAXzVTECIfMUI6gqB6j-cCC7cbjM/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "\u2014ent?!",
                "line": 19,
                "url": "https://drive.google.com/file/d/1BfWxD6W4qRIFu5lFHYaF50Nd5v57OHbr/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Wha...! He warped?!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1Y3XaYJXCp021juYVadgeK3Xa7P-dsx7B/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Hey, Pencilgon! Did Sunraku just say\u2014",
                "line": 21,
                "url": "https://drive.google.com/file/d/1pF2erZT2QtY8cXIbMAbg6bZMGG5jJGTx/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "...He did. A unique event. So what's it going to be, Katzo?",
                "line": 22,
                "url": "https://drive.google.com/file/d/1t79wcubR8mi4S8MnDMuBy5crdQW0DYL1/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Like you even need to ask. We can't let him hog all the fun!",
                "line": 23,
                "url": "https://drive.google.com/file/d/1g4FusCXcDadsM-EhRYaj-17ZSWOusDZ0/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Damn straight! Now, come on! Let's go catch him!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1uNLimjvXEsutNb9O0d2x_nOKJOwb8wVG/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Whoa... Where are we?",
                "line": 25,
                "url": "https://drive.google.com/file/d/1psFNVCgzCTQrtBxkuo4XoDIm5TgxCD_-/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "It looks...like an ordinary town.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1IkaoaI6vfFFuvgiYkA4srQ0EIH6Wo7gM/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "...Oh, you guys came, too. Not sure that's a good thing, though...",
                "line": 27,
                "url": "https://drive.google.com/file/d/1JuyPKnEcwiPe9hkHqqJflYdFjUTyGRj2/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Aha, the event hog himself! This time I'm gonna\u2014",
                "line": 28,
                "url": "https://drive.google.com/file/d/1yWAfOZ8WlTAGt0KbMrqg4CWfcRVC3CLQ/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Hate to burst your bubble, but that's not what's going on here. Or maybe I should say, we got bigger things to worry about.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1YAN3t1lCIpoTz_fh7l36GtukOhUdAvBW/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Notice that there's no map or anything displayed here? And as for logging out...",
                "line": 30,
                "url": "https://drive.google.com/file/d/1so2kesNZL2i0ygPwaiw5CUo8U9O6Ozu8/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Oh dear, looks like I can't.",
                "line": 31,
                "url": "https://drive.google.com/file/d/13OGi8F0w9q-EyJlWbZ_P7IfOkJodWOtq/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Ugh, for real?! Should we contact the admins?",
                "line": 32,
                "url": "https://drive.google.com/file/d/13Omi_CZ9PUCadwF9okyiRbSISRy8-y2X/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Can't imagine the SLF team missing such a rudimentary bug... Maybe this is part of plot?",
                "line": 33,
                "url": "https://drive.google.com/file/d/1RnjkHpmfFMpwolt3IqLCEjewExMkRo0b/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Anyhoo, we're not getting anywhere like this. Let's go chat up some NPCs and see what's up.",
                "line": 34,
                "url": "https://drive.google.com/file/d/19YPZumSQhTrCIthTRpfHELAiW82mUc73/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Meanwhile, in another world\u2014",
                "line": 35,
                "url": "https://drive.google.com/file/d/1XmFjWamD58v2egn083TTLWeA0qdxjsdn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...So these are the artifacts you were talking about?",
                "line": 36,
                "url": "https://drive.google.com/file/d/1KyXsDuU3yPQHJU8J8YeTCE1obHxVB6Dx/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes. Zeta found three of them.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1ZNPJSbvwxkHjFrlwhDMljWD7B6sTJ-5I/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Interesting...",
                "line": 38,
                "url": "https://drive.google.com/file/d/1PgcvTLF_lA9v7Mzn5xRAjq2wFARpUK35/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Yup, these are definitely VR headsets...)",
                "line": 39,
                "url": "https://drive.google.com/file/d/1Ud46ZQhC3k5WIvxE0Wzj9aZlYEjLcX1X/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I surmise...that this part goes over the eyes. It may be connected to...the virtual space created by Laugus... I'm still studying the details...",
                "line": 40,
                "url": "https://drive.google.com/file/d/1Yjnj5XSfl1uunEMBmYbxmRrFFYFRVVbT/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(A link to a virtual space...?! Never thought the VR rigs in this world would be such amazing gadgets!)",
                "line": 41,
                "url": "https://drive.google.com/file/d/1K3aoUKiucjsy8r04Y3-9juXBiXZvDX54/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(What if using these plunges me into a game, a cryptic contest of life and death?!)",
                "line": 42,
                "url": "https://drive.google.com/file/d/18MXIdvYWAMeMAvbDkY5eKODBvKoNCnDl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Man, artifacts rock! They're like a dream come true for boys and girls everywhere!)",
                "line": 43,
                "url": "https://drive.google.com/file/d/1HLwFcBji_5cswmLKXos3agT9dRS_8YJ7/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "So...should we try using them?",
                "line": 44,
                "url": "https://drive.google.com/file/d/1OuZ09OrEa0cBhip6yhjq-6zowyqEFjy_/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Keep your distance, Cid. There's no telling what might happen.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1bp1w6tT5UigYDYqhux6hnAkNQTJgUpNO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(So that's your play, huh... Very slick, Alpha, very slick. You always find ways to leave me out of the fun!)",
                "line": 46,
                "url": "https://drive.google.com/file/d/1DuHfi1WxixZ5MHRd5uXP8nvPtLLGHA41/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So if these do take the wearer to some unknown place, which of us has the highest chance of survival if something happens?",
                "line": 47,
                "url": "https://drive.google.com/file/d/1JOfLN5si4iaABdV-4qI3yq39fQ1X7f96/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Well...you, of course.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1ySDECEEa5snEGGZHBcQf0iOAFf4xdghZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Heh, then there's nothing to fear. I volunteer myself to gaze into the abyss.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1D9rnVS-HPfjXhKEmVgBYJ91uSpVaicHq/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Cid...",
                "line": 50,
                "url": "https://drive.google.com/file/d/1xBVI9IAivPG2ffX9x-xgBgDKuvFiaNZD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'll see you on the other side... Now, here goes.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1HGLqFHokOvu8fadPYDOn8J0D4JWO4kw1/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...He put it on.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1LD7tn4m97zXnkosHBod9XPBQf70DQ8t3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 53,
                "url": "https://drive.google.com/file/d/1iZQU4VEQwEyTeWc6xb7dk24Gnsl2Hkkj/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So? Do you feel any different?",
                "line": 54,
                "url": "https://drive.google.com/file/d/1pYSDhlkx25QTNsAmKOAOQqLu1-Rf7rBg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 55,
                "url": "https://drive.google.com/file/d/1heA9mCLY-BK_qcu8YIlIji42tKpr8PgI/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Um, Master...? Hello?",
                "line": 56,
                "url": "https://drive.google.com/file/d/1bBUM1KproHMYVgJo8xDIz20kyCgbU8zV/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...He's unconscious.",
                "line": 57,
                "url": "https://drive.google.com/file/d/12D2MaGky3Q_wINW4FzeA5XEyfjP-zQGJ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Wh-What...?",
                "line": 58,
                "url": "https://drive.google.com/file/d/1lN6Wc58pLs0GX7cAiciGU58mnZZIdpai/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...You wait here, Eta. I'm going to report to the rest of the Seven Shadows and discuss a solution!",
                "line": 59,
                "url": "https://drive.google.com/file/d/1Xptqi7pKcTaOJWP4OFy_SXmIXU17poVj/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Please be safe, Cid...",
                "line": 60,
                "url": ""
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I...don't recognize this forest. Not that I was ever any good at telling forests apart to begin with, though.",
                "line": 61,
                "url": "https://drive.google.com/file/d/19LDRcv92sHdJY-HnqnrWkbRumr_mkeic/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I thought this was gonna be VR, but it looks so real that it's kind of a buzzkill...",
                "line": 62,
                "url": "https://drive.google.com/file/d/1eUdkJhRZwdXlIXtzcE523_tlv9s2n8YB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Sure would be nice to see something besides trees... Hm?",
                "line": 63,
                "url": "https://drive.google.com/file/d/1marBVVg6Pv3E8luHquMnuU-kibqKRqXO/view?usp=drivesdk"
            },
            {
                "name": "Wethermon",
                "name_variant": "??? (Wethermon)",
                "subtitle": "...",
                "line": 64,
                "url": "https://drive.google.com/file/d/1TnkErRucemERoI-Sj8pDVf9P67n3Czid/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "A suit of armor...or should I say, samurai armor? Things are getting Japanese all of a sudden.",
                "line": 65,
                "url": "https://drive.google.com/file/d/1pxFoknSsAodCLZvpw_T1btUrUMY1Ypif/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "But I can dig it! I love subculture-y stuff that slaps different settings together!",
                "line": 66,
                "url": "https://drive.google.com/file/d/13XV5ktVlbWSJHNZMnRtNp7c8fRqL-upj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "This thing's pretty rusty, but maybe it'd move if I fed it some magic...",
                "line": 67,
                "url": "https://drive.google.com/file/d/1JzWVfMqeOgUZD2pluooWmUFeqjgQJtYz/view?usp=drivesdk"
            },
            {
                "name": "Wethermon",
                "name_variant": "??? (Wethermon)",
                "subtitle": "...",
                "line": 68,
                "url": "https://drive.google.com/file/d/1LSNJj8kSB7JvPrpdosUnKNFT6eJF1knD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Hmm, nothing. And here I thought it'd be cool to have an armor-clad minion tagging along.",
                "line": 69,
                "url": "https://drive.google.com/file/d/1WVPXqBlGg2FuafqYeB38qRks-LHloxKJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Ah, whatever. More importantly\u2014",
                "line": 70,
                "url": "https://drive.google.com/file/d/1jdIQCun8cnm3mUaoGNqNk_uYNPHnbRJN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...I'm starving. Didn't realize hunger would still be a thing in VR.",
                "line": 71,
                "url": "https://drive.google.com/file/d/14fAmvEP6l33a6ogq8VyJiZp8vEXltqfZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Guess I'll start walking and see if I can find anywhere to get something to eat.",
                "line": 72,
                "url": "https://drive.google.com/file/d/1_7swMAONAEDFaWmzg5N-9cv_JRn3Yl7R/view?usp=drivesdk"
            }
        ],
        "e2": [
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "\u2014And that sums up the situation.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1xrvsYS0PvSysLzul6gCVUMfuz1wPEWbJ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "How strange... I know he said would be back, but this is worrying.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1DWvyu_GOpTUWjVPjuLlmlAWIKrVHs42E/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Our lord is in trouble, and we're here doing nothing... Lady Alpha, is there no way we can go find him?!",
                "line": 3,
                "url": "https://drive.google.com/file/d/1qQL7aYe8Xor0XjNqSrbzwLZkD3L3Sgc8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Calm down, Epsilon...",
                "line": 4,
                "url": "https://drive.google.com/file/d/18Pu5OW8Wirwu3D7YmZclh_GFMvpkcPjC/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Two artifacts remain. If we use them, we may be able to save Master Shadow. But\u2014",
                "line": 5,
                "url": "https://drive.google.com/file/d/17bWf1gMf1Jtwt1reKfrZ0YKjX9F0070F/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "He's the only one who knows what's on the other side... It will be...undoubtedly dangerous...",
                "line": 6,
                "url": "https://drive.google.com/file/d/1J8X3-HqOEccDw9Fut-pbM3SzcI14J3wJ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "So what're we gonna do?!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1qTg63TkYlNkKpkuPcPVdAykh0O4Yc9m-/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "We all want to help Cid, so...let's decide who goes, in a fair manner.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1I_-4ssOinHkgQTY0g47Li8i81n6xT4-7/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes...with Seven Shadows rock, paper, scissors!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1YZQZ4A6Droq4QQhTY14NDF33Ev1wZQe_/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I'll call it out. Is everyone ready?",
                "line": 10,
                "url": "https://drive.google.com/file/d/1xrStBVMHFSc4x8vmTTLd3vu51_l34hpX/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Seven Shadows rock, paper, scissors! One, two\u2014",
                "line": 11,
                "url": "https://drive.google.com/file/d/1EBzUWMdQtaYIYxRZqBPq_oESyuxMFdhp/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Seven Shadows (Alpha)",
                "subtitle": "Three!!!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1cppkpiJjyBy37QHEc5lG0YLtJ_Lw1VLY/view?usp=drivesdk"
            },
                        {
                "name": "Beta",
                "name_variant": "Seven Shadows (Beta)",
                "subtitle": "Three!!!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1cppkpiJjyBy37QHEc5lG0YLtJ_Lw1VLY/view?usp=drivesdk"
            },
                        {
                "name": "Gamma",
                "name_variant": "Seven Shadows (Gamma)",
                "subtitle": "Three!!!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1cppkpiJjyBy37QHEc5lG0YLtJ_Lw1VLY/view?usp=drivesdk"
            },
                        {
                "name": "Delta",
                "name_variant": "Seven Shadows (Delta)",
                "subtitle": "Three!!!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1cppkpiJjyBy37QHEc5lG0YLtJ_Lw1VLY/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Seven Shadows (Epsilon)",
                "subtitle": "Three!!!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1cppkpiJjyBy37QHEc5lG0YLtJ_Lw1VLY/view?usp=drivesdk"
            },
                        {
                "name": "Zeta",
                "name_variant": "Seven Shadows (Zeta)",
                "subtitle": "Three!!!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1cppkpiJjyBy37QHEc5lG0YLtJ_Lw1VLY/view?usp=drivesdk"
            },
                        {
                "name": "Eta",
                "name_variant": "Seven Shadows (Eta)",
                "subtitle": "Three!!!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1cppkpiJjyBy37QHEc5lG0YLtJ_Lw1VLY/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Looks like we have our two volunteers.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1W_TUMV1Nrd45bAzb7SLvnAXPyPalLOYI/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Lady Alpha and Delta... Please, bring Master Shadow back!",
                "line": 14,
                "url": "https://drive.google.com/file/d/1gkTYJDEk_1ARXWYpFB2VnTJOOfOab8Hl/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Hmm... This gives me time...to figure out those artifacts...",
                "line": 15,
                "url": "https://drive.google.com/file/d/1WP6PLNDMjifQemOkLzDPUm954AdO7W8X/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Well, there's not much else we can do. Please rest assured we'll look after things here.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1jXlviWcAUmrZsbuj7c0KmMPe6y1GMZ08/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, thank you, everyone. We will be back with Cid, I promise.",
                "line": 17,
                "url": "https://drive.google.com/file/d/19IisUv5kENb6lFIGvFhmWiIO9-9_jhBe/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "See ya in a jiffy!",
                "line": 18,
                "url": "https://drive.google.com/file/d/13_K7RLrr2evkEw3LsZi-6pjmC0Jv80SN/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So this is the virtual space... It seems to be an ordinary town. Delta, can you pick up anything?",
                "line": 19,
                "url": "https://drive.google.com/file/d/10tVQKxYgJcDBVbl8Gic5JrhLN-fLUeCc/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "*sniff sniff* I don't smell Boss man!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1NY2UCjhozrakBdSZDDh3pBWN71AWj58v/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Which I suppose means...he hasn't come here yet. Still, it would be foolish to act blindly.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1myROCzCvsRPWlBJjl8pRizKMb3lQugyo/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Delta, let's start by gathering information on our surroundings. We need to be aware so that\u2014",
                "line": 22,
                "url": "https://drive.google.com/file/d/1U6X6xIla66GlTducWPQN3oa-d0MoH1wb/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Hey, do you have a second?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1ViNJXtDILvQNiskD_8Rdbw3ozvCSDrNn/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Um...pardon me?",
                "line": 24,
                "url": "https://drive.google.com/file/d/18d6oqcTjhZxf2oVtGXAwKmz8sXqDv9V-/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Whoa, talk about NPCs with detailed models. I can see the devs got really into making those black suits.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1yqialH46YZs3_t5Z_ivVWoQzbweatmw-/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Cut it out, man. The AI in SLF is super good, so talking like that might piss 'em off!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1CDAGG2S8hxOrt-W86iTWLn5IUIsUR2DH/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(A bird's head on a human body... It could be rare breed of therianthrope, or just some weirdo. Either way, we should remain on guard...)",
                "line": 27,
                "url": "https://drive.google.com/file/d/1BI6uWQMQt013kxsybOUBIev6OtxvQpyg/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...",
                "line": 28,
                "url": "https://drive.google.com/file/d/13BggIsNqAokMu9-riobulwut8HH7EeQN/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Huh? She's giving me some serious stink-eye.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1Dq7WZkl-e581rX70wthkPh2JPbHd8mZj/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "See, I told ya so.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1PSvRiE36gMDCNZus0Y9cXOfA031pbyVH/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "The birdy can talk?! Kinda weird, but I'm gonna catch it anyway!",
                "line": 31,
                "url": "https://drive.google.com/file/d/1Z6td4-b-D3DLP7tq19gtA-vog_-lFjU1/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Ack! Wait, wait! We aren't bad guys, and feather-head here is just a creep, not a monster. Don't worry!",
                "line": 32,
                "url": "https://drive.google.com/file/d/19XScHoX60w6FIlP4LvxBcjjczwujtGSn/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Hey!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1NBJgK3rWylW0xPiGHb0mJ_X2RLI3FpD-/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Anyway, we don't pose any danger to you. We only want to talk, okay?",
                "line": 34,
                "url": "https://drive.google.com/file/d/1vO3kVlQs4KdgLepK4D3k_edjs2zy9jY_/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Understood. Perhaps you'll answer our questions in return?",
                "line": 35,
                "url": "https://drive.google.com/file/d/10pw0FvmyULVm1xDVck_1QUJnxoefMwZT/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Of course. Sounds like we have a deal, then. But would you mind calming down your friend here?",
                "line": 36,
                "url": "https://drive.google.com/file/d/1hm60nazsm5lc3JAHCs83NgX7DktqUE16/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Stay, Delta.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1flYZpkPdgM-g-NP4Q0ErUUoNvk1vU2rF/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "O-Okay!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1QW7ayHaNDviEJjYdnGgyRBTrJBzck753/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Pro communicators are something else. She got us into the dialogue phase, just like that.",
                "line": 39,
                "url": ""
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Yeah, but I got labeled a creep in the process!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1PjFLPJcjULGEdP5S_3uOMh1kGtgw64Bc/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Whew, what a relief. Now we can finally get some info about this place from the locals.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1WxbyyOyfYXSYA1hyZxG6MQILObKHOfdk/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Locals? But we're...never mind. We'll explain that, too.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1HPMLI-HQh9WT1LpSRs8WhAkL_xho29BE/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "I see... And those artifacts are what brought you here...",
                "line": 43,
                "url": "https://drive.google.com/file/d/17zj3RolbHfOIOXxGJPtqsgJS4A2HkCmP/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Sounds kinda like what happened to us, huh?",
                "line": 44,
                "url": "https://drive.google.com/file/d/18PFpQJYokga8PGlbhsYuKw2rDPF6HZsz/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "On the point of similar objects bringing us here, yes.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1e_4OqPgybmvvM7HYjIz-HdU1-S5Aj6Qa/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Okay, so we know that this is someone's virtual space and not a game. Now, how do we get out?",
                "line": 46,
                "url": "https://drive.google.com/file/d/1p1sydJcw8EJdcUzoPoKU9IR5S9MzYijM/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Whaaat?! We can't go home?!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1f0hfxNup9vy8s-i1sJIvtTRGMXFPJqLX/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Calm yourself. Laugus will surely have built in some means of exit. We'll keep an eye out for clues as we search for Cid.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1VeO4hDHMIVGCfQqYawAG4KL_Qq-6uW1D/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Hey, how about we join forces? We'll help you look for this Cid person, and you tell us if you find a way out of this world.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1nHwKAY9-fm7Uh1PojaadIv18XcIrygMQ/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "I'd also like it we could pool our efforts while we're stuck here. We'll lend a hand in any battles, too. Well? I don't think it's a bad offer.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1gSixAMF0sxNRC8kE5FfzR5OKHKHzgnMD/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(The Shadow Garden in me says to avoid getting involved with others, but...I don't think we have any other choice, given the circumstances.)",
                "line": 51,
                "url": "https://drive.google.com/file/d/1esmQCT7k8ANiN1-qL8IXcKDcFQhmYbkb/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Very well. Let's cooperate however we can.",
                "line": 52,
                "url": "https://drive.google.com/file/d/19HD85XdTlQqgZnPh65mYHaGk5qkf3qoJ/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Alright, it's a deal! Thanks, um...",
                "line": 53,
                "url": "https://drive.google.com/file/d/1GZvC-_1W8_b6AZzFaPp4bOUBoHbSq5UW/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Alpha.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1T3yd5TdGHsYaySa6W3ShwyrWGuqaxOYy/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "And I'm Delta!",
                "line": 55,
                "url": "https://drive.google.com/file/d/1f4PmVIlbmPeZW7OvB7pqcMPkhQEYxTgI/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Alpha and Delta, got it! I'm Pencilgon! And here with me are Stooge No. 1 and Stooge No. 2!",
                "line": 56,
                "url": "https://drive.google.com/file/d/1r8xLuM2f-wFI9apfnRrxDa9ZpmEV_p37/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Wrong! I'm Sunraku, not a stooge, and definitely not a creep!",
                "line": 57,
                "url": "https://drive.google.com/file/d/1_oUZI-8mybOOCUR3KDlqJyzUTcbuY0KR/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "I'm OiKatzo, and I'm no stooge either.",
                "line": 58,
                "url": "https://drive.google.com/file/d/1MMuWsEze6Q6Fwt-WXSFN6ew8v-N_xHGC/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "A bird and a male that's like a female.",
                "line": 59,
                "url": "https://drive.google.com/file/d/1-WTlNsn8hNAGIUUCp0uycMhAMfUsfZKV/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Say, Alpha... Is your friend here okay?",
                "line": 60,
                "url": "https://drive.google.com/file/d/1Aam5o92TRQZI3fQTNKqvpJF5NhXToJDt/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What'd you say?! I hate people who say catty stuff!",
                "line": 61,
                "url": "https://drive.google.com/file/d/1OEamnPJntAGrR4chQZyAd5z3gNhXygCo/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Didn't take long for this relationship to go sour...",
                "line": 62,
                "url": "https://drive.google.com/file/d/1_EiHbLt8zUJFfe-IFWPSGfDoFm9OTEBK/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Yes, it doesn't bode well.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1oum_Ijo-9EPFSuyPAQkfBXPTAC1SwpW2/view?usp=drivesdk"
            }
        ],
        "e3": [
            {
                "name": "",
                "name_variant": "",
                "subtitle": "While Alpha and the others meet, Cid strolls the streets, having no way of knowing that there are other visitors aside from himself.",
                "line": 1,
                "url": "https://drive.google.com/file/d/16QCzL0bUewBUwtXOS9sXxNaT8u9dur7w/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Hmm, this place is plain as can be... I was hoping for something more obvious, like, I dunno, a city in the grip of a heinous villain or something...)",
                "line": 2,
                "url": "https://drive.google.com/file/d/15lN1B-IQkYJWY2f-W2r_I2F7slvf6rcj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(But this place being normal means more fun for me as a shadowbroker! Not to mention that it's the perfect setting to blend in as a side character.)",
                "line": 3,
                "url": "https://drive.google.com/file/d/1qZdQYXvo2tIPivIc1_ZTf_7aVU8lkK9U/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I just know some daring heroes are gonna come along soon enough to face off against the great evils in this world...)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1KOCcshRwA-SUykpisVB_0zk_mqMaCfWp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(And when they do, it's on! I'll give everyone in this place a taste of shadowbroker showmanship!)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1TGRjhLt3qkGF3obDUZLea0basIluSjTp/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "??? (Sunraku)",
                "subtitle": "Hey, can I ask you something...",
                "line": 6,
                "url": "https://drive.google.com/file/d/1y8L9hLOxIxKfxPj1dcishUOT0eksDZuJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Heh, knowing how to respond like you're nobody special is the first part of being a shadowbroker. Now observe the answer of a true side character!)",
                "line": 7,
                "url": "https://drive.google.com/file/d/1ppH5HnlIz-NJ5k4sajXEgCWn5BqkMyyc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wh-What is it? If I can help, then I\u2014",
                "line": 8,
                "url": "https://drive.google.com/file/d/1p_e1mhXYeYFmVZVPW3bvpebf-kUVwXmC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Huh?",
                "line": 9,
                "url": ""
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Do you know anything about this world? Names of places or any other little details will do.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1nJ1GTDWNFbb4s3cY_Vl3czZBRWI5h0Qk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 11,
                "url": "https://drive.google.com/file/d/12B60ttkpUoUvvUOd3WIuc77akf-X3SCf/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Uh... Anyone home?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1nX7I9e-zvCISNCxlF0m_kNoyogNZVOfq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(G-Get it together. He came on so strong that my brain shut down for a sec.)",
                "line": 13,
                "url": "https://drive.google.com/file/d/1oEQyXvfe7vcl_or-isYl_6ARxYZhvSMI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(But come on, no shirt with a bird mask? Isn't that a little too out there?)",
                "line": 14,
                "url": "https://drive.google.com/file/d/1UnVBjYisBk1yXPvcrCRvZYSoRaFkZ9X0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Wait...maybe that's his character type. Yeah, like he's the party's token weirdo! Except those guys usually end up being pretty strong!)",
                "line": 15,
                "url": "https://drive.google.com/file/d/1UDboKkvtDll89A0vMRD8CwUCZRY5Hps_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Which means...this isn't an ideal situation. I need to keep interactions with the heroes to minimum. So\u2014)",
                "line": 16,
                "url": "https://drive.google.com/file/d/1eDaB9akl4Ja6eDujsYRMwUuAsh2jenLC/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Um, hello? No need to think about it that hard...",
                "line": 17,
                "url": "https://drive.google.com/file/d/1d7re74BvNYgbEC2SGUQDfbUF6zYN2j0P/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I-I don't know. Nope, I don't know a thing!",
                "line": 18,
                "url": "https://drive.google.com/file/d/1WyV1f4Rqd7ot1_wQVQuaVFMimQJQVoHc/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Wha? O-Oh, really...",
                "line": 19,
                "url": "https://drive.google.com/file/d/1tuIEoLVw6yOUp7ProHCDRY4r_OtFyAt3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yup, really. So...be careful out there, traveler.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1QhhohrCWpu1UXltUGoFzPwZ2JmLP7coT/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Uh, sure, thanks...",
                "line": 21,
                "url": "https://drive.google.com/file/d/1iC-gncFAn9r06tgDzmYKoYqxyEtpDDUh/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "What the heck was up with that NPC? Not sure if he was being nice or trying to brush me off...",
                "line": 22,
                "url": "https://drive.google.com/file/d/1Cerhhy9fhaS31dBA3SvkmRCHEa6Om1xg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Whew, that was close. But run-ins with the main cast are always high-risk.)",
                "line": 23,
                "url": "https://drive.google.com/file/d/1kTywMMRtaTbjqTCSrphgW6Z6Jf3YClsa/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(My goal is to be a shadowbroker in side character's clothing. That means interfering with protagonists is a no\u2014)",
                "line": 24,
                "url": "https://drive.google.com/file/d/1T2nRDOU29JRiClfgL-Fyc8wQ5CMcAa2U/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Hey, do you live here? I got a few questions for you, okay?",
                "line": 25,
                "url": "https://drive.google.com/file/d/1f9nHqCGrDmx6-atN4J9fRxItOrsksIjr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "S-Sure... Hm?",
                "line": 26,
                "url": "https://drive.google.com/file/d/1b4V6M5IUi8ikm7lFC9MDFqcsl7bYi2VN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...This one looks like a girl, but totally moves and talks like a man.)",
                "line": 27,
                "url": "https://drive.google.com/file/d/1-w5HRVnm1RVZUcUka-TEgOatAy-v8fga/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(The so-called femboy role, eh... Yep, you find them in main character parties pretty often, too.)",
                "line": 28,
                "url": "https://drive.google.com/file/d/1XjHFbUBbZf0GfI40uY2Pg1D7Rt3Swgip/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(That said, it's not a great topic to bring up. There may be some compelling reason behind them being the way they are.)",
                "line": 29,
                "url": "https://drive.google.com/file/d/1e2n-ExP10palVEkmNPxvP4_-5qckRM-X/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Be friendly but don't get too close\u2014it's the best way to deal with a complicated heart.)",
                "line": 30,
                "url": "https://drive.google.com/file/d/1xuGY2-MQatvXEpga-_FtMjOYWHDSrHHl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "While I'd love to be of help, I'm afraid I really don't know much...",
                "line": 31,
                "url": "https://drive.google.com/file/d/1nkzD6XKWvGCtF-V_8ptjZzLix9TFLIa_/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Hmm, gotcha... Not like an NPC would know how to get outta here anyway.",
                "line": 32,
                "url": "https://drive.google.com/file/d/16yMCVqZpb8f76lgD2qdpP4wz8wvw_hN-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...NPC?",
                "line": 33,
                "url": "https://drive.google.com/file/d/1H_Wa5uA-_P7RuI3TS3e4eJ8kILCcIBWk/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Oh, uh, sorry. Just talking to myself! Thanks anyway, see you\u2014",
                "line": 34,
                "url": "https://drive.google.com/file/d/1FUZNs_AOE9CauVZ5DOEiHEUfIHqMUZkG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wait!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1J9QDK25qE5RkUxhyCRhXvpA7zzEIyxNa/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Many troubles may lie ahead for you, but...I'm on your side.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1ibv9VRdcG5FbVysEplxeARzJ69WcOr0d/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "O-Oh, okay. Thanks...",
                "line": 37,
                "url": "https://drive.google.com/file/d/1-9-G00LY0-msmCfcbecAfb8LCtt66j2k/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Virtual spaces really are something else. Seems like they even come with quirky characters straight out of a video game.)",
                "line": 38,
                "url": "https://drive.google.com/file/d/1YLbqQZorvCTEeCtd8psq2sUsgUzg68l7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(But getting called an NPC... Does that mean I'm pulling off my side character act almost too well?!)",
                "line": 39,
                "url": "https://drive.google.com/file/d/1RBgNVZtudU5L9sUz57u3NCb39Efy5I_a/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yeah, that's a great milestone! Makes me feel like I've reached a new level of nobody-ness!)",
                "line": 40,
                "url": "https://drive.google.com/file/d/1OTJar8Tz2cOsghL6eNwMp9uwdOogdwWQ/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Hello there, sir. Do you have a moment? There's a few things I'd like you to tell me, if you could...",
                "line": 41,
                "url": "https://drive.google.com/file/d/1tQV0QndQXhVKt8Kxr9rPxowgAYkQt0Ep/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Huh? I sure am popular today. Guess I can scratch what I just said, since I've obviously got work to do. Anyway, time layer it on thick!)",
                "line": 42,
                "url": "https://drive.google.com/file/d/1iKyKJ0w9S8kB7vIAebdl5V5NGZS-d1US/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Urk!",
                "line": 43,
                "url": "https://drive.google.com/file/d/11HZ_36rb-R73Fi_sQHadoqHN1A_lMKeA/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Whoa, what's that reaction? Shocked by my beauty?",
                "line": 44,
                "url": "https://drive.google.com/file/d/1c08b0TLevk6SRsP6-DQ-aJQME9uWHR0v/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I thought those other two were bad...but she just might be the worst!)",
                "line": 45,
                "url": "https://drive.google.com/file/d/1m6iKTSfbpLKCeyYhRWQKfxWXCpkoi8qg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(A smiling face with major serial killer vibes! I'm sensing fathomless darkness here!)",
                "line": 46,
                "url": "https://drive.google.com/file/d/1fjsGtBmewzzjKNO625_6mwHbDGx-7HjZ/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "My friends and I have been asking around for info, but haven't been able to learn anything worthwhile.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1HyvW08XKZwtfwLoOmWxiI0XWo9vXEA3V/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(But I'm also detecting Gamma-level intellect... Could she be the ringleader?)",
                "line": 48,
                "url": "https://drive.google.com/file/d/1yNIUvxHINlG7GPwGOLSFL5oPM-BHa6Ko/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(If so...then maybe now's a good time to drop a hint of my existence. A little foreshadowing that this unassuming extra was actually a shadowbroker all along!)",
                "line": 49,
                "url": "https://drive.google.com/file/d/10plLa1Zm_PUYOwuQ7Xm-q6eWDn0v8ix7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So, one who seeks to escape this enclosed world has arisen...",
                "line": 50,
                "url": "https://drive.google.com/file/d/1rW-nbMMfveM0IuoLGEnppqxipiwbibaf/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "...Come again?",
                "line": 51,
                "url": "https://drive.google.com/file/d/1FDyhOTIWPixYe8SOYnezX8Bd6totjtn0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "However, that time is not yet upon us. I shall be observing you...from the shadows.",
                "line": 52,
                "url": "https://drive.google.com/file/d/16r_sVdd_QfRXQ0-zkt5g-5lpEucq6XoN/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "...He's gone.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1mhfkgWCyL11ylZQai4LIRhSL0yGRJynD/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Yo, Pencilgon!",
                "line": 54,
                "url": "https://drive.google.com/file/d/1t0lre2u-hKBe2p9e0sI9lJMaS75v8sQw/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Learn anything useful?",
                "line": 55,
                "url": "https://drive.google.com/file/d/13_l5xx9tHvYD7TFCcdd4IGqPHypDpzoF/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Well...I spoke to an NPC, but all I got out of him was a bunch of edgy nonsense. Beats me what he was on about.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1OH1iYxwdZ4Qs_NQeMmVjsaWPNGsTJm7e/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "I tried talking to a NPC, too, but he gave me the cold shoulder... What'd I do wrong?",
                "line": 57,
                "url": "https://drive.google.com/file/d/1olGGoPNsTF50OlWqrY7SwXrlNcp0MeWm/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "It's gotta be how you look. My NPC was super nice to me, even though he didn't tell me anything.",
                "line": 58,
                "url": "https://drive.google.com/file/d/1CSQ27LHFG-hfXD0NGPxBFRzjFORaRaJc/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Being judged by my appearance over here too... I just can't catch a break.",
                "line": 59,
                "url": "https://drive.google.com/file/d/1aPhL0KlOpUS-19_N8I3DqVuoyQ00nM0i/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Your situation aside, some NPCs are just weird.",
                "line": 60,
                "url": "https://drive.google.com/file/d/1-Qfx4wEeyBXel6ExqRmp9MFFYNK2qlq1/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "While it's disappointing that we couldn't get anything out of the townsfolk, maybe Alpha and Delta had better luck.",
                "line": 61,
                "url": "https://drive.google.com/file/d/1atk8fx5juCKckedRTpwUKSV7f2EdjQnM/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "I suppose we should catch up with them and hope that's the case.",
                "line": 62,
                "url": "https://drive.google.com/file/d/1NFZzN5jMMWph_V0MpKpiIK_qHlntypMj/view?usp=drivesdk"
            }
        ],
        "e4": [
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Hey there, Alpha. Hope the investigation went well. Shall we share our findings?",
                "line": 1,
                "url": "https://drive.google.com/file/d/1FJ8NJ0lKI9uv3fwU2xN6bn2hhZa2blLW/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Would you mind going first?",
                "line": 2,
                "url": "https://drive.google.com/file/d/1fQUXqZ7eN9U7FLqki5fC_tFMwmtP4H88/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Sure, no problem. Except, we weren't able to turn up anything about this \"Cid\" guy you're after.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1GIXd0pF42M3xMcgZ-jPKU630dw30nxyx/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I see...",
                "line": 4,
                "url": "https://drive.google.com/file/d/1qhOp3CACZRoGgpZRDw4LtcKZ2ccNezSK/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Apart from that, apparently the currency of this world is called \"zeni\". Needless to say, we've never heard of it.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1V2_Un9BHi4lZvdqdIeFq7ckHppzK1WVy/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "They use the same currency where Delta and I are from. But in our rush to get here, we neglected to bring any with us.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1Px9EVoMTzaDiON57ef8e686sM3Io8EaC/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Speaking of, where is Delta?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1kBF7YzcL0p_GQ-SYIZ2RBoI8u-X-ku8r/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I sent her to find food, thinking we might be forced to camp for a while. Sadly, it seems I was right.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1wd8uU4A1qOpX-EgD9cClUbFAia3x1ikj/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Ugh, camping? Can't say I'm looking forward to it. I'm an indoor type.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1vmLk_gqTGtbYwuknLmkhsib0ubEe1gXa/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "*sigh* A tough situation, but I suppose there's not much we can do about it. So, is that all you have to report, Alpha?",
                "line": 10,
                "url": "https://drive.google.com/file/d/1yM6xvWdRiEPDfhTA2NH8c7CGNp3RWeOQ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No, there's more. It's about these \"levels\" and \"stats\" you mentioned.",
                "line": 11,
                "url": "https://drive.google.com/file/d/10vur0S1fLzUA1fR0UBzpXd6rShDl51nB/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It appears these concepts don't exist here. No matter how many monsters we slew, there were no \"experience points\" to be found.",
                "line": 12,
                "url": "https://drive.google.com/file/d/14YVNCMjkPXCC0N8g3dO_B45T-g8E6xKN/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Which means it's all about player skill. Hehe, now this I like!",
                "line": 13,
                "url": "https://drive.google.com/file/d/1JNtGjMktsG4xmvpNubZFgQ9RnLWPuq6K/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "I get that, but what about the skills we used in SLF?",
                "line": 14,
                "url": "https://drive.google.com/file/d/19v0gXYyPhwRJHYLb5784_PgROXd8c9WJ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "That's not something I would know, is it?",
                "line": 15,
                "url": "https://drive.google.com/file/d/1YtJzz18KnHSMVKFmsofm4GKQwCyCIHWp/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "T-True enough...",
                "line": 16,
                "url": "https://drive.google.com/file/d/1wJFCdCHi_tERDBqkS2vw5eJD3OzzakHy/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "In that case, shall we conduct a few tests in the forest while we set up camp?",
                "line": 17,
                "url": "https://drive.google.com/file/d/1Enord7UDbsZX6ztB-9T4D4uWOVQugFDS/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "That will likely tell us whether we can use our skills or not, and I'd like to check our damage output without levels or stats.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1_PnKOxF0PzLuT4RDbOF9QsJHw4rBkqgj/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Agreed! You in, Alpha?",
                "line": 19,
                "url": "https://drive.google.com/file/d/1CPYnHmlwBXjUrwpVatiKYABRqpCdqQmQ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes. Now that we're working together, your safety is my responsibility.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1nPrZB6lm6F8rM9s2L3ZYZT4ehzfQCm36/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Then it's decided. Tests...and hunting for tonight's dinner! Let's go!",
                "line": 21,
                "url": "https://drive.google.com/file/d/1iJOKXiEqN6EYrnqZin_4X1KKO3fe5hEK/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Boar, rabbit, and wild herbs... That ought to make a decent enough meal.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1nnunsww_9wsINJF-fLB2TUHSEnMULVHz/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Hold on, Sunraku. Aren't you forgetting why we came here in the first place?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1evCMOozM7IoVQ5SfMAOq-3CfqiZ-WLwS/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Good work, you three. Nice moves back there. So those techniques you used occasionally... Were those your \"skills\"?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1EWYcb0iMXqfAg7jPfAiTEvN9eDv4GCV4/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Yup, very observant of you. Looks like we can still use them here.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1gla-EJm9XqoAMkaDBlttGA-nAxJb5MN8/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Although they're a little tough to use since we can't see our recast times or HP changes... But, that's where experience and instinct come into play.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1VYznQ2X5j5vz6AV8owxhLqd_8kIZ-_5V/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Right. It's better than not being able to use them at all, and that's enough.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1CQ7yaYa11SxrkxBjma8bEw_tnTQAzcaa/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Now that we've figured that out, maybe we should start making camp\u2014",
                "line": 28,
                "url": "https://drive.google.com/file/d/1BI8xXgol96hxNxYhOops5A2pxa987zN2/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "...Wait, we came here without telling Delta. Do you think she'll be okay?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1dGM4uHEVIiLMM0m5OzehOKhABxt6VyLq/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, no need to worry about her. In fact, she should be back soon\u2014",
                "line": 30,
                "url": "https://drive.google.com/file/d/1SRI5p30pE1t9jdKYxLu4Re51mpX5cyiK/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "BOSS MAN!!!",
                "line": 31,
                "url": "https://drive.google.com/file/d/1PcxuALX8QB2Nm1ALk9bXbTDOwF-_zX7o/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "See? For a nose as keen as hers, tracking my scent is a simple matter\u2014",
                "line": 32,
                "url": "https://drive.google.com/file/d/1l0Ye-JYOhJG9e2dhDkIb8n43gWzmsoUH/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Wait, did you just say \"boss man\"?",
                "line": 33,
                "url": "https://drive.google.com/file/d/11Bu8HiEaBZv4737P5CzaIRUMBgiNQ8Hf/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I did! But...where is he?",
                "line": 34,
                "url": "https://drive.google.com/file/d/1ZHtJu2vs54RDRxWen0ABtkJ0mUseYUgh/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "What'd I tell ya? She's no good.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1Hs9oWfU06jJQHbfiFsFsag0NHqV0m_VT/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What'd you say?! I am very good!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1b6EDt-A8zPQKZdbkFnIY4mpuMMfTiBWE/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "But I smelled metal and heard it too, so maybe my nose isn't working right...",
                "line": 37,
                "url": "https://drive.google.com/file/d/1zEX5zDRujNikgtwnBqVfj9_N0x0c7FRq/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I have faith in your senses, Delta. It's possible that we encountered him without knowing it.",
                "line": 38,
                "url": "https://drive.google.com/file/d/16AQuNlNNrxEm5ljELvnIPuPkQu_NpwLM/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Does that ring a bell to anyone?",
                "line": 39,
                "url": "https://drive.google.com/file/d/1ujawRLnyEy8QCp7JL61Ls-bkcxuSTMH4/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Hmm, let's see... I did talk to this one NPC with black hair that gave me the cold shoulder.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1kHdW86iV0CmYUunH-EoBheueUYQ4gk7T/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Could that be...?!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1V2gVmXW-504-m-5QB36QSIZKVVR9SgP-/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "But this guy seemed pretty weak\u2014not at all like you described. Just really average.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1redq6Qv034cCrGuydc_DSR6yQHQ5DtgP/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Hmm... That's not much to go on.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1Lu39xhS1zcZiOsZX2yhJ2SL9fA_JhsOl/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "This one NPC that spoke to me was nice enough.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1JpSx3AoYU5YfPelyokQNq3Di9hTIyORY/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Boss man is definitely nice!",
                "line": 45,
                "url": "https://drive.google.com/file/d/1lTe7KeV8Fr0TMKDmSLOr4XRVhFy6KdbK/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "He felt kinda ordinary to me, though... More weak than anything, I guess.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1doulQD19f6fvoWJUQlX2T92q0y4sfx67/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Then that's not Boss man.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1DmkzBK1wXW6sMNA5fgrSPzSTwgB1MGKX/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "I met someone with a bad case of edginess, but he\u2014",
                "line": 48,
                "url": "https://drive.google.com/file/d/1JFLwTMt_z28_pOW47TXR_56wBL2SUk02/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "He was ill? Cid is the very picture of health.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1RnJCENyUdQcOLvnSqbfs-KmOlkSYeQyF/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "No, that's not what I mean... He said something cryptic about watching from the shadows\u2014",
                "line": 50,
                "url": "https://drive.google.com/file/d/1q65smAaMU3ruggBFAP8mtedAwAhA8Oo0/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Shadows...?!",
                "line": 51,
                "url": "https://drive.google.com/file/d/129hWGmjRmCSIOW1EmNu_PalHv9C-ahiD/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Black hair, soft-spoken, and says cryptic things... That has to be Cid! Let's go find him at once!",
                "line": 52,
                "url": "https://drive.google.com/file/d/1xtw1IyA_vu_c5vgq4yycC-T075B4oMyB/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Yes, ma'am!",
                "line": 53,
                "url": "https://drive.google.com/file/d/1D3allhw_1FWrxJOeaxUQy0VjfvIIcQnb/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "...Man, this Cid guy really gets her engine revving.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1r8PIkUvchZVERTj7EpgRdm3izzceal9F/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Not surprising. Alpha is a girl, after all.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1rsS90XhXqu7U4tooOrml-M8-xqHFOXtv/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Is that why? Anyway, should we go after them?",
                "line": 56,
                "url": "https://drive.google.com/file/d/1PpnQbpc9f6YjxbmZV4VotbQ4_Joe5HQk/view?usp=drivesdk"
            }
        ],
        "e5": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...Hmm. This town is really...plain. So plain that I can't think of any other word for it.)",
                "line": 1,
                "url": "https://drive.google.com/file/d/1LF8xpJC40HnXeal9z3LBV1r4YqUlZT42/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(And so far, that bird guy, the femboy, and that sketchy lady are the only people who stand out.)",
                "line": 2,
                "url": "https://drive.google.com/file/d/1duYW6bdxe9Wtuox2edxAbC60B1KxRnSS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Heh... Sounds like a pretty good place to live as a background character, huh?)",
                "line": 3,
                "url": "https://drive.google.com/file/d/15j9kcS3wfzcqQfeIidGUpXNhmvBwSUq3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(All I need to do now is stick to the shadows and look for a way out, Occasionally assisted by those main characters, but never getting too close...)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1iBrMjhdiOsyk_NLCthAnJp60jIL_SPTQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(There it is! The ultimate solution to this place...the ultimate side character life!)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1aBMNSmkowXkjdJUl8KTHLQe2y8h6VCux/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "BOSS MAN!!!",
                "line": 6,
                "url": "https://drive.google.com/file/d/1rL83UtobXHxuqtKNDgpGY5NfSn_67aVa/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hm? That sounds like... Nah, no way Delta's here.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1FgokkfI3bivwx90mrwxA_0iYXYkfr1tj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Uh.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1zqB944RxXI3Gsmw5OH3jnuamj1DLBq3v/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Hey, he really was that NPC from before! You should've said something sooner!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1RS4-xJOjaMFWRtRqP6yWowmpOCnOMRNq/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Anyways, we're gonna be working together from now on, so nice to meet ya!",
                "line": 10,
                "url": "https://drive.google.com/file/d/1jQdz9z-6h6kuw81DvkLthughkRZGsb6N/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Wow, you certainly did pull of the \"nobody important\" act well... Oh, but I don't mean that in a bad way.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1xHkh9vUJGoJHjY-3TGFEMBCvjiqmSHO-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Explain.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1Vi33tmGKKxP0f-LKp8rqzoDCSuEAxS1w/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Forgive me, Cid. I enlisted their help to get us out of this situation.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1Pm4tlwDsIYn-nZlNkU-DltJIYBRkNbXp/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Still, I'm truly glad to see you unharmed. Please don't do anything else reckless.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1B9fMp-G68IE-sL98kwwB2NxC-5UT4lav/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Oh really. Huh.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1Me3SkoJHI-EhU6WQem0xJLy5dIiopwY6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(It's over... Goodbye, perfect side character life!)",
                "line": 16,
                "url": "https://drive.google.com/file/d/1K2R-18wsDhQtt4l2w9eM28HU7cwnxJB3/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Now if we can cut this heartwarming reunion short...",
                "line": 17,
                "url": "https://drive.google.com/file/d/1OOWyGhSshREKyRyGyWK8yGz_0fYrWn2h/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(My heart isn't even a degree warmer.)",
                "line": 18,
                "url": "https://drive.google.com/file/d/1g0QF7OuDISA2CNLRqbBXuAE9NhHZtkOv/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "I'd like to go over the details one more time. Have you noticed anything strange?",
                "line": 19,
                "url": "https://drive.google.com/file/d/1W8IzKNp7vZ8V-QewTnAqIMpNDaDgPyDx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hmm, not really. That goes for the town, too. The very picture of mundane.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1P-ert8OmAnFLCEJdUvJ0_DV7nL9J2V9a/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "You're asking the wrong question. Of course he's gonna say there wasn't anything weird.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1wv_S3pU-MD72FBKT14-w8gmSX5azCaga/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Tell us everything from the start\u2014what you've done since getting here, what you saw...",
                "line": 22,
                "url": "https://drive.google.com/file/d/1fj3x5vKghhGWNtpDPrHf6_cNbiOK7jxP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Well, I put on the artifact...and then next thing I knew, I was in the forest. There was this rusty old armored warrior, and then\u2014",
                "line": 23,
                "url": "https://drive.google.com/file/d/11zmssF8l5Z55S9u5f9J1WoasSkgPWCSp/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "S-Stop right there! I just heard a very important word!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1HZZvvoOKVrrv8WmCAqUWnpl4SsnWgVMZ/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Wait a sec, by \"armored warrior\", do you mean...?!",
                "line": 25,
                "url": "https://drive.google.com/file/d/1x7M-inMhSPgbAvnCvtYmVwAsDHhSYDsJ/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "...Wethermon the Tombguard.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1AMx8cXWIerCOeHNpyTRRbDFcB8E0eNHI/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Wait, but we defeated him, right? I REALLY hope this is a case of mistaken identity.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1BQBBq-Eye70X_CeHFa39G7kGE-1QT0Lt/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You seem to have some connection to this \"Wethermon\".",
                "line": 28,
                "url": "https://drive.google.com/file/d/1l0gyj9_ECP9J_r5LpX7HynpgotXuftpZ/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Connection... Yeah, I guess you could say that. He's a monster the three of us took out together.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1YsaC5kPYoptdloy_LlE3J-HBAZX1WwhV/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "That reminds me, Delta, didn't you say you smelled and heard something metallic in the forest?",
                "line": 30,
                "url": "https://drive.google.com/file/d/1U5vK8uNU0OsQ6QVdEjSEub1QZsmKiRwb/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Yeah! Maybe it's the guy you're talking about?",
                "line": 31,
                "url": "https://drive.google.com/file/d/1HPNH39W90CIeJfSSlnoSczwezIbBdIJA/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Yeah. But why on earth would he be here...?",
                "line": 32,
                "url": "https://drive.google.com/file/d/10gCAOQXmwsSLm6hhKLoBhI-1WS3Hd6t4/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "We beat Wethermon, no questioning that. So this one may be unused or leftover data...basically not the original.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1l_DPyta1tSG7jbjMXtWKs0ZbhZr9i3lD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Smelling him is one thing, but if Delta heard him, would that mean he's moving around? He was completely immobile, last I saw.)",
                "line": 34,
                "url": "https://drive.google.com/file/d/19OqqFBaXKT_G0qJfRLxZhVdQh6DnoSk0/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Anyway, that's not our question to answer. But\u2014",
                "line": 35,
                "url": "https://drive.google.com/file/d/1s6nbURrZy6tDe5CoZLoQ2nX2jpvcM-Px/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "He, Wethermon, might be the key to getting home. As hardcore gamers, we gotta check it out.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1YEAsq83yrz2lzQAkbuxAEcbl6as6EPdi/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "*sigh* Just like a unique event. So our initial reason for coming here was correct.",
                "line": 37,
                "url": "https://drive.google.com/file/d/11v8-Byuym6HRtro6myXwxnD_spBdNuFh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'm not sure I understand everything, but can I assume beating that armored guy is our ticket home?",
                "line": 38,
                "url": "https://drive.google.com/file/d/1AS7M6tZmhsFcEBaITh6OncFSculVhMxp/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "You say that like it's gonna be easy. Us winning a rematch against that thing is pretty laughable, okay?",
                "line": 39,
                "url": "https://drive.google.com/file/d/18YM-3h4eE7FKYf7_zenbwupVG5UuDBFD/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Yeah, because we barely won the first time, and at a massive cost to us all three of us.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1HGmRh6x0lUtqNCAudlxuL7uV6TdoLb_v/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So it was only the three of you. Wouldn't that mean our chances are better this time around?",
                "line": 41,
                "url": "https://drive.google.com/file/d/1PsZ4yBdKcYhOe1LV3h74msGUeuV-POp3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I mean, there are six of us\u2014",
                "line": 42,
                "url": "https://drive.google.com/file/d/1MDRMS8eS8PtYIWOln7tDVs_SJeRCJ1GG/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Five of us. And I'm sure we'll be fine.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1usvnuZu9nCIcGFS0Is0k2zc5v3NWTAOj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Hold up... Uh, Alpha? You aren't trying to leave me out of the action again, are you?)",
                "line": 44,
                "url": "https://drive.google.com/file/d/1ZYu1mwRBKX_e7TSIt_OVAE0jHPNbl-YR/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You demonstrated your strength to us earlier. If Delta and I join you, I'm fairly certain we can overcome even the toughest of foes.",
                "line": 45,
                "url": "https://drive.google.com/file/d/14p2VNAOGRiPRrw4Rq49W9p8Umbg5bPvX/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I could do it by myself! So you just stay back, female male guy!",
                "line": 46,
                "url": "https://drive.google.com/file/d/1pDVt-NaR5EP__0LoS5WKU_chKUcu7CeQ/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Hmph, well, somebody's got a mouth...",
                "line": 47,
                "url": "https://drive.google.com/file/d/11aQ3LkXsoXLY4k2c35pC-HnrOvfHGocD/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...We'll be fine, Cid. No need to trouble yourself.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1cUEgsmN5xqdH15EpSU3XvPsQ0iQMv3_l/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I knew it! She's trying to exclude me!)",
                "line": 49,
                "url": "https://drive.google.com/file/d/1wmg9qO108ij55w9oh9T7_lSBHCBNokLU/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "But yeah, if you can't move that well, you'll only get insta-killed. So, it looks like it's just going be the five of us.",
                "line": 50,
                "url": "https://drive.google.com/file/d/16ulTw6iZrTVB_UrYVDQdHOlCqHBgrePz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Is that what you really think?",
                "line": 51,
                "url": "https://drive.google.com/file/d/1IGsmy1ucR7poIcVywaCrDIDgRqM4LcBV/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "About what?",
                "line": 52,
                "url": "https://drive.google.com/file/d/10j4mRB8cPO4GcFtdR91sXZJ97X3zCy9p/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Do you really think it's going to be five on one?!",
                "line": 53,
                "url": "https://drive.google.com/file/d/1jQL0d091WNppGI7UGa9ptqVenFVFwev-/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "...Oh yeah, that's right.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1E5evITMwSPyAI99ZmLAxYF99wGakDnsG/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "If he summons Kirin, then it'll be five on two... I totally forgot.",
                "line": 55,
                "url": "https://drive.google.com/file/d/15OgBDRj6hMdLET9jaokh270wg6bZt-li/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "That's because you leave everything to me.",
                "line": 56,
                "url": "https://drive.google.com/file/d/167nFXQGSAsqWHDpKHJpsHIY_As8990Iq/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Hey, that's just division of labor.",
                "line": 57,
                "url": "https://drive.google.com/file/d/11jNnYh2vSMTs7PzLdK0kzz5pexp_tweW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Wh-What the hell...?! I'm fine with being treated like a side character, but to be completely brushed aside like this...)",
                "line": 58,
                "url": "https://drive.google.com/file/d/11U_ju_Bwq4mQC5y0rkgJg94CnUbdeIPT/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So, you surmised that our target has a companion... Impressive as ever, Cid.",
                "line": 59,
                "url": "https://drive.google.com/file/d/12srumaH4656UdRL8mDDlUm5Jtp5pFGPG/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'd like for the three of you to tell us everything you know about Wethermon and Kirin. Then Pencilgon and I will devise a strategy.",
                "line": 60,
                "url": "https://drive.google.com/file/d/1nSAbQyNyzUOEfJ1sFOxzwdOAOA6znDaK/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "You got it!",
                "line": 61,
                "url": "https://drive.google.com/file/d/1d9w0m67WdMYlvpD9KbX1c9zrSaPzw-eW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Sure looks like they're having fun stategizing. And all without a single thought for me!",
                "line": 62,
                "url": "https://drive.google.com/file/d/1F1roBEizZBovFMZo4lMuYqUMWAkGKTq3/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Boss man!",
                "line": 63,
                "url": "https://drive.google.com/file/d/1wFXj6vfsl3igLenEVOQ3L6RWEsCZLmsX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "My only friend is Delta, who wouldn't understand the meeting anyway... Good girl...",
                "line": 64,
                "url": "https://drive.google.com/file/d/1-Ro4za5RU5me_bYOJWtVkwQwHn3ufRwv/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ehehe! Delta's on your side!",
                "line": 65,
                "url": "https://drive.google.com/file/d/1Acm-DSa5td5hQzEf_pVnAvCWSG3ov7PG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Not that I'm gonna roll over and take it so easy, though!)",
                "line": 66,
                "url": "https://drive.google.com/file/d/1dFleucjbTnnTD7-MO-ISWDF5AkiISNSw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(They'll never know it, but I'm going with them on the Wethermon hunt! Count on it!)",
                "line": 67,
                "url": "https://drive.google.com/file/d/1ZakrnnRG3yxs5nwrZpA1u_14f1KLU3Id/view?usp=drivesdk"
            }
        ],
        "e6": [
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I wanted to hunt the monster with Boss man...",
                "line": 1,
                "url": "https://drive.google.com/file/d/13NWjYYCAXsnzeoiBE7QKyBQ8iiqbH6c9/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Delta, this is a good opportunity for us. We need to do well here so that he'll recognize our abilities, if even a little.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1i-kDwsaelF8LtE1H2Qm2GFEX3I8gV-_G/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Alright! Then I'm gonna do my best!",
                "line": 3,
                "url": "https://drive.google.com/file/d/1Z8OnFDsqc9S8T3BzzjL4Ma9PXvcMkztu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Even Delta joined them in the end... I knew that was gonna happen, though.)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1IR17MaAicalUpk6dgCZzMKcsQCldaqQO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(But hey, are these really the same woods where I found that armored warrior? They feel totally different somehow...)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1ByMNgSkfN0BCD2q69Lbv3WpoOuuCSWH8/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "The smell is really strong... He's close!",
                "line": 6,
                "url": "https://drive.google.com/file/d/1_8pFDE-lC2saK6IpPLMSF820hHGOIeG3/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Guess it's about that time. Is everyone ready?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1LdVgj5zsf1cmf9jQb4fun256XB95_NVc/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, of course.",
                "line": 8,
                "url": "https://drive.google.com/file/d/16_UGvrS0eLLsLwNteg8CIc8HIvyJDf74/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "If I wasn't, I wouldn't even consider trying this again!",
                "line": 9,
                "url": "https://drive.google.com/file/d/18ZMOgE7FUhcB7Zc0RKz5u9xzpNHUVDD4/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Ahaha, you said it, Katzo!",
                "line": 10,
                "url": "https://drive.google.com/file/d/1miWbmRde3wjFnIlLZixs7yWIZzohdbAt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Grr... They're even starting to throw around this weird camaraderie!)",
                "line": 11,
                "url": "https://drive.google.com/file/d/163Sdc9pgH2vkeV2BB-tszhi_H8G7TnWC/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "...There he is.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1oBc_Wdxexi9T027eVvagZkLB9YrQtxF8/view?usp=drivesdk"
            },
            {
                "name": "Wethermon",
                "name_variant": "Wethermon",
                "subtitle": "...",
                "line": 13,
                "url": "https://drive.google.com/file/d/1323ZGJVmpzAt2DuH92MvA1tttRiw3EYJ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So that's Wethermon...",
                "line": 14,
                "url": "https://drive.google.com/file/d/1N_qg3SEaIHJFobpUAhxK6EOaM3R_bsL9/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Okay, Alpha, Delta. Shall we do this as planned?",
                "line": 15,
                "url": "https://drive.google.com/file/d/1L4GgBbqCJautkDcKUcb0mCbXXiSFn_uN/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Graaah!!!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1gZ7x1_ZySgFZlWHkV802_aFUjm2SIufa/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Whoa, don't just charge straight in! The real fight begins once Kirin shows up\u2014",
                "line": 17,
                "url": "https://drive.google.com/file/d/1OAMU4Olhl4qZ9kMvqScCUQxMqZbYM7Um/view?usp=drivesdk"
            },
            {
                "name": "Wethermon",
                "name_variant": "Wethermon",
                "subtitle": "...!",
                "line": 18,
                "url": "https://drive.google.com/file/d/1F3HwG_nUrFZNvlELUC-hCLEmxiAimSh6/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Mmph!",
                "line": 19,
                "url": "https://drive.google.com/file/d/19HPZp1csvix2jLP3FIyQuAA9C7qWfCiI/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Huh? Is it me, or was that attack super fast?!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1k7pPLVzDlyrqE3F-uwJVjgrJpvlxdncu/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "It's not just his speed... Something else was off just now, too.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1qkBZqxTA2MOeDxuMIFKggSCfUSz20Qzh/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Right... He didn't say the name of the skill.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1546ipuGY6nTMG8oBEhLOr3hJ-rjPD4X9/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Guess there's no hints this time. Definitely different from the original.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1imvqP9xwJ79DR2ZYbkyiVYQg-2jMwT2Y/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Seems the whole no levels or stats thing also applied to Wethermon. But instead, he's been made much stronger...!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1S7iWjSner1XMj3wRF7u2ua2PE-hup_oy/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Nevertheless, we're lucky you're here. Dodging such a masterful attack with no prior knowledge could not have been easy.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1eipJZEvTTvYg6GjEDjzg0vtZuUk8jI5G/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Honestly, being able to evade just with what we told you is quite impressive...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1P-dwqkvuR505Q1-YyiuGlTvJxnmFZhFw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Hold up, this guy was still as a rock a bit ago. Why's he suddenly all powered up...?)",
                "line": 27,
                "url": "https://drive.google.com/file/d/1W14MueY0HwjynZ64r3fmEpTogY687RZ9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Wait... Could it be that\u2014)",
                "line": 28,
                "url": "https://drive.google.com/file/d/1zIi450MdSlCs-tv-aoXGyUSBusge5C5t/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "This thing's pretty rusty, but maybe it'd move if I fed it some magic...",
                "line": 29,
                "url": "https://drive.google.com/file/d/1FvXjgbv9nJlFLEQGqmiX7lK-05GJ15Xs/view?usp=drivesdk"
            },
            {
                "name": "Wethermon",
                "name_variant": "??? (Wethermon)",
                "subtitle": "...",
                "line": 30,
                "url": "https://drive.google.com/file/d/1sWoMZ1ZZ9j3Ry6iRbgogaI8BwVE1LHYo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Hmm, nothing. And here I thought it'd be cool to have an armor-clad minion tagging along.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1o6hgBqahTGB1Vg49Umkq-_L1bD6RSHY2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Oh no....It's all because I infused him with magic!)",
                "line": 32,
                "url": "https://drive.google.com/file/d/1rqoj6NM2REoxUFGBwbDQZ6i2ycg3LqbA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(This is not good...)",
                "line": 33,
                "url": "https://drive.google.com/file/d/1cXEFjJDatcNiBktKgE3tiIfL_aLhli9z/view?usp=drivesdk"
            },
            {
                "name": "Wethermon",
                "name_variant": "Wethermon",
                "subtitle": "...",
                "line": 34,
                "url": "https://drive.google.com/file/d/1NWrc1ouO1YeKRguSyVdVVRlCQhtfYXAB/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Is that...a horse?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1QjgxjeR7N3uwAbhi6x06i6B_-rMV4oUH/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "I get why you'd think that.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1zVJb5c8Jfl6GT0_i7CRnM2XGcHWQdRSb/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "That's Kirin! Pretty much a dump truck with legs!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1oBVbZ4hbkIE8I4PvYxv_yl3x53N2SyS8/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "So this is the one...! Lady Alpha, let's take it down!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1CJqpS1Mg_T8msIZ62EuesWbkzFOrjogj/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Yes, good memory! Though it feels odd doing so...we'll leave Kirin up to you two!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1FHc9aUldrZS8R4tDdMIZOAZGdl9GmTn3/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Okay, we understand!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1c8dKySngAqovkEWjcn-UQN6K_rYY4jBd/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Alright... So it's us three versus Wethermon, huh? Why does it feel like we're doing the heavy lifting?",
                "line": 41,
                "url": "https://drive.google.com/file/d/1tfN5pFUvBEIoW34i2cuSL3Qgy0CFqqVu/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Hey, not like we have a choice. We could also hold out until Alpha and Delta finish up on their end and come join us, too.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1dkwjGBhLl8j7t0sWfTqblpR_4J0-4qOf/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Like you said, Sunraku, this is going to be hard. Let's stay focused!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1jGG1G0SL1NX4RFuzsJHEtrIcQCUxFFZm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Yeah...this is far from ideal.)",
                "line": 44,
                "url": "https://drive.google.com/file/d/1d04BB63cm-GFnCQX66MjB_LxyUv-9jQc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Those three are pretty good, but Wethermon still has them on the ropes. And it's only gonna get worse as this fight drags on.)",
                "line": 45,
                "url": "https://drive.google.com/file/d/1Nst3dyUw-Jy8GQevE21gnEZ0k6sWt36U/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(You reap what you sow, huh. Which means, time for me to cut in!)",
                "line": 46,
                "url": "https://drive.google.com/file/d/1UUtCOd1gKmFYV6RRhNtUtE_d9HL72DO4/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Okay, he should be moving into the next phase anytime now...",
                "line": 47,
                "url": "https://drive.google.com/file/d/1irDxCW4pqt-TjlGT_xQDwKxn_kjR2Axu/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "So you'd think, but his motions aren't changing at all.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1nFVt93057RIqV2UMsqwn-qbMrtnVTOry/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "So what's our play? Can't say I'm a fan of keeping up this dodge fest!",
                "line": 49,
                "url": "https://drive.google.com/file/d/1tlDZhvuXBFqFp2qO7KDnzs8eTDA9XSJN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "...Travelers of this world. Are you in need of my power?",
                "line": 50,
                "url": "https://drive.google.com/file/d/1b22Rs9YhYyGKbVO0UZPa1YZvAZCdRq20/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Huh? Wh-Who the hell is that?",
                "line": 51,
                "url": "https://drive.google.com/file/d/1Q3EFLjKOTfvsKMObOAViBAu3H8168bLa/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "My name is Shadow... I lurk in the darkness and hunt down shadows.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1UpJMT_3Ius7jqiO-Fy-WnEOItD-l7Aki/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Shadow...!",
                "line": 53,
                "url": "https://drive.google.com/file/d/16Ls0SNMF7PJg7jIQy8rqwLEnesnCCz1R/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "A new enemy, now?!",
                "line": 54,
                "url": "https://drive.google.com/file/d/1azi4uquLOACu3EqsuoOFtK36-_ezGMUC/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No, he's an ally. But why is he here...",
                "line": 55,
                "url": "https://drive.google.com/file/d/1PUHtOCtzJpmJJAFiVQpLJn36g5idyljo/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...The answer is simple. You foresaw we'd have trouble and came to our aid, yes?",
                "line": 56,
                "url": "https://drive.google.com/file/d/1TfpAQALrzm8e_6UWe4KKer7sZ3BiofhP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(It hurts having her even look at me! This entire fix you're in is my fault! Not like I'd ever say that, though.)",
                "line": 57,
                "url": "https://drive.google.com/file/d/1HAMOgN5xpVy5vK8WsLCPd95BKSiL-xXG/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Whatever the reason, I'm glad for any help now! I can tell you're strong, too!",
                "line": 58,
                "url": "https://drive.google.com/file/d/1evNgwakqGjuGkch414X6jrX-U6H4oPfo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "The let us fight together. Alpha, Delta, stay on the horse.",
                "line": 59,
                "url": "https://drive.google.com/file/d/1QCkIcbHHFY8DvJ0HtrrEDNR7ExQlS2r3/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Got it!",
                "line": 60,
                "url": "https://drive.google.com/file/d/1CSCATW1NnClaDEeE8Ucaw6KoNbJnK0iU/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Of course\u2014and this time we won't need your help!",
                "line": 61,
                "url": "https://drive.google.com/file/d/1SEi3WitC7CbMtKN2dhrbVcYgGh6J0Any/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Shadow, right? The main thing here is to dodge. And then, when there's an opening, try getting in some hits, okay?",
                "line": 62,
                "url": "https://drive.google.com/file/d/1e8ZXtJDAP5BkrNe9U0OEQT8_kFdtcpHz/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Yeah, because he's not like when we fought him before. Think you can handle it?",
                "line": 63,
                "url": "https://drive.google.com/file/d/1t8x1f1WBryzKyPwWClelNx7g9Cj-o2l2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Heh, of course. Now, follow my lead!",
                "line": 64,
                "url": "https://drive.google.com/file/d/1fUgIoeYzSB0r7KxQO3IjaVEFquir3dL7/view?usp=drivesdk"
            }
        ],
        "e7": [
            {
                "name": "Wethermon",
                "name_variant": "Wethermon",
                "subtitle": "...!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1vcTnvL5kaGNrjrKhOa5a4Ci_12nlxlq-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "A brilliant maneuver. But in my eyes, it's still much too...slow!",
                "line": 2,
                "url": "https://drive.google.com/file/d/11GL5uWHXDVUNzGP8N_72f3rf4nZ3aVwi/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Whoa... Those are some clean dodges.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1eRaLfBULiVe4enIY_ykYKpdR9NrM2D5M/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "He's maintaining perfect distance with minimal movement... This is no time for being awestruck, but I can't help it.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1zGrKChhk4NQqk3k0rwDbR2LrvGb0e3s3/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "...Odd.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1Nr_Bw9zE9m4JVvSpVI1YehGpWiu-04mE/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "This Wethermon is different from the one we know in terms of both when he summons Kirin and the timing of his phases. It very well may be that\u2014",
                "line": 6,
                "url": "https://drive.google.com/file/d/1zYM9116Gqm3z6GZV4vsjZocIuP3rPIei/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "The victory conditions are different from then too, right?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1YPqfy0609HBKbGoADZWRFNvSy0qQRfaA/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Levels aren't a thing here, so it may be safe to assume that we don't need to do anything special to win, either.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1Yi48mzaiwQY6a4eTgXCjZfBPqSHwR3pq/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Huh. Meaning?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1cYRlD-1PnJLIzX6-vF0bBXHxs8FWvctn/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "We just hammer him until he drops!",
                "line": 10,
                "url": "https://drive.google.com/file/d/1EbB7bffPRKOoK-IRssC1sJl1ILJTVnZX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I see. It helps when things are so simple.",
                "line": 11,
                "url": "https://drive.google.com/file/d/16JcZVJSfEwzk3epZ3KX477ehDE34rPiq/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "We're the ones who'll be in trouble if this drags on any longer... So, we need to hit him all at once and end this fast!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1l_AF8Uk4qWLhMmJmPtVVL3-wL7kqZOlc/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "So we can finally stop taking it and start dishing it out! Bashing our way to victory is what we do best!",
                "line": 13,
                "url": "https://drive.google.com/file/d/1r13H1dAshc9z7ZtiyE0dapSXncL2Xztu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Time to crash down on him like an angry wave!",
                "line": 14,
                "url": "https://drive.google.com/file/d/1mQTrN0ssreufheWGNKyj9tzCs2MAC4-z/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Yeah! Just don't fall behind, Shadow!",
                "line": 15,
                "url": "https://drive.google.com/file/d/1DIQ2pKtoL0nN-pXgcrgCLaLKyk6g9p2U/view?usp=drivesdk"
            },
            {
                "name": "Wethermon",
                "name_variant": "Wethermon",
                "subtitle": "...!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1Xqr08ceuHFTozU6AuQT7vfD2cw8lvmzb/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "C'mon, get some! I'm right over...here!",
                "line": 17,
                "url": "https://drive.google.com/file/d/1rdaT6sxoW4enXV6DF1-mLhEpcZ5LK32N/view?usp=drivesdk"
            },
            {
                "name": "Wethermon",
                "name_variant": "Wethermon",
                "subtitle": "...!",
                "line": 18,
                "url": "https://drive.google.com/file/d/1Dp6EaYhOdUAeCIToUXwXCYSaXG-ZhFy9/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "He's distracted! Sunraku, Shadow! Now!!!",
                "line": 19,
                "url": "https://drive.google.com/file/d/1rVJgd5HKxepyycL0gD36eRPW-hh_xOtK/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Oh yeah, no need\u2014",
                "line": 20,
                "url": "https://drive.google.com/file/d/1Z2a13NGQk3xs0WTr_ywVqgwmaEqA4nhP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "\u2014To tell us twice!",
                "line": 21,
                "url": "https://drive.google.com/file/d/1MK8n2IzRT7Hh02qF4c0cuSVCHj-AB_Rt/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku & Shadow (Sunraku)",
                "subtitle": "Haaahhh!!!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1gD--pQpRGejkQOkoqVa4Y6HBuqIDL1Ac/view?usp=drivesdk"
            },
            {
                "name": "Shadow",
                "name_variant": "Sunraku & Shadow (Shadow)",
                "subtitle": "Haaahhh!!!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1gD--pQpRGejkQOkoqVa4Y6HBuqIDL1Ac/view?usp=drivesdk"
            },
            {
                "name": "Wethermon",
                "name_variant": "Wethermon",
                "subtitle": "...?!",
                "line": 23,
                "url": "https://drive.google.com/file/d/1mcYQ5Tbt0yoL-sm-LYQjZOk7SnhgdkKw/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "*pant pant* How was that?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1SNxqyXj7zjrjeb_g7yUThP5jkYKtGte0/view?usp=drivesdk"
            },
            {
                "name": "Wethermon",
                "name_variant": "Wethermon",
                "subtitle": "...Well done.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1eMWW7ZYvxH3w_uYDYaPyCW4Hgl6lVmUy/view?usp=drivesdk"
            },
            {
                "name": "Wethermon",
                "name_variant": "Wethermon",
                "subtitle": "Truly...splendid...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1bTpmyOPD_LP0dszCEQ2byZ1FFFu9MeKk/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "I know you're not the same Wethermon as before...but I hope you can rest peacefully again.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1ct03aVJkODNCzZyvGdPkIHZt6gjLp6XF/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...It appears you finished things up here, too.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1jOaW2g8BuhDVmJFGyybMgEa0ANDN0SIF/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Oh right, Kirin...is just a big pile of scrap now.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1srQAweHyV8o0HaUsrbvU95f3rXKOqWdd/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "For a horse it didn't look yummy at all.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1Rob2eL_f37O3i6gqXnGrHpZ0XNQytzWE/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Looks like you two really know how to throw down.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1sr08B_yVhit349_hsBtBP1ZOLZyfyDdr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "For us, this was nothing... Alpha, Delta, excellent work.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1tiRVhX4sHqIKc4quYEbkm-T9upNYahFJ/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Just who the hell are y\u2014",
                "line": 33,
                "url": "https://drive.google.com/file/d/1PEodJzwYlfNbfWbFIBpTW9uUNw8KnTjj/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "Woah, was that an earthquake?!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1njpqNvXXWseTjpMLM_lthACdYFx2JYWc/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...This space is collapsing. It would appear Wethermon really was the key.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1XcRaWN8tmT9J3RbhmBsMrHDhfGevhNvA/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Oh, that means we can finally go home. Whew, I don't think I could take sleeping in the wild any longer.",
                "line": 36,
                "url": "https://drive.google.com/file/d/15zI947P6gOikWodAXNe5FxTnaS2Y9QV2/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Anyway, we owe you all a big thank-you. For helping us take down Wethermon, too.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1NKaCFkIh666olDN8f-1C8fgntyLWKFit/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Heheh, that was super easy for me! Especially with Boss ma\u2014",
                "line": 38,
                "url": "https://drive.google.com/file/d/1ba7Zf7LjPpz-pJmQLxc54q2nDj4GDjPj/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...Huh? Hey, Boss man is gone.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1TKrub6gPmqKp_Mzsr07jLet4094wVwVU/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "I mean, he never came here with us to begin with, right?",
                "line": 40,
                "url": "https://drive.google.com/file/d/1eW4r3h08KhwP1AXVO3IujEfbA8b7-zBC/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...True. But I'm sure he will return to where he belongs. Now then...stay well, you three.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1pMZGfXOn7RUhGkMxheFA78B7YPCyz9o4/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Y-Yeah...hope to see ya around!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1oWVDXlF4qTfZX2km5Av5_WXBOJPTouX0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Ngh...",
                "line": 43,
                "url": "https://drive.google.com/file/d/1b2tKgi5SaQkvA4QizDjj8ApWVL2Rh1J9/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "My lord! Lady Alpha and Delta as well! I'm so glad you're unharmed!",
                "line": 44,
                "url": "https://drive.google.com/file/d/1h8S8Jg6eBOSDaFCnmmT32PR3ogo3lWJh/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Waaaaah!!! I was so worried about you all!",
                "line": 45,
                "url": "https://drive.google.com/file/d/1QRca8XPuBzdxYKHqi6KKhdnF3ezEiBv1/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So, you were watching over us. But we're back, and with Cid in tow.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1ayx0xtMjuJ7uzBuMpv1DTakuP7FYA3GC/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What a relief... We need to be more careful about how we handle artifacts from now on.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1nNLctYTQuF4VqyChPLjJvg7FUIbWKoIE/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Looks like these ones broke, though. As dangerous as they are, it's probably for the best.",
                "line": 48,
                "url": "https://drive.google.com/file/d/11MHWOXlmAW01IoOpzGtF8umjno8OmCL8/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I'll take...what's left of the artifacts... I may be able...to extract some useful data...",
                "line": 49,
                "url": "https://drive.google.com/file/d/1bP3hcOEU84u2gp5NzwssrJhcLihhDcNc/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Yipe?! I'm never touching one of those again!",
                "line": 50,
                "url": "https://drive.google.com/file/d/1KTByP5Am5CqVWShG-cqnrwKz-euhmO6S/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Good call... Eta, do take care in your research. Also, even if you repair the artifacts, you are not to make others use them.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1gtNFCgM10EDpU4uJcngUdoyAwjlMlSCP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Hmm...home sweet home, I guess.)",
                "line": 52,
                "url": "https://drive.google.com/file/d/1VuVF5PYCUzK_SwnjTFL4pvRresSIlJ3B/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I got caught up in a bunch of stuff, but I had fun and that's good enough for me. Besides\u2014)",
                "line": 53,
                "url": "https://drive.google.com/file/d/1pHBByjN1_7ZCWwRhV91SQxZAj9UA_-mX/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "This is... Hey, are we home?",
                "line": 54,
                "url": "https://drive.google.com/file/d/12AhwavnQfCIFH5FDCHn_OigKMy7Dw5h5/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Looks like it. Uh-oh, but it looks like our headsets broke.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1fKspJpKTJp7M4_q7OcQSHp1akYdY36O5/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "I'm cool with that. Not like we're gonna use 'em again anyway.",
                "line": 56,
                "url": ""
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "...",
                "line": 57,
                "url": "https://drive.google.com/file/d/1vSz0hNlETqodjZrSIHwY99-qD8akMVVO/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Something on your mind, Sunraku?",
                "line": 58,
                "url": "https://drive.google.com/file/d/1-PWet8NC8c9KHj3_82Udkcv1vtTKB3HD/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Not really... But didn't Cid and Shadow seem kinda similar?",
                "line": 59,
                "url": "https://drive.google.com/file/d/1gUICQQX99hvdQboe8xPw2kOr02QEMt4A/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Then there's that \"boss\" Delta kept talking about\u2014",
                "line": 60,
                "url": "https://drive.google.com/file/d/1g76fGFEud1HNomIHVDZwPGB4wPOxsCXQ/view?usp=drivesdk"
            },
            {
                "name": "Arthur Pencilgon",
                "name_variant": "Arthur Pencilgon",
                "subtitle": "Ugh, just stop, okay. Yeah, I am kind of curious, but I'm too tired to think now...",
                "line": 61,
                "url": "https://drive.google.com/file/d/1Q-i3Qu1PHWrQogwx8uACiskziBeABrlG/view?usp=drivesdk"
            },
            {
                "name": "OiKatzo",
                "name_variant": "OiKatzo",
                "subtitle": "True that... Between roughing it and Wethermon, I'm beat.",
                "line": 62,
                "url": "https://drive.google.com/file/d/1aX3lyt_INZu0oOkOp638xAjSNyz66Yub/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "Hmm... Eh, oh well. Guess I'll call it a day and stop sweating the small stuff.",
                "line": 63,
                "url": "https://drive.google.com/file/d/113NBk8h2PKRAOMEf8NVd0GAXdLKypefl/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Sunraku",
                "subtitle": "(That was a jam-packed experience but not-altogether-bad experience. Besides\u2014)",
                "line": 64,
                "url": "https://drive.google.com/file/d/1nVdBTmvAIw730q0EgCJYC663BpvPCtNT/view?usp=drivesdk"
            },
            {
                "name": "Cid",
                "name_variant": "Cid & Sunraku (Cid)",
                "subtitle": "(Fighting alongside those guys was really fun!)",
                "line": 65,
                "url": "https://drive.google.com/file/d/1Os-uaWQJcU0aZkawi7j0Juf1VG4nTShV/view?usp=drivesdk"
            },
            {
                "name": "Sunraku",
                "name_variant": "Cid & Sunraku (Sunraku)",
                "subtitle": "(Fighting alongside those guys was really fun!)",
                "line": 65,
                "url": "https://drive.google.com/file/d/1Os-uaWQJcU0aZkawi7j0Juf1VG4nTShV/view?usp=drivesdk"
            }
        ]
    }
}

let setDoc = db.collection('data').doc('es_hd2').set(data['hd2']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
