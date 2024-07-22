const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "s1": {
        "e17": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Mundane Mann",
                "subtitle": "There's something I think you should know.",
                "line": 1,
                "start_time": "0-00-11.040000",
                "end_time": "0-00-13",
                "url": "https://drive.google.com/file/d/1ZSSFujKsEK9dFkugPIjm9M8KEqZ-u_Tk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Mundane Mann",
                "subtitle": "I've only shown you 22 milliwatts of my power...",
                "line": 2,
                "start_time": "0-00-13.500000",
                "end_time": "0-00-16.500000",
                "url": "https://drive.google.com/file/d/1blqIOrEwJrxIa3yFFeaB0SvH9nYT3FDr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Mundane Mann",
                "subtitle": "No, 32.45 grams?",
                "line": 3,
                "start_time": "0-00-16.960000",
                "end_time": "0-00-19.080000",
                "url": "https://drive.google.com/file/d/1ooUHled8ykmNquXfKyMV1OxlgkVrpbB7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Mundane Mann",
                "subtitle": "Three yards, eight pounds...",
                "line": 4,
                "start_time": "0-00-19.580000",
                "end_time": "0-00-21.750000",
                "url": "https://drive.google.com/file/d/1dmvdOnaNlg4H2ZFLfN5UPaLGofHeZAHR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Mundane Mann",
                "subtitle": "Knots? Gauss? Candelae?",
                "line": 5,
                "start_time": "0-00-22.290000",
                "end_time": "0-00-25.630000",
                "url": "https://drive.google.com/file/d/1H8zPpKsQOl1Tpzx5sRmfin36J6WJXvVC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Mundane Mann",
                "subtitle": "Newtons...",
                "line": 6,
                "start_time": "0-00-25.960000",
                "end_time": "0-00-27.170000",
                "url": "https://drive.google.com/file/d/1uPzA7cLEuACdVQwe2D1DbTc8ek-bWF0h/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It's hopeless!",
                "line": 7,
                "start_time": "0-00-29.130000",
                "end_time": "0-00-30.330000",
                "url": "https://drive.google.com/file/d/1CSkKxflRvUcV3xGvWGZ9An5lCimBgawu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm getting so hung up on the right units of measure that I'm starting to confuse myself.",
                "line": 8,
                "start_time": "0-00-30.630000",
                "end_time": "0-00-33.500000",
                "url": "https://drive.google.com/file/d/1onIDqD9ColMWcGZJWoOSy12XBZc3531k/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I need to hone the image in my mind better.",
                "line": 9,
                "start_time": "0-00-33.500000",
                "end_time": "0-00-36.130000",
                "url": "https://drive.google.com/file/d/17QpCADeKEha8FM3ysdBXvMOdqHiIdT3Y/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Hey, Cid!",
                "line": 10,
                "start_time": "0-00-37.290000",
                "end_time": "0-00-38.500000",
                "url": "https://drive.google.com/file/d/14Cm8WPTDcMV4u5e6B8ArcB2TgwjLDiUT/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "I have an offer you can't refuse! Open up!",
                "line": 11,
                "start_time": "0-00-38.500000",
                "end_time": "0-00-40.420000",
                "url": "https://drive.google.com/file/d/1rBNR35NwlynoufzCKJDj7k1AUevcVqaE/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Hey, Cid! Open up!",
                "line": 12,
                "start_time": "0-00-40.420000",
                "end_time": "0-00-41.040000",
                "url": "https://drive.google.com/file/d/1-_R89aJHCz6rE90j7dYgYcGse-jyhcsS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "As long as people interact with one another,",
                "line": 13,
                "start_time": "0-00-41.040000",
                "end_time": "0-00-42.380000",
                "url": "https://drive.google.com/file/d/1aPyr_yFfYICPcwhrcHNd6Jf9kRnGUTAh/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Hey, Cid! Open up!",
                "line": 13,
                "start_time": "0-00-41.040000",
                "end_time": "0-00-42.380000",
                "url": "https://drive.google.com/file/d/1aPyr_yFfYICPcwhrcHNd6Jf9kRnGUTAh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "As long as people interact with one another,",
                "line": 14,
                "start_time": "0-00-42.380000",
                "end_time": "0-00-42.830000",
                "url": "https://drive.google.com/file/d/1ua8OvSvOnEl2M9xIbJH6NVIj3aHqMwfj/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Come on, open up!",
                "line": 14,
                "start_time": "0-00-42.380000",
                "end_time": "0-00-42.830000",
                "url": "https://drive.google.com/file/d/1ua8OvSvOnEl2M9xIbJH6NVIj3aHqMwfj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "that interaction will breed annoyance.",
                "line": 15,
                "start_time": "0-00-42.830000",
                "end_time": "0-00-45",
                "url": "https://drive.google.com/file/d/1H1VlKmtX7fJh5DWQSDjsaMiSeiB9R6d3/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Come on, open up!",
                "line": 15,
                "start_time": "0-00-42.830000",
                "end_time": "0-00-45",
                "url": "https://drive.google.com/file/d/1H1VlKmtX7fJh5DWQSDjsaMiSeiB9R6d3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Why do people continue to seek the company of others",
                "line": 16,
                "start_time": "0-00-45",
                "end_time": "0-00-46.540000",
                "url": "https://drive.google.com/file/d/1e-pCA8HtL46vbgpY71F9ElmaID444ZXC/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Do you hear me?",
                "line": 16,
                "start_time": "0-00-45",
                "end_time": "0-00-46.540000",
                "url": "https://drive.google.com/file/d/1e-pCA8HtL46vbgpY71F9ElmaID444ZXC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Why do people continue to seek the company of others",
                "line": 17,
                "start_time": "0-00-46.540000",
                "end_time": "0-00-47.420000",
                "url": "https://drive.google.com/file/d/1pwWBCry4eCnoqejB_oT8zlEqF996Uo2M/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Hey! Come on!",
                "line": 17,
                "start_time": "0-00-46.540000",
                "end_time": "0-00-47.420000",
                "url": "https://drive.google.com/file/d/1pwWBCry4eCnoqejB_oT8zlEqF996Uo2M/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "when they know it will be so annoying?",
                "line": 18,
                "start_time": "0-00-47.420000",
                "end_time": "0-00-48.540000",
                "url": "https://drive.google.com/file/d/1ZqBrMKa41FbFbYTGwgN8K11YIT9cHu83/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Hey! Come on!",
                "line": 18,
                "start_time": "0-00-47.420000",
                "end_time": "0-00-48.540000",
                "url": "https://drive.google.com/file/d/1ZqBrMKa41FbFbYTGwgN8K11YIT9cHu83/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "when they know it will be so annoying?",
                "line": 19,
                "start_time": "0-00-48.540000",
                "end_time": "0-00-49.380000",
                "url": "https://drive.google.com/file/d/1atUt8soAq63cPV5mpEG0GCnYHpDq8Wer/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Hey!",
                "line": 19,
                "start_time": "0-00-48.540000",
                "end_time": "0-00-49.380000",
                "url": "https://drive.google.com/file/d/1atUt8soAq63cPV5mpEG0GCnYHpDq8Wer/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Hey, hey!",
                "line": 20,
                "start_time": "0-00-49.500000",
                "end_time": "0-00-51",
                "url": "https://drive.google.com/file/d/1LSXIkyfGfy-ndpgXpnBgRhs4nNNAbAS0/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "We're gonna strike it rich!",
                "line": 21,
                "start_time": "0-00-51",
                "end_time": "0-00-52.580000",
                "url": "https://drive.google.com/file/d/1DAdMx0S6x0GuFXVtTzJ_I8oGP25k4w0l/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Look! Student Council President Rose is a wanted criminal!",
                "line": 22,
                "start_time": "0-00-52.580000",
                "end_time": "0-00-55.250000",
                "url": "https://drive.google.com/file/d/1wU0ZM09-5QZzvflWBLvwfERFTeuA--8g/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "We get 10 million zeni if we bring her in alive!",
                "line": 23,
                "start_time": "0-00-57.380000",
                "end_time": "0-00-59.380000",
                "url": "https://drive.google.com/file/d/1gsHQMMup14qby-3LNa31nlwm1-Aa2oBT/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "500 thousand if we can give them any useful information!",
                "line": 24,
                "start_time": "0-00-59.380000",
                "end_time": "0-01-01.880000",
                "url": "https://drive.google.com/file/d/17ZV2DDx0GOpMHtgUsyjAh2xpIVwe38P_/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Let's go catch her!",
                "line": 25,
                "start_time": "0-01-02.210000",
                "end_time": "0-01-03.880000",
                "url": "https://drive.google.com/file/d/1nOyM-DN4u8iAXcCKo8YtECXc4ZQ8xlLN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Why?",
                "line": 26,
                "start_time": "0-01-03.880000",
                "end_time": "0-01-05.080000",
                "url": "https://drive.google.com/file/d/16tAmnk7h-9rlLZ8PvixUQ5wsk9jpXAo5/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Because I'm broke!",
                "line": 27,
                "start_time": "0-01-05.580000",
                "end_time": "0-01-06.960000",
                "url": "https://drive.google.com/file/d/1Tk9wexra4L09noQLPqrt5Y7YKL-RTN13/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I thought you were gonna make a killing on a bet you couldn't lose.",
                "line": 28,
                "start_time": "0-01-08.130000",
                "end_time": "0-01-11.080000",
                "url": "https://drive.google.com/file/d/1ZxhDIPefwKgcCJsb1HR7t_axTwVmwf5N/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Shut up! Just shut up!",
                "line": 29,
                "start_time": "0-01-11.080000",
                "end_time": "0-01-12.670000",
                "url": "https://drive.google.com/file/d/1bqHiykSpck_pp7hhGAVx8lzPUloFpRRz/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "I'm broke, so I'm not going to go into all the reasons.",
                "line": 30,
                "start_time": "0-01-12.670000",
                "end_time": "0-01-15.380000",
                "url": "https://drive.google.com/file/d/1BN8V6-7VwSR_8wFXePdVwJ15WoEWuQWU/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "But the point is, I have no money!",
                "line": 31,
                "start_time": "0-01-15.380000",
                "end_time": "0-01-17.420000",
                "url": "https://drive.google.com/file/d/1L-Tsmo-RS9jDhx6d1Gzl9v6aSKn6LCJX/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Ergo, for no reason in particular, I need money!",
                "line": 32,
                "start_time": "0-01-17.420000",
                "end_time": "0-01-20.580000",
                "url": "https://drive.google.com/file/d/1lN-ebgagNSE74sqExH_HEC7dNOHBN54D/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Uh-huh.",
                "line": 33,
                "start_time": "0-01-20.580000",
                "end_time": "0-01-21.580000",
                "url": "https://drive.google.com/file/d/1uZB6pRA2XgWO9dGN67O86khc3DCqF1UT/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Of course we'll split the reward fifty-fifty.",
                "line": 34,
                "start_time": "0-01-21.750000",
                "end_time": "0-01-24.080000",
                "url": "https://drive.google.com/file/d/1EtjN7KQb8Cd0iOJUj8_ZO5hYHNRdfQqM/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Or that's what I'd like to say,",
                "line": 35,
                "start_time": "0-01-24.080000",
                "end_time": "0-01-25.830000",
                "url": "https://drive.google.com/file/d/1PMsa72PL5m9EIBBNulAQtl2tgZtAfmmb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But the thing is, I'm in favor of her running away.",
                "line": 36,
                "start_time": "0-01-25.830000",
                "end_time": "0-01-28.210000",
                "url": "https://drive.google.com/file/d/149deo1secvChhoLziUomI8I21LZVViM7/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "but you're my best friend, and I believe in you!",
                "line": 36,
                "start_time": "0-01-25.830000",
                "end_time": "0-01-28.210000",
                "url": "https://drive.google.com/file/d/149deo1secvChhoLziUomI8I21LZVViM7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But the thing is, I'm in favor of her running away.",
                "line": 37,
                "start_time": "0-01-28.210000",
                "end_time": "0-01-29.540000",
                "url": "https://drive.google.com/file/d/1wJBcbDZfkRhkP94Tx69-fji-JZzhOX0d/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "In your kindness, and in your desire",
                "line": 37,
                "start_time": "0-01-28.210000",
                "end_time": "0-01-29.540000",
                "url": "https://drive.google.com/file/d/1wJBcbDZfkRhkP94Tx69-fji-JZzhOX0d/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "to let your broke friend keep all the money!",
                "line": 38,
                "start_time": "0-01-29.540000",
                "end_time": "0-01-30.630000",
                "url": "https://drive.google.com/file/d/1M_w_vtI5LKVN4ITE8kAxwwSX4g6Wv_rg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "She's a rebel who would try and kill a fiance",
                "line": 39,
                "start_time": "0-01-30.630000",
                "end_time": "0-01-33",
                "url": "https://drive.google.com/file/d/1RYMxHk6YdBYF_N_buddAQkVmwVKGPP0Y/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "to let your broke friend keep all the money!",
                "line": 39,
                "start_time": "0-01-30.630000",
                "end_time": "0-01-33",
                "url": "https://drive.google.com/file/d/1RYMxHk6YdBYF_N_buddAQkVmwVKGPP0Y/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "that she doesn't want to marry.",
                "line": 40,
                "start_time": "0-01-33",
                "end_time": "0-01-34.540000",
                "url": "https://drive.google.com/file/d/1MkUQyQP57NJ-AbIH-Rb7NZxhgocidwmG/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "If we look for her together,",
                "line": 40,
                "start_time": "0-01-33",
                "end_time": "0-01-34.540000",
                "url": "https://drive.google.com/file/d/1MkUQyQP57NJ-AbIH-Rb7NZxhgocidwmG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That takes chutzpah! I really admire that!",
                "line": 41,
                "start_time": "0-01-34.540000",
                "end_time": "0-01-36.670000",
                "url": "https://drive.google.com/file/d/1xlfxJD5PrpiJ7DuKaSELvxYBKk0RdQdP/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "we double our chances!",
                "line": 41,
                "start_time": "0-01-34.540000",
                "end_time": "0-01-36.670000",
                "url": "https://drive.google.com/file/d/1xlfxJD5PrpiJ7DuKaSELvxYBKk0RdQdP/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "and the percentage of my cut!",
                "line": 42,
                "start_time": "0-01-36.670000",
                "end_time": "0-01-37.380000",
                "url": "https://drive.google.com/file/d/19Su9oavLkfJ6EfMX3D_pE9drq8VGhFpU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You don't see that every day.",
                "line": 43,
                "start_time": "0-01-37.380000",
                "end_time": "0-01-38.580000",
                "url": "https://drive.google.com/file/d/1pg8q2pltU_MvXesfS4M0HwOuNRHo67_4/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "and the percentage of my cut!",
                "line": 43,
                "start_time": "0-01-37.380000",
                "end_time": "0-01-38.580000",
                "url": "https://drive.google.com/file/d/1pg8q2pltU_MvXesfS4M0HwOuNRHo67_4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I wish she had let me be there to watch.",
                "line": 44,
                "start_time": "0-01-38.580000",
                "end_time": "0-01-40.830000",
                "url": "https://drive.google.com/file/d/1AGhihjA_WSBDScbeUOhHKC-373UWOMq7/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "You get the joy of looking for your dear Rose!",
                "line": 44,
                "start_time": "0-01-38.580000",
                "end_time": "0-01-40.830000",
                "url": "https://drive.google.com/file/d/1AGhihjA_WSBDScbeUOhHKC-373UWOMq7/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "And I get the joy of the cash reward!",
                "line": 45,
                "start_time": "0-01-40.830000",
                "end_time": "0-01-42.460000",
                "url": "https://drive.google.com/file/d/1Qr4ya9xFqrq2iUrS_O4fNjaP-UtJPJPC/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "It's a win-win!",
                "line": 46,
                "start_time": "0-01-42.460000",
                "end_time": "0-01-43.790000",
                "url": "https://drive.google.com/file/d/1DIJQVtnX-AaNsVPw2sPkbWX4VzESvkmQ/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Don't even worry!",
                "line": 47,
                "start_time": "0-01-43.790000",
                "end_time": "0-01-45.080000",
                "url": "https://drive.google.com/file/d/16iERxYsdzswGZW02g__Ey4xcVRKqpQ2u/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Your personal reward will always be with you, living on in your heart.",
                "line": 48,
                "start_time": "0-01-45.210000",
                "end_time": "0-01-48.750000",
                "url": "https://drive.google.com/file/d/1qVhvfxXZ6jRXxGA9VWONpJhjeUHFQL6O/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "The shining memories of frolicking frantically across the capital under the summer sky",
                "line": 49,
                "start_time": "0-01-48.750000",
                "end_time": "0-01-52.630000",
                "url": "https://drive.google.com/file/d/1-Lio-WwUq65afkumBgQZ5bcyEK9XQXfs/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "so that I can get the cash reward:",
                "line": 50,
                "start_time": "0-01-52.630000",
                "end_time": "0-01-54.380000",
                "url": "https://drive.google.com/file/d/1R9OMkfVxoHjF27bo3Lf23hnBqqvVcWuh/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "That will be the greatest treasure!",
                "line": 51,
                "start_time": "0-01-54.380000",
                "end_time": "0-01-55.710000",
                "url": "https://drive.google.com/file/d/1VCg4ToAazGGUixcfqXPmcG7FrueAWW7W/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Memories are the ultimate reward!",
                "line": 52,
                "start_time": "0-01-55.710000",
                "end_time": "0-01-57.670000",
                "url": "https://drive.google.com/file/d/10aZy6u8JJsnQ5UuD9MyuO0dmGlVka_AB/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "So of course you understand, Cid!",
                "line": 53,
                "start_time": "0-01-57.670000",
                "end_time": "0-01-58.880000",
                "url": "https://drive.google.com/file/d/1rarH0AeberR4a4Oo5pCKp8sHZyUe-NQJ/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "I'm saying all this for my own benefit-",
                "line": 54,
                "start_time": "0-01-58.880000",
                "end_time": "0-02-00.830000",
                "url": "https://drive.google.com/file/d/1sFN3k3CV1uoop5MxJuHjxJpfPFstOKX1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "All right, time to start Operation: Capture the Student Council President.",
                "line": 55,
                "start_time": "0-02-02.170000",
                "end_time": "0-02-05",
                "url": "https://drive.google.com/file/d/1ElZkJERgvB61NWROjp6s1J2u1WWxMvRC/view?usp=drivesdk"
            },
            {
                "name": "Skel Etal",
                "name_variant": "Skel Etal",
                "subtitle": "Start operation, but-",
                "line": 56,
                "start_time": "0-02-05",
                "end_time": "0-02-06.290000",
                "url": "https://drive.google.com/file/d/1TVT6yYuAAU4WNwiyCK0KSfm3Nah_Yhjz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Don't wanna waste time. Let's go.",
                "line": 57,
                "start_time": "0-02-06.290000",
                "end_time": "0-02-08.580000",
                "url": "https://drive.google.com/file/d/1XMqNSGDlL9IY9ymDoIyQK-7F5Y_RJGnM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "For now, I just need to buy some time while I wait for my sister to cool her head.",
                "line": 58,
                "start_time": "0-03-58.750000",
                "end_time": "0-04-02.500000",
                "url": "https://drive.google.com/file/d/1CPjQjuHJ7G6qtDEvYlReBxclVDMosemj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I wonder if Rose managed to get away safe and sound?",
                "line": 59,
                "start_time": "0-04-03.420000",
                "end_time": "0-04-06.170000",
                "url": "https://drive.google.com/file/d/1HSDo-y-FQKzMHpjtCNLnetanDikW6IuS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "If I'd had my wish, I would have liked to ask her in person what inspired her",
                "line": 60,
                "start_time": "0-04-08.580000",
                "end_time": "0-04-12.250000",
                "url": "https://drive.google.com/file/d/1QT61yWdNnPoU7a_sC78aBjm-_QBeJryz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "to do something so rock'n'roll as to stab her fiance.",
                "line": 61,
                "start_time": "0-04-12.250000",
                "end_time": "0-04-14.290000",
                "url": "https://drive.google.com/file/d/1xX-H3FpPP9sww1gWd0tPy1VlCllA56LC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "They're pretty good.",
                "line": 62,
                "start_time": "0-04-21.420000",
                "end_time": "0-04-22.830000",
                "url": "https://drive.google.com/file/d/1zqoy5QNt1aBLPeCRg5PpUzfTfbkCey-X/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "In my past life, as part of my family's educational policy,",
                "line": 63,
                "start_time": "0-04-25",
                "end_time": "0-04-28.040000",
                "url": "https://drive.google.com/file/d/1skztrHqS_2W-qZwWaWoau05p9tERvtxl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I was forced to learn the piano.",
                "line": 64,
                "start_time": "0-04-28.040000",
                "end_time": "0-04-29.540000",
                "url": "https://drive.google.com/file/d/1DFRKck9QQr4C0-2bWlRuDYC50EfQADAi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Frankly, I would have much rather spent my time training to become the Eminence in Shadow",
                "line": 65,
                "start_time": "0-04-30.540000",
                "end_time": "0-04-35.290000",
                "url": "https://drive.google.com/file/d/1GrqJXe86DqRXu-SrpcvFXy0F0Um57PWg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "than wasting it on that nonsense.",
                "line": 66,
                "start_time": "0-04-35.290000",
                "end_time": "0-04-37.210000",
                "url": "https://drive.google.com/file/d/1GsiJsMd7fXnUMZoDwwF8eWgT0NlcxRbg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But after a while, I started thinking the piano's not so bad.",
                "line": 67,
                "start_time": "0-04-38.130000",
                "end_time": "0-04-41.210000",
                "url": "https://drive.google.com/file/d/1QTylMk3DxEryuzDZofsTZ8WFpE3_ae4I/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "When you get good at the piano, everybody around you starts to assume,",
                "line": 68,
                "start_time": "0-04-41.960000",
                "end_time": "0-04-44.540000",
                "url": "https://drive.google.com/file/d/1cCkVqnC0tftr2W7Bxzt5vSYY0fivm4Eh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"Oh, he's busy practicing,\" so they don't bother you.",
                "line": 69,
                "start_time": "0-04-44.540000",
                "end_time": "0-04-47.630000",
                "url": "https://drive.google.com/file/d/1z7j13F7VBUaZvGlKFHNB4PHOSJA2iqUH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "As someone who wanted to keep friendly interactions to a minimum",
                "line": 70,
                "start_time": "0-04-48.170000",
                "end_time": "0-04-51.210000",
                "url": "https://drive.google.com/file/d/15EiTBcfF9F5tWCSr-6OU00gGYEd-JWAV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "in my quest to be the Eminence in Shadow,",
                "line": 71,
                "start_time": "0-04-51.210000",
                "end_time": "0-04-53.540000",
                "url": "https://drive.google.com/file/d/1ZnJHrgPnz-GU9saeb_q4p2iwvgRLfXzA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I appreciated this misunderstanding.",
                "line": 72,
                "start_time": "0-04-53.540000",
                "end_time": "0-04-55.380000",
                "url": "https://drive.google.com/file/d/1DR1IlwAz4yVD-Ct375p8zSptB6dVwlj_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But most of all, I simply realized that the piano is just really cool.",
                "line": 73,
                "start_time": "0-04-55.920000",
                "end_time": "0-04-59.420000",
                "url": "https://drive.google.com/file/d/1s17UooE-lyWPMUkn5_2pPKH-GMor0eIi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The Eminence in Shadow, playing the piano in the light of the moon...",
                "line": 74,
                "start_time": "0-05-00.080000",
                "end_time": "0-05-03.250000",
                "url": "https://drive.google.com/file/d/1Qzp1LY09us0ADQM_Umsj82U7HpNoqBIT/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Awesome, right?",
                "line": 75,
                "start_time": "0-05-03.790000",
                "end_time": "0-05-05.040000",
                "url": "https://drive.google.com/file/d/1KezF1rSG7RwgaDMuddzexAdgxrVbm7ra/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It shows the world that I'm not just about pure power.",
                "line": 76,
                "start_time": "0-05-05.460000",
                "end_time": "0-05-08.080000",
                "url": "https://drive.google.com/file/d/1BPkJrWk0Ky0V-NOY7YvJYw8tw3AE4JBG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm also an amazing artiste.",
                "line": 77,
                "start_time": "0-05-08.080000",
                "end_time": "0-05-09.920000",
                "url": "https://drive.google.com/file/d/1VKM4yavMXfa9dA7wBB3SoaYyc3rZkvmA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So cool...",
                "line": 78,
                "start_time": "0-05-10.290000",
                "end_time": "0-05-11.500000",
                "url": "https://drive.google.com/file/d/1MlkAcOKor5m2Z8nYhvp-sR3lNMRKSARg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The next thing I knew, I was pretty hardcore about the piano.",
                "line": 79,
                "start_time": "0-05-11.880000",
                "end_time": "0-05-15.330000",
                "url": "https://drive.google.com/file/d/101DMn5uM5Isgkt7uHKTi7pa0zScW-jNk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Of course training to be Eminence in Shadow was my number one priority.",
                "line": 80,
                "start_time": "0-05-16",
                "end_time": "0-05-19.920000",
                "url": "https://drive.google.com/file/d/1sEeodm5rpR-j3nNIU89CVccZiACiQNhB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But the idea of creating the mood for a battle with some sweet piano music...",
                "line": 81,
                "start_time": "0-05-20.580000",
                "end_time": "0-05-23.960000",
                "url": "https://drive.google.com/file/d/1qYXtIjYdu-msRVIKCmT723n7Lm-dsFiz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That was hard to give up.",
                "line": 82,
                "start_time": "0-05-24.330000",
                "end_time": "0-05-25.630000",
                "url": "https://drive.google.com/file/d/1aY0slqI9vCZpgiJ1BY2zba5SJJWgSPNN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Beethoven's Piano Sonata Number 14,",
                "line": 83,
                "start_time": "0-05-28.500000",
                "end_time": "0-05-31.500000",
                "url": "https://drive.google.com/file/d/1Q4OrqXmzVPpRu6M1HFFBm7TSPFTntLx9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "the \"Moonlight Sonata.\"",
                "line": 84,
                "start_time": "0-05-31.500000",
                "end_time": "0-05-32.960000",
                "url": "https://drive.google.com/file/d/14spjJGNhcJ4JBcNACO1RvPDzsol1Cs77/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Even under the hot summer sun,",
                "line": 85,
                "start_time": "0-05-33.460000",
                "end_time": "0-05-35.210000",
                "url": "https://drive.google.com/file/d/1ljaBfKrpMVwEp4kWpCCGSO_Wg8_YN5zM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "it conjures images of the moon shining in the dark night.",
                "line": 86,
                "start_time": "0-05-35.210000",
                "end_time": "0-05-38.080000",
                "url": "https://drive.google.com/file/d/1kVM30b8CxH6hh3G8VLHqEoPOUIGHtDIV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It's my favorite piece.",
                "line": 87,
                "start_time": "0-05-38.630000",
                "end_time": "0-05-40.380000",
                "url": "https://drive.google.com/file/d/1WkIXh2P7HPWg2qYMAsCCOewJ26cBmBlo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "In fact, I love it so much,",
                "line": 88,
                "start_time": "0-05-41",
                "end_time": "0-05-43.250000",
                "url": "https://drive.google.com/file/d/1U2QuUqqHlgYyiHuXCvjO_ephMC_d_S0Y/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I think it's the only piece that could be considered the best piece for an Eminence in Shadow.",
                "line": 89,
                "start_time": "0-05-43.250000",
                "end_time": "0-05-46.960000",
                "url": "https://drive.google.com/file/d/1lChTPh14AZbd4YpSLr1EBVIrtWDeQSC_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But how does the \"Moonlight Sonata\" exist in this world?",
                "line": 90,
                "start_time": "0-05-47.540000",
                "end_time": "0-05-50.500000",
                "url": "https://drive.google.com/file/d/1VJUAd4c5pywSl6AC12XDFGfYUCk-mIOC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Maybe there really is someone else who's been reincarnated.",
                "line": 91,
                "start_time": "0-05-52.330000",
                "end_time": "0-05-55.210000",
                "url": "https://drive.google.com/file/d/1aLIwy7RKcoboop5lk4KAjOZyBj_9BPMh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It looks like she's wearing a nice summer dress,",
                "line": 92,
                "start_time": "0-06-08.540000",
                "end_time": "0-06-10.420000",
                "url": "https://drive.google.com/file/d/1vVEO2pm8m5ImaY7CyX7FGBwI-eVo9OGm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "which also happens to perfectly cover her slime-enhanced chest and legs.",
                "line": 93,
                "start_time": "0-06-10.420000",
                "end_time": "0-06-14",
                "url": "https://drive.google.com/file/d/1i5deuDosCRotTOluGj42IVS8TNOeHHj5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That's Epsilon the Precise for you.",
                "line": 94,
                "start_time": "0-06-14.830000",
                "end_time": "0-06-16.880000",
                "url": "https://drive.google.com/file/d/1vUuJWYvH2adMAKhxhlpgJzjQjGY99xmf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "First Gamma, then Beta, now Epsilon.",
                "line": 95,
                "start_time": "0-06-27.290000",
                "end_time": "0-06-29.920000",
                "url": "https://drive.google.com/file/d/1RFK3YuGgdtMyZNWuUi2CicbVXjB73CnZ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I never would have dreamed that you would come to hear me play, My Lord.",
                "line": 96,
                "start_time": "0-06-33.170000",
                "end_time": "0-06-36.540000",
                "url": "https://drive.google.com/file/d/1zR2lERVD6430ZUCCWEJh8TBnQAdy_qou/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I'm not worthy of this honor.",
                "line": 97,
                "start_time": "0-06-36.540000",
                "end_time": "0-06-38.130000",
                "url": "https://drive.google.com/file/d/1QO2c4Pj5b0MJHBytaD54VBqiQ-G0ZWss/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That piece, it was the \"Moonlight Sonata,\" wasn't it?",
                "line": 98,
                "start_time": "0-06-38.130000",
                "end_time": "0-06-40.380000",
                "url": "https://drive.google.com/file/d/1XReDGlgUKr27gosdPVT2dGRRa2fSCeGc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes!",
                "line": 99,
                "start_time": "0-06-40.380000",
                "end_time": "0-06-41.380000",
                "url": "https://drive.google.com/file/d/17h_Cusnm8_Z35sfnPUXymoj_x6DFDNk9/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Of the many pieces you so graciously taught me, it is the one I like the very best.",
                "line": 100,
                "start_time": "0-06-41.880000",
                "end_time": "0-06-47.290000",
                "url": "https://drive.google.com/file/d/1p-GLFCe79UjO33gPiIJJBh-5tPCcxc_q/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I didn't mean to teach you anything.",
                "line": 101,
                "start_time": "0-06-47.960000",
                "end_time": "0-06-49.960000",
                "url": "https://drive.google.com/file/d/1lU8II4Tk28aJiGeTIkxHpM6IbEvFbFkA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But I guess I can be pleased to hear someone else say she likes something I like.",
                "line": 102,
                "start_time": "0-06-50.670000",
                "end_time": "0-06-56.290000",
                "url": "https://drive.google.com/file/d/1sYKExx7odL2G4dUfLPoUtZ_coOJpMs1j/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Thanks to your wisdom, My Lord,",
                "line": 103,
                "start_time": "0-06-57",
                "end_time": "0-06-59",
                "url": "https://drive.google.com/file/d/1YuF-xZdYWOEhedAfFvCXsEI5qs-l-Wsk/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I am building connections with influential people as a pianist and as a composer.",
                "line": 104,
                "start_time": "0-06-59",
                "end_time": "0-07-03.630000",
                "url": "https://drive.google.com/file/d/1_phEb8BYG_-BK84zVbtEXf60k46RyF40/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "A composer?",
                "line": 105,
                "start_time": "0-07-04.670000",
                "end_time": "0-07-05.960000",
                "url": "https://drive.google.com/file/d/11SOilo48Zisg4K_pwlDvVI82lR8TNpI7/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, My Lord!",
                "line": 106,
                "start_time": "0-07-05.960000",
                "end_time": "0-07-06.960000",
                "url": "https://drive.google.com/file/d/1kbIKz-OLGOATRkUngrdSAHU34CS-x5Ly/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "The \"Moonlight Sonata,\" the \"Turkish March,\" the \"Minute Waltz\"...",
                "line": 107,
                "start_time": "0-07-06.960000",
                "end_time": "0-07-10.670000",
                "url": "https://drive.google.com/file/d/10PxzQa6VThDYQO_qC5LBqZp-dkFTt3VB/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "They're very popular among the nobility,",
                "line": 108,
                "start_time": "0-07-10.670000",
                "end_time": "0-07-12.420000",
                "url": "https://drive.google.com/file/d/1lJMGeY6bt8JQL6rmebtq6MEA4cD9WJal/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "and the Royal Capital has even given me awards.",
                "line": 109,
                "start_time": "0-07-12.420000",
                "end_time": "0-07-14.580000",
                "url": "https://drive.google.com/file/d/15bgsEcqkLiwtFVxHLJcVVP2uMUTwKiSm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Have they now?",
                "line": 110,
                "start_time": "0-07-15",
                "end_time": "0-07-16.210000",
                "url": "https://drive.google.com/file/d/14VxpAJ_doC7P04SQ4uQBjRmYR1RGJXsp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Accepting awards for plagiarized music?",
                "line": 111,
                "start_time": "0-07-16.630000",
                "end_time": "0-07-18.170000",
                "url": "https://drive.google.com/file/d/1fZE_xtiemUiZ3FmTDZ66JUyX_sA-qQld/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That's the most shameless thing I've ever heard.",
                "line": 112,
                "start_time": "0-07-18.170000",
                "end_time": "0-07-20.130000",
                "url": "https://drive.google.com/file/d/1OG9pteSGwliEkljLu6THtmmDJwWXSidZ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "The Oriana Kingdom, the kingdom of art and culture,",
                "line": 113,
                "start_time": "0-07-20.420000",
                "end_time": "0-07-22.630000",
                "url": "https://drive.google.com/file/d/1STbDjRBsynql6shPiiFg2wdzy-UxdsYU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "has invited me to visit as an up-and-coming composer.",
                "line": 114,
                "start_time": "0-07-22.630000",
                "end_time": "0-07-25.790000",
                "url": "https://drive.google.com/file/d/1gYNOOLk-UwQJj56qo8oY5IoyR-EMlyPk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "My apologies to all the great composers.",
                "line": 115,
                "start_time": "0-07-25.790000",
                "end_time": "0-07-28.540000",
                "url": "https://drive.google.com/file/d/1yDbNJ-Fv5cJ4mmWyeh1WuhBlPpQqZZKG/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "As I'm sure you are aware,",
                "line": 116,
                "start_time": "0-07-28.710000",
                "end_time": "0-07-30.040000",
                "url": "https://drive.google.com/file/d/1BZGod7Hsr2j3t_20hX7Mm7yC7XuKHXUY/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "there is a lot of profitable work to be done in the Oriana Kingdom right now.",
                "line": 117,
                "start_time": "0-07-30.040000",
                "end_time": "0-07-34.420000",
                "url": "https://drive.google.com/file/d/1551URMdkH5amtyzlDzMZ_KLOTtK4PJi_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "They are the kingdom of art and culture.",
                "line": 118,
                "start_time": "0-07-34.420000",
                "end_time": "0-07-36.420000",
                "url": "https://drive.google.com/file/d/1I3GC1wKuYnqaqtdhBut6GcEdl9jaOnj-/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, My Lord.",
                "line": 119,
                "start_time": "0-07-36.420000",
                "end_time": "0-07-37.420000",
                "url": "https://drive.google.com/file/d/1aifBCXy7dqP6iiehtXmUFs9_fiyXLltr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "This time, I think there is an especially worthwhile job to be done.",
                "line": 120,
                "start_time": "0-07-37.630000",
                "end_time": "0-07-40.710000",
                "url": "https://drive.google.com/file/d/1YBJjWhL1RruOue10m-gqhQXwMWlW6nEd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Good luck with that.",
                "line": 121,
                "start_time": "0-07-41",
                "end_time": "0-07-42.210000",
                "url": "https://drive.google.com/file/d/1QAhm8UQi1aUi43l0Ktjd2LELDxIrAr5l/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I shall perform my duty and and my music in a way worthy of the sublime masterpieces",
                "line": 122,
                "start_time": "0-07-42.460000",
                "end_time": "0-07-46.210000",
                "url": "https://drive.google.com/file/d/1OGdli3vWmu-0tYTVKBld6rXPiAR4YTAc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "you have bestowed upon me, My Lord.",
                "line": 123,
                "start_time": "0-07-46.210000",
                "end_time": "0-07-47.960000",
                "url": "https://drive.google.com/file/d/1_jhxYSKWGqb3L4PRPS-UDXqeGGtsexgh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Good luck with that.",
                "line": 124,
                "start_time": "0-07-47.960000",
                "end_time": "0-07-49.330000",
                "url": "https://drive.google.com/file/d/1Zh-xFvEUVTWu8RJLnH_EJljKephqyYne/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That reminds me.",
                "line": 125,
                "start_time": "0-07-50.170000",
                "end_time": "0-07-51.380000",
                "url": "https://drive.google.com/file/d/1muRCig1nkmZ2bbSF93fXxZtq9f1mXL-A/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Do you happen to know where Oriana's Princess Rose ran off to?",
                "line": 126,
                "start_time": "0-07-51.380000",
                "end_time": "0-07-53.880000",
                "url": "https://drive.google.com/file/d/1I4QeSvN2MuQU09rilqnTZGhV_xIO7F9T/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Princess Rose, My Lord?",
                "line": 127,
                "start_time": "0-07-54.130000",
                "end_time": "0-07-56.580000",
                "url": "https://drive.google.com/file/d/1bO6EEQuKAIFZb-Ec5wrO4gUNhCq7Pea7/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Beta is responsible for that particular case, so I don't know any details.",
                "line": 128,
                "start_time": "0-07-57",
                "end_time": "0-08-00.830000",
                "url": "https://drive.google.com/file/d/1WUx6CiO89_HrmdQTy9pQJWVIXDkWnigp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But I have heard that she has taken refuge in the tunnels under the Royal Capital.",
                "line": 129,
                "start_time": "0-08-01.460000",
                "end_time": "0-08-04.750000",
                "url": "https://drive.google.com/file/d/1m_RI9jSuQ_5EeXb9iYWYCIssgLsq5RFZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Underground, huh?",
                "line": 130,
                "start_time": "0-08-05.170000",
                "end_time": "0-08-06.380000",
                "url": "https://drive.google.com/file/d/15ufWAikvsCYFw4T_XY6DbZVDyGfWd7Aj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I'll send a messenger to Beta-",
                "line": 131,
                "start_time": "0-08-07",
                "end_time": "0-08-08.500000",
                "url": "https://drive.google.com/file/d/1iwIccqVG60e_bN72TVA_Pl2381c8N8Pi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That's okay.",
                "line": 132,
                "start_time": "0-08-08.500000",
                "end_time": "0-08-09.750000",
                "url": "https://drive.google.com/file/d/1PI_9ekFUhjwb84PFeoqXvJPITGCFZ05U/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You've given me all I need to know.",
                "line": 133,
                "start_time": "0-08-09.750000",
                "end_time": "0-08-11.460000",
                "url": "https://drive.google.com/file/d/1h5ybKnuRL6ZkkvkhExAEqMXm8DhAwpkt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Your figure is as lovely as ever today, Epsilon.",
                "line": 134,
                "start_time": "0-08-12.290000",
                "end_time": "0-08-14.880000",
                "url": "https://drive.google.com/file/d/1F6M4mVp1g-qmI1LMo5C5t-KtEKGgpHpH/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Y-You're too kind! Humble Epsilon is still nowhere near...",
                "line": 135,
                "start_time": "0-08-15.460000",
                "end_time": "0-08-18.710000",
                "url": "https://drive.google.com/file/d/13atAwHqGGTK0loOX_IBFR727zS-EVgbA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Plagiarism issues aside,",
                "line": 136,
                "start_time": "0-08-20.420000",
                "end_time": "0-08-22.130000",
                "url": "https://drive.google.com/file/d/1oz0k30GXhcJfCTi1vdBXIWoU-f6slDjv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "she made me happy by telling me she likes the \"Moonlight Sonata.\"",
                "line": 137,
                "start_time": "0-08-22.130000",
                "end_time": "0-08-25.790000",
                "url": "https://drive.google.com/file/d/1iiyEVnN3DYyR0VrONm3AjaQa48NBZulV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So I ought to tell her something to make her happy, too.",
                "line": 138,
                "start_time": "0-08-26.330000",
                "end_time": "0-08-29.540000",
                "url": "https://drive.google.com/file/d/1Z76Obfk3xneQjh1tAnmVd1VTflEGyJRb/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "My sister Iris thanks you for the information you provided.",
                "line": 139,
                "start_time": "0-08-39.920000",
                "end_time": "0-08-44.170000",
                "url": "https://drive.google.com/file/d/1fl2N57ueWB-XbI4Wu7vwqA2vrvfpaTEZ/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "She says she hopes you'll help us again in the future.",
                "line": 140,
                "start_time": "0-08-44.540000",
                "end_time": "0-08-46.750000",
                "url": "https://drive.google.com/file/d/1yspeQ1dyN_ykUSFk8jD3CXv3iY38AfPe/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "I'm honored.",
                "line": 141,
                "start_time": "0-08-46.750000",
                "end_time": "0-08-47.960000",
                "url": "https://drive.google.com/file/d/1nGZX5ZwMvPbSObbIhhIRZLIBUYUGcYi_/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "So I was right, we should assume that Perv Asshat is working with the Cult.",
                "line": 142,
                "start_time": "0-08-51.380000",
                "end_time": "0-08-55.920000",
                "url": "https://drive.google.com/file/d/1yqUahxoOY_Th-JAFw-VNUuqJMLgrwRQL/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "Yes, if we follow his dubious personal history, I believe there is no room for doubt.",
                "line": 143,
                "start_time": "0-08-55.920000",
                "end_time": "0-08-59.920000",
                "url": "https://drive.google.com/file/d/1-tYgn4JZN6yRlyo7vpb-LpyWQyyGsm5z/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "The problem is that we have no evidence.",
                "line": 144,
                "start_time": "0-09-00.080000",
                "end_time": "0-09-02.250000",
                "url": "https://drive.google.com/file/d/1XIioFiEZD-VJO9nPdH1Miu1VdgkC7EsJ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "Indeed.",
                "line": 145,
                "start_time": "0-09-02.250000",
                "end_time": "0-09-03.460000",
                "url": "https://drive.google.com/file/d/1R2lr3flQYXdFY-qeMIybQBPyFGRor6EY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "This matter involves the government and the Church,",
                "line": 146,
                "start_time": "0-09-03.790000",
                "end_time": "0-09-06.790000",
                "url": "https://drive.google.com/file/d/1PWaOKTJOFLk9NGFPqXuz2uslfXzl7Hku/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "so normal evidence will not be enough.",
                "line": 147,
                "start_time": "0-09-06.790000",
                "end_time": "0-09-08.630000",
                "url": "https://drive.google.com/file/d/1Jrycgi7tedz8F8FR3dAaFerB96OmD3y9/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Yeah, I know.",
                "line": 148,
                "start_time": "0-09-08.790000",
                "end_time": "0-09-10.130000",
                "url": "https://drive.google.com/file/d/1uvEXbJfF4e0p0HWiss_SrzMFe2m4C8QP/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Even Father broke his usual silence to give me a stern warning.",
                "line": 149,
                "start_time": "0-09-10.460000",
                "end_time": "0-09-13.170000",
                "url": "https://drive.google.com/file/d/19NQMObSpbS2JOvXDHndJxOPu0DlLHNzb/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "He's all, \"If you want to tie the Divine Teachings to the Cult of Diablos,",
                "line": 150,
                "start_time": "0-09-14.040000",
                "end_time": "0-09-17.210000",
                "url": "https://drive.google.com/file/d/1MoHeoQOcB_UeApVHxzOF5zOhi-vB19sD/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "you're going to need to convince all our people, and the neighboring governments.\"",
                "line": 151,
                "start_time": "0-09-17.210000",
                "end_time": "0-09-20.960000",
                "url": "https://drive.google.com/file/d/1717L_pp5hR4klWQ5s8TSbyukP6xYpizg/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "And if they brand us as heretics, it's all over.",
                "line": 152,
                "start_time": "0-09-20.960000",
                "end_time": "0-09-23.880000",
                "url": "https://drive.google.com/file/d/1OL52P2v8jvXcEIAkn9QNU9GFeE-lY_CM/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Father keeps insisting that I not mess with the Divine Teachings.",
                "line": 153,
                "start_time": "0-09-24.080000",
                "end_time": "0-09-27.210000",
                "url": "https://drive.google.com/file/d/1zdpY_fJ-erSIAnrcRfntUxqubPkriCkA/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "How in the world does he plan to put a stop to all the chaos the Cult of Diablos has caused?",
                "line": 154,
                "start_time": "0-09-28.080000",
                "end_time": "0-09-32.210000",
                "url": "https://drive.google.com/file/d/1rVFVdV5jU7IWmzeurSn3NGm-UpYv7vF3/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "I believe he plans to ignore it as he always has.",
                "line": 155,
                "start_time": "0-09-32.710000",
                "end_time": "0-09-35.170000",
                "url": "https://drive.google.com/file/d/13j1BBiqQMleAqjGkEXAKO9dZlnuEgIFD/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "\"Always has\"?",
                "line": 156,
                "start_time": "0-09-35.790000",
                "end_time": "0-09-37.420000",
                "url": "https://drive.google.com/file/d/1RKcSviBgMlC4OQVUdbvwrvCPDTDloUc4/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "Just my own speculation.",
                "line": 157,
                "start_time": "0-09-37.420000",
                "end_time": "0-09-39.210000",
                "url": "https://drive.google.com/file/d/1RBE1zYVKxAFCzpuFdHs-_24CKZfXk-vI/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "Please forget I said anything.",
                "line": 158,
                "start_time": "0-09-39.210000",
                "end_time": "0-09-40.540000",
                "url": "https://drive.google.com/file/d/1ZOM1OR1Fu_mdGXshL-0-Xa2DkkODfwQS/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Fine, whatever.",
                "line": 159,
                "start_time": "0-09-41.080000",
                "end_time": "0-09-42.290000",
                "url": "https://drive.google.com/file/d/1A6r1S1IRC7wMN--uHkxaVLCu9KKxwcbN/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Anyway, Iris said something that's been bothering me.",
                "line": 160,
                "start_time": "0-09-42.670000",
                "end_time": "0-09-45.380000",
                "url": "https://drive.google.com/file/d/1FDaGS5auPO_VbzySJzyYAxDRIKvz4LAe/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "She had an audience with King Oriana, but he seemed somewhat vacant.",
                "line": 161,
                "start_time": "0-09-45.880000",
                "end_time": "0-09-49.960000",
                "url": "https://drive.google.com/file/d/1rnWWgXi2dP2JkWm0Hgf2DaRBOfq4gfMO/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "\"Vacant\"?",
                "line": 162,
                "start_time": "0-09-49.960000",
                "end_time": "0-09-51.170000",
                "url": "https://drive.google.com/file/d/1ifJbSZl1FuS7BAtuDKZe7basVII9aEDg/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "It makes sense that he would be distracted by his daughter's act of violence,",
                "line": 163,
                "start_time": "0-09-51.710000",
                "end_time": "0-09-54.750000",
                "url": "https://drive.google.com/file/d/1l8thaBc7WvR0a7-gvSNKkqLSvBmYF548/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "but Iris said it wasn't like that.",
                "line": 164,
                "start_time": "0-09-54.750000",
                "end_time": "0-09-56.880000",
                "url": "https://drive.google.com/file/d/1l_C_0ki0DswziRDaQNK8wrG-Iut4a6iR/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "And apparently there was a sweet smell.",
                "line": 165,
                "start_time": "0-09-57.420000",
                "end_time": "0-09-59.500000",
                "url": "https://drive.google.com/file/d/1tHRmVEqBlXI_v0o2gJ-tcstaMU5xLM5O/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "It may already be too late.",
                "line": 166,
                "start_time": "0-10-00.830000",
                "end_time": "0-10-02.920000",
                "url": "https://drive.google.com/file/d/1g7ANsESBf3QEUUYCNZO5auca5vCi_nv7/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "The Cult is still out there working its evil.",
                "line": 167,
                "start_time": "0-10-04.500000",
                "end_time": "0-10-06.580000",
                "url": "https://drive.google.com/file/d/1doJT8yANDX7--ydUVc_Bf3t8MMq49uYU/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "The way Father does things, eventually they'll get to our kingdom, too.",
                "line": 168,
                "start_time": "0-10-07",
                "end_time": "0-10-10.040000",
                "url": "https://drive.google.com/file/d/1pcJwskfcdfNEujtV5-MDkA0OwIAIcO_N/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "Might I ask, where does this stairway lead?",
                "line": 169,
                "start_time": "0-10-13.380000",
                "end_time": "0-10-16.710000",
                "url": "https://drive.google.com/file/d/1ZknLlTFy_j_Pd0bOx7tJTTz_tmDuMQd3/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "To an entrance to the Royal Capital's underground passages.",
                "line": 170,
                "start_time": "0-10-16.710000",
                "end_time": "0-10-19.460000",
                "url": "https://drive.google.com/file/d/1xdjfA8KHGk9TGePugIdwabQcdIGZcHsq/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "But you already know all about those.",
                "line": 171,
                "start_time": "0-10-20.170000",
                "end_time": "0-10-21.960000",
                "url": "https://drive.google.com/file/d/1QI5Vm-RrPMcAQ_46DhXAl5BIzaiDp8_P/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "Yes, you mean the underground labyrinth built across the entire Capital ages ago,",
                "line": 172,
                "start_time": "0-10-22.380000",
                "end_time": "0-10-27.040000",
                "url": "https://drive.google.com/file/d/11I7HlS2D2f6sb1OSyCH7u6z5NtFkDEBu/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "allegedly to help the royal family escape.",
                "line": 173,
                "start_time": "0-10-27.040000",
                "end_time": "0-10-29.960000",
                "url": "https://drive.google.com/file/d/1vUXJ_igkfcl5py1d0CW8fZEfTBhrgZ3s/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "A labyrinth...",
                "line": 174,
                "start_time": "0-10-30.460000",
                "end_time": "0-10-31.670000",
                "url": "https://drive.google.com/file/d/17Mcw1E9wra_SINbHhzS0bHaCY6nR0H_C/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Yeah, it is.",
                "line": 175,
                "start_time": "0-10-31.880000",
                "end_time": "0-10-32.920000",
                "url": "https://drive.google.com/file/d/1g0XLc61mcReIlJ3FQwYlJNgvnwjjZZ9u/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "All the maps, keys, codes, and everything were lost a long time ago,",
                "line": 176,
                "start_time": "0-10-32.920000",
                "end_time": "0-10-36.460000",
                "url": "https://drive.google.com/file/d/1_MlnrbzixoWELE5q87KeXAAkG1c0bRfT/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "so now it is nothing but a giant maze.",
                "line": 177,
                "start_time": "0-10-36.460000",
                "end_time": "0-10-38.540000",
                "url": "https://drive.google.com/file/d/1CvXr-JLyxFgFaTN30HaFV47vs6qIS_Gz/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "So why are we heading to these passages now?",
                "line": 178,
                "start_time": "0-10-38.540000",
                "end_time": "0-10-40.790000",
                "url": "https://drive.google.com/file/d/1ZlMqETX-3qg9av4MKo2N51-wwzn8pxWk/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "To dispose of your body.",
                "line": 179,
                "start_time": "0-10-41.170000",
                "end_time": "0-10-43.130000",
                "url": "https://drive.google.com/file/d/1UZF7D-xqMei18hlrbzfDH8SrsJHmACoe/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "That was a joke.",
                "line": 180,
                "start_time": "0-10-45.170000",
                "end_time": "0-10-46.420000",
                "url": "https://drive.google.com/file/d/19PJTycu6o2zw6Ifp66Yiia-6Ujhs6KKL/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "You're not even a little bit scared.",
                "line": 181,
                "start_time": "0-10-46.880000",
                "end_time": "0-10-48.420000",
                "url": "https://drive.google.com/file/d/1fb-RgPtzKic4Ph6geFoPE4CitTQ6HeKn/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "Don't kill me!",
                "line": 182,
                "start_time": "0-10-49.330000",
                "end_time": "0-10-51.420000",
                "url": "https://drive.google.com/file/d/19hJZh8E7Xpgz9bxm0nnw1m-S_VwCSwCC/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "It's possible that Rose has escaped into the underground passages.",
                "line": 183,
                "start_time": "0-10-52.460000",
                "end_time": "0-10-55.920000",
                "url": "https://drive.google.com/file/d/1aawQUOPVOrb74IOZmMMVtb4YhMojlMT8/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "So we're going there to look for her.",
                "line": 184,
                "start_time": "0-10-56.250000",
                "end_time": "0-10-58",
                "url": "https://drive.google.com/file/d/1zND7J9pVq-_WU6gnug-Eud91SqPDuhYT/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "Excuse me a moment.",
                "line": 185,
                "start_time": "0-10-58",
                "end_time": "0-10-59.540000",
                "url": "https://drive.google.com/file/d/1kEl47r-oJezeKaKp0YcnTh-zTOkyeBpV/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "What?",
                "line": 186,
                "start_time": "0-10-59.540000",
                "end_time": "0-11-00.380000",
                "url": "https://drive.google.com/file/d/1aZkRhiWiGzjBB80N8NvUZseN4oKB_MMX/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "Have you told anyone about this?",
                "line": 187,
                "start_time": "0-11-00.380000",
                "end_time": "0-11-02.460000",
                "url": "https://drive.google.com/file/d/1WvGLqK3GjZZ4QQDJ-Fh7G8mtr9XuUp03/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Why would I tell anybody?",
                "line": 188,
                "start_time": "0-11-02.710000",
                "end_time": "0-11-04.290000",
                "url": "https://drive.google.com/file/d/1sQcl9FkeMifYeHpWg9itTf3Fg3GWxizt/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "They would try and stop me.",
                "line": 189,
                "start_time": "0-11-04.290000",
                "end_time": "0-11-05.500000",
                "url": "https://drive.google.com/file/d/1_sjJVRi_J_XFL9ZKN7G0CMRsNM7zzxoo/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "You just said that this was a maze.",
                "line": 190,
                "start_time": "0-11-05.500000",
                "end_time": "0-11-07.580000",
                "url": "https://drive.google.com/file/d/1HYs-0fA0OgQ9CsGNVriw1eYLhp2-21-f/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "How can you be sure that we'll make it back out?",
                "line": 191,
                "start_time": "0-11-07.580000",
                "end_time": "0-11-09.920000",
                "url": "https://drive.google.com/file/d/16_p0FrDhS118IPg-tBcr43ZCAqNOAZMi/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "We just have to go back the way we came in, right?",
                "line": 192,
                "start_time": "0-11-09.920000",
                "end_time": "0-11-12.380000",
                "url": "https://drive.google.com/file/d/18AmLrIgDC_kCira37bTirgKCtpTAUZMc/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "Excuse me, would you please refrain from dragging people",
                "line": 193,
                "start_time": "0-11-13.080000",
                "end_time": "0-11-15.500000",
                "url": "https://drive.google.com/file/d/1qBslpy8j8U5512FT0EWdgw0zoWV25Z3J/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "into your spur-of-the-moment reckless schemes?",
                "line": 194,
                "start_time": "0-11-15.500000",
                "end_time": "0-11-17.130000",
                "url": "https://drive.google.com/file/d/16DmRsLfItQzIk76G0hGkOG0CzJgoiwXS/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "If you have a problem with it, you can leave.",
                "line": 195,
                "start_time": "0-11-18.330000",
                "end_time": "0-11-20.540000",
                "url": "https://drive.google.com/file/d/1QXPkXrvNHZ9lPM0JwSWsJOH7RJl7cORE/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "Babysitting is part of the job, Beta.",
                "line": 196,
                "start_time": "0-11-23.670000",
                "end_time": "0-11-25.920000",
                "url": "https://drive.google.com/file/d/1X0HuIh6f9WIuLeqUsP7-9WHCX0TlGf4R/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "What was I supposed to do back there?",
                "line": 197,
                "start_time": "0-11-35.500000",
                "end_time": "0-11-38.750000",
                "url": "https://drive.google.com/file/d/1VygBOH4zeRFT7_epuQ0iyLScR1MJPpcG/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "What was the right thing?",
                "line": 198,
                "start_time": "0-11-39.710000",
                "end_time": "0-11-41.250000",
                "url": "https://drive.google.com/file/d/1_minnYbgYeT9Jw6z_KbBi-K5OPwRlV1W/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "What would have been the best course of action?",
                "line": 199,
                "start_time": "0-11-41.250000",
                "end_time": "0-11-43.080000",
                "url": "https://drive.google.com/file/d/1_zJ-NW9hl6wakLe5_5bXwxZia6vi4kwV/view?usp=drivesdk"
            },
            {
                "name": "Civil Servant",
                "name_variant": "Civil Servant",
                "subtitle": "Please welcome His Royal Majesty.",
                "line": 200,
                "start_time": "0-11-45.920000",
                "end_time": "0-11-47.540000",
                "url": "https://drive.google.com/file/d/1PgcaL6I52rJOGehN6zE4L9SpoeFVoQBB/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Go on, Your Majesty.",
                "line": 201,
                "start_time": "0-11-58.250000",
                "end_time": "0-11-59.540000",
                "url": "https://drive.google.com/file/d/17ZLpMepkbH-bECefhbfUJaGjlJHhcSOa/view?usp=drivesdk"
            },
            {
                "name": "Raphael Oriana",
                "name_variant": "Raphael Oriana",
                "subtitle": "You may raise your head...",
                "line": 202,
                "start_time": "0-11-59.540000",
                "end_time": "0-12-02.880000",
                "url": "https://drive.google.com/file/d/1c-QWSkv41PHgKjvxMO5yrGuYQt5nhO7z/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "It is good to see you again, Your Majesty.",
                "line": 203,
                "start_time": "0-12-03.170000",
                "end_time": "0-12-05.210000",
                "url": "https://drive.google.com/file/d/1gawXuUmyCO2KQ9t2z8CR4FfDe3wg_WM9/view?usp=drivesdk"
            },
            {
                "name": "Raphael Oriana",
                "name_variant": "Raphael Oriana",
                "subtitle": "It is good to see you...",
                "line": 204,
                "start_time": "0-12-11.500000",
                "end_time": "0-12-15.080000",
                "url": "https://drive.google.com/file/d/1990RLpSacDgeumj-qa27cdERXDvx3Vr6/view?usp=drivesdk"
            },
            {
                "name": "Raphael Oriana",
                "name_variant": "Raphael Oriana",
                "subtitle": "Rose...",
                "line": 205,
                "start_time": "0-12-15.790000",
                "end_time": "0-12-18.080000",
                "url": "https://drive.google.com/file/d/1ozR6htaBHvIcx4yKCrBF0_Tn_SXOKOAn/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Father!",
                "line": 206,
                "start_time": "0-12-18.460000",
                "end_time": "0-12-19.670000",
                "url": "https://drive.google.com/file/d/1jwlDPsmkiz4oGl1NiwgKKnvpevDH9ZO0/view?usp=drivesdk"
            },
            {
                "name": "Civil Servants",
                "name_variant": "Civil Servants",
                "subtitle": "Princess Rose has gone mad!",
                "line": 207,
                "start_time": "0-12-38.380000",
                "end_time": "0-12-40.790000",
                "url": "https://drive.google.com/file/d/1BvOQw6AUDY-qbaLZ340jXfcBs3t6W1eZ/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "At the time, I thought I had made a rational decision.",
                "line": 208,
                "start_time": "0-12-47.130000",
                "end_time": "0-12-50.580000",
                "url": "https://drive.google.com/file/d/1Gj3g_0CWFXU2FWekq1redGmnu4Os6mHa/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "If I could have settled the matter then and there,",
                "line": 209,
                "start_time": "0-12-51.960000",
                "end_time": "0-12-54.250000",
                "url": "https://drive.google.com/file/d/1OGsP6VYPzibw2Z_ftRg8PiihG-q4mYyS/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "we could have treated it all as a domestic affair within the Oriana Kingdom.",
                "line": 210,
                "start_time": "0-12-54.250000",
                "end_time": "0-12-57.330000",
                "url": "https://drive.google.com/file/d/1btq3jMBlCck8RCvSDniBazqIuPUCoVQx/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "We could have stopped the problem from spreading to other nations,",
                "line": 211,
                "start_time": "0-12-58.170000",
                "end_time": "0-13-02.830000",
                "url": "https://drive.google.com/file/d/1kwQXJT80Xm8Q7uMt-qb-BJYCq2RI6vsl/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "like the Midgar Kingdom.",
                "line": 212,
                "start_time": "0-13-02.830000",
                "end_time": "0-13-04.580000",
                "url": "https://drive.google.com/file/d/19sQSxoHo1XTwlm89S1xxx6jJXYAaHGx_/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Turn yourself in before the Bushin Festival is over!",
                "line": 213,
                "start_time": "0-13-09.790000",
                "end_time": "0-13-12.040000",
                "url": "https://drive.google.com/file/d/1O0MOPOXtpO3VD8Esr1MJGgR9L7n36ATP/view?usp=drivesdk"
            },
            {
                "name": "Perv Asshat",
                "name_variant": "Perv Asshat",
                "subtitle": "Otherwise, I'll make your father kill one of the other guests of honor!",
                "line": 214,
                "start_time": "0-13-12.040000",
                "end_time": "0-13-15.790000",
                "url": "https://drive.google.com/file/d/1DqI440owwGYmEHZ0AQ1LRXMk5tYkOylA/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "But what I did was not a rational thing to do.",
                "line": 215,
                "start_time": "0-13-18.250000",
                "end_time": "0-13-20.540000",
                "url": "https://drive.google.com/file/d/1KY3q--Qm5kfHpSt9IYNEBusl811acYvt/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I was only acting on my anger and desperation.",
                "line": 216,
                "start_time": "0-13-21.540000",
                "end_time": "0-13-24.960000",
                "url": "https://drive.google.com/file/d/1Ev4PzQ1-CvAD16hWisSYu5T0UzHa4d29/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I wanted to protect them...",
                "line": 217,
                "start_time": "0-13-25.880000",
                "end_time": "0-13-27.250000",
                "url": "https://drive.google.com/file/d/1vmbVipiuXBwfZYwLGjJtcviBTDnzue4q/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "My one and only father, my one and only homeland.",
                "line": 218,
                "start_time": "0-13-27.630000",
                "end_time": "0-13-32.040000",
                "url": "https://drive.google.com/file/d/1o864JG3vg3IwxGUwrIIJOQZ9xDSoMInx/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Perv is just one of the Cult's disposable pawns.",
                "line": 219,
                "start_time": "0-13-32.540000",
                "end_time": "0-13-34.630000",
                "url": "https://drive.google.com/file/d/15orI5yWkOvBh0BIqIkVitbr8XzZS-rC-/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Killing him won't change anything.",
                "line": 220,
                "start_time": "0-13-35.290000",
                "end_time": "0-13-37.040000",
                "url": "https://drive.google.com/file/d/1sdyCxNdscb31rARjLSl2BDCsTXxVtEcv/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "The Cult's roots have already spread too deep within the Oriana Kingdom.",
                "line": 221,
                "start_time": "0-13-37.040000",
                "end_time": "0-13-40.130000",
                "url": "https://drive.google.com/file/d/1LkhYJwk4AuMaxnq3LAwlnEGUNBbborbe/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "If I do manage to get away, what then?",
                "line": 222,
                "start_time": "0-13-45.460000",
                "end_time": "0-13-47.290000",
                "url": "https://drive.google.com/file/d/1hT-GCn6s_M66OOaw_z5EXdmtqLu91jim/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I'm hurting the knights of my own kingdom, pointlessly making the problem worse.",
                "line": 223,
                "start_time": "0-13-47.830000",
                "end_time": "0-13-52.460000",
                "url": "https://drive.google.com/file/d/1eHRdpX3tdLvznmuBfadI0s_n-9-OXFq2/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "What good will that do?",
                "line": 224,
                "start_time": "0-13-52.790000",
                "end_time": "0-13-54.130000",
                "url": "https://drive.google.com/file/d/1s_B92a1j1kfWsBZ-YKU3A94OjKSEPNQI/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Maybe I should just turn myself in.",
                "line": 225,
                "start_time": "0-13-55.210000",
                "end_time": "0-13-57.710000",
                "url": "https://drive.google.com/file/d/1moxiNgbdYtAh8RVqBmA2dKQRYJNXxwSS/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Then we can at least avoid a war.",
                "line": 226,
                "start_time": "0-13-58.330000",
                "end_time": "0-14-01.210000",
                "url": "https://drive.google.com/file/d/1-dk8MhC8LABpZNjUqQfk0e3EHJF6tYXO/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "And Father...",
                "line": 227,
                "start_time": "0-14-01.630000",
                "end_time": "0-14-02.830000",
                "url": "https://drive.google.com/file/d/1WGZppTELbG1pAHr9jAhhhsBca1Dm97AA/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Would you keep believing in me, come what may?",
                "line": 228,
                "start_time": "0-14-08.710000",
                "end_time": "0-14-12.130000",
                "url": "https://drive.google.com/file/d/1VM8uWuJ8aEAAJMEtuRQB3spmeLjOvolb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Okay, I will.",
                "line": 229,
                "start_time": "0-14-12.460000",
                "end_time": "0-14-14.710000",
                "url": "https://drive.google.com/file/d/1e4Ng8PmQPTVZaRqIHmyqgVmPrkJMdme4/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Oh, Cid, surely you know what's happened by now.",
                "line": 230,
                "start_time": "0-14-16.540000",
                "end_time": "0-14-20.380000",
                "url": "https://drive.google.com/file/d/139eQROnpacKLbeQ2z4cgouZPiZuWvtmz/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Do you still believe in me?",
                "line": 231,
                "start_time": "0-14-21.170000",
                "end_time": "0-14-24.380000",
                "url": "https://drive.google.com/file/d/1KiH8f3nLrjiiNEgsaEJQKmbvZN7rDneO/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I wish I could eliminate Perv and his ilk, and get my father back.",
                "line": 232,
                "start_time": "0-14-26.580000",
                "end_time": "0-14-30.130000",
                "url": "https://drive.google.com/file/d/1D_Y-Zf6Vt5Kz6ek_pA53RCtfwje_BUZW/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Then I'd marry you and live happily ever after.",
                "line": 233,
                "start_time": "0-14-30.670000",
                "end_time": "0-14-32.380000",
                "url": "https://drive.google.com/file/d/1_4zkxmDw4zpfj77_rwPuyoB2tzAqEOQE/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "If only such fairy tale endings were real...",
                "line": 234,
                "start_time": "0-14-33.170000",
                "end_time": "0-14-35.580000",
                "url": "https://drive.google.com/file/d/1ch9t-b-Zhgg5kxAdLvI3xHhLi8k1Rgah/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "But in reality, I'm possessed.",
                "line": 235,
                "start_time": "0-14-40.670000",
                "end_time": "0-14-42.580000",
                "url": "https://drive.google.com/file/d/1un2MMF4CkNN9HXSCyUK36NZ2LwX5jV_3/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "None of my dreams were ever meant to come true.",
                "line": 236,
                "start_time": "0-14-43.170000",
                "end_time": "0-14-46.460000",
                "url": "https://drive.google.com/file/d/1jn73nWt6rRmWqq1CGjrN5-NpSbieiUmb/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "The \"Moonlight Sonata\"?",
                "line": 237,
                "start_time": "0-15-04",
                "end_time": "0-15-05.210000",
                "url": "https://drive.google.com/file/d/1nmgFBFY5FT5xl1L4L3iPLaqq4nCdq7ju/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "It's you...",
                "line": 238,
                "start_time": "0-15-51.670000",
                "end_time": "0-15-52.880000",
                "url": "https://drive.google.com/file/d/1cn_vMfzL7EpvnjwUmhyf1VA1Up_E8vtz/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Shadow!",
                "line": 239,
                "start_time": "0-15-54.380000",
                "end_time": "0-15-55.580000",
                "url": "https://drive.google.com/file/d/1UuCqF3jGcD9xWB8v209x-vXt0a7_8l1d/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I've heard the \"Moonlight Sonata\" many times,",
                "line": 240,
                "start_time": "0-16-25.670000",
                "end_time": "0-16-27.710000",
                "url": "https://drive.google.com/file/d/1HWb09_uS_lsSJx2_MILXc8rP1DW-K4nI/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "but that is without a doubt the best performance I've ever experienced.",
                "line": 241,
                "start_time": "0-16-27.710000",
                "end_time": "0-16-30.170000",
                "url": "https://drive.google.com/file/d/1Wg97cc701VFX76b2sNijpdn1SuJZGd70/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "What do you hope to accomplish?",
                "line": 242,
                "start_time": "0-16-31.170000",
                "end_time": "0-16-32.920000",
                "url": "https://drive.google.com/file/d/10GAn66H9GCSqs_1GmMzRH25sH0AHoVk3/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I wanted to protect them.",
                "line": 243,
                "start_time": "0-16-39.380000",
                "end_time": "0-16-41.830000",
                "url": "https://drive.google.com/file/d/15IB1HxccNPnO1Jn5DKG8D2bkJE5DcJhw/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "But I couldn't...",
                "line": 244,
                "start_time": "0-16-43.290000",
                "end_time": "0-16-44.500000",
                "url": "https://drive.google.com/file/d/1dhu7hil1AcRLYWsP5lAFk7lvXpaZWLOX/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I couldn't do anything.",
                "line": 245,
                "start_time": "0-16-44.830000",
                "end_time": "0-16-46.290000",
                "url": "https://drive.google.com/file/d/1q0Mz3SisxoKv50BD59frs4iwSgZnv9wV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "And you would let it end there?",
                "line": 246,
                "start_time": "0-16-46.710000",
                "end_time": "0-16-48.210000",
                "url": "https://drive.google.com/file/d/1Pa3RqVw4yMfLQnvyIo_LY-qCUwa0e211/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "You would put down your sword and stop fighting?",
                "line": 247,
                "start_time": "0-16-49.710000",
                "end_time": "0-16-52.500000",
                "url": "https://drive.google.com/file/d/1VZ7Rp-8WYykv3nnpRM0xn5baWmQAHgRq/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "It's not like I wanted it to end this way!",
                "line": 248,
                "start_time": "0-16-53.040000",
                "end_time": "0-16-55.630000",
                "url": "https://drive.google.com/file/d/1WVZaibsOqd3_HyYwM5pB-4l9z6RTPTnG/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I wanted to win the brightest future for everyone!",
                "line": 249,
                "start_time": "0-16-56.210000",
                "end_time": "0-16-58.330000",
                "url": "https://drive.google.com/file/d/1PiiyU03P3J75FAJAr5KKZ5b6OK4LwDlt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "If you have any desire to keep up the fight...",
                "line": 250,
                "start_time": "0-17-00.580000",
                "end_time": "0-17-03.290000",
                "url": "https://drive.google.com/file/d/123HJ4jfz1sfMUNk62ZRTxeGfah1bxP8-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I will give you power.",
                "line": 251,
                "start_time": "0-17-04.330000",
                "end_time": "0-17-05.960000",
                "url": "https://drive.google.com/file/d/1jauNZECByIC38MOwKmCYdJixeMcsKFAo/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "If I use that power...",
                "line": 252,
                "start_time": "0-17-08.920000",
                "end_time": "0-17-10.580000",
                "url": "https://drive.google.com/file/d/1TnGh62dpv_JWorm5M9YOV-MTvzfS5uOY/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "will I be able to change the future?",
                "line": 253,
                "start_time": "0-17-11.790000",
                "end_time": "0-17-13.750000",
                "url": "https://drive.google.com/file/d/1wC0j7gEyGPSBzTnCrvFDop3exOt1iNDO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "That depends on you.",
                "line": 254,
                "start_time": "0-17-14.500000",
                "end_time": "0-17-15.960000",
                "url": "https://drive.google.com/file/d/1Ew7tIgEC1iIiXwnckJtjt5bIsjM9fkgH/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I...",
                "line": 255,
                "start_time": "0-17-17.750000",
                "end_time": "0-17-18.960000",
                "url": "https://drive.google.com/file/d/1UFwBLXqv50RZamoL55tQA9QjAIkyeUNk/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I am the Princess of Oriana, and as such, there are things that I must do!",
                "line": 256,
                "start_time": "0-17-18.960000",
                "end_time": "0-17-22.500000",
                "url": "https://drive.google.com/file/d/1_jRCOHoAyPB7cQPvg26AurEkcJqbEybs/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "As Rose Oriana, there are hopes I want to keep alive!",
                "line": 257,
                "start_time": "0-17-22.500000",
                "end_time": "0-17-25.460000",
                "url": "https://drive.google.com/file/d/1tHxvYLemS5U4l94Lc57WuBFXkVR3_YjB/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I want the power to achieve that!",
                "line": 258,
                "start_time": "0-17-25.790000",
                "end_time": "0-17-27.830000",
                "url": "https://drive.google.com/file/d/1rTab777vXS7PtRefB_S1JPvxkN_-cSbA/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "What's happening?",
                "line": 259,
                "start_time": "0-17-30.460000",
                "end_time": "0-17-31.670000",
                "url": "https://drive.google.com/file/d/1tGYTcFr0SgXH6muodEhbD3IhdipS2K29/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Incredible...",
                "line": 260,
                "start_time": "0-17-36.960000",
                "end_time": "0-17-38.170000",
                "url": "https://drive.google.com/file/d/1DHWE6k9g6kdca6dO8_zDFev62o2xJiJB/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "This is Shadow's magic?",
                "line": 261,
                "start_time": "0-17-38.380000",
                "end_time": "0-17-40.210000",
                "url": "https://drive.google.com/file/d/18Lhz95Rl4kLdQ0MN5sAKqXNShBpR1x-H/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Rise up.",
                "line": 262,
                "start_time": "0-17-40.960000",
                "end_time": "0-17-42.210000",
                "url": "https://drive.google.com/file/d/1JFYcBrhMeqY4HAScHaNmqVIbNsgvV4vy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "And prove to me that you are willing to keep up the fight.",
                "line": 263,
                "start_time": "0-17-42.92000",
                "end_time": "0-17-46.500000",
                "url": "https://drive.google.com/file/d/1jqpXbyEwaS4QGUkCI5KCtd2omfbyK5M_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Never forget:",
                "line": 264,
                "start_time": "0-17-47.580000",
                "end_time": "0-17-48.790000",
                "url": "https://drive.google.com/file/d/1nkhSO5X6DJIbGwTu59jWv2uXA0VdS-Jc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "True strength lies not in one's power, but in one's way of being.",
                "line": 265,
                "start_time": "0-17-49",
                "end_time": "0-17-53.380000",
                "url": "https://drive.google.com/file/d/1yVOxadyeSATtpq6n5GirEsS3UoGhYvqW/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Those uniforms...",
                "line": 266,
                "start_time": "0-18-03.080000",
                "end_time": "0-18-04.500000",
                "url": "https://drive.google.com/file/d/1M697DqacjhvlURnImf5hx5v2JyfkCK7A/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "So you belong to the Cult of Diablos.",
                "line": 267,
                "start_time": "0-18-04.670000",
                "end_time": "0-18-06.630000",
                "url": "https://drive.google.com/file/d/1yAm5hs1_GVQ5HBZ-pSxy2TrCD3tOR1NU/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "The fact that you are appearing here, at this particular moment means...",
                "line": 268,
                "start_time": "0-18-09.330000",
                "end_time": "0-18-12.540000",
                "url": "https://drive.google.com/file/d/1AZtyfolGfnsUNvmXspa3eaYfIRJDcnJO/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Shadow...",
                "line": 269,
                "start_time": "0-18-20.130000",
                "end_time": "0-18-21.330000",
                "url": "https://drive.google.com/file/d/1dLPTN7VpY7o7B8JmKehPHv1J5vVY3pck/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "He is a ray of moonlight that pierces the darkness.",
                "line": 270,
                "start_time": "0-18-21.830000",
                "end_time": "0-18-24.500000",
                "url": "https://drive.google.com/file/d/1vNcQ0a8pYYiNaqm-zhoEvKSC74qID6UD/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "If I could have my wish, I, too...",
                "line": 271,
                "start_time": "0-18-25.290000",
                "end_time": "0-18-27.500000",
                "url": "https://drive.google.com/file/d/15A7B_bc4O6jQVIlsnSdKBgvX8kgOOTic/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "What was that enormous burst of magical energy?",
                "line": 272,
                "start_time": "0-18-30.330000",
                "end_time": "0-18-32.170000",
                "url": "https://drive.google.com/file/d/1vOinpHKcbeCPKRBl-b9WED6_v8KRM-iU/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Rose!",
                "line": 273,
                "start_time": "0-18-38.960000",
                "end_time": "0-18-40.170000",
                "url": "https://drive.google.com/file/d/1xAKowgkK5I_Andfcr28DVnaczxohD3DA/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Alexia...",
                "line": 274,
                "start_time": "0-18-41.330000",
                "end_time": "0-18-42.540000",
                "url": "https://drive.google.com/file/d/1HwbNEQDS0CvtW9NtL5CElBfdXuSjwddX/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Look at you!",
                "line": 275,
                "start_time": "0-18-42.960000",
                "end_time": "0-18-44.210000",
                "url": "https://drive.google.com/file/d/1jTDDlzAh-s6ZiRXD2wm1SlCL2R4cV26x/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "What was that burst of magic?",
                "line": 276,
                "start_time": "0-18-44.880000",
                "end_time": "0-18-46.380000",
                "url": "https://drive.google.com/file/d/1DXpmyfJQ9lNjuv_KqGDOe2taEGOFK-CM/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Rose?",
                "line": 277,
                "start_time": "0-18-47.040000",
                "end_time": "0-18-48.250000",
                "url": "https://drive.google.com/file/d/1rtkCzpO_zlQhJUqohwzu2m3n099-RhMT/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I have obtained power.",
                "line": 278,
                "start_time": "0-18-49",
                "end_time": "0-18-50.420000",
                "url": "https://drive.google.com/file/d/11OgwyexZC7ofgSyQmtinRFRCS-06ti-C/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I will follow the path I believe in.",
                "line": 279,
                "start_time": "0-18-51.210000",
                "end_time": "0-18-53.670000",
                "url": "https://drive.google.com/file/d/17nTSgAGaof8Wx6ZE7G9sJrkjo9TfFqRy/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Wait a minute!",
                "line": 280,
                "start_time": "0-18-53.670000",
                "end_time": "0-18-54.880000",
                "url": "https://drive.google.com/file/d/1o6EghibulMYruKZgLqRdT4G19i4Kq0jq/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "What are you talking about?",
                "line": 281,
                "start_time": "0-18-55.170000",
                "end_time": "0-18-56.420000",
                "url": "https://drive.google.com/file/d/14a4DMOC72Xn01tSC3GOPIu0t8ncPa0md/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Why did you stab your fiance?",
                "line": 282,
                "start_time": "0-18-56.420000",
                "end_time": "0-18-58.210000",
                "url": "https://drive.google.com/file/d/1Ikm7s2RUo2k1X3L1QkpWKH-6DR3kMFNs/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I'm sorry.",
                "line": 283,
                "start_time": "0-18-58.960000",
                "end_time": "0-19-00.170000",
                "url": "https://drive.google.com/file/d/1VsNMyVDTuVW3EMFWsk3M9JzG6bNn-AHb/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I don't want to drag you into this.",
                "line": 284,
                "start_time": "0-19-00.670000",
                "end_time": "0-19-02.250000",
                "url": "https://drive.google.com/file/d/1AsNZ0GdHOqlXxBDg0uUocvp65qEIqqRl/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "That doesn't tell me anything!",
                "line": 285,
                "start_time": "0-19-02.250000",
                "end_time": "0-19-04.040000",
                "url": "https://drive.google.com/file/d/1qf6J81wVZQIXxGEtTY4EjEY41u3fBcCz/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Answer the question!",
                "line": 286,
                "start_time": "0-19-04.040000",
                "end_time": "0-19-05.580000",
                "url": "https://drive.google.com/file/d/1bPx4sAb34qstEBgxWlafL6sbpif3R5Ee/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "If I tell you, you will get dragged into it.",
                "line": 287,
                "start_time": "0-19-08.960000",
                "end_time": "0-19-10.880000",
                "url": "https://drive.google.com/file/d/1Sq1LraTMTuhhnjxy69L450Qmc7J92DQW/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Back at the Sanctuary, we promised each other.",
                "line": 288,
                "start_time": "0-19-12.250000",
                "end_time": "0-19-15.130000",
                "url": "https://drive.google.com/file/d/1BhfcjiyNODwBVqv7OYL-4KWwT3lGCQbU/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "If we're never more than spectators, someday we'll lose everything we care about.",
                "line": 289,
                "start_time": "0-19-15.710000",
                "end_time": "0-19-19.960000",
                "url": "https://drive.google.com/file/d/15-02CqY1l_qTwOl5QspQ39qRUvsSJuqw/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "That's why we promised each other that we'd protect those things together.",
                "line": 290,
                "start_time": "0-19-20.380000",
                "end_time": "0-19-23.580000",
                "url": "https://drive.google.com/file/d/1d-rVrcPAeWIXrceSKUr4m_8C8SaLgDg5/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "So how can you talk to me like this?",
                "line": 291,
                "start_time": "0-19-23.960000",
                "end_time": "0-19-26.080000",
                "url": "https://drive.google.com/file/d/1VsCgcS744gARhPFx3I80tgKrCIj8dN6H/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Do you think I'm only good as a spectator, too?",
                "line": 292,
                "start_time": "0-19-26.080000",
                "end_time": "0-19-29.170000",
                "url": "https://drive.google.com/file/d/1-MbuCqxA885ZOONHRk7LBdU5j7NuQiCx/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I'm sorry.",
                "line": 293,
                "start_time": "0-19-30.630000",
                "end_time": "0-19-31.630000",
                "url": "https://drive.google.com/file/d/1xQUEHMEIWISifTgdlEfEXay8VQEqCTEx/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Answer me!",
                "line": 294,
                "start_time": "0-19-31.630000",
                "end_time": "0-19-32.920000",
                "url": "https://drive.google.com/file/d/1UOiVnW422BWrLIIWuMAkbYI9vcN2arb-/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "There's no turning back for me now.",
                "line": 295,
                "start_time": "0-19-33.210000",
                "end_time": "0-19-35.080000",
                "url": "https://drive.google.com/file/d/1hTh_LqpO9vx-OvvE4pR2a5enPHtQr7iS/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "And I envy you.",
                "line": 296,
                "start_time": "0-19-35.080000",
                "end_time": "0-19-36.880000",
                "url": "https://drive.google.com/file/d/16SW1_qbAymJ50OyIz9T_K-A8mLTtBrcA/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Why?",
                "line": 297,
                "start_time": "0-19-37.250000",
                "end_time": "0-19-38.460000",
                "url": "https://drive.google.com/file/d/1jjgHXPbYOovyEKMBfqtFrdSkQxnxgQWg/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I've lost a number of things already, and I'm going to lose more.",
                "line": 298,
                "start_time": "0-19-38.750000",
                "end_time": "0-19-42.920000",
                "url": "https://drive.google.com/file/d/1P0SY6ephlZoyVqkhdStVupRYAckWsMaN/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Everyone will reject me, denounce me as evil.",
                "line": 299,
                "start_time": "0-19-43.420000",
                "end_time": "0-19-46.920000",
                "url": "https://drive.google.com/file/d/1mNqCeuWqQADto_v7OXOUb7Yu3YyP_Tlw/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Yeah, so what?",
                "line": 300,
                "start_time": "0-19-47.460000",
                "end_time": "0-19-49.710000",
                "url": "https://drive.google.com/file/d/1LAuKd7oQYF_MF1wOE7kG_kX4NtkXRxB7/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I'm sorry.",
                "line": 301,
                "start_time": "0-19-50.460000",
                "end_time": "0-19-52",
                "url": "https://drive.google.com/file/d/1VbWbwnHLVm2tFcjyGKygoPooUYXMs-uL/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I have to go.",
                "line": 302,
                "start_time": "0-19-52",
                "end_time": "0-19-53.580000",
                "url": "https://drive.google.com/file/d/1Jo0vU3naVYY0fL8_ZYoVyq2i7gf1WXDV/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "All right, fine!",
                "line": 303,
                "start_time": "0-19-53.580000",
                "end_time": "0-19-54.580000",
                "url": "https://drive.google.com/file/d/1C0CQqjamIcWBlicQWDqAm-oKgTmPcaPN/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "If you won't give me the answers, I'll force them out of you!",
                "line": 304,
                "start_time": "0-19-54.580000",
                "end_time": "0-19-56.920000",
                "url": "https://drive.google.com/file/d/1-nFo8bACxXC7Cj3lTbx88yIDIAenWMRT/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I'm not just a spectator anymore!",
                "line": 305,
                "start_time": "0-20-06.040000",
                "end_time": "0-20-08.210000",
                "url": "https://drive.google.com/file/d/1dGPy3RDhQhpniUG6EVPYKbfYnkM_7pfO/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Alexia, when did you get to be this strong?",
                "line": 306,
                "start_time": "0-20-38.080000",
                "end_time": "0-20-41.880000",
                "url": "https://drive.google.com/file/d/1splW4KYvRgTxf1wqFgGHgEqCJuU_2jhf/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Miss Natsume...",
                "line": 307,
                "start_time": "0-20-43.670000",
                "end_time": "0-20-44.880000",
                "url": "https://drive.google.com/file/d/1_GYjIbcncSeJwIgJyzV27-aps2Gu-2Y5/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I'm sorry, I have to go.",
                "line": 308,
                "start_time": "0-20-45.420000",
                "end_time": "0-20-48.130000",
                "url": "https://drive.google.com/file/d/15PCmvmml-ZoBsiuikZmTwjQr7AKUnVKK/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "I won't try to stop you.",
                "line": 309,
                "start_time": "0-20-50.580000",
                "end_time": "0-20-51.920000",
                "url": "https://drive.google.com/file/d/1gwDhW6TR4IEgdRQwvKJGtIuz6q2JSXja/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "I don't have the right to stop you.",
                "line": 310,
                "start_time": "0-20-53.750000",
                "end_time": "0-20-56.670000",
                "url": "https://drive.google.com/file/d/1cz-NeBDX6xnQNvpBuj_yHvz9J7_y_CPm/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Miss Natsume?",
                "line": 311,
                "start_time": "0-20-57.130000",
                "end_time": "0-20-58.460000",
                "url": "https://drive.google.com/file/d/1_YLAe2KD7gTkfOScmIrNd_sfZhBXY4xa/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "But I am a little surprised.",
                "line": 312,
                "start_time": "0-20-59",
                "end_time": "0-21-00.830000",
                "url": "https://drive.google.com/file/d/1ULwR1XGk83nsMi1R6oOsUc3dAntnM8SR/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "I suppose even fools try in their own foolish way to find the best solutions.",
                "line": 313,
                "start_time": "0-21-01.290000",
                "end_time": "0-21-03.880000",
                "url": "https://drive.google.com/file/d/1BcGfSRZ25kdBD9AQ2KdBko9cx9BEMhbK/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "We each have different nationalities, different affiliations, different creeds,",
                "line": 314,
                "start_time": "0-21-04.420000",
                "end_time": "0-21-08.500000",
                "url": "https://drive.google.com/file/d/1cy8FyLZbYRjWXYQ41yw2PGPtxI_-WUSh/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "but maybe the ideals we strive for are the same.",
                "line": 315,
                "start_time": "0-21-08.500000",
                "end_time": "0-21-11.580000",
                "url": "https://drive.google.com/file/d/1M-DP3_uRqznTsplza7rF2M7cEege0BP2/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "It's possible that this alliance of ours wasn't such a bad idea after all.",
                "line": 316,
                "start_time": "0-21-12.290000",
                "end_time": "0-21-16.460000",
                "url": "https://drive.google.com/file/d/1wSepuufHuXaYk63s2vT0nzoU1PWtXicV/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "I wish you success.",
                "line": 317,
                "start_time": "0-21-17.210000",
                "end_time": "0-21-18.710000",
                "url": "https://drive.google.com/file/d/1oKx8YuleLjbYFBauZsKMiftlFnbIid43/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "I suspect our paths will cross again before too long.",
                "line": 318,
                "start_time": "0-21-19",
                "end_time": "0-21-22.880000",
                "url": "https://drive.google.com/file/d/11k_bKF5SguqF5tzE0u-XW_4AAICpWJcu/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "Is this what you've chosen, Lord Shadow?",
                "line": 319,
                "start_time": "0-21-31.250000",
                "end_time": "0-21-36.210000",
                "url": "https://drive.google.com/file/d/1lxq_x9AV0ul_7w4flw7S-WFLVEeytnu9/view?usp=drivesdk"
            },
            {
                "name": "Soldier",
                "name_variant": "Soldier",
                "subtitle": "Yes, it just disappeared.",
                "line": 320,
                "start_time": "0-21-40.420000",
                "end_time": "0-21-42.710000",
                "url": "https://drive.google.com/file/d/1ER6GndX3FIAZv7zlZQbTucA8duvoEZQq/view?usp=drivesdk"
            },
            {
                "name": "Soldier",
                "name_variant": "Soldier",
                "subtitle": "And in broad daylight? How strange.",
                "line": 321,
                "start_time": "0-21-42.830000",
                "end_time": "0-21-45.460000",
                "url": "https://drive.google.com/file/d/1T6Q4aE1rvK5EAyGzbMNRSvS4MnskXAUN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "A melody that echoes through the darkness...",
                "line": 322,
                "start_time": "0-21-46.630000",
                "end_time": "0-21-48.670000",
                "url": "https://drive.google.com/file/d/1Xq_67U7_8uq_p5Nn0Cr3GJYvWEVYUl2o/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The words that spring like a song from the mouth of the Eminence in Shadow...",
                "line": 323,
                "start_time": "0-21-48.920000",
                "end_time": "0-21-52.330000",
                "url": "https://drive.google.com/file/d/1gEhFVEDowlubMF9o0XvpRqQ3bgMlr8tQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yes, I think that went quite well.",
                "line": 324,
                "start_time": "0-21-52.670000",
                "end_time": "0-21-55.290000",
                "url": "https://drive.google.com/file/d/1_1hzi5-DWSMv-XGR2C4SV8oSAzUCe_c-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I always knew a piano was an excellent set piece.",
                "line": 325,
                "start_time": "0-21-55.790000",
                "end_time": "0-21-59.210000",
                "url": "https://drive.google.com/file/d/1xJ46Kfrmj_7K5WyxzSNRCPILOxWhosa6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I really wish I had my own so I didn't have to borrow one.",
                "line": 326,
                "start_time": "0-21-59.580000",
                "end_time": "0-22-02.580000",
                "url": "https://drive.google.com/file/d/1SbNG7cI4r0ZeVPZLp85V5zOVoyLX7CsO/view?usp=drivesdk"
            }
        ]
    }
}
let setDoc = db.collection('data').doc('an_s1_e17').set(data['s1']);

//let setDoc = db.collection('data').doc('ssc_p2_c3-4').set(data['p3']['c3-4']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
