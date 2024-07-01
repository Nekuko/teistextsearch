const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "clbg": {
        "e1": [
            {
                "name": "Margrave",
                "name_variant": "Margrave",
                "subtitle": "...That's when I said, \"I'll take care of this. You go on ahead!\"",
                "line": 1,
                "url": "https://drive.google.com/file/d/1X4qvz17134IHR7vvncE6qXLkGNCKTA8o/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "My! What a lovely tale!",
                "line": 2,
                "url": "https://drive.google.com/file/d/1Col-KfxoQE-uUzujxpMk1NNSk9QEMbKo/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Oh dear, your glass is empty. What would you like to drink next, Lord Margrave?",
                "line": 3,
                "url": "https://drive.google.com/file/d/1xY0u8hGOIbM36nyeBCbLUdOWBtyPbA25/view?usp=drivesdk"
            },
            {
                "name": "Margrave",
                "name_variant": "Margrave",
                "subtitle": "Many thanks. Ah, but this is quite surreal having drinks with the best-selling author Natsume Kafka. I'm deeply humbled.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1NUQwQ4Xj6wjQNC4cW_lqzVVm_trUpx-a/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh, please. Your stories are all so fascinating, Lord Margrave. They give me inspiration for my novels!",
                "line": 5,
                "url": "https://drive.google.com/file/d/1LMclk4MUp3LbFE47vxORhI4OyOyVqkkN/view?usp=drivesdk"
            },
            {
                "name": "Margrave",
                "name_variant": "Margrave",
                "subtitle": "Oh? How flattering. Well then, for my next story... Yes, why don't I tell you about the recent rise in low-class aristocrats?",
                "line": 6,
                "url": "https://drive.google.com/file/d/1qUU5NIe-uHGpnZxR2vIR5dCQS_otyPjX/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I've heard about that. Apparently, once-insignificant aristocrats have suddenly increased their assets and risen to the ranks of the voter class.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1ZkCM_vwfVnV9AVJWV1AegWpofHxaLyOT/view?usp=drivesdk"
            },
            {
                "name": "Margrave",
                "name_variant": "Margrave",
                "subtitle": "Very impressive, Lady Natsume. You have your ear to the ground. It seems they all made a fortune through a certain casino.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1gikkP1mMMvYlzq4CkCDr1d6_36f5YGNW/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(It wouldn't hurt to dig deeper into this intel about a casino in the capital.)",
                "line": 9,
                "url": "https://drive.google.com/file/d/1JsNwGdQY9T2NekFQqd2ai9XaAq3zb7kX/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Sounds like quite the lucky break. But how does one amass such a fortune to become a voter?",
                "line": 10,
                "url": "https://drive.google.com/file/d/1e3-R-4yArhgpRawDleuxeeZoajpkjaCC/view?usp=drivesdk"
            },
            {
                "name": "Margrave",
                "name_variant": "Margrave",
                "subtitle": "I've only been there once myself. You see, the casino is notorious for its incredibly high rates. It costs no small sum to play at their tables.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1cPCCTxoJl5ayEDy32bI9AcjOdHXpL4zO/view?usp=drivesdk"
            },
            {
                "name": "Margrave",
                "name_variant": "Margrave",
                "subtitle": "I don't know why they operate that way, but one can assume there are those willing to take high risks for high returns.",
                "line": 12,
                "url": "https://drive.google.com/file/d/16-1bk-Q4xoF46wiyy1gMXGGOfp0D_1ht/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(It could just be some high-end, exclusive casino, but the Cult is often behind high-value transactions. It sounds like something we ought to investigate...)",
                "line": 13,
                "url": "https://drive.google.com/file/d/18GU6EAKDotkLIGhYybDthafigxO5Yabf/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Admission into the casino seems more challenging than anticipated, but that's no excuse not to look into somewhere that could provide us with a lead to the Cult.)",
                "line": 14,
                "url": "https://drive.google.com/file/d/1pF5Xwi_XwEq_v6nDAvZgssz6XEzJ11zs/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That sounds like a highly suspicious...I mean, deeply fascinating story that stokes my creativity. Would you take me there sometime?",
                "line": 15,
                "url": "https://drive.google.com/file/d/1I0o-Kxr5_01aiLYOPqAv3gerZVRu9gPS/view?usp=drivesdk"
            },
            {
                "name": "Margrave",
                "name_variant": "Margrave",
                "subtitle": "Well, while I'd be happy to lend you my assistance, the truth is even I cannot gain access so easily.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1ApCiacUCeVEO31mbTkvs6s6-Hf--S7JR/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "What? Even someone such as yourself, Lord Margrave?",
                "line": 17,
                "url": "https://drive.google.com/file/d/18krv8U13EIujGj9AVApDL4pRB-C3fnpx/view?usp=drivesdk"
            },
            {
                "name": "Margrave",
                "name_variant": "Margrave",
                "subtitle": "Indeed... They have quite the screening process. The one time I visited, I was really only allowed entry as I was accompanying a duke.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1mpVv725tMX-UIIqrGvqefQvw2KqqEK3J/view?usp=drivesdk"
            },
            {
                "name": "Margrave",
                "name_variant": "Margrave",
                "subtitle": "Ideally, it would be best to receive an introduction from, or accompany someone close to, the royal family...",
                "line": 19,
                "url": "https://drive.google.com/file/d/1c7bl5bk2Vc7NWUfga0qST7Fbn7LdIqaN/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I see... Someone close to the royal family...",
                "line": 20,
                "url": "https://drive.google.com/file/d/1iiV2w9UxHRrLqJSW8vM9oS2iqmKTpDZE/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Well...I know a certain someone who's not only \"close to\" but \"part of\" the royal family...)",
                "line": 21,
                "url": "https://drive.google.com/file/d/1Po_Qh3lOXe5KxuN6x9E2GOvV6jaGfXvt/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(...But I'd prefer not to disclose my movements to Princess Alexia. It would only arouse her suspicions if I asked her to conceal my reasons.)",
                "line": 22,
                "url": "https://drive.google.com/file/d/197Cn_1JZ83HEIBC_QN4Wubh5UL_eVnBc/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Besides...just the thought of asking that woman for a favor...!)",
                "line": 23,
                "url": "https://drive.google.com/file/d/15c8sOIkxUvzWfV0kl0w3mbW0MIKInuQG/view?usp=drivesdk"
            },
            {
                "name": "Margrave",
                "name_variant": "Margrave",
                "subtitle": "...In any case, how about the two of us visit a more affordable casino together\u2014",
                "line": 24,
                "url": "https://drive.google.com/file/d/1DR-nK8I1eFqtYXpxZ5y68hUrGVMI4fPS/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Absolutely not!",
                "line": 25,
                "url": "https://drive.google.com/file/d/111G3khyduVV1hSMacx5m3hk3hREGQmgJ/view?usp=drivesdk"
            },
            {
                "name": "Margrave",
                "name_variant": "Margrave",
                "subtitle": "Huh?",
                "line": 26,
                "url": "https://drive.google.com/file/d/1F7uhd2Yfm0MWKm9U5Pp-qsPQOEuSsV5r/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "What? Oh, I wasn't referring to you, Lord Margrave. My mind wandered for a moment... Ahahah!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1Qby3YpsD7azCtl4r3ovfAymOqw05WTro/view?usp=drivesdk"
            },
            {
                "name": "Margrave",
                "name_variant": "Margrave",
                "subtitle": "Y-You surprised me there! Ha-hahaha...",
                "line": 28,
                "url": "https://drive.google.com/file/d/1y2n2pWcAxzIw25IR-Is9BKKTC7KKorsm/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(The casino is the most suspicious intel from today. It seems more challenging than anticipated, but I can't ignore somewhere that could provide us with a lead to the Cult.)",
                "line": 29,
                "url": "https://drive.google.com/file/d/1myRU6M3DuzTpmn7yhFI7KauEI7lsPv0h/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Since a formal introduction or accompanying someone from the royal family isn't really an option, I'd best think of another way. Let's see...)",
                "line": 30,
                "url": "https://drive.google.com/file/d/1iD1wmxBOdmESsr-O2ygHOs67p2ydlt6Q/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Hm? This advert is for the very same casino...",
                "line": 31,
                "url": "https://drive.google.com/file/d/1f2E8dW9T5QqWY0B-AzO7gZeG3cGLLGTz/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Th-That's it!",
                "line": 32,
                "url": "https://drive.google.com/file/d/1R0jz0wiKV7H1_GtsHNQgHNLWAbP3QAfX/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "A few days later...",
                "line": 33,
                "url": "https://drive.google.com/file/d/1iXE7l9xMWyFd08xGIIFZRk9jjYl5Vc-9/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Welcome to our casino! Have a welcome drink!",
                "line": 34,
                "url": "https://drive.google.com/file/d/162CeoUIdNmGHx2aG6rdWJE9x65H6IF0c/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "On your left are the card tables! And on your right are the roulette tables!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1i2Y3UhaDT4UyiXvvyfDByohBAYsMeRl7/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Please feel free to join in or spectate! Just follow the rules and have fun at the tables! Enjoy!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1VFJx0Mn0n69E-tVtLUO7xbBCGb1aVbzx/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Whew.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1rbOKqlh0c9bw2Gx3-CA1P3K3jpby3BvD/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(I lucked out coming across that poster advert recruiting staff!)",
                "line": 38,
                "url": "https://drive.google.com/file/d/1oJ-9nz34WhED1kZSHq_rG7Mvyfki4j7A/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Being the high-class casino it is, the required skills were set high, but...)",
                "line": 39,
                "url": "https://drive.google.com/file/d/1jO9mDmy67NAo7L0PnX4Ec447PiGt0rEH/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(I managed to falsify my documents with Gamma's help. The interview itself was a cakewalk, thanks to that and my silver tongue!)",
                "line": 40,
                "url": "https://drive.google.com/file/d/1hspC2075bsJzXkJxkqYR_XujETZfHvrG/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(That said, there was a lot to pick up beforehand, and it wasn't easy learning all the casino etiquette and rules of the games...but, thanks to that, I can move about with ease now.)",
                "line": 41,
                "url": "https://drive.google.com/file/d/1KVEYF-cJ0CieHVDS0AWXnkhQ3TJh4lSm/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Anyway, time to get to work! I don't want to draw any unnecessary suspicion. I'll blend into my environment while getting my hands on valuable intel!)",
                "line": 42,
                "url": "https://drive.google.com/file/d/1SimaByE3lkOQ0RIzZAr3YRLzxQJ-MSU6/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Let me take your empty glass. What would you like to drink next?",
                "line": 43,
                "url": "https://drive.google.com/file/d/1jbgTOWShNaHDx6x6UirjI_X2JEU_S64n/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Here's how this game works...",
                "line": 44,
                "url": "https://drive.google.com/file/d/1BnixpcMncKOySTqmJvcQUyBdy4ViuiSw/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Please exchange your chips over there! See you again soon!",
                "line": 45,
                "url": "https://drive.google.com/file/d/1awErlus9PsmEcvIdVo92uxJYWHU_IlaH/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Whew. I might've taken my cover a little too seriously.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1NPclESxdCIKyVv0I-4KuRuqZ12n8Azly/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I have a bad habit of getting wrapped up in whatever I'm doing. I ought to ease up\u2014",
                "line": 47,
                "url": "https://drive.google.com/file/d/1pdHpEI9nmi3PmOhezM1ufHr25YFGxzf_/view?usp=drivesdk"
            },
            {
                "name": "Customer",
                "name_variant": "??? (Customer)",
                "subtitle": "N-No way!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1i-YPpdvGjGq2-d8UQl8jc0Ggpqflb6WP/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Huh?! What is going on?",
                "line": 49,
                "url": "https://drive.google.com/file/d/1iCll4KDo1LqioCFp9ASe7QJIfYPVWukY/view?usp=drivesdk"
            },
            {
                "name": "Customer",
                "name_variant": "Customer",
                "subtitle": "N-No way! Lemme do it again!",
                "line": 50,
                "url": "https://drive.google.com/file/d/1pMs4jXsSO6W3d_r6sAaRSU9LlIka_a4i/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "Sir, you're inconveniencing the other customers...",
                "line": 51,
                "url": "https://drive.google.com/file/d/1U2P-Io_zHTug155IPknC5yYnDLpJ89mm/view?usp=drivesdk"
            },
            {
                "name": "Customer",
                "name_variant": "Customer",
                "subtitle": "Gimme back the money I gambled! I'll settle for just half! It's all I've got!",
                "line": 52,
                "url": "https://drive.google.com/file/d/1iDQot8MPMdNe8y2LTwCGqNOj0iNFSpaz/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Judging from the looks of it, he gambled big and lost all his money. He's making a scene now that he's broke.)",
                "line": 53,
                "url": "https://drive.google.com/file/d/1kU-KcJX8L_xOWFZiA4epiAtmTkNBhkhQ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Based on my research, each game is based on solid theories and rates of return.)",
                "line": 54,
                "url": "https://drive.google.com/file/d/14yQGExpN99J0JDUCm9uKnOIngbF-m36V/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(So long as you maintain strict self-discipline, you shouldn't lose too much money, but...)",
                "line": 55,
                "url": "https://drive.google.com/file/d/1ttI2WT4h2nzTxdvdOls-TmpOpqmIQ8YS/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Well, I guess someone has to lose to make the rise in low-class aristocrats a reality.)",
                "line": 56,
                "url": "https://drive.google.com/file/d/1ZidJohMo1j0MN2OE-1MciZdV-6ywUeSL/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "All right, time to get back to work\u2014",
                "line": 57,
                "url": "https://drive.google.com/file/d/1b34b9U1lXSAz1LiadfuqmbLUmB5DA8Sf/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Hold on! I-Isn't that?!",
                "line": 58,
                "url": "https://drive.google.com/file/d/1evs6deDgw4wvoCQ2cP0u2qhzbrGQ3gkK/view?usp=drivesdk"
            }
        ],
        "e2": [
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Wow...",
                "line": 1,
                "url": "https://drive.google.com/file/d/148poDocRzIdlX4dSTWJNuA_AdBSd4YjI/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Pr-Princess Alexia?! What's she doing here?!)",
                "line": 2,
                "url": "https://drive.google.com/file/d/1QvbNTAT6aTe0t00vgDJAxsKXdan0JeDj/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Well, she's the second princess of Midgar Kingdom. It's only natural for her to be at a casino that's reserved mainly for royalty.)",
                "line": 3,
                "url": "https://drive.google.com/file/d/1zJSX_0penS96rYrrbfDzg9VLe0Ov3D04/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(More importantly, why is she also wearing a bunny costume? It makes no sense for a princess to be dressed in one. She must be up to something...)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1YrBODPBwTDrNLwEimfKIgxrx41_SLf2q/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Judging by the dumb look on her face, I'd say it's her first time in a casino.)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1M9pAoWqamSvf0uribt_Jpwt59cNu4vZt/view?usp=drivesdk"
            },
            {
                "name": "Customer",
                "name_variant": "Customer",
                "subtitle": "Hey! I'm a customer! You can't treat me like this! Lemme go, or else\u2014",
                "line": 6,
                "url": "https://drive.google.com/file/d/1Iufb6P7kWiliQLFZqew5VP7fHKGGblzh/view?usp=drivesdk"
            },
            {
                "name": "Customer",
                "name_variant": "Customer",
                "subtitle": "Agh?! Aahh...",
                "line": 7,
                "url": "https://drive.google.com/file/d/13JAVWdOpIXBcD_lkIXsByFkEKSdZlKpZ/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "The safety of our guests is our priority, so we have rendered him unconscious. We sincerely apologize for any discomfort this has caused you.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1wxJlPT6l6uTUSPH37GEFHXldNzVExzcH/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "We hope you continue to enjoy your time at our tables.",
                "line": 9,
                "url": "https://drive.google.com/file/d/18ojsT0Dsxig_IU1_M5ODQ0qASvjlH6fd/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(I see. Being the high-class casino that it is, the staff seem highly competent.)",
                "line": 10,
                "url": "https://drive.google.com/file/d/1iuU2WwkhiAm_ylWyJrRkdXF0_Sz-n6xK/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Thanks to what just happened, I've managed to figure out how extensive the security is here.)",
                "line": 11,
                "url": "https://drive.google.com/file/d/1SUN2NUMrnWcpr4GjR02vvNcuUPmyk_O6/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(The problem is the princess being here. Since I'm currently undercover, the presence of someone who knows my identity is highly risky.)",
                "line": 12,
                "url": "https://drive.google.com/file/d/1x1Zao9jbBY_LTsdeSV8o9kFli_4KvYWw/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(It'll be a real problem if she notices me here and refers to me as \"Natsume.\" I'll need to handle this as soon as possible.)",
                "line": 13,
                "url": "https://drive.google.com/file/d/1EaV3uOqGYeDkaFamQVCveRxS-j80mztN/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Besides, I assume she's also up to something based on the fact she's in a bunny costume. I'll stay two steps ahead and make my move first...!)",
                "line": 14,
                "url": "https://drive.google.com/file/d/1KnwWYMNvcztMzVCqIA5UNGe6QHwmieRM/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "I see. Of course, it's only natural some win big while others lose big.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1stqrUwE7RI6nsKjBGzxg0TUBlIaxqKnP/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "It serves them right, but I shudder to think of such a financial fallout...",
                "line": 16,
                "url": "https://drive.google.com/file/d/1ykwaCJ57zWLoHjcauc0TDMEY5SBXGLUI/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That's the kind of world this is, Princess.",
                "line": 17,
                "url": "https://drive.google.com/file/d/16AusjPzffPpkJbRvsvBfAippi3Lhzls_/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Huh?! Who're you calling \"Princess\"?! ...Wait, you're Natsu\u2014",
                "line": 18,
                "url": "https://drive.google.com/file/d/1k5sqNmg8ARO-877ERpeiTEQSaqAr9XVf/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Just as Alexia is about to say her name, Beta puts her hand over her mouth.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1y6yNPf_x6pvqAmPHyIlles9qqA63o4hT/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "*muffle, muffle* (Wh-What the heck?!)",
                "line": 20,
                "url": "https://drive.google.com/file/d/1X3Ott4g2PlhO1J53Hk0OXHGMZV2_urC4/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Stop. Please, calm down.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1cToX7qoNr5wXnFude5By136iLXkQFl4v/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Pfft! Wh-What was that for?!",
                "line": 22,
                "url": "https://drive.google.com/file/d/18JR219yiaC4dKKg7_V6-5OuFIylVzi_U/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I just need you to promise you won't mention my name here. Understood?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1OvbT9RIPOai-lofh6Y33mnDe0LoJsZ_K/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "What's up with all this? Hmph. Anyway, keeping quiet doesn't benefit me. I won't agree to some annoying promise.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1eYk5JCSpNBwdAIUKE0yZKD16xXzMn5fh/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh? Judging by your surprise just now, I'm guessing you're keeping your identity as a \"princess\" hidden.",
                "line": 25,
                "url": "https://drive.google.com/file/d/13mN7IMGcqyU_hFbFwQ8no7oeXagj5eDg/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Ulp...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1rESRMGCLnqa8bHHN0WjUiG6hXW2_nofv/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Something tells me I'm not the only one wanting to keep their name a secret.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1ZDhctQ9SXG2D5zo2AMJBwy_4lV5u_i4l/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Ack. Tit for tat, huh? Fine, I'll keep quiet for your sake.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1pTnF_n_b6idYknT1IcTFU2pfW1uYxf7K/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Why do you always have to act so entitled? Anyway... what're you even doing here?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1d6ccWMZHBVgx1arzWXh0dI9Om5mVsuTW/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "I was invited to this casino today. I'm an official guest of honor.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1pMT4xKCvCRyWvDaJskMdLfVwKuqYwvYq/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Is that so? I see. That's quite an unusual outfit for an official guest of honor.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1HbXObJJ2Nyk5I5Nd-7xag1hMI2w1pHOZ/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Well, um...aristocrat after aristocrat was coming up to greet me, so I ditched them to avoid the hassle.",
                "line": 32,
                "url": "https://drive.google.com/file/d/15bJIixaCMslbdJW04Xz13NAWQnMshXNp/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That's literally the point of being a guest of honor...",
                "line": 33,
                "url": "https://drive.google.com/file/d/1VFbKuOhW8o9EE587RWZovZQX1rYCkQ3j/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "A-Anyway, my father and sister said I was forbidden from visiting casinos, so it only made me even more curious to see what they're all about...",
                "line": 34,
                "url": "https://drive.google.com/file/d/1mpOtKP8fE-N_tYxgUOsTvUN-hRcpjWWk/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Are you telling me that's why you're disguised as one of the staff? You do know the staff can't play at the tables, right?",
                "line": 35,
                "url": "https://drive.google.com/file/d/13IxgEpt55GYO5VKUH5bc1U6-QaMW_bzd/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "O-Of course I do! But I only realized that after I put on the costume, so get off my case!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1nXilseoc0vLmJv9TT8HKY40ZUJ60EpT2/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Besides, you're also wearing a bunny costume. Explain yourself.",
                "line": 37,
                "url": "https://drive.google.com/file/d/10knKnuCrzbk5lI-sBHXQN_cLJfNeW6T_/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "No, don't tell me. I've already figured it out.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1aHTwzvN0VCCs1pcD56Gm4KR0ztx_Ocln/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Huh?",
                "line": 39,
                "url": "https://drive.google.com/file/d/10fOipwA4D7xWygqpKAidxjXpvPlJdey5/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Allow me to explain. You hit your limits as a writer, so you switched careers to being a bunny girl! Elementary, my dear, Natsume.",
                "line": 40,
                "url": "https://drive.google.com/file/d/11RzfBzRqx1wRE1x0LFKU6jA7hqk78STv/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "W-R-O-N-G! My writing career is going just fine, thank you very much!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1LLkXJ5BVy4Gx_lf3GlWietxT_SCELvXw/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Well, that's a shame... That costume suits you.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1kzkEMgjZoK5yWkJFxi1ueghFrMQUfVLv/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Is that meant to be a compliment or an insult?",
                "line": 43,
                "url": "https://drive.google.com/file/d/1FBJVANXtmBlc02b3uBMp1POUGeiJt_YX/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Anyway, I doubt you're willing to say much more. Fine, then I'm guessing you're conducting some sort of undercover interview.",
                "line": 44,
                "url": "https://drive.google.com/file/d/15QJlBO1B21ewNWJCHJPcHu-y_5Ex5E6C/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Um, something like that\u2014",
                "line": 45,
                "url": "https://drive.google.com/file/d/1u9Sf5p-ngG5xXgAsrOpf8GQd_n7cOGY6/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "Hey, new girl! What're you slacking off for?",
                "line": 46,
                "url": "https://drive.google.com/file/d/1kPbnaX95NnEmk9THlo1sFN2cIoK-QmD6/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh, my apologies! I'll get back to work immediately!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1h0MNwEzGLmT4gzpxnOXhuEAy2z4l2kqy/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Well then, if you'll excuse me. Please keep to your promise, understood?",
                "line": 48,
                "url": "https://drive.google.com/file/d/1ke9-I44fWj4eCOSFmKOHDllHRz4SI52M/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Honestly. What in the world is she up to?",
                "line": 49,
                "url": "https://drive.google.com/file/d/1e4s6AQhvWOTBJvjZF_kSnP1kBNnL7CNb/view?usp=drivesdk"
            }
        ],
        "e3": [
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Whew... I managed to quiet her for now. For all her faults, she tends to stick to her word, so it should be fine.)",
                "line": 1,
                "url": "https://drive.google.com/file/d/1xumuwErUpFiGutywGFTsbaG9xXrl5xbC/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Anyway, I've been observing the casino while working but haven't seen anything suspicious yet.)",
                "line": 2,
                "url": "https://drive.google.com/file/d/1OWkYGJp_kTY4lD_KRKoL2yX1zAzfeu-A/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(The security staff network seems extensive, but I guess it's only natural in a place with so many dignitaries.)",
                "line": 3,
                "url": "https://drive.google.com/file/d/1Bzp2HjBfGjuMaLMX0FJkMQ29X-4_EqFz/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(And while some customers were making a scene about cheating, it's likely just sour grapes. At any rate, I'm not picking up on any nefarious intent from the dealers.)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1cPDZxhMPlld-TY8YGRUkGXh0ud3Fp8tz/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(They could be running an honest casino on the surface while all the shady business happens behind the scenes.)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1e3-mEG7x-cojXUx6ga4L-21JhoFrV-IN/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(It's tough getting a lead on an investigation of this magnitude, especially if the Cult is involved\u2014)",
                "line": 6,
                "url": "https://drive.google.com/file/d/1GQ5w-o_H25jP6kDBm_40JdwIDnxcugFE/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "Hey, new girl.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1nFl8g0qT0007h6cK2lChAlHLBtvVyYH8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Y-Yes?!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1K0Dxitv6Pb-14VWHsmK-33z-g82WH1uN/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "You're the new bunny girl who just started today, aren't you?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1ulgacnJULKqiXmIFcbgLZ7un6phqN8ai/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Y-Yes...",
                "line": 10,
                "url": "https://drive.google.com/file/d/1KMvsqT5qqD0GsaMrfBMN-CcKkMD56IFr/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "You've been spending a lot of time spacing out and seem completely unfocused. Just because it's your first day doesn't mean we'll go easy on you.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1wVpMZWacvwDH48phrUPYwZ8rHX0rE6zB/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "And what's with that notepad? It doesn't look like something you need for work. How suspicious...",
                "line": 12,
                "url": "https://drive.google.com/file/d/14ERX3S92NXUXMa_DVJTkQoqUYtRQfqUE/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Damn it, he's sharp!)",
                "line": 13,
                "url": "https://drive.google.com/file/d/1zbd1ky7erez2gC9wTHzNFdCKSZD2qm7z/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "Are you...hiding something?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1LzadWY6LXdxqhEjqv5aR4S6ppcSOYRnl/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "N-No! Nothing at all!",
                "line": 15,
                "url": "https://drive.google.com/file/d/1x1VLPgGSQI85UlfU_bn8W7R55OZHd3PQ/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "Then let me take a look. If nothing's wrong with it, I'll return it right away.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1DLDbupcjgJ3aHe0xYykcmJYi7ycYUu9-/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Agh! There's no way I'm showing my notes! Not if I can help it...)",
                "line": 17,
                "url": "https://drive.google.com/file/d/1RvHXzWFxmVvFyjpWAKHvi0wsLyZI5m_Z/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "U-Um... The truth is that I write fiction as a hobby! I thought I'd never have another opportunity to be in such a gorgeous place, so I just had to scribble down ideas in my notepad...",
                "line": 18,
                "url": "https://drive.google.com/file/d/1WJ9EqOoVJtZzC_lSbzgFOgFyEkLtGMBN/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "As a writer, I can't let people see the ideas in my notebook! I-I'm sorry!",
                "line": 19,
                "url": "https://drive.google.com/file/d/1sS4oW-gkKq7O16k9F_nI03N2EtbEQNdi/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "...Be that as it may, this isn't an issue I can overlook. What to do...?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1-Ej0t_mzDyQ6eOaBNtJ_XDFWbCTrtuU8/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "??? (King)",
                "subtitle": "What's going on here?",
                "line": 21,
                "url": "https://drive.google.com/file/d/1gTKdNaxIhrbolVlhNMtXxlv1-qaubkFa/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Huh?!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1ddc7yBg_H8Azzp-RYcevLkA03PGXGVub/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "K-King! Sir! I was instructing this new staff member who's been absentminded...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1EBIC5SYM92fJ_JySdG6ajS5ZHuKorvnn/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(King...?! Does that make him the boss of this casino?! I hadn't expected the top brass to show up so suddenly...)",
                "line": 24,
                "url": "https://drive.google.com/file/d/1UQnWXri7oM_W4DYmDASeoAva-AWYnrfj/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "I see. Trouble with new staff, huh? It's a common occurrence. As usual, I'll leave it to you.",
                "line": 25,
                "url": "https://drive.google.com/file/d/12d4UqR3CCZgibfo6mciEIYuR61604GvQ/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "Wait, King, I've something to report. I've discovered something in this newcomer's background that we were previously unaware of...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1MNZ6Qvb7XUW2ipuqLErQU9cXuCxzqZBm/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Oh?",
                "line": 27,
                "url": "https://drive.google.com/file/d/1jemQdxM4-txfWyhEq-V0CvbNwm7QqXbP/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "She apparently writes fiction as a hobby and was taking notes about the casino for her stories...",
                "line": 28,
                "url": "https://drive.google.com/file/d/1RWR9mWxSSAnHuFxUQRm6et-nRqlGS_Ww/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "I see. So that was the cause of the trouble.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1J-tCt8Y-IPtiLwVE1fmdxrysBLxsAvhg/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "M-My apologies!",
                "line": 30,
                "url": "https://drive.google.com/file/d/1a5ydOusJQ65QHOeXKWCjSs_yJX4L5cAo/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Hmm... No. You don't have to apologize. Furthermore, there's no need to keep us abreast about all your hobbies.",
                "line": 31,
                "url": "https://drive.google.com/file/d/19z0-uDMTLFOQMfgoDjXPoktS9zWKH16f/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Huh?",
                "line": 32,
                "url": "https://drive.google.com/file/d/1B637AlCfJ540y0DinJJgHdE3alw93rV5/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "We employed you for your ability to work effectively. As long as you can offer value in that area, there shouldn't be any problem.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1QZ5xglxwoVemjFEK74m10r9EKGvIdOG2/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(What a generous man! I'm honestly impressed...)",
                "line": 34,
                "url": "https://drive.google.com/file/d/1IgmRS29ZQschPrxfTVigeDqLMfuGpbAh/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "But...you shouldn't be bringing your hobbies to work, correct?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1zFprqtDptDQka6A2-5FP3UAB8rNLppoV/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Ulp. Of course you're right...",
                "line": 36,
                "url": "https://drive.google.com/file/d/1lyciyxoFjzgZEw4z9OizW2HG_senNPWM/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Impeccably dressed, perfect responses, and that mysterious aura he gives off... There's no doubt about it. He's the boss of this casino.)",
                "line": 37,
                "url": "https://drive.google.com/file/d/1ozjBmVxV2H8-3D81TjJN4Q0Zk7MbO0hn/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Well, new girl. The fact is your work ethic wasn't up to par. We could terminate your employment based on the terms of your contract.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1vYEZoGpHvEXrFXUQ2LScxLGwF4J31pYz/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Pl-Please don't!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1SUcMjzpLhreebpJPGpc0XAWItTpvS9lQ/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "This casino has a reputation as a high-class venue. The customer service skills required of newcomers is incredibly high, and it will take time to find your replacement.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1Ph5U3mU4oIbnsTWOvKD4nLSudu5bppz0/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "However, the fact is we hired you because we value you. So...how about taking on a little gamble?",
                "line": 41,
                "url": "https://drive.google.com/file/d/1saSDFBaKMZsXdWT1wscBojV545Hmouz_/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "A g-gamble? What on earth do you mean?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1Kl2dcLdy2LCBKTwvBDq5awfxQfVij5NA/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "As you know, this is a casino. It's a place where winners and losers at the game tables determine all outcomes. Why shouldn't we also gamble to determine the outcome here?",
                "line": 43,
                "url": "https://drive.google.com/file/d/1ax-yFB4_fVBWQudpmzSLoqoMZZmTzFm1/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I see...",
                "line": 44,
                "url": "https://drive.google.com/file/d/1DRGDJB9vWkk8Evv_KNXidBqL6O9YM6wk/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "The outcome will be absolute. Win, and you gain something; lose, and you lose something.",
                "line": 45,
                "url": "https://drive.google.com/file/d/12Thq4__oE7Qjyywjr7J8Mn3jCq-iekeR/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "If you win, we'll tell you every there is to know about this casino. We'll even share with you...our trade secrets.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1-hoYTjoo6rhbzZnEgAMBAnPuwTxDLHSE/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "As for if you lose...let's see, you must reveal your identity in full.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1Nqi5pHI_cE9MTA4XritOfU_HL0eWyWEF/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Fortunately, there are not many customers today, so the rest of the staff can cover. If we host it as an event, it should also entertain the customers.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1uLVZ_CtQSwC9HiYCA70wq7cExRP6sLz8/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "So, what do you say to a serious gamble with those demands on the line?",
                "line": 49,
                "url": "https://drive.google.com/file/d/1h6BRRh39JasI1yQuDVnVzrlvylokcvFA/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(It sounds like I'm simply being assigned to today's event, but it could also be a trap set by someone suspicious of me.)",
                "line": 50,
                "url": "https://drive.google.com/file/d/1N6ikZLjHaPILnuWCOmjNadWPKNFNsXNc/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(But my position is highly tenuous. If I refuse, they'll fire me for sure. I've got no choice but to comply here... Wait but\u2014)",
                "line": 51,
                "url": "https://drive.google.com/file/d/1v3JrNO3WJz_JCQK9aB30tXi86trCncpV/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "M-May I think about it for a moment\u2014",
                "line": 52,
                "url": "https://drive.google.com/file/d/1IpZ1aOXANc4VUAnrJ69ofYuG6k9u0jJ9/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "??? (Alexia Midgar)",
                "subtitle": "Very well. We accept!",
                "line": 53,
                "url": "https://drive.google.com/file/d/17x-QyKSt0LkEKMzCh2QQLS1xjuaQq00c/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Huh? W-Wait! Who're you?!",
                "line": 54,
                "url": "https://drive.google.com/file/d/17hASRa_a8mkQLnrNeNfciti8YIxN-RkT/view?usp=drivesdk"
            }
        ],
        "e4": [
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Who's this?",
                "line": 1,
                "url": "https://drive.google.com/file/d/1IwzPO3CACKYhMW5Mtm0E9T4UQ9iqC9Pr/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "As a senior bunny girl, I'm responsible for my subordinate's mistakes. So will you kindly allow me to participate as well?",
                "line": 2,
                "url": "https://drive.google.com/file/d/1mJEB5iEN6PiqF8tuXebLmz1XW4B_3lJI/view?usp=drivesdk"
            },
            {
                "name": "Staff",
                "name_variant": "Staff",
                "subtitle": "I don't recall this bunny girl in our staff roster... Forget it. I can't afford to mess up in front of King.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1Dez8phv9-y4vgBCQXUEDcHdmeCWj4yuW/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(This woman... What is she playing at?!)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1XLPc8G_3Lm5uxJi1lnh5SEArFqeuT30s/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "...Very well. The more the merrier.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1ejqx0-O1v2g97ceaE3SuoLI1kRIy3Vyb/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "If you'll excuse us for a moment. We'll make the necessary preparations and meet up again later.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1BEyipWhySA49cX9nk09djlV5zL2fr_K5/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...What do you think you're doing?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1H4k_wgLUrEfk9EMicHIxjh-Ve12GJtMQ/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Nothing. I saw an opportunity for a staff member like myself to join in a game, so I took it. That's all.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1ynEI65bWyvx3F1gFUZigWWkkD0gggKQY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Just to clarify, have you ever gambled at a casino before?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1kai49yEe9LtitMH6x4L0eQmsrqlyqr9t/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Of course not. This is my first time stepping into one.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1bhhXHqXUnpLCD-E_wz6zvq4a0Kxiydtp/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "But don't worry. I sort of get how the rules work.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1inUd8OEQeEuC_P-W4TUzwu6RinqXjmwn/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Sort of? You'll just hold me back at this rate. Honestly, I didn't think you were this impulsive...",
                "line": 12,
                "url": "https://drive.google.com/file/d/1XMh9n5rZPU_IoIGfrda-TDSahCwx0vVE/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "What's the big deal? I only joined mid conversation, but it didn't seem like you were in a position to turn down participating.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1urFf41RLYsJcmcUjUZIdWthrAni-Frh1/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "W-Well...",
                "line": 14,
                "url": "https://drive.google.com/file/d/19bu3jUOAdnsUjFHeKF-c87c2o8IyGicT/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "I get to join in the games, and you get a reassuring ally. Sounds like a win-win situation to me.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1hFaPT8YgJMIqeHKBZ4LT-GRphw2RYW-L/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Not sure about \"reassuring,\" but I guess you're right. Still\u2014",
                "line": 16,
                "url": "https://drive.google.com/file/d/1pVonQThJbPcsFlx8S0b-RHKFSYcz_vrW/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Jeez, c'mon. It's already decided. Just accept it.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1JNvSGqodTkcaire8yn5L_EnBhUQCKzX1/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Anyway, the fact is I couldn't just stand by while you were in trouble. I mean, we're comrades who promised to help each other.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1Z7x_CdjiJb5q6-afifO95f-U7nyeuzGt/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "I'm sorry if I didn't go about it in the smoothest way, but...",
                "line": 19,
                "url": "https://drive.google.com/file/d/13u-CSHuE2LkUn7_cLwdmAeZz5sB6lq0-/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "If there's reason behind your actions, why don't you let me help?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1D477ExO-jd-6JB7EcXiZ7m8QrHv9twrv/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Princess Alexia...",
                "line": 21,
                "url": "https://drive.google.com/file/d/17l_yTXjPMo0OotpA7OTZRY2aIYh-tBTG/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Fine. Just try not to hold me back.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1nHstnzOOiYnekbd14CM5WnMOdkYuo5JA/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Sure, you just tell yourself that.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1AKD6a1TkhR0f7VagLRdwn-YaO7HWrDzF/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Right back at you.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1x4jWOo0H3ns_S8-tW_gwHAZeB9II9QMk/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "By the way, you're on your own if we lose, okay? I'm only here for support.",
                "line": 25,
                "url": "https://drive.google.com/file/d/184bcNZbaYFPI13AXHncUFtlx_FBY0I6n/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Y-You petty princess... You just want to gamble...!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1wie82pGUeDTOAx_KxhghEkYJYpbe8XZP/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Thank you for your patience. The game event will momentarily commence.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1LgOeYNDnDk47-fCBw-eh0BDA_PQt_YwK/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Are you two bunny girls ready?",
                "line": 28,
                "url": "https://drive.google.com/file/d/1KrWcPYogiIjUL2ZtnV9JfzK76RxCrP3m/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Yes, we're ready.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1vOQRQL234rys0-usy3Rn4ZROtY2TdJIW/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Very well. Here are the rules: we'll play a maximum of three games, with the victor being whoever wins best out of two.",
                "line": 30,
                "url": "https://drive.google.com/file/d/16BFneSlYCY0zo1gkR8GVvR4KYGZ_zh-o/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "The first game is Blackjack. The match will take place between the dealer and the player.",
                "line": 31,
                "url": "https://drive.google.com/file/d/16mf6ot7_yP_meQjmskL-qiKSFPXX_-7K/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "You'll play a total of 11 rounds. You must win six or more out of 11 to win the match. Are we clear?",
                "line": 32,
                "url": "https://drive.google.com/file/d/1VZFksEPaFOID-Zefx3tWNcz4cZowVNt8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Blackjack...huh? Very well. We accept.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1pb-EDdqSN4D5YVNIo9SsUUn8iUGoNk_q/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Blackjack...? C-Could you explain the rules, just in case...?",
                "line": 34,
                "url": "https://drive.google.com/file/d/1PBfBhFwfi8HVIaii6cuqXkmtf35xslbb/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Are you telling me you don't know? I thought you said you sort of get how the rules work...",
                "line": 35,
                "url": "https://drive.google.com/file/d/1vAZmPu_e71rD-9EebIfuo0uc2JtdHoS0/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "*sigh* Well, we're off to a good start. Dealer, could you please explain the rules to her?",
                "line": 36,
                "url": "https://drive.google.com/file/d/1p_5OUfFMOmHgg1TiZGCegsKABDbutGdz/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "Of course, and by the way, I will be your dealer for this match.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1IwuSs-7SHth-4MsNoaqt63TySKLaRLJ-/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "To put it simply, the player whose hand is closest to 21 wins.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1sW568fc5z_4Hf_WYkd5e4-1Biis8bwPx/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "Cards 2 through 10 are worth their face value, and face cards are worth 10. The ace is a powerful card worth either 1 or 11.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1BW5eD0O3Yw3rZ3kMglMdf-sYYEgnlk0s/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "At any rate, whoever's hand is either 21 exactly or closest to 21 wins. It's a draw if the values are the same.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1jRSc0oL_OfscBNmEv6URsR-r9fOg7xxR/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "One thing to keep in mind is that if the total of your hand exceeds 22, you bust and lose. As for me, the dealer, I must keep drawing cards until I reach 17 or more.",
                "line": 41,
                "url": "https://drive.google.com/file/d/14gv_xl8VY5HoZzPKPd4DPOmtX6BvlTNt/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "Do you understand?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1zsdxJSQ5NcFGE7hsUAHdPXK21Z1E__ob/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Of course, that's so simple. I understand perfectly.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1kgO4mTN9L-va0sp4PhrLOy-pA_jovhBM/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Feel free to go first. You can enjoy yourself for three rounds or so.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1zzSfwmvstCQiRG-dsBebMcpJP04BkFII/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Oh, are you sure? Heheh. Don't be surprised if your turn never comes around.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1V9MD-C8St1sR7gSNmQQ0yiqOY5CLRC8C/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "We'll need to win six rounds, so I'm pretty sure my turn will come around...",
                "line": 46,
                "url": "https://drive.google.com/file/d/1O-ef8cUrlyvbYSJWDYyBxL-uoB3sZb1T/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Well, you wanted to gamble, right? Go ahead and knock yourself out before the stakes get too high.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1jtvHJBg7CQi4SCfPLCpgw5vg1lgF71M8/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Well, aren't you considerate? Fine, I'll do just that. But don't worry. I have every intention of winning.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1MoxA9Ezxb8kjgbtujBtcmSWOpG02XdXy/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "Well then, let's begin.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1I23cc7A9HVKg1-j9See1tUTwK_8MHlJk/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "The total is...24?! Bust again?! That's three in a row. So unlucky...",
                "line": 50,
                "url": "https://drive.google.com/file/d/1GK27lsurrZVxwVwMHDWo2ErXL_ujQFmN/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "You're being too greedy. Since your opponent has to keep drawing until they get over 17, sometimes it's best to stop drawing cards once you pass 17.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1JLunZ3eVghBl_uvTcqJKT07id0uSwjHL/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "While there is no loss in getting 21, you have to understand that's not your primary aim.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1TkT7mcy2Asq-7bjr8ejJJ1eVhofc4gWr/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I'm up next... Deal me in.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1WM9WUozLy5IVs7VguZ7GOnMxGpQv9g9j/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "Very well... The first card in my hand is an 8.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1PGxoAaroXO6ovOiJPkXAoIjMZgFPKzHp/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I have a 5 and 6 for a total of 11...",
                "line": 55,
                "url": "https://drive.google.com/file/d/1glarumJfP5a0yiyJvkNLAkuAHuPaxlpG/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Hit me.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1fgnQxNeGkvZgFKycOQNogb87Qhde65bF/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "Here's your third card\u2014",
                "line": 57,
                "url": "https://drive.google.com/file/d/1nuG9s2PwlYZO3nmjCa2meG_NFm6W38Nf/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Queen of Hearts... Face cards are worth 10, so that's a total of 21.",
                "line": 58,
                "url": "https://drive.google.com/file/d/1Ie81JEouYxdMOZTVKMGVsc0YprjE0Gk4/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "I have a total of 17... Well played.",
                "line": 59,
                "url": "https://drive.google.com/file/d/1TrvH0NPJA3AibVzAEPCycvc_y9q5Q8Mz/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "It's now one to three with house advantage. Next round.",
                "line": 60,
                "url": "https://drive.google.com/file/d/1dHac1hv7QNsIadexGN8pFAu9ay9n7Znr/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Stand. That's a total of 20.",
                "line": 61,
                "url": "https://drive.google.com/file/d/1yqcYeX6pRoJ3rEADE7heHNjy56zvmeEe/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "I lose with 19. It's now five to three.",
                "line": 62,
                "url": "https://drive.google.com/file/d/1oy_AZGXj2yIrxwzYnmmtuospxMgQcmja/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Ack... Four wins in a row! What is going on?!",
                "line": 63,
                "url": "https://drive.google.com/file/d/15YwoZNs0sdpxU6D--breWiUsIU-c5X0l/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Why are you upset...?",
                "line": 64,
                "url": "https://drive.google.com/file/d/1oyKUJpByKi64-gAw7VG70gLUGEIjPFHW/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "I'm upset because I'm the only one who lost.",
                "line": 65,
                "url": "https://drive.google.com/file/d/1P0_hm4ozxJOOSRHXfBVIL7o_914WfW4W/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "What a selfish thing to say... Anyway, back to the game... My hand is a total of 20.",
                "line": 66,
                "url": "https://drive.google.com/file/d/1H6UMkLfqd7kJNuFW0Jr_Z279J1n4oxwS/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "Mine is a total of 11. Well, what will you do?",
                "line": 67,
                "url": "https://drive.google.com/file/d/1kDDC23NuB5rDN4ZH-TvDcXXbO59H9Yk2/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "20... She has a solid hand. It only loses to 21. The dealer also has a pretty good hand, but there's a chance of busting. You should definitely stand\u2014",
                "line": 68,
                "url": "https://drive.google.com/file/d/1GWlLR8Klt8t4Uv-zjivsz0xj6W1N-Sod/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Hit me.",
                "line": 69,
                "url": "https://drive.google.com/file/d/1XeqkZw1MnZ6ZdZxu5uZIozxz85Q_w5xS/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Wha...?!",
                "line": 70,
                "url": "https://drive.google.com/file/d/16JNSnYBnuY30brn0N5cdxHXei-Ij0RX_/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "...Here's your third card.",
                "line": 71,
                "url": "https://drive.google.com/file/d/1TFGJF4UK81Iqz0x0b1ZyFCxLqAl4crVq/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...An ace. And you?",
                "line": 72,
                "url": "https://drive.google.com/file/d/1jp4rdOZchBKx9MBSsYMLxT74pjsAjDkC/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "...16. As I'm under 17, I'll need to draw another card. That's a total of 24... Bust.",
                "line": 73,
                "url": "https://drive.google.com/file/d/1UzI_p6IDifz-Ey12BPw8X72qFAqLVBo4/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "That makes it six to three... The bunny girls win.",
                "line": 74,
                "url": "https://drive.google.com/file/d/1wNyZO-bD76vfNAPrNHgF-_-CiKmwO7gG/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "I see... So you were counting cards.",
                "line": 75,
                "url": "https://drive.google.com/file/d/1iamJoyrXe7EUwn941so8ogrywi2IOlu4/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "Counting cards?! So you were tracking the order of the cards in the deck! But when...?",
                "line": 76,
                "url": "https://drive.google.com/file/d/1pdDMlhG5C_VtndynxI5XkgmEjSxXVKZ2/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "She likely has an incredibly keen eye. She must have watched the cards meticulously in the first three rounds.",
                "line": 77,
                "url": "https://drive.google.com/file/d/1ol5tsveno59RTrNW-hAsde6fRHipJmCG/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Furthermore, we often use new decks in cases like this, which can result in a certain amount of bias due to an insufficient shuffle.",
                "line": 78,
                "url": "https://drive.google.com/file/d/1ipsmS33L1KCfNpzHqaMhSGVwvAh-xzts/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "I doubt she knew the exact order, but she could make decisions based on estimates. She soundly defeated us.",
                "line": 79,
                "url": "https://drive.google.com/file/d/1wAUlQaOHUXdWGKuEosmVjQ7Glv5P-y4k/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "I-I see...",
                "line": 80,
                "url": "https://drive.google.com/file/d/1xEHQ6wBJdrVK_S7gyO4uxdyqsarpN6Ks/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Quite the impressive match. Let's move on to the next game!",
                "line": 81,
                "url": "https://drive.google.com/file/d/1aRoKBXN8Fu7312MYl6yTTHCsFLDA0ZOX/view?usp=drivesdk"
            }
        ],
        "e5": [
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "The next game is roulette!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1pJxOq_9MAdwhuZpznuxC4epkTB2zAvYx/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "This time, we'll determine the winner by chip count, not the number of wins. You win if you have at least 1,000 chips within 100 spins.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1vDzpaTWR2v1xWH_YJvS8HOyQ0R47iUCI/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Your starting hand will be 100 chips... By the way, you'll have to pay for your own chips. We wouldn't want you to get complacent just because it's a game.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1Yw4vr0sLqlHIETefseRO22WdT9MtNNUw/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Oh, and just so you know, our casino chips are 100,000 zeni a piece. We pride ourselves in being a high-class casino, after all.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1kH1N18lY6IG1x4q0S_dHIfndq7Vl3863/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(I-In other words, 10 million zeni?! Worst case scenario, I may have to go begging to Gamma...!)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1txC7kAyPWpygaOZpEqfz4F9URulKGaPi/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Is that around 10 million? No problem.",
                "line": 6,
                "url": "https://drive.google.com/file/d/18pTXxU-KywRkcnb71qqhk-4uI0Fk6p2B/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(She really has no sense of money... The royals are truly frightening.)",
                "line": 7,
                "url": "https://drive.google.com/file/d/1qnu_1PSDlUl8NGpH3Ha50Jl_AAa-Fpuq/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Anyway, I'm sure you have something up your sleeve for this game, too, right?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1GkokJ8bpYBEQ2SMg2aZE_wbuw8z05-55/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...No, it's not that simple. The odds are far worse for this game.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1f0c49mQLpEi-J6_KY28D5JEvgrh0Chdi/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Around 94 percent.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1w6g9yTD98-0Q40cK81ld9fbC7UsObDSG/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Excuse me?",
                "line": 11,
                "url": "https://drive.google.com/file/d/1ZYNiZ60dd5TUoxzEVc9fKNOm-MfDkUK3/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That's the rate of return in roulette. Blackjack, by the way, is around 102 percent at best.",
                "line": 12,
                "url": "https://drive.google.com/file/d/18OdRHijXzA1fgRnK8ClNOVAp9V-QoKmr/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "So, unlike Blackjack, the more you play...the more money you lose?! That's so unfair!",
                "line": 13,
                "url": "https://drive.google.com/file/d/1uyYH0xabjsUn4VjqAtNpW5IWyux_bw0U/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It's not a charity, so of course, the house has the advantage. In fact, Blackjack is the rare exception.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1NL1WsVJhs8PexWbmUdSSCMHu9csMz9VW/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "Now then, let's begin. Place your bets!",
                "line": 15,
                "url": "https://drive.google.com/file/d/10InHc0Fd51j6g_nFOf1SQLkLxwnLSvtO/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "When are we supposed to place our bets?",
                "line": 16,
                "url": "https://drive.google.com/file/d/1Cu6XHafGZcn3avQfZdOVd44r8g4rOR99/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "We can bet now. I'll put one chip on black.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1I0sxAYMDUwehDAJUpGz-nUKRddnYglz1/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Black? You can bet on a color instead of a number?",
                "line": 18,
                "url": "https://drive.google.com/file/d/1e9ztLTVAvuAxLUA4dGV7GpuKFNqUuG-M/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes, if it's black, I win. If it's red, I lose. If it lands on green 0 or 00, then the winner takes all. It's easier to win but with less of a payoff.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1XbOVGjprAXDSpymEgoQpvO5oCJl6-9ZC/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "In other words, a coward's way of betting?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1qsPm8b8H3juuN_f3SkDrXsztazhSHzDO/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Watch it...",
                "line": 21,
                "url": "https://drive.google.com/file/d/1ypeWyVPysIoChLapVWp1Ti1ailBRdi4H/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Calm down, Beta. Start by placing small bets with high-probability odds and observe. You need to get a read on the dealer if you're going to win...!)",
                "line": 22,
                "url": "https://drive.google.com/file/d/1kNtKLPSKHQzuSYsbD9oqLTTrue1N6fxl/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "Time to spin the ball! No more bets.",
                "line": 23,
                "url": "https://drive.google.com/file/d/19XFCKgg6pMes__58F5VbmRxk3tGSUcsf/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "The result is...red 11.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1susnjFbSUgWuiwv7LBIc9fID-dCwe35Z/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I lose. There goes one chip.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1uJeF6MvPPa-nkEnnXeAFXVneyQhsKwyB/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "Onto the next spin...!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1Q1kbg9-345j5Wtxm33GhtIqw_gw1OIMK/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Let's see. So far, it's landed on...",
                "line": 27,
                "url": "https://drive.google.com/file/d/1Yxbh6hNWJ178YaMZdc6_ozcS-uVbTh5I/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Red 11, red 25, black 6, black 1, red 27, black 29, black 26, black 17, red 12, and black 8.",
                "line": 28,
                "url": "https://drive.google.com/file/d/180taen0BCku7nJF680Ql_Yc8-n9uV4w7/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "I-I'm surprised you remember all that...",
                "line": 29,
                "url": "https://drive.google.com/file/d/1ECCwkSl85oASveDhEu8i-mQg7D035oQZ/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "That's a lot of black. Don't you think it'll land on red soon?",
                "line": 30,
                "url": "https://drive.google.com/file/d/1sfLtwRDX982yUkCRnFPxaZYYyM-oCBWY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It doesn't work that way. It's not like Blackjack, where you have a fixed number of cards.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1GfH2HM5DJd5GxiGT73o6p6UZi9-t0EXX/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Excluding 0, the probability is 50-50 every time. It may just keep landing on black forever.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1pYyj03-GLvtFmxFRdlt3zKlL_zVOPjsL/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Then what do we do? We've got to win...",
                "line": 33,
                "url": "https://drive.google.com/file/d/1BzXNJvOoVNWBrzNC9rsCcDY2qLbGQM0I/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "Betting is about to end...",
                "line": 34,
                "url": "https://drive.google.com/file/d/1UbWkYbZjyXIwY_ItO70gxZj6IVcNeDDW/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...One chip on red.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1GpuSlYYPVf83U99IzxUGEWpDleXqwR7o/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "The result is...red 16. Congratulations. Here are your winnings.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1hOnIUZ0FVFQ7TafP6el082RZneVRpsdl/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(We've gone through about ten spins without gaining or losing any chips. This time, the dealer seems to be consciously randomizing everything to avoid giving away any tells.)",
                "line": 37,
                "url": "https://drive.google.com/file/d/1bwr758F9SZ40r5SAsB2isOFe39Yyks6Q/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Luckily, we've managed to maintain 50-50, but in the long run, the odds are against us... What to do\u2014)",
                "line": 38,
                "url": "https://drive.google.com/file/d/1X54Mpobla_gGHDh7N9K1QT0FYWc1zH5t/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "That does it! I'm betting all the chips on 1!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1Z1gclpueodVzlC2zTmenvZI34-jlOniA/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Huh?! Wh-Wh-Wh-What are you doing?! Dealer, cancel that bet\u2014",
                "line": 40,
                "url": "https://drive.google.com/file/d/1TXdvLt2JpkLGoLmrxZrIgN0C4Ko1pIYV/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "Bets made by your partner are also considered valid. Time is up, so no more bets.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1t5S1A0BBEA5f8ap0NC7zBu_ohwwOFxvL/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "N-No...!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1kHBhJd24ZNEKZvakEw0oAVDpWK_X24Lt/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Brace yourself. If it lands here, based on the rules, we'll win. Even if we lose, we can win the next game.",
                "line": 43,
                "url": "https://drive.google.com/file/d/19OQ5BqqDEV3D0OslPaX93wUghVuStKaU/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "By the way, what happens if it lands on the single number we bet everything on?",
                "line": 44,
                "url": "https://drive.google.com/file/d/1wZReM5rYT7nYdCzZta-95bEHhnPqqBhu/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "That's a multiple of 36, and since you bet 100 chips, the payout would be 3,600 chips.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1_JuHqKRee19-FEiS8raRePfu2Qja5Nls/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "That's a considerable gain. I may have bet a little too much, but if it lands on 1, we'll be the clear winners.",
                "line": 46,
                "url": "https://drive.google.com/file/d/195uJLk27ey6Z8ag6_LGVuEdnxOBm3-Di/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Seriously!? I should've expected such outlandish and reckless gambling from a royal! Not that your family won't ultimately bail you out!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1Wb6M4CVskhR08ibJREbHJe_7lF2z2jjO/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "H-Hey!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1TMnjyzvFq8f3hoL7rgJpP72QUj2dXO6q/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "A royal...?",
                "line": 49,
                "url": "https://drive.google.com/file/d/1fjtIZ05Jy1Ib4p1fSp5MCJflErbj2SKF/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I-I meant she acts like a royal...! It's a metaphor! A metaphor!",
                "line": 50,
                "url": "https://drive.google.com/file/d/1N53pEY9_7PfrbWQioqvqv7HZHKi5DJZh/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "...Time to spin the ball.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1YN95qCV9irgroH9usSRNCuNkca6fk2ih/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "I'm getting excited!",
                "line": 52,
                "url": "https://drive.google.com/file/d/1ognFm5vekxj__JPqnZJdwtHrOjaHfttv/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Waaah! Help me, my lord!)",
                "line": 53,
                "url": ""
            }
        ],
        "e6": [
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "If it lands on 1, you win. Anything else, we win.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1c1k8Cswa2oItl3Znfy-4qFcXyeJaH2nU/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It's over... All my hard work is for nothing if we lose this pivotal match... Ohh, what did I do to deserve this...?",
                "line": 2,
                "url": "https://drive.google.com/file/d/19wTTNNJfH-LI0z3eGc7sI6CN4yhTzzoA/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Well, sounds like a \"you\" problem.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1zvXyAesoXeqwVCZx3yYfmpSMs7qkssWb/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It must be real nice not having anything to lose!",
                "line": 4,
                "url": "https://drive.google.com/file/d/1S5qTe5el559Lefl9MmkRNSyy5q3ZHGD1/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Relax. We're going to win this round! I've got a good feeling about this!",
                "line": 5,
                "url": "https://drive.google.com/file/d/1BjKi9hAcUUohY0Cy6O4djbur7cWCEVNk/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yeah, sure. Good luck with that.",
                "line": 6,
                "url": "https://drive.google.com/file/d/17Z4XLuhNkOFys0FaPYc4RBJbSfPP-G7q/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "We're just about to see the results...! Ohh...?!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1x6vWN7ejn2Lw-fdLiZlSnczhgZmVHUJp/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "O-Ooooone?!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1ojPnB9h0Wj-HxyHrodAIMAxlWeKABG6H/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "S-See?! I won! C'mon, hand over my 3,600 chips! Eeeek! I'm amazing!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1xbouiVPn4kiDXghfIkcwdmDilGwbfNLz/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "M-My apologies...but we're out of chips. We hadn't anticipated this outcome...",
                "line": 10,
                "url": "https://drive.google.com/file/d/1bBXlXhGw19iZ84_iSRDam2rTQlR7bI7D/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Huh? Well, that's no fun.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1uyXPkFfYxwwBEVBtNr39SThSYVFK6Xh2/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Wh-What astonishing luck... Unbelievable...",
                "line": 12,
                "url": "https://drive.google.com/file/d/1S8P6aHLlCaGhwuDeVdGNuZdWiyCDmx07/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Such luck is unheard of! Unless we're talking about the natural luck of the royals...!",
                "line": 13,
                "url": "https://drive.google.com/file/d/1IOHfcTvGxq6kqwj6T-UJnWrBTzeRxXkI/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Well, she does happen to be a princess...)",
                "line": 14,
                "url": "https://drive.google.com/file/d/1cCpnjrEuv-41erOEXEBPYgvwGI4jbChb/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Heehee! That gives us two wins in a row! What would you like to play next? If it's poker, I know how to play.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1I9NWiVF2xl50tuYpZCU96pD1ncapEs3I/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "No, we've already won two games, so we're the winner. But thanks for the transparency that you're just here to gamble.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1IYGazbQ3UsVCFU06OUKbz1v5--sPhazR/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "By the way, since we had to self-fund the money we gambled with...you'll, of course, be paying us our wins, correct?",
                "line": 17,
                "url": "https://drive.google.com/file/d/1L9R4SkAVCpLgIW3ck2rW3A1WmtKfbacc/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "Ack! Oh dear. I hadn't expected us to exceed the event budget... What will I tell the boss?",
                "line": 18,
                "url": "https://drive.google.com/file/d/1ASpZ0vAZaH4MJnDT8Pa4t3yMiRAE0W5Q/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Boss...? But aren't you the boss\u2014",
                "line": 19,
                "url": "https://drive.google.com/file/d/1SUrDUsXPL8aw6ZV-qWsc8z2GGXKJBuHM/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "??? (Joker)",
                "subtitle": "What a poor showing, King. I came here because you told me an interesting match was taking place, but all I see is you losing badly to a couple of girls.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1LlhJskPViKufKhoHGuoiXU_G_DLJgVmp/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "B-Boss...!",
                "line": 21,
                "url": "https://drive.google.com/file/d/1YRXUwO9nHWrCrYyiAnbo9F_Nmtm2sc1X/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Boss...? King, you're not the one running this casino?",
                "line": 22,
                "url": "https://drive.google.com/file/d/14tLErdt9JruCmROk79BPpSm7O_XqdakO/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "No, I'm second in command... Joker there is the boss.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1_-yVC4nmu2B-U11YXBYvLj-ne9QOePoY/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "That's right. King was originally a customer, but I hired him and gave him a high position due to his excellent management skills.",
                "line": 24,
                "url": "https://drive.google.com/file/d/17pFcRtZZH_6WjsrxMFT_kwEVtrVYrzRU/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "But that's beside the point. King, Dealer, how will you rectify this loss? Wouldn't you say these expenses are a little too steep for an event?",
                "line": 25,
                "url": "https://drive.google.com/file/d/103TmzRX4VwDgFiIxpECjVjT-sejgaWbJ/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "M-My apologies. Forgive me...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1wg3K-BHnUviXss9aPjy7WTJwSqKMrHVY/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "I'm not defending them, but I'm pretty sure these people were just doing their jobs.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1BhRYuRmnYXHSkdluxv_sLRloxgDqlONm/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "Oh? You can't say they were \"doing their jobs\" when they failed to consider unexpected losses. They'll have to take full responsibility.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1cLms2n_rH-9-fpBKRQbHtERRRQo3ElGO/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "What an arrogant-looking guy... Being in my position, I don't want to overlook the misery of my people. I'd have difficulty sleeping at night, especially knowing I was to blame.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1Jweg_Jg7YuQIe4HDMNFweFTTL038HCyj/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "What're you going on about...? If you're attempting to overturn the results of a game, we'll have to take appropriate action.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1LyAbgPgG4hd-etj6S3sM-4tw1Om8K-u9/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The guards who had been waiting in the wings surround Beta and Alexia.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1RlclMIPrOjecbnMEKF81tvCJPb-yMgPg/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Fine! You already killed my winner's high by treating me like I did something wrong! I'm pissed! I'll take on all of you!",
                "line": 32,
                "url": "https://drive.google.com/file/d/11-yPUocu395lEG2su7yv1ivk82o90uRf/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "I was once a renowned warrior. I'm not averse to settling this with force, but just know I won't go easy on you!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1pK-s-sIklKow5f1E_vPoVlFiMKCT7Hhg/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh c'mon! We won! Why is this happening?!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1XTwgHML_9s0CYh1Fvo9PJWMTO9LDJKXk/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Eeek! Sooo scary! I'm too young to die!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1_rvB7vbb_JakJzMGvDtC3SoT0625RFcw/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Hey, why are you hiding?! Where's all your bravado from a moment ago?!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1gVp5u3AgvAtFowf3gBAhxAt6VRubp04C/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Waah...! I've never held anything heavier than a pen! ...So I'll leave the fighting to you!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1KxSXHDq4W3dXgpH6RnPgteHAXgnR-noe/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Jeez, back me up, at least!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1eqNmMJKozjhthX5oMQho5i1iG0UZtQJE/view?usp=drivesdk"
            }
        ],
        "e7": [
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "Ulp... Who would've thought she'd be physically formidable as well? A complete miscalculation...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1su7TK3EsFGB1eRXzyCscx7EZhhIvo7Gk/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "*pant, pant* Don't underestimate my strength.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1NDaTsI9ndq7M4KPpWz656U4pZLsDpb4x/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Eeep... Is it over? That was sooo scary.",
                "line": 3,
                "url": "https://drive.google.com/file/d/10WfIeouTszRqmraD4lbsRo_aDF4btu5m/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "...Drop the act already.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1SiNaoFllh6hEalS6o25dsGq-4gpPDkXN/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Whaaat? What on earth do you mean?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1Xl6sFxjQvGnrSetHljDf2d5iwgAEjAlF/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Jeez, you're one annoying woman...",
                "line": 6,
                "url": "https://drive.google.com/file/d/1kyHjwxcL2FY6PsO-r2-0huiEfqqPe7Nx/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "...As for the rest of you, don't get any ideas.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1AZvF4E20VLRqR1EWwGF8hKHcaV40EJCr/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "After such a spectacular rampage, I won't be surprised if the Knight Order of Midgar Kingdom arrives soon.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1nGHAz1yHdNQ6GbtdNs236Lb7J-_uGb-r/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "What?! This is between us! It's none of your business!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1bm87zpM5C4_MxtZglMCWqQrZoNHusAYv/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Of course it's my business. I am Alexia Midgar, Second Princess of the Midgar Kingdom.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1CI2--q65WCniIn5CdC7m7tfwwLCRtHVs/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "...Wh-Whaaat?!",
                "line": 11,
                "url": "https://drive.google.com/file/d/19OrCf5Thn70DK74p8mzzCUSU2jJytDW5/view?usp=drivesdk"
            },
            {
                "name": "King",
                "name_variant": "King",
                "subtitle": "...Wh-Whaaaaaat?!",
                "line": 12,
                "url": "https://drive.google.com/file/d/12EWcv5CCjQNYBfZj36Mda9eLm6WK2sbT/view?usp=drivesdk"
            },
            {
                "name": "Dealer",
                "name_variant": "Dealer",
                "subtitle": "...Wh-Whaaaaaat?!",
                "line": 13,
                "url": "https://drive.google.com/file/d/1JY_4dsR_TuEBihhnx4zepvfEzReGOksG/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Y-You sure you're okay giving away your identity?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1kv4FWgn7Idg1s0oE5ktEKoHXtGB8LFjP/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "How else are we going to resolve this situation? Anyway, I've enjoyed myself plenty already.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1ynJ2hFdR5ysLMhFQQ9d2X8E2Ugcww33h/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "I had no idea you were the princess. Please, forgive my disrespect...",
                "line": 16,
                "url": "https://drive.google.com/file/d/18n-0ftv_aCYxMDf-JEaU4ikK7qH111RK/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "And you? Are you an employee here?",
                "line": 17,
                "url": "https://drive.google.com/file/d/1eXqmqUYG6uIhBNAXKQTdmrmxKL3QJFQi/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh yes! All I know is there was a sudden commotion!",
                "line": 18,
                "url": "https://drive.google.com/file/d/1i11EsBBqq-GH3sz81eK8gqzWwg6F3dPT/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(I ultimately didn't get any sense that this casino was connected to the Cult.)",
                "line": 19,
                "url": "https://drive.google.com/file/d/1-ss5cEnTFWQ6vk6uwLuaZvSOgLQ1bzSB/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(On the contrary, it was a regular casino with excellent service. The only problem, if you could call it that, was the boss's final use of force.)",
                "line": 20,
                "url": "https://drive.google.com/file/d/1Nb0rrxoFjje6_YWoOXdft52rK93sZx6f/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(The bottom line is that I uncovered zero ties to the Cult or any illicit operations. It was a wasted trip, but every suspicion we quash is a good thing, right?)",
                "line": 21,
                "url": "https://drive.google.com/file/d/1VW5anjg7duyqlFmhzL1_rBu7RITvA9o5/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "It must've given you quite the fright to witness the sudden commotion.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1pesIAOhit-uExEpNTQIa1Jzccj2Z3eMk/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It was sooo frightening! But that lady right there was strong, and she saved me. I had no idea she was Princess Alexia.",
                "line": 23,
                "url": "https://drive.google.com/file/d/12ObUVDH15UlK1lB3P4cwtssWrjlMtm7D/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "What! Princess Alexia? What on earth are you doing dressed like that?!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1a8KbrofuJY2ppZvcJIcxmPLx3qiFp9sA/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "Y-You! Just because I said my name, it doesn't give you the right to... Fine, two can play this game...",
                "line": 25,
                "url": "https://drive.google.com/file/d/170CG_MpvsuUyodX-qAgJOtdazOK0opt-/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "I was here as a guest of honor but ran into various circumstances...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1q1Lko_CnosBtxDM_qb--dGY76wNCjDeX/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "More importantly...what's Natsume Kafka doing here?",
                "line": 27,
                "url": "https://drive.google.com/file/d/1dtsYSSolTv1C6FPJg66jqU0DBXan425C/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "N-Natsume Kafka?! Now that you mention it, there does seem to be a resemblance...!",
                "line": 28,
                "url": "https://drive.google.com/file/d/1nYx-vz9uSh9PbF2chNgyhjbHmgUCAl3A/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "What?! You must be confusing me with someone else!",
                "line": 29,
                "url": "https://drive.google.com/file/d/12bE_1K47YZXsR76NproyLYHqAGk_vyLg/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(This woman! The moment she no longer needs to hide her own identity...!)",
                "line": 30,
                "url": "https://drive.google.com/file/d/1GgXHfom0UA07p1TkMpDsIAbDjsVPuRFv/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "D-Did you say \"Natsume Kafka\"?!",
                "line": 31,
                "url": "https://drive.google.com/file/d/1xWO5koIhMMZ2UQWZqhjDcXdPeJ-Ia3sb/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "No doubt about it! A beautiful elf girl with silver hair, blue eyes, and a beauty mark beneath her eye! You really are Natsume Kafka!",
                "line": 32,
                "url": "https://drive.google.com/file/d/1SFJ0Fd1ISECqUKnZizyFbU0ylvo8vBrz/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "I'm a huge fan! There's no way I'd confuse you for anyone else! I carry your books with me everywhere, especially Cinderella!",
                "line": 33,
                "url": "https://drive.google.com/file/d/12avjk_HVu7XaSdXAwZyCGAkKdcZOiwt4/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "What a change in attitude...",
                "line": 34,
                "url": "https://drive.google.com/file/d/19XZg5cqMx1taKMXqmNXkPQ7kx4-ff-nR/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I-I see... Thank you...",
                "line": 35,
                "url": "https://drive.google.com/file/d/1J8kko2WZHMj1_noe2SvMR5PJjZWBQWXl/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "In fact, I'm thinking of setting my next novel in a casino, which is why I came here for research...",
                "line": 36,
                "url": "https://drive.google.com/file/d/1C0-od263Qa2usYzwSkLMhb71B6_0WPtd/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "I see! So that's why... If you had just said so, I'd have shown you every nook and cranny of this place! I apologize for my rudeness!",
                "line": 37,
                "url": "https://drive.google.com/file/d/11Lyyoq5LiaAm1ZSv5jjwmR3d0nhIMbmE/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "U-Um... If you don't mind, can I have your signature?! Please! I beg you!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1rwuJe1KJFd1x0x8tUVoE4mxF9OKU5Zou/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Hey, how about you back off? Excuse me, Lady Natsume. While you're at it, could I also get your signature? I'm actually a fan as well...",
                "line": 39,
                "url": "https://drive.google.com/file/d/1c52vFQckIO-wGO3Ki7aWrBuzmvU38RE8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "U-Um... I'm so glad to hear you say that...!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1wMfVI-w4l6-tiA2UyVfNg-tpvJcqCSVT/view?usp=drivesdk"
            },
            {
                "name": "Joker",
                "name_variant": "Joker",
                "subtitle": "Ya-hoo!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1ozEGtdM-OEnBWwQATc-EIXgruG5p5M9x/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Yippee!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1PDQmf5n7Z1cPvhnbMuBSklqb65kQnFPB/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia",
                "subtitle": "What the hell is this charade...?",
                "line": 43,
                "url": "https://drive.google.com/file/d/14OKkSsqb4ec6dsNqf0JKwtIuKRDDZzfu/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Please, everyone, calm down. I'm not going anywhere. One at a time, please!",
                "line": 44,
                "url": "https://drive.google.com/file/d/1ve5n-1Kqnd5jJfx9anQ6r-40mpwqxRhy/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Following this, the incident was settled mutually and the casino boss was released without incident, thanks to Natsume's help.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1FHDHv0dt5zwlpz2l5MH38RQkqNXIJn6p/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Later that day, Natsume was welcomed into the casino as an official guest and investigated every nook and cranny under the guise of an interview.",
                "line": 46,
                "url": "https://drive.google.com/file/d/17ltsSzyIQ0tcdm_EjULwG-bqasaMVtC1/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Having found no particular connection to the Cult, Natsume concluded this series of investigations.",
                "line": 47,
                "url": "https://drive.google.com/file/d/10ZJ4Se8sSteJXm-IflDFFGOS2SIAaQns/view?usp=drivesdk"
            }
        ]
    }
}

let setDoc = db.collection('data').doc('es_clbg').set(data['clbg']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
