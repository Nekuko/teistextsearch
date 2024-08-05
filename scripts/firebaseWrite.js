const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "s2": {
        "e10": [
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Lambda!",
                "line": 1,
                "start_time": "0-00-13.200000",
                "end_time": "0-00-14.410000",
                "url": "https://drive.google.com/file/d/18eqXyNtAjnZnqNKZl7HX4W5kqMIMMroK/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Oh, it's you.",
                "line": 2,
                "start_time": "0-00-15.330000",
                "end_time": "0-00-16.540000",
                "url": "https://drive.google.com/file/d/1LPfWL_JozwyVJ6clPihvnOe78465_tRj/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "I'm guessing the fact that you're here means that this is all the reinforcements?",
                "line": 3,
                "start_time": "0-00-16.750000",
                "end_time": "0-00-20.500000",
                "url": "https://drive.google.com/file/d/1PMtohQaTpytZFNThiqRM4HykGuk6ZCi1/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "No, I'm going right back to organize the next batch.",
                "line": 4,
                "start_time": "0-00-20.670000",
                "end_time": "0-00-23.090000",
                "url": "https://drive.google.com/file/d/1h6tV5dTNGe3bW0HJlH0oUbf0nHzY33zK/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "There was just something I wanted to confirm with people on-site.",
                "line": 5,
                "start_time": "0-00-24.250000",
                "end_time": "0-00-27.510000",
                "url": "https://drive.google.com/file/d/19fixDZdrS_-K7_5UjgSNOIgdSzAl_pnw/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "And that is?",
                "line": 6,
                "start_time": "0-00-27.800000",
                "end_time": "0-00-28.090000",
                "url": "https://drive.google.com/file/d/1ndhSLPQMBEayeegfnSOxqMJGaOFQvbeb/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Number 666...",
                "line": 7,
                "start_time": "0-00-29.180000",
                "end_time": "0-00-30.510000",
                "url": "https://drive.google.com/file/d/1f0gG8b1Dtg8vrlt7__ISOZ09BhafAHxV/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Princess Rose Oriana?",
                "line": 8,
                "start_time": "0-00-30.970000",
                "end_time": "0-00-32.680000",
                "url": "https://drive.google.com/file/d/1xi02lxZ4TXczXQllfZ4dwESb_k8pnT3O/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "I heard that she took it upon herself to join up with the enemy.",
                "line": 9,
                "start_time": "0-00-32.680000",
                "end_time": "0-00-35.060000",
                "url": "https://drive.google.com/file/d/1lCK-pxQncwYKhk1ADZMZ94k14RWBy-_9/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "It was a perfect storm of unfavorable conditions.",
                "line": 10,
                "start_time": "0-00-35.350000",
                "end_time": "0-00-37.810000",
                "url": "https://drive.google.com/file/d/1J1GgM9kqoqNlA9y7YmQ6oAApZ1fUZIwb/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "It may be a little harsh to call what she did \"betrayal.\"",
                "line": 11,
                "start_time": "0-00-37.810000",
                "end_time": "0-00-41.060000",
                "url": "https://drive.google.com/file/d/1o9UyRE7LfK6LEB4gbMduTBJ7V-sF8KLA/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "I see.",
                "line": 12,
                "start_time": "0-00-41.060000",
                "end_time": "0-00-42.270000",
                "url": "https://drive.google.com/file/d/1VKWKynSaf_q6guBp4VMur_dQiLlHK7Qh/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "But the fact remains that her insubordination put her teammates in danger.",
                "line": 13,
                "start_time": "0-00-42.270000",
                "end_time": "0-00-46.280000",
                "url": "https://drive.google.com/file/d/1kos55kwOokE03aavnn7XF6V1AfpMmaJa/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "I was her instructor.",
                "line": 14,
                "start_time": "0-00-46.570000",
                "end_time": "0-00-48.700000",
                "url": "https://drive.google.com/file/d/1Mrc_8NvocoXhp_me1LH1o1zwfphDg0lI/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "If the organization is to render judgment on her, then the least I can do is carry it out myself.",
                "line": 15,
                "start_time": "0-00-48.950000",
                "end_time": "0-00-54.080000",
                "url": "https://drive.google.com/file/d/16kBcJZbD3-dYLglghqymT843L_L_jbOm/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Unfortunately, that won't be possible.",
                "line": 16,
                "start_time": "0-00-54.490000",
                "end_time": "0-00-56.240000",
                "url": "https://drive.google.com/file/d/1Vxe7x_lNSh-wegx0AaJ6Y8UV9BtBcyLi/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Not even the Seven Shadows have authority over this matter anymore.",
                "line": 17,
                "start_time": "0-00-56.240000",
                "end_time": "0-00-59.500000",
                "url": "https://drive.google.com/file/d/1-3rsyX1vByISS2gBw_GOY1Y_M_gWhmdJ/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Not even the Seven Shadows?",
                "line": 18,
                "start_time": "0-00-59.500000",
                "end_time": "0-01-01.120000",
                "url": "https://drive.google.com/file/d/1ovvjVKoU1jAvGbBbxDvcAsssOiZQ6VRG/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "You don't mean...",
                "line": 19,
                "start_time": "0-01-01.420000",
                "end_time": "0-01-02.670000",
                "url": "https://drive.google.com/file/d/1_ti6OhgI4wU0BggzxAHvE_p39aGAmTwA/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Our fearless leader, Lord Shadow himself?",
                "line": 20,
                "start_time": "0-01-03.130000",
                "end_time": "0-01-05.460000",
                "url": "https://drive.google.com/file/d/11Q-fvINYpC8v5TOEG3hTNy3lZPz9t3TJ/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Lord Shadow has rendered merciless judgment on all who have stood against us.",
                "line": 21,
                "start_time": "0-01-05.840000",
                "end_time": "0-01-10.300000",
                "url": "https://drive.google.com/file/d/1fuJ4mUoQlA7__PryergqpANm0Iqs2eCf/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "No power or authority can stop him.",
                "line": 22,
                "start_time": "0-01-10.300000",
                "end_time": "0-01-12.260000",
                "url": "https://drive.google.com/file/d/1AnTQmZfK5d77C6o6Qxn29Yu4BTs27zxk/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "It is all meaningless before him.",
                "line": 23,
                "start_time": "0-01-12.260000",
                "end_time": "0-01-14.760000",
                "url": "https://drive.google.com/file/d/1HfhKhlX01YwLamHhcjWKfTpQ5kr0KpPo/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "I agree that the princess's behavior was problematic,",
                "line": 24,
                "start_time": "0-01-15.100000",
                "end_time": "0-01-18.060000",
                "url": "https://drive.google.com/file/d/1fcKLGD1CxPZ-Cai5UzCBvqHvKRvEGqgY/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "but that's just too...",
                "line": 25,
                "start_time": "0-01-18.060000",
                "end_time": "0-01-19.520000",
                "url": "https://drive.google.com/file/d/18bTkZlTlUJI_TmV3WOyT_1LkOPbSvBvM/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "No...",
                "line": 26,
                "start_time": "0-01-20.140000",
                "end_time": "0-01-21.350000",
                "url": "https://drive.google.com/file/d/1cL3i_1QGZDJgCcTPGUSmAppHn1EDZnsI/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "No one in the world could ever defy his magnificent will.",
                "line": 27,
                "start_time": "0-01-21.640000",
                "end_time": "0-01-25.610000",
                "url": "https://drive.google.com/file/d/1aLD4xxbgUDTd-_1e11q_X7JfHAP2m0df/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "I have no doubt the princess will meet a fitting end.",
                "line": 28,
                "start_time": "0-01-25.610000",
                "end_time": "0-01-28.940000",
                "url": "https://drive.google.com/file/d/1mVjkq4qvHDga-22lDIwh9UW2lToTUI-Z/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Then there is no longer anything we can do?",
                "line": 29,
                "start_time": "0-01-32.740000",
                "end_time": "0-01-36.450000",
                "url": "https://drive.google.com/file/d/1Km2bGRUeRNpuLBwIhbudMmD2NIjJ9fsb/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "What makes those barbarians think",
                "line": 30,
                "start_time": "0-03-10.550000",
                "end_time": "0-03-11.920000",
                "url": "https://drive.google.com/file/d/1mlSxxDXz6n5hX6I3pqaK8C8qQvzSnCcv/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "they can throw their weight around here?",
                "line": 31,
                "start_time": "0-03-11.920000",
                "end_time": "0-03-13.720000",
                "url": "https://drive.google.com/file/d/1xirUKsh8PviAnHHUGteUnFYsRSxbLCZ0/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "It's all because of that father-murdering princess.",
                "line": 32,
                "start_time": "0-03-13.720000",
                "end_time": "0-03-16.180000",
                "url": "https://drive.google.com/file/d/1O90_a0HXMQRoYQp2dtutwY7bAbDd7OW2/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "Prices have all gone up, my ma's cooking tastes like crap.",
                "line": 33,
                "start_time": "0-03-16.510000",
                "end_time": "0-03-19.100000",
                "url": "https://drive.google.com/file/d/1RjkQiS_UDOIwQVhWErC2wt78uKtaDQOU/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "All 'cause of that damn princess.",
                "line": 34,
                "start_time": "0-03-19.100000",
                "end_time": "0-03-20.760000",
                "url": "https://drive.google.com/file/d/1CfzKGJo9mqPsu7J_XIUvoYI0H30ObaH3/view?usp=drivesdk"
            },
            {
                "name": "Civilian",
                "name_variant": "Civilian",
                "subtitle": "She really needs to pay.",
                "line": 35,
                "start_time": "0-03-21.060000",
                "end_time": "0-03-22.560000",
                "url": "https://drive.google.com/file/d/1kiRwv9jIGs4pEzYHs8EMWuPFqr7D-AXy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"Rose Oriana...",
                "line": 36,
                "start_time": "0-03-22.930000",
                "end_time": "0-03-24.390000",
                "url": "https://drive.google.com/file/d/1BqO37DEFxRE4YGM9l68hLepi7RJTBExo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I adamantly oppose your marriage!\"",
                "line": 37,
                "start_time": "0-03-25.390000",
                "end_time": "0-03-27.310000",
                "url": "https://drive.google.com/file/d/1DAT8PQnxR5hR_aBnlltjwTIDoBrwQ7NG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That's a good line.",
                "line": 38,
                "start_time": "0-03-27.690000",
                "end_time": "0-03-29.110000",
                "url": "https://drive.google.com/file/d/1TPNYGOn5W3LsuA-LtF6sKbFZ7w0Lt6aQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But it's broad daylight, so appearing from the sky isn't exactly...",
                "line": 39,
                "start_time": "0-03-29.110000",
                "end_time": "0-03-32.320000",
                "url": "https://drive.google.com/file/d/1KV72dq06xfOS4OWR-HryqlIJ4nbigKpM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "This calls for a quick hop over the gate.",
                "line": 40,
                "start_time": "0-03-32.570000",
                "end_time": "0-03-35.150000",
                "url": "https://drive.google.com/file/d/19EbjsQ5eyxjTKJqpeRbeilozQOmEENV3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Now is the time for my polished teleportation skills to shine.",
                "line": 41,
                "start_time": "0-03-35.400000",
                "end_time": "0-03-38.570000",
                "url": "https://drive.google.com/file/d/18H_Wjf8XmWjNshYRFa5BNjRxwNeH8XSi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So onward, to-",
                "line": 42,
                "start_time": "0-03-39.070000",
                "end_time": "0-03-39.450000",
                "url": "https://drive.google.com/file/d/1utseNNu9U6k-qrhMTiKfhoe5hkGlkZqG/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "Lord Shadow!",
                "line": 43,
                "start_time": "0-03-39.450000",
                "end_time": "0-03-40.660000",
                "url": "https://drive.google.com/file/d/1nXvoSHXURn2ib47nzuwqXI42eru8z2PM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So onward, to-",
                "line": 43,
                "start_time": "0-03-39.450000",
                "end_time": "0-03-40.660000",
                "url": "https://drive.google.com/file/d/1nXvoSHXURn2ib47nzuwqXI42eru8z2PM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "I mean, Cid!",
                "line": 44,
                "start_time": "0-03-40.660000",
                "end_time": "0-03-41.870000",
                "url": "https://drive.google.com/file/d/1w_ikjTs-brqrK6MH2kICqQzHPvznP9_y/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "Cid, it's good to see you again!",
                "line": 45,
                "start_time": "0-03-42.160000",
                "end_time": "0-03-43.120000",
                "url": "https://drive.google.com/file/d/1Rrsegoin1rd8lEKPUCX-rzBImpBf54P8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Epsilon, what a coincidence.",
                "line": 46,
                "start_time": "0-03-44.330000",
                "end_time": "0-03-46.460000",
                "url": "https://drive.google.com/file/d/1yaSq6_AGwWV793CqK_LKLut6jwGnsLP9/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "I know, right?",
                "line": 47,
                "start_time": "0-03-46.460000",
                "end_time": "0-03-47.670000",
                "url": "https://drive.google.com/file/d/1_GjhJUbzcQov79q-jy08lFnvuY1psGOe/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "Are you here about the problem?",
                "line": 48,
                "start_time": "0-03-48.540000",
                "end_time": "0-03-50.210000",
                "url": "https://drive.google.com/file/d/1fT48-oA7YDpm25wdknQncfp0RXw5p6KP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yes, the problem.",
                "line": 49,
                "start_time": "0-03-50.210000",
                "end_time": "0-03-51.960000",
                "url": "https://drive.google.com/file/d/1Ge6P85G41JiEeQIWam_j3G8SmCcQy6l9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You arrived at just the right time, Epsilon.",
                "line": 50,
                "start_time": "0-03-52.210000",
                "end_time": "0-03-54.380000",
                "url": "https://drive.google.com/file/d/1YUp8HQxrLnsMUUmyRRYBSFUtEnHa084g/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "You flatter me!",
                "line": 51,
                "start_time": "0-03-54.380000",
                "end_time": "0-03-55.720000",
                "url": "https://drive.google.com/file/d/18wQsFr_jnQDnQHGRqDBK4Zmez_aThVa6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "Surely you granted me these powers",
                "line": 52,
                "start_time": "0-03-55.970000",
                "end_time": "0-03-58.840000",
                "url": "https://drive.google.com/file/d/1Rbt9WsKBXHmE2UIUrMfr7vEPi9gDBvGJ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "because you knew you would need them at exactly a time like this.",
                "line": 53,
                "start_time": "0-03-58.840000",
                "end_time": "0-04-01.350000",
                "url": "https://drive.google.com/file/d/1HWRCVxrrlmo-jZ79AkD8mghnqwxp-isz/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "In this country, they respect anyone whose art warrants it,",
                "line": 54,
                "start_time": "0-04-01.550000",
                "end_time": "0-04-04.600000",
                "url": "https://drive.google.com/file/d/1EA0-vX75HShGDvt1NtEc-jAO8NDRQ_M1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "regardless of race or rank.",
                "line": 55,
                "start_time": "0-04-04.600000",
                "end_time": "0-04-06.430000",
                "url": "https://drive.google.com/file/d/1nm6_oZE--6mucoV9dqHE_HC-wE5GoMEy/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "That's why I'm allowed to walk right into the royal palace whenever I want to.",
                "line": 56,
                "start_time": "0-04-06.770000",
                "end_time": "0-04-10.560000",
                "url": "https://drive.google.com/file/d/1nq-nkJIrd2eIwNiSsHk9OCBZNilumpqx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And why I, your \"number one student,\" am allowed to accompany you.",
                "line": 57,
                "start_time": "0-04-10.560000",
                "end_time": "0-04-14.650000",
                "url": "https://drive.google.com/file/d/1duxGkMTbGluPN1FW8y3GQ7pxNy3BY2Vu/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "I am so sorry about that.",
                "line": 58,
                "start_time": "0-04-14.650000",
                "end_time": "0-04-16.280000",
                "url": "https://drive.google.com/file/d/1VdOtBgivNn0_NGAtvlXZfbTJOz7kMuqJ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "We both know that you, my Lord, taught me everything I know about the piano.",
                "line": 59,
                "start_time": "0-04-16.280000",
                "end_time": "0-04-20.620000",
                "url": "https://drive.google.com/file/d/1s1NGgHYr61tXKF2jMXnQXDRtWRKmuUC3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Slime content: 99%.",
                "line": 60,
                "start_time": "0-04-20.110000",
                "end_time": "0-04-23.240000",
                "url": "https://drive.google.com/file/d/1jkdmesBfnlk4T6VPos5XAU43jyJq3JG4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "She's constantly adjusting it with intricate magic control to make it move with her center of gravity.",
                "line": 61,
                "start_time": "0-04-23.580000",
                "end_time": "0-04-27.080000",
                "url": "https://drive.google.com/file/d/1pbrTGVHCQJSr4AQvYnfmjqLHUKrLQR0o/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "She's even incorporating chaos theory into this excessively excess-avoidant excess of effort.",
                "line": 62,
                "start_time": "0-04-27.080000",
                "end_time": "0-04-32.290000",
                "url": "https://drive.google.com/file/d/1MlwulSdLaVHqMJ4jbDE71L0U2SzrgXl_/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "Is something on your mind?",
                "line": 63,
                "start_time": "0-04-32.080000",
                "end_time": "0-04-34.630000",
                "url": "https://drive.google.com/file/d/1cuz2bJvalOl9C4htw6WaTmoYxRpvqg2R/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I guess I'm thinking about the fruit of all your effort.",
                "line": 64,
                "start_time": "0-04-35.090000",
                "end_time": "0-04-37.380000",
                "url": "https://drive.google.com/file/d/1YDT8AnpIjKPWRivg9pX0sHqMWPsMww8z/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "Oh, stop!",
                "line": 65,
                "start_time": "0-04-37.380000",
                "end_time": "0-04-38.590000",
                "url": "https://drive.google.com/file/d/1E58z2-IGpo3OFWbRUilPAHK6s3CN4yOA/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "I still have so very much to learn!",
                "line": 66,
                "start_time": "0-04-38.590000",
                "end_time": "0-04-40.510000",
                "url": "https://drive.google.com/file/d/17qYMG6wA14K9F8dmANtA8MJx-e-441xK/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "We're keeping eyes on the target while we let her roam free.",
                "line": 67,
                "start_time": "0-04-40.760000",
                "end_time": "0-04-43.100000",
                "url": "https://drive.google.com/file/d/1s544cwe8ove0H5wue3uJoNawAPRNHYzD/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "Our spies have not been discovered.",
                "line": 68,
                "start_time": "0-04-43.850000",
                "end_time": "0-04-46.140000",
                "url": "https://drive.google.com/file/d/12Z-PGnN9mhO7h-cKASsipmgq9ViNU7i0/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "We're waiting for the right moment to-",
                "line": 69,
                "start_time": "0-04-46.520000",
                "end_time": "0-04-47.890000",
                "url": "https://drive.google.com/file/d/1Q6Tfe453eacOA1ESxnnOjId3zL60cGXn/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Well, if it isn't Ms. Shiron.",
                "line": 70,
                "start_time": "0-04-47.890000",
                "end_time": "0-04-49.770000",
                "url": "https://drive.google.com/file/d/1IB6paeS6MuT5CCPteIfKtdl1Mcy9R_86/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "Duke Perv Asshat...",
                "line": 71,
                "start_time": "0-04-51.020000",
                "end_time": "0-04-52.940000",
                "url": "https://drive.google.com/file/d/1dxzSq1vu-VBCQ5oaCf4U8Qq-PVKf5YLe/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Were you scheduled to perform for us at our luncheon today?",
                "line": 72,
                "start_time": "0-04-53.360000",
                "end_time": "0-04-57.240000",
                "url": "https://drive.google.com/file/d/1UU1dBn6i4Nyktm3mvKxymZhOx6dhjfyN/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "Yes, Your Grace.",
                "line": 73,
                "start_time": "0-04-57.240000",
                "end_time": "0-04-59.030000",
                "url": "https://drive.google.com/file/d/1UYRDIlRSVrGGVnYUIVlrus3piAH2kU7X/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "I am planning to debut a new piece there.",
                "line": 74,
                "start_time": "0-04-59.030000",
                "end_time": "0-05-01.910000",
                "url": "https://drive.google.com/file/d/16S4j66KL6j8MIAQ3bYm5jlmjuQ9sfBzq/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "I look forward to hearing it.",
                "line": 75,
                "start_time": "0-05-02.160000",
                "end_time": "0-05-03.780000",
                "url": "https://drive.google.com/file/d/19LzlfRMHMMVYIwHWTs6D81jptuLInwb9/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Every one of your compositions is ahead of its time.",
                "line": 76,
                "start_time": "0-05-03.780000",
                "end_time": "0-05-06.660000",
                "url": "https://drive.google.com/file/d/1zRB5duw0kvN9bAYmuH1L-LhaX5F21ZqZ/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "It is a joy to listen to them.",
                "line": 77,
                "start_time": "0-05-06.660000",
                "end_time": "0-05-08.370000",
                "url": "https://drive.google.com/file/d/1tHiyxvE17a4PLCCHlhbu7dl9HEXuSksB/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "I only hope that my music can bring some solace to Princess Rose,",
                "line": 78,
                "start_time": "0-05-08.700000",
                "end_time": "0-05-12.420000",
                "url": "https://drive.google.com/file/d/1Q3NMZjAJWrtb2uMFHqy_ZsFivMx5ljdY/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "now that she's lost His Royal Majesty her father.",
                "line": 79,
                "start_time": "0-05-12.420000",
                "end_time": "0-05-15.170000",
                "url": "https://drive.google.com/file/d/13gSWhTJ13mNPyi3s2OrhuSAHJ7n7sziD/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "I appreciate your concern.",
                "line": 80,
                "start_time": "0-05-15.170000",
                "end_time": "0-05-16.800000",
                "url": "https://drive.google.com/file/d/1Qq1N2r--9LW6PpLP_rwTUSDHk4ZcWXq3/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "But I must apologize.",
                "line": 81,
                "start_time": "0-05-17.380000",
                "end_time": "0-05-19.470000",
                "url": "https://drive.google.com/file/d/1xkKpMbSrv8MDvUVf8jy0RLb6n2Ujf3Y_/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Rose is not feeling well today,",
                "line": 82,
                "start_time": "0-05-19.470000",
                "end_time": "0-05-21.760000",
                "url": "https://drive.google.com/file/d/14E1NeNLo3-t_2GfvWABr-Lh7SmZsxBV4/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "and it is unlikely that she will be attending the luncheon.",
                "line": 83,
                "start_time": "0-05-21.760000",
                "end_time": "0-05-24.180000",
                "url": "https://drive.google.com/file/d/1f1mc2qf78Yb_Sw9OkjYF-g3WXCwzhqdY/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "Oh, my, then as her fiance, you must be very worried about her.",
                "line": 84,
                "start_time": "0-05-24.930000",
                "end_time": "0-05-28.430000",
                "url": "https://drive.google.com/file/d/1em4VV9xGTFzVMy3TAyZpA4gfPZBgQ_VC/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "That's all right.",
                "line": 85,
                "start_time": "0-05-28.640000",
                "end_time": "0-05-29.640000",
                "url": "https://drive.google.com/file/d/11FLRVxjbYgciD7GRRVtehxR5GY022bdn/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "It is a husband's duty to support the kingdom in his wife's place.",
                "line": 86,
                "start_time": "0-05-29.640000",
                "end_time": "0-05-32.600000",
                "url": "https://drive.google.com/file/d/1_TnwCOrpSrfQc-Gsqrx0jK9dlLg1SrvH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Duke Perv Asshat...",
                "line": 87,
                "start_time": "0-05-32.600000",
                "end_time": "0-05-34.810000",
                "url": "https://drive.google.com/file/d/1gPxLoaF-w8EP4RP_rz_G2UFijRbDjsai/view?usp=drivesdk"
            },
            {
                "name": "Aristocrat",
                "name_variant": "Aristocrat",
                "subtitle": "You're so strong, Duke Asshat.",
                "line": 87,
                "start_time": "0-05-32.600000",
                "end_time": "0-05-34.810000",
                "url": "https://drive.google.com/file/d/1gPxLoaF-w8EP4RP_rz_G2UFijRbDjsai/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Just look at him.",
                "line": 88,
                "start_time": "0-05-35.110000",
                "end_time": "0-05-36.900000",
                "url": "https://drive.google.com/file/d/1QMLc4knDgyUItzHsiaWgvWuhN2N2ZQvT/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "He lives his entire life inside the typical evil aristocrat mold.",
                "line": 89,
                "start_time": "0-05-36.900000",
                "end_time": "0-05-39.320000",
                "url": "https://drive.google.com/file/d/19349-HPQyKR6VyssyUh6xUZ9wUV0moOK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I guess if you can't just naturally master that mold,",
                "line": 90,
                "start_time": "0-05-39.690000",
                "end_time": "0-05-42.150000",
                "url": "https://drive.google.com/file/d/1z59Spz7qCnCXClBf8Q-cIpXuFpEnS-wK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "the road to being a named character must be rough.",
                "line": 91,
                "start_time": "0-05-42.150000",
                "end_time": "0-05-44.530000",
                "url": "https://drive.google.com/file/d/1fHareNeP1Mg2PmpyGOUTWymVymQrgBbS/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Might I ask who this young man is?",
                "line": 92,
                "start_time": "0-05-44.910000",
                "end_time": "0-05-46.780000",
                "url": "https://drive.google.com/file/d/1JVkSK0W5ETJM-8uAuvQFUXaqxa4QnBlO/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "My grand, my sublime, my one and only favorite pupil.",
                "line": 93,
                "start_time": "0-05-47.450000",
                "end_time": "0-05-53.710000",
                "url": "https://drive.google.com/file/d/1etv3XciWOuB9Lm8COcVbdDMHyhlFOWY3/view?usp=drivesdk"
            },
            {
                "name": "Aristocrat",
                "name_variant": "Aristocrat",
                "subtitle": "A student, Ms. Shiron?",
                "line": 94,
                "start_time": "0-05-54.630000",
                "end_time": "0-05-56.130000",
                "url": "https://drive.google.com/file/d/1bQvOwR5FZCcQsZJodab6o00BfPjadcDg/view?usp=drivesdk"
            },
            {
                "name": "Aristocrat",
                "name_variant": "Aristocrat",
                "subtitle": "I had no idea you took apprentices!",
                "line": 95,
                "start_time": "0-05-56.130000",
                "end_time": "0-05-57.840000",
                "url": "https://drive.google.com/file/d/1EZRI6Kihj4WR6xHuzSaB1RNzY2wsrePp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "We have a secret relationship.",
                "line": 96,
                "start_time": "0-05-57.840000",
                "end_time": "0-05-59.800000",
                "url": "https://drive.google.com/file/d/1wvXFNeuQJ-N_pRKp11hUNA_Yk--AI497/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "But, and I'm sorry to have to ask this, does he have a pass to enter the palace?",
                "line": 97,
                "start_time": "0-06-00.090000",
                "end_time": "0-06-04.180000",
                "url": "https://drive.google.com/file/d/1ZxddtL_P4EwsaWITaFWqQ3nWs4pqGZpj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "I thought if I brought him as my guest, there should be no problem?",
                "line": 98,
                "start_time": "0-06-04.180000",
                "end_time": "0-06-07.100000",
                "url": "https://drive.google.com/file/d/1OqSsT7hytnQImSEEG8kTZUXbB4eApQRQ/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "My deepest apologies, but we've had to change protocol.",
                "line": 99,
                "start_time": "0-06-08.140000",
                "end_time": "0-06-11.680000",
                "url": "https://drive.google.com/file/d/11zfGeNp0xeHF43gMZY-UMs3UyRGeBCzt/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "Oh, dear, in that case, should we come back another day?",
                "line": 100,
                "start_time": "0-06-11.680000",
                "end_time": "0-06-14.650000",
                "url": "https://drive.google.com/file/d/138X3wO6Y0FHw-PxkSBJpKiSuBWCxfRBi/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "No, there will be no need for that.",
                "line": 101,
                "start_time": "0-06-14.650000",
                "end_time": "0-06-16.940000",
                "url": "https://drive.google.com/file/d/1nAzJ2JHGYysSFLj3S4hToGzWdE6fVt5H/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "All we need is for the boy to play a piece for us.",
                "line": 102,
                "start_time": "0-06-17.820000",
                "end_time": "0-06-20.110000",
                "url": "https://drive.google.com/file/d/1oIC9S6l-gYRp8432sN1ZoeB_h6nInoUF/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "After all, we're all beside ourselves with curiosity over how skilled your apprentice is.",
                "line": 103,
                "start_time": "0-06-21.190000",
                "end_time": "0-06-25.870000",
                "url": "https://drive.google.com/file/d/16NSlBDfANVTTenmNrjq_GMlMW0FEgl5L/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "An abrupt unreasonable demand.",
                "line": 104,
                "start_time": "0-06-25.870000",
                "end_time": "0-06-27.580000",
                "url": "https://drive.google.com/file/d/1kl6IaEQrxh4eZOvrXFwT6dQ5fOa7yMoB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "He doesn't even let up on background characters. I like his cookie-cutter villain style.",
                "line": 105,
                "start_time": "0-06-27.580000",
                "end_time": "0-06-31.040000",
                "url": "https://drive.google.com/file/d/10278vFM4EWJGHUFpJ1dO6UCqp-H1vfAa/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That's the spirit.",
                "line": 106,
                "start_time": "0-06-31.040000",
                "end_time": "0-06-32.580000",
                "url": "https://drive.google.com/file/d/1QNM2LbdbzBW9P4gXjOc_CJbg_fbw5Do0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Then I'll respond as the type of background character who's kinda good at the piano.",
                "line": 107,
                "start_time": "0-06-33.160000",
                "end_time": "0-06-37.340000",
                "url": "https://drive.google.com/file/d/1OvHFAAnX8dLTfsrrf86fZU6AxdpgRLfs/view?usp=drivesdk"
            },
            {
                "name": "Parton",
                "name_variant": "Parton",
                "subtitle": "Ms. Shiron is, without a doubt, the best pianist in the world.",
                "line": 108,
                "start_time": "0-06-37.340000",
                "end_time": "0-06-41.170000",
                "url": "https://drive.google.com/file/d/1UOO0J9VQxWFPuRtWdniDXq9D7VhdBgN5/view?usp=drivesdk"
            },
            {
                "name": "Parton",
                "name_variant": "Parton",
                "subtitle": "To think she had an apprentice.",
                "line": 109,
                "start_time": "0-06-41.170000",
                "end_time": "0-06-43.340000",
                "url": "https://drive.google.com/file/d/187rb3XodhRLMywDRZVE9g1MbREgzgRcq/view?usp=drivesdk"
            },
            {
                "name": "Newwealth",
                "name_variant": "Newwealth",
                "subtitle": "It would be cruel to expect too much of him, but this should be an entertaining diversion.",
                "line": 110,
                "start_time": "0-06-43.340000",
                "end_time": "0-06-47.550000",
                "url": "https://drive.google.com/file/d/1JaD8q9kP36OmWPCc3pEeelLpIRPF5tkJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The regular citizens are all so jaded and bitter,",
                "line": 111,
                "start_time": "0-06-47.850000",
                "end_time": "0-06-50.430000",
                "url": "https://drive.google.com/file/d/1zprJtM_deNZpLBkEyOo3K62QV-CXSgAa/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "but the nobility are living their best lives in the lap of luxury.",
                "line": 112,
                "start_time": "0-06-50.430000",
                "end_time": "0-06-52.810000",
                "url": "https://drive.google.com/file/d/1rPnMEjnJiIKDx15vu3V1ns97snXQXIzJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I will get vengeance for the blood tax they have exacted from you.",
                "line": 113,
                "start_time": "0-06-53.060000",
                "end_time": "0-06-55.730000",
                "url": "https://drive.google.com/file/d/1hlQ1rxdSxiDlmTDfGLUrQp-Il_fvyUck/view?usp=drivesdk"
            },
            {
                "name": "Parton",
                "name_variant": "Parton",
                "subtitle": "My, my...",
                "line": 114,
                "start_time": "0-07-16.870000",
                "end_time": "0-07-18.500000",
                "url": "https://drive.google.com/file/d/1wH2tdDKxkpLwEQXXxfk-3sPvAccmzI0Y/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Beautiful...",
                "line": 115,
                "start_time": "0-07-19.250000",
                "end_time": "0-07-20.670000",
                "url": "https://drive.google.com/file/d/1xdT6UgibKgFql-8ucEcuE3QO2t6rez64/view?usp=drivesdk"
            },
            {
                "name": "Newwealth",
                "name_variant": "Newwealth",
                "subtitle": "Magnificent!",
                "line": 116,
                "start_time": "0-07-25.420000",
                "end_time": "0-07-26.800000",
                "url": "https://drive.google.com/file/d/1d_2VZoVbQtKcz6TftCQSgNywXtxCJA9u/view?usp=drivesdk"
            },
            {
                "name": "Parton",
                "name_variant": "Parton",
                "subtitle": "I can see the moonlight streaming down on us from above.",
                "line": 117,
                "start_time": "0-07-26.800000",
                "end_time": "0-07-30.260000",
                "url": "https://drive.google.com/file/d/1uOCY1FnBRIlO8T7OC4G5AG3SFIlNc27u/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "I'm so touched, I'm crying a flood of tears!",
                "line": 118,
                "start_time": "0-07-45.860000",
                "end_time": "0-07-48.030000",
                "url": "https://drive.google.com/file/d/1l45DJoBJq0JMTZ_rkBmuSNaq3uT0bRWK/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "We have witnessed the true, divine essence of the \"Moonlight Sonata.\"",
                "line": 119,
                "start_time": "0-07-48.410000",
                "end_time": "0-07-51.240000",
                "url": "https://drive.google.com/file/d/1Y2lhOYQF-ho1cz7n-UPJttjam-qTcBDF/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "I, and the audience, will remember this moment for the rest of our humble lives!",
                "line": 120,
                "start_time": "0-07-51.240000",
                "end_time": "0-07-55.450000",
                "url": "https://drive.google.com/file/d/1lWcykJ0G7lOeMkG6Zvbe1Ib9_Fal4ryZ/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "O, young musical genius, might I be so bold as to ask you your name?",
                "line": 121,
                "start_time": "0-07-55.750000",
                "end_time": "0-07-59.710000",
                "url": "https://drive.google.com/file/d/1eAIvXl3B_aMkm0uYOmTEHWrDTRQEuSal/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Oh, I'm...",
                "line": 122,
                "start_time": "0-07-59.710000",
                "end_time": "0-08-01.340000",
                "url": "https://drive.google.com/file/d/1U_QfpLC4avFIclelNGZX90-NCoGOUpVh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "He's still in the middle of his education.",
                "line": 123,
                "start_time": "0-08-01.790000",
                "end_time": "0-08-03.090000",
                "url": "https://drive.google.com/file/d/12pu2wwZ0CME3M5D05lrQ-6vFZRCaOX38/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "We'll formally introduce him once he's completed his training.",
                "line": 124,
                "start_time": "0-08-03.090000",
                "end_time": "0-08-06.670000",
                "url": "https://drive.google.com/file/d/1FA1mVBuO_drf88doyqf-rN2bvHvA_O9W/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "But we're all dying to know more about him.",
                "line": 125,
                "start_time": "0-08-06.880000",
                "end_time": "0-08-10.390000",
                "url": "https://drive.google.com/file/d/1wp7UqXoTyUuqE-vxfv4qjcbs8jVl2OV7/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Anyone here would love to be his patron.",
                "line": 126,
                "start_time": "0-08-10.390000",
                "end_time": "0-08-12.180000",
                "url": "https://drive.google.com/file/d/1TNtNN-DMyWeTgWtLvbuSPq1Lclxl95S4/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "It's too soon to consider any of that.",
                "line": 127,
                "start_time": "0-08-12.180000",
                "end_time": "0-08-14.180000",
                "url": "https://drive.google.com/file/d/1oSgGKeS059WxegTrBqINzsOxUs6xZ0Wy/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "He will set foot on the public stage",
                "line": 128,
                "start_time": "0-08-14.180000",
                "end_time": "0-08-16.390000",
                "url": "https://drive.google.com/file/d/1zWRIXumZ9npszCx8DVt0-8tGVqZIxoOm/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "at the appropriate time and in the appropriate place.",
                "line": 129,
                "start_time": "0-08-16.390000",
                "end_time": "0-08-18.520000",
                "url": "https://drive.google.com/file/d/1Swrh2E1sEKD6pP0501WzNYbFsKSnWFlE/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "And when the day arrives, I'm sure the entire world will know his name.",
                "line": 130,
                "start_time": "0-08-18.770000",
                "end_time": "0-08-22.520000",
                "url": "https://drive.google.com/file/d/1hSiNH-3OEQYWK72_EvRsWgoe6b3m3eE-/view?usp=drivesdk"
            },
            {
                "name": "Parton",
                "name_variant": "Parton",
                "subtitle": "When that happens, I do hope you'll come talk to me.",
                "line": 131,
                "start_time": "0-08-22.520000",
                "end_time": "0-08-24.940000",
                "url": "https://drive.google.com/file/d/1s_yYyXoFyzYOxBK7gIHkplllfwRiQIhk/view?usp=drivesdk"
            },
            {
                "name": "Newwealth",
                "name_variant": "Newwealth",
                "subtitle": "I will spare no effort to prepare the most fitting setting for the start of this new legend!",
                "line": 132,
                "start_time": "0-08-24.940000",
                "end_time": "0-08-27.780000",
                "url": "https://drive.google.com/file/d/12GAI5paOfUB-fDUGDpZobkbEZZfdnuwt/view?usp=drivesdk"
            },
            {
                "name": "Aristocrat",
                "name_variant": "Aristocrat",
                "subtitle": "Nor will I!",
                "line": 133,
                "start_time": "0-08-27.780000",
                "end_time": "0-08-28.820000",
                "url": "https://drive.google.com/file/d/1fIi3pJWKXZW5V76jXqniOeYFti7txzbs/view?usp=drivesdk"
            },
            {
                "name": "Aristocrat",
                "name_variant": "Aristocrat",
                "subtitle": "Please, let me help!",
                "line": 134,
                "start_time": "0-08-28.820000",
                "end_time": "0-08-30.030000",
                "url": "https://drive.google.com/file/d/19hlDzasJMfdH1a5sb9A82Z4epUV-Mu-v/view?usp=drivesdk"
            },
            {
                "name": "Aristocrat",
                "name_variant": "Aristocrat",
                "subtitle": "No, allow me!",
                "line": 135,
                "start_time": "0-08-30.030000",
                "end_time": "0-08-31.030000",
                "url": "https://drive.google.com/file/d/13CApb-L09GIHd2EGFMUzOqVhAYZMhAxg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Master Shiron...",
                "line": 136,
                "start_time": "0-08-35.450000",
                "end_time": "0-08-36.660000",
                "url": "https://drive.google.com/file/d/1HM5Nz7aYyrpOlxQyuqZFKFrbYOZWe4Y_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "While I'm here, I would like to take a look around and see more of the palace.",
                "line": 137,
                "start_time": "0-08-37.120000",
                "end_time": "0-08-41.210000",
                "url": "https://drive.google.com/file/d/1kUINMOt9JbX0gQfwGwn--VlgRFjIrDpw/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "Yes, \"while you're here.\"",
                "line": 138,
                "start_time": "0-08-42.210000",
                "end_time": "0-08-44.130000",
                "url": "https://drive.google.com/file/d/16sNxm3xQ2wCSx7IE8krJKVT0Ol4VVNog/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "This is may be an excellent opportunity.",
                "line": 139,
                "start_time": "0-08-44.130000",
                "end_time": "0-08-45.840000",
                "url": "https://drive.google.com/file/d/1F_zfm5PPzQaFxtuHCasQojdTyEI9GVhm/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "In that case, allow me to show you around!",
                "line": 140,
                "start_time": "0-08-45.840000",
                "end_time": "0-08-47.920000",
                "url": "https://drive.google.com/file/d/1RbivyUffa1fVtKKdf3HJfkrOvvFGRtZi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "No, I can go by myself-",
                "line": 141,
                "start_time": "0-08-48.340000",
                "end_time": "0-08-49.340000",
                "url": "https://drive.google.com/file/d/1poVz2B-1wl4iWJLUsAwHwt2RsnWscmfn/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "I could never be so rude as to neglect you like that!",
                "line": 142,
                "start_time": "0-08-49.340000",
                "end_time": "0-08-52.390000",
                "url": "https://drive.google.com/file/d/14-qNUTOOn5Z4HXk-GlOsW6FQV6pxYROM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "No, I can go by myself-",
                "line": 143,
                "start_time": "0-08-52.390000",
                "end_time": "0-08-53.390000",
                "url": "https://drive.google.com/file/d/1nXtc5grm4mUKAmc3zfGqBlwUsuZ4kBVq/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "I'm the maid, my name is Margaret.",
                "line": 144,
                "start_time": "0-08-53.390000",
                "end_time": "0-08-55.810000",
                "url": "https://drive.google.com/file/d/1EI4o6J_dPNKbV1H6-Wgt3-azbYdqlBnd/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "I also happen to be entrusted with the care of Princess Rose,",
                "line": 145,
                "start_time": "0-08-55.810000",
                "end_time": "0-08-58.560000",
                "url": "https://drive.google.com/file/d/1Z67F3nshLhU8jA5rKyWuKe0vVgM5fTdV/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "so I know all about the palace.",
                "line": 146,
                "start_time": "0-08-58.560000",
                "end_time": "0-09-00.520000",
                "url": "https://drive.google.com/file/d/1PA6kj9iRjnAcHtd6G68MmtZnDJvcOvzf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You care for Rose?",
                "line": 147,
                "start_time": "0-09-00.520000",
                "end_time": "0-09-01.690000",
                "url": "https://drive.google.com/file/d/1fmpaTWmdlbmkklQvSENEZ2TofgLT7wtv/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "This is your first time in the palace, no?",
                "line": 148,
                "start_time": "0-09-01.690000",
                "end_time": "0-09-03.230000",
                "url": "https://drive.google.com/file/d/18L1LZrW4gJzCIcnJ91suH6ij3T1fHLP_/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Then I can show you all of the best places!",
                "line": 149,
                "start_time": "0-09-03.230000",
                "end_time": "0-09-06.230000",
                "url": "https://drive.google.com/file/d/1ECrEApcaNsYTp4xqZTsI_hQw_PtII_qD/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Shiron",
                "subtitle": "Excuse me, miss! Would you kindly stop-",
                "line": 150,
                "start_time": "0-09-09.320000",
                "end_time": "0-09-11.110000",
                "url": "https://drive.google.com/file/d/1Vuz2hlm5g5M-7Hq21B8KuPGqSdxCkXD5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Slime content...",
                "line": 151,
                "start_time": "0-09-11.110000",
                "end_time": "0-09-12.320000",
                "url": "https://drive.google.com/file/d/1JTt2kfZdN3Swn_GbbdEasbbKQ6CsuspC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Zero percent, eh?",
                "line": 152,
                "start_time": "0-09-13.700000",
                "end_time": "0-09-15.120000",
                "url": "https://drive.google.com/file/d/1gmECKIhuNivwdrKOIwt9WC55qPkRIDyq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It is winter, isn't it?",
                "line": 153,
                "start_time": "0-09-18.750000",
                "end_time": "0-09-20.370000",
                "url": "https://drive.google.com/file/d/1PvuLM3r3loj_XhWWBctrdvVXJymy7vuo/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "There's an artifact underground that keeps the temperature constant.",
                "line": 154,
                "start_time": "0-09-20.370000",
                "end_time": "0-09-24.540000",
                "url": "https://drive.google.com/file/d/1QHOWr8QKztwysO0Aqu6e9H4E7lP2TzXe/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "You know, I was so touched by your performance earlier!",
                "line": 155,
                "start_time": "0-09-25.670000",
                "end_time": "0-09-29.170000",
                "url": "https://drive.google.com/file/d/1awZZdt9_Z0vaY2YodS8T1o9YLo-ca46n/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Knowing you, I'm sure you'll be a top class pianist in no time!",
                "line": 156,
                "start_time": "0-09-29.170000",
                "end_time": "0-09-32.430000",
                "url": "https://drive.google.com/file/d/1OW48W624CeXgyBgOtdDSPBmpetp7DHnD/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "That was more wonderful than any piano performance I've ever heard in my life!",
                "line": 157,
                "start_time": "0-09-32.430000",
                "end_time": "0-09-35.760000",
                "url": "https://drive.google.com/file/d/1dNI4P4s2g7-WUygrV6zO7BmqQqa8Rsa2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yeah, because the performance techniques in this world",
                "line": 158,
                "start_time": "0-09-36.430000",
                "end_time": "0-09-39.310000",
                "url": "https://drive.google.com/file/d/1VMWOyUV1HPrAXpg0ePUbypOxLh5zYbcy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "are pretty underdeveloped compared to modern Japan.",
                "line": 159,
                "start_time": "0-09-39.310000",
                "end_time": "0-09-41.520000",
                "url": "https://drive.google.com/file/d/18Q3IRU0DoGkJZI0WgUz1EJa9oL8WKd3f/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "I happened to overhear that Earl Patron himself has his eye on you.",
                "line": 160,
                "start_time": "0-09-41.520000",
                "end_time": "0-09-46.270000",
                "url": "https://drive.google.com/file/d/1BvSZj_H0eOwbqOUeQOZJ98zuKeqc_O8m/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "If you become his personal pianist,",
                "line": 161,
                "start_time": "0-09-46.270000",
                "end_time": "0-09-48.280000",
                "url": "https://drive.google.com/file/d/1WWLMoM5SDDRdvFzi7XhFNFev8cpUFeYi/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "you're guaranteed at least a hundred million zeni a year.",
                "line": 162,
                "start_time": "0-09-48.280000",
                "end_time": "0-09-50.440000",
                "url": "https://drive.google.com/file/d/1jYhB_i1XfYpkBo3NJGA7M0TXA1Ih-Y72/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "A hundred million zeni?!",
                "line": 163,
                "start_time": "0-09-50.440000",
                "end_time": "0-09-51.820000",
                "url": "https://drive.google.com/file/d/1L6guleBQ68dauq4kUNldxe34pI3v4Dli/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And they do annual salaries here?",
                "line": 164,
                "start_time": "0-09-51.820000",
                "end_time": "0-09-53.660000",
                "url": "https://drive.google.com/file/d/1q8unolm-c72thm2Vu4ZAeEp3lE7EMKWI/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Marquis Newwealth spoke very highly of you, as well.",
                "line": 165,
                "start_time": "0-09-53.660000",
                "end_time": "0-09-56.330000",
                "url": "https://drive.google.com/file/d/1zyLRc9Koq1XXp3ZLFKgf5A_4lFu5-NYs/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Your salary would drop to seventy million, but he has a broad network of connections,",
                "line": 166,
                "start_time": "0-09-56.330000",
                "end_time": "0-10-01.210000",
                "url": "https://drive.google.com/file/d/1q_W9tk_7eElIR1_Ef2BuLHdqnTxdlaqZ/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "so if you're looking for fame, you should go with Marquis Newwealth.",
                "line": 167,
                "start_time": "0-10-01.210000",
                "end_time": "0-10-04.040000",
                "url": "https://drive.google.com/file/d/1i5dboQPSTylWFQ-AoGFcwQ84UA04M6il/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The future musician route, eh?",
                "line": 168,
                "start_time": "0-10-04.250000",
                "end_time": "0-10-06.380000",
                "url": "https://drive.google.com/file/d/1df38q-iLXNGPOe29HFK0SFMhZpy-aR0-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "If I get a yearly salary, I won't have to count on handouts for every gig.",
                "line": 169,
                "start_time": "0-10-06.380000",
                "end_time": "0-10-09.670000",
                "url": "https://drive.google.com/file/d/1GRCzD_lSphjkUgxpB9BuG-Z6j6duLbuZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That might actually work.",
                "line": 170,
                "start_time": "0-10-09.670000",
                "end_time": "0-10-10.880000",
                "url": "https://drive.google.com/file/d/1dhfEBuUrJgA9pixhg0_eUuqR_OUekSy8/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "And I also recommend my own family.",
                "line": 171,
                "start_time": "0-10-10.090000",
                "end_time": "0-10-13.550000",
                "url": "https://drive.google.com/file/d/1tykQ3v6VRZpGkdQvMOswYqWIygP0djWZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Your family?",
                "line": 172,
                "start_time": "0-10-13.550000",
                "end_time": "0-10-14.760000",
                "url": "https://drive.google.com/file/d/10fXwGcxGU0LCFJtWpvFM5fQ0eACY-Sha/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Our starting pay for musicians is fifty million,",
                "line": 173,
                "start_time": "0-10-14.760000",
                "end_time": "0-10-17.300000",
                "url": "https://drive.google.com/file/d/159fe0id8p0v2L-1dWrOFVGowUgR-R5Di/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "but I can talk to my father and convince him to give you seventy.",
                "line": 174,
                "start_time": "0-10-17.300000",
                "end_time": "0-10-20.680000",
                "url": "https://drive.google.com/file/d/1_tXTLSg8ORmFFQjw1J5Y5RVNe0b9fuII/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You can do that, eh?",
                "line": 175,
                "start_time": "0-10-20.810000",
                "end_time": "0-10-22.140000",
                "url": "https://drive.google.com/file/d/11FYcHbTN4HBj-qHEFLiw189JL-x9j0px/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Just between you and me,",
                "line": 176,
                "start_time": "0-10-22.140000",
                "end_time": "0-10-23.940000",
                "url": "https://drive.google.com/file/d/1ExopvFAMnQGBRtgG3JBr4XjY5vBRHRfD/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "I happen to be on very good terms with both Earl Patron and Marquis Newwealth.",
                "line": 177,
                "start_time": "0-10-23.940000",
                "end_time": "0-10-28.860000",
                "url": "https://drive.google.com/file/d/1jx0kKziT6wS4cJIp8o4NU-BgV3JEHGTo/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "If you would just let me handle everything, I can work it all out perfectly.",
                "line": 178,
                "start_time": "0-10-28.860000",
                "end_time": "0-10-31.780000",
                "url": "https://drive.google.com/file/d/1TaFy1XB7dLWYMNgRHpqmtZm8gUeqMMYA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yeah, but Master Shiron wouldn't...",
                "line": 179,
                "start_time": "0-10-31.900000",
                "end_time": "0-10-34.570000",
                "url": "https://drive.google.com/file/d/1OTF296JWuaN3RN3P_yNSZIV66oJBN5bU/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Lady Shiron only wants to keep her darling little apprentice to herself.",
                "line": 180,
                "start_time": "0-10-34.660000",
                "end_time": "0-10-38.530000",
                "url": "https://drive.google.com/file/d/1VwqEiJ1d-_7yvZAQTU227DKcKFH8xu4h/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Don't worry about it, and just leave it all to me, all right?",
                "line": 181,
                "start_time": "0-10-38.530000",
                "end_time": "0-10-41.950000",
                "url": "https://drive.google.com/file/d/1gUmcdjVd8eS5xJSawY5I1FDuQO1-8l95/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "I will do everything in my power to support you.",
                "line": 182,
                "start_time": "0-10-41.950000",
                "end_time": "0-10-43.870000",
                "url": "https://drive.google.com/file/d/13X_bstZLhRs9nmch-EizgFZpmstw9UEs/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Huh?",
                "line": 183,
                "start_time": "0-10-44.210000",
                "end_time": "0-10-44.870000",
                "url": "https://drive.google.com/file/d/1z_Sv__qyyuPP5LICV2tIMrB6q63MVEoX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Come to think of it, you're Princess Rose's maid, right?",
                "line": 184,
                "start_time": "0-10-44.870000",
                "end_time": "0-10-47.710000",
                "url": "https://drive.google.com/file/d/1RF9J4YRMyaDvNTqLBs4ecU9br176RS8D/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Where is she now?",
                "line": 185,
                "start_time": "0-10-47.080000",
                "end_time": "0-10-49.500000",
                "url": "https://drive.google.com/file/d/1knkFh3FycD3JR0y-q-BiXAxtIdtNo6aG/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "You're interested in Princess Rose, Mr. Apprentice?",
                "line": 186,
                "start_time": "0-10-51.090000",
                "end_time": "0-10-54.720000",
                "url": "https://drive.google.com/file/d/1tC99s8d9thngH9L07_VCs2hE332jzT0B/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Personally, I detest that woman.",
                "line": 187,
                "start_time": "0-10-55.430000",
                "end_time": "0-10-57.890000",
                "url": "https://drive.google.com/file/d/1EhPdY5MBl3QOCHHK99x-0azSaZNM5ukX/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "I was her personal maid even before she left to study in the Midgar Kingdom.",
                "line": 188,
                "start_time": "0-10-58.640000",
                "end_time": "0-11-04.060000",
                "url": "https://drive.google.com/file/d/1hERemgnAokVlaFO55Or9ex7naXqiW5TI/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "She was a little strange,",
                "line": 189,
                "start_time": "0-11-04.600000",
                "end_time": "0-11-07.230000",
                "url": "https://drive.google.com/file/d/177XVF9ho5KUqyIBMpzDEPrS17ZB2N3fC/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "taking an interest in barbaric arts like fencing.",
                "line": 190,
                "start_time": "0-11-07.230000",
                "end_time": "0-11-09.610000",
                "url": "https://drive.google.com/file/d/1G_c-a8lmB5N9J_kgNybInlfOFx0DeK6F/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "But she was kind, intelligent.",
                "line": 191,
                "start_time": "0-11-09.610000",
                "end_time": "0-11-12.070000",
                "url": "https://drive.google.com/file/d/12KSEA6VCs7e5jF20UjCTCslUBm1d0YkJ/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Everyone loved our Princess Rose.",
                "line": 192,
                "start_time": "0-11-12.070000",
                "end_time": "0-11-14.320000",
                "url": "https://drive.google.com/file/d/1oUL9OLv6e--POT_qfiXxBWKEWP-HO9Nw/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "But...",
                "line": 193,
                "start_time": "0-11-15.360000",
                "end_time": "0-11-16.570000",
                "url": "https://drive.google.com/file/d/1NDKK0DnRGZ2WQtDa3yuD4jqJLfsSN_wl/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Our kingdom is a shambles now, and it's her fault.",
                "line": 194,
                "start_time": "0-11-20.410000",
                "end_time": "0-11-23.410000",
                "url": "https://drive.google.com/file/d/1GWBzTbjBYYrzNGHwNYdXY_P-_XNUx4VY/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "So, Mr. Apprentice, would you like to know where you can find Princess Rose now?",
                "line": 195,
                "start_time": "0-11-24.500000",
                "end_time": "0-11-28.130000",
                "url": "https://drive.google.com/file/d/1hPimkKr3Gbory2I_SfAPsPDLxW9B9CRj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yeah, kinda.",
                "line": 196,
                "start_time": "0-11-28.130000",
                "end_time": "0-11-29.670000",
                "url": "https://drive.google.com/file/d/1fZoQhG3BCOQvwUunq75hvcpWSwfcFWsd/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Well...",
                "line": 197,
                "start_time": "0-11-29.670000",
                "end_time": "0-11-30.880000",
                "url": "https://drive.google.com/file/d/1pE0NrSW2oIwXphakWGgPddHRQUrzv54m/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "That's a secret.",
                "line": 198,
                "start_time": "0-11-31.170000",
                "end_time": "0-11-32.800000",
                "url": "https://drive.google.com/file/d/1CBXpeuPtBx3UW80mbY1SsOlKzcXBuafw/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "You certainly can't expect me to tell you.",
                "line": 199,
                "start_time": "0-11-32.800000",
                "end_time": "0-11-35.130000",
                "url": "https://drive.google.com/file/d/1JCN5-yaIgHOhveN3-mAvy1NjtHGNnzcI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Oh, okay.",
                "line": 200,
                "start_time": "0-11-35.130000",
                "end_time": "0-11-36.340000",
                "url": "https://drive.google.com/file/d/18ZkdYYIB29iykdbB25e15rFS55eJXjpc/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "But...",
                "line": 201,
                "start_time": "0-11-36.840000",
                "end_time": "0-11-38.090000",
                "url": "https://drive.google.com/file/d/1sABD7yZYLKwbBNgt_9D_rfsPbVii3Jhk/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "But, well...",
                "line": 202,
                "start_time": "0-11-38.090000",
                "end_time": "0-11-39.300000",
                "url": "https://drive.google.com/file/d/1U9m-DoNIXigCKCuIuoAAHDSx8e0672tT/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Maybe just a little hint.",
                "line": 203,
                "start_time": "0-11-39.300000",
                "end_time": "0-11-40.680000",
                "url": "https://drive.google.com/file/d/1MeSSYq6ODpFO24RG90g6Z90z8AOVTFsr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I thought I'd scared her off,",
                "line": 204,
                "start_time": "0-11-41.060000",
                "end_time": "0-11-42.680000",
                "url": "https://drive.google.com/file/d/1TMWO4XuLxXGnzH5jnx_Ro_XKyMtZaM76/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "I'll make an exception, just for you. All right?",
                "line": 204,
                "start_time": "0-11-41.060000",
                "end_time": "0-11-42.680000",
                "url": "https://drive.google.com/file/d/1TMWO4XuLxXGnzH5jnx_Ro_XKyMtZaM76/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "but she's already back and showing sympathy.",
                "line": 205,
                "start_time": "0-11-42.680000",
                "end_time": "0-11-44.270000",
                "url": "https://drive.google.com/file/d/1ryum96EEwVe-435X2BaakJ_ZtAt54d2S/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "I'll make an exception, just for you. All right?",
                "line": 205,
                "start_time": "0-11-42.680000",
                "end_time": "0-11-44.270000",
                "url": "https://drive.google.com/file/d/1ryum96EEwVe-435X2BaakJ_ZtAt54d2S/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "And showing her vulnerable side while she's at it.",
                "line": 206,
                "start_time": "0-11-44.270000",
                "end_time": "0-11-46.270000",
                "url": "https://drive.google.com/file/d/1QTsA_ETtMLXAnG12u0R-d4cJVLXsRrSk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I know what this is.",
                "line": 207,
                "start_time": "0-11-46.270000",
                "end_time": "0-11-47.850000",
                "url": "https://drive.google.com/file/d/1VOBfP8BgzhC_82BzobdC2vNxaadXtO1t/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "So please, don't tell anyone.",
                "line": 207,
                "start_time": "0-11-46.270000",
                "end_time": "0-11-47.850000",
                "url": "https://drive.google.com/file/d/1VOBfP8BgzhC_82BzobdC2vNxaadXtO1t/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "She's trying to convert me to her religion.",
                "line": 208,
                "start_time": "0-11-47.850000",
                "end_time": "0-11-49.270000",
                "url": "https://drive.google.com/file/d/18LbxzpEa29XAHw4IcJE372L6JzuVf5ae/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "Princess Rose has been locked up at the top of the west tower.",
                "line": 209,
                "start_time": "0-11-49.270000",
                "end_time": "0-11-52.610000",
                "url": "https://drive.google.com/file/d/1a6qyn4uKiozdE8RmZ5fqLJBG6dF6bEO1/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "It will be our special secret, just between us!",
                "line": 210,
                "start_time": "0-11-52.860000",
                "end_time": "0-11-53.320000",
                "url": "https://drive.google.com/file/d/14NsrHMYKUGLl_o3HP33coQZYtwDrdX1v/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "She's definitely Rose's maid.",
                "line": 211,
                "start_time": "0-11-53.320000",
                "end_time": "0-11-55.320000",
                "url": "https://drive.google.com/file/d/1JyfWctZ4sOkjVnqYWEyj32Za8RmCjBlh/view?usp=drivesdk"
            },
            {
                "name": "Margaret",
                "name_variant": "Margaret",
                "subtitle": "It will be our special secret, just between us!",
                "line": 211,
                "start_time": "0-11-53.320000",
                "end_time": "0-11-55.320000",
                "url": "https://drive.google.com/file/d/1JyfWctZ4sOkjVnqYWEyj32Za8RmCjBlh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "She uses the same proselytizing techniques.",
                "line": 212,
                "start_time": "0-11-55.320000",
                "end_time": "0-11-57.360000",
                "url": "https://drive.google.com/file/d/1AgX9_Z1iLV1GvhMarswK6k7_paaMX9Fg/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "Hey!",
                "line": 213,
                "start_time": "0-11-57.360000",
                "end_time": "0-11-58.570000",
                "url": "https://drive.google.com/file/d/1PirZMOyAorEjtv3pxGsHNE1WqdO5EFhN/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "What are you doing, sneaking around here?",
                "line": 214,
                "start_time": "0-11-59.030000",
                "end_time": "0-12-01.080000",
                "url": "https://drive.google.com/file/d/1Xv8FGBOMuh_k6bipAnB7Q0OuH6fQWsdA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Who are you?",
                "line": 215,
                "start_time": "0-12-01.120000",
                "end_time": "0-12-03.20000",
                "url": "https://drive.google.com/file/d/13g7ylxCXOPlEFj0al9D4nvHozSyEKzMQ/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "What? Can't you tell?",
                "line": 216,
                "start_time": "0-12-03.200000",
                "end_time": "0-12-05.370000",
                "url": "https://drive.google.com/file/d/1RIqygK9EbVMsXXD88qhf7-xfX-tDyLXn/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "I'm a castle guard!",
                "line": 217,
                "start_time": "0-12-05.370000",
                "end_time": "0-12-07.080000",
                "url": "https://drive.google.com/file/d/11xa4cuKEHKZZabdJT5FFqMVvjRxQ3wXK/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "Is that too hard for the great musician to figure out?",
                "line": 218,
                "start_time": "0-12-07.080000",
                "end_time": "0-12-10.540000",
                "url": "https://drive.google.com/file/d/1pd0Av_WBU7XbuHD_i6wAbpBNgOeWvPvk/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "We Dark Knights get the same treatment as any ordinary soldier",
                "line": 219,
                "start_time": "0-12-11.090000",
                "end_time": "0-12-14.710000",
                "url": "https://drive.google.com/file/d/1PYdIEHVNLvVgnZJBLoLm5uHrL-tEW0RH/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "while people like you are sitting pretty.",
                "line": 220,
                "start_time": "0-12-14.710000",
                "end_time": "0-12-17.380000",
                "url": "https://drive.google.com/file/d/1WqzTP3PmhAujR_cn6R6SckAfEHFdE4SW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm sorry?",
                "line": 221,
                "start_time": "0-12-17.800000",
                "end_time": "0-12-18.090000",
                "url": "https://drive.google.com/file/d/1lBSv1i4x0hbPsGH778PHMJyYvmkcotUM/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "Don't look down us, jerk.",
                "line": 222,
                "start_time": "0-12-18.090000",
                "end_time": "0-12-20.590000",
                "url": "https://drive.google.com/file/d/1pz53MneXDcW4wgqcApw5UtNWTr9BRdtc/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "We're the ones keeping the kingdom safe.",
                "line": 223,
                "start_time": "0-12-20.590000",
                "end_time": "0-12-22.760000",
                "url": "https://drive.google.com/file/d/13igvQWMB4nV2MVc0VflT1ToSmpYeyOTI/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "You can call us barbarians, but we're risking our lives here!",
                "line": 224,
                "start_time": "0-12-22.760000",
                "end_time": "0-12-26.270000",
                "url": "https://drive.google.com/file/d/1cOkZnGPumV2NnWEIOiWMK0opjdgkL89V/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "While you're just kicking back and enjoying attention from all the women in the palace!",
                "line": 225,
                "start_time": "0-12-26.270000",
                "end_time": "0-12-29.650000",
                "url": "https://drive.google.com/file/d/1_BOMTZDL9USB_UM91Jeomcv83gegdDwp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm sorry?",
                "line": 226,
                "start_time": "0-12-29.850000",
                "end_time": "0-12-31.060000",
                "url": "https://drive.google.com/file/d/1cQXLhZIvz6l9OtU_a-cF6YDZUO3DxWap/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "Don't just stand there grinning. Fight me!",
                "line": 227,
                "start_time": "0-12-31.060000",
                "end_time": "0-12-33.940000",
                "url": "https://drive.google.com/file/d/1gujgmplVLl-5W76mue_A8sGjRekh5Q4Y/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "See if you can defeat the barbaric Dark Knight with that music you're so proud of.",
                "line": 228,
                "start_time": "0-12-33.940000",
                "end_time": "0-12-37.490000",
                "url": "https://drive.google.com/file/d/107Tso2b8JV7f66jCYKBBv5Yxmif_iTn5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm sorry?",
                "line": 229,
                "start_time": "0-12-37.490000",
                "end_time": "0-12-38.700000",
                "url": "https://drive.google.com/file/d/1lrv6L3OwEc4Rj0Jb1N5Ob1U_LFB_bVZH/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "You're pathetic! You're shaking in your boots!",
                "line": 230,
                "start_time": "0-12-38.110000",
                "end_time": "0-12-42.030000",
                "url": "https://drive.google.com/file/d/1-hAajrMZajFKDFZvym0Jv8Zoq4DBdb8_/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "Musician, my ass! The arts are a load of garbage!",
                "line": 231,
                "start_time": "0-12-42.030000",
                "end_time": "0-12-44.740000",
                "url": "https://drive.google.com/file/d/1OvvnwoLt2rfc1AdQVoMDoc6HrvMDEWR7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm sorry?",
                "line": 232,
                "start_time": "0-12-44.740000",
                "end_time": "0-12-45.740000",
                "url": "https://drive.google.com/file/d/1SOHo5OdJ0p_N6gtrSEFGk-XtIk6-P3Gf/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "Now that you know your place, I expect you to never get near her again!",
                "line": 233,
                "start_time": "0-12-45.740000",
                "end_time": "0-12-48.870000",
                "url": "https://drive.google.com/file/d/1KZwbLpYVcB4kr1wK2osRk4QM3sQEr9D7/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "My sweet little Maggie and I are deeply in love, okay?!",
                "line": 234,
                "start_time": "0-12-48.870000",
                "end_time": "0-12-52.670000",
                "url": "https://drive.google.com/file/d/1WpGZBPRrdkwBU5OAt-6FQfWZuCKJ7hDJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm sorr- What?",
                "line": 235,
                "start_time": "0-12-52.670000",
                "end_time": "0-12-54.090000",
                "url": "https://drive.google.com/file/d/18Lj09eHnScgYwauwCuX5przZ5-6LJO9R/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "Every single day, we come to this garden to reaffirm our love for each other.",
                "line": 236,
                "start_time": "0-12-54.800000",
                "end_time": "0-12-58.880000",
                "url": "https://drive.google.com/file/d/1xTZutGRSoVJiq4rfRHO4OXtN3Ub6dtiu/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "I gaze at her, and my dear Meg Muffin turns to see me...",
                "line": 237,
                "start_time": "0-12-59.220000",
                "end_time": "0-13-02.680000",
                "url": "https://drive.google.com/file/d/1yXLWb3T5ezl7jdI9vV3CIMkekZUQ5-pr/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "But she's such a bashful little thing.",
                "line": 238,
                "start_time": "0-13-03.180000",
                "end_time": "0-13-04.930000",
                "url": "https://drive.google.com/file/d/1k7pyxowbkNNsHigUwH9wWNAxWzIdEpUF/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "Her cheeks flush red, and she scampers away from me.",
                "line": 239,
                "start_time": "0-13-04.930000",
                "end_time": "0-13-07.520000",
                "url": "https://drive.google.com/file/d/1Ys9jGvwEEYo_1KhrWtDp9_KXZR0iZjmj/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "Isn't it adorable?",
                "line": 240,
                "start_time": "0-13-07.520000",
                "end_time": "0-13-08.680000",
                "url": "https://drive.google.com/file/d/13cOr8_mGxYiXB6GsjZeeWw5BPxdJxqjV/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "But that's all either of us really needs.",
                "line": 241,
                "start_time": "0-13-09.560000",
                "end_time": "0-13-11.850000",
                "url": "https://drive.google.com/file/d/1d2_42S5LOik3IvXf1-w-jABl0VFHrFr-/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "Do you understand?",
                "line": 242,
                "start_time": "0-13-12.020000",
                "end_time": "0-13-13.230000",
                "url": "https://drive.google.com/file/d/1EqX75dnmBqhxE2Od-KWaAmmKrjBb-m9q/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "We know how each other feel, from a mere meeting of the eyes.",
                "line": 243,
                "start_time": "0-13-13.230000",
                "end_time": "0-13-16.030000",
                "url": "https://drive.google.com/file/d/1kzxDgj5jTLRp_RJHDUW8NiboZ8l8SH8D/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "Oh, my Margie-Wargie!",
                "line": 244,
                "start_time": "0-13-17.280000",
                "end_time": "0-13-19.570000",
                "url": "https://drive.google.com/file/d/1edfUW_f8XGFHiHiSJI-qx0Y9N6g18Rns/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "We haven't spoken a word to each other, but your love is coming through loud and clear!",
                "line": 245,
                "start_time": "0-13-19.570000",
                "end_time": "0-13-23.740000",
                "url": "https://drive.google.com/file/d/1Z6uunizNuuN6MICybCRvg0qr6wMJ0Ue9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I know love comes in all shapes and sizes,",
                "line": 246,
                "start_time": "0-13-23.740000",
                "end_time": "0-13-25.410000",
                "url": "https://drive.google.com/file/d/1xj4HDay71pAEyX0ie4Rccs-5pfQn8oZC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I know love comes in all shapes and sizes,",
                "line": 247,
                "start_time": "0-13-25.410000",
                "end_time": "0-13-26.410000",
                "url": "https://drive.google.com/file/d/1vesaFPVyGbSbY1mtPlLSWCNh4tt894g8/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "You must have been frightened by the approach of a real man!",
                "line": 247,
                "start_time": "0-13-25.410000",
                "end_time": "0-13-26.410000",
                "url": "https://drive.google.com/file/d/1vesaFPVyGbSbY1mtPlLSWCNh4tt894g8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "but the fact that he doesn't see anything",
                "line": 248,
                "start_time": "0-13-26.410000",
                "end_time": "0-13-27.700000",
                "url": "https://drive.google.com/file/d/1Qzjh0BAZ75mDv8eq-v_UYfWogc9Uo_TF/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "You must have been frightened by the approach of a real man!",
                "line": 248,
                "start_time": "0-13-26.410000",
                "end_time": "0-13-27.700000",
                "url": "https://drive.google.com/file/d/1Qzjh0BAZ75mDv8eq-v_UYfWogc9Uo_TF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "questionable in her reactions...",
                "line": 249,
                "start_time": "0-13-27.700000",
                "end_time": "0-13-28.620000",
                "url": "https://drive.google.com/file/d/1e44qEO0_KO0BeBpaUp5_uv-DyjSe4Pml/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "You must have been frightened by the approach of a real man!",
                "line": 249,
                "start_time": "0-13-27.700000",
                "end_time": "0-13-28.620000",
                "url": "https://drive.google.com/file/d/1e44qEO0_KO0BeBpaUp5_uv-DyjSe4Pml/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "questionable in her reactions...",
                "line": 250,
                "start_time": "0-13-28.620000",
                "end_time": "0-13-30.710000",
                "url": "https://drive.google.com/file/d/1jRFjmeBiuSSJofoMLOdUll0e5nvM5MRl/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "I will go right now to comfort you!",
                "line": 250,
                "start_time": "0-13-28.620000",
                "end_time": "0-13-30.710000",
                "url": "https://drive.google.com/file/d/1jRFjmeBiuSSJofoMLOdUll0e5nvM5MRl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I always knew religion was scary.",
                "line": 251,
                "start_time": "0-13-30.710000",
                "end_time": "0-13-32.880000",
                "url": "https://drive.google.com/file/d/1I1a6SGtWNP-iyAPS4-aT2BOJvm7Qyfe3/view?usp=drivesdk"
            },
            {
                "name": "Kevin",
                "name_variant": "Kevin",
                "subtitle": "Me! I will comf...",
                "line": 251,
                "start_time": "0-13-30.710000",
                "end_time": "0-13-32.880000",
                "url": "https://drive.google.com/file/d/1I1a6SGtWNP-iyAPS4-aT2BOJvm7Qyfe3/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I managed to protect my mother,",
                "line": 252,
                "start_time": "0-13-37.130000",
                "end_time": "0-13-39.800000",
                "url": "https://drive.google.com/file/d/1zLk_SX3hez49kCU5ToBV6Wd1309kI_Te/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "but the kingdom...",
                "line": 253,
                "start_time": "0-13-39.800000",
                "end_time": "0-13-41.220000",
                "url": "https://drive.google.com/file/d/1G4jV1o38l1ZSLE7Tu0IO9PgAlFSlZVjJ/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Shadow Garden is on the move.",
                "line": 254,
                "start_time": "0-13-41.630000",
                "end_time": "0-13-43.390000",
                "url": "https://drive.google.com/file/d/1vMCg23FHYXzloYO4nfDVwncqu94OfLEN/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Now that I've turned traitor, they won't give me a second thought.",
                "line": 255,
                "start_time": "0-13-43.970000",
                "end_time": "0-13-47.930000",
                "url": "https://drive.google.com/file/d/1-nw7cZ9m0WqflTdclp-pPHYUtYDq-uBi/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Then there's the Cult of Diablos.",
                "line": 256,
                "start_time": "0-13-48.520000",
                "end_time": "0-13-50.520000",
                "url": "https://drive.google.com/file/d/12uyiwqgy5LByFjzzpymSa9suHD1g-3WH/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "In the not too distant future,",
                "line": 257,
                "start_time": "0-13-50.890000",
                "end_time": "0-13-52.270000",
                "url": "https://drive.google.com/file/d/1I3tZ9Weof_qUiVxeY8bL1blPsemkX_sf/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "my kingdom will be the stage for a clash between the two organizations.",
                "line": 258,
                "start_time": "0-13-52.270000",
                "end_time": "0-13-55.730000",
                "url": "https://drive.google.com/file/d/1XmCJ8fkz-mLKkvi8X9PKSpaLegFIa_hw/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "But as I am now...",
                "line": 259,
                "start_time": "0-13-56.320000",
                "end_time": "0-13-58.530000",
                "url": "https://drive.google.com/file/d/1IeVs0IjGYWFrTPQB6tpmwFGV6YJegSw-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Without magic, that is not an easy climb.",
                "line": 260,
                "start_time": "0-14-05.950000",
                "end_time": "0-14-07.370000",
                "url": "https://drive.google.com/file/d/1Y0exUZP8gmBKATxDNkmMtA1fkKy24Xbe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Without magic, that is not an easy climb.",
                "line": 261,
                "start_time": "0-14-07.370000",
                "end_time": "0-14-08.450000",
                "url": "https://drive.google.com/file/d/1vGfGibZuj3RZAhBdKWehi2ejiCDW3Rl5/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Cid!",
                "line": 261,
                "start_time": "0-14-07.370000",
                "end_time": "0-14-08.450000",
                "url": "https://drive.google.com/file/d/1vGfGibZuj3RZAhBdKWehi2ejiCDW3Rl5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Rose...",
                "line": 262,
                "start_time": "0-14-08.450000",
                "end_time": "0-14-09.660000",
                "url": "https://drive.google.com/file/d/1Y3e8_BOaC65qPSEz6u5IG6Sl1_bS5LJh/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Cid... Cid...",
                "line": 263,
                "start_time": "0-14-10.950000",
                "end_time": "0-14-12.920000",
                "url": "https://drive.google.com/file/d/1HZR48RQEDP5NrXB8810BXqgpiwGuunjf/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "How I've longed to see you!",
                "line": 264,
                "start_time": "0-14-13.580000",
                "end_time": "0-14-14.080000",
                "url": "https://drive.google.com/file/d/1XZDaSU2vE106rq40bmwfoLSBvICJ4FlI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Me, too, Rose.",
                "line": 265,
                "start_time": "0-14-15.630000",
                "end_time": "0-14-17.710000",
                "url": "https://drive.google.com/file/d/1Hb1KuQMn4F2Z3vfIYy5jDe7nU5zI3GmG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I had to see you, no matter what.",
                "line": 266,
                "start_time": "0-14-17.090000",
                "end_time": "0-14-19.960000",
                "url": "https://drive.google.com/file/d/1xDfsimlw2kRflxhrpwdzv5rEWxM9Re7q/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "There's something I've wanted to tell you.",
                "line": 267,
                "start_time": "0-14-19.960000",
                "end_time": "0-14-22.170000",
                "url": "https://drive.google.com/file/d/1-4Uwl51p5yklvhd4FrLiWAPLpE0FxxzB/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "That's no reason to...",
                "line": 268,
                "start_time": "0-14-23.680000",
                "end_time": "0-14-24.970000",
                "url": "https://drive.google.com/file/d/1wQefpg3ppS5CpuIYJEyGtYfE1v3twR6c/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "But how in the world did you get here?",
                "line": 269,
                "start_time": "0-14-26.510000",
                "end_time": "0-14-28.890000",
                "url": "https://drive.google.com/file/d/1_u8P7rsjPM1B9MAQEiDLJ6DbacNxwA_9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I snuck in as the apprentice of a pianist friend of mine.",
                "line": 270,
                "start_time": "0-14-28.890000",
                "end_time": "0-14-32.060000",
                "url": "https://drive.google.com/file/d/1JrvDkIWoNWOxk9lJ_dqIDKBoggH8BTTL/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "You did that for me?",
                "line": 271,
                "start_time": "0-14-32.060000",
                "end_time": "0-14-34.100000",
                "url": "https://drive.google.com/file/d/1exkNwXw6U5KjKAo7Ybyuntt8R56fqfMm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I want to talk to you about your marriage.",
                "line": 272,
                "start_time": "0-14-34.600000",
                "end_time": "0-14-36.940000",
                "url": "https://drive.google.com/file/d/15fijKNOB5ki6pDRkkJgUCdMH9dJfr7Hy/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "There's nothing to talk about.",
                "line": 273,
                "start_time": "0-14-38.820000",
                "end_time": "0-14-40.230000",
                "url": "https://drive.google.com/file/d/1a9NnboGX5MH82MFgSZgIVVD1kKlcsFft/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It's not true, is it? That you're getting married.",
                "line": 274,
                "start_time": "0-14-40.860000",
                "end_time": "0-14-42.650000",
                "url": "https://drive.google.com/file/d/1va7jKAcoCEQpf3C8xMNQRyaTAPeQt-v1/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "It is true.",
                "line": 275,
                "start_time": "0-14-42.650000",
                "end_time": "0-14-43.110000",
                "url": "https://drive.google.com/file/d/1D617U1cnQ1u76jh9SPARdQV9ubjxzUq2/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I am going to marry Duke Perv Asshat.",
                "line": 276,
                "start_time": "0-14-44.610000",
                "end_time": "0-14-47.570000",
                "url": "https://drive.google.com/file/d/16A-u0_cAoOHwQXhIMfbbqygUnJNj-PMs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Lies!",
                "line": 277,
                "start_time": "0-14-47.570000",
                "end_time": "0-14-48.580000",
                "url": "https://drive.google.com/file/d/10U6FsBb-EwCwEmbtuo_M3JYy1wQQKf9k/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Please, you must remember! Think back on that day!",
                "line": 278,
                "start_time": "0-14-48.580000",
                "end_time": "0-14-50.740000",
                "url": "https://drive.google.com/file/d/1bKGtM8QWgWMVmeDh5bdqCb01pPF1nslx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You told me that, come what may, you would be a tyr-",
                "line": 279,
                "start_time": "0-14-51.540000",
                "end_time": "0-14-53.830000",
                "url": "https://drive.google.com/file/d/1Kgvd0hE_wsy2gXeNaq6rpAGtBKr7AEfy/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Cid!",
                "line": 280,
                "start_time": "0-14-53.830000",
                "end_time": "0-14-55.080000",
                "url": "https://drive.google.com/file/d/15eV298mxz8sRtO-4XfJXI7ibI9F0CDNu/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Please...",
                "line": 281,
                "start_time": "0-14-55.420000",
                "end_time": "0-14-56.630000",
                "url": "https://drive.google.com/file/d/1xgVWHayq-YDi_kOwc_LrZX7circlJOo5/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Don't bring up that day.",
                "line": 282,
                "start_time": "0-14-56.960000",
                "end_time": "0-14-58.840000",
                "url": "https://drive.google.com/file/d/1LL3pYdqnti-c2SyZsBAEcSmCj1PA8rxi/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Don't think about me.",
                "line": 283,
                "start_time": "0-14-58.840000",
                "end_time": "0-15-00.670000",
                "url": "https://drive.google.com/file/d/1VTgsiiBnax6P8fO1ap2gKisR6SJjROrw/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Forget all about me.",
                "line": 284,
                "start_time": "0-15-00.670000",
                "end_time": "0-15-02.210000",
                "url": "https://drive.google.com/file/d/1PFeICjipdvP3hm8ksJF3eoI1FIUPOaBt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Rose...",
                "line": 285,
                "start_time": "0-15-02.460000",
                "end_time": "0-15-03.670000",
                "url": "https://drive.google.com/file/d/15gkljE1zFsLSrTw0uqTixGQ-8Wb6QcOe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "No, I can't.",
                "line": 286,
                "start_time": "0-15-05.340000",
                "end_time": "0-15-06.550000",
                "url": "https://drive.google.com/file/d/1-_g8Xl44fz92hAAI3hzkmJITUuW5sQP_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "We're the same.",
                "line": 287,
                "start_time": "0-15-06.930000",
                "end_time": "0-15-08.640000",
                "url": "https://drive.google.com/file/d/1aI56KWlJvDoJcmWQMUa0KQ6Bm_rV2P2q/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Rose, you grew up in a kingdom that looks down on fencers,",
                "line": 288,
                "start_time": "0-15-09.890000",
                "end_time": "0-15-12.770000",
                "url": "https://drive.google.com/file/d/1bgx8yoncDjNUhEu5AeET1dTT05SDrlNj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "but decided to be a Dark Knight.",
                "line": 289,
                "start_time": "0-15-12.770000",
                "end_time": "0-15-14.310000",
                "url": "https://drive.google.com/file/d/1DGjuKamTkcB5z56AtxYTrxugm9OHNAId/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Your peers rejected you, no one understood you.",
                "line": 290,
                "start_time": "0-15-14.640000",
                "end_time": "0-15-17.350000",
                "url": "https://drive.google.com/file/d/1sy5LviSMF-Z3mv19qrZqy_cRK2bhOriZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You were alone.",
                "line": 291,
                "start_time": "0-15-17.350000",
                "end_time": "0-15-18.690000",
                "url": "https://drive.google.com/file/d/17tet2VAhT1DO4cRzRsSGVcA6gA2KrKm4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But you stay true to your chosen way of life.",
                "line": 292,
                "start_time": "0-15-19.020000",
                "end_time": "0-15-21.900000",
                "url": "https://drive.google.com/file/d/13lgDljnfcXaetkA9w_7-3z8Hbe0uCMa0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm just like you.",
                "line": 293,
                "start_time": "0-15-22.190000",
                "end_time": "0-15-23.820000",
                "url": "https://drive.google.com/file/d/1ErXXND_BjRAPAETHG5qIxGPrfzwD-Wwj/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "You? Like me?",
                "line": 294,
                "start_time": "0-15-23.820000",
                "end_time": "0-15-25.450000",
                "url": "https://drive.google.com/file/d/15I4IAx1kbF6XvlHw92mxPAT9JYACHErp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "No one understood my dream either.",
                "line": 295,
                "start_time": "0-15-25.950000",
                "end_time": "0-15-29.620000",
                "url": "https://drive.google.com/file/d/1ab8mz3RANwPlXu5BTRZFohGTyBc5GWE6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So I think I know better than anyone how you've felt.",
                "line": 296,
                "start_time": "0-15-29.620000",
                "end_time": "0-15-32.700000",
                "url": "https://drive.google.com/file/d/12MjrvY3_b46v-1TP9djw7XK29CHqDl4P/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Cid...",
                "line": 297,
                "start_time": "0-15-33.080000",
                "end_time": "0-15-34.290000",
                "url": "https://drive.google.com/file/d/1C1v9szX8-Db8aJgFpJA7H1FtILxMo5hB/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Your dream...",
                "line": 298,
                "start_time": "0-15-34.870000",
                "end_time": "0-15-36.290000",
                "url": "https://drive.google.com/file/d/1YWVsYyecv9PTOp1Ma7UOWpqYN63QCxAK/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I...",
                "line": 299,
                "start_time": "0-15-40.880000",
                "end_time": "0-15-42.090000",
                "url": "https://drive.google.com/file/d/1YDkZLz4Psa0iOuGX5MlaipfKwAvx1_Pp/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I will understand your dream.",
                "line": 300,
                "start_time": "0-15-42.300000",
                "end_time": "0-15-44.590000",
                "url": "https://drive.google.com/file/d/13-zosskl6RguSIGA8GZ0xQbZtvvxopte/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Even if the whole world should reject you, I will always...",
                "line": 301,
                "start_time": "0-15-45.510000",
                "end_time": "0-15-48.760000",
                "url": "https://drive.google.com/file/d/1D5Fs76EuioUT56Ao0CcjZDghy7lozzFF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But the world does not agree.",
                "line": 302,
                "start_time": "0-15-49.760000",
                "end_time": "0-15-51.890000",
                "url": "https://drive.google.com/file/d/1lyugGIYqLX6_mGbnWeqhI-ttww-oU66r/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"Are you stupid?\" they say.",
                "line": 303,
                "start_time": "0-15-52.260000",
                "end_time": "0-15-53.560000",
                "url": "https://drive.google.com/file/d/1AGoLOrfgdzLfeAZ0e04rfWaZ04qh7RKZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"Is something wrong with you?\" they say.",
                "line": 304,
                "start_time": "0-15-53.560000",
                "end_time": "0-15-55.310000",
                "url": "https://drive.google.com/file/d/1vJYtEORkDLpDIgq7acRBjY3VpwDG8QvC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"Would you grow up already?\" they say.",
                "line": 305,
                "start_time": "0-15-55.310000",
                "end_time": "0-15-57.350000",
                "url": "https://drive.google.com/file/d/1ZIBa5repUTn5Tyn4o-u84UhlTjA9O35P/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I don't care what anyone says!",
                "line": 306,
                "start_time": "0-15-57.350000",
                "end_time": "0-15-59.270000",
                "url": "https://drive.google.com/file/d/1k86T7FLRTwfQdHf9AtgC8zlzWzsJMh0O/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Your dream is the most precious thing there is!",
                "line": 307,
                "start_time": "0-15-59.270000",
                "end_time": "0-16-01.940000",
                "url": "https://drive.google.com/file/d/1bPlbq_V66E8Kb0fmilK_owQlChiBUdUE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Rose...",
                "line": 308,
                "start_time": "0-16-02.520000",
                "end_time": "0-16-03.730000",
                "url": "https://drive.google.com/file/d/1bAVJyGfoQZ26L-RSxOw_GMcV4iFdvPQ2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "We tried to stay true to our chosen ways of life.",
                "line": 309,
                "start_time": "0-16-04.940000",
                "end_time": "0-16-07.280000",
                "url": "https://drive.google.com/file/d/1PRtEfry4Dw-zYTJk2729Cicj0mTbvllU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "No matter the obstacles we faced, no matter who rejected us,",
                "line": 310,
                "start_time": "0-16-07.820000",
                "end_time": "0-16-10.620000",
                "url": "https://drive.google.com/file/d/1TprXhGUHT-Lyk8lr5Tmo4FLQx7PIZW1L/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "we stayed true to ourselves.",
                "line": 311,
                "start_time": "0-16-10.620000",
                "end_time": "0-16-11.120000",
                "url": "https://drive.google.com/file/d/1AEW1V3Ck_6E0DxihLaZmHiAlaRs-UWeF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But right now, Rose,",
                "line": 312,
                "start_time": "0-16-11.120000",
                "end_time": "0-16-13.370000",
                "url": "https://drive.google.com/file/d/1-OJJt_iLL7ND1j3Bm1QeY-ExFEmwkDbR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "you are perverting that way of life.",
                "line": 313,
                "start_time": "0-16-13.370000",
                "end_time": "0-16-14.120000",
                "url": "https://drive.google.com/file/d/1yj0k9UECprjn7K_YeAZuud-yfR3LWXj7/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "P-perverting? No!",
                "line": 314,
                "start_time": "0-16-15.500000",
                "end_time": "0-16-16.870000",
                "url": "https://drive.google.com/file/d/1fGyFi8KFS-wRn4BubiTgXuqsZ_AwMXXg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You stabbed your fiance and killed your father!",
                "line": 315,
                "start_time": "0-16-16.870000",
                "end_time": "0-16-19.670000",
                "url": "https://drive.google.com/file/d/1n0M2ht6EPkfjPYqBpo3GTj9mDxqnh52I/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I won't ask you why,",
                "line": 316,
                "start_time": "0-16-20.960000",
                "end_time": "0-16-22.290000",
                "url": "https://drive.google.com/file/d/1FZ3hqJjz7Ak1bI30ZEvjpoVu1XIAe-hj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "because I believe you did it out of your own convictions",
                "line": 317,
                "start_time": "0-16-22.290000",
                "end_time": "0-16-25.260000",
                "url": "https://drive.google.com/file/d/10cbRyfrVvxXNMZxaSzrIMWZBa5zTBPUQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "to stay true to your chosen way of life.",
                "line": 318,
                "start_time": "0-16-25.260000",
                "end_time": "0-16-27.470000",
                "url": "https://drive.google.com/file/d/1RDbqqEd3QGvg5SQ214VT8m5InXSrQ3nb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But why, after all that,",
                "line": 319,
                "start_time": "0-16-27.800000",
                "end_time": "0-16-29.090000",
                "url": "https://drive.google.com/file/d/1Kbb9vTo7RALMSqBbwTEQWyY3p8tvVWNH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "are you doing something to pervert that way of life now?",
                "line": 320,
                "start_time": "0-16-29.090000",
                "end_time": "0-16-31.430000",
                "url": "https://drive.google.com/file/d/1dZXnC1RBzdckuiZEU2E4M1eJm0cVnGM6/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I...",
                "line": 321,
                "start_time": "0-16-31.430000",
                "end_time": "0-16-32.640000",
                "url": "https://drive.google.com/file/d/10_gGtbur1cMNQdgeDbuMiozRNWua_f_a/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Marrying the fiance you once stabbed",
                "line": 322,
                "start_time": "0-16-32.100000",
                "end_time": "0-16-35.180000",
                "url": "https://drive.google.com/file/d/19LsBiTA-7Ab4ehNjiw70t_2yaCtrWA76/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "is tantamount to perverting your way of life!",
                "line": 323,
                "start_time": "0-16-35.180000",
                "end_time": "0-16-37.270000",
                "url": "https://drive.google.com/file/d/1Wh0lVvOs65LcwIEGnpspp6MSMvsaSp9Y/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But you've been true to it all this time!",
                "line": 324,
                "start_time": "0-16-37.560000",
                "end_time": "0-16-39.440000",
                "url": "https://drive.google.com/file/d/14YKkMjUE5gdoMtxnF0YM3SgQuXnpGMwp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So why would you give that up now?!",
                "line": 325,
                "start_time": "0-16-39.850000",
                "end_time": "0-16-42.360000",
                "url": "https://drive.google.com/file/d/16oFKd_B40XnEvfzTngK85PM9P68yJdEL/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I have nothing left to tell you.",
                "line": 326,
                "start_time": "0-16-46.190000",
                "end_time": "0-16-48.450000",
                "url": "https://drive.google.com/file/d/14V0Q51O17pjRpxTyLe2ZxdDGEpb-JNRT/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Please, forget about me, and find your own happiness.",
                "line": 327,
                "start_time": "0-16-49.530000",
                "end_time": "0-16-52.660000",
                "url": "https://drive.google.com/file/d/14AFQxMlPRG0zQzAXUQ8V4fF42RHEjSQ2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I can't!",
                "line": 328,
                "start_time": "0-16-52.660000",
                "end_time": "0-16-53.910000",
                "url": "https://drive.google.com/file/d/1EPrjBom11z3zQ-T0EiTcFdwAsQW-mBng/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Rose, I need you-",
                "line": 329,
                "start_time": "0-16-53.910000",
                "end_time": "0-16-55.120000",
                "url": "https://drive.google.com/file/d/1StuPRJKhymndqFZKGSWuvHyXLVIlhi0t/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "That is my one and only wish.",
                "line": 330,
                "start_time": "0-16-55.120000",
                "end_time": "0-16-58.330000",
                "url": "https://drive.google.com/file/d/1lCNTZQTInIqt8AyVX9j1kB1S23OXCR7g/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "I received a report that there were voices in here.",
                "line": 331,
                "start_time": "0-17-02.380000",
                "end_time": "0-17-05.050000",
                "url": "https://drive.google.com/file/d/1-cqifSGP-AltMot3XCpyuZGTdweh8Y-h/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Does it look like I have a visitor?",
                "line": 332,
                "start_time": "0-17-05.460000",
                "end_time": "0-17-07.340000",
                "url": "https://drive.google.com/file/d/1NT6xFFaWTfxDa6IM5_NqkRVsTJ9Qgske/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "It seems you've been crying.",
                "line": 333,
                "start_time": "0-17-10.510000",
                "end_time": "0-17-12.140000",
                "url": "https://drive.google.com/file/d/1d5BTprjYXx0hb88IWMz87C1ZTeAUGaMD/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Would you kindly refrain from touching m-",
                "line": 334,
                "start_time": "0-17-16.560000",
                "end_time": "0-17-18.180000",
                "url": "https://drive.google.com/file/d/18TVHOvSg_qEOStn5wfJADJ4LUS5poMVc/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Your attitude needs improvement.",
                "line": 335,
                "start_time": "0-17-18.680000",
                "end_time": "0-17-20.390000",
                "url": "https://drive.google.com/file/d/1buwbvYf9B3uBfmPovYv9_fY41On1xnxy/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "We will soon be husband and wife.",
                "line": 336,
                "start_time": "0-17-20.600000",
                "end_time": "0-17-22.520000",
                "url": "https://drive.google.com/file/d/1lAgThMZS3HXeTGlm30CoqBz9xaLZmZVb/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "We'll be married in name only...",
                "line": 337,
                "start_time": "0-17-22.520000",
                "end_time": "0-17-25.360000",
                "url": "https://drive.google.com/file/d/1fZSvle4ILjw3pOOI6-kLvh74krEhmr33/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Mind your tongue.",
                "line": 338,
                "start_time": "0-17-26.280000",
                "end_time": "0-17-28.440000",
                "url": "https://drive.google.com/file/d/1GloHZm5XYUtJv7P4eeAUnvlR9zfReoV1/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Don't forget that Queen Reina's life depends on your agreeableness.",
                "line": 339,
                "start_time": "0-17-28.940000",
                "end_time": "0-17-33.450000",
                "url": "https://drive.google.com/file/d/1KZyJbOtPewYTNNrWyRGWX-NvE9RxzJCA/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Yes, sir.",
                "line": 340,
                "start_time": "0-17-36.290000",
                "end_time": "0-17-37.490000",
                "url": "https://drive.google.com/file/d/10SiryOxKK_SN5E-XH39pj3tmn0ImGK3y/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "That's better.",
                "line": 341,
                "start_time": "0-17-37.910000",
                "end_time": "0-17-39.160000",
                "url": "https://drive.google.com/file/d/1iPytGSMeFGBsnbsK0pvonnpsK2MqKlfu/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Come.",
                "line": 342,
                "start_time": "0-17-40.080000",
                "end_time": "0-17-41.080000",
                "url": "https://drive.google.com/file/d/1riYSLVNQFh1sFny_Z-F7kPiYLSoVL1j8/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "We have a wedding to plan.",
                "line": 343,
                "start_time": "0-17-41.080000",
                "end_time": "0-17-42.830000",
                "url": "https://drive.google.com/file/d/18id3YncWy047NjEF5PzBro0RWbdFEjRr/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Yes, sir.",
                "line": 344,
                "start_time": "0-17-43.960000",
                "end_time": "0-17-44.960000",
                "url": "https://drive.google.com/file/d/1WHSYMBHcqOsWoVPfhtko2US-JCYOw7Nv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I see what's happening.",
                "line": 345,
                "start_time": "0-17-44.960000",
                "end_time": "0-17-46.250000",
                "url": "https://drive.google.com/file/d/1mwuOt4F3N38PbcvlrhkbePQGAogt6HCp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm just going to have to switch to Plan B.",
                "line": 346,
                "start_time": "0-17-46.550000",
                "end_time": "0-17-48.090000",
                "url": "https://drive.google.com/file/d/15FvYX7WrP0gLGaOGv2JH89cIiDJViflx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Still, I wonder if this was supposed to be the wedding ring or something?",
                "line": 347,
                "start_time": "0-17-50.260000",
                "end_time": "0-17-54.090000",
                "url": "https://drive.google.com/file/d/1kX49P1C-PZxhqy7I-LvEDqCf9EdZnd3V/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Maybe I shouldn't have taken it from Mr. Pervert.",
                "line": 348,
                "start_time": "0-17-55.510000",
                "end_time": "0-17-57.680000",
                "url": "https://drive.google.com/file/d/1XF6cK_1SE1xYYYOCyBSvhd_xz1bHPWCw/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I believe this is a first?",
                "line": 349,
                "start_time": "0-18-02.690000",
                "end_time": "0-18-03.100000",
                "url": "https://drive.google.com/file/d/1tnat0NoUJqfxBfmjqcvP9TNI4tOVnYoR/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "For you to fail a mission.",
                "line": 350,
                "start_time": "0-18-03.100000",
                "end_time": "0-18-06.110000",
                "url": "https://drive.google.com/file/d/1xAECgPWKRoyBy9wKNkvkbOtndNVACTnf/view?usp=drivesdk"
            },
            {
                "name": "Victoria",
                "name_variant": "No. 559",
                "subtitle": "My deepest apologies.",
                "line": 351,
                "start_time": "0-18-06.110000",
                "end_time": "0-18-07.690000",
                "url": "https://drive.google.com/file/d/1G3knKAFYZSayqGQ4xdMhC6iyXaFVvhiu/view?usp=drivesdk"
            },
            {
                "name": "Victoria",
                "name_variant": "No. 559",
                "subtitle": "I will dispose of Number 666 as quickly as possible.",
                "line": 352,
                "start_time": "0-18-07.690000",
                "end_time": "0-18-10.240000",
                "url": "https://drive.google.com/file/d/1_OfLRl5HMKdnNYeOr3sCaUqzMuRN-x--/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Her actions were thoughtless and hasty,",
                "line": 353,
                "start_time": "0-18-10.360000",
                "end_time": "0-18-12.700000",
                "url": "https://drive.google.com/file/d/1JsRRLVLyjmoEQBhsDOq8CMVKriVq1u5t/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "but I suspect it's too soon to declare her a traitor just yet.",
                "line": 354,
                "start_time": "0-18-12.700000",
                "end_time": "0-18-15.160000",
                "url": "https://drive.google.com/file/d/1CsvqV8Nlkd26IBCg3lUsck525qy_fT-T/view?usp=drivesdk"
            },
            {
                "name": "Victoria",
                "name_variant": "No. 559",
                "subtitle": "But...",
                "line": 355,
                "start_time": "0-18-15.160000",
                "end_time": "0-18-16.370000",
                "url": "https://drive.google.com/file/d/1HmOMYYvatSpQjLHFn0rqMnhVfyrFoJGU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Your loyalty is quite admirable.",
                "line": 356,
                "start_time": "0-18-16.490000",
                "end_time": "0-18-18.870000",
                "url": "https://drive.google.com/file/d/1DomEW8woWqj3qs0ziJrONwYwYuwjmRhz/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But it is possible to take it too far.",
                "line": 357,
                "start_time": "0-18-19.330000",
                "end_time": "0-18-21.160000",
                "url": "https://drive.google.com/file/d/10dZIRIO-0rjUzYbAfYjzgow9NFnSl24e/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I intend to eventually promote you to a position directly below the Seven Shadows.",
                "line": 358,
                "start_time": "0-18-21.370000",
                "end_time": "0-18-25.790000",
                "url": "https://drive.google.com/file/d/1W55NRwD37HGSawu8ZIzhFfoZhSAmce6N/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Do not disappoint me.",
                "line": 359,
                "start_time": "0-18-25.790000",
                "end_time": "0-18-27.250000",
                "url": "https://drive.google.com/file/d/10XRMWEx4UxVQ1fDnRMSnenilewMyOwxX/view?usp=drivesdk"
            },
            {
                "name": "Victoria",
                "name_variant": "No. 559",
                "subtitle": "I understand.",
                "line": 360,
                "start_time": "0-18-27.670000",
                "end_time": "0-18-28.880000",
                "url": "https://drive.google.com/file/d/1-ScRMj-c1Sklo0mP5sLzijoWQa_jYUJ5/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Besides, this failure was not your fault.",
                "line": 361,
                "start_time": "0-18-29.300000",
                "end_time": "0-18-32.260000",
                "url": "https://drive.google.com/file/d/1O-fL1GU4MW5sXhZWbCL-Qj5gcbmSEJWv/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "This is our responsibility, for not telling Princess Rose about her mother.",
                "line": 362,
                "start_time": "0-18-32.720000",
                "end_time": "0-18-37.180000",
                "url": "https://drive.google.com/file/d/1OYPDHNSPaHxGkVhjCfvmUbFGwkeEbkme/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "We had no idea they would bring Queen Reina to the First Ruins.",
                "line": 363,
                "start_time": "0-18-37.550000",
                "end_time": "0-18-41.100000",
                "url": "https://drive.google.com/file/d/1w90crMNVUJDuzX5u6ax6uK9KSPOuaZyC/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It was the Seven Shadows' mistake that put the two of them in the same place.",
                "line": 364,
                "start_time": "0-18-41.560000",
                "end_time": "0-18-45.100000",
                "url": "https://drive.google.com/file/d/12PqnWV71b8utpMsZUMu7Y_ynxdyXHJcm/view?usp=drivesdk"
            },
            {
                "name": "Victoria",
                "name_variant": "No. 559",
                "subtitle": "You couldn't have...",
                "line": 365,
                "start_time": "0-18-45.440000",
                "end_time": "0-18-46.650000",
                "url": "https://drive.google.com/file/d/105TXCJhe0EHw-Fh02iu84Hw8X-9OgFx5/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "We never meant to lie to her about it,",
                "line": 366,
                "start_time": "0-18-47.270000",
                "end_time": "0-18-49.690000",
                "url": "https://drive.google.com/file/d/1NBwryI_J_b_trgLgKHljSsUJ1-41b7jQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "but we hoped she would never find out.",
                "line": 367,
                "start_time": "0-18-49.690000",
                "end_time": "0-18-51.820000",
                "url": "https://drive.google.com/file/d/1zk3F36fnRb40CyG8p0vhiL3DS6E4ZVgA/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But Lord Shadow has taken over this case, as you know.",
                "line": 368,
                "start_time": "0-18-52.280000",
                "end_time": "0-18-55.200000",
                "url": "https://drive.google.com/file/d/1y-JN_zr_ZySwUw3_urONelxqb7HT7u75/view?usp=drivesdk"
            },
            {
                "name": "Victoria",
                "name_variant": "No. 559",
                "subtitle": "Yes.",
                "line": 369,
                "start_time": "0-18-55.200000",
                "end_time": "0-18-56.200000",
                "url": "https://drive.google.com/file/d/1Q_q6LGKDY-V4TX2WhOk6xnoSeiTR6G4T/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "He made contact with her today,",
                "line": 370,
                "start_time": "0-18-56.450000",
                "end_time": "0-18-59.240000",
                "url": "https://drive.google.com/file/d/1lAwTI1zPAS9r4qlpZn35BS0oOJ6lz3kF/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "but he did not punish her.",
                "line": 371,
                "start_time": "0-19-00.160000",
                "end_time": "0-19-02.080000",
                "url": "https://drive.google.com/file/d/1O_AKSkWIbR3uRLDEofSUxRideF5WFsv6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Either there's something he's after,",
                "line": 372,
                "start_time": "0-19-02.910000",
                "end_time": "0-19-04.960000",
                "url": "https://drive.google.com/file/d/1fxR7IHdBKLGbLulaPPhxhFTEZIX52zf8/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "he's waiting to see what she does,",
                "line": 373,
                "start_time": "0-19-04.960000",
                "end_time": "0-19-06.580000",
                "url": "https://drive.google.com/file/d/1PcrwTdRN-Vk1hiop8TViquN2ptzXuYVL/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "or there's some even deeper purpose.",
                "line": 374,
                "start_time": "0-19-06.580000",
                "end_time": "0-19-08.590000",
                "url": "https://drive.google.com/file/d/1DVs2N5m8M5o9ruI6ITqOxg7VmmaY4AVM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It's beyond our understanding.",
                "line": 375,
                "start_time": "0-19-09.460000",
                "end_time": "0-19-11.340000",
                "url": "https://drive.google.com/file/d/1449DnYCKqkcenf33GKDAIM79skxZnzDc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "There is a view of the world that only he can see.",
                "line": 376,
                "start_time": "0-19-11.090000",
                "end_time": "0-19-14.630000",
                "url": "https://drive.google.com/file/d/1pE6QWLIEuwSY6F-zoeo4dhcSZsqCekWM/view?usp=drivesdk"
            },
            {
                "name": "Victoria",
                "name_variant": "No. 559",
                "subtitle": "It must be a very lonely view.",
                "line": 377,
                "start_time": "0-19-16.510000",
                "end_time": "0-19-19.760000",
                "url": "https://drive.google.com/file/d/1-aSaBhOxmO46BQYytJoSb5WwD2AEjqkm/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "We will trust Lord Shadow's judgment in the matter of Number 666.",
                "line": 378,
                "start_time": "0-19-20.640000",
                "end_time": "0-19-24.060000",
                "url": "https://drive.google.com/file/d/1YIYfjgZdMEtCwqlmpU3qiQ7BbNe-oCk-/view?usp=drivesdk"
            },
            {
                "name": "Victoria",
                "name_variant": "No. 559",
                "subtitle": "Very well.",
                "line": 379,
                "start_time": "0-19-24.430000",
                "end_time": "0-19-25.440000",
                "url": "https://drive.google.com/file/d/1HcTPDb8LyZ875k0l9C9pZ9Llaaw5xrMq/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "The problem is the ring they found at the ruins.",
                "line": 380,
                "start_time": "0-19-25.440000",
                "end_time": "0-19-28.190000",
                "url": "https://drive.google.com/file/d/1mjHcPmSMkPKtZLQCwhJQdklwOsyaiISa/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "If we put undue pressure on them, they might use the key.",
                "line": 381,
                "start_time": "0-19-29.270000",
                "end_time": "0-19-32.610000",
                "url": "https://drive.google.com/file/d/1V86HdM9LvY67Xh6xE_fUx1Swvfa3yN0M/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "And if the legends are true, the kingdom will...",
                "line": 382,
                "start_time": "0-19-33.110000",
                "end_time": "0-19-35.240000",
                "url": "https://drive.google.com/file/d/1KadzKwALaCWflj1tvKzsh92QI_O-MtuQ/view?usp=drivesdk"
            },
            {
                "name": "Victoria",
                "name_variant": "No. 559",
                "subtitle": "Is the Black Rose that dangerous?",
                "line": 383,
                "start_time": "0-19-35.860000",
                "end_time": "0-19-38.570000",
                "url": "https://drive.google.com/file/d/1-9tcfDlW-T8DYj_PChehFSrhl997IKiM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Once, when the Oriana Kingdom was threatened with annihilation,",
                "line": 384,
                "start_time": "0-19-38.820000",
                "end_time": "0-19-41.700000",
                "url": "https://drive.google.com/file/d/1khD1BUCJ7rBGVtAlaQMu4ldKjyMWNYjM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "they used it to wipe out the Velgaltan troops that were bearing down on the royal capital.",
                "line": 385,
                "start_time": "0-19-41.700000",
                "end_time": "0-19-46.040000",
                "url": "https://drive.google.com/file/d/1RzAHx-KHwUih8pEycbzE9FYTAI7CSC3l/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "100,000 of them in a single night.",
                "line": 386,
                "start_time": "0-19-46.040000",
                "end_time": "0-19-47.290000",
                "url": "https://drive.google.com/file/d/1wy3blaTrR1ylLYriRnE88SXsU9TllNj1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That story is more than just a fairy tale.",
                "line": 387,
                "start_time": "0-19-47.290000",
                "end_time": "0-19-49.130000",
                "url": "https://drive.google.com/file/d/1ORtvYc3q6qxjGivrl_qqYos2BJznO0Nr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But this time, the power will be used to destroy the Oriana Kingdom.",
                "line": 388,
                "start_time": "0-19-49.670000",
                "end_time": "0-19-52.960000",
                "url": "https://drive.google.com/file/d/1bTooFeaS16WuBQqEWZ1kZFALBhzZVhEY/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "We must work carefully.",
                "line": 389,
                "start_time": "0-19-53.380000",
                "end_time": "0-19-54.800000",
                "url": "https://drive.google.com/file/d/1TiKcrwQYVvKhNT8FFdYYABFR_PRlLUuH/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "First, we find the exact location of the key-",
                "line": 390,
                "start_time": "0-19-54.800000",
                "end_time": "0-19-56.220000",
                "url": "https://drive.google.com/file/d/1QpumhuN810pYuLXjhFUGjVdRMkgQrmux/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Ah, that was nice.",
                "line": 391,
                "start_time": "0-19-56.220000",
                "end_time": "0-19-58.050000",
                "url": "https://drive.google.com/file/d/1mQ5O_NYJTH86imElry4GTS_dUppU7IKQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I love big bath tubs.",
                "line": 392,
                "start_time": "0-19-58.510000",
                "end_time": "0-20-00.390000",
                "url": "https://drive.google.com/file/d/1WsmlIA-vsyW2wNOJ9jgx4LybuIkxJfhq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That's my girl, Epsilon.",
                "line": 393,
                "start_time": "0-20-00.930000",
                "end_time": "0-20-02.890000",
                "url": "https://drive.google.com/file/d/1olz19-aSnSvXUMJD8znTTXfW-oLjxaE1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "We both know coffee milk is the best thing after a bath.",
                "line": 394,
                "start_time": "0-20-02.890000",
                "end_time": "0-20-05.390000",
                "url": "https://drive.google.com/file/d/1TgOA6yTl2Ow175-QrexIOZWQk9AoOfLV/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It's my honor!",
                "line": 395,
                "start_time": "0-20-05.600000",
                "end_time": "0-20-06.940000",
                "url": "https://drive.google.com/file/d/1-va9rMOc0CNFmxc3n_wk4E-_7z6ZFnH6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Please, come this way, and I'll massage your shoulders.",
                "line": 396,
                "start_time": "0-20-09.520000",
                "end_time": "0-20-12.820000",
                "url": "https://drive.google.com/file/d/1O-6F39bqnUSEqeU2KypmSG-jLbKo8knG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "This brings back memories.",
                "line": 397,
                "start_time": "0-20-12.820000",
                "end_time": "0-20-14.440000",
                "url": "https://drive.google.com/file/d/1rTHkGCsfUo0Tx29eu0U8ym73w43E39Uk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I remember when Eta said she was testing a new mechanical massager,",
                "line": 398,
                "start_time": "0-20-14.440000",
                "end_time": "0-20-18.110000",
                "url": "https://drive.google.com/file/d/1NricVw1hwXD2hILr2mv7BVIWLt4ofteX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "and she made Beta scream.",
                "line": 399,
                "start_time": "0-20-18.110000",
                "end_time": "0-20-19.110000",
                "url": "https://drive.google.com/file/d/1mPO7LZYEdDlL8h5B0RcCRNUwxs5R5llw/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Those were the days when we could be together every day.",
                "line": 400,
                "start_time": "0-20-20.240000",
                "end_time": "0-20-23.290000",
                "url": "https://drive.google.com/file/d/1aja5E4idhPviiyhChR6XolJcSqi73eJ9/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I hope you can relax and enjoy this precious moment just as if you were back in old times.",
                "line": 401,
                "start_time": "0-20-23.830000",
                "end_time": "0-20-28.540000",
                "url": "https://drive.google.com/file/d/1NouHzky94hmmgecIADMSThJ1o9xQT5pS/view?usp=drivesdk"
            },
            {
                "name": "Victoria",
                "name_variant": "No. 559",
                "subtitle": "Even when he's undercover as an average halfwit student,",
                "line": 402,
                "start_time": "0-20-29.830000",
                "end_time": "0-20-32.130000",
                "url": "https://drive.google.com/file/d/1LPcP0AV_QHX9YBjHrcY8M1jOawAkf17d/view?usp=drivesdk"
            },
            {
                "name": "Victoria",
                "name_variant": "No. 559",
                "subtitle": "he's a vision of magnificence.",
                "line": 403,
                "start_time": "0-20-32.130000",
                "end_time": "0-20-33.880000",
                "url": "https://drive.google.com/file/d/1B0eZILT1Wy_1eKqVfTbe2-vPF0vl8KzO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Oh, yeah, about that thing.",
                "line": 404,
                "start_time": "0-20-34.170000",
                "end_time": "0-20-36.090000",
                "url": "https://drive.google.com/file/d/1ORnk8BDmeCRtw5l8TK5B7XZtRkulb9Qi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It looks like it'll be taken care of sooner than expected.",
                "line": 405,
                "start_time": "0-20-36.090000",
                "end_time": "0-20-38.090000",
                "url": "https://drive.google.com/file/d/1YV5-eJTUCMqzacmyEcJF56ImPahj4Soj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It's only your first day undercover, and you've already...",
                "line": 406,
                "start_time": "0-20-38.090000",
                "end_time": "0-20-41.050000",
                "url": "https://drive.google.com/file/d/1zaMkpkicHWVh1dzLO4y-uuUSbCWulYJE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yup.",
                "line": 407,
                "start_time": "0-20-41.050000",
                "end_time": "0-20-42.050000",
                "url": "https://drive.google.com/file/d/1F9UnHoICTvT_Y6sJpmw_i1piWBQ1Kwg5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "As far as that goes, it's practically already over.",
                "line": 408,
                "start_time": "0-20-42.050000",
                "end_time": "0-20-44.390000",
                "url": "https://drive.google.com/file/d/1JL6I8M6KFnIM6VMxSnj-xfg6_4uiVnH2/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You handled it so easily!",
                "line": 409,
                "start_time": "0-20-44.770000",
                "end_time": "0-20-46.350000",
                "url": "https://drive.google.com/file/d/16ZTkB7HBWbf6QWLiW-5jDbLJHut6Z0BA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yeah, I can knock out something like that with my little finger.",
                "line": 410,
                "start_time": "0-20-46.350000",
                "end_time": "0-20-50.400000",
                "url": "https://drive.google.com/file/d/1x_SeXP5zRg0JqsFzpH-ljIxWsG5uEr8Y/view?usp=drivesdk"
            },
            {
                "name": "Victoria",
                "name_variant": "No. 559",
                "subtitle": "You're amazing, Lord Shadow!",
                "line": 411,
                "start_time": "0-20-50.650000",
                "end_time": "0-20-53.770000",
                "url": "https://drive.google.com/file/d/1BSg2O2wCk8dJZpAgp4aLeWy0WYTjyWyq/view?usp=drivesdk"
            },
            {
                "name": "Mordred",
                "name_variant": "Mordred",
                "subtitle": "How is progress, Perv Asshat?",
                "line": 412,
                "start_time": "0-20-55.690000",
                "end_time": "0-20-59.030000",
                "url": "https://drive.google.com/file/d/1k5y-WS62qndLngdSRUhNPKQSol0PhngR/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "The project is moving along without a single hitch, Sir Mordred.",
                "line": 413,
                "start_time": "0-20-59.650000",
                "end_time": "0-21-03.740000",
                "url": "https://drive.google.com/file/d/1eSc1mJ7RxUQgnyeJEZ6mssiC-U4_x2mT/view?usp=drivesdk"
            },
            {
                "name": "Mordred",
                "name_variant": "Mordred",
                "subtitle": "The Black Rose...",
                "line": 414,
                "start_time": "0-21-03.740000",
                "end_time": "0-21-05.410000",
                "url": "https://drive.google.com/file/d/1RCzBIr74kOoORXSz7LwSxFEqenScL4hM/view?usp=drivesdk"
            },
            {
                "name": "Mordred",
                "name_variant": "Mordred",
                "subtitle": "If we can take back its power,",
                "line": 415,
                "start_time": "0-21-05.410000",
                "end_time": "0-21-07.580000",
                "url": "https://drive.google.com/file/d/1DARpHp_8Hm5CKE3wM19-D36LwGkqp3ke/view?usp=drivesdk"
            },
            {
                "name": "Mordred",
                "name_variant": "Mordred",
                "subtitle": "our authority within the Cult will be unshakable.",
                "line": 416,
                "start_time": "0-21-07.580000",
                "end_time": "0-21-11.080000",
                "url": "https://drive.google.com/file/d/1hUc70_LfGYZPNH8vEXyVrRypxsYHimvI/view?usp=drivesdk"
            },
            {
                "name": "Mordred",
                "name_variant": "Mordred",
                "subtitle": "But it seems there are some rats sniffing around.",
                "line": 417,
                "start_time": "0-21-11.540000",
                "end_time": "0-21-14.250000",
                "url": "https://drive.google.com/file/d/1x-pe5m7zhKC6YoGQnvwa3w0zWlhoqRdO/view?usp=drivesdk"
            },
            {
                "name": "Mordred",
                "name_variant": "Mordred",
                "subtitle": "Don't get careless.",
                "line": 418,
                "start_time": "0-21-14.250000",
                "end_time": "0-21-15.550000",
                "url": "https://drive.google.com/file/d/1buJLk1wqQ8F6KQa3GPcw_Y5oZonKd8wm/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "No need to worry.",
                "line": 419,
                "start_time": "0-21-15.550000",
                "end_time": "0-21-16.920000",
                "url": "https://drive.google.com/file/d/1LzWec3bOtiTSNMUVb2_GugzfG2Bm5BQF/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "The Ring of Succession never leaves my person.",
                "line": 420,
                "start_time": "0-21-16.920000",
                "end_time": "0-21-20.470000",
                "url": "https://drive.google.com/file/d/1hv2MF2ZTJijHu3vfQ9r9iO2kMlDAwjm-/view?usp=drivesdk"
            },
            {
                "name": "Mordred",
                "name_variant": "Mordred",
                "subtitle": "Good.",
                "line": 421,
                "start_time": "0-21-20.760000",
                "end_time": "0-21-22.090000",
                "url": "https://drive.google.com/file/d/1K1O91ufBVt4ayQXIEPAyv4zx3m9YJCTg/view?usp=drivesdk"
            },
            {
                "name": "Mordred",
                "name_variant": "Mordred",
                "subtitle": "When the sun rises on our success, then you, too, will be granted a seat in Rounds.",
                "line": 422,
                "start_time": "0-21-22.090000",
                "end_time": "0-21-26.640000",
                "url": "https://drive.google.com/file/d/1DPl4-JIfslFWrminIp2sGTc2IxkweO6z/view?usp=drivesdk"
            },
            {
                "name": "Mordred",
                "name_variant": "Mordred",
                "subtitle": "But you are not married to the princess yet.",
                "line": 423,
                "start_time": "0-21-26.930000",
                "end_time": "0-21-29.270000",
                "url": "https://drive.google.com/file/d/1ww8ut6Q8GjSaRc5zLXVKmS64omKvfcGc/view?usp=drivesdk"
            },
            {
                "name": "Mordred",
                "name_variant": "Mordred",
                "subtitle": "Make no mistakes, Perv Asshat.",
                "line": 424,
                "start_time": "0-21-29.270000",
                "end_time": "0-21-31.850000",
                "url": "https://drive.google.com/file/d/1X-yyKyAknQglo2RjgJ9fm4dcnam4pcd6/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Yes, sir.",
                "line": 425,
                "start_time": "0-21-32.060000",
                "end_time": "0-21-33.270000",
                "url": "https://drive.google.com/file/d/1KWArHmTFahe-a5JCtJr2pwTojqyWHaqB/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Senile old fool...",
                "line": 426,
                "start_time": "0-21-36.690000",
                "end_time": "0-21-37.900000",
                "url": "https://drive.google.com/file/d/15sv0nRkWuap0rjXEewqI3yUbmGTG1mIG/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "The key, Princess Rose, the kingdom...",
                "line": 427,
                "start_time": "0-21-38.610000",
                "end_time": "0-21-42.490000",
                "url": "https://drive.google.com/file/d/1hzhwKM6ZzDYjEZkTBXHvemd8Pl5DsEaS/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "They're all here in my hands.",
                "line": 428,
                "start_time": "0-21-42.490000",
                "end_time": "0-21-44.490000",
                "url": "https://drive.google.com/file/d/13ZaiKhqmvRFhP0TqIIxZXr1fXg6S_rdR/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "What will you do about it, Shadow Garden?",
                "line": 429,
                "start_time": "0-21-45.740000",
                "end_time": "0-21-48.910000",
                "url": "https://drive.google.com/file/d/1VanBdMTyAZdc4vnoWf1gU33kOb7NPrCD/view?usp=drivesdk"
            },
            {
                "name": "Reina Oriana",
                "name_variant": "Reina Oriana",
                "subtitle": "Oh, Perv, where are you?",
                "line": 430,
                "start_time": "0-21-49.410000",
                "end_time": "0-21-51.250000",
                "url": "https://drive.google.com/file/d/1u79lyaPF1372lq2o7FMMFnZTTDhbfX46/view?usp=drivesdk"
            },
            {
                "name": "Reina Oriana",
                "name_variant": "Reina Oriana",
                "subtitle": "Perv!",
                "line": 431,
                "start_time": "0-21-51.670000",
                "end_time": "0-21-52.870000",
                "url": "https://drive.google.com/file/d/1mgHjoeamX93KCHM5YgOpWQbxZQ8ZLFWV/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Honestly!",
                "line": 432,
                "start_time": "0-21-56.380000",
                "end_time": "0-21-57.590000",
                "url": "https://drive.google.com/file/d/1fIAdTdmQiEO4SBfRQcSsSk_ZqRUKHrn7/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Women are so incorrigible.",
                "line": 433,
                "start_time": "0-21-58.380000",
                "end_time": "0-22-00.510000",
                "url": "https://drive.google.com/file/d/1ebi5iQeYxe-uAEavJvt71FSMjz8IRtOt/view?usp=drivesdk"
            },
            {
                "name": "Reina Oriana",
                "name_variant": "Reina Oriana",
                "subtitle": "Perv!",
                "line": 434,
                "start_time": "0-22-05.680000",
                "end_time": "0-22-06.890000",
                "url": "https://drive.google.com/file/d/1rLaY-ElItXm0gj9-6rWT_ixK-MAprdKK/view?usp=drivesdk"
            },
            {
                "name": "Reina Oriana",
                "name_variant": "Reina Oriana",
                "subtitle": "I was so lonely!",
                "line": 435,
                "start_time": "0-22-07.140000",
                "end_time": "0-22-08.560000",
                "url": "https://drive.google.com/file/d/1UmThS40_Y3Irf7MMM2lNflvA-M3zJurM/view?usp=drivesdk"
            }
        ]
    }
}

let setDoc = db.collection('data').doc('an_s2_e10').set(data['s2']);

//let setDoc = db.collection('data').doc('ssc_p3_c3-4').set(data['p3']['c3-4']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

//let setDoc = db.collection('data').doc('ln_v5').set(data['v5']);

// let setDoc = db.collection('data').doc('an_s101').set(data['kj1']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
