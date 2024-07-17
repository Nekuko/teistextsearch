const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "s1": {
        "e10": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The school was half destroyed, so we started summer break early.",
                "line": 1,
                "start_time": "0-00-08.920000",
                "end_time": "0-00-12.710000",
                "url": "https://drive.google.com/file/d/1tBVq3Jelz0kKOkiE_nPFwaCoD7gFVNPn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Most of the students have gone back home, and it's quiet in the dorms.",
                "line": 2,
                "start_time": "0-00-13.880000",
                "end_time": "0-00-17.880000",
                "url": "https://drive.google.com/file/d/1hn9Qxpfd6YSQ_W6FYZh2K0d-jViM9py6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I don't have anything to do at home, so I decided to stay here.",
                "line": 3,
                "start_time": "0-00-19.080000",
                "end_time": "0-00-23.130000",
                "url": "https://drive.google.com/file/d/14qobv4-HwliGJOnC3UuvmasqqjQXW4GJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But it turns out, there's nothing to do here, either.",
                "line": 4,
                "start_time": "0-00-25.580000",
                "end_time": "0-00-28.540000",
                "url": "https://drive.google.com/file/d/1PAyyN0YU_LONgc9GuJYgBWbqJfFGueLW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Then I got a letter from Alpha.",
                "line": 5,
                "start_time": "0-00-34.500000",
                "end_time": "0-00-37.130000",
                "url": "https://drive.google.com/file/d/18IzBUdPWv1n_JiUNGRXOSzRmeuYBw5sw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So the time has come to settle old accounts.",
                "line": 6,
                "start_time": "0-00-43.540000",
                "end_time": "0-00-46.290000",
                "url": "https://drive.google.com/file/d/1Z1t3yOMFd_UtXv2nSUT64GDWcrYLelRF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It is the final resting place of ancient memories:",
                "line": 7,
                "start_time": "0-00-47.330000",
                "end_time": "0-00-52.170000",
                "url": "https://drive.google.com/file/d/1jbwvhI0TzSBV9vJoBUwecgbVwjHdbkiF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "the Sacred Land, Lindwurm.",
                "line": 8,
                "start_time": "0-00-55.540000",
                "end_time": "0-00-57.880000",
                "url": "https://drive.google.com/file/d/1nMllpfZBzpWKOlXWEZaJUpjPuyCPPFxd/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Boss...",
                "line": 9,
                "start_time": "0-02-45.080000",
                "end_time": "0-02-46.290000",
                "url": "https://drive.google.com/file/d/14spmJwNRYHFbAm-Wc62A0haLpAQAFPPp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Another day...",
                "line": 10,
                "start_time": "0-03-07.250000",
                "end_time": "0-03-08.790000",
                "url": "https://drive.google.com/file/d/11-3WeTV4DWhNtFQd-k9uTy1HcqwjgxBx/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "another beautiful me!",
                "line": 11,
                "start_time": "0-03-09.380000",
                "end_time": "0-03-10.750000",
                "url": "https://drive.google.com/file/d/1eDkCpt6Qba7MxfxKIcxAr-3aZQQL6q9X/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Perfection!",
                "line": 12,
                "start_time": "0-03-19.040000",
                "end_time": "0-03-20.250000",
                "url": "https://drive.google.com/file/d/1Et_4raqIRG_w-kKcwIanlWOHKiqz9a6u/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "When I met Lord Shadow,",
                "line": 13,
                "start_time": "0-03-20.750000",
                "end_time": "0-03-22.460000",
                "url": "https://drive.google.com/file/d/1tXwrXGDFbjZFS6XPrQUwO0JV5RcY5GDv/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I gained the power to fight against two fates.",
                "line": 14,
                "start_time": "0-03-22.460000",
                "end_time": "0-03-25.460000",
                "url": "https://drive.google.com/file/d/1UyOEcY0B3WdrmZlwSs4d5tRdu9OUggPF/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What is that?",
                "line": 15,
                "start_time": "0-03-29.750000",
                "end_time": "0-03-30.960000",
                "url": "https://drive.google.com/file/d/1s1eUApc8E_rVCzwIguo3cLrnXys_vpDc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "This is the power to change your fate.",
                "line": 16,
                "start_time": "0-03-31.080000",
                "end_time": "0-03-33.670000",
                "url": "https://drive.google.com/file/d/1qRpxvLSpUecFVO0erpYcsx38G1VJIYb5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "When you can change your form at will,",
                "line": 17,
                "start_time": "0-03-34.420000",
                "end_time": "0-03-36.710000",
                "url": "https://drive.google.com/file/d/1QEFVMzVVmU_0mh5_GIyXlErEKX-54LTR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "you can change a fate doomed to defeat into victory.",
                "line": 18,
                "start_time": "0-03-36.710000",
                "end_time": "0-03-41.460000",
                "url": "https://drive.google.com/file/d/1lcZADrGuSIcD88M3Pbga0VNfIG8B_EvU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Fate...",
                "line": 19,
                "start_time": "0-03-42.170000",
                "end_time": "0-03-43.380000",
                "url": "https://drive.google.com/file/d/11t53vx6owdrGvvZcMYgShxY2US4q6W2U/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Change your fate,",
                "line": 20,
                "start_time": "0-03-43.790000",
                "end_time": "0-03-45.420000",
                "url": "https://drive.google.com/file/d/1A6ZPlQzwx__9M2FiIqafIUvCgQWErDyQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "and take hold of the truth that lurks in the shadows of this world.",
                "line": 21,
                "start_time": "0-03-45.420000",
                "end_time": "0-03-50.290000",
                "url": "https://drive.google.com/file/d/1f5gpRl_SVNzBzTbpMp_qklxPdicp49x3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Take hold...",
                "line": 22,
                "start_time": "0-03-50.880000",
                "end_time": "0-03-52.080000",
                "url": "https://drive.google.com/file/d/1xPlDGbRUixpc8BtRq2jjcgoJsaeXMf_p/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "of the truth!",
                "line": 23,
                "start_time": "0-03-52.790000",
                "end_time": "0-03-54.250000",
                "url": "https://drive.google.com/file/d/1wOqQBwuvhfTce3BBTJ5ep2vtsQq2ZYol/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "My lord...",
                "line": 24,
                "start_time": "0-03-55.670000",
                "end_time": "0-03-56.880000",
                "url": "https://drive.google.com/file/d/1PnxjDlYfRb9IbJAOi3dBTRJjj9zpLiOh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I swear to you, I will claim victory...",
                "line": 25,
                "start_time": "0-03-57.380000",
                "end_time": "0-03-59.710000",
                "url": "https://drive.google.com/file/d/18Swt8TZbqW90mqLNQn-ZJeeNsFC-EG99/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "over nature!",
                "line": 26,
                "start_time": "0-04-00.710000",
                "end_time": "0-04-01.960000",
                "url": "https://drive.google.com/file/d/1TyDXj9Jab3W2jCE0AHUXYD0hwaRfEyM5/view?usp=drivesdk"
            },
            {
                "name": "Fictional Zenon",
                "name_variant": "Beta",
                "subtitle": "Crimson eyes that sparkle brighter than the moon in the heavens,",
                "line": 27,
                "start_time": "0-04-06.250000",
                "end_time": "0-04-09.460000",
                "url": "https://drive.google.com/file/d/1swBHKzrc_Wi-cof4hc0qzzm0-3TcHN6v/view?usp=drivesdk"
            },
            {
                "name": "Fictional Zenon",
                "name_variant": "Beta",
                "subtitle": "supple locks whose luster put the finest silk to shame...",
                "line": 28,
                "start_time": "0-04-09.460000",
                "end_time": "0-04-12.580000",
                "url": "https://drive.google.com/file/d/1SYL-vyKQ-41lFsZglfXbFM_uDzwCAp8I/view?usp=drivesdk"
            },
            {
                "name": "Fictional Zenon",
                "name_variant": "Beta",
                "subtitle": "The words that flow from his mouth cause even the demons to cower in fear.",
                "line": 29,
                "start_time": "0-04-12.580000",
                "end_time": "0-04-16.210000",
                "url": "https://drive.google.com/file/d/1WU08T_oQq5-S_Y6-OiZmn3EvoMQ8bm7j/view?usp=drivesdk"
            },
            {
                "name": "Fictional Zenon",
                "name_variant": "Beta",
                "subtitle": "A man clad in virile yet beautiful purest black.",
                "line": 30,
                "start_time": "0-04-16.210000",
                "end_time": "0-04-19.040000",
                "url": "https://drive.google.com/file/d/17TOe8KmPnCU45oQqErswNl9fV28QJpT2/view?usp=drivesdk"
            },
            {
                "name": "Fictional Zenon",
                "name_variant": "Beta",
                "subtitle": "I see.",
                "line": 31,
                "start_time": "0-04-19.830000",
                "end_time": "0-04-21.080000",
                "url": "https://drive.google.com/file/d/16eS1-rNfWLx66i9u_ad06q4w2h3CKACx/view?usp=drivesdk"
            },
            {
                "name": "Fictional Zenon",
                "name_variant": "Beta",
                "subtitle": "You, with your muscles finely sculpted into the golden ratio,",
                "line": 32,
                "start_time": "0-04-21.080000",
                "end_time": "0-04-23.130000",
                "url": "https://drive.google.com/file/d/1Ru32fnNpyWcD6EIK8ukv23W5WOAwnCuI/view?usp=drivesdk"
            },
            {
                "name": "Fictional Zenon",
                "name_variant": "Beta",
                "subtitle": "and your visage beautified into sublime perfection...",
                "line": 33,
                "start_time": "0-04-23.130000",
                "end_time": "0-04-25",
                "url": "https://drive.google.com/file/d/1lmEHMVKhgBXVnsGUY8ATX29GrZNT4eYg/view?usp=drivesdk"
            },
            {
                "name": "Fictional Zenon",
                "name_variant": "Beta",
                "subtitle": "You're the stray dog that's been snapping at the Cult as of late.",
                "line": 34,
                "start_time": "0-04-25",
                "end_time": "0-04-27.210000",
                "url": "https://drive.google.com/file/d/14yyu1fqoFaXHgZS7miDrERrDO23gpdcb/view?usp=drivesdk"
            },
            {
                "name": "Fictional Zenon",
                "name_variant": "Beta",
                "subtitle": "You would call Lord Shadow a stray dog?!",
                "line": 35,
                "start_time": "0-04-27.750000",
                "end_time": "0-04-30.080000",
                "url": "https://drive.google.com/file/d/1bGkR66vTNlOllH8Qiq59OeFn_BvQgjgv/view?usp=drivesdk"
            },
            {
                "name": "Fictional Shadow",
                "name_variant": "Beta",
                "subtitle": "My name is Shadow,",
                "line": 36,
                "start_time": "0-04-32.830000",
                "end_time": "0-04-34.250000",
                "url": "https://drive.google.com/file/d/1dzzTDvNYswekTD9ByCWMRP2VACSsoDWb/view?usp=drivesdk"
            },
            {
                "name": "Fictional Shadow",
                "name_variant": "Beta",
                "subtitle": "he who lurks in the shadows, hunts the shadows,",
                "line": 37,
                "start_time": "0-04-34.880000",
                "end_time": "0-04-37.080000",
                "url": "https://drive.google.com/file/d/1h2rwKQSbWGf8njBORexkVlYlcVHPPxOS/view?usp=drivesdk"
            },
            {
                "name": "Fictional Shadow",
                "name_variant": "Beta",
                "subtitle": "and will lead that charming young elf to her salvation.",
                "line": 38,
                "start_time": "0-04-37.080000",
                "end_time": "0-04-40.580000",
                "url": "https://drive.google.com/file/d/1aqdY8UzSkn8N0zJ7lHoR00zJl5N3OC9y/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Lord Shadow!",
                "line": 39,
                "start_time": "0-04-41.170000",
                "end_time": "0-04-42.540000",
                "url": "https://drive.google.com/file/d/1diU-T5eohMUsa7-06ziFVobNOYtQzRQX/view?usp=drivesdk"
            },
            {
                "name": "Fictional Zenon",
                "name_variant": "Beta",
                "subtitle": "I'm sorry to have kept you waiting, my charming young elf.",
                "line": 40,
                "start_time": "0-04-43.540000",
                "end_time": "0-04-47.170000",
                "url": "https://drive.google.com/file/d/1X6QCnzQuIm5zaj6CPUZwYPTIjIbKmwb4/view?usp=drivesdk"
            },
            {
                "name": "Fictional Zenon",
                "name_variant": "Beta",
                "subtitle": "Now that I'm here, I will...",
                "line": 41,
                "start_time": "0-04-47.630000",
                "end_time": "0-04-49.330000",
                "url": "https://drive.google.com/file/d/1wpcv2koLKqItNmlbufTipVVPqBHKaMYM/view?usp=drivesdk"
            },
            {
                "name": "Fictional Zenon",
                "name_variant": "Beta",
                "subtitle": "I will...",
                "line": 42,
                "start_time": "0-04-49.960000",
                "end_time": "0-04-51.420000",
                "url": "https://drive.google.com/file/d/1madXJiz1ifHWG4w55Y7eOdqbBUx_ZsKc/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "No good!",
                "line": 43,
                "start_time": "0-04-52.170000",
                "end_time": "0-04-53.380000",
                "url": "https://drive.google.com/file/d/1WwUUtPCFXaokHevfinZ5arCw9DexuXSN/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It's just a little too overly dramatic.",
                "line": 44,
                "start_time": "0-04-53.710000",
                "end_time": "0-04-56.210000",
                "url": "https://drive.google.com/file/d/1wjUXBKLsVGKFlvgkHbMddlzYYSip9a2a/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Is that any excuse to use such a shoddy character as a female lead?",
                "line": 45,
                "start_time": "0-05-00.540000",
                "end_time": "0-05-04.630000",
                "url": "https://drive.google.com/file/d/1DEIlyMBkruLMMjTYa2GfGg-U8-uuH3PR/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Maybe I should go outside and get some fresh air.",
                "line": 46,
                "start_time": "0-05-10",
                "end_time": "0-05-12.460000",
                "url": "https://drive.google.com/file/d/13nweoewu4QMxdW-yRxKhsWer5oaQYEyT/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Where did I leave my clothes?",
                "line": 47,
                "start_time": "0-05-18.540000",
                "end_time": "0-05-20.170000",
                "url": "https://drive.google.com/file/d/1bAup8Z8TodSVHJdjMwoqpgXke8KnxC7O/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Good morning, Beta.",
                "line": 48,
                "start_time": "0-05-30.960000",
                "end_time": "0-05-32.250000",
                "url": "https://drive.google.com/file/d/1RziAwI32mr6tdZAD0nuDm3Jtmc_lHPY8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Good morning, Epsilon.",
                "line": 49,
                "start_time": "0-05-32.960000",
                "end_time": "0-05-34.580000",
                "url": "https://drive.google.com/file/d/1yFKtuWKrK0xZtQ3pMkSMH_m6u3DZ6ZbD/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It might be my imagination...",
                "line": 50,
                "start_time": "0-05-40.130000",
                "end_time": "0-05-41.540000",
                "url": "https://drive.google.com/file/d/1HXtBAgls2zQ7WarPRzeihPlQQgUd_9K6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "but I feel as if Lord Shadow has been looking my way more frequently of late.",
                "line": 51,
                "start_time": "0-05-42.830000",
                "end_time": "0-05-46.420000",
                "url": "https://drive.google.com/file/d/1C2g4ZwsXn3LZT8ANYbQlCHVLlAt4ggzc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I have felt the intense passion of his gaze right here.",
                "line": 52,
                "start_time": "0-05-47.420000",
                "end_time": "0-05-52",
                "url": "https://drive.google.com/file/d/1kNAtWiTrptHadHRY8gW9pIDWepat_8N9/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That can't be right!",
                "line": 53,
                "start_time": "0-05-52.830000",
                "end_time": "0-05-54.460000",
                "url": "https://drive.google.com/file/d/1f4qpYCUbVuRGzJP4dDJrIata9mIhDXLn/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It must be some mistake!",
                "line": 54,
                "start_time": "0-05-54.460000",
                "end_time": "0-05-56",
                "url": "https://drive.google.com/file/d/17hoOMnklH4WNlLJZPjGF8QxRIEFlc6V9/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh, it's no mistake.",
                "line": 55,
                "start_time": "0-05-56",
                "end_time": "0-05-58",
                "url": "https://drive.google.com/file/d/1Q_HX4pzZbwv0ss8tLDBwH13a1OD9r9pr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Surely you've noticed it yourself, Beta.",
                "line": 56,
                "start_time": "0-05-58",
                "end_time": "0-05-59.790000",
                "url": "https://drive.google.com/file/d/1OhenvcGWPzyMlFH8-YldcSb6834Rt2kw/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You and I are much more aware of those sorts of glances, after all.",
                "line": 57,
                "start_time": "0-05-59.790000",
                "end_time": "0-06-04.380000",
                "url": "https://drive.google.com/file/d/1ziFFszwt4Hk7RpdZYTIFTwGdISOS58YL/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That's true...",
                "line": 58,
                "start_time": "0-06-05.380000",
                "end_time": "0-06-06.630000",
                "url": "https://drive.google.com/file/d/1RTb0UBOQ11Ibs1E36BxumRRzhVuZspjg/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But is right for me, insignificant little me,",
                "line": 59,
                "start_time": "0-06-06.630000",
                "end_time": "0-06-11",
                "url": "https://drive.google.com/file/d/1RnnV-zxo4E5unX_uMWm5S3W8S4MpDbif/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "to charm our eminent master so?",
                "line": 60,
                "start_time": "0-06-11",
                "end_time": "0-06-14.250000",
                "url": "https://drive.google.com/file/d/1hcaGgBDRRcb1wmF8VqLXyaGGxvVKnFdc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You've felt the lord's impassioned gaze yourself, haven't you, Beta?",
                "line": 61,
                "start_time": "0-06-14.830000",
                "end_time": "0-06-18.960000",
                "url": "https://drive.google.com/file/d/1e2f74Q3-EAMA1y0PRfVhc0z_Rp0ipPDc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "After all, your boobs are far larger than my meager bust.",
                "line": 62,
                "start_time": "0-06-18.960000",
                "end_time": "0-06-23.080000",
                "url": "https://drive.google.com/file/d/1rbU6l_FpmnpAxuydVjfMLAPEoSum2F5O/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "N-no, I...",
                "line": 63,
                "start_time": "0-06-23.080000",
                "end_time": "0-06-25.460000",
                "url": "https://drive.google.com/file/d/1WuQqIk2fjUTKhI2oW-Ho65wKqUeiNSDk/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What's this? Have you not felt his gaze?",
                "line": 64,
                "start_time": "0-06-25.460000",
                "end_time": "0-06-28.130000",
                "url": "https://drive.google.com/file/d/1R4jsgi1rSGn5FlWL0Fb7l1SukYQkCP-f/view?usp=drivesdk"
            },
            {
                "name": "Garden Members",
                "name_variant": "Garden Members",
                "subtitle": "How cute!",
                "line": 65,
                "start_time": "0-06-29.130000",
                "end_time": "0-06-30.330000",
                "url": "https://drive.google.com/file/d/1qm4c2P-fWkXsZYR__mNzpK5L8KnrndX1/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "What are you two doing, if I may ask?",
                "line": 66,
                "start_time": "0-06-30.500000",
                "end_time": "0-06-32.920000",
                "url": "https://drive.google.com/file/d/1_bsUwwiG05EnP_S1tsiL17B79ed5RzGd/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh, Nu! Good morning!",
                "line": 67,
                "start_time": "0-06-35.040000",
                "end_time": "0-06-36.830000",
                "url": "https://drive.google.com/file/d/1_50-fdyUoQB2Zx0esio1EyzW9XVc5_Qv/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Is something the matter?",
                "line": 68,
                "start_time": "0-06-37.130000",
                "end_time": "0-06-38.540000",
                "url": "https://drive.google.com/file/d/1nwbNHWMDBDGyfFBh1iOYcVoQ0y8p_OfK/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "We've received a directive from Lady Alpha.",
                "line": 69,
                "start_time": "0-06-41",
                "end_time": "0-06-43.040000",
                "url": "https://drive.google.com/file/d/14Z1ulPQBbzzXd-fuqSl3MuSCIWfePgi3/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "This is a very successful business, I see.",
                "line": 70,
                "start_time": "0-06-48.630000",
                "end_time": "0-06-50.540000",
                "url": "https://drive.google.com/file/d/1nbrkcgkXOdudfgY7CCGjq1xu7nsy7Kvp/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Everyone in the capital is talking about this place.",
                "line": 71,
                "start_time": "0-06-50.960000",
                "end_time": "0-06-53.210000",
                "url": "https://drive.google.com/file/d/1aqsZfMATFpQlJoxxMPsFWRsADokGPjeF/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "They have everything, and it's all the best quality.",
                "line": 72,
                "start_time": "0-06-53.380000",
                "end_time": "0-06-56.040000",
                "url": "https://drive.google.com/file/d/1GWFDPDSOjYpnJws9F2sIZp6wDTKTcet8/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I only came to help you shop for your trip.",
                "line": 73,
                "start_time": "0-06-58.580000",
                "end_time": "0-07-01.540000",
                "url": "https://drive.google.com/file/d/1IwrvkG8QabqrIw-EUmAw2Tqt9mVrTeT7/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "But I see, this is a fascinating place.",
                "line": 74,
                "start_time": "0-07-02.210000",
                "end_time": "0-07-04.750000",
                "url": "https://drive.google.com/file/d/10tZg0Ly7TPAH0kFTRNgLinn2ckBcFEiI/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Isn't it?",
                "line": 75,
                "start_time": "0-07-05",
                "end_time": "0-07-06.250000",
                "url": "https://drive.google.com/file/d/1y2dBCAT7n88NLyHgXdJK9yZm_mgE_3j2/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "And you really should be aware of the trends in the Royal Capital.",
                "line": 76,
                "start_time": "0-07-06.250000",
                "end_time": "0-07-09.130000",
                "url": "https://drive.google.com/file/d/1w06JtAQEGFkhubUYEsgeq5HwQvzbhcHW/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "You can follow the trends if you want, but don't forget why you're here.",
                "line": 77,
                "start_time": "0-07-09.130000",
                "end_time": "0-07-13.080000",
                "url": "https://drive.google.com/file/d/1Nf1JpgLqWFzPYmloEeivjtwaJDi7jqRt/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "You are heading off to the Sacred Land as a special guest for the Goddess's Trial.",
                "line": 78,
                "start_time": "0-07-13.790000",
                "end_time": "0-07-18.380000",
                "url": "https://drive.google.com/file/d/1wn2ohRlg4F9Ap0EiTqZ8PrZmH0TOv_sn/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I know, I know.",
                "line": 79,
                "start_time": "0-07-18.790000",
                "end_time": "0-07-20.170000",
                "url": "https://drive.google.com/file/d/1BCXixgIOUe0YE-A5SDZABk9gFPEkdFmS/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "But it's normal for the special guests to chat with the archbishop, remember?",
                "line": 80,
                "start_time": "0-07-20.880000",
                "end_time": "0-07-24.670000",
                "url": "https://drive.google.com/file/d/1jGHllsJu3P_agUVI3qgcj3mu99_x_vEe/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I can use that opportunity to look into the dark rumors about corruption and missing orphans.",
                "line": 81,
                "start_time": "0-07-25.040000",
                "end_time": "0-07-30.500000",
                "url": "https://drive.google.com/file/d/1OfElRJxE66eD0ZQ0H7HptlEI1nNz4vsf/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "And since I'm just a helpless little princess, no one will suspect a thing.",
                "line": 82,
                "start_time": "0-07-30.880000",
                "end_time": "0-07-33.960000",
                "url": "https://drive.google.com/file/d/1--IIxVlHuk4GOV_2HxLB3qB_jAIP7bjf/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "It's true that people are less guarded around you than around me.",
                "line": 83,
                "start_time": "0-07-34.380000",
                "end_time": "0-07-37.540000",
                "url": "https://drive.google.com/file/d/1gr_gAts64sTLx_KRelvEa58HoFVvH78o/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Maybe I shouldn't have told you about the investigation after all.",
                "line": 84,
                "start_time": "0-07-38.500000",
                "end_time": "0-07-42.080000",
                "url": "https://drive.google.com/file/d/1yPNc03R5No8juFIwe8gdnvXdggfaUnR5/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "Excuse me.",
                "line": 85,
                "start_time": "0-07-44",
                "end_time": "0-07-45.210000",
                "url": "https://drive.google.com/file/d/1auIAhki95TlBlh8MFLQZaOCzfOCJPrp8/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "I'm terribly sorry I didn't pay my respects sooner.",
                "line": 86,
                "start_time": "0-07-45.710000",
                "end_time": "0-07-48.500000",
                "url": "https://drive.google.com/file/d/1k_YTlgocWK4E0cepbzy0lilw9txv0jOR/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "I am the president of this humble establishment.",
                "line": 87,
                "start_time": "0-07-48.880000",
                "end_time": "0-07-51.920000",
                "url": "https://drive.google.com/file/d/1vU04-LTsM3d975lfPKPnWA_hQvdEq9Wj/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "My name is Luna.",
                "line": 88,
                "start_time": "0-07-51.920000",
                "end_time": "0-07-53.330000",
                "url": "https://drive.google.com/file/d/17tOq-2FDbyBHUY78_1_aq3IFp7IWRfZ-/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "It's delicious!",
                "line": 89,
                "start_time": "0-07-58.880000",
                "end_time": "0-08-00.210000",
                "url": "https://drive.google.com/file/d/1V1kUSaF6nH39ZU9KscZu39x3Ih9_KpTU/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "The citrus one is good, too.",
                "line": 90,
                "start_time": "0-08-00.210000",
                "end_time": "0-08-02.040000",
                "url": "https://drive.google.com/file/d/15_wenP3nGi5vhrPA5MbjZ_qfnPTQfk07/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "It is an unusual flavor.",
                "line": 91,
                "start_time": "0-08-02.670000",
                "end_time": "0-08-04.420000",
                "url": "https://drive.google.com/file/d/1xyNLaJTQsT0o_Sk0YUBlhTbmnQxNMsYr/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I'll take some.",
                "line": 92,
                "start_time": "0-08-04.750000",
                "end_time": "0-08-05.920000",
                "url": "https://drive.google.com/file/d/1Sf_d417d7C_4XH06jBmU2hqAI2I82fv3/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Send them to my dorm, please.",
                "line": 93,
                "start_time": "0-08-05.920000",
                "end_time": "0-08-07.500000",
                "url": "https://drive.google.com/file/d/1NUl4p140GkP4vGtZs2Q3T-FzF1UDK7AH/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "Thank you for your continued patronage.",
                "line": 94,
                "start_time": "0-08-07.830000",
                "end_time": "0-08-11.040000",
                "url": "https://drive.google.com/file/d/1baA26PE3oBv5KnYP0IsVzhwx8bfyIelC/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "If you have any more new products, choose some for me.",
                "line": 95,
                "start_time": "0-08-11.420000",
                "end_time": "0-08-14",
                "url": "https://drive.google.com/file/d/1xMT_A5YIMlUE1ioSV4b-YZ5K4Jo6oCGb/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "Of course, Your Highness.",
                "line": 96,
                "start_time": "0-08-14",
                "end_time": "0-08-15.670000",
                "url": "https://drive.google.com/file/d/15XTLZbLdAqs3NxTgzUlg-2ykzWIGgpKd/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Alexia...",
                "line": 97,
                "start_time": "0-08-15.670000",
                "end_time": "0-08-16.880000",
                "url": "https://drive.google.com/file/d/1Ermnrw3YXFZIfYhPtIuQiNXZ6UdH0UfA/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "We came here to prepare for your trip.",
                "line": 98,
                "start_time": "0-08-17.130000",
                "end_time": "0-08-19.460000",
                "url": "https://drive.google.com/file/d/1M2ndAVcYixFFOBzck0u2_Zyrm2oiVuLr/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I know, I know.",
                "line": 99,
                "start_time": "0-08-19.460000",
                "end_time": "0-08-20.750000",
                "url": "https://drive.google.com/file/d/1cmzPKcPOlP8X5GKpy0uKEcUQBMWIBiDE/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "You'll be traveling?",
                "line": 100,
                "start_time": "0-08-21.290000",
                "end_time": "0-08-23.330000",
                "url": "https://drive.google.com/file/d/1g4sJjPAe5B15Bfm4_JrhPVNBkj7Fth9V/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "To the Sacred Land.",
                "line": 101,
                "start_time": "0-08-23.330000",
                "end_time": "0-08-24.670000",
                "url": "https://drive.google.com/file/d/1uOE-ce-WIYRRQ5zRdx6NazG3gbMhHESH/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "My, my, my.",
                "line": 102,
                "start_time": "0-08-24.670000",
                "end_time": "0-08-26.380000",
                "url": "https://drive.google.com/file/d/1qIXHpuHTvaYnZbtRaXfajFHxUlBfItGr/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "Then allow me to select some items that you may need.",
                "line": 103,
                "start_time": "0-08-26.830000",
                "end_time": "0-08-29.830000",
                "url": "https://drive.google.com/file/d/16otKbkbOe8cBAqQW01iRT0jHcxzN7k7o/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Thank you.",
                "line": 104,
                "start_time": "0-08-30.170000",
                "end_time": "0-08-31.380000",
                "url": "https://drive.google.com/file/d/1Hgs5-oPkogMaxL3K4Sml66LLbSLTnTC6/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "And, I won't be needing it for my trip,",
                "line": 105,
                "start_time": "0-08-33.580000",
                "end_time": "0-08-36.130000",
                "url": "https://drive.google.com/file/d/1oAYUYbwnYw6z996mT7SIx5h8ztv_fTWV/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "but can I ask you to show me some articles of clothing that you would recommend?",
                "line": 106,
                "start_time": "0-08-36.130000",
                "end_time": "0-08-39.250000",
                "url": "https://drive.google.com/file/d/17PT_16Y50aJ2Lx2QLkewPCdrsvzUFpKN/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "If you're looking for party dresses, we already ordered you several.",
                "line": 107,
                "start_time": "0-08-39.500000",
                "end_time": "0-08-43.330000",
                "url": "https://drive.google.com/file/d/1ValQipe0JPtoJnLJEVsOsz_CCt1F89S3/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Oh, nothing like that.",
                "line": 108,
                "start_time": "0-08-43.330000",
                "end_time": "0-08-45.170000",
                "url": "https://drive.google.com/file/d/1-FkntMqOv-nM9oEIC454fJ8udipQNUeG/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I want something more for, you know, everyday wear,",
                "line": 109,
                "start_time": "0-08-45.170000",
                "end_time": "0-08-47.920000",
                "url": "https://drive.google.com/file/d/1ZABDck6LZq4S9B6kaxrfUU4dAFBNjV8-/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "more casual.",
                "line": 110,
                "start_time": "0-08-47.920000",
                "end_time": "0-08-49.290000",
                "url": "https://drive.google.com/file/d/10qQy6tLl6idCtM9IFz0QeuaKIsSDA4S9/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "As a gift for a friend?",
                "line": 111,
                "start_time": "0-08-49.670000",
                "end_time": "0-08-51.630000",
                "url": "https://drive.google.com/file/d/118Mf26R0FI1pLfQ8Nw-nwvr46ZEIq59x/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Um, not exactly a gift...",
                "line": 112,
                "start_time": "0-08-52.080000",
                "end_time": "0-08-53.790000",
                "url": "https://drive.google.com/file/d/1l2iLjOM3r82tSYdhc4QWzaw8dt8Gpm3a/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "But it's not exactly for me, either...",
                "line": 113,
                "start_time": "0-08-53.790000",
                "end_time": "0-08-58.630000",
                "url": "https://drive.google.com/file/d/1kJYovYQ0DhtDC3nHqupzA7g9AqTAOihi/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "Then may I suggest something along these lines?",
                "line": 114,
                "start_time": "0-09-00.040000",
                "end_time": "0-09-02.670000",
                "url": "https://drive.google.com/file/d/1DgMtVA36XzImJe3ZhP3UMVVwBFnGSXEE/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Th-th-those...",
                "line": 115,
                "start_time": "0-09-11.290000",
                "end_time": "0-09-13.460000",
                "url": "https://drive.google.com/file/d/1S4CmdvWR6hIF3UXT9l0XhSrtXMllP24O/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Those are...",
                "line": 116,
                "start_time": "0-09-13.460000",
                "end_time": "0-09-14.500000",
                "url": "https://drive.google.com/file/d/1s4_dtPnM-_X9_LsRUDVHFesTuSA5caAL/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "Women's undergarments.",
                "line": 117,
                "start_time": "0-09-14.500000",
                "end_time": "0-09-16.040000",
                "url": "https://drive.google.com/file/d/1jRrl_4GjUQY9i_1l8gTg8LyOy8DoUCBf/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "They're called thongs.",
                "line": 118,
                "start_time": "0-09-16.040000",
                "end_time": "0-09-17.960000",
                "url": "https://drive.google.com/file/d/1T2YkqKP7_kBTgM0Bl1HOb-Z63GgGulNW/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "\"Th-thongs\"?",
                "line": 119,
                "start_time": "0-09-17.960000",
                "end_time": "0-09-19.880000",
                "url": "https://drive.google.com/file/d/1C5O5tth28UBmSPyFYUMBo7IDb8CHavq5/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Um, I feel there's not enough fabric coverage,",
                "line": 120,
                "start_time": "0-09-21.080000",
                "end_time": "0-09-24.080000",
                "url": "https://drive.google.com/file/d/1kkfv_R3bqO_WvbjTVDqLbRvbzbDmHCoH/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "and I can see through some of it!",
                "line": 121,
                "start_time": "0-09-24.080000",
                "end_time": "0-09-26.460000",
                "url": "https://drive.google.com/file/d/1vCazad9E37bJAk8bj0JAV1aAmIFpHGs2/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "I understand that this is very pleasing to the menfolk.",
                "line": 122,
                "start_time": "0-09-26.710000",
                "end_time": "0-09-29.920000",
                "url": "https://drive.google.com/file/d/1ZMvHXquvLVzAioHd8nL9jhVp_kGXFvN8/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Menfolk?!",
                "line": 123,
                "start_time": "0-09-29.920000",
                "end_time": "0-09-31.130000",
                "url": "https://drive.google.com/file/d/1qYnQ2Xp1F-ARxkvj1Wxnl2BKe49QlL3b/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Alexia, don't tell me you...",
                "line": 124,
                "start_time": "0-09-31.130000",
                "end_time": "0-09-33.420000",
                "url": "https://drive.google.com/file/d/1Ri5KIT6800kSaN4w-_sKxUQRS-0fC7JV/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Iris...",
                "line": 125,
                "start_time": "0-09-34.250000",
                "end_time": "0-09-35.460000",
                "url": "https://drive.google.com/file/d/1NEYcsENR7b1KqHB8TnUs95JSGOgUyqTI/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I...",
                "line": 126,
                "start_time": "0-09-36.290000",
                "end_time": "0-09-37.500000",
                "url": "https://drive.google.com/file/d/1lCRWuKJm0duLwicj3EJXwAB1Yp5gTbvB/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I am confident that I have finely shaped buttocks.",
                "line": 127,
                "start_time": "0-09-38.040000",
                "end_time": "0-09-40.460000",
                "url": "https://drive.google.com/file/d/19eDclMOcnAEJzq2tVRe5Ps6JtJDB9rbk/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "That is not the issue!",
                "line": 128,
                "start_time": "0-09-40.460000",
                "end_time": "0-09-42.290000",
                "url": "https://drive.google.com/file/d/1GUQFrTxbUAkaaRMbayzDIhvY2be5gp7y/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Unhand those panties!",
                "line": 129,
                "start_time": "0-09-42.290000",
                "end_time": "0-09-43.880000",
                "url": "https://drive.google.com/file/d/1VP5WREGCpFjQQ2WS8tSomU7TxaaK1nlq/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Iris, I...",
                "line": 130,
                "start_time": "0-09-46.420000",
                "end_time": "0-09-47.830000",
                "url": "https://drive.google.com/file/d/1hKvz_sKy1OwkDIsZehISTCDpmBwWeQ9i/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I am confident that I have finely shaped-",
                "line": 131,
                "start_time": "0-09-47.880000",
                "end_time": "0-09-49.170000",
                "url": "https://drive.google.com/file/d/1stq13E7G-7awRnWLZtQluCkeQ7OzuVt6/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "You already said that!",
                "line": 132,
                "start_time": "0-09-49.170000",
                "end_time": "0-09-50.540000",
                "url": "https://drive.google.com/file/d/1wYoTnZ9HqBBCLXnrh-6ytXoDSI9SzMW9/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "You may try them on if you like.",
                "line": 133,
                "start_time": "0-09-50.540000",
                "end_time": "0-09-52.920000",
                "url": "https://drive.google.com/file/d/19gcrKe39rV9fX15rpPeNbNNC2HZW7TnS/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I'd love to.",
                "line": 134,
                "start_time": "0-09-53.210000",
                "end_time": "0-09-54.420000",
                "url": "https://drive.google.com/file/d/1a5uxZhC2hvLCaLqlheyw2XGRVsrQ55ru/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "You will not!",
                "line": 135,
                "start_time": "0-09-54.790000",
                "end_time": "0-09-56",
                "url": "https://drive.google.com/file/d/18BLieKWeKcIriGl7HqeYOxB4Azo06lO-/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "You're plotting to put them on, then take advantage of the confusion to buy them!",
                "line": 136,
                "start_time": "0-09-56",
                "end_time": "0-09-59.380000",
                "url": "https://drive.google.com/file/d/1O4rEO03JNOCTbSjTTcnov7Y2TbPJFdqn/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "Princess Iris,",
                "line": 137,
                "start_time": "0-10-00.210000",
                "end_time": "0-10-01.500000",
                "url": "https://drive.google.com/file/d/1u9AQoChw6qiIQ46grst6mei6UKlLcNsu/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "I believe you've been given the wrong impression.",
                "line": 138,
                "start_time": "0-10-01.500000",
                "end_time": "0-10-03.790000",
                "url": "https://drive.google.com/file/d/1__J3Fb0txZJCFZ7No56NZa2m5KE-uNKM/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "A thong is an undergarment that was made for women.",
                "line": 139,
                "start_time": "0-10-03.790000",
                "end_time": "0-10-06.460000",
                "url": "https://drive.google.com/file/d/18tmByH9SY1y_pURqN-69ck6GcuNwRQKH/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "That's not what you said a minute ago!",
                "line": 140,
                "start_time": "0-10-06.460000",
                "end_time": "0-10-09.040000",
                "url": "https://drive.google.com/file/d/1l937KcY4vrUawgh6_Pcw2ClHxB5ECLiJ/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "I happen to be wearing one right now.",
                "line": 141,
                "start_time": "0-10-09.040000",
                "end_time": "0-10-11.580000",
                "url": "https://drive.google.com/file/d/1WXrVnst6W-f5gsuN4RFvVmm6JI3tIV8m/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "Take a look.",
                "line": 142,
                "start_time": "0-10-11.580000",
                "end_time": "0-10-12.920000",
                "url": "https://drive.google.com/file/d/1jAp3FaCTHQR4R8v--uB5kLMiWM1jyvI-/view?usp=drivesdk"
            },
            {
                "name": "Luna",
                "name_variant": "Gamma",
                "subtitle": "As you can see, even under a dress of such thin fabric, there's no panty-line visible.",
                "line": 143,
                "start_time": "0-10-12.920000",
                "end_time": "0-10-17",
                "url": "https://drive.google.com/file/d/1lP5rZp7X6BGSMWQB4WX_iGl3_eWSQIVH/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "That's amazing!",
                "line": 144,
                "start_time": "0-10-17",
                "end_time": "0-10-18.210000",
                "url": "https://drive.google.com/file/d/1xazwALi81whfiY9Rv44t7mBNidVUBcPq/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Iris, you have to see this!",
                "line": 145,
                "start_time": "0-10-18.210000",
                "end_time": "0-10-19.420000",
                "url": "https://drive.google.com/file/d/1_SpgWRXzhBMyz1KuY1ipm4lwuilN2yqs/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "No, thank you!",
                "line": 146,
                "start_time": "0-10-19.420000",
                "end_time": "0-10-20.630000",
                "url": "https://drive.google.com/file/d/1urMF3RbyPB5x_vVocE_y2GHeoXvqBDF5/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I'll just step into the dressing room.",
                "line": 147,
                "start_time": "0-10-20.630000",
                "end_time": "0-10-21.880000",
                "url": "https://drive.google.com/file/d/1bkHkQ9MnZZaxeymht8hwSPsT9jonc420/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Alexia?!",
                "line": 148,
                "start_time": "0-10-21.880000",
                "end_time": "0-10-23.080000",
                "url": "https://drive.google.com/file/d/1BmAkmYdnM5CQR_HfU_LHxFqvWj-DLW3C/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Hold it right there, Alexia!",
                "line": 149,
                "start_time": "0-10-23.080000",
                "end_time": "0-10-24.580000",
                "url": "https://drive.google.com/file/d/1O1mYdq23poV8F2Lv8mFmdOmSRIMdk1CI/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Now, see here!",
                "line": 150,
                "start_time": "0-10-25.040000",
                "end_time": "0-10-25.880000",
                "url": "https://drive.google.com/file/d/1h2RdrDBudWusSxxW0YSAkKCVGOspLeg8/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "You need to take off your shoes, and fold your clothes...",
                "line": 151,
                "start_time": "0-10-25.880000",
                "end_time": "0-10-27.880000",
                "url": "https://drive.google.com/file/d/11SuF0hyaZRIx4dxDlReYoGN6faDz0rrJ/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "So nice to the touch.",
                "line": 152,
                "start_time": "0-10-27.880000",
                "end_time": "0-10-29.130000",
                "url": "https://drive.google.com/file/d/1nDI-uGm6lOHX19ByAMZzFpzr_vCpkcdj/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Now how does it feel to wear it?",
                "line": 153,
                "start_time": "0-10-29.130000",
                "end_time": "0-10-30.670000",
                "url": "https://drive.google.com/file/d/1cKEE0UaKvyIhPaEkG8Jq01_5FtfqRhTY/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Alexia!",
                "line": 154,
                "start_time": "0-10-32",
                "end_time": "0-10-33.210000",
                "url": "https://drive.google.com/file/d/1VV4vAC_mRqtxz-LWtkf8JsiSA8w3Pcg_/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Those undergarments are completely see-through!",
                "line": 155,
                "start_time": "0-10-33.210000",
                "end_time": "0-10-35.790000",
                "url": "https://drive.google.com/file/d/1dfjELTZQAxHV4zmqworYAw1iiazgSDXN/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "They cover just barely enough.",
                "line": 156,
                "start_time": "0-10-35.790000",
                "end_time": "0-10-37.040000",
                "url": "https://drive.google.com/file/d/1zrYv76Ofo46Vkkro39bODvq0_4x87mUH/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "That is not enough!",
                "line": 157,
                "start_time": "0-10-37.040000",
                "end_time": "0-10-38.460000",
                "url": "https://drive.google.com/file/d/1eXzVJT9tKK9lQGzpkaUcNEIWWwoaLKrQ/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "It is clearly revealing your...",
                "line": 158,
                "start_time": "0-10-38.460000",
                "end_time": "0-10-40.460000",
                "url": "https://drive.google.com/file/d/1HdD_pgh7nEZkb7yqYWXwWyxjWXJa18Vi/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Anyway, no! You can't have them!",
                "line": 159,
                "start_time": "0-10-40.670000",
                "end_time": "0-10-42.790000",
                "url": "https://drive.google.com/file/d/1J7jFOcRnPgJmR4sgWPgPXakCrlQtakRI/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I won't allow it!",
                "line": 160,
                "start_time": "0-10-42.790000",
                "end_time": "0-10-44",
                "url": "https://drive.google.com/file/d/1GtC9xi02gvywtOM75xcUBHE8FSR1pJ9a/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "And you won't change your mind?",
                "line": 161,
                "start_time": "0-10-44",
                "end_time": "0-10-45.460000",
                "url": "https://drive.google.com/file/d/1AUPfPGy9vmY58azMnVVp09F2CNhpzka2/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I will not change my mind!",
                "line": 162,
                "start_time": "0-10-45.460000",
                "end_time": "0-10-47.170000",
                "url": "https://drive.google.com/file/d/18IuZVqDXqjlXBO5BYA_vo4lr2mYi3oLH/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I see.",
                "line": 163,
                "start_time": "0-10-47.630000",
                "end_time": "0-10-48.830000",
                "url": "https://drive.google.com/file/d/1NZ_Zu7-q0cxbvocstCVa33Wy_I2h2dld/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "But, Iris...",
                "line": 164,
                "start_time": "0-10-49.250000",
                "end_time": "0-10-50.460000",
                "url": "https://drive.google.com/file/d/14s_gvVFWGNnHhsqZkFrt4nOB9yLZkAuU/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Alexia?",
                "line": 165,
                "start_time": "0-10-52.040000",
                "end_time": "0-10-54.290000",
                "url": "https://drive.google.com/file/d/1R9v0TibEdNXNublllOYX2QdRLKfjBDwy/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Iris...",
                "line": 166,
                "start_time": "0-10-54.750000",
                "end_time": "0-10-55.960000",
                "url": "https://drive.google.com/file/d/1y-h-IpzzrFXfE-r8HBgmKVXP6ctjQcE5/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I refuse to be swayed any longer by words I don't need to hear.",
                "line": 167,
                "start_time": "0-10-56.040000",
                "end_time": "0-10-59.170000",
                "url": "https://drive.google.com/file/d/1J4lwyq9_THZcaflkFHuDmOaMInuECQkZ/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I want to value the words of those who will acknowledge me",
                "line": 168,
                "start_time": "0-10-59.670000",
                "end_time": "0-11-03.210000",
                "url": "https://drive.google.com/file/d/1hH83zGxH37osy9KoipWYJsC9SkbmlgcI/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "despite my worthless insignificance.",
                "line": 169,
                "start_time": "0-11-03.210000",
                "end_time": "0-11-04.750000",
                "url": "https://drive.google.com/file/d/1ids79WlO4R7DPkoD89Yn6r0N1wrrG7K5/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "But that's...",
                "line": 170,
                "start_time": "0-11-05",
                "end_time": "0-11-07.250000",
                "url": "https://drive.google.com/file/d/1WwfNyxgk3vAGKrxsohPcQGHX4cMeQu8C/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "If you refuse to allow me a thong, Iris, then I will yield.",
                "line": 171,
                "start_time": "0-11-07.540000",
                "end_time": "0-11-11.330000",
                "url": "https://drive.google.com/file/d/18k9ojxgKlDcALhVfkOpcmWcH4iUF3FxZ/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I very much want to wear a thong to win him...",
                "line": 172,
                "start_time": "0-11-11.670000",
                "end_time": "0-11-14.170000",
                "url": "https://drive.google.com/file/d/11-JHwY3uG7TfBMbyrAgEH6Wh0RPUrpNb/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I mean, I have a strong personal desire to wear a thong, but I will yield.",
                "line": 173,
                "start_time": "0-11-14.380000",
                "end_time": "0-11-19.040000",
                "url": "https://drive.google.com/file/d/1J2mJPM8KP7bMuV9uTlxRbzLQu1E9S9ts/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "So please answer me this, Iris.",
                "line": 174,
                "start_time": "0-11-19.250000",
                "end_time": "0-11-21.130000",
                "url": "https://drive.google.com/file/d/1whNReWkTYU8eW8jJqxGCfsj6RJHKsjuJ/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Do thongs really deserve your absolute and unwavering rejection?",
                "line": 175,
                "start_time": "0-11-21.670000",
                "end_time": "0-11-25.920000",
                "url": "https://drive.google.com/file/d/1iqoL1LRYvvZJl0Xm6IB41RHLHk2AxZmf/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Iris?",
                "line": 176,
                "start_time": "0-11-27.630000",
                "end_time": "0-11-28.830000",
                "url": "https://drive.google.com/file/d/1ekEjKYqUhl9xMGVRLG0M83A0J3k25Y7H/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I wouldn't...",
                "line": 177,
                "start_time": "0-11-29.420000",
                "end_time": "0-11-30.670000",
                "url": "https://drive.google.com/file/d/1UWBE_jfMnqq0A_92X9F0Dbl_B3TzcXYc/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "...necessarily say \"absolute\"...",
                "line": 178,
                "start_time": "0-11-31.080000",
                "end_time": "0-11-33.380000",
                "url": "https://drive.google.com/file/d/1YnQJ-eoTi_o_JSp3LajwoDEYs7hHD5ze/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Then I'll take them!",
                "line": 179,
                "start_time": "0-11-33.830000",
                "end_time": "0-11-35.170000",
                "url": "https://drive.google.com/file/d/1XxbJDbl4Ei3lE3SlI0We9hd9w5L4mpaG/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I'd like to buy this!",
                "line": 180,
                "start_time": "0-11-36.210000",
                "end_time": "0-11-37.210000",
                "url": "https://drive.google.com/file/d/1qCxDH2MSkUN3ghptI58YQ-BUBfmNOr80/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "And a few of the same in different patterns.",
                "line": 181,
                "start_time": "0-11-37.210000",
                "end_time": "0-11-38.790000",
                "url": "https://drive.google.com/file/d/1urZJGPE2BTRj3ZxDTEITbyHDoe1cE_Hp/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Oh, and that g-string...",
                "line": 182,
                "start_time": "0-11-38.790000",
                "end_time": "0-11-40.460000",
                "url": "https://drive.google.com/file/d/1NdSqMG1LE1HSAEzoVNBniTEw71fv1PRx/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Can I try that on?",
                "line": 183,
                "start_time": "0-11-40.460000",
                "end_time": "0-11-41.920000",
                "url": "https://drive.google.com/file/d/11lXpWc9tXm0zBmVNjNDZtDGd-qTqUX6n/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Well...",
                "line": 184,
                "start_time": "0-11-43.210000",
                "end_time": "0-11-44.210000",
                "url": "https://drive.google.com/file/d/1LQ-OoqDKNbcvHRFBU58SVnJnhDbAf5Jb/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Oh, well.",
                "line": 185,
                "start_time": "0-11-44.210000",
                "end_time": "0-11-45.380000",
                "url": "https://drive.google.com/file/d/1XCdBTR3GSrMxv5qznxNMbClzHqboWSfU/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "This way's no good, either!",
                "line": 186,
                "start_time": "0-11-45.920000",
                "end_time": "0-11-46.920000",
                "url": "https://drive.google.com/file/d/1lLAf3OsYqQ1O4xr1BgQ6cI2XPGBMaG9K/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "We have no choice! Break it down!",
                "line": 187,
                "start_time": "0-11-46.920000",
                "end_time": "0-11-48.210000",
                "url": "https://drive.google.com/file/d/1uodFlAKNMnMZ0Z67pV9rPLZCS-gPnQox/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Stop the fire from spreading!",
                "line": 188,
                "start_time": "0-11-48.210000",
                "end_time": "0-11-49.210000",
                "url": "https://drive.google.com/file/d/1L2IAqkKw71j8uBdV-FqZY84BcwjJOX2g/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Be smart about it!",
                "line": 189,
                "start_time": "0-11-49.210000",
                "end_time": "0-11-50.460000",
                "url": "https://drive.google.com/file/d/1a63AbGH05Ue4Aw0jD-MGy3QoqmVBNSSt/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "If it goes underground, it will do even more damage!",
                "line": 190,
                "start_time": "0-11-50.460000",
                "end_time": "0-11-51.710000",
                "url": "https://drive.google.com/file/d/1WTSeb4v5xAyxgKpISYFlvXsd8x1E75ve/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "I found another one",
                "line": 191,
                "start_time": "0-11-51.710000",
                "end_time": "0-11-52.960000",
                "url": "https://drive.google.com/file/d/1bho4CX-Wau99V0d1FC6z1K-Mk2ZbhIdh/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "it will do even more damage!",
                "line": 191,
                "start_time": "0-11-51.710000",
                "end_time": "0-11-52.960000",
                "url": "https://drive.google.com/file/d/1bho4CX-Wau99V0d1FC6z1K-Mk2ZbhIdh/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "These wounds are deep",
                "line": 192,
                "start_time": "0-11-52.960000",
                "end_time": "0-11-54.380000",
                "url": "https://drive.google.com/file/d/1rkUMn80JgnO-mZflhylEFFrJwglgc8HF/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "Get him to the arena infirmary!",
                "line": 192,
                "start_time": "0-11-52.960000",
                "end_time": "0-11-54.380000",
                "url": "https://drive.google.com/file/d/1rkUMn80JgnO-mZflhylEFFrJwglgc8HF/view?usp=drivesdk"
            },
            {
                "name": "Knight",
                "name_variant": "Knight",
                "subtitle": "It's in a separate building; the fire won't reach it!",
                "line": 193,
                "start_time": "0-11-54.380000",
                "end_time": "0-11-56.540000",
                "url": "https://drive.google.com/file/d/17gik9NkCmeXwZ83T17etgEbgboJHs8OA/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Cid Kagenou!",
                "line": 194,
                "start_time": "0-12-12.710000",
                "end_time": "0-12-14.500000",
                "url": "https://drive.google.com/file/d/1rHr_lYIIHwAYqqom7CCSe6sb96Pm3WkM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm dead.",
                "line": 195,
                "start_time": "0-12-17.380000",
                "end_time": "0-12-18.580000",
                "url": "https://drive.google.com/file/d/1XXOO1Ftc6MoxJs9KqkhHWLZR7n5SkywG/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Thank heavens.",
                "line": 196,
                "start_time": "0-12-19.500000",
                "end_time": "0-12-20.710000",
                "url": "https://drive.google.com/file/d/18zRDmty5SV22IlhgoWd2T_KVqbn8Uihi/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I'm so glad you're alive!",
                "line": 197,
                "start_time": "0-12-20.920000",
                "end_time": "0-12-22.420000",
                "url": "https://drive.google.com/file/d/1NBPu5w6Ksnpqx5wMonN3w6KUsV_oF27I/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Your unwavering effort and love must have produced a miracle!",
                "line": 198,
                "start_time": "0-12-22.960000",
                "end_time": "0-12-26.460000",
                "url": "https://drive.google.com/file/d/1ngnjxgCUEKz70tgWNN315AJr1jZXrA71/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I accept all of your feelings for me.",
                "line": 199,
                "start_time": "0-12-27.920000",
                "end_time": "0-12-31",
                "url": "https://drive.google.com/file/d/10Ybw06ftFZ6HncbYvO6SgEH5bJMwdEji/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "You gave me my life.",
                "line": 200,
                "start_time": "0-12-32.040000",
                "end_time": "0-12-34.250000",
                "url": "https://drive.google.com/file/d/1QpusV1kbTJCJETxu9xZhxh7Bd_7qyRuT/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "So now, I give you my heart.",
                "line": 201,
                "start_time": "0-12-35.290000",
                "end_time": "0-12-38.710000",
                "url": "https://drive.google.com/file/d/1PxLLVjjMWiXgju5mO3d7fIHxSXeUw9ji/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "In that moment, I felt the hand of destiny.",
                "line": 202,
                "start_time": "0-12-41.460000",
                "end_time": "0-12-44.460000",
                "url": "https://drive.google.com/file/d/1JdCGP6nHu_jobRJpJOx2irfrhZewSjyI/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "My dear Cid, you are the one.",
                "line": 203,
                "start_time": "0-12-45.130000",
                "end_time": "0-12-47.630000",
                "url": "https://drive.google.com/file/d/16K51DF9f-xgTXa7_eCts8WXNGLg_Q28_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yeah...",
                "line": 204,
                "start_time": "0-12-49.880000",
                "end_time": "0-12-50.920000",
                "url": "https://drive.google.com/file/d/1cy2VIEu2l_gBdfOZCZ8-km2Uua3Dlq1w/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm gonna want some space.",
                "line": 205,
                "start_time": "0-12-51.920000",
                "end_time": "0-12-53.630000",
                "url": "https://drive.google.com/file/d/1p-EZTwupMrf3HOSeIB0IyO_6GLxyHn-h/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "We won't be arriving in the Sacred Land for two days,",
                "line": 206,
                "start_time": "0-13-03.040000",
                "end_time": "0-13-05.540000",
                "url": "https://drive.google.com/file/d/1oqx0mfxD9wHmN_LvJjO1EunAG0n8KFCW/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "so let's relax and get plenty of rest in the meantime.",
                "line": 207,
                "start_time": "0-13-05.540000",
                "end_time": "0-13-08.290000",
                "url": "https://drive.google.com/file/d/1R46zowJYwcI1NLzbPhVCkJ8bx0Gc7kGy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Good idea.",
                "line": 208,
                "start_time": "0-13-08.290000",
                "end_time": "0-13-09.500000",
                "url": "https://drive.google.com/file/d/1jWQOT1p5eT0cV0fbUZU7a5wZ7O9qYKAm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The Sacred Land is so close,",
                "line": 209,
                "start_time": "0-13-13.500000",
                "end_time": "0-13-14.580000",
                "url": "https://drive.google.com/file/d/1wdl7i9rUDAU_h8N3F0J28fBQQ2LHIebc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I could just wait until nightfall, sprint at full speed, and I'd be right there.",
                "line": 210,
                "start_time": "0-13-14.580000",
                "end_time": "0-13-17.880000",
                "url": "https://drive.google.com/file/d/1sPmhMsEWafTJXc8TGAvl8Xko7nMvsmob/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "My idea to take an economy class seat in the train like a proper background character was a mistake.",
                "line": 211,
                "start_time": "0-13-18.250000",
                "end_time": "0-13-22.630000",
                "url": "https://drive.google.com/file/d/1iEjaI8u6Xw72-55MgCycJed-0tRzY-mq/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Cid?",
                "line": 212,
                "start_time": "0-13-24.960000",
                "end_time": "0-13-25.960000",
                "url": "https://drive.google.com/file/d/1sbNtDMGVhKaBwHSDklY2knOHwWTc_dcI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It's nothing.",
                "line": 213,
                "start_time": "0-13-26.170000",
                "end_time": "0-13-27.500000",
                "url": "https://drive.google.com/file/d/1ixnM8_rioukqDU0MXuG9atFyPp4CsJM_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "She happened to find me at the station.",
                "line": 214,
                "start_time": "0-13-28.250000",
                "end_time": "0-13-30.290000",
                "url": "https://drive.google.com/file/d/1S0MnSYl2hZgqPFSbnEOZqcA8A3bZ1oJB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "She said if I was going to the Sacred Land, we should go together,",
                "line": 215,
                "start_time": "0-13-30.710000",
                "end_time": "0-13-33.290000",
                "url": "https://drive.google.com/file/d/1XZYFNhMIUHiB21bYiCHd78HNwLOIx9W-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "and wouldn't take no for an answer.",
                "line": 216,
                "start_time": "0-13-33.290000",
                "end_time": "0-13-34.710000",
                "url": "https://drive.google.com/file/d/1D2hFNdQvFoMVKrqGW05jYkj-jpCDC2To/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "There you are.",
                "line": 217,
                "start_time": "0-13-37.330000",
                "end_time": "0-13-38.330000",
                "url": "https://drive.google.com/file/d/1ycjCfsHoYogZUUsgY5z5RY5Z1jHcytEV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Thanks.",
                "line": 218,
                "start_time": "0-13-38.330000",
                "end_time": "0-13-39.540000",
                "url": "https://drive.google.com/file/d/1faRObU3X-MFH0lBZs9r6SIQZxUW3PnHq/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I assume you're going for the Goddess's Trial as well, Cid?",
                "line": 219,
                "start_time": "0-13-49",
                "end_time": "0-13-52.080000",
                "url": "https://drive.google.com/file/d/1D_qa_EUWNDzhc_NYGDNudRZEuONEUdoc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Uh, yeah.",
                "line": 220,
                "start_time": "0-13-52.080000",
                "end_time": "0-13-53.580000",
                "url": "https://drive.google.com/file/d/1vr1QPB-Lg8NuaDav-NKhJZYwcQ-rFTi2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Probably.",
                "line": 221,
                "start_time": "0-13-53.580000",
                "end_time": "0-13-54.790000",
                "url": "https://drive.google.com/file/d/1sOQOXCHFvQrmdJwLv76kRbcAnHh8VkU7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I figure that's probably what Alpha summoned me for.",
                "line": 222,
                "start_time": "0-13-55.330000",
                "end_time": "0-13-57.920000",
                "url": "https://drive.google.com/file/d/1rtwcp_c78ePrrOlsBOtOWksfjElhCJwJ/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I've seen the real you, Cid.",
                "line": 223,
                "start_time": "0-13-58.460000",
                "end_time": "0-14-00.540000",
                "url": "https://drive.google.com/file/d/1rRgk_B-9BVmouKpK73dF4Hvzv5_qhLkA/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I know how very brave you are.",
                "line": 224,
                "start_time": "0-14-01.330000",
                "end_time": "0-14-03.080000",
                "url": "https://drive.google.com/file/d/19yNEpuC9zncvc17nXOKHDQVj_vyFNniI/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I am quite certain that our path together will be a thorny one.",
                "line": 225,
                "start_time": "0-14-03.960000",
                "end_time": "0-14-07.580000",
                "url": "https://drive.google.com/file/d/1QoJ4GtV72miKk7Sr6VD1VF0y_eWi5ubd/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "No one will give us their blessing, or approve of our union.",
                "line": 226,
                "start_time": "0-14-08.170000",
                "end_time": "0-14-11.580000",
                "url": "https://drive.google.com/file/d/1VoX1WnqS4Vn5-6d7IJHcYGgu5YDraJky/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The most popular religion in this world is the Divine Teachings.",
                "line": 227,
                "start_time": "0-14-12.540000",
                "end_time": "0-14-16.040000",
                "url": "https://drive.google.com/file/d/1xCkljjY6s15L330Otk26-GCuMtQRyqQI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It's a faith that worships the sacred precepts of the goddess Beatrix.",
                "line": 228,
                "start_time": "0-14-16.540000",
                "end_time": "0-14-21.130000",
                "url": "https://drive.google.com/file/d/1KJfbiKNuDKzgG0jkgN_dk-GRPDWlKPjS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But it is said that after the Goddess granted the legendary heroes her powers,",
                "line": 229,
                "start_time": "0-14-21.670000",
                "end_time": "0-14-25.540000",
                "url": "https://drive.google.com/file/d/1CtK2epAv3Yf9sUK8tvVVkBBiYn4gGOFQ/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "they built up wealth from humble beginnings and married the princesses of great kingdoms.",
                "line": 230,
                "start_time": "0-14-25.540000",
                "end_time": "0-14-29.960000",
                "url": "https://drive.google.com/file/d/1V80TYHnBmzwndHBzLb-jcI9kwDdDcRfY/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "So I believe that at the end of every thorny path, there awaits a blessed and happy future.",
                "line": 231,
                "start_time": "0-14-30.420000",
                "end_time": "0-14-34.670000",
                "url": "https://drive.google.com/file/d/1vDXD3E-UEVKI8tTXn2zbYpMQxrW1Lq57/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "If you can make it through the Goddess's Trial,",
                "line": 232,
                "start_time": "0-14-35.080000",
                "end_time": "0-14-37.460000",
                "url": "https://drive.google.com/file/d/1NHDOGfmZ9zEes6bsA0jbR_iMrOIsMtwv/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I will be able to speak to my father of a brave young man.",
                "line": 233,
                "start_time": "0-14-37.460000",
                "end_time": "0-14-41.210000",
                "url": "https://drive.google.com/file/d/1s_4R9p4CQgPK6oznXa1T0voCgGMCsy_A/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "One of the holy sites in these Divine Teachings is where we're headed now: Lindwurm.",
                "line": 234,
                "start_time": "0-14-41.880000",
                "end_time": "0-14-46.250000",
                "url": "https://drive.google.com/file/d/1hAgIBd6p77AHyZf3qUl_dzKwRfMUAgsz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It is where the Goddess condescended to alight upon the earth,",
                "line": 235,
                "start_time": "0-14-46.750000",
                "end_time": "0-14-49.540000",
                "url": "https://drive.google.com/file/d/1_bO3aFyfk7xOI-AaPRwx2bWEJ2jnGtjl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "to grant power to three heroes.",
                "line": 236,
                "start_time": "0-14-49.540000",
                "end_time": "0-14-52.040000",
                "url": "https://drive.google.com/file/d/1UNly335lkN2hpjWDG9xtrycIdA_3oUbA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Supposedly.",
                "line": 237,
                "start_time": "0-14-52.380000",
                "end_time": "0-14-53.580000",
                "url": "https://drive.google.com/file/d/1doRdS56wr71uM5IOuv_hpquNxuViIJjd/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "So let us follow this thorny path and overcome its obstacles together, one step at a time.",
                "line": 238,
                "start_time": "0-14-53.580000",
                "end_time": "0-14-57.460000",
                "url": "https://drive.google.com/file/d/1l6bl7_l29LZzksNaX7T8--yQXETsAquf/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Thus our love will be bound ever more tightly.",
                "line": 239,
                "start_time": "0-14-57.960000",
                "end_time": "0-15-01.130000",
                "url": "https://drive.google.com/file/d/1eCB1oFMIyPpB1Zuf56A00ay4fPsEb1A-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "This is that thing.",
                "line": 240,
                "start_time": "0-15-02.330000",
                "end_time": "0-15-04.630000",
                "url": "https://drive.google.com/file/d/19ERII_5H_iS5DqemRCLPRgP3MByExUUd/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "We can't speak of this to anyone yet,",
                "line": 241,
                "start_time": "0-15-04.880000",
                "end_time": "0-15-07.750000",
                "url": "https://drive.google.com/file/d/1RCsaF8ZEJX944gcbuesnJyZKFiwWfbuv/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "but let us do all that we can for our bright, happy future.",
                "line": 242,
                "start_time": "0-15-07.750000",
                "end_time": "0-15-10.460000",
                "url": "https://drive.google.com/file/d/1tBzTZolwOei04otpprRYBqAVFWO7nauN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Love, happiness, the future...",
                "line": 243,
                "start_time": "0-15-10.830000",
                "end_time": "0-15-13.420000",
                "url": "https://drive.google.com/file/d/1cGxvRRRzJ86U3_AnbmA4aYe1V57agm28/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It's such a typical clich\u00e9.",
                "line": 244,
                "start_time": "0-15-13.420000",
                "end_time": "0-15-15.130000",
                "url": "https://drive.google.com/file/d/10RceeFCwKXko45ryWxyHP5MQ9I2Mhgxc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "She's trying to convert me to her religion.",
                "line": 245,
                "start_time": "0-15-16.750000",
                "end_time": "0-15-18.460000",
                "url": "https://drive.google.com/file/d/1Od61hveXxg4O2vQVGuZDWqKl3LVmbEr6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yeah...",
                "line": 246,
                "start_time": "0-15-19.040000",
                "end_time": "0-15-20.040000",
                "url": "https://drive.google.com/file/d/10jc3alHMG7ntc7XHE8Nra3FmRamBeWoR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I'm gonna want some space.",
                "line": 247,
                "start_time": "0-15-20.460000",
                "end_time": "0-15-22.080000",
                "url": "https://drive.google.com/file/d/10-Cfm6LmLahNQ_2zPDWXS9EfI4_z5Uq2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Somehow evading her nonstop, two-day missionary efforts...",
                "line": 248,
                "start_time": "0-15-29.750000",
                "end_time": "0-15-34.790000",
                "url": "https://drive.google.com/file/d/1qyoEz1HgYzjn0As5Fi2rFra_VQmTGzBK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I finally arrived in the Sacred Land of Lindwurm.",
                "line": 249,
                "start_time": "0-15-35.920000",
                "end_time": "0-15-39.710000",
                "url": "https://drive.google.com/file/d/1OzcpyeJiVWjiMZA2n_Ssdz7rj5QVjgs0/view?usp=drivesdk"
            },
            {
                "name": "Church Member",
                "name_variant": "Church Member",
                "subtitle": "Just then, a black rose shone in the night sky,",
                "line": 250,
                "start_time": "0-15-42.080000",
                "end_time": "0-15-45.130000",
                "url": "https://drive.google.com/file/d/1IfPsEwkedn6nGb8HVRhy-vGcwhKrqTu3/view?usp=drivesdk"
            },
            {
                "name": "Church Member",
                "name_variant": "Church Member",
                "subtitle": "and its petals rained down upon the warriors.",
                "line": 251,
                "start_time": "0-15-45.130000",
                "end_time": "0-15-48.040000",
                "url": "https://drive.google.com/file/d/1bFJkoe5gQIlVwSRwbItLlxMfrsuFYVKK/view?usp=drivesdk"
            },
            {
                "name": "Church Member",
                "name_variant": "Church Member",
                "subtitle": "The beautiful petals fluttered down",
                "line": 252,
                "start_time": "0-15-48.710000",
                "end_time": "0-15-49.130000",
                "url": "https://drive.google.com/file/d/1G67esc-9LANycnGOFxHzDbxp8fo3tw3-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Why is every one of these a left arm",
                "line": 253,
                "start_time": "0-15-49.130000",
                "end_time": "0-15-50.540000",
                "url": "https://drive.google.com/file/d/1EEPatFRqmaKSs5swSBbx45BpviCALKsf/view?usp=drivesdk"
            },
            {
                "name": "Church Member",
                "name_variant": "Church Member",
                "subtitle": "The beautiful petals fluttered down",
                "line": 253,
                "start_time": "0-15-49.130000",
                "end_time": "0-15-50.540000",
                "url": "https://drive.google.com/file/d/1EEPatFRqmaKSs5swSBbx45BpviCALKsf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Why is every one of these a left arm",
                "line": 254,
                "start_time": "0-15-50.540000",
                "end_time": "0-15-51.960000",
                "url": "https://drive.google.com/file/d/1AB7V9bLlz7-0Jb7u3znuwBMUd49556Uz/view?usp=drivesdk"
            },
            {
                "name": "Church Member",
                "name_variant": "Church Member",
                "subtitle": "and touched the warriors on their right hands.",
                "line": 254,
                "start_time": "0-15-50.540000",
                "end_time": "0-15-51.960000",
                "url": "https://drive.google.com/file/d/1AB7V9bLlz7-0Jb7u3znuwBMUd49556Uz/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Legend has it that",
                "line": 255,
                "start_time": "0-15-51.960000",
                "end_time": "0-15-53.250000",
                "url": "https://drive.google.com/file/d/1hN6Z8Z77PSxgYdDlRnfFSNZarDbCYSiA/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "this is where the hero Olivier cut off the left arm of the demon Diablos so long ago.",
                "line": 256,
                "start_time": "0-15-53.250000",
                "end_time": "0-15-58.040000",
                "url": "https://drive.google.com/file/d/1hMfvAJsHeOytIN9YxBIETzbODfevwR1u/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Somewhere within the steep mountains surrounding the Sacred Land",
                "line": 257,
                "start_time": "0-15-58.580000",
                "end_time": "0-16-01.630000",
                "url": "https://drive.google.com/file/d/1Ww8jM15QcXMITW1AB9GAmMN5RQwltQKg/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "are ruins known as the Sanctuary.",
                "line": 258,
                "start_time": "0-16-01.630000",
                "end_time": "0-16-03.830000",
                "url": "https://drive.google.com/file/d/10_fM1wkKUm44RkrmqTeuXR9DSpYp-6pT/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "It is said that that is where they have sealed away the left arm of Diablos.",
                "line": 259,
                "start_time": "0-16-03.830000",
                "end_time": "0-16-06.790000",
                "url": "https://drive.google.com/file/d/1Jdbo8t3rGfqEmfuJaqwjC1DQf94vZRKM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That's makes sense.",
                "line": 260,
                "start_time": "0-16-07.330000",
                "end_time": "0-16-08.630000",
                "url": "https://drive.google.com/file/d/1WESMAYlbDClZWQCCWZxlkY2lMQD7CTSe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Hence the sword and left arm.",
                "line": 261,
                "start_time": "0-16-08.630000",
                "end_time": "0-16-10.710000",
                "url": "https://drive.google.com/file/d/1UXpQsSZBPtNFPsy84aNulaERDlMEc0-B/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "My favorite author Natsume is having a book signing!",
                "line": 262,
                "start_time": "0-16-14.290000",
                "end_time": "0-16-16.920000",
                "url": "https://drive.google.com/file/d/1ylBA8QrvM7GSr6cTjsPsLNFVVz_Suc32/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I'm her biggest fan!",
                "line": 263,
                "start_time": "0-16-16.920000",
                "end_time": "0-16-18.670000",
                "url": "https://drive.google.com/file/d/1XatVVCYj5c3KJ766TaAK56iNpzOlmxTK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Natsume?",
                "line": 264,
                "start_time": "0-16-18.670000",
                "end_time": "0-16-20.040000",
                "url": "https://drive.google.com/file/d/1Wkg4EgRtrpKHtYvES6qnfMA5WG_51J0d/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "She's a popular novelist",
                "line": 265,
                "start_time": "0-16-20.040000",
                "end_time": "0-16-21.540000",
                "url": "https://drive.google.com/file/d/1VOE98OM35ds0mPNeG4m-PzVv_OPRiUb6/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "known for her tremendous imagination and her fresh and original world building!",
                "line": 266,
                "start_time": "0-16-21.540000",
                "end_time": "0-16-25.040000",
                "url": "https://drive.google.com/file/d/1wqoOM0qYJCecTRTshuVjWEzlAnOlqrg8/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Romance, mystery, action, fairy tales...",
                "line": 267,
                "start_time": "0-16-25.500000",
                "end_time": "0-16-28.210000",
                "url": "https://drive.google.com/file/d/1CycWj42HSukgNdAkXhnZsb6ARk7KOhPg/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "She even writes literature in the classic style.",
                "line": 268,
                "start_time": "0-16-28.210000",
                "end_time": "0-16-30",
                "url": "https://drive.google.com/file/d/1JOzmEgdzWb1rKWLKfLqjTTHVT77lbcYv/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "She's a master of every genre,",
                "line": 269,
                "start_time": "0-16-30.330000",
                "end_time": "0-16-32.170000",
                "url": "https://drive.google.com/file/d/1IGIEnNf_umILZGg86xRgTYd6hX40C9x5/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "and her stories are so diverse it's like they're written by different people!",
                "line": 270,
                "start_time": "0-16-32.170000",
                "end_time": "0-16-34.630000",
                "url": "https://drive.google.com/file/d/1MOWD0x44ydqTYHWdBv0JIJWY84RsaCLT/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "It's amazing!",
                "line": 271,
                "start_time": "0-16-34.630000",
                "end_time": "0-16-35.830000",
                "url": "https://drive.google.com/file/d/1adTS0z7jZenAPMs2V90hOpDXUq51lgT0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Sounds like she covers everything. Almost like she's been rebor-",
                "line": 272,
                "start_time": "0-16-36.170000",
                "end_time": "0-16-38.830000",
                "url": "https://drive.google.com/file/d/1gWnGOCxr_ZqB55U0CSU_XgcTt9n5H9Ui/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Uh, I mean...",
                "line": 273,
                "start_time": "0-16-38.830000",
                "end_time": "0-16-39.880000",
                "url": "https://drive.google.com/file/d/12jV9JfBBwv7wuSJ_l3jbpCl4_IaiAf1a/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Never mind, I didn't say anything.",
                "line": 274,
                "start_time": "0-16-39.880000",
                "end_time": "0-16-41.500000",
                "url": "https://drive.google.com/file/d/1SvPXCVAogrxOajCsWGooEvnGopEys2BC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The Midsummer Natsume Collection...",
                "line": 275,
                "start_time": "0-16-42.540000",
                "end_time": "0-16-44.790000",
                "url": "https://drive.google.com/file/d/1eMqBlrcCT-wjbYhOvHDJK7CBFik0L45A/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"I Am a Dragon,\"",
                "line": 276,
                "start_time": "0-16-56.290000",
                "end_time": "0-16-58.210000",
                "url": "https://drive.google.com/file/d/12JWj0HUKb85wPppfEhclgfauQGTgmyhs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"Romeo e Julietta,\"",
                "line": 277,
                "start_time": "0-16-58.540000",
                "end_time": "0-17-00.290000",
                "url": "https://drive.google.com/file/d/1T14TqgvYugJCYG30KUelCGhnLo4eAHnW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"Asherella,\"",
                "line": 278,
                "start_time": "0-17-00.580000",
                "end_time": "0-17-02.170000",
                "url": "https://drive.google.com/file/d/1IukoBIauj5POXwmPthRsz4HgyTdXcjI-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"Little Crimson Riding Hood,\"",
                "line": 279,
                "start_time": "0-17-02.670000",
                "end_time": "0-17-03.670000",
                "url": "https://drive.google.com/file/d/1JQxpXQR_OCg8V1O60lMCQJJm7dd6EErm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"Star It's a Trap Wars,\"",
                "line": 280,
                "start_time": "0-17-04",
                "end_time": "0-17-05.420000",
                "url": "https://drive.google.com/file/d/1c-CdRDGkqjxpJ4hu76SvkJ5CnNP8kiAd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"One Purse,\"",
                "line": 281,
                "start_time": "0-17-05.580000",
                "end_time": "0-17-06.880000",
                "url": "https://drive.google.com/file/d/1ih7cLF84-ofwKB9uygQ232nDm6IsdwGh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"Dragon Bowl,\"",
                "line": 282,
                "start_time": "0-17-07.250000",
                "end_time": "0-17-08.580000",
                "url": "https://drive.google.com/file/d/1FGeTYpC-3GUaLS-8tPQB29Dip1MVQ0fm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "\"Kage no Jitsuryo...ku...\"",
                "line": 283,
                "start_time": "0-17-09.130000",
                "end_time": "0-17-12.080000",
                "url": "https://drive.google.com/file/d/1ZrYsWxpRj4rXfHKb72LzRX_NAF9QPZoJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Can't read it.",
                "line": 284,
                "start_time": "0-17-12.080000",
                "end_time": "0-17-13.420000",
                "url": "https://drive.google.com/file/d/1w2rsQCJ7SGNmdUTY60JIs7oG8fZmTpWy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The plagiarism is so blatant, it's almost refreshing.",
                "line": 285,
                "start_time": "0-17-14.830000",
                "end_time": "0-17-17.500000",
                "url": "https://drive.google.com/file/d/1AcudenB4od6Z65dmXkQPjUXHc5rkgzCK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "This can't be a coincidence.",
                "line": 286,
                "start_time": "0-17-17.830000",
                "end_time": "0-17-19.460000",
                "url": "https://drive.google.com/file/d/1TiJpeJTHizi5Ndp3N7kO04hxPVtDFP-c/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "There must be someone else who's been reincarnated from...",
                "line": 287,
                "start_time": "0-17-19.710000",
                "end_time": "0-17-22.290000",
                "url": "https://drive.google.com/file/d/1qC1ySGBbuwWXpBY9KZw6r2dGCoUFckXj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Guess I'm going to need to make sure.",
                "line": 288,
                "start_time": "0-17-24.670000",
                "end_time": "0-17-26.670000",
                "url": "https://drive.google.com/file/d/1ktR48xskH5vklPCyYPIs7LtK7Bns-9GK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "What does she think she's doing?",
                "line": 289,
                "start_time": "0-17-36.380000",
                "end_time": "0-17-38.080000",
                "url": "https://drive.google.com/file/d/17DkJ7MP7U4fUc3kXip1gvBeBapZS_MzK/view?usp=drivesdk"
            },
            {
                "name": "Natsume Kafka",
                "name_variant": "Beta",
                "subtitle": "Here, hand me your book.",
                "line": 290,
                "start_time": "0-17-39.210000",
                "end_time": "0-17-40.670000",
                "url": "https://drive.google.com/file/d/1b--9dxZzVKaiXs_HRf1COINa-RH7iUdL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "How's business?",
                "line": 291,
                "start_time": "0-17-47.830000",
                "end_time": "0-17-49.040000",
                "url": "https://drive.google.com/file/d/1CIhriC8oXTpK2lho1b9BYcuzqNHsqgKY/view?usp=drivesdk"
            },
            {
                "name": "Natsume Kafka",
                "name_variant": "Beta",
                "subtitle": "Can't complain.",
                "line": 292,
                "start_time": "0-17-49.040000",
                "end_time": "0-17-50.710000",
                "url": "https://drive.google.com/file/d/1tjFmlhQbUj9gQ0Zv5BO_kRJSdtQeQ4F5/view?usp=drivesdk"
            },
            {
                "name": "Natsume Kafka",
                "name_variant": "Beta",
                "subtitle": "I'm getting my name out there. People know who I am.",
                "line": 293,
                "start_time": "0-17-50.710000",
                "end_time": "0-17-52.830000",
                "url": "https://drive.google.com/file/d/1jMlfdSbJQ--utL_mFvPEnhryG73Bg6zF/view?usp=drivesdk"
            },
            {
                "name": "Natsume Kafka",
                "name_variant": "Beta",
                "subtitle": "And it's all thanks to your wisdom, my lord.",
                "line": 294,
                "start_time": "0-17-53.250000",
                "end_time": "0-17-55.830000",
                "url": "https://drive.google.com/file/d/1ggT0uqt3f1i7iCnZ8CtY9_KXu9LlJWJn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "First Gamma, and now her?",
                "line": 295,
                "start_time": "0-17-56.460000",
                "end_time": "0-17-58.750000",
                "url": "https://drive.google.com/file/d/1mJKhpCSlBIpvvf4L5FxnL1Im2LxFNEdu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Beta told me she likes literature, so I told her a few stories from my past life.",
                "line": 296,
                "start_time": "0-17-59.540000",
                "end_time": "0-18-04.250000",
                "url": "https://drive.google.com/file/d/1zec2bhxzXOwXmEBDZToCvQOc584os5SR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The idea was that she could use them as inspiration to come up with a cool story.",
                "line": 297,
                "start_time": "0-18-05",
                "end_time": "0-18-07.830000",
                "url": "https://drive.google.com/file/d/1I9REmcvBTjRsw1pJ9NZjvpB3eAMW24zc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That's what I was thinking when I told her.",
                "line": 298,
                "start_time": "0-18-07.830000",
                "end_time": "0-18-09.710000",
                "url": "https://drive.google.com/file/d/15Yp7Xpg3xOTi9zMYVmwlCa4NyN5zPHzQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I didn't expect her to steal them wholesale.",
                "line": 299,
                "start_time": "0-18-10.500000",
                "end_time": "0-18-12.630000",
                "url": "https://drive.google.com/file/d/13c8es5jiRMoE0gc45RbiuVXtPQAUQJDq/view?usp=drivesdk"
            },
            {
                "name": "Natsume Kafka",
                "name_variant": "Beta",
                "subtitle": "Here you are.",
                "line": 300,
                "start_time": "0-18-13.500000",
                "end_time": "0-18-14.500000",
                "url": "https://drive.google.com/file/d/1TWZWqh4f4S-8so02oMWW8m3wnGvr7z-K/view?usp=drivesdk"
            },
            {
                "name": "Natsume Kafka",
                "name_variant": "Beta",
                "subtitle": "It contains all the details of the mission.",
                "line": 301,
                "start_time": "0-18-15.580000",
                "end_time": "0-18-17.670000",
                "url": "https://drive.google.com/file/d/19fUFQrae2Xe2mzEpxv1lPZ7W68xKjA8f/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "My sweet Beta, I'm disappointed in you.",
                "line": 302,
                "start_time": "0-18-18.130000",
                "end_time": "0-18-20.960000",
                "url": "https://drive.google.com/file/d/1UaEFTm4mPRrYsWQI6LfJpvMhtD3SZUug/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I didn't know you were a fan of Natsume's work, too.",
                "line": 303,
                "start_time": "0-18-23.830000",
                "end_time": "0-18-26.960000",
                "url": "https://drive.google.com/file/d/1E8W2PTyBEHhRruek9TfWQwkKzPfKKXzi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "No, I just...",
                "line": 304,
                "start_time": "0-18-26.960000",
                "end_time": "0-18-28.420000",
                "url": "https://drive.google.com/file/d/1KYvWN72hEtJbQ5JYfUIzOd4wk1jSFrwX/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Look at this!",
                "line": 305,
                "start_time": "0-18-28.670000",
                "end_time": "0-18-29.710000",
                "url": "https://drive.google.com/file/d/16qUanDAWXXCR-knVWVAZDxPQpD5MI94M/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "She personalized it with my name!",
                "line": 306,
                "start_time": "0-18-29.710000",
                "end_time": "0-18-32.830000",
                "url": "https://drive.google.com/file/d/1wEwGp7gIgffrMu4VLMnOCrmi9yjSkVq0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Signing autographs? Has she absolutely no shame?",
                "line": 307,
                "start_time": "0-18-33.170000",
                "end_time": "0-18-36.170000",
                "url": "https://drive.google.com/file/d/1i_bYvc5n0gZ2SVUX1oly6BF84b1IsQDu/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Did you get your autograph personalized, too?",
                "line": 308,
                "start_time": "0-18-36.580000",
                "end_time": "0-18-39.210000",
                "url": "https://drive.google.com/file/d/11loWuT9a9EWJUGkhvE4fxJZeZfOUeBKZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Oh, now that you mention it...",
                "line": 309,
                "start_time": "0-18-39.210000",
                "end_time": "0-18-41.080000",
                "url": "https://drive.google.com/file/d/182vR6pfi_Xtgs4QX08ncF5DfH9Aw0rqU/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Are those ancient letters?",
                "line": 310,
                "start_time": "0-18-43.960000",
                "end_time": "0-18-45.500000",
                "url": "https://drive.google.com/file/d/1S6zKFuhDjeWrGSlyU69rthaj65BPho6A/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Looks like, yeah.",
                "line": 311,
                "start_time": "0-18-45.830000",
                "end_time": "0-18-47.130000",
                "url": "https://drive.google.com/file/d/1Qb6tqLQxFAuhMSnW7Bf2GXZZGBrU-0tq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Can you read them?",
                "line": 312,
                "start_time": "0-18-47.130000",
                "end_time": "0-18-48.330000",
                "url": "https://drive.google.com/file/d/1_uTslemgkHgTI4KAjONO0BGuu5Bd4oEW/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Ancient writing isn't a required course,",
                "line": 313,
                "start_time": "0-18-48.420000",
                "end_time": "0-18-51.170000",
                "url": "https://drive.google.com/file/d/1vDOU_IyLrOpbreWllycYa3vQMq4r4pFw/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "so I only know the very basics.",
                "line": 314,
                "start_time": "0-18-51.500000",
                "end_time": "0-18-53.420000",
                "url": "https://drive.google.com/file/d/1zF_QgSBic6MheOieUeeziuaWqqIU2N9T/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "And these look like they're written in extreme shorthand.",
                "line": 315,
                "start_time": "0-18-54.420000",
                "end_time": "0-18-57.750000",
                "url": "https://drive.google.com/file/d/1rZeG4RoqF0_XngC2e_D7Dvw3nS55Kha0/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "So I'm not sure if the meaning would come across, even if I could read all of those letters.",
                "line": 316,
                "start_time": "0-18-58",
                "end_time": "0-19-01.080000",
                "url": "https://drive.google.com/file/d/1Dl5U4rywgeZdtb3vk0falA3keVXzucmN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Uh-huh...",
                "line": 317,
                "start_time": "0-19-01.080000",
                "end_time": "0-19-02.290000",
                "url": "https://drive.google.com/file/d/1qLKygjFuC6jVp2cDzZ8SsWMHxaHoLSTM/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "But why would she write in the ancient alphabet?",
                "line": 318,
                "start_time": "0-19-02.290000",
                "end_time": "0-19-04.710000",
                "url": "https://drive.google.com/file/d/1BL9h3Kue9-IA5a4wsncE9u5t9fdHOJH0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Why would she...",
                "line": 319,
                "start_time": "0-19-04.710000",
                "end_time": "0-19-06.130000",
                "url": "https://drive.google.com/file/d/1krNMltPvst67lToOb_LXFAPpU1Pcvoak/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Well, because it's cool, obviously.",
                "line": 320,
                "start_time": "0-19-08.540000",
                "end_time": "0-19-10.500000",
                "url": "https://drive.google.com/file/d/1kuHh2yIWGktJ7KfpGG76odzYNgEJoE5G/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "It's cool?",
                "line": 321,
                "start_time": "0-19-10.500000",
                "end_time": "0-19-12.630000",
                "url": "https://drive.google.com/file/d/1w0hBDdAYXoSfIGYR19kakwI-6nRpRL0b/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yeah! It's very cool.",
                "line": 322,
                "start_time": "0-19-12.920000",
                "end_time": "0-19-14.540000",
                "url": "https://drive.google.com/file/d/1aLB6vusJa59b9CXFxgbyyJ4_7hIkg5HS/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Very cool...",
                "line": 323,
                "start_time": "0-19-14.540000",
                "end_time": "0-19-15.960000",
                "url": "https://drive.google.com/file/d/1gMdO4X5ss_afPN9bZU_9fzrg6fHO7uFH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I didn't realize that's the kind of thing men were into.",
                "line": 324,
                "start_time": "0-19-17.210000",
                "end_time": "0-19-20.710000",
                "url": "https://drive.google.com/file/d/1OWXQmWcUErsJPEK_oKmVub9fRkSV8ebg/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "We want to know the truth...",
                "line": 325,
                "start_time": "0-19-27.170000",
                "end_time": "0-19-29.420000",
                "url": "https://drive.google.com/file/d/1Dx-TdePohgkp8wRy8tV2M1SN80aYD748/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Great Hero Olivier.",
                "line": 326,
                "start_time": "0-19-30.580000",
                "end_time": "0-19-32",
                "url": "https://drive.google.com/file/d/1U1UMku5w9fxymz1yiGccSsnPmeDLWbo4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What did you really do at the place they call the Sanctuary?",
                "line": 327,
                "start_time": "0-19-32.460000",
                "end_time": "0-19-35.460000",
                "url": "https://drive.google.com/file/d/1KnQTccRqNC0ShYpewwFSMp9ugaOy1YDF/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "The more we unravel the threads of history's darkness,",
                "line": 328,
                "start_time": "0-19-36.250000",
                "end_time": "0-19-38.500000",
                "url": "https://drive.google.com/file/d/1ftaKtGUfUn5OcnNEOu6P_pMvrJjeQsVn/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "the more fact mingles with fiction.",
                "line": 329,
                "start_time": "0-19-38.500000",
                "end_time": "0-19-40.580000",
                "url": "https://drive.google.com/file/d/17zLz5FhBY5ncdEzNckGaQVE3EtNJWhkA/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Archbishop Drake...",
                "line": 330,
                "start_time": "0-19-41.290000",
                "end_time": "0-19-42.710000",
                "url": "https://drive.google.com/file/d/1J5myacxD7b9tqKk2ApQp4W_J16O25XZ0/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "what were you hiding?",
                "line": 331,
                "start_time": "0-19-43.630000",
                "end_time": "0-19-45.630000",
                "url": "https://drive.google.com/file/d/17X0fK0MlpD_W-lT1O1INHcfCcnCJXGm8/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "If you had been able to speak, I would have loved to hear your answers.",
                "line": 332,
                "start_time": "0-19-46.790000",
                "end_time": "0-19-50.460000",
                "url": "https://drive.google.com/file/d/1yXAVHzwQAAXRktP4D8XSrzK4S9KgxuAr/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Who killed you?",
                "line": 333,
                "start_time": "0-19-51.500000",
                "end_time": "0-19-53.500000",
                "url": "https://drive.google.com/file/d/16K31F_wxzTUr-SuHSQ86aWBLZTAhnqCg/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Would they dispose of a man even of your high status?",
                "line": 334,
                "start_time": "0-19-54.210000",
                "end_time": "0-19-57.790000",
                "url": "https://drive.google.com/file/d/15CLZAObfxWxJkX09WaSRq-jbsCevRvZT/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Tomorrow, we wait for the moment that the door is opened.",
                "line": 335,
                "start_time": "0-19-58.500000",
                "end_time": "0-20-01.750000",
                "url": "https://drive.google.com/file/d/1KUbA6aLGsqlxRXyUvVnlN8VNrUeHsDrl/view?usp=drivesdk"
            },
            {
                "name": "Paladin",
                "name_variant": "Paladin",
                "subtitle": "Your Grace! Archbishop Drake!",
                "line": 336,
                "start_time": "0-20-03.380000",
                "end_time": "0-20-05.630000",
                "url": "https://drive.google.com/file/d/1_6QjlbRwjXWJEGL9p5q6ysaZu6teNx0p/view?usp=drivesdk"
            },
            {
                "name": "Paladin",
                "name_variant": "Paladin",
                "subtitle": "Wh-what sacrilege!",
                "line": 337,
                "start_time": "0-20-06.330000",
                "end_time": "0-20-08.630000",
                "url": "https://drive.google.com/file/d/1ypvn0C7soZRloRAGwQI8m7n9B7EmDi4J/view?usp=drivesdk"
            },
            {
                "name": "Paladin",
                "name_variant": "Paladin",
                "subtitle": "Lock down the cathedral!",
                "line": 338,
                "start_time": "0-20-08.630000",
                "end_time": "0-20-10.040000",
                "url": "https://drive.google.com/file/d/1IhKhCxk1Q8OkSCcZBTEyEZqoxw6Lbsdn/view?usp=drivesdk"
            },
            {
                "name": "Paladin",
                "name_variant": "Paladin",
                "subtitle": "Don't let the murderer escape!",
                "line": 339,
                "start_time": "0-20-10.040000",
                "end_time": "0-20-11.630000",
                "url": "https://drive.google.com/file/d/1wAEft0LRRvE816WA4cJiNHdzycaJd8sK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "The bells ring out to announce the advent of chaos.",
                "line": 340,
                "start_time": "0-20-20.460000",
                "end_time": "0-20-23.790000",
                "url": "https://drive.google.com/file/d/1xR3S1PWgTbjScIY-zVbHUqJjaBU4pW5g/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And I look down on the proceedings from my high vantage point.",
                "line": 341,
                "start_time": "0-20-25.830000",
                "end_time": "0-20-28.830000",
                "url": "https://drive.google.com/file/d/1Pq-3vNhvwRimPRruQKj0FT54uZ1tFjwI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yes, I like it.",
                "line": 342,
                "start_time": "0-20-29.290000",
                "end_time": "0-20-31.080000",
                "url": "https://drive.google.com/file/d/1CB1WYzcwuKZNBRdvBoHc3Gr3IP9jn1Pn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I won't fault you for making that choice,",
                "line": 343,
                "start_time": "0-20-35.040000",
                "end_time": "0-20-37.210000",
                "url": "https://drive.google.com/file/d/1Sz-ieqWd1kHw7uqB4zS5g_B9bK2sy34N/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "but it won't change the ultimate outcome.",
                "line": 344,
                "start_time": "0-20-37.420000",
                "end_time": "0-20-39.750000",
                "url": "https://drive.google.com/file/d/1bgNIXxKuPbm_-L6KQQ6YZPLMqdf_2ySz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You hurled magically imbued sword strikes at your victim.",
                "line": 345,
                "start_time": "0-21-10.580000",
                "end_time": "0-21-13.250000",
                "url": "https://drive.google.com/file/d/1zDB__yQPFf4tG769p9ynL0qh22xHqvpu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I should expect nothing less of Epsilon the Precise.",
                "line": 346,
                "start_time": "0-21-14",
                "end_time": "0-21-17.380000",
                "url": "https://drive.google.com/file/d/1E3vBW_rKVjo5V5qTi9RU3LupMiYvmmhJ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I'm honored.",
                "line": 347,
                "start_time": "0-21-17.830000",
                "end_time": "0-21-19.040000",
                "url": "https://drive.google.com/file/d/1bdW46AUPNGd-PjnZp6aISel4lKzpJPS_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I got Alpha's letter...",
                "line": 348,
                "start_time": "0-21-19.290000",
                "end_time": "0-21-20.670000",
                "url": "https://drive.google.com/file/d/19g0_KNpFL3IAD3Izlv_JMcRMfyGoaRD-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I mean, the mission...",
                "line": 349,
                "start_time": "0-21-20.670000",
                "end_time": "0-21-22.500000",
                "url": "https://drive.google.com/file/d/1Sx48hM11HyQodAgQ_EbjZ8QsTtHxWxE3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yes, the mission, how is it going?",
                "line": 350,
                "start_time": "0-21-22.500000",
                "end_time": "0-21-25",
                "url": "https://drive.google.com/file/d/1r-kqn4wNYRU9IFPb5ckVG40Dll8OAiTs/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "The target has been eliminated by the Cult's executioner.",
                "line": 351,
                "start_time": "0-21-25.580000",
                "end_time": "0-21-28.580000",
                "url": "https://drive.google.com/file/d/1xWWuDmyt8Ude8gR4gGtw--hdsYG1u0Iq/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "We managed to take out his henchmen,",
                "line": 352,
                "start_time": "0-21-28.750000",
                "end_time": "0-21-30.210000",
                "url": "https://drive.google.com/file/d/1sPWY8uYE7bl5be9AhtB7y6Q7avkymrba/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "but the executioner himself has gone into hiding.",
                "line": 353,
                "start_time": "0-21-30.210000",
                "end_time": "0-21-32.290000",
                "url": "https://drive.google.com/file/d/1KdDQbyh5WxNGHQBYRv-o20nT1mq5VBgb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "An executioner?",
                "line": 354,
                "start_time": "0-21-32.630000",
                "end_time": "0-21-33.830000",
                "url": "https://drive.google.com/file/d/1CLB9PI4gpcdDZfvULxuYGU3WBHhp7Um4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Cool...",
                "line": 355,
                "start_time": "0-21-34.130000",
                "end_time": "0-21-35.330000",
                "url": "https://drive.google.com/file/d/1FZmIUnG2vttkZYgS7EUkZSi3le1ygzGM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "We are moving on to Plan B.",
                "line": 356,
                "start_time": "0-21-35.330000",
                "end_time": "0-21-37.500000",
                "url": "https://drive.google.com/file/d/1AB8-F16ri_W9o8BB7vTA8WEH2K9KBylJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So cool!",
                "line": 357,
                "start_time": "0-21-37.500000",
                "end_time": "0-21-39.330000",
                "url": "https://drive.google.com/file/d/14-Xx92i1K80xb_fVXue8LzO3D7RX6upD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Very well, but you know what that means.",
                "line": 358,
                "start_time": "0-21-39.330000",
                "end_time": "0-21-42.040000",
                "url": "https://drive.google.com/file/d/1F7a6k_LgOSNOYdIlFURMCy2ygUX97Cck/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "We are prepared for the consequences.",
                "line": 359,
                "start_time": "0-21-42.250000",
                "end_time": "0-21-43.710000",
                "url": "https://drive.google.com/file/d/1oWGOp_c-qjj6LeD-iU3O40byYY6AXrsX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I will proceed with my own plans.",
                "line": 360,
                "start_time": "0-21-44.420000",
                "end_time": "0-21-46.170000",
                "url": "https://drive.google.com/file/d/1Zmbk7x3mnWZULUMS9kM4YDlczQNgKo3H/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Do not fail me.",
                "line": 361,
                "start_time": "0-21-46.830000",
                "end_time": "0-21-48.040000",
                "url": "https://drive.google.com/file/d/1KRyWG2dFCdFCFHO2RiVgNvQAi7p97Yoa/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, my lord.",
                "line": 362,
                "start_time": "0-21-48.040000",
                "end_time": "0-21-49.040000",
                "url": "https://drive.google.com/file/d/1-I4vH6c8aTeNpmT1ySxp0ik_mXGK7yGF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Epsilon is a very proud woman.",
                "line": 363,
                "start_time": "0-21-57.420000",
                "end_time": "0-21-59.500000",
                "url": "https://drive.google.com/file/d/1I-q0UWqt6N_I_hAw-fj0ykUIRjSXFjAE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I can tell by the amount of slime she's piled onto herself.",
                "line": 364,
                "start_time": "0-22-00.420000",
                "end_time": "0-22-03.580000",
                "url": "https://drive.google.com/file/d/1akVyUA1V4hbu31dXPoPMFtfV1ZfnCyWK/view?usp=drivesdk"
            }
        ]
    }
}
let setDoc = db.collection('data').doc('an_s1_e11').set(data['s1']);

//let setDoc = db.collection('data').doc('ssc_p2_c3-4').set(data['p3']['c3-4']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
