const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "s1": {
        "e5": [
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "A man clad in purest black...",
                "line": 1,
                "start_time": "0-00-22",
                "end_time": "0-00-24.080000",
                "url": "https://drive.google.com/file/d/14JpwBRkwfzHYENl1wGdfq1_7dSbc86eX/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "I see.",
                "line": 2,
                "start_time": "0-00-24.750000",
                "end_time": "0-00-25.750000",
                "url": "https://drive.google.com/file/d/10ePmeCnKdooU3UbD-a4VbPg_N83-dHJ0/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "You're the stray dog that's been snapping at the Cult lately.",
                "line": 3,
                "start_time": "0-00-25.750000",
                "end_time": "0-00-29.040000",
                "url": "https://drive.google.com/file/d/1uWrK8p9KLbQYCqR5vQiqjT07TyZbHCqh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "My name is Shadow.",
                "line": 4,
                "start_time": "0-00-31.380000",
                "end_time": "0-00-32.920000",
                "url": "https://drive.google.com/file/d/1IuAIULGte5qZq7M0uGSReZDXhrGROzgk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "He who lurks in the shadows in order to hunt the shadows.",
                "line": 5,
                "start_time": "0-00-33.920000",
                "end_time": "0-00-36.710000",
                "url": "https://drive.google.com/file/d/15brO_kJEa8UR1x9TRzZENhk_wLWfe_Ek/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Shadow?",
                "line": 6,
                "start_time": "0-00-39.040000",
                "end_time": "0-00-40.250000",
                "url": "https://drive.google.com/file/d/1OoWeOPTLfjprkearDdQMKF93uq7Jt4y-/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "You seem to have gotten a swelled head after crushing a few of our smaller facilities.",
                "line": 7,
                "start_time": "0-00-40.790000",
                "end_time": "0-00-44.790000",
                "url": "https://drive.google.com/file/d/16eL9vgapmtGrrFaFS5ERwDuFLZukS2SK/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "But not one of the Cult's core members was anywhere near any of those bases.",
                "line": 8,
                "start_time": "0-00-45.130000",
                "end_time": "0-00-49.080000",
                "url": "https://drive.google.com/file/d/12_VSTG1BvsD9Stsd5iz52tqb_sdvo2pG/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "You're just a bunch of cowards going after our weakest minions.",
                "line": 9,
                "start_time": "0-00-49.500000",
                "end_time": "0-00-52.630000",
                "url": "https://drive.google.com/file/d/1dAnKOt9TVp2wsMhog9hoLd6TKfZzF3nY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Whomever or wherever we hunt, the result is the same.",
                "line": 10,
                "start_time": "0-00-53.250000",
                "end_time": "0-00-56.330000",
                "url": "https://drive.google.com/file/d/1azRbky6xCa6H5g5MNiGGWru031p60vji/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "Unfortunately for you, it is not the same.",
                "line": 11,
                "start_time": "0-00-56.880000",
                "end_time": "0-00-59.080000",
                "url": "https://drive.google.com/file/d/1qD1BD90mInVuqCgQ675_bCgfXM70FRYw/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "A core member of the Cult is right here.",
                "line": 12,
                "start_time": "0-00-59.080000",
                "end_time": "0-01-01.580000",
                "url": "https://drive.google.com/file/d/1zCKpkBtuMIs8qha9roL0fADCCSoKhwo0/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "Today, you will be hunted by me:",
                "line": 13,
                "start_time": "0-01-03.460000",
                "end_time": "0-01-06.750000",
                "url": "https://drive.google.com/file/d/1AnF396h-Hxk-uSSRZUT4Xm4tjOUuK6lf/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "the future Twelfth Seat of Rounds, Zenon Griffey.",
                "line": 14,
                "start_time": "0-01-07.080000",
                "end_time": "0-01-10.330000",
                "url": "https://drive.google.com/file/d/10ryZ0y4YXO6LAVKDlttKU2phSDRUvJRc/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "I will take your life in the service of the Knights of Rounds!",
                "line": 15,
                "start_time": "0-01-11.670000",
                "end_time": "0-01-16.040000",
                "url": "https://drive.google.com/file/d/1txQSPMEvrfALLOOD7d_U38WXV1UndRTV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "So?",
                "line": 16,
                "start_time": "0-01-28",
                "end_time": "0-01-29.210000",
                "url": "https://drive.google.com/file/d/1BQIoH8pq9f0O1QmAI9UKmM8J9dDHM4h8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Where is this core member of the Cult?",
                "line": 17,
                "start_time": "0-01-31.170000",
                "end_time": "0-01-33.630000",
                "url": "https://drive.google.com/file/d/1PmB475jprfGFM9VKhs82Xtjiz52W1o3g/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "We've finished evacuating citizens",
                "line": 18,
                "start_time": "0-03-12.920000",
                "end_time": "0-03-14.500000",
                "url": "https://drive.google.com/file/d/1BuO63RQCCGTSGkk8JC9-c8CE-ZxGaatr/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "from Commercial Districts 3 through 8!",
                "line": 19,
                "start_time": "0-03-14.500000",
                "end_time": "0-03-16.130000",
                "url": "https://drive.google.com/file/d/1u_YVVNT1MXajzeHI8aJp1MVyrPjlKziS/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Close the station!",
                "line": 20,
                "start_time": "0-03-16.420000",
                "end_time": "0-03-17.630000",
                "url": "https://drive.google.com/file/d/1Ly9DTCa121a7I8tRsL-zCLUMhAC7jx9O/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Have the trains take shelter three stations down!",
                "line": 21,
                "start_time": "0-03-17.630000",
                "end_time": "0-03-19.290000",
                "url": "https://drive.google.com/file/d/1EXADSgWzT0uUoIl-GG9pBBbqCjBDWzaL/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "All of them!",
                "line": 22,
                "start_time": "0-03-19.290000",
                "end_time": "0-03-20.500000",
                "url": "https://drive.google.com/file/d/1IabvNaDdyp-g3JpA4gZHWZR_xB71c8LE/view?usp=drivesdk"
            },
            {
                "name": "Solider",
                "name_variant": "Solider",
                "subtitle": "Fire! Fire!",
                "line": 23,
                "start_time": "0-03-28.630000",
                "end_time": "0-03-30",
                "url": "https://drive.google.com/file/d/1LZuTkSezlKWn2N1UTUZFPP71bQg82Fdk/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Dark Knights!",
                "line": 24,
                "start_time": "0-03-39.580000",
                "end_time": "0-03-40.790000",
                "url": "https://drive.google.com/file/d/1j891fUn53yPtKC4ze5_0BzFh7dSkMawe/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Attack!",
                "line": 25,
                "start_time": "0-03-41.170000",
                "end_time": "0-03-42.380000",
                "url": "https://drive.google.com/file/d/1Z5VXR9CRXlHGzGMrem-P26v2oCzP5YAe/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "What?!",
                "line": 26,
                "start_time": "0-03-49.540000",
                "end_time": "0-03-50.540000",
                "url": "https://drive.google.com/file/d/1s7O1VABN_B3Nv48I_n8XjZ587annNYUH/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "It healed itself?!",
                "line": 27,
                "start_time": "0-03-50.540000",
                "end_time": "0-03-51.960000",
                "url": "https://drive.google.com/file/d/1adAC_-SsozSf5XhHPkgrj3KjB5vhgauC/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Dammit!",
                "line": 28,
                "start_time": "0-03-57.420000",
                "end_time": "0-03-58.420000",
                "url": "https://drive.google.com/file/d/1pBf_I7YH1CtmlI79_7yOQCWFCEKOLDTo/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Rally all nearby units!",
                "line": 29,
                "start_time": "0-03-58.960000",
                "end_time": "0-04-01.040000",
                "url": "https://drive.google.com/file/d/1xNqfum4KrXOb4Omiw7bQ7CSntnD_bzkF/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Aye!",
                "line": 30,
                "start_time": "0-04-01.040000",
                "end_time": "0-04-01.710000",
                "url": "https://drive.google.com/file/d/1C7igNIgZC74Gp4wr12vXj6iyx9oZminl/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "We'll try to keep it here!",
                "line": 31,
                "start_time": "0-04-01.710000",
                "end_time": "0-04-04.290000",
                "url": "https://drive.google.com/file/d/1ULgS4cuCCVHUK8p72WG-vuIy3De_qbiI/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Don't worry about damaging buildings!",
                "line": 32,
                "start_time": "0-04-04.290000",
                "end_time": "0-04-06",
                "url": "https://drive.google.com/file/d/1WmdlC-qmOKKp-RvD5bAmTtcdLzg0VNTA/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Permission granted to go all out!",
                "line": 33,
                "start_time": "0-04-06",
                "end_time": "0-04-07.500000",
                "url": "https://drive.google.com/file/d/1bGCPfhnrnkw2n6jCr02fmxgXMA-hzaT3/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Do whatever it takes to stop that thing!",
                "line": 34,
                "start_time": "0-04-07.500000",
                "end_time": "0-04-09.080000",
                "url": "https://drive.google.com/file/d/1fIrn-1iGspWXn1qInVlrCIDLo2Fuc3K1/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "You monster!",
                "line": 35,
                "start_time": "0-04-19.330000",
                "end_time": "0-04-20.540000",
                "url": "https://drive.google.com/file/d/1eEg-fthmqe1G4epdHn44VRlA8SK5JXW9/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Princess Iris!",
                "line": 36,
                "start_time": "0-04-24.790000",
                "end_time": "0-04-26",
                "url": "https://drive.google.com/file/d/1lS_juHyu-eOltt0riiQq29ouDEQzNweH/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "The injured will retreat!",
                "line": 37,
                "start_time": "0-04-27.420000",
                "end_time": "0-04-28.920000",
                "url": "https://drive.google.com/file/d/1e8dpW1oKTeNBbZQTne8FvDatmSHEY7rE/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "This district will soon be deserted!",
                "line": 38,
                "start_time": "0-04-28.920000",
                "end_time": "0-04-31.130000",
                "url": "https://drive.google.com/file/d/13ae_kjZj-diE1qXuw2MJBhjY926bccWG/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Then we can-",
                "line": 39,
                "start_time": "0-04-31.130000",
                "end_time": "0-04-32.330000",
                "url": "https://drive.google.com/file/d/1_bS2RyUTaLHgRK0hAp3KPpYoL-I0rrtm/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "It's healing itself.",
                "line": 40,
                "start_time": "0-04-36.080000",
                "end_time": "0-04-37.330000",
                "url": "https://drive.google.com/file/d/1VKB3cQ8CZt9rbCnbPEV6OgWKhqoxzEP4/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "You're kidding.",
                "line": 41,
                "start_time": "0-04-37.330000",
                "end_time": "0-04-38.540000",
                "url": "https://drive.google.com/file/d/1snUnrHhpKO1FxfTUgrd_rPaCkQImQOWG/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "That was an attack from Princess Iris!",
                "line": 42,
                "start_time": "0-04-38.540000",
                "end_time": "0-04-40.380000",
                "url": "https://drive.google.com/file/d/1-nMDWS5t6LQVOYewWoxxvMY9RVcssrX9/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "You can heal that, too, can you?",
                "line": 43,
                "start_time": "0-05-13",
                "end_time": "0-05-14.880000",
                "url": "https://drive.google.com/file/d/16uEXme9wKfPDkjsQVxNvxYSR3dKGc8WN/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "In that case,",
                "line": 44,
                "start_time": "0-05-15.670000",
                "end_time": "0-05-16.880000",
                "url": "https://drive.google.com/file/d/1D13eXO2hU5DQkZa5V546klQBspYnxyyn/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I'll just have to cut you into pieces so small that you can't regenerate from them!",
                "line": 45,
                "start_time": "0-05-16.880000",
                "end_time": "0-05-19.670000",
                "url": "https://drive.google.com/file/d/1S0DzFGMHFMf8AtEYjJlnl5BwPsD1Fzvn/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I'll just keep...",
                "line": 46,
                "start_time": "0-05-37.330000",
                "end_time": "0-05-38.540000",
                "url": "https://drive.google.com/file/d/1qBezBKwi6Wpi6C8fvt5rYZEdVvhlHIU_/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You're only making her suffer.",
                "line": 47,
                "start_time": "0-05-40.250000",
                "end_time": "0-05-42.210000",
                "url": "https://drive.google.com/file/d/1u4sUYLrOSM74S76Aoc_d8uxUWpfufZlZ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Can't you see that?",
                "line": 48,
                "start_time": "0-05-42.500000",
                "end_time": "0-05-43.830000",
                "url": "https://drive.google.com/file/d/1RC6fUFIJ0a0Ypg4-3Ka82UYIlKTK25mL/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Who are you?!",
                "line": 49,
                "start_time": "0-05-52.420000",
                "end_time": "0-05-53.630000",
                "url": "https://drive.google.com/file/d/1SK9g4XFHEp6zPUsPdLzxFrC-3NjElOZ1/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Alpha.",
                "line": 50,
                "start_time": "0-05-54.630000",
                "end_time": "0-05-55.630000",
                "url": "https://drive.google.com/file/d/1PrfxfoyHaq4l7lA_mCz9lCmplfX3a335/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "The monster...",
                "line": 51,
                "start_time": "0-06-03.540000",
                "end_time": "0-06-04.750000",
                "url": "https://drive.google.com/file/d/1ahw6PfQIUzRIj9kygtOppj4b72x6LmTB/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You poor thing, I know it hurts.",
                "line": 52,
                "start_time": "0-06-10.920000",
                "end_time": "0-06-13.460000",
                "url": "https://drive.google.com/file/d/133ECA_7w_awBS8T6E3oYal23unw6my1s/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You don't have to suffer any more.",
                "line": 53,
                "start_time": "0-06-13.920000",
                "end_time": "0-06-15.670000",
                "url": "https://drive.google.com/file/d/1ccy8m_hsMjxkfajq9ANolHt4ays4CPOw/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You don't have to feel any more pain,",
                "line": 54,
                "start_time": "0-06-20.630000",
                "end_time": "0-06-22.580000",
                "url": "https://drive.google.com/file/d/1zNQA5EIQ6FlEeJHANy_YxOvvuuWJLhpx/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "any more sadness.",
                "line": 55,
                "start_time": "0-06-22.920000",
                "end_time": "0-06-24.420000",
                "url": "https://drive.google.com/file/d/1chvUZS0hQX5ik3-qJcwCgAW6TzU997L0/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "You...",
                "line": 56,
                "start_time": "0-07-14.580000",
                "end_time": "0-07-15.790000",
                "url": "https://drive.google.com/file/d/1xOb-xCmycneknBUEk8O3o3PvLA9cK6Z-/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Wait, come back!",
                "line": 57,
                "start_time": "0-07-18.170000",
                "end_time": "0-07-19.380000",
                "url": "https://drive.google.com/file/d/1WYU6awOmDUBumUqpHl9gvisjGZngmv6A/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Be a good audience member and content yourself with sitting back and enjoying the show.",
                "line": 58,
                "start_time": "0-07-20.330000",
                "end_time": "0-07-25.330000",
                "url": "https://drive.google.com/file/d/1dIVA9wPNHEicSvgH_q-n-bOxQjAvNDoQ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "We are Shadow Garden, and you will stay out of our way.",
                "line": 59,
                "start_time": "0-07-25.790000",
                "end_time": "0-07-29.080000",
                "url": "https://drive.google.com/file/d/17vnWQ6ilSO-hsTHCc7ZkrxTW6YWuAduK/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Shadow Garden?",
                "line": 60,
                "start_time": "0-07-37.540000",
                "end_time": "0-07-39.290000",
                "url": "https://drive.google.com/file/d/1YD7Vg0Nka9IpeeZnmVp78a4hDejWe8F_/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "It's happening everywhere!",
                "line": 61,
                "start_time": "0-07-43.080000",
                "end_time": "0-07-44.580000",
                "url": "https://drive.google.com/file/d/1sFVvW5oErbqB5LP1-x8qDcUgMCCM7oIo/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Alexia, where in the world are you?!",
                "line": 62,
                "start_time": "0-07-45.750000",
                "end_time": "0-07-48.130000",
                "url": "https://drive.google.com/file/d/1x2Cxw6g4DKGutQvAVaxE_QgkokctqEGD/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "I see, apparently I've underestimated you a little.",
                "line": 63,
                "start_time": "0-07-57.830000",
                "end_time": "0-08-00.790000",
                "url": "https://drive.google.com/file/d/17APZZJtRY4nUjoYmUqx_nyzqy0lohbwr/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "I can see how you've managed to destroy so many of our bases,",
                "line": 64,
                "start_time": "0-08-01.080000",
                "end_time": "0-08-04.080000",
                "url": "https://drive.google.com/file/d/1kGnVF_5_Uze2NCtKMDeZWb78rPRsYHo0/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "even if they were small ones.",
                "line": 65,
                "start_time": "0-08-04.080000",
                "end_time": "0-08-05.710000",
                "url": "https://drive.google.com/file/d/1LerTuOj3OlbFxTfvryg5WJHdGcpifBcp/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "Now let me show you!",
                "line": 66,
                "start_time": "0-08-06.250000",
                "end_time": "0-08-07.630000",
                "url": "https://drive.google.com/file/d/1FEX4sNllRF8uP5XWf05W9-ec0gcGTv8N/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "Behold the power of a future Knight of Rounds!",
                "line": 67,
                "start_time": "0-08-07.920000",
                "end_time": "0-08-10.290000",
                "url": "https://drive.google.com/file/d/1taZv9fg_fJdfdUXw2aKG__DIpDvSFvnd/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "So much magical energy...",
                "line": 68,
                "start_time": "0-08-14.580000",
                "end_time": "0-08-16.080000",
                "url": "https://drive.google.com/file/d/1vrXGUz4Jq0Xzu2QmEnIMV2VvdH0sDRQN/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "He's strong.",
                "line": 69,
                "start_time": "0-08-45.170000",
                "end_time": "0-08-46.380000",
                "url": "https://drive.google.com/file/d/1mNmrAOjFxh0bFZgvgLsapTvR2qsnLxIS/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "Dammit!",
                "line": 70,
                "start_time": "0-08-46.750000",
                "end_time": "0-08-47.750000",
                "url": "https://drive.google.com/file/d/1Y8fV_S1EsHoAjGxGOyzF08u5_LOZJxZf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "You're not attacking?",
                "line": 71,
                "start_time": "0-08-52.380000",
                "end_time": "0-08-53.580000",
                "url": "https://drive.google.com/file/d/11UJc_LYCJhL4GHveXOtfR2qUI-RAvJ4n/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "\"Future Rounds\"?",
                "line": 72,
                "start_time": "0-08-54",
                "end_time": "0-08-55.500000",
                "url": "https://drive.google.com/file/d/1iuJ8eSP4ci-1tk2irAG_ppw6fBsgQGMX/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "His technique has gone beyond excellent and into the realms of transcendent.",
                "line": 73,
                "start_time": "0-09-16.580000",
                "end_time": "0-09-19.830000",
                "url": "https://drive.google.com/file/d/15uB4D6dfTSg9_2MY8q-wvcJr1vmFcCM4/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "But at its core...",
                "line": 74,
                "start_time": "0-09-20.380000",
                "end_time": "0-09-23.210000",
                "url": "https://drive.google.com/file/d/1r27CnbZKqpRous0M2_pynw4KQjZYr53_/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "his fencing is so ordinary.",
                "line": 75,
                "start_time": "0-09-24.380000",
                "end_time": "0-09-25.830000",
                "url": "https://drive.google.com/file/d/1sUSfNUEYA4mkBpXPV_tSAXFEfjLGvE4a/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Like I dreamed of when I was a little girl...",
                "line": 76,
                "start_time": "0-09-27.040000",
                "end_time": "0-09-29.330000",
                "url": "https://drive.google.com/file/d/1c1OuVkGkgJAJxIWwdu_398-jOysv83GP/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "My ridiculous idea of ideal swordplay.",
                "line": 77,
                "start_time": "0-09-29.920000",
                "end_time": "0-09-31.750000",
                "url": "https://drive.google.com/file/d/1sbmi3gy3ucb4Ypa3cQiMdl1UaBKxVjjN/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Even without the innate talent for the sword that my sister had,",
                "line": 78,
                "start_time": "0-09-33.290000",
                "end_time": "0-09-36.420000",
                "url": "https://drive.google.com/file/d/1ZvLM_6ThruDu5v4Ht3cO5Ub-IFTtGj2P/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I believed that, if I worked long and hard enough, I could be as strong as she is.",
                "line": 79,
                "start_time": "0-09-36.420000",
                "end_time": "0-09-41.210000",
                "url": "https://drive.google.com/file/d/1XmqN7I99CwbOfp45CD7oySmSW3NvBl9-/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "But no matter how hard I tried, I could never catch up to the prodigy.",
                "line": 80,
                "start_time": "0-09-42.670000",
                "end_time": "0-09-46.790000",
                "url": "https://drive.google.com/file/d/1ftjb0Gd4nzHT5mgexUuy4AHFnKsMfE0a/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "The best I could ever do was to get people to compare me to her, and laugh at me.",
                "line": 81,
                "start_time": "0-09-47.500000",
                "end_time": "0-09-51.710000",
                "url": "https://drive.google.com/file/d/1KNVP24lSC5ObgdAzFyjIFw-ZllRbrQBV/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "The fencing style of the have-nots, with no strength and no skill:",
                "line": 82,
                "start_time": "0-09-52.500000",
                "end_time": "0-09-56.210000",
                "url": "https://drive.google.com/file/d/1_U2F25byPChDrJGIXGxsmujgQCbtbotf/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "the style of a Fencer Ordinaire.",
                "line": 83,
                "start_time": "0-09-56.750000",
                "end_time": "0-09-59.080000",
                "url": "https://drive.google.com/file/d/1CCusf_ciLcDhulImb5YHZQP6GRo1LYPE/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "But I couldn't give it up.",
                "line": 84,
                "start_time": "0-10-00.670000",
                "end_time": "0-10-02.290000",
                "url": "https://drive.google.com/file/d/1G3yUEkOb3ou8jzlcVDy8txaHWBYHKuqq/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "This style, that's nothing but a plain, boring accumulation of basic skills...",
                "line": 85,
                "start_time": "0-10-03.880000",
                "end_time": "0-10-07.330000",
                "url": "https://drive.google.com/file/d/1SZu6jaAjKhLJBZm9zr80kZgQpYnTVItS/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "To me...",
                "line": 86,
                "start_time": "0-10-09.790000",
                "end_time": "0-10-11",
                "url": "https://drive.google.com/file/d/1hBMjUt7iMzyVvr5HlD_WpvEy9xQ17EnA/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "this style...",
                "line": 87,
                "start_time": "0-10-11.580000",
                "end_time": "0-10-12.790000",
                "url": "https://drive.google.com/file/d/1IUqDqZQ-XoNzTahc5IpwH3Xs-6Z-A9W_/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I like your fencing style.",
                "line": 88,
                "start_time": "0-10-12.790000",
                "end_time": "0-10-14.460000",
                "url": "https://drive.google.com/file/d/1Jw9Ggb0TFw3XDF5R2AzayY7eRovp3ad-/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "You, who are you?!",
                "line": 89,
                "start_time": "0-10-28.460000",
                "end_time": "0-10-30.290000",
                "url": "https://drive.google.com/file/d/1ZNdMq9MdlatLCitvPnH-zwFSIaFIVd0t/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "If you have so much power, why do you hide your identity?!",
                "line": 90,
                "start_time": "0-10-30.580000",
                "end_time": "0-10-34.040000",
                "url": "https://drive.google.com/file/d/1Q5hsWsTFJZv-rg236RNU6j5Y_iHr17UE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "We are Shadow Garden.",
                "line": 91,
                "start_time": "0-10-36.540000",
                "end_time": "0-10-38.460000",
                "url": "https://drive.google.com/file/d/1zcK73S67CMhziSQQkKysyPyrXgzn3fUc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "They who lurk in the shadows, who hunt the shadows.",
                "line": 92,
                "start_time": "0-10-38.460000",
                "end_time": "0-10-41.210000",
                "url": "https://drive.google.com/file/d/1RKA7KRVDZXNicNNKRqogzXkopgkG-aeU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "That is the sole purpose of our existence.",
                "line": 93,
                "start_time": "0-10-42.880000",
                "end_time": "0-10-45.710000",
                "url": "https://drive.google.com/file/d/1TLDzsvgTZwLOtBxqKzM5J1Mdx-v4cAdX/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "Are you insane?",
                "line": 94,
                "start_time": "0-10-47.040000",
                "end_time": "0-10-49.420000",
                "url": "https://drive.google.com/file/d/1jzCmRoc_HS4GtSN0FX98-mpfJPeWSEV_/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Shadow Garden?",
                "line": 95,
                "start_time": "0-10-51.080000",
                "end_time": "0-10-52.880000",
                "url": "https://drive.google.com/file/d/1taofX4OZ1w5rOkvby8qo1qjwc02-f866/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "And there's a cult?",
                "line": 96,
                "start_time": "0-10-53.830000",
                "end_time": "0-10-55.250000",
                "url": "https://drive.google.com/file/d/1WJL9O9ekcoEKnOPaAUZc_P0uBGWcjHTi/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "What's going on?",
                "line": 97,
                "start_time": "0-10-55.500000",
                "end_time": "0-10-56.880000",
                "url": "https://drive.google.com/file/d/1auAQkhSgjJhp2RgWTChpjzO2xG6rcuUX/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "All right...",
                "line": 98,
                "start_time": "0-10-58.880000",
                "end_time": "0-11-00.080000",
                "url": "https://drive.google.com/file/d/1LUnov5afK5M7WzoT6iwjmP_vINpREidE/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "If you really want to fight,",
                "line": 99,
                "start_time": "0-11-00.920000",
                "end_time": "0-11-02.920000",
                "url": "https://drive.google.com/file/d/1DlIhbHG3jYo6YLLNlQ5rKipkd_TAsEJi/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "then I'll give you a fight!",
                "line": 100,
                "start_time": "0-11-03.250000",
                "end_time": "0-11-05.540000",
                "url": "https://drive.google.com/file/d/1ix86AZVYasMHGpW_cCvAMIY5rapco-o_/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "With these pills,",
                "line": 101,
                "start_time": "0-11-06.170000",
                "end_time": "0-11-07.830000",
                "url": "https://drive.google.com/file/d/1dz97DSePYXxN3fi2Np71pfVZLWNJi1Kh/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "a man can awaken to a new nature beyond human limitations!",
                "line": 102,
                "start_time": "0-11-07.830000",
                "end_time": "0-11-10.580000",
                "url": "https://drive.google.com/file/d/18An308x-1c-bIEbCD7XqkZ9K8xeHmgYg/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "If an ordinary person took them, he would be overwhelmed by their tremendous power and die...",
                "line": 103,
                "start_time": "0-11-11.040000",
                "end_time": "0-11-16.290000",
                "url": "https://drive.google.com/file/d/1Km4UpAsli5yk-_OoZipyc92aTJH6pvBA/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "I am the Third Awakened.",
                "line": 104,
                "start_time": "0-11-38.790000",
                "end_time": "0-11-40.880000",
                "url": "https://drive.google.com/file/d/1iv9z2QeWOj5uTZV7yaTy2bJ1ZvpGMl5n/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "Those who can control this power are the real chosen ones.",
                "line": 105,
                "start_time": "0-11-45.420000",
                "end_time": "0-11-49.500000",
                "url": "https://drive.google.com/file/d/10DQ89ZGUj46vLw_tMxUN2FQ_FyxVzIpp/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "The ones worthy to join the Rounds.",
                "line": 106,
                "start_time": "0-11-50.380000",
                "end_time": "0-11-53.040000",
                "url": "https://drive.google.com/file/d/1gVntXDhNihrS3v73vS0fJxZLc6Q-1fPb/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "Let me show you...",
                "line": 107,
                "start_time": "0-11-57.670000",
                "end_time": "0-11-59.630000",
                "url": "https://drive.google.com/file/d/1_-nOpKrX86uPyVaeLWbVOR4zteKusWgb/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "almighty power!",
                "line": 108,
                "start_time": "0-12-01.040000",
                "end_time": "0-12-02.830000",
                "url": "https://drive.google.com/file/d/1VPf8BNja5y9Wcl5LR2umuA28e4zgdeZ2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "How unsightly.",
                "line": 109,
                "start_time": "0-12-14.040000",
                "end_time": "0-12-15.330000",
                "url": "https://drive.google.com/file/d/1RkTpwB25G2YKiS0p1Wg1zxM6H-Otbk3v/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "If that's the best you can do, don't claim to be almighty.",
                "line": 110,
                "start_time": "0-12-31.130000",
                "end_time": "0-12-33.630000",
                "url": "https://drive.google.com/file/d/1njumOQDSmIE2-cVTwizEDyhrOo4_7ktZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "That's blasphemy against the almighty.",
                "line": 111,
                "start_time": "0-12-34.880000",
                "end_time": "0-12-37.170000",
                "url": "https://drive.google.com/file/d/1JD-aLlNl2b6v_bYwybFpYsABvJKGOh1m/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "Dammit...",
                "line": 112,
                "start_time": "0-12-44.880000",
                "end_time": "0-12-45.920000",
                "url": "https://drive.google.com/file/d/1xAikHj7ILE0GUAGCbb60zhaHOCezA-zP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "There is no road to almightiness for those using borrowed strength.",
                "line": 113,
                "start_time": "0-12-56.080000",
                "end_time": "0-12-59.580000",
                "url": "https://drive.google.com/file/d/1-qPB1Yo2hErj2Khd3RPGLX4oW1tjMP-g/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "None!",
                "line": 114,
                "start_time": "0-12-59.880000",
                "end_time": "0-13-01.080000",
                "url": "https://drive.google.com/file/d/1Rqn_0bRDsjuyZEbnB0nBqQxYeVPvFpzD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Playtime is over.",
                "line": 115,
                "start_time": "0-13-11.170000",
                "end_time": "0-13-12.830000",
                "url": "https://drive.google.com/file/d/1AOYbHP9Prinnj5Q1lBF5Oh7UxgxFkXVW/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "What is all this?",
                "line": 116,
                "start_time": "0-13-17.920000",
                "end_time": "0-13-19.380000",
                "url": "https://drive.google.com/file/d/1OPhqUC6p6IbGRsOdSOB0dZbrVWS2fp6L/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "Is this magic?",
                "line": 117,
                "start_time": "0-13-20.330000",
                "end_time": "0-13-22.170000",
                "url": "https://drive.google.com/file/d/10FRhKiM3OolbMpu_VXo2cDbTksd8nhRo/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "But it's so...",
                "line": 118,
                "start_time": "0-13-22.670000",
                "end_time": "0-13-24.040000",
                "url": "https://drive.google.com/file/d/1PHEoJle1WKZq-u1jFwgT6hWjfmqip4Fe/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "A single person could never-",
                "line": 119,
                "start_time": "0-13-24.040000",
                "end_time": "0-13-25.670000",
                "url": "https://drive.google.com/file/d/1T4UBI3Mk9MqovurOZMMKC0dTdFVn7MxN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Once upon a time,",
                "line": 120,
                "start_time": "0-13-25.670000",
                "end_time": "0-13-26.960000",
                "url": "https://drive.google.com/file/d/13hU9SUBfpkyzDMw9fKDkNpHbZ0-5NXeE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "there was a man who wished to withstand a nuclear bomb.",
                "line": 121,
                "start_time": "0-13-27.210000",
                "end_time": "0-13-29.630000",
                "url": "https://drive.google.com/file/d/18jI748l9NutHC4jf5lec4fNjkKoCnPi9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "The man developed his muscles, honed his mind, perfected his skills.",
                "line": 122,
                "start_time": "0-13-29.630000",
                "end_time": "0-13-34.330000",
                "url": "https://drive.google.com/file/d/1BpXInBD6z8yrzChCtL522ndPUz_IsZNh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "However, there were yet heights he could not attain.",
                "line": 123,
                "start_time": "0-13-35.040000",
                "end_time": "0-13-38.710000",
                "url": "https://drive.google.com/file/d/1cJwM_WGWCgw8_mbJXMnGc_F-vOzUPozI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "But I couldn't allow myself to give up.",
                "line": 124,
                "start_time": "0-13-44.540000",
                "end_time": "0-13-48",
                "url": "https://drive.google.com/file/d/1nFdyk0w_yAZMaOmfWrn5i8RXqRrFOCzT/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "So after years upon years of training,",
                "line": 125,
                "start_time": "0-13-48.580000",
                "end_time": "0-13-50.750000",
                "url": "https://drive.google.com/file/d/1iNplcvadK3_mHSekLzyvCWEsB2nbG9NU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I arrived at a single solution.",
                "line": 126,
                "start_time": "0-13-50.750000",
                "end_time": "0-13-54.080000",
                "url": "https://drive.google.com/file/d/1LsYmH5aL-WzO4P9iWJcLDT0zQp2N1FVB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "If I don't want to be vaporized in a nuclear explosion...",
                "line": 127,
                "start_time": "0-13-55.460000",
                "end_time": "0-13-58",
                "url": "https://drive.google.com/file/d/1fF2Wx--WlPCJaMoLnidv8VjtQqFlpthA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I simply have to become nuclear myself.",
                "line": 128,
                "start_time": "0-13-59.040000",
                "end_time": "0-14-01.630000",
                "url": "https://drive.google.com/file/d/1iksGxY7xrCX09xiU-ENm6RScRoyhlVpa/view?usp=drivesdk"
            },
            {
                "name": "Zenon Griffey",
                "name_variant": "Zenon Griffey",
                "subtitle": "You're out of your mind!",
                "line": 129,
                "start_time": "0-14-04.540000",
                "end_time": "0-14-07.460000",
                "url": "https://drive.google.com/file/d/1jDCc2DYpclZJhFf8_rJHZ2j6No1Bq4RP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Let the true meaning of \"almighty\" be carved into your soul.",
                "line": 130,
                "start_time": "0-14-16.080000",
                "end_time": "0-14-19.460000",
                "url": "https://drive.google.com/file/d/1z7Lbm6zU43mnNJ3_wm-z8KcFn9hVElsJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "This is my almighty power.",
                "line": 131,
                "start_time": "0-14-21.670000",
                "end_time": "0-14-23.880000",
                "url": "https://drive.google.com/file/d/1Xj8M6ph_RoOg12Y1fxjn6FXgzb2-iGwX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I",
                "line": 132,
                "start_time": "0-14-25.420000",
                "end_time": "0-14-26.630000",
                "url": "https://drive.google.com/file/d/1E7_hvU1yjy2MFQesjdrFh02tPaZ3_rgE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I am",
                "line": 133,
                "start_time": "0-14-26.920000",
                "end_time": "0-14-28.130000",
                "url": "https://drive.google.com/file/d/18M65zoo203x71bmn9zq0cEWNQ7mWDWUh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I am atomic.",
                "line": 134,
                "start_time": "0-14-29.080000",
                "end_time": "0-14-31.130000",
                "url": "https://drive.google.com/file/d/1PgvIaLXJ6CF4pK2itQ2ouV94uoiUAkDr/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Alexia!",
                "line": 135,
                "start_time": "0-15-27.670000",
                "end_time": "0-15-28.880000",
                "url": "https://drive.google.com/file/d/1DRSmNFP7pRHBe_t5_tueA00dt63oInir/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Alexia!",
                "line": 136,
                "start_time": "0-16-26.130000",
                "end_time": "0-16-27.330000",
                "url": "https://drive.google.com/file/d/1XcTxySqMHoNkUXg3OB1ygYgG5rjCyve-/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Alexia!",
                "line": 137,
                "start_time": "0-16-34.040000",
                "end_time": "0-16-35.250000",
                "url": "https://drive.google.com/file/d/1LbP_4W6FJT2Ni_jQbwC_j7XF0HOFupUU/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I'm so glad you're all right!",
                "line": 138,
                "start_time": "0-16-37.330000",
                "end_time": "0-16-39",
                "url": "https://drive.google.com/file/d/1xaNj8OHF8_NkLBJzoTxPOjAH0BSEU5e4/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "So glad!",
                "line": 139,
                "start_time": "0-16-40.130000",
                "end_time": "0-16-41.460000",
                "url": "https://drive.google.com/file/d/1er2_riVVug0lBoHgsL58jLNWzEwHyaYA/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I-I'm sorry! Are my arms cold?",
                "line": 140,
                "start_time": "0-16-43.670000",
                "end_time": "0-16-46.040000",
                "url": "https://drive.google.com/file/d/1lSZaWx89VKbWVK4WXSCY2JhvfKmZ78Xw/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Thank you...",
                "line": 141,
                "start_time": "0-16-56.960000",
                "end_time": "0-16-58.170000",
                "url": "https://drive.google.com/file/d/16uuqt4EbE0503X7p1f7fWeyWtKZ0FcLB/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Iris.",
                "line": 142,
                "start_time": "0-17-00.420000",
                "end_time": "0-17-01.830000",
                "url": "https://drive.google.com/file/d/1ByEYwecdvx5POBbekf73eti1VwC4v19b/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "It seems like there's more to the plot than meets the eye,",
                "line": 143,
                "start_time": "0-17-13.670000",
                "end_time": "0-17-15.920000",
                "url": "https://drive.google.com/file/d/1F6tM8fLZ80q7UlyaAUiA-zhIHy0nI-is/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "but as far as the public is concerned, the case has been solved.",
                "line": 144,
                "start_time": "0-17-15.920000",
                "end_time": "0-17-18.670000",
                "url": "https://drive.google.com/file/d/1SlEiM0x0jHBeSZA4C2Sp38AD4Of4Ek5Y/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Wow, cool.",
                "line": 145,
                "start_time": "0-17-19.290000",
                "end_time": "0-17-21.460000",
                "url": "https://drive.google.com/file/d/1I_RZysSlzCBR4SAmCIajWK7aWWEpSK0R/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Guess I'm done here, then.",
                "line": 146,
                "start_time": "0-17-22.580000",
                "end_time": "0-17-23.830000",
                "url": "https://drive.google.com/file/d/1t3xuFRm44Hjrf2lpQrvUiu7eV60SkvGd/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "No, wait!",
                "line": 147,
                "start_time": "0-17-23.830000",
                "end_time": "0-17-25.040000",
                "url": "https://drive.google.com/file/d/1H5KQRuwW9m7IdenlAg3pehmZLFT2-oMW/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Um...",
                "line": 148,
                "start_time": "0-17-27",
                "end_time": "0-17-28.210000",
                "url": "https://drive.google.com/file/d/1m_kvLio06IqZTyD6fMH93uJQhnMtD5y0/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "There's something I wanted to talk about.",
                "line": 149,
                "start_time": "0-17-28.210000",
                "end_time": "0-17-30.210000",
                "url": "https://drive.google.com/file/d/1a3ywWvqkd_0p_zjXnv5lMSnUeNeDKBjV/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "You told me you liked my fencing style, remember?",
                "line": 150,
                "start_time": "0-17-30.790000",
                "end_time": "0-17-34.460000",
                "url": "https://drive.google.com/file/d/1CM42KRirIqY-gZ69nA_3lD7KadmTAvjL/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Maybe it's a little late to say this, but...",
                "line": 151,
                "start_time": "0-17-35.790000",
                "end_time": "0-17-37.210000",
                "url": "https://drive.google.com/file/d/1D9SM68fO1I7IYPwBA8Y68TYiV6q0hmQ6/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Thank you.",
                "line": 152,
                "start_time": "0-17-37.580000",
                "end_time": "0-17-38.790000",
                "url": "https://drive.google.com/file/d/1n9Rb5exgDxnHW8bxy3jWS8iFnsqWYFFP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You're welcome, I guess.",
                "line": 153,
                "start_time": "0-17-39.580000",
                "end_time": "0-17-41.040000",
                "url": "https://drive.google.com/file/d/16pPSBbzRN-3M6sTG0W3aHmpoKoacyOrZ/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I've finally learned to like my sword style.",
                "line": 154,
                "start_time": "0-17-41.380000",
                "end_time": "0-17-44.500000",
                "url": "https://drive.google.com/file/d/1JOlIVhTKILdubHh29f21yrv1uK-z8Swq/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Not because of you, though.",
                "line": 155,
                "start_time": "0-17-45",
                "end_time": "0-17-46.960000",
                "url": "https://drive.google.com/file/d/1UrpJmrd9WEEUWRoeN9xtMUvtXGvSUo_Y/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I think you could have left that last part out, don't you?",
                "line": 156,
                "start_time": "0-17-47.420000",
                "end_time": "0-17-49.670000",
                "url": "https://drive.google.com/file/d/1sw8LKBKz4GNNx2JgkGW08F8zA1s1sY_E/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Well, it's true.",
                "line": 157,
                "start_time": "0-17-50.920000",
                "end_time": "0-17-52.330000",
                "url": "https://drive.google.com/file/d/1kVrPE0flkeYB3I0x4wFPsvuW10DfQFRi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Anyway, I'm out.",
                "line": 158,
                "start_time": "0-17-54.670000",
                "end_time": "0-17-55.880000",
                "url": "https://drive.google.com/file/d/1QWX6QIr2HesiYjTw0A_wxm8E66rWHOTx/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Wait!",
                "line": 159,
                "start_time": "0-17-55.880000",
                "end_time": "0-17-56.880000",
                "url": "https://drive.google.com/file/d/1VERrxakHe1aQaZqfgdTD6SuauKNp0xiF/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I mean...",
                "line": 160,
                "start_time": "0-17-57.790000",
                "end_time": "0-17-59",
                "url": "https://drive.google.com/file/d/111F3CDwX0uR5bjUcNSyg6hkyqreEKcY8/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "We've been pretending to be a couple for a while now.",
                "line": 161,
                "start_time": "0-17-59.330000",
                "end_time": "0-18-03.460000",
                "url": "https://drive.google.com/file/d/1GgvKOXzpvqJMnhpm9AIeZO4ad6d_qU7b/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "And during the incident...",
                "line": 162,
                "start_time": "0-18-04.380000",
                "end_time": "0-18-06.040000",
                "url": "https://drive.google.com/file/d/15Ib34ch7ERm9imIbrHLWd7Ax-MoKXIiC/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Zenon kindly got himself killed.",
                "line": 163,
                "start_time": "0-18-06.460000",
                "end_time": "0-18-08.880000",
                "url": "https://drive.google.com/file/d/1TMtdACDD3u_zLLpQEsR-ipqyHdJMVQxH/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "So if you're interested...",
                "line": 164,
                "start_time": "0-18-10.500000",
                "end_time": "0-18-13.790000",
                "url": "https://drive.google.com/file/d/1Dc9xxiwRt3KBER8yQMfEyy7Bql34lobL/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I was thinking maybe we could try to keep this relationship going a little longer.",
                "line": 165,
                "start_time": "0-18-16.380000",
                "end_time": "0-18-21.210000",
                "url": "https://drive.google.com/file/d/1htjtcdqi2OF8dm92-u_CZlVrAK85BC3d/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm gonna have to say no.",
                "line": 166,
                "start_time": "0-18-28.080000",
                "end_time": "0-18-29.460000",
                "url": "https://drive.google.com/file/d/1CWH6vi4LRf8HqfbIEkNN8SzORvr2uBRS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Later, massive amounts of blood were discovered behind the school building,",
                "line": 167,
                "start_time": "0-18-40.500000",
                "end_time": "0-18-44",
                "url": "https://drive.google.com/file/d/1G3o8Ao0Jqi_62cm9-fnc7P4tPMtkMz6E/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "but no body was found in the vicinity,",
                "line": 168,
                "start_time": "0-18-44.250000",
                "end_time": "0-18-46.540000",
                "url": "https://drive.google.com/file/d/1H2e7YktrRtOagRZMHoJ2O1eNIpLdBM-X/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "and no students or faculty were reported to be injured or missing.",
                "line": 169,
                "start_time": "0-18-46.540000",
                "end_time": "0-18-51.330000",
                "url": "https://drive.google.com/file/d/1TgDh7phl7vgsbp6wkhZF32CXGr9WKvwG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "This incident would eventually go on to become one of the school's seven mysteries:",
                "line": 170,
                "start_time": "0-18-51.920000",
                "end_time": "0-18-55.710000",
                "url": "https://drive.google.com/file/d/1ojTNg0HXPVkgeHq7nI-z9sc-FG70yhpM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The Bodiless Murder.",
                "line": 171,
                "start_time": "0-18-55.710000",
                "end_time": "0-18-58.290000",
                "url": "https://drive.google.com/file/d/1dt4HhEbclEPiacxkd3ARMTcjdqzc2aTQ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "The Cult facility where they were holding Princess Alexia captive",
                "line": 172,
                "start_time": "0-19-01.830000",
                "end_time": "0-19-05.250000",
                "url": "https://drive.google.com/file/d/1ylujlBsmulw4OMsLcJzltG-PQbrqza90/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "was destroyed by Lord Shadow.",
                "line": 173,
                "start_time": "0-19-05.250000",
                "end_time": "0-19-07.250000",
                "url": "https://drive.google.com/file/d/1iqJgwYwD8v3fN1AMDwFPLPomJJpkt-0q/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Zenon Griffey evaporated without a trace. That is my report.",
                "line": 174,
                "start_time": "0-19-07.710000",
                "end_time": "0-19-11.420000",
                "url": "https://drive.google.com/file/d/18_gpi4MgF0bq6FnY2juJHAdbvKXvDlPN/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "The Boss is almighty...",
                "line": 175,
                "start_time": "0-19-12.460000",
                "end_time": "0-19-15.380000",
                "url": "https://drive.google.com/file/d/1shZi_iqdQc1RdC8QnvkO41CEDt5Y4-hV/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Truly, it was a beautiful light.",
                "line": 176,
                "start_time": "0-19-15.710000",
                "end_time": "0-19-18.790000",
                "url": "https://drive.google.com/file/d/1MusM61KKQ5qaKm6wQ21ySsr2tXc4Uent/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "The entire Royal Capital bathed in the glow of Lord Shadow's magic...",
                "line": 177,
                "start_time": "0-19-19.420000",
                "end_time": "0-19-22.670000",
                "url": "https://drive.google.com/file/d/1sPMdNkGMWzFHJs-6d_UvTPrMd9HtnMWn/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It was like looking at a heavenly paradise.",
                "line": 178,
                "start_time": "0-19-23.130000",
                "end_time": "0-19-26.040000",
                "url": "https://drive.google.com/file/d/1trfdT87HBQpR_oDaMO2VXaWEZ9zBZIG-/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I hope they've learned their lesson.",
                "line": 179,
                "start_time": "0-19-26.290000",
                "end_time": "0-19-29.170000",
                "url": "https://drive.google.com/file/d/1MtpEYVnQ5BLDYbc6iNK9FkuSY_PhDJEh/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "They should know that they are merely prey to be hunted.",
                "line": 180,
                "start_time": "0-19-29.420000",
                "end_time": "0-19-32.920000",
                "url": "https://drive.google.com/file/d/1okivb0ro9qpcZ1j5kcaci_l_v3mEszdb/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "One day, all of our enemies will vanish in that light.",
                "line": 181,
                "start_time": "0-19-33.500000",
                "end_time": "0-19-36.960000",
                "url": "https://drive.google.com/file/d/1aJVm2RNknsYqs-ZtarxERvqzTWNHJAT4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "When that day comes...",
                "line": 182,
                "start_time": "0-19-37.080000",
                "end_time": "0-19-38.500000",
                "url": "https://drive.google.com/file/d/15JaULvBc4B3xmKa0JjKC3B7Tm64IhDqe/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Shall we continue?",
                "line": 183,
                "start_time": "0-19-42.210000",
                "end_time": "0-19-43.540000",
                "url": "https://drive.google.com/file/d/1_f1eCmVMIHKE3vJM5bXDPaWv888K1kC_/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes.",
                "line": 184,
                "start_time": "0-19-43.540000",
                "end_time": "0-19-44.630000",
                "url": "https://drive.google.com/file/d/1y9BQiyaPcvbNniZhEVEBBTi9wit8991s/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Zeta has reported in. She has found the target.",
                "line": 185,
                "start_time": "0-19-44.630000",
                "end_time": "0-19-46.790000",
                "url": "https://drive.google.com/file/d/18r7DROqMfO2fnXh-xtOLEBtW0NUvLya0/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "She says she's going to get closer and investigate.",
                "line": 186,
                "start_time": "0-19-46.790000",
                "end_time": "0-19-49.130000",
                "url": "https://drive.google.com/file/d/18qFggIDsyxQ9RkGVj7LRBlbXhGuMrdF5/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'll be expecting good news.",
                "line": 187,
                "start_time": "0-19-49.130000",
                "end_time": "0-19-50.670000",
                "url": "https://drive.google.com/file/d/1PlvY_ZgotB3X4fDQxmxB1wR-Ny_V1Kfb/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "And here is a research report from Eta.",
                "line": 188,
                "start_time": "0-19-51.170000",
                "end_time": "0-19-53.630000",
                "url": "https://drive.google.com/file/d/1VfNU1SZpo0Douf7hmhGzTKXpM6k1QXy1/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It seems to be going smoothly.",
                "line": 189,
                "start_time": "0-19-53.880000",
                "end_time": "0-19-55.290000",
                "url": "https://drive.google.com/file/d/1MSIyrEK-6-8CPf_gYu9fuKSsk5YnA5PD/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "And finally, we have a pressing issue.",
                "line": 190,
                "start_time": "0-19-56.790000",
                "end_time": "0-19-59.500000",
                "url": "https://drive.google.com/file/d/1nvwejSr-jRrfX0eJJHpEvFi39bHXCQ1e/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "This.",
                "line": 191,
                "start_time": "0-20-00.880000",
                "end_time": "0-20-02.080000",
                "url": "https://drive.google.com/file/d/1eaqIzRXW2lo3UdNdmvP46drqE7YC6JJD/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "They're fools to call themselves by our name.",
                "line": 192,
                "start_time": "0-20-06.130000",
                "end_time": "0-20-08.630000",
                "url": "https://drive.google.com/file/d/1FaugfN8XEWK9lBZG9ubSpebI28At1M2B/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Although they do seem to be covering their tracks rather well.",
                "line": 193,
                "start_time": "0-20-09.250000",
                "end_time": "0-20-12.170000",
                "url": "https://drive.google.com/file/d/1_rzUZPwbh-LWtXtUZvZNUy8rKk2-lJSC/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "They cannot escape our all-searching eye.",
                "line": 194,
                "start_time": "0-20-12.790000",
                "end_time": "0-20-15.500000",
                "url": "https://drive.google.com/file/d/1OVX_T2k2lo8oudH_URruR9kUO7uI8b48/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "It's not possible.",
                "line": 195,
                "start_time": "0-20-15.500000",
                "end_time": "0-20-16.960000",
                "url": "https://drive.google.com/file/d/1czWeHLlOMHBBtRm5KwfNYFu2wtJ_El3z/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "The Cult of Diablos, and Shadow Garden...",
                "line": 196,
                "start_time": "0-20-24.790000",
                "end_time": "0-20-28",
                "url": "https://drive.google.com/file/d/1rHbCVsf1GwDSn_doRMCydjC_H9HDSCiS/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "There may be something at work somewhere,",
                "line": 197,
                "start_time": "0-20-28.460000",
                "end_time": "0-20-31",
                "url": "https://drive.google.com/file/d/1fvhL9H_p0gAdWE62AMi7ywjYridlL3kb/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "somewhere beyond our grasp.",
                "line": 198,
                "start_time": "0-20-31",
                "end_time": "0-20-33.460000",
                "url": "https://drive.google.com/file/d/1zq9V2EN9NykLrFv7sKddZUEAQAq6hEC7/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "However...",
                "line": 199,
                "start_time": "0-20-33.880000",
                "end_time": "0-20-35.080000",
                "url": "https://drive.google.com/file/d/1PbNr8wGZhJEHI1X0S3HVI6SZ6Zr4TcZH/view?usp=drivesdk"
            },
            {
                "name": "Glen",
                "name_variant": "Glen",
                "subtitle": "Do you suspect the Knight Order?",
                "line": 200,
                "start_time": "0-20-35.330000",
                "end_time": "0-20-37.830000",
                "url": "https://drive.google.com/file/d/1dwWXXhEoar8g-szqlbT9QHqwk8tnTJRZ/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Our kingdom's most renowned sword instructor was an adherent of the Cult of Diablos.",
                "line": 201,
                "start_time": "0-20-39.040000",
                "end_time": "0-20-44.790000",
                "url": "https://drive.google.com/file/d/1LNvmF5EJEdxOg-w65FjhOMPhD99GNNK9/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Considering that fact...",
                "line": 202,
                "start_time": "0-20-45.380000",
                "end_time": "0-20-46.960000",
                "url": "https://drive.google.com/file/d/1bccH2s-xG7_c-QZDiD_xL_2x6rNu6WDV/view?usp=drivesdk"
            },
            {
                "name": "Glen",
                "name_variant": "Glen",
                "subtitle": "Then we follow the plan?",
                "line": 203,
                "start_time": "0-20-50.500000",
                "end_time": "0-20-53.290000",
                "url": "https://drive.google.com/file/d/1D5KNQOo9EZInwAoE_4Eno0mxF8T9Pl35/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I will put together a new investigation team.",
                "line": 204,
                "start_time": "0-20-54.580000",
                "end_time": "0-20-57.040000",
                "url": "https://drive.google.com/file/d/19djM5O6TSECuP9e0WHOmmGxHIrYxXM9k/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Glen...",
                "line": 205,
                "start_time": "0-20-57.630000",
                "end_time": "0-20-58.630000",
                "url": "https://drive.google.com/file/d/1ddCC83kBfNjIsI1ShVdc0ncHzzVAV-H3/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Marco...",
                "line": 206,
                "start_time": "0-20-58.630000",
                "end_time": "0-20-59.630000",
                "url": "https://drive.google.com/file/d/1NcphsoHGDsXSbM-6uQ538Jus3PLBpuU1/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I trust both of you with all my heart.",
                "line": 207,
                "start_time": "0-20-59.630000",
                "end_time": "0-21-02.500000",
                "url": "https://drive.google.com/file/d/1Q4fPJ8zb6Qih4UnLrNE-O5FrV5MMuDb2/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I would like you to be a part of it.",
                "line": 208,
                "start_time": "0-21-02.500000",
                "end_time": "0-21-04.080000",
                "url": "https://drive.google.com/file/d/1hJYQFyjPRp5o2lQO2QnPiKRyA92pcSad/view?usp=drivesdk"
            },
            {
                "name": "Glen",
                "name_variant": "Glen",
                "subtitle": "If that is your command.",
                "line": 209,
                "start_time": "0-21-04.790000",
                "end_time": "0-21-06.380000",
                "url": "https://drive.google.com/file/d/1f1QCtNZrnF398J_iY86_V2cmFA_T3xJ_/view?usp=drivesdk"
            },
            {
                "name": "Marco Granger",
                "name_variant": "Marco Granger",
                "subtitle": "I-I would be honored!",
                "line": 210,
                "start_time": "0-21-07.170000",
                "end_time": "0-21-08.750000",
                "url": "https://drive.google.com/file/d/1o3sIpHl6_3kUgji9EoCHzs8N5qIzjeyb/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Thank you.",
                "line": 211,
                "start_time": "0-21-09.330000",
                "end_time": "0-21-10.580000",
                "url": "https://drive.google.com/file/d/191yyWtIvoi6EVopI_7h30az1cG8ivMO4/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Right now, this is our only clue.",
                "line": 212,
                "start_time": "0-21-11.580000",
                "end_time": "0-21-14.040000",
                "url": "https://drive.google.com/file/d/1OEx7aHA2bpVSW1Bt0RdjlYUlykfCmmEX/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "First, we'll need to find someone who can decipher its functions.",
                "line": 213,
                "start_time": "0-21-15",
                "end_time": "0-21-19.170000",
                "url": "https://drive.google.com/file/d/1WubbA4c2os1n4HgsOsq9kN3d1vtgdtJ4/view?usp=drivesdk"
            },
            {
                "name": "Sherry Barnett",
                "name_variant": "Sherry Barnett",
                "subtitle": "This, \"was\"... \"ed\",",
                "line": 214,
                "start_time": "0-21-20.750000",
                "end_time": "0-21-23.460000",
                "url": "https://drive.google.com/file/d/1GhNCRoVXOvHoybFDVGSfAREI2JQ9USJw/view?usp=drivesdk"
            },
            {
                "name": "Sherry Barnett",
                "name_variant": "Sherry Barnett",
                "subtitle": "And... \"if\"?",
                "line": 215,
                "start_time": "0-21-23.920000",
                "end_time": "0-21-25.250000",
                "url": "https://drive.google.com/file/d/1VmsLOvd-1Ah6Fhg3YIkisBHhH2CkKLbM/view?usp=drivesdk"
            },
            {
                "name": "Sherry Barnett",
                "name_variant": "Sherry Barnett",
                "subtitle": "\"If you wish\"?",
                "line": 216,
                "start_time": "0-21-25.630000",
                "end_time": "0-21-27.290000",
                "url": "https://drive.google.com/file/d/1tOjrTMMXiJa8sPE_0Y9NJkKpYoHlAT3r/view?usp=drivesdk"
            },
            {
                "name": "Sherry Barnett",
                "name_variant": "Sherry Barnett",
                "subtitle": "\"Do\"... \"to\"...",
                "line": 217,
                "start_time": "0-21-28.040000",
                "end_time": "0-21-29.500000",
                "url": "https://drive.google.com/file/d/1HFdjT4-fzV774N8BArJSdh3MSjO8VI0i/view?usp=drivesdk"
            },
            {
                "name": "Sherry Barnett",
                "name_variant": "Sherry Barnett",
                "subtitle": "Together, \"grate\"?",
                "line": 218,
                "start_time": "0-21-30.380000",
                "end_time": "0-21-32.330000",
                "url": "https://drive.google.com/file/d/1ABdGGy5yLEaIDYzcGgQ6OZn6HLWfR6U-/view?usp=drivesdk"
            },
            {
                "name": "Sherry Barnett",
                "name_variant": "Sherry Barnett",
                "subtitle": "\"Val\"... \"you\"...",
                "line": 219,
                "start_time": "0-21-32.330000",
                "end_time": "0-21-34.330000",
                "url": "https://drive.google.com/file/d/1lct_LGCRknLhVCNfX2UvbjTQRbCwF2t2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That girl is definitely not a princess.",
                "line": 220,
                "start_time": "0-21-35.460000",
                "end_time": "0-21-37.960000",
                "url": "https://drive.google.com/file/d/1Uk7VwHEtdEvM46da7DRBwyq_AivX1oHy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "She's a natural born killing machine.",
                "line": 221,
                "start_time": "0-21-37.960000",
                "end_time": "0-21-39.920000",
                "url": "https://drive.google.com/file/d/19CRWp6iqRZvVRLkiq3ubI2gW-5uCfwP2/view?usp=drivesdk"
            },
            {
                "name": "Sherry Barnett",
                "name_variant": "Sherry Barnett",
                "subtitle": "Ow....",
                "line": 222,
                "start_time": "0-21-43.750000",
                "end_time": "0-21-45.080000",
                "url": "https://drive.google.com/file/d/1u9LaKF01UP0hC8i24ojVX2fjWYf3E8e8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Are you okay?",
                "line": 223,
                "start_time": "0-21-55.710000",
                "end_time": "0-21-56.920000",
                "url": "https://drive.google.com/file/d/1JQ29nsP2ZPP7kBTeWeIccYb0cwM1eNP0/view?usp=drivesdk"
            }
        ]
    }
}

let setDoc = db.collection('data').doc('an_s1_e6').set(data['s1']);

//let setDoc = db.collection('data').doc('ssc_p2_c3-4').set(data['p3']['c3-4']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
