const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "i": {
        "e1": [
            {
                "name": "",
                "name_variant": "",
                "subtitle": "One autumn day, lost in thought, No. 666 heads towards a certain room in Alexandria.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1m_JxA62_Vd4uzjsgwb-HBXVZS6a1SEiw/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(I wonder why Instructor Lambda summoned me... I'm sure I've completed all the required training...)",
                "line": 2,
                "url": "https://drive.google.com/file/d/1kFa6IfBp1mCIOYr2kQpDK6Im1_2pb0cm/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(Judging by her tone, it sounds like a pretty serious order.)",
                "line": 3,
                "url": "https://drive.google.com/file/d/1cj8xejdRP9P-4Re63PAHBh6Bh05pABfQ/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(Besides, if I'm being summoned to somewhere within the castle I've never been, it must be something major. Perhaps...)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1vX55XPX_lm0-FQLtByTyCC43VMLq4mMa/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(If I'm lucky, I might be participating in a mission. If not...perhaps it's the start of operations in Oriana?)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1kcn3X6_wDFMfzPKvFFSwFxyrVL0yyOkd/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(...Regardless, I am now No. 666 of the Shadow Garden. I will follow orders and carry out my mission...)",
                "line": 6,
                "url": "https://drive.google.com/file/d/1zrPl6zbfYi2EOYw-JfpGOFerdPCsgjyD/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Feeling anxious, No. 666 stands before the door. Then, she resolves herself and knocks.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1FPIbc-sRM1luE-P-8-vkMiZa79mpQGDE/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "It's No. 666. May I enter?",
                "line": 8,
                "url": "https://drive.google.com/file/d/12Ah-2uJ6V2L0w-WoZDE_NHXU4uVsea0N/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...You're here. Come in.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1WOm3UljKL7uVJ9dklRES1gFdbOhu7eWG/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Understood! Excuse me\u2014",
                "line": 10,
                "url": "https://drive.google.com/file/d/1qg-PXX1135f4xlDCVG9DP7mYP8Ml3x2v/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "I-It's you!",
                "line": 11,
                "url": "https://drive.google.com/file/d/1qUv_0GX-XHgJvy6lqBKs1Fxn0PICgE5q/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It's been a while. Maybe since I brought you here?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1rbdFWa0M_5hy72G_du2S5LFhrAb4_0cI/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Upon opening the door, there is another individual besides Lambda, the one who had welcomed Rose to the Shadow Garden\u2014Alpha.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1L3RZzKB5JBZh4U7kXh3piHRv6z3U1oR2/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Manners.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1w710fmUHdervj_1x_2a_rdUU6vET2beb/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "M-My apologies! No. 666, reporting!",
                "line": 15,
                "url": "https://drive.google.com/file/d/1tMkdHWjHPTFW6lRIc9fDJilJOfNIp7ha/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No need to be so formal. I'm not here to discuss anything serious.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1OUhXLhvtnJ41GQ086tWzhwRQJI-BUHcP/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Is that so? I thought this might be about an important mission or something...",
                "line": 17,
                "url": "https://drive.google.com/file/d/1nlkDjWTbdQcZFfQ-r-pMXZ0kRuyEwff4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Well, with the way Lambda communicates, that's understandable.",
                "line": 18,
                "url": "https://drive.google.com/file/d/169t_8aV3sxNMqH7AIYDr_55bvIi44rFZ/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "M-My apologies...",
                "line": 19,
                "url": "https://drive.google.com/file/d/1M1zShUNrKmcUMiVCI3IimWe7S4RcdIU0/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Then, what is the reason I was summoned here?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1me_dnLEyObxoLf50P_IfEHxKI72C5TnL/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Lambda, explain it to her.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1B1nSBZpW_8iyDR-R7DSSjUwzFO2Fim8R/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Sir! Yes sir!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1z3fyrQYs8xMdLn0zj7ATSDNFyqivEJKo/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Rejoice, No. 666. You've been granted permission to expand your scope of activity within Alexandria.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1HfiU-SB1QbSTakUb-NTizKAS69td5r47/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "What?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1up_JKBLpozxjyt5fz8Mg-ldlcVM6jqk9/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You heard me correctly. Your activities have been limited thus far in terms of security clearance and intel management.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1ACW9B8yO90is3llvh_s63Mslb02ggSan/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You've been with us for a while, haven't you? Lambda has told me about your training. She says you've been working hard every day.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1e9JTg9Q-hmDaShai_e1AYV5kM4q1RkeF/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "In-Instructor Lambda said that about me?",
                "line": 27,
                "url": "https://drive.google.com/file/d/12scjmSWyQ1VU7SBzuG2lzKkyVuexfwJT/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "W-Well... Anyway! This means we'll be placing a certain amount of trust in you!... Do you understand the significance of that?",
                "line": 28,
                "url": "https://drive.google.com/file/d/1AIEzQQCXnVjBcOjX0_e0YbWWWNx3c9gi/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Yes! I will do my best not to betray the trust and expectations you have placed in me!",
                "line": 29,
                "url": "https://drive.google.com/file/d/1sWKZG41v3W4pSrV3uen-bKCLsdN70lDK/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Good answer. Well then, Lambda will show you around the castle today.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1dXszU8YCfr0DAK7XvDAaPTV4ZdPLS96l/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You'll likely have more opportunities to work with the Seven Shadows in the future, so be sure to introduce yourself when you meet them.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1AOFrOL017UlUO3Pgw0f7knzznqV1MHvj/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Understood!",
                "line": 32,
                "url": "https://drive.google.com/file/d/15fOXxSmUTb-FAe8SU2Jv0m-tCgie0F2G/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm counting on you, Lambda. Introduce No. 666 to everyone.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1UtvF4HPt5ocRKfDrrqTLqWNb0zXsU0oH/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Sir! Yes sir! We'll get started immediately!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1gpWNOegUAML8njEKp-lxq-rf6WcQaJBB/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Let's go, No. 666. Don't dawdle along the way.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1Qz_HVaiHD_pzEc9We8NQd2E6mVfwFxU-/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Understood! Excuse me, Lady Alpha.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1Wx39kcK6w2ooCbcu8g7j4S3qzPuQwq69/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Heheh. She seems more relaxed now, unlike before. Suppose I have Lambda's education to thank.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1RC3JQ-7vpGzy5p1w12pak4aAXevSmsE4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Well then, time to attend to my own work.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1iXRwizTJxgBUSY2Z7NfILP9PuL-GaVlj/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Let's begin the tour... Be sure not to embarrass yourself in front of the Seven Shadows.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1LD63q_miclufzBNfzSk3x1YqfZVMM66u/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Understood. I'll be careful!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1Z7pxd4AfOAaoYFNyZ2RwDnU1TK07Fa_z/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Hmph. Very well. Follow me!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1nEsJbyzOvxv9qAsUjuKwuCNjU5VM7tSR/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(The Seven Shadows... I've heard of them, but what are they like?)",
                "line": 42,
                "url": "https://drive.google.com/file/d/1X5rfPhoR-RKzzJFXOGOq6YUa8M_WGp12/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(I'm sure they are all powerful individuals with proven extraordinary abilities, like Lady Alpha and Instructor Lambda...)",
                "line": 43,
                "url": "https://drive.google.com/file/d/10wnVpgQWN4dk6v_PVAx0v10fpxO6Tk3h/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(If I am to work with everyone in the Seven Shadows, as Lady Alpha says, I must learn from them without being intimidated!)",
                "line": 44,
                "url": "https://drive.google.com/file/d/1hjFTet_8F86fE_eqYWf6dOv0ubb5vDx6/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Her body rigid with nervousness, No. 666 begins walking through the castle with Lambda...",
                "line": 45,
                "url": "https://drive.google.com/file/d/1jwwi9PbUDBUdNAyfP5E4wfTSvD9ALv-h/view?usp=drivesdk"
            }
        ],
        "e2": [
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Here you'll find the living quarters and offices of the Seven Shadows. Be sure not to set foot in here without permission.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1Xq1sE67vNUAdvUi1zlgINP0CymMwnbcl/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Understood.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1dKxFAXiFeXOU-Jrii2NHnhKCTqCK7q5H/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(From here onwards is the domain of the Seven Shadows... I must be respectful yet also show my willingness to learn\u2014)",
                "line": 3,
                "url": "https://drive.google.com/file/d/1ysJ1txA77S7oInXvXRwZl1xJ98KRRqzL/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "...This music...",
                "line": 4,
                "url": "https://drive.google.com/file/d/1dONVft2_wWI_sQesBR-0BWbXkFjcRVa9/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Elegant piano music plays from somewhere, and before she knows it, No. 666 finds herself captivated by the melody.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1TreXVglqtt2pTI9TXU-fBQEhCjg0Wz0-/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(What a wonderful melody...and such skill...)",
                "line": 6,
                "url": "https://drive.google.com/file/d/10XRR0jt-4YmSeolamXUyt6GR3f4XahdM/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "What're you daydreaming about? Did you get mesmerized listening to the piano?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1eA2I6HIlw0TN5ADqLJFhD0Kte_OabIFC/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "M-My apologies... The performance was so incredible that I got carried away...",
                "line": 8,
                "url": "https://drive.google.com/file/d/1Aqhr0gNJTOoieC4UB_brzRkvMQJw84N6/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "But who is playing? It's not like the Garden has hired a professional musician...is it?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1e9haox9u0eBa9VDrvhVYI7BVR1l-CH48/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...You're half correct. Lady Epsilon is the one playing.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1X4tuCxoi0nKCWCkNrd8ffUIkVtXrP9Ya/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Um... What do you mean?",
                "line": 11,
                "url": "https://drive.google.com/file/d/1ya7HGJImHkjsj6tMsPt-R-4ERasWww35/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "You have an artistic streak to you. Perhaps you and Lady Epsilon have something in common.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1gyHqspWvtXrpaAcxGoU2_4w1Fqe5CBGz/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "We'll go and greet her after she finishes her performance. Look sharp!",
                "line": 13,
                "url": "https://drive.google.com/file/d/1a4AlxFKokfaCZrP1emrIpxlv_h-go6R-/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "U-Understood!",
                "line": 14,
                "url": "https://drive.google.com/file/d/1NKs3PQ8dUHl_M1VW9evra_WUjs6ULbWC/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Excuse me, Lady Epsilon. Do you have a moment?",
                "line": 15,
                "url": "https://drive.google.com/file/d/1UXPdwz_DNa-PVHGUKaEVZUHu0zmpyeNJ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Lambda? Sure, come in.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1Z41yzGtabQZZZnIzn49_JK4VvbiBqS9Z/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What's the matter? It's about time you visited me for tea\u2014",
                "line": 17,
                "url": "https://drive.google.com/file/d/1R3AMdl38O5KXa7pmcyswaI7gQX-6oJbi/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Oh? Looks like you've brought company.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1YD6b9eu4y79U8k2f7hpeSidxlvxsoL1t/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "This is trainee No. 666. She's here to introduce herself as her restrictions on movement within Alexandria were lifted today.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1sZv_aGbRTGR0wZysVkVL9e4SZu1YcOQt/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "It's a pleasure to meet you!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1FxAS-8lJItIhwJyZROx48kuXvc9S03yM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well... I see. Your hair and face look much better now.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1eK6diasRhE8381DYW96I7vsnDEPg0EeR/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(...What does she mean? She talks as if she knew me before...)",
                "line": 22,
                "url": "https://drive.google.com/file/d/1FRLFQE6DEkUTZXnaEO47IIk-KZAO8U2o/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "It seems listening to your performance just now made an impression on her.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1utMWatRHjzXY8WWn9wZ9ktWYxtB0yJ_A/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Heheh. Splendid! Well then, can I get your opinion?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1ax571mSuBMqIzFgjwYlwqkxqAShzIejH/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "M-My opinion?!",
                "line": 25,
                "url": "https://drive.google.com/file/d/1VjAglj-_Jj6Wf0gyVcY8K6tX1fwp-2Bj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, yours. It's important to take in other people's feedback.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1O5dpwrVRDYs4dDzpIb_H201NIOJmVpkE/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "In that case...allow me to speak.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1TUJ5TU7VQeam4LuLS5S5o_hZd5rDDHby/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "My impression of your music was that it was extremely intricate and delicate yet imbued with strength.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1pyX-b_4iNSKZkBvYSZ9ZD3UBsvSv0gJb/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Also, though I didn't see it with my own eyes, I am in awe...of the skill with which you precisely played that complex and speedy melody.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1FmKfgVAJvfht34jtk8NDk-cBlEKCIrT1/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "H-How is that for an opinion?",
                "line": 30,
                "url": "https://drive.google.com/file/d/1h31vyOxkI2MLozFwSXDG3iQU5KWbxpzd/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Yes, you really do have a good ear. Even as you pursue the way of the sword, you've retained your appreciation for the arts.",
                "line": 31,
                "url": "https://drive.google.com/file/d/13M6hkv7Aek65_Gvgq296JAJhhz4kW7_V/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(Wh-Whew... What a relief. It looks like I didn't say anything out of line.)",
                "line": 32,
                "url": "https://drive.google.com/file/d/1kAJ29m-4czr8_X7u5YxZ19frDdWtP6LF/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Your technique... It's no stretch to say you could rival a professional. I even mistakenly thought you were a hired musician...",
                "line": 33,
                "url": "https://drive.google.com/file/d/1vCQqZYIfJ-LxuemI0D1Y9trgbcYwPlfS/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "In fact, with your skill, you'd be highly regarded as one of the top pianists in the entire Oriana Kingdom...not to mention anywhere else!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1K4kKuZgDT3fSGlafYer2y40l_gGq_tp0/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "*sigh*",
                "line": 35,
                "url": "https://drive.google.com/file/d/1IQCn1014gyfKvVw1GyVQDjezLuyjtSKj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...You haven't told her, Lambda?",
                "line": 36,
                "url": "https://drive.google.com/file/d/19CTPiW3KO3VvFSlOxo3KRq8QQ0G1VsC0/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "No... My apologies...",
                "line": 37,
                "url": "https://drive.google.com/file/d/19QhS8XPZom2JgNaZpi97i3RjL2X5qg8I/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "...Um, did I miss something?",
                "line": 38,
                "url": "https://drive.google.com/file/d/1cW7cWaKk1msvoUPPfbiPdKK6xXpvvDwd/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...No. 666, have you heard of a musician called Shiron?",
                "line": 39,
                "url": "https://drive.google.com/file/d/17h7rIiOP3paqs0Y1v2N5Q0UH8iNClc64/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Yes, I've heard her name a few times... I've not heard her perform, but I hear she's the talk of the Oriana Kingdom.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1d-SV8y8GYF613YRGaSwD6OpPElLhdPzJ/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Lady Epsilon here is none other than Shiron, the musician making waves on the public stage.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1taY8FjuzrOS_Zc0OSqjdfrSVC-sdjX0D/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "What?!",
                "line": 42,
                "url": "https://drive.google.com/file/d/13eybAzEdIOvAf0f5JOx4LWlUoxCPhA_G/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That's right. As Shiron, my true identity is top-secret, so it's unsurprising you didn't know.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1oFJpmWk5k9GsJ3LgKBE_BBAZZ9krJBVv/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But remember this. The Shadow Garden has infiltrated the outside world more than you think.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1oI7L6Gwo5xTx7ZpyDW6bisib5G9M8ixz/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I'm sure that provides you with some food for thought.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1-2nhSoF1P9CXIMBAxWb7MhzmK4tx_yZd/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(I see... Thanks to their connections to the outside world, they could respond swiftly during the attack on the academy...)",
                "line": 46,
                "url": "https://drive.google.com/file/d/1lj0RCHWzccMOtTOHTCxRWJ5gbieIb9E_/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(Just as I expected, the Shadow Garden...the Seven Shadows are truly enigmatic...)",
                "line": 47,
                "url": "https://drive.google.com/file/d/1IJ4fe-u_UKjI3b3ogkZadkxW4hAMaE_F/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Heheh. You never know. There may have been a member of the Shadow Garden right next to you as well.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1TzB0-27odUiGo1m0jqLl6574q7tkkj1c/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Perhaps...yes. Even so...it does not concern me now. I am just No. 666, after all.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1hEjXUWvVeE1dkaKJXt3b-vJpPizoN4qW/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Good answer. You must have received quite the \"education\" from Lambda.",
                "line": 50,
                "url": "https://drive.google.com/file/d/13N7yaKuHN_eJ3CIRgtHIndUd7KXXdM1x/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Um, well...",
                "line": 51,
                "url": "https://drive.google.com/file/d/1TXOp6DPKzT_5qzP2jkPZexKi_lj4dQC8/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It must've been tough, huh? Lambda doesn't hold back when it comes to training.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1HB5xftSvxYLjQarOmG1UZdeo91YB26S6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "She used to make me climb mountains for social bonding... We trained from morning till night.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1SrUe_eGcFfP5wsXdmWMySK_1iWEg5bs3/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "L-Lady Epsilon...",
                "line": 54,
                "url": "https://drive.google.com/file/d/1eFIVpXcnfhhGYXPrb7MozjgAc_0xaJcN/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I still remember the verbal abuse she hurled at me then. Let's see... Oh right\u2014",
                "line": 55,
                "url": "https://drive.google.com/file/d/1GikdYbSZAygVRspVbvP7vrbNGy5CNgq0/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "I-I'm terribly sorry, Lady Epsilon! Please forgive me for that!",
                "line": 56,
                "url": "https://drive.google.com/file/d/13nxhBYSRfuI8w0rz02MizxGsdy5VJV1T/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(I've never seen Instructor Lambda so flustered before... I wonder what happened...)",
                "line": 57,
                "url": "https://drive.google.com/file/d/1FOm3x4i0yXfZkM-L_ZKQfetj746MKIwk/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Ahem. Lady Epsilon, we should be on our way soon.",
                "line": 58,
                "url": "https://drive.google.com/file/d/1n0Yv5FlSnwdPDhJWOILnBseerGQaloCp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh, why not stay a bit longer?",
                "line": 59,
                "url": "https://drive.google.com/file/d/1ozgNI2n3McOefeO5hiUL-aUGQfJD5kqk/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "No, I must drill the knowledge of the castle's layout and rules into this one. Let's go, No. 666.",
                "line": 60,
                "url": "https://drive.google.com/file/d/1AjYzg98-9KhCw3PevWgu0tuzmEN2bFDJ/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Yes. Thank you so much for your time today!",
                "line": 61,
                "url": "https://drive.google.com/file/d/1sqSU6H1JknaV-_QQl3iREKt6j_Mb7zVX/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I'd expect no less of a former princess. Her manners are impeccable.",
                "line": 62,
                "url": "https://drive.google.com/file/d/167sq1GeNjCtjIBKy0hoM_rkjxc8BuhKE/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Guess I might as well let her know too.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1EP4QQQ8-LIinRIRFPsGVzsojTnII8p6A/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "After Lambda and No. 666 leave, Epsilon also exits the room...",
                "line": 64,
                "url": "https://drive.google.com/file/d/1_exxwdBuUc_zh-Y4592vUkdAGro2Y7TG/view?usp=drivesdk"
            }
        ],
        "e3": [
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(What a giant castle... To think such a magnificent place has been slumbering deep within the forest.)",
                "line": 1,
                "url": "https://drive.google.com/file/d/1gJEcPHb03ItEhlOr9OFYmvCbAJy4mWOc/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Hm? This room...",
                "line": 2,
                "url": "https://drive.google.com/file/d/1rlenWQuZ8AqAyI_8I_XoD1AFNA-igqnQ/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(...Is it some kind of laboratory? There are papers and tools scattered everywhere...)",
                "line": 3,
                "url": "https://drive.google.com/file/d/1Q-QYIlrOikoErYoJjDcuEIkyA9n--4A2/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Hm? Hey, No. 666! Don't snoop around too much! Especially in that room\u2014",
                "line": 4,
                "url": "https://drive.google.com/file/d/1YFjRw8hBxBK2C92AiG7UVaO7VKJi7c5j/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "You...saw...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1_c3zWkbMr7Xt-zNFdJ2meIuN0YsOoj3K/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Huh?!",
                "line": 6,
                "url": "https://drive.google.com/file/d/1ttFCzdTu7AEb0RoYN2jCJ6hsuTqGpole/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "L-Lady Eta! I came here to introduce this individual to you!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1Y1m5tK0-xVYhgR09RFOUwPzaU8h9ZUVR/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(So, this is Lady Eta... Isn't she the brains of the Shadow Garden?)",
                "line": 8,
                "url": "https://drive.google.com/file/d/1EtK3ByLvF6QlzZxzvikhnE8JY9aE2fIN/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "What're you doing? Beg her forgiveness as well!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1IPvaWnL_FgRA7tVrC-CUmtoatpKhz6X4/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "M-My apologies!",
                "line": 10,
                "url": "https://drive.google.com/file/d/19RXQIxy-ZgazV88BFu7gE1GhGrzGmP1l/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I don't mind...",
                "line": 11,
                "url": "https://drive.google.com/file/d/1SdfpuFX5g_95Qxwpz89rERE4Ni-YTt4s/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Thank you. I apologize for not introducing her sooner. This is trainee No. 666.",
                "line": 12,
                "url": "https://drive.google.com/file/d/15Nxjg3YfIy-jD0G7NEW6v-OMGkM_qN_u/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "It's a pleasure to meet you!",
                "line": 13,
                "url": "https://drive.google.com/file/d/1sGcugi1-IJgg5PI4VaKYbLiM_Ht8s5Xi/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Hmm... Doesn't matter who you are...",
                "line": 14,
                "url": "https://drive.google.com/file/d/1Jl0uDvTnGkpvYpQdpWDNm6H1a_sOlT4E/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "U-Um?",
                "line": 15,
                "url": "https://drive.google.com/file/d/1yVnk55HJ5BChj2tnmxhwsbZoNwHAwJ7b/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "If you want to apologize, you can become my test subject... Humans are especially welcome.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1vcGdUkrXckTyToj8ElNAeLtMOrYfKHHn/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Te-test subject?!",
                "line": 17,
                "url": "https://drive.google.com/file/d/1Yb-G_8gS4php3LKHdXVE0Mx9T3pXI7G0/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Heheh... Anyway, come in...",
                "line": 18,
                "url": "https://drive.google.com/file/d/1o2uxZ4BiexiHM5CWb_5TZyjsi3sggWij/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Huh? Um, are you certain? What about your valuable documents and\u2014",
                "line": 19,
                "url": "https://drive.google.com/file/d/123BiSC0DQ1NC_k3mWzhrj6hTY_4qHpPH/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "It's fine. Come on, hurry...",
                "line": 20,
                "url": "https://drive.google.com/file/d/12FTyRJtNTb_fYyRcxpQoPhtOAZ4NCjmk/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Very well. Excuse us.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1iIAteEGCIBn1emtTBG_xOraFlNkLsJvO/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(We're in, but there's nowhere to step...)",
                "line": 22,
                "url": "https://drive.google.com/file/d/1dOzQk6UxaMFeWYImer7ZeQgN91ujIejL/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Don't step on anything. It's all important stuff...",
                "line": 23,
                "url": "https://drive.google.com/file/d/19NVASZ_lEkQt3M-gsQwxQFlwc1ccxdrw/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "U-Understood... I'll be careful.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1i8yVdEyqxaOReHr_P5nGNVjVD8FtEsZz/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "...Huh? Is this...",
                "line": 25,
                "url": "https://drive.google.com/file/d/10OVBLiewdP5JzT7jpTUULDhlfGm7mnBL/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "No. 666 sees a test tube on the desk. It's filled with bright red blood.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1hzErr2rmTqLHPS8jWVjsEnJVtR2kk6pc/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Blood?!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1WpfP5mkoITnFDTBaBU5XRq4l_HyZxyAL/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "What about it? It's just blood. Don't sound so pathetic.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1mtIXjXl9XZwuaiR1PzQkPTclXOGr_m5Y/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "My apologies... It's just the thought that this belonged to your previous test subject...",
                "line": 29,
                "url": "https://drive.google.com/file/d/11Tpl-HRUrOuaVjuPJAdIHnTx7LyXgStv/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Yeah, I'm not following you...",
                "line": 30,
                "url": "https://drive.google.com/file/d/1nKT-b2rgKhwS3hsHCJvBFb0AqmHfdOt2/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Lady Eta, whose blood is this?",
                "line": 31,
                "url": "https://drive.google.com/file/d/1ZP2cWIACGXhSLij5zS78RXneBG_AiYRz/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...It's the blood of a possessed.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1gmu2tHlN2nikHEupATN5mUO0ltAFhd1C/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I'm attempting to trace its source to prove my hypothesis. If the origin of this blood was\u2014",
                "line": 33,
                "url": "https://drive.google.com/file/d/1vpGQDtFcdNgjuBImDoOUiu8xPt77L58s/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...You know what, never mind. It's a long story.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1ReC6HBB_l8BmSeFDf1vGx9vsEjkYuRLs/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(She was about to say something... Maybe it was classified information?)",
                "line": 35,
                "url": "https://drive.google.com/file/d/1FW-bELqFJWbK5E8pjftCf3ey16FXOgfG/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Anyway, over here... Come help with these blueprints. I just happened to be short on manpower...",
                "line": 36,
                "url": "https://drive.google.com/file/d/1-LnCEv_WsNVcfJUYe-XZBLJBiHbNv0xb/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...I see, so that's what you meant. That's why you invited us in...",
                "line": 37,
                "url": "https://drive.google.com/file/d/1oW4kgPEn7FObDvqvaiZ795kfX6WKVoft/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "No. 666, let's assist Lady Eta.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1ZQLbMQF1C3eIGeT058YBmQ_qXemlEBcy/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Understood. Blueprints... Does that mean you're also interested in architecture?",
                "line": 39,
                "url": "https://drive.google.com/file/d/1dOyQYxOwKZv_NUxAp1pA61lgx53njqI4/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Interested? Lady Eta was the one who built Mitsugoshi's headquarters...from planning to construction.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1UTwyira6QUB_wVfnSZABllgzklFTQtWW/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Hold on... Do you mean Lady Eta single-handedly constructed that building?!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1_Ed3oW5-yyfqZovgqXrRWKp_tzN1a_cf/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...That was mediocre.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1DYm-jIoRzTnXP05Ah5JSPUnhsf_Ojnf_/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Huh?",
                "line": 43,
                "url": "https://drive.google.com/file/d/1vTQ5epPTTC3ekCKiOPZ_MB439RYAvKGq/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "It took two weeks to construct... I took my time to avoid suspicion.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1GXb7_AOZlaumzsqlXCWTiA-NPXt2LmBY/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Two weeks is a frightening speed...",
                "line": 45,
                "url": "https://drive.google.com/file/d/1Tf2Y5iLIHqNlQDTHgdD95s8_VCLKowiv/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I could do it in three days if I put my mind to it.",
                "line": 46,
                "url": "https://drive.google.com/file/d/112IzvpWlxmkNIIrOx0FU5jHCCu8IIPpD/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "...",
                "line": 47,
                "url": "https://drive.google.com/file/d/1nUyCosv5DLbhzaHXIFgHACwv14H5UJXW/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Lady Eta isn't one to joke about these things.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1KSTXrjDH5DcP9ilcdvnUJA4Cdb4p3tnF/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "For the record, Lady Eta also created this castle's training grounds and defense system...in just a few days.",
                "line": 49,
                "url": "https://drive.google.com/file/d/14fYMPPLyb68XOf_4hs2nCnE5EzWgV-gw/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "That was more rewarding. If I had the land and budget, I would do it again!",
                "line": 50,
                "url": "https://drive.google.com/file/d/1jHuq0rYgrIVPppu-d2OsDNu4ik9p3e3Y/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Ha, haha...",
                "line": 51,
                "url": "https://drive.google.com/file/d/1uwYM7H2eR2zNiUKT9hljg_oO1n1ir4wo/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(She's talking on a scale beyond my comprehension... But I guess that's the power of the Seven Shadows.)",
                "line": 52,
                "url": "https://drive.google.com/file/d/1ZiyEmlmUXp_kJ8DSs38CeNI74GY1_mXo/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Enough chitchat. Both of you are going to do your share of work.",
                "line": 53,
                "url": "https://drive.google.com/file/d/14-QUmEkuboAoksrRyjFhaS9qOW6762HB/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "My apologies, Lady Eta. I am currently on a mission to show No. 666 around the castle\u2014",
                "line": 54,
                "url": "https://drive.google.com/file/d/1UJxygiIfBM_tIleULQtJm5OEusz4orQT/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "It's your punishment for trespassing without permission.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1R85Mwc49Q1qhE9yYs0tUdCBHuUHzHkWL/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Ack... Sir! Yes sir! No. 666, you'd better put your back into it as well!",
                "line": 56,
                "url": "https://drive.google.com/file/d/1NUjjKbPg0reoql5HYj6_jcXZznZCUxJ-/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "U-Understood!",
                "line": 57,
                "url": "https://drive.google.com/file/d/13wMOTR6Kw1YCmloRuD63_oRWJRc3dxXf/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Okay, start with this. There's lots of work to do!",
                "line": 58,
                "url": "https://drive.google.com/file/d/18Rl6GSXYroTodh1R66negsOk3FkzE8ti/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "In the end, Lambda and No. 666 are not released from Eta's grasp until long after nightfall...",
                "line": 59,
                "url": "https://drive.google.com/file/d/1kuWYq8ycNlel-1Oc0IshKlzQb7lsRN_r/view?usp=drivesdk"
            }
        ],
        "e4": [
            {
                "name": "",
                "name_variant": "",
                "subtitle": "While No. 666 slaves away in Eta's laboratory, Epsilon visits Beta's room.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1W5iOMPKucq7_Uzy8gjwNiRb3yl7P7l5G/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It's rare to see you here in my room. How can I help you?",
                "line": 2,
                "url": "https://drive.google.com/file/d/1X47Zkh3s3KRCve_CZ_okhHwU6nNtw6vV/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well, you're awfully cold\u2014after I came all this way to tell you the good news.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1CKi72GZ-JOIiPMyqzx5H-cBCXBHRP3k6/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Judging by your words, it doesn't sound like it's about Master Shadow.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1P7mjGfhzWX-bDXfy3s1EGKSEC_Z_m6_K/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...And here I was thinking you'd be more interested.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1mDbmOLvxyEwULUOuaRh8aZO8-uy9Mktr/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "*sigh* If you're going to keep wasting my time, then please leave. I'm dealing with a formidable foe right now called a deadline.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1HwPdS339K9PUaK1vmVNqWbPrPm9drI-x/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Fine then, I'll get to the point.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1G2xn_NdU1cESKSSb3nIN74iMBsJvFcLA/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Natsume's friend paid me a visit. You know, the former princess of the Oriana Kingdom.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1cKPpqgOxWucLIedCscpPCC-KFNy2H0Xb/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "*gasp*",
                "line": 9,
                "url": "https://drive.google.com/file/d/180MizdWG7JJls2gtQMsxe3QndLJQysuo/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Lambda brought her by earlier. Heheh. That girl has a good ear for music, doesn't she?",
                "line": 10,
                "url": "https://drive.google.com/file/d/1UWxWtDSV0Kq1vJUuCXPhERPJ1W8-rGCt/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Is that so?",
                "line": 11,
                "url": "https://drive.google.com/file/d/1Nk9EJC4AuRbGd-AAh7xcHb_hwV6QNljS/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Talk about an unenthusiastic response. Aren't you happy?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1ZdB9Ojxph02Iu1oAezVdIKyVq53_ex3S/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Not particularly.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1LNEteu069qIxtofIibo3b2vZh1y_JXJ4/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hmm... I thought you two got along quite well, but I guess not.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1cTRgahazAz4MvweLZO8_WYTl48nQ63UZ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "We only met as part of my mission. I harbor no special feelings for her.",
                "line": 15,
                "url": "https://drive.google.com/file/d/11RP1NnqVKGyPuHWsil-4WgZVAmwsFPOZ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Then why did you look so surprised just now?",
                "line": 16,
                "url": "https://drive.google.com/file/d/1sim2o-7ariyrqmBAhGAaQMBDYT9rthaJ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That's because...it happened sooner than I expected. I thought it would take a little longer.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1YxEkvEKdXLvjpLqqzEKNG1_HoYmhKPpR/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh, so you do care, after all.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1nfO4Np46YV5N92H4snmCjhKSsSMgiEyr/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I do not.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1E2JRlLjGZY4XJte9NFWiyrEwL1rflw5_/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...But yes, I should greet her properly at some point.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1pWqyJ7dWYDDHmD8a5QgwM2t6zcoh7ReL/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Now, please let me work. You're going on a field survey with Lady Alpha tomorrow, right? Shouldn't you get back to making preparations?",
                "line": 21,
                "url": "https://drive.google.com/file/d/1U7dEkj8dys8MgLMfCdQY6YImm8j9_fsh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I-I know that. You don't need to tell me. I was just leaving.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1czkDfk33T1wkos4kRVuqWELBcFUgyrbn/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "What was that all about? Thanks to Epsilon...I don't feel like writing anymore.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1K1AqKcZ93IJweFeKlz7-DKomF1IOaWk0/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Princess Rose...our diverged paths intersect here.",
                "line": 24,
                "url": "https://drive.google.com/file/d/15mmsdrcAr19xw-vpru3g2dWFePcnCmH8/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Meanwhile...after being held captive by Eta into the night, Lambda and No. 666 are finally released...",
                "line": 25,
                "url": "https://drive.google.com/file/d/1syiu1dUsEze7iiU9k3fTB-__HIT8QXgU/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "I didn't think we'd be detained for that long...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1Vi3dkBbfYzTJlA0opRx9gXXR-SIKKs3g/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Yes...but I'm glad I could be of some help.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1HfAWnpWeuEd6sLi_SsAFFW_kpzd1PA2Q/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Anyway, let's call it a day. It would be rude to bother them at this time of night.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1iQUalihGTFywqeIqcP-gYCmY-NUpwdmZ/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "We'll continue tomorrow... Well, that's what I'd like to say, but I have to oversee training. I'll ask someone else to replace me. Be sure to follow her lead.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1uEbl31WxQyrk-DCoDOhgdLyUOXgqYpUs/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "She's someone who's looked after you in the past. You should take this opportunity to thank her.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1wSsfzyhYpkPZWc5SDZ7nIlGGKqJ2DrVA/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Someone who's looked after me... Understood. Thank you for today, Instructor Lambda!",
                "line": 31,
                "url": "https://drive.google.com/file/d/10NPmWNZ4W15y67yAhmShFgJn5K9MnqgB/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(The abilities of the Seven Shadows are far beyond what I had imagined... To think that such individuals are working behind the scenes.)",
                "line": 32,
                "url": "https://drive.google.com/file/d/1O2uEFqPcwdcpqRUZLaK_erz8tjIDTObK/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(I must continue to remain vigilant tomorrow and always be ready to learn!)",
                "line": 33,
                "url": "https://drive.google.com/file/d/1AD-nxd4uWEo5QYN-IhiJvJw6eb5B9xCK/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The next day. No. 666 arrives at the designated location...",
                "line": 34,
                "url": "https://drive.google.com/file/d/1nmH-lDlQV2bTaHTcz0P2dnCZTim6gL8b/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(My guide should arrive anytime now. Instructor Lambda said it was someone who had looked after me before...)",
                "line": 35,
                "url": "https://drive.google.com/file/d/11xR3RaVOoIMyxu2LGghO0q6xXsuc4eCH/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Hm?!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1a6FuPRV3j2pbS4K5qPb2KfyWWctAtvU6/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(I sense someone here... Could it be?)",
                "line": 37,
                "url": "https://drive.google.com/file/d/17pd9LGux2wtHlT6h1M-k_hgE0QCa9gQM/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "You are here...Lady Nu.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1HOX8mjU5LcyymbN1HuKvSTytaMldn6-R/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "...Correct. You seem to have honed your abilities since last we met.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1WG_AOAP4ADdovQ73GKRjQlzoCy_oSgn_/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Thank you. Are you, by any chance, the one substituting Instructor Lambda?",
                "line": 40,
                "url": "https://drive.google.com/file/d/1V9lxs7oSbzy_BMx7e19wzqPgD_CMjyHx/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Yes, I will be the one guiding you today. It's nice to see you again.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1E7wupHvSGRtv0Zv-eAES1IBl2GT3r237/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Yes, likewise!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1MhCBKKYffQZrB6Bc8Dfx5qxEnAFpHoTH/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Alright, let's get started then.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1Hh1Aog3ZrouFUj5b8kiRREGkuS0G-QRj/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "With that, Nu begins to walk in the direction opposite the castle.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1xt5oDtXx6UhIKVlQTGsDpyZkxTAXrXyI/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Excuse me. Where are we going? Are we not heading inside the castle?",
                "line": 45,
                "url": "https://drive.google.com/file/d/1raMKk2aoWHQwwcA6s5MEn4XBX2VD_5fG/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "We're going this way. I heard she has the day off, so she should be up ahead...",
                "line": 46,
                "url": "https://drive.google.com/file/d/1PhJyhqUOOutXvbE9J2axLdnqydE6CsXM/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "At that moment, No. 666 hears the sound of a sword slicing through the air, followed by a shout.",
                "line": 47,
                "url": "https://drive.google.com/file/d/15DykawAl0JGmoa5uuTybm0eOLMZXEY30/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "??? (Gamma)",
                "subtitle": "Swish, swish, swish, swish, swishhhh! Hyaaah!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1JZwU7Dc_eu1ZDL4Et2zMQzjuDXVUTSYN/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Whose voice is that?!",
                "line": 49,
                "url": "https://drive.google.com/file/d/1L7gyTdZnVJ_AmK1ZlBEx6QO0e_IF1pE6/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "It seems my hunch was correct.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1I9RZs8iok1qbl1ASLlb5h2etOC5cESkA/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Getting too close is risky...but it should be fine if we call out to her from a distance. Let's go.",
                "line": 51,
                "url": "https://drive.google.com/file/d/15AHL7zMqL9jqYdh3XXC3dftGrHd0egCZ/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "No. 666 and Nu walk toward the direction of the voice together...",
                "line": 52,
                "url": "https://drive.google.com/file/d/1ordn80qVpZ561UbVt07Wd0ejyLxDVHur/view?usp=drivesdk"
            }
        ],
        "e5": [
            {
                "name": "",
                "name_variant": "",
                "subtitle": "No. 666 walks through the training grounds, led by Nu. There she sees...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1C90RNrCD9lX8Tus8rw1D9bfm0OQaUcfC/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Hyaaaahhhh!!! Swish, swish, swish, swish, swishhhh!",
                "line": 2,
                "url": "https://drive.google.com/file/d/1i331nz6fbxLY53tU2-o93ZExIvmmEgDd/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(I can tell even from here... That individual has imbued that long sword with tremendous amounts of magic power!)",
                "line": 3,
                "url": "https://drive.google.com/file/d/1oTxVjTeiHFqmNN6-2wqzDN0Xh-2wr5Xg/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "...Indeed, it would be dangerous to approach carelessly. I can't believe someone can possess such immense magic power...",
                "line": 4,
                "url": "https://drive.google.com/file/d/1vzYfnCqGP41TywDRYW-8aBFHSPluhPqw/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "If that sword were to land even the slightest blow on its opponent...it would be deadly.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1DCRyBWt8CdMjwF55fUQTk8MoJhFwX2Ln/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "...Yes, indeed, if the blow were to land.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1YEckJ3YluP5uit1kXGomOmx_KTZgiAR4/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Judging by the lack of targeted hits, she seems to be practicing her swings for now, but...her actual power is immense.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1NPg0XvsmYYJNZr-B8NxQ_XNIulQYJBQw/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "...",
                "line": 8,
                "url": "https://drive.google.com/file/d/1sZgaOSSll7RtmXNAh6Xgu3BQ5N7JkSXN/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...Oh, Nu? And...",
                "line": 9,
                "url": "https://drive.google.com/file/d/1iAS0CBdrB-2BisI22v9Had70MGpszz7Q/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Apologies for interrupting your training. I have brought someone I would like to introduce to you, Lady Gamma.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1FYWYkLa0g7mz5hObndiZJCO3TAOkMtb1/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I see. If that's the case, you should've just said something.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1U8FkwPVmpau0DrLz2wVSMNtaZgMmVHqr/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "And...why're you standing so far away?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1m-9otIK-lvAmuRzSVNxldW2eBD9ioiwA/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "...As a precaution since your attack range is incredibly vast, Lady Gamma.",
                "line": 13,
                "url": "https://drive.google.com/file/d/10s0S63iPlZoTjx3vyQnyRm0FMV20Qa0U/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Heheh. True. It certainly would be trouble if you were to become collateral damage to my long sword!",
                "line": 14,
                "url": "https://drive.google.com/file/d/1S_4gOknyK2ZJkdcGn-4nMYXKbWBAmG7-/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Indeed. So would you kindly lower your sword for a moment?",
                "line": 15,
                "url": "https://drive.google.com/file/d/1iPiCVm3-OUg-4Ws8n7yiqDm3j6F4G_X6/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I've never cut down one of my allies before, but...well, I guess I shouldn't be wielding a weapon in front of a guest.",
                "line": 16,
                "url": "https://drive.google.com/file/d/19wPDUXR22gyciatdE9jQ-m-C4e-ShjOs/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "After carefully confirming that her weapon is lowered, Nu approaches Gamma.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1AVCp4d62Lr2ODGh5D_eJjkOWXWFeybsa/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Well then...No. 666, this is Lady Gamma, who also happens to be the president of Mitsugoshi.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1g6i8DOUl_BvcFZ0wDX7HUu1LsSxJSQGv/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Nice to meet you, No. 666. I'm publically known as Luna.",
                "line": 19,
                "url": "https://drive.google.com/file/d/14jfTKLodZgike2kvD5wZgCs3E3NuMy1_/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "I-I see! Nice to meet you as well!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1TtKTIxIcRfJ6gCyZMN3ZNlqjH9dRNhct/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(So, Lady Eta, who I met yesterday, constructed the Mitsugoshi building, and Lady Gamma manages it...)",
                "line": 21,
                "url": "https://drive.google.com/file/d/14lxK_agAO7nsfzVsnetpdKJst55V5f-W/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(As Lady Epsilon said, the Shadow Garden has indeed infiltrated the outside world. Quite deeply and extensively...)",
                "line": 22,
                "url": "https://drive.google.com/file/d/19KXypLSuii1OV6dXwOk_x1AcF54bhuCH/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "That said, how did you know I was here? I think I only mentioned I was taking some time off...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1_O1-VcFcELAhWtBEhyApdFFRxuYv3Uue/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "You were in a good mood yesterday while caring for your longsword. I see you've been training hard despite your time off.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1lFwxk8Pwixnuw6wjFk-wkcOArq1H99Bt/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes, I am one of the Seven Shadows. I may be running the business-side of things, but it doesn't mean I've abandoned my sword. It's only natural that I continue to train.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1w_8NEU8TxLHQNJ-wysR84EyWFm4jLbc6/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "I see. My apologies.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1eX5l6kvEq1UVs8HQVxXYRIrg336QbQjH/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Besides, I've been in great form lately!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1gwXTaPdp1U-cvayQk3k5rDXBs1OLCmjl/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "...Indeed, very impressive.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1xQkY5H-2QZ-Ff_nICUrnvXMa6qOV4exS/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "No. 666, you were watching, weren't you? What did you think of my brilliant swordplay?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1IdTSLc0SkCHKd9hvC_-YTq4JHuas8_Uq/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Um, well...",
                "line": 30,
                "url": "https://drive.google.com/file/d/1QeDNKnm2ShRTot2dnr6eLntKhK6t50bl/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(The same sort of thing happened yesterday. I wonder if this is a test...)",
                "line": 31,
                "url": "https://drive.google.com/file/d/1dCxUo5Q-_zCYEVlxAA0i6GQYcGgwFmKl/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "I think it was absolutely incredible! If you were even to graze your opponent, the battle would be decided right then and there\u2014",
                "line": 32,
                "url": "https://drive.google.com/file/d/1jBfUHFndnN4ijKI6IKpf2OJMzDraI006/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...Right. If I were able to graze them...",
                "line": 33,
                "url": "https://drive.google.com/file/d/19TkCYSA1QMZzFk3ZFpfP37df5xnar-i_/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(Wh-Why does she look depressed?! Right. The follow-up. I need to follow up on what I said with something!)",
                "line": 34,
                "url": "https://drive.google.com/file/d/1YZX-26YARgIKpfIwuSy68QhlKFUZpGuh/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Th-That's right! You would just need to land any kind of hit!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1buYZtegkwoPf_kHX1bF8JC6dnWhwsaQd/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Any kind of hit?",
                "line": 36,
                "url": "https://drive.google.com/file/d/1zr06Fi1VCjM8XS5QWoARsAVcVm70Z5h6/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Y-Yes! Even if it meant you getting a little hurt, you could take out your opponent...by coming up with a finishing move!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1_-B3d2I-Tiin3nCZtbCbQhqRn85Rg9UN/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...",
                "line": 38,
                "url": "https://drive.google.com/file/d/1mvvRf0-YYQmQ8ML8qWsFZPtflWXKGWe6/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "You make a good point.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1k3rBMk-J3oMnlmuS0yn82MT-Eeh1EAdP/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(Wh-Whew...)",
                "line": 40,
                "url": "https://drive.google.com/file/d/1FkQlKsO3vmNgiWOk4hvDzP4hf0BpVyFM/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Well then, Lady Gamma. Apologies for interrupting your training. We'll be taking our leave now\u2014",
                "line": 41,
                "url": "https://drive.google.com/file/d/1tGTVmUNTVJte70t5Qirj0ZIklNYimfHA/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Oh, wait. Since you're here, how about a quick spar?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1CeKWz3YgeqDC4rk0yIAjK3oFv6rb-_t4/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Huh?",
                "line": 43,
                "url": "https://drive.google.com/file/d/199tViTN0SctOc86L2wqTacAtovnJtxM4/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(If I face that sword of that magic caliber, I have a feeling I won't come out unscathed!)",
                "line": 44,
                "url": "https://drive.google.com/file/d/1zcvc0RUuoAoj-FP_Z_sSRk3z89F00Ybd/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "My apologies, Lady Gamma. I still have places to guide this individual.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1smWuMZFgqrEsSdYbE-_lRcV7DKHZNNyv/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "It won't take much time. Besides, I feel like I've got it in me right now.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1vqQbRpmvzFxCjD-Ia75ahDDmxUkT7tYI/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I'll lure in the opponent's attack, then take advantage of the momentary opening to strike a heavy blow... That's how I'll fight!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1mU6hJJDhTUba_1IuAh3TOZUoArs_InfJ/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "...Oh dear. I would be glad to spar with you, but\u2014",
                "line": 48,
                "url": "https://drive.google.com/file/d/17Yp8D_ZJTeHGYjbzhaOFV5mcPPBdEb3_/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "??? (Beta)",
                "subtitle": "Come on, Gamma... Please exercise some restraint.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1S402D4PT9yfW_RO5n3_P4H-OUzruQyPq/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...Oh?",
                "line": 50,
                "url": "https://drive.google.com/file/d/1b5R5rvHnpO9Z9g5qeKKu_TMm8ouE7wMV/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(Whose voice is that?)",
                "line": 51,
                "url": "https://drive.google.com/file/d/1S7vMbyxzsdSD-EcVVmRShM24m145HdMN/view?usp=drivesdk"
            }
        ],
        "e6": [
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Gamma stands before Nu and No. 666, eager for a sword fight, when a certain someone appears in front of the three of them...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1pMndGHgUezAkBwPw-NHr2-YxncncESzK/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Facing you wouldn't benefit these two in any way.",
                "line": 2,
                "url": "https://drive.google.com/file/d/15yeTFr1H1HzVMiMjczKnAtPQmM8Yd_Sx/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Beta! What's that supposed to mean?!",
                "line": 3,
                "url": "https://drive.google.com/file/d/1FO0hFfwaf8U9sGCJy5TFUGSq6vhYEdS6/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I mean exactly what I said. If your swords don't clash, they won't get any training; if they do, someone's getting hurt.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1-FZuGhxMc9RhkBz00gC2mwjazIHev55x/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "W-Well...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1lRxlFCrYjoM6nKKHP9ziRqGI1_BtzSfN/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(This is the second member of the Seven Shadows, Lady Beta... I feel like I've heard her voice before. There's something enigmatic about her.)",
                "line": 6,
                "url": "https://drive.google.com/file/d/1fN8s4esvtF8sbSFntnLf5pw5559HEb1G/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "A-Anyway! Did you have some business here?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1xAGDCZKzN_1Z54twfU9INbND0tWSP_Xh/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Not business, per se. I just came to see the face of the individual we'll soon be working with...that's all.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1obbMixpVfptijJX-KefOmkLw4InhTNii/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...Oh, I see.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1LDuiOha4QIhLv6HkWap15lxvgpuYulbE/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "I'm sorry for not introducing her sooner, Lady Beta. This is\u2014",
                "line": 10,
                "url": "https://drive.google.com/file/d/1usXioxjl3aZg36bOVShUpEU8lSuBOdiD/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes, I know about No. 666.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1eIaPCOEZsGa3Vn85RU2GA4tnZLkgeM2P/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "That's right. My apologies.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1t_MM3WNST7AmxVKCO0O44mKa8AfB2pIK/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...No. 666.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1H7lddrNFrKdZiwRKJbz5_cuJlbS_MNFJ/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Y-Yes!",
                "line": 14,
                "url": "https://drive.google.com/file/d/11JLaSAobG_bKBtAQibjBnDCElnl92baE/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Lady Alpha and Epsilon are currently on their way to investigate something. Once they return, they'll likely have something to tell you.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1AyWqWsq__I6Fp7bFaFx-paTbZpIZtxFX/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "U-Understood!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1qmGFy7sSs46_hYNS9WGuqvvKr7oP3zhd/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Although it's not directly related to the Cult, it's still an important matter. Wait for Lady Alpha to convey the details to you.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1V_nJbUZzeCvM5gvB3LhwFLczLJ5A_vXe/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "...Understood!",
                "line": 18,
                "url": "https://drive.google.com/file/d/1v--U05KI1CBAjLAlgRqUo-6-3Ym0x4lj/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "(Something to tell me... Maybe it's a mission or something? In any case, I'll give it my all!)",
                "line": 19,
                "url": "https://drive.google.com/file/d/1HIcRMLsDXIpueDs7Kk7vQ8azo0lAIqMg/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Both myself and Mitsugoshi will be ready to move at any moment.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1HQK6PDDvqMUQX21WfGOa-E6sgm1wkFEl/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "And, of course, I'll have my sword ready as well!",
                "line": 21,
                "url": "https://drive.google.com/file/d/1CLPr6sanhVfxIRRVTNPJiUc45aGRE4HF/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "That won't be...no, I think that's wonderful.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1AdvuSccJPz7umM3572_SMxcD5YiwaQ8-/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Indeed. Now, we just wait for Lady Alpha, Epsilon, and Zeta to report back...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1HrBP81idSkBqAqnJVfPU4FBAPXzMMHhS/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Well, not that I think there's any need to worry about those three...",
                "line": 24,
                "url": "https://drive.google.com/file/d/1pqV44smamp2ep91XjHTUFQV_AhAMmZFT/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "On the night Beta makes contact with No. 666, Alpha and Epsilon investigate the forest near the Lawless City, guided by Zeta...",
                "line": 25,
                "url": "https://drive.google.com/file/d/1V474Pa-YhqBrlWJ9m-5qRjIO7KnsLcwA/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...This forest has an incredibly unsettling air about it.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1NtRLr96t0l4SBunXfFjWcF9e3rUCaqh2/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "We've been exploring it for a few days, and it grows more ominous by the day.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1otShnKRuWDe9fjSQtk-idhF7dtK5gZBy/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "The cause is the tower, no doubt.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1id3-lvx6xRLua-cSQJwb5eL9IevoF1PU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But why now?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1KEWoUUYEHSHa5bcxj-Kf-JYYhxFLG-Xj/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "We'll also need to investigate that and find out what's happening...",
                "line": 30,
                "url": "https://drive.google.com/file/d/1y53Mn-aoAQPxQKYYlOYo9zhRgxkmtJXA/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Shh! Both of you, stop. ...Look there.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1y8HQav4D5JU4Z7TJ5XBzH7KCNu9I8gd6/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Ghouls flooding out of the Lawless City.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1QF7apaYAjWNYgVyTSURaf8TlhY6UtYR0/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I see... So that explains the investigation request.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1sSMXGAuDbXrrO_kBL5xFmJiXJTBvQDWV/view?usp=drivesdk"
            },
            {
                "name": "Ghoul",
                "name_variant": "Ghoul",
                "subtitle": "Graaarghhh!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1WyIjnY7JJPChtFUtcr_amyd2S2CioTx2/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Oh, looks like they noticed us.",
                "line": 35,
                "url": "https://drive.google.com/file/d/112dueJBFFODCXmZ3WUkQ6qMH5AoDWEke/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Both of you, be on your guard. And, Epsilon, put on your slime bodysuit.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1BPEHeVJB6shYZ17sXYWZCFpzIXZ8t-vE/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Understood! We'll just have to defeat them now that we've been seen!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1V01HozdQIzh3sRS2tT7rFjmjIjPEADYE/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Be careful, you two. They can be surprisingly troublesome.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1yISrQ3r72P_foH2lYMyBZ_rwKIluRTLl/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "True. Their numbers are a pain, but...",
                "line": 39,
                "url": "https://drive.google.com/file/d/1xHMpBk4dVlc5l9AwGUj-aGSJVB9BG3Bf/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "They're no match for three of the Seven Shadows. Let's go!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1IP95XJD__xPIxHwjqkzDV7fCKmw22viC/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Indeed, we'll make quick work of them.",
                "line": 41,
                "url": "https://drive.google.com/file/d/18zry971vbSWAZWHGBZ3GHh60oU8tdWca/view?usp=drivesdk"
            }
        ],
        "e7": [
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "This is the last one!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1l-v1MaKlbBazDcsevaBZEHgRevtHDBoL/view?usp=drivesdk"
            },
            {
                "name": "Ghoul",
                "name_variant": "Ghoul",
                "subtitle": "Graaarrrr...",
                "line": 2,
                "url": "https://drive.google.com/file/d/16OmhlLNHbppTEVOPvRi9qVYpVky-ZER3/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Extermination complete. Good job, both of you.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1AAbOUOQdrhuUs_eLLeqijslrTBr5tejM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "They really were troublesome, just as Zeta said.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1oU8cOzceVT9QCdoNDewYtQ_9CEaASTDR/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "They weren't this much trouble when I first saw them... Their numbers and strength appear to be increasing.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1E140ZExT6OoRCm3T_-Ej2ey7NRH-zCNc/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Meaning there's no time to lose... We'll need to move as soon as we return to Alexandria.",
                "line": 6,
                "url": "https://drive.google.com/file/d/15M5Nn0aZ1OhvgfMmRxdKNbWSldLL0Vxq/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Understood!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1r4G0zXHFYiYzTphcwwf_EgrHrk0OkQQu/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I think I'll head back too. It looks like this situation is growing larger than anticipated.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1uhGhvoYuDkBCl3V8IyqNqClRzy_D_h4C/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, please do that. Together with Eta's research results, we'll discuss the future direction of the Seven Shadows.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1bxxYERlc3u3EcurAGEFS2bAUdQpFM2H0/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The three return to the Shadow Garden. With no time to rest, they gather the other members of the Seven Shadows.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1tE-JcDw0fQkZ_qW3pYdv_4kE7-7cRSz8/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Eta. How is the research I entrusted you with going?",
                "line": 11,
                "url": "https://drive.google.com/file/d/1RfCBQ-Aa8H6n606ulRKBSBBIFWqANro0/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "The hypothesis I told you about before... It's quite promising. But I still lack evidence...",
                "line": 12,
                "url": "https://drive.google.com/file/d/1H5HKxDVoZdDPN86gtusrqsJZSZxFfIw5/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "If you've made even a little progress, that's very good. Thank you for your hard work. Now then...",
                "line": 13,
                "url": "https://drive.google.com/file/d/1ccWqROknpIBlZg9LnwdoBApKVZf6nqtJ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'll tell you about the next mission. Our destination is the Red Tower in the Lawless City.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1Cch-ieRffHE5bPcPuaUhby3DID7kkYdz/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Our objective is...the Blood Queen who lies there. We'll proceed with our investigation based on Eta's hypothesis.",
                "line": 15,
                "url": "https://drive.google.com/file/d/18adfZGqdkmHPinuhHbrJJOURnza-lMW1/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "We'll deploy No. 664, 665, and 666 as a three-woman unit. The three will be under Beta's direct command.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1IzMqqOOwOl9EQB0cJ0DynWhyHZBX5wD_/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Lambda has assured me of their competence and balance. I'll leave command to you, Beta.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1qJYWhLGMu5U5z9m1F_hR3EKR9MagTIbG/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Understood.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1OFekjXu4Pw1dnOYpOBXBuWC6UJPKPIJp/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Beware of the creatures called ghouls. Besides, in the current situation...anything could happen at any time.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1F3YShp_saC5xOxXvol2orbUcWIIkxNQ_/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Yes. I'll be cautious.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1JWxe8bLLNmHIXtx4hHyIEAONol2eTRo6/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "And one more thing. We intend to investigate the flow of money in the Lawless City.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1o19CVcfyPFfB6VMtnJz4FdIpCUkFU8aX/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "You mean the rumors about the influx of funds into the Lawless City. We've received intel about it at Mitsugoshi as well.",
                "line": 22,
                "url": "https://drive.google.com/file/d/18xwOSGWGG4A7stA1TI6C3ZZEHgG7iRHT/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "My guess is that a considerably unnatural flow has already been established.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1FEPayqK8qVIP8plNBByntXrnMdF8xrcO/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, I agree. Let's uncover everything.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1A1arglwHWF3t7avZxng12V9CQu7UOBT-/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Zeta will continue to investigate and gather intel around the Lawless City. Epsilon, be on standby. Just\u2014",
                "line": 25,
                "url": "https://drive.google.com/file/d/1gUp3OKdQwBNkl2v0SZlCfeEe36OYut2i/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I understand. Once everything is settled, we will take action in the Oriana Kingdom... You wish for me to prepare for that as well, correct?",
                "line": 26,
                "url": "https://drive.google.com/file/d/1kxAls4kmPFskB7rCVA4FVRSJ-UoQOGoz/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Exactly. Please be thorough.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1ID5gdEcM-xJlPT1uPgiFDv53kQdHjgBa/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...",
                "line": 28,
                "url": "https://drive.google.com/file/d/16fKIsiIFVyNZnI7GoDtYZQvqLIpvDFrN/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well, I guess it's business as usual for me. I'll report immediately if anything happens.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1W4XKzHm62E4RZFjYZd0ZtoZDAScnUtXb/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Heh... These meetings go a lot smoother when that dumb dog isn't around.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1YOAMuUFpsX3XP4D8FwGQuqFjoXzL_xxv/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Delta... Her strength will no doubt be needed somewhere. I'll bring her when that time comes.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1Egjxw1oRskCE5b6PHaEldUQDDzSdcArv/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Lastly, Eta will continue her research. Once you receive what you need, analyze it at top speed.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1ioxG6QZ88eOR8lsVrhS7zHaXjs5fQCGQ/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Of course... That's what I'm here for.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1RjKq4bkDfGxtbx3sexwbQ0gXFQyBsIm3/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...That's all the missions.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1Cnf4ZkxWTv_CIA7ia-9seJsM06Nt_9aW/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Our report to Shadow will be delivered tomorrow in the Shadow Room. Inform the Numbers as well.",
                "line": 35,
                "url": "https://drive.google.com/file/d/113F4UKSP60MVjRBdtzVrIrH_kBI0jeb_/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "This mission will likely be more momentous and challenging than we imagine... Each of you should ensure you are prepared.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1ge6a9DcD5VTBQV3A4s2jfiEmfiijGLwF/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Understood.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1Yspc2o3hF4Wwvu6qRHPGs6-RvmJsdm-H/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Leave it to me to figure out the source of the funds. I'll make sure to find a lead.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1my9tAc5VK-yA627H1ez7J9iEYuPGxQaf/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes. Although I'll be on standby, I won't let my guard down!",
                "line": 39,
                "url": "https://drive.google.com/file/d/14XxBsVm7nFwBq85DSqJDt9m4YMW87W7F/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Looks like this will be a significant turning point for the Shadow Garden. I'll do my job as usual.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1wZUOCHuaP2rzHrasACRXDZqa0Trsw5XH/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "A chance to unravel the mystery of the possessed!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1CUA6csRQNcC0IfCXwTrwEt_R3u09TRJW/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I look forward to seeing what you are all capable of.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1-jOcPZZHsTHbQyXGLecWzC1xo5wAeqPn/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...The world is beginning to move again.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1qj-PRIjG9gYCb9nYxMS49-Zp8SeG9u24/view?usp=drivesdk"
            }
        ]
    }
}

let setDoc = db.collection('data').doc('es_i').set(data['i']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
