const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "p2": {
        "c2-3": {
            "e1": [
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop of Orum",
                    "subtitle": "...Shadow Garden, huh? You just had to go out of your way to stir up unnecessary trouble, didn't you?",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1d8wC-5LvwEpnEAfUFzQAOuPru0mjUhoD/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "Victoria",
                    "subtitle": "...",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1GlZeq7Mf7ackS1i-q5mY138wnSyw76mC/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop of Orum",
                    "subtitle": "I understand you were the one who led this attack.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/11wb9MNrL8TvmvdAwX3SeUoFMF2VaBxOD/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop of Orum",
                    "subtitle": "Have you any excuse for the loss of so many of our invaluable Templars?",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1Z-XPe5B5EmiVd2ZaAdUwWaw5e7HR-v13/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "Victoria",
                    "subtitle": "...None. I take full responsibility.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1nVhidJsprtMkj1aaM2PIQErs74zbkhvz/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop of Orum",
                    "subtitle": "Templars exercise the right of inquisition on a rotating four-year basis, with the archbishops of Orum serving as auditors.",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1GdmEuVFv4VfS3un4WF1wqVxQ5oPQjh8-/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop of Orum",
                    "subtitle": "As the one who leads the Templars, you know why it works this way, do you not?",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1B2Q63FZHtJjJgrAu8Q8Xbu-7f0OxOVas/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "Victoria",
                    "subtitle": "To...prevent the abuse of the right of inquisition by the bishops of each diocese and the monopoly on the right of inquisition by the Cult of Diablos.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1HBpvaOhIXJfqT8xagxc1gnmlMK0fPjzy/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop of Orum",
                    "subtitle": "Exactly. The reason why the Cult and the Church, which emerged from the Cult, have each other's backs is that the Church is in the position to exercise the right of inquisition, not the Cult.",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1-yEQesPc7J0XdWe2rT8gksc1HMqAoXYp/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop of Orum",
                    "subtitle": "as guards, Victoria.",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/17PhrZ3dkZ2GKXCASdUvdnbny6bBXMPNv/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop of Orum",
                    "subtitle": "So, for the time being, I would like you to concentrate on your usual role as a prophetess.",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/19vLEh7zbsMaRwf7MmQoK4TwqXikDbekZ/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "Victoria",
                    "subtitle": "But!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1T4zJEwX9VE6PNZsQA-wEpvz335B77uob/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop of Orum",
                    "subtitle": "The Templars half-hearted intervention in this incident and the fact that, despite the loss of your troops, you returned unscathed...",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1TaCrZnRlJRpIIPZSlmnY73Lphkho_Y3O/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop of Orum",
                    "subtitle": "...have given the Cult reason to once again call into question our right of inquisition.",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1U54EKWsNeRMKBPocJV6aeQ1lG5mwnS_Y/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "Victoria",
                    "subtitle": "We acted to condemn the heretics! Bishop Drake\u2014",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1H_C8xXvGCX6iyNqhshW3dduk3zzAfg2C/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop Drake",
                    "subtitle": "A year and a half from now, I will be \"Archbishop\" Drake, charged with the sacred ministry of the cathedral in the Sacred Land of Lindwurm.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/137ExW38OcQTQrdPZo67LYnACBDtdvtzR/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop Drake",
                    "subtitle": "Therefore, I must ask you to refrain from exercising your inquisitorial powers unnecessarily and dragging me down with your failures due to my position as your auditor.",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1E60Vave8XL8boRD1fQAAXcIqMk4cxnm2/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "Victoria",
                    "subtitle": "I...",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1d2mNlk_BPrE8oGPFgf-WR9WHMHlFY_f9/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "Victoria",
                    "subtitle": "...I may be under your watchful eye, but you are under the watchful eye of Goddess Beatrix!",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1MNuwSMLKRp-GVS-7CeHNHtEfJJxedIdr/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop Drake",
                    "subtitle": "What did you just say?",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1j_75cWWOiNjTMzYKQOwmdKV0kmvHnddw/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "Victoria",
                    "subtitle": "...",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1qX4eK8A1Cp_oORsZWoHNdFfEi0pdkjqt/view?usp=drivesdk"
                },
                {
                    "name": "Victoria",
                    "name_variant": "Victoria",
                    "subtitle": "...Nothing... My apologies.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1tv5IjZdklnWhX0we5_qnrEJNW_zZQi5J/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop Drake",
                    "subtitle": "...I'm afraid her purely devotional faith is working against her, despite her knowing this is the way the world is run.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1mMNMzLqg5ZoHJVPkeuHX2YRI0r9UnXY3/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop Drake",
                    "subtitle": "She is the most talented and capable woman in the Templars' history, but she has gained unnecessary wisdom through her contact with the outside world.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1_E8OHYjEK7cxOnYP_WAxR9Kzt3UokYxZ/view?usp=drivesdk"
                },
                {
                    "name": "Bishop Drake",
                    "name_variant": "Bishop Drake",
                    "subtitle": "I must withdraw her from the battlefield for the time being, increase her dose of the secret drug, and let her hear the mighty \"voice of the Goddess...\"",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1xoz_rFHqkHG30VFfKpCgZmzXydfoOZRw/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Heheh... Gamma... Found you.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1DXBF4QHpFv-Cod7fOgSoMf624-yTWe4W/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Eta... I don't like the sound of that!",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1uahS-eMS2V73cDJ7GbIQTkTkD_gt8khi/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Just so we're clear, I'm not increasing your budget, and I'm not going to be your guinea pig for any more dangerous experiments!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1BM7iKTJ-hEjvGkCtL9TaXERO6kzP-PBy/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "I haven't said anything yet... Besides, neither of those things is what I wanted to ask you about...",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1TMz9clgGPF4DpRPG08PElwr9VtfQzIux/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...That's sort of terrifying in its own way... Well, how can I help you?",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1zEWH-9FQFy-3nV6lLn9DyzgY0gbbp7fq/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Heheh.",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1PRSZ94xk19MvQje9oArkSNM-YOT8LLYd/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Gamma, let's go look for oil together.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1r8JcUqNJxy8VSw2jm0jzfevEJ8g3FDkk/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Oil? And did you just say \"together\"?",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1nmCofBSiyotLdYzSgTYI4n0QsqgF3ahy/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...Hold on. Could this \"oil\" be Shadow Wisdom that Master Shadow told you about?",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1OZmGeA103K5y4n9MtORDILDRzwdWCDVc/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Yeah...",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1bBL79iBtaQqgRi0nt2UM9zbBWqoxMmQc/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Oh... And what exactly is this thing called \"oil\"?",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1AnqBNZSDi24HLXqVFjmVwoTLzcwt6eZq/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Hmm... Well...",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1aHx_U3irHFwUTEIHZOHprdkzv3xK1nrd/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/14puAjaj9PRaO0TR9bdXoTOFOckvH3YLp/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...I-Incredible!",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1OmMoZ9sMngIFSnWjgpZ3R1-iFBD-a7EO/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "If we could find such a resource...say, an oil field, it would transform this world's energy industry!",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1iSh88wXaXV2NYLRoXXMyFJiciwd157nZ/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "It would be the key to evolving this civilization to no longer rely on magic...and a vital resource for the Garden. I, too, am very, very interested...",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1aEsRPcYxO9wZFaS_tWKt9PDzsBE134c3/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "So, Gamma, let's go look for oil together. I've already got a good idea of where we might find some...",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1cWW5tcwPBevI44y0u4EMdrNRqNIWXQ6S/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Very well! After all, the word of Master Shadow takes precedence over everything else!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1GYEs8hVlfiqDrOSYTPH2qfoqR05MSnhI/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...So, where exactly did you have in mind?",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1TRKvatMthdRegqlxbvQaN90HjqPOy74V/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "This here is Alexandria...",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1AAxhuY_WWLvkKBZzEqQMZWU6azhVfYPa/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Yes. And this right here is Lindwurm\u2014",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/10S9-jLSdT5eaNl-bB20P8bWR-Es8IhtJ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "And this over here is Midgar Kingdom.",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/12AzpXa3uee6DOLyG3RO2KGcVFEsAo2W0/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...This is the City-State Alliance. And...",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/11ZvBdABMfYKd7UhPu82MmVn9Jq7HAPHF/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "And...?",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1P87A1ulMLk7IDtQS3cavJN_zmbJZme8Y/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Our destination is right here.",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1BAELnOpDcPxa3hTXbx5EGJ4X-0CiE6qj/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "That's...the Velgalta Empire!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1Cz9Iup1mQB2_ECT0I2XeGt5z5mOs_Szk/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Well, it's in the Velgalta Empire...but where exactly is that?",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1mESJ6VBxuQpEgRfCUZZw6N6GeGziJgeI/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "It seems to be far from the capital in the middle of nowhere...",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1sbtjQN2ACGYBasvw9zE7HpNYx_ckHvQz/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Whew... We're finally here!",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1_UfrAhQJRNWZ0bZXSYLHUMH5VnHozbhQ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "So, this is Madlid...located in a remote corner of the Velgalta Empire!",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1VnH02TOo0Y3ldFqphHjWDytJ4T-VqF8Z/view?usp=drivesdk"
                }
            ],
            "e2": [
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1YnZucutu1HUdmYPEqQ0V6F1y5EiNlQxk/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1B75ARAtO5FXGD6NrmaqTYRr-fvlq46wM/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...This place is surprisingly sparse! The town is barely functioning!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1QOMfapoIyFErh7g2vFQMBoX7UCxcFcYN/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I mean, this is a town...right? It's more desolate than the mountain villages in Midgar Kingdom...",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1cRzyZkduhDDm3s7bMc038c7A8oWX4T1q/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "We've travelled so much...I'm beyond sleepy...",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1bmIatvPEasRk9M_Bl21OLo6YX13Hmzpc/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...I don't see a single store that's open... I don't think I'm far off in calling this a ghost town.",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1TwZOE7J9FBP2m6yVcR0jAqf_pwRhnABW/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "If the central town looks like this, I'm guessing the surrounding villages and settlements have already fallen into ruin...",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1cWDBfd6zkyzORnFo51MVTnrUPgZ7DQvo/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Alright...let's start looking for oil\u2014",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1CilKVA47EpHsB4NXmWX_Q5mQDG1h3Hno/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Hold on a minute, Eta! Before we do that, we need to get a proper grasp of this town!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1-KtJo6qBBlwkUN9PPXqxgegHCMAD00JH/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "If this is going to be an ongoing expedition to find oil fields, along with the surrounding environment and geology...then it's an absolute must!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1nQVI6ENGh8HNyL1HRumgsgFXO9cBHKsE/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Hmm... Fine. So, where and how do we investigate?",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1tWUCq4v5KCkcKqFH0SeaZIYmOzuznPl2/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Where? Well, of course\u2014",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1oz9IcHSubJKb_LRYUypddZezCCA0cP2j/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "U-Umm...in cases like this...",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1CsNoey5MProrV1r7s9FKVm_IebtxheGE/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...The town hall! That's it! This place has got to have some sort of town hall! I mean, it's not like it's an actual ghost town!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1lAaI65ja_fCO2lQ4OTgAoYUZTyi46f70/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Whoa... You've got this, Gamma!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1YNiS3dDRoDddWcRO1PEu98QFZlt0lJnQ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Quit acting like it's someone else's problem! You're helping out as well, Eta!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1oOlnPdSP6qWd9V5OL9yVHWmtvFYmeeRq/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "None (Gamma)",
                    "subtitle": "\"Madiid is a territory within the Vegalta Empire. Encompassed by mountains, it is the empire's easternmost town.\"",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1UmRXoAtM5vY4ycfyx9eazwj1jzIkVjpO/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "None (Gamma)",
                    "subtitle": "\"To reach the nearest town on foot, one must endure a week-long trek along steep mountainous paths.\"",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/11Jgg3m-v5o3GzDZvE98QltKYMUyYZ_e3/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "None (Gamma)",
                    "subtitle": "\"As for horse-drawn wagons laden with goods, a month's journey is to be expected, owing to the detour routes necessary for safe travel.\"",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1r1D4Z7qo7IfE-Mb2UhxwwunCJlIW6bRh/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "None (Gamma)",
                    "subtitle": "\"The suburbs of Midgar and even the lands owned by the Kagenou family appear magnificently metropolitan compared to this place.\"",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1daLtES3oG8CCcO5ZoDu8tMN_kyZguH8L/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "\u2014From Gamma's Field Notes",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1JvTwQAfeLZG3-TLefOJqCxA6aRV8-apK/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...The town is severely depopulated, and with those steep mountain roads, it lacks any developed means of transport.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/146BZ2rxTHAHt7nREapXks_mzGO2qDide/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "It's like the town is on its deathbed...or, no, as if it's stuck in time.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1MD3C_2qVBDc4Hgk1r59XTYjBskpsngdy/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Even if there was an oil field around here, we'd have a tough time figuring out how to actually transport the oil.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1Qjot7ISX2qo32_YGWcGxGhxC0a2d5jEA/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1iZm64hp4yafytEb5OpCZ2skBpmotXm1z/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Eta?",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1DKrCzmKL0JFVO2vyMy5Tma4wRs_UbfSm/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...A lot of old buildings. Never seen this style of architecture before... Interesting.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1oLoz5PAYJZL-S7AVlNneXMnCNeogGS46/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Yes, the streets are incredibly old-fashioned...",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/18VGM1AvVi5IVG6vLezW8rr7AAR0Bk634/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...Why do so many old buildings line the main street in such a remote town?",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1ApPaI4U6ccqMPJnIQuxr7U5xUZOphNrL/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I'm sure it took significant building materials, supplies, and manpower to construct all these buildings.",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1E0nfHfzwdBB_Ozc8AGO84-Wuu34M4Gin/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "In other words, bringing goods and materials here should be absolutely impossible with the transport conditions in Madlid.",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/184zJ9TGeO9KCltPx8yW_gkwnQ-EfdOUT/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "So...it wasn't this deserted before. Maybe...the roads leading here were easier to navigate.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1GxI6AWDEUjYUUdNvgczs8dHYrIApuVsq/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Exactly. In other words, the town was ruined by some fatal transport barrier.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1abYDWWUfMB_wBbGhiIb_mYlsPSvZWE1u/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Let's do a little more research on this place before we start looking for potential oil field sites, Eta.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/17EozgtfOFgfYlMacizy0yUQROS_fMGex/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "No... I mean emerging architect Eta Lloyd Wright!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1T3qRVzauaFC9q8u0PEbEF1HjjknG7xMc/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Hmm?",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1ogf5GzNCeJfuSdiWMjBvMh3r9P6JLRIB/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Let's gather more intel based on your professional viewpoint as well!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1aMIgcP2MjzzXCvs8BzhXG4HLlXhHnSAE/view?usp=drivesdk"
                }
            ],
            "e3": [
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1X2rnRGT2uTySK5OO0ifgsJBS4Y9-Q1fn/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Ack?!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1YNEfy00YSE6e8qRR-X1R1fYPJS-YIHXN/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Th-That was dangerous! I gotta be careful not to trip on these jagged roads\u2014",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1xZmmch4yW99-CBAF05ZVM8lRNfp0YRuC/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1asntnJxWaYfLJwYP0Mk0r07QQJt4A73c/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Did you figure something out?",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1v9ze3kDqi-fpSu49_intM27aYynFukgQ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...Yes.",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1gkmpKUzoKeh6t4kAuy9JrzbIv0zDWhp7/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "There's no doubt this river...the Nyle River, was once used as a transport route for goods and human resources to Madlid.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1lkTLYG4Ud-6adkbJ-DBV1bcpxaZXr3ov/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "None (Gamma)",
                    "subtitle": "\"The Nyle River is located within the Vegalta Empire. The river faces the remote town of Madlid and continues downstream to the archipelago of City States.\"",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1A2-LiaS4LE4dKc1GvXHBfcRif4gaMsZV/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "None (Gamma)",
                    "subtitle": "\"As the river is nestled in the mountains, there are few suitable coastal areas for docking due to the steep cliffs. However, there is a coastline near Madlid where transport ships can dock.\"",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/18-yr-B80ESoeBv6Sc8WsXcyhXUhGoIWw/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "None (Gamma)",
                    "subtitle": "\"While it may be difficult to transport large fleets, the river provides sufficient conditions to be used as a transportation route to keep the economy of a remote town functioning sufficiently.\"",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1HCi5FoBWNBfH2UEUBkQSdEQwSldQXsw2/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "None (Gamma)",
                    "subtitle": "\"According to Eta's architectural perspective, it's highly likely the old buildings of Madlid were successfully constructed by transporting human resources and materials by ship.\"",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1WlywD15tjaR_HzPpNHNSymWzuRvdEXQj/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "None (Gamma)",
                    "subtitle": "\"Furthermore, our investigation revealed that from about a century ago, the coastline used for docking had been claimed as the territory of a formidable monster known as 'Malak the Malevolent Dragon.'\"",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1eXUWpFM5Z8brx5AedAzzpR8YzQ7t0it4/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "None (Gamma)",
                    "subtitle": "\"Madlid's inability to vanquish Malak led to the town's financial depletion and the closure of its transport route, accelerating their depopulation.\"",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1HyroKqtntPCOvxICKmnHrbQeuG6ie0ME/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "\u2014From Gamma's Field Notes",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1Vn_OAZp4-oumGzLzciHWReKOnjaDnd0F/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "The remote town has been depopulated and abandoned by the central authorities because of \"Malak the Malevolent Dragon\" who's been disrupting the transport route...",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1n66Yp295SrIOftTTwBXGKQJJpoNmWpfS/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "If we change our way of thinking, it's not like we can't do anything about it, but...",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1weESbWdK8y3TMYx6sgfvCScblBR5FI-x/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "If we defeat Malak...we'll be able to use this river...for transport again.",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1mgXsiwqGsxVoktt5pP-1XIxtIWzNLBK-/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...But...I don't think...that town is worth...that much...",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1hB8Zasm-w6yKx0mKZvwVpWurLY4hSCpk/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Yes. Honestly, it's not worth it. Even if we restore peace, it will simply return to being a regular old remote town like any other.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1xp4LVdfxidKHNkiVUs-MZBc17QSUSYms/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "In other words, there's little return for the risk taken. We can't reclaim any resources or value even if we go out of our way to send in a task force. No wonder the Empire has abandoned it.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1VgRUOKBpjeBpQHRl-AM-6r-VyAsAbB7t/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "And even if we discovered oil in this region...",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1dQASzF_09o3RAISXgrLzvpgtf3TETe5Q/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "It would require a development plan at the regional level, such as extending the route of the Nyle River to connect directly to the town and establishing a canal for fleets to travel between the archipelago.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1v30q2DbUlAhlK95Vlk81l76BEF-yPXtU/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "The Nyle River's current transport capacity isn't sufficient to handle the potential demand generated by the oil fields.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1iVlYymB6I0gYs_Ve6JDkeZxRfySyrngO/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...In lieu of this, our current judgment call is whether we should invest time and research expenses in Madlid.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1wNxS51sabFJINfmyOp7MF9YYdDjurTXk/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Given the nature of this land and the current circumstances, we can't afford to heavily invest Mitsugoshi's assets...so long as we're not certain whether or not we'll find oil.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1JdY82Mu1Zx4tJ31OTyNBLVkALihizLnT/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Even if we were to establish a Mitsugoshi branch in the Velgalta Empire, the capital would take priority, not here.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/125wNBwRzkn1Ns6HGJujjG60RA_3oA6s8/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...You're such a stickler, Gamma. Where's your sense of adventure?",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/126qjROxTM62F_cE6DbZ9V99fb7PUklrD/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I knew you'd say that. \"Stickler\" suits me just fine. Of course, I'm not belittling our lord's wisdom, but...",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/13QkHFIR3vyQpTEmuT54db6F4Y2mkvZCV/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Heheh... Unless you're willing to put your research funds toward investigating oil in Madlid?",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1vGnV0wxVkc-0Z1A9R3rQqQWuxM6zik4t/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "No way is that happening! Research funds take priority over all other uses!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1m8xXWj8PazGxCbHoPpagrE2HBN8nKa2x/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "There you have it... And there's no way research funds take priority over all other uses.",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/15oD4IgycFG9kDhXv19sg0vQkxGqjO9Qh/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1o0FpLOlUH5eI2j7WMl3tX9B4uTofMFHx/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "If we hit oil...cha-ching...our research funds will increase! Which means...we should definitely dig or oil!",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1uCHB5pYv1EW_XzqxKF1MGx9Kr_2nHTj2/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Seriously...Eta.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1HVjpcv_C3uUXIFqJTa5r6Uo5NNVMJ4kv/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Well, let's proceed with the investigation assuming it's a long-term plan. What lies beneath the earth isn't going anywhere.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1qv-aa-0GVqteMsrGSf0QPADU56Ad-hUP/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "We're almost at the coastal area we were told about where boats can anchor...",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1vZXZcxy8M1mje5X0JdICRGsKTHyA0BtR/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Ooh, there it is...",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1fGdfX0jV6B_YlmTEagGW7AZNPl6mvvMx/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "That's...\"Malak the Mavolent\" the people at the town hall were talking about!",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1gO_t5C0cQQvJY9tgcsffV-F33DsfDHX4/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "It does have a distinctive appearance, like a giant lizard.",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1yk0On7yLp1YXQ3sXsxl6RTR5BNwWaPzT/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "But calling that a \"dragon\" doesn't quite ring a bell...",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1mcfWGyrLyRF1qBmSaxy07i09di3AKGdV/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Yeah...that's...a dragon. A real dragon.",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1l_G35kOi_vCrc7N6c8exQbdeMJvfAUDT/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Really? It's not just something the townsfolk came up with?",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1BnpqB7qa88xPxu6DVYRjm0JvU2q9NmUV/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "That may be the case...but on its back... it's got scars where the wings have fallen off.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/135bX_ygffxLaWejDdwYmK_ebBhZVrOQ6/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "If it used to be a giant lizard with wings, that's more than close enough to a dragon.",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1mhAIbL1hb7GWvAu9ayEBwg7Pdboa-anw/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Heheh... A real dragon...would be fascinating.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1DPBA-fVEWOEMgJh8Y7oP6dPSZaCpJ_JX/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Defeat it, dissect it... There are so many exciting things to do!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1Ao7ziFxjIkkG2KwL7Pf9Nq4p4EgtDtg0/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Alright...let's start investigating the dragon.",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1wqKEK0TnyJX4u3geJtIPGnWHQXk160mn/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Hang on, Eta! Shouldn't we prioritize the oil over the dragon?",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1NF742QdY3dvtJ8NwQ9bBb_qJg9Tt55kZ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Hey Eta! Waaait! What if it's as strong as the Mist Dragon?!",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1DGO_0BfSHh95nfhOpS1ft1l09fdMc76C/view?usp=drivesdk"
                }
            ],
            "e4": [
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "*stare*...",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1soYNFgeqbBQSrXE1GqN2_Pq6hDjSUb6z/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "...",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1QvEcaeDQhITJWjeAokGrlB6v_cxf-48v/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Um, Eta, our main objective is actually to search for oil fields\u2014",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1i9N2pbXTEnEI5LP1Nv9Bp5QBox0CY1mb/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...*scoot*",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1ZAncXJceQIxtpwDNBZ1ZS9dZuFyN5vc6/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "(How did she move so quickly without making any sound?! Wait, is Eta able to move like Zeta?)",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1t6kL-zjns3cz3VVJZ-A922j9e1gB9TBs/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...*scoot, scoot, scoot*",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/15YUr-Wt2G3w_WT8bKzCxl9klbuEnGK0u/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "...",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1BqGX1a2TX_22fplliQFEkbz-Qpl6gecU/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "No sense of magic detected from Malak...",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1dZPmNxRqj4MLGf1Ns1vQdyo3HYc2pewu/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "(...She's silently riding on the slime!?)",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1AHJvXiXRABeDlimxSFCRtJAS6dA9p52g/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "(I see... Incredible! That's how she's remaining silent! And she's simultaneously probing her opponent's perceptive abilities.)",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1cRqH7wgamOr806sbb_DS0xBDQAqFc_BY/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...Hold on, Eta, don't get your priorities mixed up!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/10hJfZL6oxG24lzqKSNT9-CwKhht2IeiD/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Even if we're up against a dragon, if it isn't attacking us, we can just leave it alone\u2014",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1rN5rohfe0MjGpIkm-XeOOllfLNM8Ihj4/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...There we go.",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1Is-hqczPKHlLaj9S0Xw2ieBVgZwMF4pu/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "(She's made the slime mimic a boulder?)",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1PSg5ZTSeKCtXhDtTHKp5oEBS8Z5O2jhh/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...*scoot, scoot*...",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1tWyaAOX4zg140g8M_VNhnChbf_KOqIo9/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "(Eta's hiding behind that rock and moving alongside it?! Malak ought to notice something so obvious\u2014)",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/15lzFLhkDVKLzND_K90eHd0dkYG9_MgcU/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "...",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1e6sXhGLlsouTYYcRfDoiW08O5Qnapa_h/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "(It hasn't noticed at all?!)",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1vwO1zGY2Z6mOmkgsc7EWx_DmxaIouYsg/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Malak's senses seem to be pretty...dull?",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/12PTC0j6hCIxzYQ4VlDGL2kbUJBPa9PIN/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "...",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1pPfpPXv2mo0EZuESuZy-mYMDeZeAI0jN/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "(...I wonder if it's not as violent as we thought...)",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/12YAJhXGmmgaEXj-XYJJ9-B_f-GyUNqfV/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...I've observed it briefly.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/17K5NgKG_gH_ZC9eoGmNwWXRVYZyp48Pl/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "So...how was it?",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1bZufZZYtuLBHFpR0fvw-DC2OVNeW0Be2/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1elMtFInHdw-RdsrNFkrfh_RCSqFrkcqN/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Its intelligence appears low. Its instincts also seem slow. I can't say for sure yet, but...",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1YLgOqROiSdezlUjMsSZRUv23QbfMY4Ek/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Its skin appears incredibly tough. Its fangs and claws look extremely sharp. It also seems powerful. In that sense, it's very much dragon-like.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1SQBwNRNGtvR3vObfLxd0ZcXcaa7goL7T/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I-I see...",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/16sLuBE_ibNfQIzy7dwidjr9ScHpQoyoj/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Okay, Gamma, why don't you teeter right up to it and try attacking while it's distracted?",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1h34Ui3lb4V5v_SzEVlNwZKLb-fS7bvuO/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "O-Okay, got it\u2014",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1Y5GmoxWpHIGHSkrAVhT_J-VJVyVxgKmC/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Wait! That's crazy! Why should I approach it without any defense?!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1Q8436gERyiRb498K6QDxHVooANzSyqDI/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1Tl_Irzl-KVrWesV2bxoFdHTfjZqwsJCd/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Danger is inevitable in the search for knowledge.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/13IIdWppiZ3SqkP3zLiJhyWKZP7va1yT3/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Aren't we supposed to be searching for oil right now?!",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1xrhaxER-Yd_Zafrk8U3KTLXsr0p-AtnV/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "But ultimately...if we want a place to drill...it would be the area with the lowest elevation...",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1PMSpbzB2kFkqCS58YK5Gw3O1SNmO95CI/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "In other words, where that Malak is. So either way...we need to get it to move.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1VUppvORewoix4CtaShdBDuDJ73-k5_E4/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Ulp... Makes sense!",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1QQD_oXXY6BYKXre8LwU-O6xJ1CuMCBc7/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...If I can defeat it, I will. If it seems difficult, I'll lure it away... Fine?",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1T0wxCITsE-zLwvMgavR-hdV7cX88knOw/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Sure. If you manage to lure it away, I'll make sure to retrieve your remains.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1HYOZXupXEUpPTqOD78hNKGKUu20Jlzqx/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Don't make it sound like I'm some kind of sacrificial lamb!",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1C1njdiRWUnrSUplgIN84vxMLjG8Rw_Bo/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Seriously, why do I have to do this\u2014",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1efKPyvp8Ju4sTB6InYODPpw_inof1gtc/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "If you defeat it, Gamma...you'll be a Dragon Slayer.",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1eK4LAlGsMZ9TAKP5_YHNy08ddXPlC5pf/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Dragon Slayer?!",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1-EgcZhftFT9BVPnoFkjI8iTN8l27lJOL/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Out of the Shadow Garden, Master Shadow's currently the only one. If all goes well, you'll be the second.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1qHciblomKq3CHj0FGfzqmSBhFJypcjF0/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "W-Whoa!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1nowQczK9AkwxilTp6TjreX2bZAuBRzAQ/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "You've got this...",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1x2_onKoXJYdpFJP_928sYXOdSvu0WJKZ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I'll do my best!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1ySFPkKs5vSbXzyvLUQuBAUT6X0gQg3Mi/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "...",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1Pm319Fq4GLeVWIQaXZrZ4nB50NSS6tTh/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "It doesn't even react...when I stand right in front of it... It's not asleep, is it?",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1o9v82yzRgumCEs2rZc7fpT3g26oQToDD/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "In any case, the target is so big there's no way I can miss it!",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1S0YKb1CeCwAWMXB3qnKC0C9egL7IEMgP/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I'll imbue my attacks with lots of magic and strike!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1D6NVzEKmWfHOtPuu7v8CTI-xl1egb8iM/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "When I strike, I'll give a forceful \"swish\"!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1j0-Oxk07I-GyJXONxhl1O33OYxq6OZcQ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Swish, swish, swish, swish, swiiiiish!!!",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1bExsG98IEffThGIYLOwwTe_D1LDTz6Qk/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "...",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1Q5f-j6i0AgRW_gajgMwjMHknvB35VxmA/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...Huuuhhh?! It's not working at all!",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1zPPb2nak8_GPdEocsBcWAA2IDorynvQQ/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "Graaaarrrghhh!!!",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1gjwenfbL2GAsk5zbeb0XFQENwPXTuIv_/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Ooof! Owww?!",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/11YzbdxZ9edN69Glf1KK1WAa0hF26x667/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Hey, th-that was intense! Its attacks are lethal!",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/14Uk0AGGTZUwjObtQ62gqCkmZLBOg3tDL/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "It usually doesn't move an inch from its territory...but once you touch it, it instantly goes berserk...",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1HlUrYNmzpVCbG3eTnfaBS4pv3_fNwUXQ/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "Gyaaaaaaarrrghhhh!!!",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1uviyk0GyL26T5wHCKoWpXR7GqqWWiPEZ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Even its movements are agile! I can't handle it anymore!",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/14S4p9cG9HfCX0DTLlYUZMVF13QvKaBHp/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "I guess it doesn't speak like the Mist Dragon...",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1SBPJnnRGXkkOjvkg52foT5xELgbnnkFq/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Let's continue observing it... Good luck, Gamma...",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1osBPJL5_R5hpN6ECm1h8s5og_hgUyv_Q/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "C'mon, Etaaaa!",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/15XWimoYeoyYQ7V4916ECz9ho6z9lsbLO/view?usp=drivesdk"
                }
            ],
            "e5": [
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "Graawwgghh!!!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1ALEGG_xk92O1IVBB_oaPPBST3LUCvmu0/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Hyaaahh!!! Swish, swish, swish, swish, swiiiishhhh!!!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/10p8bh8jRlWMcE660IxfdbGYFZDQyCPxq/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Ooh... Nice upswing!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/16qTAD3m6AiFsDoS3mA7NeyGE01ILwVop/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I-I hit it! I'm in great shape today!",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1Fns9F7X6QV8xxHdwdjMGtZgiwFc-oA6v/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "All right, I've just gotta keep this up\u2014",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1pWFiDZy-1FY5J3PEHkDWRQx-YKupbGEf/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "...",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1rZegH1muXj2FcJax0ca6fJhBlI6rmqOw/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Wait, it's not doing any damage?!",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/19H0dt3o_zBh_VXPoANiCG18d88qBBQlL/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I'm clearly penetrating its skin, unlike with the Mist Dragon! And, I'm supposed to be stronger than back then!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1MKnI7omjUxTxy7O8zC1U6MMSoWWrgrwn/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "Graaaawwwl!!!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1pQyM563hdi2j4Dt5ySyFtYHCWSjJ4Kpu/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Eeeep?!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1EZFPGlC9bQw1gjpedLMmL1i9zh3qf6zU/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I-It's strong...fast...and tough! Despite having such a dumb-looking face, it is a dragon, after all!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/125YEcSzLp7x4b8GjEmZOMKvy1OVM37qM/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Gamma is afraid of falling...so she doesn't try dodging the attacks too much. That's why she's so useful for investigations like this... Heheh...",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/19XFEsOJgQuzxo-k6LQBDS9AB8xVH5Cg_/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Now fight... Fight more!",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1t_QSBt4eGRRUw0py_Ma49fLomb3op5XR/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Huff...huff...huff!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1LMEfEGCl8j_Ld4uiu9lw3E_bDhqyh5j6/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "...",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1ukSBOJYRfUPc5JzY6JrM0F8EzCcm9NDW/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Hmm... This is a slugfest.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/18TbSKoY3BGvinL9glJU-WFFMsfBIkWD4/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Even with all my \"swish\" attacks...why doesn't it feel like...I'm making any progress?!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/16mVH2RQpmcMSjoFJcXixUkIcUHBxP2B5/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1Nvyh_E6e1heOhuHfvJl0zTeDuf7v3sO9/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Because Malak's wounds are healing...at super speed.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1to_ef5rg2KShD_HQy4wxgnuC24PjByry/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1GIRQ6ouOtctZfW3Y1rng4y98btXAcGVB/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Huh?",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/10dPgT0NuIccjSyEdl-slzb88xAZuhclJ/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "I observed it during your first attack. And...after multiple observations, my hypothesis turned into certainty.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1Hb7ZY-6rhh6UtaK942Cy0Vw0oOFdZ4UJ/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "When you'd \"swish, swish, swish\"....between each swish, it would already finish regenerating.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/11DAPWAAJz5-Ct2vsmKfiixDn8RPSnSII/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "That's why it doesn't appear wounded...because it actually isn't.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1cNf-kU1tJIbDKLvrPMP3iQiTnsi7HJgQ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "But!",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1uuahjL2KM_mGyRu7zEI-C16bstAr7olX/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...B-But if that's the case, then I'll go all out with a single-hit kill!",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1rLJy-m0iqScNn1eX8ijDrLcwarYIGjpf/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "That might be one way to do it...if you could actually land a decisive blow like that, Gamma...but, knowing you...",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1sHdATKuJBognwujQ2rTTCXdrVu7KbQWJ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Eta! That's a terrible thing to say! Apologize to me immediately!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1aX9VoVDT10xnd9k07685OYWgMYPVlabP/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...I'm sorry. Forgive me.",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1JaQfra2ThP5naDmPBJEt4CtxFkvuGZTC/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "What an insincere apology!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1pbLsrDN-IJCcamypothTMPHtvgDdYm-l/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "But...it wasn't Master Shadow's teachings that were wrong. It's just that I'm inexperienced, and the foe is formidable...",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1H-hlAgh5hJoyRPQwBhAEWfJj7UbuDoeM/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "Grrraaaaahhh!",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1J1iKA4TwgLqVfst9BHJ_yoO4GiiZGKQK/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Whoa!",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1J4G0BzTF8Ap2Ml0fVzkjze-vnK7iQG1M/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Hang in there...Gamma...",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1jVDy76brObpYyTl7NTOeIQtemHAWJbN4/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Huff...huff...! I'm completely exhausted... I want to rest a bit and then start again!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1hQ0CI3ErmKcYmkVl_c_DFaqJaf4YWght/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Oh...I forgot to mention...",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1AOU3ufYUFIQRtm12NScBunqyMKb5xv3k/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "There's something else?!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1YZmMmBTbojcMKAehKfLX0H6rwyLLl1SB/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Even if you manage to land a single-hit kill...if this Malak happens to be a real dragon...",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/13dsItuiBHLCMT6Ua6C56oVqMT3e9yf4D/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Just like with the Mist Dragon, it may be impossible to kill unless done so in a specific way... Maybe.",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1ntF6IqvWAmJ6aBlcjaL1vMBj8jL5fau_/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...Whaaaat?!",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/14XGdH8CrSFHxlGSI4hU0HljHpXzOcO-V/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I'm such an idiot! I completely forgot about that!",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1qajyFNX4uBo8pnbE6em_yuq7SxIstdZB/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Gamma, you were dazzled by the title of Dragon Slayer... Heheheh... Thanks to that, I was able to observe you meticulously.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/12JU_hlr5Cyhb3uC6E-hRXhQGOnoe3U3X/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Ngh... That's it! Abort your observations! Abort! There's no point persisting against an unbeatable opponent!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1xi-cFBpmDbExoG8KDBPsxoLMyjwoxHuo/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "...",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1ALIIrGoQPIcTYHlW72ovtWeuS2MSoKef/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Since we can't move this dragon from here, frustrating as it is...we should fall back for now\u2014",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1QfHCPbUYmZsKQ6HLFvJdBlNoDgpFQTWQ/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "If it won't move, we'll just have to make it...",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1cP0vZ8j4pU3n6Heiaqug0JKy0LXx1Xj0/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "You've made the slime mimic my appearance?",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/13NLVq-OhSX8qBoGU-pXqExjCy6EEkZqt/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...*scoot*",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1hFOk7NZGq3_UoU8A6-J41dtxRJYIv4Tx/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "There's no way it'll fall for such an obvious bait when I'm standing right in front\u2014",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1XNptI8W2FQ6Mg6c5znGMrbEwTSCUzJQP/view?usp=drivesdk"
                },
                {
                    "name": "Malak",
                    "name_variant": "Malak",
                    "subtitle": "Graaaaaawl!!!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1JucDFRPaWqpY5yoDixgXJAqMUyiR-cGw/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Huhhh...?! It seriously fell for it?!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1UVh6JhXPtCQ0q_ZV59jFfj-EKoC163ws/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "It's disappointingly unintelligent for a dragon... But...heheh...it makes for a worthy test subject.",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1N1MWJd_X5dIhzeWgiQ98WhoJQQ2lQ3vs/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "I can study the dragon's ecology alongside our investigation for oil...",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1qUx3cVEbFc0O43hVeTSt5Ysrn10vRLcT/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Madlid... This place is...fun!",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1h0MxysiWXMYQersf1dePcxNABp_N2Ai2/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Right now, I bet you're the only one in the world who genuinely thinks that, Eta.",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1jnR0jEnl0JE21DUhaozVlUw5y3YbTWfc/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Shall we start digging for oil, then? Although, if this is Malak's territory...it might be back once the slime's effects wear off...",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1SiQ3QjJ2nfjrYgO5UAsxZWHjMOWvBkr7/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "In that case, let's get out of here for now. Even if we're digging for oil, there should be other locations also worth considering!",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1HXhSVsG5I1sFpD1E0ek8e4pQ6no6TXuw/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Ah... So this is it!",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1iXYqqGBz01pLXcjVi9sWxAIPJBqBh_jF/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Yes, my lord! This is our base, Alexandria, the Shadow Garden's headquarters!",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1td1ufW9HT32C0KhKdRVE7VfZCxQvp3nC/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Alexandria!",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/120DTAqZah6HnE4DigRdJS4uwFADYW7fp/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(...I see. They've developed a self-sufficient place by re-purposing the ruins of a city that perished long ago.)",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1d5PNx7m3Uo632ZaODX2GAY5V23FJMi9V/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(Even after the possessed are cured, it's a challenge to reintegrate into society in this chaotic world.)",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1lBZU6pSKju4Ygy4xZYHnlSKv6H5KD6IE/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(Considering the state of this world, it seems like a viable option...to live modestly in a vast hidden village like this.)",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1xLv6WqBWY_76o8aW1RGBdxBaUgg5kEdU/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(With the forest filled with poison mist and the presence of a dragon, it seems unlikely anyone would attack.)",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1SieNcqBvJN_mO-rDk_D1qi6djwh_JIhb/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Heh... I see.",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1ANu6tEnTTn_kQ6MY2gdrARiDgWz0mDJK/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "My lord!",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1VL58cuolETLvYeeo4nuMQ6POVR02Vjix/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "This is the training center!",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1Nth-HhHvL5vY9anprU5X9ErM8GgMXh4O/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "The members of the Garden train in these facilities day and night!",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1TnMwFZHv2uTsOIZPKaK3Po_LGR2PWEfN/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Quit slacking off! You've got one set left! Give it your all!",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/1P6qaxr2iNuDS6E-ww6LlHwZSzGoC3fGt/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Training!",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/1oa6lu3UuKAf6nGY3m6I1FYp-8S0uCE5c/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(...This place is obviously just another of Eta's grand pranks.)",
                    "line": 71,
                    "url": "https://drive.google.com/file/d/1LhrHcuawszTcRaYUTblqlBobt7_E9N5g/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(Structurally speaking, it feels more like a dueling arena that enforces survival battles than a training center.)",
                    "line": 72,
                    "url": "https://drive.google.com/file/d/1D3i3as5JVP_Y4yFRTUKwZSNoajDupvif/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(Well...Eta's handiwork aside, that girl there gives off a real drill sergeant vibe!)",
                    "line": 73,
                    "url": "https://drive.google.com/file/d/1Pbmv2T1qgopmNJhpAHfAKBG396UJZSvP/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Lambda!",
                    "line": 74,
                    "url": "https://drive.google.com/file/d/1ox_CCTQsEHxZmeoMzGLqWwUWH9LEfgYq/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Yes!",
                    "line": 75,
                    "url": "https://drive.google.com/file/d/1eQlY0N6F7vEIU8_kZzck7qPaEhVGiwNX/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "It's your first time meeting him, isn't it? This here is our lord, Master Shadow.",
                    "line": 76,
                    "url": "https://drive.google.com/file/d/1G8scFkWtI_kOQqea5ZuXJAg2fxa54rJw/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Sir! Yes sir!",
                    "line": 77,
                    "url": "https://drive.google.com/file/d/1X3XrDjKE8wFJvIdmZupAqG3Z5gHw0FdY/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Whoa...",
                    "line": 78,
                    "url": "https://drive.google.com/file/d/10X62uuq5SescsxvVtvLxQjEfvPLO8eEw/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "I am Lambda, responsible for the members' training!",
                    "line": 79,
                    "url": "https://drive.google.com/file/d/1GtoUQMLyuS91gtq9hk8SWJd-HQUlFFha/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "I express my deepest gratitude for the chance to meet you, Master Shadow, and for your hand in saving my life through your leadership.",
                    "line": 80,
                    "url": "https://drive.google.com/file/d/1WrToZw3-UsCeAPYu442T6CBv8dO59enn/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "I will continue to devote myself wholeheartedly to the Shadow Garden!",
                    "line": 81,
                    "url": "https://drive.google.com/file/d/1ezts3OISm0dqXfIoUrCLj6ybH0Jin1qd/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "...Very well.",
                    "line": 82,
                    "url": "https://drive.google.com/file/d/1538d0Z0WK2YCywOefosYZkesYEjN6MGe/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(Wow. She's quite the actor!)",
                    "line": 83,
                    "url": "https://drive.google.com/file/d/1PyRKUs0V1kQaNN2Ju0Vgn2CgzidxjZWN/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(She's probably in charge of combat training for hunting and self-defense, as well as rehabilitation for handling magic as a possessed, but...)",
                    "line": 84,
                    "url": "https://drive.google.com/file/d/1iuhMpccUZRWbi6lBGm1r-cruc_bU_P3o/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(She's a stoic female officer with a militaristic aura, training and honing the members of a secret organization... What a beautiful collection of clich\u00e9 archetypes.)",
                    "line": 85,
                    "url": "https://drive.google.com/file/d/1sHZ3MJZdwSWhi29gBcc88n20AaNSNv74/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(And, for some reason unclear to the casual observer, she always has one eye shut. It's an otherworldly behavior that scores her extra points!)",
                    "line": 86,
                    "url": "https://drive.google.com/file/d/1vTVXqC6EI35_L7DBTdMVzY_m_--l7EOP/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(It's no exaggeration to say that this type of person radiates with a subtle brilliance when it comes to shadowbroker play.)",
                    "line": 87,
                    "url": "https://drive.google.com/file/d/1U4vZHC6kn1BHzzaCJPUTPx9I4K_WjV8j/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(That said, the girl may be a former possessed as well, but I'm surprised Alpha managed to find such an over-the-top talent!)",
                    "line": 88,
                    "url": "https://drive.google.com/file/d/1qkcUOtmWAMcY4hOkm7na_HLiKStsAL6v/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(...Anyway, I need to respond appropriately\u2014 All right!)",
                    "line": 89,
                    "url": "https://drive.google.com/file/d/1MtHVVQm3OyRnXGSrSJ_-T2MJLhV4A5ol/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Heh... So, you include magic adaptability within your strict training. Insightful.",
                    "line": 90,
                    "url": "https://drive.google.com/file/d/1eYaoK7-PLOwvwcWI4e5FJQeb2TN8SyJH/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "I...",
                    "line": 91,
                    "url": "https://drive.google.com/file/d/1AmqbS6eCHOwPEyr4XzH14tCMM-PEhnls/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Keep up the good work.",
                    "line": 92,
                    "url": "https://drive.google.com/file/d/1tBP5Bet7tR-Vgp2uPVesxO4AEai8EBi7/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...Sir! Yes sir!",
                    "line": 93,
                    "url": "https://drive.google.com/file/d/1dRL_ETjwtb6d0etY4V400st2Gr-Bq0ha/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Hmm...",
                    "line": 94,
                    "url": "https://drive.google.com/file/d/1sBcm6auwSkuV9-vOFBzfNDO35WJJbL5J/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(I don't think I've ever seen this type of salute in this world... Now it's time for my shadowbroker move!)",
                    "line": 95,
                    "url": "https://drive.google.com/file/d/1F3PxIMxJoJqiS1yd0fId9hyK1GMIclmg/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Heh... There!",
                    "line": 96,
                    "url": "https://drive.google.com/file/d/1LVLE52s4XGAH4iXJYzBR5A_j8TvF2iNh/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "*gasp* N-No way!",
                    "line": 97,
                    "url": "https://drive.google.com/file/d/1B9dwLBkx6YSqDXNFSLf5EcYd5UAnYGIA/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Impossible... A hidden passageway?! I can't believe such a mechanism existed! It wasn't on the blueprint!",
                    "line": 98,
                    "url": "https://drive.google.com/file/d/1Cnp7cXN0v6hp_rlFcexeHb3aIV8RzwxL/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "It's obvious by reading the flow of magic and air.",
                    "line": 99,
                    "url": "https://drive.google.com/file/d/1E2EHCImcZc0xMtVU0Mb96FYwuBqVgyVz/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "In fact, it's highly unnatural for there to be an area where the flow is completely blocked.",
                    "line": 100,
                    "url": "https://drive.google.com/file/d/1htFivw5_O31FqtrFqCkbjK6E3oGTE6TM/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "I seriously can't believe Eta would go so far as to hide something like this!",
                    "line": 101,
                    "url": "https://drive.google.com/file/d/1uz7gomJW1_oYBTzcwphPIpF2Ngm7YCw_/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...Fledglings! We're changing our training program! From now on, we'll search for hidden passages in the training center! This is not a drill! I repeat, this is not a drill!",
                    "line": 102,
                    "url": "https://drive.google.com/file/d/1Xv-gROz--DAVd5HnzL63DrmMvBerT8sB/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(I had a hunch something was around here, poked around, and was right on the money... It's a typical concealment tactic by the ever-experimental Eta.)",
                    "line": 103,
                    "url": "https://drive.google.com/file/d/1HVBLkoVpGNGDukjXLZI0NpN730a80wmK/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(Well, it beats causing a scene and drawing attention in a crowded place. In that sense, this ancient city may be an ideal location.)",
                    "line": 104,
                    "url": "https://drive.google.com/file/d/15Li-A22XuD5ZK5PGeOtqNYf-vgwck55H/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Epsilon. Please continue the tour.",
                    "line": 105,
                    "url": "https://drive.google.com/file/d/1ZEIFM02JUTZKBGNup6UdIaanJosxNKbw/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "U-Understood! Let's head to the castle\u2014",
                    "line": 106,
                    "url": "https://drive.google.com/file/d/1DV5_gWGba9q1Ez1oQnl7VBo9Ccd90hSW/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "We'll meet again, Lambda.",
                    "line": 107,
                    "url": "https://drive.google.com/file/d/1feh5AgjN-taQRM3cqgx_js5fzHJF7ECD/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Yes!",
                    "line": 108,
                    "url": "https://drive.google.com/file/d/1WYcv1X9EEvcy_pWaJyM14XB13zBvsN4j/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...He subtly encouraged me where I lacked confidence in my hypothesis that prior \"rehabilitation\" may be important in combat training for the possessed...",
                    "line": 109,
                    "url": "https://drive.google.com/file/d/1a-YYTwFc_qec6ajWG_jcdL46JKb82crR/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...and the significance of acclimatizing their bodies to their newly acquired magical power.",
                    "line": 110,
                    "url": "https://drive.google.com/file/d/1j5kMHnfjEdddJH8SxMBRFlD6PAbyVNwF/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Like a gently comforting shadow on a quiet night. That individual is our leader...Master Shadow!",
                    "line": 111,
                    "url": "https://drive.google.com/file/d/1i-kuwIOis9r-cuq3R77GOMExzvtTkWVE/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...Right, I will officially submit the proposal for improvements to Lady Alpha to incorporate a rehabilitation period before the training program!",
                    "line": 112,
                    "url": "https://drive.google.com/file/d/1jMHlGKDUyCA8osYYnI03-QEeaEhVPTKx/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...And in this way, we're restoring the ancient city's architecture and utilizing it as our base.",
                    "line": 113,
                    "url": "https://drive.google.com/file/d/148AXdnpavstIdMwyLFnMipDyFuhQsyVj/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "I see...",
                    "line": 114,
                    "url": "https://drive.google.com/file/d/19asZg9l1VdPNgnpgh95fnWZ-k2BC5qFE/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(It's got a slightly old-fashioned vibe, being an ancient city. and all, but, put another way, it's filled with a sense of old-world charm.)",
                    "line": 115,
                    "url": "https://drive.google.com/file/d/17uEngTp5z-bSuLe8Y-5fQiYG2N5nqbpc/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(Not the typical villa for royals or aristocrats. It allows you to feel the full weight of history...and the accumulation of things.)",
                    "line": 116,
                    "url": "https://drive.google.com/file/d/1arzdD6M-e2AiZxGF5YpHDW5w0ZIwOK4H/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(In other words, it's been adorned with years of dedication. Along with the remote location, it's the perfect base for shadowbrokers.)",
                    "line": 117,
                    "url": "https://drive.google.com/file/d/1sEIOYCNtG2MST7AqdGl-MjHwNe-XxM4J/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "However!",
                    "line": 118,
                    "url": "https://drive.google.com/file/d/11Y3jJ-E7-IcDK6oLt_mEjRrlokoFZmAw/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "My lord?",
                    "line": 119,
                    "url": "https://drive.google.com/file/d/18p4FMAfo6XVlnv7NcCrA9MWO8EqsoxTa/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "This \"base\" is lacking something.",
                    "line": 120,
                    "url": "https://drive.google.com/file/d/1EcU6y-2gtw-jm3dKLePGBANLfDvQjaeb/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "*gasp* Lacking something?",
                    "line": 121,
                    "url": "https://drive.google.com/file/d/1be7f903bReMwo5RonxWSQ6yEwEu2hGLx/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(Something essential is missing here.)",
                    "line": 122,
                    "url": "https://drive.google.com/file/d/1GqkBwBAYMsv9aUpjMPb2UwgkQ12EcMFL/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(Yes... Strategic location!)",
                    "line": 123,
                    "url": "https://drive.google.com/file/d/1JyxyPkwA0GGtksXe4H553RQqG2SM0hPu/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "...",
                    "line": 124,
                    "url": "https://drive.google.com/file/d/1S7YdajzQEFKVvddpycY9yApwVbpziPJA/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Um, my lord!",
                    "line": 125,
                    "url": "https://drive.google.com/file/d/1CY_QfCmsK5H0t1CmLBqyt4AnKNnEz4wA/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(If I were living at the Midgard Academy for Dark Knights' dorms, it would be much easier to come here...)",
                    "line": 126,
                    "url": "https://drive.google.com/file/d/1y5JvCikLUjt_z1Btkyc399VB6eiyw0VU/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(But considering my current position, even if I dash here at full speed from the Kagenou mansion to play shadowbroker, I'd have to return immediately... It's not realistic.)",
                    "line": 127,
                    "url": "https://drive.google.com/file/d/1PQ9Wvf8lv5wAJPtCaRqjwitXWCBIlI-F/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "My lord! What is this base lacking?!",
                    "line": 128,
                    "url": "https://drive.google.com/file/d/1z8Q293IbAoUx8Z-ewWgE6lu7afaxP8sR/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(This place is ultimately a secure haven for the possessed, which Alpha and the others stumbled upon during their girls' picnic outing.)",
                    "line": 129,
                    "url": "https://drive.google.com/file/d/11tX0y3m7nXOdyxCAk-rYD_dhRkjHv6KA/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(And I'm glad everyone has designated it as our \"base\" and indulged me in my hobby.)",
                    "line": 130,
                    "url": "https://drive.google.com/file/d/12C4BkQQzc1VyvLz1Ua5Kso8Gi9HQ4tRU/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(That's why even if I were to point out the strategic disadvantages of this location, it wouldn't result in anything substantial and would only disappoint everyone who's been considerate of me.)",
                    "line": 131,
                    "url": "https://drive.google.com/file/d/10txK5E7Kx2PPWaaCLEJXKML8BlZLyXnl/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "(So I'll take my time. I'll subtly make them aware that this setting is difficult for me \"currently.\")",
                    "line": 132,
                    "url": "https://drive.google.com/file/d/1ShbIS2wfP_UQScZuQDBBYUlCbyE5eIVM/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Don't worry... It's not that this place itself is lacking anything.",
                    "line": 133,
                    "url": "https://drive.google.com/file/d/12TdYVqXg0UVEgVLE3rgxyVcDj6i7h7ot/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "That is to say, if it had this \"thing,\" it would be better for it. It's simply somewhat lacking conceptually.",
                    "line": 134,
                    "url": "https://drive.google.com/file/d/1Hw7CiGqTaTdN0J0A_xUC8qiGNKlZjtrk/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "My lord!",
                    "line": 135,
                    "url": "https://drive.google.com/file/d/1U-qpgEzuKDlGq_mL2hbLTMDpwY1Yj3xH/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Ah, I should be heading back. It'll raise suspicions if I don't show up from morning till evening.",
                    "line": 136,
                    "url": "https://drive.google.com/file/d/1jOuMNi3fl_5ZsnnYM3e4kEfCwFn4BN4o/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Thanks for showing me around today, Epsilon. I'll come again.",
                    "line": 137,
                    "url": "https://drive.google.com/file/d/1LqfPvZdj0GuTjk6hSX3S4ZbjOCIBm15y/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "R-Right! The pleasure is all mine, my lord! I will see you off to the Abyss Woods.",
                    "line": 138,
                    "url": "https://drive.google.com/file/d/1621twAgHLcCCa3ijTpYwm87acQudXJpM/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...Something conceptually lacking from this place!",
                    "line": 139,
                    "url": "https://drive.google.com/file/d/1uQdcnN6DTTV7r7vKSeTz1Fg5cUWmnjav/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Surely our lord is testing us to see if we can properly grasp his thinking and make up for what Alexandria lacks!",
                    "line": 140,
                    "url": "https://drive.google.com/file/d/10tRoaz4mE__zQXaDXqogGHizFAQaqTvw/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...",
                    "line": 141,
                    "url": "https://drive.google.com/file/d/17r1Yl2cUYnm9sHDbDqs9Pa-0KMjYrC7M/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "In any case, I'll have to discuss it with everyone in the Seven Shadows!",
                    "line": 142,
                    "url": "https://drive.google.com/file/d/1AS85QCl7jsXofVTN3PZQ48HFCR6-BoVe/view?usp=drivesdk"
                }
            ]
        }
    }
}

let setDoc = db.collection('data').doc('ssc_p2_c2-4').set(data['p2']['c2-4']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
