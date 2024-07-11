const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "ssitw": {
        "e1": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Blue sea, white beach, and a posh resort hotel that seems almost out of place...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1uHRUH006lK82YL4-4cA-HRMyqrYa-9Ce/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Never thought I'd get another invitation, honestly. The girls usually leave me out in the cold, but every so often they see fit to throw me a bone.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1PvVPiVV-NRGdjtlzA8txB5ODMdiHDhhN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Okay, if I wait here some sort of guide should arrive to show me the way\u2014",
                "line": 3,
                "url": "https://drive.google.com/file/d/1QgA9W9g4uG1WDUIKpbkBVL36nbNTGhKp/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Welcome, Cid. Thank you for coming all this way.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1uL9g1-SFU3FgOCAd6_pO99Fs2jmgM0Lc/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Did we keep you waiting long?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1VHoGEh7rHuyXOLa_lejkIn2nFLkzQdUf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Nope, not at all. Are you two in charge this time?",
                "line": 6,
                "url": "https://drive.google.com/file/d/1YrZektC_Ez5ELo4NXSQlJQflcp2wuyqS/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, we are. And with me here, I can guarantee your vacation will be one of absolute comfort.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1uyIyObFZWmHaJkHQtCz5yGGV7hc5xgpU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "W-Wow... You really seem confident.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1XZCaYOnpzOpCA0M-4CaWJJHqpheSTqxq/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "How about we pause the chit-chat and get you inside to cool off? We have some cold drinks ready as well.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1aEfIsk_BaY29xnxki_2kqEqk15hBUPcC/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Oh, I'll carry your bags. Is this everything?",
                "line": 10,
                "url": "https://drive.google.com/file/d/1Zt-bHcIubmR8sKVaGVE4EC1-llj2J2Md/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Y-Yeah, thanks...",
                "line": 11,
                "url": "https://drive.google.com/file/d/1T-ApmBFGfQqfQ4GryQyHVKPbl3vzQQfB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Man, count on Zeta to always have things taken care of in advance. She's really got this routine nailed down.)",
                "line": 12,
                "url": "https://drive.google.com/file/d/19I_UYo8Tg7Lw6sI9NewKTRvcjKAOiXIz/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "My mission this time is to ensure my lord has a delightful experience. Simply say the word, and I'll do whatever you want, whenever you want, wherever you want.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1NhJFFiTRDylHaFNSAjbvw4kFUIkrrl0j/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "And I hardly need say that I'm at your service, too. This would surely be an awful lot for Zeta to handle on her own.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1A9Qjelr8-qfhrOhKYl--bOarA0Wxjg8C/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "No need to worry about me. Missions must be completed to the letter.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1RdaQ_vVuM770kW2rIo8Af7nBRa8GLWhg/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "And your relaxation is part of the mission. Thus, I want you to rest up as much as possible, too.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1hpjkFwnXemBTK8Pw9InMfKktbdq9Ab1G/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Wow, they're both ready and raring to go! Is this what you'd call being a workaholic?)",
                "line": 17,
                "url": "https://drive.google.com/file/d/1Sh_9b9aY3lT9CSCRHJ4rg9yri07DB-vh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Feels like I've seen this somewhere before...but, eh, whatever.)",
                "line": 18,
                "url": "https://drive.google.com/file/d/1gIxpvb0oOX2Fsp3jZZKirVRrNKcQC7M5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "*yawn*... That was some good sleep...",
                "line": 19,
                "url": "https://drive.google.com/file/d/1FGmukxDf3-DIP3LP6iK_3F-OwY2526Wf/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Good morning, Cid.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1mxha6bXKnKUhhopiqJ1ELe-Bq7yVHADB/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Looks like you had a nice rest. Good. You must've been very tired.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1Lo7KDW_yig9geli6hnA-K2BM4pcypBo5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Uh, why are they both outside my room?)",
                "line": 22,
                "url": "https://drive.google.com/file/d/1iW-6zGKkHr7jIyKQBR1rCrJh2vj8M7XH/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'll get your breakfast ready at once. I've been waiting so you could enjoy it hot off the plate.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1sqLABhFD5Mq-YJuYizQYL6S7W1I5XBMx/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Today's menu will be bread and an omelet, along with sausage and\u2014",
                "line": 24,
                "url": "https://drive.google.com/file/d/1z5gEMq37_9fUcy0BkFlFDDz3y8ZWFuc9/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hold on. Since we're here on this island why not let him savor the bounty of the sea? Some grilled fish or the like.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1TUnLj00FTqQEfs6gIUBAnZyMEcRwB2VE/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Oh, but I thought we'd save the seafood for dinner. Besides, meat and eggs for breakfast will give him energy for the day, no?",
                "line": 26,
                "url": "https://drive.google.com/file/d/1V2wtlcy8VALO6vYBwqi5i5_JVYg0hyZp/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "No, no, that'd be too heavy. Fish would be better in the morning. Don't you agree, my lord?",
                "line": 27,
                "url": "https://drive.google.com/file/d/1kOVMcjNnjCo4pxsN6RieYCc_dxa4g318/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "You may be right.",
                "line": 28,
                "url": "https://drive.google.com/file/d/15EJLRJNAOwgl2wCotz2BWBq33edXLjZi/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But you like meat, too, yes?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1G8yu7Gc16bjk9jhnvIM2aElaqL37y7Gc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "You bet I do.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1KsYfN6a8qTlniDwAfmCJKIpWrzIMs_UH/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "So fish or meat\u2014",
                "line": 31,
                "url": "https://drive.google.com/file/d/1GWh0wuihMNYUQoXwuR5Khtylz0G-ugUh/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Which are you in the mood for?",
                "line": 32,
                "url": "https://drive.google.com/file/d/1Ye0IqsKiCwknZ58KEywDtmfF9xdrdcfX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Maybe I'll have both.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1px3wDK3k1tD8Gc6FDIn91dRrOZ6fKhcn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Oof, that was a lot... Can't remember the last time I had a heavy breakfast like that. Uh-oh, what now\u2014)",
                "line": 34,
                "url": "https://drive.google.com/file/d/1Hh04hZWcYy7i0r6S2KIg3D18v2THQBOJ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You forgot to put on sunscreen, Cid. Here, lay down.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1Ul6cHMdhSpQQeuRuaUTMgxTmQWK-lNNb/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "You need to stay hydrated, too. I got some juice for you, so make sure to drink it.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1UWbl66c-9HqQtEM7OAnlNnBMo8jXNpT0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(These two are glued to me like flies on you-know-what...)",
                "line": 37,
                "url": "https://drive.google.com/file/d/1l7VrbHzCebH3LctEGii4e0KGQBJPk77A/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Hmm, I dunno... It's nice that they're passionate about their work and all, but this is borderline suffocating...)",
                "line": 38,
                "url": "https://drive.google.com/file/d/1_CVku1OtXqadSuJBnJBSeg356FAE8pJI/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Think you're up for a run, my lord? I was thinking we could play a game of beach flags next.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1YlOingCaUVetEUcIp9vXkwzWKR2MDsL4/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I'd like to think I'm pretty good at it. So, I can safely say you won't be bored.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1TpFpE8ryPUPJdsnM7t5CoI3zc4f8zQni/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Or how about some beach volleyball? As it happens, I have a special court at the ready.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1SPAN_H1Lc440PfAdZ32Dt38x0OPsQmPN/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Hitting the ball with everything you have is bound to burn off quite a bit of stress. Doesn't that sound like the perfect after-meal activity?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1mfcI-uEIdqrP40s4zUMMXrArvcRnIUlX/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "How is that any different from beach flags? Sprinting is fun, too, you know.",
                "line": 43,
                "url": "https://drive.google.com/file/d/13zQbVTBeigO7WWZYR_UUmA5D_zTEiiCK/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, I'm sure it probably is. But after such a heavy breakfast, I believe he should start with some lighter exercise.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1SXA1TsPfamVK2Vp4T7s_lplz8e2ihCN7/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I wasn't saying he should just go all out right away. We have to start with a warm-up, right?",
                "line": 45,
                "url": "https://drive.google.com/file/d/1JyLaPuwEM_twhz6kAspyZ42XNgZ6mT0M/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Okay, I'll do one and then the other.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1P356D0LVlq65R-gzSo6G_TVE1-swsuar/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Guess they each have their own ideas of how to have fun at the beach. And it feels like there's something at play here where compromise is off the table.)",
                "line": 47,
                "url": "https://drive.google.com/file/d/1k9PrsJeycoUV0qSp1Mwrn_KvjM58rdAI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(What's really scary about those two is how despite this clash, you don't see them butting heads openly...)",
                "line": 48,
                "url": "https://drive.google.com/file/d/1U5SeDWDauJrKi7XNs52IFnv6ynTyCttn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Still, I'm not really down with just leaving everything up to them. A life without any sort of adversity will get old fast.)",
                "line": 49,
                "url": "https://drive.google.com/file/d/1TmfjQuBiCr1D2bRBfEM-ipdX5DoyqKNd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Hmm... Yeah, okay! I definitely want something more thrilling!)",
                "line": 50,
                "url": "https://drive.google.com/file/d/1cq9NTK4TL9U9tSV1tUAzM-gRI2l9XoHL/view?usp=drivesdk"
            }
        ],
        "e2": [
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I tried making iced tea for you today, Cid. Nothing but juice all day isn't healthy, after all.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1U0O06i0j20c3bEHgNIJD6-l15S_4RMNA/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I'll put on your sunscreen today. I couldn't stand to see your lordly skin get burned, so I'll make sure every last bit of you is slathered down.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1QZcod3EiY2Gk5vovycaIifp8EoviT5A4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Y-Yay...",
                "line": 3,
                "url": "https://drive.google.com/file/d/1j3AWZ2kU9m42Db0-KkwDwSCXpeTAcJ95/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(The two of them are back at it again today... All this seeing to my every need is starting to get stifling.)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1CZ4vyoYE4M0Bl9HeGbqGof59jLdDffZ0/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "So, what fun shall we get up to today? Another round of beach flags?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1bghQo9tfFAK23OuC7Iijer6gh5hCsEOZ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Relaxing and doing nothing at all also makes for a fine vacation, you know. Too much activity can wear a person out.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1csUWIdGH-uGQ9Zj7xL3IKUbOfrjyqYIc/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Doing nothing sounds kinda boring to me.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1_-dmx79AofGlzUXCNehqrRuNdVNPs8pQ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But it's an opulent manner of whiling away the time. The decision is entirely up to Cid, of course.",
                "line": 8,
                "url": "https://drive.google.com/file/d/11_Gxc7cCvGFUT9f_AtT7p6ndFSRmlUcF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Man, tough choice...",
                "line": 9,
                "url": "https://drive.google.com/file/d/1KtD-jbr-lC-pcTlfDI_1N6BZVN0P5W3p/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Hmm... At this rate, I'm going to spend my entire vacation being led around by the nose... Can't have that!)",
                "line": 10,
                "url": "https://drive.google.com/file/d/1NUeRyUMaQ2lGh1SzDnTasGOwFoDmlnFj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(But what DO I wanna do... There's gotta be something fun\u2014)",
                "line": 11,
                "url": "https://drive.google.com/file/d/123E2lCOuUPOE9uVBFHxyH-KegjMPsEF4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...That's it! Hey, Alpha, is it alright if I have fun with some of the stuff around here...like, say, those palm trees over there?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1rTuKV9KC-qw8mrc77qSLhfUqh6BLUwQo/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Wh-Why, yes, of course... You're free to use whatever you like.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1aEHlaWjOC4IEOy3NvjB84YQAjIKfz4KI/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "But what're you going to do with palm trees?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1A8tCT0NXZnJoTYcEiOaJ9m7EjEnnu3oQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Well, you'll see once we get started. Since you're here maybe you two can lend me a hand.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1IL2A1pw0vi9AvhtreGV5otwJt8PmQhW7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "You got any saws laying around here, Alpha? Can you go look?",
                "line": 16,
                "url": "https://drive.google.com/file/d/1IBC0u0ZoXryMYg5eHk6SwrK4oB0ezBNH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "And Zeta, I need some sheets and rope. The toughest ones you can find.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1WJL7bk6V0MxW6R43s6be8yjOwqfGVu4E/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Understood. I'll be back shortly.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1NiSve4GnBjuOCX4LMA4u80NjsDcVmf4e/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "My lord is fired up... Heehee, this should be interesting.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1v2T1DZuEKatJrb1JdA6ebCgno_mfIz-B/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Here you go. Please take care not to cut yourself.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1VoYSvGv-LRwtKuaZ8G3ZdGGxpgSCdBp2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hey, thanks. Okay, now I'm going to cut down a few of those trees.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1mylEIiNRRAIYNDtfpSctQ8nroLrZ34rk/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Sorry to keep you waiting, my lord! Sheets and rope, as requested.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1tPbDOBsK9i3vpNBnEMoCrNbWEMKgoMS8/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Whoa, you sure didn't waste any time. Need me to help with anything?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1nhh8PT400PnYdggUbjgFJsUbmxRnPFo1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Nope, I'm good. Building it is part of the fun with this kind of thing.",
                "line": 24,
                "url": "https://drive.google.com/file/d/13anXpGchA6nR8sHUXM9hirv02Eo2rou_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Whew... Okay, all done!",
                "line": 25,
                "url": "https://drive.google.com/file/d/1cAbgrQAzQsW0kTlvFrXfatspnOpABsui/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Is this...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1yJ5xBwRw6nf_GOremGjfxjU4zvAMW5Ga/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...A raft?",
                "line": 27,
                "url": "https://drive.google.com/file/d/1tOY3-FAZRQ5rJ7uW4LqCE5s56JB9J_D5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yep. Just like every young man dreams of! I dub it... \"Angry Poseidon\"!",
                "line": 28,
                "url": "https://drive.google.com/file/d/14rh49br13h0ZyDsQmlfO2ulPgh4PDyk9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "There isn't a kid alive who doesn't dream of a voyage on the high seas!",
                "line": 29,
                "url": "https://drive.google.com/file/d/1tLVeaQXbBh9TSnh78PY1zW4coaUPNjfP/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well, I supposed I'd be lying if I said I've never thought of it.",
                "line": 30,
                "url": "https://drive.google.com/file/d/19JpyzN5sSAJUb4BCtiaBnE7scvBzx14B/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "But a kid can't afford a ship. So instead everyone tries to build rafts like I have here. And the key is doing it using materials you gathered yourself.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1RrG0I8gA094Yc7uGey3KTqR_B-Nbnae9/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Wait. Do you seriously intend to take that out to sea?",
                "line": 32,
                "url": "https://drive.google.com/file/d/1Kv2kWElRBprv4bT8MeOFe_jPemWVoU1V/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Uh, yeah. And?",
                "line": 33,
                "url": "https://drive.google.com/file/d/19Ev285xtcFEnmrtB94uCj0O7fs88cxKy/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I hate to see all your effort go to waste, but if you're going out to sea, shouldn't it be on more of a proper boat? This little dinghy is much too dangerous.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1x49SpVlB1KoVVkPEqpiF1MmFN_3mpEPk/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "If you insist, then I'll come along. It does seem like it'd be fun. You don't mind, right, my lord?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1qyHi648J2PVMg1wk1DoJGAQ7-80XzdHN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Mm... I'd planned on going alone, but okay.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1HfCylC3Akzsi1FeuLqOgHOPMPgXwAGmG/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...In that case, I'll come, too.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1VQJLGCwOpDMSMsTf48Ikwzdom8tWIm6f/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Oh, no need to trouble yourself. I've got this covered.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1ABYCUUv6sGrzrX9_4MrWnTz-ePR3dVmX/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No, it's my responsibility as the person in charge. It wouldn't do to leave the two of you on your own.",
                "line": 39,
                "url": "https://drive.google.com/file/d/14ERa748aHB4vuXOInKBOyELWXzHFXW_j/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Fine.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1r6TiIcoPFs28NWr5V00mNkHj95Q_8n7l/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "You guys worry too much. It's not like I was planning to go far.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1_mEucV16adaxdduC3TZKkg7tQq63fmgc/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I'm not worried so much as... You know, never mind.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1NgqwRTPB2jhTH_kns5RrBFqYdrmGi2rp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Okay. Now that that's settled...time to set sail!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1s9YZh171Ar-MZYsdjLXadnrwWZzfS2Zc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wow, the hotel looks so small now... We must be quite a ways out.",
                "line": 44,
                "url": "https://drive.google.com/file/d/19Z_3yEIXlA_lC77LF-KX5AFlLTfPCkz9/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Are you sure this is okay? The wind feels a little strong to me... And the sea is starting to get choppy\u2014",
                "line": 45,
                "url": "https://drive.google.com/file/d/1Q_2RDKYql6IrYB7jFPrmr2XETwifdm_E/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Um, my lord?! A wave!",
                "line": 46,
                "url": "https://drive.google.com/file/d/1qpFdRk322gqq6N4dZKGKEowRl7LIu4ky/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Uh-oh\u2014",
                "line": 47,
                "url": "https://drive.google.com/file/d/1z28oqVsd2M2VcT_W8eYyiO_NmslTacz9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Angry Poseidon is all busted up... Guess this is what they call getting capsized, huh.)",
                "line": 48,
                "url": "https://drive.google.com/file/d/1ZDuCKZ7iwaOfwNCTSBKrPC7Oct80hSmg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...Huh? Wait, this plot twist could only mean...)",
                "line": 49,
                "url": "https://drive.google.com/file/d/1MW1xQ-ZgTy3RGackt5Ik47xbiCXwSijk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(It's decided! Those two will be fine, so it's time to let myself get swept overboard!)",
                "line": 50,
                "url": "https://drive.google.com/file/d/1vKOebLtto2dYk83sIdDrzoH_cgqrCMQH/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Zeta, Cid has been swept away by a wave!",
                "line": 51,
                "url": "https://drive.google.com/file/d/1-BwFEayCqkFF1oIR8pSzE2zzckxhL4MS/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I know that! We've got to go after him!",
                "line": 52,
                "url": "https://drive.google.com/file/d/1HieFjb90cWMUTCNLqOtm4vEixFjKVm7n/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Unh...",
                "line": 53,
                "url": "https://drive.google.com/file/d/1JrVHVa4e3Lcg-5j7C54C3SWaIWTT4fko/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Cid! Thank heavens you're all right!",
                "line": 54,
                "url": "https://drive.google.com/file/d/1VSYIRN-JKamA9MjR59PMaWNkfzmHRYzN/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Are you okay? Any injuries anywhere?",
                "line": 55,
                "url": "https://drive.google.com/file/d/1bOB7u4hVZywhHK6Vy5H2kV2ZEQgwxNCE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "No, nothing in particular, but...where are we?",
                "line": 56,
                "url": "https://drive.google.com/file/d/1ha1ywYUS_KuFc3g_qEjvIkCzzhjYY-B7/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...My lord, I'm going to need you to stay calm and listen.",
                "line": 57,
                "url": "https://drive.google.com/file/d/1DwWjl0sRJfz8H_jqBKB1IsVr_AYQZ9gZ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It would appear that we've washed up on an uncharted island...",
                "line": 58,
                "url": "https://drive.google.com/file/d/18XRMDWb0-lvt89jWwWH4yx6W9Ms395Wo/view?usp=drivesdk"
            }
        ],
        "e3": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "An uncharted island...?",
                "line": 1,
                "url": "https://drive.google.com/file/d/1_flTa7Wj_Mg405M0yszDUolgS_Isq14X/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes. We have no idea of its distance or relative position from the resort.",
                "line": 2,
                "url": "https://drive.google.com/file/d/15GJY5x9nze8UU13JyFVrPDVO4MsVagU4/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "We were tossed into the ocean, and then you got swept away, so there wasn't any time to think of that.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1uE0dIgKgigFzvp6n3l_Zf1ANDVcyxZ8J/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Oh, so that's how it went down.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1KmB-rkkKUQIsIPwoLtXTcB_Zv4NzApcE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Anyway, for now let's have a look around the island. We just might learn a few things.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1JCQOn1hcx4ilJt0IZf1NW_YaLrnPPjnO/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Good idea. How about we split up and do a preliminary check of the island?",
                "line": 6,
                "url": "https://drive.google.com/file/d/1A0YffMR63THIbueL5lMESXwx6O973soZ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "In that case, I'll set off in the opposite direction of Zeta. Then once she and I meet, we'll return here.",
                "line": 7,
                "url": "https://drive.google.com/file/d/16pl7Hig2KyLlYuVlm47aSiWuvaB0jgio/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Gotcha. Be careful, you two.",
                "line": 8,
                "url": "https://drive.google.com/file/d/16mvDqYaUcIoiSHH4kt3I8dAda7lQ3naB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 9,
                "url": "https://drive.google.com/file/d/1yC6l2xSiE5-KNz1wXZ_U8226p-UB9ZA5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Heheheh! The raft capsized! And then I was thrown into the ocean, shipwrecked! And now I've washed ashore on a strange island! It's perfect!",
                "line": 10,
                "url": "https://drive.google.com/file/d/1YXEIQY0sC-u9bnEHxJ3iiBbPTZsKQsG7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "This plot turn, this location, can only mean one thing! Fun is coming my way!",
                "line": 11,
                "url": "https://drive.google.com/file/d/1ONqxT2tJAZEz9f0nh5bx5TNfqZx2hDzP/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Nothing. No traces of inhabitants, much less settlements.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1R9n0s-hn3LwwIk77YW0KiT8at8I7lets/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Same. I didn't find anywhere that looked like it'd seen the touch of human hands.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1QnjVPW_bf2APp3hH_Gj2jKfK2bM3H3eU/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "As much I'd been avoiding the thought...it looks like this island is uninhabited.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1h-yFl6IyUv3PBQbo1eTIB_89DltXz44o/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, I do believe that's the only conclusion.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1anUgK1lUquPFCCKAQrVJsTwBvTRJZab0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I see...",
                "line": 16,
                "url": "https://drive.google.com/file/d/1Mpbknfgs9b67MAFc8HjYJaiiwCxaxviX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Oh hell yeah! Just as I predicted! A deserted island!)",
                "line": 17,
                "url": "https://drive.google.com/file/d/1AfkdJNTxTP_u0sGaSPgDENdJKpJrJBKs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Just as I was getting sick of my oh-so-perfect vacation, I'm thrust into desert island survival mode!)",
                "line": 18,
                "url": "https://drive.google.com/file/d/11P3dQPEQdj7bAtJRXmSLDsreClDrTuor/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Survival... Ahh, just the sound of the word is music to my ears! That jaunt on the raft was definitely worth it!)",
                "line": 19,
                "url": "https://drive.google.com/file/d/1VWKCV0ZEmB4fvxOPCc5Kyl4rBfHiw8jB/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "This is quite the fix we're in here, especially when you consider we lack almost any sort of information needed to return to the resort...",
                "line": 20,
                "url": "https://drive.google.com/file/d/1SjqhEEC9Vr8IjoL34eAED6r8oLlNVNvl/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "And it's plain to see that going back out on the water heedlessly would only make the situation worse.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1QAj-BM_hmGsBaxjPbZJflW8WMF0SdihV/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Which means...the wise course of action would probably be to sit tight here for the time being until help arrives.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1PAOFbgqgci4SrFrKTcFzTqqBGzi32snh/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "The staff at the resort will most likely have noticed we're missing by now.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1Og992ul2PAOXIlnowm4wilBGuiOtf_1V/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But in the meantime we'll have to fend for ourselves. Think you can manage that, Cid?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1IUMVeTpyGzdYgohIZDC1_LirXHnUj0HL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Sure, no problems here.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1UmlQhVmfrLs8dbxRW3vERTXbMlLSj34L/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Yes, here it is! Exactly what I'd been hoping for! There are be no amenities to be found here!)",
                "line": 26,
                "url": "https://drive.google.com/file/d/1Gbm7IZh0j37vwPgDObgAZUgy38dgvBRZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Just self-sufficiency, each of day of life a hard-fought victory! Kiss that cushy vacation goodbye!)",
                "line": 27,
                "url": "https://drive.google.com/file/d/1CJp1wltlsYab4Sas-pbUN30JtKybBtVt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(And if this starts to get boring... Well, I'm sure we'll reach land at some point if we start swimming.)",
                "line": 28,
                "url": "https://drive.google.com/file/d/1569FV5BI6p49BKhjKKPIp_ahMOmxO7-h/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(But the main point is, living off the land is part of every boy's dream! And I'm gonna make the most of it!)",
                "line": 29,
                "url": "https://drive.google.com/file/d/1-AOwCH372NyjPd9Y-19Q4a01D2DFC_iY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I feel kinda bad for Alpha and Zeta...but I'll bring them along for the ride. Think of it as training.)",
                "line": 30,
                "url": "https://drive.google.com/file/d/1mrbIUBm9zgZUAWXjGCYl1KSS8fiSfGK_/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "To think this is what our vacation has turned into...",
                "line": 31,
                "url": "https://drive.google.com/file/d/1rbR9JqFC7PJ8RLjNFBtaZPQL0DEg47KH/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Seriously. An absolute disaster.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1gT5KvhT4l0_kQnzvLRRybP9emTyXmHBX/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(It's just the three of us here on this island. So living here by our own means...)",
                "line": 33,
                "url": "https://drive.google.com/file/d/12Da-xQW1vPRe0UBD1xGTlWrzeKruzUPY/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "(...is pretty much the same thing as living with Master Shadow...!)",
                "line": 34,
                "url": "https://drive.google.com/file/d/1helSrrVTUaG78cZR0LdrHSEQ4C586F1J/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Since we're going to be here for a while, our first move should be getting the essentials covered.",
                "line": 35,
                "url": "https://drive.google.com/file/d/11LAUwtbD464zkUCFlGl2_yyBmoKevCmG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Each and every day must be lived with care. And then, eventually, the three of us will escape this rock!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1jnjx4L_0JLPsucNNhlu7a6c5PS3p8FbV/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Of course. Still\u2014",
                "line": 37,
                "url": "https://drive.google.com/file/d/1qI-10j0yjcxaOIHqoWY7JmtJ8wPuPP9T/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "It wouldn't hurt to take it easy for bit, would it?",
                "line": 38,
                "url": "https://drive.google.com/file/d/14G-Ml-LT0Q0rzoJiGB7gvJ_5ZwCtv7_d/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Huh?",
                "line": 39,
                "url": "https://drive.google.com/file/d/1yskoCXuhe8eztS3IyRjcHQ0eFT29YnHq/view?usp=drivesdk"
            }
        ],
        "e4": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Okay, before we do anything, we need to make sure we have what we need to survive.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1BBpiV9-nvJyACvYncfQnYsVfwJr3ROGY/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Which would mean...securing food and a place to sleep, yes?",
                "line": 2,
                "url": "https://drive.google.com/file/d/1iosAdKWfy1uyMyrriQPPRTz684S2OKSc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yeah. We'll split up the workload and get what we need by sunset.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1Ei0EVaPVAHy9HxiSTzz3NqviQBpOu4oh/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Very well. Then you and I will see to making the shelter and fire, my lord. In the meantime, Zeta can procure drinking water and provisions\u2014",
                "line": 4,
                "url": "https://drive.google.com/file/d/121mHiA5UdmkUn7uGhYq_mKFSUNRKWq2F/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Not so fast.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1OWuQ6T9MqsGnJQGJRsFGlrKyDdaeCrwh/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Oh, is something wrong?",
                "line": 6,
                "url": "https://drive.google.com/file/d/1eqeTUy3LS6D9TK5DE_l3E9nzBJIuXHER/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "That amount of might be a bit much, even for me. Especially under a time limit.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1ao5GyhC0o-nPSHPmb-kQz-JEWlVbcFEF/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "You should be able to handle the shelter and fire just fine on your own.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1xf-msCq-wG7lanef6oC5VCPu1D039etP/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "That's why I was thinking Master Shadow should be out there working with me. Doesn't that seem more efficient?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1YsavpW723LOlV1HRUaYlWj4zYP4S-_E1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yeah, guess I can see the logic in that. Okay, I'll go with Zeta\u2014",
                "line": 10,
                "url": "https://drive.google.com/file/d/1gLlDgxymHH4j6b37Fht0yQmtYws1D2fF/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm not so sure of that.",
                "line": 11,
                "url": "https://drive.google.com/file/d/13ZpI1wx1xitnkus6-icPytoHHfeVJ9Kw/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm grateful you have such faith in my abilities. But I have just as much faith in yours, Zeta.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1ahQj5XKlYUq_Ng8Mh72pH-HlBWCDGmjy/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I have no doubt that securing food and water will be a simple task for someone of your skill.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1HDDraAuOP97C7RqGqBYbC4wI4EMOr3Jm/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Ahaha, you think too highly of me.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1buo3chm-jKkww_fSGuANWs4yY8dS5BrS/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Not at all. I know you can do it.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1-E4coGM4NxavGEHF-RfZ2yNUvQLJaSyS/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Besides, building shelter will also require more than one pair of hands. If we're speaking of efficiency, shouldn't this be where we assign two people?",
                "line": 16,
                "url": "https://drive.google.com/file/d/17Ed-yznIyr6LcO_HEihKTbOtnS766qlc/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Nah, you got this, Lady Alpha.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1eRafaRZoj31lsiGnFYeCV5RmnXFMJ6z-/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Now who's thinking too highly of someone?",
                "line": 18,
                "url": "https://drive.google.com/file/d/1xf6yPDdwQuTYSLjv4YeCzppeBG22ozCq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Welp, here we go again...)",
                "line": 19,
                "url": "https://drive.google.com/file/d/1_S9hblviipK2dYUhNxuFUL0viCeZ8zPj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Uh, hey... How about this?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1Nq8n3mcUxKw9Ap1FfFBn9vHB0ZiABO79/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'll find the food and water, and you guys handle shelter and fire. How does that sound?",
                "line": 21,
                "url": "https://drive.google.com/file/d/1Bb5Qgbkei0qWcf8oLSlNCaIFKPBhjoTI/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Well, okay. If you say so, my lord.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1oaM5IBX_e5pAD2Bt4e52nsLbbvMaxIZI/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "*sigh*... Very well. I'll abide by your decision.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1_lvPvnZUA3xG6UeX0obBQKVO65UoPZMH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "O-Okay, then... Thanks.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1T3TaFdI2X4cYHgbncoJ92aw4kTgXCeGB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'm baaack! And I've got plenty of food and water\u2014",
                "line": 25,
                "url": "https://drive.google.com/file/d/1DgoeZkMd-vZ2SVuBYAgqcrGP9e8tRdMQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Huh?",
                "line": 26,
                "url": "https://drive.google.com/file/d/1iG-6iB-XtiIOKwqNIlx4wcVI1ydmEK-3/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Welcome home, Cid. I should have known that wouldn't take long for you.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1trahx27gim_JOkza359tO1-q3EH3Kw0L/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Wow, you have meat and even fish. Today's dinner is going to be a real feast.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1Z1d7s3ZsZkEa4QdYdFHsV4t2_4hIZS4i/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "D-Did you build this yourselves...?",
                "line": 29,
                "url": "https://drive.google.com/file/d/15lbXq3YakHiEZGtEEiMXhq6RMQYVDGHu/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, though it isn't quite finished yet... Unfortunately neither of us are Eta.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1Gutz2M3IyXEA51P4wsS9pxF10C5vwgfX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(No, this is already way too much! I was expecting just some leaves laid out and that's it...)",
                "line": 31,
                "url": "https://drive.google.com/file/d/1OCol9Am-3U2q-TP8bMHmTsT5VTaFCgPb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "And this glorious bonfire...?",
                "line": 32,
                "url": "https://drive.google.com/file/d/1ENxIDk1up3waTXmZiP02-wKH8cTdMgcO/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yep, that's our work, too. Were you hoping for something bigger?",
                "line": 33,
                "url": "https://drive.google.com/file/d/1V1v6oTQTrnyh0U4EPDFVsUTcwTBqrxd6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Never imagined this either... Even just a tiny campfire would've been more than enough.)",
                "line": 34,
                "url": "https://drive.google.com/file/d/1EN9UFpwAlGn5m5-joiovav_MLa24ROev/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Oh right, I forgot... I'm dealing with a perfect super being and a genius here...)",
                "line": 35,
                "url": "https://drive.google.com/file/d/1ESlDHr-QBmJzDisl1hIz_GVu_QIEtZHE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Um...thanks, both of you. But I would've been fine with something a little more simple...",
                "line": 36,
                "url": "https://drive.google.com/file/d/1CkuvHAfHuJaUsL122143s65DaOUQunhX/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No. Even on a desert island, any inconvenience to your person is unacceptable.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1nvDYV7xsvxC7GuXhAMWeUn7-WYGgS6qV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh, uh, okay. Thanks...",
                "line": 38,
                "url": "https://drive.google.com/file/d/1gOGtZ3DXke9-zTP953XFa7gJOL4pxQGj/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Speaking of, I had a little time left over, so I whipped you up a hammock. It's there for you if you start to get sleepy.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1-bsmiz3DH9g7kZnQ-IPgmI7_gnYXrv5y/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Won't he feel more at ease sleeping in a bed like normal?",
                "line": 40,
                "url": "https://drive.google.com/file/d/10vtub0VJfmftSVwIGG-zU19UxkIzVS97/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Uh, this is a desert island, so \"being at ease\" is\u2014",
                "line": 41,
                "url": "https://drive.google.com/file/d/14aP4mLsEB5j-OXnePMR5QlB1SO6aDYfM/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well, if that's your concern, I think a hammock would make for a comfy place to sleep, too.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1kruLGTXqBMx3j5j_bUB7eZ7HO7oTph5T/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It's much too exposed for a setting where we have no idea what to expect. He should be sleeping indoors, in a bed.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1cR2dDaEXPJQ7P_elON0nmqSNogT50WZP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Okay, then I'll nap in the hammock during the day and sleep in the bed at night.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1kqoDdYAKIGa3-ngoCwWhjswA5AfqFFcS/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Good. You can make use of both.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1d7jbWRAgWf8zyezNr1kluaYg--eg74E8/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yeah, that's probably the best option. What you say does make sense, Lady Alpha.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1CLFE4zKqLVdCLOAHHs7yT7Cj449_Ydvb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Glad that's settled. Now it's time for me to whip up some simple campfire cuisine and\u2014",
                "line": 47,
                "url": "https://drive.google.com/file/d/1e2ms-NH1HOt8XeRX3uRcy8UAbcRVv6hN/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "No, you wait right here, my lord. I'll make a fine meal with those fish you caught.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1iwSyzqOwseASxZLeLzHNbKBWwDxvUk94/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, after all it was you who put in the most work today, Cid. As thanks, I'll use every skill at my disposal to prepare your dinner.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1Bxcj9Q0YpVKNMVf52UGYIRoAvXTFrJ4L/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "This meat should become nice and tender with a good stewing. I can add some herbs to mask the odor, and\u2014",
                "line": 50,
                "url": "https://drive.google.com/file/d/18nrGb-chleGqEacotvn8H6g3v1gS2S2z/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Let's save that for tomorrow. Today we're doing fish.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1LZ62UtkQnY4vE1GAVTv20KYkj9eVSxxE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...And they're gone. Guess I can expect a full-course dinner of fish and meat tonight.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1dioSQq7L2l4OrPd74zXWjr2trpgK3-Mn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "But is roughing it on a desert island really supposed to be this easy...?",
                "line": 53,
                "url": "https://drive.google.com/file/d/14rwDjsiJWn7TGzkRcaFImPj3zIRP9_iy/view?usp=drivesdk"
            }
        ],
        "e5": [
            {
                "name": "Cid Kagenou",
                "name_variant": "None (Cid Kagenou)",
                "subtitle": "Mom, dad, Claire. How are you? Anything new going on?",
                "line": 1,
                "url": "https://drive.google.com/file/d/1C14jEaBM5G1vyJkeKm6fhJnnFyg0F0tn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "None (Cid Kagenou)",
                "subtitle": "I'm on a desert island now. How many days now has it been since my raft and I washed ashore here? I can't really recall.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1W5T5NS9uL2A43yxjrN9aKvSHguAzOFVn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "None (Cid Kagenou)",
                "subtitle": "But don't worry. I'm fine. After all\u2014",
                "line": 3,
                "url": "https://drive.google.com/file/d/1RCbFRXS5OEmEECF4oHWW9Y8pp5UinfDU/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Your coconut juice, Cid. I cooled it with spring water.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1ZkCtPGe-M6d9luKKuVeQJnKZIrOunK87/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wow, this is ice-cold...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1nlBsVu1UVulvXVko_k56IW_qqO-TgdmV/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I found some fruit for you, my lord. Sweet and tasty.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1nZeRuz5hbkS2beU1u1fa2DZYjrIGB3w4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wow, so sweet...",
                "line": 7,
                "url": "https://drive.google.com/file/d/1g0MXgj0geUFZm152QBSYJc3QMybWwoYI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(There's absolutely nothing \"survival\" about this!)",
                "line": 8,
                "url": "https://drive.google.com/file/d/1Abpup0Svyp67MhtJl9NT0XcwaRumvpm6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Not enough water! Dwindling food supplies! No means of escape in sight! Panic and suspicion on the rise! That's what I imagined, but no.)",
                "line": 9,
                "url": "https://drive.google.com/file/d/1ThapTTgjSluZkBlTSkuWdCAkdAdngUlg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(If anything it's only made the pampering worse! I haven't faced a single hardship with food or shelter. Never underestimate super-beings or geniuses!)",
                "line": 10,
                "url": "https://drive.google.com/file/d/1q8xPINxOMlBC74QfAFVUjA-g4KYDSRPz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Dammit... It wasn't supposed to be like this...!",
                "line": 11,
                "url": "https://drive.google.com/file/d/1gd3wQ5utwCNj7DAIZWLVprdGw7NmDhII/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Is something wrong, my lord?",
                "line": 12,
                "url": "https://drive.google.com/file/d/19IkLsJhzxeHYnrTbgsVbLRBXaAbQHLbN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Nope, nothing!",
                "line": 13,
                "url": "https://drive.google.com/file/d/1XAVn6GDyFrB_ye9q0n55U6juOD_-QBxu/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "About today's lunch...how does spiced fowl sound? I caught some birds just this morning, so it will be very fresh.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1sDLiZkb062u6iXhe5kTIWc6f-qEV-QN6/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I've got some lively fish straight from the sea, too. They won't last long, though, so I recommend we eat them today instead.",
                "line": 15,
                "url": "https://drive.google.com/file/d/11LQ8LMrRLB2klkfR7lbdcnplA3XRMP-Q/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Don't you think he's had too much fish lately? He needs a more balanced diet.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1i3pfvGgZNRVMoJylqxFMxFnPoM1xcQ_R/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "If balance is your concern, then I'd think eating more of something high in nutrients like fish would be better.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1tarhi5S6k8sRgXCGy2n21qFe7H-tlBHx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Again with the bickering... Were Alpha and Zeta always on bad of terms like this?)",
                "line": 18,
                "url": "https://drive.google.com/file/d/1sMlFXq6yAA8UyJSh1Nora5WbgxABBX5n/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(At this point I'm beginning to think there's something more going on than just strong preferences. Not sure what it could be, though.)",
                "line": 19,
                "url": "https://drive.google.com/file/d/1Q2df1u2FEuHvkxURmb158tVbRhtwubK_/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Meat.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1qcl_4IIAG-FEzbcMnMg8gEJ8OQ0_8kEL/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Nope, Fish.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1Elw2Ylz8dELzUn9R-UsZTvMoqz_9DsSJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Okay, I'm going for a walk along the shore. I'll come back once you've decided.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1tiK0ffZBuw4Gl3O8c7LHl9fBSI96iI6E/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Ugh, I thought I was gonna suffocate back there... Whatever beef they have going on is sucking all the peace out of this island...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1GVN87XNLksh7W1crfZWojkP6qus7VzT2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "And it's not like they're outright fighting either. Ah well, guess I'll just kill some time here\u2014",
                "line": 24,
                "url": "https://drive.google.com/file/d/124cDBDYLrmSdk--PXlCWDQPbAsLQODZr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh? There's something sticking out of the sand... Is that a soda bottle? Why would that be here...?",
                "line": 25,
                "url": "https://drive.google.com/file/d/11C-Cl4K4p1wFATrrpbgqn4MrvfOiiZgH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "And there's a paper inside... A regular ol' message in a bottle. Somebody knows how to spice things up. Let's see what it says...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1AL4g_iZlnz6d-oNj9O-Hdlhn1OTSpeut/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "\"Thine eyes glimmer in the tenebrous dark. Behold, the greatest bounty of shadows birthed into this world...\"etcetera, etcetera.",
                "line": 27,
                "url": "https://drive.google.com/file/d/14SVmw5mKs14NtAftFCPnelXggY0WpnF3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hmm, that's a seriously cryptic message\u2014",
                "line": 28,
                "url": "https://drive.google.com/file/d/1xh6nDkuz9wiby_S1eb7aiPXgN7h2-QIf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Wait a sec! Could this be some sort of code?!)",
                "line": 29,
                "url": "https://drive.google.com/file/d/1Vm3m_MA1OTNNeY6_PnLpuKoOZ8hv-eTd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(If so...it's gotta be talking about treasure! It says \"bounty,\" so what else could it be?!)",
                "line": 30,
                "url": "https://drive.google.com/file/d/1vpvLuVAu7gwCmgfIJZEstVgMd9EpwGMf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 31,
                "url": "https://drive.google.com/file/d/1BNQ5nfgmVVQY41lFDvHOTm06P6zfDUZn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Alright, no sign of Alpha and Zeta. This little secret is all mine!)",
                "line": 32,
                "url": "https://drive.google.com/file/d/1_R1O7oVf5JnWBSuNBDwDz2tWf08QVFBa/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(If those two learn about it, they may very well beat me to the treasure... Caution is king here!)",
                "line": 33,
                "url": "https://drive.google.com/file/d/12zrnZmwhNIg7p4smrmRUIhjds0GMt42q/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Heheheh... Things are finally getting fun!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1Cna53f7bDigydtpxI4TgcFYqnTp_16Ym/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Smell you later, restful resort life and pampered survival experience! This is now the summer of the great treasure hunt!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1wNJG7KtKEN_5Ds-N8ILQhTwSsuN2QIMh/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Master Shadow sure is taking his time.",
                "line": 36,
                "url": "https://drive.google.com/file/d/187lDWfgUTazh63eRlkzzng8ba7W91m24/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, and his dinner has gone cold. Perhaps he didn't want fish or meat...?",
                "line": 37,
                "url": "https://drive.google.com/file/d/1irDiD-OvPOcpVW1R6puc0cX-zceYEZG-/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Could that really be it? I thought he mentioned going for a walk.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1Q9QZ7KGO3xdkxm-ERL--nyHBQ7QK-HVJ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Either way, it certainly is concerning...",
                "line": 39,
                "url": "https://drive.google.com/file/d/19v--6kf-zaGsNA-40NkBE7FByAHp4wuA/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I'll go look for him.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1kqJ5ZdzRCM7dUOFxx7yJ_c6uFFfBeRVh/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'll join you. I suppose there's enough beach for both of us to check.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1s1bxzfZOn553Rt9-ZJEe-kIMn2GJ_vl0/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Um... Well, whatever. We can both go check by the beach.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1p4afPkFLRybQHDyzOUwr94VEGNwfZpWT/view?usp=drivesdk"
            }
        ],
        "e6": [
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It seems he was definitely in this area. I see his footprints.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1BUIGQ3knLlrBietnouViuBM-k5DdpR2_/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Hm? Is this\u2014",
                "line": 2,
                "url": "https://drive.google.com/file/d/1K8cE9dYvqAHzOxzNTnd_xKLTBNNbYJLl/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "A soda bottle? Gamma made something like this before...",
                "line": 3,
                "url": "https://drive.google.com/file/d/1en1K3BNLb3ZGrO-SoPGaJoM76uSot7wd/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Exactly. She was super into it, going on about how it'd be \"a great contribution to our lord's cause.\"",
                "line": 4,
                "url": "https://drive.google.com/file/d/1fUXvMnDgiBZpabV3IeDDZxZb68p1Bkmp/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Which may mean this island is...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1fV6hKy2EoopsjdfGpgyDVm1fSmd3EOIA/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "What?",
                "line": 6,
                "url": "https://drive.google.com/file/d/15l567ZmDgk3xqVeFQpXAlgr7BIEgWy5z/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No, it's nothing. More importantly, Zeta, I want you to go back to camp and wait for Cid. I'm going to search further inland.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1hIDtw-6UJyW-otczBBt2QGFXXdoJ8eU-/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It wouldn't be good if he returned to camp and found no one there, don't you agree?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1fU41EBDXBeDdnZOBi0Dk7bjD7Ctr99U9/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hey, don't try to pull that card now. I'll do the searching.",
                "line": 9,
                "url": "https://drive.google.com/file/d/11IsoV-YTfeUS5ZzIwQ160z4LIFUkswYo/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Besides, this kind of work is more my specialty, right? So, you should head on back to camp.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1AthbI_vq0KhFMdjn4yKlO2tUQO41zRPn/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But I'm the one best-suited to deducing what he would have done next.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1jqIjrOWcjEywE5C1fwghCdUlyZxdWwyQ/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "And I'm saying I can track him even without doing that. I AM a therianthrope, you know.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1xKWuFVc47ckNgDY5R2CkUi8sFH5TCPTx/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "By the way, I've been thinking, Lady Alpha...",
                "line": 13,
                "url": "https://drive.google.com/file/d/1JcSwLxDLwERSriFTT6LW-RvGtNzk4zHm/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "You've been kind of impatient ever since we came to the resort, huh?",
                "line": 14,
                "url": "https://drive.google.com/file/d/18iVDMiOZitGVAdZS5-wvjPrjVX4K3n5m/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You should talk. What happened to your customary adaptability?",
                "line": 15,
                "url": "https://drive.google.com/file/d/13eKjyd6OmVMAH7C9nSNFUeHHVx4sBsiE/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I'm the same as ever. You're the one who's acting weird. You keep trying to rush everything.",
                "line": 16,
                "url": "https://drive.google.com/file/d/18KICfrYv6Mb3QcanrUTia3Fk7YSWS8c4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm not being impatient in the slightest. It's you who's being so competitive. What exactly are you trying to do?",
                "line": 17,
                "url": "https://drive.google.com/file/d/1Wtj4_e_8ozN1sd4bMRS6b8bQkFnR_9Ng/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I...simply want to give our lord the best vacation possible. What else?",
                "line": 18,
                "url": "https://drive.google.com/file/d/1cCN0YreQb8VqNAoORwzUj0J8UpmsAgws/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I want the same. All I wish is for Cid to enjoy himself, even in our current circumstances.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1O1uuVvnYaq1bvZumDgWGlARD0M4z_6mD/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...",
                "line": 20,
                "url": "https://drive.google.com/file/d/1D-aXXKZIr92KfvZtRjSO5wy7Nz0DDOrm/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...",
                "line": 21,
                "url": "https://drive.google.com/file/d/17kwRaIWDl8pvWZKGKqKB5BjmjHUvtmLt/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Pfft, heheheh.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1YaNzSWszbkvVsF3yP-ua9PbPQXAdITgd/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Heehee.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1qg3PwCT08elLAR_iY8_bWyWRoNMSXttS/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Ahahahaha! So, you thought I was trying to compete with you!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1Ui-xRmAqubGlGydcuFNvZ6AFV3jIaARw/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Heeheehee, I did. But I'm glad we're of like minds.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1bY42cy9K6FKAvR9vGUkMDP7NfqIxlbm6/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "And on that note, let's stop holding each other back. We need to work together to find Cid.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1UaMNqTZ0MLHxTWV1kQLkkfCcGc98GTtO/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yeah, let's. That stuff takes so much energy. Whew, feels good to finally talk that out.",
                "line": 27,
                "url": "https://drive.google.com/file/d/19UA3he-vtzMQoBLRcWWDqM-0HnXahvwc/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Now, with that taken care of, let's get moving. And I do mean the two of us, as a team.",
                "line": 28,
                "url": "https://drive.google.com/file/d/10Q84uPsHFG5J6MdcbNgFbUVabb8RGJdn/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Agreed. The sun has almost set... We need to find Cid quickly.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1scNoSYcxrWi-y4tglNjpfNddN9Aac3B3/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I smell Master Shadow over this way.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1bSRCU0jhDeUoP7783gTJ4ZmzKaAml5k-/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "That's the opposite side of where we just were. Maybe he cut through the forest to get here?",
                "line": 31,
                "url": "https://drive.google.com/file/d/1pQ3ygTaYKqHTnDNe71amvu1d__qpgunL/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "But what did he come all the way here for? A little hardcore for a stroll, don't you think?",
                "line": 32,
                "url": "https://drive.google.com/file/d/16kbXwVHsdlIR76Hay5_Yh-g8gwpR8rad/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You have a point. Can you stay on the trail, Zeta?",
                "line": 33,
                "url": "https://drive.google.com/file/d/1K4GzAlSlGQjByaxd8cmWX7NcDo6asnbv/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Hold that thought. We need to deal with that nuisance first.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1mZDaDoRYEMkMRNTVKOntA__qbOUSKvjt/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Whoa, that's a big bat. Where the heck has thing been hiding?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1Iz2YHqBrHvvG4MgkCpUu6LTqOHdOK4dE/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It may very well be that this is...that thing.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1-Ppae58JhEr9cYn7u_X9xbbsEAN86uD5/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "What thing?",
                "line": 37,
                "url": "https://drive.google.com/file/d/1GY5Cf5DAlhFcGfr0ZifugM9G8UtfWaDE/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Never mind that. It seems our friend here is upset that we entered its territory.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1LUSyodmK74_tMnN6Q1Jt-gL_tVXuJ3Ba/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I see. But if you're going to interfere, don't expect any mercy!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1g9by5s5APZ0QAJmuALbcp7S3pheRk-DL/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Indeed. You need to get out of our way.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1OCsu_VQkFCxx5ZcZkJqJ9vRPD_19c6dP/view?usp=drivesdk"
            }
        ],
        "e7": [
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Okay...that takes care of that.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1lE4M3JKyZIMr5BEOW3z_vyPdCzLvIvtN/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, and now we need to hurry on ahead.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1Fsrj5opqJ1aLy0c0jMqiNWvNLUB1ZH1A/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hold up. Something's...coming through those bushes.",
                "line": 3,
                "url": "https://drive.google.com/file/d/19qwOdm1UKEEbJx5NO9174N4DkUlin0R5/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Stay on guard, Zeta.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1wNmR41zz4818rqWZG1EG3Tc7Qjn-ujtI/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yeah, I know. Now, what's up next\u2014",
                "line": 5,
                "url": "https://drive.google.com/file/d/1k1k8709Gcpq4eAVz01yllMEUaE_F8GmQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Whoa, what a huge bat! Looks like it's dead now, though. That really spooked me.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1t2BbujRURhE5XK8vFAjAvQJ59k3mbXH2/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Ah, is that Master Shadow?!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1BOnredOThj6u--PlA9IabCatarVnt9x4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Cid! There you are!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1t78srATe92MRELPEt9rBUYulc6szctCu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alpha and Zeta?! What're you guys doing here?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1o9g__mJxaoD2UohKktbaVXDS0FgTnmx0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Could they be here to steal the treasure?! But how did they find out?)",
                "line": 10,
                "url": "https://drive.google.com/file/d/1R6uK0LSknawd2TdE0lWFw9j2sJwW8O3S/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm so glad we found you...",
                "line": 11,
                "url": "https://drive.google.com/file/d/1ZVlQqsaQLf9nyqMza-ffd209CQJvbMND/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1gLzaKwFpSj_i_xByHGXx48oLGp6j_u8M/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "We got worried when you didn't return, so we came out looking for you. It's a relief to see that you're unharmed.",
                "line": 13,
                "url": "https://drive.google.com/file/d/16M9EZISTLLHSoczr6_zlJ2nXNvMvx_LG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...What about the treasure?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1Xzd6CaXpQZgaVbtJ5KaaSBq_FWyJjPlE/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Treasure? What treasure?",
                "line": 15,
                "url": "https://drive.google.com/file/d/1oNXVPkjqYzYgRVoJD-HRPesrI6EDTHVj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh, uh, well, if you don't know, that's fine.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1oRFhNPv0rBNvuxjzge98RUATPuIvcIUb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(So, they aren't after the treasure... What a relief.)",
                "line": 17,
                "url": "https://drive.google.com/file/d/1nr47xbHFd_U4gpEwaDPJlAiMiU9NCoZ3/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "At any rate, let's make our way back to camp. I need to recook dinner.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1MYleYPeZzK2xKlpGIdiWOKee9K43LfIY/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Sure, fine by me. You haven't had anything to eat yet today, have you, Master Shadow?",
                "line": 19,
                "url": "https://drive.google.com/file/d/1UI1B_ia9fOv2WU-L4ysQDG1JnKOdJEXC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Now that you mention it, no...",
                "line": 20,
                "url": "https://drive.google.com/file/d/1ei9UWn7kG6SZPjypJZRD4H3geV9eLqrY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I was so fixated on the treasure that I forgot. *sigh* Well, it's not like I found anything despite scouring the entire island.)",
                "line": 21,
                "url": "https://drive.google.com/file/d/10Ii2qRt0idKb-UeXI9qIMsUA7z-UNaVI/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Given the circumstances, I'll leave breakfast to you, Lady Alpha.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1joE80NfejhVNZkQgetiAyxlS_KahpfTv/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Oh, how very kind. May I ask you to see to lunch, then?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1-hQKan7D4MbTfBwqaFCB25A0amvFdbBI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Huh? Uh, yeah, thanks.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1EXNIhlBPIVyYjtVTk2pI5SmiqRNMCzJy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hmm... Yeah, I dunno. I dont' get it at all.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1h2wxqJ4ua_kdcxxjPklXA0J3ViyeWL3b/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I got so caught up in the moment that I thought it just had to be treasure...but what was that note in the bottle in the end?",
                "line": 26,
                "url": "https://drive.google.com/file/d/1SJnBw4oPLE3x51EgK9YYjF9eRY6t5DIU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "\"Thine eyes glimmer in the tenebrous dark.\" It sounds like it just has to mean something. Eyes that glimmer in the dark...",
                "line": 27,
                "url": "https://drive.google.com/file/d/1PN6TOOu1wjiIZcTk1u__IDSSxLZnDL2c/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...A cat? Nah, gotta be something that fits the island theme more, like say...a bird or monkey. But if we're talking about the dark, it could be a bat\u2014",
                "line": 28,
                "url": "https://drive.google.com/file/d/1Rncox3OA08NJ1QkiSy2zanTbFwcVQ6Tn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Aha! What if it was that huge bat from yesterday?! Could it be what the message was hinting at...?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1Jcs2g9qPejiVmW6kfocR_6q85Mx2Nzwz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "But why? Anyway, doesn't change the fact that it was nothing in the end, I guess.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1-EeAkOZansaqlfKscU-cBMsKwNjTThqV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Can't help but wonder, though...what happened between Alpha and Zeta? Up until yesterday, the sparks were flying between those two.)",
                "line": 31,
                "url": "https://drive.google.com/file/d/1eDWpwy8NWS6_o9_uJElpx9qL-Q9GjjJ6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(But...I'm just glad everything's back to normal. That makes things easier for me, too\u2014)",
                "line": 32,
                "url": "https://drive.google.com/file/d/176-5lUwQ0d0MB5OKJSQZc2YQULC7JLXr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hm? Something's coming this way... Is that...a boat?!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1Ap4Z5lJg-j0RC4weSUh91Bv3cWXKM3LV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I-I'd better go call the others!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1lJsdTKoFnwpFdvXyEmtXufs4Bp0d1Y_Y/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "My lord! And Lady Alpha and Zeta! We're here to bring you home!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1zOUmB_i8oeYkpBTYBiYQWUYekp1t8rkw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Good job finding us out here on this desert island. How'd you know where to look?",
                "line": 36,
                "url": "https://drive.google.com/file/d/1W58QuZUgWxxiUgqM070H9AdwnT8tlNo3/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Desert island...?",
                "line": 37,
                "url": "https://drive.google.com/file/d/1C-R9wYEDrjks0H-hDhr8Si4uLdgZ1DCF/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "This island belongs to Mitsugoshi Resorts. Construction is slated to begin soon, but yes, for I suppose you could consider it uninhabited...",
                "line": 38,
                "url": "https://drive.google.com/file/d/1QWWGemCKaIVA_C2awchIgZNIDaRIn3Vi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh?",
                "line": 39,
                "url": "https://drive.google.com/file/d/1pvk1SfGztJSTlXZmULXSrjASC4dr4CBy/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That said, plans have been stalled due to monsters\u2014",
                "line": 40,
                "url": "https://drive.google.com/file/d/1gJ5Vcgz5cURKNVTjFCIbzDSml-39u9-Z/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "W-Wait a minute! Could it be that you sensed this and came here to slay the beasts?!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1SW7C1Rk7Soi9esrA_WPhRYPP5a7866Pq/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "You never cease to impress, my lord! Now construction can proceed without fear!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1KPquJcHaXRcB52BTf8E3uQP5sfJ82bi5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "O-Oh, yeah...",
                "line": 43,
                "url": "https://drive.google.com/file/d/1HZU6CV62qc6My4z-BBorgPbHja0_g-eL/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yep, I knew. You picked up on it, too, right, Lady Alpha?",
                "line": 44,
                "url": "https://drive.google.com/file/d/1DbkD8VAQvlucNk5jsrwJYd3VMJOA3hFo/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I thought that might be the case as soon as I saw the soda bottle. The encounter with monsters made me doubly sure.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1au51qXZHHYh1PdmFPwJ4I1hzU9SDTqqo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So, then what was that message in the bottle?",
                "line": 46,
                "url": "https://drive.google.com/file/d/1N0kQvj9k5kaitI4dwwJDlUegw_JHcAAO/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Message?",
                "line": 47,
                "url": "https://drive.google.com/file/d/1rw72YYCgcURkJvxv_AoK9Et6q5B4TM6Y/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So, I actually found a note inside the bottle. Here...",
                "line": 48,
                "url": "https://drive.google.com/file/d/1iCmH8v_efB5XkghQKRnvvQ-6NmGDkTUi/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(What?! This is...the poem for Master Shadow that I tossed out to sea!)",
                "line": 49,
                "url": "https://drive.google.com/file/d/1GrQWaWkkWkyD2DfKA3wl6PtLWjfAs7TE/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(How in the world did it... No, no! Beta, you need to get that poem back at once!)",
                "line": 50,
                "url": "https://drive.google.com/file/d/1q4-oFNW3_pdRspBc0FFC7bskfkVXiORe/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Oh, I'll take that off your hands. I'm sure it's just someone's idea of a prank. I'll see that it's disposed of properly.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1cm4JPWm8ud3VKfCoidfAYwRIMUFLLVU3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Really? Well, okay, thanks.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1ylPye_EFeKeScrqtBy5hrCC0IhnHTvrR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Guess I'll take the professional writer's word for it. I am kinda grateful to whoever wrote it, though. Prank or no, thanks for the dreams and adventure!)",
                "line": 53,
                "url": "https://drive.google.com/file/d/1apwk3jqNePFhfe7h5sixMAa1JNM9Lm2w/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Now, come on! Let's board the boat and get back to the resort!",
                "line": 54,
                "url": "https://drive.google.com/file/d/1cTQ9B6ywvKlPOskIXcTYEdX-szttRzKN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Thus ends my desert island adventure, huh. Shame about the treasure, but overall this was another fun vacation.)",
                "line": 55,
                "url": "https://drive.google.com/file/d/1uwzldQwqcGWau84JvpMubigqFiFC4oUd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Not to mention that Gamma said she has an event planned once we get back to town. Summer is just getting started!)",
                "line": 56,
                "url": "https://drive.google.com/file/d/1nwWGOAWp_fNq5uWGx0bxKECveVF1pvc9/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "No more living with Master Shadow, I guess. I'm kinda bummed.",
                "line": 57,
                "url": "https://drive.google.com/file/d/1XcUmcMIaGQ7z9Yv4gfww3WPoKZLMKgS4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Heehee... Yeah, I know how you feel.",
                "line": 58,
                "url": "https://drive.google.com/file/d/1DQygChDVoK9uyD1dBseHtWAxUJ4UiqDF/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "A lot may have happened, but we must persevere as members of the Seven Shadows.",
                "line": 59,
                "url": "https://drive.google.com/file/d/1zTk340Uq5sHxWqGg24Zc7gLffEco5HYF/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Right. Looking forward to continuing to work with you, Lady Alpha.",
                "line": 60,
                "url": "https://drive.google.com/file/d/193bPub5G2JUpi8YqgJRQmEhaGnHRfag4/view?usp=drivesdk"
            }
        ]
    }
}
//let setDoc = db.collection('data').doc('ssc_p3_c3-3').set(data['p3']['c3-3']);

let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
