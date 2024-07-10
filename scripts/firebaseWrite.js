const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "p3": {
        "c3-2": {
            "e1": [
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Hello, Lady Alpha.",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1BE11GbdVIhy0a7UW3sXzc90nIeqPZXff/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Thank you for making time to see me, Beta. There's something I could only ask you in person.",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1aOXxYz4OEaaIuj_JavJJMRsH6x-BvXqM/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Not at all. So, what is it you want to ask?",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1x5vsA9pR881EF98jMClnoMyOHvoIaGvR/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1fcr7Efy4OgHa6WiR9VRMsc7J_Yaww85_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Beta, are you aware of the legend of the Three Heroes?",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1YGvvupwAHll29xL833f_RlycjHvWAd4B/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "The Three Heroes...?",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1YGxpXraJ2yQ_pFIi8Y2ZLNKkH3_hLUfn/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Well, just the general gist of it...",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1v-QhJSifgdHlJ2XDcdDMZyBRyeaRefR8/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Three heroes fought to slay the demon Diablos\u2014",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1nRT57XAYzsTXlej8OWx_rYG677qgJzXE/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "And in the end, one of the heroes, Olivier, succeeded in striking down the fiend and sealing it away.",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1uZvyIEx3vhXDoanxPw4EcIBowvqUAZsq/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Is that all you know?",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1WiRCAwn8qQ6PiRcMm6NZViKSr4VDbhIA/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Is that all? Let's see\u2014",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1xyb-RHUjVunaTLNcZYiGAP6M-J_Fs8Tp/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "The heroes were Olivier, an elf, Lili, a therianthrope, and then Freya, a human...",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1EXP7lvlAh9-Tr_LQaBWoh_S6rCAsS_9m/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "After sealing Diablos, Olivier became a paladin of the Church, Lili traveled the world as an archbishop of the Church, helping those in areas devastated by the demon...",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1HM6potT9zIx34PacikAp-AgRgQsP-g50/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...while Freya became leader of the people who would go on to found what is now the Midgar Kingdom. But that much is all common knowledge.",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1oyHtDBnJVIGRWz_IGskIT6vmqc5JI_af/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1dNx0RXBmNk18670ChmBaH6sh5EqEBtSx/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Lady Alpha...?",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1PJLFWPnH3iiWh75O0928JXvcp129GLW0/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The hero Olivier...",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1y5FT16EAwaAkFwNtEo4v8jgkdgHsYQP_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "In the Holy Teachings known by the general public, Olivier is male\u2014",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1zlDwEUgvHye3XmHMdWSmOSdBVp14X_s2/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "But in elven villages, the \"original history\" is passed down by oral tradition among certain clans\u2014",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/103zWjx36c7Xnw1Z77QQo9bTs63R6ZdNN/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It was told to me so very long ago that I only vaguely remember the details...",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1WDzPQG_wuxWWkTYQh_HH5FQMlyvYClzQ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...but in that version of history, Olivier was a woman.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1KMOjVdjOlUPCkU6zzk99-NLaAd2adJyM/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Lili and Freya were also said to be women, not men...",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/13g_GDRiEii-GZ8wvB-OuwpR4w5APzQg9/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...But you've heard all this before.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/17npfoVYD3XWIX-80GGG3nBriEAnnSiFS/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Yes. The truths our lord enlightened me to and the elven oral histories all indicate that the three heroes were, in fact, women.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1q6uXSfrsDVQfK5O4wLUrXqjHSzzlV_RO/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "And possession is proof of heroic ancestry.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1xK0oujMvbsDyVYY7KYIYLrgxSVjL0Udw/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "The possessed were once shown great care, gratitude, and admiration as children of the world's saviors.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1pLGnYfswBv0b5uuclwFBOdMZWpKy1keL/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Only now, there is no gratitude\u2014because someone has twisted history around...!",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/10Zha52DAPG1G8zu-KiFCpEsjgzMvNmUp/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "This brings us to the heart of the matter...",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1sHmCOxjL-ZG9E145ygBPrx_UFWq5yeBg/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The statue of the elven swordswoman that reacted to my touch in that Sanctuary...",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1HeinUkZKevelb-p67ttOGausYmhGTYIi/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The techniques she used were of an ancient style of swordplay left by Olivier and passed on in elven lands.",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1IZQX-XXnqSnLSNNFRc9dYOA4F4XtB42K/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "But then...!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1mAJguJY81ICUBXcmBSSDHebFcMnllkvM/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I'm sure of it. What were once faint memories came back to me as clear as day the moment I saw those techniques.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1e9XqE2-hBa5L2wgqGYZztcWz9FQXTp63/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "But...then that would mean the swordswoman we encountered was...",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/15aZOaHyNMjEhAbvb38MSq3IpUQo7i6ge/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Yes, as you're thinking, this is all nothing more than a guess, and could even be called wishful thinking.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1m9S44NuKZkE-kHzQ986XYNJ9VycIjo2u/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "After all, it's never been certain whether there is indeed a connection between Olivier and the Sanctuary, or rather the Cult facility.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1aGEk2C4PJXc__aAgjOMIL1h1_WIzDWM4/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Still, this would indicate there IS some link!",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1izuaAwBbnQNscikYYIYAT7sZG2ZkjePv/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...I take it this means we need to make a concerted investigation into what the world doesn't know about the Three Heroes.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1AnGMbt06lXNn7s9dYg7HUiPSbcv5nSdg/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Correct. There's no way of knowing if we'll turn up anything, but can I still ask for your assistance?",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1mL7m4h5H9CcgAjyKq56oDrH_0TPLiM3U/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...Of course! I shall see it done, Lady Alpha.",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1mjJyohJPO9vkwbJ-SjX-AZQGGXxKLAov/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Thank you, Beta. I also have Zeta on the task, so coordinate your efforts with her.",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1vX4eyiL7dDQIZofhvex6OxtekpHmOABF/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I'll gather some materials that should prove useful for the investigation straight away\u2014",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1ZsUQ8eTSVp0bhAOg0l6SyHiSdHgTa0vf/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1tPldRT8GUwmaUin2wZ0cjfdOzI0O2KwT/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...The teachings of the elven villages were never meant to be shared with others, but it seems there's no need to keep them a secret any longer.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1UtL6idzydoL96blBKkQ_ZbzOV_5sGitA/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "But as for you, Beta... I want you to see with your own eyes, to seek out and learn the truth for yourself.",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1hkIzDVydMQ_bsEaeSfjnoEUR1o9VzEWU/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The truth that the swordswoman we encountered just may be...none other than the hero Olivier.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1yRlWQpCqRS6g8d83HrpgvUwMInzAk8Pf/view?usp=drivesdk"
                }
            ],
            "e2": [
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1oTc9AhmHyvCaDS8qkkK7ReuSppQs7xxR/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Ugh... Another book full of the same stuff! Why do they keep making the same thing just with different titles and binding?!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1mwMNVchutviueSC3Q805i4115ilwztFF/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Why not just release a new edition like normal?! Doesn't the Church want to sell religious texts?",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1F0ZmcGPxan583wkwNLBVDJI9UFHNrub2/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "It's been around a week since I began digging into documents on the legend of the Three Heroes.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1pWU1945vB1igNvkyNK5DM8VvJuhQsek3/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "While I'm not all that familiar with the legend itself, I haven't been able to find anything that I'd call \"new facts.\"",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1_oKxtc8sKFlof_hxtzEn3qp6x_wPSOJY/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...And every book about the Three Heroes contains the same information recorded in the same order, as if they were made that way intentionally.",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1ceqFFwkaQoCNGMmJY2KcMY-iWnv6YtoH/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "They aren't even amended for race or region\u2014almost like there's some publishing rule forbidding it.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1oUJqYo8Dwsd4xFl5f53nkxNmutzj5h_T/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "But no such rule actually exists.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1YsN03ngPnNlbU1TY_9FknHxuzaBR5_0m/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "The publishing body of the religious state of Orum has never acted under any sense of mission or duty to create proper output...",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1V1mrc2ytoeR_XwEmewtODFFS8_AhcWfg/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "If anything, all they've been doing is using every trick in the book to churn out material like some machine so they meet the numbers needed to use up their annual budget.",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1HYqIU-zllVWoYRkblg-iih2fu0hVWpQI/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Even the fliers for the Goddess' Trial in Lindwurm are exactly the same each year, aside from the dates.",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1D0aDEpN-xTjkj7TuUrgclkyfVUk1NHt8/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "The Three Heroes...and the Goddess Beatrix...",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1bmPyC0BoUSIeaRhTUptw8BqwYyv7w6C6/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "None (Beta)",
                    "subtitle": "The Church worships the Goddess Beatrix. It has believers all over the world, with its primary church being located in Orum.",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1f3PFlat4FbwhXhQ1kGKtEj0PN37mp32z/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "None (Beta)",
                    "subtitle": "The tale begins with Goddess Beatrix bestowing divine protection upon Olivier, Lili, and Freya, three courageous souls who arose to face the demon Diablos.",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/16gxviNHHQuajX6u5ixEH1LwOAWiITYjI/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "None (Beta)",
                    "subtitle": "Now blessed by a deity, the trio became the hope of the humans, elves, and therianthropes\u2014in other words, the hope of all living beings...",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1SyImwDkzJsPjYTTb5fZthHvz5LpiwVAF/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "None (Beta)",
                    "subtitle": "Eventually Olivier would strike off the arm of Diablos with \"his\" blade.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1UKKOidZUpong3ooKLJHqvFYO1a4lzHFZ/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "None (Beta)",
                    "subtitle": "The demon was then sealed in Beatrix's name, and thus the Three Heroes restored peace to the world.",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1JCcVujog8iFI2AKnFj1HWIeZdVZPHEK1/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "None (Beta)",
                    "subtitle": "The heroes would then embark on their own paths in order to fulfill their roles in rebuilding the devastation wrought by the demon.",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1UGqc9E9OnjfTYVNDfwm2YBi7UOX3UKsH/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "None (Beta)",
                    "subtitle": "Olivier became a paladin and Lili an archbishop, and both walked the world, spreading the teachings of the Church and bringing peace to its people...",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/16PQ5EEGDBn0mLp835y915C6-OO4pETwH/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "None (Beta)",
                    "subtitle": "And Freya aided those living in Midgar, laying the foundations of what would in time become the Midgar Kingdom.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1PiZAMmUK1ODL068cr58DAUO9X_kIVD5I/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1wxRxZ_BeWY-H8ioOr9xuCUYFn5ozF3SE/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(I'm never going to be able to tell what relation that swordswoman has to Olivier with only what info is openly available.)",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/11h8qXWKM7eQrWvGRvJIissy8U4RYujSR/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(We also don't know what significance that Sanctuary, the location of the statue, holds for the Cult.)",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1Bsi8vAxdioLm2lfxcq-fgVqqyPkYdhi4/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "That swordswoman was also deep within the Sanctuary, almost as if she was protecting something...",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1Oqrflua2CA65HROYh9pFlRe0ty7CcFM_/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(...There is no mention of anyone like her in the legend after Diablos is defeated.)",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1W_VGTNQZLc8Cev7bzs0HSWmB-O5SuZo7/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(The details of Olivier and Lili's journeys are comprised of \"normal\" parables generally meant to impart lessons and social customs upon believers.)",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1gSosxQY-4vT3THBX2yrJJztBLrAJ945X/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(As for Freya, there is no mention whatsoever of how she planted the seeds of the Midgar Kingdom.)",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1KxQekObN0_xlsuxxUOt3KHwHYf4gw9WH/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(Even Midgar's own historical records are vague about what came before the kingdom's founding, almost like they've colluded with the Church to keep it this way.)",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/12KZJmbLBU9F220ZcLoFucow8gkXv-unz/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(In that respect, there is a definite impression that the defeat of Diablos caused the first half of the legend to overshadow the rest.)",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1IiOq7RkBu-Zle8fvaIR0ilvCulk62z8c/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(That particular tale entirely eschews moralizing moments in favor of a matter-of-fact recounting of the battle against the demon\u2014)",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1lonBVBE4JeQGJZ0G59rb6IjkLavYjhOa/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "That's why this portion is also generally assumed to be a fairytale with the exceedingly simple plotline of justice prevailing...",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1-NYMqkVvL6mBWWONCS2yTrvWqUBUxOtt/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...Hmm?",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1E1srOyNeLaJHeV6TaCo8U7Z7z1mbRkP2/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(...Something's odd here.)",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/19GgEsbgbipcKOEU_d1Oqj56yf53VP6e7/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(Even the legends did have some basis in truth, the fact that they're being used as holy teachings by the Church means that the details have been \"edited\" for believers' consumption...)",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1oDllVkh7Xh-YlbV7-g-FM1G9PjG-17_2/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(It should've been easier to have the heroes bravely destroy the wicked Diablos thanks to Beatrix's blessing.)",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/13Z8w-1xhsk_BXA4nyG40gkNZV1fHnxwA/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(So why have the demon be \"sealed\" instead?)",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1eRXomlivaokrr8L1o_J51rqwAjPImSmV/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "It's not like the existence of an imprisoned Diablos would serve as some lesson for future generations...",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1xADV_gMRdH93XLOk-sjRWYh79XOrBTbf/view?usp=drivesdk"
                }
            ],
            "e3": [
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "So, in the distant past, Diablos brought the world to the brink of destruction.",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1ete3WjlaUOhm4Zs6wI-2KRJdI9Y_uPxR/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "But then three heroes arose from the humans, elves, and therianthropes, took down the demon, and kept the world safe.",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/13cGXelArWmNEsFg3Gnn3wGhxFe22MMat/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "But in its dying breath, Diablos cursed the heroes.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1Q5K3YiUhhm74j0ZvpMie6rI1hr0OszMY/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "This curse was \"possession\"\u2014in other words, the afflication that was consuming your body\u2014",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1NhLfyL18h9Q31THeFgvkwEXx0iQ_pZtO/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(...That's the truth of the world as told by Master Shadow to Lady Alpha. It indicates that the Church's version is at least partially correct.)",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1Fx8cA_zc27FPcyTCjfz_fapItHqbv_tb/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(The Three Heroes actually existed, as did the demon Diablos, and the heroes saved an endangered world.)",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/18OTs9UDw4geObCKcFB528pcSzC9nR-fJ/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(But the Cult of Diablos has distorted history. The truths of the past that were meant to be passed on have been consigned to oblivion.)",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1X7ABVHiV8IsxrKHjZKNghxoa-IC2p9qS/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...But, despite it all, there is one truth that was not scrubbed away\u2014",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1oUbQ2uHIMQIyVaebHWyf1VlPBzu8Qtd3/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "The truth of history as the Church tells it is that Diablos was sealed, not slain!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1XHrpWUqlz0R8VlKFEC6qp-ZeSKOa_2Fv/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "\u2014Our ancestors, the Three Heroes... Who were they, really?",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1A4-MF7NRPaH5OdZhQzTsDEgS4nM4Vkx8/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Knowing that truth may also lead to a deeper understanding of why it is we fight the Cult!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1erw-9pFCSBWio3X0H5t88toVBQvhm-vm/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1LDiDhlT8JVRUtMv0AzduDWHWh5K8yp3g/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(Maybe Lady Alpha was trying to lead me to this realization?)",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/17U-CmSne9j6XvDPf0piVlzZCFPN8OAG2/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(I mean, I did only pick up on the relationship between that elf swordswoman and Olivier because Lady Alpha was originally from a place near to the descendants of the heroes...)",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/10pxBgZz9m_LbqTzeLvvqUHzvUhPpVrCQ/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(...There's no denying that she's always been special...)",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1r1OHWdfHlY9pd5LCYIc_2DXPblcdqlRN/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1N6biog9kUo6l9PPAWBNLJ2wiISgZlUGd/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...Heehee.",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/150Qupu-YxBxHmpm0EhOQfif1uUu4AXAe/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "(The old me might've gotten all sulky on her own, comparing herself to Lady Alpha or someone else.)",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1SpmnS1OETZEjLlXZgcyHvMvz6cx07vAD/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "But now, I'm Beta\u2014",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1yjqBPvK1jN8b752F2xlxAcTHG6szax3a/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "And Natsume Kafka!",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1l5gduISxmcFNHqExf8_CZz3r6DD5IKwN/view?usp=drivesdk"
                },
                {
                    "name": "Fan Passerby",
                    "name_variant": "Fan Passerby",
                    "subtitle": "What the?! Are you THE Natsume Kafka?!",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1Crl7YKOJqCFToPCxJJMmx6ZbqW_NtSNd/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Eep!",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1v6bRNRNIZOFyV8lD5-IouaUqfNh88QyF/view?usp=drivesdk"
                },
                {
                    "name": "Fan Passerby",
                    "name_variant": "Fan Passerby",
                    "subtitle": "Uh, um, ah, s-sorry to bother you like this! B-But I am such a huge fan!",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1APsFr0Zahq25OCBkFH_BKCz6-0rLDNPA/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "O-Oh, really... Why thank you.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1EZCTm6yvo_D_iVKusHdoyiYmRpXU35be/view?usp=drivesdk"
                },
                {
                    "name": "Fan Passerby",
                    "name_variant": "Fan Passerby",
                    "subtitle": "I-If you don't mind, can I get your autograph\u2014Ah! Oh no! Of all the times not to have one of your books with me, why now!",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1RgOK0t7H-mgxqf7Ba4bjS3nROWAUvb44/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Well, if it's fine with you, I could sign a handkerchief, too. I always keep a pen on me!",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1KQ3tk04TJXyN61fwxw6UwrsIQahkV9vd/view?usp=drivesdk"
                },
                {
                    "name": "Fan Passerby",
                    "name_variant": "Fan Passerby",
                    "subtitle": "Really?! Thank you so much! Okay, here, sign this, please! I haven't used it today, so don't worry!",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1fe8q2a7e877PhIJx3guSCLKVqYiFlDWU/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Not at all. Alright, this will take just a moment.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1sYMjY7yO96npzn1XFh8LrarlmbKtT4Ff/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...By the way, what was the first book of mine that you liked?",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/16XJs7EiQlNpQ51ylZwn_48hxeTIYFOQi/view?usp=drivesdk"
                },
                {
                    "name": "Fan Passerby",
                    "name_variant": "Fan Passerby",
                    "subtitle": "Oh! Um, \"Spider Maneater\"!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1Z9fG1fi0tFnnzi-yjRuvd91v8HvCVBwL/view?usp=drivesdk"
                },
                {
                    "name": "Fan Passerby",
                    "name_variant": "Fan Passerby",
                    "subtitle": "I just love the part where the heroes get in those mechanical giants and go to save themselves in another world!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1X_ZgXHGxM4qtv5x3s1hTQacg--MxLryb/view?usp=drivesdk"
                },
                {
                    "name": "Fan Passerby",
                    "name_variant": "Fan Passerby",
                    "subtitle": "...Wow, it's really amazing how you're able to write without looking at the where you're writing!",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/16Q4FUBQu0LdMxpsLTreTQqijlJs6yhu_/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Heehee, well, it wouldn't do for me to get so caught up in signing my name that I don't look my reader in the face, now would it?",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1I3wkUZldIIgxOtBDsQncsFP1RPqesR5r/view?usp=drivesdk"
                },
                {
                    "name": "Fan Passerby",
                    "name_variant": "Fan Passerby",
                    "subtitle": "Omigosh...! You couldn't be any more incredible!",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/139Kcb5P_8Pmz1tSL_q8sdqEXoM-mb9kP/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Oh, I'm nothing of the sort. Just please keep on reading, okay?",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1bxenA1JazWi8VCPUAhbUUrCZV4Wft6AB/view?usp=drivesdk"
                },
                {
                    "name": "Fan Passerby",
                    "name_variant": "Fan Passerby",
                    "subtitle": "Thank you! I'm going to frame this handkerchief and make it into a family heirloom!",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1cAap62xBlA3fTdWCYy-pHHrPD2sXHFxV/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Whew, that kinda took me by surprise...! Maybe I should have Delta teach me hide-and-seek too.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1l2hDbm2l85hJiiT-anlUVCPHKM5FzBNR/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...Alright! Time for me to do what I can from my unique perspective!",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1NcN7_ciYmx6JF-fTyuXbfh4s-HsMlwOI/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...Th-Therefore!",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/148vHS--6N3nvjW_IYdGEwzX1wtY8MR1c/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Therefore?!",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1mZjVqYgqFBnjVVKc0fQPmdTNucI7Fg6x/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "After an exhaustive investigation, I've confirmed that...",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1OXBMYZCpjtdlW0Z1K1Xyv9X8uYeUWxX2/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...there are no clues whatsoever to be found in mainstream society regarding the Three Heroes and the elven swordswoman!",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1TBdxso-bGYzuWZgnVNhymTibJshYNvCc/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "I checked not only all the accessible documents in Orum and Lindwurm, but also as many of the legends committed to writing in other lands as possible!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/137wD6f0LHMcp1Qcqq60cNqwHMqwMyWVE/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "In the end, I wasn't able to learn anything useful!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1L4EWdscQSvE3_0ZVWpPtaij9SYOnZZrY/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "And yet you seem so confident...",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1FKtiosagsbO2O0ifinM2ZawW-0DBasgH/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Wait, are you on some sort of high that's kept you awake?!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1_P8w6ULIiJsqzOpRnLHD0miT6B4ArtOL/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "I am! I've been pulling an Eta this week and haven't slept a wink!",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1t1FK2-1-JY6s5EEiJlwcKyDA6bgns-hf/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Whoa, that's, uh...not so great, don't you think? Part of this whole reorganization was to try and normalize our working conditions...",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1ek8n_AseJxuUeH3tdImc08-BBae-LeHQ/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "So, if there're no leads to be found in mainstream society, that means... I want you to focus on scouring the underworld!",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1DXoGrlKONBXGyFLltCUqNDc-PvO2RJ7C/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "I see now. You eliminated all other feasible options beforehand.",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1TB4HSao1IG9GVh1zZq4R55pmrNJ6yHHW/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Well, if you've done all that, guess I just have to get serious on my end as well.",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1xvyLmtHw6AY6pZ9i7lFMjTltcy-HlD1h/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...But it's not like I was entirely in the dark on all this to begin with\u2014",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1qErZO6DwFxWJAJsfcd1q10zkGUL-wB8Q/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "What was that, Zeta? Did you say something?",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1N8KvrZEy3s2kvlgOjaOYw0eP5KHMBOhJ/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...Um, no? Maybe you're starting to nod off.",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1LQeqFXJscbgI83F8E00IPRAa2fyvpDBs/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "*yawn*... Maybe I am. Your voice is beginning to sound like a lullaby...",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1DCN5DuRzWTLwmN2-9ckqHEug3sSVxizu/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Anyway, I'll take over from here. You go and get some sleep.",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1ta7kZltqvc7lMZJ4HfcIv8YU8o0Ow3rZ/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "I believe I will... Thanks, and good night!",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1X-kqzNF6xTZfE2n7T8dUWCjFsrSiFTtc/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1OdbG-9t9mALc0m7v-HxYx0cVfXmWX0CX/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...Heroes, huh.",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/13el3Wr3TdwgCasxaE_wTfmDZjDTTuMNl/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Suppose this means I'll have to face things head-on\u2014",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/10I1li9gha1FT-FvTq2U0mx1xytV8adt9/view?usp=drivesdk"
                }
            ],
            "e4": [
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Hah!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1RG3Ts7ImsjDZj-AO5p3KJcJ-u0ueIqgZ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/19iRAWX_sxMnlp_-0T1MOmh68TH1lcLSQ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(Olivier's ancient style of swordsmanship... It may not be as refined as Shadow's\u2014)",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1UVw9EB2ppddDJkkYa3KEWo197vamDSyL/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(But when one thinks on just how far in the past it dates back to, at the time it truly must've been a peerless style that emerged as if from nowhere.)",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1knmdwvteMv6NpioC0mADPcp7xQ7NtOds/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(When I was young...before I became possessed...I had only seen that style used in elven rituals.)",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1AYj9SucwRYmm-O_7Bq8oNXto2kJTcuA_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "(It's not like I'd intended to remember it. But...somehow the forms are coming back to me as if I've known them all this time.)",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/145wxxewhNNLWxbc3j7ZyMNlddg_nKUBt/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...The blood of the heroes, huh.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1CTsIu4bc7bjGNjJjai2PcUwWtA9M9aZg/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Lady Alpha!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1bC5io1i-L0ceLoaR61gFxfFd-K1WW1V6/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Beta?",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1DrlZqx-rkomzxd5C3N2QPkVIoWtVVYUa/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "I have a report from Zeta! She has apparently obtained information on the Three Heroes!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1HqUf4rr7Mbhm-y-rCppkqB_g8Z_UnH5t/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Understood. I'll be there at once\u2014",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1TPNo1bUAYKmlabb8pU4z2S-uz9ro5jcA/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...Sorry to interrupt your training, but I figured this was sufficiently urgent.",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1xgfAplqEFrghnq8A6KglxlvTDN6b9CZh/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It's fine. So, let's hear your report.",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1EgDKVKhyCAAsvE78NRvRKCEEn5_cVHJL/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1Yj8ShvGVW_bYOUyAwqCbNfm0eXD0L8ZY/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Zeta?",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1hO5tvAavDa4DXV1KR066tqQLcjDTLFYD/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...No, it's nothing.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1vvrun86u5lINb_w7t7fDGwBXD6kTATxP/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "I tried tracing the steps of the hero Lili.",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1hSJuXUGyVB0fwTiGEN66x_dWir8Y17yN/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "It's said that after Diablos' defeat, Lili traveled around spreading the good word as an archbishop of the Church...",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1dse1LwlZjntOXhqfGi6lcPqz6jbDWdXC/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...But in therianthrope society, aside from in a very few tribes, you won't find a trace of this remaining.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1umhj-BBz755nBiLpMHBfEERxvhIIwX6C/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "It's almost the same with the elves. There are a few individuals who join the Church, but it's not like the Holy Teachings themselves receive any special veneration in elven society.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/14bCsrvJLEb3oKMwneWDiQp69JBoNXksF/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "You'd think that if Olivier was a paladin of the Church, there'd at least be a few elves who followed the Holy Teachings.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1i6hTTsfp0Jio_8jh296mQdyQk4vqNQlN/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Exactly, Zeta. That's also part of why I looked into the connection\u2014",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1DS59To-z-dcmE82WAs3YXz5h6NDbufHY/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Beta's investigation of normal society came up empty-handed...which means that our current course of events has been deliberately concealed amid the status quo.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1Mvl_qsuuVqTqADqF6Ml7yhuJIgADo-Qi/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "And you're saying you've found this hidden undercurrent.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/156Oen67cGOUoU4HTSkkmiKBN9ioybdj8/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1nxbs2nakDPAqqxBYyyYBbu6sQpxepmxm/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...A therianthrope tribe that passed on Lili's teachings and the original nature of the Three Heroes did exist at one point.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1E6QMetKM79NqpBa4pn4U6r4kb5wGghQL/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha & Beta (Alpha)",
                    "subtitle": "*gasp*!",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1F5oaCZtx3Wgg9vUJEkEBYzUQRcXMauWC/view?usp=drivesdk"
                },
                                {
                    "name": "Beta",
                    "name_variant": "Alpha & Beta (Beta)",
                    "subtitle": "*gasp*!",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1F5oaCZtx3Wgg9vUJEkEBYzUQRcXMauWC/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "It was a tribe that told tales of the adventures of Lili, one of the trio of warriors who fought Diablos.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1t23zZrU48Sn2TqFutB-3XGuZuHBBhhMi/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "And...these tales said that the heroes were female, not male, and that possession was not a curse...but a blessing.",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1Yl-hmcOm9cs4JFRV4ADwmF6JtupcZFVo/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "You say this tribe existed \"at one point in time,\" so does that mean they're now...?",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1lWUU0gDBe-8AzsZ_Gz0_tnkZLXdOgwMt/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1KS6XfA4MT8yEgWJZp6Df1yXUbxvYb9-V/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Gone... Wiped out by the Cult of Diablos.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/18NzNOiqHgXnUGYHpOEDHch5sLGE-MoYO/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "But then...!",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1YZZGNRInFBpvKeaAGUJssp1iH2nEh4Yd/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Zeta\u2014",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1EkgbBtyNhUXCP3uzsPO2aS21xJERSAPi/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "But, their worship of the hero Lili lives on. It's a worship of the archbishop, no, saint passed down only among the chieftains.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1odNkBV2dmbUEHg-chiamuXyyvCcHTuGu/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "This tribe of true believers may have been wiped from existence...but there are still traces of them to be found.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1jlODra2k2kvp4VxVF9mWl8DAsI_U-bbY/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "If that's true, then maybe if we keep sniffing around in Midgar we'll find something on Freya too.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1Esjj26D_zxv76L-7_XnO-bo5fKRPSvPx/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Yes, that's true. Any thoughts, Zeta?",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1HwyATwSToz67gWM_kG1c1UTFXwLA8NVJ/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "I've got eyes on some likely prospects, but I can't say anything for now. But don't you worry, I'll find something.",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1DZxN_jLsnD5e8DHMPooKEbzkF33_pAC7/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...It's as Shadow said. History has been deliberately distorted by the Cult.",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1cAsIiMf5ewAkbAtxifK96j618yLxNo_1/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The reason for their meddling using the Holy Teachings lies beyond where that elf stands guard...in the depths of the Sanctuary.",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1gHG4wPY4p60jiRhUvb4A3zafTjvTWxL4/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...I believe I'd like to pay that place another visit.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1COWLz76r6GOhIigdjOP9YJWfTpuskkuq/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Partially to also see once more if we are able to face her, face Olivier, as we are now.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1YSmiLw2V88uDsAUm5uQqozwBMqwFRAR-/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Olivier?!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1g0D6vr5-8s_DNVAtY_ig_idGb1vUJfsZ/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Lady Alpha, do you mean\u2014",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/19io59MwelGIKfjAy_5raVZG-ndMmwOAq/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "This sense I have isn't based in reason. It may be nothing more than a delusion on my part.",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1rlilfxB9TdUcHlTz99HC4nRIHG5QH-Ln/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "But the feeling burns strongly within me all the same. That swordswoman is none other than Olivier\u2014",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1Ba1F3AI3Vx1cMryp0et5ZFkjsd1Jp3LC/view?usp=drivesdk"
                }
            ],
            "e5": [
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "...",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/12xJAeEU3TYyXVNV-wxc9KUWKBbt0rJk9/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Ngh...!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/165dsqUiVouOMUkexnNc0RExsbmbV3r73/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Incredible...! She's holding her own better than the other day!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1bTtRdRBGN2aAcbh4ECPU6u0bLaG_eaI8/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Yeah...but the difference in power is plain to see!",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1maD4q3I0IKi23VJZ0z8hnAh92Yc6wJc2/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Beta! Zeta! I'm fine... Don't try to help!",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1PH_ykKdIyPlzzIXAOrZJ7WaR-cwzCWtA/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "But why?!",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1vQpafLsXjI_ihFOS1lRDbhj66JewcUZG/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Then why prepare all those coordinated maneuvers?!",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1WImxLrjxJ7BEWewTLTU0tN1IEnsSUHTB/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...I'm on the cusp of understanding something! A breakthrough courtesy of her, no, Olivier's blade!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1IA8U1Ik-7av8gzDGBnpBMPDGfQntfq2-/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "A breakthrough?! Regarding what?! She's been a blank slate this entire time, not even making a sound\u2014",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1ERmJ1LRSV1SUR9pXzyc6M0Tt-wMzZly4/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "...",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/13n3HUSarM8ex3KXamc_hZLIseuFzaGjF/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "What you say is true, Zeta. This Olivier is like a puppet.",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1fR6M_cdn9HzKVhvLf1N7bI2hCYXip2Eg/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "But...even so...I understand.",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1SWXHlqprfyQWXfsrQZYtmmZicHS7lbix/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Perhaps it's due to the swordsmanship I learned from Shadow allowing me to \"converse\" with her...",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1WSnwwLYD6Dg3Tlc-cpLJI4_xzEITRPK6/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Or perhaps it's because of her blood...the blood of the hero...that flows fiercely through my veins!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/10Pxv9azWSOpD4AScqqilgurFgnTgU5-r/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "...",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1-5BMe4xdaq7H6R6Ty6WDwTAhZT3eibEg/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Tell me, Olivier!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1J8j_uulHf1Tq81T4sTqCVcQFPo7cXpsv/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Why are you here?!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1LaAYzNx9rPIZdhphSNny4fYV39CwdpJa/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Why do you and I share the same face?! What fate have you entrusted me with?!",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1X-mpBLIVCdXDsotaUAOD5DKG0ZsACte5/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "If possession is a blessing and not a curse, then what exactly is this blessing?!",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1FxelLDq8NvSX7JhExvCe-JdG280oqO7i/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "*gasp*",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1Jz3lKKeLFM9zM4WekDly6LKSRRy-HpXE/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "...",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1AqIJKkGLQMabteX_FecPGrFe3Jq2Kxg4/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Maybe this means she can't speak...?",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1PEgaU5nJcNaxgdhcbGPOxPd2d1UMoMR6/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Lady Alpha...!",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/12prMdINeTbdS3hs595lY6Q0Uo24xKpmb/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1PRoNfWaLiC2FUMJT6znqecsKESiaFSQ_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "No... My blade received her message.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1g_4QzUNRMEnj6Hkgok92JAYJYuJoOOzI/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Olivier...is here of her own will.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/159b9lhPn21O9KjI7ciDRqFMNLWnSo88c/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I don't as yet know what happened in her past...",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1Mv-4aGGLTMBlKKH-GU-VfXwu1GYRRSIB/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "But she placed her faith in something...and made the choice to stay here!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/16SC0gWGpsMRPafbltvjH6KA7ohNHUslk/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Lady Alpha!",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/172YDh_GqjaEjYNtg-UFNzecDLYnVWgEj/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Stay back!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1-0-sP5Z-61VmCyPznGmf6Salcgpg0HSZ/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "...",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1Vt815_f_QrlPEbeRCdgVkC5DXs1u-6mV/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Don't worry. She won't turn her blade against those who don't approach the innermost depths.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/11P44usTIvwgTd8QtKxdxYk8SM1jl3L_q/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "And...so long as the person is worthy, you'll let them pass. You'll show us the secret of this place, this Sanctuary\u2014",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1brKSgDKd_D_RyI1RL8rSheuGR7uKkYn-/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The hero's blood within me tells me the truth of this!",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1LBb8ajAjbO2op6FvLNBWKfcRcMBwKvyi/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "...",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1THCd-Q47rD8j0nmW1f8a4cgazV6aFzhT/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Am I not correct, Olivier?!",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1oSo7_5B8gStOvRmPxcwj3FIcqTAI4Om4/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "...",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/15MAkIqyAPmysMf69uy87Nse5MGieJ_C9/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "...",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1FWyV4ubqk480G8MiUE_TczgFVJdafM6J/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "She responded! Even though she'd ignored everything else so far!",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1ZagRIDlyu4ubmICu4WRBSFYEokihyQlc/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "The hero... Olivier! Could Lili be in some Sanctuary somewhere, too?",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/15YBqZmUjh_RRARzkSssqTVVpw4azc9zi/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "...",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1ZHvJhN6SpuJaufyMNd9XC6ocYMlwD9Vp/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Thank you, Olivier. Thank you for answering my blade, my intentions.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1vNHU7_gZRdFXLne-l0GmBgAwKt1QD0yD/view?usp=drivesdk"
                },
                {
                    "name": "Olivier",
                    "name_variant": "Olivier",
                    "subtitle": "...",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1N0A8HR9FbExHkeI3zBN7nw7-AW7IzXWe/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Let's go, Beta, Zeta.",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1lKolUfS8oCK8gfDqvoI59tFJe8XqBseu/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "When we next visit here, it will be because the time is ripe for us to learn the Sanctuary's secret\u2014",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1m-9QR08wqetjWos0ufiMDpDSe3ar3B4_/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...In other words! Lady Alpha...might be a direct descendant of the Three Heroes!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1Nc6bFKhqJE0pOlHr4KHl6e8BHdR7SQc3/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Oh really...",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1N5cw4sTahf2Sj9feJ9bfQNTvpFd0Ggy5/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "She always had that kind of feel to her! Not that I don't come from pretty good stock myself!",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1dI5xaD_veTI-FFVzipWXpDdgC_9pLRYz/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Wow...",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1Xj_uof0edidPPiHF9o1u1vmcw8-6Bnpn/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(The setup of Alpha actually being a hero all along was really starting to pick up steam\u2014)",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1dv1FuwJPxfWi5Ku6lYVWqFOFfE4e6eDY/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(But I never thought she'd finally bust out the \"Truth is, I've got a hero's blood in me\" move now!)",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1U0R_BqyXBptS7OAi05nPa6_C8BVJcfk6/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(I mean, yeah, everyone has moments where they think that. Like wondering if they're actually born under a fateful star!)",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1t7PMhAldDikA4BH8CA185EMbbM5QXHRp/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(...But the Shadow Garden is nothing more than part of the setting, as is our fight with the Cult of Diablos.)",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1nKLdxMGeIZ3fr0BMy8x3q-jC9oltMgtc/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Alpha at the very least is kind enough to play along with my shadowbroker game in full understanding of all that...)",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1ipGYVY4EwZMXsQuziK5_CAFcRRcaiuBl/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Basically...this is an unspoken challenge on her part!",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1CKVmEX2jZL13RxNQ6QD7YP93ELOR1j9q/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "A challenge?!",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1DAmTFoJO6xQLg-cGxwVr672kqa2wvpvJ/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Yeah, a challenge.",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1lUCkXtAFTMRGuJD8aS3JbkfTi-gjGYYU/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "A challenge saying that we can push what we do in the Shadow Garden to the next level!",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1Wg4p1tWlmvfnG7rimKJR4dSQ3ghDGBF2/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(In a nutshell, she's taunting me, saying I can do an even better job of being \"Cid\"!)",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/18OucfFoXS_iEIVjItDrJUGDKIOOCsmMK/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "So...does this mean we'll be refining the Garden even more through challenging the secret of the heroes?!",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1FpBEi9d0Y0tj-prA-XD3cvCslMAsQj6d/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Hmm... Alpha is not one for compromise. I think we can assume this is her gaining new awareness of her position and role.",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1n4cuUm0XwBBMReMaQD3GKJTM5uA5JOf0/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Amazing... So, Lady Alpha made the revision plan with such grand, complex intentions?!",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1Bno_8uqgQrjHHHEipOhT_ednyrem6JFh/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...In that case, I really have to step up my game!",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1miJQz35B4HMwnPFecF5fJ2ra8z1_sOrj/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "O-Okay...",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/195nUDP9KZOxJEsfqcavxIRMItQOV5BzO/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "I'm going to work even harder to strive toward my ideal self, regardless of birth, ancestry, or physique!",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1xl1faYqZ1U-lIIMxd7luPnFHT9M3Vg7w/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Good, that's why you're Epsilo\u2014Um? Physique?",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1yAi25LGSAkohZwTSGRjUkWTazFiHp5gN/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...Ack!!!",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1Pdvd89sc7lAD7JpPwhC4qBadJ-H4Fie1/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Ahaha, oh, um, never mind that last bit! Ahahaha!",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1D91GD4GfbCNyX2lKEwhJT6xrDcJgNcX5/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Oh, okay, ahahaha!",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/1yBWXYOfP6u4fGnV5IIKaxSpzzZNKhg1c/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Alpha pumps up the setting, and Epsilon pumps up her slime. A true Shadow Garden revision plan!)",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/13mCjkGuR6IgHEPKEaKNnhlh7un4qyeWg/view?usp=drivesdk"
                }
            ]
        }
    }
}

let setDoc = db.collection('data').doc('ssc_p3_c3-3').set(data['p3']['c3-3']);

//let setDoc = db.collection('data').doc('es_nvacs').set(data['nvacs']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
