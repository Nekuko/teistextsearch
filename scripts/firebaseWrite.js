const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "s2": {
        "e4": [
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Who are you?",
                "line": 1,
                "start_time": "0-00-08.070000",
                "end_time": "0-00-09.490000",
                "url": "https://drive.google.com/file/d/1TsQ_y-UOiy9HWZndofeneDNbhXbF7pcs/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "Well, Ms. Mitsugoshi Lady...",
                "line": 2,
                "start_time": "0-00-09.490000",
                "end_time": "0-00-11.240000",
                "url": "https://drive.google.com/file/d/1QJ-OcUBC3CnGDZHNLOcuduNHpCiDhXEs/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "Your company is just making too much money.",
                "line": 3,
                "start_time": "0-00-11.820000",
                "end_time": "0-00-14.410000",
                "url": "https://drive.google.com/file/d/1b4Rv0HMN4vs4ZV8s1uQW1O5DZear--iP/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "Tea leaves, cacao, coffee...",
                "line": 4,
                "start_time": "0-00-14.910000",
                "end_time": "0-00-17.370000",
                "url": "https://drive.google.com/file/d/1Vx24j7rgu4k5fI8aslFc3bXXgELjlwbN/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "A hundred million zeni would be chump change for this cart alone.",
                "line": 5,
                "start_time": "0-00-17.370000",
                "end_time": "0-00-20.540000",
                "url": "https://drive.google.com/file/d/11bEhTW095RvLMCMbuNMHgpdrQ5zXyKWt/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "Your business has been growing like crazy, and my boss thinks it's time for that to stop!",
                "line": 6,
                "start_time": "0-00-20.880000",
                "end_time": "0-00-25.460000",
                "url": "https://drive.google.com/file/d/11Ly_U0gTV8GIgc54yP0zGjozZq7H4tY0/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Your boss?",
                "line": 7,
                "start_time": "0-00-29.130000",
                "end_time": "0-00-30.760000",
                "url": "https://drive.google.com/file/d/1gOXAGCLOD-dPruJNubW06mJXLVDWM8Kv/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "You've heard of Garter?",
                "line": 8,
                "start_time": "0-00-30.760000",
                "end_time": "0-00-32.720000",
                "url": "https://drive.google.com/file/d/1QFq0M7Syyx3xJf5u9WII8dKcCUL5WUAA/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "He controls all the buying and selling in Midgar, and you ladies went and made him mad.",
                "line": 9,
                "start_time": "0-00-32.720000",
                "end_time": "0-00-37.560000",
                "url": "https://drive.google.com/file/d/1QQo5ZpajGgmq7tdLEAJF17pWdpjFSOOT/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Oh no...",
                "line": 10,
                "start_time": "0-00-38.980000",
                "end_time": "0-00-40.190000",
                "url": "https://drive.google.com/file/d/1oPySS72fJrEEc4WRf2AJnAc2adkdNMk4/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Mr. Garter?",
                "line": 11,
                "start_time": "0-00-40.190000",
                "end_time": "0-00-41.520000",
                "url": "https://drive.google.com/file/d/1UqL_24hDtlQhfuohA1V8zO-jK-CwMqWw/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "But everyone knows he's the respectable gentleman",
                "line": 12,
                "start_time": "0-00-41.520000",
                "end_time": "0-00-44.020000",
                "url": "https://drive.google.com/file/d/1Y9T-E4EXag5eXodEjU1c_JC3z8XyRoqM/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "who serves as the president of the Major Corporate Alliance.",
                "line": 13,
                "start_time": "0-00-44.020000",
                "end_time": "0-00-46.110000",
                "url": "https://drive.google.com/file/d/1ayyZA-QqalG3hC_De_zIOxgouyyUB46z/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "He's a faithful follower of the Divine Teachings and has made many sizable donations to the Church!",
                "line": 14,
                "start_time": "0-00-46.110000",
                "end_time": "0-00-50.360000",
                "url": "https://drive.google.com/file/d/1l5fdaRxa7bFbCkLfBlL2nanYr5BURuIU/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "He's certainly not the type to hire a bunch of ruffians like you to interfere with honest businesspeople!",
                "line": 15,
                "start_time": "0-00-50.660000",
                "end_time": "0-00-56.080000",
                "url": "https://drive.google.com/file/d/16tJo68QwdrvF_Us0h1JaRv39wLCa0xBL/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "Then I guess you learned something, didn't you?",
                "line": 16,
                "start_time": "0-00-57",
                "end_time": "0-00-59.460000",
                "url": "https://drive.google.com/file/d/1aFPQvzlambEzf4vV6VFrHLL1whICjf_l/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "Even the most righteous of people have a hidden dark side.",
                "line": 17,
                "start_time": "0-00-59.710000",
                "end_time": "0-01-02.580000",
                "url": "https://drive.google.com/file/d/18GpHj4dsUPFddt1tiWOyplQAsw9UI6Ik/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "Garter only made it as big as he did by making the most of people like us.",
                "line": 18,
                "start_time": "0-01-02.580000",
                "end_time": "0-01-07.130000",
                "url": "https://drive.google.com/file/d/1NVr0uGGNJBQ0RQu74ax-7BWFhaybm2vm/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "I don't believe it...",
                "line": 19,
                "start_time": "0-01-07.380000",
                "end_time": "0-01-08.630000",
                "url": "https://drive.google.com/file/d/1puo53Tq1opxEHs97tO5lyChGp9h3Kt5A/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "I don't believe you think it makes a difference to tell us what we already know.",
                "line": 20,
                "start_time": "0-01-09.920000",
                "end_time": "0-01-12.970000",
                "url": "https://drive.google.com/file/d/1dgTonwRvbf9NN-cIjJmDwq-wdm1PgmGb/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "Huh?",
                "line": 21,
                "start_time": "0-01-12.970000",
                "end_time": "0-01-13.970000",
                "url": "https://drive.google.com/file/d/1YNIWob4KgTYZTdko_-0CIiR4pOW2Kv5g/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I will admit that there is value in testimony from an involved party.",
                "line": 22,
                "start_time": "0-01-13.970000",
                "end_time": "0-01-17.100000",
                "url": "https://drive.google.com/file/d/1ljEXHUczToUoDoDsrDNhKBXfmZi6uaA8/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Every person alive has a hidden dark side.",
                "line": 23,
                "start_time": "0-01-22.520000",
                "end_time": "0-01-25.190000",
                "url": "https://drive.google.com/file/d/1zFcq5-zZyWPRKIY9IB8kCKmZMXvw7xPL/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Righteous or wicked...",
                "line": 24,
                "start_time": "0-01-25.480000",
                "end_time": "0-01-27.610000",
                "url": "https://drive.google.com/file/d/1dkTsjhVhQPf6rxTnZZDT_osvZR_qCMfn/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Exceptional or ordinary...",
                "line": 25,
                "start_time": "0-01-27.610000",
                "end_time": "0-01-29.860000",
                "url": "https://drive.google.com/file/d/1RmZB0T_WpsksMILaJuSjXNwIzSfKp48q/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Man or woman...",
                "line": 26,
                "start_time": "0-01-29.860000",
                "end_time": "0-01-32.280000",
                "url": "https://drive.google.com/file/d/1JdhGzwZqUH4dC0VAmHxOEvPzatWHktVl/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "Women, all in black!",
                "line": 27,
                "start_time": "0-01-32.820000",
                "end_time": "0-01-34.820000",
                "url": "https://drive.google.com/file/d/1g4w1J5V-sQfBHDHb2waueQZNIVbdsYae/view?usp=drivesdk"
            },
            {
                "name": "Bandit",
                "name_variant": "Bandit",
                "subtitle": "No, you can't be...",
                "line": 28,
                "start_time": "0-01-35.160000",
                "end_time": "0-01-36.370000",
                "url": "https://drive.google.com/file/d/1IxM-5uMtoG3ydHTXNXDQS4WYx9K6dQkC/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Unsheathe the sword of judgment.",
                "line": 29,
                "start_time": "0-01-36.370000",
                "end_time": "0-01-39.290000",
                "url": "https://drive.google.com/file/d/1P0eeBcWFyPq5-RGkAZ_9dkswSYWGDHZ4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It's true, night is best when it's quiet.",
                "line": 30,
                "start_time": "0-01-48.460000",
                "end_time": "0-01-51.590000",
                "url": "https://drive.google.com/file/d/1h3CsjY6ttws2F0-WMcHAf1zQF3Bas5Ln/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "I believe we have reduced their legitimate ranks considerably with this operation.",
                "line": 31,
                "start_time": "0-01-52.880000",
                "end_time": "0-01-56.680000",
                "url": "https://drive.google.com/file/d/1uHsIUIrOyi8N9f-D4dyqnEKNgn7nxn9X/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "So now...",
                "line": 32,
                "start_time": "0-01-57.180000",
                "end_time": "0-01-58.390000",
                "url": "https://drive.google.com/file/d/11y4nFBjP1-MHWBLUwgZAMDgOdViBWQ-B/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, the underworld players connected to the Cult should start to show themselves.",
                "line": 33,
                "start_time": "0-01-58.600000",
                "end_time": "0-02-03.600000",
                "url": "https://drive.google.com/file/d/1y8vWczvMFWfIPzHOc5Zw3edX8cqDaoe-/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "The war...",
                "line": 34,
                "start_time": "0-02-05.270000",
                "end_time": "0-02-06.480000",
                "url": "https://drive.google.com/file/d/1VvK8FONcaOc1jlvsRMSr9fP9MBByWx5T/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "is about to begin.",
                "line": 35,
                "start_time": "0-02-07.520000",
                "end_time": "0-02-08.940000",
                "url": "https://drive.google.com/file/d/1-ZLjSTnUS85Q0GsOVwZDogJFCD_WjxxH/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "It's here, it's here, it is here!",
                "line": 36,
                "start_time": "0-03-41.580000",
                "end_time": "0-03-45.250000",
                "url": "https://drive.google.com/file/d/1BiL2SrzUBbbZ5lEq6do8cWO27IMihewE/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "All eyes will be right here on me!",
                "line": 37,
                "start_time": "0-03-45.250000",
                "end_time": "0-03-47.370000",
                "url": "https://drive.google.com/file/d/1URhVwcIRqb8HCDsMyoY4r_0XDc0yTGSO/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Now that we have donned the latest in fashion from Comme \u00c7a du Mitsugoshi,",
                "line": 38,
                "start_time": "0-03-47.370000",
                "end_time": "0-03-50.790000",
                "url": "https://drive.google.com/file/d/1oD90AMySgQWZYMxoSg2aYafWp93ETxsp/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "the eyes of every girl on the street will be...",
                "line": 39,
                "start_time": "0-03-50.790000",
                "end_time": "0-03-53.340000",
                "url": "https://drive.google.com/file/d/1f5qck5XG1BW2_8UbnlYdEf3UK9Hv2_1B/view?usp=drivesdk"
            },
            {
                "name": "Skel",
                "name_variant": "Skel & Po (Skel)",
                "subtitle": "...laser focused on us!",
                "line": 40,
                "start_time": "0-03-53.920000",
                "end_time": "0-03-56.050000",
                "url": "https://drive.google.com/file/d/1b5WW1k0KwywfUwZ5lzokAH9IbLIvPP4C/view?usp=drivesdk"
            },
            {
                "name": "Po",
                "name_variant": "Skel & Po (Po)",
                "subtitle": "...laser focused on us!",
                "line": 40,
                "start_time": "0-03-53.920000",
                "end_time": "0-03-56.050000",
                "url": "https://drive.google.com/file/d/1b5WW1k0KwywfUwZ5lzokAH9IbLIvPP4C/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "First they'll start hitting on us, and then the smooching will begin!",
                "line": 41,
                "start_time": "0-03-56.050000",
                "end_time": "0-03-58.590000",
                "url": "https://drive.google.com/file/d/1kHcv8_5fR-3zEJyo022SBYLgfP2oI3uY/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Guaranteed!",
                "line": 42,
                "start_time": "0-03-58.590000",
                "end_time": "0-03-59.890000",
                "url": "https://drive.google.com/file/d/19fio51IwizjSAISX_672rDiAwhOEL2XU/view?usp=drivesdk"
            },
            {
                "name": "Skel",
                "name_variant": "Skel & Po (Skel)",
                "subtitle": "Mmmmmwah...",
                "line": 43,
                "start_time": "0-03-59.890000",
                "end_time": "0-04-01.550000",
                "url": "https://drive.google.com/file/d/1SV9K7ZKCFgJZBZokQPiHM0_YfJ15ibxu/view?usp=drivesdk"
            },
            {
                "name": "Po",
                "name_variant": "Skel & Po (Po)",
                "subtitle": "Mmmmmwah...",
                "line": 43,
                "start_time": "0-03-59.890000",
                "end_time": "0-04-01.550000",
                "url": "https://drive.google.com/file/d/1SV9K7ZKCFgJZBZokQPiHM0_YfJ15ibxu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Comme \u00c7a du Mitsugoshi...",
                "line": 44,
                "start_time": "0-04-01.680000",
                "end_time": "0-04-03.810000",
                "url": "https://drive.google.com/file/d/1cCf5fLJo1rO69Pq4nOkvJuIpDD86Gy26/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Anything related to design probably came from Eta.",
                "line": 45,
                "start_time": "0-04-03.810000",
                "end_time": "0-04-06.560000",
                "url": "https://drive.google.com/file/d/1pZzmOwjj0v1WeX1w-2q_7lEbpkWjyaxR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "First Gamma, then Beta and Epsilon...",
                "line": 46,
                "start_time": "0-04-07.190000",
                "end_time": "0-04-09.770000",
                "url": "https://drive.google.com/file/d/1uTVlNZt-Al0exj25kZ8x09iLZ1rI4yQJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Man, every single one of them is just running wild.",
                "line": 47,
                "start_time": "0-04-09.770000",
                "end_time": "0-04-12.980000",
                "url": "https://drive.google.com/file/d/1ddVUP2a-dUeB6lJsYGrA7V14OAICdWxv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Uh, looks like something's peeling off.",
                "line": 48,
                "start_time": "0-04-14.480000",
                "end_time": "0-04-15.940000",
                "url": "https://drive.google.com/file/d/1tlfmQN_1IhtdSdGmsj-ix4D9Pvx1KqC2/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "What?",
                "line": 49,
                "start_time": "0-04-15.940000",
                "end_time": "0-04-16.940000",
                "url": "https://drive.google.com/file/d/1fG3phjRg82-EwrXKCciq8sRO7-i1TWkt/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "The Comme \u00c7a du Mitsogoshi logo!",
                "line": 50,
                "start_time": "0-04-17.950000",
                "end_time": "0-04-19.860000",
                "url": "https://drive.google.com/file/d/1xPfjvuEugnUy5CiIJtjtNNAQbnLTW7WW/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "Without that, these clothes are just cheap knockoffs!",
                "line": 51,
                "start_time": "0-04-19.860000",
                "end_time": "0-04-22.370000",
                "url": "https://drive.google.com/file/d/1AMqVZDNsVJWeq5UCGcUivNhf43mHOEUx/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "But on the other hand,",
                "line": 52,
                "start_time": "0-04-22.370000",
                "end_time": "0-04-23.830000",
                "url": "https://drive.google.com/file/d/1tI2kvzBjoSnRt6yH4SA8WVtOViARJFph/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "if we stick these on our other clothes, then they will be Comme \u00c7a du Mitsugoshi...",
                "line": 53,
                "start_time": "0-04-23.830000",
                "end_time": "0-04-27.540000",
                "url": "https://drive.google.com/file/d/1MxhMlv6SYW-tLiyMOlodXF4FM4CHwdvB/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "What a loser brand...",
                "line": 54,
                "start_time": "0-04-29.580000",
                "end_time": "0-04-31.130000",
                "url": "https://drive.google.com/file/d/1LtYvuW-Ofl7T0s6VhgGLtOXv_2hZ2boO/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "This is the logo of the place we bought these from!",
                "line": 55,
                "start_time": "0-04-32",
                "end_time": "0-04-34.250000",
                "url": "https://drive.google.com/file/d/1hYmwMtDSIcHjFsjYhTwcy2Gg8NqzHonH/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "Does this mean mine is, too?",
                "line": 56,
                "start_time": "0-04-34.250000",
                "end_time": "0-04-36.170000",
                "url": "https://drive.google.com/file/d/1MsoNAC_92iY_fFEwZlBbVDrQSetTeM66/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "And now that I look at this up close, it seems kinda off.",
                "line": 57,
                "start_time": "0-04-36.170000",
                "end_time": "0-04-39.010000",
                "url": "https://drive.google.com/file/d/1cHnMwcMCTHgmaTCoV15mR56tUwybjsBd/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "The real one is more, you know, intricate or something.",
                "line": 58,
                "start_time": "0-04-39.260000",
                "end_time": "0-04-42.010000",
                "url": "https://drive.google.com/file/d/1gZaM7TSeMKbHF4OFMG0YB1pBeDcutM0f/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "No wonder these duds were so cheap.",
                "line": 59,
                "start_time": "0-04-42.720000",
                "end_time": "0-04-44.850000",
                "url": "https://drive.google.com/file/d/11nakd01WKgVJZhrI0D8I1U-y5BIRbzFK/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "Mine, too...",
                "line": 60,
                "start_time": "0-04-44.850000",
                "end_time": "0-04-45.890000",
                "url": "https://drive.google.com/file/d/1udtrJyr0VIzkxXjHwRvGzzWOHOejUrJ6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Come to think of it, all of my outfits were curated by Alpha and the girls.",
                "line": 61,
                "start_time": "0-04-45.890000",
                "end_time": "0-04-49.770000",
                "url": "https://drive.google.com/file/d/18Yswbh1X4QQLa4D5gK5X40vhYpYoAy2n/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Everything I'm wearing is like a knockoff from my past life.",
                "line": 62,
                "start_time": "0-04-50.060000",
                "end_time": "0-04-53.270000",
                "url": "https://drive.google.com/file/d/14nDec5W4XYmn7t856aQGCQQu3-FQg1u_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I saw people walking around the capital wearing suits, and thought that was just the culture here.",
                "line": 63,
                "start_time": "0-04-55.020000",
                "end_time": "0-05-00.450000",
                "url": "https://drive.google.com/file/d/1vqqvyQ34AXjXZvwpxQcZA4oJCAmE-Opm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But it's looking like that was all Alpha's doing, too.",
                "line": 64,
                "start_time": "0-05-00.450000",
                "end_time": "0-05-02.910000",
                "url": "https://drive.google.com/file/d/1l237nK8F9YuzV_xM1u5I7XN5xrOcsJeW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I guess they're using my knowledge from my past life",
                "line": 65,
                "start_time": "0-05-03.870000",
                "end_time": "0-05-05.950000",
                "url": "https://drive.google.com/file/d/1zLDM8sCOOJkFVYvQVKGjOFihw6z9Zd7h/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "to increase their market share as far as they can make it go.",
                "line": 66,
                "start_time": "0-05-05.950000",
                "end_time": "0-05-08.830000",
                "url": "https://drive.google.com/file/d/1qSm-LrzOBPbP85ojqNtoQE8h1p8Tj47c/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And I bet the people they're stealing business from are none too happy about it.",
                "line": 67,
                "start_time": "0-05-08.830000",
                "end_time": "0-05-13.210000",
                "url": "https://drive.google.com/file/d/1XErtGB_8a8z2lHHir_RR9U2Tw6gh_S72/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The people they're stealing business from!",
                "line": 68,
                "start_time": "0-05-13.880000",
                "end_time": "0-05-17.800000",
                "url": "https://drive.google.com/file/d/1-c_6ZYn1nwxRwE_cnehyWNu_UWwjYauR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Those people aren't happy!",
                "line": 69,
                "start_time": "0-05-17.800000",
                "end_time": "0-05-19.220000",
                "url": "https://drive.google.com/file/d/1-2hz87rTpXJgAjj1QWYB-8yzMjoEDsV6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But that all ends today.",
                "line": 70,
                "start_time": "0-05-20.220000",
                "end_time": "0-05-22.130000",
                "url": "https://drive.google.com/file/d/194GfPdekmCRKu-0kHdbStzV6f7I2osdA/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "Cid?",
                "line": 71,
                "start_time": "0-05-22.890000",
                "end_time": "0-05-23.890000",
                "url": "https://drive.google.com/file/d/1-dhp2tKppT9gZH8NbO65Lvwi3V5lyyj9/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Taking a dump?",
                "line": 72,
                "start_time": "0-05-23.890000",
                "end_time": "0-05-25.220000",
                "url": "https://drive.google.com/file/d/1TiTwYOc2-fsY_7sn4RLcPGYj2-sQCnUR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "No.",
                "line": 73,
                "start_time": "0-05-25.220000",
                "end_time": "0-05-26.430000",
                "url": "https://drive.google.com/file/d/1HEPWo931moeMLKN8Y1G8J2zV4luIfirb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm going to reclaim what's mine.",
                "line": 74,
                "start_time": "0-05-27.270000",
                "end_time": "0-05-28.890000",
                "url": "https://drive.google.com/file/d/1BqKF-aye8uyFxAvQUA5fZy3dzpGXIyJp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "All of it.",
                "line": 75,
                "start_time": "0-05-29.430000",
                "end_time": "0-05-30.600000",
                "url": "https://drive.google.com/file/d/1agspOtmDQZlmZ1S8gJQzBn7OU7L5Gr_a/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "What's that about?",
                "line": 76,
                "start_time": "0-05-30.600000",
                "end_time": "0-05-31.890000",
                "url": "https://drive.google.com/file/d/1EtwSBCZAQvYN5-9T7c09VYf9Aw0zpEkD/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "Doesn't he know that summer is already over?",
                "line": 77,
                "start_time": "0-05-31.890000",
                "end_time": "0-05-35.020000",
                "url": "https://drive.google.com/file/d/19uXU8Izoq2BOjOQsJld02ArKkY2L-Svi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "As of today, I am a super elite secret agent!",
                "line": 78,
                "start_time": "0-05-45.370000",
                "end_time": "0-05-49.370000",
                "url": "https://drive.google.com/file/d/14uyNjcABnOv0-7B0YUykF40kgaLmbiwP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Tonight, the world will know my name!",
                "line": 79,
                "start_time": "0-05-51.040000",
                "end_time": "0-05-54.750000",
                "url": "https://drive.google.com/file/d/1PQuTvcXy7d6indQaT7kzt53dQIobHNnQ/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Welcome...",
                "line": 80,
                "start_time": "0-06-01.170000",
                "end_time": "0-06-02.380000",
                "url": "https://drive.google.com/file/d/1BeSdUMoHFWpZGmLgjs5xcUARroeSDjg5/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "my dear Shadow.",
                "line": 81,
                "start_time": "0-06-05.010000",
                "end_time": "0-06-06.430000",
                "url": "https://drive.google.com/file/d/1ewa0oHaj6LBnZf0PdQNHhuKRh0WR946f/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "I have forsaken that name.",
                "line": 82,
                "start_time": "0-06-07.850000",
                "end_time": "0-06-09.390000",
                "url": "https://drive.google.com/file/d/1skQPQSRUFdf4pO2QsHPUadbwnF2BxJEX/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Oh yes, of course,",
                "line": 83,
                "start_time": "0-06-09.810000",
                "end_time": "0-06-11.560000",
                "url": "https://drive.google.com/file/d/1nDc_mdXYGukyA6M8q0RR0ZD44owyghMi/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Mr. John Smith.",
                "line": 84,
                "start_time": "0-06-11.560000",
                "end_time": "0-06-13.190000",
                "url": "https://drive.google.com/file/d/1I31SFJyNvef7lpOXHZ1xA_-fuX--kw58/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "It is truly heartening to have you so kindly joining our ranks.",
                "line": 85,
                "start_time": "0-06-13.520000",
                "end_time": "0-06-17.650000",
                "url": "https://drive.google.com/file/d/1aH6KwuuiHQdzawQq0p72ChhHiK4tRhtG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "It is a profitable arrangement for myself, that is all.",
                "line": 86,
                "start_time": "0-06-17.650000",
                "end_time": "0-06-21.240000",
                "url": "https://drive.google.com/file/d/1O4ZYDbCd3IJcy7cCXeCxtZCIo2ue4o2J/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Oh, but don't you find it depressing to maintain a relationship based solely on profit?",
                "line": 87,
                "start_time": "0-06-21.240000",
                "end_time": "0-06-25.320000",
                "url": "https://drive.google.com/file/d/1KeqNxRJZSkb50Rj8JPR0Str1Myfi7FtL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Don't you?",
                "line": 88,
                "start_time": "0-06-25.320000",
                "end_time": "0-06-26.570000",
                "url": "https://drive.google.com/file/d/1qRxKFhL1BS_igdWHpMHSh3k3FnHTR_9w/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "My, how unfriendly.",
                "line": 89,
                "start_time": "0-06-26.570000",
                "end_time": "0-06-28.240000",
                "url": "https://drive.google.com/file/d/1uu7fgCE2Bif7gf8P6dTDvnmnT7h43aQV/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "The other day, Garter called a meeting of the Major Corporate Alliance.",
                "line": 90,
                "start_time": "0-06-29.990000",
                "end_time": "0-06-35.370000",
                "url": "https://drive.google.com/file/d/18WRGXdQYTMYD4bEqAY2grQspfe7zjwmz/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Something about strengthening their measures against Mitsugoshi.",
                "line": 91,
                "start_time": "0-06-35.370000",
                "end_time": "0-06-39",
                "url": "https://drive.google.com/file/d/14wJjumkQ-HE8GL9k6hkzZk4wi2qn3Rqz/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "The fall of Mitsugoshi may come sooner than we had anticipated.",
                "line": 92,
                "start_time": "0-06-39.460000",
                "end_time": "0-06-44.180000",
                "url": "https://drive.google.com/file/d/1Zc-ITMU_2iIrvVrXxq_XtaYJdawA-fFi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "I see.",
                "line": 93,
                "start_time": "0-06-44.180000",
                "end_time": "0-06-45.550000",
                "url": "https://drive.google.com/file/d/1Glzdcs9mPsToOaYjBDoCH6aO5fD19eni/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Our plan remains unchanged.",
                "line": 94,
                "start_time": "0-06-45.550000",
                "end_time": "0-06-48.300000",
                "url": "https://drive.google.com/file/d/1ZrAA4cN_evrrKZ17mkyiR8AbtTcuDOgM/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "While Mitsugoshi and the Major Corporate Alliance work to destroy each other...",
                "line": 95,
                "start_time": "0-06-48.600000",
                "end_time": "0-06-52.980000",
                "url": "https://drive.google.com/file/d/1qEAR8o-hhkJ7Wj11_00XhHl_Dig-wNox/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "We take everything.",
                "line": 96,
                "start_time": "0-06-52.980000",
                "end_time": "0-06-55.060000",
                "url": "https://drive.google.com/file/d/1M7xe5HNyHSqNmYiVWaHCbPzR9rbREoWr/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "We will need you to take action for us, Mr. Smith.",
                "line": 97,
                "start_time": "0-06-55.520000",
                "end_time": "0-06-58.770000",
                "url": "https://drive.google.com/file/d/1zD4jmgfMiYAPObRvLKs8cszGBFA-eRQO/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "But do be careful.",
                "line": 98,
                "start_time": "0-06-58.770000",
                "end_time": "0-07-00.940000",
                "url": "https://drive.google.com/file/d/1rjs5NwuO6R4c-CjARIxHO42Uc9imlaTt/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Behind the Major Corporate Alliance, you will find him.",
                "line": 99,
                "start_time": "0-07-00.940000",
                "end_time": "0-07-04.860000",
                "url": "https://drive.google.com/file/d/1kt_B9lkf0mNWkDG9B2XFlHsvzbbMMH9B/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "The underworld swordsman who rose above Garter",
                "line": 100,
                "start_time": "0-07-05.400000",
                "end_time": "0-07-07.820000",
                "url": "https://drive.google.com/file/d/1SfQ0fvfkzQSutUSG8ZfFKEVPkm78fVnD/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "and took control of the MCA before anyone knew what was happening:",
                "line": 101,
                "start_time": "0-07-07.820000",
                "end_time": "0-07-11.910000",
                "url": "https://drive.google.com/file/d/1jWJkebp75vz7nnSCzkRKOzrv2GbFZ9-N/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Gettan the Sword Devil.",
                "line": 102,
                "start_time": "0-07-11.910000",
                "end_time": "0-07-13.660000",
                "url": "https://drive.google.com/file/d/14jXfpp-LYvexcLHJCYsDFYs41P7BKQW2/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "I know the man well.",
                "line": 103,
                "start_time": "0-07-14.080000",
                "end_time": "0-07-16.500000",
                "url": "https://drive.google.com/file/d/1N65BB-ueTYyLWEDqP3EP0U_WH1MQ8e1H/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "He's a dangerous cur who will stop at nothing to get what he wants.",
                "line": 104,
                "start_time": "0-07-17.210000",
                "end_time": "0-07-21",
                "url": "https://drive.google.com/file/d/1cpgDQgK-1zG1DKoPNwYy8EDmXrD86BXX/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "But he's mine.",
                "line": 105,
                "start_time": "0-07-22.380000",
                "end_time": "0-07-24.170000",
                "url": "https://drive.google.com/file/d/1Nstye1Flus1yZWREN_u77vVPSE7omN77/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "I swear I'll...",
                "line": 106,
                "start_time": "0-07-24.170000",
                "end_time": "0-07-25.880000",
                "url": "https://drive.google.com/file/d/1q8SYbhaqN5aisSRodeMrRSooxM4AHss9/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "I look forward to seeing it.",
                "line": 107,
                "start_time": "0-07-36.440000",
                "end_time": "0-07-38.230000",
                "url": "https://drive.google.com/file/d/1kcd7Gvhb35V6ZqHyvAcC7zdi7yeC5LdL/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "In the battle for control over the market in the Royal Capital...",
                "line": 108,
                "start_time": "0-07-39.400000",
                "end_time": "0-07-43.070000",
                "url": "https://drive.google.com/file/d/1TOl_7gQT2aIqp2hg1QlElPuF7DZDo81F/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "At the end of the conflict where money is bought with blood,",
                "line": 109,
                "start_time": "0-07-43.070000",
                "end_time": "0-07-45.820000",
                "url": "https://drive.google.com/file/d/17i3wTWm2QYXqlz0Mh-UZwdVHFeO86UzZ/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "who will remain standing in the end?",
                "line": 110,
                "start_time": "0-07-45.820000",
                "end_time": "0-07-48.530000",
                "url": "https://drive.google.com/file/d/1DNIYMhmT2alvxH1oWmE7GAnsWTUtzdtg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "I will destroy it all, then build it up again.",
                "line": 111,
                "start_time": "0-07-48.860000",
                "end_time": "0-07-51.870000",
                "url": "https://drive.google.com/file/d/18B_tr_KZ0kuTq3C2ymI6OC_NwD_T4y3u/view?usp=drivesdk"
            },
            {
                "name": "Shop Staff",
                "name_variant": "Shop Staff",
                "subtitle": "The moment you've all been waiting for!",
                "line": 112,
                "start_time": "0-07-55.080000",
                "end_time": "0-07-56.660000",
                "url": "https://drive.google.com/file/d/1oUjnFYXOQAQSiSJPOFMM2gldM24IP56z/view?usp=drivesdk"
            },
            {
                "name": "Shop Staff",
                "name_variant": "Shop Staff",
                "subtitle": "The Garter Corporation, friend to every family's budget,",
                "line": 113,
                "start_time": "0-07-56.660000",
                "end_time": "0-07-59.790000",
                "url": "https://drive.google.com/file/d/1wVs6LZYhv6lsJd4y-s-69e-phfPM1jNX/view?usp=drivesdk"
            },
            {
                "name": "Shop Staff",
                "name_variant": "Shop Staff",
                "subtitle": "starts our big autumn sale right now!",
                "line": 114,
                "start_time": "0-07-59.790000",
                "end_time": "0-08-02.800000",
                "url": "https://drive.google.com/file/d/1EvpkF9zqLA6Af9muB6mst5w_2jWYgzN-/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Listen up!",
                "line": 115,
                "start_time": "0-08-03.460000",
                "end_time": "0-08-04.460000",
                "url": "https://drive.google.com/file/d/1dCOLJyBnMJ09bQIPLicjh0wwRMQGxPg3/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "The battle we're about to face is where blood is wiped away with more blood-",
                "line": 116,
                "start_time": "0-08-04.460000",
                "end_time": "0-08-06.840000",
                "url": "https://drive.google.com/file/d/1RucGbUqr8SkHP5E9bwD5LofAbYKzCHrm/view?usp=drivesdk"
            },
            {
                "name": "Customer",
                "name_variant": "Customer",
                "subtitle": "Outta my way!",
                "line": 117,
                "start_time": "0-08-06.840000",
                "end_time": "0-08-08.050000",
                "url": "https://drive.google.com/file/d/1ya_9DSMxEAUwRm0zURWrNVdiuhhKiYXd/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "Our target is 50% off-",
                "line": 118,
                "start_time": "0-08-08.050000",
                "end_time": "0-08-09.050000",
                "url": "https://drive.google.com/file/d/1Tp7oFp5ZtYRkE_HhJihdNizVgQCz6NtD/view?usp=drivesdk"
            },
            {
                "name": "Customer",
                "name_variant": "Customer",
                "subtitle": "Move it!",
                "line": 119,
                "start_time": "0-08-09.050000",
                "end_time": "0-08-10.470000",
                "url": "https://drive.google.com/file/d/1LSb1HHINXhhsKedkw9ifDujMZ8g8IvOI/view?usp=drivesdk"
            },
            {
                "name": "Shop Staff",
                "name_variant": "Shop Staff",
                "subtitle": "Step right up and have a look over here!",
                "line": 120,
                "start_time": "0-08-11.550000",
                "end_time": "0-08-13.640000",
                "url": "https://drive.google.com/file/d/17_y0vVo0ml08MhVseEQL0tZxngfcLmXp/view?usp=drivesdk"
            },
            {
                "name": "Shop Staff",
                "name_variant": "Shop Staff",
                "subtitle": "Garter's not the only one!",
                "line": 121,
                "start_time": "0-08-13.640000",
                "end_time": "0-08-15.100000",
                "url": "https://drive.google.com/file/d/1I-VjVvPdR2p1HBh3nihcqzR0ESo08_Wz/view?usp=drivesdk"
            },
            {
                "name": "Shop Staff",
                "name_variant": "Shop Staff",
                "subtitle": "Today we have bargain prices on everything in stock!",
                "line": 122,
                "start_time": "0-08-15.100000",
                "end_time": "0-08-16.980000",
                "url": "https://drive.google.com/file/d/1orBsz5kcZhLfbrmZEHlk6tZ51L3TC_Lw/view?usp=drivesdk"
            },
            {
                "name": "Shop Staff",
                "name_variant": "Shop Staff",
                "subtitle": "Check out the selection at local hidden gem, Highway Robert's!",
                "line": 123,
                "start_time": "0-08-16.980000",
                "end_time": "0-08-20.230000",
                "url": "https://drive.google.com/file/d/1VBXG6WzRXjgamneSkS9ahpkfpkbM7w40/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Major sales all across the shopping district.",
                "line": 124,
                "start_time": "0-08-21.060000",
                "end_time": "0-08-23.690000",
                "url": "https://drive.google.com/file/d/1UkeBKtGJTbguxO5BMJ721DrEhALZU0Q7/view?usp=drivesdk"
            },
            {
                "name": "Shop Staff",
                "name_variant": "Shop Staff",
                "subtitle": "We won't let Mitsugoshi get us down!",
                "line": 125,
                "start_time": "0-08-23.690000",
                "end_time": "0-08-25.820000",
                "url": "https://drive.google.com/file/d/1YZHB-n77fWVTGHjkDa9GS6eQT_Kiitaj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So basically, Alpha and the girls have gone too far.",
                "line": 126,
                "start_time": "0-08-26.490000",
                "end_time": "0-08-29.860000",
                "url": "https://drive.google.com/file/d/1lhuhDMueBFRNwDP4OeOW_f_G9OzF01Dk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "They're selling exclusive products you can only find at their company stores,",
                "line": 127,
                "start_time": "0-08-30.110000",
                "end_time": "0-08-32.620000",
                "url": "https://drive.google.com/file/d/1lBpwluUDiVxJEVs-r3Tode7S2C6uJ0Hb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "with no concern for local distributors.",
                "line": 128,
                "start_time": "0-08-32.620000",
                "end_time": "0-08-33.950000",
                "url": "https://drive.google.com/file/d/1la95MNAnS-0VD_p3W9Aj7FDRoOIpMtrZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And now, they've made enemies of the big corporations,",
                "line": 129,
                "start_time": "0-08-33.950000",
                "end_time": "0-08-35.790000",
                "url": "https://drive.google.com/file/d/1IcJMB5Lg3LaT80nyKFeEV1a8X62cd9-D/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "and even the downtown shopping district has it in for them.",
                "line": 130,
                "start_time": "0-08-35.790000",
                "end_time": "0-08-38.620000",
                "url": "https://drive.google.com/file/d/1dBfyu4SEqr2k6pyWOVc-SxMShBjZxZnL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Now that they've earned the loathing of the entire rest of the industry...",
                "line": 131,
                "start_time": "0-08-39.620000",
                "end_time": "0-08-42.330000",
                "url": "https://drive.google.com/file/d/1sc_6wsla2nojrBxywHw9ouPbpRlsIx6K/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yeah, Yukime was right.",
                "line": 132,
                "start_time": "0-08-42.330000",
                "end_time": "0-08-43.880000",
                "url": "https://drive.google.com/file/d/11Pc8LVRK1CEeQWOmhUlxWSxTWFilghUe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The future of Mitsugoshi is pretty much devoid of all hope.",
                "line": 133,
                "start_time": "0-08-43.880000",
                "end_time": "0-08-46.670000",
                "url": "https://drive.google.com/file/d/1hebHbKR9JPNUR-bQldhQLdvLLG96DIIw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I will destroy it all, then build it up again.",
                "line": 134,
                "start_time": "0-08-47.420000",
                "end_time": "0-08-49.970000",
                "url": "https://drive.google.com/file/d/1bEH7_bgUl8dhPHIcl9tJpjEG-DpYHqDy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "They will crush Mitsugoshi, and I will crush them.",
                "line": 135,
                "start_time": "0-08-50.760000",
                "end_time": "0-08-54.220000",
                "url": "https://drive.google.com/file/d/1M67YZla721cyK6LszfriK-azQLm3Y5Fv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I will use the massive amounts of capital that remain to move to a brand new market,",
                "line": 136,
                "start_time": "0-08-54.560000",
                "end_time": "0-08-58.020000",
                "url": "https://drive.google.com/file/d/1HO1Qw17fYpIDc1vWlUCcm_aRzzR6HiRC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "and start up a new corporation.",
                "line": 137,
                "start_time": "0-08-58.020000",
                "end_time": "0-09-00.060000",
                "url": "https://drive.google.com/file/d/1ICUrd-MnPhwWO8dFm--xilMcflzxC5EZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'll invite Alpha and the girls to come on as upper management,",
                "line": 138,
                "start_time": "0-09-00.560000",
                "end_time": "0-09-03.310000",
                "url": "https://drive.google.com/file/d/1q_NaoO3zdbn8ujnKWG0a6uV66jmYz4Uj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "then I'll just change the name, and Mitsugoshi will be reborn.",
                "line": 139,
                "start_time": "0-09-03.310000",
                "end_time": "0-09-07.320000",
                "url": "https://drive.google.com/file/d/1Y1UgGfUvbipofsoGp1rCSnIK1Y5qG3o5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Once it's all over, then they'll understand.",
                "line": 140,
                "start_time": "0-09-07.940000",
                "end_time": "0-09-11.200000",
                "url": "https://drive.google.com/file/d/1agFyOyYqoZlYNxiM8OhwrWLnApgkxfWt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "They'll know this was the best choice.",
                "line": 141,
                "start_time": "0-09-11.990000",
                "end_time": "0-09-14.280000",
                "url": "https://drive.google.com/file/d/1SXUEckdp3wxVAjGdyVx9xdClXewC-_6R/view?usp=drivesdk"
            },
            {
                "name": "Shop Staff",
                "name_variant": "Shop Staff",
                "subtitle": "That's out of five thousand zeni?",
                "line": 142,
                "start_time": "0-09-16.040000",
                "end_time": "0-09-18.410000",
                "url": "https://drive.google.com/file/d/1bHY3sV1F4yqvMTeeEKJF1oBSms2UT3zD/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "\"You break it you buy it\"?",
                "line": 143,
                "start_time": "0-09-18.410000",
                "end_time": "0-09-20.660000",
                "url": "https://drive.google.com/file/d/1-X1Fua5eJoHrYuIRUDxmRhJ6-0p-YdUD/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "This is why people like Mitsugoshi better.",
                "line": 144,
                "start_time": "0-09-20.660000",
                "end_time": "0-09-23.460000",
                "url": "https://drive.google.com/file/d/1Oo6iOIxXQQpzX0gGeygwuaEFSzTprO9L/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "What did you expect?",
                "line": 145,
                "start_time": "0-09-23.880000",
                "end_time": "0-09-25.250000",
                "url": "https://drive.google.com/file/d/1euqYZaTO04ZY_-g3fdGZ2OFAeLu0BrzD/view?usp=drivesdk"
            },
            {
                "name": "Shop Staff",
                "name_variant": "Shop Staff",
                "subtitle": "That's 1,750 zeni in change.",
                "line": 146,
                "start_time": "0-09-25.250000",
                "end_time": "0-09-27.960000",
                "url": "https://drive.google.com/file/d/1ZrS54GKUNvX3T1eIvGh7RbU8PT6mmKdz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Is it me, or does that bill look wrong?",
                "line": 147,
                "start_time": "0-09-29.340000",
                "end_time": "0-09-31.260000",
                "url": "https://drive.google.com/file/d/1jxzXqPqUNlf2fflMzBPtETjAxD4lDqOF/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Wrong? Wrong how?",
                "line": 148,
                "start_time": "0-09-31.260000",
                "end_time": "0-09-32.840000",
                "url": "https://drive.google.com/file/d/1BIhaFupIOpMrQTQqhm0NSXHqWdIAVXW3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I don't remember that being the design.",
                "line": 149,
                "start_time": "0-09-32.840000",
                "end_time": "0-09-34.850000",
                "url": "https://drive.google.com/file/d/1TJbRHynde4EPSU-ijaHLtYwaoK5fimeM/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "Oh, this is one of those, you know.",
                "line": 150,
                "start_time": "0-09-34.850000",
                "end_time": "0-09-37.010000",
                "url": "https://drive.google.com/file/d/1u-3q2HTTmEsWasopqEje7GgM_KYgfyQj/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "The new bills only just put out by the Major Corporate Alliance.",
                "line": 151,
                "start_time": "0-09-37.010000",
                "end_time": "0-09-40.310000",
                "url": "https://drive.google.com/file/d/1K94z7FzgIM6tlYde4LAGAvG8OYwuZ7j6/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "That's why everything's on sale today, remember? To commemorate the release of the new bill.",
                "line": 152,
                "start_time": "0-09-40.310000",
                "end_time": "0-09-43.980000",
                "url": "https://drive.google.com/file/d/1aZAe1YxVYyWuhe3pBLYcmXblFWDK7wde/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So what bills were we using before this?",
                "line": 153,
                "start_time": "0-09-44.480000",
                "end_time": "0-09-46.650000",
                "url": "https://drive.google.com/file/d/1Qy5LXAiivBW0-A707X2umnwUVslE-rTS/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "Here.",
                "line": 154,
                "start_time": "0-09-47.150000",
                "end_time": "0-09-48.400000",
                "url": "https://drive.google.com/file/d/1SZlrNnZXRQsMnUACDdeC9D6XQJGP6Zwo/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "From the Mitsugoshi Bank.",
                "line": 155,
                "start_time": "0-09-48.400000",
                "end_time": "0-09-50.150000",
                "url": "https://drive.google.com/file/d/144QcYK_nU1-wFNW6tJ4KZwKLSUoXjVRl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Mitsugoshi...",
                "line": 156,
                "start_time": "0-09-50.400000",
                "end_time": "0-09-51.610000",
                "url": "https://drive.google.com/file/d/1o48Hn2fcXacTJ55WLzEDyeyXNyo2GQS1/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Before, we could only use them at official Mitsugoshi storefronts.",
                "line": 157,
                "start_time": "0-09-52.150000",
                "end_time": "0-09-55.620000",
                "url": "https://drive.google.com/file/d/128PIyx_lOLtx30HBDMcEsqChK0UB5TFC/view?usp=drivesdk"
            },
            {
                "name": "Po",
                "name_variant": "Po",
                "subtitle": "But now we can use them all over the city.",
                "line": 158,
                "start_time": "0-09-55.620000",
                "end_time": "0-09-58.240000",
                "url": "https://drive.google.com/file/d/14vWtw-27NPovIQ1vQkBtG7etvC74jNWh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Those punks have their own bank now, too?",
                "line": 159,
                "start_time": "0-09-58.240000",
                "end_time": "0-10-02.040000",
                "url": "https://drive.google.com/file/d/1CiV8Vs1I8lO88stNjnT28Dt3D2-oPoT_/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "I tried to use one with a traveling merchant over summer break...",
                "line": 159,
                "start_time": "0-09-58.240000",
                "end_time": "0-10-02.040000",
                "url": "https://drive.google.com/file/d/1CiV8Vs1I8lO88stNjnT28Dt3D2-oPoT_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Now that I think of it,",
                "line": 160,
                "start_time": "0-10-03.500000",
                "end_time": "0-10-05",
                "url": "https://drive.google.com/file/d/12zWY8WolWrBbUPPHF32K6o4fvsAI-fWq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I do remember babbling",
                "line": 161,
                "start_time": "0-10-05",
                "end_time": "0-10-07.090000",
                "url": "https://drive.google.com/file/d/1JTz406iG6HMAVgTqZE-PFidzSuJnopVK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "some random facts I saw on an MHK documentary about banks and credit creation...",
                "line": 162,
                "start_time": "0-10-07.090000",
                "end_time": "0-10-11.670000",
                "url": "https://drive.google.com/file/d/1LiPAoR_OcpWqX1nTRBV4ihLCCMVCogzQ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "But even if there is polarity in the market...",
                "line": 163,
                "start_time": "0-10-12.050000",
                "end_time": "0-10-14.840000",
                "url": "https://drive.google.com/file/d/1RaNUnWVxwGcMYyjr1tB5618RM_e_iUKh/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "In that case, find a different provider for a different price.",
                "line": 164,
                "start_time": "0-10-14.840000",
                "end_time": "0-10-18.140000",
                "url": "https://drive.google.com/file/d/16Qp8utOrsb85fXHXuctqldb1Lk75IaNS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But my memories of it were so fuzzy,",
                "line": 165,
                "start_time": "0-10-18.140000",
                "end_time": "0-10-20.600000",
                "url": "https://drive.google.com/file/d/17v4UqIcSQDXujnALMw86PKkCI5R3ymTh/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "But liquidity is not a constant.",
                "line": 165,
                "start_time": "0-10-18.140000",
                "end_time": "0-10-20.600000",
                "url": "https://drive.google.com/file/d/17v4UqIcSQDXujnALMw86PKkCI5R3ymTh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "and I ended that conversation fast.",
                "line": 166,
                "start_time": "0-10-20.600000",
                "end_time": "0-10-22.770000",
                "url": "https://drive.google.com/file/d/1PAVWW9jjXnjnzc8N0mpS50dIZ7dHgnjg/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "It rises and falls dramatically.",
                "line": 166,
                "start_time": "0-10-20.600000",
                "end_time": "0-10-22.770000",
                "url": "https://drive.google.com/file/d/1PAVWW9jjXnjnzc8N0mpS50dIZ7dHgnjg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But those girls took that MHK information and ran with it.",
                "line": 167,
                "start_time": "0-10-22.980000",
                "end_time": "0-10-26.690000",
                "url": "https://drive.google.com/file/d/15gy6KLoNcad7bejZDkjROUMu59JLK_ec/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Not only did they establish their own bank, they even managed to issue their own paper currency.",
                "line": 168,
                "start_time": "0-10-26.690000",
                "end_time": "0-10-30.650000",
                "url": "https://drive.google.com/file/d/14bhWIl-27vqXdFCaEGseGJSSYRaNAlMs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And they've even inspired copies...",
                "line": 169,
                "start_time": "0-10-31.280000",
                "end_time": "0-10-33.030000",
                "url": "https://drive.google.com/file/d/1WmTqICUdWtBweC2gkyug5Dgb51YQOE-T/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "What do we do next?",
                "line": 169,
                "start_time": "0-10-31.280000",
                "end_time": "0-10-33.030000",
                "url": "https://drive.google.com/file/d/1WmTqICUdWtBweC2gkyug5Dgb51YQOE-T/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I mean, respectful homages.",
                "line": 170,
                "start_time": "0-10-33.030000",
                "end_time": "0-10-35.110000",
                "url": "https://drive.google.com/file/d/1cvSVug1akpO_bDfEQaqHW3GbIuzYneMb/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "How about karaoke or something?",
                "line": 170,
                "start_time": "0-10-33.030000",
                "end_time": "0-10-35.110000",
                "url": "https://drive.google.com/file/d/1cvSVug1akpO_bDfEQaqHW3GbIuzYneMb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Copies?",
                "line": 171,
                "start_time": "0-10-35.110000",
                "end_time": "0-10-36.320000",
                "url": "https://drive.google.com/file/d/148FL4Yo_BJxvAczPCQxCE0yptdj47-WB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The Mitsugoshi banknote uses multicolor printing",
                "line": 172,
                "start_time": "0-10-37.070000",
                "end_time": "0-10-39.160000",
                "url": "https://drive.google.com/file/d/1aYCvyjHedeIm8Q1DDVsyGT5sQ-3wkKWn/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "My beautiful voice will shine like a star!",
                "line": 172,
                "start_time": "0-10-37.070000",
                "end_time": "0-10-39.160000",
                "url": "https://drive.google.com/file/d/1aYCvyjHedeIm8Q1DDVsyGT5sQ-3wkKWn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "and a carefully placed watermark.",
                "line": 173,
                "start_time": "0-10-39.160000",
                "end_time": "0-10-41.580000",
                "url": "https://drive.google.com/file/d/1l0OW0MMznH5-IRBA5nHYk9nqj1B7OUaE/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "My beautiful voice will shine like a star!",
                "line": 173,
                "start_time": "0-10-39.160000",
                "end_time": "0-10-41.580000",
                "url": "https://drive.google.com/file/d/1l0OW0MMznH5-IRBA5nHYk9nqj1B7OUaE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But this copycat version",
                "line": 174,
                "start_time": "0-10-41.580000",
                "end_time": "0-10-42.910000",
                "url": "https://drive.google.com/file/d/1akkzduQqeylreoDiev03SUS1PR_ggDkk/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "My beautiful voice will shine like a star!",
                "line": 174,
                "start_time": "0-10-41.580000",
                "end_time": "0-10-42.910000",
                "url": "https://drive.google.com/file/d/1akkzduQqeylreoDiev03SUS1PR_ggDkk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "has cruder printing, and a simpler design...",
                "line": 175,
                "start_time": "0-10-42.910000",
                "end_time": "0-10-46.170000",
                "url": "https://drive.google.com/file/d/1QliMmUo7vgScN02v2STsz7KXfHDgjTsr/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "My beautiful voice will shine like a star!",
                "line": 175,
                "start_time": "0-10-42.910000",
                "end_time": "0-10-46.170000",
                "url": "https://drive.google.com/file/d/1QliMmUo7vgScN02v2STsz7KXfHDgjTsr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That means...",
                "line": 176,
                "start_time": "0-10-46.170000",
                "end_time": "0-10-47.250000",
                "url": "https://drive.google.com/file/d/1NKVO_Moqo7JaaoR5fvwoXlptegFHjLpO/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Let's go.",
                "line": 177,
                "start_time": "0-10-47.250000",
                "end_time": "0-10-48.250000",
                "url": "https://drive.google.com/file/d/1-FfoAGHQ_soOnR39cBc0OBuvj6rSh6Kx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "When I was a child, I had a dream.",
                "line": 178,
                "start_time": "0-10-49",
                "end_time": "0-10-51.670000",
                "url": "https://drive.google.com/file/d/10mhoJL4PtUD6Zdr3YJjSUb20VAcKTc_3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I had a one thousand yen bill left from my New Year's money, and I thought...",
                "line": 179,
                "start_time": "0-10-53.220000",
                "end_time": "0-10-56.720000",
                "url": "https://drive.google.com/file/d/1F8iQ-XDkwFTrdm_azOboWb8lJVNLzn_W/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Maybe I could make more of them with the copy machine at the corner store.",
                "line": 180,
                "start_time": "0-10-56.720000",
                "end_time": "0-11-00.180000",
                "url": "https://drive.google.com/file/d/1kkVtwYht3cQ_dcshC1uexzooIzWENDKO/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "The what now?",
                "line": 181,
                "start_time": "0-11-00.640000",
                "end_time": "0-11-01.850000",
                "url": "https://drive.google.com/file/d/12UYvlkw6ZbJ-4D3s0kWgwTIWa2g7UdMP/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "Who cares? Give me my money back.",
                "line": 182,
                "start_time": "0-11-01.850000",
                "end_time": "0-11-04.270000",
                "url": "https://drive.google.com/file/d/1OL5DAPB2e9SDYaXDo-A2St-09OJGEK66/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I gave up on the idea after the old man at the counter yelled his head off at me.",
                "line": 183,
                "start_time": "0-11-04.770000",
                "end_time": "0-11-09.480000",
                "url": "https://drive.google.com/file/d/1-X__pzaZvz4It7KMupBEL8Y8VCO00iZc/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "What is this about?",
                "line": 184,
                "start_time": "0-11-09.480000",
                "end_time": "0-11-10.690000",
                "url": "https://drive.google.com/file/d/1YJuTxTFtDhxmaT1MyrtFNrcpVdMzKQAb/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "Cid, my money.",
                "line": 185,
                "start_time": "0-11-10.690000",
                "end_time": "0-11-12.150000",
                "url": "https://drive.google.com/file/d/166Rg1VabNL7VZSUi2FX9_lAJQUZE7JSZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But now, I am a super elite secret agent.",
                "line": 186,
                "start_time": "0-11-12.860000",
                "end_time": "0-11-17.070000",
                "url": "https://drive.google.com/file/d/1dG6_R_JBXZh9fFA0qxja87YhXiro8nN8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And dreams can come true!",
                "line": 187,
                "start_time": "0-11-17.320000",
                "end_time": "0-11-19.330000",
                "url": "https://drive.google.com/file/d/1LPoJ-YvoizK70gSDVof5h5V3Rb2MtQ3M/view?usp=drivesdk"
            },
            {
                "name": "Skel",
                "name_variant": "Skel & Po (Skel)",
                "subtitle": "Cid!",
                "line": 188,
                "start_time": "0-11-19.330000",
                "end_time": "0-11-20.990000",
                "url": "https://drive.google.com/file/d/1HpltoOst5x0afNnG2OXX_3uDVgOknLJE/view?usp=drivesdk"
            },
            {
                "name": "Po",
                "name_variant": "Skel & Po (Po)",
                "subtitle": "Cid!",
                "line": 188,
                "start_time": "0-11-19.330000",
                "end_time": "0-11-20.990000",
                "url": "https://drive.google.com/file/d/1HpltoOst5x0afNnG2OXX_3uDVgOknLJE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Come on, brain! Remember!",
                "line": 189,
                "start_time": "0-11-20.990000",
                "end_time": "0-11-23.250000",
                "url": "https://drive.google.com/file/d/1WqXJETPapX8hiQRendLe9qEqAO5tK9-2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm counting on you, MHK!",
                "line": 190,
                "start_time": "0-11-23.250000",
                "end_time": "0-11-25.410000",
                "url": "https://drive.google.com/file/d/18yXBoVqOyatj5UUpdrcwTy-gR62rIKkZ/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Cid!",
                "line": 191,
                "start_time": "0-11-25.410000",
                "end_time": "0-11-26.670000",
                "url": "https://drive.google.com/file/d/1d5N5G1JIz0kw8KQS4_gr8xDP0Xq5wNd9/view?usp=drivesdk"
            },
            {
                "name": "Po Tato",
                "name_variant": "Po Tato",
                "subtitle": "Cid, my money!",
                "line": 192,
                "start_time": "0-11-26.670000",
                "end_time": "0-11-28.830000",
                "url": "https://drive.google.com/file/d/1G2_3rJoo_r_hTt2BkzxEzAwD5Nfi9t_j/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "This single gold coin multiplies into several times what it was.",
                "line": 193,
                "start_time": "0-11-34.470000",
                "end_time": "0-11-37.800000",
                "url": "https://drive.google.com/file/d/1C2jEII8z2hE-pmRdYBw9tJjBETOZh9Fm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "But what we find there is the fleeting illusion we call \"credit.\"",
                "line": 194,
                "start_time": "0-11-38.260000",
                "end_time": "0-11-42.810000",
                "url": "https://drive.google.com/file/d/1W0Sm8WdKRyl2mRD2fgNsIAqFPjjjXrPp/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Are you, perchance, talking about paper money?",
                "line": 195,
                "start_time": "0-11-45.770000",
                "end_time": "0-11-49.100000",
                "url": "https://drive.google.com/file/d/1HTuisSNz4SpmfTBMlkJ27PYUVoYkLf3z/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "These scraps of paper, considered by the masses to be no different than currency,",
                "line": 196,
                "start_time": "0-11-49.100000",
                "end_time": "0-11-52.400000",
                "url": "https://drive.google.com/file/d/1QPVomDx-7BDNCvNKsxXGZBXhMB0zibdF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "are, more precisely, not currency at all.",
                "line": 197,
                "start_time": "0-11-52.400000",
                "end_time": "0-11-54.070000",
                "url": "https://drive.google.com/file/d/1zkDif4ONFqQizfBJDFU4MJOYfoHXRJSa/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "In reality, they are no more than claim checks for coins that have been left in the care of the bank.",
                "line": 198,
                "start_time": "0-11-54.070000",
                "end_time": "0-11-57.950000",
                "url": "https://drive.google.com/file/d/1Jb3ssRHCCGdq5D3TlmpMeEDzMllF9L0s/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Let's say, for example, you have put ten thousand zeni in the bank.",
                "line": 199,
                "start_time": "0-11-58.320000",
                "end_time": "0-12-01.240000",
                "url": "https://drive.google.com/file/d/1P6W-nLIxLU_4qzwdND9OWLja4fRXhs9S/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "In exchange, you are given a banknote for ten thousand zeni,",
                "line": 200,
                "start_time": "0-12-01.240000",
                "end_time": "0-12-03.740000",
                "url": "https://drive.google.com/file/d/1-n1nDJJGoCu9vu9ULJeo3N4ZUk4LvCyz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "which you can use to purchase goods and services.",
                "line": 201,
                "start_time": "0-12-03.740000",
                "end_time": "0-12-06.290000",
                "url": "https://drive.google.com/file/d/13XhdJ8VIIyOV5Kk7x-FHTbMu24d9U6fk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "But this is where something strange occurs.",
                "line": 202,
                "start_time": "0-12-06.830000",
                "end_time": "0-12-10.170000",
                "url": "https://drive.google.com/file/d/1T6eA8XzGoECEe67K3HE_s425uE6Wxp3j/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "You have ten thousand zeni in the bank, and ten thousand zeni in a banknote.",
                "line": 203,
                "start_time": "0-12-11",
                "end_time": "0-12-14.630000",
                "url": "https://drive.google.com/file/d/1ZxJGc-lExhcSTRTx5348L4yz0S1ljMm_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "At some point, your zeni has doubled to twenty thousand.",
                "line": 204,
                "start_time": "0-12-14.630000",
                "end_time": "0-12-17.550000",
                "url": "https://drive.google.com/file/d/17WH61iA5G60nM8mSHqwmOzSlfVQ5xzJs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "If the ten thousand zeni in the bank remains dormant in its vault, there is no problem.",
                "line": 205,
                "start_time": "0-12-18.590000",
                "end_time": "0-12-22.600000",
                "url": "https://drive.google.com/file/d/1euOxvsVvAA3yCeC98-eMItv9ermZmiMW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Because even if the money had, in fact, doubled,",
                "line": 206,
                "start_time": "0-12-23.350000",
                "end_time": "0-12-26.310000",
                "url": "https://drive.google.com/file/d/1t4G-oXDjfXieKWET4wq8DQv7bAVlHLTz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "as long as only the original ten thousand zeni circulates through the market,",
                "line": 207,
                "start_time": "0-12-26.310000",
                "end_time": "0-12-29.230000",
                "url": "https://drive.google.com/file/d/1jhVjj4U6aP3Kp1MSs9-bd9oG8q3kMXh8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "there is no contradiction.",
                "line": 208,
                "start_time": "0-12-29.230000",
                "end_time": "0-12-30.940000",
                "url": "https://drive.google.com/file/d/1iQYojw7Cgf-3ZYd_GNeUZNEaGNMLxHg-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "But the bank has used the ten thousand zeni deposited there",
                "line": 209,
                "start_time": "0-12-31.690000",
                "end_time": "0-12-34.730000",
                "url": "https://drive.google.com/file/d/1Sd1G2lnmyy20Brg-D-5ZISKAhd1n4Q9k/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "as collateral to lend out even more money.",
                "line": 210,
                "start_time": "0-12-34.730000",
                "end_time": "0-12-36.990000",
                "url": "https://drive.google.com/file/d/1QgjBFvORfsL3jXIQhu7zK_Bi3MNnOfdH/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "The prosperous economy of the capital stemmed from the business developments of Mitsugoshi itself.",
                "line": 211,
                "start_time": "0-12-36.990000",
                "end_time": "0-12-41.780000",
                "url": "https://drive.google.com/file/d/1NPo5vvDGEIA6aD3S1y7cVAgD7H982ctV/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Seeing a good opportunity, the merchants wished to borrow some capital,",
                "line": 212,
                "start_time": "0-12-41.780000",
                "end_time": "0-12-45.540000",
                "url": "https://drive.google.com/file/d/1QDrT2irzHCew_QllGsk8BdjnqzLkKobo/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "and the bank met the demand by supplying paper money.",
                "line": 213,
                "start_time": "0-12-45.540000",
                "end_time": "0-12-49.290000",
                "url": "https://drive.google.com/file/d/1NuOIRC7aoviYiJM6C_6PEZIWJIOs3v_-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "No one wants to walk around with heavy coins in their wallets.",
                "line": 214,
                "start_time": "0-12-49.790000",
                "end_time": "0-12-52.840000",
                "url": "https://drive.google.com/file/d/1nxBGeIW19j47DEN5h2LiA9XRSXty2x2K/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Use of paper money spread like wildfire, further obscuring the currency's true value.",
                "line": 215,
                "start_time": "0-12-52.840000",
                "end_time": "0-12-57.380000",
                "url": "https://drive.google.com/file/d/1V1f9wC34lbm4HYOVY73sTRN4iIH0Kgtq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "The ten thousand zeni in the vault, multiplied to several times what it was,",
                "line": 216,
                "start_time": "0-12-57.670000",
                "end_time": "0-13-00.550000",
                "url": "https://drive.google.com/file/d/1lNNtQyP16QsPmgO1yUWsJ_ioDCr-x6dW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "circulated throughout the capital.",
                "line": 217,
                "start_time": "0-13-00.550000",
                "end_time": "0-13-02.090000",
                "url": "https://drive.google.com/file/d/1ypgy55C4lBXcoAN-FT8461Q4XCJ8c9t0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "And Mitsugoshi gained exponential profits by reaping the rewards of the interest.",
                "line": 218,
                "start_time": "0-13-02.090000",
                "end_time": "0-13-06.100000",
                "url": "https://drive.google.com/file/d/1gkHEWjc4AYHbeEdwi-VI0cwUSZwuAThw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "This is the true value of credit creation.",
                "line": 219,
                "start_time": "0-13-06.850000",
                "end_time": "0-13-09.480000",
                "url": "https://drive.google.com/file/d/1f5_cx8s3B5gIvy3u7-EUa63q2UzldF05/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "\"Credit creation\"...",
                "line": 220,
                "start_time": "0-13-09.480000",
                "end_time": "0-13-11.560000",
                "url": "https://drive.google.com/file/d/1JtFTP7pbbz9KMRQBZ1sQ8BGqREgvGnc9/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "What a fitting expression.",
                "line": 221,
                "start_time": "0-13-11.560000",
                "end_time": "0-13-13.480000",
                "url": "https://drive.google.com/file/d/15rkEwrZXZxiGF1lDONiLLvqOiC-oxm1i/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Through these means,",
                "line": 222,
                "start_time": "0-13-13.730000",
                "end_time": "0-13-16.190000",
                "url": "https://drive.google.com/file/d/1A0_rqI_xkgv5JrnT7jgbQxylIW5vMN1e/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "a scrap of paper not even worth a copper coin is given more value than gold.",
                "line": 223,
                "start_time": "0-13-16.190000",
                "end_time": "0-13-19.780000",
                "url": "https://drive.google.com/file/d/1BfJs8jZh_GHbrzJAKlZMCsyijOckcfwO/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "The leader of Mitsugoshi Bank must be an extraordinary con artist.",
                "line": 224,
                "start_time": "0-13-19.780000",
                "end_time": "0-13-23.240000",
                "url": "https://drive.google.com/file/d/1xVPTKP6D1EWno0KrcrdNAc1P_uqc4qVW/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "What might this person be like, I wonder?",
                "line": 225,
                "start_time": "0-13-23.740000",
                "end_time": "0-13-25.660000",
                "url": "https://drive.google.com/file/d/1BtI5kqLLWMHsQXQDjyIaRAltZEBCi7DF/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "If I ever have the chance, I would love to have a chat with this individual.",
                "line": 226,
                "start_time": "0-13-25.660000",
                "end_time": "0-13-28.580000",
                "url": "https://drive.google.com/file/d/1jdOf4K0UmtTQBvPV3uGBTHV2YPy2VpUp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "But is a piece of paper truly worth the credit people give it?",
                "line": 227,
                "start_time": "0-13-29.710000",
                "end_time": "0-13-34.500000",
                "url": "https://drive.google.com/file/d/1b9nzft0t197icl-Ks3z0J-GKPSbqX7Pc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Compare the two. Do you notice anything?",
                "line": 228,
                "start_time": "0-13-37.840000",
                "end_time": "0-13-39.800000",
                "url": "https://drive.google.com/file/d/11b5jMZidfOp-UlNSk0sgYYTvxDUbDKgE/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "You mean the presence of a watermark in one but not the other?",
                "line": 229,
                "start_time": "0-13-40.840000",
                "end_time": "0-13-43.640000",
                "url": "https://drive.google.com/file/d/1QY6nOGPec3aVjwcrU-3cThadwY0h9gyF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "And, I might add, the Major Corporate Alliance bill has a rougher design.",
                "line": 230,
                "start_time": "0-13-43.640000",
                "end_time": "0-13-47.640000",
                "url": "https://drive.google.com/file/d/1YVRNAQGezHQ2tqmyryWIW7EkYl4nVOIh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Rougher printing, rougher edges...",
                "line": 231,
                "start_time": "0-13-47.640000",
                "end_time": "0-13-50.180000",
                "url": "https://drive.google.com/file/d/1uAcEPdw-tWGiBNMBg421WgIn61dN4hic/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Do you know what this means?",
                "line": 232,
                "start_time": "0-13-50.180000",
                "end_time": "0-13-52.270000",
                "url": "https://drive.google.com/file/d/1TuuZP0QS29hkea2H14SNSFBEK7IXaBa4/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "It would be easy to fake?",
                "line": 233,
                "start_time": "0-13-54.270000",
                "end_time": "0-13-56.400000",
                "url": "https://drive.google.com/file/d/1Ieav2r5stInwmjc5_tcrn_oEBNmNoZFd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "We create fake money.",
                "line": 234,
                "start_time": "0-13-58.190000",
                "end_time": "0-13-59.940000",
                "url": "https://drive.google.com/file/d/12T46cIJzUZSYwZZnt7zh336rPPOIq445/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "And we'll make a fortune in counterfeit bills!",
                "line": 235,
                "start_time": "0-13-59.940000",
                "end_time": "0-14-02.450000",
                "url": "https://drive.google.com/file/d/1QQPheZVjowz86SFubQ1lwmklxSej1b-P/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Excuse me, Mr. Smith.",
                "line": 236,
                "start_time": "0-14-06.530000",
                "end_time": "0-14-08.240000",
                "url": "https://drive.google.com/file/d/1Mq40TFJd0RCh2FZ2AkP8YNMB5xaGJV6f/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "As you are no doubt aware,",
                "line": 237,
                "start_time": "0-14-09.080000",
                "end_time": "0-14-11.120000",
                "url": "https://drive.google.com/file/d/1L3pGh0MVUFr9xOVqC4zv0Io8VrnJjJil/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "the Major Corporate Alliance bills are still only in circulation in the Royal Capital.",
                "line": 238,
                "start_time": "0-14-11.120000",
                "end_time": "0-14-15.250000",
                "url": "https://drive.google.com/file/d/1-mnlQHrRGQjZ1rRpm4CVz2QEvkxht4Ld/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "If we forged them, the authorities would immediately trace them to the source.",
                "line": 239,
                "start_time": "0-14-15.920000",
                "end_time": "0-14-19.130000",
                "url": "https://drive.google.com/file/d/1PkKL_O7cOZQzj9KhdwUy3ddZ-3wlQtrg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Huh?!",
                "line": 240,
                "start_time": "0-14-19.630000",
                "end_time": "0-14-20.630000",
                "url": "https://drive.google.com/file/d/1UGggw47ONyDRsF_vgDjRzNiM6LL06nS_/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "If done on a small scale, I'm sure it could be accomplished without discovery.",
                "line": 241,
                "start_time": "0-14-20.880000",
                "end_time": "0-14-24.180000",
                "url": "https://drive.google.com/file/d/1XxY_iEmEOejOeOYYPLqG6HLN1GTUF-9i/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "But the amount we would earn would be hardly more than a child's allowance.",
                "line": 242,
                "start_time": "0-14-24.180000",
                "end_time": "0-14-27.010000",
                "url": "https://drive.google.com/file/d/1XuSw8vFGzBMSqHf4GBChK6K1k8St5Yvs/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "How do you propose we-",
                "line": 243,
                "start_time": "0-14-27.260000",
                "end_time": "0-14-29.260000",
                "url": "https://drive.google.com/file/d/1CvLPM5_N5bbdk7_11ei15dekueQrvvhh/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Mr-",
                "line": 244,
                "start_time": "0-14-33.730000",
                "end_time": "0-14-34.940000",
                "url": "https://drive.google.com/file/d/1CLKpPw-raUrpsFEt7j0U48M0iPqvNfAo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Is that really...",
                "line": 245,
                "start_time": "0-14-34.940000",
                "end_time": "0-14-36.270000",
                "url": "https://drive.google.com/file/d/1sUzmCRSlTiH5emqW1bfp3QlWJY0GH8ad/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Is that really what you think?",
                "line": 246,
                "start_time": "0-14-36.940000",
                "end_time": "0-14-38.940000",
                "url": "https://drive.google.com/file/d/1VMv_EWcRP1ZAUSJohwwbHw9cPD9iChDT/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "This is the true value of credit creation.",
                "line": 247,
                "start_time": "0-14-41.150000",
                "end_time": "0-14-43.650000",
                "url": "https://drive.google.com/file/d/1ctw73lIAuSgxR1J0j5rStdrS7rM1zsHb/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "You can't mean...",
                "line": 248,
                "start_time": "0-14-45.280000",
                "end_time": "0-14-46.490000",
                "url": "https://drive.google.com/file/d/15PpSKBKppay-nlhYJidMD8dBDuS8Z7oX/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "If we did make and circulate a large quantity of counterfeit bills in a short period of time,",
                "line": 249,
                "start_time": "0-14-47.280000",
                "end_time": "0-14-51.580000",
                "url": "https://drive.google.com/file/d/1SY-wtD6Do7hmDR97eYDdpdfNlCOhVnGw/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "naturally we would be discovered.",
                "line": 250,
                "start_time": "0-14-51.580000",
                "end_time": "0-14-53.290000",
                "url": "https://drive.google.com/file/d/1BUjAXJ2OgLz1MUiVfnt4cnDhLWFlDgwq/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "And rumors of the bills would reach the ears of the general public almost immediately.",
                "line": 251,
                "start_time": "0-14-53.290000",
                "end_time": "0-14-57.670000",
                "url": "https://drive.google.com/file/d/1ZFjZFUO3NGPRvQK-PgHIW6qf9yZP0qgr/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "At that point, the citizens would harbor doubts about the contents of their own wallets.",
                "line": 252,
                "start_time": "0-14-57.960000",
                "end_time": "0-15-02.380000",
                "url": "https://drive.google.com/file/d/1l-3iSm7KKnfdY42T1rvK-kF7peravhTq/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "The credit given to that paper would be lost!",
                "line": 253,
                "start_time": "0-15-02.760000",
                "end_time": "0-15-05.760000",
                "url": "https://drive.google.com/file/d/17WawGaW7JKfHkBXczAidJn5W7wWE-Zav/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Huh?!",
                "line": 254,
                "start_time": "0-15-05.760000",
                "end_time": "0-15-06.760000",
                "url": "https://drive.google.com/file/d/1U0Q5LFsM8MvZPIQ6SqEKaRnb2DS3oonh/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "The discovery of the counterfeiting was already integrated into the plan-",
                "line": 255,
                "start_time": "0-15-06.760000",
                "end_time": "0-15-09.350000",
                "url": "https://drive.google.com/file/d/1ZBImV9VAEpl66twPaE0s1M3O_-VUf2vb/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "No, the discovery was the plan!",
                "line": 256,
                "start_time": "0-15-09.350000",
                "end_time": "0-15-11.600000",
                "url": "https://drive.google.com/file/d/1IjGzHM_VdTZ3VBtjdUM_bkMGW4o_01T_/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "When the people start to doubt the value of the paper,",
                "line": 257,
                "start_time": "0-15-11.600000",
                "end_time": "0-15-13.890000",
                "url": "https://drive.google.com/file/d/1Iv03HmeIAvGz2d97Xgd0nhlPZdTtGOz0/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "they'll make a run on the bank to exchange it for gold!",
                "line": 258,
                "start_time": "0-15-13.890000",
                "end_time": "0-15-16.770000",
                "url": "https://drive.google.com/file/d/1oO-uxDx5GBk8H4ch3WNHDsde91E_SDhz/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "If we're one step ahead of the game, we can monopolize the profits!",
                "line": 259,
                "start_time": "0-15-16.770000",
                "end_time": "0-15-20.770000",
                "url": "https://drive.google.com/file/d/1HXHnmd9DAKCptS6yDTRZT9Fp_DK0_HPq/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "That's what you've been planning all along!",
                "line": 260,
                "start_time": "0-15-20.770000",
                "end_time": "0-15-22.690000",
                "url": "https://drive.google.com/file/d/1AQL-ICKSraFExaDUrcJF3v81nCBXHRCE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Is that really...",
                "line": 261,
                "start_time": "0-15-28.570000",
                "end_time": "0-15-29.780000",
                "url": "https://drive.google.com/file/d/1zqPjT9NouD0MAV9zQcERLClMFFV5EWwR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "...what you think?",
                "line": 262,
                "start_time": "0-15-30.700000",
                "end_time": "0-15-32.540000",
                "url": "https://drive.google.com/file/d/1JqLmVhoAzce9LIjqqZjlIzfCybucdtHc/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Yes.",
                "line": 263,
                "start_time": "0-15-41.210000",
                "end_time": "0-15-42.420000",
                "url": "https://drive.google.com/file/d/1gOssFS6ohQU_a-WUUTj-Er9XlE7a2-Po/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "It is what I think.",
                "line": 264,
                "start_time": "0-15-42.420000",
                "end_time": "0-15-43.840000",
                "url": "https://drive.google.com/file/d/1rybnaRS3MS1kaxRdNj9yX18CHdfU8qpk/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "This plan is utterly flawless.",
                "line": 265,
                "start_time": "0-15-45.510000",
                "end_time": "0-15-49.470000",
                "url": "https://drive.google.com/file/d/1_0wakS8q19yLsubWqe_cOwWEtZxvMKWN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "That is exactly right.",
                "line": 266,
                "start_time": "0-15-59.770000",
                "end_time": "0-16-01.610000",
                "url": "https://drive.google.com/file/d/14_HPLLDyrt7wE9I78iZcaU1lRIWN8m11/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "In the end, he was testing my sincerity.",
                "line": 267,
                "start_time": "0-16-10.120000",
                "end_time": "0-16-12.660000",
                "url": "https://drive.google.com/file/d/1kGEIimlgHBGaMqo2_B5lhMgm_GNMf9JH/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "If I had given in to the pressure and rattled off some thoughtless babblings, then I...",
                "line": 268,
                "start_time": "0-16-13.370000",
                "end_time": "0-16-17.960000",
                "url": "https://drive.google.com/file/d/1GcuN2ylyrkUMKsNSAJ12r-CeWXve9BWq/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "John Smith, the man formerly known as Shadow...",
                "line": 269,
                "start_time": "0-16-20.210000",
                "end_time": "0-16-24.590000",
                "url": "https://drive.google.com/file/d/1uhEUVuOiK46ZVHVbZdbNgraZ9efWmT2g/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The mysterious man secretly scheming while Mitsugoshi and the Major Corporate Alliance battle it out,",
                "line": 270,
                "start_time": "0-16-38.940000",
                "end_time": "0-16-42.980000",
                "url": "https://drive.google.com/file/d/10H9vpPQEkqbltaVnvg68t1-yUzhBoHtM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "John Smith.",
                "line": 271,
                "start_time": "0-16-42.980000",
                "end_time": "0-16-44.190000",
                "url": "https://drive.google.com/file/d/1nYq77ejj9OYS8Na52Hgb6Ofd6vyDS6Ut/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "He hides his identity, and carries out his mission alone.",
                "line": 272,
                "start_time": "0-16-44.440000",
                "end_time": "0-16-47.740000",
                "url": "https://drive.google.com/file/d/1CO6gmdPLXkldNsOyFaKZuQECNYLwGR49/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I am the man who betrays his organization in order to save it, the Super Elite Secret Agent.",
                "line": 273,
                "start_time": "0-16-47.990000",
                "end_time": "0-16-52.870000",
                "url": "https://drive.google.com/file/d/1y696EG1t6VYCMd62nNR3qxiiCdHER8Ky/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "What could be cooler than that?",
                "line": 274,
                "start_time": "0-16-53.450000",
                "end_time": "0-16-55.410000",
                "url": "https://drive.google.com/file/d/14LBBG6N-azJscvOlA9ruUM4FBZEdxEaz/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Gimme more, Boss!",
                "line": 275,
                "start_time": "0-16-55.990000",
                "end_time": "0-16-57.410000",
                "url": "https://drive.google.com/file/d/1dBps-25mk96TC_Q0JBhYDTjrPBKeRYt1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "What does she think she's doing?",
                "line": 276,
                "start_time": "0-17-00.460000",
                "end_time": "0-17-02.210000",
                "url": "https://drive.google.com/file/d/1Qb5YKPrro5eKlnlgXDDaTyLTybI_x33e/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Gimme more, Boss!",
                "line": 277,
                "start_time": "0-17-02.580000",
                "end_time": "0-17-04.090000",
                "url": "https://drive.google.com/file/d/1_6O_qAOziu3qaVR9CRFls7eNJMkAT2H6/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Gimme more!",
                "line": 278,
                "start_time": "0-17-04.090000",
                "end_time": "0-17-05.300000",
                "url": "https://drive.google.com/file/d/1Q34cF9FOaIRAuvp-Av-01PVUR4Mm3q6G/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "You smell like foxes.",
                "line": 279,
                "start_time": "0-17-14.390000",
                "end_time": "0-17-15.760000",
                "url": "https://drive.google.com/file/d/1NqwPa_Vjtx6h5-guHxXr8qTYmQAkjISn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yeah, I was hanging out with-",
                "line": 280,
                "start_time": "0-17-15.760000",
                "end_time": "0-17-17.600000",
                "url": "https://drive.google.com/file/d/1_3ReD-12Fwb8Lf9k39P2Rd8YNMIn5-Mk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I was hunting foxes.",
                "line": 281,
                "start_time": "0-17-17.600000",
                "end_time": "0-17-19.100000",
                "url": "https://drive.google.com/file/d/1ESsjEcPWN0a3sS2wr6K2fjEdt1qohASz/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hunting?!",
                "line": 282,
                "start_time": "0-17-19.100000",
                "end_time": "0-17-20.440000",
                "url": "https://drive.google.com/file/d/1T9KjivaSFEI3KcwQEg-2hngW_fHVzPRI/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Delta wants to hunt!",
                "line": 283,
                "start_time": "0-17-20.440000",
                "end_time": "0-17-21.600000",
                "url": "https://drive.google.com/file/d/1BLX1zs3I-zoPJRzXMIdWX9BZi1oNdtoE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Sorry, the fox is already hunted.",
                "line": 284,
                "start_time": "0-17-21.600000",
                "end_time": "0-17-24.060000",
                "url": "https://drive.google.com/file/d/1s4JHr8TZjz_8TyZ2hiSLZpaGusR440YM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And would you get off of me already?",
                "line": 285,
                "start_time": "0-17-24.400000",
                "end_time": "0-17-26.280000",
                "url": "https://drive.google.com/file/d/17XfyaZMiprzaL9LT1c5h5lHOI9V9x-aZ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "No!",
                "line": 286,
                "start_time": "0-17-26.280000",
                "end_time": "0-17-27.030000",
                "url": "https://drive.google.com/file/d/12gYIcY6_2ztJgFkTL1WmchCch3vHvG8t/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "What are you doing in the capital any-",
                "line": 287,
                "start_time": "0-17-27.030000",
                "end_time": "0-17-28.990000",
                "url": "https://drive.google.com/file/d/10ocB2EBij-MLUqjvPFNzF9AR8-N6S4P9/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Delta woke up early this morning, ate lots and lots of meat,",
                "line": 288,
                "start_time": "0-17-30.400000",
                "end_time": "0-17-33.990000",
                "url": "https://drive.google.com/file/d/1fzH0Q99P1aE2mGMH9o2uC8wFMGodHe0P/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "and came to the capital for the first time in forever!",
                "line": 289,
                "start_time": "0-17-33.990000",
                "end_time": "0-17-35.830000",
                "url": "https://drive.google.com/file/d/1UcFWf1l2ZXz43stHQngv28LmEsYFwYZo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So why did you come to the capital?",
                "line": 290,
                "start_time": "0-17-35.830000",
                "end_time": "0-17-37.540000",
                "url": "https://drive.google.com/file/d/1mWIyzBfmaAfOJuoknzp6wrxxGRrjUDnY/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Delta was hunting!",
                "line": 291,
                "start_time": "0-17-37.540000",
                "end_time": "0-17-39.500000",
                "url": "https://drive.google.com/file/d/17oxDiYHjsYBgckChhaA5QcP3ulMRf2_m/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And why were you hunting?",
                "line": 292,
                "start_time": "0-17-39.500000",
                "end_time": "0-17-41.120000",
                "url": "https://drive.google.com/file/d/1LeSZYzPMMwTSjz5ZQRUZmH5aHiRdrw3S/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Delta did so much hunting! Wanna hunt with me, Boss?",
                "line": 293,
                "start_time": "0-17-41.120000",
                "end_time": "0-17-44.500000",
                "url": "https://drive.google.com/file/d/1gmnKWIG4n-wc_IuzksYV5SmWgC5zuOjI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Why were you hunting?",
                "line": 294,
                "start_time": "0-17-44.500000",
                "end_time": "0-17-46.090000",
                "url": "https://drive.google.com/file/d/1Oe3vBgXNDbF85kp3SRKD9NyrLRloxQwa/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Lady Alpha told me to! Wanna hunt with me, Boss?",
                "line": 295,
                "start_time": "0-17-46.090000",
                "end_time": "0-17-49.170000",
                "url": "https://drive.google.com/file/d/1LeQnv_pwJrv9Gq8Zts87Gyru3gxGK-L8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So Alpha told you to do it.",
                "line": 296,
                "start_time": "0-17-49.760000",
                "end_time": "0-17-51.260000",
                "url": "https://drive.google.com/file/d/17Jlu20MU22Q8XsXiEIV-uiKzqR8LNRNg/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Uh-huh! Wanna hunt with me, Boss?",
                "line": 297,
                "start_time": "0-17-51.260000",
                "end_time": "0-17-53.430000",
                "url": "https://drive.google.com/file/d/1HFVqm4ZfwqV_RdWYlNgVrhRTTPvccrmh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "What have you been hunting?",
                "line": 298,
                "start_time": "0-17-53.430000",
                "end_time": "0-17-55.260000",
                "url": "https://drive.google.com/file/d/1qjvkRZTSnFXlL-QjLeZwv5Y8qtMlU0IK/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Bandits! You like hunting bandits, too, Boss!",
                "line": 299,
                "start_time": "0-17-55.260000",
                "end_time": "0-17-57.970000",
                "url": "https://drive.google.com/file/d/1ABXsXE-0OIjiP3SOl5G_08HEcXDw93C3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yeah, I do like hunting bandits, too.",
                "line": 300,
                "start_time": "0-17-57.970000",
                "end_time": "0-18-01.270000",
                "url": "https://drive.google.com/file/d/10sVcXU18lw8Q9hw-hyLgCnZp3zsi7t_9/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hunt with me!",
                "line": 301,
                "start_time": "0-18-01.270000",
                "end_time": "0-18-02.480000",
                "url": "https://drive.google.com/file/d/1VNOkyaVU2DN9R_A3PLuug5Vw8H_q1BL4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I don't think I can right now.",
                "line": 302,
                "start_time": "0-18-02.480000",
                "end_time": "0-18-04.230000",
                "url": "https://drive.google.com/file/d/1D_3pwV5k452uSYhveHzl1NWs9bJ6ecxq/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "No, hunt with me!",
                "line": 303,
                "start_time": "0-18-04.310000",
                "end_time": "0-18-05.690000",
                "url": "https://drive.google.com/file/d/1XxvCw7AQLQx8_6YtB50TKrTqwumVQ4D2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Hold your horses.",
                "line": 304,
                "start_time": "0-18-05.690000",
                "end_time": "0-18-06.900000",
                "url": "https://drive.google.com/file/d/1AR8wEO90cI24NsB3udZr8nTBfjhWath9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Didn't you come to the capital for a specific reason?",
                "line": 305,
                "start_time": "0-18-06.900000",
                "end_time": "0-18-09.940000",
                "url": "https://drive.google.com/file/d/1GbgvjXxPSjpnYItukHz7e1RkRNsIM0uY/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Specific reason?",
                "line": 306,
                "start_time": "0-18-10.360000",
                "end_time": "0-18-11.570000",
                "url": "https://drive.google.com/file/d/165iE8oP0ruLbzudLHN-LJ59lenDPwmlv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Didn't Alpha want to see you?",
                "line": 307,
                "start_time": "0-18-11.570000",
                "end_time": "0-18-13.530000",
                "url": "https://drive.google.com/file/d/1r-fmLq3CeO1J9mLo0MJLh_EcAm477viE/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Lady Alpha!",
                "line": 308,
                "start_time": "0-18-14.950000",
                "end_time": "0-18-16.160000",
                "url": "https://drive.google.com/file/d/1B5fvDjtmRfnYJVWY04LqUOowKWZSgXfU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Did you forget?",
                "line": 309,
                "start_time": "0-18-16.160000",
                "end_time": "0-18-17.200000",
                "url": "https://drive.google.com/file/d/1HCeeK9g2yeEnn23NiBKeoymMM8AK6zja/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Yeah, I forgot.",
                "line": 310,
                "start_time": "0-18-17.200000",
                "end_time": "0-18-18.410000",
                "url": "https://drive.google.com/file/d/1ieac9xxDjXOgp7RstaJsR9Hvi_Z9T4yj/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "She's gonna be so mad at me!",
                "line": 311,
                "start_time": "0-18-18.950000",
                "end_time": "0-18-20.450000",
                "url": "https://drive.google.com/file/d/1BT6Z7VCJGZTdJoCp0R2bsgxfGA-JYPVv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You'd better hurry and see her.",
                "line": 312,
                "start_time": "0-18-20.910000",
                "end_time": "0-18-22.330000",
                "url": "https://drive.google.com/file/d/1KNihToMzwSR-k4j2IVycVrMvvYQc6wbc/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "But our bandit hunt...",
                "line": 313,
                "start_time": "0-18-23.460000",
                "end_time": "0-18-25.420000",
                "url": "https://drive.google.com/file/d/1ABiMblqSClpGgSd9LDkBHhPqNf9JIp7F/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Looking at Delta reminds me of John, the pet I had in my past life.",
                "line": 314,
                "start_time": "0-18-27.710000",
                "end_time": "0-18-32.920000",
                "url": "https://drive.google.com/file/d/18S0jIWIHX43lmzuR2cb0Zi-XkkPlLyML/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Another failure?",
                "line": 315,
                "start_time": "0-18-34.550000",
                "end_time": "0-18-36.430000",
                "url": "https://drive.google.com/file/d/1wUvB15SbcD14tkHjathOlKAEaUtnYkXK/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "Yes, um, their private soldiers are more powerful than we anticipated.",
                "line": 316,
                "start_time": "0-18-36.510000",
                "end_time": "0-18-40.600000",
                "url": "https://drive.google.com/file/d/143q-WlibzL35n0p7HIio-JXEVHsBoBGQ/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "So the would-be bandits are useless.",
                "line": 317,
                "start_time": "0-18-40.600000",
                "end_time": "0-18-43.810000",
                "url": "https://drive.google.com/file/d/120PpEVGe1l07V6frOnk-cAeRQfIlfdP_/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "In that case, I'll send the Clovers after them.",
                "line": 318,
                "start_time": "0-18-43.810000",
                "end_time": "0-18-46.060000",
                "url": "https://drive.google.com/file/d/1KX26VuJIHylwQavZd9YS0VH6mCniH76P/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "The Clovers?",
                "line": 319,
                "start_time": "0-18-46.060000",
                "end_time": "0-18-47.480000",
                "url": "https://drive.google.com/file/d/1wFsDZ-RN-ie9zNKH-CKiW1FRWhF4oRfb/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "The elite assassins you hand-picked yourself, Mr. Gettan?",
                "line": 320,
                "start_time": "0-18-47.810000",
                "end_time": "0-18-50.980000",
                "url": "https://drive.google.com/file/d/1KWVoQCsEurTh7MTYiXvJlP6o-iOHRueM/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "With them on the job, Mitsugoshi's secrets are as good as ours!",
                "line": 321,
                "start_time": "0-18-50.980000",
                "end_time": "0-18-54.820000",
                "url": "https://drive.google.com/file/d/1LYxCYWgHQm-Cu7XpkXOVkAjnBhrSXCzX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Delta is fundamentally incapable of following the command, \"stay.\"",
                "line": 322,
                "start_time": "0-19-07.130000",
                "end_time": "0-19-09.710000",
                "url": "https://drive.google.com/file/d/1vfbbNGrxQF7Md1mebAfNwhLt18PmKP3C/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Her brand of hunting is a one-sided massacre.",
                "line": 323,
                "start_time": "0-19-09.710000",
                "end_time": "0-19-12.630000",
                "url": "https://drive.google.com/file/d/1D5KGdbgZQRO-Al-oAd05eLR40njw7kEC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "It makes gathering treasure easier, but...",
                "line": 324,
                "start_time": "0-19-12.630000",
                "end_time": "0-19-14.970000",
                "url": "https://drive.google.com/file/d/1ctTLHfZA1zO7JptD0N_LY90MX59zmwwL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I miss out on the element of enjoying the battle.",
                "line": 325,
                "start_time": "0-19-15.680000",
                "end_time": "0-19-18.260000",
                "url": "https://drive.google.com/file/d/1nNoNUkXtVFs_GDuO1itynjMH5Aw2g4Kr/view?usp=drivesdk"
            },
            {
                "name": "Zabra",
                "name_variant": "Zabra",
                "subtitle": "Stop! Wait a minute!",
                "line": 326,
                "start_time": "0-19-18.640000",
                "end_time": "0-19-20.260000",
                "url": "https://drive.google.com/file/d/14gdndaUpd8tjBLhQJ6Aqri76eLnx57Zg/view?usp=drivesdk"
            },
            {
                "name": "Zabra",
                "name_variant": "Zabra",
                "subtitle": "You're Sara, aren't you? It's me!",
                "line": 327,
                "start_time": "0-19-21.260000",
                "end_time": "0-19-23.310000",
                "url": "https://drive.google.com/file/d/1AAFnT-dsBp7xrJHcYqzBPqv15_tRkULF/view?usp=drivesdk"
            },
            {
                "name": "Zabra",
                "name_variant": "Zabra",
                "subtitle": "You know? Me! Me!",
                "line": 328,
                "start_time": "0-19-23.310000",
                "end_time": "0-19-24.980000",
                "url": "https://drive.google.com/file/d/1wpMegDhYsWhwuiGyEZtsdB-79Iq-egid/view?usp=drivesdk"
            },
            {
                "name": "Zabra",
                "name_variant": "Zabra",
                "subtitle": "It's me, Zabra!",
                "line": 329,
                "start_time": "0-19-24.980000",
                "end_time": "0-19-26.730000",
                "url": "https://drive.google.com/file/d/1oDgCaUAYsjd3l82RR9vSBh1PKXHyq364/view?usp=drivesdk"
            },
            {
                "name": "Zabra",
                "name_variant": "Zabra",
                "subtitle": "You remember, don't you, Sara?",
                "line": 330,
                "start_time": "0-19-26.730000",
                "end_time": "0-19-28.310000",
                "url": "https://drive.google.com/file/d/1zcQX7XUhEUC8eh2YHGCPhToyLPrekJ7M/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "You smell like my dad.",
                "line": 331,
                "start_time": "0-19-30.980000",
                "end_time": "0-19-32.570000",
                "url": "https://drive.google.com/file/d/1nfRGxKbtaINZwsOKBc6hHrIKE4_WJm5k/view?usp=drivesdk"
            },
            {
                "name": "Zabra",
                "name_variant": "Zabra",
                "subtitle": "That's right.",
                "line": 332,
                "start_time": "0-19-32.570000",
                "end_time": "0-19-33.900000",
                "url": "https://drive.google.com/file/d/1QvFHKSzY0LGFQCfLZiFGzY5qqyhr-d9U/view?usp=drivesdk"
            },
            {
                "name": "Zabra",
                "name_variant": "Zabra",
                "subtitle": "I'm your big brother, Zabra.",
                "line": 333,
                "start_time": "0-19-33.900000",
                "end_time": "0-19-35.780000",
                "url": "https://drive.google.com/file/d/1xAhkxwfnCtn8Ah6RqyXFXQuRCm2fXtxF/view?usp=drivesdk"
            },
            {
                "name": "Zabra",
                "name_variant": "Zabra",
                "subtitle": "But how are you even alive?",
                "line": 334,
                "start_time": "0-19-36.280000",
                "end_time": "0-19-38.700000",
                "url": "https://drive.google.com/file/d/11K9w-n_NYEGJewzWNTT7YtBBvjIEVdX5/view?usp=drivesdk"
            },
            {
                "name": "Zabra",
                "name_variant": "Zabra",
                "subtitle": "I heard you got possessed and Dad hunted you.",
                "line": 335,
                "start_time": "0-19-38.700000",
                "end_time": "0-19-41.330000",
                "url": "https://drive.google.com/file/d/1IJxUSXVb3aap6826cs0fopoWTBLasMey/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Delta is the best at hide-and-seek.",
                "line": 336,
                "start_time": "0-19-41.870000",
                "end_time": "0-19-44.410000",
                "url": "https://drive.google.com/file/d/1z5ObWLkH-subFNAB5F7rWSGZtEoWsyIT/view?usp=drivesdk"
            },
            {
                "name": "Zabra",
                "name_variant": "Zabra",
                "subtitle": "Delta? Is that what you call yourself now?",
                "line": 337,
                "start_time": "0-19-44.620000",
                "end_time": "0-19-47.750000",
                "url": "https://drive.google.com/file/d/1dNdhAXGnlUPwp7HDhAPAW7LkUMunSuCi/view?usp=drivesdk"
            },
            {
                "name": "Zabra",
                "name_variant": "Zabra",
                "subtitle": "Anyway, Sara, you can just let me go, right?",
                "line": 338,
                "start_time": "0-19-48.330000",
                "end_time": "0-19-50.460000",
                "url": "https://drive.google.com/file/d/1IGKWpjW70Gxh4U0U71B53KnGUOzrd0Zx/view?usp=drivesdk"
            },
            {
                "name": "Zabra",
                "name_variant": "Zabra",
                "subtitle": "I'm working for the great Gettan now.",
                "line": 339,
                "start_time": "0-19-50.460000",
                "end_time": "0-19-52.840000",
                "url": "https://drive.google.com/file/d/19GYiiqVcTi6ZgvYODsFOGS8t0iSQMn6S/view?usp=drivesdk"
            },
            {
                "name": "Zabra",
                "name_variant": "Zabra",
                "subtitle": "You know him right? The legendary-",
                "line": 340,
                "start_time": "0-19-52.840000",
                "end_time": "0-19-54.670000",
                "url": "https://drive.google.com/file/d/1ROD6sgVvwGenT6qC-JSTxesUK_UXjdWV/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I don't want a weak brother.",
                "line": 341,
                "start_time": "0-19-56.010000",
                "end_time": "0-19-57.930000",
                "url": "https://drive.google.com/file/d/1tAGkP8EVuvK0mzG_FAZcz_tzTkiSj20T/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Did you really want to do that? He was your brother.",
                "line": 342,
                "start_time": "0-19-58.300000",
                "end_time": "0-20-00.930000",
                "url": "https://drive.google.com/file/d/11Hl7nMmPM-L1Gxdb0yU_uWGwJAk_Ed1u/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Weaklings bring shame to the family.",
                "line": 343,
                "start_time": "0-20-01.720000",
                "end_time": "0-20-04.310000",
                "url": "https://drive.google.com/file/d/1r1ENYMSVGL2JhvS-gmbGdPAF9ykLhE99/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Oh, okay.",
                "line": 344,
                "start_time": "0-20-04.310000",
                "end_time": "0-20-05.560000",
                "url": "https://drive.google.com/file/d/1O1Su1ZCkbbLR6Ypn_MyQ7TVTDAtCgb94/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Delta's dad is the chief of our clan!",
                "line": 345,
                "start_time": "0-20-05.560000",
                "end_time": "0-20-08.020000",
                "url": "https://drive.google.com/file/d/1zS02cP5UyYMWUj1BYbE9Y6Wuh3XdUYz8/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "He has lots of lovers, and over a thousand children!",
                "line": 346,
                "start_time": "0-20-08.020000",
                "end_time": "0-20-11.310000",
                "url": "https://drive.google.com/file/d/1_AR6GOBY2YLwwOZp5ORSbLrVNUzq-hf7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Then I guess one less won't hurt him.",
                "line": 347,
                "start_time": "0-20-12.480000",
                "end_time": "0-20-14.150000",
                "url": "https://drive.google.com/file/d/1DkpGBoXDiRWM_lp8eNfiMQrSt3Psc1lU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "The weak die.",
                "line": 348,
                "start_time": "0-20-14.150000",
                "end_time": "0-20-15.740000",
                "url": "https://drive.google.com/file/d/1C_g51Z8g5z39t6-E-fDf21jDso6xOeQo/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "If there aren't enough, we make more.",
                "line": 349,
                "start_time": "0-20-15.740000",
                "end_time": "0-20-17.150000",
                "url": "https://drive.google.com/file/d/1cGwr6GBH1zOP8mbUgkpy0QFeqwP1_OP4/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "That's the law of the clan!",
                "line": 350,
                "start_time": "0-20-17.150000",
                "end_time": "0-20-18.660000",
                "url": "https://drive.google.com/file/d/1zP5j1CLAw13HnziZ68WKmUa6BQZXLxDE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "That's a therianthrope for you. They do things on a different scale.",
                "line": 351,
                "start_time": "0-20-18.910000",
                "end_time": "0-20-21.580000",
                "url": "https://drive.google.com/file/d/1auT3YxPxujFz39XbEXs9K7iNl_--SDn0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "You do find the occasional intelligent therianthrope,",
                "line": 352,
                "start_time": "0-20-21.580000",
                "end_time": "0-20-24.490000",
                "url": "https://drive.google.com/file/d/1oWBTRrsEdnwSsfm7KirfTI1lsgftWi05/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "but there's a reason most people assume they're a bunch of \"might makes right\" types.",
                "line": 353,
                "start_time": "0-20-24.490000",
                "end_time": "0-20-28.460000",
                "url": "https://drive.google.com/file/d/1t9j3OttW5N597vH6jBF0mAd1gPy-3pCP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Maybe I should go visit the therianthrope lands sometime.",
                "line": 354,
                "start_time": "0-20-28.830000",
                "end_time": "0-20-32",
                "url": "https://drive.google.com/file/d/1wcl1mWiJLNbW2YAXXbWV_mIi3eJcEo6j/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I just had a great idea!",
                "line": 355,
                "start_time": "0-20-33",
                "end_time": "0-20-34.670000",
                "url": "https://drive.google.com/file/d/1VP2X_jzWfeonQaNhV7HgKZF6k4fVqTPQ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "You can be our chief, Boss!",
                "line": 356,
                "start_time": "0-20-34.670000",
                "end_time": "0-20-36.340000",
                "url": "https://drive.google.com/file/d/1swcQGd8vIedBtGqrVz_LS-s7BafQi0EY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "What?",
                "line": 357,
                "start_time": "0-20-36.340000",
                "end_time": "0-20-37.550000",
                "url": "https://drive.google.com/file/d/1GgAZjtUpQA8Xy3WzPc7qUvj1G9zjSGCc/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "If you beat my dad, you'll be the chief!",
                "line": 358,
                "start_time": "0-20-37.550000",
                "end_time": "0-20-39.550000",
                "url": "https://drive.google.com/file/d/1ihbkBYS-udCP5TViAJuR2rLh6MYBJbvn/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Then you can have lots of babies, and we'll be the strongest clan ever!",
                "line": 359,
                "start_time": "0-20-39.550000",
                "end_time": "0-20-42.600000",
                "url": "https://drive.google.com/file/d/1gkZ6IKhnBgquWha9S-HdAW2T0KIZ0IOw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Not happening.",
                "line": 360,
                "start_time": "0-20-42.600000",
                "end_time": "0-20-43.810000",
                "url": "https://drive.google.com/file/d/1Q7lqNlv6VB2wlvjTdQzeueJhqLD2ctGO/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Yes, happening! I'll get a hundred women for you!",
                "line": 361,
                "start_time": "0-20-43.810000",
                "end_time": "0-20-46.390000",
                "url": "https://drive.google.com/file/d/1beOaDaEPF7ZFu0W7eYwQJw6ys3iV8Sdy/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "And Delta will have a hundred babies!",
                "line": 362,
                "start_time": "0-20-46.390000",
                "end_time": "0-20-48.060000",
                "url": "https://drive.google.com/file/d/1wP6wRFakA8r1w-7x94uKrATVJ1bqsWoP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "No way, not a chance.",
                "line": 363,
                "start_time": "0-20-48.060000",
                "end_time": "0-20-49.520000",
                "url": "https://drive.google.com/file/d/1IfSGG1Kh6qcVmjBWqzLmcbTgyN6-Yy0y/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "This hunt is over. We're going home.",
                "line": 364,
                "start_time": "0-20-49.520000",
                "end_time": "0-20-51.610000",
                "url": "https://drive.google.com/file/d/10W7b6KKEGybUKeFoh57SPLd4iOqCchVu/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Zabra has been defeated, you say?",
                "line": 365,
                "start_time": "0-20-54.860000",
                "end_time": "0-20-56.690000",
                "url": "https://drive.google.com/file/d/16jsujat3ixcCBfXboMHNV1grzo5XOP6i/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "Yes, sir.",
                "line": 366,
                "start_time": "0-20-56.690000",
                "end_time": "0-20-57.740000",
                "url": "https://drive.google.com/file/d/1hPJc8M4VK9B9oT2rvFVIHN8l0hIEu5dP/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "One of our underground hideouts was attacked, and we found his body inside.",
                "line": 367,
                "start_time": "0-20-57.740000",
                "end_time": "0-21-02.070000",
                "url": "https://drive.google.com/file/d/1zUt34vdMW2IGebr0n7Qy9Xx1sdVMVHh4/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "And, um, Mr. Gettan, in these last few months,",
                "line": 368,
                "start_time": "0-21-02.320000",
                "end_time": "0-21-06.040000",
                "url": "https://drive.google.com/file/d/1f8AahZPsJnorWwFK47X27m5bLLEJYVGb/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "our numbers have been reduced to practically nothing.",
                "line": 369,
                "start_time": "0-21-06.040000",
                "end_time": "0-21-09.040000",
                "url": "https://drive.google.com/file/d/1UU645sNqDuJwvMIetLyVmMfQYXU6mXRB/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "If this keeps up, it will affect the personnel we have running our public enterprises.",
                "line": 370,
                "start_time": "0-21-09.040000",
                "end_time": "0-21-12.750000",
                "url": "https://drive.google.com/file/d/1T9vWgJniwnNOYJZ4_rLlGbbqTtjNt0gW/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "We invested a fair amount of capital in establishing our bank.",
                "line": 371,
                "start_time": "0-21-13.380000",
                "end_time": "0-21-17.010000",
                "url": "https://drive.google.com/file/d/1yT0XX55GT2hcyBRYYj82VtdmIrauELsh/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "And the amount of money that went to bribing the legislators to let us print our money",
                "line": 372,
                "start_time": "0-21-17.010000",
                "end_time": "0-21-20.010000",
                "url": "https://drive.google.com/file/d/1EuorywyrFKuQFo6_ASeoTsX3mPCgDttI/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "is nothing to be sneezed at.",
                "line": 373,
                "start_time": "0-21-20.010000",
                "end_time": "0-21-21.970000",
                "url": "https://drive.google.com/file/d/1szZYV3iPuw0p5IwauwSZUTSNK7fIjgSk/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "What do you say to stepping back and reevaluating...",
                "line": 374,
                "start_time": "0-21-21.970000",
                "end_time": "0-21-25.260000",
                "url": "https://drive.google.com/file/d/1F7Fbzoz2Ytd4mD-iCajufrzDcKBndfIs/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Garter...",
                "line": 375,
                "start_time": "0-21-25.260000",
                "end_time": "0-21-26.430000",
                "url": "https://drive.google.com/file/d/13Lu5Zty5rh6qdvYh7v-E1jFlbfhDGBoE/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "You are in a position to control all commerce in the city.",
                "line": 376,
                "start_time": "0-21-27.310000",
                "end_time": "0-21-30.190000",
                "url": "https://drive.google.com/file/d/1o7VhuTey7IE6B8k-LdcKM1siafE-8GBI/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Surely you have not forgotten who it was that put you in that position?",
                "line": 377,
                "start_time": "0-21-30.940000",
                "end_time": "0-21-34.900000",
                "url": "https://drive.google.com/file/d/1RlmRXgnHy1l1AO-0cIUrWhzH-OU5jiQU/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "N-no, sir! No, of course I haven't!",
                "line": 378,
                "start_time": "0-21-34.900000",
                "end_time": "0-21-37.610000",
                "url": "https://drive.google.com/file/d/1Yf8eD8WjOnCZ9h5qHKTqECUVDxjUihae/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "All you need to do is follow orders...",
                "line": 379,
                "start_time": "0-21-37.610000",
                "end_time": "0-21-40.400000",
                "url": "https://drive.google.com/file/d/19am5BTK6xjJHMgaSgJsQ1q2-NYieTyXz/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "My orders.",
                "line": 380,
                "start_time": "0-21-41.030000",
                "end_time": "0-21-42.450000",
                "url": "https://drive.google.com/file/d/1BZmM7SiyH8u80IvN-CUXLFO5mQSKIZUa/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "At any rate, Zabra was the weakest of the Clovers.",
                "line": 381,
                "start_time": "0-21-44.660000",
                "end_time": "0-21-47.910000",
                "url": "https://drive.google.com/file/d/1Pmrmt0wI9Z6AMXht8uTPSpzldOlp5ttd/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Summon the three that are left.",
                "line": 382,
                "start_time": "0-21-48.500000",
                "end_time": "0-21-50.580000",
                "url": "https://drive.google.com/file/d/1GA9DG6ncCgCqjL3rzVrK74CkCyNY2GYI/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Strengthen our offense against Mitsugoshi, and take all of their trade secrets.",
                "line": 383,
                "start_time": "0-21-51.080000",
                "end_time": "0-21-54.920000",
                "url": "https://drive.google.com/file/d/1g2lmPBpIy4XHR7C1Ha7bbRZxWXG-_-zC/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "Y-yes, sir!",
                "line": 384,
                "start_time": "0-21-54.920000",
                "end_time": "0-21-56.290000",
                "url": "https://drive.google.com/file/d/1M-MgVp7G5RfKZqSvtiRKEWHNhbP7JyNn/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Mitsugoshi is tougher than I thought.",
                "line": 385,
                "start_time": "0-21-59.630000",
                "end_time": "0-22-02.680000",
                "url": "https://drive.google.com/file/d/1BEGmxbzUF5p5X_kOrUBcYzJ0CqsIxbUC/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Now I see why the Cult labeled them as a threat.",
                "line": 386,
                "start_time": "0-22-03.260000",
                "end_time": "0-22-06.180000",
                "url": "https://drive.google.com/file/d/1k7b3WVs7VVobjllH3mVsEMnxCXBczdIk/view?usp=drivesdk"
            }
        ]
    }
}
let setDoc = db.collection('data').doc('an_s2_e5').set(data['s2']);

//let setDoc = db.collection('data').doc('ssc_p2_c2-5').set(data['p2']['c2-5']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

//let setDoc = db.collection('data').doc('ln_v5').set(data['v5']);

// let setDoc = db.collection('data').doc('an_s101').set(data['kj1']);
setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
