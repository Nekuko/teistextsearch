const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "lshn": {
        "e1": [
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "\u2014And that wraps up the status of this year's Halloween.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1nEYZbGoKLSgXAQ8eVgxx_BeV1zwSRCa4/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Within the private office of the Shadow Garden, Alpha listens to Gamma's report and nods with a satisfied expression.",
                "line": 2,
                "url": "https://drive.google.com/file/d/12_J70WxyC9j6qmWpMsQDQ0d22R4D3HL8/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm pleased to hear that it's been a tremendous success. The Halloween event he suggested has taken firm root in Midgar Kingdom.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1xfeNaLI0yKYJwN8o7FZbIpCdwSjqw1-z/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Certainly. Mitsugoshi's branches have also achieved impressive sales figures and established a solid reputation.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1QA68P49M9uO_GkrqR_dsrLCfPhl2OPZV/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Well then, what's with the long face?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1PRjvthqmwFRzsocYh4--TlDCgxFbUKey/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...Huh? Oh, my apologies. It seems my emotions got the best of me, and I've let them show...",
                "line": 6,
                "url": "https://drive.google.com/file/d/1THFO6uTfBi1LV9F9oL15A5dgU4GULWb5/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What happened?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1lac-ykKFS2463NyMDlyzMI4nqiQoArDc/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Actually...this year's Halloween has been even more successful than anticipated, so we're currently mobilizing all of our staff to handle the situation.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1-SvAMHQxnUjigy3BzEJrVnAn4LT8-Oey/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "To be honest, it's been so well-received that we're experiencing a shortage of staff for our pop-up stores and branches...",
                "line": 9,
                "url": "https://drive.google.com/file/d/1g9Tp9bw05zCJhDHti7ISeNtMsDcNP4o_/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I see. So we're already understaffed even at this stage...",
                "line": 10,
                "url": "https://drive.google.com/file/d/1zJRFPg9LV8bV8w7QxkSUX8wiiFpeB_Rx/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes. We're hastily making arrangements to provide training for several individuals, including those from the Garden's Numbers who seem promising, with plans to dispatch them to different branches.",
                "line": 11,
                "url": "https://drive.google.com/file/d/15sboP4ZprZnQVXQzHyXDd9B8tD5Nc9Jr/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "However, we've already received personnel requests from our pop-up stores that can't wait until the training is completed...",
                "line": 12,
                "url": "https://drive.google.com/file/d/1GO_m9TK7mrTs2ugp5eHgKO3cqBHErP4m/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Is there really nobody available? No one at all?",
                "line": 13,
                "url": "https://drive.google.com/file/d/1LKdvJyQhhAdnmc6p79OATK-gHICTynsn/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Umm...",
                "line": 14,
                "url": "https://drive.google.com/file/d/1IM46gKhgkjSmdsa9ylcWCTHmHTXmvjbO/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Gamma?",
                "line": 15,
                "url": "https://drive.google.com/file/d/17XMCKvVJ-ZDTkoxs6Nzfi5_iHyjc-NVd/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...Delta and Eta are still on hand.",
                "line": 16,
                "url": "https://drive.google.com/file/d/17UNmYfnBGWisU2lYLTiWyOXxpKkvky7e/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Alpha prompts Gamma to continue her sentence, but she freezes upon hearing the names she mentions.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1KuTYrdUKHlYuDiLJOpswhbPeLQPnTyLG/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(If we send those two, it could potentially increase the workload at the store...)",
                "line": 18,
                "url": "https://drive.google.com/file/d/1ZbYaeaw9aI9g-gZSxB76dhJOeRMuXpw3/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(But...)",
                "line": 19,
                "url": "https://drive.google.com/file/d/1JVs17wt7Lq0knlqMyw3e7ELqwzTTH-jm/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Um...Lady Alpha?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1Fzr2wtkLdAasnFuZPjSofwHH91y5JfEa/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Desperate times call for desperate measures. We need to fill the personnel shortage.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1CduLEpLq2asZ_22eM5ZzgI6NmwIBS1Xp/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "*gasp* You mean...?!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1IccLdaBOybJcP1de19LYBV-Vtf4nCaUF/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Let's dispatch the two for a limited time and assign them to specific, straightforward tasks until the others have completed their training.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1cGNG8twI49p6VVaVXsmu6M3i8WIcvfjz/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What?! Y-You can't be serious!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1NwoMXjCJmXvW5jCmWCj8eJ0QivHQI1mU/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I am. We currently have no other option.",
                "line": 25,
                "url": "https://drive.google.com/file/d/13jEroH64EFN-P-TaUz7QWA2IY6iGO1Wn/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Alpha leans forward, rests her elbows on the table, and instructs Gamma to summon the two.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1KVY3BDJXah2Q_wdH4zgWe0zFvS_m6Fd5/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Once Delta and Eta are summoned, Alpha proceeds to explain the situation to them using clear and simple language.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1ZxE7Dn7HbKes5zWhkD9jGMo-lshP7_Pg/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I have a single task to assign to both of you. Go to the pop-up stores and give out sweets to the children as part of the event.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1IZ4RV49tg-L1nEemdZEt0BzwowwG9bgp/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Why do we have to give out candy?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1M7-ZFZ5MjT8SHDyQPdDC4jHouQufVx91/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It's not just about clearing excess inventory. The goal is to boost sales at the main store by giving out candy at the pop-up venues.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1D3Oo1WSpmHMMZ2IDQwbPwYId3delbChP/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Boost...sales... Um, wha...?",
                "line": 31,
                "url": "https://drive.google.com/file/d/1tez3C6J9b_VmEzut3E3get5ZoIqR7T-0/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Eta, you understand, right?",
                "line": 32,
                "url": "https://drive.google.com/file/d/1aZdI6AzBspqPyR7VK_ws0Y0XUVoSpS5p/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...The strategy is to lure customers with candy samples...",
                "line": 33,
                "url": "https://drive.google.com/file/d/1-oDw_pwUOGlgTn9m7UcgaZOXQudTOl6j/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What a relief. Yes, it seems you get the picture.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1LVvUtyAdVQepPdbkkOD_tEx4Cs6NSVuJ/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "But...I can't stand...crowds...",
                "line": 35,
                "url": "https://drive.google.com/file/d/1pDOQ3igk1AqrBNQPyn013FRoK5UjX9Ka/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Whether or not you can stand it, you have to do it. You'll give sweets to children who say the words, \"Trick or Treat!\"",
                "line": 36,
                "url": "https://drive.google.com/file/d/1jK8eq00vI1tqYtQLIhvDZ6cWtG5EEHnY/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Tri...ck?",
                "line": 37,
                "url": "https://drive.google.com/file/d/1WkofAqqcjdmLFbGe2ZjQjuYTYrP-1ikr/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Trick or treat. It means, \"Give us candy, or we'll play tricks on you.\"",
                "line": 38,
                "url": "https://drive.google.com/file/d/1uHs99p5RNfehdWBio7FGW7zphI8ihwkc/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What?! Only naughty children threaten others like that! I'll take 'em all out!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1uSj5aVh7poUdU_OgUDi9NmCK4LZ6B6ft/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Don't be silly! That's the way Halloween works.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1Bx3k4qNob1I5L2qSIG7THDGQmtcgXoh8/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Your job is to promote us to the children and their guardians...creating opportunities for them to shop at Mitsugoshi for future Halloweens.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1h_C2OlmArCHSV8TxMWJI89TUt-xfa1Xf/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "So you must under no circumstances \"take them all out\"!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1rIkAVAEDBF7bGfYbJHAxKxaCHa7lts0r/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Listening to you makes my head hurt, Gamma.",
                "line": 43,
                "url": "https://drive.google.com/file/d/16jdyv2xB9wFNtmjNzAlx0i0MZQ-HlShE/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Wha\u2014?!",
                "line": 44,
                "url": "https://drive.google.com/file/d/1PCj6k-OvMffoKQPM79b3bTetHM-6ZaoS/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I can't stand...mobs of children...",
                "line": 45,
                "url": "https://drive.google.com/file/d/1Qp1Cufsmfxs-E5o5A4yURr5O473rLXpD/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Ugh! Eta!",
                "line": 46,
                "url": "https://drive.google.com/file/d/12jpeOkvxgl_uos1iN0AKYYXnEkwC-V_Y/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Gamma turns away from Delta and Eta, facing Alpha with a look of desperation.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1l6sAm4cgHy1P8ozf77URyK3h8foIIIJ-/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Lady Alpha, sending these two to handle the job is pointless... We should wait until the others finish their training!",
                "line": 48,
                "url": "https://drive.google.com/file/d/196NEVIkhaswIE9tzy5MsxpDlV28EEA1T/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Grr... I may not get what you're saying, Gamma, but I won't stand being made fun of by you!",
                "line": 49,
                "url": "https://drive.google.com/file/d/10uM23mS_sjU-j3hRg0tfx9Ss_hBfb1xv/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Hm... If we don't have to go...then I agree with Gamma...",
                "line": 50,
                "url": "https://drive.google.com/file/d/1F788dy9TBqxFU-J4w8_ETlx2JlSSNO5D/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "We can't include anyone who lacks comprehension or motivation as part of the workforce!",
                "line": 51,
                "url": "https://drive.google.com/file/d/1DyT26UmT0n0eAq4mISQeapBKybb4f5MU/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Quiet, all of you.",
                "line": 52,
                "url": "https://drive.google.com/file/d/12lxF0QdyGkFrG8dQbO9tZKKESbboBHcL/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Alpha raises her hand to silence them, and all three stop talking and freeze in their tracks.",
                "line": 53,
                "url": "https://drive.google.com/file/d/12ZTJ1YgADzZlLxBoVOGKHEcioLF312RQ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Gamma, beggars can't be choosers. You underestimated the situation and didn't make adequate preparations, correct?",
                "line": 54,
                "url": "https://drive.google.com/file/d/1ZbVnI8CAfGNLrSgkMCVU87ztxxVQT7UP/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Y-Yes... My lenient judgment is largely responsible for our current predicament...",
                "line": 55,
                "url": "https://drive.google.com/file/d/1Ve0gZ1vQ88XnkR5Cj4Ug-lMgfVKTYk4J/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Delta, your task is simple. Give sweets to children as part of the pop-up store event.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1NpA3wg5BzhfH56AMS5A2m2O1UJLIMr3I/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ha-ruff... I-I can do that...",
                "line": 57,
                "url": "https://drive.google.com/file/d/1gMtOJzNs_PfqOZCyDHXmlA7b61kXA8-X/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Eta, take a moment to carefully consider the source of your research funds. Now, answer me: Can I entrust you with this job?",
                "line": 58,
                "url": "https://drive.google.com/file/d/1lG4L7KVUcF3OJLJiWXwk4na5E_Tc73O-/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...And if I refuse?",
                "line": 59,
                "url": "https://drive.google.com/file/d/1AnVlW4zvjZENbXxnzAzqKHbD3Yw8YX1Z/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You know what will happen, don't you?",
                "line": 60,
                "url": "https://drive.google.com/file/d/1X4FQNa8G_DpkoRRB9S3c1sHrnWOZ6qUS/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "My research funds will be reduced... Ack... Understood...",
                "line": 61,
                "url": "https://drive.google.com/file/d/15xLKRkk-1HZUxQ_XFiaw8bKVCYqnJx2B/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "After hearing the responses from the three, Alpha's expression softens, and she claps her hands together.",
                "line": 62,
                "url": "https://drive.google.com/file/d/1T4wykxFX3c4LOSXHft5LreztGxgGNNd6/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm glad we've come to an agreement. Delta, Eta, head to your destinations immediately.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1uTux4gJXQOUq5wTaF3pewvxSdVKCNMZf/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Y-Yeah. Okay!",
                "line": 64,
                "url": "https://drive.google.com/file/d/1Jer8o20BuPadRlIKJYRJPO9RACFlKcol/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Copy that.",
                "line": 65,
                "url": "https://drive.google.com/file/d/1pxq0_Yb2FxgqYAl1_cuZXl-l13uby_P-/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...",
                "line": 66,
                "url": "https://drive.google.com/file/d/1S4zYLyvf0JxKQ4estVkBoLZqtR6gGGpF/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Lady Alpha?",
                "line": 67,
                "url": "https://drive.google.com/file/d/1_uJG2WqvAswzCsNKSqKik5a_vlKfCsGC/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...I'd like to believe everything will be fine, but Gamma, please ensure the others complete their training as soon as possible.",
                "line": 68,
                "url": "https://drive.google.com/file/d/1I4r6mlZSbo-MVI6PlKaIdzHpOnrfOSq1/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Understood.",
                "line": 69,
                "url": "https://drive.google.com/file/d/1QQEmbfTY_zyKqEZY9Bapff5a6FVgqSkt/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(I just hope pressuring them into this decision wasn't a mistake...)",
                "line": 70,
                "url": "https://drive.google.com/file/d/192QyORhnXKtxNhcfR1vP5PCk-pK3uouK/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "As Delta and Eta exit the room, Alpha gazes at the door with a concerned expression on her face and lets out a deep sigh.",
                "line": 71,
                "url": "https://drive.google.com/file/d/1cvpHMgRSuJj6U18UV3LSm-pQrISVluHU/view?usp=drivesdk"
            }
        ],
        "e2": [
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "W-Welcome. Thank you for coming. S-S-Such fine weather we're having today\u2014",
                "line": 1,
                "url": "https://drive.google.com/file/d/1RrhU98UJHjklvnCUGejKURObp-fAD4DF/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Wetter?",
                "line": 2,
                "url": "https://drive.google.com/file/d/1iFcOOEYP-ijRoFvTHyoYXdqtQdw2c3q_/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Skip the pleasantries. Just give us the details...",
                "line": 3,
                "url": "https://drive.google.com/file/d/1j1iyjgygD-IUg6aXuJjF2rzdmMoePSJj/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "R-Right!",
                "line": 4,
                "url": "https://drive.google.com/file/d/10KlMsqjtPWScJcB4t8r6CeT_emdKLO_l/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Face-to-face with two of the Shadow Garden's top members, the pop-up store branch manager struggles to maintain her composure\u2014her knees tremble nervously.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1_L8mhTMEn3ymIOymY-bTlMZb8asigTSK/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "U-Um, I see you've already changed into your costumes. Lady Delta, Lady Eta, we'd like for you to go out into the city dressed like that.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1nj4XvpjXP8y0R6a0bVLpukOznImQ3IkU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I'm an super-smart witch!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1kA2tYMm45_V--Oq0nkFn03jjT5tXV9kr/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...I'm a fluttery vampire...",
                "line": 8,
                "url": "https://drive.google.com/file/d/1Rv2Wsj2ol69Qq-AXGWX7GHKWJBDVyzBN/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "The costumes suit both of you very well. Please try to enjoy the Halloween festivities... I do apologize for burdening you with such work. I feel terrible.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1xCKQZwYlAMNrom-aK3f7SDVtfcVYVDnF/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Tell you what. I feel terrible about making you feel terrible... We'll just leave...",
                "line": 10,
                "url": "https://drive.google.com/file/d/1Ua1jXq7ZJ2K56cbH1CMx902IOAe_MHRM/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "No!",
                "line": 11,
                "url": "https://drive.google.com/file/d/15Kisscg1tVDz_62KX9h7z5h_97DDC_08/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "If we go back without doing anything, Lady Alpha will be...really mad at us!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1QGz7knoqUu_obwbNdK_jwVRtS2CCOlUX/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Just thought I'd give it a try.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1yRfPBPiRetoBsKiSktzZLYpSTOFOqowb/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...We'll complete our mission properly. Tell us the details...",
                "line": 14,
                "url": "https://drive.google.com/file/d/1R-FIka22DFruZSUW0rvqVXLJry3_yKVg/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Understood.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1fb4_MRVwfr_dehGvD69ajo8G-aubSU0e/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "During the Halloween event, we'll be handing out ribbons exclusively to children who have made purchases at Mitsugoshi-affiliated stores.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1cMfimG93679W9hkod8ZGtqc5utHmT9Xw/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ribbons?",
                "line": 17,
                "url": "https://drive.google.com/file/d/191rRue__K4sT3Qr3361G-HJSDNvsk85f/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "These ribbons come in three colors: red, blue, and yellow, with each corresponding to the amount spent. We would like you to give sweets to the children based on the color of their ribbons.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1u47B5fcyLE9-5W8pDe1rh8nrnyGvJ3vz/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "When children approach, they will say, \"Trick or treat!\" If a child's ribbon is red, please offer them both cookies and candy; for blue ribbons, just cookies; and for yellow ribbons, just candy.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1K_jTXTSv7JnW44cd-E-F-UXlHuj-Di8O/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Okay got it. Is that all?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1YLKjrhmMqas43haRFTyjhiFMT-BcWxYi/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Y-Yes... Once again, I'm terribly sorry, but can I leave these tasks to you?",
                "line": 21,
                "url": "https://drive.google.com/file/d/1_FOXxRN-3OGck5U6cuX6VkPluOIBDGwI/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "No problem! Leave it to me! I'll handle it just fine!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1kmMS_C1AhweEcTYT0aNrr-TH_UxDCw_t/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Giving out different sweets based on the amount spent? Trust Gamma to come up with such a messy system...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1YzNB8ZChi7KhVinHwXciGusUQz8Pezjq/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Messy? I prefer a mess of cookies AND candy!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1SlosguMQfomR-OYptYZXRFtqlRjMXYmO/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Yeah, that's not quite what I meant.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1dN53lRbRokWNi_evHzRJiThV6P4RFT4l/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Well, anyway, it'll be more of a mess to explain...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1bx5X62CZhby7PIPh598VucJaGqNvSSkC/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Alright, Eta! Off to the frontlines!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1wx9mAoVNqgFw_Jqjfb4D-09qJBDzlYGW/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...What the heck?",
                "line": 28,
                "url": "https://drive.google.com/file/d/16ET2C2npJo10CQNNXrTNcWn_pyapilQz/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "It's something Boss man said before!",
                "line": 29,
                "url": "https://drive.google.com/file/d/14kO06uzl90afZKOo4pxPzBy7VqIt9fEr/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Hmm...",
                "line": 30,
                "url": "https://drive.google.com/file/d/17vQTZdLyP7tZER_om8LrdhC7T1DuBzzH/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Watching the enthusiastic Delta exit the room, with the somewhat reluctant Eta in tow, the branch manager finally breathes a sigh of relief.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1IflWZcoM4JzOYW2cRvLY2SROI9_mHt_p/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Delta and Eta venture out into the city carrying baskets filled with sweets. There they immediately ay pam surrounded by a throng of excited children\u2014",
                "line": 32,
                "url": "https://drive.google.com/file/d/1brMfG487F7mPN_ObyTJ6wtLqLLUdPLML/view?usp=drivesdk"
            },
            {
                "name": "Girl A",
                "name_variant": "Girl A",
                "subtitle": "Trick or treat! Give me sweets, witch lady!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1cllQc6_o1-SEoI7FClXDmbDUag9UYX2D/view?usp=drivesdk"
            },
            {
                "name": "Boy A",
                "name_variant": "Boy A",
                "subtitle": "Trick or treat! Me too! Gimme!",
                "line": 34,
                "url": "https://drive.google.com/file/d/146dVtNXM06eTViCdaGfY7-n0Dn9jJFrs/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hm?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1NSUG2DQjwEmr48tmYUOtSU8lA_QxCsYo/view?usp=drivesdk"
            },
            {
                "name": "Girl B",
                "name_variant": "Girl B",
                "subtitle": "Trick or treat! Hey, vampire lady! I've gotta red ribbon!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1nji7MXdu1eZ4qse5uzqI_IrAsC0ieSPJ/view?usp=drivesdk"
            },
            {
                "name": "Boy B",
                "name_variant": "Boy B",
                "subtitle": "Mine's blue... Oh, I forgot! Trick or treat!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1PFf2jXHYIFTnMF9oMGZ-eTlrMhJC9yrw/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Red. Got it. Blue. Here you go.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1WOBs_AORBByTdhBgyQ9TfNDiJD53Q_vt/view?usp=drivesdk"
            },
            {
                "name": "Girl A",
                "name_variant": "Girl A",
                "subtitle": "Hurry up, witch lady!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1ORystnt_ZXxzzCrzPlWAUHCrtXyAKGJm/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Umm... Red is this and this?",
                "line": 40,
                "url": "https://drive.google.com/file/d/1VYgWnHM_tB7waxnz77nvJKfLr9ktoPwv/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hmm? And this one too?",
                "line": 41,
                "url": "https://drive.google.com/file/d/11p4PC7bfe6JPO2ttDVO3tZ61YvX-A9pc/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...",
                "line": 42,
                "url": "https://drive.google.com/file/d/1uJtyLFnNwrJVucWR6Rji-2Fq-Dnb-Plx/view?usp=drivesdk"
            },
            {
                "name": "Boy A",
                "name_variant": "Boy A",
                "subtitle": "Mine's yellow!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1MzLSRD7ryBRUZ7zRKfKN7nfYWx6K7Pfu/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Yellow...is this and this? Oh, and this one!",
                "line": 44,
                "url": "https://drive.google.com/file/d/1sJUTcVUb0AbwqvDRiBpK_gqhvG4JH77w/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...",
                "line": 45,
                "url": "https://drive.google.com/file/d/16xmWy5L4OmHL1--hkGCOguGUpsEfGDHm/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Perhaps due to Eta's leisurely pace, most of the children flock to Delta.",
                "line": 46,
                "url": "https://drive.google.com/file/d/10ClmEl1dMx0pzoke_yvErB2e-yWJYT_K/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Oh well.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1BjODUqf47OdedvqsvQqFIt9ca2hkc5KM/view?usp=drivesdk"
            },
            {
                "name": "Boy C",
                "name_variant": "Boy C",
                "subtitle": "U-Um... Trick or treat...",
                "line": 48,
                "url": "https://drive.google.com/file/d/1TBnSTpEJ-Ooo59YUp1Ooe1Znc3xsZpnE/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...A yellow ribbon. Candy... Here you go.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1Nud7Vbfjm2uHTLU1u1XOyam6prGIcjao/view?usp=drivesdk"
            },
            {
                "name": "Boy C",
                "name_variant": "Boy C",
                "subtitle": "Th-Thanks! Bye, miss!",
                "line": 50,
                "url": "https://drive.google.com/file/d/1A7YOepneF0W2zBkTjreA3LHRWHnG_Zz2/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Bye...",
                "line": 51,
                "url": "https://drive.google.com/file/d/1pRhnrkLZfDuPXcpOhnaY9317S8xT94cH/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eta! What's taking you so long?",
                "line": 52,
                "url": "https://drive.google.com/file/d/1OqffzBXU_QknpUpR2XQXd_qDlr57jypm/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Heehee! I'm already out of sweets.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1xes6PO2-k_YJr8eCHXCI_b5Y7_PuIFnF/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Already?",
                "line": 54,
                "url": "https://drive.google.com/file/d/1t8qXA6Jo0VEQ4zFypgWSFmAEOpy3FA2O/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I'll help you with yours, Eta!",
                "line": 55,
                "url": "https://drive.google.com/file/d/1fHpjMlKLZjJY8GXfn8Rsy89hyAP0_QNY/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...",
                "line": 56,
                "url": "https://drive.google.com/file/d/13jtPQrhiVDLCdPcccWO6M77IKKInmYfL/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Sure. Thanks.",
                "line": 57,
                "url": "https://drive.google.com/file/d/1hkhKetYiu7s6u_SP5X7r_irZ1-t60uKJ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Leave it to me!",
                "line": 58,
                "url": "https://drive.google.com/file/d/1yxAeQnm63d99O0OiM30wAj3lMcXfqkVj/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Eta hands her basket over to Delta. In no time at all, the mountain of sweets rapidly vanishes.",
                "line": 59,
                "url": "https://drive.google.com/file/d/1mjBtY4ArOBuX6idv_LrKe-2BeC_vB5Zw/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...",
                "line": 60,
                "url": "https://drive.google.com/file/d/1JNW_2n-JS1HAWV8iOqVT2eG3nMp-NqYq/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hee-hee-heeee! Finished!",
                "line": 61,
                "url": "https://drive.google.com/file/d/17Ju63_CVDFgYXTek0rjRy-MerwLSJYM4/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Mission accomplished! Let's go report to that girl from earlier! Hurry up, Eta!",
                "line": 62,
                "url": "https://drive.google.com/file/d/17tUcVoreiuBGFsPloCLr7aoD9VdmFuiL/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Okay, okay...",
                "line": 63,
                "url": "https://drive.google.com/file/d/1pu6UO7uNYfJmpGLw1ad-rcrf264NOPfX/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Similar to when they entered the city, Eta quietly follows behind Delta as she enthusiastically walks ahead...",
                "line": 64,
                "url": "https://drive.google.com/file/d/1L_CFn-xcccURTE-Rj1cFGzzm7rYWWOSc/view?usp=drivesdk"
            }
        ],
        "e3": [
            {
                "name": "",
                "name_variant": "",
                "subtitle": "After giving out their sweets to the children, Delta and Eta return and report to the branch manager. However...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1vIGSYf0w6vr_DbY0B-f8rUNftIVt5kPo/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "W-What's going on?! The amount of candy distributed and the sales don't match up!",
                "line": 2,
                "url": "https://drive.google.com/file/d/1K765H9X-LAMgss2KRuqPimt9dSVG33d1/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I distributed them properly.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1miO0y68sIhmM5erLgxOS-jZKGeB3ggRw/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...That's a lie. You got confused pretty early on and handed out candy and cookies as a set to everyone.",
                "line": 4,
                "url": "https://drive.google.com/file/d/12ftweVwzh5nn2gwPSmE4Y3RcyObttWQW/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Grr! If you knew, you should've told me then!",
                "line": 5,
                "url": "https://drive.google.com/file/d/14Kq6jCMo1CNaN6hSY_yeu13XKFnHrwG2/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Too much of a hassle...",
                "line": 6,
                "url": "https://drive.google.com/file/d/1vQkcZd05mcPq2FdNXdW3DT0QT0mTcTCB/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Argh! With all due respect! Please don't just pass out sweets at random or ignore mistakes you're well aware of! Take this seriously!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1idNAg60pSCUaJ3flP1sdhenpiSzn1BKG/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What's with the sudden attitude?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1KFsVWJ9facXaHTAoAbSB5YiySiKDCDb7/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "...Well, Gamma did pick her as the branch manager. She might be the type who steps up when it really matters.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1xZgo6lRueX0l-cLBM7lyJfFV4-iDdyFg/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Halloween isn't just about having fun! Please, for this branch...and for the company's sake, lend us your strength!",
                "line": 10,
                "url": "https://drive.google.com/file/d/1KLPrtVrjPH0IKJZ1sOHPkBJvqZcZtFJQ/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Seeing the branch manager's resolute expression as she pleads desperately, Delta shifts her gaze uncomfortably.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1UDVZwqNII532ppFlsXpT7Iamb-ixxYaD/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Argh... Fine! I'll do it!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1Tue5jnbjhSQlAVljqt79_r_NvQENiHkY/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...",
                "line": 13,
                "url": "https://drive.google.com/file/d/13TJWerO8zQuwZLXsx7dU3eRc45eIH9-M/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Not that I can picture you suddenly becoming competent.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1uU1bP0PqhTPK5CGVkqqxbYuaKlLmhbBz/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What'd you say?!",
                "line": 15,
                "url": "https://drive.google.com/file/d/135aGWHloyF1za4eEtNMP71tTYfCqXyE9/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Hold on a moment. I'll be right back...",
                "line": 16,
                "url": "https://drive.google.com/file/d/1e7q_KOfLh5gI0irEl1cCQeAv7DzC6xDU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Huh?! Where are you going?!",
                "line": 17,
                "url": "https://drive.google.com/file/d/17ael7FfeAuXpnL4Iot0m0q7lKRZXwGg3/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...To my lab.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1QlOgmx8DxMQRAV2WAFDe7qrLnP5z59bk/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "With these words, Eta leaves the branch and makes her way back to the Shadow Garden's hideout.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1SBwsTHrd131OJKpci1lxiLA92AiC5lCW/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...So? Why did you come back here?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1yynwqICbrrx1ZSLix12bpOlfasXYM6eQ/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Eta is meant to be at the branch, but she returns abruptly, leading to a confrontation with a puzzled Gamma. Eta casts a fleeting glance at Gamma before heading to her lab. However...",
                "line": 21,
                "url": "https://drive.google.com/file/d/1C-RWQ3rUhBbmXLPHOj2lmUhWgjOSnjeE/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Wait! Explain yourself!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1Gt36MyxJ27-NvnZa-KulFkmCO5juGMr6/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...I'm in a hurry...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1FBfnycxzicKm9PJiTcsp4nSS-SGDwJxA/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "*sigh* The branch manager is in trouble.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1UT3m-mFSf81P6iDEHomfTaGf5rkQT1J3/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Huh?",
                "line": 25,
                "url": "https://drive.google.com/file/d/1qkhiUDZUCt_ZBio_N6X-yVFOAJTkxdvC/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "So, I'm deploying a secret weapon.",
                "line": 26,
                "url": "https://drive.google.com/file/d/12Oh7dggiEASvNnUIzFmjbhajsbIbz8Dm/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "A secret weapon?",
                "line": 27,
                "url": "https://drive.google.com/file/d/1DQtUkgL9Cl6K9_tkm4zp_Bl6iNuWzoXg/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Yes, it's for the branch manager. That's why I need you to allocate me a budget.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1NzSs9jiquUUyigjp9e2j1FVu7d9szKCn/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...",
                "line": 29,
                "url": "https://drive.google.com/file/d/1j-mI9Y7fHCZ6UIE0EWojZ2ZomXhWKKvn/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Who's responsible for dispatching us two troublemakers? That would be you, Gamma.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1eOjTc5IGgcT7-wJqSoehHoTQQqndalhm/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What?! Are you putting the blame on me?!",
                "line": 31,
                "url": "https://drive.google.com/file/d/1zcQVIpaOxd-TM6bo07B8MuJjZAYiBAjL/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Own up to it.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1FD-Qj_JePuxjVHJeNTkUiMHZ1Mpb-hRl/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...Alright, I'll do it. Just make sure to keep the budget as low as possible!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1C80nVcaOLOjDw3d_tpHt6LbXq_hgmcwh/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Got it.",
                "line": 34,
                "url": "https://drive.google.com/file/d/155FUo00gdrCxqYFqhX4M-bv_qBvka0nE/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Eta holes herself up in her lab to craft a secret weapon. Once it's completed, she returns to the branch with it in tow...",
                "line": 35,
                "url": "https://drive.google.com/file/d/15SNV0a1N7nMWGos0t1NNyvgH-syXU30p/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Whoa... That's one big thingy you've got with you.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1lbeVH_b5IQAuCuQ3sDldafp5WxAyRZnn/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "What in the world?",
                "line": 37,
                "url": "https://drive.google.com/file/d/1ecSAMRmjrNhPpy6JPKaBgg3YDPuAFkEr/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Facing Delta and the branch manager, Eta stands proudly next to an object concealed beneath a cloth.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1HfQO2YqmqSTDiv4s7yl5urvLc2Kkciid/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Ahem... Inspired by vending machines, Shadow Wisdom taught to me by Master Shadow... I present to you...",
                "line": 39,
                "url": "https://drive.google.com/file/d/1qETBOysiRakJUGyddiguKC3vhVVk6NmG/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Mr. Vendy the automatic dispenser!",
                "line": 40,
                "url": "https://drive.google.com/file/d/11QB7PcNxYSymspbvhSaimomMXuQWEUZE/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Eta removes the cloth, unveiling Mr. Vendy, the automatic dispenser, in all its glory.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1SOhjordtp0kFr-A8rJENg0iB5oDEWGzL/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Wh-Whoaaaa...!!! It looks kinda cool!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1D3PSlw2acYlC0NxsvnZMDmdd8pT2-c1D/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "S-So this is...the Shadow Wisdom of Master Shadow, said to be granted only to the chosen ones!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1A5Z7HcAfIJNC71osT4yymLKRImzDRQXP/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eta! How do you make this thing work?! Hurry up and tell me!",
                "line": 44,
                "url": "https://drive.google.com/file/d/1M7c0uFA_4l7OTULhQbr1AkFly1BJjFPZ/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Well, seeing is believing...or something like that. Let's see it in action.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1zgQ-To1JBYSDGJa0ll66Vo3UzCg-EdCB/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Delta, Eta, and the branch manager head into the city, bustling with Halloween spirit, to witness the capabilities of Mr. Vendy, the automatic dispenser.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1_JnLN8Yv12E_5ksGv1udR3DykIvo5lTM/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Eta sets up Mr. Vendy in the same spot where they previously handed out sweets. After a while, a child approaches...",
                "line": 47,
                "url": "https://drive.google.com/file/d/1dRpvvep-XLMtKMZZtOVxFGQ0PVtN-9HB/view?usp=drivesdk"
            },
            {
                "name": "Boy A",
                "name_variant": "Boy A",
                "subtitle": "What's this? It says to say the magic words... *gulp* Tr-Trick or treat!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1twPNGRo6A0ISkDM5i_QhYdzMMFWInENT/view?usp=drivesdk"
            },
            {
                "name": "Mr. Vendy",
                "name_variant": "Mr. Vendy",
                "subtitle": "BEEP BEEP... BLUE RIBBON... THANK YOU FOR YOUR PURCHASE OF OVER 5,000 ZENI, UP TO 10,000 ZENI.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1w4QZGxGqkLtmTv6qw8qsv1LqTNM3izSC/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "With a clunk, a package containing cookies dispenses from Mr. Vendy.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1wlz1ETN8TqlDr0Kk17M9SNrZ96rbBVgJ/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Wh-What the...?",
                "line": 51,
                "url": "https://drive.google.com/file/d/1madMuBrNvcgqsclFHAkG-MjHP8VVis4x/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The branch manager's expression stiffens upon observing the mechanical response devoid of humanity. However, Delta's eyes gleam.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1InsU865uOfPaAeBgMndzjHl9MvY6i9Tn/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "N-No way! Even I won't mess this up!",
                "line": 53,
                "url": "https://drive.google.com/file/d/1bURQYzgD0MPfthX9HuvHnCCQXSS8Dd46/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Forget messing up. We won't even need to do anything.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1xs9Jpc7M4DV6Sr_u9EdNk1L7NXJ9Sfcr/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Um, sorry, but do you really intend to use this?",
                "line": 55,
                "url": "https://drive.google.com/file/d/1yNnLn-MXXkpoYr6GGsDn_73AdqBgRdxN/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...You've got a problem with that?",
                "line": 56,
                "url": "https://drive.google.com/file/d/12mbbjved1jPSM5SvqCqkHF7PDV3kO1DI/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Concerned about the excessively impersonal exchange, the branch manager cautiously asks Eta, who gestures toward Mr. Vendy.",
                "line": 57,
                "url": "https://drive.google.com/file/d/1clSLKorM_VBpAveTw0vd62Ya5dEqKjBU/view?usp=drivesdk"
            },
            {
                "name": "Boy B",
                "name_variant": "Boy B",
                "subtitle": "Whoa! What's this?! Cool!",
                "line": 58,
                "url": "https://drive.google.com/file/d/1ES99DG4cjGOJzygKkAPVe05GCmFb25xi/view?usp=drivesdk"
            },
            {
                "name": "Girl A",
                "name_variant": "Girl A",
                "subtitle": "I'm first! Wait your turn!",
                "line": 59,
                "url": "https://drive.google.com/file/d/1cdZFbJtluJS3kFM7gLLWGrOzcuUK81mp/view?usp=drivesdk"
            },
            {
                "name": "Mr. Vendy",
                "name_variant": "Mr. Vendy",
                "subtitle": "BEEP BEEP... BLUE RIBBON... THANK YOU FOR YOUR PURCHASE OF OVER 5,000 ZENI, UP TO 10,000 ZENI.",
                "line": 60,
                "url": "https://drive.google.com/file/d/1za7Qf1Df9_QovLgH_WjowL0rPEwPVvyT/view?usp=drivesdk"
            },
            {
                "name": "Girl A",
                "name_variant": "Girl A",
                "subtitle": "Thank you, Mr. Vendy!",
                "line": 61,
                "url": "https://drive.google.com/file/d/1anxFc-FGWuYC4Tl_WVr4VKDlDpTaYyAU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "It seems super popular.",
                "line": 62,
                "url": "https://drive.google.com/file/d/1xfmwJVWT_Q4DeqCR_QtVFqCiCKqvG2Rs/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Everyone looks happy... I do less work... Is there a problem?",
                "line": 63,
                "url": "https://drive.google.com/file/d/1yQaTC_eloubLu05I4YDoZb7BI0Eed34z/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Contrary to the branch manager's concerns, the children lining up in front of Mr. Vendy are all smiles.",
                "line": 64,
                "url": "https://drive.google.com/file/d/1JYAPNN1fpnYKNao04sRCpjJnO45MDTxa/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Well... At the moment, it seems everything is fine. Let's monitor the situation for now.",
                "line": 65,
                "url": "https://drive.google.com/file/d/1bStm3OTY8pldKUWDSQzZzjOXJkjfObKe/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Yup... Problem solved.",
                "line": 66,
                "url": "https://drive.google.com/file/d/1WbxICQl7Ce8imV8LrSZzgf-N1emCSb01/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Eta nods with satisfaction as she listens to Delta's voice blending in with the delighted children.",
                "line": 67,
                "url": "https://drive.google.com/file/d/1xI60iG3qe-KIR3czad2TXLb-u0o3HbFB/view?usp=drivesdk"
            }
        ],
        "e4": [
            {
                "name": "Mr. Vendy",
                "name_variant": "Mr. Vendy",
                "subtitle": "BEEP BEEP... BLUE RIBBON... THANK YOU FOR YOUR PURCHASE OF OVER 5,000 ZENI, UP TO 10,000 ZENI.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1XOdjjPMfDZhvwI2vxVQhN5ncDL0HFHqx/view?usp=drivesdk"
            },
            {
                "name": "Boy A",
                "name_variant": "Boy A",
                "subtitle": "Thanks, Mr. Vendy!",
                "line": 2,
                "url": "https://drive.google.com/file/d/1Q6s67XPquZsPqqHRS6Pit50q7DAh3nPw/view?usp=drivesdk"
            },
            {
                "name": "Boy B",
                "name_variant": "Boy B",
                "subtitle": "Trick or treat!",
                "line": 3,
                "url": "https://drive.google.com/file/d/1dBS8aJtngbDWku8ktJ_8zAN-6URa5xl2/view?usp=drivesdk"
            },
            {
                "name": "Mr. Vendy",
                "name_variant": "Mr. Vendy",
                "subtitle": "BEEP BEEP... RED RIBBON... THANK YOU FOR YOUR PURCHASE OF OVER 10,000 ZENI.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1WytuoBvpvtxxfChOC5i7O94R9dyCxSMR/view?usp=drivesdk"
            },
            {
                "name": "Boy B",
                "name_variant": "Boy B",
                "subtitle": "Th-Thanks...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1R5FdjTXUqF561l8bu6l4CJoUzULJqlo9/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The newly implemented Mr. Vendy distributes sweets flawlessly without making any errors.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1ayQcTpCstp1UtKeoUDmV8v9WRE62NOxY/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Delta and Eta are standing a short distance away.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1UIdYRiIH8v-gfMtvNBM-w90yCd7r1xzM/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Zzz...",
                "line": 8,
                "url": "https://drive.google.com/file/d/1Que-yRrir1vvGvYklZ7UEIjcvSOCc77i/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eta, Eta, wake up! I'm bored!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1chwMsyLEPeuqJMJOgWtaZigCvoyC0zBa/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Zzz... Quiet... *snore*",
                "line": 10,
                "url": "https://drive.google.com/file/d/1KIxW1RkM4D136bRSH9AUIonC7_QdXWbd/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I wanna do something fun! No sleeping!",
                "line": 11,
                "url": "https://drive.google.com/file/d/12ysbFZTRrfG_YyDaMCry6Qf-kj4PQGAn/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...Ha-ruff... I said no sleeping... Don't you hear me? I'm bored...",
                "line": 12,
                "url": "https://drive.google.com/file/d/1vKSibi7-ahGiZBkzPK2GxAxRcsdWIGas/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Delta finds herself with nothing to do, thanks to Mr. Vendy's success. Suddenly, she catches wind of an appetizing scent.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1q02u-mEXXvaRLXinoFlJQ494Ol5XOcbT/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Something smells good... It's coming from over there!",
                "line": 14,
                "url": "https://drive.google.com/file/d/1c5NqzIc-UAnG0tCA2ICWc6fBY1yYUMAC/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Delta swiftly pivots her body and lunges toward the source of the scent.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1EJ8veb4Vk7MLeMo49rFUy76Ibln1OzPL/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "*drool*",
                "line": 16,
                "url": "https://drive.google.com/file/d/1brdFUIrgtnGJV3mtfFXYC6iV_i0p60CY/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Delta reaches an area lined with food stalls. She comes to a halt in front of a particular stall and wipes away drool from her mouth.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1hREm4PzDROq4x8sWrnSN0CdwPabILq0P/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "It looks and smells...delicious... *gulp*",
                "line": 18,
                "url": "https://drive.google.com/file/d/1SGsdzm7puJ1i_3HqOkz7A74gsYDh0Ews/view?usp=drivesdk"
            },
            {
                "name": "Skewer Stall Owner",
                "name_variant": "Skewer Stall Owner",
                "subtitle": "Welcome! Step right up!",
                "line": 19,
                "url": "https://drive.google.com/file/d/1KHpsP1b_T3Pwxcepz73oybTuWLCFiwXG/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What is this?!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1_iW_hVjbk0abrAk1h78ClPr8MinXBSRY/view?usp=drivesdk"
            },
            {
                "name": "Skewer Stall Owner",
                "name_variant": "Skewer Stall Owner",
                "subtitle": "It's skewered chicken. This one's seasoned with salt and grilled. That one's coated with a sweet and spicy sauce.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1JyVYjPPSDdHoH06t-ZsCuDVf5iGLgGeH/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "*drool*",
                "line": 22,
                "url": "https://drive.google.com/file/d/1Dm2ZPObttLYcz7EXGuYECbDPsKtPx45N/view?usp=drivesdk"
            },
            {
                "name": "Skewer Stall Owner",
                "name_variant": "Skewer Stall Owner",
                "subtitle": "Judging by your appearance, you're from Mitsugoshi... Would you like to buy some, young lady?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1p4P4IHDtosGHrNo5XH8axUiTH0DAs8GY/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Can I?!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1eE-pHkGQ_iDaIqgkM92w27uhFMmINmPP/view?usp=drivesdk"
            },
            {
                "name": "Skewer Stall Owner",
                "name_variant": "Skewer Stall Owner",
                "subtitle": "It'll be 300 Zeni per skewer.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1F-npMNit1YT8B5KoyKAA1xW_BGErqlPx/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Zeni?!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1bLYIqxMl7DUoP5Qxmpqk2Li_wpQH9Pos/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...I don't have any money...",
                "line": 27,
                "url": "https://drive.google.com/file/d/1yrhDdV0f0KM0zD8grWpt-tPVgg5DVp5O/view?usp=drivesdk"
            },
            {
                "name": "Skewer Stall Owner",
                "name_variant": "Skewer Stall Owner",
                "subtitle": "If you don't have any cash on you, I can put it on Mitsugoshi's tab.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1o7lfHzR75zMMRddcMq9yUKIC57GJGyEd/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Mitsugoshi's tab? I can buy it with that?",
                "line": 29,
                "url": "https://drive.google.com/file/d/10JLOVJSLTSVBexx7TnbCai7Gm9AVt4bG/view?usp=drivesdk"
            },
            {
                "name": "Skewer Stall Owner",
                "name_variant": "Skewer Stall Owner",
                "subtitle": "Yes, ma'am. So what'll it be?",
                "line": 30,
                "url": "https://drive.google.com/file/d/10s7fk5Z9rBFW0n6C225Vr-XANxtZh-cm/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Okay! Gimme the skewered chicken, one of each kind... No! Five of each kind! Put it on Mitugoshi's tab!",
                "line": 31,
                "url": "https://drive.google.com/file/d/1VVom-9PkYfKkgvWB7rOTSHjaucyp42Rd/view?usp=drivesdk"
            },
            {
                "name": "Skewer Stall Owner",
                "name_variant": "Skewer Stall Owner",
                "subtitle": "Coming right up!",
                "line": 32,
                "url": "https://drive.google.com/file/d/1v-V5-GFrXKRBFyYDfaJCMFG-ZNT1g9pu/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Delta's eyes sparkle with excitement as she holds five skewers of chicken in each hand.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1qjlNr8SUGcgkANyH3kY99EME2OdOOJdF/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "This tab thingy...! I don't really get it, but it's incredible!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1UYgohZVwl4FamJ2JVxdK5QLWXMBqwHsB/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "As long as I have this...!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1vhq2pfwAxz_wlnXHhq3N9lqzgPkA9Smm/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Delta sinks her teeth into the skewered chicken. She devours them quickly before rushing to the next food stall she spots.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1C2xppbUp1reXwA3j9UDiZVzkzy62vwgh/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I'd like your limited-edition Halloween quiches! Hmm...all types! Put it on Mitsugoshi's tab!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1t4B8HjdkugEb8K1G-5GQnnaR3gR8yyYK/view?usp=drivesdk"
            },
            {
                "name": "Quiche Stall Owner",
                "name_variant": "Quiche Stall Owner",
                "subtitle": "Of course. Coming right up!",
                "line": 38,
                "url": "https://drive.google.com/file/d/15Z-tVDMTTdkIFQuFtzZ1WcJH18DnHUYG/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Pumpkin soup? That's perfect for Halloween! Gimme a large bowl! Put it on Mitsugoshi's tab!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1UdgwGdBzuGrlCVyw_onI3YE6qNR84CyB/view?usp=drivesdk"
            },
            {
                "name": "Soup Stall Owner",
                "name_variant": "Soup Stall Owner",
                "subtitle": "Sure thing. Enjoy!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1WaU4aM_6JL7tzbVaEXqXx-naRYfhB9B1/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "No need to slice the pumpkin pie! Just give me a whole one! Put it on Mitsugoshi's tab!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1Vrs3immcF40afE-r7UrmDfzFEoa6hFU3/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ghost pumpkin candles? Hmm... Put it on Mitsugoshi's tab!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1qrXCvVdoHH-F6_aN1zJ4VYBo8vNmbUMt/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Mitsugoshi's tab!",
                "line": 43,
                "url": "https://drive.google.com/file/d/16gZwFEpGYC3G15kLU54U_rloyjytYVxY/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Mitsugoshi's tab!!!",
                "line": 44,
                "url": "https://drive.google.com/file/d/1JtUufTlr0LlaOUNsumXxZ_9CW6-bhQga/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Delta goes on a shopping spree from stall to stall. Before she knows it, her hands are full of Halloween food and trinkets.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1bSGkToIKS6I7QukTOJKkvNDQWQI-KMr-/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What else... Oh right!",
                "line": 46,
                "url": "https://drive.google.com/file/d/1g9vicG5rCLQVaJMSGP9iSf3cb5REIEOn/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I mean, it's Halloween, and there are so many rare thingies. I'll get souvenirs for Boss man!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1RazsPwrGJHcU9zHiqGkvKpcPau9XhoaW/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Candies, cookies, ghost pumpkin masks...and, and... Oh! That looks cool as well!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1WrwQMg-4Idednc9E1VwRuuXlmfSjAqh7/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "With a radiant smile, Delta enthusiastically resumes her exploration of the stalls.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1e89ue8W4okbLF-rmac9KAyjEs__3U4l8/view?usp=drivesdk"
            }
        ],
        "e5": [
            {
                "name": "Boy A",
                "name_variant": "Boy A",
                "subtitle": "Trick or treat!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1tUh2kEtgpJOOKs2-IA9tElYzop0JOgCp/view?usp=drivesdk"
            },
            {
                "name": "Mr. Vendy",
                "name_variant": "Mr. Vendy",
                "subtitle": "BEEP BEEP... RED RIBBON... THANK YOU FOR YOUR PURCHASE OF OVER 10,000 ZENI.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1kEKRf9GcPS6MVKMdvo9Oa4ioy6u4RhsW/view?usp=drivesdk"
            },
            {
                "name": "Boy A",
                "name_variant": "Boy A",
                "subtitle": "...",
                "line": 3,
                "url": "https://drive.google.com/file/d/1m2j0o9HD8e_HvJFgmqgBFzERbKeTx-Tu/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Mr. Vendy, the automatic dispenser, distributes sweets. However, the faces of the children who receive the sweets seem...disappointed.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1cH6VsYh9npqUBcH-LXJtnDCrgp7lcju8/view?usp=drivesdk"
            },
            {
                "name": "Boy A",
                "name_variant": "Boy A",
                "subtitle": "This Mr. Vendy is...kinda boring.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1tSOnnt_c1Y4G7ZFIlAhda1mav3gVovg7/view?usp=drivesdk"
            },
            {
                "name": "Mother",
                "name_variant": "Mother",
                "subtitle": "While receiving sweets is nice, the whole process feels quite mechanical... I mean, it's impressive, but is this really all that Mitsugoshi has to offer?",
                "line": 6,
                "url": "https://drive.google.com/file/d/1QmkKI8wnJwZq15dWh68AOw-C_lNsnQc7/view?usp=drivesdk"
            },
            {
                "name": "Boy B",
                "name_variant": "Boy B",
                "subtitle": "Mom, let's just get the sweets and check out a different store!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1KGelkN2Mgq-NXbEv5JXJK15uNH6N8JuG/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The initial excitement diminishes as time passes, and the children's enthusiasm wanes.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1KRe7A_fiWP6RTcSZ9lKOBUdYyxFRkRWC/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "After returning from the food stalls, Delta blinks in surprise at this scene.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1XZHgcCqHg4ghohtvfembI3FiKRu80Iv0/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eta, Eta, wake up!",
                "line": 10,
                "url": "https://drive.google.com/file/d/13ol-hHQuzDMzTl0RlV9rNQAxP61506g1/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...I'm awake...",
                "line": 11,
                "url": "https://drive.google.com/file/d/1Y6caXAQf8tO4qh9NBom8MI_VRnt1B3IE/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "They're saying Mr. Vendy is boring.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1PvO3Gu8iOba4MV4cjFTcOEHgmJuxDHuy/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Who...?",
                "line": 13,
                "url": "https://drive.google.com/file/d/1r3BhXuYYKJ10iLDidg6Bb7KbLjJVVJId/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "The kids. They're not interested anymore.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1enoni-LUqG8AASoaicLVpb3nQXPkwpfZ/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...But sweets aren't meant to be interesting...",
                "line": 15,
                "url": "https://drive.google.com/file/d/1G7cT9kHMI-c3r-npdNYuXMLO4CrTLSio/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...True.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1Ul7yuusRDVmpdLv9_BUUk8ZoOksQexFu/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Sweets aren't meant to be interesting...just delicious!",
                "line": 17,
                "url": "https://drive.google.com/file/d/10-N3VlIzYvIMa8AlZ90ont--OQVn1JHf/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Are you done? I'm going back to sleep...",
                "line": 18,
                "url": "https://drive.google.com/file/d/1rVh_CYcnsln4KeLs0jZiirsijObOFI7i/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Don't you want some pumpkin soup? I went and bought it for you!",
                "line": 19,
                "url": "https://drive.google.com/file/d/1GW1MuxhvQgT-IObJMBWHxJc85_VefJ2K/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Mm... Later... Zzz...",
                "line": 20,
                "url": "https://drive.google.com/file/d/1my81SGWY2hdDAuk_rwkCWZkc5mK3EAWI/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "She's asleep again. Grr... Fine, I'm off to play\u2014",
                "line": 21,
                "url": "https://drive.google.com/file/d/16XChAk0Q2fExwHMbfKFdpNbXikPL-H3-/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "U-Um, excuse me. Could I have a moment, please?!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1WuoepUKQOQkiud2UjxKLwmTgV9sHx9ls/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Huh?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1H1TNbiqrGGBrnjCbYZgOSU3CDO18Cztn/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The nervous-looking branch manager appears before Delta, who is about to take off, and the sleeping Eta.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1SELFBUZrBIDgPQLlMSBmKHuHI7odl0cE/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eta, the branch manager's here.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1v5Tfw7iDcLPHJmHYJt3KY-gpmCbVhskY/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Mmn... What...?",
                "line": 26,
                "url": "https://drive.google.com/file/d/1og3i2N6NaAKxBwxqRCMafTbmmXoHTKOJ/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "I think Mr. Vendy is incredible.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1MqXn0zdRbBSXBIXDaHd7A4weHELeTsgG/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "By instantly identifying the ribbon's color, it accurately dispenses sweets without delay... If we were to scale up production, it could significantly reduce labor costs.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1TAMs5I3PZ__Sgi_c5e1veiyAOndvAneo/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "She's complimenting you, Eta.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1W6gHi374EwgOGJoHbT-1o7oLxfNSlyEX/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Good to hear...",
                "line": 30,
                "url": "https://drive.google.com/file/d/1tyEIqRO-SIm3JuX67yAK6IPFWyO2nKIm/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "But!",
                "line": 31,
                "url": "https://drive.google.com/file/d/1XP_q34_eIll4ADKuGcYl-RxVTBZJ0Ome/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "But what?",
                "line": 32,
                "url": "https://drive.google.com/file/d/1cB5j7O6uyod45B9lItuVlTfKwVTaZrqw/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "While we can distribute the sweets properly using Mr. Vendy, we cannot fully embody Mitsugoshi's spirit of hospitality.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1IluFyErfDhAurnw9-DS8m3-dwdG7joZy/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hospitality? What's that?",
                "line": 34,
                "url": "https://drive.google.com/file/d/1HjxCDtadoNAWI0fEg0iFAsiZWqjVgwCB/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Customer service techniques, or something like that...",
                "line": 35,
                "url": "https://drive.google.com/file/d/18-le6rIglkwE7E_NMEPvLdgtMvfLDPY3/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "With Lady Gamma at the helm, Mitsugoshi's business has been strategically managed until now. From coming up with new products to distinguishing ourselves from competitors...we've skillfully forged our way ahead.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1d0x4g99i7JUQ-7h6g4HrAPldW9Bm4DhT/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Yet, despite our astute business practices, we've also cherished genuine customer interactions. It goes beyond mere customer service obligations. We genuinely find it fulfilling.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1ElphorUjRiEAyW6wlYD4Nx4llq_CJNsD/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Huh?",
                "line": 38,
                "url": "https://drive.google.com/file/d/1aLfPRMUpoTFGpuipYY_O9C5acajUfMyE/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Delta and Eta exchange glances as the nervous branch manager speaks passionately to them.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1qo8isjrge4GiLgpcgU33k2miPC5XTNpb/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I don't really get it, but are we being scolded?",
                "line": 40,
                "url": "https://drive.google.com/file/d/104fI9R0vJjD4vdL1_0KMV3Q6ujTCdUAU/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "You find interacting with people fulfilling? I'm struggling to get it...",
                "line": 41,
                "url": "https://drive.google.com/file/d/1xB_fUbSslXGik_bNNd8GV-sj6OUFCKKQ/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Although I get we're being scolded...",
                "line": 42,
                "url": "https://drive.google.com/file/d/12YgnA4fLT151aZ4Cd-xY5XOoN9EDjmGZ/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Not fully grasping the meaning of the branch manager's words, the two exchange puzzled glances while feeling a slight sense of guilt.",
                "line": 43,
                "url": "https://drive.google.com/file/d/14a07OfQgXD1dv-VMvW0OiQn1nhBMEcUI/view?usp=drivesdk"
            }
        ],
        "e6": [
            {
                "name": "",
                "name_variant": "",
                "subtitle": "After receiving a passionate lecture from the branch manager about the essence of customer service, Delta and Eta's next course of action is\u2014",
                "line": 1,
                "url": "https://drive.google.com/file/d/1gu_dGQWX_hPj6gFKEdv6t4pJzajRtTKN/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "The pumpkin pies taste different at different food stalls! Some are sweet, and others are stuffed with meat!",
                "line": 2,
                "url": "https://drive.google.com/file/d/12L1J4RiE44DZut7a9BTyGqmA1FhNbJqI/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Lazing around in the hustle and bustle...is kinda nice...",
                "line": 3,
                "url": "https://drive.google.com/file/d/1fyAu4NrOxxPV7LkxMrhVQuAmpl04w-nG/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "You eat too, Eta!",
                "line": 4,
                "url": "https://drive.google.com/file/d/1XmPffO3aoPd7QTX67NGvzzLJzIyvh_PU/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Mmph... Don't...force me...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1j0MOpBEDsq9vU0A9dJDzs3n3Vmx56wLi/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Despite the branch manager's fervent speech, the two continue enjoying Halloween without a care in the world.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1UCet-fgEBytk24aWGtcLijiDtI-uctg7/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "*sigh*",
                "line": 7,
                "url": "https://drive.google.com/file/d/1AzRC0tkkA9msDSKYqsaFQuzgGue-lELe/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What's with the sigh? Aren't you gonna eat too?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1Q9h7PcmfK-Vs4c8VF5FjkHK_dmqW7Cot/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Skewered chicken... I'm not in the mood to enjoy a meal right now. Can't you two understand what I'm trying to convey?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1FQxus35z_27fin2heqOnvdIoh5k9xf10/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Business is booming.",
                "line": 10,
                "url": "https://drive.google.com/file/d/19mYi6akSVzHKBx7Mc_t_yqgUlClKgzyT/view?usp=drivesdk"
            },
            {
                "name": "Mr. Vendy",
                "name_variant": "Mr. Vendy",
                "subtitle": "BEEP BEEP...BEEP...",
                "line": 11,
                "url": "https://drive.google.com/file/d/1LjJAi2tWQUPbg1SSddUKQgXhAyBcNGhl/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...It'll reach its quota soon.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1hNSxetOXvaMtLlDldBLKuo5uFy1p2Ay6/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Huh?",
                "line": 13,
                "url": "https://drive.google.com/file/d/1DXW8EdAg_ZGHXuyZUHeMLD3cC1u2sXb2/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...The sweets in Mr. Vendy are about to run out...",
                "line": 14,
                "url": "https://drive.google.com/file/d/1Iw7xtM538z_xdWSkBotjjrOP8nIdKA3-/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Oh, it's done already? Well, I'll head back to the stalls then!",
                "line": 15,
                "url": "https://drive.google.com/file/d/1OgZ2KUbToy2jNJQHWhTNsNu8-o5nyB2E/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...I'm going home...",
                "line": 16,
                "url": "https://drive.google.com/file/d/1-B955wnAmsdq1nZ02CpX6Z4bFwbxuzNi/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Ohh... Is it going to end like this? Mitsugoshi's principles won't be properly conveyed to our customers...",
                "line": 17,
                "url": "https://drive.google.com/file/d/1Ms_g_P7QPP8AXzyGBKODNTgAO_pVb0Ed/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "As the branch manager laments, a boy rushes up to Mr. Vendy.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1jxI5Nw_ZnbIj_wcpv1qMFK2Ws-7etOTm/view?usp=drivesdk"
            },
            {
                "name": "Boy A",
                "name_variant": "Boy A",
                "subtitle": "Trick or treat!",
                "line": 19,
                "url": "https://drive.google.com/file/d/1ZmmD6yROR3hcltH-gIn3uutxAloJHSFt/view?usp=drivesdk"
            },
            {
                "name": "Mr. Vendy",
                "name_variant": "Mr. Vendy",
                "subtitle": "BEEP BEEP...BEEP... PSHHHT... OUT OF STOCK...",
                "line": 20,
                "url": "https://drive.google.com/file/d/1F-Ge7NDc10p5mfDrHzQD2jHRlowUmpK6/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Oh... It's done.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1aOScMblk0FuZwEYY2jBeamStNyYzNpT_/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "It's run out of stock. Alright, I'll give that boy his sweets, and we can wrap up this event\u2014",
                "line": 22,
                "url": "https://drive.google.com/file/d/1MP9q4O_sGep-2hql3rZc0V1_FyVDjar_/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "But as the branch manager tries to approach the boy...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1mkY_YbuAxQQURry6gkbpwPc7HCpCYiCm/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...Hm?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1mltWaf6sdnB35BYa6KLDADtKf3cAc9NO/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Mr. Vendy's suddenly got...a different smell.",
                "line": 25,
                "url": "https://drive.google.com/file/d/16MJrNih7lBo_XVkjJhDXAO_hOrSt9Azj/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Huh?",
                "line": 26,
                "url": "https://drive.google.com/file/d/1AXQ0GdPBzN4LrxZfkH3HSteZyYlgpG0H/view?usp=drivesdk"
            },
            {
                "name": "Mr. Vendy",
                "name_variant": "Mr. Vendy",
                "subtitle": "OUT OF STOCK... RESTOCKING.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1I8w6QFRzbGmAUmx80ikLc-CAypG-RDH-/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Mr. Vendy blares an error message, and its built-in arms and legs start to move, snatching sweets from children nearby.",
                "line": 28,
                "url": "https://drive.google.com/file/d/19F70YTP3Gimsdl9MLNXNwQHDwQo2KAJ4/view?usp=drivesdk"
            },
            {
                "name": "Girl A",
                "name_variant": "Girl A",
                "subtitle": "Eeeek!",
                "line": 29,
                "url": "https://drive.google.com/file/d/19VjIRJDrJGcrJBI5qFIOMOik1Kl5hS0I/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Wha\u2014?! What's going on?!",
                "line": 30,
                "url": "https://drive.google.com/file/d/119AwreNgl96sLjEtD4VjfDOYYRwFBQ3m/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "It's rampaging.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1oXwNVNNgJqPQWWt0WpO6MrrjtO13G3KR/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Now isn't the time for such calm remarks! If we don't hurry up and stop it, the children might get hurt!",
                "line": 32,
                "url": "https://drive.google.com/file/d/13kD5u8f36thIBO5aN7utdQXrcoRfS6-R/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Go on, Delta...",
                "line": 33,
                "url": "https://drive.google.com/file/d/1CMfqtTal8z_kcXtAul1MVwgVejU9O_QX/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Jeez, fine. Be right back!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1-ZHlllEhtt86LvEtWlrMePj-xeCDL_4b/view?usp=drivesdk"
            },
            {
                "name": "Mr. Vendy",
                "name_variant": "Mr. Vendy",
                "subtitle": "RESTOCKING... RESTOCKING...",
                "line": 35,
                "url": "https://drive.google.com/file/d/1HYtXEFmcY6B8uybCdZ95B_FHb6-TW9h-/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Stop right there!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1PyeDt9jzMcL_rL8NODThEsSzPpqMQq9P/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Delta leaps forward and kicks Mr. Vendy's extended arm away from a girl holding sweets.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1L3ZX1bSee7oYczrQLIoGgIwj9WHZh-iE/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "The crowd is kind of getting in Delta's way...",
                "line": 38,
                "url": "https://drive.google.com/file/d/1V2GkXmrobbeYDW20sq1oNxpDg0td1UHV/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Ah! Everyone, please step back!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1y4G9UU0DEMwycdSbEZTRWQD2fAAmWIli/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Mitsugoshi employees from the branch rush over, guiding the public away from the scene.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1mmgCk6EVM-o8iZfcns3D-BzAWGX_vvID/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Delta confronts, Mr. Vendy head-on. Sensing this is no time to be lazing around, Eta joins her.",
                "line": 41,
                "url": "https://drive.google.com/file/d/11ZPRxX2XLC3HkxtPolguZqEasUc5Q186/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eta, what's going on? Why's Mr. Vendy acting so weird?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1mFLGpVLcdipm4sCNzkmrS7bJAH8hzRQA/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Well, I made it in a hurry, so the restocking system is a bit sloppy...",
                "line": 43,
                "url": "https://drive.google.com/file/d/1-9BynQaFA_VWnuX4RRCU9kxKeUNPACBy/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...What's that supposed to mean?",
                "line": 44,
                "url": "https://drive.google.com/file/d/1GClYTgHr2llUCxyOaoZo2l8AG1GUl3Cq/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "It's an automated system for restocking sweets. But the settings for where it restocks from... Well, you get the picture.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1Rcgbp5t1r0_gasF4J6ZwD7-uhTGMSMvB/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I don't really get it!",
                "line": 46,
                "url": "https://drive.google.com/file/d/1K26oRDt_4Z4lJxTfFWJU0EOwzD8no5Oi/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...If you don't get it, that's fine.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1YAkfwEI3zc8kMql8WSdvtW1hAmi4R8OI/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Mr. Vendy is rampaging. Stop him.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1SBW3-k2b4CSzn9DTDbOXYUh_0WXDYtoV/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I see! That's simple and easy to get!",
                "line": 49,
                "url": "https://drive.google.com/file/d/1ouUw_1GCeV0BiU_Xf0YyWEY1NYVJ0_VK/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "With a wild grin on her face, Delta charges straight at Mr. Vendy...",
                "line": 50,
                "url": "https://drive.google.com/file/d/1TIIsVo26mI1jXUsOWvfASHcL9VyGW84z/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Wha\u2014?!",
                "line": 51,
                "url": "https://drive.google.com/file/d/1Amd_hKKqAVe243rMl4eZVlKxcSk13cIn/view?usp=drivesdk"
            },
            {
                "name": "Mr. Vendy",
                "name_variant": "Mr. Vendy",
                "subtitle": "BEEP BEEP... LOOTER IDENTIFIED. INITIATING ELIMINATION PROTOCOL.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1MIUFQfWyb-dWbKG-_IPYXxLSXnIwKiyZ/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Mr. Vendy's arms and legs move swiftly, launching an attack in an attempt to eliminate Delta.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1tv078LNFkxdg9k84hN6FE9pRj6XHPdgN/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eta?! What the heck is this?!",
                "line": 54,
                "url": "https://drive.google.com/file/d/1rxp5WBtlOHUr6S22zbcd_T62aY6Er8PO/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...I thought enemies might come to steal the sweets, so I equipped it with an armed security system...",
                "line": 55,
                "url": "https://drive.google.com/file/d/1wnZt5QQsLOfWrTFcKF_JBo4pkrwh9Hvu/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...It's the perfect security system.",
                "line": 56,
                "url": "https://drive.google.com/file/d/19HbIURECYTQRedtci6QNSqmvQtoRIvFX/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Security...system?",
                "line": 57,
                "url": "https://drive.google.com/file/d/1sPDkTpOjccrB9O4lnenICJ3BYeCDH5fi/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "But it's only natural to protect food from enemies! Well done, Eta!",
                "line": 58,
                "url": "https://drive.google.com/file/d/1bJY4UYpeav9q3lhNXXtobxjpv0s-0XeJ/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "This isn't a time for compliments! Why did you focus on those features and neglect the restocking system?",
                "line": 59,
                "url": "https://drive.google.com/file/d/1u8Am3Gyfe9rC2In27Il5NW8M3OA9m8Lk/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Personal tastes...?",
                "line": 60,
                "url": "https://drive.google.com/file/d/1OXkkYUx6T2ykKaCp-73bXp87jGA6qBMM/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Personal tastes...? Oh, Lady Delta! It's stealing your food!",
                "line": 61,
                "url": "https://drive.google.com/file/d/1D6Cbi7wzTs_BWDKIHEGogBlBf2zOwBk5/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What'd you say?!",
                "line": 62,
                "url": "https://drive.google.com/file/d/11WZyqT4-v24kvxoSHKml-Gg5qunS7O9Z/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Delta turns around, only to find Mr. Vendy's extended arms snatching the snacks and food she had procured.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1XO1xuzVssHkFQyey0hEja39EVwqT6eNW/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Boss man's souvenirs...! I won't let you take 'em!",
                "line": 64,
                "url": "https://drive.google.com/file/d/1BgFvA61CTFoXyEwM_N4KeOb38hXua420/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eta! How do we stop Mr. Vendy?!",
                "line": 65,
                "url": "https://drive.google.com/file/d/1QQS9vIxYgrHePVqxiaPvkIsQwZZ3Sidb/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...There's an emergency shutdown switch. But it'll be tough to press it while it's rampaging...",
                "line": 66,
                "url": "https://drive.google.com/file/d/1xFivnL0rWTZI0lNelqxJymNY4-6Tnewl/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Then I'll make it stop moving! You do something in the meantime!",
                "line": 67,
                "url": "https://drive.google.com/file/d/1oY9UIgdNJ-IjPtIYqpL6JPl1QTTSzj-k/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Talk about unscheduled labor...",
                "line": 68,
                "url": "https://drive.google.com/file/d/1Q8YSpVpJ7nku1njg3nsbW5gCpm9HRrE-/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Alright, here goes!",
                "line": 69,
                "url": "https://drive.google.com/file/d/1tTukCoCNpXi3d3GTvbRzkgq_KUe0oHU4/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "While Mr. Vendy continues its rampage, Delta fearlessly leaps toward it. Eta looks for her opening...",
                "line": 70,
                "url": "https://drive.google.com/file/d/1JCQTh76DYeyrAJDXybbgOscTjSZskvh3/view?usp=drivesdk"
            }
        ],
        "e7": [
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Phew... I'm beat...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1gebBjRqEvIhKAcGnHtJ_pbf3RK-wt3eT/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I'm not tired at all!",
                "line": 2,
                "url": "https://drive.google.com/file/d/19tBqj-QJlFNFdlU_tfVAZoVcCZfDC5Ev/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "You're so weak, Eta, if just pressing a switch makes you tired!",
                "line": 3,
                "url": "https://drive.google.com/file/d/1CfAMiXwfH09BJHVPOzHldOuycFB5iUwO/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Okay, okay...",
                "line": 4,
                "url": "https://drive.google.com/file/d/1gar9kh1076_zcc-XjBakX99oetC61y8H/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Mr. Vendy emits puffs of smoke and has completely stopped functioning.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1Bwant0TrpqKxsxrxFsP_AoH13m8_oIz_/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hey, branch manager. We're done here, so\u2014",
                "line": 6,
                "url": "https://drive.google.com/file/d/1K4zKhfif3uuU0ui44fFj4wf0BbT-hhs1/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Delta turns towards where the branch manager is, when...",
                "line": 7,
                "url": "https://drive.google.com/file/d/1mTo3YY3pZMIbZPY56u7yVaOvO1WK-_U8/view?usp=drivesdk"
            },
            {
                "name": "Children",
                "name_variant": "Children",
                "subtitle": "Whoaaaaa!!! You ladies are amaaazing!!!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1eYqbHdXQsoIwciuQ88J17ark-VivJDHD/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "A wave of applause and cheers erupts from the crowd evacuated by the Mitsugoshi branch's employees.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1OQviMWQ4PJiqRvY2-GbUvKRpzu9oxW3R/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Wh-What the heck it this?!",
                "line": 10,
                "url": "https://drive.google.com/file/d/12JJ3e0l-Ou0uxqLtM9cZ6T9zoaUjV3-E/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "No idea...",
                "line": 11,
                "url": "https://drive.google.com/file/d/1xe0v9kislMLs7J2lmlNozIDZGdNYdb1n/view?usp=drivesdk"
            },
            {
                "name": "Boy A",
                "name_variant": "Boy A",
                "subtitle": "That was awesome, witch lady! You're super strong!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1R0vYg63q69_ROuflFD55_0LcgCOHqU6e/view?usp=drivesdk"
            },
            {
                "name": "Girl A",
                "name_variant": "Girl A",
                "subtitle": "Thanks for protecting us! You looked really cool!",
                "line": 13,
                "url": "https://drive.google.com/file/d/1zYGn5OqFGwpwFIdxIZcViFAmAn_sl_xt/view?usp=drivesdk"
            },
            {
                "name": "Boy A",
                "name_variant": "Boy A",
                "subtitle": "Mom! The witch lady and the vampire lady defeated the bad Mr. Vendy!",
                "line": 14,
                "url": "https://drive.google.com/file/d/1iBILUOpvaDaAxuh0K2NEk-x5zw-iQTdb/view?usp=drivesdk"
            },
            {
                "name": "Mother",
                "name_variant": "Mother",
                "subtitle": "Yes, that was incredible. I'm surprised by how much of a show they put on.",
                "line": 15,
                "url": "https://drive.google.com/file/d/18EsHor0JfDc-Ca8iRg2Nb0n9-CC7YQzR/view?usp=drivesdk"
            },
            {
                "name": "Mother",
                "name_variant": "Mother",
                "subtitle": "Mitsugoshi always manages to impress. I can't believe Mr. Vendy was part of this performance all along!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1LXcw8jXBQkL2uu7-A2MmVEz0mOLq-nU3/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Performance...?",
                "line": 17,
                "url": "https://drive.google.com/file/d/1Oscxnz9x_dFUIxBSe222SUVNL8b7bwSb/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...The misunderstandings are escalating...",
                "line": 18,
                "url": "https://drive.google.com/file/d/1dEt9HDs544YWnetfeEte5nvcK8JZqy_W/view?usp=drivesdk"
            },
            {
                "name": "Boy B",
                "name_variant": "Boy B",
                "subtitle": "I thought you were weirdos giving out sweets...but you're actually pretty amazing!",
                "line": 19,
                "url": "https://drive.google.com/file/d/1hOdKSOZyfu1H4BcAGV0uUUrzrutcR6ie/view?usp=drivesdk"
            },
            {
                "name": "Girl A",
                "name_variant": "Girl A",
                "subtitle": "Thanks for getting our sweets back!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1NofG9ICQYB1K3f0rHrG4WwxlLJqllnC4/view?usp=drivesdk"
            },
            {
                "name": "Girl B",
                "name_variant": "Girl B",
                "subtitle": "Witch lady, vampire lady, can I shake your hands?!",
                "line": 21,
                "url": "https://drive.google.com/file/d/1LyeI1S8BzZv2yMi-YQ2AsqXVbcb44CRd/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "H-H-Hey... No pushing!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1pzmMh_h83hD0WcdxrJcEBWohzF-x1MbF/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "E-Eta! What's going on?!",
                "line": 23,
                "url": "https://drive.google.com/file/d/1MPC7EgJPY7Bs4MZdXpUKqsgf9QPQTSV-/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Don't know. There are a lot of people... Wanna run?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1QEraF253Vk4LjvKnMgM9YME_tcBEZmvj/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "No...running! I'm not sure, but I feel...nervous? Excited? How about you, Eta?",
                "line": 25,
                "url": "https://drive.google.com/file/d/1a_-rYt0Pt56azsYRT3nnK4W223ed2g_U/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Well...I don't feel bad...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1L23ZCw3JdrexjLl5Hlzo7edw-k4t5-RC/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Yup, yup. It's really something that they get how awesome I am.",
                "line": 27,
                "url": "https://drive.google.com/file/d/10q6usxeaC1AuVKked4hWQztS0Vzs5oTD/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Eta and Delta find themselves surrounded by children who gaze at them as if they are heroes.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1BtqOgeDoyqTqS_V6Hf1MXxUeRhnCZpKa/view?usp=drivesdk"
            },
            {
                "name": "Boy A",
                "name_variant": "Boy A",
                "subtitle": "Hey, witch lady! Trick or treat!",
                "line": 29,
                "url": "https://drive.google.com/file/d/1l_Dtd_P6ri-2jvAj_awuHBoAImZVz1Vy/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hmm?",
                "line": 30,
                "url": "https://drive.google.com/file/d/1_NRmMMp19Bc_O1NS-TSelL1buWiNcXt6/view?usp=drivesdk"
            },
            {
                "name": "Girl B",
                "name_variant": "Girl B",
                "subtitle": "Me too! Miss Vampire! Trick or treat!",
                "line": 31,
                "url": "https://drive.google.com/file/d/1QnAinwce5JHiWx22DwRtRq1wtAbrlZ_X/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Huh?",
                "line": 32,
                "url": "https://drive.google.com/file/d/10IThelnz-yRvRz96oGrWrIiPfJQ5owOR/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Hehehe. Witch lady and vampire lady, would you please give out sweets to the children?",
                "line": 33,
                "url": "https://drive.google.com/file/d/18UCt5zIIfMifl8GR42C5D1Yg2fVkdo8b/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The two exchange glances as the branch manager smiles and makes this request. Then...",
                "line": 34,
                "url": "https://drive.google.com/file/d/1p_9TBo3COAMNMDgqhvpMrGo9ziHpMzGH/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Heehee! Well, since you insist, I'll do it!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1bqW_txLbyvBciRjn53DzWs7g-R-oic1t/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Oh well...",
                "line": 36,
                "url": "https://drive.google.com/file/d/1s2nMf7VTXrckeDoGBuOpXAwR9rOXFcYX/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Okay, kids! Say the magic words!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1BWAlfFdkw2bQbPSJv-KRol3hTQ3bXPdg/view?usp=drivesdk"
            },
            {
                "name": "Boy B",
                "name_variant": "Boy B",
                "subtitle": "Trick or treat! Give us candy, or we'll play tricks on you!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1doNdE5ob3uaFN8yxr7qJu-i2GF1BqFfX/view?usp=drivesdk"
            },
            {
                "name": "Girl A",
                "name_variant": "Girl A",
                "subtitle": "Trick or treat!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1fqBMOllr083_7iQ-KO5-TWprE1EJbx6Q/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Here you go...",
                "line": 40,
                "url": "https://drive.google.com/file/d/1IwL2cKcUIC7Te-4xcuTbu3lxea3hPxoc/view?usp=drivesdk"
            },
            {
                "name": "Girl A",
                "name_variant": "Girl A",
                "subtitle": "Thank you, miss!",
                "line": 41,
                "url": "https://drive.google.com/file/d/15MNnEIjcNi2XVrdz7wlCeSsiigK3Z0K2/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Mm. You're welcome.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1oUtT5jw5L8zmE-DgIJ-Q_BEZInCn5uVD/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "It's only after Eta and Delta finish handing out sweets to the children that they realize they both have smiles on their faces.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1jr5zAHRIhfVqKKg59SCkbUFY1qqTW5Iv/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Lady Eta, Lady Delta, well done!",
                "line": 44,
                "url": "https://drive.google.com/file/d/1teXuukzaJjdrKAVZNFoxHCLdEZbttIf2/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Despite the unfortunate trouble that occurred, thanks to both of you, it didn't escalate into a major incident. In fact, the Halloween event was a great success!",
                "line": 45,
                "url": "https://drive.google.com/file/d/1Y3EfpEkH4UovQgdoeLLO6Y3EseDb8Bn6/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "After giving out all the sweets, Eta and Delta return to the Mitsugoshi branch.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1EvbkDWBfiQpBgVDwn3hP8-rBnIqjlvNB/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Heehee! It's a piece of cake when I get serious about it!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1OHvIMb6s8wdkiDvsNFiezefSDFwmyYsK/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Kids have way too much energy...but...well, it wasn't not fun...",
                "line": 48,
                "url": "https://drive.google.com/file/d/1P2_NuL22mluP5SmC09p9EKIOCWimjlKI/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Umm... It wasn't not fun... Hmmm...oh! Which means it was fun!",
                "line": 49,
                "url": "https://drive.google.com/file/d/1Ufv-WkEDnc6qxh0zJSCu8dZ3WIvqis8o/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I had fun too! I think I sorta got what you were saying!",
                "line": 50,
                "url": "https://drive.google.com/file/d/12-ZzcFtacuECpky_qze1T2KzEt3eE23Z/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Huh?",
                "line": 51,
                "url": "https://drive.google.com/file/d/1CQnU9YHb37U9zqTtREdM2B6G4ggTl7jF/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...That thing you said about customer service.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1nEzu2DJ6xuRjcDZKApC2EDR1JYM1_TRn/view?usp=drivesdk"
            },
            {
                "name": "Branch Manager",
                "name_variant": "Branch Manager",
                "subtitle": "Ah... I'm really glad you were able to gain some understanding of our philosophy at Mitsugoshi. Thank you very much.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1YaexU0-bSFw_bSOEJ5UkisPl03QLjuic/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Halloween was such a great festival!",
                "line": 54,
                "url": "https://drive.google.com/file/d/1kD9EvtHqKOfUILUhJxxC6z8TDDBCaZSD/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Yeah. I'll prepare a more perfect Mr. Vendy for next year...",
                "line": 55,
                "url": "https://drive.google.com/file/d/1abrrLTURRJSuZaF5vNCbSi-KLNxd_Bov/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "With their work completed, satisfied smiles adorn the faces of the witch and vampire.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1VhLgrPymoGDZtlWyuXrloyCfhdFf9_Zv/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "That concludes the report submitted by the branch manager regarding Eta and Delta's assistance at the Mitsugoshi branch.",
                "line": 57,
                "url": "https://drive.google.com/file/d/1antBSNfFxlEAgw1XYiEr1J6rlIHrFr43/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I was worried about how things would turn out, but those girls really gave it their all.",
                "line": 58,
                "url": "https://drive.google.com/file/d/16vGGDtKcySceLwAvZbxHztJzEVpsp1O9/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Within the private office of the Shadow Garden, Alpha listens to Gamma's report and nods with a satisfied expression.",
                "line": 59,
                "url": "https://drive.google.com/file/d/1SJ87A45HitKuq1x13lnQ-IOuA4j09-JP/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...Yes. We have successfully completed the training for the new recruits. Eta and Delta are expected to return tomorrow.",
                "line": 60,
                "url": "https://drive.google.com/file/d/11EyhcUTLqVMCSukwLOs9kyFAvIfhKL8Y/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Then what's with the long face? I saw that same expression on you just the other day.",
                "line": 61,
                "url": "https://drive.google.com/file/d/1BoySlMqukRvvc_RlGINQqCHT3MQ-Swef/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...Please take a look at this. It's the report and the balance sheet.",
                "line": 62,
                "url": "https://drive.google.com/file/d/1d4JVWGoDcYIQFAyYV9JJdqVNVtMLpA35/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Let me see.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1vqya16_szteTCVJocsK0qWA_FNOWgn3-/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Here. Sales at Mitsugoshi's main store have been strong this year, thanks to the events held in various locations. The Halloween sales campaign was a big success. However...",
                "line": 64,
                "url": "https://drive.google.com/file/d/10S0Qwu3wZDehwG_y7bOgy2-Iwd1bRUVD/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "This is...a serious issue.",
                "line": 65,
                "url": "https://drive.google.com/file/d/1ImEaHgzYTLYqdqMgWjjC-fz52t7xjFH2/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Alpha groans upon seeing the balance sheet, and Gamma's expression is tinged with gloom...",
                "line": 66,
                "url": "https://drive.google.com/file/d/1XT5C7RGdP8ZvjGSdCe0WDl8-bzAESU1-/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The next day, after returning from the Mitsugoshi branch, Eta and Delta visit Alpha's office to deliver their report...",
                "line": 67,
                "url": "https://drive.google.com/file/d/1-O-g3yzNMrbd9rZwSaAubgili_C2F9fb/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "We're back! I did a perfect job!",
                "line": 68,
                "url": "https://drive.google.com/file/d/1FtAlAgAaFdF5Vs-dFvKY6l4uSS6pYkd8/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...I've done a year's worth of work... I'll be holed up in my research lab for a while...",
                "line": 69,
                "url": "https://drive.google.com/file/d/1CTRM6Y2z2rUWnw1_d5wnt8xhyRuZ68kI/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "We deserve to be rewarded...for our\u2014",
                "line": 70,
                "url": "https://drive.google.com/file/d/1FbZOUs4kqO7HJNasXydfN20XBWj35LvP/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eep?!",
                "line": 71,
                "url": "https://drive.google.com/file/d/1ccBUuxrBwLxjxiy-kwMgFbS2nYYUvK18/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...I'm getting chills!",
                "line": 72,
                "url": "https://drive.google.com/file/d/1VumMs9jhWyWFx1wXSk-IsRhA-URjMDpu/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The two enter the office in high spirits, but they come to an abrupt stop.",
                "line": 73,
                "url": "https://drive.google.com/file/d/1Wnjk-Fw3U8gHoa_jXAKR4xqXnNG11J-S/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Welcome back. It seems you two had quite the Halloween.",
                "line": 74,
                "url": "https://drive.google.com/file/d/1IZcEXgUjugntXeqac885-dwT3Q-EpZR0/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Wh-Why're you so angry?!",
                "line": 75,
                "url": "https://drive.google.com/file/d/1Aenfrpja9M0Ahw0kWZFFfkg3l8Thl0le/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Take a look at this.",
                "line": 76,
                "url": "https://drive.google.com/file/d/1PM3F2Hbys1v2vPBVOLyBs6RbKIeksouD/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...The balance sheet...?",
                "line": 77,
                "url": "https://drive.google.com/file/d/1M_TsZ0_ksoWj6GWgo6RaSMmpa_pxf4t4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "The Halloween sales campaign was a success, and sales are up...but there's one problem. Take a look at the expenses on the balance sheet.",
                "line": 78,
                "url": "https://drive.google.com/file/d/1GNXGLPpacOmeUno9fkhEUVptXPXsRPaI/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Expenses?",
                "line": 79,
                "url": "https://drive.google.com/file/d/1796U70OEkuwWnmpvulFOTmFdkQ4wC6Qc/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Expenses...right...",
                "line": 80,
                "url": "https://drive.google.com/file/d/1ydjNhfITMHVKQVww3vvSY_LrqhpaeeWR/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Delta, these expenses on Mitsugoshi's tab are from you, aren't they?",
                "line": 81,
                "url": "https://drive.google.com/file/d/1J8wJsu-1NYKHuFS31y6v7E2yq0jFHFpl/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Mitsugoshi's tab! If you say those magic words at the food stalls, you can get food without paying!",
                "line": 82,
                "url": "https://drive.google.com/file/d/1ThgcxGT8J0KVpLJkmKKRfNmzjyN05792/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It's not \"without paying.\" It means they trust Mitsugoshi enough to postpone payment. And as for you, Eta...",
                "line": 83,
                "url": "https://drive.google.com/file/d/1CPlqpYKltyhVZrCmAppjfkWIhwbT6gSk/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Mr. Vendy, huh...?",
                "line": 84,
                "url": "https://drive.google.com/file/d/1RzTrY4-ZNnc3CNrMk2l4ZGjXa6mLxrJH/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So, you're aware of it. How reassuring. What's the deal with the massive production costs? They're enough to offset the sales from the branch you visited.",
                "line": 85,
                "url": "https://drive.google.com/file/d/1g_PJ4JanYZcx0oF3qqXYzHIHciJ86gJy/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...But they were necessary expenses...",
                "line": 86,
                "url": "https://drive.google.com/file/d/1qdwyhQ-f3jAE_Fx1fXdd7Oue-618gkpR/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "If I knew what \"Mitsugoshi's tab\" meant, I wouldn't have done it! So...it's all the fault of the food stalls!",
                "line": 87,
                "url": "https://drive.google.com/file/d/1ufjj8H52kfinJEIBasCPFWH65bWORo81/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Sounds like you're making excuses... I wonder if you're truly reflecting on your actions...",
                "line": 88,
                "url": "https://drive.google.com/file/d/1ONmbonx9BoREqENSA6jLfH94oLOXtrDF/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eep?! Y-Yes, I am...",
                "line": 89,
                "url": "https://drive.google.com/file/d/1NI0Yjx1Pc99xRdbV5P-64u8m3m7EDCgS/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I shouldn't have come here...",
                "line": 90,
                "url": "https://drive.google.com/file/d/1h29WWWQhyH1JkTGIbL5G8Xj9iR_hvKEz/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "And so, Eta and Delta's Halloween comes to a close amidst Alpha's thunderous rage...",
                "line": 91,
                "url": "https://drive.google.com/file/d/1SCSRSGPZy_CwjeNsA9aycL2yDkTZo17L/view?usp=drivesdk"
            }
        ]
    }
}

let setDoc = db.collection('data').doc('es_ana').set(data['ana']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
