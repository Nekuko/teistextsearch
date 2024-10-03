const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "bheif": {
        "e1": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Whoa, is this the thing?",
                "line": 1,
                "url": "https://drive.google.com/file/d/1kBTFcuo4Ulo_lE7n9YG4e2_QCJue-lmk/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yeah, that's it. It's the artifact left behind by Laugus. We found it in an abandoned research facility.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1-FIYUV5W5HZK2eKPZjII6gC7_-nOfWNt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Laugus? Wasn't he someone important from the past? Let me see this thing...",
                "line": 3,
                "url": "https://drive.google.com/file/d/1Ugf_u3iQdze6EvToW42hiCJQ4AOAV6s1/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Master...do you know what it is...?",
                "line": 4,
                "url": "https://drive.google.com/file/d/1IoPZj9T8W2iUFb-C8VbKSXPtaZw71Gtp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hmm... Looks like junk at first glance.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1XiIZg5GKnvnezShbDK09GRuaVTD7f6qT/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "You're right... Unfortunately...it really is just junk...",
                "line": 6,
                "url": "https://drive.google.com/file/d/1eEMFx0-gecuzMuJzYsTDF25YlZoBSvss/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "By using a large amount of magic...this artifact can connect to another world.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1zsbadkzZHlIxOxiAb8BVrrK2mNFPPfId/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Connecting to another world sounds like an amazing function. Doesn't seem like junk to me...",
                "line": 8,
                "url": "https://drive.google.com/file/d/1vomkkfztJyA9TMIo_2wU1h-cvbq8jabB/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "But...it's uncontrollable... According to the documents...apparently...you can summon someone from another world to somewhere in this world.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1tKOtyIKojJHpeQlTcsSGOc-yk2gOM6Vk/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "It consumes...a large amount of magic...and you don't know who will be summoned...or where. There's no way to verify it, and it's not worth the effort...",
                "line": 10,
                "url": "https://drive.google.com/file/d/1HB54sJhrClypaioL3G3qo1WC_o7tzuoH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hmmm... I see.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1hDS7U8Qfa6zGqjlbnPipVu10uCHN_pzr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Damn, sounds interesting! I want to summon someone from another world! It would be a shame to waste this opportunity!)",
                "line": 12,
                "url": "https://drive.google.com/file/d/15LOfjKOglgiwuDNOpa4H8mX6MA_YfepL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Summoning someone from another world usually means they become a hero! Which means I can make my shadowbroker move. In that case\u2014)",
                "line": 13,
                "url": "https://drive.google.com/file/d/1I4j1fux7L3OSM6htRvXm4BbJVbg8eUrY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I can provide the large amount of magic. Isn't it worth trying?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1okH-CgqmXTUMWx-iWJ8NxlzcFRrshJTb/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Heheh... Just as planned. I thought you might say that...Master.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1vzpCcv6FOBxAeV3urWEIXS3VROvJaTxF/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Oh, nice. Sounds like fun. Give it a try.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1IpB6-bcABNuVHa3m6GAC2-YUn15LkJVc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright, let's get started! I just need to infuse it with my magic, right? Here goes...",
                "line": 17,
                "url": "https://drive.google.com/file/d/1S43I11aX7-y9mVeSsuIUoeRqH6A65xZJ/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "*huff, huff*",
                "line": 18,
                "url": "https://drive.google.com/file/d/1Zp5CtRCvNJZUCmf_BkodSpraEcGqYXsy/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "I'm exhausted...",
                "line": 19,
                "url": "https://drive.google.com/file/d/1PLL8r76Do8LiCX7kADF115Ypkm3j6Qig/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Come on, this is nothing. Guess you've still got a long way to go.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1XYBLNM2xteyUOq-SKp5XiI_1vhMCEH6v/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Well, that's it for today. The food should be ready soon.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1x_E9QgqZan6fnjwyGwRlHalsbJLZJ2qM/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra & Tamaki (Shinra)",
                "subtitle": "Thank you...!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1o-DyHO86MX-BtX3tsru257zhHys7EA1y/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Shinra & Tamaki (Tamaki)",
                "subtitle": "Thank you...!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1o-DyHO86MX-BtX3tsru257zhHys7EA1y/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "*sigh* I'm starving... I wonder what's for dinner.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1e4wLVkidvdmQiX8LTPTkVg_jKrxDbguu/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "I hope it's fish! Arthur must also be waiting. Let's hurry back!",
                "line": 24,
                "url": "https://drive.google.com/file/d/14iXl04Vy2r08d194f5qr5Kgu01OVCgHE/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Wasn't he off training today? He's probably already had dinner\u2014",
                "line": 25,
                "url": "https://drive.google.com/file/d/1dJkU1iJtPm-LjE7aJRBTgR9f7POlDccM/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...?! Something's coming... Be careful, you two!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1-mMFp1zd_UXGjE5wE427ndQuM7yMtRrI/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "What do you mean, \"Something's coming\"... Wha?! What's with this light...?!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1c6oEE_I4NzZVfT4OC04D6xiU51CPRfVD/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "My body... I'm being sucked into it...?!",
                "line": 28,
                "url": "https://drive.google.com/file/d/1PyPfZEdF34OwbSoatgz285oR5OFyfYBs/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Shinra! Tamaki!",
                "line": 29,
                "url": "https://drive.google.com/file/d/1vjpTVgAjCS1l1K9isAuRDYPCogjSHImh/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "(That pillar of light... Could it be the White-Clad's doing? No time to think.)",
                "line": 30,
                "url": "https://drive.google.com/file/d/1tIbiLchcI1EU9pwipcFA7LOz7HQfZa3Y/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Their lives...are in my hands.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1kXIR30z4rO7gnksYXnQSeK_Epkex5iT-/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "(Where are we...?)",
                "line": 32,
                "url": "https://drive.google.com/file/d/1x2FbxrGecbhF44io360iS2K6CklBfDyp/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Captain Shinmon?! Did you follow us into the light...?",
                "line": 33,
                "url": "https://drive.google.com/file/d/1beU0LActFoYtYTx78AamDjqA2oZzmygW/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...Who knows. Anyway, are you both alright?",
                "line": 34,
                "url": "https://drive.google.com/file/d/1qDwBJZprbncMfQCpcZCOMB_OF5YnAafC/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Yes, Tamaki and I are okay!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1024Tr9XqueZEeicxlRd-NQqHDoOcyrsn/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "But there are no signs of the White-Clad... We don't know if they're involved or not. Besides...",
                "line": 36,
                "url": "https://drive.google.com/file/d/19hT4TL53RZCirYUXrO1_rl0neMXvoSnd/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "What is this town...? It doesn't look like Asakusa\u2014",
                "line": 37,
                "url": "https://drive.google.com/file/d/1bOdfK4SqqBWD0stLXAl-YbpruEJ7sRaY/view?usp=drivesdk"
            },
            {
                "name": "Woman A",
                "name_variant": "Woman A",
                "subtitle": "Eeeeek!!!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1qjnbvkM-M1RO8dcZ4Pfmc2LvPu70QMgf/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Screaming?! It's coming from over there!",
                "line": 39,
                "url": "https://drive.google.com/file/d/14oXi6JdYnz9-q-LDjZdOXdopzDAzwikl/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "H-Hey! Don't rush off on your own! Captain Shinmon, what should we do?",
                "line": 40,
                "url": "https://drive.google.com/file/d/1NLgW4VLvikglrHRGRcPMbgBw-glk4eJA/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Whatever the case, we're going too!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1O80nWqCAQwrUA4i_aGyVyT6lCQgJgyeJ/view?usp=drivesdk"
            },
            {
                "name": "Man A",
                "name_variant": "Man A",
                "subtitle": "The old man from the bakery just suddenly caught fire! What's going on?!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1xP9-_M5jbCN9K27LHDx4BbhvuKTEiT_o/view?usp=drivesdk"
            },
            {
                "name": "Woman A",
                "name_variant": "Woman A",
                "subtitle": "It's coming this way! We've got to run...!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1wjV_stArhbL8Jwzg-LroDn8gqboq8Bjx/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "That's...an \"Infernal\"...!",
                "line": 44,
                "url": "https://drive.google.com/file/d/1zn0KcmcvUGwN_MHyTG3PovFx3lsvC6vT/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "...Hey, Kusakabe! What's the situation? Where's the Special Fire Force?",
                "line": 45,
                "url": "https://drive.google.com/file/d/1U-GqpFp3hOBmSWYACAfBJ7szPZG3P1Vm/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "We're the only ones here!",
                "line": 46,
                "url": "https://drive.google.com/file/d/1JZmCwAcwk3CmUYeVuTSTuts9OTJC33VN/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Then there's only one thing to do. Are you guys ready?",
                "line": 47,
                "url": "https://drive.google.com/file/d/1Yp1UHy22_JAXRxc3yMNt8O6ANYcF7fcl/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Y-Yes! I'll put it to rest!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1Rke0xARpPPC4uxLx0bn8kr29ahhEmgNc/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "The flame is the soul's breath... The black smoke is the soul's release...",
                "line": 49,
                "url": "https://drive.google.com/file/d/1JdDBaYAmqYd0Kl2Vo4iaEen3DnkQCVF-/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Ashes thou wert and art... May thy soul return to the great flame of fire.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1ngE-SC6GQKwtP0Y6otixrsM2UsYWoA6J/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...That should do it!",
                "line": 51,
                "url": "https://drive.google.com/file/d/1g8D-YveWmiwTmXpjLIg1bdX15nLhsKSy/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "L\u00e1tom...",
                "line": 52,
                "url": "https://drive.google.com/file/d/1vGyVIeySo5TQC57mzoYNZJ6zEu5KaJaW/view?usp=drivesdk"
            },
            {
                "name": "Chuvi",
                "name_variant": "??? (Chuvi)",
                "subtitle": "Wh-What is that phenomenon...?",
                "line": 53,
                "url": "https://drive.google.com/file/d/1ric3pCY9YW3jKBTSyhQT6suyykYYGY-v/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "??? (Kanen)",
                "subtitle": "An unknown power... They're using it to create and control the flames...",
                "line": 54,
                "url": "https://drive.google.com/file/d/1hpX8_4CBB6mLW5D1jrrg_BB07SU3B5K3/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "A pillar of light, an unfamiliar place...an Infernal appears, and there's no sign of the Special Fire Force... What's going on?",
                "line": 55,
                "url": "https://drive.google.com/file/d/1kGoFpmQpgd5gUrVADo9328iZiaoRFnei/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Hey. Let me ask you something.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1oKF4FCeDCnnID-Z74DrfvqE092WayMsX/view?usp=drivesdk"
            },
            {
                "name": "Man A",
                "name_variant": "Man A",
                "subtitle": "Y-Yes...",
                "line": 57,
                "url": "https://drive.google.com/file/d/1CIuHoZRjQ-zjrKG3uI_tEp35d1CFbRge/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "The people here don't seem to know about Spontaneous Human Combustion or the Special Fire Force...",
                "line": 58,
                "url": "https://drive.google.com/file/d/1-skjkyCCq-xNFEF-8jWXsGLHbahY981_/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "And they keep mentioning a bunch of places we've never heard of... I'm honestly getting confused.",
                "line": 59,
                "url": "https://drive.google.com/file/d/1Y1nGJBGgDR60iggC8ZUJemeDABYqYl5c/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "This definitely isn't a place we're familiar with.",
                "line": 60,
                "url": "https://drive.google.com/file/d/1582exu7FMkOvaB1FmO1qg8dRoxh-HLOI/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Since we were swallowed by that light in Asakusa and ended up here, if it shows up again, we might be able to get back...!",
                "line": 61,
                "url": "https://drive.google.com/file/d/14sB0XzB7A192EhN8la5T4IG-rQDuwlQR/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "No guarantees...but standing around won't help. Let's gather information.",
                "line": 62,
                "url": "https://drive.google.com/file/d/1N5jC0JlJFTe4ghbpzcXTso1ve93Ee5c_/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "??? (Kanen)",
                "subtitle": "Excuse me... Could I have a moment, please?",
                "line": 63,
                "url": "https://drive.google.com/file/d/1R8-CnMNc5hKCW7OU4ZIM2LjN08mWNLN8/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...What is it?",
                "line": 64,
                "url": "https://drive.google.com/file/d/1u3-Y2MXg1E_BWOPMVY9zQ3M1h0li7dRJ/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "My name is Kanen... Thank you for your help earlier.",
                "line": 65,
                "url": "https://drive.google.com/file/d/1N6AXmZcrUIsik-CslcX7e9-VtqObnKB6/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "We're the Special Fire Force. Protecting civilians is what we do\u2014",
                "line": 66,
                "url": "https://drive.google.com/file/d/17pUy2B4QHelFB35l1yy1hcx_V8Z2AW4m/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "No, it's not just that. That burning humanoid monster was...my friend.",
                "line": 67,
                "url": "https://drive.google.com/file/d/1bS-xo88urM5BQNStyiX98tUXcyfKLDBi/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "I see...",
                "line": 68,
                "url": "https://drive.google.com/file/d/1X30MU5sXQAGOmX805-IrlriBfZc4AG62/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "I don't know why it happened... One moment he was engulfed in flames and the next he started rampaging...",
                "line": 69,
                "url": "https://drive.google.com/file/d/1CL6d1M6WmcrUdu84DxnLntJAxrxt8AMR/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Thank you so much for stopping him before he could hurt anyone.",
                "line": 70,
                "url": "https://drive.google.com/file/d/1o4B5__l4w2tg7OrhOJcYtCdmcO4lR6WX/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "I heard that you all seem to be in some kind of trouble. Could I help you in some way?",
                "line": 71,
                "url": "https://drive.google.com/file/d/1qmxcJQRKe1Z0_Wu-_XRGqCv-A1NiNzY0/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Really?! It would be great to have some local help!",
                "line": 72,
                "url": "https://drive.google.com/file/d/1LeBhdtCz1Qw75zf3zGNI53UzTczNlCTf/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "What do you think, Tamaki, Captain Shinmon?",
                "line": 73,
                "url": "https://drive.google.com/file/d/1VR_SSech_S7_ThmOiXZDBoXxtHmf2db4/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Why not? We don't know anyone here anyway...",
                "line": 74,
                "url": "https://drive.google.com/file/d/1994Swtb8yGt86U9PLXVkLUmDEYpgOV-k/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...",
                "line": 75,
                "url": "https://drive.google.com/file/d/1Oe1Jv1KJmahcBuxlLVrRzlOc7ajEI78a/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Captain Shinmon?",
                "line": 76,
                "url": "https://drive.google.com/file/d/1mCrpaXmyb8rXbKbgAES7f1Ye5Fwi6rbw/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...Well, sure. It wouldn't hurt to have a local's help.",
                "line": 77,
                "url": "https://drive.google.com/file/d/1kiLgYPTpPla5KEvA5eP-4iI-Wzh00SPH/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Then it's settled. Please start by telling us about this world!",
                "line": 78,
                "url": "https://drive.google.com/file/d/1YyRFv0Ss27Np1Db7gSxEonc1ZURTEm8o/view?usp=drivesdk"
            }
        ],
        "e2": [
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...I can't believe you let him use an unknown artifact without even reporting it to me... That was utterly reckless.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1YTkwc_C-VJb5gSLmpXuygIRs0HqHGnsK/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I'm sorry...sort of.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1UzhzwnBYSjr3v4GNDXBB0r2h6i6PZrOH/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Sort of, huh? Is there really any point in talking until you're truly sorry?",
                "line": 3,
                "url": "https://drive.google.com/file/d/1uRYsp_6wnv6sGqhFKR8V6dW3GslYPzq3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Well, I was totally on board as well, but...I'll just keep quiet until Alpha finishes scolding her.)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1bvmeoDQODqZT7OBLH18jZHZuQszZ5RQG/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Ah, looks like you're in the heat of it, but...I'm here to report on the said artifact.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1QCP3Z0BZyYMNtX_TwO-91x5JKSinDGXP/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "If I recall correctly, you were involved in this too... Anyway, fine, let's hear it.",
                "line": 6,
                "url": "https://drive.google.com/file/d/18-XBEVmVKDAqzSfXlW7f31EF2TYZLNuK/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "To get straight to the point...it seems we really did summon people from another world.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1OWjpypohvNixsJ3czAZQA4k_GGx1E9px/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh, really? Are they here?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1NbjntlUilSz_L5Xck1QjMNoQFrQOxMs4/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "They're a group of four who appear to be otherworldly visitors. One of them is likely a local ally, arranging their lodging and meals.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1gB6sbA9l4aV31xtSHxJfsuGC72stMv3t/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Also...since they showed up, humanoid monsters engulfed in flames have been showing up at night. The otherworldly visitors are handling them with fire.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1h-6cgbd4q_shZ5G-asd63WxNfqlq_frn/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "At first, people were suspicious of them, but now they're treated like heroes and have been completely accepted by the local residents.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1WeruCLW9IWp-NnrJ-E4wbOEiRnJYiOET/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Humanoid monsters engulfed in flames and otherworldly visitors who control fire... They seem related somehow.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1-QLt15c7fxf0mVO1rBgYMETPZ6vI-22k/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "We can't deny the possibility of the Cult being involved... These monsters...might be caused by a magical overload...",
                "line": 13,
                "url": "https://drive.google.com/file/d/1sfhNyohgm94HdTryNnLxeyyzQZXrsDSc/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm also curious about the sudden appearance of these allies. ...It might be best to get in touch with them and find out firsthand.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1QcKnc6HbtU6QkcORu5R8AlbZQxc_Z5lb/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "In that case, it might be best to send Beta and Epsilon, who can operate both publicly and secretly. I'll have them go immediately\u2014",
                "line": 15,
                "url": "https://drive.google.com/file/d/1GDnxMWo8NXt-ogywaeHjZIWHGlu_ZgcE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'll go too.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1j301xA2H8FMVKI6C9kBR5P6chsAYXOgx/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No, this is just an investigation. I don't want to trouble you.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1F8FXa18RkS4qpTXRIDm9KqHoxvvT0Gjp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Oh no you don't. We're talking about heroes from another world! It's a perfect chance for some shadowbroker play! In that case...)",
                "line": 18,
                "url": "https://drive.google.com/file/d/1NWYXrDnY1U4KIzZTvDq9mDYa37bX2iJf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Don't you see? This is a turning point. I must witness the great wave that will engulf the world...",
                "line": 19,
                "url": "https://drive.google.com/file/d/1ElULdlFFd0Y8VkQhZiDyfb2QgR32XR5Y/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "This incident is a prelude to that...? What kind of future do you see...?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1UhTVRlktZ61tyTmDQJbUc9aFBY4DenxS/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "In that case, I'll leave this matter to you. Please take Beta and Epsilon and head there.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1aMAG3r-fw43FBNy1AZtm_M195OqTx4xb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Yes, managed to persuade her! That said...didn't Alpha give in a little too easy?)",
                "line": 22,
                "url": "https://drive.google.com/file/d/1ZG_ukfYjqsLdmBwmYCOrddbPptzfYeaS/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "This is the town mentioned in the report. I'll get right onto finding the otherworld visitors!",
                "line": 23,
                "url": "https://drive.google.com/file/d/1y89ijmA2mY7IHP0MlH63hss6HrNDUE2o/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "No, my lord! The basics of investigation start with gathering intel. Leave it to me!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1yWJtEHR8Ycgy0x3TBWeYgLkS2a99XhoR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hahah... Both of you are so reliable.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1OkDVd2MV1icN9OLbbpfBsUt_FzSfdwSx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Wait, what is that? Could that thing burning over there be\u2014",
                "line": 26,
                "url": "https://drive.google.com/file/d/14KBzr3NznIP0uCs3qZJwAMeOnZsHJMru/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "The humanoid monsters Zeta mentioned...! Epsilon, prepare for battle!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1ejn8Ntq1nHbHAJdRTNfxGrAZe6GPqa4g/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wait a minute. It looks like it's being chased. Could it be\u2014",
                "line": 28,
                "url": "https://drive.google.com/file/d/1hWFO_vtBRuuUtXulfADtEikZ8Zr_WXc6/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "May thy soul...",
                "line": 29,
                "url": "https://drive.google.com/file/d/1PmTO-SnT5nhR1dK0R5XT-8qsy5PJ2Zx6/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "return to the great flame of fire...!",
                "line": 30,
                "url": "https://drive.google.com/file/d/1W_MsACgbLXB6z-nYLo38ulYizTDGS-GX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh, nice kick.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1L36AQcfpXkKiETSQGqM_uhpnr2Bc1nFJ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "He took it down with one blow. And those flames he used... It matches the intel from Zeta's report.",
                "line": 32,
                "url": "https://drive.google.com/file/d/15RSPaB2DfoxtfWbbtv0bu4-tdIpztHkl/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Including those two behind him, those three must be the otherworld visitors.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1KoCheo9qqGiLjzWEPm97Wv7XSXHIw3BD/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...They're coming this way. Epsilon, let's use our public personas just in case.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1kiKwkWGpzgOBAEi88gutY1yG5DjJWZ82/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Hey, are you alright? Did any of you get caught up in what just happened?",
                "line": 35,
                "url": "https://drive.google.com/file/d/19EF29er1EsC1H06JH5dk0tf4x0FTdP0W/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "We're all fine. Thank you.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1GsNhC01kqT3mh45V4OB2Sk79uo3mnQM4/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Whoa, your ears are so long! And those outfits... You're not from this town, are you?",
                "line": 37,
                "url": "https://drive.google.com/file/d/18ib6oN7gHdQOvBeoGYKA0qxK4M9WfA5K/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Well, I'm an elf. My name is Natsume, an associate of Mitsugoshi. This is...sort of a uniform.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1Vi1D_OX0pfGQB6hvKab-qleiylnzgUJE/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Mitsugoshi... Wait, I've heard of it. It's a big company in the city, right? So that's their uniform, huh?",
                "line": 39,
                "url": "https://drive.google.com/file/d/1H5LGGrs7x9Y_aCWRnrGQEEcgfrwT5BiH/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Getting caught in my slime suit was unexpected...but they seem to be buying it.)",
                "line": 40,
                "url": "https://drive.google.com/file/d/1T_dEULZlYHzXAM0iGVW-Ri24OUzEhHyh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I'm Shiron, also an associate of Mitsugoshi. And this is\u2014",
                "line": 41,
                "url": "https://drive.google.com/file/d/1X51U58U_UKIWEDAJ0BXsjmnXnYq_wwDM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Uh, I'm Cid. Nice to meet you.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1n0CGhYuI1lY5GpxE7ZPf5EbHrjCqHIgM/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "...",
                "line": 43,
                "url": "https://drive.google.com/file/d/1DjOaH22HhncPjBnx0qqO99OZOIvs6px6/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...My lord, why is that guy grinning and looking down the whole time... Who is he?",
                "line": 44,
                "url": "https://drive.google.com/file/d/1rtid-XQZY9ZTm1k-5JJ0uy1iOOi8dMlv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Don't worry, he's not a bad guy. He just helped take down that monster.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1IeQ4UL05IJQ-m6SxZwSfPZopKEwB8S03/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(A smile is a prerequisite of a hero. Plus, controlling fire makes him look even more like a protagonist! Perfect!)",
                "line": 46,
                "url": "https://drive.google.com/file/d/1XWNni2xaID4tx14mH-RnZ_QCbp-y6GQA/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "We heard monsters were showing up in this town of late and came to investigate. That thing engulfed in flames must have been one of them.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1AC-Bde5v6pe8UYtkAZG6Zw0fwdq8Nj5N/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "That's an Infernal. Not a monster.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1t6e21jGthYWpTxZarmbeIUGf83UYVxUc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...What do you mean? If it's not a monster, then what is it...?",
                "line": 49,
                "url": "https://drive.google.com/file/d/12EzUa0qvmP3oQimTUu0S0JyjT3pv5o8E/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "...It's a phenomenon called Spontaneous Human Combustion. People suddenly burst into flames, lose their minds, suffer and rampage until they die...",
                "line": 50,
                "url": "https://drive.google.com/file/d/1uEPLsX8g-SSv7Ng0VnfEk9SBmdho8h0Q/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "We call them Infernals.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1ReCFbqKrN5WhecWJDWXrB4cd1K3kPkRG/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "So that thing earlier was\u2014",
                "line": 52,
                "url": "https://drive.google.com/file/d/1Z50M4Nmw5sUPsb2PaVmz-BA1SXlyZPXO/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "...Someone from this town.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1v2miY9KqemZxeuMvfv6UK8vb0qo3TQCY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That's terrible...",
                "line": 54,
                "url": "https://drive.google.com/file/d/1wjTylPewoOGKPkgkbffQGvb4fregiZKb/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "But don't worry. Our job as the Special Fire Force is to put Infernals to rest and solve the mystery of Spontaneous Human Combustion.",
                "line": 55,
                "url": "https://drive.google.com/file/d/14cli2V02OgHaWUVQqiKzjN84aYBpHyJs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Spontaneous Human Combustion and the Special Fire Force... I don't understand these terms. Where are you all from...?",
                "line": 56,
                "url": "https://drive.google.com/file/d/1QL40gRPm4idi9BkKvLdESG1UiaXw7KqI/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "You might not believe this, but...we're from another world... Somewhere different from here. We think so, at least...",
                "line": 57,
                "url": "https://drive.google.com/file/d/1mOXLr6ZFUExmYFxRpA8JsVu-3SZSFGMn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "A-Another world?!",
                "line": 58,
                "url": "https://drive.google.com/file/d/1iTF_QCrLZGxCMEzhNZUHKgqcdZPQQZxI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yup, just as I thought! It's better to hear it straight from the horse's mouth to avoid any confusion later.)",
                "line": 59,
                "url": "https://drive.google.com/file/d/1umsENzmIBaA_PWyMo-vXHssmpqfWHF-C/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...I see. If you're from another world, you must have run into a lot of difficulties.",
                "line": 60,
                "url": "https://drive.google.com/file/d/1aFt89MhKG7pD2jj4nUdQiX0_tfkTjL60/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "And your mission is to deal with these Infernals, right? Maybe we can cooperate.",
                "line": 61,
                "url": "https://drive.google.com/file/d/1tpot9YU3kVU2V_GxIhb-VTM7ps5pFNwn/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You share intel about these Infernals, and we'll support your activities and help gather intel to return you to your world.",
                "line": 62,
                "url": "https://drive.google.com/file/d/1sD6fIiBQInLnLEj6rDsAbzt50SylK-OT/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "With Mitsugoshi's network, we can gather a wide and deep range of intel. I don't think it's a bad deal.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1Gg7PPCf19A1EhA8KRs10MnQj5ZwMjld1/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...Sounds too convenient. Are you hiding something?",
                "line": 64,
                "url": "https://drive.google.com/file/d/1Ad1f6GukMtYdgw4Yrnuk886qOOa8kAHO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid & Beta & Epsilon (Cid)",
                "subtitle": "What?!",
                "line": 65,
                "url": "https://drive.google.com/file/d/1tP_74RtyApG2NJzkPMFIlF8eAOxqObAj/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Cid & Beta & Epsilon (Beta)",
                "subtitle": "What?!",
                "line": 65,
                "url": "https://drive.google.com/file/d/1tP_74RtyApG2NJzkPMFIlF8eAOxqObAj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Cid & Beta & Epsilon (Epsilon)",
                "subtitle": "What?!",
                "line": 65,
                "url": "https://drive.google.com/file/d/1tP_74RtyApG2NJzkPMFIlF8eAOxqObAj/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Is he talking about the Shadow Garden...?!)",
                "line": 66,
                "url": "https://drive.google.com/file/d/1Pt9sZe9tPNRFBMvOFwavUkEXbeeboHPE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Is he talking about the artifact...?!)",
                "line": 67,
                "url": "https://drive.google.com/file/d/1E9Q1BT2cmNTBZ-t_6BZTwU2tZH7y5SxZ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Is he talking about my chest...?!)",
                "line": 68,
                "url": "https://drive.google.com/file/d/1uCt-TUnGJevikwPumzfxQQ5II1GBfqL5/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...Well, anyway, we'll decide if we can trust you based on your actions.",
                "line": 69,
                "url": "https://drive.google.com/file/d/1lqa3JBftdZRNXy1DoyCTdOg-X5kF89sC/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "O-Okay... For now, let's establish a cooperative relationship. Looking forward to working with you, uh\u2014",
                "line": 70,
                "url": "https://drive.google.com/file/d/1t1OHOrEr3KxuDt-2J2UhK8aXW1a5GVtZ/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Oh, right, we haven't introduced ourselves... I'm Shinra.",
                "line": 71,
                "url": "https://drive.google.com/file/d/1k2T9FKx4YixcakEep1r0jJkMnRj_JQRB/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...Shinmon Benimaru.",
                "line": 72,
                "url": "https://drive.google.com/file/d/1FjRrSmWERuvmymFvSzIUMo4vke3o378W/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "I'm Tamaki. I'll teach you about putting Infernals to rest! Especially you, Cid. You seem a bit absent-minded, so pay attention!",
                "line": 73,
                "url": "https://drive.google.com/file/d/1l1seLeU5GCENPkh_qvGiOAHvT8--KQcm/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "First of all... Nyaa?!",
                "line": 74,
                "url": "https://drive.google.com/file/d/1GQsNGZ8YEjJpBcH0EJS6hyZb-DaHM1nq/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Wha\u2014?!",
                "line": 75,
                "url": "https://drive.google.com/file/d/1ukD5_MYNo8j2xf3et7tMjIOpY-JRBHcA/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Tamaki tripped and ended up in a compromising position with Shinra...?! Oh my... Memo, memo!",
                "line": 76,
                "url": "https://drive.google.com/file/d/1QSLyo8M9JHWmLz1YGc_Giyzxbm0TxgTZ/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "H-Hold on... Shouldn't the \"Lucky Lecher Lure\" have targeted Cid...?!",
                "line": 77,
                "url": "https://drive.google.com/file/d/1v9q4uRVejJF7Vo5PSaaAnVDoDdtHyGhl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(These kinds of happenings are for the protagonist. I'll stay out of them, thank you very much..)",
                "line": 78,
                "url": "https://drive.google.com/file/d/1JiTjXvrAdfDV6b4RdOXDR9tl73eRPfPH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(And now I see... With these protagonists around, my shadowbroker moves will be even more effective!)",
                "line": 79,
                "url": "https://drive.google.com/file/d/1WH7Yhcc5n5rX9OhmCmQVI-4BIvfuU6DD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Nice to meet you three. Wait...three?",
                "line": 80,
                "url": "https://drive.google.com/file/d/17aijjULuZBgWqlgc-xxNIeB0dzCopHCW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(The report mentioned a local ally... Well, whatever.)",
                "line": 81,
                "url": "https://drive.google.com/file/d/1z1A1fK9Ntny9x6wc_GO7ohyj5iRyt3Ui/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "??? (Kanen)",
                "subtitle": "Those black outfits and weapons... Could they be...?",
                "line": 82,
                "url": "https://drive.google.com/file/d/1L-FiegJ88kX9A-VTGR6mzUW-j2agAZFu/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "??? (Kanen)",
                "subtitle": "If I defeat them here, I might be able to join the Rounds... Hehehe... I need to hurry with the research on this \"Bug.\"",
                "line": 83,
                "url": "https://drive.google.com/file/d/1gzsUTDefzNHCnw9p7VV_AruKrfQRntG2/view?usp=drivesdk"
            }
        ],
        "e3": [
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I didn't notice last night, but so many houses are destroyed... The Infernals have done extensive damage.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1zn0LShob8XTCEao-YfJQ42aDzqYJuzgP/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Uh? No, Captain Shinmon did that...",
                "line": 2,
                "url": "https://drive.google.com/file/d/1lDN07UbxL6HBD4dVWKtBxZg2mIYhzQgW/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Benimaru destroyed them? Why would he...",
                "line": 3,
                "url": "https://drive.google.com/file/d/1yhk3w70wwPHq9KI326KJpLS2ER5APxqb/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "That's his way of putting them to rest. Rampaging, destroying things, and sending off the dead with a bang is the Asakusa way of honoring them.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1WBtWvcjCtpcVzH_FA688TA9l1P8Sk5m3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I kind of get it, but not really... Are the townspeople okay with it?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1ID_CyZKDhtyzttoZBbWmioBmTBr1LnrO/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Captain Shinmon isn't just about destruction. Look\u2014",
                "line": 6,
                "url": "https://drive.google.com/file/d/1i3wG7WJjoC2VFFDYQmzYcLZDBxUba_bK/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Cid! Help me carry this wood! Let's get this house built by today!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1CiEl-e0uWEPHx8V8PTfozUfoC2cOZIfu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "G-Got it... Ugh...",
                "line": 8,
                "url": "https://drive.google.com/file/d/1uUrgJNHU0oqM5sRRzPk7lkyo5YED11em/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...I see. Repairing the damage is part of it too.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1A2X3El72zs3CLWr4IC9WbNRTuevFeDTh/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Well, let's leave them to it... Natsume, Shiron. Let me teach you about putting Infernals to rest!",
                "line": 10,
                "url": "https://drive.google.com/file/d/1SN28AZ4LHJD9I-qwVyzfBp3rf1ZbxMJH/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes, please!",
                "line": 11,
                "url": "https://drive.google.com/file/d/1GVoFRJ5-JuTElK1Z1jxXzkMCtPZDM4fi/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "To stop an Infernal, you need to destroy the core in its heart.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1N2cZ4eu2TvXhZ7Ujo1qYJsoPB7WGkQ81/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "If you take too long, it prolongs their suffering. So if you have the chance, finish it in one hit.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1pELOBLS_SMiTx8HGYN6R0Fi6uysyqCfL/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I see. That's the compassionate thing to do for Infernals.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1Ctkd1c-UKLeK54zpAd3-yx7Peth7-TDw/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Exactly. So, let's practice targeting the core! Watch my movements closely\u2014",
                "line": 15,
                "url": "https://drive.google.com/file/d/1Ij21lxsOpVzjfos_QSRSPUKevXqEDn6f/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "...Nyaa?!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1clEKz2mTENftc4vxmSG3y-fl3rPs8Lht/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Wha\u2014?! Why are you dragging me into this again?!",
                "line": 17,
                "url": "https://drive.google.com/file/d/1wfLEP0zMJaJvhwbTzyuLklm75jNmmzm-/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh, another compromising position! I want to learn more about this than putting Infernals to rest!",
                "line": 18,
                "url": "https://drive.google.com/file/d/1lhyqlYHMlUYcOBCYjTBObk-0R_gOcKWY/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You've been saying that since yesterday...",
                "line": 19,
                "url": "https://drive.google.com/file/d/17WUiYPqX7X6VgbTfrRVvXymRvMfawGLv/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "It's not a technique! Get off, Kusakabe!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1Zw84GFieUin9vsDq_Z7mMDaou6rKVNuC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(They seem lively over there... Meanwhile, here...)",
                "line": 21,
                "url": "https://drive.google.com/file/d/1MuM9FljGOkc1zd6zbjp4IMrIRx3d8lNC/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Hey, quit slacking off.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1LsbWZMzyBLRX7S_f9PC70B6fDDszd4n0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yes, sir...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1MaVOxCiTPKguxiz1kT9uXuh-qAmwUWow/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Good work. Why don't you take a break?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1cu-eWg9jbZTDP6ShF8u2PAShb2-WLjM9/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...Oh, it's you. Have you found a way back to our world?",
                "line": 25,
                "url": "https://drive.google.com/file/d/13oKM5XmjJSLiDZXtjOOzsPxCS8E37HLt/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Unfortunately, not yet... I'll continue to investigate.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1MfMbKHZU4aBNUY32M4an0IZHvmJKTT0b/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "I see. In that case, I'll get back to work.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1DEGwqsxfC39lGhTaeHzwAp-Swiq7kbPh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...There he goes. He's one brusque guy.)",
                "line": 28,
                "url": "https://drive.google.com/file/d/1z02bUHCusk0o04rrg3V1UROa77xnSUIx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Is this the local ally? He could at least give an introduction...)",
                "line": 29,
                "url": "https://drive.google.com/file/d/1_Yghq0B3gUccuguVgMrUYqAETKeNqb1a/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "What a cold individual. And you are...?",
                "line": 30,
                "url": "https://drive.google.com/file/d/1gSVAFeEXYEad00LSiQiZlSHsF4rfuNBY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh, we came to investigate the monsters around here.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1oTbDXVETMu4AlMNiopfKSxgUVSyoDyoL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "We met Benimaru and his team last night and decided to work together.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1uvroW6rxCSABAHWginALLS4vrx7on6xF/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "We... You mean those girls with Tamaki?",
                "line": 33,
                "url": "https://drive.google.com/file/d/1BIimg8FhnK3GpBn2fU1b0pn7BBdibikG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yes, they're with me. And you are...?",
                "line": 34,
                "url": "https://drive.google.com/file/d/1bV69GHuqvjoHPllVwSL9r7Dyf5CP4L6M/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "I'm Kanen. I'm also researching these monsters. How about we also work together?",
                "line": 35,
                "url": "https://drive.google.com/file/d/16KxnaEqXgD0q55fMm-_w_OzeGV_E3sJi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hmm, maybe if the opportunity arises.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1pZnrwMmJ14E37DeLp8ku4o0kIqq1RS9W/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Please do consider it. Well then, I'll be off...",
                "line": 37,
                "url": "https://drive.google.com/file/d/1dbyDjM1WetmE_qbdDV-Wab196Esf4nVK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 38,
                "url": "https://drive.google.com/file/d/1jYlH56zGW94vXxWri6E1BQ-ShNIv2QJc/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Hey, Cid! Looks like it's lunchtime.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1YjvixW-6MHq5HNE0s6Mvn85ympiCvwT6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Okay!",
                "line": 40,
                "url": "https://drive.google.com/file/d/13V7mB9ln-jw_2VyhnCURBJUAsyQ7wiUn/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Did you find out anything about that \"Bug\"?",
                "line": 41,
                "url": "https://drive.google.com/file/d/1RY1XQENp8Q9DCXsl7acyFivMtCiczL9m/view?usp=drivesdk"
            },
            {
                "name": "Chuvi",
                "name_variant": "Chuvi",
                "subtitle": "This \"Bug\" appeared with the otherworld visitors. It turns people into Infernals. Beyond that, we don't know much yet...",
                "line": 42,
                "url": "https://drive.google.com/file/d/1GsU7WbMXN_Ve5RZbLcgfvzQJcNKAi1SL/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Then get more test subjects. Experiments are all about numbers. The otherworld visitors will likely remain in town to investigate. Use Infernals to test them.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1LQnhmyLrNWmLh1lY6REq5bevmu443fZG/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "First, test if the strength of the subject affects the strength of an Infernal. If it does, mass-produce stronger Infernals.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1-DmQtbjKbgEs89YzNd-6rE82J3gsGidL/view?usp=drivesdk"
            },
            {
                "name": "Chuvi",
                "name_variant": "Chuvi",
                "subtitle": "Understood.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1xMTPjnBF6a5IQpKDrIw4rF2JfD-Lmlne/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "One of their companions looks weak. We don't know why they brought him...but we should also test turning someone as weak as him into an Infernal.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1Vl6CUc_ovT0Osfklbi8f06rGmYj5CMXT/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "If someone close to them turns into an Infernal, they'll be shaken. When they let their guard down, even we may be able to take him out.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1BDiGTgYwHhj5soq16qlB2vnergaiFkXx/view?usp=drivesdk"
            },
            {
                "name": "Chuvi",
                "name_variant": "Chuvi",
                "subtitle": "As you wish.",
                "line": 48,
                "url": "https://drive.google.com/file/d/18xuEQHr64SEOdIf6fIXyS9Go7d8Zu1f2/view?usp=drivesdk"
            },
            {
                "name": "Chuvi",
                "name_variant": "Chuvi",
                "subtitle": "You discovered me when I was a mere Third Child and raised me to a Second. To repay that debt, please command me as you wish.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1xii5igWaV_AGaJRmwaZns8_vz2bj-3I_/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Then go. We'll operate separately for the time being. Report any findings.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1J1MG8V-racrKeoXBoxYtIgDZ85sphpDZ/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "...A third-rate individual who can do nothing more than follow orders. Oh well, a useful disposable tool.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1Dru1tzA3e6H-iB6euI44MxM_grS_Vfw_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Whew, talk about reviving... If you work hard, you have to eat hard as well.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1td634O6zyGAV-1MzSld30Qgnw-N4L4hN/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "By the way, Mast...Cid, who were you talking to earlier?",
                "line": 53,
                "url": "https://drive.google.com/file/d/1D4j5JRirlYqyl-HlXx0AkTfB6HBg0usj/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...Kanen. He's our ally here. He's separately investigating a way for us to get back to our world.",
                "line": 54,
                "url": "https://drive.google.com/file/d/175N2tsXfzP73Roqs3lleTEru4XeI7g5u/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "He said he wanted to cooperate with us as well. Wasn't sure, so I gave him a vague answer, but... Oh, more rice, please.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1GnvEjpqZgbQQw7xiR4kv6NOPOK_3h-SZ/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "If you eat that much, you won't be able to work in the afternoon!",
                "line": 56,
                "url": "https://drive.google.com/file/d/1J8vU-yVE4JTFBpeIDjkyEj94DYvHsS84/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Hey! Since you're here, let me teach you about putting Infernals to rest! It'll help you work off your meal!",
                "line": 57,
                "url": "https://drive.google.com/file/d/1qIp8clf60cUeAMgHGGe-PVE2hLn-JtoX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Uhh...I'll pass\u2014",
                "line": 58,
                "url": "https://drive.google.com/file/d/1XaRdAvFEQhXKGnH8_sQnw9DVeUrJq9tg/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "I'll train you.",
                "line": 59,
                "url": "https://drive.google.com/file/d/1ULwBBZIAWkdIOQHcMKwwihi-WhNB-ERA/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra & Tamaki (Shinra)",
                "subtitle": "What?!",
                "line": 60,
                "url": "https://drive.google.com/file/d/1tgo6l6ZJu-Ovcg7_goMNY9Uw4b1Xo6hg/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Shinra & Tamaki (Tamaki)",
                "subtitle": "What?!",
                "line": 60,
                "url": "https://drive.google.com/file/d/1tgo6l6ZJu-Ovcg7_goMNY9Uw4b1Xo6hg/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "I-If Captain Shinmon trains him, Cid will die!",
                "line": 61,
                "url": "https://drive.google.com/file/d/1TkRvsaua0y-RA3t1mC-qNbstcUxlLfWU/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Exactly! He was exhausted just from the morning work...!",
                "line": 62,
                "url": "https://drive.google.com/file/d/10SeJZTkyLUrrfkyy2kePL64qN8uF0LYH/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Ahem. Leaving Cid's stamina aside...how strong are you, Benimaru?",
                "line": 63,
                "url": "https://drive.google.com/file/d/1yGaB8SrFc_btOti5ucp5UAA8miu7dYpe/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "If you're going to train someone, you need to be in an appropriate position to do so.",
                "line": 64,
                "url": "https://drive.google.com/file/d/12sHIKm4JcX9ETUSKflWuPNrizw9MMSr0/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "There's no problem in that regard.",
                "line": 65,
                "url": "https://drive.google.com/file/d/1Zxz02a6oFl3sAH_Axp21Ui0EaYmhsqMu/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Tamaki's right. Captain Shinmon is...the ultimate Fire Soldier.",
                "line": 66,
                "url": "https://drive.google.com/file/d/1IskUDgGMDjSjp5KQ2CcLVkrMTqDsB9W4/view?usp=drivesdk"
            }
        ],
        "e4": [
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "This spot should do.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1DcXB8jTzCWqlOWFCYTZRa-AmqF7nTeDb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Um...Are we really doing this? I have no talent for swordsmanship, so I think this is pointless...",
                "line": 2,
                "url": "https://drive.google.com/file/d/1xh0kQf6mSJCCKNzBvI4hw5eMf_BZgFw4/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Shut up. Swing your sword.",
                "line": 3,
                "url": "https://drive.google.com/file/d/10zLTP1LHO_DTiPOGjYmbVXHFNHkI7ajh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...Oh well. I guess I have to go along until Benimaru is satisfied.)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1aLqmKrSRm2BngGkMcWEqTlmpzDrMZVLA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hyah. Hah.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1UNgSwsRqgdNv3Fl62zjm2z1aaxkQAjko/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "That's not good enough.",
                "line": 6,
                "url": "https://drive.google.com/file/d/18R7a3L4jR5MdA0hGL3TWrehGJxRqMtGt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'm swinging it the best I can...!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1qcf-2Vda5jJwmOllZPfSXpZYOuViRzaM/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "No excuses. Continue.",
                "line": 8,
                "url": "https://drive.google.com/file/d/18Ezx6VR56o8g0Nl6x97atqFsfVosEc9b/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Yes, sir...",
                "line": 9,
                "url": "https://drive.google.com/file/d/1J2lLH3BfK0GoIVUVlOzhdsMiogjQp8Fp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "*pant, pant* Are we gonna keep on going...?",
                "line": 10,
                "url": "https://drive.google.com/file/d/19KwC669QHkDwOR5P96EGM8DAgJLPvRcQ/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Yeah.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1UWs2C9t4UyMGQxPkqRUiSE6ULSMzqL3u/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I can't go on... My arms won't move anymore... This is too tough... I wanna go home...!!!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1-uonyL9t5T9_eaGQpwP8xUuVdxrzriNR/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Shut up and get serious.",
                "line": 13,
                "url": "https://drive.google.com/file/d/16hx39PaACdgJ12Lw992TjKq_zRj7IttW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "You're not listening to anything I'm saying...",
                "line": 14,
                "url": "https://drive.google.com/file/d/138vBoAdcU_fOfSVVeLiJl-G-XqLSp2x5/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It's completely dark now... They're still not back.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1eYnNKJj1Vz09-Jk7-Ec_mtAYg-x6jWun/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "... I'm starting to get worried. Should we go check on them?",
                "line": 16,
                "url": "https://drive.google.com/file/d/1FVoOFGGmupDW84AQPjOOyTDVpX5wJp7G/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Could you please wait a little longer? Captain Shinmon's actions are hard to understand...but I'm sure it's for a good reason.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1ufvEiSw8-dTnahxEz2gtRsnf4Zk6I_mJ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "...",
                "line": 18,
                "url": "https://drive.google.com/file/d/12im0uSr2k_K-H2SpbuCNZ_4l8zerT52-/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "...",
                "line": 18,
                "url": "https://drive.google.com/file/d/12im0uSr2k_K-H2SpbuCNZ_4l8zerT52-/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You trust him a lot, don't you? If you insist, we'll wait a little longer.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1_x_K1Tfaz78nL-LrC6OMeFWRLXQ-lJ0q/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Umm... Don't you think it's time we head back?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1pIf5tTzk8-Buu4qqnge6jfuqn8sdgU3W/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...When we first met, I asked if you were hiding something.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1WfgmnmqIg0KwzxbPofGxYJBPF72aZglj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "R-Right...",
                "line": 22,
                "url": "https://drive.google.com/file/d/1QWGaugpOrBpSlVIe2k9eqTzWLp8sYZFx/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Now I know. What you're hiding is...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1rSApk2lQ6cRyeFluqAjyPbMzCIQpjJgP/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...overwhelming power.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1-_0lmRUHYKDXSBowd48Jfwgbxc_4O-bb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 25,
                "url": "https://drive.google.com/file/d/1slLWgMCKK1f_aCwKLnb_GkMhXdruyqns/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "I don't know why you're holding back, but...show me your true power.",
                "line": 26,
                "url": "https://drive.google.com/file/d/11nAvVJ-Puy63CIbUq-Gw_GQbpYezxgmZ/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "If you won't do it willingly, I'll make you. Only by clashing can we understand each other.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1qrLeySO-QIY3qvE1WtIr9onzoaCF_Tc-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh? Y-You want to fight?!",
                "line": 28,
                "url": "https://drive.google.com/file/d/1O_3teQnfo_4sMoRSrsePGZ-vNJ089R6Z/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "That's right.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1kbcV3t1Tc-wOWs-jmqPBYxgkK1-CvJXe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(It's troublesome, but maybe he's the type...to communicate through fighting?)",
                "line": 30,
                "url": "https://drive.google.com/file/d/1fBhaLzLj6M2u8hRJd-HIEx-78GUh4F3x/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...I see, fine then! A glimpse of power is important for a shadowbroker move!)",
                "line": 31,
                "url": "https://drive.google.com/file/d/1cV6yiS4rJJQNmzJrrtRa_JXBcpiRJjwH/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Here goes.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1uOnfM7egThe5Nv3wPHxhr0GfbGngND5F/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Iai Hand-Sword, First Form... \"Fire Moon\"!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1f2tMW7UpCUjTcJsE7qL0OG5ynpdxjMvB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "The crimson flames burn away the night's veil...but even so, the shadow remains.",
                "line": 34,
                "url": "https://drive.google.com/file/d/141OE-Po3T0H65xoiK1JKa48MQU6pean0/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...So that's your true form.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1OV0vLfkDwhpl654hP9OxP_GLYoe-uTAB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Sorry to keep you waiting. Now, let's begin.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1SSfHbsTuJA1AyyjcuP2rKGZZCoOdLGBz/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Heh... A worthy opponent. Come at me with everything you've got!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1Cxky0UJ3w7pfQa4MMr6WNgmGahvRHhza/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...Hmph. Well, guess we can call it a day.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1RHz9vYcLd1yO7PI6CM8GaVNstt8k4aq2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Had enough?",
                "line": 39,
                "url": "https://drive.google.com/file/d/1tr8Wo7N4rfzW4RLA5-mbPSgdQl4NMqNF/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Yeah, that's enough. Fighting you told me everything I needed to know.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1Jh_kT_Qx_GjhNva02V31c6aheXavPtmo/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...Well, I'll be counting on you until we get back to our world.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1jyj-hIPsy6ysrU0diCffKrA1hmw5uJ_Z/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Uh, sure... Likewise.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1O2XxqgRjN9l6MjF7nTuxZFW7WNeXb_mn/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Right then, let's head back.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1_-0Yle88DpSuLnqMpWscfm2eUBrD2OHo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Th-This guy... He really is...brusque!)",
                "line": 44,
                "url": "https://drive.google.com/file/d/1ZMAYRkUgS_6y_bzfntfHBXm-g2_oYLZG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Huh? Isn't the sky over there kinda red...?",
                "line": 45,
                "url": "https://drive.google.com/file/d/1PHU-J7yjnhM9xNR_aXG2XPVJSRFw5Gdv/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...It's an Infernal. Let's hurry.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1Tc8vpjpJXqs2a_zkenBgM5DL7RyDyUzN/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Shinra, Tamaki. Report the situation.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1Pz4OfWw6Jsvu-Hzqzm9QJRKzXIadkT0g/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Yes, sir! An Infernal just showed up. We rushed to the scene and have already put it to rest!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1CIoiyHJ6h3Rt4-qYk65PBMBmyEnUfQeB/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "That was quick.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1E9nR3fH5gooSmTF7MapkvCymqlRpez2U/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "It's thanks to Natsume and Shiron! They're both incredible!",
                "line": 50,
                "url": "https://drive.google.com/file/d/1rhRVdhXDo_LqKrfb5AHZPA1c4Gt7BkSn/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "No, no, it's thanks to your excellent teaching.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1UwHlBWCRJDZqBDqRc1sd0umTcfPDibFI/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "R-Right... Hehe...",
                "line": 52,
                "url": "https://drive.google.com/file/d/1_JQptgsOt5eoj5TGcuZDi90CLaMHzsIn/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "The damage was minimal as well. Not bad, huh?",
                "line": 53,
                "url": "https://drive.google.com/file/d/16kHgmCvQT32ACLazhNufxRGFEGaxe9yn/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "...",
                "line": 54,
                "url": "https://drive.google.com/file/d/1lwvktHc92zpYpQH82A4m6oMQin2Xb8F8/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Shinra, what's wrong?",
                "line": 55,
                "url": "https://drive.google.com/file/d/1-i7ianSTHYEyC824ZZnaRTGd7HwRBhgf/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Since we came here, we've put several Infernals to rest.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1QGmGDfmoAC2-jSjPtplNduOLZlP22sXX/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Maybe it's just my imagination, but...they seem to be getting stronger.",
                "line": 57,
                "url": "https://drive.google.com/file/d/1xeIPFpedGsDHhwdqDrMaq-3yRY9qHU2h/view?usp=drivesdk"
            }
        ],
        "e5": [
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "...L\u00e1tom.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1braGzEKDlZPwFO0aABeLn4HtKgBDtGx3/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "*sigh* That's the second one today. Something feels off...",
                "line": 2,
                "url": "https://drive.google.com/file/d/1GBvde_uimU6hHe8tJe0CDCpvsDup5Nyp/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "This world didn't have Spontaneous Human Combustion or Infernals, right? Why are they suddenly showing up around us?",
                "line": 3,
                "url": "https://drive.google.com/file/d/1fGRJPTsCtfZkcDX__JO95T4-KqiBeOtZ/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Infernals started showing up near us...after we joined up with you, Natsume, and Shiron.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1sMeL9FzPT_wGOmQgOv3hwTAybnQT1p0k/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "And their appearances during my and Cid's absences are suspicious.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1DC8OoP2ABgqi7BaXUvZs9l1wNQSZMNpj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Right... It's almost like someone's targeting us.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1FXQNuBin2ZICs3X4Ad0F3pmwr-gx4wGZ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "But the cause of Spontaneous Human Combustion is unknown, right? Can it really be controlled that way?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1886wyNu3RCkDydtLodXl-SHB2jfhYzMO/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Controlling Spontaneous Human Combustion... It can't be!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1uWjQu4MWbW4Ik0t0SXw8ZBUdJzXrwcbX/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Could the \"Bug\" be in this world as well...?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1OcpbU_Gi-fZCJrOoaO5-2TTuTD-K8Mtz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "What's that?",
                "line": 10,
                "url": "https://drive.google.com/file/d/11KCZnxlY0Fcrqkr-aDFMW3OB3kB6HWi1/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "We don't know much either. But with that \"Bug,\" Spontaneous Human Combustion can be artificially caused.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1vf0iicrTn1P7Gjpea1aWyfJoDr3cr6XF/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "In our world, a certain individual used that \"Bug\" to create Infernals... Ohh, I don't even want to remember it!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1BHcR13bqBCF9KmxqWl7ZnMzTVg0_Vwv_/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I see... Someone here might also be using this \"Bug.\"",
                "line": 13,
                "url": "https://drive.google.com/file/d/1ktPSbKBQ707oIDsF_QjXzNmZZl5sB3Z2/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "So, why are we being targeted?",
                "line": 14,
                "url": "https://drive.google.com/file/d/143AM_hMQKswz_bcIThGWHTW0xoThedtq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hmm...",
                "line": 15,
                "url": "https://drive.google.com/file/d/1WgImG-MAdzk20mg7wBsqRmQa0julzRzx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(If I think about it realistically...maybe it's be a business rival of Mitsugoshi? After all, Beta and Epsilon introduced themselves as Mitsugoshi employees...)",
                "line": 16,
                "url": "https://drive.google.com/file/d/1F5OIzMrr2pqSQcnn4NGVx5q_ty-NfMr-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(But with them and Shinra around, the culprits won't show themselves that easily. In that case\u2014)",
                "line": 17,
                "url": "https://drive.google.com/file/d/1NamnQ0TSTesZbA7IPko3LhXT5RCpGjhG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I have an idea... How about we set a trap for the culprit?",
                "line": 18,
                "url": "https://drive.google.com/file/d/1W1Ww-86un7UKxpUEVQvHo5l-46979SRW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "*sigh* I'm exhausted...",
                "line": 19,
                "url": "https://drive.google.com/file/d/1g9RnSGU3Q-Gl3nuQWr66Fa02v6SyL7Wj/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Um...are you alone right now?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1nBFsUQTXUl3cBhoqHTuCM0fidFX65GAm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yeah, sort of. Everyone else is out investigating, and I'm on watch duty.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1rkUQbN1juKEyWRoH0-o3wagQoRjVn3S8/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "I see, I see... How convenient.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1dq-zfvZASDZOP_mqImJJDw6IDR99zjXd/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "If you turn into an Infernal, the others will be confused. I don't expect much from you, but at least try to buy me some time\u2014",
                "line": 23,
                "url": "https://drive.google.com/file/d/1AMHx_XygPsjg0929ySEdvRIj9cC5m1k8/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Not on my watch!",
                "line": 24,
                "url": "https://drive.google.com/file/d/13evCJTBqapRQCAk5JIGa2eq-w6vakpvK/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Ughh...?! From where...?!",
                "line": 25,
                "url": "https://drive.google.com/file/d/1__PC5-GhXdL4F2idIFH8mNChAuPTLh8Z/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Master... Cid, are you alright?!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1p8fkXwzOvA1Zq8hzMXqP4_26Mg9ZxBOd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yeah, I'm fine. Nothing to worry about.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1a0JKhWk6Slrhd2r8iMNQ3cUa8qghbHrr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Whew... Th-Thank goodness...! Shinra, are you okay?",
                "line": 28,
                "url": "https://drive.google.com/file/d/1BiQVohUxEyifC9Grq_a1Uu-mTMc5B7U-/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Y-Yeah! A hero must always be ready to save their comrades!",
                "line": 29,
                "url": "https://drive.google.com/file/d/1qMBosNg4Xx-hnJx0FEVd1qDcqXqnkB0U/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "(What was that sensation just now...? I feel like I've felt it before... But right now\u2014)",
                "line": 30,
                "url": "https://drive.google.com/file/d/1y-7mlNKI1NxUT3y1ABtdRzUwzgrjq5O1/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Kanen...so you were the one using the \"Bug,\" huh?!",
                "line": 31,
                "url": "https://drive.google.com/file/d/1N6r9pQfAeB1exZULfs1d-vTkXBRxdNQF/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Don't try to deny it now. We saw the \"Bug\" in that bottle and your attempt to use it.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1_LWTf9PlImREjNmT5BCkAq2vPiGY9S-f/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "...You set me up...?!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1JtP8qlb12n_IxzxHax2NSQMCp-u5iEjh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'll be the bait.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1LL4xfffr7kizPUXOUROnEQRuPIlbIMw6/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...What?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1lD5kxCgdcVN1wT0_KGEjfZotnqX5a4oz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "The enemy is after Natsume and Shiron, but I'm assuming they can't attack them directly. So, to confuse the two of them...",
                "line": 36,
                "url": "https://drive.google.com/file/d/1E9rIu9J2CsWqS5gdrrujHiGtoxc0kvU7/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "They want to turn you, their companion, into an Infernal...?!",
                "line": 37,
                "url": "https://drive.google.com/file/d/19BF58db1QFFnsWXgslWEQ3u6ZiLmy4fM/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "No way, that's too dangerous!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1dIcywojPXDmKPRr1rBjik6lvGfrGeLrM/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...He'll be fine.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1lNVrQRQeVHRvq8IH9ADLu5nG-qAOBgFX/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "How can you agree with him, Captain Shinmon...?!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1OyuV9IjKPWMWEbrxl1RepsVdbBUSTtjt/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "If we don't make it in time, Cid might really turn into an Infernal!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1f7Oo591X4LVa3c3p97UPxe0nGaQt861A/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "You'll make it.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1lSWK-B8nR1igq3KVH51UQmqkj1Q0r1e5/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "...",
                "line": 43,
                "url": "https://drive.google.com/file/d/1as1aKgKjSoPF7dcL5BLpol6ToEpa6xjt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I believe in you guys. Let's end this before anyone else gets hurt.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1Hf7jjr2rnmywT_wxuwRF2_sH1sUPhPQI/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "... Fine. If you're that determined...I'll accept. Let's do it.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1cgqT5u4YIGqVUglWYAI9JVIN-AY05Qvl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(My job is to highlight the hero...! Make my rescue flashy, Shinra!)",
                "line": 46,
                "url": "https://drive.google.com/file/d/12euJkAss5xiAs0bSTRwrQ3wTMUkVvzck/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Are you two okay with this, Natsume, Shiron...?",
                "line": 47,
                "url": "https://drive.google.com/file/d/1cWbO414OS5X5PUtUZYx9HElZW_9ezJGa/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...I'm honestly really worried. It's frustrating to leave it to him like this. But\u2014",
                "line": 48,
                "url": "https://drive.google.com/file/d/1pWdgTvnLClEMe3WIhPiPL23rZPCrgGob/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "We have no choice but to trust him.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1pp6CQOlaMX8Rw1XLTRHzpk-uCpK5-y0A/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Thank you. Alright, everyone, I'm counting on you!",
                "line": 50,
                "url": "https://drive.google.com/file/d/1xdkzMuOTAKd1iu9QT-tbFikfwBrncJ7q/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...Wait, huh? Am I kinda standing out too much?)",
                "line": 51,
                "url": "https://drive.google.com/file/d/1rR3_Mi3ZQRk-Y9JM8PiuYt_vVb7ZHfkD/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "The moment you targeted him, your fate was sealed. It's over.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1Kexjd2xwe5vRyMTa7U5VX8fAGOm5OUI8/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "...I knew it wouldn't be so straightforward when it comes to the Shadow Garden...",
                "line": 53,
                "url": "https://drive.google.com/file/d/1F7pOYjabvt2rvOTGaUzJF8etid98H-eh/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...So, you're affiliated with the Cult after all.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1lMg6tnwdpt0fvwFhqoMAoGRR-MnJObAi/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Indeed. I'm Doctor Kanen, First Child of the Cult of Diablos.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1vggA4hsndTra9SXvT-RM0Dz2R-G_xnUL/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "The Cult of Diablos? And what is the Shadow Garden...?",
                "line": 56,
                "url": "https://drive.google.com/file/d/1zRl--6HV-nGZErg06dBZvsGCS4eMHaY3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Of course they're confused. Wait, when did they become extras...?)",
                "line": 57,
                "url": "https://drive.google.com/file/d/1rJgWUAsW-Sm-s2S0oOHsYF2YEjw8ZjKh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "If you're with the Cult, then that simplifies things. We'll kill you and end all of this.",
                "line": 58,
                "url": "https://drive.google.com/file/d/1CpgwwZTKDqceXyfbSNuv9opR-yWcFp-y/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Huh...? Kill...?!",
                "line": 59,
                "url": "https://drive.google.com/file/d/16kYj5qq0eprxxyem4DKwviCjTuDsn2yZ/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "H-Hold on! I don't really get what's going on, but can't we just capture her?!",
                "line": 60,
                "url": "https://drive.google.com/file/d/1xtAGT3GIZ8ui9bUuCEyzJIOA32WFY_Ve/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I'm sorry, but please don't get involved. This is our problem.",
                "line": 61,
                "url": "https://drive.google.com/file/d/11HurUUtii0FQVR468h7-j85E3ifnVu_k/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Shinra, Tamaki...! It's true that I used the \"Bug\" to cause harm, but I'm ready to atone for my sins!",
                "line": 62,
                "url": "https://drive.google.com/file/d/1PqYCj4pf3Vy0GQOCQgJ2W-Ui6B9MRW_G/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "If you let me die here, you won't be able to return to your world... Are you okay with that?!",
                "line": 63,
                "url": "https://drive.google.com/file/d/1dmMmtP2LhnPMdOxar_Jmqn7kkI0Lsrbd/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "He's just trying to buy time. Don't listen to this man's nonsense.",
                "line": 64,
                "url": "https://drive.google.com/file/d/1AvE-smKvzbgh0FbbvmdKEYBO-G48kGMI/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "I'm a researcher! By studying the \"Bug,\" I can help you and your friends!",
                "line": 65,
                "url": "https://drive.google.com/file/d/1OvvLNJ1IVgTOGCWr-SAzw2V8G8HrOiwp/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "...I...",
                "line": 66,
                "url": "https://drive.google.com/file/d/1O77k_8Ijwvz2_v3jI-v7q-W51xV8FIbB/view?usp=drivesdk"
            },
            {
                "name": "Chuvi",
                "name_variant": "Chuvi",
                "subtitle": "Step away from Doctor Kanen, you Shadow Garden dogs!",
                "line": 67,
                "url": "https://drive.google.com/file/d/1FQ1tI5g2rCBQ43Tfkks8vcZ2PZElq5hF/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Wh-Who goes there?! At a time like this!",
                "line": 68,
                "url": "https://drive.google.com/file/d/1K5mpu_UqNjIS4TwsgWj-r5Iez4_f4Uja/view?usp=drivesdk"
            },
            {
                "name": "Chuvi",
                "name_variant": "Chuvi",
                "subtitle": "Doctor, I'll save\u2014",
                "line": 69,
                "url": "https://drive.google.com/file/d/1w_A_2QL9fUePZ8m5KNfNqK31j0_8rZUs/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Out of the way!",
                "line": 70,
                "url": "https://drive.google.com/file/d/19iuNEOf-eQ2G-Yj6wpFPqfFJ89Bx0OVb/view?usp=drivesdk"
            },
            {
                "name": "Chuvi",
                "name_variant": "Chuvi",
                "subtitle": "Ughh...!",
                "line": 71,
                "url": "https://drive.google.com/file/d/1K8EiQx7d9Twm7zdkaJ4Kg3oOVfA54RL1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "He appears to be your subordinate. A moth drawn to the flame, I guess.",
                "line": 72,
                "url": "https://drive.google.com/file/d/175SMLpbzoUuddu-3YfrNa9G36Z0nJC-5/view?usp=drivesdk"
            },
            {
                "name": "Chuvi",
                "name_variant": "Chuvi",
                "subtitle": "U-Ughh...Doctor... Now's your chance. Please, run while you\u2014",
                "line": 73,
                "url": "https://drive.google.com/file/d/1o0x6wTgX3T9tyhoeMY3xJuak-f-ZB16f/view?usp=drivesdk"
            },
            {
                "name": "Chuvi",
                "name_variant": "Chuvi",
                "subtitle": "...Wh-What?! Th-This bottle...?",
                "line": 74,
                "url": "https://drive.google.com/file/d/1Vtoq4qimRlcna3ytgck69ZNMiNUTMrPq/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Useless bastard.",
                "line": 75,
                "url": "https://drive.google.com/file/d/1Eb0dAiaH2UECqtrl3Stjm7cpD0Jth0m6/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "You wanted to be useful to me, right? Try and buy me some time as an Infernal.",
                "line": 76,
                "url": "https://drive.google.com/file/d/1MWf8OaTXm-G03ar3_PCJDxE3YfLGjwyK/view?usp=drivesdk"
            },
            {
                "name": "Chuvi",
                "name_variant": "Chuvi",
                "subtitle": "D-Doctor...???",
                "line": 77,
                "url": "https://drive.google.com/file/d/1wBNsBC90w_qvEUdw6iSBsIWD_ClJ_Urf/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "You worthless, incompetent man. At least be useful to me at the end of your life.",
                "line": 78,
                "url": "https://drive.google.com/file/d/1XDwiDTWKcSoNBfVuSZ4SWHPoGPZ5X4UX/view?usp=drivesdk"
            },
            {
                "name": "Chuvi",
                "name_variant": "Chuvi",
                "subtitle": "A-Ah... Aaahhh\u2014",
                "line": 79,
                "url": "https://drive.google.com/file/d/1YjvlSy7X3KeaEVWaRrbqags6ybmqLXDW/view?usp=drivesdk"
            },
            {
                "name": "Chuvi",
                "name_variant": "Chuvi",
                "subtitle": "AAAAAAHHHHH!!!",
                "line": 80,
                "url": "https://drive.google.com/file/d/1f-8elfJqvVNh55eA9AKWJmgMVPM-Unkq/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "He turned his ally into an Infernal?!",
                "line": 81,
                "url": "https://drive.google.com/file/d/1bBviJcVWVDLwZjRFltMaCI7d673P7Cbz/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "I don't know what grudge you have against Shiron and the others, but as a firefighter of the Special Fire Force, I'll bring salvation to your soul!",
                "line": 82,
                "url": "https://drive.google.com/file/d/1Q4u3IIZfdtZORANBgXfrAQ2jWeyY6PgH/view?usp=drivesdk"
            }
        ],
        "e6": [
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "The flame is the soul's breath... The black smoke is the soul's release...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1MoKdpYRd19xdYE50CpV1XUe79rmSEjZG/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Ashes thou wert and art... May thy soul return to the great flame of fire!",
                "line": 2,
                "url": "https://drive.google.com/file/d/12EgzIz1VdeILiQs8SrAHeH3uFASAmLI0/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "L\u00e1tom...",
                "line": 3,
                "url": "https://drive.google.com/file/d/1JbuEPoM1TG3mc8ogAIlPNHUcJ6iyoHjs/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "...It's over. Kanen escaped, but\u2014",
                "line": 4,
                "url": "https://drive.google.com/file/d/1IHWDFqd-QESNXjUgYaYo_K1t4F8MKGTq/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "...Wait, where are Captain Shinmon and Cid?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1zK41AoD0tZH5k5Sx4W_NdV_DpRNeA9rP/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Now that you mention it, I haven't see them in a bit... Don't tell me they both went chasing after Kanen!",
                "line": 6,
                "url": "https://drive.google.com/file/d/1cm4wYrWaaOsNjQiCcMkVfAveXyj_wpyr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Don't worry. They must have some kind of plan\u2014",
                "line": 7,
                "url": "https://drive.google.com/file/d/1bLTVWpQYiyXx_TpoU9FekT2MYMiivMDD/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "I'm going after him as well! I can't let a guy who burns his own buddies get away with it!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1WLQADiN-ynLtztBTIXAWPfhk-zPIFW_q/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Kusakabe?! ...And he's gone.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1zdPg8gLYlwsOEhk7ul5G2IYvA8ofh-JX/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...He's like an aspiring hero incarnate.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1YTGhMIV2cR-_RDYzbhcHYxWqU9nrnKtR/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "He'd love to hear you say that.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1aUetLJrC6lcKdEVN7tglaYeAHWcU7vOv/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I wasn't trying to compliment him.",
                "line": 12,
                "url": "https://drive.google.com/file/d/15akbSCMmt-WrT5t0rYFCRGPH0nNLc5hU/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Let's follow after them. If this is heading toward its conclusion, we must but there to witness our lord's success.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1V1tAX6OlVSOkf0y4FSMIBAscNFUYdY5m/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Right! ...Wait, \"our lord\"?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1_ulWwFjSavvC6sRN0ohLfjuu5jjshW5z/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Looks like...I'm not being pursued. Hmph. I bought time with that idiot.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1NsuITUO8iAR7mKkWxRFNewn33d_eMv1N/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "My plan has been derailed, but no matter. I'll turn some random knight into an Infernal next\u2014",
                "line": 16,
                "url": "https://drive.google.com/file/d/11e6DZRYQpq8SEhgWFtGhpNdMtdL-U1TR/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Not on my watch.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1hLLEIgyDBhPgF-fukkavmS5rrVoG8Ywv/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "What?! You've caught up with me already?!",
                "line": 18,
                "url": "https://drive.google.com/file/d/1WOWgrX41DCKJpjg2Od5F7Zxk4-ED1j3D/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "No way I'm letting scum like you escape.",
                "line": 19,
                "url": "https://drive.google.com/file/d/10Q0LAwX8eGPGlO-N06QkHrWNNI-Bkb_u/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Next is your turn.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1MSbJjRwXhBXHJyDt2phBjRqlJo0qaauy/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "That form... Are you Shadow?!",
                "line": 21,
                "url": "https://drive.google.com/file/d/1QiaGl95j1RQrPPN4LKrzXasjlVEoi-o2/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Go on then, tell us how to get back to our world.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1ktH5juAdO4VC5fiX_rANX0X-nIPdDVzo/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Ack...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1Wvz54Q-0gLQwNp3vXwEeK9VEJNJNBOrM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "So, you were lying. Then there's no reason to let you live.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1-eO0jN6rqv0zTVEpqybGWg25IYSDpAWK/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "I-I won't let you...finish me off here! Not when the Rounds seat is within my reach...! Drastic times call for drastic measures\u2014",
                "line": 25,
                "url": "https://drive.google.com/file/d/1-RQsEtf8YHNi3U2hWuENUaKj386ws4D7/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "What the hell is that...?",
                "line": 26,
                "url": "https://drive.google.com/file/d/1pzXFa-Mvhz5viTjQlyjRt356_KF5kXga/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "... Heheh... The last \"Bug\"...!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1UrZRVogZzYqOswvZoj6e0SfWgWqDVRoU/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Don't tell me...",
                "line": 28,
                "url": "https://drive.google.com/file/d/1giGTAaguBF4zBA20e5EziMN7SGohVa0e/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "He's using it on himself... What a fool.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1GDH5j_diX3TzDM4u3rWTcdli4GhE6tq6/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Aghhh...gah...a-aahhh\u2014",
                "line": 30,
                "url": "https://drive.google.com/file/d/1iHtjAwcpCqF4BQUSlYoPMQ3aYXp0nein/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "AAAAAHHHH!!!",
                "line": 31,
                "url": "https://drive.google.com/file/d/1nz1XnH8EPgBcetdH8JmZvRZBi0Pdxviq/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Hah...a-ahahah...! This is amazing...! Incredible! I can feel the power within me... Hahahaha!",
                "line": 32,
                "url": "https://drive.google.com/file/d/1WxA6fxdx8V7sOfPpfXtOguH-j8Glmo-1/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "With this power...I no longer need to fear you or Shadow!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1rZSVvcfyiaJNm_nDZuLL7UFmUPnRhewq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Whoa, the villain's power-up! Classic move! Well played!)",
                "line": 34,
                "url": "https://drive.google.com/file/d/1KznG2-koyDplRffiqxCA46F3XDKpkAlu/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Captain Shinmon! Cid! ...Wait, that's not Cid!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1e_1iTCKUE3q8Pd3L46w1yvmtEuI1kd1Y/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(And here comes the hero! Perfect timing, Shinra!)",
                "line": 36,
                "url": "https://drive.google.com/file/d/1QjhaPIxRJ6uTBNhRyY7nI9SVAyoMgH4q/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "...My name is Shadow. I lurk in the darkness and hunt down shadows...",
                "line": 37,
                "url": "https://drive.google.com/file/d/1vxurprmTi_UmtoRsSCk0cCj-OiKFESy7/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "We're not up against him. ...Focus on the bastard in front of you.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1zIog3-VSJ_9ptimmxehIcRweLYo2X-3K/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Wait, don't tell me...! Kanen...used the \"Bug\" on himself?!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1MDyfuHuI5_xA_ZGrbcXE_gCSlXDX9DWA/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Yeah, he's a tough one. Shinra, can you handle him?",
                "line": 40,
                "url": "https://drive.google.com/file/d/1bEw3OsZk__aHiafWmni3JTjgDmJWs_qZ/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "It doesn't matter who the enemy is! A hero is always a hero!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1Ii3L-7NhlBX7u23pPlNPVEZIcblg2XGd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Shinra, you're awesome...! Yes, yes! I've been waiting for something like this!)",
                "line": 42,
                "url": "https://drive.google.com/file/d/13HLWAQvA4bq4yKX3pKZaWed0atQEvlGs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(The brighter the hero shines against the bad guys, the more I radiate as a shadowbroker!)",
                "line": 43,
                "url": "https://drive.google.com/file/d/1SqU1J3ENZHXI6S3cEMjeTXkkHFHdmEcv/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "You think you can put me to rest...? That you can take me out?! I am the strongest!",
                "line": 44,
                "url": "https://drive.google.com/file/d/1tKToLFgcKGVtQ3IkBKJLH3h88pzyIQb1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow&Benimaru (Shadow)",
                "subtitle": "...What?",
                "line": 45,
                "url": "https://drive.google.com/file/d/1Ba6GOte697ZiKYKbCkEAjvcW6ivK_W3d/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Shadow&Benimaru (Benimaru)",
                "subtitle": "...What?",
                "line": 45,
                "url": "https://drive.google.com/file/d/1Ba6GOte697ZiKYKbCkEAjvcW6ivK_W3d/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "With borrowed power, you'll never be the strongest...",
                "line": 46,
                "url": "https://drive.google.com/file/d/1W8cSMOTn_Y4ZU8bJgVL_VQQQL6IJWMib/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Let me show you what it truly means to be the strongest...!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1HPn7mvRtbnI4fFDbN3Qp5ZzfcOcQtWsO/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Don't count me out! I'll be a hero in this world as well!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1lnZzUN0h5ZyjjPr3cGhe5BKV1qdR4fr_/view?usp=drivesdk"
            }
        ],
        "e7": [
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Wh-Why...? H-How am I actually...losing...? AAAAAHHH!!!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1FDXXEm8ewR3_Kl761-eG0szJfntCAS_a/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "(This sensation... It feels like the \"Adolla Link.\" In that case\u2014)",
                "line": 2,
                "url": "https://drive.google.com/file/d/1RDwN69pBIK3NuckOH7Sa3sGmr0nenTxg/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "This ends now...!",
                "line": 3,
                "url": "https://drive.google.com/file/d/1J0iGYwvXGwi96oK3DmHcDgsuaw71IX0z/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "...Wha? Wh-What speed\u2014",
                "line": 4,
                "url": "https://drive.google.com/file/d/1Xnq1TZtIaqq5jc6yVLKT3_uNgWCNYdtj/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Graaarrrr!!!",
                "line": 5,
                "url": "https://drive.google.com/file/d/1Y0djMI12TUAMxd7-QfmaXKPGEx9Bli6U/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "...L\u00e1tom.",
                "line": 6,
                "url": "https://drive.google.com/file/d/15EQIvLF9AJjKDJgY4xnGwQOETygj33aD/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "...It's over now. No more Infernals should show up.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1yqBps8o7RfiwL1hiEr6a-_DDza88Pjkn/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "So it seems.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1GnP_sDsFqhPyPeQxT66mod6_cT3u1VGg/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Wait, huh? What happened...to that guy?!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1ybJhTt9FcNwxqPQYR98kUxabbUoOnf8I/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "He vanished a long time ago. Anyway, he'll be fine. Don't worry about him.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1YFpjILIKBWJ1A3tgGC2YEeKml-wzud2L/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "*huff, huff* What is the source of their immense power...?",
                "line": 11,
                "url": "https://drive.google.com/file/d/1EJTCof_2-lo83AHufL2Zi_g2vmy2ruOs/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Still, I'm not done yet... Next time I'll\u2014",
                "line": 12,
                "url": "https://drive.google.com/file/d/16P3fISYtop74fBQTLFseMBoU4Xkdt_hr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "You have no path to recovery.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1GoTBwEcWWEzSHtlZo6Se2wOqPMnIc7MX/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "Wha...?!",
                "line": 14,
                "url": "https://drive.google.com/file/d/16umS6dIgLFbUYndv7r3j-S72cDV5Obgw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(The dirty work heroes can't do is for the shadowbroker to take care of...or something like that.)",
                "line": 15,
                "url": "https://drive.google.com/file/d/1UqMbEppg8xx8mO_1DM_avwlrre9YAqES/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Etch into your gaze...what true strength looks like. This is my power.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1D8mLK98MRvxETBFp138S8osnbdZpY4UT/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Watch closely. I am...",
                "line": 17,
                "url": "https://drive.google.com/file/d/1XIEq0ipnVuhZ-BDqVa16t8wikgFN_WW8/view?usp=drivesdk"
            },
            {
                "name": "Kanen",
                "name_variant": "Kanen",
                "subtitle": "S-Stop\u2014",
                "line": 18,
                "url": "https://drive.google.com/file/d/1QtB68L2QhomoCRRDN8BV11JFv1jucurg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "...Atomic.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1ninmtXYYc-FZ4gJAcwLzs1F2xFl7A6Pi/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "What's this, an earthquake?! And there's light coming from over there...!",
                "line": 20,
                "url": "https://drive.google.com/file/d/179qcwDbJj1UZR8GoYt2qMJR_cL_BS9BR/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...It's over.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1VCSKQU7AJbGwY9EWc6_T8S-KkmUyX3IS/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "What do you mean\u2014",
                "line": 22,
                "url": "https://drive.google.com/file/d/1cG5PGZWPEdLTFvCJp2UOWJmCEqiog6Go/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Kusakabe! Captain Shinmon!",
                "line": 23,
                "url": "https://drive.google.com/file/d/1Ajt5leuQtqWbC6jSiy_3pef1eEjVe_Y-/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Are you both okay?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1wsgbvxTYoOyrIQ6G1sH9jwGyVCpxz7a9/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Wait, is it just the two of you? Where's Cid? Don't tell me he got caught up in the fighting...!",
                "line": 25,
                "url": "https://drive.google.com/file/d/1TRN_cGVSQoNZfdu2bgeYxVw4fCJWwRwm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Whew! Jeez, I'm glad everyone's okay!",
                "line": 26,
                "url": "https://drive.google.com/file/d/10r-riKqSrUZpcBg-n0Kz-tLSODlLMExT/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Cid! You're all right!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1i72PDdQbcm-l8ouv55b8x8jwKnkM6lVW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I hid and watched while all of you fought.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1Lzo8aLgoSI9A38w3FPMrZv3w0WFbrIG8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Heheh... Let's talk once we get back to town. I'm sure everyone will be waiting.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1-9gms9XHtfKPralvNWi4c84ePbLTl2l4/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "...Everyone?",
                "line": 30,
                "url": "https://drive.google.com/file/d/1tX3gRY1O1RuAqhIMvFZ42-KJgJ_yFQL8/view?usp=drivesdk"
            },
            {
                "name": "Man A",
                "name_variant": "Man A",
                "subtitle": "Hey, Shinra and the others are back!",
                "line": 31,
                "url": "https://drive.google.com/file/d/1gmMoLrI1eUNfOCe009o31MA5sQKXy_6H/view?usp=drivesdk"
            },
            {
                "name": "Woman A",
                "name_variant": "Woman A",
                "subtitle": "You saved our town again, didn't you? Thank you so much.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1SVQRBWjlTmH8KEsSvprA3w2T6xKCkBgq/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Uh, y-yes...!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1b8sld7l2ufQ9Qh431vP7EycZq2OlMjos/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Heheh. You've really been accepted into this town.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1jMuBpl2bhwqrr01URSQWLqAHWwvgHWo0/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You could probably stay here if you can't get back to your world.",
                "line": 35,
                "url": "https://drive.google.com/file/d/18srf9KerHSZEctHZuuSX1f9J4C1jokJT/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Th-That would be a problem!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1UVqc3Uh9b6upSd38vG3mp_3oeYUrSWO9/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "...",
                "line": 37,
                "url": "https://drive.google.com/file/d/1eOHUP2ULZoqCLHRieo_lbk2pxtEWG27h/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Shinra?",
                "line": 38,
                "url": "https://drive.google.com/file/d/1ZT1gLioOe9Rywk8rIf5nRNvpNbIzLuOE/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "...I'm just real happy. I managed to protect...these people and this place.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1gvq_491yvGikVNLIp96__JSrreCcHwUn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Man, what a great smile! You really are a hero, Shinra!)",
                "line": 40,
                "url": "https://drive.google.com/file/d/13k4mi64SpC4YKe2LhGQpu5L94bKCn3VV/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Hm? ...Wha?! Hey, Kusakabe!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1XoTQF9E9ZtR9-AdgezkVs-rITJKQK8zH/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "H-Hey yourself... You're glowing!",
                "line": 42,
                "url": "https://drive.google.com/file/d/16Jej8t5g-_zeUn0f0YOS6Bif-1HHzMyG/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Guess we aren't returning via the pillar of light.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1ngK0kenNubqg0094YYeiT1FMNfoj5qDW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Why's this happening all of a sudden... Wait...oh.)",
                "line": 44,
                "url": "https://drive.google.com/file/d/1e8A9w_BZ2zWLmNggJ3Hdh90MBGi84qzM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(The artifact is broken... I totally forgot it was in my pocket...)",
                "line": 45,
                "url": "https://drive.google.com/file/d/10Zgr_BBEKenxlkkZORDlHXM1FPApx9hL/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Hey, what are you up to?",
                "line": 46,
                "url": "https://drive.google.com/file/d/1hNqCzhbAqhN1oYyzwb7qA2U3CpdeDuMK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "N-Nothing! I was on the verge of tears, so I was fishing around for a handkerchief.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1k_TZkL8gNgDKxXcppNBh80-BROhkHeaX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Whether it was the impact or the stress applied to it that made the artificat stop working...it seems it was the key for them to return home.)",
                "line": 48,
                "url": "https://drive.google.com/file/d/1xInoLwx7ahdbRJHEf9b2hfPn8zw48J3E/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "...Well, so long as we can get back to Asakusa.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1UUT6nhew7J0uX43fQKaQDeP6Oc8qm8Y2/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Thank you so much for everything, Natsume, Shiron! And Cid...thank you too!",
                "line": 50,
                "url": "https://drive.google.com/file/d/1iGpPMTnySePoNjqAf4PUYighvmHX9Tct/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Guess we can call it even, but you really helped us out a lot! Thanks...whoa!",
                "line": 51,
                "url": "https://drive.google.com/file/d/1PH2luZ6SF8fe3jLppYqjLMHbRGM9gJHM/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Oof.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1X5zajDoaDrWgkjbGotmbKFhwi--TiwRo/view?usp=drivesdk"
            },
            {
                "name": "Tamaki",
                "name_variant": "Tamaki",
                "subtitle": "Nyaa! Get off, Kusakabe!",
                "line": 53,
                "url": "https://drive.google.com/file/d/1aj-iL2_YIizzzxRjkLzsUVaq23GG4Heb/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "If anything, you were the one who got close! Aaaah! You get away from me!",
                "line": 54,
                "url": "https://drive.google.com/file/d/12aN5povZxGW3kn8P8z5yhGWbUdKQRaKX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Yup, yup. Good stuff. Acting just like a protagonist until the end!)",
                "line": 55,
                "url": "https://drive.google.com/file/d/1nvfWy8Cq7f7EKtBUd4zFMB8JWLQXj36G/view?usp=drivesdk"
            },
            {
                "name": "Benimaru",
                "name_variant": "Benimaru",
                "subtitle": "Not the most smooth ending... Well, anyway...thanks for everything.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1LaZQaXzyDx355Pvk1K-z00RJWHCJgALg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Hmm... Still brusque until the end!)",
                "line": 57,
                "url": "https://drive.google.com/file/d/1xJ2xbe8NpX9-gpwalz1II3EoiLhIPUD4/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Cid! Thanks for everything!",
                "line": 58,
                "url": "https://drive.google.com/file/d/1xi1Uy831tGyGTNYW8Rf42JSvLBFn0FGz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'm glad I go to meet you guys. See you again someday.",
                "line": 59,
                "url": "https://drive.google.com/file/d/1HoHdbO7VKo4UrAWstW2wyp2ZzcVFUCcx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Although we'll see whether it's as friends or foes.",
                "line": 60,
                "url": "https://drive.google.com/file/d/1ZKy4-Y16yxMbze1XliSod_eb5YvbJjRK/view?usp=drivesdk"
            },
            {
                "name": "Shinra",
                "name_variant": "Shinra",
                "subtitle": "Cid, what's that supposed to mean\u2014",
                "line": 61,
                "url": "https://drive.google.com/file/d/1aahpb7rKsxDINxlsgSiS-xVmjk6aIPlb/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...It's all over now.",
                "line": 62,
                "url": "https://drive.google.com/file/d/1W3Ppfbo3G8YyXT6sOrCLjhrMUdwK4MqZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yeah... It's a bit sad.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1d3NTsApYGA3Y5m-MHTDvG9GJ1D4WKSTQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hehe. You have us, Master Shadow. Come on, let's return to Alexandria.",
                "line": 64,
                "url": "https://drive.google.com/file/d/1thZRepMI05Dv1K3-51sMqyOUxXiUMzce/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Right, let's head home as well.",
                "line": 65,
                "url": "https://drive.google.com/file/d/14YLTegPxbGcIzfWBYwstHy94txZWEm_8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "*sigh* In the end, I never got to learn the secret of the \"Lucky Lecher Lure\"...",
                "line": 66,
                "url": "https://drive.google.com/file/d/1P5fcvcSSez1PEAmUiP1M_qn0VZNgLwNW/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You're still going on about that? How trivial...",
                "line": 67,
                "url": "https://drive.google.com/file/d/1V1f4oo58x4HHkOumROKGYyhfwBNxJDIK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(A Special Fire Force that protects people from Spontaneous Human Combustion, huh...)",
                "line": 68,
                "url": "https://drive.google.com/file/d/1Dfpje_Vu3tpSWMqor4inUmz3c_QOvBhj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Heroes are really something! The stronger their radiance, the more shadows stand out!)",
                "line": 69,
                "url": "https://drive.google.com/file/d/1ojDAH4USxfwz9xcjPXzpKREG1jLZ48em/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I said we might be foe next time, but...I feel like we'll be friends again.)",
                "line": 70,
                "url": "https://drive.google.com/file/d/1SgAfouCDL6o4BK4_SpO5IO_lgiPurgJD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Even if they forget about us... Just kidding.)",
                "line": 71,
                "url": "https://drive.google.com/file/d/1uXDY0FBWsWKjTuxBXYPw3d_FrNOpRUl1/view?usp=drivesdk"
            }
        ]
    }
}

// let setDoc = db.collection('data').doc('an_s2_e8').set(data['s2']);

// let setDoc = db.collection('data').doc('ssc_p3_c3-6').set(data['p3']['c3-6']);

//let setDoc = db.collection('data').doc('apo_p1_c1-2').set(data['p1']['c1-2']);

// let setDoc = db.collection('data').doc('es_bheif').set(data['bheif']);

// let setDoc = db.collection('data').doc('ln_v3').set(data['v3']);

// let setDoc = db.collection('data').doc('an_s2_e3').set(data['s2']);

// let setDoc = db.collection('data').doc('info').set(data);

// let setDoc = db.collection('data').doc('characters').set(data);

// let setDoc = db.collection('data').doc('medium_images').set(data);

// let setDoc = db.collection('data').doc('dropdowns').set(data);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
