const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "p2": {
        "c2-13": {
            "e1": [
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "...",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1PJwSVQZQN_feT3eteMwjH1E57uKePKEd/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "(Lady Karen's remains do not exist.)",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1J_udAJHv-ERM3EHRXoH8o7WhnvnEy_Rj/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "(All thats here is a fancy gravestone that I had made by Mitsugoshi, meant to honor her life.)",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1lYARDHVKeaF2xpxTj2anThQ_zlK0G8jp/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "(...And just as with Lady Karen, Sergey Gorman's remains are not here either.)",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1WHl-k59iwEU-cCYkRFn30JBbFyz_AYd2/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "...I, Annerose Nichtsehen, one of Velgalta's Seven Blades\u2014",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1OntI5NGJkH7BTluz6dJhbN3Ws_muylgI/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "Officially commence this funeral ceremony by the Velgalta Empire, hereby restoring the good name of Karen von Herzog!",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1vT9jMngTlCkJNOFjybOKLNN9KEEmu8hX/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "...Lower the casket! Present arms!",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1ji5jrkqw8xcVaeM7cLlfU2PTrlVVAkKR/view?usp=drivesdk"
                },
                {
                    "name": "Velgalta Soldiers",
                    "name_variant": "Velgalta Soldiers",
                    "subtitle": "Present arms!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1GQwOs_i8Hfs_QZPYXCV3I4Xk-xPu2uqR/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "...",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1yujmirMOAZilfTXD_jRtvpnDUqg4b7H8/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "(Lady Karen... With the truth of Sergey's atrocities now revealed, your honor as an aristocrat and knight have now been formally restored.)",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1eQf2KpED91fp_gOZkf9kuWaDAm8hmSzu/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "(But...I was not able to deliver justice to Sergey with my own hand\u2014)",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1dlrmdZ4Zp3W1owuk1iqguzaZIx4Gi-y_/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "None (Annerose)",
                    "subtitle": "The Empire issued an official order to seize Sergey, but by the time I tracked him to Madilid, it was all over\u2014",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/124AsOh8xb1aFuyhZwpWduK3PeyIcCbwL/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "None (Annerose)",
                    "subtitle": "All that remained was a circle gouged out of the earth by some dreadful power, Sergey's shattered sword, and shards of armor.",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1WW3UkyE__UNw4hUw-2D6xBFJqJPOE9c9/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "None (Annerose)",
                    "subtitle": "It was obvious that someone had slain Sergey.",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1xLcCOyzv2dXjDJFrHOBzSmZv4E0i0Col/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "None (Annerose)",
                    "subtitle": "But there wasn't even a shred of evidence to indicate who was responsible...",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1_F80V8I6Fi2fvtsh-0BPWYNkZY5gQIKC/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "...A moment of silence!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1rU11ghlXgEL8jfjwbTrUmKwFrtnCRqNC/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "(As a result, I was unable to do anything in my role as a dark knight.)",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1NsPB3xMLKEuFohPs7QOAim-WMCQEDsCZ/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "(And regardless of who slew Sergey, I wonder if I would've been able to defeat him in such an overwhelming manner.)",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1iY-xNdUd3ws0AdX_XHWAXy8ZsjZR7WKg/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "(...Confronted by this grim truth, I have to ask, does my status as one of Velgalta's Seven Blades mean anything?)",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1J3Gp7XwuIvFeVHEn27glpUDvvmdyM0zb/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "(I'm still so inept.)",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1WiRkwQFR9f0MG_UmZE5gGataKhK9S8vY/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "(In terms of my skill with the sword and the path I walk in hopes of putting my abilities to use, I'm nothing more than a novice, ignorant of anything and everything.)",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1B2WaUgKWAPNrnJFXE_WJphD7KSxcmorx/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "...Lady Karen, as I am now, I cannot shoulder the honor I have inherited from you.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1zMKvKjxWWiXE-a_0msYxkVdVR5J6rX3K/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "Thus, I will relinquish my status as one of the Seven Blades and embark upon a journey of training, honing my swordplay and learning more of the world.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1Hc7zy2LDQT8l69Pt9QyUYiPE1W_2riSc/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "I pray that you will keep a watchful eye from the other world as I, Annerose Nichtsehen, conduct my travels!",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/15NyDZXAFekROmwRWb6PsxxLY0JImug0n/view?usp=drivesdk"
                },
                {
                    "name": "Annerose Nichtsehen",
                    "name_variant": "Annerose",
                    "subtitle": "...And so I bid you farewell!",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1PhLUrKZ_DqlEGumn3eI9kAbO3GOMelyG/view?usp=drivesdk"
                },
                {
                    "name": "Omega",
                    "name_variant": "No. 122",
                    "subtitle": "Does it feel kinda weird?",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1GQVwLCpAp7kbhXI1eB6cnlMOIcHc5GVy/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "No. 111",
                    "subtitle": "...Yeah.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1-Wcs15twzoAbrhuJVHER3Y9bgqR3v82v/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "No. 111",
                    "subtitle": "But it's also refreshing. Even though I had to deceive her to accomplish our goals.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1Gcnb_QRyq-r1K0tkwTQC-Hp4A2kn3zu6/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "No. 111",
                    "subtitle": "I don't know. It feels like I've fully cast off my old identity and been reborn as a new me.",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1Dk6ITRtxZvWO-t9UBwSnyZ2V5gGHekot/view?usp=drivesdk"
                },
                {
                    "name": "Omega",
                    "name_variant": "No. 122",
                    "subtitle": "A new you... No. 111, or should I say, \"Chi\".",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1IPVOX2kCssfsCT8EklcAgiBD3gJNBtsu/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Chi",
                    "subtitle": "And that would make you \"Omega\", hm?",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1Ooqx16N-Oi2ReiCpWZwTmTPfUMQlBrR0/view?usp=drivesdk"
                },
                {
                    "name": "Omega",
                    "name_variant": "Omega",
                    "subtitle": "Ugh, even after how far I've come, I still have to be reminded that we all have ranks in an organization, huh...",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1ZYoolu-0zqZKttYTAmOb_gAneLcAd6dV/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Chi",
                    "subtitle": "Oh, quit whining. What it means is that both you and I were recognized for our work in Velgalta.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/17lSSybkK-Q2FGQjs-IRj4Ec0kQq4ve-a/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Chi",
                    "subtitle": "All of us Numbers are on equal footing, you know. Maybe now we can get to know Lambda better too, who knows?",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/134mjSjAPOeC52Br5rLP_7tR2bcewQUHh/view?usp=drivesdk"
                },
                {
                    "name": "Omega",
                    "name_variant": "Omega",
                    "subtitle": "...",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1X_3alhpTFeLuxXhFh8Y_Tu8Cg3d1ywOe/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Chi",
                    "subtitle": "What's the matter?",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1TgOoAipkHJ2I2Ho3Fx9AZTUho0zWqz7y/view?usp=drivesdk"
                },
                {
                    "name": "Omega",
                    "name_variant": "Omega",
                    "subtitle": "...It's just that I doubted in my mind that Shadow Garden could truly change the world.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1C0PhzKgWAy07EStA_viv3eVPJ7mbTUql/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Chi",
                    "subtitle": "I'd say it was more than just in your mind. Otherwise, you wouldn't go around with such an attitude.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1lC0U8ymdEG1xUHZt97A2rTC8nheMbw4Q/view?usp=drivesdk"
                },
                {
                    "name": "Omega",
                    "name_variant": "Omega",
                    "subtitle": "But the Shadow Garden is strong and smart. They're merciless towards their enemies, and can be cunning.",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1kSfS6zuFUvYiXZaREPxGa_ZGEhoe51i5/view?usp=drivesdk"
                },
                {
                    "name": "Omega",
                    "name_variant": "Omega",
                    "subtitle": "And above all, there's Master Shadow... When I first witnessed his power, my entire body shuddered with fear and awe\u2014as if he's all that matters.",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1cIQ5tlR-Ys_d81h4_l0DqOhSdpioNEmQ/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Chi",
                    "subtitle": "Did he frighten you?",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/12JiW9JDIiQmfqN98BrZLzm9uqBFrStyd/view?usp=drivesdk"
                },
                {
                    "name": "Omega",
                    "name_variant": "Omega",
                    "subtitle": "...Yeah. And honestly, he still does. How naive I was in my ignorance back then is equally as scary.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1rphQaA7788Xt5pyLAUWnagCp_vDXcIMw/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Chi",
                    "subtitle": "That's a good thing.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1XX1cqGpHHqtb1F6iUlpr-ybwFsv1jjEV/view?usp=drivesdk"
                },
                {
                    "name": "Omega",
                    "name_variant": "Omega",
                    "subtitle": "A good thing?",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1lFYHs5ikxdFTAgUJ9g8gCwh8t-JKGycC/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Chi",
                    "subtitle": "First off, Omega, what you've been lacking is humility in the face those who possess great power.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1DpehywlHOJGHr9bAKfh5_-9YlGRPHCd9/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Chi",
                    "subtitle": "So...going forward, you need to behave with a little more respect towards the Seven Shadows and your comrades in arms.",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1kRq7KDtgAuYvGzWsYiO0LX76eACk5I6n/view?usp=drivesdk"
                },
                {
                    "name": "Omega",
                    "name_variant": "Omega",
                    "subtitle": "...And towards you as well?",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1Q9Q9mh2d3q6yKhLuSDrA6wieLYve2bEo/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Chi",
                    "subtitle": "Exactly. I'm \"Chi\", one of the Numbers. And I'm your, that is, \"Omega's\" partner, understand?",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/15mNDFG60unDdPLUlv0oedifia5mEOw8T/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Chi",
                    "subtitle": "(I hope fortune favors you in the days to come too, Annerose...)",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/19AY7DRPLzRVnsQB1p32ozneXlEB0cm99/view?usp=drivesdk"
                }
            ],
            "e2": [
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Is this Sergey's hideout?",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/12ztQp1v_zekgmm2LCK5xgbRVMFyPkyNw/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Yeah. A hidden hideout, separate from his official one, if you will.",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1y2UpjAbZEsRE3XHE0e9akc8K_9Un-rCk/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "A \"hidden hideout\"... How redundant...heheh...",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1EsqxcfCIWGnafJO-h20kw6Ultq5EGP8I/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "So, this one is different from his hideout in the capital, huh.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1gPLMnX963wqLQGjCsLvf_1xqQRePrbJg/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "We didn't turn up any useful intel in the capital, so I'm hoping that what we find here will make up for that.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1AFaPbFVKClcpknXgoFqrhKIj_oog2moq/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I understand how you feel, Zeta, but don't be impatient. Results are never guaranteed in reconnaissance.",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1wUUSIHwc2K5FHDwR3IjRcA_31Yrq14rm/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Well, maybe that's how you think of it, but coming up empty-handed affects my self-cred as head of espionage.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1ATVlVJb6otIlyXiBhqCCU5uXdMOdI0jJ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "So just what sort of place is this hideout? It's half a day's ride on horse from the capital, which doesn't seem very accessible\u2014",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1YlwfcHN6ycZGMUYJefnp55yRMinB8jBT/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "This place smells like HIM!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1VJfPo4HnD6vatl0czKpPfQowYspNsUaL/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Him who...?",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/11bftuJhQKInieV7sFyQYtH9LgPJ-rfkT/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Malak! I smell his scent!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/18tyVHDn8vgRK8DVNaCVuoY85DrNKoPhV/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Calm down, doggie, I wasn't finished yet\u2014",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1-qjnl389qUNqPhpG3DDRionGvHziZMme/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Why search around all slow when a few sniffs could turn the place up easy, you dumb cat?",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1lb9VJc3EmP68ZW5xmJ6OaQcdBea9D6FC/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Because tracking by scent like you dogs is an absolute last resort for me, not to mention I make a point of not trusting blindly!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1S6cMoqwNBvGItnVrLELQrTucmG5DR-Uh/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "If the enemy knows they've got a therianthrope spymaster on their trail, the easiest trap for them to set would be one using scent.",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1P8cQ-vaqSDindt8PS8Tmi7U42vsNOP_l/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "The fact that you don't know even that much shows just how much of a meatheaded mutt you are.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1Z7RDDOvjoZFlitt0ewVHQr4RXdJp-kMn/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Hey, kitty cat! You making fun of me?!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1D3DEkdxXOA9X1YYKtioFIi1P3RTz48-S/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Stay!",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1K93yu2kXF70CSZNSPNSAK02j4PIr9OOP/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Awoo...!",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1Vkf4tATtdopovKaRob8mz0WbMvvDsbi-/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That goes for you too, Zeta.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1EcrpAyu7xzbWtxz3p5FNw7xWxpu4z9fY/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Grrr...",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/11xdCIrtqq2pDGMJSkNIKg3HHvasHyXTf/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "So basically, there may be some secret clue that connects Sergey and Malak hidden here.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1E_7MT94syDpeOXaFdCv2HFgyXPRkpinF/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "I didn't want to say it outright, but yeah, pretty much.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1AdPLAE6P9pD2_e6EJHtnepARseTScU_9/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Then let's proceed with caution.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1mqLXIP5s0aSTwIg4b6WY6V26W1VGnFLX/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "What the...?! What're all these...devices along the walls?",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1hZWY_KBSFcL9STIaEbzgvQf-T6m3bcWB/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "This material is not simple iron, or even mithril... Say, Zeta, did you conduct a preliminary investigation of this place?",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/10tQE8pJF5KrYxm_tddVfROAliY7wm22-/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Yeah, to the extent that I could. But I found more questions than answers.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1GZNcznsJOrgd8eaQZ2jszxkQCjcLP7V2/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "As you said, the substance that the interior is made from is far from normal, making for quite the bizarre space.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/15NTdyMqLyB2LqouXDPFxe3vFqrTeXSHA/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Is that why you brought us all here to see it?",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1_m3wmqGoevRj1S_tjAU3EgvymJx4t_TK/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Correct. Wouldn't be very wise of me to try to tackle a place like this on my own, now would it?",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1djIp8Jof7GMagTVUkZpTgo4Yx2rT7SDN/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "So you're a scaredy cat.",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/13_zPlx0ihDv7qDczFLwigp9XDk2DJEkS/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Yeah, yeah, get it all out while you can.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1PRS_cQTXaNz_3_zjAMkHyjs0rmtCMxdX/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I assume you've detected potential threats ahead?",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1hP29BrDhzpsYYoWl0e_PLOzDonySoJFE/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "I have. And quite a few, at that.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1egWZhZ0QLknQojHy1Hj4YIuxQk8cbE0U/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "As you'll see, they make the defense golems we've faced up to this point look like an opening act\u2014",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/17QI0-alqGHkh5pFHKahhoCYB-zMWNMyx/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "What...?! Why are these here?!",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/14MYhUo3OsM19yfs7sa6RyyqxOdNntEgj/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "They look like specimens... What is all this?!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1ED6XSgCD65ke30mhE2ufNtNM39xQqTzU/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "All I can say in response to that is, it's exactly what you think it is.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1TzxY0XpSJIXDWe_38fozvXtoX46s4FKm/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "At a glance, I'd say there's 50 Malaks here. Some mechanism seems to be keeping them unconscious.",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1sopUUuCGYpx1WYRER4t4cQk7fNziMZFn/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Are they being bred, or kept as research subjects...? Either way, this is a truly terrifying scene.",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1MbkoaG52Q4rGyhRZeypAqcsbQxu7T0P1/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "If, say, this swarm of Malaks were to be set loose in Velgalta's capital, the city would descend into chaos in the blink of an eye.",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/14DAz_PGr7zPnYzsn05x2CpY_L-uCKhvA/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "And if Sergey could exercise the same level of control over all these as he did back in Madlid, you can forget simply having bad relations with the Cult\u2014he may have even been able to rise against them!",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1CzvS-M5aFm0sdFeb1jW1M7R5AKpk3_pq/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "The subjects... Completely unknown properties...",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/15bAWRm-r_vVM0h8rIIX5arF9QdiYrP2U/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Oh, Eta. Word to the wise, but don't go touching anything\u2014",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1G90rWutECZIQl2crJnldNXeoYL_LbzW7/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Hm... I already pushed it.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1nhsErM874be43llYMkxtV8wYt-bKbXhM/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "\"Already\"?! Why would you do that?!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1TQhaFlXe8M6XiZ2bYaVgJFdYPLAqjz_s/view?usp=drivesdk"
                },
                {
                    "name": "Malaks",
                    "name_variant": "Malaks",
                    "subtitle": "Grrraaarrrghhh!",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1zRRwkR_VTCkgmdAAYk2jvrMIsLUvPXBu/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Ah, as expected, they moved... They really were...alive...",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1pRrHqPozdrhAF99VTt1wMHz_GKK7Z9dY/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Oh, come on!!! Etaaaaaa!!!",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1LaKUH9f63JDQSwh1otm17aPMmtlQdtMv/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Oh, for the love of...! That didn't take long!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1tjvYOqb-v6gTntnhby2S7Tj6Adjd7Cz0/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Ahaha... In a way, it went just as expected.",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1XhrjeCuZ71aUaEWp_jMAQKjQ1JoKFwKw/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Awooooo! Delta the dragon slayer is on the hunt!",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1m0_zbIWIxkl8yvljaQekqMELyu-rNinr/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Delta! Whatever you do, don't wake up the ones that are still asleep!",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1E-sKt5ixtF1etDD0c1IcbKIbvgZod4Kp/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The darkness of this place may be even deeper than we imagine...!",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/14io2FcI46Xt9wJ4p3034lfQ60QpWofIi/view?usp=drivesdk"
                }
            ],
            "e3": [
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrraaaaarrr!!!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/18WybGj3A31mXDDa-Xcc3S9zqXCG-69PI/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "Graaaaaawl!!!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1oI6E988KpB4zBhgGpliNwwsM9ACGavzR/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Whoa?!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1YX_3RzlXu2agkv_ckOTS5DY8wdttFwbC/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "This guy's slower than before! It's just like the first time I hunted him! He's not even trying to dodge!",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/12E6iDCAo-7hXIcvYi043XLok7ebty4QZ/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...Haaah!!!",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1B0SEvjQFsq8RS4KL5ljfi6HpzdZrjM9r/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "Graarrr!!!",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1g7hgchVvdUu39imD0um-WdsKv7-8bhzd/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "When he was being controlled by Sergey, maybe it was that very same control that gave his movements focus?",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1uwxITWqUqQgGMfiLTB2Um8HEFaQ0leLk/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "He still regenerates like before, though!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1HAGNorXkOtKHx4Zmr4z9z6VmMznIdCta/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "That's why we need to stop him in his tracks ...Gamma!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1xc1UXCoHAkaQwQi5xiI0BXha5rFtlB87/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Nothing can stand...",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1XxBXJhvT5N3uN-oSqQB1hSMk_t_mEs_5/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...against my sword!!! Swish, swish, swiiish!!!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1MoveNFdlOkLAi0eN3typY_7O7nO_vzoj/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "Gyooorgh?!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/176pNTHoFJOpcFV9UlJ08_huEk9wZh90b/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Well?! Did you see my hidden technique, \"One-hit Death Strike\"?",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1wBevmfamo8QQD5-sCBTm4F7J0b6nr777/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "I did, why did it hit one of the Malaks that wasn't moving?!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1IzliPJLttqaqQMxO5iCpAK1oYYbTWb4Y/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Hey, I suppose we should be glad it hit something at all!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1joAozXzdNO4JwjkXarhxXuUoVmpE9PVj/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Just goes to show that when it comes to Gamma and swords, you never know what's gonna happen\u2014",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1to8hwdbvq41WfmBuNVi5fOa_GPuDnO13/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "Graaaaaawl!!!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1Pz8cp-K_dzRSoIjRT1BlKayDNPXSoqX5/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Whew, that was close... Hey, Eta, what're you up to?",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1Dan11b6Y8PVYrtCISYjNxTJP5_psOLsI/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Oh... just...looking around. There's so many...interesting things...on this glowing panel.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1jTn7cTAUpouIEfjjbW6XITUwZ99eosxD/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "That can wait, just fight!",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1VeMwiXw48rLnPiEjSbWKCmG-1o6T1gEK/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Huh...? But the rest of you...are fighting. You're fine...",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/146O_tFViqo1dycI-91Xj1PkudjXueCRw/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "There's no guarantee we will be, and you can check that stuff out later, can't you?!",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1T1hi1M93mcmzfMZby2Y8HGPO8RRB1FK9/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "But I want to know now... That's why this is the best time...",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1zXbT_ADaXfKEb6TfMP-jrlziBAqCbc14/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "I see... Touch here and more data appears...like turning the page of a book\u2014",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1sAyN2R7ywvel0TIpNT7ZcIlcIc2Uz_gL/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "No telling what's gonna happen with her either...",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1Rfr06AfooQTo6qSN3EnPD565PfDqbSqx/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Hah!",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1UBTUEiEJ_Zbee86qTlpDOnK816TebCqL/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "Gua...argh!!",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1KTgNMX6Hikwrb7HRRKtlewFpjwVUaeRB/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Wow... Two at once!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/17BVBoLNe_5wMI7rLIJkBtqslFtScrL2p/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "When not under the effects of an artifact, it seems like he moves the same as any regular wild animal!",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1Lf2R-yHsM8cJKO1WZo7TPZ33jTodxUZ5/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Still, that doesn't change the fact that his powers of regeneration and immortality as a dragon make him a troublesome foe.",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1jRd2wYeOkzgDVVHsvZNukpOCom8ViHxO/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Considering that a horde of Malaks are asleep here, and the bizarre transformation Sergey underwent after eating some of Malak's flesh during his battle with Shadow...",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/18MiXBFJfOyCi9D1VBcIcWaMN5qCJ9D0m/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...it's hard to say there isn't more than meets the eye to both this hideout, and the Malaks.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/10Obj3yrzdqtXrt1NE3Gpw4mTFmCAkjDE/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Okay, I think I...understand now...",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/18UCH15xe7LBNMWneyV-7m-_4CmzqVNbF/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Understand what? Hey...what's that you're holding?",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1zfsWce0nuM2-J8YvnISl0mNzRA7QHht6/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "This is...an egg.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1iJKt2utucqqJgBE2RXlqKEf82qBXMR0j/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "An egg? As in a chicken egg?",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1yE5uVi5TL2FRJkFFRvIEgyjiMSjoDFrW/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Blecch... That egg smells weird!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1CIVHT0ZljQTaK5rFbMAMeeT0560Cn1uW/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "There were a lot of them...in that locker there... Probably for emergencies...",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1hkfn8H4vOmEWJmNt6F7aR7eQrS-4zxMv/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "That fleabag isn't the only who's nose wants to curl up and die. Those eggs must be ancient\u2014",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1TvMafCwlb5s_Cv8wEbtY24WN40x9yL2x/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "You throw these...on the foreheads of a weakened Malak...like so!",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1qPP7R6caCa8BGrqSL5bnx6-NQ7TvS88k/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "Gyorrrrhhh...",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1hNcydb2ImNT2_Ak9AIvG-AHyNyAc3LBg/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "What?!",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/16APEWt_7D-rFqiNs3boc2kQrNYXp4FEG/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Wait, an egg to the head knocked him out?!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1XFSoTr-vrk2-Fd8pq7qBQOojN4COkA7Z/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1f_718f4LUpaumlxfVhpfKyGjH6GtGXUx/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "He...he's dead! Why?!",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1yis-yBrhbvEM3A4qsPVsGNVOGMoM6B1r/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Now...I'm a dragon slayer too... Heh!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1WUDI3k7svuy20v_RrFD3M4qaW-gFTRWK/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Eta, can you explain?",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1AM09_xta6YdFi_mOksLD8-96gt-fdk4x/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Hmm... This is probably...a back door.",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1dXJqFvZOaUktbCV6NftN0LlMwTWsoY-s/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "A back door?",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1fiNUuFZzvv8i0m23lRmJa3h7b7Y2cO2h/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "These Malaks...are dragons that were created artificially and then incubated long ago...",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1ZJn-eAEbTix7uBxejTEm3pQWO6spniA1/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Dragons made by humans?!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1FJx_RQAx0uanHC7z0tfk-nNDqh1Ri2Hd/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "But it would be bad...if they were truly immortal...like real dragons. So, it would seem their creators...devised an exceptional means of dispatching them.",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1MzInrby37iiNIVErr5fBBoIX0H6OLq9o/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "So you're saying that smashing an egg on their foreheads is this secret \"backdoor solution\"?",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1d1RTBU5cyKlj0psIrjehbqZUO0lFy68a/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "The dragons need to be thoroughly exhausted first... Or at least that's what it said...in what I think are Sergey's notes...on that glowing panel.",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1w9XnjSL1eIyi71204q1JEHZ8XQDv6N0E/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "So Malak's a man-made dragon...! Guess that means the artifact for controlling the swarm must be part of the package.",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1tIJienF9Mx4cq2VkoFh2yqEi_9dvoPBd/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "If he had this much \"power\" to himself, it would explain why he was trying to act on his own without the Cult.",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1g4lzc9_edWm7HxtQwkHwoL9mmpZe4dy8/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "And if these Malaks...this army of artificial dragons could see use in the future, then there's absolutely no reason for us to...hold back!",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1W34v5YHxtuhS0IGgQ1cPrJdtf8-rgT38/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "Gwaaaooooorgh...",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1yAStikn2PM9Jv6jhXJfjc5NL5O5CwgxH/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Lady Alpha!",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1K8UerRD8hzeIBj7f7WRMIcBfe7NeG--K/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Take down the ones that are moving and then hit them with eggs!",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/10am_j8M1m340Zcwq76eUt1PAJcCqs6Qq/view?usp=drivesdk"
                }
            ],
            "e4": [
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "This place I stumbled upon seems to be an ancient facility where Malak the Malevolent was incubated using some form of technology.",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1vMTQq0vC_RO8WCvgLCTl2hjIMbn-jrkh/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "I'm shocked to learn that this dragon, rarely sighted in the extreme east of Velgalta, is in fact an artificial lifeform.",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1I3tfsvt4meZa-PjuSX02D4BFsoRcQiBB/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "What's more, with this artifact, I can control Malak with rational actions.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1KoN8VaGWa5pVxNxIGbmtSP4eQqe0DDJ7/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "That means the key to undoing the seal on this facility was furnished with a role suited to this purpose.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1ZFjQlv5V1YqIfoinE63kg4EJeI-iyE2S/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "As if that weren't enough, I discovered records of experiments using Malak's flesh to enhance the human body. The results indicate that sustained ingestion of minute amounts can lead to a constant effect.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1qXBBWiW02Nq1aHPpvjMPPR4Y3bwH6huo/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "While the very idea of eating something that gives off such a foul stench appalls me, for now I feel I need to at least see if there is any truth to what the records claim.",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1iAuJKYyuB0ObXphjRQh53-0kZjsBCMvq/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "The proof is in the pudding, as they say, so I fed a bandit I captured large quantity of Malak flesh.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1V-2F7bHDd8Wjv3GYoD01VBz4B2PIPCez/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "He refused to eat it at first, but eventually gave in to his captivity-induced hunger and devoured every last bit of it, to quite the dreadful result.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1p1ehqSZUxmFhdcOBxqQIF4Vg1P-2gA-s/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "The man's body twisted to the point his physique strained, horns grew from his forehead, and his skin grew hard and dry like a dragon's scales. What remained could hardly be called human.",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1Qg6yL_Jp0MjHqHTmvlvGwtY4sTT0dJrj/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "This mere bandit of no importance was now a horrific living weapon. I fought back when he attacked me, but his strength and speed were astounding.",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1cSqGWArJ3s6qvvswo2ueJ93Nf0-DHGxe/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "Though slightly taken aback, I observed him carefully, and by the time I regained composure and cleaved the creature in two with my blade, I was certain.",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1Lk3C70Xx-syp3-mQPBTYjcdmspSZX7MX/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "If I could make my own body accustomed to this power, and if I could combine that with the artifact's control over Malak...",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1RjCP1WOC8MS-9f8af2vzhQxNoehJ0e7i/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "...I may just be able to rule the world.",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1cYZ02XJlJMjRpUUqgT1pqxA7bZmFVEsD/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "Eating even a small amount of Malak's flesh made it feel as if my insides were on fire and caused my bones and jaw to begin to creak.",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1ffuv7pNEURyli4JDyesmDzM0szLVMRZG/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "Something terrible is happening to my body. It's entirely possible that there is no coming back from this change.",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/18cpUe5It9TNi02LGdCflNdtIcTpdsJon/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "However, the fact remains that my magic level shot up rapidly, my bones and skin hardened, and my senses are now sharper than before.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1LvYQWZuyPWF_Lj9-sb-MsXzBlswzGjlH/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "If I continue to train in my transformed state against a Malak compelled to fight flawlessly by the artifact, my skill with the sword will soar to new heights.",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1w5_VoC2jqIdifY8Wmcoy5GRq3oYipZlU/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "Stan Bach of Velgalta's Seven Blades was never any threat to me as a dark knight.",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1Mc7ziVQXIz0dby0uQRAt6mME9ONXL6bJ/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "And yet, I sensed something from him that was oddly unfathomable and unlike any normal member of our calling.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1ZFhJIWH9kTQaoyBrRuiScHjnw9ro5ENy/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "Just as I have gained power by ingesting Malak's flesh in small doses, he, too, harbored some secret aside from his skill with a sword.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1GoNWClwskDuwEKGzm_49DO3Zx2QpZs2-/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "This hunch of mine became a certainty thanks to an invitation from a shadowy organization known as the Cult of Diablos.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1re1UBw0pFoVc8q8HhgAwS1LPgCNBbLY9/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "Without even knowing it, I had apparently slain one of their leaders, the 10th seat of the Rounds.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1AMy7lRHm_jZokMn1Jvd4wCFV6SiJxyWn/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "The Knights of Rounds were the group within the Cult that controls the world from the shadows. And the Tears of Diablos are what is said to assure they will live forever.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1FRjyxBmy8_-nmhe227YRPmSCjYYVQN8a/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "But their Tear-extended lives are the very source of the stagnation in this world.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1P-QzAF3TvWPtUEd8ZmDU9QVs-A8L0M82/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "Though I myself will be given Tears as the new 10th seat of the Rounds, I have no intention of joining them in their insipid lust for peace and calm.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1eJsY4r6s0cidAalE6aoiXrcs6qrzU8Wi/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "No, I will fight fast and hard, as I always have. I begin my preparations to take Velgalta in earnest.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1PF7xeq3_9-WfRVBUWGFqITRlsfDirFRQ/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...The records on this glowing panel end here.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1qQAos6KtS1dpjXBYDhGrRChOyHBIh9Mw/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The Tears of Diablos grant eternal life...?!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1P_uvDTD5Iawg9vC30UZAS-9brxtgf_7o/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "If that's true, the prospects are quite terrifying!",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/16r3XEJ4p6a7Tz55ibkKeCYKP44hNziyD/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "It would mean the Rounds have been controlling the world for ages, unbound by conventional lifespans!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/13pzVsA--9mthFs_BxLPrf60yEkoe3gTt/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Not to mention that Sergey and Stan Bach weren't First Children, but rather the 10th seats of the Rounds...",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1C44AH_HXuIpHQ0Vsij_W7HT2hNvOc9dd/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "I suppose that means the intel on the Cult that No. 111, I mean Chi, gave us was partially inaccurate.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1Hkj-JH-7gdoezgi0Wt7jSvzHHljVl5Q_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Not even families in long service to the Cult were provided with factual information\u2014we'll need to crosscheck any new data we receive thoroughly from now on.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1avoQTn7FBbSbzNmSyhNh8Gqt6Su2rkxD/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We also need to find out more about the Tears of Diablos. Although it I find it hard to believe in the idea of eternal life...!",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1EOaJbjsZgqtKFY9vkOqA-W3r8sDNhCq5/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Speaking of hard to believe! I can't believe that sicko ate that stinky meat! So gross!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1xMDQGWP9QdvkgIdwZyrBk8xrxNfxKrVf/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "So that transformation Sergey underwent during his fight with Master Shadow must've been him drawing on Malak's power.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1LKXC0hz5GXhYO_2pSCpCDJtsISdm5B5N/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "He concealed the physical changes with his armor and visor... And if we consider his powers of regeneration as also originating from Malak, it all makes sense.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1g1pqUHGhhapTfLiKalnn5f-PtJxGzEsG/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...He stumbled upon the existence of a hidden power, and since he possessed the means to control said power, his ambitions swelled until they destroyed him in the end... I guess?",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1s_U1qTQztT2-gc0jUNwgv5L_K04PrgBS/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "So this was the truth behind why Malak's movements seemed so strange. Honestly, though, this outcome may be relevant to us all...",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/11IBMhGHCM91hSdTwLg9BNptRPATkULIu/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "If I could wield the magic brought on by possession but didn't have our lord to guide me...",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1L2S3X6z9KpN25-9pESOWKo4L9JSjBt_r/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "I'm certain that I would've turned that power against the world, hellbent on revenge... Just the thought of it gives me chills.",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1BluLGZoRuT8silQWJeX67rLM1P9ej1vS/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "That doesn't sound all that bad to me, really.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1a5rUBt2nQ2q1jjHiDBJhvELTsjGFfeGN/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Zeta...",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1O51RBtyd6CvaCjkqTK2XUkd24dfvAfYT/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "But I guess I wouldn't want to do it with power that wasn't my own.",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1JGcsoPwEeZHbDx7J6wETRz8wGWm8Dzs1/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Let's head further in. Search as you go, but stay on guard.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/10LR4hpFPNsCt9p3iXsznQqK2nIki-989/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "And please refrain from touching anything else, Eta.",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1WhhI3IKAXXe1VVLTgNSZiYRhdJEoFhuW/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Aww...",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1mN7uaRbuvGDuaStRD_4Vd2dhOyrf1XOL/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma & Epsilon (Gamma)",
                    "subtitle": "You know better than that!",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/132aRut4F5jtBxKMhvIZkfC76tLBPN9vy/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Gamma & Epsilon (Epsilon)",
                    "subtitle": "You know better than that!",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/132aRut4F5jtBxKMhvIZkfC76tLBPN9vy/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Hmph... Understood...",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/17FdN1dfEgSg2vIrPbOv518ynytErZWWx/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Strong! Strong! I want somebody strong and yummy to show up!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1Uf1AxakbG9OabxNkhlkjKXW1un0ak1Xq/view?usp=drivesdk"
                }
            ],
            "e5": [
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "What is this statue...?",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/18Mw-EGvp3jiL9iFnRnqZUORHhNBFLTTd/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Looks like this is the end of the road.",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1oqZudXJeemVfXWThgF4ymzEaLYPXgm5j/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "All this way...just for an altar and statue...",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1PTeCOiHyA4thr8cwpzWDeIGYNAgon3Zl/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...But the substance from the facility...is mixed in here and there... How interesting...",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1RxPsTsemTewMbu9tpz5eUyyuh8fKTvHq/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Don't touch anything.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1lVxz2LZX924Iqs_zoBb8n-YOBSOJmgfM/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Aww...",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1mIpnusg2c7VsGEmvXLcD7DV0CXJ3HxG6/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "No \"aww\"s.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1KQqg7CswqLNB-DN1Bc3OrGyED6F3n5BU/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Hey, doesn't this statue look a bit like Lady Alpha?",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/12lDg_diqB10bdjD39iBloD5JNW9GHGyt/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "It does! It looks like her! But the statue lady looks a little older!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1tJ4jWY8MdiMVRLqbIniIHZVNuKs88_hS/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1wIvOrnJzpjDU3F_09jaQPZK9XW9FXtgz/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Just what is this statue...",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1y82WpDMMoN19JbAIAnyWeyUEgRmxlrSF/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Lady Alpha! You shouldn't touch it unprotected\u2014",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1jT4Kfy12AG0cz7Ry7SmAZgsZmHalJ3Nc/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Huh... Ah?!",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1VNottXN4je4pcTByOnh4ZlTlCXLFocrL/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I-I'm sorry. I shouldn't touch it!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/105ZDXCFokx9TU_Sk46nZYnXm7QRPQqpx/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "But if you touch it...then it's okay for me to touch it too...",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1FHNT0H2kHpW3OLvXC799gjeV8d53hFfp/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Eta, can you have a look at this glowing panel?",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1Tkqa91v8YsgvhWL3VCefXeTFum6PcnIk/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Hmm...let me see...",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1Uzb1cquaY_5aDSw2Glqp8KRA31fm20fS/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/160d47FcYjpn_nzDosijvAnkU13QkDIif/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Oh... These are more of Sergey's records...",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1ckAW6ReaWoiCv4tdi_l3GxLOIpNLDaf2/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I'm...surprised someone who looked as he did left this many records to be found. I'm not sure whether to call him careless or diligent.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1GttdaldLqPrrvAm_tXpSS67EVakDBcp0/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "What if that's just how he was raised? Seems like you couldn't run a vineyard if you weren't detail-oriented.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1hIiRSGe4ULu2u1bFCGkeyaKU3QlHaiDG/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "It appears I need something from a direct descendant called \"genetic data.\"",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1lWCYWLFlht4npu5pAMHgD-xAyWMPA7PI/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "It'd be ridiculous to suggest that I go find a descendant of the elf from this statue among all the elves living in the world.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/17pFYF9hy5urrzQWW0uzjY81w3t9NVzxK/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "\"Genetic data\" seems to be a standardized key used here in this place called \"the Sanctuary,\" but since it seems to have no bearing on my research of Malak at present, I'm ignoring it.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1o3Bpe4BXzD8LKXjIThElCCZJahWmjFPg/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "Though the Cult of Diablos utilizes the technology of the Sanctuary, I surmise that they don't understand this place in its entirety.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1aIxg_Bn9AKOWYiRr37jqWxhYXoUm9fGs/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "In fact, not one of the Rounds is aware of the location of this Sanctuary I discovered, or the research on Malak conducted within.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1_sUmqnPFnmcG5L0CRr17oOhyYVpVFAAk/view?usp=drivesdk"
                },
                {
                    "name": "Sergey Gorman",
                    "name_variant": "None (Sergey Gorman)",
                    "subtitle": "In short, I can begin my war with them none the wiser.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1voCNwMlSdy8Dijonz3yIfCVeke9W7OuM/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "\"Sanctuary\"?!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1pmD9OHF2Hj76Nseq2T2lAr1n-cXjaJhY/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Quite a pretentious name, huh.",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1fxbO0EauDbD6k9AjnyXoC7jAymp7Z5bs/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Genetic data... A very interesting term...",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1GLdlb7fi5NVQ8ZvPUAhpojB-KCWT7oNr/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "And the Cult of Diablos! They get more and more myterious by the minute.",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1HMHSlJdQRPd2DWa6R0iiCgLQ1zuS4zQi/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Same goes for this \"Sanctuary\" place. It's supposed to be some ancient lab, but the interior looks kind of, I don't know\u2014",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1kJs0Y_MOYYxrENNhDjCRdFfpeb1EQjVa/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Not ancient or modern, but more like from an entirely different era or world... Something like that, right?",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1vvKLNR9Wtekx0r5yEVv570YZOJJ5e5dZ/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Yeah, exactly! This altar looks normal at first glance, too, but it's impossible to put a finger on just when or where it's from.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1TKkHGElygPQHIrvNEt9Gx0NrHD5deD7w/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "With so many mysteries, all we can do is stay patient and unravel them one at a time.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1V4BiZQF1ebAZwdsm2FRiggt3BT21au69/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Then maybe we should start with this statue. If what Sergey wrote is correct, solving this puzzle should get us further inside.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1RNKNiciEFFwbs_9YRp7jN9VBuPPyR0Tj/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Lady Alpha...can I touch the statue?",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1p-oR-SzpHzKxVmD4maXJ-v1QyxNjH1XW/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Yes. But do so cautiously and carefully.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1oK1zK5oOPW4924RdzRNWrXriBsK-YRwO/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Heehee... I'll try it with slime first...",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1vpgPKNSU1BQkon6geTaKS50AT-fW-Cwx/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1ETVKVyNeEHVyO-UdY6jgh-20QPvMv6ZX/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Nothing happened... It feels like...normal stone...",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1nNnoi0F6dIDRWvrnDqIJNEEfZ-hgKPmZ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Perhaps the statue itself isn't a mechanism, but a hint?",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1R0ErQvM2tbj7V0VxaZiY86CVYsR4tqeB/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "But if that were true, there'd be no need for a statue. There has to be some connection...probably.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1vOZzAtV39sEBJuBuuuamVlQrAJS_S6PM/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Anyway, if we're gonna smash it, leave it to me!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1a3Cwa5eYwEZo13CAxZefRZUjKie2uO79/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "That wouldn't be a great way to start... But it is possible we might resort to smashing it in the end.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1iw7_qohtJtgfb6KkuZ7qniw9AiQTUBc-/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1EetTIiTd2W0TMjSj32zX0lUhRWeU6q0U/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Wha...?!",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1Mm-0_1Yej9_HGEK266DpzKHLyZ28NhgX/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It reacted\u2014",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1KoIqh5x87RrSVkpVf5nMiSvyNjIF4AyN/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "??? (Olivier)",
                    "subtitle": "...",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1xJ8oI-DRJs3bXx12GwFTCLakNHwHn452/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Y-You're...?!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/15cIXnSYzUhPHLXXw423HWpDzLx4D0Rup/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Whoa! She looks just like Lady Alpha! Why?! I wanna know why!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1Ymv65iyF1ZPwDO7KxuLHtfd-t2QXvjV8/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "The statue...became human?!",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1YAU35sN7uHOgwNyTAqgFQvCArk06G9Q6/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Not a human, an elf.",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1HlI1rFXnBfZQDIXIzkgy4gOjwpUW4YE6/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "That's not the point!",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/18Y0tJvEfLUXHUWSYN9g6huttSED71kAZ/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "What in the world is\u2014",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1wAJbEJGQLfevgHnFR_rlhdhRJqn-YbZU/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Lady Alpha!",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1KddlUyfiOizme59zf31T1-QkxM1qdo5l/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "??? (Olivier)",
                    "subtitle": "...",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1MicUfDmg3l9DTJOuI56tviJ-SDiLb1KO/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Who are you...?!",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/14BNtm5Wjx438ZQoqISXECV8LpOpxR0dt/view?usp=drivesdk"
                }
            ]
        }
    }
}

let setDoc = db.collection('data').doc('ssc_p2_c3-4').set(data['p3']['c3-4']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
