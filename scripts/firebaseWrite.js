const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "p1": {
        "c1-1": {
            "e1": [
                {
                    "name": "Bandit Boss",
                    "name_variant": "Bandit Boss",
                    "subtitle": "Gwahahaha! Drink up, you lot! Drink, drink!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/10EqBY9NrMzAv4Aq4yDXrKRDOaRVq0aZR/view?usp=drivesdk"
                },
                {
                    "name": "Bandit Boss",
                    "name_variant": "Bandit Boss",
                    "subtitle": "Today's loot is a treasure trove! We can make a killing pawning it all off in town!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1lZ1RLQAtuBYJzdgWHo1rd41B3rETO9Xt/view?usp=drivesdk"
                },
                {
                    "name": "Bandit A",
                    "name_variant": "Bandit A",
                    "subtitle": "Heheh. The spices look like they could fetch a decent price. There's also this creepy watch I can't quite make heads or tails of.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1hZiAKkm-TYLtIlBysDNPIAGIJ4DBbLD1/view?usp=drivesdk"
                },
                {
                    "name": "Bandit Boss",
                    "name_variant": "Bandit Boss",
                    "subtitle": "A watch? When did we get our hands on that? We just nabbed whatever we could, so I'm not even sure what we've got here.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/19eY-LmP5GDNSWnaW6dzgY2s37mm_Fok8/view?usp=drivesdk"
                },
                {
                    "name": "Bandits",
                    "name_variant": "Bandits",
                    "subtitle": "Gwahahaha!",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1UYhAODcCDONaSP_mLSBzLezHfaFYPmm3/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Gwahahahahaha! Hyahah!!!",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1p9zvk2riRPXhCeSoOQUoJaGBOsaGTz4w/view?usp=drivesdk"
                },
                {
                    "name": "Bandit Boss",
                    "name_variant": "Bandit Boss",
                    "subtitle": "Who the hell are you?! How long have you been standing there?!",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1RqWdoC4T44wmvzNg63DoOhZtvGvJhm7W/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Well, you see, there's a reason I'm here. My stash of gold coins was stolen.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1oXk0JCpqA2nuDvzLNj9hQzCT06ZKcg9P/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "I'm worried about getting scolded, so I thought I'd show some good faith by collecting a small amount from you bandits.",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1aiS6XIdcn9IyX6YJ5iwPwPGmVtNjjpmb/view?usp=drivesdk"
                },
                {
                    "name": "Bandit Boss",
                    "name_variant": "Bandit Boss",
                    "subtitle": "What the hell are you yapping on about... Hey, you lot, take him out!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1MCqVSq_WyXBa93qhX_RB8ryTeD520KXu/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Whoa, that's a total side character line. I might use it next time myself.",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/17ExQNOCWpRy708QB384KMZ_HY24snBfi/view?usp=drivesdk"
                },
                {
                    "name": "Bandit B",
                    "name_variant": "Bandit B",
                    "subtitle": "Dieeee!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1uaEkJhv2IELgjGjmDFWC9KGs1A-XIBdk/view?usp=drivesdk"
                },
                {
                    "name": "Bandit B",
                    "name_variant": "Bandit B",
                    "subtitle": "Gah?!",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1t4jSoarT10lXOx-tq82HO0-Yu_4YLem-/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Hmm, fragile. You really ought to get more calcium.",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1I4fF5IPkJlE6XeXfRmBL_ub_IdxQDaGS/view?usp=drivesdk"
                },
                {
                    "name": "Bandit Boss",
                    "name_variant": "Bandit Boss",
                    "subtitle": "You bastard... I'll kill you! Hyaaaaaahhh!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1ShOCaNq5fZN1uVnwXThJSMDkodvHQFmn/view?usp=drivesdk"
                },
                {
                    "name": "Bandits",
                    "name_variant": "Bandits",
                    "subtitle": "Gugyaaagh?!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1KJXIM2HuiSpNqVmVz0NG0v_0-r6pkTJl/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Oh...yikes. This magic belongs to...",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/103e0SxbOK7YPy134vsl4gGs7W-wmLRuK/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Cid.",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1DsD3F68YHiKTgBsooa7I3ty-pEK4HimA/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "...Ah, long time no see.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1c4msFnvbwgW0iMIGLo5lyYt2DEcnsCjS/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "What are you doing here?",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1VNJMXF1mk1tKOtFcBd3tpQt65yxdKxV9/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Whoa, she's really pissed off. She's totally gonna go off on me for running away.)",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1JCM2Rw8HEd8uLvFJNMh056EXOUuyfwBf/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Alpha looks terrifying. She's glaring so much. I might burst into tears.)",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1qvawJJisvqdLpVataej_iacbA-bhQ0y5/view?usp=drivesdk"
                },
                {
                    "name": "Nanigashi",
                    "name_variant": "??? (Nanigashi)",
                    "subtitle": "Who are you people?",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1sa47v4cHw_kOvZjv89HRbQIKnENR50V7/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...I thought you would be here. Judging by this amount of magic, you're no ordinary bandit.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1SY-5Xlj2Bne8cOgKZDuD4nL5qShLkNBe/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Who?",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1oGvHhcKWoKPKdmFBXCrty97X-oCQvly5/view?usp=drivesdk"
                },
                {
                    "name": "Nanigashi",
                    "name_variant": "??? (Nanigashi)",
                    "subtitle": "You're not mercenaries. You don't look like thieves either. What do you want?",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1knBtHL1zSl-rYcFGKQRlYugb5AYL6jmG/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I've been pursuing you, First Child Nanigashi.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1MMRjC6lHSneYx_gOakpC-5P7jL2VtFxB/view?usp=drivesdk"
                },
                {
                    "name": "Nanigashi",
                    "name_variant": "Nanigashi",
                    "subtitle": "...",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/16J668sOY5eQuOus2X0Z5q1fh4xQ7T3jz/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I don't know what you're up to, but we received intel about you sneaking around and mingling with a group of thieves.",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/13q9LrhBemZbboHm4dXmpIQj8e-WdrVum/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(We did?)",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1AQV02WIKPa-Dq8okZ7XrOtU0bDJZ0g52/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The source of the intel was dubious, so I half doubted it was true.",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1vKuTvyXSiktPWjSOvdOn-6V1FlhsCYFo/view?usp=drivesdk"
                },
                {
                    "name": "Nanigashi",
                    "name_variant": "Nanigashi",
                    "subtitle": "I've heard of you. You're the Shadow Garden, aren't you?",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1Xulcz1r9YO3-juuNcc2PEeT3t3oh7h3s/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "And if we were?",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1j8Ir4ZCNS6jFBujFuCcUkGKqgTcbBG9d/view?usp=drivesdk"
                },
                {
                    "name": "Nanigashi",
                    "name_variant": "Nanigashi",
                    "subtitle": "Not a problem. No matter who my opponent is, the result will be the same if I bury 'em here.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1GvJo66fsuLu1jmLqaNOZZcgKgX6JuaM3/view?usp=drivesdk"
                },
                {
                    "name": "Nanigashi",
                    "name_variant": "Nanigashi",
                    "subtitle": "I'll show you my strength as the First Child by giving you a spectacular death!!!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1I88QX3nK0AhrIt0WeSvzoQ4H6YqbpTdN/view?usp=drivesdk"
                },
                {
                    "name": "Nanigashi",
                    "name_variant": "Nanigashi",
                    "subtitle": "Aghhh?!",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1I7eULYc50R_ClORWZtqsNu_9jpyEUWbF/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That should do. He's not dead, so when he regains consciousness, we'll interrogate him.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1bcyiaTX6E23oobUb6CRP06VHpAXMU_WD/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Hmm, that was anticlimactic. What was this old geezer up to?",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1bvVf0lYQitTbzANgFdXnoHiGVI6ZsEf2/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Let's check the cargo. Maybe something important is mixed in.",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1jeykopcasUBuOM4x0_eFSTC-MWeQO8W2/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Doesn't seem like it. A few of these items could be worth some money, but it really is just typical bandit stuff.",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1f5XLuOa7Yi88P1aepaqbiJpAbGdnr42M/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Whoa, incredible. I could sell these spices for three silver coins. Being a thief is profitable, huh?)",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/18myDCM61_GR5UWRfmpCkPcGMhuWbOdvl/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Hey, by the way.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1NkPPMio9tgQgFwGPQ8LOU-i14u99aUrY/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Y-Yes!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1jf32OP3-yVfSvq-K1N_ogBo49whYEVs7/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "What were you even doing here? What value is there taking on low-level thieves now anyway?",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1srwqMmRp3Mt-b9eN4qn9N_IqBVUWNp7g/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "W-Well...",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1JuzjcIWBnh4cqENBCUP3fU-TqxbvOV-q/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Fine, in that case...)",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1JjQaq4Zq3u_q9Y7XCXP5EHFODFP1ArPA/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "...There is value.",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1HibCiwxESKIxwYqRtTeIBvPrnuffLKPe/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Huh?",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1PDPNLXlILSUJ3x6qMnI-JJ_ED2e2De2I/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "I consider the cargo of these thieves to have considerable value, so I thought I'd gift it to you guys.",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/14bMDypcWBEifwMyo_WJDpKlivKF_Oa_v/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(How's that?! Although it's nothing compared to the amount of money that disappeared from the safe...)",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/18mcVh4OyYe4eif7v9iI1uA2uziP1JHmH/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(My strategy is to move her emotionally by conveying in a pure and childish way that \"It's valuable to me!\")",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1HqBsQ8E4Atwe7PzBq2U0BtWbpuJ0Mlgu/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "*gasp* I'm picking up on something! Some powerful magic!",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1DYedT6FhrtsI8qeQX9MtWevUFX_p5U-6/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Wh-What the heck is this... I didn't sense anything until just now.)",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1gWrQmMRTkliGgS9cHkv2F-G4wnRGHWfY/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It's under this cargo!",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1niaDsFWd3N-VAksC8Yt0ECWCSbwbWsKE/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Ah, this feels, nostalgic. This is how I found Alpha and Victoria back in the day.)",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1lanl8bthoXIm5t9KTTOz5w2SbzdpnYwj/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Could it be another possessed child...?)",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1DqZ1gBfPmAzBcuv-44YQ8R-wtLPBRNr-/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...What's this? It looks like a pocket watch.",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1FrPMhgoP_04VABME9Ccgu0aySkxll5Jp/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "So, this is the source of the magic... Could it be...an artifact?",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1ScC7I9yeuIG9h_SSYB8WUVICk0YodGE8/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Whoa.",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1UN_98tJZQZTtP0dadPVpVk_z4_pNSUs9/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Was Nanigashi planning to present this to the Cult and have them make him one of the Rounds?",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1dPFE30iC0uqJdUMiBmBwMJ4_3fXkVHT4/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "*gasp* Wait, Shadow! Don't tell me you knew about this from the start...!",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1WnJFupB4oftyKeT9YcOgwhY_fSfKJeIZ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "When you said, \"There is value,\" you were talking about this artifact.",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1e6ZLRNt_fX1GrD-eb23z8LzCfZ3aYuuh/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "How do you do it? Even the Shadow Garden's intelligence network didn't know about Nanigashi's existence...",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1DmIZ5RvPkNrvd1btgxabLnSzpLp6KcEd/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(...Not sure what's going on, but I did manage to pull off my bluff. Boy, did I get lucky! Never hurts to try!)",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1lJTMlqZh73cW_MZTj-30NmOkVJ3ECb9i/view?usp=drivesdk"
                },
                {
                    "name": "Mysterious Voice",
                    "name_variant": "Mysterious Voice",
                    "subtitle": "...Come here.",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1V-4fYpwZNfjMP8wTqT8gH-I4HphVGUZL/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Huh?",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1R_7DT5jNPgb6L7q1FSOBx2m0xAhkSFPK/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "What's wrong?",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1TJSx-0obqquBYOSATmgbK71cuZOFCgNR/view?usp=drivesdk"
                },
                {
                    "name": "Mysterious Voice",
                    "name_variant": "Mysterious Voice",
                    "subtitle": "...Please, come here. I need...your power.",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1A04KSxHRJN_dPYhdehe_7DGN8twO1v7e/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "...Is it the watch talking?",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/1hpeHs4_hFrsuFPcd_btEdsp25062_sm4/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Hahah! This must be one of those scenarios where if you break the seal as told, you end up in a binding contract with some weird mascot character.)",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/1UtZcqNKg-gDnoLkZMA77A8E5LJT9ydPS/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(I guess these kinda clich\u00e9s exist in any world, huh? But that's usually part of the protagonist's role, so it's definitely a no from me...)",
                    "line": 71,
                    "url": "https://drive.google.com/file/d/1P_sQP-Iw3b1ow7_AMxbl-HjGhZeaS2ZV/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Alpha, let me see it for a second.",
                    "line": 72,
                    "url": "https://drive.google.com/file/d/1YHDKLWhEwlWhRoyb5BAmUvhtXEMtdciB/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(But if I pour all my magic into it instead of breaking the seal...)",
                    "line": 73,
                    "url": "https://drive.google.com/file/d/11qgyfhyQXk6wmk6xD81PkqTJi0KAqKlR/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Shadow, what're you doing?!",
                    "line": 74,
                    "url": "https://drive.google.com/file/d/1hbFEgwTw4u3T1DgmkI-fPvjMe5pTjtmY/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Maybe I can make it obey me instead!)",
                    "line": 75,
                    "url": "https://drive.google.com/file/d/1vyy_xNEB09YMXO75Lqqcbam2JOX3Qsr0/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "I mean, every shadowy organization should have some kinda mascot, right?",
                    "line": 76,
                    "url": "https://drive.google.com/file/d/1BITWVCkRvn-ZqCm33BjEKVIarU2BBcME/view?usp=drivesdk"
                }
            ],
            "e2": [
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1sK0XdpfdhuZV9vcUpcRJ72a0ZQiA2jiX/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Huh? What is this place?",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1GPrC6-eodEAM5xVy8_DA6--1Q8R-d48J/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Graaarf?! Where's my boar?!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/11KtZaJ0HwkYHErIIGyBJZWjyIyAlkmG8/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Huh?)",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1JQp3F3m7utlPNJ3t3GaQNnaM396mUyL7/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Ugh... It's too bright... Direct sunlight after an all-nighter is a total no-no...",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1xps9AaSw2rcyLqXvts5lMBLn0UiGJzUI/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "What happened? I was just in the capital...",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1gekAsyy_TNgjc9xgvHDMxLeq6_ivvx-d/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "It looks like a peaceful countryside. We were instantaneously transported from our previous locations... It doesn't make any logical sense.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1FZgYGpk6OCdEpsvhD_xSnIg5D-du6xxY/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "How strange. We were all in different places, but now we're all together... Hey, Delta! Where are you going?!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1LZSn8t6sjr6EwLkq66XSdg0Gcy-UygOL/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "My boar is still around here somewhere...!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1DgTHavv5ebFGSu1taVZIMqiFUrpVwBjX/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "If that dumb dog is going off on her own, then I might as well do the same. I need to gather intel to understand our current situation.",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/19B1Uc5RZuLm9eRR-657ievmYZW2HsFFG/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "No. Please avoid acting alone.",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1oyFSoOBXkfZJb2QlncoZVZonl3mQNzXp/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Everyone (Beta)",
                    "subtitle": "Lady Alpha?!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1WxRn92SvVO1VWWb9gSlxxprg_Az9R0dc/view?usp=drivesdk"
                },
                                {
                    "name": "Gamma",
                    "name_variant": "Everyone (Gamma)",
                    "subtitle": "Lady Alpha?!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1WxRn92SvVO1VWWb9gSlxxprg_Az9R0dc/view?usp=drivesdk"
                },
                                {
                    "name": "Delta",
                    "name_variant": "Everyone (Delta)",
                    "subtitle": "Lady Alpha?!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1WxRn92SvVO1VWWb9gSlxxprg_Az9R0dc/view?usp=drivesdk"
                },
                                {
                    "name": "Epsilon",
                    "name_variant": "Everyone (Epsilon)",
                    "subtitle": "Lady Alpha?!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1WxRn92SvVO1VWWb9gSlxxprg_Az9R0dc/view?usp=drivesdk"
                },
                                {
                    "name": "Zeta",
                    "name_variant": "Everyone (Zeta)",
                    "subtitle": "Lady Alpha?!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1WxRn92SvVO1VWWb9gSlxxprg_Az9R0dc/view?usp=drivesdk"
                },
                                {
                    "name": "Eta",
                    "name_variant": "Everyone (Eta)",
                    "subtitle": "Lady Alpha?!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1WxRn92SvVO1VWWb9gSlxxprg_Az9R0dc/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I don't know why this happened, but it's best if we stick together for now.",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1ybutbL81ngfs2-nS3Qi0rza0sy3Gmsru/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The root cause is likely because Shadow\u2014",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/19xmxXGypVwbyeHkqC5X5AqNlKsa4DoLs/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Huh?! What was that tremor...a magic collision?",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1EoPVLBYzqVBNHIJZuvSPKgg5tD_FKlwY/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "It might be the aftermath of some kind of disturbance at a distance we can't see, meaning a major battle could be taking place somewhere nearby.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1W130ty8gZFlY-s06Pkj6MTz1KtG1uVo2/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Is there some strong opponent here? Let's go check it out!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1ZmiX3Jf6XLyLwRYwdBPUMLXd_tzeV7LR/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It might provide us with some insight into the situation. Let's gather intel while we're on the move.",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1eG494J46A_Obd1JWEm1WkoyvjS6ADyHP/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Beta Look-alike",
                    "subtitle": "Ack... The difference in strength is too great...",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/10qTb5W2QxUZiva77sRDl_SPZugQxlsfc/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Epsilon Look-alike",
                    "subtitle": "Is there no way we can match its level...?",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1F-tGUg8DOYqoqPNeH3cBOjgu1bho-jZ8/view?usp=drivesdk"
                },
                {
                    "name": "Diablos",
                    "name_variant": "Massive Mound of Magic",
                    "subtitle": "A ragtag bunch of nobodies...",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1pbaic9c17DqfczI_puf7gv_1vEdKuZjx/view?usp=drivesdk"
                },
                {
                    "name": "Diablos",
                    "name_variant": "Massive Mound of Magic",
                    "subtitle": "Especially all of you. Hmph... Just filler, really.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1GZKVb4ILPlS_bZRAmc_SHx1UCXdvkGQj/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Alpha Look-alike",
                    "subtitle": "...You sure about that?",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/17Mkr6j2g5xi-jP8RK-cX6Uw05Lhoz0oW/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "We're all comrades here! We're not nobodies! That's why\u2014",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1zdvMUFT4407zoeoFGH1kZqkY1wr3fnIs/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "We will... I will...join forces with the others and defeat you...to liberate the people from the vampires...!",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1LyNPJ8pBVw4YHx94y-wPX1qRl9w510Us/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "??? (Freya)",
                    "subtitle": "She's right.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/19meDFi-Ex09hkzzdzUqe96EDrAh4OGcD/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "Freya...",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/164rcQYAhQHjpRGcWWoC30S7_1Hku2S3k/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "Today, we end this fight... We won't let the vampires have their way anymore!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/19CJj6q4AA3uZR6fCLYbZzo-tNZgn1cY3/view?usp=drivesdk"
                },
                {
                    "name": "Diablos",
                    "name_variant": "Massive Mound of Magic",
                    "subtitle": "Vampires are also nobodies. Their existence is insignificant...not that you lot would agree with me.",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/10TeV-FG5dHRmpxT7rn8VDVdJhnoB3tfy/view?usp=drivesdk"
                },
                {
                    "name": "Diablos",
                    "name_variant": "Massive Mound of Magic",
                    "subtitle": "...I grow tired of incessant chirping. The more your numbers increase, the more bothersome it becomes.",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1P2_FV7jM8f4kJLRd4DsCXYuKBHQOgoTP/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Alpha Look-alike",
                    "subtitle": "Our numbers have increased...?",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1MQgvZPB9OAt3QeIGhhn4yjX1czasmgAN/view?usp=drivesdk"
                },
                {
                    "name": "Yukime",
                    "name_variant": "Yukime",
                    "subtitle": "What in the world... I see familiar faces all around me.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1TzjF2bd2msLnFsMulOyaUU_A9WGTV9XE/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "Where am I...? This doesn't look like the Academy grounds...",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1ZrP1E9FRuKhBQDH4jvdFVZixN29VM4dt/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "No. 559",
                    "subtitle": "Hey, what's going on?",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1WliMHJAsAZzSXOD0HFdbNUA-d5tZ0CdG/view?usp=drivesdk"
                },
                {
                    "name": "Rose Oriana",
                    "name_variant": "Rose",
                    "subtitle": "I-I also have no clue...",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1okWVQesTvBu04zIqhEj13JokBD5S2bP4/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "You can make sense of things later. Now isn't the time.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1yGhwrO6gIgNP7GXjRwmMvzQC151K-eXl/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Alpha Look-alike",
                    "subtitle": "Who are you...?",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1Qw5fUj7Aw6C0Xs4PXtGDWSXm7cU6Yy8f/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "How long have you been standing there...?",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/10-m19UQUI7Kr4g46aNObPg5h6JH7NL6N/view?usp=drivesdk"
                },
                {
                    "name": "Diablos",
                    "name_variant": "Massive Mound of Magic",
                    "subtitle": "...Doesn't matter. I'll eradicate the lot of you.",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/15BKnjebcbqt0hNxfq8HiG72xd8_RXjN3/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "*gasp*",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1z1aVHHW8k7JhMl_5QWlUdzUX1owaMh39/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Alpha Look-alike",
                    "subtitle": "This is bad...",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1fsizNuhCSJq1atskOgsOCsmHp3lsoOX_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Everyone, retreat\u2014!",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1JVK5f-1q2tLmWOOPZEzFUm9CSkgh0qP1/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Beta Look-alike",
                    "subtitle": "Not happening!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1nSidbAy7pfmkKZ6_8XT7e2BroIdUAywt/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "Duet!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1qamuEW404xAyFN6ScBQFqB8BcKYdzIQH/view?usp=drivesdk"
                },
                {
                    "name": "Diablos",
                    "name_variant": "Massive Mound of Magic",
                    "subtitle": "You are too weak to stand in my presence.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1ZPpumYQk9BqF3FPVu0_Vy4eeOM34JKdT/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Huh, is that my sister and the others? Whew. Thought I was alone here!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/11sJpUxUewiXfYUhgzNxf9fP2EetoUi3g/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "Cid?!",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1cGPwcO7SVBEo9IrzKEai9iGdNIXBRUQG/view?usp=drivesdk"
                },
                {
                    "name": "Diablos",
                    "name_variant": "Massive Mound of Magic",
                    "subtitle": "...What a tremendous amount of magic. Who are you?",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1javqYg5gcUj7cpS4SdOpVlbddgkSF_OG/view?usp=drivesdk"
                },
                {
                    "name": "Diablos",
                    "name_variant": "Massive Mound of Magic",
                    "subtitle": "Now disperse!!!",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1TIxWbmEy6ubcjIScazI3sx4kzJ8pYVjO/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Ah.",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1_OlEj8IH-yiK-6F5XjBqqTzOJLL3OxWL/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Beta Look-alike",
                    "subtitle": "Eeek?!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/11oss6Vma2E59GtkoQ0vIr6qq1sSKqYjN/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Wh-What strength!",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1aaAwszHSI9UMZLq3e0OG84ZEEKou6UhF/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "It's going to blow us away...!",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1doX_VHxLaHj0m373NZKmaEUbcKh6-frT/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "Ci...Cid!!!",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1zGK43TcUpXzdiGIPsekOrBZozZlAmNQB/view?usp=drivesdk"
                }
            ],
            "e3-1": [
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "The Massive Mound of Magic's attack hits Cid directly. As the dust settles from the collision, nothing remains at the point of impact.",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1jdYJ1K6442dCjF0w8n0EPkQM_IiTgysK/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Agh! It didn't even hit us directly, but what incredible power...",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1F0tz98eqfOxIw63XiquBlB4ABeF6Ut2o/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Ack. My head hurts... I hit it against a rock...",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/10Cf_I53EJdheWSWmR0-6KK7pg71FjkjU/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Is everyone alright?!",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1b5yv9v1T5f9mA5wAiaU3DbiRgMTzP-vO/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Alpha Look-alike",
                    "subtitle": "A few of us are down.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1sk49IFJvhfdv30zIk6P_2p0h9lnDQ5t_/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...Lady Claire, Princess Rose. They're okay. Just unconscious.",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1v4jD_BLhd3Z5uWUys4HWmD-7MeYgX0qk/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I-I see... That's a relief...",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1WkGO7tNTO75nxQ7FkLRzB36BprMqg2l9/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "...Boss man.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1UWlDduyPe-RWZliK6xrWKlsFZVYS1PDm/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Huh?",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1MCYMR6zhxx-kDOhHVC21iDrfvptGHQrP/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Where did Boss man go? Is he playing hide and seek?",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/18kG_pAYjkSB40ijMvsrXssuBMptDz-v8/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Knowing Shadow, he should be...",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1KcTwHYzTgTUXJoniVUQveuGnqkbtbOTD/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...right there?",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1g8DIwWNOwzN1J90sc3BOxBCupOXoNe9W/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(I can't feel his presence.)",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1g6WlS2rXQ8a-kvnTngFqiYhFt54HMkl1/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Sure, it was a direct hit...but there's no way... It can't be...)",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1R6TwI09zig7HuHZZOEDlomRpsEC-x3jq/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Boss man...? Where is Boss man?",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1t88xBF7l3xE5MS9B7wRnV4nuzE9Y39Yp/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "I-It can't be true, can it? He must be hiding somewhere!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1v_P_Wc23NziKb1g1UQ6UTw06NbFU_8BS/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Master Shadow! Master Shadow?! Where are you?!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1_WTKdw9xwwRFyuvbiGv3MGiFasc1Mr1Y/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...You've got to be kidding. Master Shadow, beaten by that guy...?",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1S9-frsfImK89W46xOHREpizI-49P-6l8/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "There's no trace of him...",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1BMuIa2uK2QpZybE2I9NyRkgK3VYYs4B6/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "His presence is...gone...but his magic is unmistakable...",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1HvKNJet1HQP-GYLG_ZLODlcN1Vg3AACB/view?usp=drivesdk"
                },
                {
                    "name": "Diablos",
                    "name_variant": "Massive Mound of Magic",
                    "subtitle": "...",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/107FWOFYGK23G0NR_lcfoBfqyWMcZcDQe/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Master Shadoooow!!!",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1t_QyiowletlgKXeVFhZGQX2RPVfZIThW/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Shadow's magic is...in that...gigantic lump. It's as if it's been swallowed up\u2014",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/16adGVXlRMyeP7iE_BQSdu_fs858rM54m/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "That's one of its abilities.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1dAx2qWFc1QBlDenbGhN6HJWePRKzebEE/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Who are you?",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1CdtWwa3dcuhl12ZHTB3Fv_STRJc9V1wW/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "There's no time for introductions. It can absorb its opponent's magic and turn it into its own power.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1VnYskDxkDOtzFubG2U0u8wkcn0fXZ1Z2/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "It's already a formidable force, and now it's absorbed the magic of a man who matches it in strength...",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1Dl2AUD5RojHqF8FXyfxDjmq34BHYdgn-/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "What's everyone talking about? Boss man isn't dead. No way he loses to someone like that.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1RV_KjcDNV1xByk3OdvzlDAqO11WnvP-g/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Delta. I understand how you feel, but\u2014",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1wx8BRhpJlDIVClMtDv9TuViU4zxRIBbw/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Shut up! Boss man isn't dead!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1UikusRLWRkPCLt67k5XiRLlhR2Q3aQfC/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Boss man is in there...! I wanna fight with him! Grrraaahhh!!!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/18IfoJZNnwtVg9dkz2FntZAPcLbE8wPVW/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta?!",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1Z2HBBMOh-jLdSvi_RhVOXHnhGvMwT7Tw/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "We'll destroy it before it finishes absorbing all of Master Shadow's magic.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1r0Zo-aSKHSRr0qY3GDljqtIRQSjLEaJ8/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You too, Zeta...?!",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/19smTJtphb0pqQAQX6Y-ErXNFOciZ9DgZ/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Lady Alpha, I also... I absolutely cannot forgive this!!!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1hAzPlXhX8bEe0iUdZS8yuclvdkAbmt2q/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Beta?!",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1WsbVg0WXtxJ0stTW4I2jKbmWST42N1RS/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Master Shadow... Give us back Master Shadow!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1DF23ztCoavBk5v5jxxwu4tWwDimG6kJ0/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Lady Alpha, please don't stop us. I... I...! Excuse me...!",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1MSVIjZj2cRFqgGRK4CEUgE25QpYcsDBM/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Gamma... Eta, do you also intend to go?",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1UtX7-_2LusOAtIQLfBSfMSNDvYFOwPhq/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "It's hard to believe we can defeat the one who beat him...but...no one can stop us...",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/17hqOw-d24_RQ_S22W0kLJupTu4taBqOD/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Eta...",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/19aKZDURUR2HjLFEht6GdIvZPloymWlJl/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "I feel the same... All of us Seven Shadows do... right?",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1d-GlPXr87GDXD2hBfvcz80pLyH37gkj4/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Yes, we all feel the same. Let's go, Eta!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1C1Zb5hE65jhRLuY1ZpD4dUmsgMzJOjM3/view?usp=drivesdk"
                },
                {
                    "name": "Yukime",
                    "name_variant": "Yukime",
                    "subtitle": "Lady Alpha and the others' pain must be immense, considering how long they were with Mr. Shadow. Even I feel so much pain...",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/19z4vlKlsSunYPAtQCHqTZoJ7I6AlVI3H/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "No. 559",
                    "subtitle": "We can't back down...not here.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1IJPPV8VRkdqacfMUjifqB2olU_NakFMX/view?usp=drivesdk"
                },
                {
                    "name": "Yukime",
                    "name_variant": "Yukime",
                    "subtitle": "What?",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1AfDkV5-_J1IasQt2tIo1S5vgP1GOMoNq/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "No. 559",
                    "subtitle": "Even if my legs tremble...I must stand up...",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1uwrw1Ao_Cxn5dEWn6qZ3QbABvjYr_dLn/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "No. 559",
                    "subtitle": "I cannot allow myself to tremble in fear. As a member of the organization Master Shadow built...I will fight!",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1z7CqwzpMTaqlelnkTxCEUtkG7RQ_shZ3/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "No. 559",
                    "subtitle": "...Please wake up that unconscious woman over there. She may not look it, but she's a reliable fighter.",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1ZX41rDKmEkJQZQHxw_7pFiV6M0GEHfUu/view?usp=drivesdk"
                },
                {
                    "name": "Yukime",
                    "name_variant": "Yukime",
                    "subtitle": "Right, very well.",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/16AuQa3w-kcQIYd-gdg83We0nh5SBbeV-/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "No. 559",
                    "subtitle": "Let's fight a battle worthy of the Shadow Garden! Hyaaah!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1XoNP_LbDRo-8SRwPzNX7wjcunfHnbnE6/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Epsilon Look-alike",
                    "subtitle": "I don't know who you are, but now with our forces assembled, this is the perfect opportunity!",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1fsSGQl__FWKf3UqMX54iuKx6G6CuLAJF/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "Please wait, Pente! I have something to report!",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1QYAfZYw3SeBDlWUjq4mtxM6hS4o-MWmo/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "A vampire army is approaching us!",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1-jnT19mtsrq2TWG6SCr9OG08qZajifzT/view?usp=drivesdk"
                },
                {
                    "name": "Yukime",
                    "name_variant": "Yukime",
                    "subtitle": "A vampire army? What is going on?",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1P95Ykmmyg5LLRKnz78rltnthpvoQBN9m/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "Vampires are its underlings. They've sensed its powers increasing and are now on the move.",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1Q82OtDqEb4jXWd3W8M9GWwFaTN6EKGvt/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "They're coming to crush our resistance forces fighting under the banner of the Church... Let's fall back and regroup.",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/14xx0PQcgnX-Gs4aBD30gi0Bqn__yRVe9/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Alpha Look-alike",
                    "subtitle": "No, Freya, we mustn't fall back.",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1NP0sCKKRg779FQVLalhESCWpWfp5Wj8a/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "That's right. If we flee to a nearby city or fort, they'll pursue us there. And then they'll harm innocent people. We can't allow that... We strike here.",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/199UI97U5RzTTqTIfVJFvGqdAb4Bipffs/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "Please wait. Against both the ever-more powerful Diablos and the vampire army, we stand no chance of victory.",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1CNLnuhpSQ4BjuFe7Ua9eCCQylsJ0008T/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Alpha Look-alike",
                    "subtitle": "Whether there's a chance or not doesn't really interest me. If we're defeated, then that's that.",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1-zpj5Fu9UdWSDzC9602htzfRnuG36_fI/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "Olivier...",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1MmoSivIMv0vsIUcr7WEprrOZpunMm3nR/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "Let's fight. If we don't fight, the damage will be severe. We need to protect everyone!",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/172N6QrCVvsJjCJ4gZlsT_6CtHgS4_Rmk/view?usp=drivesdk"
                },
                {
                    "name": "Yukime",
                    "name_variant": "Yukime",
                    "subtitle": "I'll protect the girls who are unconscious. Don't worry about them and do what you need to do.",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1RijWG4Qf_R_bvNxte00n1TsnU1e5n9nw/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "I can see them. No wonder they're called an army. The sheer number of them... Let's go!",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1HwpF0hCZpu6xoXci80o4_Gl9-LFQxJ5d/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "*pant, pant, pant...*",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/10kU_Ca3K5heBbYfplrnlSdRWNNNbG8eY/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "*pant...pant...pant...*",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/127hGh-jVC4qxr-3WYGWlTKq4znNOanjl/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "Alpha breathes heavily. She lets out a dry laugh even as a single tear falls\u2014",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/19YK3qAXRL_0g7YDyQmgztk_dhjZ8TYGX/view?usp=drivesdk"
                },
                {
                    "name": "Diablos",
                    "name_variant": "Massive Mound of Magic",
                    "subtitle": "Can you hear the battle cries of the vampires? It seems they're finished as well.",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/15oU2_WxBNZxs65KkjoC3Ewdzymlhj0cj/view?usp=drivesdk"
                },
                {
                    "name": "Diablos",
                    "name_variant": "Massive Mound of Magic",
                    "subtitle": "They follow me without me even asking. It seems all species grovel before the mighty.",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/1EMpHjENyOykUeruOGbww-ghp3IUTgBOt/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Delta, Beta, Eta, Zeta, Epsilon, Gamma...)",
                    "line": 71,
                    "url": "https://drive.google.com/file/d/1iPMAQ2YzvIKNMvJ7Xo7n8LTzsUTbLOKL/view?usp=drivesdk"
                },
                {
                    "name": "Diablos",
                    "name_variant": "Massive Mound of Magic",
                    "subtitle": "Only you remain. You must be feeling despair and loneliness. But that, too, is about to end.",
                    "line": 72,
                    "url": "https://drive.google.com/file/d/1vDcLWJCgz_gsNOFXy5WLnYzvtsMn9-zx/view?usp=drivesdk"
                },
                {
                    "name": "Diablos",
                    "name_variant": "Massive Mound of Magic",
                    "subtitle": "I guess you can no longer hear me.",
                    "line": 73,
                    "url": "https://drive.google.com/file/d/1GwdmbQCvafron0lWxGn0mjlSA564WX3w/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(I didn't want them to be alone for their final moments...so I managed to see each of them off...)",
                    "line": 74,
                    "url": "https://drive.google.com/file/d/1l1aFsTINGWl_vHi_X1LSGftmZupMDbOr/view?usp=drivesdk"
                },
                {
                    "name": "Diablos",
                    "name_variant": "Massive Mound of Magic",
                    "subtitle": "Now turn into dust.",
                    "line": 75,
                    "url": "https://drive.google.com/file/d/1R1y2PW20mW77iBJZvjfB42bcWEvjzDuY/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Hey, Shadow...I did well, didn't I?",
                    "line": 76,
                    "url": "https://drive.google.com/file/d/1CrHkCSdub25hniwpjDz3DXnIRXIXBEun/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "The Massive Mound of Magic's attack hits Alpha directly, and her consciousness fades away.",
                    "line": 77,
                    "url": "https://drive.google.com/file/d/1h7ksvz_-lxMlyB9rGU2qicvNtTVsgHRj/view?usp=drivesdk"
                }
            ],
            "e3-2": [
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Boss man...? Where is Boss man?",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1hjru7cJitdV8JU1Hgw4J2IkMYDiKvvFZ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Huh...?)",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1VjPL-fF76K_FHwC9Zaqe2nnqZ6kL4Mgp/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "I-It can't be true, can it? He must be hiding somewhere!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/13jm9ClXlxwxowxqwrZDdOaXJji2RWyvt/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(What the...?)",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1YYR9q4tLXCE8jpr2hyk1obRKLoni82oG/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(What is going on...? We were defeated. We should have all died...)",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1sejoK3t_9t0EUmBZeCiyjHedV92UJUSD/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Master Shadow! Master Shadow?! Where are you?!",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1Fo2irEoLuTUTl1A8RaHYj1SB7DiroLT4/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...You've got to be kidding. Master Shadow, beaten by that guy...?",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/16Hw5zQG1J1KsAROsR9IjE-iBPuC5f2yg/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(This interaction already happened... Next, Eta should say\u2014)",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1qVg4mMRn-IMAw_y1LYM90lG2WH_YRKTv/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "There's no trace of him...",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1NPexq0KCQl9FY8PkJEDl8EvQdcCa5lmW/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Master Shadoooow!!!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1uLZVPGOt8tbj2Qgu9NwdXY8k4OcgDql-/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(The same things are happening again... What's going on? I know what will happen next.)",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1YB_Vtb7u2p_H4a99CNbOIW7m4AESdyvP/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Did I glimpse the future? Or\u2014)",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1EhDhR7QB44VI9ZGAD8MFw0uA1ZzvQDYq/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Did time reverse...?)",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1W4uWvhWsXaiA0VuhSIWRV4VONDpYKUNy/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "Unfortunately, he is dead.",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1vwkpCgg6KTx6EbjKxcEzmhaRiJUL7GK2/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "You...!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1_PRkXh_TaTRPm8JVWjZC5klzB194Gzbj/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "But there's no time for mourning. Time is of the essence. That thing possesses a terrifying ability.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1uDh6WGVg6KTvWYZY7ucM9Nkf2CbsFliN/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Yes, a truly troublesome ability.",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1h1fbvbT718dqIUqcOOy65wfR1Ca35uqy/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Who the heck are you?! You look like Lady Alpha!",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1idMBGASOBmSUBPEPuJrx728SiTv9jPhd/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Alpha...? No. I am Olivier.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/10kfcwfOxAWWSepZCDpwaaeqERIKVYuA2/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Olivier...? That name and your appearance...",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1FERX9GkJcWWdB5DPLY1qSn9sfwUD1nOE/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I-I can hardly believe it...",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1QZLbrm_ljgLMCe2KjiOo-ne7oPwtUOuu/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Is this person standing before us really...?",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1zxDvAUdsw39QxHgkfmVckPGMzKGS4K8y/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "Do you know Olivier?",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1inAJekjAtzFSf2czJplMwUZYG3aqgbEe/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Wait, are you...Lady Lili?",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/14E0EBXUV07JbQSn6TQ5SJNDiKmBOIVph/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "Huh? Have we met somewhere?",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1UpXmETlB-ZjczSoJXQfK1bpoEacXNuNe/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1PRhLHYrmTmY99YdOalYorXvuT3Qd7gM7/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "...",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1Nyl1S7EA-LE-hFjkB7hog43sw70NddbU/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "Save the talk for later. Now isn't the time.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1sDRl-cA2wHGPFK35uUQGiqh7rumGp_8h/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "It has the ability to absorb its opponent's magic and turn it into its own power... Right now, it's converting the vast amount of magic belonging to that man. We must defeat it\u2014",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1DYbi_Cn1Ew4HMFs91pP74gEGCa8SYMQ0/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "We must defeat Diablos.",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1wI0NsuIax_3uMQ0zHrTdJaxYnKGi4eju/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Diablos...?",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1vpLjAmNcJ60TenZpH5dpYzDa25MNZiNe/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Diablos, as in the demon Diablos...? Wasn't he supposed to have died a thousand years ago...?",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1jjfOspASWTeFgRqyyJHHqUS4l8G7prFH/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "N-No. Diablos has been leading the vampires in this world all this time...",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1L_ytj1R5MuuowxarBoh_G8b_bqBFZeF0/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Boss man can't die!",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1yz8UgHYpUcgABmast9IpqS7lJ0endabt/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta?",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1Qlp60jgmpvcjEIJUYXx_-ZVof6r3OQtS/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "These people are talking nonsense! Boss man isn't dead!",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1-4fqg3iylEzHoEzRcptwLwMgvpRMSLk1/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "U-Um, it may be hard to accept reality, but that man is\u2014",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1gONA3UOIexXAwjK90tJUYlNyKJMjCC-B/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Shut up! Boss man is stronger than that thing! Boss man can't lose!",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1LHqAdM_unIoWS3OXKqC-7NZbKoSnP9cf/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(This is bad... At this rate, Delta will rush off like last time\u2014)",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1ruSiHspmez90oRS2Vdaj9jTdqzXMOkHa/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta, calm down.",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1jstJjdUmAckzXNGyy0Kc_21ev00GNEX0/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Lady Alpha!",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1TKCJuNCiaap9YcKg1g5S9Buw3I1gl5Aq/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Everyone, please be rational. I know it's difficult, but we need to consider our situation.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1gpMVBLYEHEE0lrYAL9fSxX439YGJihSo/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "Shadow is dead.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1I_aX2grZz11pt0pfWJuKwUjVNZ7Bqc_H/view?usp=drivesdk"
                }
            ],
            "e4-1": [
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That is the reality. Please accept it.",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1S01w_yl8UWisYpQxBN0vbtfI_zcY-KMn/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "But...! How should I deal with this anger, this emptiness, this sorrow...?!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1Nc7nf-lxQne17KVZJ6t0Ne_zyDpkmZ9R/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Whether it truly is Diablos or not, the fact that it defeated Shadow indicates it's an incredibly strong foe. We will be decimated without proper intel and preparation.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1mSWmFh7pw_zZn5VSSBC7Sa0QALI5l7BC/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I feel the same as all of you. It's frustrating and painful... I want to rush out there too. But\u2014",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1dYFtgl52yJAR_-xeg9LYecIvqTs2-kpc/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Don't forget the purpose of the Shadow Garden that he created and what it is we're supposed to do! Put aside personal feelings for now!",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1Y45_ju4O_Mu6GWFBYodx12wSNcspe-Dn/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Urk... If you say so, Lady Alpha...",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1IMxBQMQveXP5LK0F51cyQYBoVvzzUMRN/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "We must uphold Master Shadow's will...right...?",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1eop7u-7-WbVWEAsFXAdFJ6Lj0E7zjIoT/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Everyone...",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1Rzy1hLVup1jEdyXZGux0n4E2MfQQkZPt/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Thank you for understanding. Our next steps are to\u2014",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1MaZTJNqamGkTn2FMyAQu84aZdExXCnWx/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Wrong! It's not true!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1Y62jUxhni9IVh0Og-p7KBSmM2QSiDtBn/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta...",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1GzVZ2b1TQVkW4cfRwWyOiRlVZkoofB1G/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Lady Alpha is lying!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1QyapI8G_aOIiOr8XEy0eGZyqf9lbX_6G/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Boss man isn't dead! He isn't dead!",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/14Y3IGKH_QqO5mVHNG_QkocY8I4gjObdR/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "All of you...you're acting weird! Do you actually think Boss man lost?! Weird! Wrong! Boss man isn't dead!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1lOh0n_czIFDFAvYbNCL5tCVSAjjuYGUL/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta...you must understand as well. Shadow is dead. Think about what we need to do now.",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1A_kcPsTLFYw77Dt62CfbHz75Vd9I10MN/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Wrong...wrong...! Because...Boss man is strong, amazing...and... Grrr...ugh...ughhh...aaahhh!!!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1F0ZfDhi_yDeDHzC_cm_Da4uZmUPmEBEQ/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrrrraaahhh!!!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/19doPlhHUGpbkIpQ79bxm-4_shkQxtlZH/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Delta? What's the matter?",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1ilBOrUnncPC9OGpY8Vebdpx_GI8ECMk3/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Sh-She's transformed... A-And her aura as well...",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1Rti-tMd7YJoG0gMMlPXI_5oSTXTh1oAV/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Graaaaahhh!",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1Z37kRH2U1E4wN_848ehcre6U9ghUDNzn/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Wha?! Stop, Delta!",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1fB3_RKdpTshMznqsqAgmx1fj6OcqQZHv/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "It's more than just her aura that's changed. It's like she's lost her mind. Now she's a...REALLY dumb dog.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1SKJehHJJs8w_r5SR-YNE1WjrXEu9JNnt/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "That's a lot of power... If she hits us, it could be lethal.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1YSUWbOqbNvpVMd05h9yyVJlPF_OJDcvu/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Graaarrrr!",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1lV6hVjT1_EER2sP0-vNBxsq6Vn-ce2Ge/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta!",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/11RPptZdic99WjjT6l16ZYy0x5Z9ta4rm/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Ack...!",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1g-7UZMGRdjhejUC5vqAdad2ARaBvX0q_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(What strength...! This is clearly not the Delta we're used to...)",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1bv75f4wOcPa1QMmqC498M-3F5JsRLHjy/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Graaarrrr!!!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1vjVzpcBIiBcNyBP2yRSMcW25UqePwUkh/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "Eeek!",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1HDqyC6WxVlBM1-QmGqFSKT1x_V_WNzlf/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(This is bad. She's attacking everything and everyone...)",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1q_ninB3YHNz_JpuYK0N2rxZ8YZ_q9EZn/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Lady Alpha, what should we do? We can't handle Delta in her current state!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1ucVzPkObfvBiK4gni7EIicSN7PVW4kpV/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "She can't hear us... What's happened to her?",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1qNFqeFZhIQQ4ZRZ8yYXHOhSOisR6jQnx/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(If things continue like this, that thing will finish absorbing Shadow's magic and start moving. Can we handle it and Delta as well?)",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1eQE7C8IhCL_N86Aumo0H-_ladFm-UzKU/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(No, that would be impossible. If we try, we'll end up with the same outcome. Then our only choice is to\u2014)",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1t2mHGoBrI0Ta1AzZbw39VPQ2vIm7aX9B/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Everyone, spread out and retreat. Those of you over there, help the others who can't move. We're falling back from the battle front!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1islxqHiQKri52cfRHm_-oiqUbKrVxmK2/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "Let's retreat as she says, That things' condition has changed. We need to formulate a plan.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1IoHVagukSDNPbUi5TQMW3QcTZJ55zNDu/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "...Very well.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1XtNK_a3FFhpItCQ9W6s83uQA39IdDf26/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Where do we rendezvous?",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1Pde7pPbe90aKiyPixJfPGbEVg_-dBEJu/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "For now, let's head to our base.",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/182s3rTFyfkmaIAZJBil6n7juAkaC_QiC/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "Sounds good. Just follow after one of us.",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/11OuLb0dRsRwGrt3b1_msxhr-6VtkuxKm/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Let's go with that. Everyone, make sure you get there alive. That's an order.",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/175BaGuxcO5W9sTQmoLHueAtlpKCfOjmu/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Understood. We will carry out your orders.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1VyzfNfJfvcoWxOvoe2_zqleCqQ_F562I/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...Hey.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/10qLW39rMYgwry940_FXDafAUIpxuav8W/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "What?",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1pMfl6rMZPOfMI7mP5fF7UvEB3AEMVhP9/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "You're not thinking of doing anything strange, are you?",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1MFJ7B50E750Gu2UrSzcYRsW_IJtrdxdk/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Of course not. What an odd thing to say.",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/11cjDqXa_zWU0CkT5g4y373Pj5ZIfiR-i/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(I will\u2014)",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1XAQ7g8DL0nJc5sMWt62bFPjzmx5uTYsU/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "None (Alpha)",
                    "subtitle": "Chase after Delta.",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1CIIxpWUeIjDu4YN2VL5BFrS58Ya0S1uP/view?usp=drivesdk"
                },
                                {
                    "name": "Alpha",
                    "name_variant": "None (Alpha)",
                    "subtitle": "Head to the base.",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/198dP96jG77GiqeM2fsg3lGP7Jq3Pgl-w/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "There's no time. Everyone, let's hurry up and get moving.",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/14emWvpBSo6d7dNvDo3QoB8d5TNhvVg-m/view?usp=drivesdk"
                }
            ],
            "e5-1": [
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "*huff, huff*",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1QT5emlgCR8TUC_aalkS0m6Oe-rNEh192/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Let's take a break for a moment. You were down until just now, so you probably can't move well.",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/18AEEqzIlat6pClTpE9iSZ7ZNTiBm4Hqn/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "You don't need to worry about me. Let's keep going.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/14tZ_cW9iJeOg3bDEzThQcBQ93X20pKKA/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Worry? It's inefficient to keep moving while fatigued. That's why I'm suggesting it.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/18xOt5FL71_ZavVbnSvlN2NQ4OYFaSE1S/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "There's no sign of the enemy in the vicinity.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1thI8d4n99gN2LrOXWncne7kvku4SvtyX/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Then let's take this opportunity to regroup and share information.",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1vWWc14bSm9uF-biN9yPWdpflXBeTxFcr/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Hold on. Why are you trying to take charge, Beta?",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1NiaVh-CdqNzqfVBg9_uxsytFR9Ev-sm6/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "I'm not trying to take charge. Even in this situation...you're still finding fault with me... I was just making a suggestion.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/195A4kacAQ-ey8Me2qKO9PiMIrDIg_oZH/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Stop it, both of you.",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1riY3iM4Bgho_zpbGWcbWuy9oopueywOG/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta & Epsilon (Beta)",
                    "subtitle": "Yes, ma'am...",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1mL52f4tgQ76Puu6VhYx2A057HqxoYlKm/view?usp=drivesdk"
                },
                                {
                    "name": "Epsilon",
                    "name_variant": "Beta & Epsilon (Epsilon)",
                    "subtitle": "Yes, ma'am...",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1mL52f4tgQ76Puu6VhYx2A057HqxoYlKm/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "I never imagined I'd be working alongside the Shadow Garden...",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1Vr3imc25iXApb8lFYTL4jdEj5dZlTAAI/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "Shadow Garden? Is that the name of your organization?",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1UHU_m5rV9echuUlY42r6XmKI6r4svhUR/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "Was that boy...a part of your organization?",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1ZTTd2KW3J3r3GiVXuhfYEPVg5awjVmhj/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "No, he's not. He's just...Cid. An ordinary boy. Nothing special about him.",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1ugbpwaz1zDhMrSB9EDfKEXC3j1s2vvmk/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "I see... If Diablos hadn't targeted him, I would have rushed in myself and been wiped out.",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1Rrrg_8L1Ct780eTLVCzqoGcOr-DQm-st/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "All because I lacked power...",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1kA-Xvup4nIUhgegX_IcPhCH1An9KaXy4/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "Don't blame yourself. It hurts me too to see you suffer... Let's mourn him together. I'll grieve his death with you.",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1I8MFWrKVhuyucuPeLyqMuRCiiwzYxVur/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...This kind of irks me.",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1or5MqHW9xBhK3IFe9nRMQmGN8gwepbWF/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "So, are you people not part of the Shadow Garden? Who exactly are you, then?",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1AwsUxJmibQnOaQkRHqoG8V7_nBZcCljB/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Who are you people? I've never heard of the Shadow Garden.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1k0DpHn4zmC34p7xIsQldjrDqRfe1bHMh/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Perhaps a brief introduction is in order. I am Alpha of the Shadow Garden.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1SyZ7fFPTzVTlBkyA8hXZ943XQW3KLwMK/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Starting from this end, this is Beta, Epsilon, and Eta.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1sSweN2Qi4VtaFX8ZA1zvs-lJt45VFhL2/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "I am Alexia Mid...no, of the Crimson Order.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1pSabRA9C3kGn-hD8tOLeaSm2YpGObxEg/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "My name is Olivier. These are my companions, Duet and Pente.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1TfpTXJKEsEEqM89a8Fzxgx-Mn2Dvvdza/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Lady Alpha...I know this might sound absurd, but may I speak?",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1lY8msP9uperPplZ6LXxTVhRpfVwDFbJP/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "What you're thinking is probably the same as what I've been considering. I thought so the moment I saw them.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1pOsP_a_prmIl-_aoeSW3NRaIdTpEOFL-/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "The elf who calls herself Olivier and that Massive Mound of Magic known as Diablos\u2014",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1GyJfPrTWeWRGmYdJ2TROrX8oj6EXGebo/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Could we be...roughly 1000 years in the past?",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1n59mFDO0qso85XOJd9Zf3JmYL3gp4GK2/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "That's a possibility. If the enemy's true identity is the demon Diablos, then its strength makes sense...though I'd hate to admit it.",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/19diklw2af5t7ddq5U0B-PnDTKZigtQaL/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "Olivier, did you understand what they were just discussing?",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1PrpHbObUUYOI5Ejf0NnQ8ypL78TlOwmL/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "No, not at all.",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1K0fBTDCgs1TilxGB9ilwASYeEM2Gt4c7/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "It's strange, isn't it? Both what they're discussing and their appearances...",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1duwO1eO-Y3RK87fZx273vB9c-RbvD3Uv/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Wait. What are you talking about? I can't understand any of this.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1DlNhnWBcqX_rS_Rihu7z1BUNw2LhW0Lu/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The lack of understanding is mutual. And there's another phenomenon I can't explain.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1CU0EyEWwqpgvceklSAQGkKSsegKSCgNU/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "What phenomenon?",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1Cmvw-0kdY6bsKz6IDaf88FoWxxYMEruD/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Well, it may sound absurd, but I'll be frank.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1blUb3iqHuV7yaHYoZAJiF0MASwZPDie5/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "My time has been rewound.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1XwDTNkHfwwvEFkOTUJsgwMQXb0AY72lF/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "Time...rewound...?!",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1h6cK_ZGq2078Ean06vzOBTISf65xsvxO/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Yes... Let's call it a timeline. In the first timeline, everyone present was killed by Diablos and the vampire army.",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1kj3E0ZfbpOI44J3a9r7gfG000LYbMivL/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Vampire army...?",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1LKLLCKt4_XYG3htZ70wf9GJHUKWwCiXY/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Diablos' reinforcements. I was the last one standing before I was also killed at the hands of Diablos.",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1Qs4Zuzt_joXRs1do1DeHAH3NRyuuQZP7/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "But the next moment, I was back at the moment Cid died, and everyone started repeating the same words from the first timeline.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1niJXG1YtPc6mlva5Z6YjZnLMtvaGnkBJ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Knowing we would end up following the same timeline...I intercepted and announced we should retreat.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1sEmHJ4aqZu8lqvB-WaXN23iKWCG5PAOn/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "I thought it was a bit strange. You seemed to be the only one who was calm...",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1ogN0Lch1Jyjs9-A-J5ZaaLf-z-f_Hifm/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Do you believe me?",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1-gAkrmM7Nss2KmxnbZzrVpxCNlCKT2yy/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Of course. I trust what you say, Lady Alpha.",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1Sb0h7cw97JcBFqyBsyMKTf4QpIQxh0WS/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...It adds up...",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1lIXDnpFhi_2ZTvJa9_e6AVDgMAvmp6vg/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Eta? What adds up?",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/12qN1RvLERFaP1R73TA41WnNbXKvn6I3V/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...I've read documentation...about an artifact...that can reverse time...",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1PK47HuS8OV-luorarvgCl-huU2IEptb_/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "What?! There's such a thing?!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1j63yOkq5Cyzr28rQqZmxm8uxvw2T2Yd_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Eta. Would it happen to be shaped like a pocket watch?",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/12GUyMJomct7FKw666rVaM54_bXO9Hwh6/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Yes. A mysterious pocket watch.",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1zjD8o7FyasGtmDasCCCBa62kIBGl9tFR/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I knew it...",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1KFKUIOR5EfmeJeFmd-YbxaWG2bJXgZCv/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Do you know something about it?",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/14_s_iDq1tWDiJ-fyBRyqvATncHbjIA-1/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Yes. Before being thrown into this world, I was hunting down Shadow and some bandits...",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1ilIbsccvS9WR3ukGXBtggeoejEQpfNA0/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "A First Child was in among the bandits, and the artifact I found seemed to be in his possession.",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/17uREPt3nVzAUulvJfNiCYHKD29MxQ7kW/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Shadow infused magic into the artifact, and the next thing I knew, we were in this world.",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1joDeEZJ54Z_oBpwZXzs5N5wwWtHUrhNC/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "S-So, that's what happened...",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1Z9QvFKsUU_lwBhCFYE-QyKONWa2TntF9/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...It's called the Irreversible Pocket Watch. It sets a save point at any chosen location, and the holder can time leap back to that point.",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/19nRQuXg10gcW3QB6ch-t_onUtWyHlkNp/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Time leap... but I'm not the holder of the artifact. Why do I remember the previous timeline?",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1SMvPTJqImk-evVMTBN-e5Ll8NFqXvg04/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Only the holder and one other individual can retain memories... How the second individual is chosen is unclear...",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1_gy2Q8zb0W-dCDWTQvS0ameXPe2g6ljX/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "But if Lady Alpha is not the holder, and she still has her memories, then...",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1_a0Glr4A4C9InY-AhxmqenEHO4o4Dds1/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "The Irreversible Pocket Watch must have been activated by...someone close by.",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1bjsScGPAuQCTVjio9NpYHlfrAUf7FTge/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "There were us, the Seven Shadows, and No. 559\u2014",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1nuql3V4-D2-13-K7B5pcdhhg3aswzRtY/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "Myself, Claire, Princess Rose, Yukime, and these girls.",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1SYXEZNrU7l4gfahhwkzU15vm6SMBZXu-/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "There were ten of us there, including me.",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1fyxrJjZoUZvkYqdhnsVUf17LRTsnfPeO/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Twenty-two individuals...",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1qwTzYmLj4A6ewzBIanuhJ6-CoyRcKyAT/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "At least. There might have been someone hiding their presence.",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1Gx4el9Ki5DH0lseKR84YUErSaygL7HlQ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It will be difficult to identify the holder at this stage.",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/1-XnH-r8s-vGqw2EZ6EreB64ww2aejHQg/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Is the Irreversible Pocket Watch and the artifact that transported us 1000 years into the past the same?",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/1GDp7fYxsDtExpxCLIux9BY2hgfftNULQ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Eta, what do you think?",
                    "line": 71,
                    "url": "https://drive.google.com/file/d/14ecpHOMsZTJtcaq6rReJx20mi_ZWr_FB/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Artifacts are mysterious... but time-manipulating artifacts are powerful and rare... It's unlikely that there are two at the same time...",
                    "line": 72,
                    "url": "https://drive.google.com/file/d/1YYpFBXYfkap_-UShu1LBEKClWN39fd3_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That makes sense... Then let's first focus on the Irreversible Pocket Watch.",
                    "line": 73,
                    "url": "https://drive.google.com/file/d/1wC4zufxuxBoYict1l8uKDWpTGYyzWG3E/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "If we use the Irreversible Pocket Watch...we can return to a time before there were any casualties...before Master died...",
                    "line": 74,
                    "url": "https://drive.google.com/file/d/10hgUqLoM8hO44A-3312ap4bfgFHRS4U7/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Even death can be undone... Isn't that right, Lady Alpha?",
                    "line": 75,
                    "url": "https://drive.google.com/file/d/1sD5X8ALvw3UHWRHcjZWFzaBAKH9DwHRz/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Yes. We were supposed to have died, but we are alive again.",
                    "line": 76,
                    "url": "https://drive.google.com/file/d/11rtrmb9Gs8wKz_fd_0k3GIza7xbzIaQv/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "Wait a minute. Before Shadow died...? Wh-What does that mean?",
                    "line": 77,
                    "url": "https://drive.google.com/file/d/1UGcNyl5n5DT-IwURi0njOtg9xin2aA9m/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(...Right, so she doesn't know that Cid is Shadow.)",
                    "line": 78,
                    "url": "https://drive.google.com/file/d/1ez0x0qnsrB7IGNkJEbCnaEV2BwMD-S-n/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(It will be difficult to keep this a secret as we continue working together.)",
                    "line": 79,
                    "url": "https://drive.google.com/file/d/1OiuJvJUzTN1qi65Kk3krXbVBCYjRd8S2/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(But it was his will to keep his identity hidden. We can't divulge his secret.)",
                    "line": 80,
                    "url": "https://drive.google.com/file/d/1o3QcVZWT40ggvUaAGpCfaZ_UBUcJCgYz/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(In that case...)",
                    "line": 81,
                    "url": "https://drive.google.com/file/d/1YQaINz70_n6LfDc3gAsIF9lsLKc5nYfO/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Yes. He was also defeated by Diablos.",
                    "line": 82,
                    "url": "https://drive.google.com/file/d/1RmBF9JNllHhYNAgqTFZGr2PCzeTyE7gX/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "*gasp*",
                    "line": 83,
                    "url": "https://drive.google.com/file/d/1R7A2o7TOfvcpWV3uNFdN-uwuAiuy2fgy/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That boy was taken down immediately after, without any chance to resist.",
                    "line": 84,
                    "url": "https://drive.google.com/file/d/1d6_LxQ5bdY-31dY_LWoZlI4N5HUqFQLg/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "N-No way... Shadow was defeated...?",
                    "line": 85,
                    "url": "https://drive.google.com/file/d/1Ok9cWXnq9BOSOCF36H24pCKY-2MWx2Ex/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(This could work. By reversing time, we can save Shadow, and they can save Cid. Our goals align.)",
                    "line": 86,
                    "url": "https://drive.google.com/file/d/1yMEajuQltMP5l0pu2QBhbCZDERh-UEtH/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(That said...)",
                    "line": 87,
                    "url": "https://drive.google.com/file/d/1LOvmiTrerLBfnjt-0MyoFLpLM-gcgvJJ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The artifact holder... What were they thinking, calling us to this era?",
                    "line": 88,
                    "url": "https://drive.google.com/file/d/1_jeGhY6pI2qQORm46uIkpNFI9rg53wOi/view?usp=drivesdk"
                }
            ],
            "e5-2": [
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We don't have time. Everyone, move quickly.",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/19IdK4TQcNqCYvp84PcPDXJsKcpif3zf-/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Understood!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1JhL_djWpSkkqOKm3NSOzcluCyi9LtbV4/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Come out.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1ipu_wLBCMWfBJzFJEuirnPLFzRu2H0Iu/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1E_Q6Gqp_BimuxRFUkRCWOpd81c0DK1Ha/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Are you hiding and waiting for an opportunity? You underestimate me.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1fHN2fUME61EYO-w_kHva2yMquQoY7m6i/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You're not targeting the local wildlife, but me... Alpha.",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1hvT2tbBtTWXYmi-0LRLn9TMrUteeJBwD/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrr...",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1B0jsBmhHjqU6Yef6wWWcu2PtLdWTmYeR/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta...I realize that we can't converse in your current state.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1TzfsN6vERKTIcBVcd32ONO9MZaZum2L1/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "So\u2014",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1u2b_jrGyUVCAVFSXdo3pBKEtf0smbm9G/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrrrraaahhh!!!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1SgzSU5i5tay4TToyHbc6Gf_gAn1iI9Mj/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Hyah!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1k6LVqNDqhZLOqZ6KY7lBEPdJTUxDr-Fs/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I'll stop you by force!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/14iHGPFrWJI8crbAchHcN2WmOBtfYJ8Mv/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I won't let you hurt our allies anymore...and I won't lose you either!",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1A2cFkxteiBySUDUu7zCnNVVXZk2vop-o/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Graaarrrr!!!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1C2vmAC2avvA-BvlMsupTR_bLdrCS66z9/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "*pant, pant, pant...*",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1mdJIBNMYx9TpoTUUUV3dsg1C2hUeO4j5/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrrr...",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1tqK_FvgPTiiu3lC7r9LeQFPbWkGsHXXH/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Ack... There's a limit even to brute strength... I'll show you, Delta...!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1_hJARmL358KuY5QVu6OINz8oqowfuhv2/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrr...huh?",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/10KCcyXdg-0vbVZzQ1_Hbx1GCbTBcNGgq/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(She's stopped moving?)",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1jIBYAiG0ZnRk0kFQrrfiAVw28sbnVlkD/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "...Grrr...",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1kLJ2pqMBxWkXr7VuUsF_g6dIZlJxf4Dd/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "*gasp* This presence\u2014",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1Y-mZsBvJB_zS7Xwr-l2-iBolX1JIBKPm/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The army of vampires...?!",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/12wEnpuCbtMgItWX-OAgUiu7vmUgF4yaS/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrrrraaahhh!!!",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1o6Y8k8U32REoMOiYdX4GqfXc_147JgGN/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "No, Delta!! Ah...gahh...!",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1nt2OcHaXyV3lNzKNZIRCEAZVP29wjz-0/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Blood...My internal organs are also damaged... Delta's must be as well...)",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1at227tPtbXNBv41wXpSEvVCwDcmYi-x2/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You intend to fight the army of vampires with that body...?",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/14Z6vPJ55aQpXYP80YOpxLgTBTVOk9sRg/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...If you fight, then I'll fight too. No matter the outcome, I won't abandon you, Delta.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1-1YpfD2q2eAf_eNS91p1-tCu8MX9v0RV/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I've made that decision.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1c7c_xM0aVrP-jXwApA6r5Bmkd9Z4g4s1/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "With her battered body, Alpha heads to the battlefield. Together with the rampaging Delta, she attacks the vampires, but\u2014",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1G22Ir83BLYykEdAdanxbHY10_ohXY_RG/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "Their bodies have already reached their limits. They are overwhelmed by the advancing army of vampires and perish\u2014",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1ta1sCrLC7TN_Nknq9CVPUaKy70CofcvY/view?usp=drivesdk"
                }
            ],
            "e6": [
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Past this forest, there's a small town. It's not large, but you can get by there.",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1kse_VWuXEj5h8GG45OVvsbTexA08slEE/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Normally, the presence of outsiders wouldn't raise any eyebrows...but I can't say for certain with our numbers.",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1q6WqH2XY45yjlsqNTP1f9rr5c76vpkVn/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1619JMfXrgXXNwYRBnjNEWbD8DhK5mhUf/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "...",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1NB2HauBwkQ1vURO_uDFgPmUU7iEYZ8Cc/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "The mood is...heavy...",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1cEvW2BRxcX9CMaSh0pWP2XnP6LTNgbOb/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Lady Alpha...um...oh, by the way!",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1k2OFgIkrC-MUCdfc_ecVs5NNmOGkt2y4/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Don't you think she and I look alike?",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/12k591IzcqxMqD5gnuu3RJl1iO_2WM2q5/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "Huh? Me?",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1xGIGnflDORKg1cpU76IAlvOITWtD3XnX/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "And her over there\u2014",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1CU7M7W4nZcKxt9tFmgi0Z3F_ps8C3ngG/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "I seem to resemble this girl, don't I?",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1sa9f0cR9LcVi8fVj6RseDyk4-NT-fpc6/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1fMg_DjuXHpzDaf8-vgXuQGywJAy4TtUo/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "Um...any complaints...?",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1G5VTde_cR-5_472ujScR4HbhqvNsNfOi/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1cgVMPETZnenoXCXwPAs3yRmZ6kASg4Zt/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "Huh? Huh?! Why are you coming closer\u2014",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1izMaxw6wOfXVYRYx3dPsIwfYdOUb2TVs/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "I'm just checking...these!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1YDDHqkeK4TOC4xkVShQ7n89IfYjrp8nK/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "Eeek?!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1ZZNVKtsN4Ao34ofBe8KPOOg_q7xHAczj/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "What the\u2014?!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1SIHb2kxqplYt13nzBx2FyVso2kpr0c9b/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Y-Your breasts...!",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1OQfjkaZkPe8ANdldo6CPe16WFG370938/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "Huh, wait, get away from her!",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/14k_bwSVSEyKKpJBCNSS-bUNFXJaF1kzZ/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "A-Are you alright?",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1ukxDx1hKDpKPeWgmvHx-4onipybhC1xJ/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "Unh... To be treated so roughly by someone I just met...",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/19oKL-vyMjJlGKPq6i5LiG_kfLXtP-3vH/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "I knew it... So, that's how it is...",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1-MnQ4vuv7KA2us0thGuondxLP0UPqKdM/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "Hey, you! You can't just suddenly start fondling someone's breasts like that! What're you thinking?!",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/153T-t4Oh3mMtavIiGYK-IlK3sZihjqlV/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...Why...is it...",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1l6tWWDBFLHHgw3yji76uOtVtUaHNBxJy/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "that only our faces are similar...!",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1wXZvycTJD51KWQg-1rB9rbAlWZHdt2TW/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "You mean you don't look alike? I don't really get it. Is there some part of you that isn't similar?",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1nznDhAIBr3QrMDaZubtVeAWEWRXmSg_H/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "As far as I can tell, you look exactly alike, just like us two.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1vOt1lWTAZem8MA8eR4fWYG7yvta-dQzD/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "What did you say?!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1YEMiAU-Hb9sMkA52orhxvOkW3XpWQuMd/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Huh?! Why are you getting angry all of a sudden?!",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1y6dOYqvsAE6_1g-eYVcFpYKQ6Blq_lme/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Because you don't understand anything! I didn't want just our faces to be similar!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1TkWXKmHF_XUlgmj9VKb6P6ROaDcP3dXJ/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Huh? I don't understand what you mean. Why are you so upset all of a sudden?",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1ZBlKz0zDA7tQuSI-ceuqSNVmxPSJK6Wc/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Ugh... Pipe down...",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/19hyrGRRBYVdnCgoIYCATNtQJy81nxNV3/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "I don't really understand, but fighting is not good.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1qDjPK5LqeB5lKrtyJrjNImlKQnjwSL5b/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "This has nothing to do with you.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1FgFErm27-u2-eyrwq2pPCLhRda8IcHcR/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Well, true. But it feels strange to see a fight between two with such similar faces.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1urh352Svt0KH5NLlIWmL3Y_3rXFsgseL/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "The behavior I'm used to seeing is...",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1u0CCWNUKjl0ilfGyrhJhAHYzQZ8wnguc/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "I was just so shocked to be treated like that. Guess I'm overreacting...",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1sRPqCR3hB2o6yaKTUXmukzj6O0mt8pWS/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "Not at all. It's a totally natural reaction. I mean, what she did to you...",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1XKKnMIbD-b7SEKQ9dwp3AjzEVttvPim9/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "Not even you, as my close friend, have done to me...",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1Ea9vjv3nklVi4rG4liJK9z19lHML1MFO/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "...Yes. At least never that roughly...",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1jsS5OTJgpDNVM19LdmPI9RDrmtZkqWT_/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...Yeah, definitely irks me.",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1uXjui0kB19vtaHur1WBf3VKMITFqYZoe/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Seeing someone who looks like me be so intimate with someone who looks like you...somehow feels off.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1cVZEonCnr4mkKUnsCRRs3jWUsgqMFJsh/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "I feel the same. It also kind of irks me...or more like creeps me out...",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/12ofZNUP8ipOT57rARTITTDQJOBtPekkS/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "So, I guess they only look alike on the outside\u2014",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1pCXbOzz397xT4wWeL9-sUeUNkCEqBSbk/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Stop!",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1vgIgkyDw7o2pCAz3xXYI0sUGDdvuQxMA/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Hm?",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1D-mHlRxKpsqs6ogjTVMMSDH1IrKxBlYp/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "This presence... She's coming!",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1O0TttCpXVaZOheg_ANtSW1EIziiGosgY/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "Huh? Who's coming\u2014",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1DiXwdHZXIXoXsOqN3bGOgtRGx6PNiBuo/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrrrraaahhh!!!",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1tYsRIoz7J90MC1nO-WDH5eva9Xti38gY/view?usp=drivesdk"
                }
            ],
            "e7": [
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "Gah?!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/18Pp0aFXHcBeXAOE5scXVEGTlu0j9AMq4/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Princess Alexia...!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1s5kMLNJicCJy0XEtYArtXjXRtuasKvsk/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "Ugh...hyuk...gg...ah...",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1sD8RheZuOyP3wP9UxhHEylDTIf3tR33P/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrr... One down...",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1xS9S1tSrZlVVPmNiY970ttDbhv5n2qb7/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Next is...youuuu!!!",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1aB_rPHFw-aEzvPhcRRYnO2AagVVfWmFM/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "Ugh?! Ack... What a heavy blow...!",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1MSH1zhxHg4Pfw6CL97XAzdpuKk5SzBAl/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "Stay back!",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/11NPzAMRPw2tSE6pLePguJRjR_8NITEeF/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "It didn't land...?!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1ShfQbTLTbEhUUBBMnqVEedNUrCWXW1iq/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Graaarrr!!!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1VpG-rBdg_-gPdR0OAer7d6RTuo3ioGvw/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "What?!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1FsHO8sfo3qBghvmdL_IltLj7qxQB1K6-/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Agh...! She's attacking without even looking this way...!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1V5Q05DlILR_Sf4jpBhEFc8D15H6gomkk/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...No preparatory moves... She just attacked... Delta's sharper...than she used to be.",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1szgTYu6FQEu7OQo1hcBhWHIGJVFWdSuM/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Have her animal instincts been honed?",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1xyAabA-NJyHwi3tEWBeJWtDxr_YC_rF4/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Graaarrrr!!!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1N3kEBMZmnbCzGWWg0yb_i9wNEtEO-n7C/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "You're my prey...!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1iMeYc5F6RDQy9LLum4C7VgN00Pmp380t/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Delta! Stop! Why are you doing this?!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1qtRe40YQXBmIZBjOz7D8x-Rqgcc82Zns/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Graarrrr! Shut up!!! I'm stronger than you! Don't order me around!!!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1EuGHucYoq--YXV6K43LdY_4Fy7pGBkEV/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "The weak die. The strong kill. That's it! That's all there is to it!",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1jB0LbPqXXOUdcfUWCvdy1FXKU705R9au/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It seems there's no reasoning with her. We have to take her down. We'll subdue her by tying her up.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1aStB-rmV3nRYYWQzCo4MsseCx8oYFeMZ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Easier said than done...)",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1Lau6atby0bV__MiKitPdNMzUh_N7NtJY/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrrrraaahhh!!!",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1qjShP_36P-8AoIwekbmshhrihSifNRSY/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(She's powered up even more, maybe even more than me\u2014)",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1yo27KShoAw-m-P3cgySGqARJH2J7bP-T/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Graaa...aaaghhh!!!",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1KTn9eZStjnPteBRz0ZICa4d-p244r0it/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Ugh... Delta...why...?",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1-hgXXg8JT7f6uNBcdDN_dqrl5Fa5wAjD/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrraaaahhh!!! Just...two more...",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1yNsob8igjqVxqp3dN5KR2MeA4HV0UEj4/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I'll kill everyone! If I kill everyone, then I'm the best! If I'm the best, then Boss man will praise me!",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/118Y7Jp8Qp92mSCe-sJO3TLI4Zt6EzJ8M/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I'll kill you! Kill you! Kill you! Kill you! Kill you! Kill you! Kill you! Kill you! Graaaaaaghhh!!!",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1ID4r3NC0iEmryCOHFQY2irJOiRYa8nMN/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Ack... Such endless stamina...",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1AAmV0AawdvyOcj49DYbwd9ORO9RwP4sW/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...She's even taken out Beta...",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/15On2v-RErt4hP4OWJKBoWx593GDo1sQ_/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Five seconds.",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/17vPmI2-Eq3TVa29OIL1Jnomgz1p3rvCh/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "What?",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1v-Lx9tPeCuNyv5EBRkDHAPtHWeWdH2QX/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "That's all the time I can buy you.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1dzgUwNK10HAxmdc-Giplm1iB6hCbMouN/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Wait, what do you mean\u2014",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1WJbVZEvS_sIi0-IMljBeri66cTEwwP_J/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Graaarrrr!!!",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/13RrBti7Ek0CKjuTvIUNBCwOhLnGb3bju/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Nghh!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/16EfL_9ivbf0FTNKlhaukE13ejOEbJ1Li/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(A desperate last-ditch attack...!)",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1baDWtksVrVM_OJj3OB37HALBXaDu-wh7/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Now! Do it!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1dIHgSSIJaviRDJOTYIVx_zCv4LI4cso4/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "Kill Delta.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/17_gtbd8DQKQCZjS5_hFv9V3iUgHcdhf1/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "Let Delta live.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/19hljL637r4aThK3Cjn36xfL35cbAoLlW/view?usp=drivesdk"
                }
            ],
            "e8-1": [
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Is this really the only way...?)",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1p_uEKSEgwA1nYDpy4ZlJCmRe1U1DnDK5/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Maybe if I gave it more thought, I could find a way to save Delta\u2014)",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1YWuqv1wCJ_g0jmh_7sZrie3YqCjJFHrS/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Graaarrrr!!!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1NQZjP58IKHsXQF3Pi-w7RZe_q3_xdvEI/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Delta... You're like a real beast now. You're not even aware of your own comrades you've hurt...)",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1MaBZKAYWr6UOMT04AhTmNXoJaEoMRJUA/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Aaaaagh! Kill! Graaarrrr!!! Die! Graaaagh!!!",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1cF_lS1VqBrqA4YXv4PZWkCkAHouBQUjp/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(I'm sure you wouldn't want to go on living like this, where you have to resort to killing your friends...not that it's fair for me to use that as an excuse.)",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1EPHDuy7yb56Q5DIkZ0NOoQ1OxSExWJit/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(This is my decision, my judgment, my will\u2014)",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/10nNjzA0WkQ8FEvEAFwH4EU050WNocwoO/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I'm sorry, Delta.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1Byga7u3IVWUtzgZI1oBt86-wEin4uBlc/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Agh...?!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/14LDIR3wU4DXWgPmmRAWUUjqO-8Ch9avM/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Ugh... Yes, well done...",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1dRpsBtTWgaLA51fnpkbHOact_lShzz5v/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "...As for me...I've reached...my limit...",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1I9GqlaLvKaGMq_HpEUxygBPLpp_edq8k/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grr...gh...hh...",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/14ChqQNqy48zu5uMB6KIXQDq4JJbTKlnO/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Lady...Al...pha...",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/16mB2FIbLJv55i-6L7jXDFBjDPytzeprz/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta...? You're yourself again...",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1VfIj2NtKjrC5P7OgMNl1iaYmhtVA-C8m/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "...I'm...so...rry...",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1DJ6whcpBpjWIZEQyhMlSgIQ4Khrn3HOt/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "But...Boss man...won't...lose...to...that...thing...",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/120i47Y_ui_K4VFbvrWBgDqRZic0Ocuu5/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Lady Alpha...why won't...you believe me...",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1fsjlwmzb6h-xHlDmWaXPTQetjvG5mWQa/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta...?",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1nvpX-2PCxJQ-PMQuA4pjQcdTXhG_HfoU/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Yes...you're right...",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/105mwtxUpKSDfF56mq_ClV2DrFkr8Jlb5/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta...you...believed in him...that Shadow is stronger than Diablos...",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/14b8Op9CcNw-wUAEnXIWELv7qo8VvHRvW/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "But I denied you...that trust. And you also trust in me, so you were confused...",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1PzBHOGxgzgKhn5j3yYMCfVqhDUiyx8OX/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Having someone you trust affirm something you believe to be impossible... I didn't realize how cruel that was, that I had broken your heart...",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1a7Pu4Zzl404eKF9DE-hUjJnDjPiBaRra/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It was my...judgment, that was wrong... Because of that Eta, Epsilon, Beta, Delta...everyone...died...",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/197Q-MKawYYyfBp7kk1J-5Mfy8D0n8EOl/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Ack...aah...hahh... Aaaaaahhh!!!",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1IZBVNhxZZ_Yi5ma22c0zx_voQJso8EJQ/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "Alpha is struck with a sensation as if blood is boiling throughout her body. Amidst the pain and despair, magic overflows outward\u2014",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/10KFlTmCdMNS5jMZ4ciX_GfA-EzVJ1eK6/view?usp=drivesdk"
                }
            ],
            "e3-3": [
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Boss man...? Where is Boss man?",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1GDdnaGMn48q_h3o0VkY9PlARbC_tR4hR/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Huh...?)",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/10jiE1WfhBQYiq42ttoCcHWteSaC2nHPH/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "I-It can't be true, can it? He must be hiding somewhere!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1ROAzDUqk6HbAVV-E5mcf7YxxSaXtZFZs/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Master Shadow! Master Shadow?! Where are you?!",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1-F09m2XbFRZTahllmI7dKtIkNnSiv-U0/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Did I time leap again...?)",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1Qs9Jt-8ENIEHmem4ug74I0H_Odb8D4Ie/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...You've got to be kidding. Master Shadow, beaten by that guy...?",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1MIXcXqVvhFQyXQMx3GBHizA5l14YbIgj/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "There's no trace of him...",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1-Ycfcrrc4CeZv2aSirIPzfzuCSCtO4Ep/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Master Shadoooow!!!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1USyG1AqLRkS-_u8GLqCFUNLwfU8_kbj2/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Agh...ah...!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1hrbcVtn49IGtM9eSBclUiocVoRJ2SEXk/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Lady Alpha?!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1mRMfZztfmLk7cngztYfeNEhHU6u55z4w/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta...you're...alive...",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/11bKlxmqYp2g3XB-GK1ohKNxaRqznyNL9/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Ha-ruff?! Lady Alpha fell!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1AcRGCiPEwsS5aQ30HtUpwTv7zquArQkB/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "She must be shocked about Master Shadow... After all, Lady Alpha has been supporting him the longest...",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1MsMEpu582M22NpPzVjNuN0gpk0VH4lIG/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(We're back to before I had to kill Delta...)",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1EzYqrwKD80QG3b8AfE9nIOMKM9JD-um0/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Lady Alpha...oh-woof...it's okay! Boss man isn't gonna lose to him! He's just playing hide-and-seek!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1MgfD7eCzfm4cj9MPJkHtIZwS0a4E0aec/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Delta...",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1Tp7wHQoWvZRBpFuK4qG0PdGQiyF7TItU/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "The one who can't see reality is this dumb dog.",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1e1DIHy6mQOx5z80YjJrwlm5uCcM4dt6k/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "What'd you say?!",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1JJgGM2h0mcIpd_q0HLjMdj_yVFZQTORG/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "It's time you faced reality. I don't want to keep saying that he's dead.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1HOp8Pf5TmJuD2UOm3Uj8ye7QgO0tVLIa/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "This is no time for fighting or bemoaning. Time is of the essence. That thing has a terrifying ability.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/11rlFVPeVlpQBFPF03guS6R1zotG3GJ4d/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Yes, a truly troublesome ability.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1CDfUIFEgammweYlkkUeVLd1IevQS_Jdb/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Who the heck are you?! You look like Lady Alpha!",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/16thRu3LR8oLluy1PNNkl4jW2Q3QRxpye/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Alpha...? No. I am Olivier.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1q47FIGglWLVA3TtxP3xbG0We5TqMzHWl/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Is this really the time for introductions?",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1vriT3lpo0_D955c2-5XL9WxeiIcgXSMZ/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Hm? Oh, right.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/17CnL9V8Ap-ABK8RabH8I4gExdIo6rFDD/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "It has the ability to absorb its opponent's magic and turn it into its own power... Right now, it's converting the vast amount of magic belonging to that man. We must defeat it\u2014",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1_DlYbA1b3bdD29DvgDAOabAMI-zP7Zde/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "We must defeat Diablos.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1N5dyGg6OE_IBsIbGrFMkc4ufzSz0mL4t/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Diablos...?",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1CgeQSDGUa6aVoWmkd3n924nJkvxnNNM7/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Diablos, as in the demon Diablos...? Wasn't he supposed to have died a thousand years ago...?",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/11KFKbeEtkNWggAlISaDHLCMng8kQQQrp/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I don't understand... And the appearances of those girls, especially the one named Olivier...",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1SfLaQB2HGcLmrJrl_c59G9tlgIiKML1s/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Wait, as in that Olivier?",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1H1nRwmRgp7sGoxhS0WRTc7Sr6UoFRva7/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "Are these acquaintances of yours, Olivier?",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1gPQOkV8Xi9_BKGYo85Ij04fAyhy4dZ7J/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Hmm...no idea.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1lWqF8OXreZ_1opOn5oj0VuuZ9oLqFmnr/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "All of you! Stop saying weird things!",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1ezdNYx8AZCHAAb2MUkcDDNcVAnpNRnb-/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Boss man is alive! He didn't die!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1J61zPH33B97TkgZgABIf6XifVVIZTrG0/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta...",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1vj51_PQqf-eOlof8jZj-MCfyjW_n_Tq2/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "None (Alpha)",
                    "subtitle": "Shadow is dead.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1NOidtZPbT0NhNXncVCoYENopdRjiEW_i/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "None (Alpha)",
                    "subtitle": "Shadow is alive.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1KghVOuYRQVfBM8wAdzZgH3Fp2EdokURy/view?usp=drivesdk"
                }
            ],
            "e4-2": [
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(If I confront them with the fact that Shadow is dead, it might end up just like last time.)",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1lJBMMtyyXqwYSg2erzEjNnYdZK1AIS95/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(I don't understand why Delta ended up like that just because she was confused, but I'll do anything to prevent it.)",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1MluxpLPm820pUP_v9_XdvUnM6NzaUFHn/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Everyone, this way.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1P2cjTgBzSuaRLvR1o6Hi099j3rKD7hyf/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Y-Yes, ma'am...",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1IjKg7dt3CswakMrrX3AvY_dPH78uX5eJ/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Shadow is...alive?",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1NacGZIPW239PkBm5YBsQ2VOpLldQuxYq/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "I-Is that really true?",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1Z_cmGla90P0VqKn084eRxUtEFv4D6-gx/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Yes. More precisely, Shadow can be revived.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1cUBZ5dm0yMk1Y2Xf7k2PC9UjA8OJWUZ_/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Revived... Revived... Graaarf? But that means Boss man lost\u2014",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1ir-wKkz1w5N1nEJLg-7jL7raeOYa7fdx/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta.",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1o5fIyz5xoEduW3y6QN7BHUFnQRkVy55a/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Naturally, revival is part of Shadow's plan. A death that anticipates revival is not a defeat.",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1x2LE8ZXnM0otOVEWiEv8kyFj3X0Ovd-f/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "...Graaarf?",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/102g3qpdkAXBkhY3hnOMesxBz4ZfrLQM5/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It's not a loss because he will be revived. Do you understand?",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1esvfjTwou5NjnuinkeYwdKrJORnu9RrA/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Reviving means not losing...",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1t8lpp_WwaOfhzQj7icvahELA2EuXkm2Z/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Graaarf! I understand now!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1HAjP48E3n9H3QoNyB6cF4kI5B9PYlr4t/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I'm glad you understand. This matter is a secret just among us in the Shadow Garden, alright?",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1t2M0QIGDUMWllUXi3REhVKjvkSM1WdkC/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Yes! Boss man's not dead! He's not dead!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1eaOeuzT5-cw7_ztra-7t47H_5IZLipJE/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Does she really understand...?",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1ecquvrZrMuVfxIp1zJlGIHZKwAPDkckj/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "I don't want to doubt your judgment, but wasn't it a mistake to tell that dumb dog?",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1RlzLuVgkAZPjcJsOKH4PUBJNOIEdlTGd/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...No, it was the right move. Let's leave this place for now.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/19JuqSA8U1Aai8K52RHQ2xT6tVJf4-sUK/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You're retreating too, right?",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1pRhojZZP6SIG_Fh322wmxdmgLUuz9Q0C/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Hm?",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1C6Tov-elebIvQ5g6uB8Ex5AgLOZrsjrv/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Don't you sense it as well? An army of vampires is approaching. If we stay here, we'll be attacked.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/18JkGzXOha5n-y0Sc6YYzZ-T49lOl4eh7/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "A strengthened Diablos and a vampire army... Are you confident you can face both? I won't stop you, but we're withdrawing.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/194VNLnrPPWxe_6sBBYdHR6h5k_ssZ_SH/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(We were wiped out the first time. I won't make the same mistake.)",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/16YEmbeOIinektTmeU3ok47NRd3zGHvkM/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "...",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1epNVocU_pL-uIP8S8v6PYhR69s59BycM/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "Let's withdraw for now, Olivier. We can strategize first and strike after.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1Cr3-c95YkOsUAueWESkGViprJp1Q07d-/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "As frustrating as it is, being threatened by vampires is nothing new. Putting off subduing them until later won't change matters.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1nVNp6fbIOV363iXgAY0Hqr0eRO39XOyL/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Yes, that's right.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1TIt_Rtq5YBG6sG_YlcLBhsUzedOJ1K3l/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Tell everyone to retreat.",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1axUQfdvDl0ndxW46GtQ64eRazlJAzpGa/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "Um, where should we retreat to?",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/122iUz0JGBJekx0SMmSQoRrbnGpb9midZ/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "Where were all of you planning to go?",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1T_lg1bt36LnJmPrsOwy1V5sJvmx-n2sQ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...There should be a town beyond the forest in that direction.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/10rcpA1D5lyck3t30ngzq_Fy1PeIZfkbj/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "That town is where our base is.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1_eRghmX2XpAed7FX2nNRGPWuvXQngtC9/view?usp=drivesdk"
                },
                {
                    "name": "Freya",
                    "name_variant": "Freya",
                    "subtitle": "Then let us proceed there.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1jhR3qaBzQklnMm4WCr_ZxznlA82ZVVrX/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "The vampire forces are coming into view...!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1jYDKyUnxDzMoJRi39dl5l7WxGxatXBoe/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Let's hurry.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1RS27kroP42hRVypnQ9LWKkjJk0ExrLLQ/view?usp=drivesdk"
                },
                {
                    "name": "Lili",
                    "name_variant": "Lili",
                    "subtitle": "Please lend a hand to those who can't move on their own!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1RqEGaiTAy6NBvjLOOOajUH2fjruU3zjw/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "If we're being pursued, it's dangerous for everyone to move together. Let's split up and meet at the base.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1WcmC_GNhHXguJWHWnDlTD1bUinq4A29E/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Good idea. Everyone, be careful\u2014",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1aRbaMhuiCgl6uWfUlMTuvs_vnFU0JnZ7/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "Those who escaped the battlefield gather one by one at the base located in the town\u2014",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1yZ8YPIoS1GD_-gOa73G0Lf4IKamwHXlU/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "We made it without incident!",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1nGKQllSg-pm0vLaHKaOCRxwAh4bJgVK9/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Long-distance travel is a hassle...",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1_WQHVKudGN_GadA_F3IHXMbf4rB8UpPn/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "This distance is a hassle to you because you're always cooped up.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1q3f4wimfF3FZYKEEqGWV6PYctr_hn0ih/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Doesn't matter the distance. For starters...traveling itself is a hassle...",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1-46B3evQBqhLnrlfKa4hSodbBYsWQxi-/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Restating it doesn't make it any more impressive, you know.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/16qb2ERrBpBDVgoYkxXExVBwfyGp8UAmA/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "If it weren't for...the princess...I could've been carried...",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1HhmhfcRAEXBTau53z9BIydAEoi8XvmDF/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Please walk on your own if you're conscious.",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1CLr6qH27xSlzxDxAnu5WWyk2LaHeqhZX/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "...Um, thank you for carrying me. I'm glad there were no incidents.",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/10vznx0MNICNvfoeywHgOJrXu5zY04tkI/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "The other two who fainted are also headed this way. Someone from your group should be carrying them.",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/168JR_KT5ENE0PsbpnZWzRhZiLssT-biK/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "Who exactly are all of you anyway? I'm sensing formidable strength from each of you.",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1ZQ5vux0So3lrXbk_W3h1U4gZSdhz0iaF/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "As far as I can tell...you don't seem to be enemies.",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1rbKwjSqKeG-zwX18Vwv6yOVLGi-ytb7M/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Wait...)",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1q8SK3AG5Uw9gDYOwrSWxH4uyH-07jdca/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Has Delta arrived yet?",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1YD5QLb5ekf1YzGMAzCoWQQYQivY7hj50/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Not again...)",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1es14IX9SJGikANWuASQrjZJ5fdvlhEY3/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "...She ran off to the woods. Said something about hunting wild boars...",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1zSyzSe7l-u4wTy3vHF59sF6cJ-Jh6sZr/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "How carefree of her...",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/10loNHC327g1PkucPNWOALL4sVaO6AzDR/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Right...",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1aXDRSvdLCZf7zDLHXn9DJ6a6sMx2eI44/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Shadow...no, Cid died right before her eyes, causing her to lose her will.)",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1aOfsEwuFuonicG-4esrGU9wMxAaJLeCb/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Lady Alpha!",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/10VFmIYGsBBVs_hZ34r9ozw1YrPgv766j/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta...wait, is that...",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1Z5r52Rq7XBE-Gcv-nWJ1ncLdYza0mK4m/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I caught a wild boar! It's food!",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1g8WDx86RrxJhezB2q0cValSIMn5T0YW4/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "You really are oblivious, aren't you.",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1QSLPsUEDshTkYo3T1sgdrkmpks1mXHS1/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "What'd you say?!",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/12IhzkGK557rzPz8I4R_D64g02cr8eBBd/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Stop it, both of you. ...More importantly, Zeta, have you seen Gamma?",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1xrz4XD1Dy8snjNLijphIBC9Ea0v5LJAW/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Gamma is checking out this base's warehouse to see what they have and what they don't. I guess you can call it an occupational disease.",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1g1sqAKoW6fQ-FKhcp1_Lzh7ZSmoin7jE/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I see... Zeta, gather everyone so I can explain everything in detail.",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1HFjTuz-uVqnDINrsRuV3UQjYMb88R93X/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Everyone?",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1bho_tCDu6Uxd95JoXYGv4L34QBVoIUNk/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Everyone from the same era.",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/10bYdPJTAyOZmihtGAcBTcCIr8WdUrggB/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "What about Gamma?",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/1qRPCdGn9xAC-dCqMWhmA7Q0Wq7MsLnY6/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "She picks up on things fast, so I'll talk to her personally later.",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/1EENM7zzJj33J4AJ-ua5StTf0xVoRGGY-/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Alright. Got it.",
                    "line": 71,
                    "url": "https://drive.google.com/file/d/1t6Bw8Mp44oJMHtAfUVgex-wktYGrb8Za/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "\u2014That's what's been happening.",
                    "line": 72,
                    "url": "https://drive.google.com/file/d/1hKPXZ9UgpfBc7D6fStbwUA1o0ZRCP0ar/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "So, we just need to catch the mastermind using the irreversible pocket watch and steal it from them.",
                    "line": 73,
                    "url": "https://drive.google.com/file/d/1HME0IpnvkVliMO2FTETZ_jjnqiDFvfAM/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Looks like our clue to returning to our original era might also lie there.",
                    "line": 74,
                    "url": "https://drive.google.com/file/d/1NUgSzLOMygLDopvzv2zRudvFcXNV2MCg/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Interesting artifact... I'd like to study it in the meantime...",
                    "line": 75,
                    "url": "https://drive.google.com/file/d/11Fm6u_9xWmkmD-XWX54RqiO4n5C0xJCf/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Research comes later. We need to narrow down the suspects first.",
                    "line": 76,
                    "url": "https://drive.google.com/file/d/1rmCBL4A308yQojlY62lQmcD0fp4d1jPD/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "...So, using that artifact, Shadow and...Cid can be revived...?",
                    "line": 77,
                    "url": "https://drive.google.com/file/d/13APzRuttgEK_WJOTXmk7d2CUHCWxFfZQ/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "Yes, surely, Claire! Pooch will come back!",
                    "line": 78,
                    "url": "https://drive.google.com/file/d/1HnU2FaKWQ4kWCNRMuVbRuiaQkHu34y0C/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "For his sake, I'll do anything. I'll defeat any enemy...!",
                    "line": 79,
                    "url": "https://drive.google.com/file/d/1UYHoNtXOei9C3VgLNVV4KV3JQetl4ToC/view?usp=drivesdk"
                },
                {
                    "name": "Rose Oriana",
                    "name_variant": "Rose",
                    "subtitle": "Yes, I feel the same. I will fight as much as needed to revive him.",
                    "line": 80,
                    "url": "https://drive.google.com/file/d/1NS7MtG5bNwHwnQVuVFtHe05yB0lgt5TN/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "No. 559",
                    "subtitle": "In even the most tragic of realities, the members of the Shadow Seven keep looking forward... It was immature to think they would lose their will. I will dedicate body and soul to obtaining the artifact!",
                    "line": 81,
                    "url": "https://drive.google.com/file/d/1H9444zs9xh9fqtN5ZDtMLq9PZs64r7LA/view?usp=drivesdk"
                },
                {
                    "name": "Yukime",
                    "name_variant": "Yukime",
                    "subtitle": "Hehehe. It seems there is a light at the end of the tunnel. This must be what hope looks like.",
                    "line": 82,
                    "url": "https://drive.google.com/file/d/1UfJMoBgf-LliXLZZiDr__ThoIYbXo0IO/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Hope... True. Everyone's face seems a little brighter.)",
                    "line": 83,
                    "url": "https://drive.google.com/file/d/1weZj9kUmN5hvqo9dfwm14_IG5uPHvkKw/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "This is all hard stuff...but more importantly\u2014",
                    "line": 84,
                    "url": "https://drive.google.com/file/d/1jpLefojrEbetpVlUwIbdLT0i_bv1EATb/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I'm hungryyyy!!!",
                    "line": 85,
                    "url": "https://drive.google.com/file/d/1ZZRyRVYADnaAOL--rA_FN7D30mKGyaBt/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Ugh... Pipe down...",
                    "line": 86,
                    "url": "https://drive.google.com/file/d/1puzeBWlp5GP4lKp27x6kZUJ_c2Z237Zp/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "So, is that what they're discussing? Food? How carefree they are.",
                    "line": 87,
                    "url": "https://drive.google.com/file/d/1Y2zFgsGcv5PIUtcv2F5jekNHCw5yksSL/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "Not everyone has gathered here yet, but should we move to the base?",
                    "line": 88,
                    "url": "https://drive.google.com/file/d/1Uxkguci2PPLNgRCb222gfP2SCTr6lBMD/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Neither Freya nor Lili are here yet. It seems not all of you are here either.",
                    "line": 89,
                    "url": "https://drive.google.com/file/d/1_rgcUrqLKALijeLRLP5iOR_ENNVQ7A_6/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "What do you think, wait or prep a base first?",
                    "line": 90,
                    "url": "https://drive.google.com/file/d/14hTNp3zYxaP0jCaZXzV-SqIJRZQVHKVK/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The latter seems more reasonable. We don't want to waste time or accidentally miss them in our search.",
                    "line": 91,
                    "url": "https://drive.google.com/file/d/1Gkk6mX8mMVZfAHQZXIGbBq0JNH7iMepg/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Don't you have a base?",
                    "line": 92,
                    "url": "https://drive.google.com/file/d/1gG316az_vrYjuoUH9visQssUnDAnHusd/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "We have a small place, but with nearly double the people, it'll be cramped.",
                    "line": 93,
                    "url": "https://drive.google.com/file/d/1qFGH7wbd5OW1ETxsBjTAgkz_O0Lo7-cU/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Then let's find a larger place. There aren't many that can accommodate nearly 20 people.",
                    "line": 94,
                    "url": "https://drive.google.com/file/d/133iNNQCBMUQKl7p5tPuZDuu8wJELeuoa/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Agreed. There's someone I want to let rest soon\u2014",
                    "line": 95,
                    "url": "https://drive.google.com/file/d/1WqQHFDJDI-HVaTcWYMr2W5_INjOQOyIF/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Ah, her\u2014",
                    "line": 96,
                    "url": "https://drive.google.com/file/d/1EP9WCGb9QB3FEPj6HPhXCPww7omqwV4U/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "Gah...?!",
                    "line": 97,
                    "url": "https://drive.google.com/file/d/1U03V2MPVdCaCs6buDxX_87Roy4UyFZkJ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Huh?",
                    "line": 98,
                    "url": "https://drive.google.com/file/d/1fYcLfcB9plDaut0DBe2GV7XvvCbTp7mT/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "As Alpha and Olivier look at Claire, they see a blade penetrate her stomach from behind.",
                    "line": 99,
                    "url": "https://drive.google.com/file/d/1VSnbgcbwH-DZzQW3R-g6qcSdqv4eqzBK/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "*gasp* Huh...uh...Cid...",
                    "line": 100,
                    "url": "https://drive.google.com/file/d/1HwTFNfzIXhsoQq6ojXaJQ2nwjCQAK7-_/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "Claire...?!",
                    "line": 101,
                    "url": "https://drive.google.com/file/d/11tt1I93IzZZzivDiX3KdkXmG2PQtypaQ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...",
                    "line": 102,
                    "url": "https://drive.google.com/file/d/1zdEjzF3DmgDaaOCg3Ymo4rfcBHel7ekC/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Gamma...? What are you doing?!",
                    "line": 103,
                    "url": "https://drive.google.com/file/d/1N6voQZd1p5jmqZa0Hm8CCAAKS1EGNWV4/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "What's with that look?!",
                    "line": 104,
                    "url": "https://drive.google.com/file/d/1J1nd6ZoNtZ8xCn_41rV5KyTAaI80n-Z5/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(You have got to be kidding me...)",
                    "line": 105,
                    "url": "https://drive.google.com/file/d/1sW9VktqUbaedyJtdxrnF_hjtv-4SCwt7/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Delta didn't rampage, so why is Gamma losing control of her magic?)",
                    "line": 106,
                    "url": "https://drive.google.com/file/d/1GTZCLrTNG-88vJYKRnWb_BmcHZR9B-lw/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(The future has changed...)",
                    "line": 107,
                    "url": "https://drive.google.com/file/d/1L8whKh5mp9R7MSJtTqjmCtPFH73Jt7I0/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "How dare you... How dare you do that to Claire!",
                    "line": 108,
                    "url": "https://drive.google.com/file/d/1_ZUmvT7KmVlWIT_X37nOLSIfPdl6CO0D/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "What?! She blocked it...?!",
                    "line": 109,
                    "url": "https://drive.google.com/file/d/1A2oOxr3Nl156gs-7P-IK2phZBB29rf_E/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "It's my turn next.",
                    "line": 110,
                    "url": "https://drive.google.com/file/d/1VnbDIU0qS88enEEXCeGcdUX3Pf9QeyGA/view?usp=drivesdk"
                },
                {
                    "name": "Alexia Midgar",
                    "name_variant": "Alexia",
                    "subtitle": "Agh...ahh...!",
                    "line": 111,
                    "url": "https://drive.google.com/file/d/1OTsZYtwFe76iRdmeQZP9jhbORioQWRVj/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Gamma sent her flying...?!",
                    "line": 112,
                    "url": "https://drive.google.com/file/d/16tifPniiYNSd-ntzKZQHd2RFkdAe0gFu/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "It's not just her look that's changed. She's gotten stronger.",
                    "line": 113,
                    "url": "https://drive.google.com/file/d/1nduU1SfVTThfWiYu8BUXQO9j0qNNT6Z7/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "What's happening?! Gamma's power has increased!",
                    "line": 114,
                    "url": "https://drive.google.com/file/d/1zgvC7WF6oF-OxultSV0SKh4NhPmz5Qlk/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Her movements are fast as well. She's a totally different person now...!",
                    "line": 115,
                    "url": "https://drive.google.com/file/d/1vmrCk358nHyQJUtk3eSno2jDfm390Q7g/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Just like Delta's abilities had increased, Gamma's abilities have also been enhanced...)",
                    "line": 116,
                    "url": "https://drive.google.com/file/d/1XtpGc1uL1YpdYbev7WQnxs5aoO62W7Sa/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Aha...hahaha! I see! So, this is how it feels to be powerful!",
                    "line": 117,
                    "url": "https://drive.google.com/file/d/1OsgygY2kquBUZtO9zMnNpa9dnw6qZr5o/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "To trample on and utterly destroy your opponent! What a delightful feeling!",
                    "line": 118,
                    "url": "https://drive.google.com/file/d/1U-tnp8bsLD1cwG0wWQ--hqky8qC3QFnf/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "What are you talking about, Gamma?! This isn't like you...!",
                    "line": 119,
                    "url": "https://drive.google.com/file/d/1X0fyOcN4XXehBvcqJDTs7Zn46yMZBjlt/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...Huh? Like me?",
                    "line": 120,
                    "url": "https://drive.google.com/file/d/1IKsfz8xrBilt3HutZJnS8nt9ill11P_m/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "What do you mean by \"like me\"?",
                    "line": 121,
                    "url": "https://drive.google.com/file/d/1lvORoCB6FBWVtrgW2nyEuY_QQFHd0SqJ/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Gamma...?",
                    "line": 122,
                    "url": "https://drive.google.com/file/d/18fMr739UaLHfrFyCcK900RO3r0EI9vnc/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Are you referring to me as the \"weakest\" of the Shadow Garden?",
                    "line": 123,
                    "url": "https://drive.google.com/file/d/1ANsut41tRqnzLLT_Ei00c1rDxwODI5oB/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Weaker than the rest of you, just earning money rather than fighting, hiding in the shadows\u2014is that what you mean by \"like me\"?",
                    "line": 124,
                    "url": "https://drive.google.com/file/d/1vZSR7aqp29Sx2NB2s0es_WvFaWnhI2hG/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Ack...!",
                    "line": 125,
                    "url": "https://drive.google.com/file/d/1O4kQTWcJH61GMTUN4-NT56SEPUOjC098/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Strategizing is ultimately a weapon of the weak!",
                    "line": 126,
                    "url": "https://drive.google.com/file/d/10W1cAiVUEU0-Ku8SYj4coqe9FdIzlDJs/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Because even the smartest strategist will crumble with a little push!",
                    "line": 127,
                    "url": "https://drive.google.com/file/d/1RZsPpOdP81S6-OSUWgGA26BfkQ2jvq7d/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Even a baby could understand that!",
                    "line": 128,
                    "url": "https://drive.google.com/file/d/1y7oeAtpUT1NfbrdK2rn4sYdgkk-kYIPI/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Ack, Gamma! Stop!",
                    "line": 129,
                    "url": "https://drive.google.com/file/d/1fu4VGTnr71WvLeRajkIf-fCoflmtZohs/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "You first!",
                    "line": 130,
                    "url": "https://drive.google.com/file/d/1PgV8LZRdgJXTiVuJYUHwNydAs6wbfex1/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Whoa... That was dangerous... Had to dodge that or I would've been hit...",
                    "line": 131,
                    "url": "https://drive.google.com/file/d/1WBYdOwFapygCylxjYdvDc5GvasMQVRDA/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(We've got to stop Gamma somehow...)",
                    "line": 132,
                    "url": "https://drive.google.com/file/d/1K4I7WGXGeJc_XBbVWWM2tySlLBIq4zeq/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(I don't want this to end the same way it did with Delta!)",
                    "line": 133,
                    "url": "https://drive.google.com/file/d/1fVq5TihSam8fkit6Kjxmw0DZps2A0Pe8/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrr... You've got some nerve, Gamma...!",
                    "line": 134,
                    "url": "https://drive.google.com/file/d/1Dfo1GchVPxhOaCBw-nAwGzgb3uTea56s/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Looks like you're struggling.",
                    "line": 135,
                    "url": "https://drive.google.com/file/d/1UEPeyb9y_pozREJ8LL42xkBTig5X-wU9/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "Let us take over.",
                    "line": 136,
                    "url": "https://drive.google.com/file/d/1_h4MpxoaYsL8HdgKsOOEgiEmnN9Q5cqq/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "What?",
                    "line": 137,
                    "url": "https://drive.google.com/file/d/1cshumR_iG9c47mi4ONdo3UPIH7a_2wBy/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "We'll restrain her for now.",
                    "line": 138,
                    "url": "https://drive.google.com/file/d/1pd1AVheLEwDbKV5zhp9wSLm_wlUUp8JZ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Can you do it?",
                    "line": 139,
                    "url": "https://drive.google.com/file/d/1W7vdXXQQ0zPMN8auIWwpFGjV-JneBCa_/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "Yes, probably. I've been observing her fighting style, and I think it's possible.",
                    "line": 140,
                    "url": "https://drive.google.com/file/d/1_WtkHHBz92HJrfKOtAcsAehmBeel8TxW/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "You looked down on me, didn't you?! I won't let that happen anymore!",
                    "line": 141,
                    "url": "https://drive.google.com/file/d/1DKOlHiU5Z8v-HNUjgcZfHeRKFgHvupLq/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "No, that's not true! I never thought of you that way!",
                    "line": 142,
                    "url": "https://drive.google.com/file/d/1GzqixvdNsILdxIoOAMAm-q-E-qiiqV8T/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "That's...a lie!!!",
                    "line": 143,
                    "url": "https://drive.google.com/file/d/1GCSu86BVZGm3ZGk2yor4Fi3FEh4PYqlP/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Ack...!",
                    "line": 144,
                    "url": "https://drive.google.com/file/d/1hiD9QR3Rx3o1SW6K79qkXpWdCsWmcFL7/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I'll blow you all the way to the moon and add another crater!",
                    "line": 145,
                    "url": "https://drive.google.com/file/d/1VYN18BSIDg5H4m8UgTxRdWNF3jKhfrdT/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "I'll take over.",
                    "line": 146,
                    "url": "https://drive.google.com/file/d/1V4m3VH9IGhWpWyY3fF8lr0xI_RWQhM9G/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "But...!",
                    "line": 147,
                    "url": "https://drive.google.com/file/d/1sf7N9WP3ZRRtao1Z8ZNn6pT4af1-1CtU/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "It's hard to fight one's kin.",
                    "line": 148,
                    "url": "https://drive.google.com/file/d/1j8KfQhaHE3sEA295eWkBwtTKG6yOwU2O/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "It's okay. She has strength and speed, but I'm not picking up on any real combat skills. As long as there are no surprises, I should easily be able to manage\u2014",
                    "line": 149,
                    "url": "https://drive.google.com/file/d/1j9Y6vIeVGubpwRBwBi1ksJoZccAwlqq2/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Blegh?!",
                    "line": 150,
                    "url": "https://drive.google.com/file/d/1dloVs5zWIDZ8U9OPsC0knWAkikEsJuEI/view?usp=drivesdk"
                },
                {
                    "name": "Duet",
                    "name_variant": "Duet",
                    "subtitle": "Gah?!",
                    "line": 151,
                    "url": "https://drive.google.com/file/d/1bRMP_z-NWsYK0cO_3noWe6N9fgsjJ7u2/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Huh.",
                    "line": 152,
                    "url": "https://drive.google.com/file/d/12OBpkySCZWwMJ2AVM2mXXwyZTOEs75tl/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "What?",
                    "line": 153,
                    "url": "https://drive.google.com/file/d/198jpdgOhywiL3HyrH3lSUXDa-WDKHAph/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "She...tripped, and...",
                    "line": 154,
                    "url": "https://drive.google.com/file/d/1RdGWwO0z2aJBupsJ3vhqwmMIYmJF7ExL/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Her sword stabbed...",
                    "line": 155,
                    "url": "https://drive.google.com/file/d/1ej8jH0cIdsUSES0WDaukhhClJjBP0LNc/view?usp=drivesdk"
                },
                {
                    "name": "Pente",
                    "name_variant": "Pente",
                    "subtitle": "No, aaaaaah!!!",
                    "line": 156,
                    "url": "https://drive.google.com/file/d/13ePWSI14BjQDMbzaptyeofw_c00uMAlU/view?usp=drivesdk"
                }
            ],
            "e5-3": [
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "We made it without incident!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1oPDPMABNnpp1k8C2l7WvK1bevJFIGl5z/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Where am I...?)",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1mJ4YZvhQFnqnceeP0c0T9G8MCv-n3wDv/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Long-distance travel is a hassle...",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/11x45lAg900zbeIXjQMEtfcdNz5EhQQaa/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "This distance is a hassle to you because you're always cooped up.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1iDT85dlPtPNpAHEDoi5VVSVU8GE6fSCp/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Doesn't matter the distance. For starters...traveling itself is a hassle...",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/15bgjlwOCUNI-2zib-69zMFF0ONkERhQC/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(I'm back here... The artifact was used again...)",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/17rr_j2s7VUNXpey29RJOQ_BgiO8x8cZM/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(It looks like we've arrived at the base in town. According to Eta's explanation, this point is the save point...)",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1kuQmXRTIJU_DCUq91svqzDVNcrR38ylT/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Although Eta herself probably doesn't remember explaining the artifact to me...)",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1RguoupOR1vz05JpLwPeVW3QbxaXjP_KZ/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "...",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1sfOVHjf8fTZxd5z6LmIH35Q-L3AZXLvj/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Claire Kagenou... She looks unwell, but she's alive.)",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1ISTh-a5SBysUo-f8kLZIb9YgmqpaRewc/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(It's a strange feeling seeing someone alive who was supposed to have died in front of me. The notion of not having to fear death...)",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/17S3UyuS4k69Jmv-8t-G8TCmjBNEEEjPO/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(That's right...!)",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1-q6JSzTCGwsT9ZpyHSd8OQHhwf6noMg_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Where is Gamma? Where is she?",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1d4fMmyE5jpF3Lpi7-_Ueiv_ny4lMC_Vp/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Lady Alpha? What's wrong?",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/14cpDhaGDPr3yROU9j3_J6WrAPG8r1Uei/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Gamma went to check out the warehouse. That dumb dog ran off chasing boars during a time like this. What an idiot.",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1kRc068q8edNyDwfYkLh5URsUVmUO7Tai/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Where is the warehouse?",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/197t0zWeTy-oYIsk9aDkvcOjN0HzyfHiF/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Do you need something from Gamma?",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1_rTiBT5KTccO8MS0H1IfsaEWfTcLhP61/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I need to discuss the details about Shadow's resurrection with her. She needs to hear this too.",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/16JyFfJzvv5CQFgQeY3plq_j2MHo-dOM2/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Master Shadow's...! How exactly will he be resurrected?!",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1T11fRVPVueeetwiZbMDOstwAVkV73a9u/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I'll explain that once everyone has gathered\u2014",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1amKGlF3U4P0sZjEp_NgwSL5F_RWD4K1-/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Lady Alpha!",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1m3YxCCI6llpMGhYQ9XJRU7nE9myV_DB4/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I caught a wild boar! It's food!",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1KVQN792FTl7vpeprBwlsqj1-JbN6OCif/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Well done, Delta. I'm stepping out for a bit, so stay put here.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/11EjldYQRwxa62l_3SuFpnNJfS5taQND1/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Huh? Lady Alpha, where are you going?",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1HfzQ9ksOVxdoBjXbdarrsgW-iQg4mH-V/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "To the warehouse. Gamma is there.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1oLI0MmFuX4KDGWc6BuxQ1MMo-vBkdZ3J/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Warehouse? Gamma? But I smell Gamma nearby.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1c3ePiUgaJvek768hAiem71CCilh_JB7x/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "*gasp*",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1N3b66xpBgy3bR-NTJ-VkrjViLuysbsnL/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Around there\u2014",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1KmVOpwjrn-fXZ06UjINkZjAsyeke6etL/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(It can't be...!)",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1X9xcj3GwR5geYTPIV3RnHxJRPPWyQQzm/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Lady Alpha?",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1fYIEaHgGOX22SLmCsS-SBaxErPCqoYI_/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Ack...!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1vY5LFLSFwIFIKrUXmCLHVQ_RUFGRNTWx/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Not happening.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1D5E6zgGGGkCaJRrD2Z8ffB-2x-bLXCvU/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "What's going on?",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/11wD_sQMh4ethkT749GWVyZbqWnMos8r0/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Lady Alpha blocked an attack... Wait, is that...?",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/19N8mI0jvyjY1OPjEwwAuBTgr_xet91Qz/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Gamma...?",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1GJhOqVIgsoPngwIMIhWB8PD6ZQwdZFue/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "What's with that look? Why do you have such malevolent magic...?",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1KR-S8sNVaHmTvfdy9WDfAwM_GOliGQY7/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "And why the sword? What were you planning to do with that sword?!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/15Dg9vKECR8XGM-p6BL9AQxKDrxbEX3i8/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(I'd hoped my fear was unfounded.)",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1aMFPGXhJ3a4RP1PJS4rH1GXG0TnGWyDb/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Gamma had already become like this before the save point was established...)",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1MotSTTJqKf94qbRgaEdTgajEqsjfbnoE/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Why...was I blocked...even with this power...? Am I still the weakest...?",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/12YWsjpLTSbajMS235Jg4jK-coWPXI_Pu/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "It can't be... It can't be true...!",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1BBZoqgThNf4LOeaYCemOOua1tNjms6Bh/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I was supposed to have become the strongest...! Capable of destroying everything...!",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/13qtmOxgpX1iDUTJxQwAyn2mLtkJxyZkz/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "No matter how much a genius you are, if you get stabbed in the heart with a sword, you'll die! Even a baby should know that!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1FAKaHFAoK813DojrATY6fuDovRpCYQgq/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Am I weaker than a baby?! A-A babyyyy!!!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/13iYk7FST9KHGY1m8Ew5zkOdc27dqek-J/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Huh?! Gamma, stop!",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1gYCspi33pmEkOR6RC6arQtD5c7JDbnWm/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Ack... What strength... This Gamma is incomparable to who she was before...!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1meGq5qa2GzlCwBXwNLEfcYbOjjy-aXnV/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrr... You've got some nerve, Gamma...!",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1g4vovLwX8u9tzNhoNDlj1mn4FUhFT66V/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "All of you are always mocking me... I won't forgive you!",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1pZgdVE3AnhEbl3aT5cSvj5f-Ssi5RC3O/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(There's nothing we can do about events that occurred before the save point...)",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1CO-DL0DMdH2AumoxvvRQ-jkGvyoSbN8r/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(It's the same as Shadow's death... Until we get the time leap artifact, there's no going back...)",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1CzyiTdj_wZ6_CyGKmKQ3pDLG2sW2TbRZ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Ahahahaha! Haha, hahahaha! Blow away that genius' heart!!!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/16fPZ7ClxJBb0oQ7zkhW4y5m7jgwE2783/view?usp=drivesdk"
                },
                {
                    "name": "Mysterious Man A",
                    "name_variant": "Mysterious Man A",
                    "subtitle": "Reddish-black magic... It seems the demonization has begun.",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1tES9yX2vk3Dls7kO298axYKOE6IRjkFQ/view?usp=drivesdk"
                },
                {
                    "name": "Mysterious Man B",
                    "name_variant": "Mysterious Man B",
                    "subtitle": "Hmph, ridiculous. It's just a rampage of magic. There's no meaning in power that can't be controlled.",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1aafdqO1wneMVsWDGYGK8gpuk3j6o-7ny/view?usp=drivesdk"
                },
                {
                    "name": "Mysterious Man C",
                    "name_variant": "Mysterious Man C",
                    "subtitle": "You say that, yet that power is exactly what we seek. Let's rejoice in this moment.",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/10h-6n3QeczWWqIWn5Yv5k7XBr15HHUkN/view?usp=drivesdk"
                },
                {
                    "name": "Mysterious Man D",
                    "name_variant": "Mysterious Man D",
                    "subtitle": "Do not take your eyes off the events that unfold. With that power, the day when our sublime goals will be realized is nigh\u2014",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1Uce2iNH8z1QhQ7fJp8D3jtPgcYIx3QlR/view?usp=drivesdk"
                }
            ],
            "e8-2": [
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Fool\u2014",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1PXsMiNxyUS0a2xd56HNBMPTEGoUU8tMw/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrrrraaahhh!!!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1zHUTSqBL_PHmZmUkdur3mT-PZMawEMNS/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "Agh...aah... Trusted the wrong...person...",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1WnJnfzrSeqGUWruSfXjQX5FQuHsF3nid/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Ah\u2014",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1E9gxCTjD1S3Pyw86y_ikr86db3Fq69ZF/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrrrraaahhh!!!",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1jWgETtEGOmEU6LdPAk4dXVsnG5JchQhA/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "For a split second, Alpha lets her guard down\u2014",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/17f_0wX7vEmCPmimyuQyWN5Lm94lGdfbE/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "Simultaneously, Delta's arm pierces through Alpha's abdomen. Robbed of even a lingering moment of fading consciousness, she perishes\u2014",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1zCfeiNRGitP34REg1F6-ySk8jtfFQQog/view?usp=drivesdk"
                }
            ]
        }
    }
}

let setDoc = db.collection('data').doc('apo_p1_c1-1').set(data['p1']['c1-1']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
