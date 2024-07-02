const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "mt": {
        "e1": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So...the meeting place is the capital's plaza.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1XA2lF8vqiQT2hB8ahHd_GDoxlUgJQF2J/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...It's rare for Beta to ask for a meeting. What in the world does she want? ...Well, guess I'll find out once I get there.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1fktgXS_OCnzzdTyL0GhIN_1Sbo_nM6pl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Yesterday, I found a letter in my dorm's mailbox.)",
                "line": 3,
                "url": "https://drive.google.com/file/d/1EC9A3VS8DBINiXEuUyFWgnjLn3pHglSy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(The sender was Beta, and it was a brief note that read, \"I will be waiting for you tomorrow at the capital's plaza at the following time\u2014\")",
                "line": 4,
                "url": "https://drive.google.com/file/d/1Vii9rIdiCa7VgHUGSwlCVz_nftS_LOTq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I'm heading towards the designated location, excited by the mysterious message that seems to hint at the start of something interesting.)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1sa4EL1TfseuMU8nq_GA_x2qzKSCuUGkx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright...should be around here.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1SjL5eum7MdTawA4pnfU06cs0IeU9Y445/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Cid arrives precisely on time at the meeting point and looks around.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1ukMLLzl6yaeSbCib1HsvM4HSLOUNQNiX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Ah, there she is... Huh?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1kwDNV4XuD0wgbevcOW1J-_e-4SQdtKyn/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Beta stands there, dressed casually.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1grNY6rVg6cOXrhPhWT97-HSXZMeotkUq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(You can totally tell she's Natsume Kafka. Won't someone recognize her? If they do, it's all over... Not that that's my concern...)",
                "line": 10,
                "url": "https://drive.google.com/file/d/1al75p89gKrcpa08RfMG2EqJPt4u4P5Sn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...No, wait. There may be something to a celebrity doing something so brazen that no one recognizes her. That would explain why she's acting so laid back...)",
                "line": 11,
                "url": "https://drive.google.com/file/d/1ZQKqbzMmiDuYGpqERbmLQIHrDUqkUqFZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(And judging by the contents of that letter... She might be testing me.)",
                "line": 12,
                "url": "https://drive.google.com/file/d/16Ks7EubQpG1Dq8d5vMPaIWEdeWNjLEey/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(In that case...fine. Let's go with something from a spy film. This calls for the stereotypical spy move of \"standing next to an associate as if you were strangers and talking without making eye contact.\")",
                "line": 13,
                "url": "https://drive.google.com/file/d/1MTxGuTg1y5uzCdQoFnF9dey_ZjBQcPhu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Well, let's get started.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1ZBiXtwTZfPO5uMSr1YX3sZCWa9IEgOQ2/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Cid nonchalantly walks up and stands next to Beta.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1THqTezaRIS1pqEVVonr2ingeCZoJyQ3R/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 16,
                "url": "https://drive.google.com/file/d/1oBDX_XtHafXOotZ9ljNvXdqXzC0j9HKf/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...",
                "line": 17,
                "url": "https://drive.google.com/file/d/1Rq8SPTn0opuxjOofsdG-_W4vqSFu6WLQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...*ahem*",
                "line": 18,
                "url": "https://drive.google.com/file/d/1r0dHWEVI2_g-40MJZtdPydL0Y32gCP6b/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Hmm?",
                "line": 19,
                "url": "https://drive.google.com/file/d/1xIIN2Q-uVQC9H0F1sQjeWOr6Az3OrzsI/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...M-Master Sha\u2014",
                "line": 20,
                "url": "https://drive.google.com/file/d/1IYmTu2D7Pwdh4Z3RqfS0eZsV0AqTUWP3/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Surprised, Beta nearly says \"Master Shadow,\" but hastily interrupts herself.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1BIJVkMG2UoyxPDEA2LF62q8sFMGJ6Gd-/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Ahem. Sorry for losing my cool... How long have you been here?",
                "line": 22,
                "url": "https://drive.google.com/file/d/1dnZ1DKaTOM_9hsadRj0cx66JsQQ4U4Kj/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Jeez... If you were here, you could have just said something.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1T31XWzPLVLKfFvReL5LADNlfWlgdJYN2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Heh. You've still got a ways to go if you didn't even notice me...",
                "line": 24,
                "url": "https://drive.google.com/file/d/14fjrL-WVd_qr_eE-WNXZpMDciE65g3UG/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "My apologies...",
                "line": 25,
                "url": "https://drive.google.com/file/d/1LKTwry5ocY9opfXwsd42apmwt-udjEwj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Pay attention to your surroundings.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1Yh07OakyJQtw-GWOpjlU5SkOBx91_MoW/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "My surroundings? Understood!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1X19gXHSSOD2C72liLSmfynzO2b_X6OjI/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Huh?! True, it's dangerous for me to make contact with Master Shadow so recklessly... Who knows where the Cult has eyes?!)",
                "line": 28,
                "url": "https://drive.google.com/file/d/1ZoUKHz6vlJZrSloQM-Lq-3RsjJU3upDv/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(I called Master Shadow here because I was so embarrassed to visit his dorm and be alone with him, and now I've made a complete mess of things! Beta, you idiot! You darn idiot!)",
                "line": 29,
                "url": "https://drive.google.com/file/d/15gs7OCjHF1HUwX6e7BdarylE1cY1xQXs/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Aahh... My apologies for choosing such a public area...",
                "line": 30,
                "url": "https://drive.google.com/file/d/19O6v01cHMxThID3iNsjv3UNRt_q0p3rx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Don't worry about it... So, what do you have for me?",
                "line": 31,
                "url": "https://drive.google.com/file/d/1fprtSzNmiRSZb7cyFG6-Y9YeopJfR48D/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Oh, excuse me. ...Here, this is for you.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1mZRtSaE081jUxHdhg9x1HXn0mf89Indi/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Beta hands him a single envelope and a package.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1aUZz4GFnqWYuNKga5tseLVcSIC5LPbD0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "What's this?",
                "line": 34,
                "url": "https://drive.google.com/file/d/17fjw3tKmMtWorxEZfoKiTWFE6TgBm8Cl/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "An invitation from Mitsugoshi and a special outfit.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1h__Ea-8gx4YpzDEXnUxhDsupwC1sURaS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "An invitation and special outfit...",
                "line": 36,
                "url": "https://drive.google.com/file/d/16yF0UEqLKpMnaZPIMLK0MI7T4AubgRCs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(That's got a good ring to it... Is it an undercover event where we infiltrate some aristocrat's party? Maybe there's a fancy dress code or something inside...)",
                "line": 37,
                "url": "https://drive.google.com/file/d/1F9Y4exmiPQn80FgQ0FQmdwhraOTRBciA/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "We've prepared a special \"event\" for you.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1yW5ExUMHsMK6_kPtyLS86SOkbelyaCr5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Can I get my hopes up for this event?",
                "line": 39,
                "url": "https://drive.google.com/file/d/1TODLDvVNVziv7R-E4-KbO0vcUctqabjn/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...O-Of course! It'll take place the day after tomorrow at\u2014",
                "line": 40,
                "url": "https://drive.google.com/file/d/1y3bOmK-v6clQUs4r5r1qVhUUHOCzEOWE/view?usp=drivesdk"
            },
            {
                "name": "Passerby A",
                "name_variant": "Passerby A",
                "subtitle": "Hey, isn't that Natsume Kafka?",
                "line": 41,
                "url": "https://drive.google.com/file/d/1ixXCK4c6UVEZpAhyTk10MNiTyoVNQv31/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Huh?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1_1gTm0fXp4ZBXT2RX6VpkYfkfHz3zD7L/view?usp=drivesdk"
            },
            {
                "name": "Passerby B",
                "name_variant": "Passerby B",
                "subtitle": "You're right! That adorably beautiful silver-haired elf girl\u2014that's totally her! Maybe there's some kind of event?",
                "line": 43,
                "url": "https://drive.google.com/file/d/1Ghayxx12YAfVPUVkT1AInMpcJFILd9G-/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "With those words from the passerby, people nearby begin to notice Beta's presence.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1l-5-ZagleIEMvXkx4ygZ80GZea1fxTE7/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Whoops! Oh no! I'll be going then!",
                "line": 45,
                "url": "https://drive.google.com/file/d/1xFvxonMkWsA2HO-Rj3_Cs3a91T-2vDmb/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Please read the invitation for further instructions! W-We look forward to seeing you!",
                "line": 46,
                "url": "https://drive.google.com/file/d/1pVV2nxDyj2wRg7OH95H7jeNoiZ2DIuBX/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "With that, Beta scurries off.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1OoKZoBbF44_4qoGPqvtYNqVe68Hi8krn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Wait, hold on, did Beta come here without any plan? Seriously...)",
                "line": 48,
                "url": "https://drive.google.com/file/d/1RRrJa4syvli2Adix4KXkwDhrdKxrWjjn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Let's get out of here before things get messy.)",
                "line": 49,
                "url": "https://drive.google.com/file/d/1ZBRSNdz3x7Wa6X3X-daO7ZP9aUVN3qqD/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Cid preemptively departs the scene.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1CX4v-zVykHasOyBut_qjC4BwMLIoKu5l/view?usp=drivesdk"
            },
            {
                "name": "Passerby C",
                "name_variant": "Passerby C",
                "subtitle": "Oh, Natsume Kafka went that way! Maybe there's some event going on!",
                "line": 51,
                "url": "https://drive.google.com/file/d/17d6MT_CJsC5EudILrUxLj7hoLc2z6s7C/view?usp=drivesdk"
            },
            {
                "name": "Passerby D",
                "name_variant": "Passerby D",
                "subtitle": "No time to waste! Let's chase after her!",
                "line": 52,
                "url": "https://drive.google.com/file/d/1WDXpBzb1RttR0VvMgk1JhIJvzRzeyZl8/view?usp=drivesdk"
            },
            {
                "name": "Passerby A",
                "name_variant": "Passerby A",
                "subtitle": "Hey, come to think of it, wasn't someone next to Natsume just now? It looked like they were having a friendly conversation...",
                "line": 53,
                "url": "https://drive.google.com/file/d/1xHiCJefmfT4grxDsmDZwoa1Xx03H9gKe/view?usp=drivesdk"
            },
            {
                "name": "Passerby B",
                "name_variant": "Passerby B",
                "subtitle": "...There's no one there. Sure you didn't just imagine it?",
                "line": 54,
                "url": "https://drive.google.com/file/d/1FEYCzzEicCdtm3FWkcjLfGgpPgmD8aY5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Whew. I nearly got caught up in the whole \"Who's that next to that famous person?!\" scenario...",
                "line": 55,
                "url": "https://drive.google.com/file/d/1AvVedWHowGiYFbcTfEHvX5MF_OFDaNUp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Well, I came prepared with two encoded magical scripts in case something like that happened.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1yff2qq7jfFs_CoO_xOAq6XEJMGNRgmby/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Anyway, guess I'll check what's in the invitation and package. Let's see...",
                "line": 57,
                "url": "https://drive.google.com/file/d/1MVTXwHWT_TsnAID_KnVmovBzjlAJVpMx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wh-What the...?",
                "line": 58,
                "url": "https://drive.google.com/file/d/1LvwUXx6BC5CQrd64q4yrknYybTAjs0be/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "To be continued...",
                "line": 59,
                "url": "https://drive.google.com/file/d/1RdQS2c6PGmsDVCINDzr6H7yJ7QGut-Oy/view?usp=drivesdk"
            }
        ],
        "e2": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I've come to the location designated in the invitation.)",
                "line": 1,
                "url": "https://drive.google.com/file/d/1OpoB3ZfatKIufn6rpP6YoU8b1qGimIlD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(And awaiting me here is...)",
                "line": 2,
                "url": "https://drive.google.com/file/d/1ENiAAY63nV6NiWbkxFs8xr3s19RHMiG_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "The blue sky and white clouds. The blue ocean and white beaches...",
                "line": 3,
                "url": "https://drive.google.com/file/d/16yDO6HzQ25FJmvmQZXqHXrCZYy_Qopo8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...and an impressive resort hotel.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1_PeG82gWjVw1o0qU8vH_rr5zi8sQqg9d/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So, it's not some elaborate mission but a vacation... Well, I guessed as much when I saw the package contained a swimsuit for me.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1aEDQvZLe_A1EROzMRTGJ6S5yeDlBAOT4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "But I never guessed they'd go so far as to build a beach resort... Quite impressive, Gamma, Mitsugoshi. Quite impressive...",
                "line": 6,
                "url": "https://drive.google.com/file/d/10TR8f-TPgLChinVLNM6WZ4muVCgM8d2u/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Let's see. If I recall correctly, the letter said to enter the resort hotel... Guess it's that over there?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1NwloGfZEu1Fc7Gv8N4E8efDVkDjUTMwU/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Cid enters the hotel mentioned in the letter.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1uLNu2HWSL1rjUVfF2yQOW2z1_O38sLYy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "The interior is luxurious and quite spacious.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1N1zU3GiM9dnLwky7VEEUZ3HTgnO3J-jR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "The designated room should be somewhere around here\u2014",
                "line": 10,
                "url": "https://drive.google.com/file/d/1t_yhLURx2UIK0ORrDC63X1U44Ajr6HHi/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "??? (Beta)",
                "subtitle": "We have been waiting for you...",
                "line": 11,
                "url": "https://drive.google.com/file/d/1sWHHdmGbTHk4n6tKwZWgDTPIID-JLUAg/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "??? (Epsilon)",
                "subtitle": "...my lord.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1wvgOeEucw3wF0e8WaLYGv6ij-KEpzx1o/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Those voices... Beta and Epsilon?",
                "line": 13,
                "url": "https://drive.google.com/file/d/1VOHbz86t93Voryy1VkeAFRoMAfV0wYfk/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "On Cid's way to the room, he encounters Beta and Epsilon.",
                "line": 14,
                "url": "https://drive.google.com/file/d/18st9ZSt7zAPH5rOlVrKyxL4x1OX0y7VR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wait, are you two my guides?",
                "line": 15,
                "url": "https://drive.google.com/file/d/1lWzMWOp78dslIjB5DGBMam_6nlY1Zd4f/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Indeed, my lord! I will be looking after you!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1AwywD9fh0d8FLmU7cTigzmf5zxfuCPCM/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "You mean \"we,\" right? Seriously, quit trying to steal the limelight.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1QDpCuiPHdFUwTLyKjqt0BAu3cO7vnPE2/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "The others were actually supposed to join us as well, but they got called away on urgent missions...",
                "line": 18,
                "url": "https://drive.google.com/file/d/1xxEpRCB9KZhHCl2-qjsjeJ9VratbxQ6v/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I see. That's too bad. I wanted to thank the others as well.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1jlWmvVoLzYLrNRTcNXGi52Y3xQcxFbp3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh no! Please don't worry yourself over something so trivial!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1Jmo3rOK8EI1rN-FA4dasyGxZdUoPT2cd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'll tell them next time I see them.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1zTfQgeNCR_qL95_T4q71u-LGzUEEJm8r/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "After you two show me around, will we split up and enjoy the resort separately?",
                "line": 22,
                "url": "https://drive.google.com/file/d/1IGmxzonrhzKkPaMU7Uph2d-iq7ZKh4QQ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "No, we've been entrusted with the task of being your guides, my lord.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1pcxXsX9qFvTLdLAp8_9kuMU8v6PNUhWT/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Our mission today is to support you, my lord. I'm at your service...even if it's unrelated to our mission!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1hm3f83h324ak22y9t4rotqU7nnXDUgo5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wow, you don't slack off, do you? Even when it comes to having fun. I'll be sure to ask you for anything.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1tR1hVXW_VZZEuQuUnDWhwPhUfZ-jBbxZ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, you can count on me.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1IYrhtunGnJGtGBldI73W42JaMjFPO7J3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well then, my lord... How about I give you a massage in your room now? You must be tired from all the walking. Allow me to take care of you...",
                "line": 27,
                "url": "https://drive.google.com/file/d/1LjEH-f93jV0gK5gAx0YIr3kLjvTZs779/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Wait, Epsilon? That wasn't on the schedule.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1JELoLQC9j_ejJ29Mx0q40L3rTQThQ5WE/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh? Beta, you're still there? Why don't you just leave this to me, and you go prepare dinner or something?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1O0zJ-glktL5c2wvFj-WhIVxx7M_hQopR/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "N-No way are you pulling something like this! I'm also more than capable!",
                "line": 30,
                "url": "https://drive.google.com/file/d/11VAu8tIZiHSYZ88GEl7z0oHZsgfIFinn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Yikes. The two combined might be a bit of a pain...)",
                "line": 31,
                "url": "https://drive.google.com/file/d/1QyPUJ8MO9qPJmis76rCrqA2quN_ffrvJ/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The argument between Beta and Epsilon continues for some time.",
                "line": 32,
                "url": "https://drive.google.com/file/d/13QfUmtgHH-5DJdeCd4Nz32ueNB8JDArA/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "This is the special room Gamma prepared. It's a room exclusively for you, my lord.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1BiWaKSsyOTuRZcvGWpPdECTIeR8Xu8A2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wow. This is amazing.",
                "line": 34,
                "url": "https://drive.google.com/file/d/13kR2jkGlQRlFjQkirLWKyI2I3-taxBlX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(On closer inspection...it's not just luxurious. This looks like a room tailored to my taste...! Yeah...not bad...)",
                "line": 35,
                "url": "https://drive.google.com/file/d/14dvsHFNg3yLY9GhNmcYf7J3uZx-c9PR2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "What's this?",
                "line": 36,
                "url": "https://drive.google.com/file/d/1SQCdi4RY80srdahwhrBTo6znG-vnYa7d/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You have a discerning eye, my Lord. That item there cost 5 million Zeni at auction.",
                "line": 37,
                "url": "https://drive.google.com/file/d/17loECAP-xzvirsQOTTEY6zBYjCjOQaAt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Five\u2014?! ...I see.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1piKZFZgYZe8a5T0IwNO4EfV6_3DWha9t/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Those items there were priced at 3 million, 4.5 million, and 8 million Zeni from right to left.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1MQ1GSF0MZh_xIkfawwdbJkSCd3q33fJi/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "The furniture, bed, and decorations are all first-rate. Gamma went all out in preparing them.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1MpO3IFLiL9xZLyvsY2-UKLymkLNNcNmP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I-Is that so...",
                "line": 41,
                "url": "https://drive.google.com/file/d/16lUzMdGsCml1KE9YwlKG00k2WcHwV8mr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(In short, this is one heck of a room... My sense of money is going haywire... I think I'd feel nervous just sleeping on this bed...)",
                "line": 42,
                "url": "https://drive.google.com/file/d/1UDcdwFHKk2H-FwT5uW9Tx817eFX27GFe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(That said, she's got great taste. I want this entire room for my shadowbroker collection!)",
                "line": 43,
                "url": "https://drive.google.com/file/d/1q3hXW3EHbUZPIvgUZRkNXasSON1p4w-2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Heh... Gamma knows her stuff.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1WdbQmI5BaRnHMa-rElUL1csul9s_4M-9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I mean, look at this piece...",
                "line": 45,
                "url": "https://drive.google.com/file/d/1JsazHEo4XenHf2nsly1OIMDsUL6g3ZYY/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Cid says this as he reaches toward a nearby painting.",
                "line": 46,
                "url": "https://drive.google.com/file/d/14Bwt-QJs6u1bYkPagS_CIYWqQkBjyi-n/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Huh? That painting... N-No way!",
                "line": 47,
                "url": "https://drive.google.com/file/d/14InPJgHOYKQ0d5AQfFLzBUd0E7aCpcL6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hmm?",
                "line": 48,
                "url": "https://drive.google.com/file/d/1Trhwb9NTjZ5aVGXDUTkyxF49piHBFfBZ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "My apologies! That's a doodle Delta painted as a prank!",
                "line": 49,
                "url": "https://drive.google.com/file/d/1JjfhzOqBGiP08oL8A8ttPqPIsgRBIH_W/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh?",
                "line": 50,
                "url": "https://drive.google.com/file/d/1i8hPY4Fqy0K9E8RnpqaFI3OWhJKDvCbt/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It seems it accidentally got mixed in... Delta was saying, \"I can paint something like this too!\" but I didn't think it would actually get mixed up with the other pieces...",
                "line": 51,
                "url": "https://drive.google.com/file/d/143dkEIQB5kRgeCEWhnb1hwEgCxVnZZVj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...That said, I'm impressed by how quickly you saw through it, my lord. You have a deep understanding of art which is truly remarkable.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1pyZxWxa2IGUDyGVfbIcePkzBdWyUChWJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yeah...s-sure.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1wVB8pf32Rqce0CqZ66HrZ0IgO-y0zZIO/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Epsilon promptly disposes of Delta's painting.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1zmyRFa__OMS9fVO53vHXsZ4Fw51nQukq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "By the way, when did you manage to build a hotel? It must've cost a fortune.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1eFUMiDkMxkHfg7fDSyuqLVQVxRCpzxul/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "M-My apologies! It seems we haven't kept you properly informed!",
                "line": 56,
                "url": "https://drive.google.com/file/d/1QyA0ITULm9z3q6rJHRxpG4vDfwJfY4IH/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "After all, despite it being intended to expand Mitsugoshi's influence, we did spend an exponential amount of money...",
                "line": 57,
                "url": "https://drive.google.com/file/d/15QR-e6wzSxbGaQs6NFVIZXAI0AJxKrI3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "No, I'm not worried about the money, but...",
                "line": 58,
                "url": "https://drive.google.com/file/d/1lJwWVtx5RET4Rjs6R27gQ5QuA0rIQglF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(They're doing interesting things without me knowing again... I've got mixed feelings about that!)",
                "line": 59,
                "url": "https://drive.google.com/file/d/1fKdHDXFnx7DqwOteCay8l-lI47xJN7lS/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh, my lord! We've also prepared a welcome drink for you! Please enjoy!",
                "line": 60,
                "url": "https://drive.google.com/file/d/1mjFqC8rRHNLHh5sS9AyYEMnbiiwhdxKQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wow, how thoughtful. Let's see\u2014",
                "line": 61,
                "url": "https://drive.google.com/file/d/1VIVli90L6B1lULh3Us5qdZty6VJCPyIw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wh-What the...?!",
                "line": 62,
                "url": "https://drive.google.com/file/d/1nkMZqKwWbSRH_-E94sibNimePU7a_qYp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It's a drink called \"Ramune,\" developed based on your Shadow Wisdom!",
                "line": 63,
                "url": "https://drive.google.com/file/d/1_2fDvAQQRAIMtP1hmw-VQeWY0q_SfI22/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(It's a summer drink straight out of my home world!)",
                "line": 64,
                "url": "https://drive.google.com/file/d/1_lcIFc1CgE5EX_3SPO4EzsjETAYIzYd5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(They've even replicated the indentations and the marble inside! The attention to detail is impressive!)",
                "line": 65,
                "url": "https://drive.google.com/file/d/1uM8uiRR6PWYwlzaiFtCO9RuOvAAqt9sZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "....Pwaaah! It tastes just like summer! Gamma is incredible!",
                "line": 66,
                "url": "https://drive.google.com/file/d/1qb0AttKPtYrq3XlZJMWYVYvYovYr7-dT/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...It sounds like Gamma's receiving all the praise...",
                "line": 67,
                "url": "https://drive.google.com/file/d/1f8dtPEjMCVLinMMVFlQ8hiEb-8513Vk0/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I don't know why...but I feel like we're losing to someone who isn't even here...",
                "line": 68,
                "url": "https://drive.google.com/file/d/1NsRHtctjgvg7Zrs0QLAf96VckvciUq9b/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(Ack... This makes us look bad!)",
                "line": 69,
                "url": "https://drive.google.com/file/d/1C3Q6KVwSzOFP4zNDp0tyHfURZ8GLXHc7/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Fine, time to do something about this!)",
                "line": 70,
                "url": "https://drive.google.com/file/d/15CqvvQXZHZzjeEOsDjMSBQ7FXF48RtHa/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "My Lord! My Lord!",
                "line": 71,
                "url": "https://drive.google.com/file/d/1KCjIICy2AWjLt85N30rQLS6Kjw1F3dDY/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "My Lord! My Lord!",
                "line": 71,
                "url": "https://drive.google.com/file/d/1KCjIICy2AWjLt85N30rQLS6Kjw1F3dDY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Ahem! Y-You surprised me... Wh-What's the matter?",
                "line": 72,
                "url": "https://drive.google.com/file/d/1gVYK0rcK29PS_rPXlvgsbPf9VHuFHyQ9/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...My lord. Why don't we head to the beach soon?",
                "line": 73,
                "url": "https://drive.google.com/file/d/1SdF3pDoHv__LIWH04MgcxlIyqvkU3h12/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "The hotel isn't the only selling point of this resort. There are also beautiful beaches!",
                "line": 74,
                "url": "https://drive.google.com/file/d/1Mkv95GVyA1yqKX3G6kxeAz8Vn46cmVy1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Please make yourself at home, and you can visit the beach afterward...",
                "line": 75,
                "url": "https://drive.google.com/file/d/17uk7mnzBU8PnkV0Uk0wXVl4rLcJM-3i_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh, you're right. Once I unpack, I'll change and head there.",
                "line": 76,
                "url": "https://drive.google.com/file/d/1lR95s9Blw64awvG_WTEaX4Cu41A3W9_8/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Thank you. Well then...see you again later.",
                "line": 77,
                "url": "https://drive.google.com/file/d/1yd8wslHtBIbVlvzxgkdT_B-_XCHDqagK/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "Whew...",
                "line": 78,
                "url": "https://drive.google.com/file/d/1vjZtWQ7y-SAzypJa1-E_z-aZ_huShtKq/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "Whew...",
                "line": 78,
                "url": "https://drive.google.com/file/d/1vjZtWQ7y-SAzypJa1-E_z-aZ_huShtKq/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Nice follow-up, Beta. It's rare for us to be on the same page.",
                "line": 79,
                "url": "https://drive.google.com/file/d/1HnG1GwA_B6HgcWmWV94GgC48SRLDjl4Z/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "The hotel's interior is Gamma's domain. We don't stand a chance against her here...",
                "line": 80,
                "url": "https://drive.google.com/file/d/1rbK4d_b6mzykxS_cLo6MLweRQEW7qakV/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(But when it comes to the beach, it's a different story. I'll take advantage of the setting and my figure...)",
                "line": 81,
                "url": "https://drive.google.com/file/d/17ITDnNSAkNppnWHfot7NMsHSIehdbjKZ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "(...to impress!)",
                "line": 82,
                "url": "https://drive.google.com/file/d/1mLqhr3q8FYH53rQzAAFE1-oY9uyV7pEe/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "(...to impress!)",
                "line": 82,
                "url": "https://drive.google.com/file/d/1mLqhr3q8FYH53rQzAAFE1-oY9uyV7pEe/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The two of them enthusiastically head off to get ready for the beach.",
                "line": 83,
                "url": "https://drive.google.com/file/d/1jTGaJDbQfV7YDrD3kJA_myGU_XJRv17-/view?usp=drivesdk"
            }
        ],
        "e3": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Heh...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1s94Q6QTPjNi7MkNMeubcXJ7cRYTZ8lt2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "The blue sea, the white sandy beach and the blazing sun... Even the breeze feels great. This is amazing.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1p2r2aJ-b09cMt8TKJq5_aBMss91Rpdye/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Most beaches are full of people this time of year, so having such a vast area to myself is a real treat. I'm lucky to have it so good.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1Vu3ZhV5tpVEJ2dNZZIVQxw2te8McTojt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Come to think of it, I used to occasionally visit the beach in my past life...mainly for training purposes.)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1_OHzi2tL58QYgvjrwgD2JZVRBWHowNXf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Running on the beach and wading through shallow seawater are great ways to strengthen the legs and lower body.)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1d93oUVGh1O4AZmC7qLfa7VzUVAkbvOJT/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Well then, let's enjoy today to the fullest!",
                "line": 6,
                "url": "https://drive.google.com/file/d/1J1BYq6qBdnD24CmqVrfR6P7RVZa8adn3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Sorry to keep you waiting, my lord!",
                "line": 7,
                "url": "https://drive.google.com/file/d/11Tm_lc7LW09ReYMFVUhcMkd6R6EUnF9i/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I apologize for taking a while to change\u2014",
                "line": 8,
                "url": "https://drive.google.com/file/d/1TSHO_5a4YPFou9mtyNmIY6FwprivtBlt/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "Eep!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1N-6YkcCnGhGpTNugcSgixzsprZPCScB9/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "Eep!",
                "line": 9,
                "url": "https://drive.google.com/file/d/1N-6YkcCnGhGpTNugcSgixzsprZPCScB9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...What's with the weird sounds?",
                "line": 10,
                "url": "https://drive.google.com/file/d/1e7hlint4m0PLNufOUGs0jPSzwDOt3N7G/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "My lord...in a swimsuit!",
                "line": 11,
                "url": "https://drive.google.com/file/d/1jyhV-07N29j4YkUjsVVipiti-qNK2UAM/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "*sigh* Your well-toned figure...and that visible six-pack!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1r-TfU-asnqptJoskwAQn-SRlwNv65VrM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It... It's all too dazzling! I wanted to mesmerize you, but I've ended up mesmerized instead...",
                "line": 13,
                "url": "https://drive.google.com/file/d/1EgFgIFvJGSMexjBqNDez4yfL_gtnj6Al/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I'm...so glad to be alive...",
                "line": 14,
                "url": "https://drive.google.com/file/d/1GDkqISUSxs9ht-TXSFNmohnqTxC-iFNu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 15,
                "url": "https://drive.google.com/file/d/19Gn17DFzf5VY1rcvjNn-M_9QxFlM3Oo8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Wait, is this why you prepared my swimsuit in advance?",
                "line": 16,
                "url": "https://drive.google.com/file/d/1gifp-Hi9aKfkR4NwdxX-0f9Y5AdiJA79/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "N-N-No, of course not! ...Right? Beta?",
                "line": 17,
                "url": "https://drive.google.com/file/d/1pOqZNJ8hjWGJhOrhuNO3XFRYKpLiXzLu/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Exactly! It's not like we, Seven Shadows, secretly did a little brainstorming to intentionally manifest our desires! No way at all!",
                "line": 18,
                "url": "https://drive.google.com/file/d/1U73GT2Y9GcvNGRBbgrv0sQWPL0kQxJgI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I doubt that'll convince anyone...",
                "line": 19,
                "url": "https://drive.google.com/file/d/1Nt3pfBejaPTUIhCreO3sWI6qncox44a_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Maybe I should change the subject...)",
                "line": 20,
                "url": "https://drive.google.com/file/d/1tkSqnAOEouMJ_tey4b6veKOut5mJW_v4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "B-Beta and Epsilon, your swimsuits suit you well. They give you a different vibe than usual and really bring out your personalities. Besides, you both have great figures.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1PHw9NLxarsiz0gmtMgceq9eiVGqxKoTZ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Wow! Such high praise from you, my lord! Thank you so much! Heheh!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1cPOSGHFWHcRoc_uVeihvkvtHZjA5EyLn/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What!? You really think I have an excellent figure, and my swimsuit suits me better and is cuter than Beta's?! All my hard work has finally paid off!",
                "line": 23,
                "url": "https://drive.google.com/file/d/1UMRfYGjtUNu3czu9yyJgfxphPx6DFkff/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Hey, Epsilon! You're putting words in Master Shadow's mouth!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1KAVjS00ctjwL3hk2a6Q6qlmyUR-Din1k/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hmph. That's what I heard. My job is to discern the true meaning of Master Shadow's words.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1AZq1kSRs5dgl4bExUTRjyFqYNrwKbGcU/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh yeah? In that case...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1ZKwd8Ul8Zl9jGpl16ebbZ3YI2SRMtiN_/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "My lord, have you applied sunscreen yet? If not, leave it to me!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1IA5_HV6rTLh-G9TVSpSlo5psPJxCuhsV/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Excuse me?! Quit cutting in line!",
                "line": 28,
                "url": "https://drive.google.com/file/d/1_Qs9rHmRaAuYGKsfrDKLtRzFyHkd-YXV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh? Um, I can probably do it myself...",
                "line": 29,
                "url": "https://drive.google.com/file/d/12ANcMfNQEJ6yYExCL8pAJK8Hj725X6Oo/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Cid obediently lays down on the beach chair.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1bW8bwUC6CAUBEN0UBp3rian17lZy-ab1/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Listen up. Don't interfere until I finish applying his sunscreen.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1HddRu_NEAabEdQjmJwb9v-rCCfqgVhKH/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Should you really be handling such a mission on your own?",
                "line": 32,
                "url": "https://drive.google.com/file/d/1QBDcPxOwATo8MChJDHVUw6702k-CRxln/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Ack... I'll do his back, and you can handle his feet. Happy?",
                "line": 33,
                "url": "https://drive.google.com/file/d/1GEbV9RHxkGpUNx5F-OuW3GFw0C43047D/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Of course not! You're probably planning on subtly leaning against his back, aren't you?!",
                "line": 34,
                "url": "https://drive.google.com/file/d/15ztDWsO-CfSkU4mbLXx0MyV7RQIaJOO4/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "My, of course...not... Heheh.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1zIYcoOpHHsXMKBNP-08yrGSo7-iycqdj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 36,
                "url": "https://drive.google.com/file/d/1nNlt34ppbAPJoTRtKx1fN0c8IgvLpLWC/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Allow me to assist you with your warm-up before we exercise.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1PSG7yScm-fXw4iu0jexi3SCNkzjRdNj-/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "No fair! Me too!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1Rg_CjgXb3Jbum4rSsElvqw9R3SzV1h2a/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Fine... As Master Shadow's right hand, I'll handle his right side. You don't have a problem with that, do you?",
                "line": 39,
                "url": "https://drive.google.com/file/d/1DtgztgZLrak0bgRhIF8QzD5Of24VbXYg/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Ulp... She took first dibs! Unforgivable!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1buwfspIU6yGN-SpIV_vZRV6oDDnVbICJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 41,
                "url": "https://drive.google.com/file/d/10uiznTUigzoyKNJLvVsG2TqbHYT8Jpss/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "My lord! I've prepared you a special drink\u2014",
                "line": 42,
                "url": "https://drive.google.com/file/d/1ixGZuDFuUK57T7npYE-j2EsjccBc7ubD/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "My lord! I've prepared you a special drink\u2014",
                "line": 42,
                "url": "https://drive.google.com/file/d/1ixGZuDFuUK57T7npYE-j2EsjccBc7ubD/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "\u2014I'm first! \u2014I was first!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1ms1OiyFX3G1dnMF47HTz8MmE8TvEnqFl/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "\u2014I'm first! \u2014I was first!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1ms1OiyFX3G1dnMF47HTz8MmE8TvEnqFl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Th-Thanks...",
                "line": 44,
                "url": "https://drive.google.com/file/d/1sCZy6x5WGL8aj9crwVBsfPyjmvURz91A/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(This won't end well if I let myself get carried away by these two... I've got no choice but to take the lead...)",
                "line": 45,
                "url": "https://drive.google.com/file/d/1w28_pJh7c7Va9IMVgCsZ1un_uk3HwOrY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "A-Alright! In return for your thoughtfulness, let me teach you a new game that requires wisdom.",
                "line": 46,
                "url": "https://drive.google.com/file/d/18GpfhBFVrRyTXlTApRJ5I_-mq269vBd1/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "R-Really?!",
                "line": 47,
                "url": "https://drive.google.com/file/d/10yLb5EY5c_UCRX5AxzZTU8p0BGl7lsd8/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "How wonderful! What kind of game?!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1FhiO9R2kSSFKWKFxwtFqrJ8nyWlXypJJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I've got to prepare something, so hold on a minute. It should be at the hotel...I think.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1UO6iHxE5dz_YTOQLG2-4CTPi4prUFIWm/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "With that, Cid heads for the hotel in search of something.",
                "line": 50,
                "url": "https://drive.google.com/file/d/14Fk5hz3baJZbQzRAo11TdaH2iNFo_5Tu/view?usp=drivesdk"
            }
        ],
        "e4": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Sorry to keep you waiting.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1Zm01ax3U0aEGiuBJDc3Ca30IWsf0pBo4/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "My lord...is that...",
                "line": 2,
                "url": "https://drive.google.com/file/d/1UEDU0OM-2e2y7lm0UhYEavFo841FNk9a/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...a...watermelon?",
                "line": 3,
                "url": "https://drive.google.com/file/d/1aqI2a4Jc4QdAaxCY3smW7lmmWoDSPDpY/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Cid brings a large watermelon.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1UkY5sOqMvjYYbQIkDhn9Hvegl9fKsT1y/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yeah, it's just a regular watermelon. It's pretty big and impressive for a fruit, isn't it?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1iWBqmE8ldfaPzB495gN5nWTCVt7S4WGu/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "My lord, did you wish to eat watermelon? If you had told me, I would have prepared one that was already cut...",
                "line": 6,
                "url": "https://drive.google.com/file/d/1s9k5ftFbR0qEIfTn452kEceUhkhFOVGX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Ah, no, it's not like that. This one is meant for play. It's supposed to be uncut.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1a8Y63m7Dk0o-0RoriJLVnpsz9vDIG1g6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "It's a game called \"Watermelon Smashing.\" Have either of you played it before?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1r5jrnijrPSzQIQf4_JhOhRM1J5r7WrkN/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Watermelon Smashing... This is the first I've heard about it.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1xuI3yIClWDXUr9Q38mpFRFX0eaD27eET/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It's a new game of wisdom?",
                "line": 10,
                "url": "https://drive.google.com/file/d/1Mq4l7iywpLboYG_5tBebDK9ccsLhQ9y6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "That's right. I'll explain the rules.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1cr8x58uSYFSd4IZNm58soy1eB8Ym6PVg/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Cid explains the rules of Watermelon Smashing to Beta and Epsilon.",
                "line": 12,
                "url": "https://drive.google.com/file/d/13LWINs3KLRf9-SQluyXJu0r2yB6neEzp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...That's pretty much it. So basically, you listen to the onlookers' directions while blindfolded, and you use the stick to try to smash the watermelon.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1NVg7towqUe-M5zUazUCltk0Lw9crC3z4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Got it?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1CkBGwZrTCV2TGhmXOJI_oT0orDjIpyFN/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes, I understand!",
                "line": 15,
                "url": "https://drive.google.com/file/d/1wJIEwzUGbDoi14x_2hzXIrewU1LA0Q1C/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I understand as well, but...",
                "line": 16,
                "url": "https://drive.google.com/file/d/15DRprPmeVP44fkettz5qevpfxs-yf6Co/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "What is it?",
                "line": 17,
                "url": "https://drive.google.com/file/d/1F3c4BiG8K4_k_krXEmPOYWmkJuCKEtxd/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I don't mean to be presumptuous, but with our abilities, wouldn't it be easy to close our eyes, sense the watermelon's presence, and smash it with ease?",
                "line": 18,
                "url": "https://drive.google.com/file/d/19ojjOfv-oHnxGAszW5CaUSJSvbkJifxe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hmm...",
                "line": 19,
                "url": "https://drive.google.com/file/d/1NSm092mCbL87S46i_CQ-T0tPD6TbCZSB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...Wait? Seriously? Did my whole game just fall apart?)",
                "line": 20,
                "url": "https://drive.google.com/file/d/163A59TtVvhYRnIgojSx0IjtJ9VElFCgd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "W-Well, you won't know until you try, right? Let's give it a swing.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1rkhxhdwx05BgqWP9Te8kIBQtWda0ITqJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Can you close your eyes and count to around 20?",
                "line": 22,
                "url": "https://drive.google.com/file/d/1NlDQ1-GIfMcpIgFCXAP2Xu_uKVKTvA3Q/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Understood. Here goes...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1yBtzy7fVhwkTNgdfuA03ykq5V95TXf3v/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Epsilon begins counting to twenty. Meanwhile, Cid quickly places the watermelon a short distance away and returns to his original position.",
                "line": 24,
                "url": "https://drive.google.com/file/d/11pQmo4Cjm0tRefo5Js_XYFy_n6rXDuKP/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Nineteen...twenty. Okay, I'm done counting.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1xuImXls87b6oAmsCCoaXqvX5WQloXwXH/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Now then, time to sense the watermelon's presence...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1Fsj_vQ1TcXZzuxtJnuPwIj9RqCwXrs5Z/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...",
                "line": 27,
                "url": "https://drive.google.com/file/d/1uX24AdePzkpolkQxeueog35HKvqeQ_ys/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hmm?",
                "line": 28,
                "url": "https://drive.google.com/file/d/1ty4cdfLxtFT6j1nvQ8NOcDs3jfYR2k7n/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Huh... Even with my heightened magic detection and senses, I can't pick up on anything... Why?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1jKeSyvIzFVJKRGDeWHvxPKdxwiP3dNC8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...How about it? Were you able to sense the watermelon's location?",
                "line": 30,
                "url": "https://drive.google.com/file/d/1-QOypJwJYCBNWOr6KD9kMcgbZkBhuivx/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "N-No... Continuing on like this would be futile, so I'll stop here.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1c--IjsACWtHnNn7Sf9ffrH7VKhHI83qU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Epsilon slowly opens her eyes.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1Gy5VbU0KLDJ7N6oOjqHGyVsFDgtzABcT/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Wow... It was so close to me, but I couldn't sense it at all.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1RLFvUJSZFA8HPVFhb8qIjE4im8GCaSk1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Well, it's supposed to be a game where you rely on people's voices, so I'm glad you couldn't sense it.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1Ax78asECTLsc1q9zoYYZxggcWFqGBU4g/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I-I see. Watermelon Smashing, huh...",
                "line": 35,
                "url": "https://drive.google.com/file/d/171b2D-EsgMFxFLKmk2wAfNBKnyuK0BPU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Have you picked up on something, Beta?",
                "line": 36,
                "url": "https://drive.google.com/file/d/1ywnZ6hDo6nWfWQBiJ5cG6gAb7A2bedt4/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...It's just a guess, but our usual targets have some trace of magic energy or presence we can pick up on, such as their breathing or bloodlust.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1UyEdj-MwmKCsAt7JZGpDTacBIT8AaVYk/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "But this is just a regular watermelon. Since our target doesn't emit any presence, we don't have any clues to grasp.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1rDxRk8HTXSfUqtHHMIczJ2sZ3GsPgw02/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I-I see! So, this is wisdom born from combat training with no vision! Watermelon Smashing...is profound!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1vge1_qiBD7AeVuyXKqCcMuIesB6G7qZt/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "There are no bounds to the depth of Master Shadow's wisdom!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1tq9umsOde5egW7rSfQ0mOFqqW_ybc-UB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Um...sure.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1-fGZPY-2hFQCWqvhtpC1ixoCHeWpO9Or/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Let's just go with that...)",
                "line": 42,
                "url": "https://drive.google.com/file/d/190-xSa8wAjol6aSduBxppxugnDmgCJJB/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "In that case, let's do this! I'll go first!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1xZ2ey9sNUBVUkNmnOyJ56OIYmrbsyiRr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright, I'm gonna blindfold you.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1igaGZT9BI0_iLwX1FMaLUdwxtV_wi7gy/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Eek! Being blindfolded...is kind of exciting.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1N8pz5HY5jg9s8Gv06zFPu7ftHfAcLH0R/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...",
                "line": 46,
                "url": "https://drive.google.com/file/d/1OjX5yl-12BP9Qz89VzT5qDDaD_c5HIYy/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "*gasp* No fair!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1AUh3mjtBu-ogX76tgpMggz049bPbDHvw/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Stay calm...Beta... Next is your turn.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1j9SjYT6rbPmniscPclposnDOc1uKYNcC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yup, yup. That's right.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1PvegtQouxhRGWm8vSZoHuUo9dPw8xTeQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh, I remember how to tie the blindfold, so I can do it when it's Beta's turn, my lord!",
                "line": 50,
                "url": "https://drive.google.com/file/d/1aKGZTms-N_J-yuChK5l7XTWhcuECiRCa/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh, really? I'll leave it to you then.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1KkMivuiYw6N0iJziDJQoofl30JvDwYe7/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Wha\u2014? No way!",
                "line": 52,
                "url": "https://drive.google.com/file/d/1e70ANXiUNlGVEnp0sm1wGIf2JjV0_jgt/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Epsilon...you'll pay for that!",
                "line": 53,
                "url": "https://drive.google.com/file/d/15lygUZOvUbkzOjsgAftHPoMyEuzzDfRw/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Cid covers Epsilon's eyes with a cloth, sets down the watermelon, and adjusts its position. Then, he steps back and calls out.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1qegN7WBrH7H5fY7-QeG3eq28o_zOOmK9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright, let's get started!",
                "line": 55,
                "url": "https://drive.google.com/file/d/1NZ78jmEFQUDaFCdOGo7PlYyDuvlxB2XA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Since you're here, Beta, why don't you guide her? It's fun being the one giving instructions. Give it a try.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1GR22DL-2Hb8-80h_PV8_XauZ1a_JqOzQ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh, okay. Understood... Heheh.",
                "line": 57,
                "url": "https://drive.google.com/file/d/16XZvHYaJaIizYu54oKP8xp-UpqLNnrMy/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Epsilooon! Keep walking straight ahead!",
                "line": 58,
                "url": "https://drive.google.com/file/d/1HG4OwrVOXFjFD62KFT9XANev5sN340Uh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Straight...straight ahead...",
                "line": 59,
                "url": "https://drive.google.com/file/d/15WOvBKNhqvbHrXyj3Rapbj5lFpMKpMUY/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Th-this is surprisingly difficult...",
                "line": 60,
                "url": "https://drive.google.com/file/d/1ZrzHULJVc_f27W_q-2awWFPOS2kGtydb/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That's it... A little further straight ahead!",
                "line": 61,
                "url": "https://drive.google.com/file/d/13tfojZDnyfxUFn0J5twC2TxY9DRv0nHt/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It's a bit far, so keep walking!",
                "line": 62,
                "url": "https://drive.google.com/file/d/1omwC_GT7h2eYbmGD8kE-NoUIAhVQBB2p/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Huh? Is it further than I thought?",
                "line": 63,
                "url": "https://drive.google.com/file/d/1qJyCj6XbWgY67nrz341yFOz2KIanJKh5/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Straight ahead...keep walking, and\u2014",
                "line": 64,
                "url": "https://drive.google.com/file/d/193v1CTEU87J8SBFyjvrCcrpV58YQeSvl/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "\u2014Eeeeek!",
                "line": 65,
                "url": "https://drive.google.com/file/d/1h7Opc0usaAfYbtK6A4x4ojKLU72a-ghb/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Epsilon plunges into the sea.",
                "line": 66,
                "url": "https://drive.google.com/file/d/1F7KVOOXyBZ7XwwqPyI2EWGndIMR8rquG/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Epsilon returns to Cid and Beta.",
                "line": 67,
                "url": "https://drive.google.com/file/d/12G-KMks7PqyiM-VCagwXqLn3Syn29vI3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Hey! You totally did that on purpose, Beta!",
                "line": 68,
                "url": "https://drive.google.com/file/d/1dYW-SO3xJkhKx0obioNvr7BNNO2MpNA9/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Wh-What?! No, I didn't mean to... It's just pretty hard giving directions...",
                "line": 69,
                "url": "https://drive.google.com/file/d/1C553zCYHA9eb6mA4VAQpXUuiRzMME5uO/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...I'll remember what you did! Next is your turn!",
                "line": 70,
                "url": "https://drive.google.com/file/d/1GInts8lnD5a265ngyPa07t7220Rj3BvR/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "With bad vibes lingering between the two, it is now Beta's turn to try smashing the watermelon...",
                "line": 71,
                "url": "https://drive.google.com/file/d/1A16eamUDJjovytg4Ck_y32Q_FzAgDr8N/view?usp=drivesdk"
            }
        ],
        "e5": [
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I guess it's my turn next.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1cc83Lo6z9iLujJjAzrrtO5RItDagD6yq/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(This time I'll be the only one to impress Master Shadow. Sorry, Epsilon.)",
                "line": 2,
                "url": "https://drive.google.com/file/d/1Hrt1wdlRELz-ibOKqQGmSDx0FCxZEoqC/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "My lord, is it forbidden to give false instructions during Watermelon Smashing?",
                "line": 3,
                "url": "https://drive.google.com/file/d/1Bei7lf5oWI1iuBkyaWFzoimab1dGG6EH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh? Oh, yeah, I guess. It wouldn't make sense to trick someone when they can only rely on your voice, right?",
                "line": 4,
                "url": "https://drive.google.com/file/d/1uz7DzRv7zlAak6ci69rHY-qrac7ETKR2/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I see... I'm sorry... It wasn't intentional, but I'll be more careful about giving misleading instructions in the future...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1iHEfdgbvYdCsrBB7ZW0cnxbzU3wajuR5/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Did you hear what Master Shadow said, Epsilon? I'm counting on you, okay?",
                "line": 6,
                "url": "https://drive.google.com/file/d/1QvFvhv7aeD_mBklBlqtKZSp7P1rphPS5/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Damn it... This girl! She's treating what she did as a beginner's mistake, so she can just let it slide, huh?!)",
                "line": 7,
                "url": "https://drive.google.com/file/d/10qg7cQI89cTD3RxDxLauukOCtVZiyeaZ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(I want to retaliate, but she caught me off guard... Beta is tougher than usual today!)",
                "line": 8,
                "url": "https://drive.google.com/file/d/1Yw22rMTzRK_HvT1vjYbM8R6N2-TG38zw/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(In that case, it's now or never...)",
                "line": 9,
                "url": "https://drive.google.com/file/d/1vI97DGbpiZJZ54PVaUQuQW4RuyOew1yR/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Very well. Now then, allow me to blindfold you.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1FKhkbL_BZXCLcmafLrSxg3pbp7VSmvhr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh, while I'm at it, should I also set up the watermelon, my lord?",
                "line": 11,
                "url": "https://drive.google.com/file/d/1b9RjmkrZFRsWd5ZQzaJ7PEhkBBvxtDHt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Sure, go ahead.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1c_CYqxnyA4NR7lK7Xu8SjenKSXDnn8S7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...Epsilon is up to something. Well, Beta got one up on her, so I'll let Epsilon do her thing.)",
                "line": 13,
                "url": "https://drive.google.com/file/d/1VH7HLCEI0x9g5tbpzTyo-iPETvWWC2lC/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Epsilon starts to blindfold Beta.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1VrfLRorwMGyu6l6llcdU494P2VtfAqOT/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Hey, aren't you tying it a little too tight?",
                "line": 15,
                "url": "https://drive.google.com/file/d/1gX-xGKV_z3aloti9ro8WhZIO2wDl9JzK/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh, I'm sorry. I wasn't sure how tight it should be, this being my first time and all.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1GjX1WhydX3MCRUepMBkPzEZ6t08MUBBM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Okay, I'm stepping away to put down the watermelon.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1a8tsOB8z6bM4niUsnrJSscMAKA8vEtbg/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Now then...I'll put down the watermelon...just like this.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1IkMnlZ6HnuC7Zce6zy3mQXiY9MaB1dhQ/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Epsilon takes a few steps away from Beta and places the watermelon relatively close to her.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1KaEn_vBuu0uRMDx1XXAd62jVwFIdCy5o/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "And another right next to it...",
                "line": 20,
                "url": "https://drive.google.com/file/d/1nDfv8CoaMbdietd2APd0tcURXQ7yrHow/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Epsilon sets up a fake watermelon made of slime next to the real one.",
                "line": 21,
                "url": "https://drive.google.com/file/d/123FMv5gUa_6NdVgHEjwBaf-LgaZ6H4hl/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Perfect. Now all that's left is to trust Beta...",
                "line": 22,
                "url": "https://drive.google.com/file/d/1RWM6-JHS9R31GjAHdkcqmb1hKE6norMW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Is that...a fake watermelon made of slime? Is she trying to lead Beta to the fake one?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1y7q5p6ZpxbxOhdEPdj6eocBL8p6L1_FE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Wait, but she also placed the actual watermelon nearby... What on earth is she doing?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1fgWenyh5ZpcQCW_T37mmgj52Vb4SYpdh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I'm ready, my lord. Can we begin?",
                "line": 25,
                "url": "https://drive.google.com/file/d/1OB56R2CalSQEjD6nurfNgrZYJK7fVXMP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Sure, go ahead.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1t1pQgSXOhdYDqQkqW5ft4wDjC92U5QAq/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Beta! Let's get started! First, turn around and walk straight ahead!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1U-GO7gQ7G7p1S5nXxcy0PBsmOcxlYLEh/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Turn around...and walk straight ahead... This way feels like the beach, so there doesn't seem to be any danger.",
                "line": 28,
                "url": "https://drive.google.com/file/d/11ZH71p0L4bCrd_mn3zJHaoLp_DoL9HMB/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Forward...straight ahead...",
                "line": 29,
                "url": "https://drive.google.com/file/d/1qzCc-oxfck2J5Ve2nFTEm-IoSM59Dv6p/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Stop! Take about five steps forward from there, turn left, and then take seven steps forward! Then, swing down as hard as you can!",
                "line": 30,
                "url": "https://drive.google.com/file/d/10H5mJ6ue-v6bCzzaavvnvoagBEahsa2u/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wow, Epsilon, your instructions are surprisingly concise. At this rate, Beta should be able to hit the watermelon.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1ozjHnZu-Nt40YOwEbJrD--gbFCAUSUsA/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Heheh. I'm Epsilon the Faithful, after all.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1rKKuyx_VPOwOIq5YAcGo8rNt3IUm0t5P/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Epsilon is actually giving precise instructions. But...why isn't she trying to pull anything? It makes all this even weirder.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1WerHUxSvzQb-MhKu3qNEtTZ0b-UD6dev/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What're you doing? You just need to swing down!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1kiIrzq7P4Wpt7zVsUiTxRBOh-C50lfmX/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Yes, yes. I know!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1KbXcgmOjXZBktu3Lsw-jgO-37HHNqnUt/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "But can I really trust her? Guess it wouldn't hurt to try sensing the watermelon's presence. After all, I haven't actually tried it myself.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1uVhDY4bTp-jh1ZRLYPXVVtUmUk-vmUP8/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "With that, Beta tries to sense a magic response from her surroundings.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1EO1ukCt9OZdDG5IPVGtapmeGUnY7vBOQ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Hm? Am I picking up on a faint magic response? It's circular, so...could it be the watermelon? I'm sensing it slightly to the left of my feet.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1d_-EedrjAN-AbPEWyuPDq2jgGNIYyqhF/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Heheh. Could this be an opportunity? I'm probably picking up on the traces of Epsilon's magic.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1p5EN7U2xoktXVFv48QpqqP1bQN4wTAb6/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "It's true Epsilon didn't lie to me. But it looks like her directions are slightly off. She wants me to take a big swing and miss. Too bad for her.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1peap-fM604WokRsqzSSYVUY0Sylyx8G3/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Victory...is mine! Take this\u2014!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1kRPQ4JgnY6hGOxl8YKecwON0_58N7thg/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "\u2014Huh? Owww!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1wXrImZpFT2JlFW-AvFJfz-KguF9Wfj6U/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Beta swings the stick down vigorously but is repelled by something bouncy, causing her to fall backward.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1ot0nt3GB1VD0IoyZcn03jT4pxYWSR0YG/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Beta removes her blindfold and checks the object she it.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1FS5b0xk4gBDNFTbl9gNCIRHinndNeF_q/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Ouch... Hey, what is this? It's not...the watermelon. ...Slime?",
                "line": 45,
                "url": "https://drive.google.com/file/d/1f_FSx2T4SpUeBYc2DjRtKjLkmk3Kx0Es/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...You fell for it, Beta.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1gssQtdu2k34xxje9Z3EP7A2resl4qf7n/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I guided you to the right place. How on earth could you have missed it?",
                "line": 47,
                "url": "https://drive.google.com/file/d/1EOncQzztVrs9qLQjP968mnZGI0MQk6Qp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Perhaps...you doubted me and relied on your magic detection instead?",
                "line": 48,
                "url": "https://drive.google.com/file/d/1BKBI0D3SbWnExry32hnPDWDYe_IpgbTx/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Urghhh...",
                "line": 49,
                "url": "https://drive.google.com/file/d/1LBLZBubd9cSNMGW9A0w_K_WmLMulZ8VN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I see. So that was the plan...)",
                "line": 50,
                "url": "https://drive.google.com/file/d/1eRQm_qZ7rBSDJjrPrR2T981lGX6ii2yF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Epsilon prepared a fake slime ball with magic and placed it next to the real one. Epsilon didn't lie in her instructions, but Beta couldn't fully trust her and ended up self-destructing.)",
                "line": 51,
                "url": "https://drive.google.com/file/d/1r9plhfu_wTFRlhp5q_En6YzJdsnGmtQh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(A brilliant strategy, thanks to Epsilon's grasp of Beta...)",
                "line": 52,
                "url": "https://drive.google.com/file/d/1pTIrKVilAHZaSsEO9W2Q1rCX0YA9bPq6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Wait, but this game isn't supposed to be about psychological warfare! More importantly, they failed to smash the watermelon!)",
                "line": 53,
                "url": "https://drive.google.com/file/d/1DV2CCyXOQSloHh2DJ9ChkN0-M-UfQqsv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "W-Well, it looks like you both had a good time.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1bpBQ7bnfqJrbpXutbO0l6P-USvototsD/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh... Y-Yes!",
                "line": 55,
                "url": "https://drive.google.com/file/d/1zgRTgxpRQBZlbgqD-1YWiIQ--PKPNEc7/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I-I didn't expect it to be such a complex game! Ahaha...",
                "line": 56,
                "url": "https://drive.google.com/file/d/1LlYFDBkcIW6dZ9ztGzz8ugZEwxQUGPsO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(You're the ones who made it complex...)",
                "line": 57,
                "url": "https://drive.google.com/file/d/1Y79grq7kqwvRcXnMCAWOShSEyv-A-9Db/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "We'll let the watermelon cool in the sea and eat it later. Make sure to follow the rules next time, okay?",
                "line": 58,
                "url": "https://drive.google.com/file/d/1BPBxD_v-7ZWWVrgY7qpk9oppTQ0f-iQF/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "O-Okay...",
                "line": 59,
                "url": "https://drive.google.com/file/d/1m0gVPZ7P5iGnqz4XaAp3amJTKXSIQz1a/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "O-Okay...",
                "line": 59,
                "url": "https://drive.google.com/file/d/1m0gVPZ7P5iGnqz4XaAp3amJTKXSIQz1a/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...But since they're willing to go all out like this, I'm happy to suggest another game.)",
                "line": 60,
                "url": "https://drive.google.com/file/d/15AXyGcDqEl_c1UJrR5ivhMHyo-cUw5TL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Maybe something involving a little more physical activity would be good. Let's see...)",
                "line": 61,
                "url": "https://drive.google.com/file/d/1-22uLdiu2_PO5nLnOPAOerwKtHcFD96N/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...I know! Let's play Beach Flags.",
                "line": 62,
                "url": "https://drive.google.com/file/d/1iCjkZp2xG4QYuZkfFV6_o5EBbAgM3BcM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Beach Flags?",
                "line": 63,
                "url": "https://drive.google.com/file/d/1UHs3zy9NI7QOORGCDekR3Y9o5yVqVda8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...What kind of wisdom is that?",
                "line": 64,
                "url": "https://drive.google.com/file/d/1c9WDX3u036uEDFgfywwISUrirr0DJSA6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "It's a sport where you start from a lying down position and then race to grab a flag planted a short distance away.",
                "line": 65,
                "url": "https://drive.google.com/file/d/1W4oRWfIuRIYoUnS-eQMeZrc8Kz9tPdFs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Thing is, there are fewer flags than participants. If it's just you two, only one of you can get the flag.",
                "line": 66,
                "url": "https://drive.google.com/file/d/1czk0-KBg7XOvQtgzio5YuXBgboEmAY92/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "It's like a slightly complicated short-distance race. Want to give it a try?",
                "line": 67,
                "url": "https://drive.google.com/file/d/1IJQw_E-Orr2g40OBxRNUl3t4xX-Qrdj9/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes! I would love to!",
                "line": 68,
                "url": "https://drive.google.com/file/d/1OfCCkXJBWQF-X2DZ8EynU0oCIvMVKGda/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Of course I'd like to try! Will this be a competition between me and Beta?",
                "line": 69,
                "url": "https://drive.google.com/file/d/1rrGSswzAm0Kf6Sigai8VFgBD8L7sa1GB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'd like to join in as well, but maybe after you two get the hang of it. Let's start with that.",
                "line": 70,
                "url": "https://drive.google.com/file/d/1YOtkd13-iqFnFhBCPVRfwVjmuWdRHYql/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Cid sets up a flag made of slime a short distance away.",
                "line": 71,
                "url": "https://drive.google.com/file/d/1KOfFt0gOyfycLlVI9kMwnFCFhRZ24aKh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'll show you an example first. Watch closely.",
                "line": 72,
                "url": "https://drive.google.com/file/d/1FdwtYCgAWV9gy1CavoffNpcxyh4KPGj9/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "With that, Cid lies facedown with his back to the flag...",
                "line": 73,
                "url": "https://drive.google.com/file/d/1FNm0hvt3KQIvFeAYyPeNUipbCabwD-eI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Let me show you an example run.",
                "line": 74,
                "url": "https://drive.google.com/file/d/1cN7-9ZEE2tMXBxfsD32zC4YYEICP0KrP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Ready...",
                "line": 75,
                "url": "https://drive.google.com/file/d/165kRqoGQuz6-FsVNpYozhH3BASPyshnE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Set...",
                "line": 76,
                "url": "https://drive.google.com/file/d/1a7OcK_fi8-RWpPIkpgsIKopNA-Sny-xQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Go!",
                "line": 77,
                "url": "https://drive.google.com/file/d/1SNkYUMn77VoFzvpQb2Pib3ZahrnGHpTK/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The next moment, Cid sprints off at a blinding speed. Dust flies, and before Beta or Epsilon realize it, he already has the flag in his hand.",
                "line": 78,
                "url": "https://drive.google.com/file/d/1V0gIbuD002ATeLrwk2qUtR-aeWE-1yxb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Whew... It's been a while since I've done one of these, so I couldn't help going all out... I used to do 100 reps back in the day...",
                "line": 79,
                "url": "https://drive.google.com/file/d/14yc6bdwIxkhj5WgqFo_io9Dc-zhUk497/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Wh-What speed!",
                "line": 80,
                "url": "https://drive.google.com/file/d/1Y3FtJs9nyE0kZIYg0olBniIkKTDfCRLk/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "S-So...this is Beach Flags!",
                "line": 81,
                "url": "https://drive.google.com/file/d/1B0P7xhOXuAkelGu8BjSnBOi4xJJslOLb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Sorry, I got a little carried away. You don't have to run that fast, but it makes for good leg and core training. Try giving it your all.",
                "line": 82,
                "url": "https://drive.google.com/file/d/1yPJjY9unp79NvvJJN1Bctj8-jo-gtACc/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "U-Understood!",
                "line": 83,
                "url": "https://drive.google.com/file/d/1NlEmpEIf4HYhap71UmYL7Ap1nhPPg86O/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Alright, we'll give it a go...",
                "line": 84,
                "url": "https://drive.google.com/file/d/1SClpdBbdF6KIuOk2nmiO9C5SWaFwprZj/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "With that, the two stand at the starting point.",
                "line": 85,
                "url": "https://drive.google.com/file/d/19dE1Pq4kvw-i4BpmjFrFk3uBmLay_h3W/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "First, lie face down and place both hands under your chin.",
                "line": 86,
                "url": "https://drive.google.com/file/d/1CkVjpgWhww1XfJM6sqFgAXnTSLoa2mU9/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "O-Okay...",
                "line": 87,
                "url": "https://drive.google.com/file/d/1SKkzJDl7BYEdikqaPWunDWh2edkWWgQl/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Okay, got it.",
                "line": 88,
                "url": "https://drive.google.com/file/d/1dRjTNxq6h4VvOKPRUY0ZmXEvRMN8dko9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright then. Ready...",
                "line": 89,
                "url": "https://drive.google.com/file/d/10_VZy7sh3mLK1yi64yljUfP_INLb5YL9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Set...",
                "line": 90,
                "url": "https://drive.google.com/file/d/1S4O7VbBjh1EBALtdG1G_KPxwOraxxW_G/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Go!",
                "line": 91,
                "url": "https://drive.google.com/file/d/1B6Ov7oOPtrtPbzCsjO9igKOJWRaD97R7/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Ack! I'm off to a late start!",
                "line": 92,
                "url": "https://drive.google.com/file/d/1NF3_AG3KH-BJvXUdXiM0_JStYGwd7Zpm/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "Hmmmf! Hyaaah!",
                "line": 93,
                "url": "https://drive.google.com/file/d/1cvnI0OZlcT9wZJzskXaS6ql19VfhZiDt/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "Hmmmf! Hyaaah!",
                "line": 93,
                "url": "https://drive.google.com/file/d/1cvnI0OZlcT9wZJzskXaS6ql19VfhZiDt/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yay! I won!",
                "line": 94,
                "url": "https://drive.google.com/file/d/1RTB9jCnkxTT4Pjg4UGRXTfngyn7G14JU/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "*huff huff*",
                "line": 95,
                "url": "https://drive.google.com/file/d/1I2ZX8WXcAhrR12u0EGvzqG6EbTh1xpVv/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh? Beta, are you already out of breath?",
                "line": 96,
                "url": "https://drive.google.com/file/d/1ne3cWta_zNU2-dtqRjIYWq_1bOfkhqfR/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I-I've got nothing to throw back at you... It was, um...a little hard to breathe...",
                "line": 97,
                "url": "https://drive.google.com/file/d/1QW4lw31OM3hVYVYRUSvakKIoxTbRTHCx/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Hm?",
                "line": 98,
                "url": "https://drive.google.com/file/d/1aUmTFENsdEkIlcmM6pFOboOCYBQFEqaj/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "When I lie face down...my chest gets squashed...and it's slightly uncomfortable...",
                "line": 99,
                "url": "https://drive.google.com/file/d/1Y5t4WU-EzPbIFQJy99Gu0A3XroYi3mf3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Wha\u2014?!",
                "line": 100,
                "url": "https://drive.google.com/file/d/1-nuXJ8p9tIbR6zzoZdM9oEK6Ydawo2D1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(N-Natural breasts feel uncomfortable when they're squashed!? Oh no, I've messed up...)",
                "line": 101,
                "url": "https://drive.google.com/file/d/1xgpuUhLC7uWj-eTQ_Wo6nRLIffRF6FTt/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Epsilon, do you have any tips on how to position myself?",
                "line": 102,
                "url": "https://drive.google.com/file/d/12j-3FP31B771l5m2gwKtZaD04eNxhOtl/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Y-You've gotta get psyched up! Get psyched up!",
                "line": 103,
                "url": "https://drive.google.com/file/d/1iimYOgGvTpjSO89IvdP54EHcPoUIi3E-/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Huh? Psyched up?",
                "line": 104,
                "url": "https://drive.google.com/file/d/1uaCNVZObYYXN-X8WQluhGEj6vIDPwRYe/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Th-That's right! Instead of relaxing and lowering your guard from the start, take a deep breath before lying down, and hold it in!",
                "line": 105,
                "url": "https://drive.google.com/file/d/1ymtJy2i5uVheJ-16-5KtrnVWeX-pLJ6u/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...I-I see...",
                "line": 106,
                "url": "https://drive.google.com/file/d/1QlSnpuUsrhd0azjLtfjAyh4xDw-B0T2p/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "As a fellow sufferer, I'm going out of my way to teach you this once, so you better be grateful!",
                "line": 107,
                "url": "https://drive.google.com/file/d/1xPT1GaKgQ8SZDsNsZ3rrB_t5jm3S5ryw/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Got it. Thanks, Epsilon.",
                "line": 108,
                "url": "https://drive.google.com/file/d/1nO8TnR3-7HLY8QT3g6Oe26nCexqlXwl2/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Grr!",
                "line": 109,
                "url": "https://drive.google.com/file/d/1H7be4fJfcgwr5eUyDkIBL1HGTH_6J7ub/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Good job, both of you. You both managed pretty decent times for your first attempt.",
                "line": 110,
                "url": "https://drive.google.com/file/d/1goplavUbB3z39rpsAkwjwU6NLCRol4md/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Beta, it seems you got off to a slightly late start. From what I gathered, it was an oversight on my part. Sorry.",
                "line": 111,
                "url": "https://drive.google.com/file/d/18XwhRe7S_73BdO236aCspxYlLHECQ-it/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "No, Epsilon found a way around the problem, so I have only my own inadequacy to blame...",
                "line": 112,
                "url": "https://drive.google.com/file/d/1PCBAzB4d4ncgukp7gmnCrrrV2oKNwu4z/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...I hate to admit it, but you won fair and square, Epsilon! I won't lose next time, though!",
                "line": 113,
                "url": "https://drive.google.com/file/d/1cZ_upkTGBsfGLLYLW8p_mvuxSuikgPtf/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Um... I look forward to the challenge... Ahahahaha...",
                "line": 114,
                "url": "https://drive.google.com/file/d/1M3e5DPDImgDhAiZngjeyweH2CKIyXIdW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Seems like Epsilon's inflated chest didn't press against her lungs too much.)",
                "line": 115,
                "url": "https://drive.google.com/file/d/1TNTZmE5Z0U20-o2Ir0QbED-KAFiEnKQZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Maybe she naturally adjusted them to be more comfortable, or the pressure from the ground didn't reach her actual flesh. That must be it.)",
                "line": 116,
                "url": "https://drive.google.com/file/d/1MNT8hWq2kvFPShHaVoWfq-Ilgf0bv42c/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Just to ensure it's fair, let's switch to starting from a crouching position...)",
                "line": 117,
                "url": "https://drive.google.com/file/d/10kRYHtvHTsm84M6YZiXVsrnfiKSM18XC/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Because of Cid's concern, they decide to begin the next match from a crouching position...",
                "line": 118,
                "url": "https://drive.google.com/file/d/1OxPI8kp9c1-2Ur49UaBaZHe95AuovHn1/view?usp=drivesdk"
            }
        ],
        "e6": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Ready... Set...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1QSkHIlDhR1StUB78YxK63i_TG0KJlob3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Go!",
                "line": 2,
                "url": "https://drive.google.com/file/d/15f8IsmLify-fnssn5KA6FhVpi3Af-shQ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Hyaaaaaahhh!!!",
                "line": 3,
                "url": "https://drive.google.com/file/d/1_l5pFg9wuDslo66krICdU0hwWSa2E4iR/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hyaaaaaahhh!!!",
                "line": 4,
                "url": "https://drive.google.com/file/d/1LZPv3PTkCzJqxgBbyQ7bb9BvQVTuzbor/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "The winner is...",
                "line": 5,
                "url": "https://drive.google.com/file/d/19QElNQoEXCtxLxHXvE6NtxIVKqscgBKJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Beta!",
                "line": 6,
                "url": "https://drive.google.com/file/d/1ytDZRa89A81p4XuhH7_1w65KCRZu34NW/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Heehee. Finally, two wins in a row! I think I'm getting the hang of this!",
                "line": 7,
                "url": "https://drive.google.com/file/d/1MAQiIpiQeghxhFyu6ml_Z_ORAVd4qSOG/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Damn it, Beta... You've got quite a lot of stamina! My lord! One more round, please!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1fs8yNELZIqct786IyZva822KzdhfMl-g/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I'm in great condition right now, so I won't lose the next round, either!",
                "line": 9,
                "url": "https://drive.google.com/file/d/19qHbpTrmkg-ntidbdm7dPy7X1Wn1cap5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright, alright, get ready.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1A3R9E3CNHDK0RQsxFtiH2ZvXebHPpWwg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...Well, it looks like they're both enjoying themselves.)",
                "line": 11,
                "url": "https://drive.google.com/file/d/1qil-zrtGIgJY9zuPe1Y4P7gIgBMU6esi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Thanks to having a competitor, they have the sportsmanship attitude of \"Again! One more round!\" even when losing. It makes me want to match their passion.)",
                "line": 12,
                "url": "https://drive.google.com/file/d/1hUjJgWo8reXT7P1MgwAGWMGvHHVKXMWp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Right now, I'm the epitome of a devoted coach! It's my mission to stoke these young athletes' passion and keep it burning!)",
                "line": 13,
                "url": "https://drive.google.com/file/d/1SU53ORtikj3vaja7ExJJwiJ5Fl6Ph6PC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hmm... Beta. You may be in the lead, but your average time is increasing.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1xEETBzTLAeRw2R32QGcLngVaOQptYeWZ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Ack... True...",
                "line": 15,
                "url": "https://drive.google.com/file/d/1ydroGtwk9PWw83moCmqPFwaqEpAv-GTP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Epsilon, your form is getting sloppy. Keep it up, and you'll develop bad habits",
                "line": 16,
                "url": "https://drive.google.com/file/d/12NXfokGF_yMHr7eHZbXNZ6m5lB_l7Yxr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What? You noticed I switched up my center of gravity to cover my fatigue? There really is no deceiving you, my lord...",
                "line": 17,
                "url": "https://drive.google.com/file/d/1nuJFmuMobhoxutR97GrOJaw2M5tvLZMV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I just spouted off something that sounded plausible. That said, I have a good grasp of sports clich\u00e9s.)",
                "line": 18,
                "url": "https://drive.google.com/file/d/15htN409QHS4vaShmDOClGKggpzyMfJHB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "It's not good to push yourself too hard. Let's take a break and continue from there.",
                "line": 19,
                "url": "https://drive.google.com/file/d/18bFi3O1jypRx59-dWjPb93u7hldDRn45/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Fifteen minutes later...",
                "line": 20,
                "url": "https://drive.google.com/file/d/1C0J1weXTI5MwN_UpDpf_DSkCBScmbAJ0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Alright, are you ready?",
                "line": 21,
                "url": "https://drive.google.com/file/d/1GroBdfZGL2RO26VjRRmGLGBFyMhSPnA4/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1o-9C_PFMkpzLWwF_7zYMW7JoEtarprkl/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You bet!",
                "line": 23,
                "url": "https://drive.google.com/file/d/1p5dFlT0sLuo2xWmI1_WLz0uoNvO3wiXQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Good, good.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1aUiAyl_Zkt5sK8rB8JhBFCTWNoC8_ZVe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(During the break, I gave some serious thought to how I could get the girls even more fired up...)",
                "line": 25,
                "url": "https://drive.google.com/file/d/10RwHNp985gW0IX_r_TcabbP8oNQmKyK5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...The conclusion I reached is the classic carrot and stick. A good coach provides motivation to overcome tough training.)",
                "line": 26,
                "url": "https://drive.google.com/file/d/1P4bfUtXXToz7mgPx0-8ao0DRNU8SNEjB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(You know, the typical BBQ at the end of training camp or treating them to a fancy meal. Those sorts of tropes.)",
                "line": 27,
                "url": "https://drive.google.com/file/d/1KMBUO2vDL4B5w6EsgWsMbP2lb33_KRLl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'll give a reward to whichever of you wins.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1ne2WwFr__-9qvgYs5fm1Nj6tLE2cIIE3/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "...What?!",
                "line": 29,
                "url": "https://drive.google.com/file/d/1WDMtWExF26SS9UP73a7MEdRMDhlK8ssP/view?usp=drivesdk"
            },
                        {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "...What?!",
                "line": 29,
                "url": "https://drive.google.com/file/d/1WDMtWExF26SS9UP73a7MEdRMDhlK8ssP/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "A reward?!",
                "line": 30,
                "url": "https://drive.google.com/file/d/1cmgL29I_lMpnN6RwgE4f5GiQ6UhOcDOw/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Anything I want?!",
                "line": 31,
                "url": "https://drive.google.com/file/d/1MEU3t6fsdFFTCrds97jbDlokrrARy3gV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Wait, that's not quite what I said...",
                "line": 32,
                "url": "https://drive.google.com/file/d/13AplRnkGPtzIlxYZUvq8-84yAFy8PYKO/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Beta. Sorry, but I'm winning this match for sure.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1zDOizhU7CUXf5RogBntWip19zUTrFMmr/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Right back at you, Epsilon. You'd better start thinking about your concession speech.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1yLpnprXRSr3l4bJVel7SpsN_i4hwOASh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh? But you're so much better at writing than I am. I'd love to hear a concession speech written by the famous novelist Natsume.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1J3D2FEI9BKgxX2n1kymp8k8Ak4W3HBxZ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Hmm? Then how about turning the anguish of your defeat into a song? In fact, why not a lullaby? Coming from a famous singer like yourself, Shiron...it ought to put me right to sleep.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1vwLqsFXqm4AE3x7-mvMvvE1DRbnI3Wbe/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Keep on talking... This battle...",
                "line": 37,
                "url": "https://drive.google.com/file/d/1lQlpYEukAdZCxzc7rcnLkyEmxjpQbtHD/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...is mine!!!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1DSSgENq7vniL5PcVQSUZcbsZb36FhZtD/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...is mine!!!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1kAObA7lCzvouYK5Eop3aWMoXXPT2c8U2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Whoa... That was pretty effective in getting them fired up. I should also start thinking about how to cheer up the loser.)",
                "line": 40,
                "url": "https://drive.google.com/file/d/1O6q0Kn3TDWHSbPmIPpFbMAJnhkikSiNe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright then. Ready... Set...",
                "line": 41,
                "url": "https://drive.google.com/file/d/11LnCaJPgemsOAL-OhBrDlbo7Ph20OLVB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Go!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1DPtADz6-eGAmAtpfU-yG6rUPHtTXNi2u/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Perfect...",
                "line": 43,
                "url": "https://drive.google.com/file/d/17MDPydkRaQnHdOCaTao-E7ST4mEfwrrH/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...start!",
                "line": 44,
                "url": "https://drive.google.com/file/d/1LeIKBu2wDMDi63X3yWl8aEaNPKzML2I0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(What?! Both of them are off to a perfect start that would put professionals to shame! They've seriously mastered it in just a few rounds!)",
                "line": 45,
                "url": "https://drive.google.com/file/d/1yVxU0ZThxgThxuI-Ye0YpOHctuqXUS4f/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(...Sorry, but the match is already decided. Victory comes with consistent practice!)",
                "line": 46,
                "url": "https://drive.google.com/file/d/17YyEvu4wzzuhV875w5I_i2EX8VxHnhH4/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "(And I am the one who has come out on top up to this point! The goddess of victory, no, Master Shadow himself smiles upon me!)",
                "line": 47,
                "url": "https://drive.google.com/file/d/1FbPDLkx8JW3AVJVlGynL8eL1PoEI60M7/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(...After hearing Master Shadow's advice, my victory was all but guaranteed. His words always save me.)",
                "line": 48,
                "url": "https://drive.google.com/file/d/1vujQl7QeiuvJ8r0SKUEavvbEKsYzJ-Q3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(What matters isn't what you're born with, but knowing what you're capable of! I will live up to...my lord's expectations!)",
                "line": 49,
                "url": "https://drive.google.com/file/d/1wDHvuQFOXybYfD9zoJ4v6EjZoV7D9uOH/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Haaaaaaahhh!",
                "line": 50,
                "url": "https://drive.google.com/file/d/1kGqle3AZcqi6UaWDHgJBNPp84IVbTV4c/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yaaaaaaahhh!",
                "line": 51,
                "url": "https://drive.google.com/file/d/16LRgd_7kUQjn3wymwMFUqtfphIvHINBf/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "They're evenly matched! At this point, it's anyone's game!",
                "line": 52,
                "url": "https://drive.google.com/file/d/1tK5_hmBBl24l2ZR9-oWu4b5hOBWidTm_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Hold on. Did I put the flag over there?",
                "line": 53,
                "url": "https://drive.google.com/file/d/1F6-ElfDuDMpAd7h_E9cf9pbJ-T1cS83U/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes! I got it\u2014",
                "line": 54,
                "url": "https://drive.google.com/file/d/1wLGVhY0Qi0Rzz6Hf4Y0Jh3Ykky_lMoSW/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "\u2014Huh? Aaaahhh!",
                "line": 55,
                "url": "https://drive.google.com/file/d/1AMIWXJJjIWlnz1I4dJrJaeoUN7TRltiG/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The moment the two grab the flag, a monster appears before their eyes. What they thought was the flag was, in fact, its fin.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1sq91r5tJL-AZKBxUi_sP6xuFCOBB2wEp/view?usp=drivesdk"
            },
            {
                "name": "Monster",
                "name_variant": "Monster",
                "subtitle": "Graaaaarrrr!",
                "line": 57,
                "url": "https://drive.google.com/file/d/1OjCS4Ik-jzkBrEzwi59MsawmzIqzral_/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What?! A monster?!",
                "line": 58,
                "url": "https://drive.google.com/file/d/1NtmUNjlDJFfrD25B-oLTMzTS4TQ1_XRe/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "But where's the flag?! Where is it?!",
                "line": 59,
                "url": "https://drive.google.com/file/d/1keUM01rcx0NwcnsCdEZw1J_6hm_QmvaQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I couldn't check properly because of the distance, but it looks like it wasn't the flag!",
                "line": 60,
                "url": "https://drive.google.com/file/d/1j6_MkL6VmIL8TJo9QzApzOaWZ44fl7o3/view?usp=drivesdk"
            },
            {
                "name": "Monster",
                "name_variant": "Monster",
                "subtitle": "Graaaaarrrr!",
                "line": 61,
                "url": "https://drive.google.com/file/d/1virqNROB3OP_4erOvKmPRaBKEhp-Cs2l/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "You...ruined the match!",
                "line": 62,
                "url": "https://drive.google.com/file/d/16P_Hlq8CH5KkAz6ZZ6Tx68S0h0YpgkIr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "The crime of depriving me of my reward is severe!",
                "line": 63,
                "url": "https://drive.google.com/file/d/1ypv5PmLwIJ6tfWt_tTSn-uFutWAXKoMN/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The two turn toward the monster with deadly glares beyond anything they have displayed during their missions.",
                "line": 64,
                "url": "https://drive.google.com/file/d/19crOat9yXwReEqgUA0MUnycIA4qNYOtG/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "You'll pay...",
                "line": 65,
                "url": "https://drive.google.com/file/d/1vL-J3K7QuPFLG4e78hoOjr9XR7hRrP_W/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...for what you've done!!!",
                "line": 66,
                "url": "https://drive.google.com/file/d/1n7UAVhVPeBvy4dWiIHn9tfs9PSjy2O-c/view?usp=drivesdk"
            },
            {
                "name": "Monster",
                "name_variant": "Monster",
                "subtitle": "Graaarrrr?!",
                "line": 67,
                "url": "https://drive.google.com/file/d/1zCxLl1MKQQaGYwATrq1BHq54SgO1Y4Ez/view?usp=drivesdk"
            }
        ],
        "e7": [
            {
                "name": "Monster",
                "name_variant": "Monster",
                "subtitle": "Grrarrr...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1gZ99bJl-jKN9juGA9kelIux3lO4XoF8d/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hey, you two! You're okay...right?",
                "line": 2,
                "url": "https://drive.google.com/file/d/1tdnPzz_wpauqGcHyZFl5BUXcRwX2swDQ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes...of course we're okay...but...",
                "line": 3,
                "url": "https://drive.google.com/file/d/1kYJtuIg6bPfQ9yu5ZWiEZgjmjpHHDM-7/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "My lord...um...about the reward...",
                "line": 4,
                "url": "https://drive.google.com/file/d/1TddlqVfntLQ48wNLfXXXKNEXxEw8kHOv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Well...since that wasn't the flag, let's call it a draw...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1p7ILMBluy2jkn-9zmijSOHIlQKrUNszO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "We'll start over again...",
                "line": 6,
                "url": "https://drive.google.com/file/d/1KnHr28fWydfvH4RXMh-wad9lRUlg-AoB/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I guess it is what it is...",
                "line": 7,
                "url": "https://drive.google.com/file/d/1QGmyq8oiSA_od8AQiOM4DHskYQQxAeAB/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "*sob* After all my hard work!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1zzWNRiA8lY7YXU9FRMTgMgcsbsBz227T/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I-It's hit them harder than I anticipated. I doubt they're in the mood for a rematch. Let's switch up tactics here...)",
                "line": 9,
                "url": "https://drive.google.com/file/d/1g9iERXvMY7ZB-XFETzVqR589X1SK34D_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "The two of you have improved so much compared to the start! It was incredibly satisfying to watch such an intense match.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1bDjior_Pa8BIgytWX4v_glfJmAROf0Ac/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "My actual goal was to motivate both of you and elevate your personal and competitive skills.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1m6Zb9KVmpcnt5dxfG0DlkcBzuNgq7uKf/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What?!",
                "line": 12,
                "url": "https://drive.google.com/file/d/16RwvVz3ZSFV4XI_JzVaLAuX9yP3UszXW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I think you both deserve the reward, so how about I give it to both of you... Is that okay?",
                "line": 13,
                "url": "https://drive.google.com/file/d/18urhpr9BBoS80kftybi5156BQ3aWtyt7/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "O-Of course it is! ...Epsilon, we did it!",
                "line": 14,
                "url": "https://drive.google.com/file/d/19JMsJqlnhrtCvSoxxvLkcLjgbn-BOgBc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Y-Yes! Looking back, I was able to enjoy myself because I was up against you, Beta.",
                "line": 15,
                "url": "https://drive.google.com/file/d/13-Hhk3-yuq603fMbw37UCWlh_Tb2u6ft/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Beta and Epsilon exchange a warm handshake.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1T3_VqWz0hHlJK9bGTM-hRacmZWfc86CW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Yes, this is it! The classic resolution where the rivals acknowledge each other! Everyone loves clich\u00e9s\u2014that's why they're clich\u00e9s! That's right. This is how it should be.)",
                "line": 17,
                "url": "https://drive.google.com/file/d/1TqvYWOVlZuy_EDlp0gdR6w_8sZ-70-Dc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So, what would you two like for your reward? Is there anything you want to eat or any object you'd like?",
                "line": 18,
                "url": "https://drive.google.com/file/d/1xA2znxEHFXIc0R1Su3OeDrAkFCmCvPyf/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Please give me some time to think. This is the most important decision of my life.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1Wvc9EJsoZP0fRzr37wWEcyY8MEuLmvA5/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Um, um...",
                "line": 20,
                "url": "https://drive.google.com/file/d/19GTWgFJ7yUChoswptDj6_9ZAyI1VlNei/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "??? (Delta)",
                "subtitle": "Something yummy!",
                "line": 21,
                "url": "https://drive.google.com/file/d/1By8K2nn3fdMqxRflJLoTw2Mspy7Z7d4M/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Something yummy, huh? Something yummy... Hm? Which of you just said that?",
                "line": 22,
                "url": "https://drive.google.com/file/d/1VwT5U2tKF4aROjBn6-8AzpEBi1_8YAnJ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Boss man! Sorry to keep you waiting!",
                "line": 23,
                "url": "https://drive.google.com/file/d/1QcRy25lxK2tS9uCokzY_8b6YMKufb5kA/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Hey, Delta, stop bothering Shadow.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1ipIDEA2j49MfotwuB4dspoP_tQcCfYUO/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hmm. Not a bad place.",
                "line": 25,
                "url": "https://drive.google.com/file/d/19svYj9x0spc9-OfR9LK5WHdppCRK9FV0/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Of course. I put a lot of effort into it.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1qYnJEtgmlYzRyIM-WraUQoe9OI4gRHh-/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "G-Guys?! What're you all doing here?!",
                "line": 27,
                "url": "https://drive.google.com/file/d/16TzKJBQAoA0Dq--eFwY8ImHB9whnjKNp/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "We finished our missions...so we came to join in the fun...",
                "line": 28,
                "url": "https://drive.google.com/file/d/1yz-cTbbYNdtDG1nrUv_QpXM7L9rYFVkE/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Boss man! I wanna play before we eat! Splash, splash, splash!",
                "line": 29,
                "url": "https://drive.google.com/file/d/1SWg2jbjehfg60eBDGRH5NmCu0Do18oQS/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hey, quit messing around! Dumb dog!",
                "line": 30,
                "url": "https://drive.google.com/file/d/1Ioxz8_g3IKdMQ7n7ukQRjErBP7SsB2vR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Ack! Now you've gone and done it! Take this! And this! And this!",
                "line": 31,
                "url": "https://drive.google.com/file/d/1RPcI3rLTMou4-FyGNP56jEjs_rhkLWgM/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Aaagh! Boss man, you're too strong when you mean business!",
                "line": 32,
                "url": "https://drive.google.com/file/d/1ZudMylRB2M9eyhdveCkAd-yjAX2lL10R/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Isn't it nice...playing at the beach with everyone like this. Heheh.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1eZxvLmONDulUk_L2xpLZihNRf8U5dWQg/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That's good and all, but...um...my reward...",
                "line": 34,
                "url": "https://drive.google.com/file/d/1phieFNZtV5JY_QkNwnKJz5LJ1EsKYjaM/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Hm? Did something happen with the two of you?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1RDoD86BjmohEB3-Vn49OQBhNCJKiml3U/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Um... It's kind of hard to explain...",
                "line": 36,
                "url": "https://drive.google.com/file/d/1E6cFDRQmEmCy4uCbdIYsQAVi5ijxRcFp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Oh well! We might as well have fun together since we're all here at the beach!",
                "line": 37,
                "url": "https://drive.google.com/file/d/17w5Y6B2CEtkcuz-Bg252iGDf_XHugKBV/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Yes, I agree! It was a tie anyway! Let's have a blast together!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1BrDRKyCp-JcxvZjt_fYJKCco9Ph5lCSy/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Hm? Well, okay, so long as that's the case...",
                "line": 39,
                "url": "https://drive.google.com/file/d/181jSkYdeC0rM5j7JFmeGnhAcnA7R4-Eh/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "So...this is watermelon...",
                "line": 40,
                "url": "https://drive.google.com/file/d/1eDayjcsXLONa5hpWLchvWlzfDByWRuD7/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Earlier, Master Shadow taught us the wisdom of \"Watermelon Smashing.\"",
                "line": 41,
                "url": "https://drive.google.com/file/d/1J8kH6w51ZiQRhZsPinSj9txGG8RLltjP/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I'm interested... Let me try...",
                "line": 42,
                "url": "https://drive.google.com/file/d/11ak7W6sg4iqcM-iKGhbrVj8VXZ0_V-KH/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I'm good at it too! The winner is the one who smashes the watermelon to pieces!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1UEY45X4iPdzy0plFzmByVx55kbgEL8Ox/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I don't know the details, but I'm sure it's nothing like that...",
                "line": 44,
                "url": "https://drive.google.com/file/d/1vJmJbFHNs0I3EgLM2YvZFlpnN0i15rkc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Nothing beats us all being together. Right, Beta?",
                "line": 45,
                "url": "https://drive.google.com/file/d/1trxtbSa4l5h6lH9Iok3dT-1l-uPMkw7_/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Agreed. Let's cherish this time, Epsilon.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1aLMQZL__fJbuZI4tnCJpUYjSfDhevB2r/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "The members of the Seven Shadows have the time of their life at the beach.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1zZL2UhjmwtWWqTy-J6fq5eMTCizhcyxx/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Together with Shadow, they enjoy an unexpectedly long vacation.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1zoIYpGviYuopKPnDkfrM1cbh7NmJydXH/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Then, a few days later...",
                "line": 49,
                "url": "https://drive.google.com/file/d/1g7gDkGk4_OGVb7QpfVz9lLM9aUx6kKO2/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "To be Continued.",
                "line": 50,
                "url": ""
            }
        ]
    }
}

let setDoc = db.collection('data').doc('es_dss').set(data['dss']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
