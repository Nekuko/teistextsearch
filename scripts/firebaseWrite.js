const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "rtgi2": {
        "e1": [
            {
                "name": "",
                "name_variant": "",
                "subtitle": "On a day while the world is engulfed in the joy of the New Year, the Seven Shadows each enjoy their New Year's break. However...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1pJariJobmbSKsoSGaOTWEgHXL1HYQiUv/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Why...? What's going on...?!",
                "line": 2,
                "url": "https://drive.google.com/file/d/1MINdT_Jo7DXrMLfnCpcsyucvZou-YiVc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Lately, no matter how I arrange them, they just don't feel right...)",
                "line": 3,
                "url": "https://drive.google.com/file/d/1Fa-PRi2qaScNcVOQIiEEIjd4jSGTbZ00/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Am I lacking volume? No, the quantity and shape should be perfect... Yet, why don't they feel as impactful?)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1Epg3Bs-Zb7VWrJVQoWdueNRZh9HjJSOU/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Ah, it's so cold. Nothing beats a heated table during New Year's\u2014",
                "line": 5,
                "url": "https://drive.google.com/file/d/1FVeNlS-lQJcmojeDlPuEp_I3IlnPokKW/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Huh, it's just you here, Epsilon? Where are the others?",
                "line": 6,
                "url": "https://drive.google.com/file/d/1qCZuaTGdRRnnUYFHUhq5s4kaoqzvHbvu/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Master Shadow is busy with family matters. Lady Alpha went somewhere with Delta, and the others have their own engagements...",
                "line": 7,
                "url": "https://drive.google.com/file/d/1M_MJ1J1Xw4k5_BfV9ohTAbBOeH_lrSoR/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hmm... Busy times for everyone during the New Year, huh?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1d8u0hwILwZDZLmrlu6oqUymoxcq1ekLW/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well, I get the heated table all to myself then. Ahh, this gentle warmth... This is what happiness is all about...",
                "line": 9,
                "url": "https://drive.google.com/file/d/1zC61DGkMJmvo3He3zrj7IwyFVvdXHgI9/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...*sigh*",
                "line": 10,
                "url": "https://drive.google.com/file/d/1W_rSAYZ8eRKvYSSr-UXWICHgi2NdBExN/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "What's with the heavy sigh, Epsilon? You're ruining my New Year vibes.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1u9NyqHr1Y9JKg_25WEJSMcrTZ_5HPdRy/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I-It's nothing.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1S6_VTTWdW1eZwuBWB-nqht9rz0naOU7J/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "You sure? Well, if you say so.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1yys1eTe9DDZgYbaqoEI_2gpkRVa5zwjB/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Anyway, why not have some red bean soup? It's good for lifting your spirit when you're feeling down.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1QTbJbuCqtXlIQMnN4_v-GPu1VUMAOT4a/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "And make some for me too while you're at it.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1M7C6b1xI-BwLuu0FvvIWm6wYdwCn7um6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Seriously? You just want some for yourself.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1MnsaT-YP8fpupmfwH39lVedCXJZevLRn/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But...alright. I was getting hungry anyway. I'll make some.",
                "line": 17,
                "url": "https://drive.google.com/file/d/15HCQ4_ZNawvi1xtFHDPoSa4zt-qDzi_d/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(...Rice cakes are so strange. They puff up so much when you grill them...)",
                "line": 18,
                "url": "https://drive.google.com/file/d/1Cv2kM1UeDTGZhA2uu6G9kqitmGnJsmvQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(I remember when eating the kagami rice cake, I thought about using it as a substitute for slime...)",
                "line": 19,
                "url": "https://drive.google.com/file/d/1iZm3amDeKeKthkJnU51y00PbbRpZ3oY-/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(It didn't work out, though. Regular rice cakes are far from ideal. They need to be softer, more elastic, with a certain texture...)",
                "line": 20,
                "url": "https://drive.google.com/file/d/1ByzZwFlqTTE3F1JWSH73rMaDJ0BBxatB/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "It should have that bouncy feel to it, right?",
                "line": 21,
                "url": "https://drive.google.com/file/d/1m344qImJO_2SzK1LWWr88fVQUI7ZDqIu/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Exactly, bouncy and jiggly\u2014",
                "line": 22,
                "url": "https://drive.google.com/file/d/1Il2DohU9YZy0-YVcagMV7wJ9HmL5si1w/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Wait, Zeta?! Weren't you curled up under the heated table...?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1PyY9eVQTuZi3Qre5wESo2uVxOMFwC1xb/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Thought it was about time it'd be ready. Just in case, let mine cool off a bit, please.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1BYb27rryeKdUBTtVw23fALweJPLwGlsk/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Were you reading my mind just now?",
                "line": 25,
                "url": "https://drive.google.com/file/d/1FQW52Q7M1JjwMMULfHgQOe4aINWeKy_E/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "No way, I can't do that. I'm not Master Shadow.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1JLeD9bZ_EkUljfnOF_TMAooGFRk4F1KU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "R-Right, of course. We were talking about rice cakes, yes! Look! They're almost ready!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1eLs-N315caauyPCXkeMG-FIw_oNuuaP7/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Whoa, looks deliciously grilled. If ordinary rice cakes are this good, the legendary rice cake must be amazing.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1oTPL8tgXGvPmOv0sDTKWeiJRpW0SCjKs/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Legendary rice cake...?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1Ly9A3I5mq1qATN1lmCW0xa_vWtf0PgD1/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "You don't know? It's this rice cake called \"Heart's Bounty\".",
                "line": 30,
                "url": "https://drive.google.com/file/d/1XEJGGdqnto0ZfDS79wrV8nMrtdFZBC2r/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Never heard of it... What's so legendary about it? Is it super tasty or something?",
                "line": 31,
                "url": "https://drive.google.com/file/d/1pWbKy6dt2MT1t3wFHzI3vgC769Lwi7hY/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well, it probably tastes delicious, no?",
                "line": 32,
                "url": "https://drive.google.com/file/d/1vSfIN_-VAqxTDobwm2DMUEK38vx7039W/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Perfect in softness, stretch, bounce, and elasticity... If it's all that, it must be good, I guess.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1r1-j7-RMnhUTI62m_ijjfbZHTp8ByJXo/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Softness...bounce, and elasticity...?!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1ocdS3JqzoZipOHIm8_SHUcPCKk7iOiDl/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Th-That's it!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1cTBY60VECo-yrWMzE-EkncWDxtrJ96bY/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Huh?",
                "line": 36,
                "url": "https://drive.google.com/file/d/13YpsCYFXB2ZImQ-9K5eOGCtySE-swcqL/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(I might be able to use that rice cake as a reference for my slime body... In fact, I'm sure of it!)",
                "line": 37,
                "url": "https://drive.google.com/file/d/137Gwi_yD9YCYlQsL9lTTIjn9e-56gxBs/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Zeta! Tell me more about this \"Heart's Bounty\"! Where can I find it?!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1X9fllOKGFsb0Le8AFAhNWqziJ6vQEY7c/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...I didn't know you were such a foodie, Epsilon.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1HrohQzk3UkX0paylWtrW17VX5i9k7Ilh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It's not for eating! Come on, tell me where it is!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1LxX5SXF23Nm0QssdyHe-zhznA3GkMwj_/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "What will you use it for if not to eat it...? Sorry, but I don't know exactly where it is either.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1VN6xy4lSMZDb7qreStneRqo8ZLxAuxYh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Anything you recall would help! You're my only hope right now, Zeta!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1gvI1A6bzY9ot8trkTwk8g--UwfhG5TgD/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Alright, alright. I'm not keeping it a secret, and you don't have to beg. I'll tell you.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1ee1m39tOAsrycBJj33gc9dqiawXFseUe/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Zeta...thank you!",
                "line": 44,
                "url": "https://drive.google.com/file/d/1Eyy3QxgH4vg7m_-ElOg7851hJIaUbx52/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "It's not like I have any confirmed intel either. I just have a hunch.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1ET9WDfCNVXdDpsGtK5g3xyRAnsMm7tdU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That's fine! Tell me about your hunch!",
                "line": 46,
                "url": "https://drive.google.com/file/d/1oe8IFNgq0EYMpKf3oS2gbdSuvQ3hrRVD/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...The Great Ize Shrine. The therianthrope shrine Lady Alpha and Delta went to before.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1lDQMpg9BDcwCkXX4R77F_kp3y3qtQflW/view?usp=drivesdk"
            }
        ],
        "e2": [
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "The Great Ize Shrine... So this is where the \"Heart's Bounty\" might be.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1ar6lGuhsikA8LG-o2K1Pt4wL8WuXo-Wq/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Why did you drag me along? And why am I dressed up in a kimono?",
                "line": 2,
                "url": "https://drive.google.com/file/d/1Wo0UjLeHzRaVOl2QcLZwhRYylZ600xpI/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well, I needed a guide, didn't I? And isn't it nice wearing a beautiful outfit for a visit to a shrine?",
                "line": 3,
                "url": "https://drive.google.com/file/d/113x5s3D1iWY6jbN-bYyEFH-BLKi1hfCa/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "By the way, I put a lot of thought into the design of my kimono as well! The white camellia symbolizes \"perfect beauty,\" \"impeccable charm\"...",
                "line": 4,
                "url": "https://drive.google.com/file/d/1TyIbXTqjxg2ILwtgDVsD3JjuMWlbuEHP/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Don't you think it's perfect for me as I'm about to acquire the perfect charm?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1l3KwxpPB4cPwJwK0GYtrxordB1FxVnh2/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "What do rice cakes have to do with \"charm\"?",
                "line": 6,
                "url": "https://drive.google.com/file/d/15AxKraL59poEFOOWnPYyU7Dm4r0rCKMG/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Th-That's a secret! Come on, let's start looking!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1ZiG8eGeozQsmQ_dhpN-5jGh29zB4_MIy/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Alright, alright... What the heck is up with you...?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1s5zqrvbwV60OqwQjRkiGCKXW4ZOap0G1/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "And so, the two search the shrine for clues about the legendary rice cake, but...",
                "line": 9,
                "url": "https://drive.google.com/file/d/1xPTYTLKy5fkxz-bIsggoRmRI_5DpITIH/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It's not here... It's nowhere to be found!",
                "line": 10,
                "url": "https://drive.google.com/file/d/1BjaMMJrvgCq6cf9cBCVjHELzPGWVmn7l/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "The rice cake at the stalls were also just regular ones. It's a legend, so maybe it's not that easy to find.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1aaVNYUTmsSWQhhZJNe5vfTsIdDLk1uop/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "First of all, are you sure this is even the location of the legendary rice cake? There are shady-looking attractions and mascots, but nothing about this shrine feels traditional...",
                "line": 12,
                "url": "https://drive.google.com/file/d/1ou85K3E2M3G64o-mFRe5-2hsPwgABe2t/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "We're talking about something legendary, right? I imagined somewhere more...dignified.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1HWMpJN_b4vP5_oIsKri_ZDzNG_r9R2_w/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I was surprised too when I first came here. Never thought there'd really be a shrine like Lady Alpha and that dumb dog described.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1OMU943G7fU53fea29feybMo0UAVah9x2/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "When I heard their story, I thought that meathead had finally lost it.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1ZHkuijGD2bgRQHz44yKAGuEq9d3vecnh/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "??? (Delta)",
                "subtitle": "...Hm?! I thought I heard someone bad-mouthing me...!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1z8Bukbv1Fh_bPxkR5CpMpj3NWL2beCMr/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Huh? That voice\u2014",
                "line": 17,
                "url": "https://drive.google.com/file/d/1OELpw8UaVPOtYmHoB5DBFJnz9BiGxxDn/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Kitty cat! What're you doing here?",
                "line": 18,
                "url": "https://drive.google.com/file/d/1cgH-uNtFB--S-P9oTLv6qzgLeWIZPZhV/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "And Epsilon too!",
                "line": 19,
                "url": "https://drive.google.com/file/d/1UyPzAa27Imt1jTDXcFA8KgNykaIm8emw/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What a coincidence,",
                "line": 20,
                "url": "https://drive.google.com/file/d/1Pg2e-ZB2WAeM-yGibmUhYx9J9MQ_dd2N/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "meeting the two of you here.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1XvfH5fGdLzANyJtvC5buwU8KS2eDf_kx/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Lady Alpha and Delta...!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1YjeJGpuAz1AsTIErVI5n7yVcWt9mb2Mu/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What are you doing here?!",
                "line": 23,
                "url": "https://drive.google.com/file/d/1jOZQJA_gBgS6I4Hz53yDeSfKpZxen4Sf/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I came to check out the Great Ize-athlon.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1_dA1A56LPpZWv2BYnPLH4cSXAq4Oxg_j/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I heard it was revamped into",
                "line": 25,
                "url": "https://drive.google.com/file/d/1LUAgGNj5rk0yYbEgDwjPlUElI47TAKNu/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "the \"Great Ize-athlon 2.0\",",
                "line": 26,
                "url": "https://drive.google.com/file/d/1KhsQSIyyLytL2VDWhK5OYBRVoWSoJu3r/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "and got curious.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1JnNGtmgYCDEgr98aTLeJR_V2fJcF9ABH/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Revamped?",
                "line": 28,
                "url": "https://drive.google.com/file/d/1cNDD7qQ0JXTxML4B1YCR9_Bm8xMc7NKw/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Heheh!",
                "line": 29,
                "url": "https://drive.google.com/file/d/1A-jUxz-StuNRGbKl26ZhLPeKDxfFDyIX/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "You don't know, kitty cat?",
                "line": 30,
                "url": "https://drive.google.com/file/d/13KFTnXhvH-hX4ewPy6vShXO6j1R6IOwS/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "It seems you're well-informed, dumb doggie.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1yATs8zzNqYReib0W4M6TuIt3JNZ0AANx/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Would you mind explaining?",
                "line": 32,
                "url": "https://drive.google.com/file/d/18R5O1wF8Qol9jHjU9tCO-x1NmncPTJ2s/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Well, um...",
                "line": 33,
                "url": "https://drive.google.com/file/d/15fHkSycm7I4dxCwfmt-xO_0qUF1hjGsd/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "It looks like Lady Alpha wants to say something, so I'll let her!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1k2tiAYg37jHM0b2_0hHP21LoykiuqJbV/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "*sigh* Alright then. I told you both about last year's Great Ize-athlon, right?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1qq8OGnuzgTFwoeFsKCaBhvUSIAGOS61W/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, I heard it was a crazy event...",
                "line": 36,
                "url": "https://drive.google.com/file/d/1I45b5V1812CdrBFZnspFVgXQiBtN7Rde/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Right, and this year, they've spiced it up even more for a lively and fun experience.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1R08baZrpJ7_9nDJp8wqV2xw7hf0BAtXI/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "They've also changed the grand prize from the kagami rice cake to \"Heart's Bounty\" rice cake\u2014",
                "line": 38,
                "url": "https://drive.google.com/file/d/1aA8TMBZ_BF3mcAoHK2ty5xjX3dnbkiGJ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "\"Heart's Bounty\"?!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1CyUdSRmLgPabNvksHJsmSl2S81TmVP36/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I'll participate! Whether it's \"2.0\" or whatever, I'll win it!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1Si8__riGTm_LsmF2mSoo9Sa7mh5WV8E3/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Uh, okay...good luck. By the way, there are other great prizes as well. Here's a flyer.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1F_xIcK_ma7bb7MYpJQF-oXbW6Vtv6dLK/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Let's see...hmm, interesting...",
                "line": 42,
                "url": "https://drive.google.com/file/d/15RZN1uyP1Xn944i3GYaLmiWezQs-QOOf/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "It's not your thing, kitty cat. Besides, you're too scared to participate\u2014",
                "line": 43,
                "url": "https://drive.google.com/file/d/1Yv6bzpZV4-ZBvNpBWeAV7OKjEuntKi8s/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "No, I'm participating too.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1iFbe2rGiUgNqh4gIGtFOVAfw_ybXqhjK/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What?! Why?! You were reluctant to even come here...",
                "line": 45,
                "url": "https://drive.google.com/file/d/1UBTdo0OK9D9a7hyU9y1VIZRs2TUHT9X5/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "That was then, this is now. I feel like joining the festivities. That's fine, right?",
                "line": 46,
                "url": "https://drive.google.com/file/d/1_1cK7nyo3zs8L-x28KlIYsVc-ygIHtIQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Did Zeta also develop a desire for the \"Heart's Bounty\" while we were searching for it?)",
                "line": 47,
                "url": "https://drive.google.com/file/d/1B8eVw4cP9_1C_Jdk7KSIRqYxcevvSA-G/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(But I won't lose! No matter who my opponent is, I won't hand it over!)",
                "line": 48,
                "url": "https://drive.google.com/file/d/140j8N_RAG7gFqShFkfrmzH6vPZizNa9h/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "So, what will the dumb doggie do? Running away is also a tactic, you know?",
                "line": 49,
                "url": "https://drive.google.com/file/d/1uL_ksM5n4zaO6-EQ6rZsoAQFRjrw294h/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "No way am I running away! Fine, I'll participate too!",
                "line": 50,
                "url": "https://drive.google.com/file/d/1TIuyv51V2wr_j1IhyUlVgMyenpGQemgF/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No, you can't. If you both participate, who knows what will happen to the venue.",
                "line": 51,
                "url": "https://drive.google.com/file/d/156IJ8nSToHeb1_OsxH5U5VLb4roSAVK4/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Then that's a default win for me, isn't it?",
                "line": 52,
                "url": "https://drive.google.com/file/d/1P6seHOefnztV0tEF2MSn93T8yyDyz1zQ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "No way!",
                "line": 53,
                "url": "https://drive.google.com/file/d/13AzcboJmg8qTZOewk89iM-dH_J9ehDEZ/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "...Oh? If it isn't Alpha and Delta! Glad to see you participating again this year!",
                "line": 54,
                "url": "https://drive.google.com/file/d/1rV0VZ95UtbYueBwiPQJ3FgZdo04mueXn/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You're the priest from last year... Unfortunately, this year, we're just spectators.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1rwZ7IA_UK6owJevsZhUocmjwJwL4Qth2/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "I see, I see! In that case, Alpha, could you and the others please provide live commentary and analysis? What do you think?",
                "line": 56,
                "url": "https://drive.google.com/file/d/1rtmRZzv8HOQO_u-CWFyI5USQSFr5d2u9/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "I'm sure it will be quite exciting if the top performers from the previous event could take on this role!",
                "line": 57,
                "url": "https://drive.google.com/file/d/17MyTPC4cbe1kZvyftB5hAUjece0L8pSS/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I don't mind. Hehe. If I'm going to commentate, I'll have to remain impartial.",
                "line": 58,
                "url": "https://drive.google.com/file/d/1yrAe0HqUconSIZ16CotRMqPlYJ2gJwUi/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Live commentary? Analysis? Can I make the kitty cat admit defeat?",
                "line": 59,
                "url": "https://drive.google.com/file/d/1_sYVhnxYH9xedx0Qocijryx5q0pwnrb4/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Priest, as you can see, you'd best give up on the idea. Getting this dumb doggie to do commentary is impossible.",
                "line": 60,
                "url": "https://drive.google.com/file/d/1s2RjGYwOWTiyW73p7EoaoG96k_4Sx16L/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What?! Leave the commentary and analysis to me!",
                "line": 61,
                "url": "https://drive.google.com/file/d/1LB4VauhbX5hW7vT_kLjidcWSvOS8eHpG/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Oh, thank you! In that case, will the commentators please come with me? Those who wish to participate, please hurry to the registration!",
                "line": 62,
                "url": "https://drive.google.com/file/d/1zkNP3qvGAMI-uKCoFWeDkfWufOY758wv/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Well, we're off then. You two, do your best.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1T2lMmL7LBCdg1pVsX2vInjWrdcY4kRp6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Of course!",
                "line": 64,
                "url": "https://drive.google.com/file/d/1BUoDEjfdUogcsAuVLaPmZrMUF_-iYfrL/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well, I might as well put in some effort.",
                "line": 65,
                "url": "https://drive.google.com/file/d/1RYm5estQTNLeO3eqFYehDUFpBXLAnGki/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Zeta, putting in effort? She really is aiming to win. But...)",
                "line": 66,
                "url": "https://drive.google.com/file/d/1iF3VH4j-TXKUIpbCIvANKBTYsNlk1STQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Zeta. I won't lose to you.",
                "line": 67,
                "url": "https://drive.google.com/file/d/19NyFDvbOZQUKXhzjOOXTaBhsDr1-kFn8/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Huh? I don't plan to compete against you, Epsilon.",
                "line": 68,
                "url": "https://drive.google.com/file/d/1iyZ9KCEtzM4emigxSgfX_XcRv1OKCV9q/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Does that mean you don't even see me as competition?! I'm the one who's going to win and get the \"Heart's Bounty\"!",
                "line": 69,
                "url": "https://drive.google.com/file/d/1JwTi-eKbw-jk-oYBVOMLxKXTuAAZCHCs/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "It's not like that...but okay.",
                "line": 70,
                "url": "https://drive.google.com/file/d/1Gcka6jhXQmsIQCKFqp4UWkCbbjSwYsej/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "It's better for me if you're motivated. Hehe...",
                "line": 71,
                "url": "https://drive.google.com/file/d/1Qej9q31rTqqqSEIGS1H3sEwHHqlcD-m1/view?usp=drivesdk"
            }
        ],
        "e3": [
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Here we are, at the start of the New Year again! This is the Great Ize-athlon...no, the Great Ize-athlon 2.0!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1jh-N0ucWMrLJlmDkCRcOTOIJ0FOBMwO9/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "First, let me introduce our commentators, the top two performers from the last event! Alpha and Delta!",
                "line": 2,
                "url": "https://drive.google.com/file/d/129StEynjHRyPkYgbZcWSj2FIiSNI7mLB/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm Alpha, the last winner. Pleased to be here.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1v3IhZ-0QziBfqEA1W_SXxIdpnpuaSFt0/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ehehe! I'm the runner-up, Delta!",
                "line": 4,
                "url": "https://drive.google.com/file/d/1J3aEKTRek8Oh0Tb56S5FV8hiSJ4PHqRM/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "This year, the Great Ize-athlon 2.0 has been significantly revamped and made even harder! It's a multi-participant long-distance race overcoming numerous challenges!",
                "line": 5,
                "url": "https://drive.google.com/file/d/11raRnTddLXPTgF3azNcOB0mZkB7pnnfz/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm both excited and anxious to see what challenges lie ahead...",
                "line": 6,
                "url": "https://drive.google.com/file/d/1OD5TOQ2zz0X2stISKPaFxB_IWpdEYeLG/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Remember, straying off course means immediate disqualification! That said, obstacles and traps are fair game according to our brutal rules!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1nAJPE7xB2LiogqhOXt5qwELBnL2eisYf/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "It wouldn't be fun without them!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1T9Nabn-Vd-f7XukrOIwLMOBHhxj7Fvv0/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "The grand prize this time is the \"Heart's Bounty\" rice cake! There are also luxurious prizes for the other top performers, so give it your all!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1wvK_HAxkayQ36D1fIEDbnUJr9wOfcmVx/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(I won't settle for anything but coming in first. I'm only after the main prize...!)",
                "line": 10,
                "url": "https://drive.google.com/file/d/1X_KFo-GPSd0BYeKnsU84_3fN1tfOAEVs/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(There seem to be many therianthropes participating, but none with physical abilities like Delta's...)",
                "line": 11,
                "url": "https://drive.google.com/file/d/1DYsNOMIoR-vE-9-WvoSCNUdV3Y2uvvPw/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(I should only be wary of Zeta. Seeing how relaxed she was earlier, I wouldn't be surprised if she's up to something.)",
                "line": 12,
                "url": "https://drive.google.com/file/d/1reaLS3R-htUIgnFksTbtSB9_TJbCq7mn/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "All participants, please head to the starting line!",
                "line": 13,
                "url": "https://drive.google.com/file/d/1QOfvsm94xArGhBKIC7SOxzR6p2QlZNsc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Here we go... I'll get the \"Heart's Bounty,\" and then Master Shadow will only have eyes for me!)",
                "line": 14,
                "url": "https://drive.google.com/file/d/1zJ8fJtHI-xfgRnHT_MTNvb40FgboTw8Z/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "There are more participants than I expected. They're no match for us, though.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1_fKpftkTnLmYw5l21mLzqrnnA4MSfUUL/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes...and under no circumstances will I lose to you either.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1Ez-alxHg4AHVrrGYf01wEJMrI16c-3NU/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Oh, you're all fired up. Keep up that energy, Epsilon.",
                "line": 17,
                "url": "https://drive.google.com/file/d/15qQ_zlB-9_L9yw4z7D_B4f9rY7AorSYO/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What?! Y-You seem to be awfully confident...!",
                "line": 18,
                "url": "https://drive.google.com/file/d/1P8rs6ddxPOMUEcI27mq-gMmzdfBDumOk/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Fine then... I'll win no matter what it takes!)",
                "line": 19,
                "url": "https://drive.google.com/file/d/1MfOhcd2cObDJ3FP9VW8vWHVQ-XUjITJv/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Oh? Epsilon seems quite motivated. Heheh. Competition can be a good thing sometimes.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1T3VOYzsoaMnNoRWyjiaZgPzXpuTuxnGm/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "That pussy cat is as annoying as ever!",
                "line": 21,
                "url": "https://drive.google.com/file/d/13YzKaJU0y7VbJXvY23Tc_PZSAHoZIm3p/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Is everyone ready? Alright then, take your positions\u2014",
                "line": 22,
                "url": "https://drive.google.com/file/d/1Ukebg8R3EANje5aFc2MWHmHb6paasvIV/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1W--lfAYwQuuAeFHN00rq-2DYvjelD87K/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Ready, set, go!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1G5f5fH8VTKxS1zAfuBA58PwrDBNxqIdC/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hyaaaaaahhh!!!",
                "line": 25,
                "url": "https://drive.google.com/file/d/12_aQeyyWX5MU01k14dG1Oo4b4Pz7mR5U/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "And it's...Epsilon who's off to a good start!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1RznD3uwaKB9CIaBK7W_13GIOOm55OM1a/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But isn't she going too fast? I'm sure there are obstacles up ahead...",
                "line": 27,
                "url": "https://drive.google.com/file/d/1MHCH7jqeSK8Q9EyYK8LDKzxjXiqZyr9p/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(I've had a good start, but so far, it's just a regular marathon. Not what I expected...)",
                "line": 28,
                "url": "https://drive.google.com/file/d/1RqhYQ1GkOpfxhEYY-SfL6NImCTFLmibw/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "If you space out like that, I'll leave you in the dust.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1W5h_-KmVs6PkjMl0a6iqkJGEZa9lXNLd/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Ah! Hey, get back here!",
                "line": 30,
                "url": "https://drive.google.com/file/d/17zm1JSYuwjrcrBr5fhpKgPAm5Zg_B3K0/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(...No use overthinking things. I'll just run for the finish line\u2014)",
                "line": 31,
                "url": "https://drive.google.com/file/d/1Yl9VFMW97c9m3m-2F9sDv9Qx36m4sCD1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Wait, what's that noise...?",
                "line": 32,
                "url": "https://drive.google.com/file/d/1Fc-Q_tAbwUNFhwbnh7_eCLHXNIzPZx-b/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Guess it's not just a regular marathon after all.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1Ioqu08xUjhbpA5NzOSqD6IpgmKkK3nBh/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hurry up, Epsilon. You don't want to get caught in that thing.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1CHLyhvEJYMF_14oTVrRWPthW-72KTIqY/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That thing...?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1heWAXy7QXpy0M8cQKo0Ohyvs5IkGHh3D/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Wh-What the\u2014?! What the heck is that ball?!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1yy5fqqjMd2zGdQ43IVo2oLxSr9f4a6Jo/view?usp=drivesdk"
            },
            {
                "name": "Therianthrope A",
                "name_variant": "Therianthrope A",
                "subtitle": "N-Not good! It's rolling this way!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1QStqUOpMBzbXELeYFVsZbSQUJVldCCoK/view?usp=drivesdk"
            },
            {
                "name": "Therianthrope B",
                "name_variant": "Therianthrope B",
                "subtitle": "I-I'm gonna get hit! Stay away from me!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1EfE96pgaUTM_iVZOq_nPgEYrTY7gHTel/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Looks like this is the first challenge. Be careful, Epsilon.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1g0EQ-bfVUlsv8H4RmPcUgbFxdBJIdNoG/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I know! Stop worrying about others, and look out for yourself, Zeta!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1lVZyHJrhjGHZdrBzCKw6zjbYLZ1oi__z/view?usp=drivesdk"
            }
        ],
        "e4": [
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Would one of the challenges in the Great Ize-athlon 2.0 consist of just running undisturbed? Absolutely not!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1z1xALeVQ4UGrW_NYYluQ3uBnbbRCgNnl/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "The first ordeal is \"Falling Balls\"! Can the participants reach the finish line while dodging a multitude of rolling giant balls?",
                "line": 2,
                "url": "https://drive.google.com/file/d/1RqCDvzMEqbdp5F_SIpV7Tt7WYT9ui4Rt/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Oh my... Those participants caught off guard are dropping out one after another.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1qjbEVvFXjWtbueaSn_37BnTEeJItjnBP/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "What a turbulent start to the race!",
                "line": 4,
                "url": "https://drive.google.com/file/d/1tGNm147lZPpg-QUI80WTw0_c_yHZqPAg/view?usp=drivesdk"
            },
            {
                "name": "Bearded Participant",
                "name_variant": "Bearded Participant",
                "subtitle": "This is as far as I go. All of you...carry on with courage in your hearts and don't be afraid to go forth...!",
                "line": 5,
                "url": "https://drive.google.com/file/d/1pVOlpZ7a6MIdZazX8qP4uG1FJX0cwhxb/view?usp=drivesdk"
            },
            {
                "name": "Disciple",
                "name_variant": "Disciple",
                "subtitle": "Master?! No, let's reach the goal together!",
                "line": 6,
                "url": "https://drive.google.com/file/d/1PKg4DxhYyxfMxdhT5JRAIDlgJWSftzWd/view?usp=drivesdk"
            },
            {
                "name": "Junior",
                "name_variant": "Junior",
                "subtitle": "Watch out! That giant ball is so close...! Hurry, or we'll get caught\u2014",
                "line": 7,
                "url": "https://drive.google.com/file/d/1m4FXo70wptxFw9O-XF-hkW2sNC85rqmb/view?usp=drivesdk"
            },
            {
                "name": "Bearded Participant",
                "name_variant": "Bearded Participant",
                "subtitle": "Aaaaghhhh\u2014?!",
                "line": 8,
                "url": "https://drive.google.com/file/d/11hpNEDsbwunPx9fyee1nM3Q-rERXnDaV/view?usp=drivesdk"
            },
            {
                "name": "Disciple",
                "name_variant": "Disciple",
                "subtitle": "Master\u2014!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1NG7B-z3g55CAjbt6_JGUk-P-YXqnDxKn/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...What are they even doing?",
                "line": 10,
                "url": "https://drive.google.com/file/d/1mCTjOZXLNhrUYg0Yt1WoYmJp4Qra47pf/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Participants are getting blown away one after the other by the giant balls! How will they manage to escape?!",
                "line": 11,
                "url": "https://drive.google.com/file/d/10NnIIjxj5ZpV3UoE5rNTDaZG7Ry5IF8c/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Let's hear from our commentators, Alpha and Delta. What do you think about this first challenge?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1Psn6gEtQy98RvvcRLUIG7rW5iEA_dYa3/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It's intriguing. I've heard that rolling a large ball originally symbolized the act of warding off evil... I wonder how it turned into this mayhem?",
                "line": 13,
                "url": "https://drive.google.com/file/d/1sXQIRCNYUqrhMYpClTDQjL7UAXtbjB2m/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Delta, how would you tackle these \"Falling Balls\"?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1Z3tKdotidbQFXefFebzLvgYxxD9PdAEK/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Just smash 'em all!",
                "line": 15,
                "url": "https://drive.google.com/file/d/17mj9tr5kLLsgyrRtklNpNLzH0ez862IX/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Well said from the previous winner and runner-up! Such sharp analysis!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1u_4Z56QOclIBJFLwUIFgy85HIv_aOubE/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hehe! Leave the thinking to me!",
                "line": 17,
                "url": "https://drive.google.com/file/d/1fAsX7u7Qanae3qHOscwhFIg5kqpGIxcL/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(I'm pretty sure Delta's brute force doesn't involve any thinking...but, anyway, let's focus on this challenge.)",
                "line": 18,
                "url": "https://drive.google.com/file/d/1tAh4yl0KtbpoelQia1U0uLdDx8f0sulz/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I just need to dodge these balls and speed forward!",
                "line": 19,
                "url": "https://drive.google.com/file/d/1lWVgxcxTBBG1YFgpIG0Kwx4T1vOdHto8/view?usp=drivesdk"
            },
            {
                "name": "Therianthrope A",
                "name_variant": "Therianthrope A",
                "subtitle": "That elf is quite something. And she's so beautiful...!",
                "line": 20,
                "url": "https://drive.google.com/file/d/132WU_XThMWh-enyNfbhlzXSN2ilGdtMB/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Hehe, of course! I precisely calculated this outfit so that I look beautiful even while running!)",
                "line": 21,
                "url": "https://drive.google.com/file/d/1QbqRuKbJimEZs7aImCg7gT561K_olqgf/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(What do you think about my natural sway? Hehe, even without the \"Heart's Bounty,\" I might just beat that airhead\u2014)",
                "line": 22,
                "url": "https://drive.google.com/file/d/15LTXz2B_KGTWODuUjsC-CmUXA4Lck9MK/view?usp=drivesdk"
            },
            {
                "name": "Therianthrope B",
                "name_variant": "Therianthrope B",
                "subtitle": "Wh-Whoa! Look at that!",
                "line": 23,
                "url": "https://drive.google.com/file/d/1eqZMlkSd9kZYf4eMz7tSJYZnN1qr7o14/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Huh?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1M0Zdvs6X7Hml2HKEc61hzriwrayD1x3J/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Excuse me, you're in the way. Coming through.",
                "line": 25,
                "url": "https://drive.google.com/file/d/14rZdvqG5tLGtHzTDdOKGcq1686aOwD2F/view?usp=drivesdk"
            },
            {
                "name": "Therianthrope B",
                "name_variant": "Therianthrope B",
                "subtitle": "H-How can she walk so leisurely and still avoid the balls...?!",
                "line": 26,
                "url": "https://drive.google.com/file/d/11XFZLPC2xem3f1olBKvtVbi0AFXegbJY/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Just as I thought, Zeta...she's reading the trajectory of the balls and calmly dodging... No, it's almost like the balls are dodging her!)",
                "line": 27,
                "url": "https://drive.google.com/file/d/1r-rv2-nJWRXARZ9Unv2SiIz2dpTaiu1f/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Wait, but more importantly...)",
                "line": 28,
                "url": "https://drive.google.com/file/d/1r3zeY5zGyfPHXYpXbG2qv0FL0cWmm1iE/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Oops, that was close. Misread that trajectory a bit.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1nXrdHGFhDUL2f-zg9QUv0pdQDyu20iua/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(That natural yet bold sway... I haven't paid much attention before, but Zeta's quite a natural herself.)",
                "line": 30,
                "url": "https://drive.google.com/file/d/12Rmk1bKZLG2A0Qg5h4_-huqN7l20YU9c/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(She's not on Beta's level, but...definitely a formidable rival!)",
                "line": 31,
                "url": "https://drive.google.com/file/d/1AEGZaxHUM4_k4S4KU2fLxcRqXq42Vu-5/view?usp=drivesdk"
            },
            {
                "name": "Therianthrope A",
                "name_variant": "Therianthrope A",
                "subtitle": "Eek...?! What's with that elf's menacing aura?!",
                "line": 32,
                "url": "https://drive.google.com/file/d/10yavQtI8hqBh9NslEOKOztKSv5CK3pTH/view?usp=drivesdk"
            },
            {
                "name": "Therianthrope A",
                "name_variant": "Therianthrope A",
                "subtitle": "G-Get out of the way! Or we'll be finished off by that elf!",
                "line": 33,
                "url": "https://drive.google.com/file/d/171Q3sMcpQU9w_azKQGIUOmi8o2EqVP92/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(My pride won't let natural talent surpass me. Just you wait, Zeta... I'll take the top spot!)",
                "line": 34,
                "url": "https://drive.google.com/file/d/1LCfO1iCQBm_tgzPyre7wENouVsCiOm5l/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Oh, not bad, Epsilon. That's more like it.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1gop8-l1zaH1rqacRjKi_4ALE2qCjZ1mF/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Wow, she must really want that grand prize...",
                "line": 36,
                "url": "https://drive.google.com/file/d/1vT6DWzel8xrvxcWmeW9ALFJw7Jd0bNSZ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Epsilon is kinda different today! Use that energy to take out that pussy cat!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1YbqLX_Oz6AE1L5S3mHp_32hCjjJqgNQH/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "She's always been fiercely competitive. You can tell something's lit a fire in her heart.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1nQKzh6K5jMty4JkEqTkISdkHtJElp7Ty/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Heheh... This event is shaping up to be quite enjoyable.",
                "line": 39,
                "url": "https://drive.google.com/file/d/165hKPwHc2YQ-67PkUb5qkPLa-vlK76PD/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Zeta was in the lead, but Epsilon has just caught up! How will this race turn out\u2014?!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1AHbpH-GTqXpd6ptIfLhTohW2AEnHDQSg/view?usp=drivesdk"
            }
        ],
        "e5": [
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "The race is already heating up in the Great Ize-athlon 2.0! Those in the lead are approaching the next trial!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1EsiN3RedYLteJyqUDmqR-g7AJpdA5jfd/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "This is the second challenge... What kind of ordeal awaits, and how will it be tackled... There's a lot to look forward to.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1QrbGnOxRaI_IXW9xnicXkEtdORZp9F1b/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What's next? A fistfight or something?",
                "line": 3,
                "url": "https://drive.google.com/file/d/1lCyvyP5kr8YDEM-62v7EyMdeUIslpjbi/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Our commentators are also curious about the next event... It's called \"Card Shoot\"!",
                "line": 4,
                "url": "https://drive.google.com/file/d/1PtN7G-PMWlHr2du0w7vZfNKGr-2OcRD1/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "\"Card Shoot\"... I wonder what that could mean? You throw a card to flip over other cards?",
                "line": 5,
                "url": "https://drive.google.com/file/d/17K3q3jnmu5CONNbYmvkieiensEFz523A/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Exactly! Here, you'll need to flip over five cards to advance.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1ACt0tdf6aS1FmTv_WINB82WZf_ltqTa2/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "It suddenly got so lame.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1u64eO6IN-8KL0NABwvsBaWO_nfy8hoXU/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Y-You don't mince words, do you...",
                "line": 8,
                "url": "https://drive.google.com/file/d/1ErQY61ye0LhNX6pQtLcbSWpSfEwfl_gR/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It's tame for the Great Ize-athlon, but it requires flipping technique and throwing form... It'll be interesting to see how each participant performs individually.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1yzEYOyeEdpCYIo-5Le1c0aFB5Q8UO6xs/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Right! Exactly! Alpha, you're great at hyping things up!",
                "line": 10,
                "url": "https://drive.google.com/file/d/1iKOkKmIQI2-QTuNLOoBVaXc1RqoNhPr0/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "U-Uh... Thank you...",
                "line": 11,
                "url": "https://drive.google.com/file/d/10_EEVDbTy9QP-HRYc3JE0YjT883LS6ct/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(Just flip over five cards, huh... Is that really all there is to it?)",
                "line": 12,
                "url": "https://drive.google.com/file/d/1FiqHC5m92HurGJzlrUjxn_Fwwf7m7kCz/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I see... So it's a challenge where control is key.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1Xd9GnN54y82OI1IO4lcd6skhMA6KcmQo/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Heheh. This event seems tailor-made for me!",
                "line": 14,
                "url": "https://drive.google.com/file/d/1PWJ76-vmAfA0g92rdVH6bQ_Eghb0EMgu/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...",
                "line": 15,
                "url": "https://drive.google.com/file/d/1g1wV3sQhOYKpbrKOzuNVF6-KIy3evK83/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Zeta, aren't you joining in? You haven't moved all this time...",
                "line": 16,
                "url": "https://drive.google.com/file/d/1uujqfDhVVCrGTMJ3bStyqNI_h1RdcY-J/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Don't mind me. This is like fishing\u2014it's all about the right timing.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1ylpWHkrx5BLVVNLdm-_W7R4zms3LcdOp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I don't quite get it, but that's just fine by me! Take this! Hyahhh!",
                "line": 18,
                "url": "https://drive.google.com/file/d/1YhPwemsUKliMP7fU2R9cj-PSwoDklyaD/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Whoa! Epsilon's card flies with incredible control!",
                "line": 19,
                "url": "https://drive.google.com/file/d/1H_43wUUPlZqekRO5esyO44zuKXeKy7xv/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "She's flipping the cards one after another! Whoa, what a pace!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1wgW3MGeQQBbH7gxIHIwx3z9uB1MpJnm6/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "That's Epsilon for you. She doesn't rely on strength, but on perfect form and precision. Impressive technique.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1NAvUMBZ5PxIPR_WjCrYNfql-UcJvodTW/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "*yawn* I'm getting sleepy.",
                "line": 22,
                "url": "https://drive.google.com/file/d/145mn1aKEZHe3ukWCafL4bKUYccuKdkEu/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Um, Delta? Could you show a little more enthusiasm, please?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1jqe5ul3PCbTQxUQgJgladDU2u2_vFXsS/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I'll use this momentum...and flip the fifth one!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1OE6AIyrSKi0g-C_OJk1BnsLxY1MynN5Y/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Huh, what? \"Start over\"...?!",
                "line": 25,
                "url": "https://drive.google.com/file/d/1OUIdhKnC-hKbUCMm_iMiV--usDz_0kZD/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Epsilon flipped the wrong card! She must place all her cards back and start from scratch!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1ZHrxrzbRhpX-bKpIUhh94dlMQuJq4Tg7/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "This is so unfair...!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1Blt1twlcjhOVJjuAcIWQRTVghmdYveXH/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Having to flip five cards in a row, and the right ones, too... Everyone seems to be struggling.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1rFjrs97L3JMAkZDszGoKyA-Px8IDg0MB/view?usp=drivesdk"
            },
            {
                "name": "Therianthrope A",
                "name_variant": "Therianthrope A",
                "subtitle": "Tsk... I have to start over! Just when I managed to flip one!",
                "line": 29,
                "url": "https://drive.google.com/file/d/10qEebuar02IsPyVs9cdpV4AgGipRSERR/view?usp=drivesdk"
            },
            {
                "name": "Therianthrope B",
                "name_variant": "Therianthrope B",
                "subtitle": "Damn it... Where are the right cards?!",
                "line": 30,
                "url": "https://drive.google.com/file/d/1VzIrdR_9J7jqKYGCNGgCGmbHj7NsvCts/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Cries of frustration ring out from the participants! What will happen in \"Card Shoot\"? Who will emerge triumphant?!",
                "line": 31,
                "url": "https://drive.google.com/file/d/142_YwCBzx-9KlqzmEOXCjeJRZsDN4YcB/view?usp=drivesdk"
            },
            {
                "name": "Disciple",
                "name_variant": "Disciple",
                "subtitle": "Ugh...I can't advance like this. Take this card and go first!",
                "line": 32,
                "url": "https://drive.google.com/file/d/1wJPSfU6hH5RO7uqpiKkVQjoXuxlk4VGX/view?usp=drivesdk"
            },
            {
                "name": "Junior",
                "name_variant": "Junior",
                "subtitle": "But, this is the one you risked everything to flip\u2014",
                "line": 33,
                "url": "https://drive.google.com/file/d/1ltA0nNPu8vrKBpmBl7K2a_TIYKrrSwqp/view?usp=drivesdk"
            },
            {
                "name": "Disciple",
                "name_variant": "Disciple",
                "subtitle": "Just do what I tell you! ...Do it for me too.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1RNIcBmmjUhb8z1LagzflUU5QQtN6uCm_/view?usp=drivesdk"
            },
            {
                "name": "Junior",
                "name_variant": "Junior",
                "subtitle": "Jeez, maaaaan!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1VYs9ei0mMMPPbUg-yfR6MkYvPbYIfwd4/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What are they even doing...?",
                "line": 36,
                "url": "https://drive.google.com/file/d/1OMkqCaWdsroGpV8B2prOqiwdCPHNGrhD/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Ugh... You got to be kidding. But I remember where I put back the card I just took. If I aim for that one\u2014",
                "line": 37,
                "url": "https://drive.google.com/file/d/18WBTGtfqA6aIq-CZW_smg9ysDxB-tnZ7/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Oh, I'll take that, thank you.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1YmDIeNjsE03oUaCV-uPQ1WR-4eJ_cd0i/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Ah?! Hey!",
                "line": 39,
                "url": "https://drive.google.com/file/d/12zI7fwtWm7R872iGZy_NGMDfqBmkmH6K/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Zeta manages to swipe it from under Epsilon's nose! Epsilon's target card has been taken!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1i4AwdoRkn9t36ELKJ-OTngKMII9l8Xmp/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Never let your guard down. Thanks for handing it over.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1Tb8HtGzOfqbHKY0l0VlUJor4zVYcP9Fk/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "W-Wait, is that why you weren't moving earlier...?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1EtBJD4oWazoyT6ipkxX1ujF_Bimgi63m/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Observation is my forte. I'm not breaking any rules, so don't take it personally.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1N0Wpd4ohMqdIuVtAa3trT-m1qjEJgr-M/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Got my five cards, so I'll catch you later.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1s_BGC3k0-jY1ed-5LLG2w3B8uie6af-v/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Ugh...! Oh no you don't!",
                "line": 45,
                "url": "https://drive.google.com/file/d/1d96WPA5kxvEnKpTPKHom2_juDa5Lfy6i/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(...No, I can't let my emotions get the better of me. I'll calmly determine which card to flip...!)",
                "line": 46,
                "url": "https://drive.google.com/file/d/1ftlEXKqzZxV-I46g7teuPoyZWO5Gj9Zz/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Oh? Epsilon appears to be frozen. Was she that traumatized by having her card taken by Zeta?",
                "line": 47,
                "url": "https://drive.google.com/file/d/1VwAo4vA-RBYbw66DIvTwPidcHfih90cw/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...Her aura seems different.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1rLjOHDoUNktS1q501hBKw00FEZ48d1w2/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, she's...incredibly focused.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1jfs0S0HKMi2-8pGT8E0OkPyduWKAObjk/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(The effects of the \"start over\" cards shouldn't last long, so there must be a subtle difference in the amount of magic residue between them and the correct cards...)",
                "line": 50,
                "url": "https://drive.google.com/file/d/1hgJrK1gFjoyss_t0nH7qxKmR4lSBYtns/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(I'll use my magic detection to discern the difference...!)",
                "line": 51,
                "url": "https://drive.google.com/file/d/1bdZZx1itWcnH540v7CBhxPXJiZrnshJ9/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Got it! The right cards are...this, this, this, this and...this!",
                "line": 52,
                "url": "https://drive.google.com/file/d/1E0QWhSvb-byasw-pDdjtpmE26ijYFbw0/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Incredible! Epsilon flawlessly flipped all five of the right cards!",
                "line": 53,
                "url": "https://drive.google.com/file/d/1m2gOt1E72yLT2IGCmkhZ6Oq40Tg-Aj3G/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It may seem like luck to the casual onlooker, but it's not. It's her skill that pulled that off.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1DwtcT44kG3k7KH5QhKqAW5TF4lcRqnpT/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Card shooting looks fun! I wanna play too!",
                "line": 55,
                "url": "https://drive.google.com/file/d/1UbvhGSJYAwCq6rOlFuUpLhOgAv5juMxJ/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "The entire venue erupts in response to Epsilon's miraculous performance! No one can take their eyes off of whatever's coming next!",
                "line": 56,
                "url": "https://drive.google.com/file/d/13FAKh0LeEWlg8zn_w0wNt0TzN2Z6Yk-2/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Just you wait, Zeta... I'll catch up to you soon enough!",
                "line": 57,
                "url": "https://drive.google.com/file/d/1hP-uIiOQQC7cMt9jul3JU5cjGlCBvzPG/view?usp=drivesdk"
            }
        ],
        "e6": [
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The race continues after \"Card Shoot,\" but...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1ifrqbKzOlCpBN9goY-mEoM4J5vdsxENJ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hmph... What's Epsilon doing?! She's not catching up to that kitty cat!",
                "line": 2,
                "url": "https://drive.google.com/file/d/118nZmUsf8LQElRO9_LJea7BOiKejb4DR/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "At this rate, I'll have to interfere\u2014",
                "line": 3,
                "url": "https://drive.google.com/file/d/1InDgsZvyen62q-B3QeipC01GNtApkyCw/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Sit.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1EZQl1RpgUWElWy5O0weTY5fbkAbWZiAy/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ugh... Yes, ma'am...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1XCIpo5FLr4tJ3Qu-B9Op9Coni_Hhyur4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "The race is nearing its climax. I wonder what the final challenge will be.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1GeQD6d_7bbxUQrtXKmBqNgZGaYpOjlGt/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "I'm glad you asked! The final ordeal is...\"Rice Cake Pounding\"!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1QmPC1RMkOxpPTscFeqG-4aq9Ykawv7og/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Participants must take down a giant rice cake-like slime and its minions with a mallet while shouting \"flat\"!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1bplfuFgLnXqLKjQCl2El-m9VPgt5yByU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Whoa! Sounds fun and tasty!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1Czvb_UHrj4O7sqNmVPdxBequnI2CqvQQ/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Remember, you must shout \"flat\"! Fail to say it, and you'll be disqualified!",
                "line": 10,
                "url": "https://drive.google.com/file/d/1EDsYCCvyiFfjsgXToXvAJocTiDf1ivOV/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Wh-What...?! Who're you calling \"flat\"?!",
                "line": 11,
                "url": "https://drive.google.com/file/d/122AIiY56joJl6BlNOMOHtlhWkwoZwe3Q/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Um...who...? It's a traditional chant when pounding rice cakes, you know?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1jEMcxhhiPmR5lndjug1o21xs-BIBqzUX/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Ah! R-Right... Hahah...",
                "line": 13,
                "url": "https://drive.google.com/file/d/14oreoux2y1Ws0Q7IfJfuiMJ_cakst80f/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Right, it's about rice cakes... In no way is it meant to mock someone's physique. Calm down, Epsilon!)",
                "line": 14,
                "url": "https://drive.google.com/file/d/1ous1x6vcdWnQ7pyi6cRicyWYeBBxpzgs/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Okay. Here goes, \"Flat...\"",
                "line": 15,
                "url": "https://drive.google.com/file/d/1JIvhfmatwHT33AgPN6fOjuOfRJSACrJg/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Epsilon has begun taking out the minions! But her shout is small! So small!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1y16Bqk5YMia6WjRO_HeNDxoKcJ5pWDEc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...What? What're you calling \"small\"?!",
                "line": 17,
                "url": "https://drive.google.com/file/d/1ZoYO-nEhtZZjqFJXaYJxJUrlZ5HSfzxa/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "I meant your chanting...",
                "line": 18,
                "url": "https://drive.google.com/file/d/1qPmUxAHDGmj_nPveIbpi881iZQLBG6f-/view?usp=drivesdk"
            },
            {
                "name": "Therianthrope A",
                "name_variant": "Therianthrope A",
                "subtitle": "Hraaahhh! Flat! Flat!",
                "line": 19,
                "url": "https://drive.google.com/file/d/1lxnEBsl43rJ_pl6Pji8yjnB5NTKiCPhT/view?usp=drivesdk"
            },
            {
                "name": "Therianthrope B",
                "name_variant": "Therianthrope B",
                "subtitle": "Flat! Flat! Flat!!!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1TylrudcozR_zGlDNXxRL77KxNmPSGkXB/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Nghh...",
                "line": 21,
                "url": "https://drive.google.com/file/d/1kLR0U9gymqfKP7aluEKEB5cvsq5jpa40/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Epsilon has stopped moving again! Will we see another miracle like we witnessed with \"Card Shoot\"?",
                "line": 22,
                "url": "https://drive.google.com/file/d/170SQiduh945PMO_L4iMKwgnDSwDpeXyW/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Unfortunately, it doesn't seem so. She looks frustrated, but why...?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1T0LwRUpmLsKd7lcuQJl2potwJPj2h-5c/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Epsilon, move! If you don't, the kitty cat will win!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1ShaApfA18EsdV3WmcIisDR0f9xQyKOBP/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(This is the worst... The actual worst! So what if I'm actually flat-chested, and these breasts are fake! I've worked hard for them...)",
                "line": 25,
                "url": "https://drive.google.com/file/d/1hhzl84Ldc4pWwedWFtq8P15Tverf1N2y/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(...But do I still fall short of that airhead...? If I'm going to have to suffer like this, I might as well\u2014)",
                "line": 26,
                "url": "https://drive.google.com/file/d/14FZFI4MzLABpSl4Ji0rc-xmhk-SZgUTk/view?usp=drivesdk"
            },
            {
                "name": "Junior",
                "name_variant": "Junior",
                "subtitle": "Hey, watch out!",
                "line": 27,
                "url": "https://drive.google.com/file/d/11Z2Bcsv3TkVPTFE3Sc9P7S459pjqBF_k/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Huh...?",
                "line": 28,
                "url": "https://drive.google.com/file/d/198tJWZTL-pl-ZSj-7e-06iNIXA6PnUbS/view?usp=drivesdk"
            },
            {
                "name": "Junior",
                "name_variant": "Junior",
                "subtitle": "Ughhh?!",
                "line": 29,
                "url": "https://drive.google.com/file/d/13oDt3Qx3xxC6mazTHmapVQa17u8pTECA/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You... Y-You protected me...?",
                "line": 30,
                "url": "https://drive.google.com/file/d/1JVoL1sBmSgB9uuQ6uCZEYCdmfJmvMUB6/view?usp=drivesdk"
            },
            {
                "name": "Junior",
                "name_variant": "Junior",
                "subtitle": "...That giant slime is scary. It's only natural to freeze up.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1LHxSgkaHT5E1-Pa7DEoMVsGHepWOq5p3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Um, he protected me, but...who even is this?)",
                "line": 32,
                "url": "https://drive.google.com/file/d/1oaWt290rcgYbILqGhwuu1llZKiYKKDQa/view?usp=drivesdk"
            },
            {
                "name": "Junior",
                "name_variant": "Junior",
                "subtitle": "But thanks to my master and my senior, I get it now. Regardless of what stands in our way, we must move forward...!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1qQtPaVN-ou8JVquuPSuAi8cCz_1cn0iQ/view?usp=drivesdk"
            },
            {
                "name": "Junior",
                "name_variant": "Junior",
                "subtitle": "So, even if it's reckless, I'll accept the challenge! Again and again!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1lnHKacYg_sTpmE4piJx3mg1WupfNUfGP/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Even if it's scary or reckless...accept the challenge...)",
                "line": 35,
                "url": "https://drive.google.com/file/d/1B9KSTPD0kIhfvmRehaMrSyK0nld75XPU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Yes... I kept moving forward, even when my heart almost broke before obtaining this body...)",
                "line": 36,
                "url": "https://drive.google.com/file/d/1LrK4GfpD04ZzHB508g2nxvvgGLdRHTvr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(I can't let that challenge I accepted...go to waste here!)",
                "line": 37,
                "url": "https://drive.google.com/file/d/1pTReOSvYUXsGquljXbaNxr3C_zPcYhCw/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hyaaaahhh! Flaaaat!!!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1ft3g6wdfVc8UXRLxw-xiGodMi5a-9IoF/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Epsilon is back in full force! She's running with incredible momentum!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1F0kzAGm8GBNWbZBGoC3OffKg5HY_MsK2/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "She seems to be showing signs of growth. Heheh. She's still evolving.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1rdMXxL9-6GavFNpA_YMhfm0Mlq2oQOet/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(...That guy inspired me, but what even was that charade...?)",
                "line": 41,
                "url": "https://drive.google.com/file/d/1KeU9r19gq1zAKugC8kPaHSXvMe6VvNLq/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Flat! Flat! Flaaaat!",
                "line": 42,
                "url": "https://drive.google.com/file/d/147R9nM8ACTNXfOGW60HSC4eLd0Akv6yc/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Epsilon has overtaken the other participants, reaching the lead group! But the giant slime lies in wait ahead!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1puMexYjoHKdjGB0YedbDSsTRYh7gv52p/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It doesn't look too violent or dangerous, but that rice cake-like body...seems a bit troublesome.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1RmFGYbLDd92IU4to9-ZOUXQT0mk3BwYU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "A light scratch won't be enough to take it down.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1IfvSsybAZiJb1EM_LhSRqdAzRaoJ5B3r/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "This thing...looks like a handful. Well then, how should I attack it...?",
                "line": 46,
                "url": "https://drive.google.com/file/d/1y7e8MEHuILrsFBl0sOF57BI42byENGO2/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Oh, Epsilon! I was waiting for you.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1FgLHTGBxwktMWm_VDaX3U-Mj64zjHbYM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Wait, you wanted to team up with me?",
                "line": 48,
                "url": "https://drive.google.com/file/d/1BecKswv44jJck2utCwUKIQoYKp7A2PxZ/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "That's part of it.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1Xwk4n0sZUvAeyX3lL9i7ITao-I_ejCog/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Part of it? Well, whatever. Right now, let's join forces to defeat this thing!",
                "line": 50,
                "url": "https://drive.google.com/file/d/16sPWdyvPdHDiABsJkVjXOjqqkiJiJLmf/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Sure, sounds good... Here it comes!",
                "line": 51,
                "url": "https://drive.google.com/file/d/1pHoDKDc6qSUhvf-I6I2wxF5KWrLMiOcX/view?usp=drivesdk"
            }
        ],
        "e7": [
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Whew. That was easier than I expected. Well, that's what happens when the two of us team up.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1yD8I8jGq9icGCfXoVP6EBfAi0otbhtAN/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Exactly. It was worth waiting...although that's not the only reason.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1a76iagkFfDE2cybxwDirgJOuDneSSvNm/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What do you even mean by that\u2014?",
                "line": 3,
                "url": "https://drive.google.com/file/d/1e_V-f5ZMZ4Tuo8iYp1tw9DCgPxgJADkP/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Never mind. For now, let's focus on reaching the finish line. We wouldn't want someone else to snatch our victory after we defeated the slime, would we?",
                "line": 4,
                "url": "https://drive.google.com/file/d/18g9PXCPfMOUjuorRa0jWhqH1f2Wicg9B/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "R-Right... Well, Zeta, from here on out, it's a real showdown!",
                "line": 5,
                "url": "https://drive.google.com/file/d/1bDsRV0avVJXjotd6x6iLXVvHe9pOz5d3/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Sure thing. Don't leave me behind...hup!",
                "line": 6,
                "url": "https://drive.google.com/file/d/1IHp3ZdlTlxuOcXYQHXdJHIWZM_3jBfpw/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "And Epsilon and Zeta are off running! We are about to witness the winner of the Great Ize-athlon 2.0!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1ESrVmY-0uoVX0IbI-VPWJiqXaEwjWXRB/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Good luck...both of you.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1Q--hcBDM0pr-OLeak8Mpp25x6hOgKVnu/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Epsilon! Take her out!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1vG4JUWb0Znr5qXs0QnVUrayczsXWTR58/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Ack... Zeta's fast...! At this rate, my win... my grand prize...!)",
                "line": 10,
                "url": "https://drive.google.com/file/d/1JUVZ1wY5XdhpxVSBwSPRc_eL3DNKFDqc/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...",
                "line": 11,
                "url": "https://drive.google.com/file/d/1ACshgQWnw6YjXRv4TXX_5RsCO2VJ2j17/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "O-Ow! I got a foot cramp!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1XL4sMXeUbOKIXCPI6Kzv0gW8xOo18TuC/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Huh?",
                "line": 13,
                "url": "https://drive.google.com/file/d/1xt5XUrpoTgR7lt8KtK0U4tYE4-DFgD_f/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Whoops, Zeta has had an accident! She's slowing down right before the goal!",
                "line": 14,
                "url": "https://drive.google.com/file/d/1Nwa0CAe0NazT0L7rptGFWu5XsesyPVfF/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Wh-What the...? Fine, if she's going to let me win, I'll take it\u2014",
                "line": 15,
                "url": "https://drive.google.com/file/d/1Uh9GrdkUa7fTM4hXtW--jwxAC00dqRjY/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Epsilon doesn't stop! And there she goes, crossing the finish line! The winner is Epsilon!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1zyBFXhsJc7eLc3GehbnYwAjtqQZoWZnR/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Ouch, owwww.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1ygGqcZqEDoNE4gasEMj6X7IO2_lr7R_2/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "And Zeta also crosses the finish line! She comes in second place!",
                "line": 18,
                "url": "https://drive.google.com/file/d/1Qqrp6-liG3iOOli8xEQD3-p6mWf99_re/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "A surprising turn of events. It looked like she fell on purpose...",
                "line": 19,
                "url": "https://drive.google.com/file/d/1IK5TmpVRSBLe9sxf3en_-EmNjnUBlOHd/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Yay, yay! The kitty cat lost! That's what she gets!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1CYr6s7h0R-7G-hje20S8rrX3LLC4ocRW/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Now that we've determined the placements, let's move to the award ceremony! The prizes will be presented by our commentators! Don't miss it!",
                "line": 21,
                "url": "https://drive.google.com/file/d/1_xrKgwaovoF-5TPvUKs_OMC42aGdj3Dl/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "And the victor of this year's Great Ize-athlon 2.0 is...Epsilon!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1V0IZGVVt2hHJvUC1koN7beiJemwUGU3F/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...",
                "line": 23,
                "url": "https://drive.google.com/file/d/16dQgKJX61dhZgY9xpQ61yuv6zMOPezvy/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hey, why did you hold back?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1MntPrdpth7OqPrtSZqbrNOhpmJuHwNrk/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hmm?",
                "line": 25,
                "url": "https://drive.google.com/file/d/1BszceTkULY3bWcRHYP2u1yR9y-_KRgXN/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Don't play dumb. You didn't really cramp your foot before the finish, did you? You did that on purpose to let me win?",
                "line": 26,
                "url": "https://drive.google.com/file/d/171tr_v4eFalqALdlJD2o-oY4viH7L4Jx/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well, yeah... People have their own goals, you know. Mine wasn't to be first, that's all.",
                "line": 27,
                "url": "https://drive.google.com/file/d/13lvbXNOn1PuiGHTZXOWe8NZiSQagdzdP/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Congratulations to both of you. You were impressive. Here, these are your prizes.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1yIa7Stvc3i1nb8gfGra39Bh5DsuxkD2U/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Epsilon wins and gets the rice cake, and you, kitty cat...get Golden Sardines.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1WUXPexMyqAYsYQ78hQbBvP83ebni0jfd/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "S-So, this is the \"Heart's Bounty\"...! It really does radiate grace and beauty\u2014",
                "line": 30,
                "url": "https://drive.google.com/file/d/1RoAwle5gSJRPaPNTTifeABuLt388U_sH/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Huh? Golden Sardines? Zeta, don't tell me you...",
                "line": 31,
                "url": "https://drive.google.com/file/d/1kR3gb7VrleDxWkYctevY3CV0ENwe3rtb/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yeah, this is what I wanted\u2014the second-place prize. They say it's a legendary fish that tastes great and is good for your looks.",
                "line": 32,
                "url": "https://drive.google.com/file/d/12xLC3Y1EnmRCuQcFbIF4ZCn33OOw55PL/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "*sigh* So that's why you suddenly got fired up after reading the flyer...",
                "line": 33,
                "url": "https://drive.google.com/file/d/1m34OEI0fv4Ah15bOyg7QfeVbYlbXPHW2/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(I was so focused on the main prize, that I didn't even notice... A rare fish as second prize...)",
                "line": 34,
                "url": "https://drive.google.com/file/d/1F8wA978VL8yLuLOxCmTnehnoJHL4DIwH/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(It's supposed to be good for beauty... Makes me wonder if I missed out.)",
                "line": 35,
                "url": "https://drive.google.com/file/d/1rfnyRnFoa1DJ4wWQsUEMrHwE9motim5v/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Heheh. I can't wait to sun-dry these at home. They're going to be delicious...!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1F_qVHdDCtZHARiRI86AeaRM6DdI6bm8d/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(...Well, it's fine. I got the \"Heart's Bounty,\" after all!)",
                "line": 37,
                "url": "https://drive.google.com/file/d/1rncGJ6BzeaIGLZaXdie4uuzEvkTUYPUt/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Aww... I wish I got to join in. I would've won first place...",
                "line": 38,
                "url": "https://drive.google.com/file/d/13Z7ikwHuWTjtlpFI9MRfqVdW461FUawb/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "After watching the two of you, I do feel like moving my body...",
                "line": 39,
                "url": "https://drive.google.com/file/d/17rTD9Xd9lfN6Vd23U6nexiuuld9zMW-V/view?usp=drivesdk"
            },
            {
                "name": "Dog T.thrope Priest",
                "name_variant": "Dog T.thrope Priest",
                "subtitle": "Next, we'll have an exhibition match of \"Hagoita Deathmatch\"! Those wishing to participate, please come to the central square!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1zqMLvUKTrXsrewWYM-MrD6O1ssFXBi60/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Oh, Hagoita Deathmatch! Lady Alpha, let's compete!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1QeawZ08vDCnxyhXTmCDgZDkp8ouSnx4e/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Alright, I'll take you on. But don't expect any mercy.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1_AQ3xLI9aN_PKk2rFsD8HkIme9qIeBO5/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "B-Bring it on!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1GJtvBMetQUTqqGqLJAkSOC7KQ6F7LY9G/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Are you two joining? It's surprisingly strategic and fun.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1xhbCTrgAUO_zQKg8_hozUGTLNeYYFyxj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "No, I'm...quite exhausted...",
                "line": 45,
                "url": "https://drive.google.com/file/d/1ZU3fPqJXeL_sDNt7Pn0rXFSYWygWKdCz/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Me too. I want to cook these Golden Sardines as soon as possible.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1rLcm52-A7yChzt3BsxAgIsr34Q0ACjxr/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Oh, I see. Let's go then, Delta.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1P6QMVh2OrQ9pPg5G17vU8EbrnxjFfwGF/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well, guess it's time for us to head back.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1a7lb6zfQ97vy4VIBFwptOzsZWo8zesH-/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Heheh. Can't wait to study this \"Heart's Bounty\"! My ultimate body is within reach...!",
                "line": 49,
                "url": "https://drive.google.com/file/d/1cMj7DnXxEZbQbyJ_0EC7qvqGR0feNbTe/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Seriously, what are you planning to do with that?",
                "line": 50,
                "url": "https://drive.google.com/file/d/15YzAd73ArslH7geDbvkE2_lWr0LS51Qy/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "A few days after their fierce battle at Great Ize Shrine...",
                "line": 51,
                "url": "https://drive.google.com/file/d/10L2SiGHDHRX9uo77qntbRbraskw6G0PK/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Master Shadow, how's the dried Golden Sardine?",
                "line": 52,
                "url": "https://drive.google.com/file/d/1S0TmElAXXoE7WAwSvm_5184puMF7nJ2f/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "It's delicious. The amount of fat is just perfect.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1OgHbt5ANUe1CL7VOxz0zz4Ti9rYHp4rQ/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hehe. Glad to hear that. It was worth the effort of going to the shrine.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1G9umwpbDrqG7DgnQjwmcqRtdiZ8Dvf3-/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hmph... It's unfair that only the kitty cat gets praised!",
                "line": 55,
                "url": "https://drive.google.com/file/d/1aV_7B2XOpmodkW5P9AWxN1AAqkRaLS3V/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "If you're that envious, why don't you catch some yourself? Oh, but a dumb dog like you couldn't do that.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1YXv3LS2eW9Olp4Zlumox6qkKZPBqcTkA/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I can fish! I'll go right now!",
                "line": 57,
                "url": "https://drive.google.com/file/d/1LFIDRlQ1NgJ4mUllbjiIazNqVt9unUMR/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "That's enough. The New Year has just started, and look at you two already...",
                "line": 58,
                "url": "https://drive.google.com/file/d/1RMrMY0_kkU4dJcpYRoeE_yAYZladiv6m/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ha-ruff... It's because of this kitty cat...",
                "line": 59,
                "url": "https://drive.google.com/file/d/1NprqvJNyUNeNuI_UAMnhoduCb0Hi3-Mb/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "The one who started the fight was you, dumb dog.",
                "line": 60,
                "url": "https://drive.google.com/file/d/10_yNfPa6m264WRSf9K4o22RCCb5xZE0Q/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Let's at least spend today peacefully...understood?",
                "line": 61,
                "url": "https://drive.google.com/file/d/1sKf82wgSH1JMTGNnnTH7fDcE9YchoZrh/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eep...! O-Of course!",
                "line": 62,
                "url": "https://drive.google.com/file/d/1ikN67_jWGEzrzO3OUaZjCM7TM2f9B7-P/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Alright.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1fhAz_gJNdgsKkeYM45WbcRGonLD28ANw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Man, that pressure she's putting on them... Alpha's the least peaceful one here...)",
                "line": 64,
                "url": "https://drive.google.com/file/d/13kR08YwnYc6rdhA1p0z7VLMw7cUjYSic/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Master Shadow! Notice anything different about me today...?",
                "line": 65,
                "url": "https://drive.google.com/file/d/1bFwzC2TptDPmctkmr7v1VuOR-fstCfn8/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(How's this?! By studying the \"Heart's Bounty,\" I've reached new heights with my slime bodysuit...!)",
                "line": 66,
                "url": "https://drive.google.com/file/d/1wJm8PSVOwUgi8vPLa8SdBQLoMdfQ1S-j/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Whoa...",
                "line": 67,
                "url": "https://drive.google.com/file/d/1eK7B4ct5nvtyaJ0rgDLhffYYhl4mdn38/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Heheh. He's captivated...!)",
                "line": 68,
                "url": "https://drive.google.com/file/d/1uH15bstUnO65tPHiMBRCyuZkHlBtp4tz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Epsilon's further improved her...skills. She's subtly adjusted her magic, making them even more realistic.)",
                "line": 69,
                "url": "https://drive.google.com/file/d/1ljzMOF-HZjr5O_lu5c1F0FB6R774AzUH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(That meticulous approach of hers has leveled up even more. I should properly acknowledge her efforts.)",
                "line": 70,
                "url": "https://drive.google.com/file/d/18p1Q6dy2vEEMkNzcy-CaYvFsuFZlNZ3N/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "You're even more bountiful than usual. Keep refining your figure.",
                "line": 71,
                "url": "https://drive.google.com/file/d/1vIdYqRnQhxLmPYVuZrHlzPcU3kqwimtC/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Ah... Ah... Master Shadow praised me! This perfect body of mine...!)",
                "line": 72,
                "url": "https://drive.google.com/file/d/1H6FfOkI7idPvt9uRba5peDEAVGdAfhpF/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Ngh... Master... I-I...will keep trying my best!",
                "line": 73,
                "url": "https://drive.google.com/file/d/1Fpc3mqW6AKY_TROFJLdmhRGqRaCtHwhB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Y-Yeah... I see how your own effort has moved you to tears.",
                "line": 74,
                "url": "https://drive.google.com/file/d/1fPud8FeS5yLlgH_A72YhZMqHrSsbUUWn/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Having achieved their respective goals, Epsilon and Zeta go on to enjoy a peaceful New Year's...",
                "line": 75,
                "url": "https://drive.google.com/file/d/1ymp68_TypwoA6DJR4i9KKcCTA84OYg1q/view?usp=drivesdk"
            }
        ]
    }
}
let setDoc = db.collection('data').doc('es_m').set(data['m']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
