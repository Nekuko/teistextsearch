const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "s1": {
        "e2": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I don't remember how it started.",
                "line": 1,
                "start_time": "0-00-08.080000",
                "end_time": "0-00-10.380000",
                "url": "https://drive.google.com/file/d/1bYB7tHaOPX0O4YTlLWse8BlwguTFOHDj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "As far back as I can remember, it's what I always wanted to be:",
                "line": 2,
                "start_time": "0-00-11.210000",
                "end_time": "0-00-14.790000",
                "url": "https://drive.google.com/file/d/1QK1eLvnLZVczmR4EkuuAhLao0avvrVFg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The Eminence in Shadow.",
                "line": 3,
                "start_time": "0-00-15.830000",
                "end_time": "0-00-17.380000",
                "url": "https://drive.google.com/file/d/1fyACI0k8NUw3x1VM_WbDAxuDipi0mw7H/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Alpha...",
                "line": 4,
                "start_time": "0-00-19.960000",
                "end_time": "0-00-21",
                "url": "https://drive.google.com/file/d/1rVLspe8cJ4JQ8js9hTHRw3f3X5qwrEew/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Everything you said turned out to be true.",
                "line": 5,
                "start_time": "0-00-22.130000",
                "end_time": "0-00-25.460000",
                "url": "https://drive.google.com/file/d/1y1iLQ2_Ec21q5YGfSHGT75tE4RZ_-jDK/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I looked in those ancient texts and found",
                "line": 6,
                "start_time": "0-00-26",
                "end_time": "0-00-27.750000",
                "url": "https://drive.google.com/file/d/1OuCxjDpSNPtmXgmLjnGfEtUeGHwJHofW/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "a description of what we believe to be the Cult of Diablos.",
                "line": 7,
                "start_time": "0-00-27.750000",
                "end_time": "0-00-30.170000",
                "url": "https://drive.google.com/file/d/12_gw8Xz7R3egaRa-npYJJSOOsKgEMe_B/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "As I suspected.",
                "line": 8,
                "start_time": "0-00-30.500000",
                "end_time": "0-00-31.750000",
                "url": "https://drive.google.com/file/d/1v3mmxoFhkdXL6VhWoa9j-SZj0UGsRzT_/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "The more we learn, the more powerful they appear to be.",
                "line": 9,
                "start_time": "0-00-32.420000",
                "end_time": "0-00-36",
                "url": "https://drive.google.com/file/d/15qHZul5C2ZERbh5uxgZWg4WHvA73wIUX/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Nevertheless, I...",
                "line": 10,
                "start_time": "0-00-37.380000",
                "end_time": "0-00-38.830000",
                "url": "https://drive.google.com/file/d/1eRsII0QX-UW2YOf9U_AuvNNzXhg39S_v/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "We lurk in the shadows, and hunt the shadows.",
                "line": 11,
                "start_time": "0-00-39.170000",
                "end_time": "0-00-41.920000",
                "url": "https://drive.google.com/file/d/1hZ7m0_wUJVy0JHlaqHMz-XjHxd7GaeXh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yes, that's what I want.",
                "line": 12,
                "start_time": "0-00-49.460000",
                "end_time": "0-00-51.420000",
                "url": "https://drive.google.com/file/d/1BQtbZXd3QmCewR02kAIb4XKiFkMvzjte/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That is how I will finally become the Eminence in Shadow.",
                "line": 13,
                "start_time": "0-00-52.960000",
                "end_time": "0-00-55.710000",
                "url": "https://drive.google.com/file/d/1q4CoIVCAYq8WYdWAqe1ZSB5TnOh_JwFI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But man, this elf is a pushover.",
                "line": 14,
                "start_time": "0-00-57.080000",
                "end_time": "0-00-59.670000",
                "url": "https://drive.google.com/file/d/1VCF7nSdJP-GRAWaBHpQzZfIHryFaL5TA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Minoru Kageno",
                "subtitle": "The last summer of my high school career,",
                "line": 15,
                "start_time": "0-02-31.420000",
                "end_time": "0-02-33.420000",
                "url": "https://drive.google.com/file/d/1OBIjxKoUxwPDpiHltY9wq5-5bSMJSTkg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Minoru Kageno",
                "subtitle": "I, Minoru Kageno,",
                "line": 16,
                "start_time": "0-02-33.420000",
                "end_time": "0-02-35.290000",
                "url": "https://drive.google.com/file/d/1Zm4Q4AN6AAQYdlla80MKD1RrQAXG_TSr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Minoru Kageno",
                "subtitle": "was following the path to becoming the Eminence in Shadow,",
                "line": 17,
                "start_time": "0-02-35.290000",
                "end_time": "0-02-37.420000",
                "url": "https://drive.google.com/file/d/1ky-2aHFcZMTgqjPUrTxjECOVh7HzDzzp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Minoru Kageno",
                "subtitle": "when my journey seemed to be cut drastically short.",
                "line": 18,
                "start_time": "0-02-37.420000",
                "end_time": "0-02-39.460000",
                "url": "https://drive.google.com/file/d/1rvRiF2XvGfzFxxvBkHeyUM58fve-kFH9/view?usp=drivesdk"
            },
            {
                "name": "Mr. Kagenou",
                "name_variant": "Mr. Kagenou",
                "subtitle": "Claire always wanted a little brother!",
                "line": 19,
                "start_time": "0-02-45.170000",
                "end_time": "0-02-47.540000",
                "url": "https://drive.google.com/file/d/16BDEcZh297K5XvipoyKEL7hEMpyqdBNP/view?usp=drivesdk"
            },
            {
                "name": "Mr. Kagenou",
                "name_variant": "Mr. Kagenou",
                "subtitle": "She'll be overjoyed!",
                "line": 20,
                "start_time": "0-02-47.540000",
                "end_time": "0-02-48.920000",
                "url": "https://drive.google.com/file/d/1mDwxglC9EtBOQKtkwXALnmvEADT67nlH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "What the...",
                "line": 21,
                "start_time": "0-02-49.960000",
                "end_time": "0-02-51.170000",
                "url": "https://drive.google.com/file/d/1JGkZgJ0AmI1LKbgP41tWINgEUSu-xULJ/view?usp=drivesdk"
            },
            {
                "name": "Mrs. Kagenou",
                "name_variant": "Mrs. Kagenou",
                "subtitle": "But something's not right.",
                "line": 22,
                "start_time": "0-02-51.500000",
                "end_time": "0-02-53.420000",
                "url": "https://drive.google.com/file/d/1yhcSsJJ2LNyny5uLGbP-kCV6duQI5TVk/view?usp=drivesdk"
            },
            {
                "name": "Mrs. Kagenou",
                "name_variant": "Mrs. Kagenou",
                "subtitle": "He's not crying at all.",
                "line": 23,
                "start_time": "0-02-53.420000",
                "end_time": "0-02-54.830000",
                "url": "https://drive.google.com/file/d/1vZTPEVpX5ApZ7nFlMUr4HmjYgfH0nVCt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Oh, I get it.",
                "line": 24,
                "start_time": "0-03-01.630000",
                "end_time": "0-03-02.830000",
                "url": "https://drive.google.com/file/d/1pGph4ggqBwfqPrnJ-upMfLdzi2qCuUwb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Waah! Waah!",
                "line": 25,
                "start_time": "0-03-03.210000",
                "end_time": "0-03-05.290000",
                "url": "https://drive.google.com/file/d/1iaYbCiCqIYSlcDYK4BkE0Lg1Mc1iCpOF/view?usp=drivesdk"
            },
            {
                "name": "Mr. Kagenou",
                "name_variant": "Mr. Kagenou",
                "subtitle": "What a hearty cry!",
                "line": 26,
                "start_time": "0-03-05.630000",
                "end_time": "0-03-08",
                "url": "https://drive.google.com/file/d/1pwB3NHoYpNuM8HP6nEYmt4e5rSsa9pfv/view?usp=drivesdk"
            },
            {
                "name": "Mrs. Kagenou",
                "name_variant": "Mrs. Kagenou",
                "subtitle": "I must have been imagining things.",
                "line": 27,
                "start_time": "0-03-08",
                "end_time": "0-03-09.790000",
                "url": "https://drive.google.com/file/d/1ZbKck8qVIjS9ttt7LpgWA9olKjt6ZM5B/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I have no idea how or why this could have happened.",
                "line": 28,
                "start_time": "0-03-10.420000",
                "end_time": "0-03-12.790000",
                "url": "https://drive.google.com/file/d/1btzkH7KMbb0UUjf2dRBZH8Je4jN1iNhy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But that's just a minor detail.",
                "line": 29,
                "start_time": "0-03-13.830000",
                "end_time": "0-03-15.920000",
                "url": "https://drive.google.com/file/d/1EANgitF7g3hQneLEf-9HYdBtQDAvd-1D/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "More importantly, the air is filled with magical energy.",
                "line": 30,
                "start_time": "0-03-17.790000",
                "end_time": "0-03-21.330000",
                "url": "https://drive.google.com/file/d/1u238BuAb5egkA4ym7qzDA1GH9lrbGdjv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "In my past life, magic was the stuff of dreams and fairy tales.",
                "line": 31,
                "start_time": "0-03-22.790000",
                "end_time": "0-03-26",
                "url": "https://drive.google.com/file/d/1WrgV3zPP0B1UWuY-WT710EJZ7wJN5tkC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But now I can claim this overwhelming power for my own.",
                "line": 32,
                "start_time": "0-03-26.420000",
                "end_time": "0-03-29.130000",
                "url": "https://drive.google.com/file/d/1VyNE3O3fEFV9ePh9XCQKfSG2rSjhk6Zz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That's the only thing that matters.",
                "line": 33,
                "start_time": "0-03-30.130000",
                "end_time": "0-03-31.750000",
                "url": "https://drive.google.com/file/d/1W-dwWxkY7ZKg4bWxdd2ERE9sNuRihN_D/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "With this power, I can...",
                "line": 34,
                "start_time": "0-03-33.040000",
                "end_time": "0-03-34.830000",
                "url": "https://drive.google.com/file/d/101xz1z1vYAgdGUdab16MYSj1oy0TF6dK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Uh, I pooped.",
                "line": 35,
                "start_time": "0-03-40.500000",
                "end_time": "0-03-42.460000",
                "url": "https://drive.google.com/file/d/1PG8SjVP5MU-OD1gahQ8O7RSqs3X9Fe84/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Waah! Waah!",
                "line": 36,
                "start_time": "0-03-42.670000",
                "end_time": "0-03-45.790000",
                "url": "https://drive.google.com/file/d/1_sUj4w7CViv3hwe7z6TjSawEJalRm3wR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Oh, before I forget,",
                "line": 37,
                "start_time": "0-03-46.540000",
                "end_time": "0-03-48.250000",
                "url": "https://drive.google.com/file/d/1WxKTfWFFHebFjVVaTtMz2gBg9PoJUkai/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I was reborn as the son of Baron Kagenou, an aristocrat living out in the boonies.",
                "line": 38,
                "start_time": "0-03-48.250000",
                "end_time": "0-03-51.210000",
                "url": "https://drive.google.com/file/d/12zs1XE8a1yBLPYru54mUBMw3UukgTuua/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "For generations, this family has pumped out Dark Knights,",
                "line": 39,
                "start_time": "0-03-51.210000",
                "end_time": "0-03-54.170000",
                "url": "https://drive.google.com/file/d/1nC1iZQ5h_lu6UR5fpPQ48wCRt0if-9np/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "fencers that enhance their physical abilities using magic.",
                "line": 40,
                "start_time": "0-03-54.170000",
                "end_time": "0-03-56.920000",
                "url": "https://drive.google.com/file/d/14SCP3S47BtVQABFM8i25sEtWFSHrmslq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And everyone has high hopes for the Kagenou heir....",
                "line": 41,
                "start_time": "0-03-58.790000",
                "end_time": "0-04-01.130000",
                "url": "https://drive.google.com/file/d/1713s6tBG5YoDO2ZYoh7HRryiendQVbjy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "who is not me.",
                "line": 42,
                "start_time": "0-04-01.630000",
                "end_time": "0-04-02.880000",
                "url": "https://drive.google.com/file/d/1r0xoPs_0m1ajK7yzRhF5hJuA0P41EJob/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Hidden in the shadow of my abundantly talented sister,",
                "line": 43,
                "start_time": "0-04-09.080000",
                "end_time": "0-04-11.710000",
                "url": "https://drive.google.com/file/d/1VoZ6suX4ESPonVsZ_dU3UHo-Wt24xY8w/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I grew up as the average, ordinary Dark Knight in Training Background Character A.",
                "line": 44,
                "start_time": "0-04-11.920000",
                "end_time": "0-04-16.380000",
                "url": "https://drive.google.com/file/d/1ZX8j0RKkmg6FWpJmPgScioFOAcEUf1It/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But under that exterior...",
                "line": 45,
                "start_time": "0-04-17.170000",
                "end_time": "0-04-18.710000",
                "url": "https://drive.google.com/file/d/1f4EGQVh2dEpz21NkKrm5ARWzHqg-ZccF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I see business is booming, my dear bandits!",
                "line": 46,
                "start_time": "0-04-24.380000",
                "end_time": "0-04-27.080000",
                "url": "https://drive.google.com/file/d/1tNzysmVERhLYSrLPiHU61S1LMMFy2b1d/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "So kindly show me all your valuables.",
                "line": 47,
                "start_time": "0-04-27.080000",
                "end_time": "0-04-29.830000",
                "url": "https://drive.google.com/file/d/18NMLDSlZLERmvGFI4laes9wivwlWjFdb/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "Don't get cocky with us, kid!",
                "line": 48,
                "start_time": "0-04-29.830000",
                "end_time": "0-04-32.130000",
                "url": "https://drive.google.com/file/d/1nUM_W5eGwEOBHxmYC-olNx0ZLfOkCl2d/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "He just...",
                "line": 49,
                "start_time": "0-04-33.420000",
                "end_time": "0-04-34.630000",
                "url": "https://drive.google.com/file/d/1LBeYPnFKWApM57muROZ4rLtFZ3X0bAi5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "You, over there, enough idle chitchat.",
                "line": 50,
                "start_time": "0-04-34.920000",
                "end_time": "0-04-37.330000",
                "url": "https://drive.google.com/file/d/1BVvlf1yj4Q6frxr_q9otITYTJ9ThqbdB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I said, show me the money.",
                "line": 51,
                "start_time": "0-04-37.960000",
                "end_time": "0-04-39.830000",
                "url": "https://drive.google.com/file/d/1PIO3ZrngLm0V-KkkDxCPWkwY_UKJti6C/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "A slime sword...",
                "line": 52,
                "start_time": "0-04-45.460000",
                "end_time": "0-04-46.920000",
                "url": "https://drive.google.com/file/d/1YhZVW-D2WpgJha1sj-WZPF0bipdkGi6s/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Nice, isn't it?",
                "line": 53,
                "start_time": "0-04-46.920000",
                "end_time": "0-04-48.250000",
                "url": "https://drive.google.com/file/d/1WWsNPtACCyocknRE-cH966SPKHhMkCbR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Wow, it's even more useful than I thought it'd be.",
                "line": 54,
                "start_time": "0-04-52.670000",
                "end_time": "0-04-55.580000",
                "url": "https://drive.google.com/file/d/1t1guhg_gGmUjGyxt8PaeLHpG0lTBrjXM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Uh, wait...",
                "line": 55,
                "start_time": "0-04-56.040000",
                "end_time": "0-04-57.290000",
                "url": "https://drive.google.com/file/d/1r90Z2hjEvS5R8CEbo2wu1uzmE5IX55RW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "All right, fine...",
                "line": 56,
                "start_time": "0-04-58.540000",
                "end_time": "0-04-59.750000",
                "url": "https://drive.google.com/file/d/1qU1-kgCgQVgp9WZ5IG3X0N5-PPTWGkWF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Next...",
                "line": 57,
                "start_time": "0-04-59.880000",
                "end_time": "0-05-01.080000",
                "url": "https://drive.google.com/file/d/1pyTbHSyfR1fF4ea-fIYaS38fHrC7935x/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I can test it on you.",
                "line": 58,
                "start_time": "0-05-01.290000",
                "end_time": "0-05-03.170000",
                "url": "https://drive.google.com/file/d/1KjExT-tuqy3Zm7LoUipv7uIsBqIfJNf0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "If you really work at it, you can survive for about two minutes.",
                "line": 59,
                "start_time": "0-05-04.290000",
                "end_time": "0-05-07.040000",
                "url": "https://drive.google.com/file/d/1dWqyQhqR9Yq4BPfGJRrKVnzmogiIhw1q/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "So hang in there.",
                "line": 60,
                "start_time": "0-05-07.750000",
                "end_time": "0-05-09.130000",
                "url": "https://drive.google.com/file/d/1y2GWvjI6r6UpSMQchxlh433f7i221Q2B/view?usp=drivesdk"
            },
            {
                "name": "Bandit Leader",
                "name_variant": "Bandit Leader",
                "subtitle": "Don't mock me, boy!",
                "line": 61,
                "start_time": "0-05-10.250000",
                "end_time": "0-05-11.920000",
                "url": "https://drive.google.com/file/d/1H0vptKjuqyo4ukt-nP8toRM8wfmfTkSt/view?usp=drivesdk"
            },
            {
                "name": "Bandit Leader",
                "name_variant": "Bandit Leader",
                "subtitle": "Surprised?",
                "line": 62,
                "start_time": "0-05-12.170000",
                "end_time": "0-05-13.210000",
                "url": "https://drive.google.com/file/d/1JyCxxY0zSYga4TiRvZ-SSZCIia6IK7HN/view?usp=drivesdk"
            },
            {
                "name": "Bandit Leader",
                "name_variant": "Bandit Leader",
                "subtitle": "I might not look like much, but I'm a Bushinryu master!",
                "line": 63,
                "start_time": "0-05-13.210000",
                "end_time": "0-05-16.960000",
                "url": "https://drive.google.com/file/d/1eiFCo6xM0_Un2gu5qLHRdV6ZyKmUQxyc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Just kidding.",
                "line": 64,
                "start_time": "0-05-20.630000",
                "end_time": "0-05-22.080000",
                "url": "https://drive.google.com/file/d/1GCoYnWRrp9DgpxDuKTlMNs2prH8eJLp6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "You didn't last two minutes.",
                "line": 65,
                "start_time": "0-05-24.250000",
                "end_time": "0-05-26.170000",
                "url": "https://drive.google.com/file/d/1XDbLYPZwMiIF_evhAwhdBlSUsPW4qcFs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Yup, I'm really happy with this slime bodysuit, too.",
                "line": 66,
                "start_time": "0-05-27",
                "end_time": "0-05-30.250000",
                "url": "https://drive.google.com/file/d/1vTVtZcL6Hr8cB1gb_ELzenPqCDYySST8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "My caravan friends, I have avenged you.",
                "line": 67,
                "start_time": "0-05-32",
                "end_time": "0-05-35.250000",
                "url": "https://drive.google.com/file/d/131i-qfjM1GOKRsrt3VrBnBRlIU1VmgqS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Don't worry, I will make good use of the gifts you left behind.",
                "line": 68,
                "start_time": "0-05-37.500000",
                "end_time": "0-05-41.250000",
                "url": "https://drive.google.com/file/d/1E_mdoxVwzVIR_CLHglCg2zIYGlGWZtbM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Money, art, food, and...",
                "line": 69,
                "start_time": "0-05-41.880000",
                "end_time": "0-05-44.670000",
                "url": "https://drive.google.com/file/d/1XTgQrtPARoadWDdnF8mTzIqxcGLEvSKN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "A cage? Is it a slave?",
                "line": 70,
                "start_time": "0-05-49.830000",
                "end_time": "0-05-51.880000",
                "url": "https://drive.google.com/file/d/18_olQetVF-kY4mqkddNFueaI2Zr1shD0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "This is unexpected.",
                "line": 71,
                "start_time": "0-05-56.830000",
                "end_time": "0-05-58.460000",
                "url": "https://drive.google.com/file/d/1bdHRtvRXgWcuiTLbFBxOLCrGkk9Mx84J/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "You're not a corpse.",
                "line": 72,
                "start_time": "0-05-59.630000",
                "end_time": "0-06-01.250000",
                "url": "https://drive.google.com/file/d/1o9oEz21k1Fl6_I2BFgfVsSxmNM9FQzYL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "You've started to rot, but you're still alive.",
                "line": 73,
                "start_time": "0-06-01.250000",
                "end_time": "0-06-03.580000",
                "url": "https://drive.google.com/file/d/1JMu3kj6YwWs7-0IRWNluZopthnh1knRM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Which means you're possessed?",
                "line": 74,
                "start_time": "0-06-03.960000",
                "end_time": "0-06-05.880000",
                "url": "https://drive.google.com/file/d/1IKC5x2EsJXf9pxsrWGWbO0bD5FPtwT_w/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "That wavelength...",
                "line": 75,
                "start_time": "0-06-08.250000",
                "end_time": "0-06-09.540000",
                "url": "https://drive.google.com/file/d/1LFcj-kKEPCoTAupdBBcF73pIQfEO9D99/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I've felt it before.",
                "line": 76,
                "start_time": "0-06-09.540000",
                "end_time": "0-06-10.830000",
                "url": "https://drive.google.com/file/d/1SSGJb1lHvfn7IOMxNvaGtamZ7UxlZls-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "It's just like a magical overload.",
                "line": 77,
                "start_time": "0-06-11.040000",
                "end_time": "0-06-12.830000",
                "url": "https://drive.google.com/file/d/185VK3OdVrD-c3CUHRuHQ2YDpR-AZPsK2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I can use this blob.",
                "line": 78,
                "start_time": "0-06-20.080000",
                "end_time": "0-06-22.210000",
                "url": "https://drive.google.com/file/d/1Ao3cLSWpoRImh6KrYWA5SQcomMaoW3g0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "It's not my body,",
                "line": 79,
                "start_time": "0-06-22.790000",
                "end_time": "0-06-24.210000",
                "url": "https://drive.google.com/file/d/1WPlKQouX9WHk0re0mIogTdqJ8EQDjfy9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "so I can do anything I want with it without hurting myself.",
                "line": 80,
                "start_time": "0-06-24.210000",
                "end_time": "0-06-26.460000",
                "url": "https://drive.google.com/file/d/1mugi0ZbUadsvueAxwcWxnKNt8yANAEQM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "After that, I started shooting it up with magic.",
                "line": 81,
                "start_time": "0-06-27.540000",
                "end_time": "0-06-30.630000",
                "url": "https://drive.google.com/file/d/19G5dYp-XBZ8Sux5eRhqDTmw_aJu8ZWPO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I tried all kinds of things that didn't work in a period of exhilarating experimentation.",
                "line": 82,
                "start_time": "0-06-30.790000",
                "end_time": "0-06-34.830000",
                "url": "https://drive.google.com/file/d/169IA7gzJPCJ1VYKuADleeSjzbnwp5NBz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Then, one month later...",
                "line": 83,
                "start_time": "0-06-35.710000",
                "end_time": "0-06-37.330000",
                "url": "https://drive.google.com/file/d/1hGvBf5SrtZ5ooViBQJVGIG5gjFqNUKw1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I finally succeeded in containing the magical overload.",
                "line": 84,
                "start_time": "0-06-38.500000",
                "end_time": "0-06-43",
                "url": "https://drive.google.com/file/d/1MKVmqRxdSITjJgKgPz19KgglKd-Yx1-I/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But...",
                "line": 85,
                "start_time": "0-06-43.460000",
                "end_time": "0-06-44.750000",
                "url": "https://drive.google.com/file/d/1UdkpVmqs7eQc-4RLNIJjPK1Upe51Kpnv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Oh, man...",
                "line": 86,
                "start_time": "0-06-53.040000",
                "end_time": "0-06-54.330000",
                "url": "https://drive.google.com/file/d/1Cb1M6xWh3gQdGN59IAHZvt0Vxjd8o4bq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Who knew something that decomposed could revert to normal?",
                "line": 87,
                "start_time": "0-06-57.130000",
                "end_time": "0-06-59.880000",
                "url": "https://drive.google.com/file/d/1NwvJKlqFrEc6JzSf4cfpL4RdYrQHW337/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Uh-oh! What do I do now?",
                "line": 88,
                "start_time": "0-07-03.170000",
                "end_time": "0-07-04.920000",
                "url": "https://drive.google.com/file/d/16H9AO628ohAOxWMO9Drn9yro30mc5DEK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Oh! I have an idea!",
                "line": 89,
                "start_time": "0-07-05.330000",
                "end_time": "0-07-07.460000",
                "url": "https://drive.google.com/file/d/1PuyoQFUwZ_sqe_ll79jleP_OGfGPkP6y/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Stay sharp.",
                "line": 90,
                "start_time": "0-07-08.580000",
                "end_time": "0-07-09.790000",
                "url": "https://drive.google.com/file/d/1xnesq3XQDQfWyFKleec-P8M0zzIt7YkJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "This is your first performance as the Eminence in Shadow.",
                "line": 91,
                "start_time": "0-07-09.790000",
                "end_time": "0-07-12.920000",
                "url": "https://drive.google.com/file/d/12yrDK7-KuUmcydbE3BTB2L6XqX5_eyks/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I see you've awakened.",
                "line": 92,
                "start_time": "0-07-15.420000",
                "end_time": "0-07-16.830000",
                "url": "https://drive.google.com/file/d/1lxqGEqD5_b-EW69MTQ-Jz7Sz4fPNtcXW/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm...",
                "line": 93,
                "start_time": "0-07-22.670000",
                "end_time": "0-07-23.960000",
                "url": "https://drive.google.com/file/d/1R9ptXMAWXKQKKB-QOqNNXG6rKUNNwoaN/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But I can't be!",
                "line": 94,
                "start_time": "0-07-24.540000",
                "end_time": "0-07-25.750000",
                "url": "https://drive.google.com/file/d/1tA-ZutO3ljr1EG8PXrn1jEkz2hbD7D63/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I have broken the curse that was gnawing away at you.",
                "line": 95,
                "start_time": "0-07-25.750000",
                "end_time": "0-07-28.500000",
                "url": "https://drive.google.com/file/d/1ZU6wpJIzNoetcyut4CkjysHWoJlxT8Pc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You're free now.",
                "line": 96,
                "start_time": "0-07-29.750000",
                "end_time": "0-07-31.670000",
                "url": "https://drive.google.com/file/d/1Z9DXpBybMh7pE6ndvuB5Wq0El0LRB5yK/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You did this?",
                "line": 97,
                "start_time": "0-07-32.830000",
                "end_time": "0-07-35.540000",
                "url": "https://drive.google.com/file/d/1JfiDnuro2aN98FToSJAkgvOgT0TFPTcc/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What curse?",
                "line": 98,
                "start_time": "0-07-36.380000",
                "end_time": "0-07-37.580000",
                "url": "https://drive.google.com/file/d/1g7uxHg60KB0tx1HK4569uV8-XA8aLMiR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yes, the curse, it's...",
                "line": 99,
                "start_time": "0-07-37.830000",
                "end_time": "0-07-39.920000",
                "url": "https://drive.google.com/file/d/1QeP-iQgwATp4DriyJ9AXP8IOu1UnOyCU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "...a terrible curse that was cast on you and the other heroes' descendants.",
                "line": 100,
                "start_time": "0-07-41.080000",
                "end_time": "0-07-44.130000",
                "url": "https://drive.google.com/file/d/1moTdckJdCB-WrQpXmpgDbQwE61qNPQnk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I understand your consternation.",
                "line": 101,
                "start_time": "0-07-44.960000",
                "end_time": "0-07-46.790000",
                "url": "https://drive.google.com/file/d/1AKA6_46BLnDjSnukwD_hbzDkuU_4J2K5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But surely you, too, have heard of it.",
                "line": 102,
                "start_time": "0-07-47.080000",
                "end_time": "0-07-50.380000",
                "url": "https://drive.google.com/file/d/1JvQzPqr0ivVmLbmeGAF2X5m1qj13gRzk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The fairy tale recorded in the scriptures,",
                "line": 103,
                "start_time": "0-07-51",
                "end_time": "0-07-53.130000",
                "url": "https://drive.google.com/file/d/126y1ofmNkjaJr3GZBSKS0yDK0zfHjtnF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "about three heroes who defeated the demon Diablos and saved the world.",
                "line": 104,
                "start_time": "0-07-53.130000",
                "end_time": "0-07-57.880000",
                "url": "https://drive.google.com/file/d/1i50rSdm3UnRkqHi46JFRAa_F-p8OjRQf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That story is true.",
                "line": 105,
                "start_time": "0-07-58.380000",
                "end_time": "0-08-00.420000",
                "url": "https://drive.google.com/file/d/1eMO4tu_ZfMnEAoBW9dZaw1BFpJO0i-Sb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And the demon, with his dying breath, cast a curse.",
                "line": 106,
                "start_time": "0-08-01.500000",
                "end_time": "0-08-05.080000",
                "url": "https://drive.google.com/file/d/1cTBuAEWD9MWdMcjSek7-Q_DQWGYeQJRe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That is what really turned you into that rotting lump of flesh.",
                "line": 107,
                "start_time": "0-08-05.460000",
                "end_time": "0-08-09.170000",
                "url": "https://drive.google.com/file/d/1CRxzx3bwcJ6fPJbHWXNq3F1uDT07WhRs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But someone has twisted history,",
                "line": 108,
                "start_time": "0-08-09.880000",
                "end_time": "0-08-12.130000",
                "url": "https://drive.google.com/file/d/172ZVfdlivbkdEtYVezT22kZAvcXfbEdh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "and turned you into objects of scorn, calling you possessed.",
                "line": 109,
                "start_time": "0-08-12.130000",
                "end_time": "0-08-15.880000",
                "url": "https://drive.google.com/file/d/1vzNaiYZAGuVQhm_krL5tCHiNYOfi_tbX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And the one behind it all is...",
                "line": 110,
                "start_time": "0-08-17.830000",
                "end_time": "0-08-20.130000",
                "url": "https://drive.google.com/file/d/1CiF2oZDq84PdRPVTtJs8G9kVcowsulfr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yes, the mastermind is...",
                "line": 111,
                "start_time": "0-08-21.790000",
                "end_time": "0-08-24.630000",
                "url": "https://drive.google.com/file/d/143J-K8yckH23k7JqAQYP6OryHTLQLh2A/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "No, it's too soon to speak the name. If you knew, you would only be in danger.",
                "line": 112,
                "start_time": "0-08-25.710000",
                "end_time": "0-08-29.170000",
                "url": "https://drive.google.com/file/d/1OqsT-CHa9eQrlm2Emd9EfQCtpzkCVEqX/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I don't care.",
                "line": 113,
                "start_time": "0-08-29.170000",
                "end_time": "0-08-30.380000",
                "url": "https://drive.google.com/file/d/1EC-BlMoasQf3AlJLJHmdXejudyIgiDDE/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Who did this to me?",
                "line": 114,
                "start_time": "0-08-31",
                "end_time": "0-08-32.540000",
                "url": "https://drive.google.com/file/d/1-Arf_QauSdLvl_eVhjYeLxp4L_VDWPAj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I see...",
                "line": 115,
                "start_time": "0-08-32.880000",
                "end_time": "0-08-34.580000",
                "url": "https://drive.google.com/file/d/1Garg6-qtOVEEE4UOUunPkwzixRfRvI0m/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "In that case, I'll tell you...",
                "line": 116,
                "start_time": "0-08-35.040000",
                "end_time": "0-08-36.830000",
                "url": "https://drive.google.com/file/d/19b8r2lIBqV6PCgQEkjcq-ipiRJ7fCC8o/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The Cult of Diablos...",
                "line": 117,
                "start_time": "0-08-38.170000",
                "end_time": "0-08-39.830000",
                "url": "https://drive.google.com/file/d/1W5Lo5JhWn43tKKXezS9hhWJHgOSoieW5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "a group of zealots who are plotting to revive the great demon.",
                "line": 118,
                "start_time": "0-08-41.170000",
                "end_time": "0-08-44.290000",
                "url": "https://drive.google.com/file/d/1NhPRbY7whOALUWzmCYqn9ZuzGazlaH5z/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "They never come out into the light of day.",
                "line": 119,
                "start_time": "0-08-44.880000",
                "end_time": "0-08-47.630000",
                "url": "https://drive.google.com/file/d/1oJRBtRyeRL7ChqK-oJCWmClW91n3a8ft/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "My mission is to remain in the shadows, to put an end to their evil schemes.",
                "line": 120,
                "start_time": "0-08-48.130000",
                "end_time": "0-08-52.170000",
                "url": "https://drive.google.com/file/d/1ok2DGi_cNlTrDnQdceZVL_Z_LBT4EqTQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I guess.",
                "line": 121,
                "start_time": "0-08-52.170000",
                "end_time": "0-08-53.380000",
                "url": "https://drive.google.com/file/d/1LuEjlrdnXeODRYmOqpVz3bkf4IN_t05M/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yes, my name is Stylish-",
                "line": 122,
                "start_time": "0-08-53.960000",
                "end_time": "0-08-56.290000",
                "url": "https://drive.google.com/file/d/1vunT-QwRviTVq_ooJDsLr8RLdRfwSVhb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Sorry.",
                "line": 123,
                "start_time": "0-08-57.040000",
                "end_time": "0-08-58.290000",
                "url": "https://drive.google.com/file/d/1nSrNwbpksqR7IfHzC9JV8jkbhP_JDwml/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "My name is Shadow.",
                "line": 124,
                "start_time": "0-08-58.290000",
                "end_time": "0-08-59.830000",
                "url": "https://drive.google.com/file/d/1XwgV5PnV3jctmdnwwqfWG2P_iPsfyzc2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "He who lurks in the shadows to hunt the shadows.",
                "line": 125,
                "start_time": "0-09-01",
                "end_time": "0-09-04",
                "url": "https://drive.google.com/file/d/1HHjEKMl9yL1B7PbXzQFec2rphyLWkQng/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Shadow...",
                "line": 126,
                "start_time": "0-09-05.790000",
                "end_time": "0-09-07.040000",
                "url": "https://drive.google.com/file/d/1-I_BInkNhTFKIrx9sbpqgSfXkMreXZpB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "My path is not an easy one,",
                "line": 127,
                "start_time": "0-09-07.500000",
                "end_time": "0-09-09.630000",
                "url": "https://drive.google.com/file/d/1_elTS4IH3JybWjIlz0dQgWAlPPFqBHTK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "but I must fulfill my mission.",
                "line": 128,
                "start_time": "0-09-10.040000",
                "end_time": "0-09-12.170000",
                "url": "https://drive.google.com/file/d/1bV9EAmVthVGVkr3jDI6xTjZOl0s4j1lV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Child of the Heroes,",
                "line": 129,
                "start_time": "0-09-14.080000",
                "end_time": "0-09-15.460000",
                "url": "https://drive.google.com/file/d/17kdnC6vjOET8A4pUHEiGySGK6KDkZnHU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "are you prepared to walk my path with me?",
                "line": 130,
                "start_time": "0-09-16.210000",
                "end_time": "0-09-18.540000",
                "url": "https://drive.google.com/file/d/1it-LCz92OoNXeGZNtiN-lYui3DZkTVKP/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "When I fell ill-",
                "line": 131,
                "start_time": "0-09-19.710000",
                "end_time": "0-09-20.920000",
                "url": "https://drive.google.com/file/d/13UmVopVNGPC29RaV1-yJ5T--EM_U7mw2/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I mean, when I was struck with the curse, I lost everything.",
                "line": 132,
                "start_time": "0-09-20.920000",
                "end_time": "0-09-25.960000",
                "url": "https://drive.google.com/file/d/1qAFW0AMcBVrQboiiuGbzwDHjkVj_iuAf/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "My only future was to waste away as a hideous beast, but you saved me.",
                "line": 133,
                "start_time": "0-09-26.500000",
                "end_time": "0-09-31.080000",
                "url": "https://drive.google.com/file/d/1gclm9dGxYondcc5mCnDDNYqPBb37pBXd/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So...",
                "line": 134,
                "start_time": "0-09-31.750000",
                "end_time": "0-09-32.960000",
                "url": "https://drive.google.com/file/d/1_Q1x6_gtq5TyTFkTXVINBbf6zBkAkEVH/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "If it is what you wish,",
                "line": 135,
                "start_time": "0-09-33.500000",
                "end_time": "0-09-35.250000",
                "url": "https://drive.google.com/file/d/1KWvr67t2Msf_kD6InSSAF2TC1vOLnG2C/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I will give you my life.",
                "line": 136,
                "start_time": "0-09-35.750000",
                "end_time": "0-09-37.750000",
                "url": "https://drive.google.com/file/d/1m5tneV_C_eWf3X8nvcOrVfGkDRKhyd3A/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "And I will punish the guilty with death.",
                "line": 137,
                "start_time": "0-09-38.540000",
                "end_time": "0-09-41.080000",
                "url": "https://drive.google.com/file/d/1QNgty-8DPgZM5lOiE9WIA1Rz1tpA5QI8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I mean, I made the whole thing up.",
                "line": 138,
                "start_time": "0-09-47.210000",
                "end_time": "0-09-50.210000",
                "url": "https://drive.google.com/file/d/1ju09q28tIqXPhRXg7tOuhQuky1lIPwGM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "We'll probably be up against powerful government leaders and stuff.",
                "line": 139,
                "start_time": "0-09-51.460000",
                "end_time": "0-09-54.500000",
                "url": "https://drive.google.com/file/d/1760XwlpEFyA0NsCFOo3AWup4N-P91E91/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "And I'm sure there will be many people under their control who don't know the truth.",
                "line": 140,
                "start_time": "0-09-54.880000",
                "end_time": "0-09-58.630000",
                "url": "https://drive.google.com/file/d/1gg7lw4O7nsH66jLgsvjdyU1DBbHhvdec/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Nevertheless, I cannot show mercy to any who stand in our way.",
                "line": 141,
                "start_time": "0-09-58.960000",
                "end_time": "0-10-02.040000",
                "url": "https://drive.google.com/file/d/1KC-p5KCieARmqVRqcFxbPZVPyWRRtDDG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Yes, good! That's the spirit!",
                "line": 142,
                "start_time": "0-10-02.380000",
                "end_time": "0-10-04.330000",
                "url": "https://drive.google.com/file/d/11T9n7KiYI_uHW3VGSdSmt1RwJqOI1YJq/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "We will need to find the other hero descendants and take them under our wing.",
                "line": 143,
                "start_time": "0-10-04.790000",
                "end_time": "0-10-09.290000",
                "url": "https://drive.google.com/file/d/1c2oM-_eN1BUzCRY7FdN7DHAt4pp4d1vZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Uh, right.",
                "line": 144,
                "start_time": "0-10-10.170000",
                "end_time": "0-10-11.380000",
                "url": "https://drive.google.com/file/d/1Jc4O3nHQ6NXsMlDLQ2yZ24c5KBvakP_N/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "As we expand our organization,",
                "line": 145,
                "start_time": "0-10-11.380000",
                "end_time": "0-10-13.540000",
                "url": "https://drive.google.com/file/d/1M6dHK3vCk5RJj5Fhwyyins97BvBGiwfk/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "we'll need to strengthen our base of operations accordingly.",
                "line": 146,
                "start_time": "0-10-13.540000",
                "end_time": "0-10-15.540000",
                "url": "https://drive.google.com/file/d/1jciapX3pRIjQO7FJ7vWN_JKk6zZoPNL-/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "We'll need to collect funds to that end.",
                "line": 147,
                "start_time": "0-10-15.540000",
                "end_time": "0-10-17.170000",
                "url": "https://drive.google.com/file/d/1okB9CvOS3YaI3UJm5TZBu3n0-Lhg_Dgt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Yeah, but in moderation.",
                "line": 148,
                "start_time": "0-10-17.170000",
                "end_time": "0-10-18.960000",
                "url": "https://drive.google.com/file/d/1yoAda1xehz8Gi_R7XBJEuLjDyP83dKEe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Okay, then, uh, right...",
                "line": 149,
                "start_time": "0-10-19.380000",
                "end_time": "0-10-21.750000",
                "url": "https://drive.google.com/file/d/1urDTGYo52dPL2krJ2VXvMsHkHki5uPjR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "We'll call our organization...",
                "line": 150,
                "start_time": "0-10-22.040000",
                "end_time": "0-10-23.670000",
                "url": "https://drive.google.com/file/d/1uIUEIy0dLkOjLKDJ9fyU8FzkTv6DqahM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Shadow Garden.",
                "line": 151,
                "start_time": "0-10-24.830000",
                "end_time": "0-10-26.420000",
                "url": "https://drive.google.com/file/d/12gKGC-voV3GeCVF0xJe9cu5dCfoRUvqt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "And your name is now Alpha.",
                "line": 152,
                "start_time": "0-10-27.080000",
                "end_time": "0-10-29.290000",
                "url": "https://drive.google.com/file/d/12aHbuREoO8LJT1aF0n2bTlvOSDHQ7vSN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Three years passed after I brilliantly ad-libbed my way through my first performance.",
                "line": 153,
                "start_time": "0-10-30.500000",
                "end_time": "0-10-34.710000",
                "url": "https://drive.google.com/file/d/1-WuYcDkDArOdK5iy2PEbHDg_h53i0_W8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I was now 13 years old, an average, ordinary Dark Knight in training.",
                "line": 154,
                "start_time": "0-10-35",
                "end_time": "0-10-38.830000",
                "url": "https://drive.google.com/file/d/1JvL_Vkr_cBAYfSQA8aWk6nPDsUzsxQLW/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Your lunge is weak!",
                "line": 155,
                "start_time": "0-10-45.630000",
                "end_time": "0-10-47.130000",
                "url": "https://drive.google.com/file/d/1MBj0hsRSCVRk5n3mIwX4WnPecXIjT_V0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The fencing in this world, in a word, is unsophisticated.",
                "line": 156,
                "start_time": "0-10-48",
                "end_time": "0-10-52.210000",
                "url": "https://drive.google.com/file/d/1XqZkJdg5ZEeFr84tbK0Ghsk6Co_zcuKG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "In my past life, living in the Age of Information,",
                "line": 157,
                "start_time": "0-10-53.130000",
                "end_time": "0-10-55.920000",
                "url": "https://drive.google.com/file/d/1TRpiAqgl35lR2LImmXKKYRQdv_0lKbpq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I was able to fuse all kinds of martial arts together and optimize them.",
                "line": 158,
                "start_time": "0-10-55.920000",
                "end_time": "0-10-59.330000",
                "url": "https://drive.google.com/file/d/1QR3Un9_ER7rt6IamJ2LZcZsa3OIHAlTx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "If I just used them here...",
                "line": 159,
                "start_time": "0-10-59.330000",
                "end_time": "0-11-00.750000",
                "url": "https://drive.google.com/file/d/1l7LbE8cj6GROCzA4bAOJSgKQE6DFZdtu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Jeez! You're too strong!",
                "line": 160,
                "start_time": "0-11-09.580000",
                "end_time": "0-11-13.500000",
                "url": "https://drive.google.com/file/d/1ERoZCA5yjE6QEgV3pJxCoP3aoGNK_38I/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "That boy never makes any progress.",
                "line": 161,
                "start_time": "0-11-14.750000",
                "end_time": "0-11-17.210000",
                "url": "https://drive.google.com/file/d/1IQj8D2TNGssyEk8Qta_u8i_ScAF0FIBR/view?usp=drivesdk"
            },
            {
                "name": "Maid",
                "name_variant": "Maid",
                "subtitle": "Miss Claire...",
                "line": 162,
                "start_time": "0-11-18.130000",
                "end_time": "0-11-19.380000",
                "url": "https://drive.google.com/file/d/15RK69m6XQIxVV2uc-nox_vuESalZ4qxN/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Yes?",
                "line": 163,
                "start_time": "0-11-19.380000",
                "end_time": "0-11-20.630000",
                "url": "https://drive.google.com/file/d/1UkwpWA1-Ghqw_VPMBtFvQxZgtDjRNYlK/view?usp=drivesdk"
            },
            {
                "name": "Maid",
                "name_variant": "Maid",
                "subtitle": "Your mother is calling.",
                "line": 164,
                "start_time": "0-11-20.630000",
                "end_time": "0-11-22.330000",
                "url": "https://drive.google.com/file/d/1kAFsEVvAs1NGiB7Rd_6NKN_2sRyqUL-w/view?usp=drivesdk"
            },
            {
                "name": "Maid",
                "name_variant": "Maid",
                "subtitle": "The guests are arriving for your farewell party.",
                "line": 165,
                "start_time": "0-11-22.500000",
                "end_time": "0-11-24.960000",
                "url": "https://drive.google.com/file/d/1LF36GLPKhv1YW7qZxDWti4qIR3radaAi/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Cid, I won't be able to practice with you for a while,",
                "line": 166,
                "start_time": "0-11-26.210000",
                "end_time": "0-11-29.130000",
                "url": "https://drive.google.com/file/d/1_8u41Ewvt5KRkqpZ8WUwXLJrSja930YJ/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "but you make sure to continue training on your own.",
                "line": 167,
                "start_time": "0-11-29.130000",
                "end_time": "0-11-31.170000",
                "url": "https://drive.google.com/file/d/18IY8jWm2cGy7kla0-6-GJwomXgYTJHST/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yes, ma'am!",
                "line": 168,
                "start_time": "0-11-31.380000",
                "end_time": "0-11-32.380000",
                "url": "https://drive.google.com/file/d/1y2-wkTAofpd4wCpq5wroPLIgLXCoTxU6/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "You, prepare a towel and a change of clothes for the boy.",
                "line": 169,
                "start_time": "0-11-32.540000",
                "end_time": "0-11-34.750000",
                "url": "https://drive.google.com/file/d/1XjRQ3r_r-t31jVMWUYKj22ySUvw75aeu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Oh, man, it's not easy to play the part of a background character.",
                "line": 170,
                "start_time": "0-11-34.750000",
                "end_time": "0-11-37.630000",
                "url": "https://drive.google.com/file/d/1Vj4NzA00NHHHNg0VdUVBsR6mq99yR19h/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But I must play Background Character A perfectly if I want to be ready for the day I know will come.",
                "line": 171,
                "start_time": "0-11-38.330000",
                "end_time": "0-11-42.790000",
                "url": "https://drive.google.com/file/d/1WbhzkM7Bk4-Cy_uzXopujk5g27WiaLJv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "When nobles turn fifteen,",
                "line": 172,
                "start_time": "0-11-48.580000",
                "end_time": "0-11-50.580000",
                "url": "https://drive.google.com/file/d/1pcpyUtXvbvA7SBVHcLmZv3gD3XyDeUGn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "they start attending the Midgar Academy for Dark Knights in the royal capital.",
                "line": 173,
                "start_time": "0-11-50.580000",
                "end_time": "0-11-54.290000",
                "url": "https://drive.google.com/file/d/1ldxQw2QFldUw4n8QO3PGKSsQmBUMliVN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "My sister is enrolled at the Midgar Academy for Dark Knights, too, but...",
                "line": 174,
                "start_time": "0-11-55.210000",
                "end_time": "0-11-59.080000",
                "url": "https://drive.google.com/file/d/1gR5qrLf5iguR6TIfWiGyxCBgwAx-exyo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "When the day came for her departure...",
                "line": 175,
                "start_time": "0-12-03.580000",
                "end_time": "0-12-05.380000",
                "url": "https://drive.google.com/file/d/1ayj1RcwgE_9s2i9yZQtb0v1kNRDWed8n/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "she was nowhere to be found.",
                "line": 176,
                "start_time": "0-12-06.420000",
                "end_time": "0-12-08.250000",
                "url": "https://drive.google.com/file/d/1THpvxSEbQzJFWpQT33zJfZdNbvS8BqEk/view?usp=drivesdk"
            },
            {
                "name": "Mr. Kagenou",
                "name_variant": "Mr. Kagenou",
                "subtitle": "What is the meaning of this?!",
                "line": 177,
                "start_time": "0-12-11.630000",
                "end_time": "0-12-13.540000",
                "url": "https://drive.google.com/file/d/1wYUj2-hz2PHqsOy3plarGnJYoLLFIgo4/view?usp=drivesdk"
            },
            {
                "name": "Mr. Kagenou",
                "name_variant": "Mr. Kagenou",
                "subtitle": "Even attacking her in her sleep, how could they overpower Claire?!",
                "line": 178,
                "start_time": "0-12-13.750000",
                "end_time": "0-12-17.210000",
                "url": "https://drive.google.com/file/d/13N0IFsb5XNR0sXKIp-7WBFmIn88tdZ_R/view?usp=drivesdk"
            },
            {
                "name": "Mr. Kagenou",
                "name_variant": "Mr. Kagenou",
                "subtitle": "The scoundrel must have been a master fighter!",
                "line": 179,
                "start_time": "0-12-17.210000",
                "end_time": "0-12-19.920000",
                "url": "https://drive.google.com/file/d/1MYIj2eU0-SycgH_os1Z1hXJgAyAns3bT/view?usp=drivesdk"
            },
            {
                "name": "Mrs. Kagenou",
                "name_variant": "Mrs. Kagenou",
                "subtitle": "Then we have to accept this?",
                "line": 180,
                "start_time": "0-12-19.920000",
                "end_time": "0-12-22.040000",
                "url": "https://drive.google.com/file/d/1ohZRY6CiTcbW3D2koTMjkyytsDL0SUb0/view?usp=drivesdk"
            },
            {
                "name": "Mrs. Kagenou",
                "name_variant": "Mrs. Kagenou",
                "subtitle": "Is that what you're saying?",
                "line": 181,
                "start_time": "0-12-22.790000",
                "end_time": "0-12-24.210000",
                "url": "https://drive.google.com/file/d/1Ggq5WAZmR27eo9axzeKmuTbUOBMV_CZ_/view?usp=drivesdk"
            },
            {
                "name": "Mr. Kagenou",
                "name_variant": "Mr. Kagenou",
                "subtitle": "Oh, no, that's not what I meant.",
                "line": 182,
                "start_time": "0-12-24.210000",
                "end_time": "0-12-26.500000",
                "url": "https://drive.google.com/file/d/1wgg4KFIOlwZ8-thWvLc602l2Ni9PPrXl/view?usp=drivesdk"
            },
            {
                "name": "Mr. Kagenou",
                "name_variant": "Mr. Kagenou",
                "subtitle": "I was just stating a fact-",
                "line": 183,
                "start_time": "0-12-26.500000",
                "end_time": "0-12-28.290000",
                "url": "https://drive.google.com/file/d/13DfdJbYz8LhRmrJei_pykrAq8YaLJHKD/view?usp=drivesdk"
            },
            {
                "name": "Mr. Kagenou",
                "name_variant": "Mr. Kagenou",
                "subtitle": "Stop making excuses, bald man!",
                "line": 184,
                "start_time": "0-12-28.290000",
                "end_time": "0-12-30.880000",
                "url": "https://drive.google.com/file/d/1SypSfhm0CugNGPeac0ZIjBrIoMyi6Qu7/view?usp=drivesdk"
            },
            {
                "name": "Mrs. Kagenou",
                "name_variant": "Mrs. Kagenou",
                "subtitle": "Take that and that and that",
                "line": 185,
                "start_time": "0-12-31.540000",
                "end_time": "0-12-33.670000",
                "url": "https://drive.google.com/file/d/1tq3r9BxCerVs5fkRvoHUhdOts61UX9BR/view?usp=drivesdk"
            },
            {
                "name": "Mr. Kagenou",
                "name_variant": "Mr. Kagenou",
                "subtitle": "I'm sorry, I'm sorry, I'm sorry!",
                "line": 185,
                "start_time": "0-12-31.540000",
                "end_time": "0-12-33.670000",
                "url": "https://drive.google.com/file/d/1tq3r9BxCerVs5fkRvoHUhdOts61UX9BR/view?usp=drivesdk"
            },
            {
                "name": "Mrs. Kagenou",
                "name_variant": "Mrs. Kagenou",
                "subtitle": "Go find our daughter, dammit!",
                "line": 186,
                "start_time": "0-12-34.040000",
                "end_time": "0-12-36.420000",
                "url": "https://drive.google.com/file/d/143UNGHp_biUDP6IdqwkmrSBlEP55Gi3j/view?usp=drivesdk"
            },
            {
                "name": "Mrs. Kagenou",
                "name_variant": "Mrs. Kagenou",
                "subtitle": "What are we going to do if something happens to poor Claire?!",
                "line": 187,
                "start_time": "0-12-37.170000",
                "end_time": "0-12-39.880000",
                "url": "https://drive.google.com/file/d/1svEaH7DaV9qbYrvje0_PAK-HFHcVSl-7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Beta...",
                "line": 188,
                "start_time": "0-12-40.580000",
                "end_time": "0-12-41.790000",
                "url": "https://drive.google.com/file/d/1REaNwM4R_OnWJ34kuU9saVt4bDtFH-1I/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes, Lord Shadow?",
                "line": 189,
                "start_time": "0-12-42.080000",
                "end_time": "0-12-43.630000",
                "url": "https://drive.google.com/file/d/18PiKbsZC6Ik5-r6xyRpbJrv0ZRyafnF1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Alpha had collected members for Shadow Garden as if she was adopting abandoned kittens.",
                "line": 190,
                "start_time": "0-12-43.880000",
                "end_time": "0-12-48.710000",
                "url": "https://drive.google.com/file/d/1NiA0-Jf0HBi6o5KGdaMv6lQnRrRMccR-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So our numbers have grown rapidly.",
                "line": 191,
                "start_time": "0-12-48.710000",
                "end_time": "0-12-50.330000",
                "url": "https://drive.google.com/file/d/1W5f-chSDHqbQvQf4A96qNQoS4s5NrWFk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Where's Alpha?",
                "line": 192,
                "start_time": "0-12-51.170000",
                "end_time": "0-12-52.380000",
                "url": "https://drive.google.com/file/d/1i5P74svvwf72pmKJ8JWyWG1GmULiEjLh/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Searching for clues to finding Miss Claire.",
                "line": 193,
                "start_time": "0-12-52.380000",
                "end_time": "0-12-54.670000",
                "url": "https://drive.google.com/file/d/1Qxg-UNFXfNfNoWXc0rJ0B8puZqwS-r4I/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "She moves fast.",
                "line": 194,
                "start_time": "0-12-55.130000",
                "end_time": "0-12-56.630000",
                "url": "https://drive.google.com/file/d/150CM1majTb2AmNiQpikyql5Ij5f5ZEOR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Is my sister still alive?",
                "line": 195,
                "start_time": "0-12-56.920000",
                "end_time": "0-12-58.380000",
                "url": "https://drive.google.com/file/d/1rdHAcpDHoAKZE8ryuLk24TNnmRNziA0Z/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Most likely, yes.",
                "line": 196,
                "start_time": "0-12-58.380000",
                "end_time": "0-12-59.580000",
                "url": "https://drive.google.com/file/d/1875x41ajRu164a65rq9bOisb7HpoAzD4/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "The kidnapper, as expected, belongs to the Cult of Diablos,",
                "line": 197,
                "start_time": "0-12-59.960000",
                "end_time": "0-13-02.580000",
                "url": "https://drive.google.com/file/d/1RNfROwMlcnt8qmxzScwq1jA1OO-p4X2g/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "a high-ranking officer.",
                "line": 198,
                "start_time": "0-13-02.580000",
                "end_time": "0-13-04.040000",
                "url": "https://drive.google.com/file/d/1sxtyiePm9GyP2RS5_1IkcJbjoDLP-VFx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Why did they take my sister?",
                "line": 199,
                "start_time": "0-13-04.460000",
                "end_time": "0-13-05.710000",
                "url": "https://drive.google.com/file/d/1Oyy2IjXvZ7c1H9h9agyiTuvPVziVzVg3/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "We believe they suspect that Miss Claire is one of the heroes' descendants.",
                "line": 200,
                "start_time": "0-13-06",
                "end_time": "0-13-09.420000",
                "url": "https://drive.google.com/file/d/1TMv4BB1QUOjmdNnQ1ujr_48UOanhrEU0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I see.",
                "line": 201,
                "start_time": "0-13-09.420000",
                "end_time": "0-13-10.630000",
                "url": "https://drive.google.com/file/d/1y8DJbQBlkxJi6Fal3hkFLXf7LmaFKpbx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I guess when these girls get involved,",
                "line": 202,
                "start_time": "0-13-11.210000",
                "end_time": "0-13-12.790000",
                "url": "https://drive.google.com/file/d/1PjYbEi8cqfLLpt7JYbioe1sKcRySz-R1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "even regular old bandits can instantly transform into members of the cult.",
                "line": 203,
                "start_time": "0-13-12.790000",
                "end_time": "0-13-15.540000",
                "url": "https://drive.google.com/file/d/15aS-AKQ_7OcYNmBQix6ZmGmqZGknpUm8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Look at this map.",
                "line": 204,
                "start_time": "0-13-15.540000",
                "end_time": "0-13-16.750000",
                "url": "https://drive.google.com/file/d/1NdcBPl3nz0D7TeaqBqRCbrKrG5ZZfeVR/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "We have determined the locations of their hideouts.",
                "line": 205,
                "start_time": "0-13-17.540000",
                "end_time": "0-13-20",
                "url": "https://drive.google.com/file/d/14YBFBbKH9TVMVTJWwW4F4IALO6KRMo5Q/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "But we don't know which hideout is the one where they are keeping Miss Claire.",
                "line": 206,
                "start_time": "0-13-20.210000",
                "end_time": "0-13-24.250000",
                "url": "https://drive.google.com/file/d/17qKl2nwJwdUf8znyeTmi-jQpzDub1GJE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That one.",
                "line": 207,
                "start_time": "0-13-26.250000",
                "end_time": "0-13-27.460000",
                "url": "https://drive.google.com/file/d/1N-GA6PMLaXF1TAOCkTuzCgKn6c1Ql5Uv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Darnit, I missed!",
                "line": 208,
                "start_time": "0-13-28.080000",
                "end_time": "0-13-29.290000",
                "url": "https://drive.google.com/file/d/1Vd1REux2rHcIVaUveJDwqXRGHOKGBa0J/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That is where we'll find my sister.",
                "line": 209,
                "start_time": "0-13-29.830000",
                "end_time": "0-13-31.460000",
                "url": "https://drive.google.com/file/d/1ziBW5JAwSj0yXpq93K6SsoxIHgmP9w1f/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "B-but there's nothing there...",
                "line": 210,
                "start_time": "0-13-32.540000",
                "end_time": "0-13-34.960000",
                "url": "https://drive.google.com/file/d/1r7q-FO51AO6CtWTd2aRJskKtmSeOpR3g/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It can't be! These cryptograms were a bluff?!",
                "line": 211,
                "start_time": "0-13-36.500000",
                "end_time": "0-13-39.290000",
                "url": "https://drive.google.com/file/d/1j6ZYne0BDT_DZuvCRoN6Fuylx39_MSqO/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "In that case, if we compare it against this account...",
                "line": 212,
                "start_time": "0-13-39.750000",
                "end_time": "0-13-42.670000",
                "url": "https://drive.google.com/file/d/1YQJTZTfDz2GxiG4uoeIpigW7rbhaUkck/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It all comes together!",
                "line": 213,
                "start_time": "0-13-42.670000",
                "end_time": "0-13-44.130000",
                "url": "https://drive.google.com/file/d/1cCAUuYLEBan2o_blsnwKmwioHbpJ58xm/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Lord Shadow, I believe there is a secret hideout in the location you indicated!",
                "line": 214,
                "start_time": "0-13-44.130000",
                "end_time": "0-13-48.380000",
                "url": "https://drive.google.com/file/d/1qASKmQUWyhsUp9fr9mfNrgwBR_L8ugqd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I knew it.",
                "line": 215,
                "start_time": "0-13-48.380000",
                "end_time": "0-13-49.580000",
                "url": "https://drive.google.com/file/d/1bL4lJdjvzLY9xEEroupN1IuwRyLWWVq9/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "You took in this enormous amount of information and saw the truth in an instant!",
                "line": 216,
                "start_time": "0-13-49.580000",
                "end_time": "0-13-53.080000",
                "url": "https://drive.google.com/file/d/1Vz1BPUwTi0ahCMEbH5lAiySO7fp3ztJ3/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I'm so impressed!",
                "line": 217,
                "start_time": "0-13-53.080000",
                "end_time": "0-13-54.290000",
                "url": "https://drive.google.com/file/d/1tKivWwvCyZGRdbOVk35OQ7uFD-U-M7Rm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You're quite the actress, Beta.",
                "line": 218,
                "start_time": "0-13-54.290000",
                "end_time": "0-13-56.080000",
                "url": "https://drive.google.com/file/d/1X_UTTn7Z-6RdINUexcyZUMH8k4LPJFBg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You deserve an Academy Award.",
                "line": 219,
                "start_time": "0-13-56.080000",
                "end_time": "0-13-57.830000",
                "url": "https://drive.google.com/file/d/14gVlYhDs-9frrQntCadohg629ldQ0G56/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Contact the Seven Shadows.",
                "line": 220,
                "start_time": "0-14-00.040000",
                "end_time": "0-14-01.670000",
                "url": "https://drive.google.com/file/d/1uJoiXNVJtf1G0mIumi9eLuLElKOrkkw1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "We move tonight.",
                "line": 221,
                "start_time": "0-14-02",
                "end_time": "0-14-03.500000",
                "url": "https://drive.google.com/file/d/1WRNwJ3-nl7T1wPt1Leb5_ydWGpWQtHPQ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes, My Lord!",
                "line": 222,
                "start_time": "0-14-03.500000",
                "end_time": "0-14-04.710000",
                "url": "https://drive.google.com/file/d/1Wwh11OsHNZ9n6d2NZNSiWZ8SlujHVfDP/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "You know, I had a daughter.",
                "line": 223,
                "start_time": "0-14-07.880000",
                "end_time": "0-14-11.170000",
                "url": "https://drive.google.com/file/d/1bRqK1ZnMSwNckpqalJy0BIIW1fiT77Mw/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "I would prefer not to have to resort to violence...",
                "line": 224,
                "start_time": "0-14-11.790000",
                "end_time": "0-14-14.920000",
                "url": "https://drive.google.com/file/d/1SGhoIxPbS0qXF22rSOvApzUd0Fz07xyn/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "Claire Kagenou.",
                "line": 225,
                "start_time": "0-14-15.880000",
                "end_time": "0-14-17.580000",
                "url": "https://drive.google.com/file/d/1zZVcrdklYV-rojivWGhDF_egJHx0JVsg/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "You can still dodge that while locked up in magic-sealing chains?",
                "line": 226,
                "start_time": "0-14-21.040000",
                "end_time": "0-14-24.170000",
                "url": "https://drive.google.com/file/d/1SZmeo8iYgt5-0sgyxpMkxeslsnxfI0wb/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I was taught that it's not about how much magic you have, but how you use it.",
                "line": 227,
                "start_time": "0-14-24.540000",
                "end_time": "0-14-28.130000",
                "url": "https://drive.google.com/file/d/1rMvK4I06MiayIO9lF30mlOZpxaOZo7Ik/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "You had a good father.",
                "line": 228,
                "start_time": "0-14-28.130000",
                "end_time": "0-14-30.040000",
                "url": "https://drive.google.com/file/d/17yL1A3rpZjXwKlDYzu-gSR2PLJE__BOy/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "That baldy?",
                "line": 229,
                "start_time": "0-14-30.040000",
                "end_time": "0-14-31.460000",
                "url": "https://drive.google.com/file/d/1W0nAtDzd9U9Wx8wWVRs-102TSxq2SuQG/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "No, I was taught by my brother.",
                "line": 230,
                "start_time": "0-14-31.460000",
                "end_time": "0-14-33.580000",
                "url": "https://drive.google.com/file/d/1WbtPgohM-BIgirTC-2XNoAeJ3Dgu5f__/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "Your brother?",
                "line": 231,
                "start_time": "0-14-33.920000",
                "end_time": "0-14-35.130000",
                "url": "https://drive.google.com/file/d/11B7cbby1T5de6OPLq-8uHg98kUp7hfvj/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "When we fight, I beat him every time.",
                "line": 232,
                "start_time": "0-14-36.040000",
                "end_time": "0-14-38.330000",
                "url": "https://drive.google.com/file/d/1Wtnpg0mM5Psj48j4_ttfnaSaSBdU8_Qz/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "But I am always learning from my brother's sword.",
                "line": 233,
                "start_time": "0-14-38.540000",
                "end_time": "0-14-41.920000",
                "url": "https://drive.google.com/file/d/1bZf20Bz8_r0jWfu75-y9u5wXAdicyhLS/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "And yet he never learns a thing from me.",
                "line": 234,
                "start_time": "0-14-42.170000",
                "end_time": "0-14-45",
                "url": "https://drive.google.com/file/d/1RZF2TDlsncIyZYwI1l1rMmvlehnNJ48W/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "That's why I pick on him every day.",
                "line": 235,
                "start_time": "0-14-45.210000",
                "end_time": "0-14-47.330000",
                "url": "https://drive.google.com/file/d/1xZ_yaM_tRNVh0a47sjoap4uVoaAtoJNU/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "I've heard about your brother.",
                "line": 236,
                "start_time": "0-14-47.710000",
                "end_time": "0-14-49.500000",
                "url": "https://drive.google.com/file/d/13Bs8sKAQ2FymL89iRvR14a5UmiSIrEI5/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "When you showed signs of possession, he is the one that healed you, right?",
                "line": 237,
                "start_time": "0-14-49.500000",
                "end_time": "0-14-53.380000",
                "url": "https://drive.google.com/file/d/11OXDSuMUeA9CX_cP90Xx-AQzZJkwo0eN/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "Not that again.",
                "line": 238,
                "start_time": "0-14-53.790000",
                "end_time": "0-14-55.500000",
                "url": "https://drive.google.com/file/d/11zDgdQs6cFAwuxbENY1HGeMmU_n_hN9U/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I keep telling people, that's not what happened.",
                "line": 239,
                "start_time": "0-14-55.500000",
                "end_time": "0-14-57.420000",
                "url": "https://drive.google.com/file/d/1nuss2iEsYMYb2TRyKFZnl7US3HcWt0SS/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "There is no way that boy could have healed me.",
                "line": 240,
                "start_time": "0-14-57.420000",
                "end_time": "0-14-59.630000",
                "url": "https://drive.google.com/file/d/1ZNZ0tOqj7I0fVV9kLtSqykRzZQocHHTy/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "That is certainly true.",
                "line": 241,
                "start_time": "0-14-59.630000",
                "end_time": "0-15-01.630000",
                "url": "https://drive.google.com/file/d/1tVtZm4RrsmN5xrMaVLJ7QHRlg_NtHOGc/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "But just in case, I'm going to need to learn more about this brother of yours.",
                "line": 242,
                "start_time": "0-15-01.830000",
                "end_time": "0-15-05",
                "url": "https://drive.google.com/file/d/1Nw2ANjWJbXLbZUm3DXsH6Lqz9BAmiHyk/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "If anything happens to that boy,",
                "line": 243,
                "start_time": "0-15-08",
                "end_time": "0-15-09.830000",
                "url": "https://drive.google.com/file/d/1iHiCA8oWourwzxbz_DXy0qVro7N4QmJw/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "you'll have to answer to me!",
                "line": 244,
                "start_time": "0-15-09.830000",
                "end_time": "0-15-11.580000",
                "url": "https://drive.google.com/file/d/1c8-gJQ_3bCsaJDBll1zTvNHNZhkv1Awa/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "You! You mutilated your own hands?!",
                "line": 245,
                "start_time": "0-15-11.790000",
                "end_time": "0-15-14.040000",
                "url": "https://drive.google.com/file/d/1OLByt6LIof1e9KRMldkhetLXMPXs4mna/view?usp=drivesdk"
            },
            {
                "name": "Claire Kagenou",
                "name_variant": "Claire Kagenou",
                "subtitle": "I'll kill you, I'll kill your beloved family, your friends, everyone you-",
                "line": 246,
                "start_time": "0-15-14.040000",
                "end_time": "0-15-18.420000",
                "url": "https://drive.google.com/file/d/1ItzmHqivslwwMT7_FNU-h0hVaqoFxopG/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "Cheeky little brat.",
                "line": 247,
                "start_time": "0-15-23.460000",
                "end_time": "0-15-25.040000",
                "url": "https://drive.google.com/file/d/1zZ07zYA2nQ8b601t7pJjpr_p-CGuOKpw/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "No matter.",
                "line": 248,
                "start_time": "0-15-25.040000",
                "end_time": "0-15-26.290000",
                "url": "https://drive.google.com/file/d/13cCa9W06W_kEpCZU6B-NI2FBjwAVn0IL/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "We'll know if she's compatible once we've analyzed her blood.",
                "line": 249,
                "start_time": "0-15-26.290000",
                "end_time": "0-15-29",
                "url": "https://drive.google.com/file/d/15VNb6AnblCoc_LBwAZMi091o_tF3eljx/view?usp=drivesdk"
            },
            {
                "name": "Soldier",
                "name_variant": "Soldier",
                "subtitle": "Viscount Grease!",
                "line": 250,
                "start_time": "0-15-29",
                "end_time": "0-15-30",
                "url": "https://drive.google.com/file/d/1KfmPjESB_5fxTs7jP6vTzfjmN8NrSudP/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "What do you want?!",
                "line": 251,
                "start_time": "0-15-30",
                "end_time": "0-15-31.250000",
                "url": "https://drive.google.com/file/d/1XX3P0T7KgWYsF5GPcDn04dgANdqR0993/view?usp=drivesdk"
            },
            {
                "name": "Soldier",
                "name_variant": "Soldier",
                "subtitle": "Intruders!",
                "line": 252,
                "start_time": "0-15-31.250000",
                "end_time": "0-15-32.460000",
                "url": "https://drive.google.com/file/d/1fSRk0Z-7fBB4mdkuTHEATdUbKRK2jDsM/view?usp=drivesdk"
            },
            {
                "name": "Soldier",
                "name_variant": "Soldier",
                "subtitle": "We think there are seven of them!",
                "line": 253,
                "start_time": "0-15-38.460000",
                "end_time": "0-15-39.790000",
                "url": "https://drive.google.com/file/d/144Uop3d7_LRSpSxhQwx8_X9LR4KghXp4/view?usp=drivesdk"
            },
            {
                "name": "Soldier",
                "name_variant": "Soldier",
                "subtitle": "They appear out of nowhere, like shadows!",
                "line": 254,
                "start_time": "0-15-39.790000",
                "end_time": "0-15-41.830000",
                "url": "https://drive.google.com/file/d/1cYtPGY9WN_bG3jOVzr0YETYrtFLIqc5D/view?usp=drivesdk"
            },
            {
                "name": "Soldier",
                "name_variant": "Soldier",
                "subtitle": "Our men are dropping like flies!",
                "line": 255,
                "start_time": "0-15-41.830000",
                "end_time": "0-15-43.500000",
                "url": "https://drive.google.com/file/d/16wsbd3kFdC6ERNJZUb7QdAMH0rYrhvfk/view?usp=drivesdk"
            },
            {
                "name": "Soldier",
                "name_variant": "Soldier",
                "subtitle": "We're no match for them!",
                "line": 256,
                "start_time": "0-15-43.500000",
                "end_time": "0-15-45.330000",
                "url": "https://drive.google.com/file/d/1kYoim1EoXVHCWWsiwCRRbwjzuLJ8QEpP/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "That's impossible!",
                "line": 257,
                "start_time": "0-15-45.750000",
                "end_time": "0-15-46.830000",
                "url": "https://drive.google.com/file/d/10NhLiJRLC3nT86ciZ0Lw2CxUjValMtkd/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "Some of our knights are good enough to be in the Royal Guard!",
                "line": 258,
                "start_time": "0-15-46.830000",
                "end_time": "0-15-49.960000",
                "url": "https://drive.google.com/file/d/1t9Qpx7RD1sLNW4ZFI5L1s93n4vdJodyD/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "What the?!",
                "line": 259,
                "start_time": "0-15-52.080000",
                "end_time": "0-15-53.290000",
                "url": "https://drive.google.com/file/d/12GkmTtv5LvrH9rP6FU3dtuwCms9z29lh/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "Y-you...",
                "line": 260,
                "start_time": "0-15-59.630000",
                "end_time": "0-16-00.830000",
                "url": "https://drive.google.com/file/d/15yuy2Y-F9HCgn_PX3SoXuzl2qtXAGmbE/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "Who are you?",
                "line": 261,
                "start_time": "0-16-01.290000",
                "end_time": "0-16-02.540000",
                "url": "https://drive.google.com/file/d/1M1ZtRaybvrLJX32Ybkuq69KCraPdIkWD/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "We are Shadow Garden.",
                "line": 262,
                "start_time": "0-16-03.540000",
                "end_time": "0-16-05.580000",
                "url": "https://drive.google.com/file/d/1UtnfV0jpGuAjNDYPGhKQSPye3XpzRuTf/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It is our mission in life to annihilate the Cult of Diablos.",
                "line": 263,
                "start_time": "0-16-05.960000",
                "end_time": "0-16-09.290000",
                "url": "https://drive.google.com/file/d/1dmA_LA-_jDwYPppNKGwbbNyFNZyzoqmt/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "We know everything.",
                "line": 264,
                "start_time": "0-16-09.290000",
                "end_time": "0-16-11.710000",
                "url": "https://drive.google.com/file/d/16vP_OWtrKz65PNi5J_6N1RzPFsCkmfy0/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "About the revival of the demon Diablos, the heroes' descendants...",
                "line": 265,
                "start_time": "0-16-11.710000",
                "end_time": "0-16-15.750000",
                "url": "https://drive.google.com/file/d/1yLaHP1we1F_opOdQCo8qa5Ss1uB3NzHj/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...and the truth behind demon possession.",
                "line": 266,
                "start_time": "0-16-15.750000",
                "end_time": "0-16-18.500000",
                "url": "https://drive.google.com/file/d/1KvtyaG5gk3zvhyc6bWwoi-xm4U4DNvYv/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "The Cult of Diablos?!",
                "line": 267,
                "start_time": "0-16-18.630000",
                "end_time": "0-16-20.580000",
                "url": "https://drive.google.com/file/d/1-H1oNrIPvWxaxUXDSJQzZ-Cm7oUCVCPK/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "Where did you learn that name?",
                "line": 268,
                "start_time": "0-16-20.580000",
                "end_time": "0-16-21.790000",
                "url": "https://drive.google.com/file/d/1XQegnHwmSdZQDWr6a20yYnBrd_vj27zj/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "How did you find that secret?!",
                "line": 269,
                "start_time": "0-16-21.790000",
                "end_time": "0-16-24.670000",
                "url": "https://drive.google.com/file/d/1s2CPXZdMgAIJapWIJAtmMXpbhsNuxBN1/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I won't kill you.",
                "line": 270,
                "start_time": "0-16-36.670000",
                "end_time": "0-16-38.040000",
                "url": "https://drive.google.com/file/d/1mnZZwZ5UbuDt604B_BLqwq4QMrsIRAwT/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "At least, not before you tell us everything you know.",
                "line": 271,
                "start_time": "0-16-38.330000",
                "end_time": "0-16-41.170000",
                "url": "https://drive.google.com/file/d/1ygQvHPAeTEQ0HDzJA2adQWJo-dh5VlvA/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "That was an interesting trick.",
                "line": 272,
                "start_time": "0-17-01.210000",
                "end_time": "0-17-02.750000",
                "url": "https://drive.google.com/file/d/1dwWqcjmn2M8_o57xD7o2-QE4Tvo_Cz8l/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I'll go after him.",
                "line": 273,
                "start_time": "0-17-16.380000",
                "end_time": "0-17-17.670000",
                "url": "https://drive.google.com/file/d/1M4W-LmzFM5QfijyUI-reKcLUm9kaAMU1/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No need.",
                "line": 274,
                "start_time": "0-17-17.670000",
                "end_time": "0-17-19",
                "url": "https://drive.google.com/file/d/1SvMUJ1bb-6Y-YV6yVajTMX_6tEtqD55l/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "He's headed straight for him.",
                "line": 275,
                "start_time": "0-17-19.920000",
                "end_time": "0-17-21.830000",
                "url": "https://drive.google.com/file/d/1X_LLv8vTKY1wY5ea6kN6K-Jt0tEH2P26/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Is that why we split up?",
                "line": 276,
                "start_time": "0-17-23.130000",
                "end_time": "0-17-24.750000",
                "url": "https://drive.google.com/file/d/1b4rIf5ej2uAU0J-EHkTyRbiU4LzUy6pD/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Lord Shadow is so brilliant!",
                "line": 277,
                "start_time": "0-17-25.040000",
                "end_time": "0-17-26.710000",
                "url": "https://drive.google.com/file/d/1-nw09QZVBGqmbsH0VIYArhUTkSuF0Y4r/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I'm lost.",
                "line": 278,
                "start_time": "0-17-30.290000",
                "end_time": "0-17-31.500000",
                "url": "https://drive.google.com/file/d/1k4VFfPhQyyMen2Hjl6mW07zq4ZnpjXFz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I guess I got a little carried away hunting the small fry.",
                "line": 279,
                "start_time": "0-17-31.830000",
                "end_time": "0-17-34.210000",
                "url": "https://drive.google.com/file/d/1JqczJirOcrBrzF99woeH5pMlgTKIaKl3/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "Dammit...",
                "line": 280,
                "start_time": "0-17-40.790000",
                "end_time": "0-17-42",
                "url": "https://drive.google.com/file/d/18kDal6RpyGG7IG4hyK7gHkXQkAllNF7X/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "You knew I was coming this way?",
                "line": 281,
                "start_time": "0-17-44.130000",
                "end_time": "0-17-46.330000",
                "url": "https://drive.google.com/file/d/1xjK_ZojDWj9IzbU4yaqSrLOElZAF5IoK/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "But there's only one of you!",
                "line": 282,
                "start_time": "0-17-46.500000",
                "end_time": "0-17-49.210000",
                "url": "https://drive.google.com/file/d/1TAzoRG9IIqk9AbyJHVOoRoambHHtvQkE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "In terms of quantity, you have more magic power than Alpha.",
                "line": 283,
                "start_time": "0-17-58.540000",
                "end_time": "0-18-00.830000",
                "url": "https://drive.google.com/file/d/1ZN69dWoNwVp21qYSDOSntFFJ4x4F2kg9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "But unfortunately, you have no idea how to use it.",
                "line": 284,
                "start_time": "0-18-01.130000",
                "end_time": "0-18-03.750000",
                "url": "https://drive.google.com/file/d/1pkYUoOtKEvXtHk6-VBWhwk9ykZIE5Pxq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "And yes...",
                "line": 285,
                "start_time": "0-18-04",
                "end_time": "0-18-05.250000",
                "url": "https://drive.google.com/file/d/16ruBj4NzO4D7XqGys6fB6u1C5oBDBf_i/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "your lunge is weak.",
                "line": 286,
                "start_time": "0-18-05.630000",
                "end_time": "0-18-07.290000",
                "url": "https://drive.google.com/file/d/10sGRPvpWycLColLR5nPU4llYabP3aYDe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Your fighting has absolutely no finesse.",
                "line": 287,
                "start_time": "0-18-10.170000",
                "end_time": "0-18-12.790000",
                "url": "https://drive.google.com/file/d/13rEqPxRvFzzLM9Pnk0TZwa52rqjf9r6O/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Allow me to give you a master class on the correct use of magic.",
                "line": 288,
                "start_time": "0-18-13.880000",
                "end_time": "0-18-18.040000",
                "url": "https://drive.google.com/file/d/1_s0tlif8xOdEb4CbclnKsfhpMMoBrBk9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Lesson One:",
                "line": 289,
                "start_time": "0-18-21.920000",
                "end_time": "0-18-23.130000",
                "url": "https://drive.google.com/file/d/1lXXsboWIRqKEXF3m0Aj3cTNJh0DdsSo5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Concentrate a minimum amount of magical energy in your feet for a burst of speed.",
                "line": 290,
                "start_time": "0-18-23.130000",
                "end_time": "0-18-26.580000",
                "url": "https://drive.google.com/file/d/1yOegKcS6_OrZsZMbYczkZjp26LRbLbEQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Lesson Two:",
                "line": 291,
                "start_time": "0-18-28.790000",
                "end_time": "0-18-30",
                "url": "https://drive.google.com/file/d/1nnqw3j9RbVL7pxNWuGMOaXfHJ1DoAb7o/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Once you've gained the proper distance from your opponent, speed and strength are unnecessary.",
                "line": 292,
                "start_time": "0-18-30",
                "end_time": "0-18-32.710000",
                "url": "https://drive.google.com/file/d/1f68oqwXbyjUWEOkwM7sKcnCNu-wTsOw4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "You don't even need magic.",
                "line": 293,
                "start_time": "0-18-33.670000",
                "end_time": "0-18-35.170000",
                "url": "https://drive.google.com/file/d/1KggN5jM4eM4Ll4DYATQWkyY_bCk9C4i9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Lesson Three:",
                "line": 294,
                "start_time": "0-18-37.170000",
                "end_time": "0-18-38.750000",
                "url": "https://drive.google.com/file/d/1NG92HxHu8GKOuc_R2W5Ebp-RByaRkuGR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I'm only just getting started!",
                "line": 295,
                "start_time": "0-18-38.960000",
                "end_time": "0-18-40.630000",
                "url": "https://drive.google.com/file/d/17bF2bYvXCn228sol0pguNu16byd1R4YE/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "Have I ever felt so overwhelmed in battle before?",
                "line": 296,
                "start_time": "0-18-48.500000",
                "end_time": "0-18-51.750000",
                "url": "https://drive.google.com/file/d/1VuB-lzJvZhsuczSdesCUrclyB1K7X7SN/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "If I have, it was as a boy.",
                "line": 297,
                "start_time": "0-18-52.080000",
                "end_time": "0-18-54.500000",
                "url": "https://drive.google.com/file/d/181I8T9M_-3GWbgDmfSqrpUlcC3utDCMu/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "When I was sparring against my teacher, after I had only just taken up the sword.",
                "line": 298,
                "start_time": "0-18-54.500000",
                "end_time": "0-18-58.750000",
                "url": "https://drive.google.com/file/d/1QjmmULHVft5NX7hTHRwobRzcVaR31sUF/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "But...",
                "line": 299,
                "start_time": "0-18-59.880000",
                "end_time": "0-19-01.130000",
                "url": "https://drive.google.com/file/d/1TteEp_Ok0xb6YJdpAyWR4jAK171d_l9x/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "I don't care how stong you are,",
                "line": 300,
                "start_time": "0-19-02.380000",
                "end_time": "0-19-06.880000",
                "url": "https://drive.google.com/file/d/1JPTR2UmQMZBIsdsP8baxoO2v-ARRsy5A/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "the darkness of this world is so much deeper",
                "line": 301,
                "start_time": "0-19-07.330000",
                "end_time": "0-19-11.750000",
                "url": "https://drive.google.com/file/d/1Xy6ODc-2MvCL87GWUEI7pwgLLp7RH3ng/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "than even you can imagine!",
                "line": 302,
                "start_time": "0-19-11.960000",
                "end_time": "0-19-13.670000",
                "url": "https://drive.google.com/file/d/1v6Uf0Tf7mywynVYRkjx2RBb8PylAozH4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Then I'll dive deeper.",
                "line": 303,
                "start_time": "0-19-20.880000",
                "end_time": "0-19-22.540000",
                "url": "https://drive.google.com/file/d/1u3fPLhIYwLeIWqMIZl4Cp6JLYmt813SZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "As deep as I can go.",
                "line": 304,
                "start_time": "0-19-23.080000",
                "end_time": "0-19-24.420000",
                "url": "https://drive.google.com/file/d/1UpiwKVadF8huE1c1ijkzXpO6d6XytWuo/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "I'm serious, boy!",
                "line": 305,
                "start_time": "0-19-26.460000",
                "end_time": "0-19-28.830000",
                "url": "https://drive.google.com/file/d/1vs8IfhyDUoIYl1oKC6-1L13ahIPylTFk/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "I'll teach you something!",
                "line": 306,
                "start_time": "0-19-32.580000",
                "end_time": "0-19-34.580000",
                "url": "https://drive.google.com/file/d/1C01ytKfmvcCynXZQtQT2M_65GLMNvrHc/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "About the darkness of this world!",
                "line": 307,
                "start_time": "0-19-35.170000",
                "end_time": "0-19-38.250000",
                "url": "https://drive.google.com/file/d/1CO3NJbCanEYPKnRnKR83Xny1ifJwfoHc/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "We're all worthless! And fragile!",
                "line": 308,
                "start_time": "0-19-41.170000",
                "end_time": "0-19-42.960000",
                "url": "https://drive.google.com/file/d/1eMFQdApkAgZgvCeJR6YNR32R6jEKJlzK/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "That is reality! Taste it for yourself!",
                "line": 309,
                "start_time": "0-19-42.960000",
                "end_time": "0-19-45.670000",
                "url": "https://drive.google.com/file/d/1YmIpAZHTtYGAKSCesB4fU9mh8lJy5U8i/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "Your own powerlessness!",
                "line": 310,
                "start_time": "0-19-45.670000",
                "end_time": "0-19-47.750000",
                "url": "https://drive.google.com/file/d/1Vl2XfN5nYbH5IUC_xnFUMlmIhS9dz3O3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Disgraceful.",
                "line": 311,
                "start_time": "0-19-52.170000",
                "end_time": "0-19-53.460000",
                "url": "https://drive.google.com/file/d/1wyDwuvFBm6MEaH4UYlfwX6Fuf7B4sKQj/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "What is this?",
                "line": 312,
                "start_time": "0-19-59.330000",
                "end_time": "0-20-01.290000",
                "url": "https://drive.google.com/file/d/10wUjZQgj_5of21lcwZxtW_-F8bU1HUcM/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "This enormous magical energy?!",
                "line": 313,
                "start_time": "0-20-01.540000",
                "end_time": "0-20-03.830000",
                "url": "https://drive.google.com/file/d/1Jb1DQMMSLhXqHLk2dRoQiUIl2pQCrXH4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Playtime's over.",
                "line": 314,
                "start_time": "0-20-04.170000",
                "end_time": "0-20-05.790000",
                "url": "https://drive.google.com/file/d/1xl2Ooyujw3o58P4uVzdj__7xOLassa4J/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "Of course...",
                "line": 315,
                "start_time": "0-20-16.290000",
                "end_time": "0-20-18",
                "url": "https://drive.google.com/file/d/1vnoW_Cyo0_nASgoCyxBECFe8aRDrZvwK/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "It's not just his technique...",
                "line": 316,
                "start_time": "0-20-18.830000",
                "end_time": "0-20-21",
                "url": "https://drive.google.com/file/d/1sEMlzwU3iZ9KriLjW2v4aTx9tynOpUfM/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "It's everything!",
                "line": 317,
                "start_time": "0-20-21.750000",
                "end_time": "0-20-23.330000",
                "url": "https://drive.google.com/file/d/1lZNDYil7uAnnluxncNriaVu6UxohwGYV/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "I was powerless against the darkness.",
                "line": 318,
                "start_time": "0-20-24.790000",
                "end_time": "0-20-28.420000",
                "url": "https://drive.google.com/file/d/1iiIleOxJ7mOdbys1jPY4x3XmNtVnKC4C/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "But maybe this boy...",
                "line": 319,
                "start_time": "0-20-29.460000",
                "end_time": "0-20-32.330000",
                "url": "https://drive.google.com/file/d/18Xv42UBqklimwXSUNowU1m59N-bBI9Ve/view?usp=drivesdk"
            },
            {
                "name": "Grease",
                "name_variant": "Grease",
                "subtitle": "Millia...",
                "line": 320,
                "start_time": "0-20-36.790000",
                "end_time": "0-20-38",
                "url": "https://drive.google.com/file/d/1LnGDaq7p-KCMd_WVSVe5XJ_8sSlHjpvU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "He was pretty tough for a regular old bandit.",
                "line": 321,
                "start_time": "0-20-57.290000",
                "end_time": "0-20-59.750000",
                "url": "https://drive.google.com/file/d/1oHOblosmumDtCtxjp12xajP7849CBTJ7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Well, that's pretty much how we successfully pulled off this rescue mission.",
                "line": 322,
                "start_time": "0-21-02.420000",
                "end_time": "0-21-06.170000",
                "url": "https://drive.google.com/file/d/1UthOeBbXCkJkB1XIkjXrJjOqd3IAI0r5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "After breaking out of her chains, Claire showed up back home the next day in a very bad mood.",
                "line": 323,
                "start_time": "0-21-07.130000",
                "end_time": "0-21-12",
                "url": "https://drive.google.com/file/d/1LOYRv8iqdKJyIlSEkX48AsVBIVEn4rdF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "She is ridiculously tenacious.",
                "line": 324,
                "start_time": "0-21-12.580000",
                "end_time": "0-21-14.580000",
                "url": "https://drive.google.com/file/d/1Nx1W0pJ1g7u5wGT-_WtCPEAp5RGVrqcE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And her injuries were more or less healed overnight.",
                "line": 325,
                "start_time": "0-21-14.960000",
                "end_time": "0-21-17.250000",
                "url": "https://drive.google.com/file/d/1P6_0g15GxJy87Ce4bhsun419Wvm8MBYy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "She set out for the royal capital as if nothing had ever happened.",
                "line": 326,
                "start_time": "0-21-17.460000",
                "end_time": "0-21-20.750000",
                "url": "https://drive.google.com/file/d/1_Y-8fuXy-F2ly9cKA-For09MpXMo6QLh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I wish I could go to the capital.",
                "line": 327,
                "start_time": "0-21-32.580000",
                "end_time": "0-21-34.250000",
                "url": "https://drive.google.com/file/d/1QvQULq3MgjSqbBnwByr0AIAls60fqkWs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It's a giant metropolis that doesn't even compare to this backwater village.",
                "line": 328,
                "start_time": "0-21-34.250000",
                "end_time": "0-21-36.960000",
                "url": "https://drive.google.com/file/d/1dOHhty9mfVCHgJXY9UAMGpSdEy4m-cJ8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "There's bound to be some character there in the position of main protagonist.",
                "line": 329,
                "start_time": "0-21-37.790000",
                "end_time": "0-21-41.040000",
                "url": "https://drive.google.com/file/d/1kJsyoy1k40FMNmxGdf6UgfnFINM4s5Hx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And I bet there's a last boss, too.",
                "line": 330,
                "start_time": "0-21-41.040000",
                "end_time": "0-21-42.710000",
                "url": "https://drive.google.com/file/d/1tn3e3ON_u-dcUa9P4-bPqR0gXF5qMEsU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Well, I'll get to go there in two years.",
                "line": 331,
                "start_time": "0-21-43.880000",
                "end_time": "0-21-46.130000",
                "url": "https://drive.google.com/file/d/1MY-L6dJ0WibgjyHLEBF4F0zNgy5g55iI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "In the meantime, I'll put Alpha and the girls to work...",
                "line": 332,
                "start_time": "0-21-46.130000",
                "end_time": "0-21-48.710000",
                "url": "https://drive.google.com/file/d/1mTEm0h2I7LQNKTp9BDsXXjQacdhFs8tL/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Shadow...",
                "line": 333,
                "start_time": "0-21-49.040000",
                "end_time": "0-21-50.250000",
                "url": "https://drive.google.com/file/d/1rRCGdt-P72A4d4QbNXIBtc-II9br5l-F/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "The hour has come.",
                "line": 334,
                "start_time": "0-21-53.710000",
                "end_time": "0-21-55.080000",
                "url": "https://drive.google.com/file/d/1v1J44POePo9PwcdLeGtjGAU9I68e4a4X/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It is time for us to leave you.",
                "line": 335,
                "start_time": "0-21-55.080000",
                "end_time": "0-21-57.540000",
                "url": "https://drive.google.com/file/d/1u3YcHbGcgzKlJexPzv0yRER-eycgC7g1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "What?",
                "line": 336,
                "start_time": "0-22-02.540000",
                "end_time": "0-22-03.540000",
                "url": "https://drive.google.com/file/d/1E54fX0TUME1PtGDESnSnUqsPZ4m6hAPr/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "This is goodbye.",
                "line": 337,
                "start_time": "0-22-05.290000",
                "end_time": "0-22-06.580000",
                "url": "https://drive.google.com/file/d/1R5AUzXKAcxlCpdzky1Eotltd3Mu9BxUt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "What?",
                "line": 338,
                "start_time": "0-22-09",
                "end_time": "0-22-10",
                "url": "https://drive.google.com/file/d/1c6ecZ3TrmwMEqE-Mp2QhxMPZly9fMUR5/view?usp=drivesdk"
            }
        ]
    }
}

let setDoc = db.collection('data').doc('an_s1_e2').set(data['s1']);

//let setDoc = db.collection('data').doc('ssc_p2_c3-4').set(data['p3']['c3-4']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
