const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "ln": {
        "total": {
            "line_count": 24986,
            "word_count": 343965,
            "char_count": 1923515
        },
        "v1": {
            "c1": {
                "line_count": 219,
                "word_count": 5900,
                "char_count": 32378,
                "title": "Prologue | Preparing the Perfect Stage!"
            },
            "c2": {
                "line_count": 399,
                "word_count": 7418,
                "char_count": 41873,
                "title": "Chapter 1 | Starting the Shadowbroker Tutorial!"
            },
            "c3": {
                "line_count": 357,
                "word_count": 5761,
                "char_count": 31721,
                "title": "Chapter 2 | Assuming the Role of a Side Character at School!"
            },
            "c4": {
                "line_count": 838,
                "word_count": 12084,
                "char_count": 68528,
                "title": "Chapter 3 | My Official Beginning as a Mastermind in Action!"
            },
            "c5": {
                "line_count": 476,
                "word_count": 7593,
                "char_count": 42368,
                "title": "Chapter 4 | The Two Sides of the Shadow Garden?!"
            },
            "c6": {
                "line_count": 391,
                "word_count": 5371,
                "char_count": 30174,
                "title": "Chapter 5 | Mastering the Peaceful Life of a Nobody!"
            },
            "c7": {
                "line_count": 529,
                "word_count": 7705,
                "char_count": 43290,
                "title": "Chapter 6 | That Scene Where Terrorists Take Over the School"
            },
            "c8": {
                "line_count": 334,
                "word_count": 5225,
                "char_count": 29558,
                "title": "Final Chapter | My Idea of the Ultimate Shadow Commander!"
            },
            "c9": {
                "line_count": 22,
                "word_count": 713,
                "char_count": 4108,
                "title": "Appendix | The Chronicles of Master Shadow Complete Version: Volume 1"
            },
            "total": {
                "line_count": 3565,
                "word_count": 57770,
                "char_count": 323998,
                "title": "Volume 1"
            }
        },
        "v2": {
            "c1": {
                "line_count": 271,
                "word_count": 5362,
                "char_count": 29052,
                "title": "Prologue | To Lindwurm, the Sacred Land!"
            },
            "c2": {
                "line_count": 246,
                "word_count": 4995,
                "char_count": 28174,
                "title": "Chapter 1 | Fun Times at the Goddess's Trial!"
            },
            "c3": {
                "line_count": 641,
                "word_count": 9287,
                "char_count": 52575,
                "title": "Chapter 2 | Investigating the Sanctuary!"
            },
            "c4": {
                "line_count": 604,
                "word_count": 8208,
                "char_count": 46512,
                "title": "Chapter 3 | When Things Get Boring, It's Time for Explosives!"
            },
            "c5": {
                "line_count": 376,
                "word_count": 5666,
                "char_count": 31110,
                "title": "Chapter 4 | This Situation Calls for a \"Who Is That Guy?!\""
            },
            "c6": {
                "line_count": 303,
                "word_count": 4000,
                "char_count": 22975,
                "title": "Chapter 5 | A Battle to Attract Only MVPs!"
            },
            "c7": {
                "line_count": 384,
                "word_count": 5155,
                "char_count": 28773,
                "title": "Chapter 6 | A Mastermind Always Plays Piano Under Moonlight!"
            },
            "c8": {
                "line_count": 446,
                "word_count": 5561,
                "char_count": 30656,
                "title": "Chapter 7 | Showing Off a Smidgen of My Strength!"
            },
            "c9": {
                "line_count": 329,
                "word_count": 4275,
                "char_count": 24097,
                "title": "Chapter 8 | Lay Your Eyes on My True Powers!"
            },
            "c10": {
                "line_count": 426,
                "word_count": 4565,
                "char_count": 25738,
                "title": "Final Chapter | Just Who Is This Mysterious Badass?!"
            },
            "c11": {
                "line_count": 47,
                "word_count": 961,
                "char_count": 5567,
                "title": "Appendix | The Chronicles of Master Shadow Complete Version: Volume II"
            },
            "total": {
                "line_count": 4073,
                "word_count": 58035,
                "char_count": 325229,
                "title": "Volume 2"
            }
        },
        "v3": {
            "c1": {
                "line_count": 322,
                "word_count": 4491,
                "char_count": 25183,
                "title": "Prologue | Heading to the Lawless City over Fall Break!"
            },
            "c2": {
                "line_count": 479,
                "word_count": 6905,
                "char_count": 38730,
                "title": "Chapter 1 | Lawless City Bandit Hunting!"
            },
            "c3": {
                "line_count": 489,
                "word_count": 7070,
                "char_count": 39593,
                "title": "Chapter 2 | Storming the Crimson Tower!"
            },
            "c4": {
                "line_count": 726,
                "word_count": 9043,
                "char_count": 50805,
                "title": "Chapter 3 | Pursuing the Blood Queen!"
            },
            "c5": {
                "line_count": 216,
                "word_count": 2467,
                "char_count": 13686,
                "title": "Auxiliary Chapter | Field Notes on a Little Brother\u2014by Young Claire!"
            },
            "c6": {
                "line_count": 501,
                "word_count": 7304,
                "char_count": 41130,
                "title": "Chapter 4 | I'll Destroy It All and Start from Scratch!"
            },
            "c7": {
                "line_count": 331,
                "word_count": 4478,
                "char_count": 25241,
                "title": "Chapter 5 | Printing Fake Money as Mitsugoshi Throws Down with the Major Corporate Alliance!"
            },
            "c8": {
                "line_count": 573,
                "word_count": 7211,
                "char_count": 41117,
                "title": "Chapter 6 | Circulating Counterfeit Cash!"
            },
            "c9": {
                "line_count": 690,
                "word_count": 9037,
                "char_count": 50737,
                "title": "Epilogue | The One to Destroy It All and Start from Scratch\u2014with Fake Bills!"
            },
            "c10": {
                "line_count": 49,
                "word_count": 1201,
                "char_count": 6914,
                "title": "Appendix | The Chronicles of Master Shadow Complete Version: Volume III"
            },
            "total": {
                "line_count": 4376,
                "word_count": 59207,
                "char_count": 333136,
                "title": "Volume 3"
            }
        },
        "v4": {
            "c1": {
                "line_count": 449,
                "word_count": 5583,
                "char_count": 30744,
                "title": "Prologue | It's Time for a War in the Oriana Kingdom!"
            },
            "c2": {
                "line_count": 369,
                "word_count": 5123,
                "char_count": 27559,
                "title": "Chapter 1 | Putting the Kibosh on Rose Oriana's Wedding!"
            },
            "c3": {
                "line_count": 442,
                "word_count": 5703,
                "char_count": 31157,
                "title": "Chapter 2 | Begin Operation: Obstruction!"
            },
            "c4": {
                "line_count": 653,
                "word_count": 9099,
                "char_count": 50559,
                "title": "Chapter 3 | Crashing the Ceremony!"
            },
            "c5": {
                "line_count": 224,
                "word_count": 3221,
                "char_count": 17817,
                "title": "Auxiliary Chapter | Rise of the Fancy Hoodlum Slayer!"
            },
            "c6": {
                "line_count": 517,
                "word_count": 6716,
                "char_count": 37329,
                "title": "Chapter 4 | Lurking in the Darkness in Fantastical Japan!"
            },
            "c7": {
                "line_count": 605,
                "word_count": 10044,
                "char_count": 55005,
                "title": "Chapter 5 | Sneaking Around in Japan, Just Like the Old Days!!"
            },
            "c8": {
                "line_count": 559,
                "word_count": 6610,
                "char_count": 36842,
                "title": "Chapter 6 | Something Smells Fishy... But an Eminence in Shadow Always Cracks the Case!"
            },
            "c9": {
                "line_count": 503,
                "word_count": 6125,
                "char_count": 34702,
                "title": "Epilogue | Behold, a Full-Fledged Eminence in Shadow!"
            },
            "c10": {
                "line_count": 32,
                "word_count": 1015,
                "char_count": 5699,
                "title": "Appendix | The Chronicles of Master Shadow Complete Edition: Volume IV"
            },
            "total": {
                "line_count": 4353,
                "word_count": 59239,
                "char_count": 327413,
                "title": "Volume 4"
            }
        },
        "v5": {
            "c1": {
                "line_count": 552,
                "word_count": 7082,
                "char_count": 38970,
                "title": "Prologue | The Case of the Missing Students and the Not-So-Peaceful Academy!"
            },
            "c2": {
                "line_count": 714,
                "word_count": 10452,
                "char_count": 57098,
                "title": "Chapter 1 | Claire's Back, and Her Symptoms Are Worse Than Ever!"
            },
            "c3": {
                "line_count": 731,
                "word_count": 9174,
                "char_count": 51320,
                "title": "Chapter 2 | Morning Comes, and There's an Impaler on the Loose!!"
            },
            "c4": {
                "line_count": 591,
                "word_count": 8008,
                "char_count": 44804,
                "title": "Chapter 3 | The Case Is Closed, So It's Time for a Flashback!"
            },
            "c5": {
                "line_count": 210,
                "word_count": 4090,
                "char_count": 22677,
                "title": "Chapter 4 | Peace in Our Time!"
            },
            "c6": {
                "line_count": 613,
                "word_count": 9746,
                "char_count": 54385,
                "title": "Chapter 5 | Terrorists Attack the School...Again!!"
            },
            "c7": {
                "line_count": 609,
                "word_count": 8273,
                "char_count": 46843,
                "title": "Epilogue | I'd Let the Whole World Burn, If That's What It Took!"
            },
            "c8": {
                "line_count": 41,
                "word_count": 700,
                "char_count": 3821,
                "title": "Appendix | Eta's Research Journal"
            },
            "total": {
                "line_count": 4061,
                "word_count": 57525,
                "char_count": 319918,
                "title": "Volume 5"
            }
        },
        "v6": {
            "c1": {
                "line_count": 376,
                "word_count": 4001,
                "char_count": 22543,
                "title": "Prologue | The Clandestine Ruler of the Midgar Kingdom...I'm so Jealous!"
            },
            "c2": {
                "line_count": 600,
                "word_count": 7151,
                "char_count": 40308,
                "title": "Chapter 1 | Enter \"Jack The Rippler\"!"
            },
            "c3": {
                "line_count": 769,
                "word_count": 7939,
                "char_count": 44798,
                "title": "Chapter 2 | Surprise Assassins at the Sleepover!"
            },
            "c4": {
                "line_count": 802,
                "word_count": 10339,
                "char_count": 58077,
                "title": "Chapter 3 | Let's Decipher the Crime Announcement!"
            },
            "c5": {
                "line_count": 615,
                "word_count": 7007,
                "char_count": 39937,
                "title": "Chapter 4 | And then a Monster becomes a Legend!"
            },
            "c6": {
                "line_count": 86,
                "word_count": 890,
                "char_count": 4926,
                "title": "Intermission | The Monster's Successor!"
            },
            "c7": {
                "line_count": 447,
                "word_count": 4180,
                "char_count": 22721,
                "title": "Auxiliary Chapter | Oath of the Plains"
            },
            "c8": {
                "line_count": 726,
                "word_count": 8385,
                "char_count": 47513,
                "title": "Chapter 5 | Welcome to Shadow Garden!"
            },
            "c9": {
                "line_count": 117,
                "word_count": 1730,
                "char_count": 9694,
                "title": "Epilogue | The Scent of That Day"
            },
            "c10": {
                "line_count": 20,
                "word_count": 567,
                "char_count": 3304,
                "title": "Appendix | Alpha's Organizational Management Diary."
            },
            "total": {
                "line_count": 4558,
                "word_count": 52189,
                "char_count": 293821,
                "title": "Volume 6 [Fan-Translation]"
            }
        }
    },
    "wn": {
        "total": {
            "line_count": 17326,
            "word_count": 227782,
            "char_count": 1267488
        },
        "1": {
            "1": {
                "line_count": 77,
                "word_count": 1436,
                "char_count": 7865,
                "title": "Remaining Within the Limits of Being Human Means You Would Be Vaporized By a Nuke"
            },
            "2": {
                "line_count": 123,
                "word_count": 3296,
                "char_count": 18266,
                "title": "Bandits Are Basically Just Walking Bonus Stages"
            },
            "3": {
                "line_count": 65,
                "word_count": 1512,
                "char_count": 8355,
                "title": "Sudden Emergence of the Order of Diabolos?!"
            },
            "4": {
                "line_count": 72,
                "word_count": 1195,
                "char_count": 6554,
                "title": "If Only He Had Hair......"
            },
            "5": {
                "line_count": 82,
                "word_count": 1196,
                "char_count": 6730,
                "title": "Real Member of the Order, and Real Person of the Curse"
            },
            "6": {
                "line_count": 97,
                "word_count": 1210,
                "char_count": 6817,
                "title": "Your Drug Test Result is 'Positive'"
            },
            "7": {
                "line_count": 100,
                "word_count": 1501,
                "char_count": 7919,
                "title": "A Simple Fighting Lesson, Power in Shadows Style (With Only This Much, You Are Also a Power in the Shadows?!)"
            },
            "8": {
                "line_count": 94,
                "word_count": 1935,
                "char_count": 10794,
                "title": "Powers in the Shadows are Lonely"
            },
            "9": {
                "line_count": 44,
                "word_count": 961,
                "char_count": 5350,
                "title": "The Frolicking of Those Who Know Nothing of the World of Shadows"
            },
            "10": {
                "line_count": 104,
                "word_count": 1344,
                "char_count": 7332,
                "title": "Apparently He Discovered Her Secret And Is Blackmailing Her......"
            },
            "11": {
                "line_count": 80,
                "word_count": 1342,
                "char_count": 7501,
                "title": "Conflict is Entertaining When You Are Uninvolved"
            },
            "12": {
                "line_count": 73,
                "word_count": 905,
                "char_count": 4928,
                "title": "Hi, My Name Is Pochi! Nice to Meet You, Everyone!"
            },
            "13": {
                "line_count": 94,
                "word_count": 1572,
                "char_count": 8399,
                "title": "Incidentally, I'm In the Zenon Faction"
            },
            "14": {
                "line_count": 143,
                "word_count": 1594,
                "char_count": 8731,
                "title": "It Would Take Serious Effort To Make Me Truly Flip Out"
            },
            "15": {
                "line_count": 160,
                "word_count": 2046,
                "char_count": 11255,
                "title": "Oh Wow, What a Wonderful Idea (In a Monotone Voice)"
            },
            "16": {
                "line_count": 121,
                "word_count": 1554,
                "char_count": 8751,
                "title": "Currently Writing the Complete Version of 'The War Chronicles of Shadow-sama'"
            },
            "17": {
                "line_count": 112,
                "word_count": 1421,
                "char_count": 7838,
                "title": "Fragment of Diabolos! Squish!"
            },
            "18": {
                "line_count": 118,
                "word_count": 1462,
                "char_count": 8192,
                "title": "Keep Watching from Below the Stage"
            },
            "19": {
                "line_count": 106,
                "word_count": 1334,
                "char_count": 7388,
                "title": "Far Off Memory"
            },
            "20": {
                "line_count": 200,
                "word_count": 2276,
                "char_count": 12793,
                "title": "\"I AM......\""
            },
            "21": {
                "line_count": 41,
                "word_count": 499,
                "char_count": 2717,
                "title": "[Urgent Question] The Way to Dispose of a Dead Body on Campus [Anon]"
            },
            "total": {
                "line_count": 2106,
                "word_count": 31591,
                "char_count": 174475,
                "title": "Volume 1"
            }
        },
        "2": {
            "22": {
                "line_count": 108,
                "word_count": 1566,
                "char_count": 8685,
                "title": "That Which Anyone Would Overlook"
            },
            "23": {
                "line_count": 92,
                "word_count": 1348,
                "char_count": 7420,
                "title": "Otherworld General Trading Company Mitsugoshi Co."
            },
            "24": {
                "line_count": 110,
                "word_count": 1541,
                "char_count": 8242,
                "title": "7 Girls and 1 Guy. Obviously Someone's Going to Be Left Out"
            },
            "25": {
                "line_count": 91,
                "word_count": 1298,
                "char_count": 7037,
                "title": "Respite in an Alleyway"
            },
            "26": {
                "line_count": 167,
                "word_count": 1748,
                "char_count": 9520,
                "title": "Ugh, My Head..."
            },
            "27": {
                "line_count": 66,
                "word_count": 639,
                "char_count": 3399,
                "title": "High Heels & One Piece & White Legs"
            },
            "28": {
                "line_count": 112,
                "word_count": 1218,
                "char_count": 6764,
                "title": "Otherworld-Style Valentine's Day"
            },
            "29": {
                "line_count": 92,
                "word_count": 992,
                "char_count": 5400,
                "title": "A Mob Can Tell"
            },
            "30": {
                "line_count": 77,
                "word_count": 1161,
                "char_count": 6427,
                "title": "Bastard"
            },
            "31": {
                "line_count": 123,
                "word_count": 1472,
                "char_count": 7984,
                "title": "Can You Keep Up With Me?"
            },
            "32": {
                "line_count": 80,
                "word_count": 856,
                "char_count": 4745,
                "title": "The Undying Magic Swordsman"
            },
            "33": {
                "line_count": 165,
                "word_count": 1679,
                "char_count": 9338,
                "title": "What Every Boy in the Universe Dreams Of"
            },
            "34": {
                "line_count": 108,
                "word_count": 1186,
                "char_count": 6660,
                "title": "There Are Times When A Mob Has to Act"
            },
            "35": {
                "line_count": 113,
                "word_count": 1175,
                "char_count": 6726,
                "title": "The Romance of Looking Down From a Rooftop"
            },
            "36": {
                "line_count": 115,
                "word_count": 1729,
                "char_count": 9624,
                "title": "Relieved That It's More Decent Than Expected"
            },
            "37": {
                "line_count": 124,
                "word_count": 1215,
                "char_count": 6856,
                "title": "The Course of an Advanced Psychological Battle"
            },
            "38": {
                "line_count": 140,
                "word_count": 1961,
                "char_count": 10937,
                "title": "Lending Just a Tiny Bit of Help"
            },
            "39": {
                "line_count": 126,
                "word_count": 2024,
                "char_count": 11194,
                "title": "Wanting to Live for Just One More Day"
            },
            "40": {
                "line_count": 188,
                "word_count": 2821,
                "char_count": 15699,
                "title": "That Which is Truly Important"
            },
            "41": {
                "line_count": 69,
                "word_count": 873,
                "char_count": 4803,
                "title": "Arrival of the Summer Rain"
            },
            "total": {
                "line_count": 2266,
                "word_count": 28502,
                "char_count": 157460,
                "title": "Volume 2"
            }
        },
        "3": {
            "42": {
                "line_count": 60,
                "word_count": 1555,
                "char_count": 8451,
                "title": "Proposing the Leech-style Mob Life"
            },
            "43": {
                "line_count": 86,
                "word_count": 1450,
                "char_count": 7818,
                "title": "That Thing That's As Enigmatic as Wooden Swords At Tourist Spots"
            },
            "44": {
                "line_count": 72,
                "word_count": 1411,
                "char_count": 7589,
                "title": "Holy Sword Excalibur"
            },
            "45": {
                "line_count": 66,
                "word_count": 1259,
                "char_count": 6758,
                "title": "Plan A Has Failed, Shift to Plan B"
            },
            "46": {
                "line_count": 51,
                "word_count": 1426,
                "char_count": 8162,
                "title": "A Woman Who Seems Shady and A Woman Who Seems Cheap and A Woman Who Seems Blissful"
            },
            "47": {
                "line_count": 48,
                "word_count": 1082,
                "char_count": 6044,
                "title": "The Theory That When a Bomb Goes Off It Can Erase Everything Else That Had Happened"
            },
            "48": {
                "line_count": 66,
                "word_count": 1103,
                "char_count": 6226,
                "title": "Please Believe That There Really Are Times When Those Who Have No Intention of Looking Still End up Seeing"
            },
            "49": {
                "line_count": 104,
                "word_count": 1674,
                "char_count": 9312,
                "title": "Those That Don't Understand Are Boring"
            },
            "50": {
                "line_count": 87,
                "word_count": 1059,
                "char_count": 5961,
                "title": "The Heroine Who Directed and Acted in Her Own Production"
            },
            "51": {
                "line_count": 113,
                "word_count": 1582,
                "char_count": 9005,
                "title": "The Birth of 'Precise'"
            },
            "52": {
                "line_count": 70,
                "word_count": 1145,
                "char_count": 6458,
                "title": "The Truth Within Memories"
            },
            "53": {
                "line_count": 90,
                "word_count": 1148,
                "char_count": 6096,
                "title": "The Escape Plan of a Fragile, Dainty Girl"
            },
            "54": {
                "line_count": 101,
                "word_count": 1118,
                "char_count": 6113,
                "title": "Gratz for Taking First Place in the 'Humans Who Can't Use Magic' Tournament"
            },
            "55": {
                "line_count": 63,
                "word_count": 989,
                "char_count": 5656,
                "title": "Just Look at What You Want to Look At Then"
            },
            "56": {
                "line_count": 96,
                "word_count": 1349,
                "char_count": 7696,
                "title": "Genes, Age, or Stress?"
            },
            "57": {
                "line_count": 136,
                "word_count": 1476,
                "char_count": 8516,
                "title": "Everything Is Within His Expectations"
            },
            "58": {
                "line_count": 101,
                "word_count": 1038,
                "char_count": 5680,
                "title": "That Which Can Only Be Drawn By the Chosen"
            },
            "59": {
                "line_count": 186,
                "word_count": 2443,
                "char_count": 13574,
                "title": "Inescapable Attack"
            },
            "60": {
                "line_count": 69,
                "word_count": 712,
                "char_count": 3961,
                "title": "Puzzle Piece"
            },
            "total": {
                "line_count": 1665,
                "word_count": 25019,
                "char_count": 139076,
                "title": "Volume 3"
            }
        },
        "4": {
            "61": {
                "line_count": 47,
                "word_count": 824,
                "char_count": 4566,
                "title": "The Girl and the Sound of Rain"
            },
            "62": {
                "line_count": 65,
                "word_count": 971,
                "char_count": 5305,
                "title": "I Am a Man Who Rides the Waves"
            },
            "63": {
                "line_count": 90,
                "word_count": 1211,
                "char_count": 6609,
                "title": "The Mysterious Young Swordsman Jimina"
            },
            "64": {
                "line_count": 104,
                "word_count": 1367,
                "char_count": 7482,
                "title": "Spartan Hazing From a Festival Regular!"
            },
            "65": {
                "line_count": 58,
                "word_count": 865,
                "char_count": 4747,
                "title": "No Need to Rush, Youngster, For Life is Long"
            },
            "66": {
                "line_count": 58,
                "word_count": 776,
                "char_count": 4646,
                "title": "The Harmless Poyoyon and Mole"
            },
            "67": {
                "line_count": 113,
                "word_count": 1313,
                "char_count": 7533,
                "title": "Sure-Win Golden Dragon's Sure-Win Formula"
            },
            "68": {
                "line_count": 65,
                "word_count": 855,
                "char_count": 4890,
                "title": "The Match Where The Stronger One Gets All the Attention"
            },
            "69": {
                "line_count": 96,
                "word_count": 1228,
                "char_count": 6951,
                "title": "Evil ** Kill ** Dragon!!"
            },
            "70": {
                "line_count": 68,
                "word_count": 921,
                "char_count": 5215,
                "title": "In Expectation of This Happening"
            },
            "71": {
                "line_count": 109,
                "word_count": 1157,
                "char_count": 6531,
                "title": "Beta's Job"
            },
            "72": {
                "line_count": 77,
                "word_count": 1242,
                "char_count": 6719,
                "title": "A Power in the Shadows Playing Under the Moonlight"
            },
            "73": {
                "line_count": 83,
                "word_count": 1300,
                "char_count": 7182,
                "title": "The Girl Who Dreams a Dream and the Boy Who Walks a Dream"
            },
            "74": {
                "line_count": 64,
                "word_count": 728,
                "char_count": 4217,
                "title": "The Single Ray of Light Shining Into the Darkness"
            },
            "75": {
                "line_count": 86,
                "word_count": 1016,
                "char_count": 5817,
                "title": "The Girls' Paths, and His Decision"
            },
            "76": {
                "line_count": 68,
                "word_count": 821,
                "char_count": 4560,
                "title": "The Basics of Human Relationsh.i.p.s Is Abandonment Play"
            },
            "77": {
                "line_count": 86,
                "word_count": 1340,
                "char_count": 7654,
                "title": "And Who Are You?"
            },
            "78": {
                "line_count": 128,
                "word_count": 1188,
                "char_count": 6526,
                "title": "What Always Ends up Happening from Stopping at the Last Instant"
            },
            "79": {
                "line_count": 109,
                "word_count": 1088,
                "char_count": 6254,
                "title": "I've Won! (Assured)"
            },
            "80": {
                "line_count": 76,
                "word_count": 1169,
                "char_count": 6439,
                "title": "Exactly Who Are You?"
            },
            "81": {
                "line_count": 94,
                "word_count": 1328,
                "char_count": 7364,
                "title": "Breakfast at the Special Seating NAO"
            },
            "82": {
                "line_count": 57,
                "word_count": 1113,
                "char_count": 6161,
                "title": "The Smelly Man is Part of the Plan"
            },
            "83": {
                "line_count": 128,
                "word_count": 1530,
                "char_count": 8534,
                "title": "From A Far Away Height..."
            },
            "84": {
                "line_count": 83,
                "word_count": 1057,
                "char_count": 6024,
                "title": "Final Duty"
            },
            "85": {
                "line_count": 107,
                "word_count": 1188,
                "char_count": 6597,
                "title": "Mysterious Masked Swordsman Slayer, At Your Service!!"
            },
            "86": {
                "line_count": 107,
                "word_count": 1195,
                "char_count": 6857,
                "title": "Summit of the Path of the Sword"
            },
            "87": {
                "line_count": 102,
                "word_count": 1126,
                "char_count": 6372,
                "title": "Your Real Enemy"
            },
            "88": {
                "line_count": 149,
                "word_count": 1528,
                "char_count": 8686,
                "title": "Ashes of a Dream"
            },
            "total": {
                "line_count": 2477,
                "word_count": 31445,
                "char_count": 176438,
                "title": "Volume 4"
            }
        },
        "5": {
            "89": {
                "line_count": 71,
                "word_count": 1204,
                "char_count": 6597,
                "title": "Being Gatekeeper A is Great!"
            },
            "90": {
                "line_count": 82,
                "word_count": 1062,
                "char_count": 5881,
                "title": "It's Already Completely Healed"
            },
            "91": {
                "line_count": 75,
                "word_count": 878,
                "char_count": 4659,
                "title": "What Belongs to Bandits Also Belongs to Me"
            },
            "92": {
                "line_count": 117,
                "word_count": 1571,
                "char_count": 8780,
                "title": "Two Loser (Dogs) and a Watchdog"
            },
            "93": {
                "line_count": 62,
                "word_count": 791,
                "char_count": 4218,
                "title": "Shockingly Huge Bargain Sale, Only in Outlaw City!!"
            },
            "94": {
                "line_count": 141,
                "word_count": 1727,
                "char_count": 9349,
                "title": "Stop Throbbing..."
            },
            "95": {
                "line_count": 78,
                "word_count": 943,
                "char_count": 5157,
                "title": "From Mob Escape to Mob Revenge"
            },
            "96": {
                "line_count": 63,
                "word_count": 1233,
                "char_count": 6955,
                "title": "For the Sake of This Day, I Have Prepared This... Hole!!"
            },
            "97": {
                "line_count": 68,
                "word_count": 905,
                "char_count": 5116,
                "title": "Rampage... The Streets are... Blood... Run..."
            },
            "98": {
                "line_count": 85,
                "word_count": 1543,
                "char_count": 8709,
                "title": "Tough Lady"
            },
            "99": {
                "line_count": 65,
                "word_count": 866,
                "char_count": 4964,
                "title": "The Three Currents"
            },
            "100": {
                "line_count": 106,
                "word_count": 1703,
                "char_count": 9380,
                "title": "War of Monsters"
            },
            "101": {
                "line_count": 112,
                "word_count": 1435,
                "char_count": 8023,
                "title": "The Rumored Shadow Garden"
            },
            "102": {
                "line_count": 81,
                "word_count": 1071,
                "char_count": 6076,
                "title": "Two Lasses"
            },
            "103": {
                "line_count": 98,
                "word_count": 1098,
                "char_count": 6197,
                "title": "What are you doi-?!"
            },
            "104": {
                "line_count": 88,
                "word_count": 1813,
                "char_count": 10285,
                "title": "Don't You Dare Steal My Role, Girl"
            },
            "105": {
                "line_count": 103,
                "word_count": 1550,
                "char_count": 8333,
                "title": "The Man Who Was Too Early"
            },
            "106": {
                "line_count": 128,
                "word_count": 1441,
                "char_count": 8252,
                "title": "What Do YOU Understand About This Pain?! (Blood Pressure)"
            },
            "107": {
                "line_count": 98,
                "word_count": 1195,
                "char_count": 6656,
                "title": "Her Duty"
            },
            "108": {
                "line_count": 80,
                "word_count": 1013,
                "char_count": 5793,
                "title": "Overwhelmingly Terrible at Explanations"
            },
            "109": {
                "line_count": 115,
                "word_count": 1463,
                "char_count": 8307,
                "title": "The Queen of Blood"
            },
            "110": {
                "line_count": 111,
                "word_count": 1324,
                "char_count": 7747,
                "title": "Her Master"
            },
            "111": {
                "line_count": 103,
                "word_count": 992,
                "char_count": 5630,
                "title": "Mission Complete"
            },
            "112": {
                "line_count": 80,
                "word_count": 1161,
                "char_count": 6412,
                "title": "There's No Helping It When the Left Hand Begins to Ache"
            },
            "total": {
                "line_count": 2210,
                "word_count": 29982,
                "char_count": 167476,
                "title": "Volume 5"
            }
        },
        "6": {
            "113": {
                "line_count": 82,
                "word_count": 1059,
                "char_count": 6240,
                "title": "Kyaaa! Not so rough!"
            },
            "114": {
                "line_count": 64,
                "word_count": 1147,
                "char_count": 6210,
                "title": "Super Elite Agent, Whose Name Is"
            },
            "115": {
                "line_count": 66,
                "word_count": 943,
                "char_count": 5343,
                "title": "The World Is Whispering To Me"
            },
            "116": {
                "line_count": 130,
                "word_count": 2461,
                "char_count": 14157,
                "title": "Do You Really Think So?"
            },
            "117": {
                "line_count": 100,
                "word_count": 1533,
                "char_count": 8257,
                "title": "The smell of wood."
            },
            "118": {
                "line_count": 77,
                "word_count": 656,
                "char_count": 3423,
                "title": "Golden retriever"
            },
            "119": {
                "line_count": 93,
                "word_count": 1555,
                "char_count": 8500,
                "title": "Ol, Its Ol!!"
            },
            "120": {
                "line_count": 57,
                "word_count": 950,
                "char_count": 5530,
                "title": "Blind Big Wolf"
            },
            "121": {
                "line_count": 161,
                "word_count": 1698,
                "char_count": 9900,
                "title": "Great Trading Alliance"
            },
            "122": {
                "line_count": 36,
                "word_count": 423,
                "char_count": 2570,
                "title": "The Malaise Of Mitsugoshi"
            },
            "123": {
                "line_count": 71,
                "word_count": 757,
                "char_count": 4074,
                "title": "Sample"
            },
            "124": {
                "line_count": 75,
                "word_count": 927,
                "char_count": 5256,
                "title": "The Power of a Super Elite Agent"
            },
            "125": {
                "line_count": 67,
                "word_count": 826,
                "char_count": 4829,
                "title": "The First To Notice The Change"
            },
            "126": {
                "line_count": 90,
                "word_count": 987,
                "char_count": 5666,
                "title": "Don't Get In The Way"
            },
            "127": {
                "line_count": 101,
                "word_count": 1188,
                "char_count": 6659,
                "title": "Black Jaguar"
            },
            "128": {
                "line_count": 85,
                "word_count": 1026,
                "char_count": 5892,
                "title": "The Supreme Code"
            },
            "129": {
                "line_count": 48,
                "word_count": 515,
                "char_count": 3103,
                "title": "It's All That Fool's Fault"
            },
            "130": {
                "line_count": 41,
                "word_count": 481,
                "char_count": 2761,
                "title": "Goodbye, John Smith"
            },
            "131": {
                "line_count": 127,
                "word_count": 1316,
                "char_count": 7469,
                "title": "His Back"
            },
            "132": {
                "line_count": 72,
                "word_count": 1187,
                "char_count": 6695,
                "title": "Finally, This Day Has Come"
            },
            "133": {
                "line_count": 90,
                "word_count": 1058,
                "char_count": 5911,
                "title": "Yukime and Gettan"
            },
            "134": {
                "line_count": 71,
                "word_count": 938,
                "char_count": 5323,
                "title": "Rumor of the counterfeit bills"
            },
            "135": {
                "line_count": 115,
                "word_count": 1118,
                "char_count": 6322,
                "title": "John Smith was their esteemed master."
            },
            "136": {
                "line_count": 61,
                "word_count": 569,
                "char_count": 3125,
                "title": "You made me angry... . ."
            },
            "137": {
                "line_count": 54,
                "word_count": 801,
                "char_count": 4154,
                "title": "The man who is burning with revenge"
            },
            "138": {
                "line_count": 64,
                "word_count": 782,
                "char_count": 4181,
                "title": "Those who lost their eyes"
            },
            "139": {
                "line_count": 97,
                "word_count": 1077,
                "char_count": 5870,
                "title": "Even if we talk, it will be a waste of time"
            },
            "140": {
                "line_count": 86,
                "word_count": 901,
                "char_count": 4996,
                "title": "Gettan......"
            },
            "141": {
                "line_count": 72,
                "word_count": 1015,
                "char_count": 5563,
                "title": "Everything is his"
            },
            "142": {
                "line_count": 112,
                "word_count": 1458,
                "char_count": 7821,
                "title": "The b.l.o.o.d.y Demon King who betrayed his dream"
            },
            "total": {
                "line_count": 2465,
                "word_count": 31352,
                "char_count": 175800,
                "title": "Volume 6"
            }
        },
        "7": {
            "143": {
                "line_count": 67,
                "word_count": 881,
                "char_count": 4781,
                "title": "That Ordinary Boy is Revealed to be\u2014!"
            },
            "145": {
                "line_count": 230,
                "word_count": 2859,
                "char_count": 15696,
                "title": "His name is Kageno Minoru [Cid's Past Life]"
            },
            "146": {
                "line_count": 40,
                "word_count": 481,
                "char_count": 2536,
                "title": "Mystery Man"
            },
            "147": {
                "line_count": 64,
                "word_count": 726,
                "char_count": 3759,
                "title": "Not Enough Calories At All"
            },
            "148": {
                "line_count": 58,
                "word_count": 929,
                "char_count": 4759,
                "title": "When it's All Over"
            },
            "149": {
                "line_count": 110,
                "word_count": 1185,
                "char_count": 6401,
                "title": "Code 0"
            },
            "150": {
                "line_count": 77,
                "word_count": 920,
                "char_count": 4829,
                "title": "Who Do You Think You're Dealing With?"
            },
            "151": {
                "line_count": 63,
                "word_count": 914,
                "char_count": 4713,
                "title": "The Princess's Mob Friend"
            },
            "152": {
                "line_count": 55,
                "word_count": 729,
                "char_count": 3876,
                "title": "Evil Encroaching"
            },
            "153": {
                "line_count": 104,
                "word_count": 883,
                "char_count": 4815,
                "title": "Looks like We're Done"
            },
            "154": {
                "line_count": 58,
                "word_count": 747,
                "char_count": 3929,
                "title": "Soul Searching"
            },
            "155": {
                "line_count": 68,
                "word_count": 659,
                "char_count": 3526,
                "title": "Sorry, Ya Lost Me."
            },
            "156": {
                "line_count": 76,
                "word_count": 936,
                "char_count": 5119,
                "title": "Action Spy"
            },
            "157": {
                "line_count": 55,
                "word_count": 651,
                "char_count": 3560,
                "title": "Cut Down Anything!"
            },
            "158": {
                "line_count": 76,
                "word_count": 946,
                "char_count": 5108,
                "title": "Beacon of Revolt"
            },
            "159": {
                "line_count": 88,
                "word_count": 894,
                "char_count": 5094,
                "title": "I Can Hear Him But From Where..."
            },
            "160": {
                "line_count": 68,
                "word_count": 867,
                "char_count": 4725,
                "title": "My Time to Shine?"
            },
            "161": {
                "line_count": 53,
                "word_count": 632,
                "char_count": 3503,
                "title": "The Ringleader is Here!?"
            },
            "162": {
                "line_count": 73,
                "word_count": 720,
                "char_count": 4077,
                "title": "Sigh, really didn't want to make a scene, man~"
            },
            "163": {
                "line_count": 52,
                "word_count": 613,
                "char_count": 3606,
                "title": "The Power of Diabolos"
            },
            "164": {
                "line_count": 73,
                "word_count": 707,
                "char_count": 3837,
                "title": "Where is He?"
            },
            "165": {
                "line_count": 101,
                "word_count": 1027,
                "char_count": 5986,
                "title": "Demon Lord Unleashed"
            },
            "166": {
                "line_count": 91,
                "word_count": 987,
                "char_count": 5477,
                "title": "Mordred"
            },
            "167": {
                "line_count": 43,
                "word_count": 570,
                "char_count": 3018,
                "title": "What Were Ideal Powers in Shadows in My Mind?\u00a0"
            },
            "total": {
                "line_count": 1843,
                "word_count": 21463,
                "char_count": 116730,
                "title": "Volume 7"
            }
        },
        "8": {
            "168": {
                "line_count": 63,
                "word_count": 1007,
                "char_count": 5466,
                "title": "In This Troop You Will Earn A Lot of Money"
            },
            "169": {
                "line_count": 100,
                "word_count": 1357,
                "char_count": 7471,
                "title": "The Dream Of Two Men"
            },
            "170": {
                "line_count": 66,
                "word_count": 1128,
                "char_count": 6180,
                "title": "Mob Character's Field Trip"
            },
            "171": {
                "line_count": 64,
                "word_count": 1013,
                "char_count": 5622,
                "title": "Three Ojisans"
            },
            "172": {
                "line_count": 67,
                "word_count": 929,
                "char_count": 5248,
                "title": "Vow of Black Rose"
            },
            "173": {
                "line_count": 54,
                "word_count": 878,
                "char_count": 5082,
                "title": "Don't Upstage Me"
            },
            "174": {
                "line_count": 97,
                "word_count": 1018,
                "char_count": 5733,
                "title": "Do Not Kick the Platform"
            },
            "175": {
                "line_count": 80,
                "word_count": 849,
                "char_count": 4824,
                "title": "Evil God\u30fbInstant Kill\u30fb\u3007\u3007\u3007 Sword"
            },
            "176": {
                "line_count": 62,
                "word_count": 961,
                "char_count": 5559,
                "title": "Died On the Spot"
            },
            "177": {
                "line_count": 70,
                "word_count": 764,
                "char_count": 4355,
                "title": "So-called Master"
            },
            "178": {
                "line_count": 47,
                "word_count": 399,
                "char_count": 2197,
                "title": "The End of Mob Character"
            },
            "179": {
                "line_count": 75,
                "word_count": 756,
                "char_count": 4228,
                "title": "A Small Part of the Abyss-like Plan"
            },
            "180": {
                "line_count": 54,
                "word_count": 776,
                "char_count": 4347,
                "title": "She's the Type of Person Who Always Exaggerates"
            },
            "181": {
                "line_count": 81,
                "word_count": 720,
                "char_count": 4021,
                "title": "The Other Side Connecting the Past, Present and Future"
            },
            "182": {
                "line_count": 34,
                "word_count": 419,
                "char_count": 2497,
                "title": "Infatuated with That Courage and Insight"
            },
            "183": {
                "line_count": 63,
                "word_count": 694,
                "char_count": 3802,
                "title": "We Are Friends After All!"
            },
            "184": {
                "line_count": 66,
                "word_count": 632,
                "char_count": 3896,
                "title": "If He Was Born Before A Thousand Years Ago"
            },
            "185": {
                "line_count": 56,
                "word_count": 705,
                "char_count": 3948,
                "title": "Terrible Interests"
            },
            "186": {
                "line_count": 70,
                "word_count": 786,
                "char_count": 4407,
                "title": "Two People with Social Phobia"
            },
            "187": {
                "line_count": 58,
                "word_count": 711,
                "char_count": 3873,
                "title": "Epsilon's Secret Recipe"
            },
            "188": {
                "line_count": 70,
                "word_count": 923,
                "char_count": 5307,
                "title": "Epsilon in Gorgeous Disguise"
            },
            "189": {
                "line_count": 61,
                "word_count": 700,
                "char_count": 3857,
                "title": "Take A Walk in the Forest"
            },
            "190": {
                "line_count": 56,
                "word_count": 681,
                "char_count": 3712,
                "title": "Everything Is Connected, All of Which Meets His Expectations"
            },
            "191": {
                "line_count": 61,
                "word_count": 753,
                "char_count": 4140,
                "title": "\u00a0Let Me Show You Perfect Magic Control"
            },
            "192": {
                "line_count": 63,
                "word_count": 791,
                "char_count": 4474,
                "title": "It's Not My Fault The Shot Went Awry"
            },
            "193": {
                "line_count": 77,
                "word_count": 980,
                "char_count": 5415,
                "title": "Great Sacrifice for World Peace and Science"
            },
            "194": {
                "line_count": 34,
                "word_count": 355,
                "char_count": 1984,
                "title": "The Secret One Wants to Hide the Most"
            },
            "195": {
                "line_count": 59,
                "word_count": 747,
                "char_count": 4485,
                "title": "A Natural Phenomenon of Unknown Cause or A Paranormal Phenomenon"
            },
            "196": {
                "line_count": 47,
                "word_count": 845,
                "char_count": 4709,
                "title": "Battle of Darkness"
            },
            "197": {
                "line_count": 95,
                "word_count": 936,
                "char_count": 5124,
                "title": "Forget to Close the Door"
            },
            "198": {
                "line_count": 65,
                "word_count": 786,
                "char_count": 4545,
                "title": "It's All The Americans' Fault"
            },
            "199": {
                "line_count": 52,
                "word_count": 602,
                "char_count": 3430,
                "title": "Mysterious Architect Eta Lloyd Wright"
            },
            "200": {
                "line_count": 68,
                "word_count": 747,
                "char_count": 4338,
                "title": "The Only Food Left Is DX"
            },
            "201": {
                "line_count": 81,
                "word_count": 1319,
                "char_count": 7536,
                "title": "Fraudulent Company"
            },
            "202": {
                "line_count": 78,
                "word_count": 761,
                "char_count": 4221,
                "title": "Seems Like Never Coming Back"
            },
            "total": {
                "line_count": 2294,
                "word_count": 28428,
                "char_count": 160033,
                "title": "Volume 8"
            }
        }
    },
    "apo": {
        "part_count": 1,
        "line_count": 793,
        "word_count": 6645,
        "char_count": 38195,
        "characters": {
            "Bandit Boss": 6,
            "Bandit A": 1,
            "Bandits": 2,
            "Cid Kagenou (Cid)": 35,
            "Bandit B": 2,
            "Alpha": 235,
            "Nanigashi (??? (Nanigashi))": 2,
            "Nanigashi": 5,
            "Mysterious Voice": 2,
            "Delta": 82,
            "Eta": 29,
            "Epsilon": 47,
            "Beta": 44,
            "Gamma": 41,
            "Zeta": 29,
            "Beta (Everyone (Beta))": 1,
            "Gamma (Everyone (Gamma))": 1,
            "Delta (Everyone (Delta))": 1,
            "Epsilon (Everyone (Epsilon))": 1,
            "Zeta (Everyone (Zeta))": 1,
            "Eta (Everyone (Eta))": 1,
            "Duet (Beta Look-alike)": 3,
            "Pente (Epsilon Look-alike)": 2,
            "Aurora (Massive Mound of Magic)": 14,
            "Olivier (Alpha Look-alike)": 7,
            "Lili": 17,
            "Freya (??? (Freya))": 1,
            "Freya": 21,
            "Yukime": 7,
            "Claire Kagenou (Claire)": 11,
            "Victoria (No. 559)": 7,
            "Rose Oriana (Rose)": 2,
            "Alexia Midgar (Alexia)": 24,
            "None": 13,
            "Duet": 21,
            "Olivier": 45,
            "Alpha (None (Alpha))": 4,
            "Beta (Beta & Epsilon (Beta))": 1,
            "Epsilon (Beta & Epsilon (Epsilon))": 1,
            "Pente": 20,
            "Mysterious Man A": 1,
            "Mysterious Man B": 1,
            "Mysterious Man C": 1,
            "Mysterious Man D": 1
        },
        "parts": {
            "p1": {
                "chapter_count": 1,
                "line_count": 793,
                "word_count": 6645,
                "char_count": 38195,
                "characters": {
                    "Bandit Boss": 6,
                    "Bandit A": 1,
                    "Bandits": 2,
                    "Cid Kagenou (Cid)": 35,
                    "Bandit B": 2,
                    "Alpha": 235,
                    "Nanigashi (??? (Nanigashi))": 2,
                    "Nanigashi": 5,
                    "Mysterious Voice": 2,
                    "Delta": 82,
                    "Eta": 29,
                    "Epsilon": 47,
                    "Beta": 44,
                    "Gamma": 41,
                    "Zeta": 29,
                    "Beta (Everyone (Beta))": 1,
                    "Gamma (Everyone (Gamma))": 1,
                    "Delta (Everyone (Delta))": 1,
                    "Epsilon (Everyone (Epsilon))": 1,
                    "Zeta (Everyone (Zeta))": 1,
                    "Eta (Everyone (Eta))": 1,
                    "Duet (Beta Look-alike)": 3,
                    "Pente (Epsilon Look-alike)": 2,
                    "Aurora (Massive Mound of Magic)": 14,
                    "Olivier (Alpha Look-alike)": 7,
                    "Lili": 17,
                    "Freya (??? (Freya))": 1,
                    "Freya": 21,
                    "Yukime": 7,
                    "Claire Kagenou (Claire)": 11,
                    "Victoria (No. 559)": 7,
                    "Rose Oriana (Rose)": 2,
                    "Alexia Midgar (Alexia)": 24,
                    "None": 13,
                    "Duet": 21,
                    "Olivier": 45,
                    "Alpha (None (Alpha))": 4,
                    "Beta (Beta & Epsilon (Beta))": 1,
                    "Epsilon (Beta & Epsilon (Epsilon))": 1,
                    "Pente": 20,
                    "Mysterious Man A": 1,
                    "Mysterious Man B": 1,
                    "Mysterious Man C": 1,
                    "Mysterious Man D": 1
                },
                "chapters": {
                    "c1-1": {
                        "episode_count": 14,
                        "line_count": 793,
                        "word_count": 6645,
                        "char_count": 38195,
                        "characters": {
                            "Bandit Boss": 6,
                            "Bandit A": 1,
                            "Bandits": 2,
                            "Cid Kagenou (Cid)": 35,
                            "Bandit B": 2,
                            "Alpha": 235,
                            "Nanigashi (??? (Nanigashi))": 2,
                            "Nanigashi": 5,
                            "Mysterious Voice": 2,
                            "Delta": 82,
                            "Eta": 29,
                            "Epsilon": 47,
                            "Beta": 44,
                            "Gamma": 41,
                            "Zeta": 29,
                            "Beta (Everyone (Beta))": 1,
                            "Gamma (Everyone (Gamma))": 1,
                            "Delta (Everyone (Delta))": 1,
                            "Epsilon (Everyone (Epsilon))": 1,
                            "Zeta (Everyone (Zeta))": 1,
                            "Eta (Everyone (Eta))": 1,
                            "Duet (Beta Look-alike)": 3,
                            "Pente (Epsilon Look-alike)": 2,
                            "Aurora (Massive Mound of Magic)": 14,
                            "Olivier (Alpha Look-alike)": 7,
                            "Lili": 17,
                            "Freya (??? (Freya))": 1,
                            "Freya": 21,
                            "Yukime": 7,
                            "Claire Kagenou (Claire)": 11,
                            "Victoria (No. 559)": 7,
                            "Rose Oriana (Rose)": 2,
                            "Alexia Midgar (Alexia)": 24,
                            "None": 13,
                            "Duet": 21,
                            "Olivier": 45,
                            "Alpha (None (Alpha))": 4,
                            "Beta (Beta & Epsilon (Beta))": 1,
                            "Epsilon (Beta & Epsilon (Epsilon))": 1,
                            "Pente": 20,
                            "Mysterious Man A": 1,
                            "Mysterious Man B": 1,
                            "Mysterious Man C": 1,
                            "Mysterious Man D": 1
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 76,
                                "word_count": 767,
                                "char_count": 4227,
                                "characters": {
                                    "Bandit Boss": 6,
                                    "Bandit A": 1,
                                    "Bandits": 2,
                                    "Cid Kagenou (Cid)": 33,
                                    "Bandit B": 2,
                                    "Alpha": 23,
                                    "Nanigashi (??? (Nanigashi))": 2,
                                    "Nanigashi": 5,
                                    "Mysterious Voice": 2
                                }
                            },
                            "e2": {
                                "line_count": 54,
                                "word_count": 433,
                                "char_count": 2495,
                                "characters": {
                                    "Alpha": 10,
                                    "Delta": 3,
                                    "Eta": 1,
                                    "Epsilon": 1,
                                    "Beta": 1,
                                    "Gamma": 1,
                                    "Zeta": 2,
                                    "Beta (Everyone (Beta))": 1,
                                    "Gamma (Everyone (Gamma))": 1,
                                    "Delta (Everyone (Delta))": 1,
                                    "Epsilon (Everyone (Epsilon))": 1,
                                    "Zeta (Everyone (Zeta))": 1,
                                    "Eta (Everyone (Eta))": 1,
                                    "Duet (Beta Look-alike)": 3,
                                    "Pente (Epsilon Look-alike)": 1,
                                    "Aurora (Massive Mound of Magic)": 8,
                                    "Olivier (Alpha Look-alike)": 4,
                                    "Lili": 4,
                                    "Freya (??? (Freya))": 1,
                                    "Freya": 3,
                                    "Yukime": 1,
                                    "Claire Kagenou (Claire)": 3,
                                    "Victoria (No. 559)": 1,
                                    "Rose Oriana (Rose)": 1,
                                    "Alexia Midgar (Alexia)": 2,
                                    "Cid Kagenou (Cid)": 2
                                }
                            },
                            "e3-1": {
                                "line_count": 77,
                                "word_count": 741,
                                "char_count": 4194,
                                "characters": {
                                    "None": 3,
                                    "Zeta": 3,
                                    "Eta": 4,
                                    "Alpha": 21,
                                    "Olivier (Alpha Look-alike)": 3,
                                    "Beta": 2,
                                    "Delta": 6,
                                    "Epsilon": 3,
                                    "Gamma": 3,
                                    "Aurora (Massive Mound of Magic)": 6,
                                    "Freya": 7,
                                    "Yukime": 5,
                                    "Victoria (No. 559)": 5,
                                    "Pente (Epsilon Look-alike)": 1,
                                    "Lili": 3,
                                    "Duet": 1,
                                    "Olivier": 1
                                }
                            },
                            "e3-2": {
                                "line_count": 43,
                                "word_count": 315,
                                "char_count": 1795,
                                "characters": {
                                    "Delta": 7,
                                    "Alpha": 13,
                                    "Epsilon": 2,
                                    "Gamma": 2,
                                    "Zeta": 4,
                                    "Eta": 1,
                                    "Freya": 4,
                                    "Olivier": 3,
                                    "Beta": 1,
                                    "Lili": 5,
                                    "None": 1
                                }
                            },
                            "e4-1": {
                                "line_count": 49,
                                "word_count": 430,
                                "char_count": 2499,
                                "characters": {
                                    "Alpha": 20,
                                    "Gamma": 5,
                                    "Epsilon": 2,
                                    "Delta": 9,
                                    "Beta": 2,
                                    "Zeta": 4,
                                    "Eta": 1,
                                    "Lili": 1,
                                    "Freya": 2,
                                    "Olivier": 1,
                                    "Duet": 1,
                                    "Alpha (None (Alpha))": 2
                                }
                            },
                            "e5-1": {
                                "line_count": 88,
                                "word_count": 946,
                                "char_count": 5416,
                                "characters": {
                                    "Alexia Midgar (Alexia)": 12,
                                    "Alpha": 35,
                                    "Olivier": 6,
                                    "Beta": 9,
                                    "Epsilon": 9,
                                    "Beta (Beta & Epsilon (Beta))": 1,
                                    "Epsilon (Beta & Epsilon (Epsilon))": 1,
                                    "Pente": 3,
                                    "Duet": 4,
                                    "Eta": 9
                                }
                            },
                            "e5-2": {
                                "line_count": 30,
                                "word_count": 175,
                                "char_count": 1102,
                                "characters": {
                                    "Alpha": 20,
                                    "Beta": 1,
                                    "Delta": 7,
                                    "None": 2
                                }
                            },
                            "e6": {
                                "line_count": 49,
                                "word_count": 356,
                                "char_count": 1943,
                                "characters": {
                                    "Olivier": 7,
                                    "Alpha": 3,
                                    "Alexia Midgar (Alexia)": 2,
                                    "Duet": 8,
                                    "Beta": 8,
                                    "Pente": 7,
                                    "Epsilon": 12,
                                    "Eta": 1,
                                    "Delta": 1
                                }
                            },
                            "e7": {
                                "line_count": 38,
                                "word_count": 203,
                                "char_count": 1245,
                                "characters": {
                                    "Alexia Midgar (Alexia)": 2,
                                    "Beta": 3,
                                    "Delta": 13,
                                    "Duet": 1,
                                    "Pente": 2,
                                    "Olivier": 7,
                                    "Eta": 1,
                                    "Epsilon": 1,
                                    "Alpha": 7,
                                    "None": 2
                                }
                            },
                            "e8-1": {
                                "line_count": 25,
                                "word_count": 197,
                                "char_count": 1316,
                                "characters": {
                                    "Alpha": 14,
                                    "Delta": 8,
                                    "Olivier": 2,
                                    "None": 1
                                }
                            },
                            "e3-3": {
                                "line_count": 37,
                                "word_count": 275,
                                "char_count": 1603,
                                "characters": {
                                    "Delta": 8,
                                    "Alpha": 7,
                                    "Epsilon": 3,
                                    "Gamma": 4,
                                    "Zeta": 4,
                                    "Eta": 1,
                                    "Freya": 2,
                                    "Olivier": 5,
                                    "Beta": 1,
                                    "Lili": 1,
                                    "Alpha (None (Alpha))": 2
                                }
                            },
                            "e4-2": {
                                "line_count": 156,
                                "word_count": 1282,
                                "char_count": 7250,
                                "characters": {
                                    "Alpha": 41,
                                    "Gamma": 18,
                                    "Epsilon": 9,
                                    "Beta": 12,
                                    "Delta": 12,
                                    "Zeta": 9,
                                    "Olivier": 11,
                                    "Freya": 3,
                                    "Lili": 3,
                                    "Pente": 8,
                                    "Duet": 6,
                                    "None": 2,
                                    "Eta": 7,
                                    "Alexia Midgar (Alexia)": 6,
                                    "Claire Kagenou (Claire)": 6,
                                    "Rose Oriana (Rose)": 1,
                                    "Victoria (No. 559)": 1,
                                    "Yukime": 1
                                }
                            },
                            "e5-3": {
                                "line_count": 55,
                                "word_count": 490,
                                "char_count": 2851,
                                "characters": {
                                    "Beta": 4,
                                    "Alpha": 20,
                                    "Eta": 3,
                                    "Epsilon": 5,
                                    "Claire Kagenou (Claire)": 2,
                                    "Zeta": 3,
                                    "Delta": 6,
                                    "Gamma": 8,
                                    "Mysterious Man A": 1,
                                    "Mysterious Man B": 1,
                                    "Mysterious Man C": 1,
                                    "Mysterious Man D": 1
                                }
                            },
                            "e8-2": {
                                "line_count": 7,
                                "word_count": 35,
                                "char_count": 259,
                                "characters": {
                                    "Olivier": 2,
                                    "Delta": 2,
                                    "Alpha": 1,
                                    "None": 2
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "es": {
        "stories": 22,
        "line_count": 9707,
        "word_count": 109081,
        "char_count": 606479,
        "characters": {
            "Alexia Midgar (Alexia)": 489,
            "Committee Member": 3,
            "Sherry Barnett (Sherry)": 99,
            "Committee Person": 5,
            "Po Tato (Po)": 19,
            "Skel Etal (Skel)": 36,
            "Cid Kagenou (Cid)": 1215,
            "None": 527,
            "Alexia Midgar (????? (Alexia Midgar))": 1,
            "Rose Oriana (Rose)": 141,
            "Girl Cmte. Member A": 2,
            "Girl Cmte. Member B": 2,
            "Boy Cmte. Member A": 1,
            "Boy Cmte. Member B": 1,
            "Committee Members": 1,
            "Cake Shop Assistant": 6,
            "Wounded Merchant": 6,
            "Monster": 15,
            "Boss Monster": 2,
            "Sherry Barnett (Shelly and Alexia (Sherry))": 1,
            "Alexia Midgar (Shelly and Alexia (Alexia))": 1,
            "Gamma": 304,
            "Eta": 471,
            "Zeta": 790,
            "Alpha": 1162,
            "Delta": 499,
            "Beta": 599,
            "Nu": 199,
            "Rabbit T-thrope": 14,
            "Fox T-thrope": 1,
            "Raccoon T-thrope": 1,
            "Dog T-thrope Priest": 65,
            "Participant A": 2,
            "Participant B": 2,
            "Participant C": 1,
            "White Horse T-thrope": 6,
            "Red Horse T-thrope": 8,
            "Tiger T-thrope": 5,
            "McKen Ro": 2,
            "Bearded T-thrope": 1,
            "Pigtailed T-thrope": 1,
            "T-thrope Opponent": 3,
            "T-thrope Spectator": 1,
            "Shishiodoshi (Shishi(?))": 1,
            "Shishiodoshi": 9,
            "T-thrope Spectators": 4,
            "Epsilon": 506,
            "Alpha (Everyone (Alpha))": 4,
            "Beta (Everyone (Beta))": 4,
            "Gamma (Everyone (Gamma))": 4,
            "Delta (Everyone (Delta))": 4,
            "Epsilon (Everyone (Epsilon))": 4,
            "Zeta (Everyone (Zeta))": 4,
            "Eta (Everyone (Eta))": 4,
            "Beta (None (Beta))": 3,
            "Cid Kagenou (None (Cid Kagenou))": 5,
            "Beta (Beta & Epsilon (Beta))": 16,
            "Epsilon (Beta & Epsilon (Epsilon))": 16,
            "Mysterious Man A": 3,
            "Mysterious Man B": 6,
            "Mysterious Man C": 3,
            "Mysterious Man D": 2,
            "Attendees": 2,
            "Rogue B": 3,
            "Rogue A": 3,
            "Rogue Leader": 11,
            "Spectator Woman": 2,
            "Rose Oriana (No.666)": 137,
            "Lambda": 227,
            "Cid Kagenou (??? (Stylish Bandit Slayer))": 1,
            "Cid Kagenou (Shadow)": 62,
            "Cid Kagenou (??? (Cid Kagenou))": 4,
            "Teacher": 12,
            "Classmate": 2,
            "Cid Kagenou (??? (Nuru))": 7,
            "Cid Kagenou (Nuru)": 160,
            "Female Student": 15,
            "Cid Kagenou (??? (Minoru Kageno))": 2,
            "Shop Staff": 9,
            "Evil Spirit": 1,
            "Alpha (Alpha & Zeta (Alpha))": 2,
            "Zeta (Alpha & Zeta (Zeta))": 2,
            "Margrave": 12,
            "Customer (??? (Customer))": 1,
            "Customer": 4,
            "Staff": 18,
            "King (??? (King))": 1,
            "King": 39,
            "Alexia Midgar (??? (Alexia Midgar))": 2,
            "Dealer": 33,
            "Joker (??? (Joker))": 1,
            "Joker": 15,
            "Knight": 6,
            "Boar": 2,
            "Alpha (Alpha & Beta (Alpha))": 1,
            "Beta (Alpha & Beta (Beta))": 1,
            "Zeta (??? (Zeta))": 2,
            "Nidhogg": 10,
            "Eta (Zeta & Eta (Eta))": 1,
            "Zeta (Zeta & Eta (Zeta))": 1,
            "Passerby A": 2,
            "Passerby B": 2,
            "Passerby C": 1,
            "Passerby D": 1,
            "Beta (??? (Beta))": 3,
            "Epsilon (??? (Epsilon))": 2,
            "Delta (??? (Delta))": 5,
            "Claire Kagenou (Claire)": 324,
            "Claire Kagenou (??? (Claire Kagenou))": 4,
            "Alexia Midgar (Alexia & Claire (Alexia))": 1,
            "Claire Kagenou (Alexia & Claire (Claire))": 1,
            "Rose Oriana (No. 666)": 118,
            "Gamma (??? (Gamma))": 1,
            "Ghoul": 2,
            "Branch Manager": 40,
            "Girl A": 9,
            "Boy A": 19,
            "Girl B": 3,
            "Boy B": 13,
            "Boy C": 2,
            "Mr. Vendy": 10,
            "Skewer Stall Owner": 7,
            "Quiche Stall Owner": 1,
            "Soup Stall Owner": 1,
            "Mother": 3,
            "Children": 1,
            "Eta (??? (Eta))": 5,
            "Goldy Gilded": 55,
            "Knight A": 2,
            "Iris Midgar (Iris)": 158,
            "Beatrix": 98,
            "Announcer": 40,
            "Audience": 1,
            "Spectator A": 6,
            "Spectator B": 6,
            "Girl": 2,
            "Boys": 1,
            "Merry Whip": 6,
            "Dog T.thrope Priest": 50,
            "Therianthrope A": 6,
            "Therianthrope B": 5,
            "Bearded Participant": 2,
            "Disciple": 4,
            "Junior": 8,
            "Noblewoman": 12,
            "Aurora": 100,
            "Maximilian": 27,
            "Aurora (??? (Aurora))": 2,
            "Omega": 43,
            "Chi": 49,
            "Chi (Chi & Omega (Chi))": 3,
            "Omega (Chi & Omega (Omega))": 3,
            "OiKatzo": 58,
            "Arthur Pencilgon": 71,
            "Sunraku": 70,
            "Wethermon (??? (Wethermon))": 3,
            "Alpha (Seven Shadows (Alpha))": 1,
            "Beta (Seven Shadows (Beta))": 1,
            "Gamma (Seven Shadows (Gamma))": 1,
            "Delta (Seven Shadows (Delta))": 1,
            "Epsilon (Seven Shadows (Epsilon))": 1,
            "Zeta (Seven Shadows (Zeta))": 1,
            "Eta (Seven Shadows (Eta))": 1,
            "Sunraku (??? (Sunraku))": 1,
            "Wethermon": 9,
            "Sunraku (Sunraku & Shadow (Sunraku))": 1,
            "Cid Kagenou (Sunraku & Shadow (Shadow))": 1,
            "Cid Kagenou (Cid & Sunraku (Cid))": 1,
            "Sunraku (Cid & Sunraku (Sunraku))": 1,
            "Broadcast": 1,
            "Cid Kagenou (Minoru Kageno)": 7,
            "Skel Etal (Skel & Po (Skel))": 1,
            "Po Tato (Skel & Po (Po))": 1,
            "Beta (??? (Natsume))": 1,
            "Beta (Natsume)": 13,
            "Male Student A": 2,
            "Female Student A": 2,
            "Elisabeth": 92,
            "Deceased Man": 2,
            "Deceased Elderly": 5,
            "Deceased Child": 5,
            "Deceased Woman": 13,
            "Cid Kagenou (3 People (Cid))": 1,
            "Aurora (3 People (Aurora))": 1,
            "Elisabeth (3 People (Elisabeth))": 1
        },
        "parts": {
            "hr": {
                "line_count": 439,
                "word_count": 4907,
                "char_count": 26676,
                "characters": {
                    "Alexia Midgar (Alexia)": 176,
                    "Committee Member": 3,
                    "Sherry Barnett (Sherry)": 99,
                    "Committee Person": 1,
                    "Po Tato (Po)": 8,
                    "Skel Etal (Skel)": 6,
                    "Cid Kagenou (Cid)": 60,
                    "None": 22,
                    "Alexia Midgar (????? (Alexia Midgar))": 1,
                    "Rose Oriana (Rose)": 34,
                    "Girl Cmte. Member A": 2,
                    "Girl Cmte. Member B": 2,
                    "Boy Cmte. Member A": 1,
                    "Boy Cmte. Member B": 1,
                    "Committee Members": 1,
                    "Cake Shop Assistant": 6,
                    "Wounded Merchant": 6,
                    "Monster": 5,
                    "Boss Monster": 2,
                    "Sherry Barnett (Shelly and Alexia (Sherry))": 1,
                    "Alexia Midgar (Shelly and Alexia (Alexia))": 1,
                    "Gamma": 2
                },
                "episodes": {
                    "e1": {
                        "word_count": 645,
                        "char_count": 3498,
                        "line_count": 50,
                        "characters": {
                            "Alexia Midgar (Alexia)": 32,
                            "Committee Member": 3,
                            "Sherry Barnett (Sherry)": 14,
                            "Committee Person": 1
                        }
                    },
                    "e2": {
                        "word_count": 818,
                        "char_count": 4479,
                        "line_count": 72,
                        "characters": {
                            "Po Tato (Po)": 8,
                            "Skel Etal (Skel)": 6,
                            "Cid Kagenou (Cid)": 33,
                            "Alexia Midgar (Alexia)": 21,
                            "None": 4
                        }
                    },
                    "e3": {
                        "word_count": 897,
                        "char_count": 4915,
                        "line_count": 76,
                        "characters": {
                            "Cid Kagenou (Cid)": 17,
                            "Alexia Midgar (????? (Alexia Midgar))": 1,
                            "Alexia Midgar (Alexia)": 22,
                            "Rose Oriana (Rose)": 6,
                            "Sherry Barnett (Sherry)": 22,
                            "None": 2,
                            "Girl Cmte. Member A": 2,
                            "Girl Cmte. Member B": 2,
                            "Boy Cmte. Member A": 1,
                            "Boy Cmte. Member B": 1
                        }
                    },
                    "e4": {
                        "word_count": 640,
                        "char_count": 3463,
                        "line_count": 53,
                        "characters": {
                            "Sherry Barnett (Sherry)": 10,
                            "Alexia Midgar (Alexia)": 22,
                            "Rose Oriana (Rose)": 20,
                            "Committee Members": 1
                        }
                    },
                    "e5": {
                        "word_count": 613,
                        "char_count": 3349,
                        "line_count": 55,
                        "characters": {
                            "Sherry Barnett (Sherry)": 19,
                            "Alexia Midgar (Alexia)": 24,
                            "Cake Shop Assistant": 6,
                            "None": 4,
                            "Rose Oriana (Rose)": 1,
                            "Wounded Merchant": 1
                        }
                    },
                    "e6": {
                        "word_count": 618,
                        "char_count": 3421,
                        "line_count": 68,
                        "characters": {
                            "Wounded Merchant": 5,
                            "Alexia Midgar (Alexia)": 34,
                            "Sherry Barnett (Sherry)": 19,
                            "None": 4,
                            "Monster": 5,
                            "Boss Monster": 1
                        }
                    },
                    "e7": {
                        "word_count": 676,
                        "char_count": 3551,
                        "line_count": 65,
                        "characters": {
                            "Boss Monster": 1,
                            "Alexia Midgar (Alexia)": 21,
                            "Sherry Barnett (Sherry)": 15,
                            "Rose Oriana (Rose)": 7,
                            "None": 8,
                            "Cid Kagenou (Cid)": 10,
                            "Sherry Barnett (Shelly and Alexia (Sherry))": 1,
                            "Alexia Midgar (Shelly and Alexia (Alexia))": 1,
                            "Gamma": 2
                        }
                    }
                }
            },
            "ftgi": {
                "line_count": 502,
                "word_count": 5728,
                "char_count": 31156,
                "characters": {
                    "Cid Kagenou (Cid)": 35,
                    "Eta": 6,
                    "Zeta": 9,
                    "Alpha": 190,
                    "Delta": 123,
                    "Beta": 3,
                    "Gamma": 2,
                    "Nu": 1,
                    "Rabbit T-thrope": 14,
                    "Fox T-thrope": 1,
                    "Raccoon T-thrope": 1,
                    "Dog T-thrope Priest": 65,
                    "None": 3,
                    "Participant A": 2,
                    "Participant B": 2,
                    "Participant C": 1,
                    "White Horse T-thrope": 6,
                    "Red Horse T-thrope": 8,
                    "Tiger T-thrope": 5,
                    "McKen Ro": 2,
                    "Bearded T-thrope": 1,
                    "Pigtailed T-thrope": 1,
                    "T-thrope Opponent": 3,
                    "T-thrope Spectator": 1,
                    "Shishiodoshi (Shishi(?))": 1,
                    "Shishiodoshi": 9,
                    "T-thrope Spectators": 4,
                    "Epsilon": 2,
                    "Alpha (Everyone (Alpha))": 1,
                    "Beta (Everyone (Beta))": 1,
                    "Gamma (Everyone (Gamma))": 1,
                    "Delta (Everyone (Delta))": 1,
                    "Epsilon (Everyone (Epsilon))": 1,
                    "Zeta (Everyone (Zeta))": 1,
                    "Eta (Everyone (Eta))": 1
                },
                "episodes": {
                    "e1": {
                        "word_count": 810,
                        "char_count": 4432,
                        "line_count": 67,
                        "characters": {
                            "Cid Kagenou (Cid)": 15,
                            "Eta": 5,
                            "Zeta": 5,
                            "Alpha": 26,
                            "Delta": 13,
                            "Beta": 1,
                            "Gamma": 1,
                            "Nu": 1
                        }
                    },
                    "e2": {
                        "word_count": 664,
                        "char_count": 3758,
                        "line_count": 58,
                        "characters": {
                            "Delta": 18,
                            "Alpha": 27,
                            "Rabbit T-thrope": 11,
                            "Fox T-thrope": 1,
                            "Raccoon T-thrope": 1
                        }
                    },
                    "e3": {
                        "word_count": 767,
                        "char_count": 4222,
                        "line_count": 83,
                        "characters": {
                            "Dog T-thrope Priest": 11,
                            "Alpha": 24,
                            "Delta": 28,
                            "None": 1,
                            "Participant A": 2,
                            "Participant B": 2,
                            "Participant C": 1,
                            "White Horse T-thrope": 6,
                            "Red Horse T-thrope": 8
                        }
                    },
                    "e4": {
                        "word_count": 963,
                        "char_count": 5130,
                        "line_count": 81,
                        "characters": {
                            "Dog T-thrope Priest": 18,
                            "None": 2,
                            "Delta": 21,
                            "Alpha": 35,
                            "Tiger T-thrope": 5
                        }
                    },
                    "e5": {
                        "word_count": 903,
                        "char_count": 4995,
                        "line_count": 72,
                        "characters": {
                            "Dog T-thrope Priest": 25,
                            "Alpha": 26,
                            "Delta": 14,
                            "McKen Ro": 2,
                            "Bearded T-thrope": 1,
                            "Pigtailed T-thrope": 1,
                            "T-thrope Opponent": 3
                        }
                    },
                    "e6": {
                        "word_count": 705,
                        "char_count": 3796,
                        "line_count": 64,
                        "characters": {
                            "Dog T-thrope Priest": 6,
                            "Alpha": 26,
                            "Delta": 15,
                            "T-thrope Spectator": 1,
                            "Rabbit T-thrope": 3,
                            "Shishiodoshi (Shishi(?))": 1,
                            "Shishiodoshi": 8,
                            "T-thrope Spectators": 4
                        }
                    },
                    "e7": {
                        "word_count": 916,
                        "char_count": 4823,
                        "line_count": 77,
                        "characters": {
                            "Delta": 14,
                            "Shishiodoshi": 1,
                            "Dog T-thrope Priest": 5,
                            "Alpha": 26,
                            "Cid Kagenou (Cid)": 20,
                            "Eta": 1,
                            "Gamma": 1,
                            "Zeta": 4,
                            "Beta": 2,
                            "Epsilon": 2,
                            "Alpha (Everyone (Alpha))": 1,
                            "Beta (Everyone (Beta))": 1,
                            "Gamma (Everyone (Gamma))": 1,
                            "Delta (Everyone (Delta))": 1,
                            "Epsilon (Everyone (Epsilon))": 1,
                            "Zeta (Everyone (Zeta))": 1,
                            "Eta (Everyone (Eta))": 1
                        }
                    }
                }
            },
            "nvacs": {
                "line_count": 447,
                "word_count": 5273,
                "char_count": 29545,
                "characters": {
                    "None": 8,
                    "Beta (None (Beta))": 3,
                    "Beta": 116,
                    "Cid Kagenou (Cid)": 47,
                    "Cid Kagenou (None (Cid Kagenou))": 2,
                    "Epsilon": 112,
                    "Gamma": 96,
                    "Beta (Beta & Epsilon (Beta))": 5,
                    "Epsilon (Beta & Epsilon (Epsilon))": 5,
                    "Mysterious Man A": 3,
                    "Mysterious Man B": 6,
                    "Mysterious Man C": 3,
                    "Mysterious Man D": 2,
                    "Attendees": 2,
                    "Rose Oriana (Rose)": 10,
                    "Rogue B": 3,
                    "Rogue A": 3,
                    "Rogue Leader": 11,
                    "Spectator Woman": 2,
                    "Alpha": 6,
                    "Delta": 3,
                    "Zeta": 2,
                    "Eta": 2
                },
                "episodes": {
                    "e1": {
                        "word_count": 802,
                        "char_count": 4486,
                        "line_count": 58,
                        "characters": {
                            "None": 3,
                            "Beta (None (Beta))": 3,
                            "Beta": 20,
                            "Cid Kagenou (Cid)": 15,
                            "Cid Kagenou (None (Cid Kagenou))": 2,
                            "Epsilon": 8,
                            "Gamma": 7
                        }
                    },
                    "e2": {
                        "word_count": 595,
                        "char_count": 3354,
                        "line_count": 54,
                        "characters": {
                            "Epsilon": 18,
                            "Beta": 16,
                            "Gamma": 20
                        }
                    },
                    "e3": {
                        "word_count": 684,
                        "char_count": 3912,
                        "line_count": 64,
                        "characters": {
                            "Beta": 37,
                            "Beta (Beta & Epsilon (Beta))": 4,
                            "Epsilon (Beta & Epsilon (Epsilon))": 4,
                            "Epsilon": 22,
                            "None": 1
                        }
                    },
                    "e4": {
                        "word_count": 690,
                        "char_count": 3788,
                        "line_count": 53,
                        "characters": {
                            "Epsilon": 22,
                            "Gamma": 16,
                            "None": 1,
                            "Mysterious Man A": 3,
                            "Mysterious Man B": 6,
                            "Mysterious Man C": 3,
                            "Mysterious Man D": 2
                        }
                    },
                    "e5": {
                        "word_count": 848,
                        "char_count": 4852,
                        "line_count": 67,
                        "characters": {
                            "None": 1,
                            "Gamma": 20,
                            "Beta": 19,
                            "Attendees": 2,
                            "Epsilon": 16,
                            "Rose Oriana (Rose)": 2,
                            "Cid Kagenou (Cid)": 7
                        }
                    },
                    "e6": {
                        "word_count": 822,
                        "char_count": 4566,
                        "line_count": 79,
                        "characters": {
                            "Gamma": 19,
                            "Beta": 14,
                            "Epsilon": 15,
                            "Rose Oriana (Rose)": 6,
                            "Cid Kagenou (Cid)": 14,
                            "Rogue B": 3,
                            "Rogue A": 3,
                            "Rogue Leader": 3,
                            "None": 2
                        }
                    },
                    "e7": {
                        "word_count": 832,
                        "char_count": 4587,
                        "line_count": 72,
                        "characters": {
                            "Rogue Leader": 8,
                            "Epsilon": 11,
                            "Beta": 10,
                            "Gamma": 14,
                            "Rose Oriana (Rose)": 2,
                            "Spectator Woman": 2,
                            "Cid Kagenou (Cid)": 11,
                            "Alpha": 6,
                            "Beta (Beta & Epsilon (Beta))": 1,
                            "Epsilon (Beta & Epsilon (Epsilon))": 1,
                            "Delta": 3,
                            "Zeta": 2,
                            "Eta": 2
                        }
                    }
                }
            },
            "rog": {
                "line_count": 309,
                "word_count": 3414,
                "char_count": 18558,
                "characters": {
                    "None": 31,
                    "Rose Oriana (No.666)": 137,
                    "Lambda": 83,
                    "Rose Oriana (Rose)": 11,
                    "Alpha": 15,
                    "Cid Kagenou (??? (Stylish Bandit Slayer))": 1,
                    "Cid Kagenou (Shadow)": 1,
                    "Nu": 27,
                    "Cid Kagenou (??? (Cid Kagenou))": 3
                },
                "episodes": {
                    "e1": {
                        "word_count": 452,
                        "char_count": 2444,
                        "line_count": 45,
                        "characters": {
                            "None": 5,
                            "Rose Oriana (No.666)": 16,
                            "Lambda": 7,
                            "Rose Oriana (Rose)": 11,
                            "Alpha": 6
                        }
                    },
                    "e2": {
                        "word_count": 442,
                        "char_count": 2439,
                        "line_count": 39,
                        "characters": {
                            "None": 4,
                            "Rose Oriana (No.666)": 20,
                            "Lambda": 14,
                            "Cid Kagenou (??? (Stylish Bandit Slayer))": 1
                        }
                    },
                    "e3": {
                        "word_count": 567,
                        "char_count": 3042,
                        "line_count": 43,
                        "characters": {
                            "None": 5,
                            "Rose Oriana (No.666)": 29,
                            "Cid Kagenou (Shadow)": 1,
                            "Lambda": 8
                        }
                    },
                    "e4": {
                        "word_count": 465,
                        "char_count": 2562,
                        "line_count": 49,
                        "characters": {
                            "None": 8,
                            "Rose Oriana (No.666)": 22,
                            "Lambda": 12,
                            "Nu": 7
                        }
                    },
                    "e5": {
                        "word_count": 586,
                        "char_count": 3124,
                        "line_count": 46,
                        "characters": {
                            "Alpha": 9,
                            "Lambda": 9,
                            "None": 1,
                            "Rose Oriana (No.666)": 14,
                            "Nu": 13
                        }
                    },
                    "e6": {
                        "word_count": 274,
                        "char_count": 1461,
                        "line_count": 24,
                        "characters": {
                            "None": 1,
                            "Rose Oriana (No.666)": 10,
                            "Lambda": 13
                        }
                    },
                    "e7": {
                        "word_count": 628,
                        "char_count": 3486,
                        "line_count": 63,
                        "characters": {
                            "Lambda": 20,
                            "Rose Oriana (No.666)": 26,
                            "Nu": 7,
                            "None": 7,
                            "Cid Kagenou (??? (Cid Kagenou))": 3
                        }
                    }
                }
            },
            "hd": {
                "line_count": 571,
                "word_count": 6654,
                "char_count": 36795,
                "characters": {
                    "Alpha": 207,
                    "Teacher": 12,
                    "None": 58,
                    "Classmate": 2,
                    "Zeta": 156,
                    "Cid Kagenou (??? (Nuru))": 7,
                    "Cid Kagenou (Nuru)": 103,
                    "Female Student": 15,
                    "Cid Kagenou (??? (Minoru Kageno))": 2,
                    "Shop Staff": 1,
                    "Evil Spirit": 1,
                    "Alpha (Alpha & Zeta (Alpha))": 1,
                    "Zeta (Alpha & Zeta (Zeta))": 1,
                    "Cid Kagenou (Cid)": 6
                },
                "episodes": {
                    "e1": {
                        "word_count": 584,
                        "char_count": 3279,
                        "line_count": 61,
                        "characters": {
                            "Alpha": 25,
                            "Teacher": 12,
                            "None": 7,
                            "Classmate": 2,
                            "Zeta": 15
                        }
                    },
                    "e2": {
                        "word_count": 1190,
                        "char_count": 6569,
                        "line_count": 108,
                        "characters": {
                            "None": 8,
                            "Zeta": 31,
                            "Alpha": 33,
                            "Cid Kagenou (??? (Nuru))": 7,
                            "Cid Kagenou (Nuru)": 29
                        }
                    },
                    "e3": {
                        "word_count": 1223,
                        "char_count": 6728,
                        "line_count": 105,
                        "characters": {
                            "None": 8,
                            "Zeta": 22,
                            "Alpha": 37,
                            "Cid Kagenou (Nuru)": 23,
                            "Female Student": 15
                        }
                    },
                    "e4": {
                        "word_count": 1126,
                        "char_count": 6229,
                        "line_count": 80,
                        "characters": {
                            "None": 7,
                            "Alpha": 39,
                            "Cid Kagenou (??? (Minoru Kageno))": 2,
                            "Zeta": 32
                        }
                    },
                    "e5": {
                        "word_count": 1294,
                        "char_count": 7136,
                        "line_count": 98,
                        "characters": {
                            "None": 6,
                            "Zeta": 34,
                            "Alpha": 39,
                            "Shop Staff": 1,
                            "Cid Kagenou (Nuru)": 18
                        }
                    },
                    "e6": {
                        "word_count": 606,
                        "char_count": 3326,
                        "line_count": 57,
                        "characters": {
                            "Zeta": 10,
                            "Cid Kagenou (Nuru)": 20,
                            "Alpha": 14,
                            "None": 11,
                            "Evil Spirit": 1,
                            "Alpha (Alpha & Zeta (Alpha))": 1,
                            "Zeta (Alpha & Zeta (Zeta))": 1
                        }
                    },
                    "e7": {
                        "word_count": 631,
                        "char_count": 3528,
                        "line_count": 62,
                        "characters": {
                            "None": 11,
                            "Zeta": 12,
                            "Alpha": 20,
                            "Cid Kagenou (Nuru)": 13,
                            "Cid Kagenou (Cid)": 6
                        }
                    }
                }
            },
            "clbg": {
                "line_count": 380,
                "word_count": 5006,
                "char_count": 27385,
                "characters": {
                    "Margrave": 12,
                    "Beta": 167,
                    "None": 6,
                    "Customer (??? (Customer))": 1,
                    "Customer": 4,
                    "Staff": 15,
                    "Alexia Midgar (Alexia)": 79,
                    "King (??? (King))": 1,
                    "King": 39,
                    "Alexia Midgar (??? (Alexia Midgar))": 1,
                    "Dealer": 33,
                    "Joker (??? (Joker))": 1,
                    "Joker": 15,
                    "Knight": 6
                },
                "episodes": {
                    "e1": {
                        "word_count": 842,
                        "char_count": 4777,
                        "line_count": 58,
                        "characters": {
                            "Margrave": 12,
                            "Beta": 41,
                            "None": 1,
                            "Customer (??? (Customer))": 1,
                            "Customer": 2,
                            "Staff": 1
                        }
                    },
                    "e2": {
                        "word_count": 658,
                        "char_count": 3614,
                        "line_count": 49,
                        "characters": {
                            "Alexia Midgar (Alexia)": 19,
                            "Beta": 24,
                            "Customer": 2,
                            "Staff": 3,
                            "None": 1
                        }
                    },
                    "e3": {
                        "word_count": 748,
                        "char_count": 4167,
                        "line_count": 54,
                        "characters": {
                            "Beta": 27,
                            "Staff": 10,
                            "King (??? (King))": 1,
                            "King": 15,
                            "Alexia Midgar (??? (Alexia Midgar))": 1
                        }
                    },
                    "e4": {
                        "word_count": 1001,
                        "char_count": 5203,
                        "line_count": 81,
                        "characters": {
                            "King": 13,
                            "Alexia Midgar (Alexia)": 21,
                            "Staff": 1,
                            "Beta": 28,
                            "Dealer": 18
                        }
                    },
                    "e5": {
                        "word_count": 649,
                        "char_count": 3439,
                        "line_count": 53,
                        "characters": {
                            "King": 5,
                            "Beta": 22,
                            "Alexia Midgar (Alexia)": 17,
                            "Dealer": 9
                        }
                    },
                    "e6": {
                        "word_count": 526,
                        "char_count": 2886,
                        "line_count": 38,
                        "characters": {
                            "Dealer": 5,
                            "Beta": 11,
                            "Alexia Midgar (Alexia)": 10,
                            "King": 5,
                            "Joker (??? (Joker))": 1,
                            "Joker": 5,
                            "None": 1
                        }
                    },
                    "e7": {
                        "word_count": 582,
                        "char_count": 3299,
                        "line_count": 47,
                        "characters": {
                            "Joker": 10,
                            "Alexia Midgar (Alexia)": 12,
                            "Beta": 14,
                            "King": 1,
                            "Dealer": 1,
                            "Knight": 6,
                            "None": 3
                        }
                    }
                }
            },
            "sulp": {
                "line_count": 525,
                "word_count": 5614,
                "char_count": 30889,
                "characters": {
                    "None": 33,
                    "Delta": 64,
                    "Zeta": 19,
                    "Beta": 65,
                    "Eta": 24,
                    "Epsilon": 48,
                    "Alpha": 79,
                    "Gamma": 100,
                    "Alpha (Everyone (Alpha))": 3,
                    "Beta (Everyone (Beta))": 3,
                    "Gamma (Everyone (Gamma))": 3,
                    "Delta (Everyone (Delta))": 3,
                    "Epsilon (Everyone (Epsilon))": 3,
                    "Zeta (Everyone (Zeta))": 3,
                    "Eta (Everyone (Eta))": 3,
                    "Beta (Beta & Epsilon (Beta))": 2,
                    "Epsilon (Beta & Epsilon (Epsilon))": 2,
                    "Cid Kagenou (Cid)": 79,
                    "Cid Kagenou (Shadow)": 6,
                    "Boar": 2,
                    "Alpha (Alpha & Beta (Alpha))": 1,
                    "Beta (Alpha & Beta (Beta))": 1
                },
                "episodes": {
                    "e1": {
                        "word_count": 704,
                        "char_count": 3956,
                        "line_count": 63,
                        "characters": {
                            "None": 4,
                            "Delta": 9,
                            "Zeta": 3,
                            "Beta": 9,
                            "Eta": 5,
                            "Epsilon": 5,
                            "Alpha": 10,
                            "Gamma": 17,
                            "Alpha (Everyone (Alpha))": 1,
                            "Beta (Everyone (Beta))": 1,
                            "Gamma (Everyone (Gamma))": 1,
                            "Delta (Everyone (Delta))": 1,
                            "Epsilon (Everyone (Epsilon))": 1,
                            "Zeta (Everyone (Zeta))": 1,
                            "Eta (Everyone (Eta))": 1
                        }
                    },
                    "e2": {
                        "word_count": 839,
                        "char_count": 4620,
                        "line_count": 82,
                        "characters": {
                            "None": 3,
                            "Gamma": 27,
                            "Beta": 5,
                            "Zeta": 6,
                            "Delta": 9,
                            "Epsilon": 16,
                            "Alpha": 9,
                            "Eta": 6,
                            "Alpha (Everyone (Alpha))": 1,
                            "Beta (Everyone (Beta))": 1,
                            "Gamma (Everyone (Gamma))": 1,
                            "Delta (Everyone (Delta))": 1,
                            "Epsilon (Everyone (Epsilon))": 1,
                            "Zeta (Everyone (Zeta))": 1,
                            "Eta (Everyone (Eta))": 1
                        }
                    },
                    "e3": {
                        "word_count": 615,
                        "char_count": 3349,
                        "line_count": 55,
                        "characters": {
                            "None": 5,
                            "Alpha": 16,
                            "Gamma": 15,
                            "Eta": 7,
                            "Zeta": 7,
                            "Delta": 5
                        }
                    },
                    "e4": {
                        "word_count": 713,
                        "char_count": 3944,
                        "line_count": 61,
                        "characters": {
                            "Alpha": 9,
                            "Gamma": 19,
                            "Epsilon": 13,
                            "Beta": 16,
                            "None": 3,
                            "Beta (Beta & Epsilon (Beta))": 1,
                            "Epsilon (Beta & Epsilon (Epsilon))": 1
                        }
                    },
                    "e5": {
                        "word_count": 1127,
                        "char_count": 6148,
                        "line_count": 101,
                        "characters": {
                            "None": 9,
                            "Cid Kagenou (Cid)": 49,
                            "Gamma": 14,
                            "Cid Kagenou (Shadow)": 3,
                            "Epsilon": 8,
                            "Zeta": 2,
                            "Eta": 1,
                            "Alpha": 7,
                            "Beta": 5,
                            "Beta (Beta & Epsilon (Beta))": 1,
                            "Epsilon (Beta & Epsilon (Epsilon))": 1,
                            "Delta": 2
                        }
                    },
                    "e6": {
                        "word_count": 1022,
                        "char_count": 5543,
                        "line_count": 99,
                        "characters": {
                            "Delta": 28,
                            "None": 4,
                            "Cid Kagenou (Cid)": 23,
                            "Beta": 22,
                            "Alpha": 17,
                            "Gamma": 3,
                            "Epsilon": 1,
                            "Boar": 1
                        }
                    },
                    "e7": {
                        "word_count": 594,
                        "char_count": 3329,
                        "line_count": 64,
                        "characters": {
                            "Alpha": 11,
                            "Boar": 1,
                            "Beta": 8,
                            "Delta": 11,
                            "Cid Kagenou (Cid)": 7,
                            "None": 5,
                            "Alpha (Alpha & Beta (Alpha))": 1,
                            "Beta (Alpha & Beta (Beta))": 1,
                            "Gamma": 5,
                            "Eta": 5,
                            "Epsilon": 5,
                            "Zeta": 1,
                            "Cid Kagenou (Shadow)": 3,
                            "Alpha (Everyone (Alpha))": 1,
                            "Beta (Everyone (Beta))": 1,
                            "Gamma (Everyone (Gamma))": 1,
                            "Delta (Everyone (Delta))": 1,
                            "Epsilon (Everyone (Epsilon))": 1,
                            "Zeta (Everyone (Zeta))": 1,
                            "Eta (Everyone (Eta))": 1
                        }
                    }
                }
            },
            "ts": {
                "line_count": 613,
                "word_count": 6765,
                "char_count": 38547,
                "characters": {
                    "None": 75,
                    "Eta": 218,
                    "Zeta (??? (Zeta))": 1,
                    "Zeta": 275,
                    "Monster": 6,
                    "Nidhogg": 10,
                    "Cid Kagenou (Shadow)": 27,
                    "Eta (Zeta & Eta (Eta))": 1,
                    "Zeta (Zeta & Eta (Zeta))": 1
                },
                "episodes": {
                    "e1": {
                        "word_count": 979,
                        "char_count": 5724,
                        "line_count": 77,
                        "characters": {
                            "None": 9,
                            "Eta": 35,
                            "Zeta (??? (Zeta))": 1,
                            "Zeta": 32
                        }
                    },
                    "e2": {
                        "word_count": 1053,
                        "char_count": 5977,
                        "line_count": 100,
                        "characters": {
                            "None": 12,
                            "Eta": 35,
                            "Zeta": 52,
                            "Monster": 1
                        }
                    },
                    "e3": {
                        "word_count": 858,
                        "char_count": 5028,
                        "line_count": 73,
                        "characters": {
                            "None": 10,
                            "Monster": 5,
                            "Zeta": 34,
                            "Eta": 24
                        }
                    },
                    "e4": {
                        "word_count": 1219,
                        "char_count": 6698,
                        "line_count": 104,
                        "characters": {
                            "None": 11,
                            "Eta": 46,
                            "Zeta": 47
                        }
                    },
                    "e5": {
                        "word_count": 1121,
                        "char_count": 6398,
                        "line_count": 94,
                        "characters": {
                            "None": 8,
                            "Zeta": 50,
                            "Eta": 36
                        }
                    },
                    "e6": {
                        "word_count": 569,
                        "char_count": 3320,
                        "line_count": 58,
                        "characters": {
                            "Eta": 15,
                            "Zeta": 30,
                            "None": 11,
                            "Nidhogg": 2
                        }
                    },
                    "e7": {
                        "word_count": 966,
                        "char_count": 5402,
                        "line_count": 107,
                        "characters": {
                            "Zeta": 30,
                            "Eta": 27,
                            "None": 14,
                            "Nidhogg": 8,
                            "Cid Kagenou (Shadow)": 27,
                            "Eta (Zeta & Eta (Eta))": 1,
                            "Zeta (Zeta & Eta (Zeta))": 1
                        }
                    }
                }
            },
            "mt": {
                "line_count": 498,
                "word_count": 5134,
                "char_count": 29060,
                "characters": {
                    "Cid Kagenou (Cid)": 179,
                    "None": 43,
                    "Beta": 120,
                    "Passerby A": 2,
                    "Passerby B": 2,
                    "Passerby C": 1,
                    "Passerby D": 1,
                    "Beta (??? (Beta))": 1,
                    "Epsilon (??? (Epsilon))": 1,
                    "Epsilon": 119,
                    "Beta (Beta & Epsilon (Beta))": 9,
                    "Epsilon (Beta & Epsilon (Epsilon))": 9,
                    "Monster": 4,
                    "Delta (??? (Delta))": 1,
                    "Delta": 4,
                    "Alpha": 4,
                    "Zeta": 2,
                    "Gamma": 2,
                    "Eta": 3
                },
                "episodes": {
                    "e1": {
                        "word_count": 634,
                        "char_count": 3697,
                        "line_count": 59,
                        "characters": {
                            "Cid Kagenou (Cid)": 27,
                            "None": 9,
                            "Beta": 17,
                            "Passerby A": 2,
                            "Passerby B": 2,
                            "Passerby C": 1,
                            "Passerby D": 1
                        }
                    },
                    "e2": {
                        "word_count": 919,
                        "char_count": 5176,
                        "line_count": 83,
                        "characters": {
                            "Cid Kagenou (Cid)": 38,
                            "None": 6,
                            "Beta (??? (Beta))": 1,
                            "Epsilon (??? (Epsilon))": 1,
                            "Epsilon": 20,
                            "Beta": 14,
                            "Beta (Beta & Epsilon (Beta))": 3,
                            "Epsilon (Beta & Epsilon (Epsilon))": 3
                        }
                    },
                    "e3": {
                        "word_count": 528,
                        "char_count": 2951,
                        "line_count": 50,
                        "characters": {
                            "Cid Kagenou (Cid)": 19,
                            "Epsilon": 12,
                            "Beta": 14,
                            "Beta (Beta & Epsilon (Beta))": 3,
                            "Epsilon (Beta & Epsilon (Epsilon))": 3,
                            "None": 2
                        }
                    },
                    "e4": {
                        "word_count": 635,
                        "char_count": 3666,
                        "line_count": 71,
                        "characters": {
                            "Cid Kagenou (Cid)": 22,
                            "Epsilon": 26,
                            "Beta": 16,
                            "None": 7
                        }
                    },
                    "e5": {
                        "word_count": 1312,
                        "char_count": 7280,
                        "line_count": 118,
                        "characters": {
                            "Beta": 34,
                            "Cid Kagenou (Cid)": 37,
                            "Epsilon": 34,
                            "None": 11,
                            "Beta (Beta & Epsilon (Beta))": 2,
                            "Epsilon (Beta & Epsilon (Epsilon))": 2
                        }
                    },
                    "e6": {
                        "word_count": 627,
                        "char_count": 3605,
                        "line_count": 67,
                        "characters": {
                            "Cid Kagenou (Cid)": 25,
                            "Beta": 17,
                            "Epsilon": 18,
                            "None": 3,
                            "Beta (Beta & Epsilon (Beta))": 1,
                            "Epsilon (Beta & Epsilon (Epsilon))": 1,
                            "Monster": 3
                        }
                    },
                    "e7": {
                        "word_count": 479,
                        "char_count": 2685,
                        "line_count": 50,
                        "characters": {
                            "Monster": 1,
                            "Cid Kagenou (Cid)": 11,
                            "Beta": 8,
                            "Epsilon": 9,
                            "None": 5,
                            "Delta (??? (Delta))": 1,
                            "Delta": 4,
                            "Alpha": 4,
                            "Zeta": 2,
                            "Gamma": 2,
                            "Eta": 3
                        }
                    }
                }
            },
            "dss": {
                "line_count": 499,
                "word_count": 5429,
                "char_count": 30182,
                "characters": {
                    "None": 61,
                    "Claire Kagenou (Claire)": 149,
                    "Alexia Midgar (Alexia)": 139,
                    "Claire Kagenou (??? (Claire Kagenou))": 2,
                    "Cid Kagenou (Cid)": 54,
                    "Alexia Midgar (??? (Alexia Midgar))": 1,
                    "Beta": 62,
                    "Epsilon": 27,
                    "Beta (??? (Beta))": 1,
                    "Epsilon (??? (Epsilon))": 1,
                    "Alexia Midgar (Alexia & Claire (Alexia))": 1,
                    "Claire Kagenou (Alexia & Claire (Claire))": 1,
                    "Cid Kagenou (??? (Cid Kagenou))": 1
                },
                "episodes": {
                    "e1": {
                        "word_count": 807,
                        "char_count": 4441,
                        "line_count": 67,
                        "characters": {
                            "None": 15,
                            "Claire Kagenou (Claire)": 29,
                            "Alexia Midgar (Alexia)": 22,
                            "Claire Kagenou (??? (Claire Kagenou))": 1
                        }
                    },
                    "e2": {
                        "word_count": 691,
                        "char_count": 3770,
                        "line_count": 59,
                        "characters": {
                            "None": 6,
                            "Claire Kagenou (Claire)": 17,
                            "Alexia Midgar (Alexia)": 20,
                            "Cid Kagenou (Cid)": 15,
                            "Alexia Midgar (??? (Alexia Midgar))": 1
                        }
                    },
                    "e3": {
                        "word_count": 672,
                        "char_count": 3909,
                        "line_count": 66,
                        "characters": {
                            "None": 6,
                            "Alexia Midgar (Alexia)": 12,
                            "Beta": 12,
                            "Cid Kagenou (Cid)": 19,
                            "Claire Kagenou (??? (Claire Kagenou))": 1,
                            "Claire Kagenou (Claire)": 16
                        }
                    },
                    "e4": {
                        "word_count": 689,
                        "char_count": 3821,
                        "line_count": 64,
                        "characters": {
                            "None": 7,
                            "Alexia Midgar (Alexia)": 27,
                            "Claire Kagenou (Claire)": 28,
                            "Cid Kagenou (Cid)": 2
                        }
                    },
                    "e5": {
                        "word_count": 552,
                        "char_count": 3059,
                        "line_count": 52,
                        "characters": {
                            "None": 3,
                            "Claire Kagenou (Claire)": 19,
                            "Alexia Midgar (Alexia)": 16,
                            "Epsilon": 6,
                            "Beta": 6,
                            "Beta (??? (Beta))": 1,
                            "Epsilon (??? (Epsilon))": 1
                        }
                    },
                    "e6": {
                        "word_count": 869,
                        "char_count": 4839,
                        "line_count": 93,
                        "characters": {
                            "Beta": 30,
                            "Alexia Midgar (Alexia)": 25,
                            "Claire Kagenou (Claire)": 17,
                            "None": 7,
                            "Epsilon": 14
                        }
                    },
                    "e7": {
                        "word_count": 1149,
                        "char_count": 6343,
                        "line_count": 98,
                        "characters": {
                            "None": 17,
                            "Claire Kagenou (Claire)": 23,
                            "Alexia Midgar (Alexia)": 17,
                            "Beta": 14,
                            "Epsilon": 7,
                            "Alexia Midgar (Alexia & Claire (Alexia))": 1,
                            "Claire Kagenou (Alexia & Claire (Claire))": 1,
                            "Cid Kagenou (??? (Cid Kagenou))": 1,
                            "Cid Kagenou (Cid)": 18
                        }
                    }
                }
            },
            "i": {
                "line_count": 355,
                "word_count": 3928,
                "char_count": 22339,
                "characters": {
                    "None": 19,
                    "Rose Oriana (No. 666)": 105,
                    "Lambda": 44,
                    "Alpha": 35,
                    "Epsilon": 39,
                    "Eta": 22,
                    "Beta": 26,
                    "Nu": 21,
                    "Gamma (??? (Gamma))": 1,
                    "Gamma": 28,
                    "Beta (??? (Beta))": 1,
                    "Zeta": 12,
                    "Ghoul": 2
                },
                "episodes": {
                    "e1": {
                        "word_count": 504,
                        "char_count": 2964,
                        "line_count": 45,
                        "characters": {
                            "None": 4,
                            "Rose Oriana (No. 666)": 20,
                            "Lambda": 10,
                            "Alpha": 11
                        }
                    },
                    "e2": {
                        "word_count": 734,
                        "char_count": 4193,
                        "line_count": 64,
                        "characters": {
                            "Lambda": 16,
                            "Rose Oriana (No. 666)": 27,
                            "None": 2,
                            "Epsilon": 19
                        }
                    },
                    "e3": {
                        "word_count": 519,
                        "char_count": 2989,
                        "line_count": 59,
                        "characters": {
                            "Rose Oriana (No. 666)": 24,
                            "Lambda": 14,
                            "Eta": 19,
                            "None": 2
                        }
                    },
                    "e4": {
                        "word_count": 605,
                        "char_count": 3338,
                        "line_count": 52,
                        "characters": {
                            "None": 6,
                            "Beta": 13,
                            "Epsilon": 10,
                            "Lambda": 4,
                            "Rose Oriana (No. 666)": 12,
                            "Nu": 6,
                            "Gamma (??? (Gamma))": 1
                        }
                    },
                    "e5": {
                        "word_count": 614,
                        "char_count": 3453,
                        "line_count": 51,
                        "characters": {
                            "None": 2,
                            "Gamma": 19,
                            "Rose Oriana (No. 666)": 17,
                            "Nu": 12,
                            "Beta (??? (Beta))": 1
                        }
                    },
                    "e6": {
                        "word_count": 418,
                        "char_count": 2344,
                        "line_count": 41,
                        "characters": {
                            "None": 2,
                            "Beta": 9,
                            "Gamma": 6,
                            "Rose Oriana (No. 666)": 5,
                            "Nu": 3,
                            "Epsilon": 5,
                            "Zeta": 6,
                            "Alpha": 4,
                            "Ghoul": 1
                        }
                    },
                    "e7": {
                        "word_count": 534,
                        "char_count": 3058,
                        "line_count": 43,
                        "characters": {
                            "Epsilon": 5,
                            "Ghoul": 1,
                            "Alpha": 20,
                            "Zeta": 6,
                            "None": 1,
                            "Eta": 3,
                            "Beta": 4,
                            "Gamma": 3
                        }
                    }
                }
            },
            "lshn": {
                "line_count": 455,
                "word_count": 4435,
                "char_count": 26029,
                "characters": {
                    "Gamma": 33,
                    "None": 69,
                    "Alpha": 37,
                    "Delta": 120,
                    "Eta": 101,
                    "Branch Manager": 40,
                    "Girl A": 9,
                    "Boy A": 11,
                    "Girl B": 3,
                    "Boy B": 7,
                    "Boy C": 2,
                    "Mr. Vendy": 10,
                    "Skewer Stall Owner": 7,
                    "Quiche Stall Owner": 1,
                    "Soup Stall Owner": 1,
                    "Mother": 3,
                    "Children": 1
                },
                "episodes": {
                    "e1": {
                        "word_count": 808,
                        "char_count": 4771,
                        "line_count": 71,
                        "characters": {
                            "Gamma": 22,
                            "None": 8,
                            "Alpha": 26,
                            "Delta": 8,
                            "Eta": 7
                        }
                    },
                    "e2": {
                        "word_count": 553,
                        "char_count": 3207,
                        "line_count": 64,
                        "characters": {
                            "Branch Manager": 9,
                            "Delta": 20,
                            "Eta": 21,
                            "None": 6,
                            "Girl A": 2,
                            "Boy A": 2,
                            "Girl B": 1,
                            "Boy B": 1,
                            "Boy C": 2
                        }
                    },
                    "e3": {
                        "word_count": 716,
                        "char_count": 4114,
                        "line_count": 67,
                        "characters": {
                            "None": 15,
                            "Branch Manager": 8,
                            "Delta": 11,
                            "Eta": 20,
                            "Gamma": 7,
                            "Boy A": 1,
                            "Mr. Vendy": 2,
                            "Boy B": 1,
                            "Girl A": 2
                        }
                    },
                    "e4": {
                        "word_count": 454,
                        "char_count": 2626,
                        "line_count": 49,
                        "characters": {
                            "Mr. Vendy": 2,
                            "Boy A": 1,
                            "Boy B": 2,
                            "None": 9,
                            "Eta": 2,
                            "Delta": 24,
                            "Skewer Stall Owner": 7,
                            "Quiche Stall Owner": 1,
                            "Soup Stall Owner": 1
                        }
                    },
                    "e5": {
                        "word_count": 390,
                        "char_count": 2478,
                        "line_count": 43,
                        "characters": {
                            "Boy A": 3,
                            "Mr. Vendy": 1,
                            "None": 6,
                            "Mother": 1,
                            "Boy B": 1,
                            "Delta": 14,
                            "Eta": 10,
                            "Branch Manager": 7
                        }
                    },
                    "e6": {
                        "word_count": 616,
                        "char_count": 3608,
                        "line_count": 70,
                        "characters": {
                            "None": 12,
                            "Delta": 21,
                            "Eta": 19,
                            "Branch Manager": 11,
                            "Mr. Vendy": 5,
                            "Boy A": 1,
                            "Girl A": 1
                        }
                    },
                    "e7": {
                        "word_count": 898,
                        "char_count": 5225,
                        "line_count": 91,
                        "characters": {
                            "Eta": 22,
                            "Delta": 22,
                            "None": 13,
                            "Children": 1,
                            "Boy A": 3,
                            "Girl A": 4,
                            "Mother": 2,
                            "Boy B": 2,
                            "Girl B": 2,
                            "Branch Manager": 5,
                            "Gamma": 4,
                            "Alpha": 11
                        }
                    }
                }
            },
            "ana": {
                "line_count": 496,
                "word_count": 5501,
                "char_count": 31871,
                "characters": {
                    "None": 71,
                    "Cid Kagenou (Cid)": 156,
                    "Delta": 23,
                    "Alpha": 56,
                    "Gamma": 20,
                    "Epsilon": 23,
                    "Zeta": 23,
                    "Eta": 9,
                    "Beta": 23,
                    "Eta (??? (Eta))": 1,
                    "Skel Etal (Skel)": 18,
                    "Goldy Gilded": 55,
                    "Cid Kagenou (Shadow)": 18
                },
                "episodes": {
                    "e1": {
                        "word_count": 663,
                        "char_count": 3938,
                        "line_count": 77,
                        "characters": {
                            "None": 9,
                            "Cid Kagenou (Cid)": 24,
                            "Delta": 11,
                            "Alpha": 14,
                            "Gamma": 4,
                            "Epsilon": 4,
                            "Zeta": 5,
                            "Eta": 3,
                            "Beta": 3
                        }
                    },
                    "e2": {
                        "word_count": 742,
                        "char_count": 4373,
                        "line_count": 66,
                        "characters": {
                            "None": 10,
                            "Beta": 15,
                            "Cid Kagenou (Cid)": 26,
                            "Epsilon": 15
                        }
                    },
                    "e3": {
                        "word_count": 974,
                        "char_count": 5686,
                        "line_count": 84,
                        "characters": {
                            "None": 17,
                            "Cid Kagenou (Cid)": 29,
                            "Zeta": 13,
                            "Delta": 8,
                            "Alpha": 3,
                            "Eta (??? (Eta))": 1,
                            "Eta": 3,
                            "Gamma": 10
                        }
                    },
                    "e4": {
                        "word_count": 824,
                        "char_count": 4648,
                        "line_count": 68,
                        "characters": {
                            "None": 7,
                            "Cid Kagenou (Cid)": 22,
                            "Skel Etal (Skel)": 13,
                            "Goldy Gilded": 8,
                            "Alpha": 6,
                            "Gamma": 2,
                            "Beta": 1,
                            "Delta": 2,
                            "Epsilon": 2,
                            "Zeta": 3,
                            "Eta": 2
                        }
                    },
                    "e5": {
                        "word_count": 796,
                        "char_count": 4629,
                        "line_count": 77,
                        "characters": {
                            "None": 8,
                            "Cid Kagenou (Cid)": 28,
                            "Goldy Gilded": 25,
                            "Skel Etal (Skel)": 5,
                            "Gamma": 1,
                            "Beta": 2,
                            "Zeta": 1,
                            "Alpha": 6,
                            "Epsilon": 1
                        }
                    },
                    "e6": {
                        "word_count": 884,
                        "char_count": 5033,
                        "line_count": 75,
                        "characters": {
                            "None": 13,
                            "Goldy Gilded": 16,
                            "Cid Kagenou (Cid)": 27,
                            "Alpha": 14,
                            "Cid Kagenou (Shadow)": 5
                        }
                    },
                    "e7": {
                        "word_count": 618,
                        "char_count": 3564,
                        "line_count": 49,
                        "characters": {
                            "None": 7,
                            "Alpha": 13,
                            "Goldy Gilded": 6,
                            "Cid Kagenou (Shadow)": 13,
                            "Delta": 2,
                            "Gamma": 3,
                            "Eta": 1,
                            "Beta": 2,
                            "Epsilon": 1,
                            "Zeta": 1
                        }
                    }
                }
            },
            "agfms": {
                "line_count": 377,
                "word_count": 4198,
                "char_count": 24082,
                "characters": {
                    "None": 10,
                    "Knight A": 2,
                    "Iris Midgar (Iris)": 158,
                    "Alexia Midgar (Alexia)": 23,
                    "Shop Staff": 8,
                    "Beatrix": 98,
                    "Committee Person": 4,
                    "Announcer": 38,
                    "Audience": 1,
                    "Spectator A": 6,
                    "Spectator B": 6,
                    "Girl": 2,
                    "Boy A": 8,
                    "Boy B": 6,
                    "Boys": 1,
                    "Merry Whip": 6
                },
                "episodes": {
                    "e1": {
                        "word_count": 667,
                        "char_count": 3818,
                        "line_count": 68,
                        "characters": {
                            "None": 3,
                            "Knight A": 2,
                            "Iris Midgar (Iris)": 35,
                            "Alexia Midgar (Alexia)": 8,
                            "Shop Staff": 8,
                            "Beatrix": 12
                        }
                    },
                    "e2": {
                        "word_count": 536,
                        "char_count": 3097,
                        "line_count": 43,
                        "characters": {
                            "Beatrix": 16,
                            "Iris Midgar (Iris)": 23,
                            "None": 1,
                            "Committee Person": 3
                        }
                    },
                    "e3": {
                        "word_count": 804,
                        "char_count": 4719,
                        "line_count": 61,
                        "characters": {
                            "Announcer": 14,
                            "Audience": 1,
                            "Iris Midgar (Iris)": 21,
                            "Beatrix": 12,
                            "Spectator A": 5,
                            "Spectator B": 5,
                            "None": 3
                        }
                    },
                    "e4": {
                        "word_count": 497,
                        "char_count": 2850,
                        "line_count": 47,
                        "characters": {
                            "Announcer": 3,
                            "Iris Midgar (Iris)": 12,
                            "Beatrix": 12,
                            "Girl": 2,
                            "Boy A": 8,
                            "Boy B": 6,
                            "Boys": 1,
                            "Spectator A": 1,
                            "Spectator B": 1,
                            "None": 1
                        }
                    },
                    "e5": {
                        "word_count": 483,
                        "char_count": 2691,
                        "line_count": 42,
                        "characters": {
                            "Beatrix": 17,
                            "Iris Midgar (Iris)": 24,
                            "Committee Person": 1
                        }
                    },
                    "e6": {
                        "word_count": 363,
                        "char_count": 2132,
                        "line_count": 34,
                        "characters": {
                            "Announcer": 9,
                            "Beatrix": 10,
                            "Iris Midgar (Iris)": 10,
                            "Merry Whip": 5
                        }
                    },
                    "e7": {
                        "word_count": 848,
                        "char_count": 4775,
                        "line_count": 82,
                        "characters": {
                            "Beatrix": 19,
                            "Iris Midgar (Iris)": 33,
                            "Merry Whip": 1,
                            "Announcer": 12,
                            "None": 2,
                            "Alexia Midgar (Alexia)": 15
                        }
                    }
                }
            },
            "rtgi2": {
                "line_count": 381,
                "word_count": 4101,
                "char_count": 23414,
                "characters": {
                    "None": 5,
                    "Epsilon": 132,
                    "Zeta": 77,
                    "Delta (??? (Delta))": 1,
                    "Delta": 38,
                    "Alpha": 46,
                    "Dog T.thrope Priest": 50,
                    "Therianthrope A": 6,
                    "Therianthrope B": 5,
                    "Bearded Participant": 2,
                    "Disciple": 4,
                    "Junior": 8,
                    "Cid Kagenou (Cid)": 7
                },
                "episodes": {
                    "e1": {
                        "word_count": 543,
                        "char_count": 3022,
                        "line_count": 47,
                        "characters": {
                            "None": 1,
                            "Epsilon": 25,
                            "Zeta": 21
                        }
                    },
                    "e2": {
                        "word_count": 761,
                        "char_count": 4216,
                        "line_count": 71,
                        "characters": {
                            "Epsilon": 20,
                            "Zeta": 20,
                            "None": 1,
                            "Delta (??? (Delta))": 1,
                            "Delta": 11,
                            "Alpha": 14,
                            "Dog T.thrope Priest": 4
                        }
                    },
                    "e3": {
                        "word_count": 433,
                        "char_count": 2526,
                        "line_count": 40,
                        "characters": {
                            "Dog T.thrope Priest": 9,
                            "Alpha": 4,
                            "Delta": 3,
                            "Epsilon": 16,
                            "Zeta": 6,
                            "Therianthrope A": 1,
                            "Therianthrope B": 1
                        }
                    },
                    "e4": {
                        "word_count": 463,
                        "char_count": 2695,
                        "line_count": 40,
                        "characters": {
                            "Dog T.thrope Priest": 7,
                            "Alpha": 5,
                            "Bearded Participant": 2,
                            "Disciple": 2,
                            "Junior": 1,
                            "Epsilon": 11,
                            "Delta": 3,
                            "Therianthrope A": 3,
                            "Therianthrope B": 2,
                            "Zeta": 4
                        }
                    },
                    "e5": {
                        "word_count": 634,
                        "char_count": 3594,
                        "line_count": 57,
                        "characters": {
                            "Dog T.thrope Priest": 14,
                            "Alpha": 9,
                            "Delta": 5,
                            "Epsilon": 17,
                            "Zeta": 6,
                            "Therianthrope A": 1,
                            "Therianthrope B": 1,
                            "Disciple": 2,
                            "Junior": 2
                        }
                    },
                    "e6": {
                        "word_count": 470,
                        "char_count": 2776,
                        "line_count": 51,
                        "characters": {
                            "None": 1,
                            "Delta": 6,
                            "Alpha": 5,
                            "Dog T.thrope Priest": 9,
                            "Epsilon": 20,
                            "Therianthrope A": 1,
                            "Therianthrope B": 1,
                            "Junior": 5,
                            "Zeta": 3
                        }
                    },
                    "e7": {
                        "word_count": 797,
                        "char_count": 4585,
                        "line_count": 75,
                        "characters": {
                            "Epsilon": 23,
                            "Zeta": 17,
                            "Dog T.thrope Priest": 7,
                            "Alpha": 9,
                            "Delta": 10,
                            "None": 2,
                            "Cid Kagenou (Cid)": 7
                        }
                    }
                }
            },
            "m": {
                "line_count": 350,
                "word_count": 3491,
                "char_count": 19437,
                "characters": {
                    "Claire Kagenou (Claire)": 150,
                    "Alpha": 18,
                    "Nu": 109,
                    "Rose Oriana (No. 666)": 13,
                    "None": 3,
                    "Noblewoman": 12,
                    "Aurora": 14,
                    "Cid Kagenou (Cid)": 1,
                    "Claire Kagenou (??? (Claire Kagenou))": 1,
                    "Maximilian": 27,
                    "Aurora (??? (Aurora))": 2
                },
                "episodes": {
                    "e1": {
                        "word_count": 582,
                        "char_count": 3313,
                        "line_count": 54,
                        "characters": {
                            "Claire Kagenou (Claire)": 10,
                            "Alpha": 18,
                            "Nu": 13,
                            "Rose Oriana (No. 666)": 13
                        }
                    },
                    "e2": {
                        "word_count": 541,
                        "char_count": 2878,
                        "line_count": 48,
                        "characters": {
                            "Nu": 21,
                            "Claire Kagenou (Claire)": 27
                        }
                    },
                    "e3": {
                        "word_count": 665,
                        "char_count": 3749,
                        "line_count": 68,
                        "characters": {
                            "None": 1,
                            "Claire Kagenou (Claire)": 38,
                            "Nu": 17,
                            "Noblewoman": 9,
                            "Aurora": 2,
                            "Cid Kagenou (Cid)": 1
                        }
                    },
                    "e4": {
                        "word_count": 329,
                        "char_count": 1778,
                        "line_count": 34,
                        "characters": {
                            "None": 1,
                            "Nu": 16,
                            "Claire Kagenou (??? (Claire Kagenou))": 1,
                            "Claire Kagenou (Claire)": 16
                        }
                    },
                    "e5": {
                        "word_count": 367,
                        "char_count": 2051,
                        "line_count": 41,
                        "characters": {
                            "Nu": 14,
                            "Claire Kagenou (Claire)": 21,
                            "Noblewoman": 3,
                            "Maximilian": 3
                        }
                    },
                    "e6": {
                        "word_count": 561,
                        "char_count": 3165,
                        "line_count": 60,
                        "characters": {
                            "Maximilian": 22,
                            "Nu": 15,
                            "Claire Kagenou (Claire)": 16,
                            "Aurora (??? (Aurora))": 2,
                            "Aurora": 5
                        }
                    },
                    "e7": {
                        "word_count": 446,
                        "char_count": 2503,
                        "line_count": 45,
                        "characters": {
                            "Maximilian": 2,
                            "Aurora": 7,
                            "Nu": 13,
                            "Claire Kagenou (Claire)": 22,
                            "None": 1
                        }
                    }
                }
            },
            "bmsv": {
                "line_count": 438,
                "word_count": 4710,
                "char_count": 26728,
                "characters": {
                    "None": 5,
                    "Lambda": 100,
                    "Alpha": 131,
                    "Omega": 43,
                    "Chi": 49,
                    "Nu": 41,
                    "Chi (Chi & Omega (Chi))": 3,
                    "Omega (Chi & Omega (Omega))": 3,
                    "Cid Kagenou (Cid)": 50,
                    "Cid Kagenou (Shadow)": 1,
                    "Delta (??? (Delta))": 1,
                    "Delta": 14
                },
                "episodes": {
                    "e1": {
                        "word_count": 742,
                        "char_count": 4266,
                        "line_count": 68,
                        "characters": {
                            "None": 2,
                            "Lambda": 24,
                            "Alpha": 11,
                            "Omega": 11,
                            "Chi": 9,
                            "Nu": 9,
                            "Chi (Chi & Omega (Chi))": 2,
                            "Omega (Chi & Omega (Omega))": 2
                        }
                    },
                    "e2": {
                        "word_count": 593,
                        "char_count": 3356,
                        "line_count": 52,
                        "characters": {
                            "Alpha": 18,
                            "Lambda": 9,
                            "Nu": 5,
                            "Omega": 4,
                            "Chi": 6,
                            "Cid Kagenou (Cid)": 8,
                            "None": 2
                        }
                    },
                    "e3": {
                        "word_count": 805,
                        "char_count": 4554,
                        "line_count": 72,
                        "characters": {
                            "Nu": 11,
                            "Chi": 9,
                            "Alpha": 19,
                            "Omega": 8,
                            "Lambda": 18,
                            "Cid Kagenou (Cid)": 7
                        }
                    },
                    "e4": {
                        "word_count": 702,
                        "char_count": 4002,
                        "line_count": 71,
                        "characters": {
                            "Omega": 7,
                            "Alpha": 27,
                            "Cid Kagenou (Cid)": 15,
                            "Lambda": 6,
                            "Chi": 10,
                            "Nu": 4,
                            "Chi (Chi & Omega (Chi))": 1,
                            "Omega (Chi & Omega (Omega))": 1,
                            "Cid Kagenou (Shadow)": 1
                        }
                    },
                    "e5": {
                        "word_count": 637,
                        "char_count": 3676,
                        "line_count": 60,
                        "characters": {
                            "Alpha": 20,
                            "Chi": 6,
                            "Omega": 5,
                            "Nu": 5,
                            "Lambda": 24
                        }
                    },
                    "e6": {
                        "word_count": 663,
                        "char_count": 3641,
                        "line_count": 61,
                        "characters": {
                            "Lambda": 13,
                            "Alpha": 15,
                            "Nu": 6,
                            "Omega": 7,
                            "Chi": 7,
                            "Delta (??? (Delta))": 1,
                            "Delta": 8,
                            "Cid Kagenou (Cid)": 4
                        }
                    },
                    "e7": {
                        "word_count": 568,
                        "char_count": 3233,
                        "line_count": 54,
                        "characters": {
                            "Delta": 6,
                            "Alpha": 21,
                            "Lambda": 6,
                            "Cid Kagenou (Cid)": 16,
                            "Omega": 1,
                            "Chi": 2,
                            "Nu": 1,
                            "None": 1
                        }
                    }
                }
            },
            "tghms": {
                "line_count": 449,
                "word_count": 5006,
                "char_count": 27152,
                "characters": {
                    "None": 3,
                    "OiKatzo": 58,
                    "Arthur Pencilgon": 71,
                    "Sunraku": 70,
                    "Cid Kagenou (Cid)": 100,
                    "Alpha": 69,
                    "Eta": 8,
                    "Wethermon (??? (Wethermon))": 3,
                    "Gamma": 3,
                    "Epsilon": 4,
                    "Beta": 3,
                    "Zeta": 3,
                    "Delta": 32,
                    "Alpha (Seven Shadows (Alpha))": 1,
                    "Beta (Seven Shadows (Beta))": 1,
                    "Gamma (Seven Shadows (Gamma))": 1,
                    "Delta (Seven Shadows (Delta))": 1,
                    "Epsilon (Seven Shadows (Epsilon))": 1,
                    "Zeta (Seven Shadows (Zeta))": 1,
                    "Eta (Seven Shadows (Eta))": 1,
                    "Sunraku (??? (Sunraku))": 1,
                    "Wethermon": 9,
                    "Cid Kagenou (Shadow)": 9,
                    "Sunraku (Sunraku & Shadow (Sunraku))": 1,
                    "Cid Kagenou (Sunraku & Shadow (Shadow))": 1,
                    "Cid Kagenou (Cid & Sunraku (Cid))": 1,
                    "Sunraku (Cid & Sunraku (Sunraku))": 1
                },
                "episodes": {
                    "e1": {
                        "word_count": 702,
                        "char_count": 3848,
                        "line_count": 72,
                        "characters": {
                            "None": 2,
                            "OiKatzo": 11,
                            "Arthur Pencilgon": 10,
                            "Sunraku": 12,
                            "Cid Kagenou (Cid)": 22,
                            "Alpha": 8,
                            "Eta": 5,
                            "Wethermon (??? (Wethermon))": 2
                        }
                    },
                    "e2": {
                        "word_count": 695,
                        "char_count": 3746,
                        "line_count": 63,
                        "characters": {
                            "Alpha": 19,
                            "Gamma": 2,
                            "Epsilon": 3,
                            "Beta": 2,
                            "Zeta": 2,
                            "Eta": 2,
                            "Delta": 9,
                            "Alpha (Seven Shadows (Alpha))": 1,
                            "Beta (Seven Shadows (Beta))": 1,
                            "Gamma (Seven Shadows (Gamma))": 1,
                            "Delta (Seven Shadows (Delta))": 1,
                            "Epsilon (Seven Shadows (Epsilon))": 1,
                            "Zeta (Seven Shadows (Zeta))": 1,
                            "Eta (Seven Shadows (Eta))": 1,
                            "Arthur Pencilgon": 10,
                            "Sunraku": 7,
                            "OiKatzo": 6
                        }
                    },
                    "e3": {
                        "word_count": 821,
                        "char_count": 4490,
                        "line_count": 62,
                        "characters": {
                            "None": 1,
                            "Cid Kagenou (Cid)": 36,
                            "Sunraku (??? (Sunraku))": 1,
                            "Sunraku": 9,
                            "OiKatzo": 7,
                            "Arthur Pencilgon": 8
                        }
                    },
                    "e4": {
                        "word_count": 658,
                        "char_count": 3515,
                        "line_count": 56,
                        "characters": {
                            "Arthur Pencilgon": 13,
                            "Alpha": 19,
                            "Sunraku": 9,
                            "OiKatzo": 8,
                            "Delta": 7
                        }
                    },
                    "e5": {
                        "word_count": 832,
                        "char_count": 4557,
                        "line_count": 67,
                        "characters": {
                            "Cid Kagenou (Cid)": 26,
                            "Delta": 5,
                            "Sunraku": 11,
                            "OiKatzo": 8,
                            "Arthur Pencilgon": 9,
                            "Alpha": 8
                        }
                    },
                    "e6": {
                        "word_count": 656,
                        "char_count": 3516,
                        "line_count": 64,
                        "characters": {
                            "Delta": 7,
                            "Alpha": 10,
                            "Cid Kagenou (Cid)": 13,
                            "Sunraku": 8,
                            "OiKatzo": 8,
                            "Arthur Pencilgon": 10,
                            "Wethermon": 3,
                            "Wethermon (??? (Wethermon))": 1,
                            "Cid Kagenou (Shadow)": 4
                        }
                    },
                    "e7": {
                        "word_count": 642,
                        "char_count": 3480,
                        "line_count": 65,
                        "characters": {
                            "Wethermon": 6,
                            "Cid Kagenou (Shadow)": 5,
                            "Sunraku": 14,
                            "OiKatzo": 10,
                            "Arthur Pencilgon": 11,
                            "Sunraku (Sunraku & Shadow (Sunraku))": 1,
                            "Cid Kagenou (Sunraku & Shadow (Shadow))": 1,
                            "Alpha": 5,
                            "Delta": 4,
                            "Cid Kagenou (Cid)": 3,
                            "Gamma": 1,
                            "Beta": 1,
                            "Epsilon": 1,
                            "Zeta": 1,
                            "Eta": 1,
                            "Cid Kagenou (Cid & Sunraku (Cid))": 1,
                            "Sunraku (Cid & Sunraku (Sunraku))": 1
                        }
                    }
                }
            },
            "hd2": {
                "line_count": 523,
                "word_count": 5351,
                "char_count": 29335,
                "characters": {
                    "Zeta (??? (Zeta))": 1,
                    "Alpha": 175,
                    "Zeta": 118,
                    "Cid Kagenou (Nuru)": 57,
                    "Eta (??? (Eta))": 4,
                    "Eta": 78,
                    "Delta (??? (Delta))": 2,
                    "Delta": 78,
                    "Broadcast": 1,
                    "Cid Kagenou (Minoru Kageno)": 7,
                    "Alpha (Alpha & Zeta (Alpha))": 1,
                    "Zeta (Alpha & Zeta (Zeta))": 1,
                    "None": 1
                },
                "episodes": {
                    "e1": {
                        "word_count": 864,
                        "char_count": 4689,
                        "line_count": 73,
                        "characters": {
                            "Zeta (??? (Zeta))": 1,
                            "Alpha": 31,
                            "Zeta": 21,
                            "Cid Kagenou (Nuru)": 20
                        }
                    },
                    "e2": {
                        "word_count": 797,
                        "char_count": 4351,
                        "line_count": 74,
                        "characters": {
                            "Cid Kagenou (Nuru)": 7,
                            "Alpha": 19,
                            "Zeta": 23,
                            "Eta (??? (Eta))": 4,
                            "Eta": 20,
                            "Delta (??? (Delta))": 1
                        }
                    },
                    "e3": {
                        "word_count": 568,
                        "char_count": 3025,
                        "line_count": 60,
                        "characters": {
                            "Delta (??? (Delta))": 1,
                            "Zeta": 14,
                            "Eta": 6,
                            "Alpha": 19,
                            "Delta": 18,
                            "Cid Kagenou (Nuru)": 2
                        }
                    },
                    "e4": {
                        "word_count": 717,
                        "char_count": 3923,
                        "line_count": 68,
                        "characters": {
                            "Alpha": 16,
                            "Eta": 10,
                            "Cid Kagenou (Nuru)": 6,
                            "Zeta": 16,
                            "Delta": 19,
                            "Broadcast": 1
                        }
                    },
                    "e5": {
                        "word_count": 724,
                        "char_count": 3980,
                        "line_count": 66,
                        "characters": {
                            "Delta": 9,
                            "Cid Kagenou (Nuru)": 7,
                            "Alpha": 23,
                            "Zeta": 14,
                            "Eta": 13
                        }
                    },
                    "e6": {
                        "word_count": 911,
                        "char_count": 5002,
                        "line_count": 95,
                        "characters": {
                            "Alpha": 34,
                            "Cid Kagenou (Minoru Kageno)": 7,
                            "Delta": 16,
                            "Zeta": 15,
                            "Cid Kagenou (Nuru)": 12,
                            "Eta": 10,
                            "Alpha (Alpha & Zeta (Alpha))": 1,
                            "Zeta (Alpha & Zeta (Zeta))": 1
                        }
                    },
                    "e7": {
                        "word_count": 770,
                        "char_count": 4365,
                        "line_count": 87,
                        "characters": {
                            "Cid Kagenou (Nuru)": 3,
                            "Alpha": 33,
                            "Zeta": 15,
                            "Delta": 16,
                            "Eta": 19,
                            "None": 1
                        }
                    }
                }
            },
            "tpis": {
                "line_count": 395,
                "word_count": 5202,
                "char_count": 28315,
                "characters": {
                    "Claire Kagenou (Claire)": 25,
                    "Cid Kagenou (Cid)": 144,
                    "Rose Oriana (Rose)": 86,
                    "Alexia Midgar (Alexia)": 72,
                    "Skel Etal (Skel)": 12,
                    "Po Tato (Po)": 11,
                    "Skel Etal (Skel & Po (Skel))": 1,
                    "Po Tato (Skel & Po (Po))": 1,
                    "Gamma": 18,
                    "Claire Kagenou (??? (Claire Kagenou))": 1,
                    "Announcer": 2,
                    "Beta (??? (Natsume))": 1,
                    "Beta (Natsume)": 13,
                    "Beta": 4,
                    "Male Student A": 2,
                    "Female Student A": 2,
                    "None": 1
                },
                "episodes": {
                    "e1": {
                        "word_count": 589,
                        "char_count": 3198,
                        "line_count": 47,
                        "characters": {
                            "Claire Kagenou (Claire)": 3,
                            "Cid Kagenou (Cid)": 25,
                            "Rose Oriana (Rose)": 19
                        }
                    },
                    "e2": {
                        "word_count": 780,
                        "char_count": 4180,
                        "line_count": 55,
                        "characters": {
                            "Cid Kagenou (Cid)": 21,
                            "Alexia Midgar (Alexia)": 23,
                            "Rose Oriana (Rose)": 11
                        }
                    },
                    "e3": {
                        "word_count": 923,
                        "char_count": 5017,
                        "line_count": 64,
                        "characters": {
                            "Cid Kagenou (Cid)": 28,
                            "Skel Etal (Skel)": 5,
                            "Po Tato (Po)": 4,
                            "Skel Etal (Skel & Po (Skel))": 1,
                            "Po Tato (Skel & Po (Po))": 1,
                            "Gamma": 18,
                            "Rose Oriana (Rose)": 4,
                            "Alexia Midgar (Alexia)": 4
                        }
                    },
                    "e4": {
                        "word_count": 727,
                        "char_count": 3991,
                        "line_count": 47,
                        "characters": {
                            "Rose Oriana (Rose)": 14,
                            "Alexia Midgar (Alexia)": 10,
                            "Cid Kagenou (Cid)": 23
                        }
                    },
                    "e5": {
                        "word_count": 722,
                        "char_count": 3910,
                        "line_count": 60,
                        "characters": {
                            "Alexia Midgar (Alexia)": 12,
                            "Rose Oriana (Rose)": 17,
                            "Cid Kagenou (Cid)": 17,
                            "Claire Kagenou (??? (Claire Kagenou))": 1,
                            "Claire Kagenou (Claire)": 13
                        }
                    },
                    "e6": {
                        "word_count": 751,
                        "char_count": 4131,
                        "line_count": 68,
                        "characters": {
                            "Alexia Midgar (Alexia)": 14,
                            "Rose Oriana (Rose)": 14,
                            "Skel Etal (Skel)": 5,
                            "Po Tato (Po)": 5,
                            "Announcer": 2,
                            "Beta (??? (Natsume))": 1,
                            "Beta (Natsume)": 10,
                            "Cid Kagenou (Cid)": 11,
                            "Beta": 4,
                            "Male Student A": 1,
                            "Female Student A": 1
                        }
                    },
                    "e7": {
                        "word_count": 710,
                        "char_count": 3888,
                        "line_count": 54,
                        "characters": {
                            "Beta (Natsume)": 3,
                            "Alexia Midgar (Alexia)": 9,
                            "Rose Oriana (Rose)": 7,
                            "Male Student A": 1,
                            "Female Student A": 1,
                            "Cid Kagenou (Cid)": 19,
                            "Skel Etal (Skel)": 2,
                            "Po Tato (Po)": 2,
                            "Claire Kagenou (Claire)": 9,
                            "None": 1
                        }
                    }
                }
            },
            "ssitw": {
                "line_count": 342,
                "word_count": 4351,
                "char_count": 23194,
                "characters": {
                    "Cid Kagenou (Cid)": 141,
                    "Alpha": 94,
                    "Zeta": 94,
                    "Cid Kagenou (None (Cid Kagenou))": 3,
                    "Beta": 10
                },
                "episodes": {
                    "e1": {
                        "word_count": 725,
                        "char_count": 3802,
                        "line_count": 50,
                        "characters": {
                            "Cid Kagenou (Cid)": 22,
                            "Alpha": 14,
                            "Zeta": 14
                        }
                    },
                    "e2": {
                        "word_count": 698,
                        "char_count": 3622,
                        "line_count": 58,
                        "characters": {
                            "Alpha": 15,
                            "Zeta": 17,
                            "Cid Kagenou (Cid)": 26
                        }
                    },
                    "e3": {
                        "word_count": 528,
                        "char_count": 2861,
                        "line_count": 39,
                        "characters": {
                            "Cid Kagenou (Cid)": 20,
                            "Alpha": 10,
                            "Zeta": 9
                        }
                    },
                    "e4": {
                        "word_count": 680,
                        "char_count": 3573,
                        "line_count": 53,
                        "characters": {
                            "Cid Kagenou (Cid)": 21,
                            "Alpha": 18,
                            "Zeta": 14
                        }
                    },
                    "e5": {
                        "word_count": 534,
                        "char_count": 2996,
                        "line_count": 42,
                        "characters": {
                            "Cid Kagenou (None (Cid Kagenou))": 3,
                            "Alpha": 7,
                            "Cid Kagenou (Cid)": 23,
                            "Zeta": 9
                        }
                    },
                    "e6": {
                        "word_count": 465,
                        "char_count": 2435,
                        "line_count": 40,
                        "characters": {
                            "Alpha": 20,
                            "Zeta": 20
                        }
                    },
                    "e7": {
                        "word_count": 721,
                        "char_count": 3905,
                        "line_count": 60,
                        "characters": {
                            "Zeta": 11,
                            "Alpha": 10,
                            "Cid Kagenou (Cid)": 29,
                            "Beta": 10
                        }
                    }
                }
            },
            "adswy": {
                "line_count": 363,
                "word_count": 4883,
                "char_count": 25790,
                "characters": {
                    "Cid Kagenou (Cid)": 156,
                    "Elisabeth": 92,
                    "Aurora": 86,
                    "Deceased Man": 2,
                    "Deceased Elderly": 5,
                    "Deceased Child": 5,
                    "Deceased Woman": 13,
                    "Staff": 3,
                    "Cid Kagenou (3 People (Cid))": 1,
                    "Aurora (3 People (Aurora))": 1,
                    "Elisabeth (3 People (Elisabeth))": 1
                },
                "episodes": {
                    "e1": {
                        "word_count": 490,
                        "char_count": 2658,
                        "line_count": 44,
                        "characters": {
                            "Cid Kagenou (Cid)": 26,
                            "Elisabeth": 15,
                            "Aurora": 3
                        }
                    },
                    "e2": {
                        "word_count": 716,
                        "char_count": 3871,
                        "line_count": 53,
                        "characters": {
                            "Cid Kagenou (Cid)": 28,
                            "Elisabeth": 8,
                            "Aurora": 17
                        }
                    },
                    "e3": {
                        "word_count": 1040,
                        "char_count": 5421,
                        "line_count": 72,
                        "characters": {
                            "Aurora": 17,
                            "Cid Kagenou (Cid)": 33,
                            "Elisabeth": 20,
                            "Deceased Man": 2
                        }
                    },
                    "e4": {
                        "word_count": 630,
                        "char_count": 3339,
                        "line_count": 52,
                        "characters": {
                            "Aurora": 14,
                            "Elisabeth": 16,
                            "Cid Kagenou (Cid)": 22
                        }
                    },
                    "e5": {
                        "word_count": 695,
                        "char_count": 3633,
                        "line_count": 42,
                        "characters": {
                            "Elisabeth": 13,
                            "Aurora": 16,
                            "Cid Kagenou (Cid)": 13
                        }
                    },
                    "e6": {
                        "word_count": 706,
                        "char_count": 3638,
                        "line_count": 47,
                        "characters": {
                            "Elisabeth": 6,
                            "Deceased Elderly": 5,
                            "Aurora": 8,
                            "Deceased Child": 5,
                            "Cid Kagenou (Cid)": 15,
                            "Deceased Woman": 8
                        }
                    },
                    "e7": {
                        "word_count": 606,
                        "char_count": 3230,
                        "line_count": 53,
                        "characters": {
                            "Cid Kagenou (Cid)": 19,
                            "Deceased Woman": 5,
                            "Aurora": 11,
                            "Elisabeth": 14,
                            "Staff": 3,
                            "Cid Kagenou (3 People (Cid))": 1,
                            "Aurora (3 People (Aurora))": 1,
                            "Elisabeth (3 People (Elisabeth))": 1
                        }
                    }
                }
            }
        }
    },
    "ssc": {
        "part_count": 3,
        "line_count": 9976,
        "word_count": 106214,
        "char_count": 608309,
        "characters": {
            "Alpha": 1320,
            "None": 53,
            "Mysterious Captain": 26,
            "Mysterious Soldier A": 10,
            "Alpha (??? (Alpha))": 5,
            "Mysterious Soldier B": 4,
            "Delta": 545,
            "Eta": 606,
            "Mysterious Soldier C": 6,
            "Epsilon": 883,
            "Mysterious Soldier D": 4,
            "Zeta": 936,
            "Gamma": 1140,
            "Mysterious Soldier E": 6,
            "Beta": 943,
            "Mysterious Soldiers": 2,
            "Cultist A": 8,
            "Cultist B": 5,
            "Cultist C": 4,
            "Cultist D": 1,
            "Cultist E": 1,
            "Cultist F": 3,
            "Lambda (Mound of Flesh (Lambda))": 1,
            "Lambda (Tawny Elf (Lambda))": 15,
            "Cid Kagenou (Cid)": 589,
            "Lambda": 379,
            "Merchant B": 11,
            "Merchant A Secretary": 10,
            "Merchant C": 2,
            "Merchant A": 31,
            "Elven Coachwoman": 5,
            "Elven Guardswoman": 7,
            "Mercenary B": 3,
            "Mercenary Veteran": 21,
            "Mercenary C": 2,
            "Victoria (??? (Victoria))": 10,
            "Follower A": 3,
            "Follower B": 1,
            "Victoria": 113,
            "Reporter": 29,
            "Beta (Beta & Epsilon (Beta))": 7,
            "Epsilon (Beta & Epsilon (Epsilon))": 7,
            "Dark Knight": 2,
            "Templar Leader": 11,
            "Claire Kagenou (Claire)": 17,
            "Old Man": 7,
            "Female Pilgrim": 1,
            "Paladin": 10,
            "Veteran Paladin": 1,
            "Alpha (None (Alpha))": 12,
            "Templar Leader A": 17,
            "Templar": 19,
            "Templars": 4,
            "Templar Leader B": 6,
            "Delta (Delta & Zeta (Delta))": 2,
            "Zeta (Delta & Zeta (Zeta))": 2,
            "Templar Leader C": 6,
            "Templar A": 17,
            "Templar B": 8,
            "Templar Leader D": 1,
            "Mist Dragon (??? (Mist Dragon))": 1,
            "Mist Dragon": 82,
            "Cid Kagenou (???? (Shadow))": 3,
            "Cid Kagenou (Shadow)": 157,
            "Alpha (Seven Shadows (Alpha))": 3,
            "Beta (Seven Shadows (Beta))": 3,
            "Gamma (Seven Shadows (Gamma))": 3,
            "Delta (Seven Shadows (Delta))": 3,
            "Epsilon (Seven Shadows (Epsilon))": 3,
            "Zeta (Seven Shadows (Zeta))": 3,
            "Eta (Seven Shadows (Eta))": 3,
            "Delta (??? (Delta))": 2,
            "MNA Journalist": 14,
            "Editor": 23,
            "Cult Member A": 32,
            "Cult Member B": 11,
            "Cult Member C": 6,
            "Templar (????? (Templar))": 14,
            "Templar C": 7,
            "Researcher": 8,
            "Cult Member A (Cult Member A & B (Cult Member A))": 3,
            "Cult Member B (Cult Member A & B (Cult Member B))": 3,
            "Cult Members": 2,
            "Cult Member Boss": 14,
            "Bandit Boss": 25,
            "Bandit A": 15,
            "Guard": 2,
            "Basilisk": 4,
            "Oriana Noble A": 1,
            "Oriana Noble B": 1,
            "Oriana Noble C": 1,
            "Dark Knight Trainee": 1,
            "Female DK Trainee": 2,
            "Mercenary A (??? (Mercenary A))": 1,
            "Mercenary A": 1,
            "Mercenary Boss": 20,
            "Alpha Wolf": 8,
            "Cult Leader": 26,
            "Cult Member": 35,
            "Zeta (??? (Zeta))": 1,
            "Alpha (Everyone (Alpha))": 1,
            "Beta (Everyone (Beta))": 1,
            "Gamma (Everyone (Gamma))": 1,
            "Delta (Everyone (Delta))": 1,
            "Epsilon (Everyone (Epsilon))": 1,
            "Eta (Everyone (Eta))": 1,
            "Mist Dragon (None (Mist Dragon))": 19,
            "Malak": 40,
            "Chi (No. 111)": 278,
            "Omega (No. 122)": 200,
            "Annerose Nichtsehen (Annerose)": 100,
            "Sergey Gorman (Sergey)": 145,
            "Velgalta Soldier A": 2,
            "Velgalta Soldier B": 3,
            "Velgalta Soldier C": 4,
            "Beta (Beta & Delta & Zeta (Beta))": 1,
            "Delta (Beta & Delta & Zeta (Delta))": 1,
            "Zeta (Beta & Delta & Zeta (Zeta))": 1,
            "Gamma (Gamma& Epsilon & Eta (Gamma))": 1,
            "Epsilon (Gamma& Epsilon & Eta (Epsilon))": 1,
            "Eta (Gamma& Epsilon & Eta (Eta))": 1,
            "Velgalta Soldier D": 1,
            "Velgalta Soldier E": 2,
            "Velgalta Soldiers": 2,
            "Malak Swarm": 3,
            "Chi (No. 111 & No. 122 (No. 111))": 5,
            "Omega (No. 111 & No. 122 (No. 122))": 5,
            "Annerose Nichtsehen (None (Annerose))": 4,
            "Chi": 74,
            "Omega": 88,
            "Malaks": 1,
            "Sergey Gorman (None (Sergey Gorman))": 32,
            "Gamma (Gamma & Epsilon (Gamma))": 1,
            "Epsilon (Gamma & Epsilon (Epsilon))": 1,
            "Olivier (??? (Olivier))": 12,
            "Bishop Drake (Bishop of Orum)": 10,
            "Bishop Drake": 6,
            "Gamma (None (Gamma))": 21,
            "Sergey Gorman (??? (Sergey Gorman))": 1,
            "Chi (??? (Karen))": 13,
            "Chi (Karen)": 180,
            "Gamma (??? (Gamma))": 1,
            "Beta (Beta & Gamma (Beta))": 2,
            "Gamma (Beta & Gamma (Gamma))": 2,
            "Mundane Mercenary": 9,
            "Cid Kagenou (None (Cid Kagenou))": 7,
            "Omega (Possessed (Omega))": 4,
            "Curie Oso (Curious Noblewoman)": 8,
            "Sergey Gorman (Sergei)": 22,
            "Velgalta Soldier": 6,
            "Cultist": 1,
            "Nu (93)": 21,
            "Beta (None (Beta))": 8,
            "Fan Passerby": 9,
            "Alpha (Alpha & Beta (Alpha))": 1,
            "Beta (Alpha & Beta (Beta))": 1,
            "Olivier": 10,
            "Garden Members": 3,
            "Nu (??? (No. 93))": 1,
            "Nu (No. 93)": 19,
            "Garden Member": 2,
            "Chi (Chi & Omega (Chi))": 1,
            "Omega (Chi & Omega (Omega))": 1,
            "Lambda (None (Lambda))": 1,
            "Iota (None (Iota))": 16,
            "Iota": 92,
            "Gamma (Gamma & Iota (Gamma))": 3,
            "Iota (Gamma & Iota (Iota))": 3,
            "Bandit?": 10
        },
        "parts": {
            "p1": {
                "chapter_count": 15,
                "line_count": 4626,
                "word_count": 47753,
                "char_count": 270458,
                "characters": {
                    "Alpha": 764,
                    "None": 39,
                    "Mysterious Captain": 26,
                    "Mysterious Soldier A": 10,
                    "Alpha (??? (Alpha))": 3,
                    "Mysterious Soldier B": 4,
                    "Delta": 272,
                    "Eta": 216,
                    "Mysterious Soldier C": 6,
                    "Epsilon": 555,
                    "Mysterious Soldier D": 4,
                    "Zeta": 521,
                    "Gamma": 491,
                    "Mysterious Soldier E": 6,
                    "Beta": 623,
                    "Mysterious Soldiers": 2,
                    "Cultist A": 1,
                    "Cultist B": 1,
                    "Cultist C": 1,
                    "Cultist D": 1,
                    "Cultist E": 1,
                    "Cultist F": 3,
                    "Lambda (Mound of Flesh (Lambda))": 1,
                    "Lambda (Tawny Elf (Lambda))": 15,
                    "Cid Kagenou (Cid)": 269,
                    "Lambda": 163,
                    "Merchant B": 11,
                    "Merchant A Secretary": 10,
                    "Merchant C": 2,
                    "Merchant A": 31,
                    "Elven Coachwoman": 5,
                    "Elven Guardswoman": 7,
                    "Mercenary B": 3,
                    "Mercenary Veteran": 21,
                    "Mercenary C": 2,
                    "Victoria (??? (Victoria))": 10,
                    "Follower A": 3,
                    "Follower B": 1,
                    "Victoria": 68,
                    "Reporter": 29,
                    "Beta (Beta & Epsilon (Beta))": 5,
                    "Epsilon (Beta & Epsilon (Epsilon))": 5,
                    "Dark Knight": 2,
                    "Templar Leader": 8,
                    "Claire Kagenou (Claire)": 8,
                    "Old Man": 7,
                    "Female Pilgrim": 1,
                    "Paladin": 10,
                    "Veteran Paladin": 1,
                    "Alpha (None (Alpha))": 3,
                    "Templar Leader A": 17,
                    "Templar": 17,
                    "Templars": 4,
                    "Templar Leader B": 6,
                    "Delta (Delta & Zeta (Delta))": 2,
                    "Zeta (Delta & Zeta (Zeta))": 2,
                    "Templar Leader C": 6,
                    "Templar A": 14,
                    "Templar B": 7,
                    "Templar Leader D": 1,
                    "Mist Dragon (??? (Mist Dragon))": 1,
                    "Mist Dragon": 62,
                    "Cid Kagenou (???? (Shadow))": 3,
                    "Cid Kagenou (Shadow)": 21,
                    "Alpha (Seven Shadows (Alpha))": 1,
                    "Beta (Seven Shadows (Beta))": 1,
                    "Gamma (Seven Shadows (Gamma))": 1,
                    "Delta (Seven Shadows (Delta))": 1,
                    "Epsilon (Seven Shadows (Epsilon))": 1,
                    "Zeta (Seven Shadows (Zeta))": 1,
                    "Eta (Seven Shadows (Eta))": 1,
                    "Delta (??? (Delta))": 1,
                    "MNA Journalist": 14,
                    "Editor": 23,
                    "Cult Member A": 25,
                    "Cult Member B": 5,
                    "Cult Member C": 5,
                    "Templar (????? (Templar))": 14,
                    "Templar C": 6,
                    "Researcher": 8,
                    "Cult Member A (Cult Member A & B (Cult Member A))": 3,
                    "Cult Member B (Cult Member A & B (Cult Member B))": 3,
                    "Cult Members": 2,
                    "Cult Member Boss": 14,
                    "Bandit Boss": 25,
                    "Bandit A": 15,
                    "Guard": 2,
                    "Basilisk": 4,
                    "Oriana Noble A": 1,
                    "Oriana Noble B": 1,
                    "Oriana Noble C": 1,
                    "Dark Knight Trainee": 1,
                    "Female DK Trainee": 2,
                    "Mercenary A (??? (Mercenary A))": 1,
                    "Mercenary A": 1,
                    "Mercenary Boss": 20,
                    "Alpha Wolf": 8
                },
                "chapters": {
                    "c1-1": {
                        "episode_count": 5,
                        "line_count": 316,
                        "word_count": 3277,
                        "char_count": 18986,
                        "characters": {
                            "Alpha": 118,
                            "None": 8,
                            "Mysterious Captain": 13,
                            "Mysterious Soldier A": 5,
                            "Alpha (??? (Alpha))": 1,
                            "Mysterious Soldier B": 2,
                            "Delta": 19,
                            "Eta": 12,
                            "Mysterious Soldier C": 3,
                            "Epsilon": 38,
                            "Mysterious Soldier D": 2,
                            "Zeta": 5,
                            "Gamma": 6,
                            "Mysterious Soldier E": 3,
                            "Beta": 41,
                            "Mysterious Soldiers": 1,
                            "Cultist A": 1,
                            "Cultist B": 1,
                            "Cultist C": 1,
                            "Cultist D": 1,
                            "Cultist E": 1,
                            "Cultist F": 3,
                            "Lambda (Mound of Flesh (Lambda))": 1,
                            "Lambda (Tawny Elf (Lambda))": 15,
                            "Cid Kagenou (Cid)": 15
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 62,
                                "word_count": 469,
                                "char_count": 2739,
                                "characters": {
                                    "Alpha": 15,
                                    "None": 8,
                                    "Mysterious Captain": 13,
                                    "Mysterious Soldier A": 5,
                                    "Alpha (??? (Alpha))": 1,
                                    "Mysterious Soldier B": 2,
                                    "Delta": 1,
                                    "Eta": 2,
                                    "Mysterious Soldier C": 3,
                                    "Epsilon": 1,
                                    "Mysterious Soldier D": 2,
                                    "Zeta": 2,
                                    "Gamma": 1,
                                    "Mysterious Soldier E": 3,
                                    "Beta": 2,
                                    "Mysterious Soldiers": 1
                                }
                            },
                            "e2": {
                                "line_count": 76,
                                "word_count": 944,
                                "char_count": 5566,
                                "characters": {
                                    "Alpha": 33,
                                    "Beta": 14,
                                    "Eta": 10,
                                    "Delta": 7,
                                    "Epsilon": 4,
                                    "Gamma": 5,
                                    "Zeta": 3
                                }
                            },
                            "e3": {
                                "line_count": 37,
                                "word_count": 361,
                                "char_count": 2102,
                                "characters": {
                                    "Beta": 17,
                                    "Alpha": 12,
                                    "Delta": 1,
                                    "Epsilon": 7
                                }
                            },
                            "e4": {
                                "line_count": 52,
                                "word_count": 522,
                                "char_count": 2951,
                                "characters": {
                                    "Cultist A": 1,
                                    "Epsilon": 7,
                                    "Alpha": 19,
                                    "Delta": 10,
                                    "Beta": 8,
                                    "Cultist B": 1,
                                    "Cultist C": 1,
                                    "Cultist D": 1,
                                    "Cultist E": 1,
                                    "Cultist F": 3
                                }
                            },
                            "e5": {
                                "line_count": 89,
                                "word_count": 981,
                                "char_count": 5628,
                                "characters": {
                                    "Epsilon": 19,
                                    "Alpha": 39,
                                    "Lambda (Mound of Flesh (Lambda))": 1,
                                    "Lambda (Tawny Elf (Lambda))": 15,
                                    "Cid Kagenou (Cid)": 15
                                }
                            }
                        }
                    },
                    "c1-10": {
                        "episode_count": 5,
                        "line_count": 286,
                        "word_count": 3510,
                        "char_count": 20203,
                        "characters": {
                            "Eta": 9,
                            "Gamma": 39,
                            "Lambda": 9,
                            "Alpha": 54,
                            "Beta": 16,
                            "Merchant B": 11,
                            "Merchant A Secretary": 10,
                            "Merchant C": 2,
                            "Merchant A": 31,
                            "None": 4,
                            "Zeta": 9,
                            "Epsilon": 10,
                            "Delta": 9,
                            "Elven Coachwoman": 5,
                            "Elven Guardswoman": 7,
                            "Mercenary B": 3,
                            "Mercenary Veteran": 21,
                            "Mercenary C": 2,
                            "Cid Kagenou (Cid)": 24,
                            "Alpha (??? (Alpha))": 1,
                            "Victoria (??? (Victoria))": 5,
                            "Follower A": 3,
                            "Follower B": 1,
                            "Victoria": 1
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 40,
                                "word_count": 438,
                                "char_count": 2547,
                                "characters": {
                                    "Eta": 8,
                                    "Gamma": 10,
                                    "Lambda": 9,
                                    "Alpha": 13
                                }
                            },
                            "e2": {
                                "line_count": 43,
                                "word_count": 653,
                                "char_count": 3790,
                                "characters": {
                                    "Beta": 13,
                                    "Merchant B": 4,
                                    "Merchant A Secretary": 5,
                                    "Merchant C": 2,
                                    "Merchant A": 5,
                                    "None": 2,
                                    "Zeta": 1,
                                    "Epsilon": 7,
                                    "Alpha": 4
                                }
                            },
                            "e3": {
                                "line_count": 49,
                                "word_count": 523,
                                "char_count": 2993,
                                "characters": {
                                    "Beta": 2,
                                    "Alpha": 9,
                                    "Epsilon": 2,
                                    "Gamma": 2,
                                    "Zeta": 7,
                                    "Eta": 1,
                                    "Delta": 2,
                                    "None": 2,
                                    "Elven Coachwoman": 5,
                                    "Elven Guardswoman": 7,
                                    "Mercenary B": 3,
                                    "Mercenary Veteran": 5,
                                    "Mercenary C": 2
                                }
                            },
                            "e4": {
                                "line_count": 104,
                                "word_count": 1279,
                                "char_count": 7358,
                                "characters": {
                                    "Merchant A Secretary": 5,
                                    "Merchant A": 24,
                                    "Merchant B": 7,
                                    "Gamma": 27,
                                    "Cid Kagenou (Cid)": 13,
                                    "Mercenary Veteran": 15,
                                    "Alpha (??? (Alpha))": 1,
                                    "Alpha": 8,
                                    "Delta": 4
                                }
                            },
                            "e5": {
                                "line_count": 50,
                                "word_count": 617,
                                "char_count": 3515,
                                "characters": {
                                    "Epsilon": 1,
                                    "Beta": 1,
                                    "Zeta": 1,
                                    "Mercenary Veteran": 1,
                                    "Delta": 3,
                                    "Alpha": 20,
                                    "Merchant A": 2,
                                    "Cid Kagenou (Cid)": 11,
                                    "Victoria (??? (Victoria))": 5,
                                    "Follower A": 3,
                                    "Follower B": 1,
                                    "Victoria": 1
                                }
                            }
                        }
                    },
                    "c1-11": {
                        "episode_count": 5,
                        "line_count": 283,
                        "word_count": 2804,
                        "char_count": 15189,
                        "characters": {
                            "Beta": 103,
                            "Zeta": 13,
                            "Reporter": 29,
                            "Alpha": 58,
                            "Epsilon": 29,
                            "Beta (Beta & Epsilon (Beta))": 1,
                            "Epsilon (Beta & Epsilon (Epsilon))": 1,
                            "Gamma": 16,
                            "Lambda": 11,
                            "Cid Kagenou (Cid)": 22
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 52,
                                "word_count": 626,
                                "char_count": 3356,
                                "characters": {
                                    "Beta": 39,
                                    "Zeta": 13
                                }
                            },
                            "e2": {
                                "line_count": 56,
                                "word_count": 509,
                                "char_count": 2688,
                                "characters": {
                                    "Reporter": 29,
                                    "Beta": 27
                                }
                            },
                            "e3": {
                                "line_count": 50,
                                "word_count": 445,
                                "char_count": 2386,
                                "characters": {
                                    "Alpha": 22,
                                    "Beta": 17,
                                    "Epsilon": 10,
                                    "Beta (Beta & Epsilon (Beta))": 1,
                                    "Epsilon (Beta & Epsilon (Epsilon))": 1
                                }
                            },
                            "e4": {
                                "line_count": 50,
                                "word_count": 506,
                                "char_count": 2838,
                                "characters": {
                                    "Beta": 12,
                                    "Epsilon": 11,
                                    "Gamma": 16,
                                    "Lambda": 11
                                }
                            },
                            "e5": {
                                "line_count": 74,
                                "word_count": 718,
                                "char_count": 3921,
                                "characters": {
                                    "Beta": 8,
                                    "Epsilon": 8,
                                    "Alpha": 36,
                                    "Cid Kagenou (Cid)": 22
                                }
                            }
                        }
                    },
                    "c1-12": {
                        "episode_count": 5,
                        "line_count": 313,
                        "word_count": 3395,
                        "char_count": 18548,
                        "characters": {
                            "None": 13,
                            "Beta": 127,
                            "Epsilon": 120,
                            "Beta (Beta & Epsilon (Beta))": 4,
                            "Epsilon (Beta & Epsilon (Epsilon))": 4,
                            "Alpha": 15,
                            "Dark Knight": 2,
                            "Templar Leader": 8,
                            "Cid Kagenou (Cid)": 16,
                            "Claire Kagenou (Claire)": 4
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 50,
                                "word_count": 605,
                                "char_count": 3500,
                                "characters": {
                                    "None": 8,
                                    "Beta": 16,
                                    "Epsilon": 13,
                                    "Beta (Beta & Epsilon (Beta))": 2,
                                    "Epsilon (Beta & Epsilon (Epsilon))": 2,
                                    "Alpha": 11
                                }
                            },
                            "e2": {
                                "line_count": 65,
                                "word_count": 859,
                                "char_count": 4628,
                                "characters": {
                                    "Epsilon": 27,
                                    "Beta": 32,
                                    "Beta (Beta & Epsilon (Beta))": 1,
                                    "Epsilon (Beta & Epsilon (Epsilon))": 1,
                                    "None": 5
                                }
                            },
                            "e3": {
                                "line_count": 47,
                                "word_count": 544,
                                "char_count": 2915,
                                "characters": {
                                    "Epsilon": 24,
                                    "Beta": 23
                                }
                            },
                            "e4": {
                                "line_count": 66,
                                "word_count": 673,
                                "char_count": 3736,
                                "characters": {
                                    "Dark Knight": 2,
                                    "Beta": 37,
                                    "Epsilon": 23,
                                    "Templar Leader": 3,
                                    "Beta (Beta & Epsilon (Beta))": 1,
                                    "Epsilon (Beta & Epsilon (Epsilon))": 1
                                }
                            },
                            "e5": {
                                "line_count": 81,
                                "word_count": 714,
                                "char_count": 3769,
                                "characters": {
                                    "Templar Leader": 5,
                                    "Epsilon": 33,
                                    "Beta": 19,
                                    "Alpha": 4,
                                    "Cid Kagenou (Cid)": 16,
                                    "Claire Kagenou (Claire)": 4
                                }
                            }
                        }
                    },
                    "c1-13": {
                        "episode_count": 5,
                        "line_count": 298,
                        "word_count": 3139,
                        "char_count": 17366,
                        "characters": {
                            "Alpha": 24,
                            "Zeta": 200,
                            "Old Man": 7,
                            "None": 4,
                            "Victoria": 32,
                            "Female Pilgrim": 1,
                            "Paladin": 10,
                            "Veteran Paladin": 1,
                            "Cid Kagenou (Cid)": 19
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 46,
                                "word_count": 556,
                                "char_count": 3065,
                                "characters": {
                                    "Alpha": 24,
                                    "Zeta": 22
                                }
                            },
                            "e2": {
                                "line_count": 50,
                                "word_count": 474,
                                "char_count": 2609,
                                "characters": {
                                    "Zeta": 31,
                                    "Old Man": 7,
                                    "None": 3,
                                    "Victoria": 8,
                                    "Female Pilgrim": 1
                                }
                            },
                            "e3": {
                                "line_count": 48,
                                "word_count": 606,
                                "char_count": 3484,
                                "characters": {
                                    "Zeta": 48
                                }
                            },
                            "e4": {
                                "line_count": 56,
                                "word_count": 601,
                                "char_count": 3552,
                                "characters": {
                                    "Zeta": 54,
                                    "Paladin": 1,
                                    "Veteran Paladin": 1
                                }
                            },
                            "e5": {
                                "line_count": 98,
                                "word_count": 902,
                                "char_count": 4656,
                                "characters": {
                                    "Paladin": 9,
                                    "None": 1,
                                    "Zeta": 45,
                                    "Victoria": 24,
                                    "Cid Kagenou (Cid)": 19
                                }
                            }
                        }
                    },
                    "c1-14": {
                        "episode_count": 5,
                        "line_count": 271,
                        "word_count": 2720,
                        "char_count": 15239,
                        "characters": {
                            "Delta": 18,
                            "Lambda": 32,
                            "Eta": 38,
                            "Epsilon": 43,
                            "Alpha": 44,
                            "Beta": 19,
                            "Gamma": 19,
                            "Zeta": 18,
                            "Mysterious Captain": 13,
                            "Mysterious Soldier A": 5,
                            "Alpha (??? (Alpha))": 1,
                            "Mysterious Soldier B": 2,
                            "Mysterious Soldier C": 3,
                            "Mysterious Soldier D": 2,
                            "Mysterious Soldier E": 3,
                            "Mysterious Soldiers": 1,
                            "Cid Kagenou (Cid)": 8,
                            "Alpha (None (Alpha))": 2
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 45,
                                "word_count": 433,
                                "char_count": 2486,
                                "characters": {
                                    "Delta": 13,
                                    "Lambda": 32
                                }
                            },
                            "e2": {
                                "line_count": 70,
                                "word_count": 543,
                                "char_count": 3037,
                                "characters": {
                                    "Eta": 31,
                                    "Epsilon": 39
                                }
                            },
                            "e3": {
                                "line_count": 36,
                                "word_count": 583,
                                "char_count": 3272,
                                "characters": {
                                    "Alpha": 6,
                                    "Beta": 10,
                                    "Gamma": 11,
                                    "Zeta": 9
                                }
                            },
                            "e4": {
                                "line_count": 31,
                                "word_count": 515,
                                "char_count": 2721,
                                "characters": {
                                    "Alpha": 18,
                                    "Beta": 5,
                                    "Gamma": 4,
                                    "Zeta": 4
                                }
                            },
                            "e5": {
                                "line_count": 89,
                                "word_count": 646,
                                "char_count": 3723,
                                "characters": {
                                    "Alpha": 20,
                                    "Gamma": 4,
                                    "Beta": 4,
                                    "Zeta": 5,
                                    "Eta": 7,
                                    "Epsilon": 4,
                                    "Delta": 5,
                                    "Mysterious Captain": 13,
                                    "Mysterious Soldier A": 5,
                                    "Alpha (??? (Alpha))": 1,
                                    "Mysterious Soldier B": 2,
                                    "Mysterious Soldier C": 3,
                                    "Mysterious Soldier D": 2,
                                    "Mysterious Soldier E": 3,
                                    "Mysterious Soldiers": 1,
                                    "Cid Kagenou (Cid)": 8,
                                    "Alpha (None (Alpha))": 2
                                }
                            }
                        }
                    },
                    "c1-15": {
                        "episode_count": 5,
                        "line_count": 295,
                        "word_count": 2558,
                        "char_count": 14337,
                        "characters": {
                            "Templar Leader A": 17,
                            "Templar": 15,
                            "Eta": 22,
                            "Templars": 4,
                            "Epsilon": 25,
                            "Delta": 20,
                            "Templar Leader B": 6,
                            "Zeta": 51,
                            "None": 1,
                            "Delta (Delta & Zeta (Delta))": 1,
                            "Zeta (Delta & Zeta (Zeta))": 1,
                            "Gamma": 27,
                            "Templar Leader C": 6,
                            "Templar A": 3,
                            "Beta": 20,
                            "Templar B": 2,
                            "Victoria (??? (Victoria))": 5,
                            "Victoria": 35,
                            "Alpha": 33,
                            "Templar Leader D": 1
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 58,
                                "word_count": 432,
                                "char_count": 2598,
                                "characters": {
                                    "Templar Leader A": 17,
                                    "Templar": 5,
                                    "Eta": 17,
                                    "Templars": 1,
                                    "Epsilon": 18
                                }
                            },
                            "e2": {
                                "line_count": 46,
                                "word_count": 410,
                                "char_count": 2223,
                                "characters": {
                                    "Delta": 15,
                                    "Templar": 4,
                                    "Templar Leader B": 6,
                                    "Zeta": 19,
                                    "None": 1,
                                    "Delta (Delta & Zeta (Delta))": 1,
                                    "Zeta (Delta & Zeta (Zeta))": 1
                                }
                            },
                            "e3": {
                                "line_count": 55,
                                "word_count": 464,
                                "char_count": 2535,
                                "characters": {
                                    "Gamma": 25,
                                    "Templar Leader C": 6,
                                    "Templar A": 3,
                                    "Beta": 19,
                                    "Templar B": 2
                                }
                            },
                            "e4": {
                                "line_count": 57,
                                "word_count": 551,
                                "char_count": 3077,
                                "characters": {
                                    "Templar": 5,
                                    "Victoria (??? (Victoria))": 5,
                                    "Victoria": 15,
                                    "Templars": 2,
                                    "Eta": 3,
                                    "Epsilon": 5,
                                    "Alpha": 16,
                                    "Zeta": 6
                                }
                            },
                            "e5": {
                                "line_count": 78,
                                "word_count": 701,
                                "char_count": 3904,
                                "characters": {
                                    "Zeta": 26,
                                    "Alpha": 17,
                                    "Victoria": 20,
                                    "Templar Leader D": 1,
                                    "Templar": 1,
                                    "Delta": 5,
                                    "Gamma": 2,
                                    "Epsilon": 2,
                                    "Beta": 1,
                                    "Eta": 2,
                                    "Templars": 1
                                }
                            }
                        }
                    },
                    "c1-2": {
                        "episode_count": 5,
                        "line_count": 374,
                        "word_count": 3839,
                        "char_count": 21998,
                        "characters": {
                            "Lambda": 20,
                            "Eta": 4,
                            "Delta": 29,
                            "Epsilon": 27,
                            "Gamma": 25,
                            "Beta": 45,
                            "Alpha": 65,
                            "Zeta": 26,
                            "Cid Kagenou (Cid)": 35,
                            "Mist Dragon (??? (Mist Dragon))": 1,
                            "Mist Dragon": 62,
                            "Cid Kagenou (???? (Shadow))": 3,
                            "Cid Kagenou (Shadow)": 21,
                            "Alpha (Seven Shadows (Alpha))": 1,
                            "Beta (Seven Shadows (Beta))": 1,
                            "Gamma (Seven Shadows (Gamma))": 1,
                            "Delta (Seven Shadows (Delta))": 1,
                            "Epsilon (Seven Shadows (Epsilon))": 1,
                            "Zeta (Seven Shadows (Zeta))": 1,
                            "Eta (Seven Shadows (Eta))": 1,
                            "Claire Kagenou (Claire)": 4
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 63,
                                "word_count": 696,
                                "char_count": 3935,
                                "characters": {
                                    "Lambda": 4,
                                    "Eta": 4,
                                    "Delta": 8,
                                    "Epsilon": 6,
                                    "Gamma": 4,
                                    "Beta": 9,
                                    "Alpha": 16,
                                    "Zeta": 6,
                                    "Cid Kagenou (Cid)": 6
                                }
                            },
                            "e2": {
                                "line_count": 47,
                                "word_count": 622,
                                "char_count": 3669,
                                "characters": {
                                    "Beta": 7,
                                    "Delta": 7,
                                    "Gamma": 2,
                                    "Epsilon": 1,
                                    "Zeta": 4,
                                    "Alpha": 13,
                                    "Lambda": 13
                                }
                            },
                            "e3": {
                                "line_count": 100,
                                "word_count": 1080,
                                "char_count": 6122,
                                "characters": {
                                    "Epsilon": 8,
                                    "Beta": 16,
                                    "Alpha": 20,
                                    "Gamma": 4,
                                    "Zeta": 9,
                                    "Delta": 7,
                                    "Lambda": 3,
                                    "Mist Dragon (??? (Mist Dragon))": 1,
                                    "Cid Kagenou (Cid)": 3,
                                    "Mist Dragon": 29
                                }
                            },
                            "e4": {
                                "line_count": 70,
                                "word_count": 526,
                                "char_count": 2973,
                                "characters": {
                                    "Zeta": 5,
                                    "Mist Dragon": 12,
                                    "Beta": 11,
                                    "Delta": 5,
                                    "Epsilon": 10,
                                    "Cid Kagenou (Cid)": 6,
                                    "Gamma": 6,
                                    "Alpha": 8,
                                    "Cid Kagenou (???? (Shadow))": 3,
                                    "Cid Kagenou (Shadow)": 4
                                }
                            },
                            "e5": {
                                "line_count": 88,
                                "word_count": 915,
                                "char_count": 5299,
                                "characters": {
                                    "Alpha (Seven Shadows (Alpha))": 1,
                                    "Beta (Seven Shadows (Beta))": 1,
                                    "Gamma (Seven Shadows (Gamma))": 1,
                                    "Delta (Seven Shadows (Delta))": 1,
                                    "Epsilon (Seven Shadows (Epsilon))": 1,
                                    "Zeta (Seven Shadows (Zeta))": 1,
                                    "Eta (Seven Shadows (Eta))": 1,
                                    "Cid Kagenou (Shadow)": 17,
                                    "Mist Dragon": 21,
                                    "Beta": 2,
                                    "Epsilon": 2,
                                    "Zeta": 2,
                                    "Delta": 2,
                                    "Gamma": 9,
                                    "Alpha": 8,
                                    "Cid Kagenou (Cid)": 20,
                                    "Claire Kagenou (Claire)": 4
                                }
                            }
                        }
                    },
                    "c1-3": {
                        "episode_count": 5,
                        "line_count": 282,
                        "word_count": 2479,
                        "char_count": 14867,
                        "characters": {
                            "None": 5,
                            "Alpha": 66,
                            "Lambda": 50,
                            "Eta": 88,
                            "Cid Kagenou (Cid)": 18,
                            "Gamma": 46,
                            "Delta (??? (Delta))": 1,
                            "Delta": 8
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 49,
                                "word_count": 414,
                                "char_count": 2416,
                                "characters": {
                                    "None": 5,
                                    "Alpha": 11,
                                    "Lambda": 17,
                                    "Eta": 16
                                }
                            },
                            "e2": {
                                "line_count": 60,
                                "word_count": 565,
                                "char_count": 3505,
                                "characters": {
                                    "Eta": 18,
                                    "Cid Kagenou (Cid)": 1,
                                    "Alpha": 20,
                                    "Gamma": 15,
                                    "Lambda": 6
                                }
                            },
                            "e3": {
                                "line_count": 79,
                                "word_count": 706,
                                "char_count": 4268,
                                "characters": {
                                    "Alpha": 15,
                                    "Eta": 25,
                                    "Gamma": 27,
                                    "Lambda": 11,
                                    "Cid Kagenou (Cid)": 1
                                }
                            },
                            "e4": {
                                "line_count": 52,
                                "word_count": 358,
                                "char_count": 2083,
                                "characters": {
                                    "Gamma": 4,
                                    "Lambda": 11,
                                    "Eta": 17,
                                    "Alpha": 13,
                                    "Delta (??? (Delta))": 1,
                                    "Delta": 6
                                }
                            },
                            "e5": {
                                "line_count": 42,
                                "word_count": 436,
                                "char_count": 2595,
                                "characters": {
                                    "Delta": 2,
                                    "Alpha": 7,
                                    "Lambda": 5,
                                    "Eta": 12,
                                    "Cid Kagenou (Cid)": 16
                                }
                            }
                        }
                    },
                    "c1-4": {
                        "episode_count": 5,
                        "line_count": 300,
                        "word_count": 2708,
                        "char_count": 15450,
                        "characters": {
                            "Zeta": 131,
                            "Eta": 41,
                            "Gamma": 114,
                            "Cid Kagenou (Cid)": 14
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 59,
                                "word_count": 464,
                                "char_count": 2739,
                                "characters": {
                                    "Zeta": 25,
                                    "Eta": 14,
                                    "Gamma": 19,
                                    "Cid Kagenou (Cid)": 1
                                }
                            },
                            "e2": {
                                "line_count": 52,
                                "word_count": 447,
                                "char_count": 2531,
                                "characters": {
                                    "Zeta": 24,
                                    "Gamma": 13,
                                    "Eta": 15
                                }
                            },
                            "e3": {
                                "line_count": 65,
                                "word_count": 545,
                                "char_count": 3094,
                                "characters": {
                                    "Eta": 12,
                                    "Zeta": 26,
                                    "Gamma": 27
                                }
                            },
                            "e4": {
                                "line_count": 65,
                                "word_count": 626,
                                "char_count": 3535,
                                "characters": {
                                    "Gamma": 36,
                                    "Zeta": 29
                                }
                            },
                            "e5": {
                                "line_count": 59,
                                "word_count": 626,
                                "char_count": 3551,
                                "characters": {
                                    "Gamma": 19,
                                    "Zeta": 27,
                                    "Cid Kagenou (Cid)": 13
                                }
                            }
                        }
                    },
                    "c1-5": {
                        "episode_count": 5,
                        "line_count": 350,
                        "word_count": 3786,
                        "char_count": 21718,
                        "characters": {
                            "Beta": 215,
                            "Alpha": 9,
                            "Zeta": 19,
                            "MNA Journalist": 14,
                            "Editor": 23,
                            "Cid Kagenou (Cid)": 34,
                            "None": 4,
                            "Epsilon": 12,
                            "Cult Member A": 2,
                            "Alpha (None (Alpha))": 1,
                            "Cult Member B": 1,
                            "Cult Member C": 2,
                            "Templar (????? (Templar))": 14
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 55,
                                "word_count": 722,
                                "char_count": 4133,
                                "characters": {
                                    "Beta": 46,
                                    "Alpha": 9
                                }
                            },
                            "e2": {
                                "line_count": 59,
                                "word_count": 517,
                                "char_count": 2875,
                                "characters": {
                                    "Beta": 33,
                                    "Zeta": 12,
                                    "MNA Journalist": 14
                                }
                            },
                            "e3": {
                                "line_count": 86,
                                "word_count": 894,
                                "char_count": 5140,
                                "characters": {
                                    "Editor": 23,
                                    "Beta": 47,
                                    "Cid Kagenou (Cid)": 12,
                                    "None": 4
                                }
                            },
                            "e4": {
                                "line_count": 72,
                                "word_count": 816,
                                "char_count": 4820,
                                "characters": {
                                    "Epsilon": 12,
                                    "Beta": 44,
                                    "Cult Member A": 2,
                                    "Zeta": 4,
                                    "Alpha (None (Alpha))": 1,
                                    "Cult Member B": 1,
                                    "Cult Member C": 2,
                                    "Templar (????? (Templar))": 6
                                }
                            },
                            "e5": {
                                "line_count": 78,
                                "word_count": 837,
                                "char_count": 4750,
                                "characters": {
                                    "Templar (????? (Templar))": 8,
                                    "Beta": 45,
                                    "Cid Kagenou (Cid)": 22,
                                    "Zeta": 3
                                }
                            }
                        }
                    },
                    "c1-6": {
                        "episode_count": 5,
                        "line_count": 320,
                        "word_count": 3278,
                        "char_count": 18556,
                        "characters": {
                            "Beta": 18,
                            "Alpha": 125,
                            "Epsilon": 56,
                            "Delta": 53,
                            "Lambda": 12,
                            "Cult Member B": 1,
                            "Cult Member A": 20,
                            "Templar": 2,
                            "Templar B": 5,
                            "Templar A": 11,
                            "Templar C": 6,
                            "Cid Kagenou (Cid)": 11
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 38,
                                "word_count": 521,
                                "char_count": 2985,
                                "characters": {
                                    "Beta": 18,
                                    "Alpha": 20
                                }
                            },
                            "e2": {
                                "line_count": 46,
                                "word_count": 580,
                                "char_count": 3209,
                                "characters": {
                                    "Epsilon": 12,
                                    "Alpha": 20,
                                    "Delta": 14
                                }
                            },
                            "e3": {
                                "line_count": 55,
                                "word_count": 631,
                                "char_count": 3503,
                                "characters": {
                                    "Alpha": 22,
                                    "Lambda": 12,
                                    "Epsilon": 12,
                                    "Delta": 9
                                }
                            },
                            "e4": {
                                "line_count": 81,
                                "word_count": 666,
                                "char_count": 3815,
                                "characters": {
                                    "Alpha": 28,
                                    "Cult Member B": 1,
                                    "Delta": 16,
                                    "Epsilon": 14,
                                    "Cult Member A": 20,
                                    "Templar": 2
                                }
                            },
                            "e5": {
                                "line_count": 100,
                                "word_count": 880,
                                "char_count": 5044,
                                "characters": {
                                    "Templar B": 5,
                                    "Alpha": 35,
                                    "Templar A": 11,
                                    "Templar C": 6,
                                    "Delta": 14,
                                    "Epsilon": 18,
                                    "Cid Kagenou (Cid)": 11
                                }
                            }
                        }
                    },
                    "c1-7": {
                        "episode_count": 5,
                        "line_count": 334,
                        "word_count": 3165,
                        "char_count": 17807,
                        "characters": {
                            "Epsilon": 17,
                            "Delta": 116,
                            "Zeta": 37,
                            "Alpha": 104,
                            "Delta (Delta & Zeta (Delta))": 1,
                            "Zeta (Delta & Zeta (Zeta))": 1,
                            "Researcher": 8,
                            "Cult Member A": 3,
                            "Cult Member B": 3,
                            "Cult Member A (Cult Member A & B (Cult Member A))": 3,
                            "Cult Member B (Cult Member A & B (Cult Member B))": 3,
                            "Cult Members": 2,
                            "Cult Member Boss": 14,
                            "Cult Member C": 3,
                            "Cid Kagenou (Cid)": 19
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 54,
                                "word_count": 640,
                                "char_count": 3609,
                                "characters": {
                                    "Epsilon": 17,
                                    "Delta": 10,
                                    "Zeta": 12,
                                    "Alpha": 15
                                }
                            },
                            "e2": {
                                "line_count": 69,
                                "word_count": 643,
                                "char_count": 3579,
                                "characters": {
                                    "Delta": 31,
                                    "Zeta": 9,
                                    "Alpha": 29
                                }
                            },
                            "e3": {
                                "line_count": 57,
                                "word_count": 599,
                                "char_count": 3416,
                                "characters": {
                                    "Alpha": 13,
                                    "Zeta": 10,
                                    "Delta": 16,
                                    "Delta (Delta & Zeta (Delta))": 1,
                                    "Zeta (Delta & Zeta (Zeta))": 1,
                                    "Researcher": 8,
                                    "Cult Member A": 3,
                                    "Cult Member B": 3,
                                    "Cult Member A (Cult Member A & B (Cult Member A))": 3,
                                    "Cult Member B (Cult Member A & B (Cult Member B))": 3
                                }
                            },
                            "e4": {
                                "line_count": 69,
                                "word_count": 543,
                                "char_count": 3009,
                                "characters": {
                                    "Alpha": 26,
                                    "Delta": 24,
                                    "Cult Members": 2,
                                    "Cult Member Boss": 14,
                                    "Cult Member C": 3
                                }
                            },
                            "e5": {
                                "line_count": 81,
                                "word_count": 740,
                                "char_count": 4194,
                                "characters": {
                                    "Delta": 35,
                                    "Alpha": 21,
                                    "Zeta": 6,
                                    "Cid Kagenou (Cid)": 19
                                }
                            }
                        }
                    },
                    "c1-8": {
                        "episode_count": 5,
                        "line_count": 323,
                        "word_count": 3700,
                        "char_count": 21120,
                        "characters": {
                            "Epsilon": 178,
                            "Alpha": 30,
                            "Cid Kagenou (Cid)": 20,
                            "Gamma": 35,
                            "Lambda": 29,
                            "Bandit Boss": 11,
                            "Bandit A": 6,
                            "Eta": 2,
                            "Guard": 2,
                            "Basilisk": 4,
                            "Oriana Noble A": 1,
                            "Oriana Noble B": 1,
                            "Oriana Noble C": 1,
                            "Dark Knight Trainee": 1,
                            "Female DK Trainee": 2
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 55,
                                "word_count": 672,
                                "char_count": 4039,
                                "characters": {
                                    "Epsilon": 43,
                                    "Alpha": 10,
                                    "Cid Kagenou (Cid)": 2
                                }
                            },
                            "e2": {
                                "line_count": 71,
                                "word_count": 846,
                                "char_count": 4797,
                                "characters": {
                                    "Alpha": 15,
                                    "Gamma": 25,
                                    "Epsilon": 20,
                                    "Lambda": 11
                                }
                            },
                            "e3": {
                                "line_count": 60,
                                "word_count": 677,
                                "char_count": 3859,
                                "characters": {
                                    "Lambda": 18,
                                    "Epsilon": 30,
                                    "Gamma": 7,
                                    "Alpha": 5
                                }
                            },
                            "e4": {
                                "line_count": 57,
                                "word_count": 678,
                                "char_count": 3809,
                                "characters": {
                                    "Epsilon": 49,
                                    "Bandit Boss": 2,
                                    "Bandit A": 2,
                                    "Eta": 2,
                                    "Guard": 2
                                }
                            },
                            "e5": {
                                "line_count": 80,
                                "word_count": 827,
                                "char_count": 4616,
                                "characters": {
                                    "Bandit Boss": 9,
                                    "Bandit A": 4,
                                    "Basilisk": 4,
                                    "Epsilon": 36,
                                    "Oriana Noble A": 1,
                                    "Oriana Noble B": 1,
                                    "Oriana Noble C": 1,
                                    "Dark Knight Trainee": 1,
                                    "Female DK Trainee": 2,
                                    "Gamma": 3,
                                    "Cid Kagenou (Cid)": 18
                                }
                            }
                        }
                    },
                    "c1-9": {
                        "episode_count": 5,
                        "line_count": 281,
                        "word_count": 3395,
                        "char_count": 19074,
                        "characters": {
                            "Alpha": 19,
                            "Gamma": 164,
                            "Beta": 19,
                            "Zeta": 12,
                            "Bandit Boss": 14,
                            "Bandit A": 9,
                            "Mercenary A (??? (Mercenary A))": 1,
                            "Mercenary A": 1,
                            "Mercenary Boss": 20,
                            "Alpha Wolf": 8,
                            "Cid Kagenou (Cid)": 14
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 35,
                                "word_count": 616,
                                "char_count": 3434,
                                "characters": {
                                    "Alpha": 15,
                                    "Gamma": 20
                                }
                            },
                            "e2": {
                                "line_count": 64,
                                "word_count": 854,
                                "char_count": 4764,
                                "characters": {
                                    "Gamma": 45,
                                    "Beta": 19
                                }
                            },
                            "e3": {
                                "line_count": 41,
                                "word_count": 590,
                                "char_count": 3393,
                                "characters": {
                                    "Gamma": 29,
                                    "Zeta": 12
                                }
                            },
                            "e4": {
                                "line_count": 57,
                                "word_count": 485,
                                "char_count": 2734,
                                "characters": {
                                    "Gamma": 26,
                                    "Bandit Boss": 12,
                                    "Bandit A": 9,
                                    "Mercenary A (??? (Mercenary A))": 1,
                                    "Mercenary A": 1,
                                    "Mercenary Boss": 6,
                                    "Alpha Wolf": 2
                                }
                            },
                            "e5": {
                                "line_count": 84,
                                "word_count": 850,
                                "char_count": 4749,
                                "characters": {
                                    "Alpha Wolf": 6,
                                    "Gamma": 44,
                                    "Bandit Boss": 2,
                                    "Mercenary Boss": 14,
                                    "Alpha": 4,
                                    "Cid Kagenou (Cid)": 14
                                }
                            }
                        }
                    }
                }
            },
            "p2": {
                "chapter_count": 13,
                "line_count": 4137,
                "word_count": 44374,
                "char_count": 257580,
                "characters": {
                    "Alpha (None (Alpha))": 9,
                    "Zeta": 361,
                    "Alpha (??? (Alpha))": 1,
                    "Alpha": 339,
                    "Eta": 311,
                    "Cult Leader": 26,
                    "Cult Member": 7,
                    "Gamma": 508,
                    "Zeta (??? (Zeta))": 1,
                    "Delta": 234,
                    "Beta": 203,
                    "Epsilon": 306,
                    "Alpha (Everyone (Alpha))": 1,
                    "Beta (Everyone (Beta))": 1,
                    "Gamma (Everyone (Gamma))": 1,
                    "Delta (Everyone (Delta))": 1,
                    "Epsilon (Everyone (Epsilon))": 1,
                    "Eta (Everyone (Eta))": 1,
                    "Beta (Beta & Epsilon (Beta))": 2,
                    "Epsilon (Beta & Epsilon (Epsilon))": 2,
                    "Cid Kagenou (Cid)": 249,
                    "Mist Dragon": 20,
                    "Mist Dragon (None (Mist Dragon))": 19,
                    "Malak": 40,
                    "Chi (No. 111)": 278,
                    "Omega (No. 122)": 200,
                    "Annerose Nichtsehen (Annerose)": 100,
                    "Victoria": 45,
                    "Claire Kagenou (Claire)": 9,
                    "Sergey Gorman (Sergey)": 145,
                    "Velgalta Soldier A": 2,
                    "Velgalta Soldier B": 3,
                    "Velgalta Soldier C": 4,
                    "Beta (Beta & Delta & Zeta (Beta))": 1,
                    "Delta (Beta & Delta & Zeta (Delta))": 1,
                    "Zeta (Beta & Delta & Zeta (Zeta))": 1,
                    "Gamma (Gamma& Epsilon & Eta (Gamma))": 1,
                    "Epsilon (Gamma& Epsilon & Eta (Epsilon))": 1,
                    "Eta (Gamma& Epsilon & Eta (Eta))": 1,
                    "Velgalta Soldier D": 1,
                    "Velgalta Soldier E": 2,
                    "Velgalta Soldiers": 2,
                    "Malak Swarm": 3,
                    "Cid Kagenou (Shadow)": 136,
                    "Chi (No. 111 & No. 122 (No. 111))": 5,
                    "Omega (No. 111 & No. 122 (No. 122))": 5,
                    "Annerose Nichtsehen (None (Annerose))": 4,
                    "Chi": 11,
                    "Omega": 8,
                    "Malaks": 1,
                    "Sergey Gorman (None (Sergey Gorman))": 32,
                    "Gamma (Gamma & Epsilon (Gamma))": 1,
                    "Epsilon (Gamma & Epsilon (Epsilon))": 1,
                    "Olivier (??? (Olivier))": 2,
                    "Cult Member A": 7,
                    "Templar": 2,
                    "Lambda": 144,
                    "Cult Member B": 6,
                    "Cult Member C": 1,
                    "Bishop Drake (Bishop of Orum)": 10,
                    "Bishop Drake": 6,
                    "Gamma (None (Gamma))": 21,
                    "None": 12,
                    "Sergey Gorman (??? (Sergey Gorman))": 1,
                    "Chi (??? (Karen))": 13,
                    "Chi (Karen)": 180,
                    "Gamma (??? (Gamma))": 1,
                    "Beta (Beta & Gamma (Beta))": 2,
                    "Gamma (Beta & Gamma (Gamma))": 2,
                    "Mundane Mercenary": 9,
                    "Cultist A": 7,
                    "Cid Kagenou (None (Cid Kagenou))": 7,
                    "Cultist B": 4,
                    "Cultist C": 3,
                    "Templar A": 3,
                    "Templar Leader": 3,
                    "Templar B": 1,
                    "Templar C": 1,
                    "Omega (Possessed (Omega))": 4,
                    "Curie Oso (Curious Noblewoman)": 8,
                    "Sergey Gorman (Sergei)": 22,
                    "Velgalta Soldier": 6,
                    "Cultist": 1
                },
                "chapters": {
                    "c2-1": {
                        "episode_count": 5,
                        "line_count": 320,
                        "word_count": 3954,
                        "char_count": 22810,
                        "characters": {
                            "Alpha (None (Alpha))": 9,
                            "Zeta": 116,
                            "Alpha (??? (Alpha))": 1,
                            "Alpha": 51,
                            "Eta": 19,
                            "Cult Leader": 7,
                            "Cult Member": 7,
                            "Gamma": 28,
                            "Zeta (??? (Zeta))": 1,
                            "Delta": 11,
                            "Beta": 14,
                            "Epsilon": 16,
                            "Alpha (Everyone (Alpha))": 1,
                            "Beta (Everyone (Beta))": 1,
                            "Gamma (Everyone (Gamma))": 1,
                            "Delta (Everyone (Delta))": 1,
                            "Epsilon (Everyone (Epsilon))": 1,
                            "Eta (Everyone (Eta))": 1,
                            "Beta (Beta & Epsilon (Beta))": 1,
                            "Epsilon (Beta & Epsilon (Epsilon))": 1,
                            "Cid Kagenou (Cid)": 32
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 42,
                                "word_count": 439,
                                "char_count": 2508,
                                "characters": {
                                    "Alpha (None (Alpha))": 9,
                                    "Zeta": 19,
                                    "Alpha (??? (Alpha))": 1,
                                    "Alpha": 13
                                }
                            },
                            "e2": {
                                "line_count": 57,
                                "word_count": 720,
                                "char_count": 4235,
                                "characters": {
                                    "Zeta": 44,
                                    "Eta": 13
                                }
                            },
                            "e3": {
                                "line_count": 65,
                                "word_count": 817,
                                "char_count": 4654,
                                "characters": {
                                    "Cult Leader": 7,
                                    "Cult Member": 7,
                                    "Zeta": 32,
                                    "Gamma": 9,
                                    "Zeta (??? (Zeta))": 1,
                                    "Alpha": 1,
                                    "Delta": 5,
                                    "Beta": 1,
                                    "Epsilon": 1,
                                    "Alpha (Everyone (Alpha))": 1,
                                    "Beta (Everyone (Beta))": 1,
                                    "Gamma (Everyone (Gamma))": 1,
                                    "Delta (Everyone (Delta))": 1,
                                    "Epsilon (Everyone (Epsilon))": 1,
                                    "Eta (Everyone (Eta))": 1
                                }
                            },
                            "e4": {
                                "line_count": 71,
                                "word_count": 852,
                                "char_count": 5001,
                                "characters": {
                                    "Delta": 5,
                                    "Eta": 5,
                                    "Gamma": 12,
                                    "Beta": 10,
                                    "Epsilon": 11,
                                    "Zeta": 13,
                                    "Alpha": 15
                                }
                            },
                            "e5": {
                                "line_count": 79,
                                "word_count": 1126,
                                "char_count": 6412,
                                "characters": {
                                    "Epsilon": 4,
                                    "Zeta": 8,
                                    "Gamma": 7,
                                    "Beta": 3,
                                    "Alpha": 22,
                                    "Delta": 1,
                                    "Eta": 1,
                                    "Beta (Beta & Epsilon (Beta))": 1,
                                    "Epsilon (Beta & Epsilon (Epsilon))": 1,
                                    "Cid Kagenou (Cid)": 32
                                }
                            }
                        }
                    },
                    "c2-10": {
                        "episode_count": 5,
                        "line_count": 306,
                        "word_count": 2633,
                        "char_count": 15229,
                        "characters": {
                            "Delta": 130,
                            "Beta": 7,
                            "Epsilon": 7,
                            "Alpha": 22,
                            "Beta (Beta & Epsilon (Beta))": 1,
                            "Epsilon (Beta & Epsilon (Epsilon))": 1,
                            "Eta": 4,
                            "Mist Dragon": 20,
                            "Mist Dragon (None (Mist Dragon))": 19,
                            "Cid Kagenou (Cid)": 82,
                            "Malak": 13
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 64,
                                "word_count": 453,
                                "char_count": 2513,
                                "characters": {
                                    "Delta": 29,
                                    "Beta": 7,
                                    "Epsilon": 7,
                                    "Alpha": 16,
                                    "Beta (Beta & Epsilon (Beta))": 1,
                                    "Epsilon (Beta & Epsilon (Epsilon))": 1,
                                    "Eta": 4
                                }
                            },
                            "e2": {
                                "line_count": 55,
                                "word_count": 612,
                                "char_count": 3611,
                                "characters": {
                                    "Delta": 16,
                                    "Mist Dragon": 20,
                                    "Mist Dragon (None (Mist Dragon))": 19
                                }
                            },
                            "e3": {
                                "line_count": 68,
                                "word_count": 632,
                                "char_count": 3687,
                                "characters": {
                                    "Cid Kagenou (Cid)": 45,
                                    "Delta": 23
                                }
                            },
                            "e4": {
                                "line_count": 43,
                                "word_count": 198,
                                "char_count": 1174,
                                "characters": {
                                    "Delta": 31,
                                    "Malak": 10,
                                    "Cid Kagenou (Cid)": 2
                                }
                            },
                            "e5": {
                                "line_count": 75,
                                "word_count": 738,
                                "char_count": 4244,
                                "characters": {
                                    "Delta": 31,
                                    "Malak": 3,
                                    "Alpha": 6,
                                    "Cid Kagenou (Cid)": 35
                                }
                            }
                        }
                    },
                    "c2-11": {
                        "episode_count": 5,
                        "line_count": 302,
                        "word_count": 3210,
                        "char_count": 17785,
                        "characters": {
                            "Alpha": 12,
                            "Beta": 7,
                            "Gamma": 11,
                            "Zeta": 85,
                            "Chi (No. 111)": 63,
                            "Omega (No. 122)": 53,
                            "Annerose Nichtsehen (Annerose)": 26,
                            "Victoria": 22,
                            "Claire Kagenou (Claire)": 9,
                            "Cid Kagenou (Cid)": 14
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 51,
                                "word_count": 800,
                                "char_count": 4470,
                                "characters": {
                                    "Alpha": 12,
                                    "Beta": 7,
                                    "Gamma": 11,
                                    "Zeta": 21
                                }
                            },
                            "e2": {
                                "line_count": 71,
                                "word_count": 726,
                                "char_count": 3823,
                                "characters": {
                                    "Chi (No. 111)": 29,
                                    "Omega (No. 122)": 25,
                                    "Zeta": 17
                                }
                            },
                            "e3": {
                                "line_count": 46,
                                "word_count": 523,
                                "char_count": 2945,
                                "characters": {
                                    "Chi (No. 111)": 15,
                                    "Annerose Nichtsehen (Annerose)": 14,
                                    "Omega (No. 122)": 9,
                                    "Zeta": 8
                                }
                            },
                            "e4": {
                                "line_count": 59,
                                "word_count": 314,
                                "char_count": 1764,
                                "characters": {
                                    "Chi (No. 111)": 14,
                                    "Annerose Nichtsehen (Annerose)": 12,
                                    "Omega (No. 122)": 6,
                                    "Zeta": 15,
                                    "Victoria": 12
                                }
                            },
                            "e5": {
                                "line_count": 75,
                                "word_count": 847,
                                "char_count": 4783,
                                "characters": {
                                    "Victoria": 10,
                                    "Zeta": 24,
                                    "Chi (No. 111)": 5,
                                    "Omega (No. 122)": 13,
                                    "Claire Kagenou (Claire)": 9,
                                    "Cid Kagenou (Cid)": 14
                                }
                            }
                        }
                    },
                    "c2-12": {
                        "episode_count": 5,
                        "line_count": 326,
                        "word_count": 2880,
                        "char_count": 17267,
                        "characters": {
                            "Sergey Gorman (Sergey)": 69,
                            "Chi (No. 111)": 22,
                            "Omega (No. 122)": 21,
                            "Velgalta Soldier A": 1,
                            "Velgalta Soldier B": 1,
                            "Velgalta Soldier C": 2,
                            "Beta (Beta & Delta & Zeta (Beta))": 1,
                            "Delta (Beta & Delta & Zeta (Delta))": 1,
                            "Zeta (Beta & Delta & Zeta (Zeta))": 1,
                            "Gamma (Gamma& Epsilon & Eta (Gamma))": 1,
                            "Epsilon (Gamma& Epsilon & Eta (Epsilon))": 1,
                            "Eta (Gamma& Epsilon & Eta (Eta))": 1,
                            "Alpha": 25,
                            "Gamma": 15,
                            "Eta": 14,
                            "Velgalta Soldier D": 1,
                            "Epsilon": 12,
                            "Beta": 12,
                            "Zeta": 15,
                            "Velgalta Soldier E": 2,
                            "Delta": 18,
                            "Velgalta Soldiers": 1,
                            "Malak Swarm": 3,
                            "Cid Kagenou (Shadow)": 83,
                            "Chi (No. 111 & No. 122 (No. 111))": 1,
                            "Omega (No. 111 & No. 122 (No. 122))": 1,
                            "Malak": 1
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 44,
                                "word_count": 429,
                                "char_count": 2449,
                                "characters": {
                                    "Sergey Gorman (Sergey)": 14,
                                    "Chi (No. 111)": 6,
                                    "Omega (No. 122)": 5,
                                    "Velgalta Soldier A": 1,
                                    "Velgalta Soldier B": 1,
                                    "Velgalta Soldier C": 2,
                                    "Beta (Beta & Delta & Zeta (Beta))": 1,
                                    "Delta (Beta & Delta & Zeta (Delta))": 1,
                                    "Zeta (Beta & Delta & Zeta (Zeta))": 1,
                                    "Gamma (Gamma& Epsilon & Eta (Gamma))": 1,
                                    "Epsilon (Gamma& Epsilon & Eta (Epsilon))": 1,
                                    "Eta (Gamma& Epsilon & Eta (Eta))": 1,
                                    "Alpha": 3,
                                    "Gamma": 1,
                                    "Eta": 2,
                                    "Velgalta Soldier D": 1,
                                    "Epsilon": 1,
                                    "Beta": 2,
                                    "Zeta": 1,
                                    "Velgalta Soldier E": 1,
                                    "Delta": 1
                                }
                            },
                            "e2": {
                                "line_count": 77,
                                "word_count": 698,
                                "char_count": 4016,
                                "characters": {
                                    "Omega (No. 122)": 8,
                                    "Chi (No. 111)": 7,
                                    "Velgalta Soldier E": 1,
                                    "Velgalta Soldiers": 1,
                                    "Delta": 5,
                                    "Sergey Gorman (Sergey)": 14,
                                    "Beta": 3,
                                    "Epsilon": 3,
                                    "Gamma": 5,
                                    "Eta": 4,
                                    "Zeta": 4,
                                    "Alpha": 6,
                                    "Malak Swarm": 2,
                                    "Cid Kagenou (Shadow)": 14
                                }
                            },
                            "e3": {
                                "line_count": 58,
                                "word_count": 522,
                                "char_count": 3113,
                                "characters": {
                                    "Gamma": 4,
                                    "Delta": 8,
                                    "Beta": 4,
                                    "Sergey Gorman (Sergey)": 5,
                                    "Eta": 4,
                                    "Epsilon": 5,
                                    "Zeta": 3,
                                    "Alpha": 8,
                                    "Chi (No. 111)": 2,
                                    "Omega (No. 122)": 2,
                                    "Chi (No. 111 & No. 122 (No. 111))": 1,
                                    "Omega (No. 111 & No. 122 (No. 122))": 1,
                                    "Cid Kagenou (Shadow)": 12
                                }
                            },
                            "e4": {
                                "line_count": 78,
                                "word_count": 704,
                                "char_count": 4396,
                                "characters": {
                                    "Sergey Gorman (Sergey)": 22,
                                    "Cid Kagenou (Shadow)": 24,
                                    "Malak Swarm": 1,
                                    "Malak": 1,
                                    "Gamma": 4,
                                    "Beta": 2,
                                    "Epsilon": 2,
                                    "Eta": 3,
                                    "Zeta": 6,
                                    "Delta": 3,
                                    "Alpha": 5,
                                    "Chi (No. 111)": 3,
                                    "Omega (No. 122)": 2
                                }
                            },
                            "e5": {
                                "line_count": 64,
                                "word_count": 527,
                                "char_count": 3293,
                                "characters": {
                                    "Sergey Gorman (Sergey)": 14,
                                    "Cid Kagenou (Shadow)": 33,
                                    "Beta": 1,
                                    "Gamma": 1,
                                    "Delta": 1,
                                    "Epsilon": 1,
                                    "Zeta": 1,
                                    "Eta": 1,
                                    "Chi (No. 111)": 4,
                                    "Omega (No. 122)": 4,
                                    "Alpha": 3
                                }
                            }
                        }
                    },
                    "c2-13": {
                        "episode_count": 5,
                        "line_count": 272,
                        "word_count": 3337,
                        "char_count": 18530,
                        "characters": {
                            "Annerose Nichtsehen (Annerose)": 20,
                            "Velgalta Soldiers": 1,
                            "Annerose Nichtsehen (None (Annerose))": 4,
                            "Omega (No. 122)": 2,
                            "Chi (No. 111)": 3,
                            "Chi": 11,
                            "Omega": 8,
                            "Beta": 23,
                            "Zeta": 39,
                            "Eta": 33,
                            "Epsilon": 19,
                            "Alpha": 34,
                            "Gamma": 15,
                            "Delta": 16,
                            "Malaks": 1,
                            "Malak": 7,
                            "Sergey Gorman (None (Sergey Gorman))": 32,
                            "Gamma (Gamma & Epsilon (Gamma))": 1,
                            "Epsilon (Gamma & Epsilon (Epsilon))": 1,
                            "Olivier (??? (Olivier))": 2
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 49,
                                "word_count": 640,
                                "char_count": 3495,
                                "characters": {
                                    "Annerose Nichtsehen (Annerose)": 20,
                                    "Velgalta Soldiers": 1,
                                    "Annerose Nichtsehen (None (Annerose))": 4,
                                    "Omega (No. 122)": 2,
                                    "Chi (No. 111)": 3,
                                    "Chi": 11,
                                    "Omega": 8
                                }
                            },
                            "e2": {
                                "line_count": 54,
                                "word_count": 630,
                                "char_count": 3431,
                                "characters": {
                                    "Beta": 5,
                                    "Zeta": 20,
                                    "Eta": 4,
                                    "Epsilon": 5,
                                    "Alpha": 8,
                                    "Gamma": 4,
                                    "Delta": 7,
                                    "Malaks": 1
                                }
                            },
                            "e3": {
                                "line_count": 60,
                                "word_count": 561,
                                "char_count": 3297,
                                "characters": {
                                    "Delta": 4,
                                    "Malak": 7,
                                    "Epsilon": 4,
                                    "Beta": 7,
                                    "Gamma": 5,
                                    "Zeta": 10,
                                    "Eta": 13,
                                    "Alpha": 10
                                }
                            },
                            "e4": {
                                "line_count": 50,
                                "word_count": 958,
                                "char_count": 5287,
                                "characters": {
                                    "Sergey Gorman (None (Sergey Gorman))": 26,
                                    "Eta": 3,
                                    "Alpha": 5,
                                    "Beta": 5,
                                    "Zeta": 4,
                                    "Delta": 2,
                                    "Gamma": 1,
                                    "Epsilon": 3,
                                    "Gamma (Gamma & Epsilon (Gamma))": 1,
                                    "Epsilon (Gamma & Epsilon (Epsilon))": 1
                                }
                            },
                            "e5": {
                                "line_count": 58,
                                "word_count": 548,
                                "char_count": 3020,
                                "characters": {
                                    "Gamma": 5,
                                    "Beta": 6,
                                    "Eta": 13,
                                    "Zeta": 5,
                                    "Epsilon": 7,
                                    "Delta": 3,
                                    "Alpha": 11,
                                    "Sergey Gorman (None (Sergey Gorman))": 6,
                                    "Olivier (??? (Olivier))": 2
                                }
                            }
                        }
                    },
                    "c2-2": {
                        "episode_count": 5,
                        "line_count": 288,
                        "word_count": 3408,
                        "char_count": 19173,
                        "characters": {
                            "Delta": 23,
                            "Beta": 31,
                            "Cult Member A": 7,
                            "Templar": 2,
                            "Zeta": 64,
                            "Gamma": 18,
                            "Eta": 31,
                            "Lambda": 21,
                            "Cult Member B": 6,
                            "Cult Leader": 16,
                            "Epsilon": 11,
                            "Alpha": 24,
                            "Cult Member C": 1,
                            "Victoria": 14,
                            "Cid Kagenou (Cid)": 19
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 61,
                                "word_count": 688,
                                "char_count": 3795,
                                "characters": {
                                    "Delta": 22,
                                    "Beta": 30,
                                    "Cult Member A": 7,
                                    "Templar": 2
                                }
                            },
                            "e2": {
                                "line_count": 35,
                                "word_count": 491,
                                "char_count": 2775,
                                "characters": {
                                    "Zeta": 18,
                                    "Gamma": 17
                                }
                            },
                            "e3": {
                                "line_count": 47,
                                "word_count": 498,
                                "char_count": 2836,
                                "characters": {
                                    "Eta": 19,
                                    "Lambda": 18,
                                    "Cult Member B": 5,
                                    "Cult Leader": 5
                                }
                            },
                            "e4": {
                                "line_count": 64,
                                "word_count": 686,
                                "char_count": 3975,
                                "characters": {
                                    "Cult Member B": 1,
                                    "Cult Leader": 11,
                                    "Epsilon": 6,
                                    "Alpha": 14,
                                    "Cult Member C": 1,
                                    "Zeta": 23,
                                    "Victoria": 8
                                }
                            },
                            "e5": {
                                "line_count": 81,
                                "word_count": 1045,
                                "char_count": 5792,
                                "characters": {
                                    "Victoria": 6,
                                    "Zeta": 23,
                                    "Alpha": 10,
                                    "Epsilon": 5,
                                    "Eta": 12,
                                    "Delta": 1,
                                    "Beta": 1,
                                    "Gamma": 1,
                                    "Lambda": 3,
                                    "Cid Kagenou (Cid)": 19
                                }
                            }
                        }
                    },
                    "c2-3": {
                        "episode_count": 5,
                        "line_count": 346,
                        "word_count": 3787,
                        "char_count": 22429,
                        "characters": {
                            "Bishop Drake (Bishop of Orum)": 10,
                            "Victoria": 9,
                            "Bishop Drake": 6,
                            "Eta": 79,
                            "Gamma": 130,
                            "Gamma (None (Gamma))": 10,
                            "None": 2,
                            "Malak": 15,
                            "Cid Kagenou (Shadow)": 50,
                            "Epsilon": 20,
                            "Lambda": 15
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 55,
                                "word_count": 634,
                                "char_count": 3601,
                                "characters": {
                                    "Bishop Drake (Bishop of Orum)": 10,
                                    "Victoria": 9,
                                    "Bishop Drake": 6,
                                    "Eta": 12,
                                    "Gamma": 18
                                }
                            },
                            "e2": {
                                "line_count": 37,
                                "word_count": 452,
                                "char_count": 2696,
                                "characters": {
                                    "Gamma": 24,
                                    "Eta": 8,
                                    "Gamma (None (Gamma))": 4,
                                    "None": 1
                                }
                            },
                            "e3": {
                                "line_count": 49,
                                "word_count": 722,
                                "char_count": 4347,
                                "characters": {
                                    "Gamma": 28,
                                    "Eta": 14,
                                    "Gamma (None (Gamma))": 6,
                                    "None": 1
                                }
                            },
                            "e4": {
                                "line_count": 63,
                                "word_count": 484,
                                "char_count": 2780,
                                "characters": {
                                    "Eta": 23,
                                    "Malak": 8,
                                    "Gamma": 32
                                }
                            },
                            "e5": {
                                "line_count": 142,
                                "word_count": 1495,
                                "char_count": 9005,
                                "characters": {
                                    "Malak": 7,
                                    "Gamma": 28,
                                    "Eta": 22,
                                    "Cid Kagenou (Shadow)": 50,
                                    "Epsilon": 20,
                                    "Lambda": 15
                                }
                            }
                        }
                    },
                    "c2-4": {
                        "episode_count": 5,
                        "line_count": 359,
                        "word_count": 3240,
                        "char_count": 19053,
                        "characters": {
                            "Eta": 85,
                            "Malak": 4,
                            "Gamma": 106,
                            "Sergey Gorman (??? (Sergey Gorman))": 1,
                            "Sergey Gorman (Sergey)": 70,
                            "Chi (??? (Karen))": 13,
                            "Velgalta Soldier A": 1,
                            "Chi (Karen)": 56,
                            "Gamma (??? (Gamma))": 1,
                            "Velgalta Soldier B": 2,
                            "Velgalta Soldier C": 2,
                            "Cid Kagenou (Cid)": 18
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 52,
                                "word_count": 513,
                                "char_count": 3004,
                                "characters": {
                                    "Eta": 23,
                                    "Malak": 4,
                                    "Gamma": 25
                                }
                            },
                            "e2": {
                                "line_count": 56,
                                "word_count": 588,
                                "char_count": 3417,
                                "characters": {
                                    "Sergey Gorman (??? (Sergey Gorman))": 1,
                                    "Eta": 13,
                                    "Gamma": 18,
                                    "Sergey Gorman (Sergey)": 11,
                                    "Chi (??? (Karen))": 13
                                }
                            },
                            "e3": {
                                "line_count": 55,
                                "word_count": 480,
                                "char_count": 2743,
                                "characters": {
                                    "Velgalta Soldier A": 1,
                                    "Chi (Karen)": 9,
                                    "Sergey Gorman (Sergey)": 15,
                                    "Gamma": 16,
                                    "Eta": 13,
                                    "Gamma (??? (Gamma))": 1
                                }
                            },
                            "e4": {
                                "line_count": 107,
                                "word_count": 891,
                                "char_count": 5408,
                                "characters": {
                                    "Sergey Gorman (Sergey)": 32,
                                    "Chi (Karen)": 34,
                                    "Gamma": 22,
                                    "Eta": 15,
                                    "Velgalta Soldier B": 2,
                                    "Velgalta Soldier C": 2
                                }
                            },
                            "e5": {
                                "line_count": 89,
                                "word_count": 768,
                                "char_count": 4481,
                                "characters": {
                                    "Gamma": 25,
                                    "Eta": 21,
                                    "Chi (Karen)": 13,
                                    "Sergey Gorman (Sergey)": 12,
                                    "Cid Kagenou (Cid)": 18
                                }
                            }
                        }
                    },
                    "c2-5": {
                        "episode_count": 5,
                        "line_count": 408,
                        "word_count": 4734,
                        "char_count": 27168,
                        "characters": {
                            "Eta": 29,
                            "Chi (Karen)": 121,
                            "Lambda": 54,
                            "Epsilon": 11,
                            "Alpha": 97,
                            "Beta": 27,
                            "Gamma": 50,
                            "Beta (Beta & Gamma (Beta))": 1,
                            "Gamma (Beta & Gamma (Gamma))": 1,
                            "Cid Kagenou (Cid)": 17
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 72,
                                "word_count": 735,
                                "char_count": 4139,
                                "characters": {
                                    "Eta": 15,
                                    "Chi (Karen)": 2,
                                    "Lambda": 19,
                                    "Epsilon": 6,
                                    "Alpha": 14,
                                    "Beta": 8,
                                    "Gamma": 7,
                                    "Beta (Beta & Gamma (Beta))": 1,
                                    "Gamma (Beta & Gamma (Gamma))": 1
                                }
                            },
                            "e2": {
                                "line_count": 68,
                                "word_count": 774,
                                "char_count": 4353,
                                "characters": {
                                    "Lambda": 7,
                                    "Gamma": 12,
                                    "Alpha": 18,
                                    "Epsilon": 3,
                                    "Beta": 3,
                                    "Chi (Karen)": 20,
                                    "Eta": 5
                                }
                            },
                            "e3": {
                                "line_count": 96,
                                "word_count": 1424,
                                "char_count": 8372,
                                "characters": {
                                    "Chi (Karen)": 51,
                                    "Alpha": 31,
                                    "Beta": 6,
                                    "Gamma": 3,
                                    "Epsilon": 2,
                                    "Lambda": 3
                                }
                            },
                            "e4": {
                                "line_count": 93,
                                "word_count": 930,
                                "char_count": 5194,
                                "characters": {
                                    "Alpha": 18,
                                    "Lambda": 13,
                                    "Eta": 7,
                                    "Chi (Karen)": 32,
                                    "Gamma": 23
                                }
                            },
                            "e5": {
                                "line_count": 78,
                                "word_count": 871,
                                "char_count": 5110,
                                "characters": {
                                    "Chi (Karen)": 16,
                                    "Alpha": 16,
                                    "Gamma": 5,
                                    "Lambda": 12,
                                    "Eta": 2,
                                    "Beta": 10,
                                    "Cid Kagenou (Cid)": 17
                                }
                            }
                        }
                    },
                    "c2-6": {
                        "episode_count": 5,
                        "line_count": 295,
                        "word_count": 3720,
                        "char_count": 22076,
                        "characters": {
                            "Alpha": 55,
                            "Gamma": 46,
                            "Beta": 37,
                            "Epsilon": 77,
                            "Sergey Gorman (Sergey)": 6,
                            "Chi (Karen)": 3,
                            "Eta": 17,
                            "Beta (Beta & Gamma (Beta))": 1,
                            "Gamma (Beta & Gamma (Gamma))": 1,
                            "Chi (No. 111)": 26,
                            "Cid Kagenou (Shadow)": 3,
                            "Delta": 5,
                            "Cid Kagenou (Cid)": 18
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 47,
                                "word_count": 663,
                                "char_count": 3719,
                                "characters": {
                                    "Alpha": 14,
                                    "Gamma": 14,
                                    "Beta": 4,
                                    "Epsilon": 6,
                                    "Sergey Gorman (Sergey)": 6,
                                    "Chi (Karen)": 3
                                }
                            },
                            "e2": {
                                "line_count": 51,
                                "word_count": 538,
                                "char_count": 3257,
                                "characters": {
                                    "Eta": 17,
                                    "Beta": 5,
                                    "Alpha": 10,
                                    "Epsilon": 9,
                                    "Gamma": 10
                                }
                            },
                            "e3": {
                                "line_count": 37,
                                "word_count": 604,
                                "char_count": 3741,
                                "characters": {
                                    "Beta": 21,
                                    "Gamma": 15,
                                    "Beta (Beta & Gamma (Beta))": 1,
                                    "Gamma (Beta & Gamma (Gamma))": 1
                                }
                            },
                            "e4": {
                                "line_count": 72,
                                "word_count": 745,
                                "char_count": 4339,
                                "characters": {
                                    "Chi (No. 111)": 26,
                                    "Epsilon": 43,
                                    "Cid Kagenou (Shadow)": 3
                                }
                            },
                            "e5": {
                                "line_count": 87,
                                "word_count": 1170,
                                "char_count": 7020,
                                "characters": {
                                    "Alpha": 31,
                                    "Epsilon": 19,
                                    "Delta": 5,
                                    "Beta": 7,
                                    "Gamma": 7,
                                    "Cid Kagenou (Cid)": 18
                                }
                            }
                        }
                    },
                    "c2-7": {
                        "episode_count": 5,
                        "line_count": 296,
                        "word_count": 2923,
                        "char_count": 17155,
                        "characters": {
                            "Delta": 31,
                            "Epsilon": 98,
                            "Lambda": 54,
                            "Chi (No. 111)": 40,
                            "Mundane Mercenary": 9,
                            "Cultist A": 5,
                            "Cid Kagenou (None (Cid Kagenou))": 7,
                            "Cultist B": 2,
                            "Cultist C": 2,
                            "Templar A": 3,
                            "Templar Leader": 3,
                            "Templar B": 1,
                            "Templar C": 1,
                            "Omega (Possessed (Omega))": 4,
                            "Omega (No. 122)": 15,
                            "Cid Kagenou (Cid)": 21
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 53,
                                "word_count": 632,
                                "char_count": 3616,
                                "characters": {
                                    "Delta": 10,
                                    "Epsilon": 25,
                                    "Lambda": 9,
                                    "Chi (No. 111)": 9
                                }
                            },
                            "e2": {
                                "line_count": 64,
                                "word_count": 652,
                                "char_count": 3773,
                                "characters": {
                                    "Delta": 7,
                                    "Lambda": 11,
                                    "Epsilon": 24,
                                    "Chi (No. 111)": 11,
                                    "Mundane Mercenary": 6,
                                    "Cultist A": 5
                                }
                            },
                            "e3": {
                                "line_count": 40,
                                "word_count": 295,
                                "char_count": 1778,
                                "characters": {
                                    "Mundane Mercenary": 3,
                                    "Delta": 7,
                                    "Cid Kagenou (None (Cid Kagenou))": 7,
                                    "Chi (No. 111)": 13,
                                    "Lambda": 6,
                                    "Cultist B": 2,
                                    "Cultist C": 2
                                }
                            },
                            "e4": {
                                "line_count": 49,
                                "word_count": 420,
                                "char_count": 2525,
                                "characters": {
                                    "Epsilon": 26,
                                    "Templar A": 3,
                                    "Templar Leader": 3,
                                    "Delta": 4,
                                    "Templar B": 1,
                                    "Templar C": 1,
                                    "Lambda": 7,
                                    "Omega (Possessed (Omega))": 4
                                }
                            },
                            "e5": {
                                "line_count": 90,
                                "word_count": 924,
                                "char_count": 5463,
                                "characters": {
                                    "Delta": 3,
                                    "Epsilon": 23,
                                    "Chi (No. 111)": 7,
                                    "Omega (No. 122)": 15,
                                    "Lambda": 21,
                                    "Cid Kagenou (Cid)": 21
                                }
                            }
                        }
                    },
                    "c2-8": {
                        "episode_count": 5,
                        "line_count": 334,
                        "word_count": 3540,
                        "char_count": 21149,
                        "characters": {
                            "Gamma": 89,
                            "Curie Oso (Curious Noblewoman)": 8,
                            "Gamma (None (Gamma))": 11,
                            "Chi (No. 111 & No. 122 (No. 111))": 3,
                            "Omega (No. 111 & No. 122 (No. 122))": 3,
                            "Chi (No. 111)": 73,
                            "Omega (No. 122)": 59,
                            "Annerose Nichtsehen (Annerose)": 54,
                            "Cultist A": 2,
                            "Cultist B": 2,
                            "Cultist C": 1,
                            "Cult Leader": 3,
                            "Cid Kagenou (Cid)": 15,
                            "Zeta": 11
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 47,
                                "word_count": 675,
                                "char_count": 3998,
                                "characters": {
                                    "Gamma": 26,
                                    "Curie Oso (Curious Noblewoman)": 8,
                                    "Gamma (None (Gamma))": 11,
                                    "Chi (No. 111 & No. 122 (No. 111))": 2,
                                    "Omega (No. 111 & No. 122 (No. 122))": 2
                                }
                            },
                            "e2": {
                                "line_count": 68,
                                "word_count": 651,
                                "char_count": 3943,
                                "characters": {
                                    "Gamma": 32,
                                    "Chi (No. 111)": 20,
                                    "Omega (No. 122)": 16
                                }
                            },
                            "e3": {
                                "line_count": 65,
                                "word_count": 957,
                                "char_count": 5818,
                                "characters": {
                                    "Annerose Nichtsehen (Annerose)": 26,
                                    "Gamma": 31,
                                    "Chi (No. 111)": 4,
                                    "Omega (No. 122)": 3,
                                    "Chi (No. 111 & No. 122 (No. 111))": 1,
                                    "Omega (No. 111 & No. 122 (No. 122))": 1
                                }
                            },
                            "e4": {
                                "line_count": 59,
                                "word_count": 539,
                                "char_count": 3074,
                                "characters": {
                                    "Annerose Nichtsehen (Annerose)": 12,
                                    "Cultist A": 2,
                                    "Chi (No. 111)": 20,
                                    "Omega (No. 122)": 20,
                                    "Cultist B": 2,
                                    "Cultist C": 1,
                                    "Cult Leader": 2
                                }
                            },
                            "e5": {
                                "line_count": 92,
                                "word_count": 718,
                                "char_count": 4316,
                                "characters": {
                                    "Annerose Nichtsehen (Annerose)": 16,
                                    "Chi (No. 111)": 29,
                                    "Cult Leader": 1,
                                    "Omega (No. 122)": 20,
                                    "Cid Kagenou (Cid)": 15,
                                    "Zeta": 11
                                }
                            }
                        }
                    },
                    "c2-9": {
                        "episode_count": 5,
                        "line_count": 285,
                        "word_count": 3008,
                        "char_count": 17756,
                        "characters": {
                            "Sergey Gorman (Sergei)": 22,
                            "Velgalta Soldier": 6,
                            "None": 10,
                            "Zeta": 31,
                            "Alpha": 19,
                            "Beta": 45,
                            "Chi (No. 111)": 51,
                            "Epsilon": 35,
                            "Omega (No. 122)": 50,
                            "Chi (No. 111 & No. 122 (No. 111))": 1,
                            "Omega (No. 111 & No. 122 (No. 122))": 1,
                            "Cultist": 1,
                            "Cid Kagenou (Cid)": 13
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 38,
                                "word_count": 462,
                                "char_count": 2822,
                                "characters": {
                                    "Sergey Gorman (Sergei)": 22,
                                    "Velgalta Soldier": 6,
                                    "None": 10
                                }
                            },
                            "e2": {
                                "line_count": 63,
                                "word_count": 863,
                                "char_count": 5163,
                                "characters": {
                                    "Zeta": 31,
                                    "Alpha": 19,
                                    "Beta": 13
                                }
                            },
                            "e3": {
                                "line_count": 54,
                                "word_count": 570,
                                "char_count": 3366,
                                "characters": {
                                    "Beta": 24,
                                    "Chi (No. 111)": 6,
                                    "Epsilon": 20,
                                    "Omega (No. 122)": 3,
                                    "Chi (No. 111 & No. 122 (No. 111))": 1,
                                    "Omega (No. 111 & No. 122 (No. 122))": 1
                                }
                            },
                            "e4": {
                                "line_count": 62,
                                "word_count": 454,
                                "char_count": 2715,
                                "characters": {
                                    "Chi (No. 111)": 32,
                                    "Cultist": 1,
                                    "Omega (No. 122)": 29
                                }
                            },
                            "e5": {
                                "line_count": 67,
                                "word_count": 659,
                                "char_count": 3690,
                                "characters": {
                                    "Epsilon": 15,
                                    "Beta": 8,
                                    "Chi (No. 111)": 13,
                                    "Omega (No. 122)": 18,
                                    "Cid Kagenou (Cid)": 13
                                }
                            }
                        }
                    }
                }
            },
            "p3": {
                "chapter_count": 4,
                "line_count": 1213,
                "word_count": 14087,
                "char_count": 80271,
                "characters": {
                    "Olivier (??? (Olivier))": 10,
                    "Alpha": 217,
                    "Beta": 117,
                    "Gamma": 141,
                    "Epsilon": 22,
                    "Zeta": 54,
                    "Delta": 39,
                    "Eta": 79,
                    "Alpha (Seven Shadows (Alpha))": 2,
                    "Beta (Seven Shadows (Beta))": 2,
                    "Gamma (Seven Shadows (Gamma))": 2,
                    "Delta (Seven Shadows (Delta))": 2,
                    "Epsilon (Seven Shadows (Epsilon))": 2,
                    "Zeta (Seven Shadows (Zeta))": 2,
                    "Eta (Seven Shadows (Eta))": 2,
                    "Lambda": 72,
                    "Omega": 80,
                    "Chi": 63,
                    "Nu (93)": 21,
                    "Cid Kagenou (Cid)": 71,
                    "Beta (None (Beta))": 8,
                    "Fan Passerby": 9,
                    "Alpha (Alpha & Beta (Alpha))": 1,
                    "Beta (Alpha & Beta (Beta))": 1,
                    "Olivier": 10,
                    "Garden Members": 3,
                    "Nu (??? (No. 93))": 1,
                    "Nu (No. 93)": 19,
                    "Garden Member": 2,
                    "Delta (??? (Delta))": 1,
                    "Chi (Chi & Omega (Chi))": 1,
                    "Omega (Chi & Omega (Omega))": 1,
                    "Alpha (??? (Alpha))": 1,
                    "Lambda (None (Lambda))": 1,
                    "Iota (None (Iota))": 16,
                    "Iota": 92,
                    "Gamma (Gamma & Iota (Gamma))": 3,
                    "Iota (Gamma & Iota (Iota))": 3,
                    "None": 2,
                    "Bandit?": 10,
                    "Cult Member": 28
                },
                "chapters": {
                    "c3-1": {
                        "episode_count": 5,
                        "line_count": 304,
                        "word_count": 3503,
                        "char_count": 19922,
                        "characters": {
                            "Olivier (??? (Olivier))": 10,
                            "Alpha": 45,
                            "Beta": 21,
                            "Gamma": 15,
                            "Epsilon": 13,
                            "Zeta": 17,
                            "Delta": 19,
                            "Eta": 14,
                            "Alpha (Seven Shadows (Alpha))": 2,
                            "Beta (Seven Shadows (Beta))": 2,
                            "Gamma (Seven Shadows (Gamma))": 2,
                            "Delta (Seven Shadows (Delta))": 2,
                            "Epsilon (Seven Shadows (Epsilon))": 2,
                            "Zeta (Seven Shadows (Zeta))": 2,
                            "Eta (Seven Shadows (Eta))": 2,
                            "Lambda": 31,
                            "Omega": 45,
                            "Chi": 22,
                            "Nu (93)": 21,
                            "Cid Kagenou (Cid)": 17
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 53,
                                "word_count": 309,
                                "char_count": 1837,
                                "characters": {
                                    "Olivier (??? (Olivier))": 10,
                                    "Alpha": 13,
                                    "Beta": 6,
                                    "Gamma": 4,
                                    "Epsilon": 4,
                                    "Zeta": 7,
                                    "Delta": 4,
                                    "Eta": 5
                                }
                            },
                            "e2": {
                                "line_count": 51,
                                "word_count": 564,
                                "char_count": 3136,
                                "characters": {
                                    "Alpha": 15,
                                    "Gamma": 6,
                                    "Delta": 12,
                                    "Beta": 5,
                                    "Zeta": 6,
                                    "Epsilon": 3,
                                    "Eta": 2,
                                    "Alpha (Seven Shadows (Alpha))": 2,
                                    "Beta (Seven Shadows (Beta))": 2,
                                    "Gamma (Seven Shadows (Gamma))": 2,
                                    "Delta (Seven Shadows (Delta))": 2,
                                    "Epsilon (Seven Shadows (Epsilon))": 2,
                                    "Zeta (Seven Shadows (Zeta))": 2,
                                    "Eta (Seven Shadows (Eta))": 2
                                }
                            },
                            "e3": {
                                "line_count": 54,
                                "word_count": 988,
                                "char_count": 5832,
                                "characters": {
                                    "Alpha": 12,
                                    "Beta": 10,
                                    "Gamma": 5,
                                    "Epsilon": 6,
                                    "Zeta": 4,
                                    "Delta": 3,
                                    "Lambda": 7,
                                    "Eta": 7
                                }
                            },
                            "e4": {
                                "line_count": 48,
                                "word_count": 603,
                                "char_count": 3359,
                                "characters": {
                                    "Omega": 16,
                                    "Lambda": 15,
                                    "Chi": 10,
                                    "Nu (93)": 7
                                }
                            },
                            "e5": {
                                "line_count": 86,
                                "word_count": 1039,
                                "char_count": 5758,
                                "characters": {
                                    "Omega": 29,
                                    "Nu (93)": 14,
                                    "Chi": 12,
                                    "Lambda": 9,
                                    "Alpha": 5,
                                    "Cid Kagenou (Cid)": 17
                                }
                            }
                        }
                    },
                    "c3-2": {
                        "episode_count": 5,
                        "line_count": 260,
                        "word_count": 3150,
                        "char_count": 17778,
                        "characters": {
                            "Beta": 96,
                            "Alpha": 69,
                            "Beta (None (Beta))": 8,
                            "Cid Kagenou (Cid)": 20,
                            "Fan Passerby": 9,
                            "Zeta": 37,
                            "Alpha (Alpha & Beta (Alpha))": 1,
                            "Beta (Alpha & Beta (Beta))": 1,
                            "Olivier": 10,
                            "Epsilon": 9
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 45,
                                "word_count": 564,
                                "char_count": 3122,
                                "characters": {
                                    "Beta": 20,
                                    "Alpha": 25
                                }
                            },
                            "e2": {
                                "line_count": 37,
                                "word_count": 647,
                                "char_count": 3828,
                                "characters": {
                                    "Beta": 29,
                                    "Beta (None (Beta))": 8
                                }
                            },
                            "e3": {
                                "line_count": 60,
                                "word_count": 749,
                                "char_count": 4119,
                                "characters": {
                                    "Cid Kagenou (Cid)": 4,
                                    "Beta": 35,
                                    "Fan Passerby": 9,
                                    "Zeta": 12
                                }
                            },
                            "e4": {
                                "line_count": 47,
                                "word_count": 568,
                                "char_count": 3209,
                                "characters": {
                                    "Alpha": 20,
                                    "Beta": 7,
                                    "Zeta": 19,
                                    "Alpha (Alpha & Beta (Alpha))": 1,
                                    "Beta (Alpha & Beta (Beta))": 1
                                }
                            },
                            "e5": {
                                "line_count": 70,
                                "word_count": 622,
                                "char_count": 3500,
                                "characters": {
                                    "Olivier": 10,
                                    "Alpha": 24,
                                    "Beta": 5,
                                    "Zeta": 6,
                                    "Epsilon": 9,
                                    "Cid Kagenou (Cid)": 16
                                }
                            }
                        }
                    },
                    "c3-3": {
                        "episode_count": 5,
                        "line_count": 322,
                        "word_count": 3178,
                        "char_count": 18785,
                        "characters": {
                            "Alpha": 41,
                            "Gamma": 39,
                            "Omega": 35,
                            "Chi": 41,
                            "Garden Members": 3,
                            "Nu (??? (No. 93))": 1,
                            "Nu (No. 93)": 19,
                            "Garden Member": 2,
                            "Eta": 65,
                            "Lambda": 32,
                            "Delta (??? (Delta))": 1,
                            "Delta": 20,
                            "Chi (Chi & Omega (Chi))": 1,
                            "Omega (Chi & Omega (Omega))": 1,
                            "Alpha (??? (Alpha))": 1,
                            "Lambda (None (Lambda))": 1,
                            "Cid Kagenou (Cid)": 19
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 68,
                                "word_count": 681,
                                "char_count": 4004,
                                "characters": {
                                    "Alpha": 23,
                                    "Gamma": 15,
                                    "Omega": 10,
                                    "Chi": 14,
                                    "Garden Members": 3,
                                    "Nu (??? (No. 93))": 1,
                                    "Nu (No. 93)": 2
                                }
                            },
                            "e2": {
                                "line_count": 58,
                                "word_count": 511,
                                "char_count": 2955,
                                "characters": {
                                    "Nu (No. 93)": 17,
                                    "Garden Member": 2,
                                    "Omega": 9,
                                    "Chi": 11,
                                    "Eta": 16,
                                    "Lambda": 1,
                                    "Delta (??? (Delta))": 1,
                                    "Delta": 1
                                }
                            },
                            "e3": {
                                "line_count": 75,
                                "word_count": 691,
                                "char_count": 4014,
                                "characters": {
                                    "Delta": 16,
                                    "Chi": 5,
                                    "Omega": 6,
                                    "Chi (Chi & Omega (Chi))": 1,
                                    "Omega (Chi & Omega (Omega))": 1,
                                    "Lambda": 14,
                                    "Eta": 13,
                                    "Gamma": 15,
                                    "Alpha (??? (Alpha))": 1,
                                    "Alpha": 4
                                }
                            },
                            "e4": {
                                "line_count": 48,
                                "word_count": 417,
                                "char_count": 2413,
                                "characters": {
                                    "Alpha": 8,
                                    "Eta": 10,
                                    "Lambda": 5,
                                    "Chi": 11,
                                    "Omega": 10,
                                    "Gamma": 2,
                                    "Delta": 2
                                }
                            },
                            "e5": {
                                "line_count": 72,
                                "word_count": 878,
                                "char_count": 5399,
                                "characters": {
                                    "Lambda (None (Lambda))": 1,
                                    "Alpha": 6,
                                    "Eta": 26,
                                    "Lambda": 12,
                                    "Gamma": 7,
                                    "Delta": 1,
                                    "Cid Kagenou (Cid)": 19
                                }
                            }
                        }
                    },
                    "c3-4": {
                        "episode_count": 5,
                        "line_count": 327,
                        "word_count": 4256,
                        "char_count": 23786,
                        "characters": {
                            "Iota (None (Iota))": 16,
                            "Iota": 92,
                            "Gamma": 87,
                            "Alpha": 62,
                            "Gamma (Gamma & Iota (Gamma))": 3,
                            "Iota (Gamma & Iota (Iota))": 3,
                            "None": 2,
                            "Bandit?": 10,
                            "Cult Member": 28,
                            "Lambda": 9,
                            "Cid Kagenou (Cid)": 15
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 47,
                                "word_count": 651,
                                "char_count": 3604,
                                "characters": {
                                    "Iota (None (Iota))": 7,
                                    "Iota": 20,
                                    "Gamma": 14,
                                    "Alpha": 6
                                }
                            },
                            "e2": {
                                "line_count": 50,
                                "word_count": 908,
                                "char_count": 5155,
                                "characters": {
                                    "Iota": 28,
                                    "Gamma": 15,
                                    "Alpha": 6,
                                    "Gamma (Gamma & Iota (Gamma))": 1,
                                    "Iota (Gamma & Iota (Iota))": 1
                                }
                            },
                            "e3": {
                                "line_count": 86,
                                "word_count": 932,
                                "char_count": 5274,
                                "characters": {
                                    "Alpha": 25,
                                    "Iota": 25,
                                    "Gamma": 34,
                                    "Gamma (Gamma & Iota (Gamma))": 2,
                                    "Iota (Gamma & Iota (Iota))": 2
                                }
                            },
                            "e4": {
                                "line_count": 67,
                                "word_count": 726,
                                "char_count": 3899,
                                "characters": {
                                    "None": 2,
                                    "Bandit?": 10,
                                    "Alpha": 17,
                                    "Iota": 7,
                                    "Gamma": 10,
                                    "Cult Member": 21
                                }
                            },
                            "e5": {
                                "line_count": 74,
                                "word_count": 1039,
                                "char_count": 5854,
                                "characters": {
                                    "Gamma": 14,
                                    "Iota": 12,
                                    "Alpha": 8,
                                    "Cult Member": 7,
                                    "Iota (None (Iota))": 9,
                                    "Lambda": 9,
                                    "Cid Kagenou (Cid)": 15
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "kj": {
        "season_count": 2,
        "line_count": 1224,
        "word_count": 6662,
        "char_count": 36647,
        "characters": {
            "Alpha": 177,
            "Beta": 179,
            "Gamma": 184,
            "Delta": 192,
            "Epsilon": 167,
            "Zeta": 115,
            "Eta": 132,
            "Beta (Seven Shadows (Beta))": 8,
            "Gamma (Seven Shadows (Gamma))": 8,
            "Delta (Seven Shadows (Delta))": 8,
            "Epsilon (Seven Shadows (Epsilon))": 8,
            "Zeta (Seven Shadows (Zeta))": 8,
            "Eta (Seven Shadows (Eta))": 5,
            "Delta (Delta & Zeta (Delta))": 2,
            "Zeta (Delta & Zeta (Zeta))": 2,
            "Alpha (Alpha & Gamma (Alpha))": 1,
            "Gamma (Alpha & Gamma (Gamma))": 1,
            "Little Cuckoo-kun": 2,
            "Alpha (Alpha & Eta (Alpha))": 1,
            "Eta (Alpha & Eta (Eta))": 1,
            "Nu": 29,
            "Alpha (Seven Shadows (Alpha))": 3,
            "Alpha (Alpha & Zeta (Alpha))": 1,
            "Zeta (Alpha & Zeta (Zeta))": 1,
            "Beta (Beta & Epsilon (Beta))": 2,
            "Epsilon (Beta & Epsilon (Epsilon))": 2,
            "Chi": 11,
            "Omega": 17,
            "Chi (Chi & Omega (Chi))": 1,
            "Omega (Chi & Omega (Omega))": 1,
            "Juggernaut": 4,
            "Subordinate": 1,
            "Beta (Beta & Gamma (Beta))": 3,
            "Gamma (Beta & Gamma (Gamma))": 3,
            "Beta (Beta & Gamma & Epsilon (Beta))": 1,
            "Gamma (Beta & Gamma & Epsilon (Gamma))": 1,
            "Epsilon (Beta & Gamma & Epsilon (Epsilon))": 1,
            "Beta (Beta & Zeta (Beta))": 2,
            "Zeta (Beta & Zeta (Zeta))": 2,
            "Cid Kagenou (Shadow)": 1
        },
        "seasons": {
            "kj1": {
                "episode_count": 17,
                "line_count": 746,
                "word_count": 4217,
                "char_count": 23604,
                "characters": {
                    "Alpha": 121,
                    "Beta": 114,
                    "Gamma": 115,
                    "Delta": 130,
                    "Epsilon": 114,
                    "Zeta": 68,
                    "Eta": 76,
                    "Beta (Seven Shadows (Beta))": 2,
                    "Gamma (Seven Shadows (Gamma))": 2,
                    "Delta (Seven Shadows (Delta))": 2,
                    "Epsilon (Seven Shadows (Epsilon))": 2,
                    "Zeta (Seven Shadows (Zeta))": 2,
                    "Eta (Seven Shadows (Eta))": 2,
                    "Delta (Delta & Zeta (Delta))": 2,
                    "Zeta (Delta & Zeta (Zeta))": 2,
                    "Alpha (Alpha & Gamma (Alpha))": 1,
                    "Gamma (Alpha & Gamma (Gamma))": 1,
                    "Little Cuckoo-kun": 1,
                    "Alpha (Alpha & Eta (Alpha))": 1,
                    "Eta (Alpha & Eta (Eta))": 1,
                    "Nu": 6
                },
                "episodes": {
                    "e1": {
                        "word_count": 247,
                        "char_count": 1424,
                        "line_count": 41,
                        "characters": {
                            "Alpha": 11,
                            "Beta": 7,
                            "Gamma": 6,
                            "Delta": 7,
                            "Epsilon": 3,
                            "Zeta": 4,
                            "Eta": 2,
                            "Beta (Seven Shadows (Beta))": 1,
                            "Gamma (Seven Shadows (Gamma))": 1,
                            "Delta (Seven Shadows (Delta))": 1,
                            "Epsilon (Seven Shadows (Epsilon))": 1,
                            "Zeta (Seven Shadows (Zeta))": 1,
                            "Eta (Seven Shadows (Eta))": 1
                        }
                    },
                    "e2": {
                        "word_count": 239,
                        "char_count": 1277,
                        "line_count": 41,
                        "characters": {
                            "Beta": 23,
                            "Alpha": 18
                        }
                    },
                    "e3": {
                        "word_count": 222,
                        "char_count": 1209,
                        "line_count": 34,
                        "characters": {
                            "Alpha": 13,
                            "Gamma": 16,
                            "Eta": 5
                        }
                    },
                    "e4": {
                        "word_count": 270,
                        "char_count": 1462,
                        "line_count": 46,
                        "characters": {
                            "Delta": 17,
                            "Gamma": 15,
                            "Zeta": 12,
                            "Delta (Delta & Zeta (Delta))": 2,
                            "Zeta (Delta & Zeta (Zeta))": 2
                        }
                    },
                    "e5": {
                        "word_count": 226,
                        "char_count": 1224,
                        "line_count": 53,
                        "characters": {
                            "Alpha": 18,
                            "Delta": 30,
                            "Eta": 7
                        }
                    },
                    "e6": {
                        "word_count": 247,
                        "char_count": 1390,
                        "line_count": 44,
                        "characters": {
                            "Alpha": 16,
                            "Gamma": 21,
                            "Zeta": 6,
                            "Alpha (Alpha & Gamma (Alpha))": 1,
                            "Gamma (Alpha & Gamma (Gamma))": 1
                        }
                    },
                    "e7": {
                        "word_count": 240,
                        "char_count": 1382,
                        "line_count": 42,
                        "characters": {
                            "Beta": 19,
                            "Epsilon": 23
                        }
                    },
                    "e8": {
                        "word_count": 217,
                        "char_count": 1244,
                        "line_count": 40,
                        "characters": {
                            "Beta": 13,
                            "Eta": 15,
                            "Epsilon": 11,
                            "Little Cuckoo-kun": 1
                        }
                    },
                    "e9": {
                        "word_count": 198,
                        "char_count": 1071,
                        "line_count": 38,
                        "characters": {
                            "Delta": 17,
                            "Zeta": 10,
                            "Alpha": 12
                        }
                    },
                    "e10": {
                        "word_count": 176,
                        "char_count": 1086,
                        "line_count": 42,
                        "characters": {
                            "Delta": 24,
                            "Eta": 18
                        }
                    },
                    "e11": {
                        "word_count": 323,
                        "char_count": 1863,
                        "line_count": 43,
                        "characters": {
                            "Gamma": 24,
                            "Epsilon": 20
                        }
                    },
                    "e12": {
                        "word_count": 281,
                        "char_count": 1702,
                        "line_count": 48,
                        "characters": {
                            "Eta": 13,
                            "Alpha": 22,
                            "Gamma": 12,
                            "Alpha (Alpha & Eta (Alpha))": 1,
                            "Eta (Alpha & Eta (Eta))": 1
                        }
                    },
                    "e13": {
                        "word_count": 343,
                        "char_count": 1806,
                        "line_count": 49,
                        "characters": {
                            "Beta": 19,
                            "Gamma": 19,
                            "Zeta": 11
                        }
                    },
                    "e14": {
                        "word_count": 283,
                        "char_count": 1454,
                        "line_count": 56,
                        "characters": {
                            "Epsilon": 22,
                            "Delta": 18,
                            "Beta": 11,
                            "Nu": 6
                        }
                    },
                    "e15": {
                        "word_count": 293,
                        "char_count": 1593,
                        "line_count": 53,
                        "characters": {
                            "Zeta": 23,
                            "Epsilon": 16,
                            "Delta": 14
                        }
                    },
                    "e16": {
                        "word_count": 231,
                        "char_count": 1350,
                        "line_count": 47,
                        "characters": {
                            "Beta": 17,
                            "Eta": 13,
                            "Epsilon": 17
                        }
                    },
                    "e17": {
                        "word_count": 181,
                        "char_count": 1067,
                        "line_count": 29,
                        "characters": {
                            "Alpha": 11,
                            "Beta": 5,
                            "Gamma": 2,
                            "Epsilon": 2,
                            "Zeta": 2,
                            "Eta": 3,
                            "Beta (Seven Shadows (Beta))": 1,
                            "Gamma (Seven Shadows (Gamma))": 1,
                            "Delta (Seven Shadows (Delta))": 1,
                            "Epsilon (Seven Shadows (Epsilon))": 1,
                            "Zeta (Seven Shadows (Zeta))": 1,
                            "Eta (Seven Shadows (Eta))": 1,
                            "Delta": 3
                        }
                    }
                }
            },
            "kj2": {
                "episode_count": 12,
                "line_count": 478,
                "word_count": 2445,
                "char_count": 13043,
                "characters": {
                    "Gamma": 69,
                    "Beta": 65,
                    "Zeta": 47,
                    "Alpha": 56,
                    "Epsilon": 53,
                    "Eta": 56,
                    "Alpha (Seven Shadows (Alpha))": 3,
                    "Beta (Seven Shadows (Beta))": 6,
                    "Gamma (Seven Shadows (Gamma))": 6,
                    "Delta (Seven Shadows (Delta))": 6,
                    "Epsilon (Seven Shadows (Epsilon))": 6,
                    "Zeta (Seven Shadows (Zeta))": 6,
                    "Alpha (Alpha & Zeta (Alpha))": 1,
                    "Zeta (Alpha & Zeta (Zeta))": 1,
                    "Beta (Beta & Epsilon (Beta))": 2,
                    "Epsilon (Beta & Epsilon (Epsilon))": 2,
                    "Chi": 11,
                    "Omega": 17,
                    "Chi (Chi & Omega (Chi))": 1,
                    "Omega (Chi & Omega (Omega))": 1,
                    "Delta": 62,
                    "Juggernaut": 4,
                    "Subordinate": 1,
                    "Beta (Beta & Gamma (Beta))": 3,
                    "Gamma (Beta & Gamma (Gamma))": 3,
                    "Beta (Beta & Gamma & Epsilon (Beta))": 1,
                    "Gamma (Beta & Gamma & Epsilon (Gamma))": 1,
                    "Epsilon (Beta & Gamma & Epsilon (Epsilon))": 1,
                    "Nu": 23,
                    "Beta (Beta & Zeta (Beta))": 2,
                    "Zeta (Beta & Zeta (Zeta))": 2,
                    "Little Cuckoo-kun": 1,
                    "Eta (Seven Shadows (Eta))": 3,
                    "Cid Kagenou (Shadow)": 1
                },
                "episodes": {
                    "e1": {
                        "word_count": 177,
                        "char_count": 956,
                        "line_count": 32,
                        "characters": {
                            "Gamma": 9,
                            "Beta": 5,
                            "Zeta": 3,
                            "Alpha": 4,
                            "Epsilon": 4,
                            "Eta": 6,
                            "Alpha (Seven Shadows (Alpha))": 1,
                            "Beta (Seven Shadows (Beta))": 1,
                            "Gamma (Seven Shadows (Gamma))": 1,
                            "Delta (Seven Shadows (Delta))": 1,
                            "Epsilon (Seven Shadows (Epsilon))": 1,
                            "Zeta (Seven Shadows (Zeta))": 1
                        }
                    },
                    "e2": {
                        "word_count": 200,
                        "char_count": 1099,
                        "line_count": 39,
                        "characters": {
                            "Gamma": 19,
                            "Zeta": 12,
                            "Alpha": 7,
                            "Alpha (Alpha & Zeta (Alpha))": 1,
                            "Zeta (Alpha & Zeta (Zeta))": 1
                        }
                    },
                    "e3": {
                        "word_count": 216,
                        "char_count": 1148,
                        "line_count": 35,
                        "characters": {
                            "Eta": 15,
                            "Epsilon": 8,
                            "Beta": 10,
                            "Beta (Beta & Epsilon (Beta))": 2,
                            "Epsilon (Beta & Epsilon (Epsilon))": 2
                        }
                    },
                    "e4": {
                        "word_count": 181,
                        "char_count": 1048,
                        "line_count": 36,
                        "characters": {
                            "Alpha": 17,
                            "Eta": 19
                        }
                    },
                    "e5": {
                        "word_count": 190,
                        "char_count": 1032,
                        "line_count": 48,
                        "characters": {
                            "Gamma": 19,
                            "Chi": 11,
                            "Omega": 17,
                            "Chi (Chi & Omega (Chi))": 1,
                            "Omega (Chi & Omega (Omega))": 1
                        }
                    },
                    "e6": {
                        "word_count": 177,
                        "char_count": 907,
                        "line_count": 35,
                        "characters": {
                            "Delta": 28,
                            "Gamma": 2,
                            "Juggernaut": 4,
                            "Subordinate": 1
                        }
                    },
                    "e7": {
                        "word_count": 192,
                        "char_count": 1040,
                        "line_count": 47,
                        "characters": {
                            "Gamma": 15,
                            "Beta": 11,
                            "Beta (Beta & Gamma (Beta))": 3,
                            "Gamma (Beta & Gamma (Gamma))": 3,
                            "Epsilon": 16,
                            "Alpha": 2,
                            "Beta (Beta & Gamma & Epsilon (Beta))": 1,
                            "Gamma (Beta & Gamma & Epsilon (Gamma))": 1,
                            "Epsilon (Beta & Gamma & Epsilon (Epsilon))": 1
                        }
                    },
                    "e8": {
                        "word_count": 194,
                        "char_count": 998,
                        "line_count": 40,
                        "characters": {
                            "Nu": 23,
                            "Beta": 17
                        }
                    },
                    "e9": {
                        "word_count": 247,
                        "char_count": 1315,
                        "line_count": 37,
                        "characters": {
                            "Zeta": 14,
                            "Beta": 11,
                            "Delta": 13,
                            "Beta (Beta & Zeta (Beta))": 2,
                            "Zeta (Beta & Zeta (Zeta))": 2
                        }
                    },
                    "e10": {
                        "word_count": 212,
                        "char_count": 1131,
                        "line_count": 44,
                        "characters": {
                            "Alpha": 12,
                            "Zeta": 15,
                            "Delta": 17
                        }
                    },
                    "e11": {
                        "word_count": 211,
                        "char_count": 1106,
                        "line_count": 40,
                        "characters": {
                            "Beta": 10,
                            "Eta": 7,
                            "Epsilon": 22,
                            "Little Cuckoo-kun": 1
                        }
                    },
                    "e12": {
                        "word_count": 248,
                        "char_count": 1263,
                        "line_count": 45,
                        "characters": {
                            "Epsilon": 3,
                            "Alpha": 14,
                            "Gamma": 5,
                            "Delta": 4,
                            "Zeta": 3,
                            "Beta (Seven Shadows (Beta))": 5,
                            "Gamma (Seven Shadows (Gamma))": 5,
                            "Delta (Seven Shadows (Delta))": 5,
                            "Epsilon (Seven Shadows (Epsilon))": 5,
                            "Zeta (Seven Shadows (Zeta))": 5,
                            "Eta (Seven Shadows (Eta))": 3,
                            "Eta": 9,
                            "Alpha (Seven Shadows (Alpha))": 2,
                            "Cid Kagenou (Shadow)": 1,
                            "Beta": 1
                        }
                    }
                }
            }
        }
    },
    "an": {
        "season_count": 2,
        "line_count": 11144,
        "word_count": 77526,
        "char_count": 412078,
        "characters": {
            "Akane Nishino": 88,
            "Akane's Butler": 1,
            "Classmate": 11,
            "Cid Kagenou (Minoru Kageno)": 67,
            "Teacher": 4,
            "Student": 92,
            "Kidnapper A": 49,
            "Kidnapper B": 50,
            "Cid Kagenou (Stylish Ruffian Slayer)": 35,
            "News Reporter": 6,
            "Cid Kagenou (Shadow)": 509,
            "Alpha": 501,
            "Gamma": 225,
            "Beta": 321,
            "Delta": 119,
            "Zeta": 47,
            "Epsilon": 232,
            "Cid Kagenou": 1939,
            "Mr. Kagenou": 15,
            "Mrs. Kagenou": 12,
            "Bandit": 34,
            "Bandit Boss": 3,
            "Claire Kagenou": 242,
            "Maid": 6,
            "Grease": 47,
            "Soldier": 37,
            "Girl": 1,
            "Skel Etal": 335,
            "Po Tato": 175,
            "Alexia Midgar": 609,
            "Zenon Griffey": 104,
            "Skel Etal (Skel & Po (Skel))": 12,
            "Po Tato (Skel & Po (Po))": 12,
            "Scientist": 46,
            "Knight": 116,
            "Iris Midgar": 398,
            "Rose Oriana": 500,
            "Civilian": 55,
            "Glen": 11,
            "Marco Granger": 9,
            "Sherry Barnett": 191,
            "Cult Member": 51,
            "Lutheran Barnett": 113,
            "Nu": 181,
            "Rex": 50,
            "Lutheran Barnett (Sir Gaunt)": 18,
            "Referee": 39,
            "Bookie": 13,
            "Medic": 8,
            "Garden Members": 5,
            "Garden Member": 7,
            "Beta (Fictional Zenon)": 9,
            "Beta (Fictional Shadow)": 6,
            "Gamma (Luna)": 76,
            "Church Member": 5,
            "Beta (Natsume Kafka)": 134,
            "Paladin": 6,
            "Jack Nelson": 226,
            "Spectator": 54,
            "Announcer": 6,
            "Toppe Batterius": 2,
            "Alexia Midgar (Alexia Midgar & Natsume Kafka (Alexia Midgar))": 1,
            "Beta (Alexia Midgar & Natsume Kafka (Natsume Kafka))": 1,
            "Aurora": 211,
            "Chi": 27,
            "Omega": 18,
            "Rude": 26,
            "Mitsugoshi Staff": 1,
            "Participant": 13,
            "Boy": 3,
            "Cid Kagenou (Mundane Mann)": 85,
            "Annerose Nichtsehen": 154,
            "Quinton": 84,
            "Heckler": 7,
            "Clerk": 8,
            "Shop Staff": 13,
            "Cid Kagenou (Stylish Bandit Slayer)": 13,
            "Goldy Gilded": 88,
            "Beatrix": 71,
            "Perv Asshat": 266,
            "Raphael Oriana": 48,
            "Civil Servant": 7,
            "Civil Servants": 1,
            "Manager": 2,
            "Duke's Second Son": 18,
            "Captain's Daughter": 16,
            "Knight Captain": 5,
            "Klaus Midgar": 22,
            "Aristocrat": 60,
            "Crowd": 10,
            "Aristocrats": 2,
            "Mordred": 169,
            "Eta": 58,
            "Sailor": 2,
            "Lambda": 55,
            "No. 665": 37,
            "No. 664": 76,
            "White Demon": 45,
            "Merchant": 27,
            "Pickpocket": 5,
            "Mary": 127,
            "Marie": 81,
            "Coworker": 10,
            "Yukime": 222,
            "Natsu": 12,
            "Kana": 6,
            "Subordinate": 1,
            "Juggernaut": 51,
            "Claudia": 5,
            "Vampire": 8,
            "Crimson": 18,
            "Rose Oriana (No. 666)": 58,
            "Elisabeth": 5,
            "Cid Kagenou (John Smith)": 189,
            "Customer": 2,
            "Po Tato (Po)": 1,
            "Gettan": 129,
            "Garter Kikuchi": 48,
            "Zabra": 13,
            "Alpha (Alpha & Nu (Alpha))": 1,
            "Nu (Alpha & Nu (Nu))": 1,
            "Leaf Three": 1,
            "Leaf Two": 1,
            "Leaf One": 37,
            "Chi (Chi & Omega (Chi))": 1,
            "Omega (Chi & Omega (Omega))": 1,
            "Cid Kagenou (John Smith & Yukime (John Smith))": 1,
            "Yukime (John Smith & Yukime (Yukime))": 1,
            "Chi (Characterised Shadow)": 8,
            "Nu (Characterised Alpha)": 11,
            "Chi (Characterised Eta)": 3,
            "Chi (Characterised Cult Member)": 3,
            "Omega (Characterised Zeta)": 2,
            "Omega (Characterised Gamma)": 2,
            "Alpha (Seven Shadows (Alpha))": 1,
            "Beta (Seven Shadows (Beta))": 2,
            "Gamma (Seven Shadows (Gamma))": 2,
            "Delta (Seven Shadows (Delta))": 1,
            "Epsilon (Seven Shadows (Epsilon))": 2,
            "Zeta (Seven Shadows (Zeta))": 2,
            "Eta (Seven Shadows (Eta))": 1,
            "Zeta (Zetan)": 3,
            "Delta (Deltan)": 1,
            "Zeta (Zeta & Epsilon (Zeta))": 1,
            "Epsilon (Zeta & Epsilon (Epsilon))": 1,
            "Zeta (Beta & Zeta (Zeta))": 1,
            "Beta (Beta & Zeta (Beta))": 1,
            "Victoria (No. 559)": 77,
            "Kouadoi": 27,
            "Reina Oriana": 25,
            "Epsilon (Shiron)": 47,
            "Parton": 5,
            "Newwealth": 3,
            "Margaret": 81,
            "Kevin": 32,
            "Goldy (Goldy & Quinton (Goldy))": 1,
            "Quinton (Goldy & Quinton (Quinton))": 1,
            "Priest": 6,
            "Knights": 1,
            "Beta (Beta & Epsilon (Beta))": 2,
            "Epsilon (Beta & Epsilon (Epsilon))": 2
        },
        "seasons": {
            "1": {
                "episode_count": 20,
                "line_count": 6557,
                "word_count": 45103,
                "char_count": 239659,
                "characters": {
                    "Akane Nishino": 64,
                    "Akane's Butler": 1,
                    "Classmate": 11,
                    "Cid Kagenou (Minoru Kageno)": 67,
                    "Teacher": 4,
                    "Student": 92,
                    "Kidnapper A": 28,
                    "Kidnapper B": 29,
                    "Cid Kagenou (Stylish Ruffian Slayer)": 35,
                    "News Reporter": 6,
                    "Cid Kagenou (Shadow)": 257,
                    "Alpha": 269,
                    "Gamma": 86,
                    "Beta": 79,
                    "Delta": 15,
                    "Zeta": 2,
                    "Epsilon": 122,
                    "Cid Kagenou": 1376,
                    "Mr. Kagenou": 15,
                    "Mrs. Kagenou": 12,
                    "Bandit": 7,
                    "Bandit Boss": 3,
                    "Claire Kagenou": 63,
                    "Maid": 3,
                    "Grease": 47,
                    "Soldier": 10,
                    "Girl": 1,
                    "Skel Etal": 235,
                    "Po Tato": 77,
                    "Alexia Midgar": 568,
                    "Zenon Griffey": 104,
                    "Skel Etal (Skel & Po (Skel))": 2,
                    "Po Tato (Skel & Po (Po))": 2,
                    "Scientist": 46,
                    "Knight": 96,
                    "Iris Midgar": 392,
                    "Rose Oriana": 348,
                    "Civilian": 28,
                    "Glen": 11,
                    "Marco Granger": 6,
                    "Sherry Barnett": 191,
                    "Cult Member": 41,
                    "Lutheran Barnett": 113,
                    "Nu": 100,
                    "Rex": 50,
                    "Lutheran Barnett (Sir Gaunt)": 18,
                    "Referee": 35,
                    "Bookie": 13,
                    "Medic": 8,
                    "Garden Members": 4,
                    "Garden Member": 7,
                    "Beta (Fictional Zenon)": 9,
                    "Beta (Fictional Shadow)": 6,
                    "Gamma (Luna)": 37,
                    "Church Member": 5,
                    "Beta (Natsume Kafka)": 129,
                    "Paladin": 6,
                    "Jack Nelson": 226,
                    "Spectator": 54,
                    "Announcer": 6,
                    "Toppe Batterius": 2,
                    "Alexia Midgar (Alexia Midgar & Natsume Kafka (Alexia Midgar))": 1,
                    "Beta (Alexia Midgar & Natsume Kafka (Natsume Kafka))": 1,
                    "Aurora": 142,
                    "Chi": 12,
                    "Omega": 7,
                    "Rude": 26,
                    "Mitsugoshi Staff": 1,
                    "Participant": 13,
                    "Boy": 3,
                    "Cid Kagenou (Mundane Mann)": 85,
                    "Annerose Nichtsehen": 154,
                    "Quinton": 73,
                    "Heckler": 7,
                    "Clerk": 8,
                    "Shop Staff": 1,
                    "Cid Kagenou (Stylish Bandit Slayer)": 13,
                    "Goldy Gilded": 72,
                    "Beatrix": 71,
                    "Perv Asshat": 166,
                    "Raphael Oriana": 12,
                    "Civil Servant": 7,
                    "Civil Servants": 1,
                    "Manager": 2,
                    "Duke's Second Son": 18,
                    "Captain's Daughter": 16,
                    "Knight Captain": 5,
                    "Klaus Midgar": 22,
                    "Aristocrat": 37,
                    "Crowd": 8,
                    "Aristocrats": 1,
                    "Mordred": 3,
                    "Eta": 5,
                    "Sailor": 2,
                    "Lambda": 11,
                    "No. 665": 1,
                    "No. 664": 1
                },
                "episodes": {
                    "s1e1": {
                        "line_count": 262,
                        "word_count": 1736,
                        "char_count": 9294,
                        "characters": {
                            "Akane Nishino": 64,
                            "Akane's Butler": 1,
                            "Classmate": 11,
                            "Cid Kagenou (Minoru Kageno)": 55,
                            "Teacher": 4,
                            "Student": 2,
                            "Kidnapper A": 28,
                            "Kidnapper B": 29,
                            "Cid Kagenou (Stylish Ruffian Slayer)": 35,
                            "News Reporter": 6,
                            "Cid Kagenou (Shadow)": 19,
                            "Alpha": 3,
                            "Gamma": 1,
                            "Beta": 1,
                            "Delta": 1,
                            "Zeta": 1,
                            "Epsilon": 1
                        },
                        "episodes": {
                            "e1": {
                                "word_count": 1736,
                                "char_count": 9294,
                                "line_count": 262,
                                "characters": {
                                    "Akane Nishino": 64,
                                    "Akane's Butler": 1,
                                    "Classmate": 11,
                                    "Cid Kagenou (Minoru Kageno)": 55,
                                    "Teacher": 4,
                                    "Student": 2,
                                    "Kidnapper A": 28,
                                    "Kidnapper B": 29,
                                    "Cid Kagenou (Stylish Ruffian Slayer)": 35,
                                    "News Reporter": 6,
                                    "Cid Kagenou (Shadow)": 19,
                                    "Alpha": 3,
                                    "Gamma": 1,
                                    "Beta": 1,
                                    "Delta": 1,
                                    "Zeta": 1,
                                    "Epsilon": 1
                                }
                            }
                        }
                    },
                    "s1e2": {
                        "line_count": 338,
                        "word_count": 2230,
                        "char_count": 11861,
                        "characters": {
                            "Cid Kagenou": 113,
                            "Alpha": 35,
                            "Cid Kagenou (Minoru Kageno)": 4,
                            "Mr. Kagenou": 10,
                            "Mrs. Kagenou": 8,
                            "Cid Kagenou (Shadow)": 66,
                            "Bandit": 2,
                            "Bandit Boss": 3,
                            "Claire Kagenou": 19,
                            "Maid": 3,
                            "Beta": 21,
                            "Grease": 47,
                            "Soldier": 6,
                            "Gamma": 1,
                            "Epsilon": 1
                        },
                        "episodes": {
                            "e2": {
                                "word_count": 2230,
                                "char_count": 11861,
                                "line_count": 338,
                                "characters": {
                                    "Cid Kagenou": 113,
                                    "Alpha": 35,
                                    "Cid Kagenou (Minoru Kageno)": 4,
                                    "Mr. Kagenou": 10,
                                    "Mrs. Kagenou": 8,
                                    "Cid Kagenou (Shadow)": 66,
                                    "Bandit": 2,
                                    "Bandit Boss": 3,
                                    "Claire Kagenou": 19,
                                    "Maid": 3,
                                    "Beta": 21,
                                    "Grease": 47,
                                    "Soldier": 6,
                                    "Gamma": 1,
                                    "Epsilon": 1
                                }
                            }
                        }
                    },
                    "s1e3": {
                        "line_count": 356,
                        "word_count": 2592,
                        "char_count": 13768,
                        "characters": {
                            "Cid Kagenou": 178,
                            "Girl": 1,
                            "Cid Kagenou (Minoru Kageno)": 8,
                            "Skel Etal": 25,
                            "Po Tato": 17,
                            "Student": 15,
                            "Alexia Midgar": 89,
                            "Zenon Griffey": 23,
                            "Skel Etal (Skel & Po (Skel))": 2,
                            "Po Tato (Skel & Po (Po))": 2
                        },
                        "episodes": {
                            "e3": {
                                "word_count": 2592,
                                "char_count": 13768,
                                "line_count": 356,
                                "characters": {
                                    "Cid Kagenou": 178,
                                    "Girl": 1,
                                    "Cid Kagenou (Minoru Kageno)": 8,
                                    "Skel Etal": 25,
                                    "Po Tato": 17,
                                    "Student": 15,
                                    "Alexia Midgar": 89,
                                    "Zenon Griffey": 23,
                                    "Skel Etal (Skel & Po (Skel))": 2,
                                    "Po Tato (Skel & Po (Po))": 2
                                }
                            }
                        }
                    },
                    "s1e4": {
                        "line_count": 330,
                        "word_count": 2411,
                        "char_count": 12907,
                        "characters": {
                            "Alexia Midgar": 40,
                            "Scientist": 46,
                            "Knight": 44,
                            "Cid Kagenou": 37,
                            "Iris Midgar": 28,
                            "Zenon Griffey": 42,
                            "Claire Kagenou": 17,
                            "Student": 5,
                            "Rose Oriana": 12,
                            "Alpha": 30,
                            "Cid Kagenou (Shadow)": 26,
                            "Beta": 22,
                            "Civilian": 4
                        },
                        "episodes": {
                            "e4": {
                                "word_count": 2411,
                                "char_count": 12907,
                                "line_count": 330,
                                "characters": {
                                    "Alexia Midgar": 40,
                                    "Scientist": 46,
                                    "Knight": 44,
                                    "Cid Kagenou": 37,
                                    "Iris Midgar": 28,
                                    "Zenon Griffey": 42,
                                    "Claire Kagenou": 17,
                                    "Student": 5,
                                    "Rose Oriana": 12,
                                    "Alpha": 30,
                                    "Cid Kagenou (Shadow)": 26,
                                    "Beta": 22,
                                    "Civilian": 4
                                }
                            }
                        }
                    },
                    "s1e5": {
                        "line_count": 223,
                        "word_count": 1333,
                        "char_count": 7160,
                        "characters": {
                            "Zenon Griffey": 37,
                            "Cid Kagenou (Shadow)": 30,
                            "Alexia Midgar": 40,
                            "Knight": 20,
                            "Soldier": 1,
                            "Iris Midgar": 37,
                            "Alpha": 15,
                            "Cid Kagenou": 14,
                            "Beta": 10,
                            "Delta": 1,
                            "Epsilon": 3,
                            "Gamma": 4,
                            "Glen": 3,
                            "Marco Granger": 1,
                            "Sherry Barnett": 7
                        },
                        "episodes": {
                            "e5": {
                                "word_count": 1333,
                                "char_count": 7160,
                                "line_count": 223,
                                "characters": {
                                    "Zenon Griffey": 37,
                                    "Cid Kagenou (Shadow)": 30,
                                    "Alexia Midgar": 40,
                                    "Knight": 20,
                                    "Soldier": 1,
                                    "Iris Midgar": 37,
                                    "Alpha": 15,
                                    "Cid Kagenou": 14,
                                    "Beta": 10,
                                    "Delta": 1,
                                    "Epsilon": 3,
                                    "Gamma": 4,
                                    "Glen": 3,
                                    "Marco Granger": 1,
                                    "Sherry Barnett": 7
                                }
                            }
                        }
                    },
                    "s1e6": {
                        "line_count": 331,
                        "word_count": 2069,
                        "char_count": 10839,
                        "characters": {
                            "Cult Member": 10,
                            "Civilian": 1,
                            "Skel Etal": 28,
                            "Cid Kagenou": 87,
                            "Po Tato": 32,
                            "Iris Midgar": 29,
                            "Sherry Barnett": 23,
                            "Alexia Midgar": 27,
                            "Lutheran Barnett": 27,
                            "Glen": 1,
                            "Nu": 15,
                            "Gamma": 32,
                            "Cid Kagenou (Shadow)": 6,
                            "Rex": 2,
                            "Lutheran Barnett (Sir Gaunt)": 3,
                            "Student": 11
                        },
                        "episodes": {
                            "e6": {
                                "word_count": 2069,
                                "char_count": 10839,
                                "line_count": 331,
                                "characters": {
                                    "Cult Member": 10,
                                    "Civilian": 1,
                                    "Skel Etal": 28,
                                    "Cid Kagenou": 87,
                                    "Po Tato": 32,
                                    "Iris Midgar": 29,
                                    "Sherry Barnett": 23,
                                    "Alexia Midgar": 27,
                                    "Lutheran Barnett": 27,
                                    "Glen": 1,
                                    "Nu": 15,
                                    "Gamma": 32,
                                    "Cid Kagenou (Shadow)": 6,
                                    "Rex": 2,
                                    "Lutheran Barnett (Sir Gaunt)": 3,
                                    "Student": 11
                                }
                            }
                        }
                    },
                    "s1e7": {
                        "line_count": 318,
                        "word_count": 2153,
                        "char_count": 11376,
                        "characters": {
                            "Lutheran Barnett": 9,
                            "Sherry Barnett": 47,
                            "Cid Kagenou": 95,
                            "Nu": 29,
                            "Skel Etal": 17,
                            "Po Tato": 15,
                            "Referee": 10,
                            "Student": 23,
                            "Bookie": 13,
                            "Rose Oriana": 22,
                            "Medic": 8,
                            "Alexia Midgar": 30,
                            "Marco Granger": 1,
                            "Lutheran Barnett (Sir Gaunt)": 1,
                            "Cult Member": 11
                        },
                        "episodes": {
                            "e7": {
                                "word_count": 2153,
                                "char_count": 11376,
                                "line_count": 318,
                                "characters": {
                                    "Lutheran Barnett": 9,
                                    "Sherry Barnett": 47,
                                    "Cid Kagenou": 95,
                                    "Nu": 29,
                                    "Skel Etal": 17,
                                    "Po Tato": 15,
                                    "Referee": 10,
                                    "Student": 23,
                                    "Bookie": 13,
                                    "Rose Oriana": 22,
                                    "Medic": 8,
                                    "Alexia Midgar": 30,
                                    "Marco Granger": 1,
                                    "Lutheran Barnett (Sir Gaunt)": 1,
                                    "Cult Member": 11
                                }
                            }
                        }
                    },
                    "s1e8": {
                        "line_count": 322,
                        "word_count": 2423,
                        "char_count": 12986,
                        "characters": {
                            "Student": 7,
                            "Cid Kagenou": 138,
                            "Cult Member": 8,
                            "Rose Oriana": 14,
                            "Sherry Barnett": 59,
                            "Rex": 48,
                            "Glen": 6,
                            "Marco Granger": 4,
                            "Lutheran Barnett (Sir Gaunt)": 9,
                            "Nu": 38
                        },
                        "episodes": {
                            "e8": {
                                "word_count": 2423,
                                "char_count": 12986,
                                "line_count": 322,
                                "characters": {
                                    "Student": 7,
                                    "Cid Kagenou": 138,
                                    "Cult Member": 8,
                                    "Rose Oriana": 14,
                                    "Sherry Barnett": 59,
                                    "Rex": 48,
                                    "Glen": 6,
                                    "Marco Granger": 4,
                                    "Lutheran Barnett (Sir Gaunt)": 9,
                                    "Nu": 38
                                }
                            }
                        }
                    },
                    "s1e9": {
                        "line_count": 285,
                        "word_count": 1796,
                        "char_count": 9430,
                        "characters": {
                            "Knight": 14,
                            "Rose Oriana": 31,
                            "Sherry Barnett": 44,
                            "Cid Kagenou": 39,
                            "Lutheran Barnett": 77,
                            "Lutheran Barnett (Sir Gaunt)": 5,
                            "Cult Member": 7,
                            "Student": 21,
                            "Cid Kagenou (Shadow)": 18,
                            "Garden Members": 3,
                            "Gamma": 8,
                            "Garden Member": 1,
                            "Iris Midgar": 7,
                            "Nu": 1,
                            "Alpha": 10
                        },
                        "episodes": {
                            "e9": {
                                "word_count": 1796,
                                "char_count": 9430,
                                "line_count": 285,
                                "characters": {
                                    "Knight": 14,
                                    "Rose Oriana": 31,
                                    "Sherry Barnett": 44,
                                    "Cid Kagenou": 39,
                                    "Lutheran Barnett": 77,
                                    "Lutheran Barnett (Sir Gaunt)": 5,
                                    "Cult Member": 7,
                                    "Student": 21,
                                    "Cid Kagenou (Shadow)": 18,
                                    "Garden Members": 3,
                                    "Gamma": 8,
                                    "Garden Member": 1,
                                    "Iris Midgar": 7,
                                    "Nu": 1,
                                    "Alpha": 10
                                }
                            }
                        }
                    },
                    "s1e10": {
                        "line_count": 364,
                        "word_count": 2449,
                        "char_count": 13040,
                        "characters": {
                            "Cid Kagenou": 100,
                            "Delta": 1,
                            "Epsilon": 31,
                            "Beta (Fictional Zenon)": 9,
                            "Beta (Fictional Shadow)": 6,
                            "Beta": 13,
                            "Garden Members": 1,
                            "Nu": 2,
                            "Iris Midgar": 42,
                            "Alexia Midgar": 54,
                            "Gamma (Luna)": 20,
                            "Knight": 10,
                            "Rose Oriana": 53,
                            "Church Member": 5,
                            "Beta (Natsume Kafka)": 6,
                            "Alpha": 11,
                            "Paladin": 4
                        },
                        "episodes": {
                            "e10": {
                                "word_count": 2449,
                                "char_count": 13040,
                                "line_count": 364,
                                "characters": {
                                    "Cid Kagenou": 100,
                                    "Delta": 1,
                                    "Epsilon": 31,
                                    "Beta (Fictional Zenon)": 9,
                                    "Beta (Fictional Shadow)": 6,
                                    "Beta": 13,
                                    "Garden Members": 1,
                                    "Nu": 2,
                                    "Iris Midgar": 42,
                                    "Alexia Midgar": 54,
                                    "Gamma (Luna)": 20,
                                    "Knight": 10,
                                    "Rose Oriana": 53,
                                    "Church Member": 5,
                                    "Beta (Natsume Kafka)": 6,
                                    "Alpha": 11,
                                    "Paladin": 4
                                }
                            }
                        }
                    },
                    "s1e11": {
                        "line_count": 284,
                        "word_count": 2250,
                        "char_count": 12154,
                        "characters": {
                            "Cid Kagenou": 65,
                            "Alexia Midgar": 78,
                            "Jack Nelson": 55,
                            "Spectator": 19,
                            "Beta (Natsume Kafka)": 30,
                            "Announcer": 6,
                            "Toppe Batterius": 2,
                            "Rose Oriana": 6,
                            "Alexia Midgar (Alexia Midgar & Natsume Kafka (Alexia Midgar))": 1,
                            "Beta (Alexia Midgar & Natsume Kafka (Natsume Kafka))": 1,
                            "Cid Kagenou (Shadow)": 23,
                            "Alpha": 3
                        },
                        "episodes": {
                            "e11": {
                                "word_count": 2250,
                                "char_count": 12154,
                                "line_count": 284,
                                "characters": {
                                    "Cid Kagenou": 65,
                                    "Alexia Midgar": 78,
                                    "Jack Nelson": 55,
                                    "Spectator": 19,
                                    "Beta (Natsume Kafka)": 30,
                                    "Announcer": 6,
                                    "Toppe Batterius": 2,
                                    "Rose Oriana": 6,
                                    "Alexia Midgar (Alexia Midgar & Natsume Kafka (Alexia Midgar))": 1,
                                    "Beta (Alexia Midgar & Natsume Kafka (Natsume Kafka))": 1,
                                    "Cid Kagenou (Shadow)": 23,
                                    "Alpha": 3
                                }
                            }
                        }
                    },
                    "s1e12": {
                        "line_count": 356,
                        "word_count": 2389,
                        "char_count": 12487,
                        "characters": {
                            "Cid Kagenou": 49,
                            "Spectator": 2,
                            "Rose Oriana": 28,
                            "Alexia Midgar": 35,
                            "Jack Nelson": 64,
                            "Paladin": 2,
                            "Beta (Natsume Kafka)": 10,
                            "Alpha": 88,
                            "Epsilon": 27,
                            "Delta": 4,
                            "Cid Kagenou (Shadow)": 1,
                            "Aurora": 50
                        },
                        "episodes": {
                            "e12": {
                                "word_count": 2389,
                                "char_count": 12487,
                                "line_count": 356,
                                "characters": {
                                    "Cid Kagenou": 49,
                                    "Spectator": 2,
                                    "Rose Oriana": 28,
                                    "Alexia Midgar": 35,
                                    "Jack Nelson": 64,
                                    "Paladin": 2,
                                    "Beta (Natsume Kafka)": 10,
                                    "Alpha": 88,
                                    "Epsilon": 27,
                                    "Delta": 4,
                                    "Cid Kagenou (Shadow)": 1,
                                    "Aurora": 50
                                }
                            }
                        }
                    },
                    "s1e13": {
                        "line_count": 300,
                        "word_count": 1840,
                        "char_count": 9666,
                        "characters": {
                            "Rose Oriana": 2,
                            "Alexia Midgar": 11,
                            "Beta (Natsume Kafka)": 4,
                            "Epsilon": 19,
                            "Alpha": 24,
                            "Jack Nelson": 73,
                            "Delta": 7,
                            "Aurora": 70,
                            "Cid Kagenou": 73,
                            "Chi": 10,
                            "Omega": 5,
                            "Garden Member": 2
                        },
                        "episodes": {
                            "e13": {
                                "word_count": 1840,
                                "char_count": 9666,
                                "line_count": 300,
                                "characters": {
                                    "Rose Oriana": 2,
                                    "Alexia Midgar": 11,
                                    "Beta (Natsume Kafka)": 4,
                                    "Epsilon": 19,
                                    "Alpha": 24,
                                    "Jack Nelson": 73,
                                    "Delta": 7,
                                    "Aurora": 70,
                                    "Cid Kagenou": 73,
                                    "Chi": 10,
                                    "Omega": 5,
                                    "Garden Member": 2
                                }
                            }
                        }
                    },
                    "s1e14": {
                        "line_count": 334,
                        "word_count": 2406,
                        "char_count": 12861,
                        "characters": {
                            "Jack Nelson": 34,
                            "Cid Kagenou": 55,
                            "Aurora": 22,
                            "Alexia Midgar": 60,
                            "Rose Oriana": 16,
                            "Beta (Natsume Kafka)": 9,
                            "Epsilon": 15,
                            "Alpha": 26,
                            "Rude": 26,
                            "Gamma (Luna)": 15,
                            "Nu": 7,
                            "Mitsugoshi Staff": 1,
                            "Beta": 1,
                            "Chi": 1,
                            "Omega": 1,
                            "Gamma": 4,
                            "Iris Midgar": 47
                        },
                        "episodes": {
                            "e14": {
                                "word_count": 2406,
                                "char_count": 12861,
                                "line_count": 334,
                                "characters": {
                                    "Jack Nelson": 34,
                                    "Cid Kagenou": 55,
                                    "Aurora": 22,
                                    "Alexia Midgar": 60,
                                    "Rose Oriana": 16,
                                    "Beta (Natsume Kafka)": 9,
                                    "Epsilon": 15,
                                    "Alpha": 26,
                                    "Rude": 26,
                                    "Gamma (Luna)": 15,
                                    "Nu": 7,
                                    "Mitsugoshi Staff": 1,
                                    "Beta": 1,
                                    "Chi": 1,
                                    "Omega": 1,
                                    "Gamma": 4,
                                    "Iris Midgar": 47
                                }
                            }
                        }
                    },
                    "s1e15": {
                        "line_count": 437,
                        "word_count": 2931,
                        "char_count": 15524,
                        "characters": {
                            "Civilian": 12,
                            "Participant": 13,
                            "Cid Kagenou": 86,
                            "Boy": 3,
                            "Gamma": 36,
                            "Nu": 2,
                            "Cid Kagenou (Mundane Mann)": 52,
                            "Annerose Nichtsehen": 26,
                            "Quinton": 15,
                            "Heckler": 7,
                            "Clerk": 4,
                            "Skel Etal": 82,
                            "Shop Staff": 1,
                            "Rose Oriana": 33,
                            "Cid Kagenou (Stylish Bandit Slayer)": 2,
                            "Spectator": 11,
                            "Goldy Gilded": 49,
                            "Referee": 8
                        },
                        "episodes": {
                            "e15": {
                                "word_count": 2931,
                                "char_count": 15524,
                                "line_count": 437,
                                "characters": {
                                    "Civilian": 12,
                                    "Participant": 13,
                                    "Cid Kagenou": 86,
                                    "Boy": 3,
                                    "Gamma": 36,
                                    "Nu": 2,
                                    "Cid Kagenou (Mundane Mann)": 52,
                                    "Annerose Nichtsehen": 26,
                                    "Quinton": 15,
                                    "Heckler": 7,
                                    "Clerk": 4,
                                    "Skel Etal": 82,
                                    "Shop Staff": 1,
                                    "Rose Oriana": 33,
                                    "Cid Kagenou (Stylish Bandit Slayer)": 2,
                                    "Spectator": 11,
                                    "Goldy Gilded": 49,
                                    "Referee": 8
                                }
                            }
                        }
                    },
                    "s1e16": {
                        "line_count": 366,
                        "word_count": 2667,
                        "char_count": 14176,
                        "characters": {
                            "Alexia Midgar": 31,
                            "Beta (Natsume Kafka)": 37,
                            "Garden Member": 4,
                            "Referee": 7,
                            "Cid Kagenou": 35,
                            "Skel Etal": 23,
                            "Beatrix": 20,
                            "Quinton": 57,
                            "Annerose Nichtsehen": 81,
                            "Goldy Gilded": 19,
                            "Iris Midgar": 5,
                            "Perv Asshat": 17,
                            "Raphael Oriana": 2,
                            "Spectator": 16,
                            "Po Tato": 1,
                            "Cid Kagenou (Mundane Mann)": 14,
                            "Rose Oriana": 2,
                            "Knight": 4
                        },
                        "episodes": {
                            "e16": {
                                "word_count": 2667,
                                "char_count": 14176,
                                "line_count": 366,
                                "characters": {
                                    "Alexia Midgar": 31,
                                    "Beta (Natsume Kafka)": 37,
                                    "Garden Member": 4,
                                    "Referee": 7,
                                    "Cid Kagenou": 35,
                                    "Skel Etal": 23,
                                    "Beatrix": 20,
                                    "Quinton": 57,
                                    "Annerose Nichtsehen": 81,
                                    "Goldy Gilded": 19,
                                    "Iris Midgar": 5,
                                    "Perv Asshat": 17,
                                    "Raphael Oriana": 2,
                                    "Spectator": 16,
                                    "Po Tato": 1,
                                    "Cid Kagenou (Mundane Mann)": 14,
                                    "Rose Oriana": 2,
                                    "Knight": 4
                                }
                            }
                        }
                    },
                    "s1e17": {
                        "line_count": 326,
                        "word_count": 2549,
                        "char_count": 13351,
                        "characters": {
                            "Cid Kagenou (Mundane Mann)": 6,
                            "Cid Kagenou": 86,
                            "Skel Etal": 43,
                            "Epsilon": 23,
                            "Alexia Midgar": 56,
                            "Beta (Natsume Kafka)": 33,
                            "Rose Oriana": 73,
                            "Civil Servant": 1,
                            "Perv Asshat": 3,
                            "Raphael Oriana": 3,
                            "Civil Servants": 1,
                            "Cid Kagenou (Shadow)": 10,
                            "Soldier": 2
                        },
                        "episodes": {
                            "e17": {
                                "word_count": 2549,
                                "char_count": 13351,
                                "line_count": 326,
                                "characters": {
                                    "Cid Kagenou (Mundane Mann)": 6,
                                    "Cid Kagenou": 86,
                                    "Skel Etal": 43,
                                    "Epsilon": 23,
                                    "Alexia Midgar": 56,
                                    "Beta (Natsume Kafka)": 33,
                                    "Rose Oriana": 73,
                                    "Civil Servant": 1,
                                    "Perv Asshat": 3,
                                    "Raphael Oriana": 3,
                                    "Civil Servants": 1,
                                    "Cid Kagenou (Shadow)": 10,
                                    "Soldier": 2
                                }
                            }
                        }
                    },
                    "s1e18": {
                        "line_count": 373,
                        "word_count": 2816,
                        "char_count": 14880,
                        "characters": {
                            "Cid Kagenou": 87,
                            "Claire Kagenou": 23,
                            "Alexia Midgar": 9,
                            "Manager": 2,
                            "Duke's Second Son": 15,
                            "Iris Midgar": 88,
                            "Captain's Daughter": 15,
                            "Referee": 4,
                            "Beatrix": 18,
                            "Perv Asshat": 53,
                            "Annerose Nichtsehen": 46,
                            "Cid Kagenou (Mundane Mann)": 5,
                            "Cult Member": 4,
                            "Skel Etal": 13,
                            "Soldier": 1,
                            "Rose Oriana": 1
                        },
                        "episodes": {
                            "e18": {
                                "word_count": 2816,
                                "char_count": 14880,
                                "line_count": 373,
                                "characters": {
                                    "Cid Kagenou": 87,
                                    "Claire Kagenou": 23,
                                    "Alexia Midgar": 9,
                                    "Manager": 2,
                                    "Duke's Second Son": 15,
                                    "Iris Midgar": 88,
                                    "Captain's Daughter": 15,
                                    "Referee": 4,
                                    "Beatrix": 18,
                                    "Perv Asshat": 53,
                                    "Annerose Nichtsehen": 46,
                                    "Cid Kagenou (Mundane Mann)": 5,
                                    "Cult Member": 4,
                                    "Skel Etal": 13,
                                    "Soldier": 1,
                                    "Rose Oriana": 1
                                }
                            }
                        }
                    },
                    "s1e19": {
                        "line_count": 379,
                        "word_count": 2367,
                        "char_count": 12815,
                        "characters": {
                            "Zenon Griffey": 2,
                            "Glen": 1,
                            "Alexia Midgar": 1,
                            "Referee": 6,
                            "Student": 3,
                            "Knight Captain": 5,
                            "Civilian": 5,
                            "Alpha": 2,
                            "Iris Midgar": 81,
                            "Knight": 2,
                            "Klaus Midgar": 12,
                            "Cid Kagenou": 32,
                            "Clerk": 4,
                            "Beatrix": 16,
                            "Aristocrat": 37,
                            "Duke's Second Son": 3,
                            "Captain's Daughter": 1,
                            "Perv Asshat": 85,
                            "Cult Member": 1,
                            "Raphael Oriana": 7,
                            "Crowd": 8,
                            "Claire Kagenou": 1,
                            "Cid Kagenou (Mundane Mann)": 6,
                            "Rose Oriana": 36,
                            "Beta": 2,
                            "Spectator": 6,
                            "Aristocrats": 1,
                            "Cid Kagenou (Shadow)": 6,
                            "Cid Kagenou (Stylish Bandit Slayer)": 11,
                            "Bandit": 5
                        },
                        "episodes": {
                            "e19": {
                                "word_count": 2367,
                                "char_count": 12815,
                                "line_count": 379,
                                "characters": {
                                    "Zenon Griffey": 2,
                                    "Glen": 1,
                                    "Alexia Midgar": 1,
                                    "Referee": 6,
                                    "Student": 3,
                                    "Knight Captain": 5,
                                    "Civilian": 5,
                                    "Alpha": 2,
                                    "Iris Midgar": 81,
                                    "Knight": 2,
                                    "Klaus Midgar": 12,
                                    "Cid Kagenou": 32,
                                    "Clerk": 4,
                                    "Beatrix": 16,
                                    "Aristocrat": 37,
                                    "Duke's Second Son": 3,
                                    "Captain's Daughter": 1,
                                    "Perv Asshat": 85,
                                    "Cult Member": 1,
                                    "Raphael Oriana": 7,
                                    "Crowd": 8,
                                    "Claire Kagenou": 1,
                                    "Cid Kagenou (Mundane Mann)": 6,
                                    "Rose Oriana": 36,
                                    "Beta": 2,
                                    "Spectator": 6,
                                    "Aristocrats": 1,
                                    "Cid Kagenou (Shadow)": 6,
                                    "Cid Kagenou (Stylish Bandit Slayer)": 11,
                                    "Bandit": 5
                                }
                            }
                        }
                    },
                    "s1e20": {
                        "line_count": 273,
                        "word_count": 1696,
                        "char_count": 9084,
                        "characters": {
                            "Iris Midgar": 28,
                            "Rose Oriana": 19,
                            "Alpha": 22,
                            "Alexia Midgar": 7,
                            "Cid Kagenou (Mundane Mann)": 2,
                            "Civilian": 6,
                            "Knight": 2,
                            "Klaus Midgar": 10,
                            "Civil Servant": 6,
                            "Beatrix": 17,
                            "Cid Kagenou (Shadow)": 52,
                            "Claire Kagenou": 3,
                            "Annerose Nichtsehen": 1,
                            "Cid Kagenou": 7,
                            "Sherry Barnett": 11,
                            "Mordred": 3,
                            "Perv Asshat": 8,
                            "Goldy Gilded": 4,
                            "Quinton": 1,
                            "Gamma (Luna)": 2,
                            "Nu": 6,
                            "Beta": 9,
                            "Epsilon": 2,
                            "Eta": 5,
                            "Chi": 1,
                            "Omega": 1,
                            "Delta": 1,
                            "Student": 5,
                            "Po Tato": 12,
                            "Skel Etal": 4,
                            "Sailor": 2,
                            "Zeta": 1,
                            "Mr. Kagenou": 5,
                            "Mrs. Kagenou": 4,
                            "Lambda": 11,
                            "No. 665": 1,
                            "No. 664": 1
                        },
                        "episodes": {
                            "e20": {
                                "word_count": 1696,
                                "char_count": 9084,
                                "line_count": 273,
                                "characters": {
                                    "Iris Midgar": 28,
                                    "Rose Oriana": 19,
                                    "Alpha": 22,
                                    "Alexia Midgar": 7,
                                    "Cid Kagenou (Mundane Mann)": 2,
                                    "Civilian": 6,
                                    "Knight": 2,
                                    "Klaus Midgar": 10,
                                    "Civil Servant": 6,
                                    "Beatrix": 17,
                                    "Cid Kagenou (Shadow)": 52,
                                    "Claire Kagenou": 3,
                                    "Annerose Nichtsehen": 1,
                                    "Cid Kagenou": 7,
                                    "Sherry Barnett": 11,
                                    "Mordred": 3,
                                    "Perv Asshat": 8,
                                    "Goldy Gilded": 4,
                                    "Quinton": 1,
                                    "Gamma (Luna)": 2,
                                    "Nu": 6,
                                    "Beta": 9,
                                    "Epsilon": 2,
                                    "Eta": 5,
                                    "Chi": 1,
                                    "Omega": 1,
                                    "Delta": 1,
                                    "Student": 5,
                                    "Po Tato": 12,
                                    "Skel Etal": 4,
                                    "Sailor": 2,
                                    "Zeta": 1,
                                    "Mr. Kagenou": 5,
                                    "Mrs. Kagenou": 4,
                                    "Lambda": 11,
                                    "No. 665": 1,
                                    "No. 664": 1
                                }
                            }
                        }
                    }
                }
            },
            "2": {
                "episode_count": 12,
                "line_count": 4587,
                "word_count": 32423,
                "char_count": 172419,
                "characters": {
                    "Beta": 242,
                    "Gamma": 139,
                    "Epsilon": 110,
                    "Zeta": 45,
                    "Eta": 53,
                    "Cid Kagenou (Shadow)": 252,
                    "Lambda": 44,
                    "Nu": 81,
                    "Alpha": 232,
                    "Goldy Gilded": 16,
                    "Quinton": 11,
                    "White Demon": 45,
                    "Cid Kagenou": 563,
                    "Claire Kagenou": 179,
                    "Referee": 4,
                    "Merchant": 27,
                    "Pickpocket": 5,
                    "Civilian": 27,
                    "Mary": 127,
                    "Skel Etal": 100,
                    "Po Tato": 98,
                    "Skel Etal (Skel & Po (Skel))": 10,
                    "Po Tato (Skel & Po (Po))": 10,
                    "Marie": 81,
                    "Coworker": 10,
                    "Yukime": 222,
                    "Natsu": 12,
                    "Kana": 6,
                    "Subordinate": 1,
                    "Juggernaut": 51,
                    "Knight": 20,
                    "Claudia": 5,
                    "Vampire": 8,
                    "Crimson": 18,
                    "No. 665": 36,
                    "No. 664": 75,
                    "Rose Oriana (No. 666)": 58,
                    "Elisabeth": 5,
                    "Aurora": 69,
                    "Bandit": 27,
                    "Chi": 15,
                    "Omega": 11,
                    "Cid Kagenou (John Smith)": 189,
                    "Shop Staff": 12,
                    "Customer": 2,
                    "Po Tato (Po)": 1,
                    "Delta": 104,
                    "Gettan": 129,
                    "Garter Kikuchi": 48,
                    "Zabra": 13,
                    "Alpha (Alpha & Nu (Alpha))": 1,
                    "Nu (Alpha & Nu (Nu))": 1,
                    "Leaf Three": 1,
                    "Leaf Two": 1,
                    "Leaf One": 37,
                    "Gamma (Luna)": 39,
                    "Chi (Chi & Omega (Chi))": 1,
                    "Omega (Chi & Omega (Omega))": 1,
                    "Alexia Midgar": 41,
                    "Cid Kagenou (John Smith & Yukime (John Smith))": 1,
                    "Yukime (John Smith & Yukime (Yukime))": 1,
                    "Cult Member": 10,
                    "Iris Midgar": 6,
                    "Marco Granger": 3,
                    "Chi (Characterised Shadow)": 8,
                    "Nu (Characterised Alpha)": 11,
                    "Chi (Characterised Eta)": 3,
                    "Chi (Characterised Cult Member)": 3,
                    "Omega (Characterised Zeta)": 2,
                    "Omega (Characterised Gamma)": 2,
                    "Alpha (Seven Shadows (Alpha))": 1,
                    "Beta (Seven Shadows (Beta))": 2,
                    "Gamma (Seven Shadows (Gamma))": 2,
                    "Delta (Seven Shadows (Delta))": 1,
                    "Epsilon (Seven Shadows (Epsilon))": 2,
                    "Zeta (Seven Shadows (Zeta))": 2,
                    "Eta (Seven Shadows (Eta))": 1,
                    "Beta (Natsume Kafka)": 5,
                    "Zeta (Zetan)": 3,
                    "Delta (Deltan)": 1,
                    "Zeta (Zeta & Epsilon (Zeta))": 1,
                    "Epsilon (Zeta & Epsilon (Epsilon))": 1,
                    "Zeta (Beta & Zeta (Zeta))": 1,
                    "Beta (Beta & Zeta (Beta))": 1,
                    "Rose Oriana": 152,
                    "Raphael Oriana": 36,
                    "Victoria (No. 559)": 77,
                    "Kouadoi": 27,
                    "Reina Oriana": 25,
                    "Soldier": 27,
                    "Epsilon (Shiron)": 47,
                    "Perv Asshat": 100,
                    "Aristocrat": 23,
                    "Parton": 5,
                    "Newwealth": 3,
                    "Margaret": 81,
                    "Kevin": 32,
                    "Mordred": 166,
                    "Goldy (Goldy & Quinton (Goldy))": 1,
                    "Quinton (Goldy & Quinton (Quinton))": 1,
                    "Crowd": 2,
                    "Maid": 3,
                    "Priest": 6,
                    "Aristocrats": 1,
                    "Garden Members": 1,
                    "Knights": 1,
                    "Beta (Beta & Epsilon (Beta))": 2,
                    "Epsilon (Beta & Epsilon (Epsilon))": 2,
                    "Akane Nishino": 24,
                    "Kidnapper A": 21,
                    "Kidnapper B": 21
                },
                "episodes": {
                    "s2e1": {
                        "line_count": 412,
                        "word_count": 2870,
                        "char_count": 14889,
                        "characters": {
                            "Beta": 16,
                            "Gamma": 6,
                            "Epsilon": 5,
                            "Zeta": 2,
                            "Eta": 4,
                            "Cid Kagenou (Shadow)": 40,
                            "Lambda": 1,
                            "Nu": 2,
                            "Alpha": 6,
                            "Goldy Gilded": 12,
                            "Quinton": 10,
                            "White Demon": 10,
                            "Cid Kagenou": 75,
                            "Claire Kagenou": 62,
                            "Referee": 4,
                            "Merchant": 27,
                            "Pickpocket": 5,
                            "Civilian": 11,
                            "Mary": 8,
                            "Skel Etal": 11,
                            "Po Tato": 9,
                            "Skel Etal (Skel & Po (Skel))": 1,
                            "Po Tato (Skel & Po (Po))": 1,
                            "Marie": 39,
                            "Coworker": 10,
                            "Yukime": 7,
                            "Natsu": 1,
                            "Kana": 1,
                            "Subordinate": 1,
                            "Juggernaut": 7,
                            "Knight": 7,
                            "Claudia": 5,
                            "Vampire": 8,
                            "Crimson": 8
                        },
                        "episodes": {
                            "e1": {
                                "word_count": 2870,
                                "char_count": 14889,
                                "line_count": 412,
                                "characters": {
                                    "Beta": 16,
                                    "Gamma": 6,
                                    "Epsilon": 5,
                                    "Zeta": 2,
                                    "Eta": 4,
                                    "Cid Kagenou (Shadow)": 40,
                                    "Lambda": 1,
                                    "Nu": 2,
                                    "Alpha": 6,
                                    "Goldy Gilded": 12,
                                    "Quinton": 10,
                                    "White Demon": 10,
                                    "Cid Kagenou": 75,
                                    "Claire Kagenou": 62,
                                    "Referee": 4,
                                    "Merchant": 27,
                                    "Pickpocket": 5,
                                    "Civilian": 11,
                                    "Mary": 8,
                                    "Skel Etal": 11,
                                    "Po Tato": 9,
                                    "Skel Etal (Skel & Po (Skel))": 1,
                                    "Po Tato (Skel & Po (Po))": 1,
                                    "Marie": 39,
                                    "Coworker": 10,
                                    "Yukime": 7,
                                    "Natsu": 1,
                                    "Kana": 1,
                                    "Subordinate": 1,
                                    "Juggernaut": 7,
                                    "Knight": 7,
                                    "Claudia": 5,
                                    "Vampire": 8,
                                    "Crimson": 8
                                }
                            }
                        }
                    },
                    "s2e2": {
                        "line_count": 345,
                        "word_count": 2422,
                        "char_count": 12857,
                        "characters": {
                            "White Demon": 35,
                            "Juggernaut": 30,
                            "Cid Kagenou (Shadow)": 45,
                            "Yukime": 8,
                            "Beta": 41,
                            "Mary": 91,
                            "Claire Kagenou": 72,
                            "No. 665": 2,
                            "No. 664": 2,
                            "Rose Oriana (No. 666)": 6,
                            "Elisabeth": 4,
                            "Crimson": 10
                        },
                        "episodes": {
                            "e2": {
                                "word_count": 2422,
                                "char_count": 12857,
                                "line_count": 345,
                                "characters": {
                                    "White Demon": 35,
                                    "Juggernaut": 30,
                                    "Cid Kagenou (Shadow)": 45,
                                    "Yukime": 8,
                                    "Beta": 41,
                                    "Mary": 91,
                                    "Claire Kagenou": 72,
                                    "No. 665": 2,
                                    "No. 664": 2,
                                    "Rose Oriana (No. 666)": 6,
                                    "Elisabeth": 4,
                                    "Crimson": 10
                                }
                            }
                        }
                    },
                    "s2e3": {
                        "line_count": 304,
                        "word_count": 1811,
                        "char_count": 9687,
                        "characters": {
                            "Cid Kagenou (Shadow)": 25,
                            "Claire Kagenou": 45,
                            "Mary": 28,
                            "No. 664": 5,
                            "Beta": 60,
                            "Rose Oriana (No. 666)": 9,
                            "No. 665": 3,
                            "Yukime": 13,
                            "Juggernaut": 14,
                            "Aurora": 69,
                            "Elisabeth": 1,
                            "Goldy Gilded": 3,
                            "Skel Etal": 1,
                            "Po Tato": 1,
                            "Quinton": 1,
                            "Cid Kagenou": 31
                        },
                        "episodes": {
                            "e3": {
                                "word_count": 1811,
                                "char_count": 9687,
                                "line_count": 304,
                                "characters": {
                                    "Cid Kagenou (Shadow)": 25,
                                    "Claire Kagenou": 45,
                                    "Mary": 28,
                                    "No. 664": 5,
                                    "Beta": 60,
                                    "Rose Oriana (No. 666)": 9,
                                    "No. 665": 3,
                                    "Yukime": 13,
                                    "Juggernaut": 14,
                                    "Aurora": 69,
                                    "Elisabeth": 1,
                                    "Goldy Gilded": 3,
                                    "Skel Etal": 1,
                                    "Po Tato": 1,
                                    "Quinton": 1,
                                    "Cid Kagenou": 31
                                }
                            }
                        }
                    },
                    "s2e4": {
                        "line_count": 386,
                        "word_count": 3004,
                        "char_count": 16246,
                        "characters": {
                            "Nu": 12,
                            "Bandit": 13,
                            "Chi": 2,
                            "Omega": 2,
                            "Alpha": 6,
                            "Po Tato": 24,
                            "Skel Etal": 24,
                            "Skel Etal (Skel & Po (Skel))": 3,
                            "Po Tato (Skel & Po (Po))": 3,
                            "Cid Kagenou": 88,
                            "Cid Kagenou (John Smith)": 45,
                            "Yukime": 66,
                            "Shop Staff": 10,
                            "Customer": 2,
                            "Po Tato (Po)": 1,
                            "Gamma": 1,
                            "Beta": 1,
                            "Eta": 2,
                            "Delta": 36,
                            "Gettan": 14,
                            "Garter Kikuchi": 15,
                            "Cid Kagenou (Shadow)": 15,
                            "Zabra": 13
                        },
                        "episodes": {
                            "e4": {
                                "word_count": 3004,
                                "char_count": 16246,
                                "line_count": 386,
                                "characters": {
                                    "Nu": 12,
                                    "Bandit": 13,
                                    "Chi": 2,
                                    "Omega": 2,
                                    "Alpha": 6,
                                    "Po Tato": 24,
                                    "Skel Etal": 24,
                                    "Skel Etal (Skel & Po (Skel))": 3,
                                    "Po Tato (Skel & Po (Po))": 3,
                                    "Cid Kagenou": 88,
                                    "Cid Kagenou (John Smith)": 45,
                                    "Yukime": 66,
                                    "Shop Staff": 10,
                                    "Customer": 2,
                                    "Po Tato (Po)": 1,
                                    "Gamma": 1,
                                    "Beta": 1,
                                    "Eta": 2,
                                    "Delta": 36,
                                    "Gettan": 14,
                                    "Garter Kikuchi": 15,
                                    "Cid Kagenou (Shadow)": 15,
                                    "Zabra": 13
                                }
                            }
                        }
                    },
                    "s2e5": {
                        "line_count": 352,
                        "word_count": 2411,
                        "char_count": 12985,
                        "characters": {
                            "Gamma": 28,
                            "Alpha": 36,
                            "Nu": 3,
                            "Alpha (Alpha & Nu (Alpha))": 1,
                            "Nu (Alpha & Nu (Nu))": 1,
                            "Leaf Three": 1,
                            "Leaf Two": 1,
                            "Leaf One": 37,
                            "Gamma (Luna)": 39,
                            "Cid Kagenou": 13,
                            "Chi": 2,
                            "Omega": 1,
                            "Chi (Chi & Omega (Chi))": 1,
                            "Omega (Chi & Omega (Omega))": 1,
                            "Gettan": 47,
                            "Garter Kikuchi": 14,
                            "Alexia Midgar": 19,
                            "Natsu": 2,
                            "Shop Staff": 2,
                            "Cid Kagenou (John Smith)": 30,
                            "Yukime": 33,
                            "Cid Kagenou (John Smith & Yukime (John Smith))": 1,
                            "Yukime (John Smith & Yukime (Yukime))": 1,
                            "No. 664": 25,
                            "Rose Oriana (No. 666)": 15,
                            "No. 665": 7
                        },
                        "episodes": {
                            "e5": {
                                "word_count": 2411,
                                "char_count": 12985,
                                "line_count": 352,
                                "characters": {
                                    "Gamma": 28,
                                    "Alpha": 36,
                                    "Nu": 3,
                                    "Alpha (Alpha & Nu (Alpha))": 1,
                                    "Nu (Alpha & Nu (Nu))": 1,
                                    "Leaf Three": 1,
                                    "Leaf Two": 1,
                                    "Leaf One": 37,
                                    "Gamma (Luna)": 39,
                                    "Cid Kagenou": 13,
                                    "Chi": 2,
                                    "Omega": 1,
                                    "Chi (Chi & Omega (Chi))": 1,
                                    "Omega (Chi & Omega (Omega))": 1,
                                    "Gettan": 47,
                                    "Garter Kikuchi": 14,
                                    "Alexia Midgar": 19,
                                    "Natsu": 2,
                                    "Shop Staff": 2,
                                    "Cid Kagenou (John Smith)": 30,
                                    "Yukime": 33,
                                    "Cid Kagenou (John Smith & Yukime (John Smith))": 1,
                                    "Yukime (John Smith & Yukime (Yukime))": 1,
                                    "No. 664": 25,
                                    "Rose Oriana (No. 666)": 15,
                                    "No. 665": 7
                                }
                            }
                        }
                    },
                    "s2e6": {
                        "line_count": 379,
                        "word_count": 2704,
                        "char_count": 14447,
                        "characters": {
                            "No. 664": 7,
                            "Alpha": 49,
                            "Gamma": 28,
                            "Rose Oriana (No. 666)": 8,
                            "No. 665": 3,
                            "Cid Kagenou (John Smith)": 70,
                            "Delta": 26,
                            "Cult Member": 7,
                            "Gettan": 25,
                            "Garter Kikuchi": 4,
                            "Knight": 6,
                            "Alexia Midgar": 21,
                            "Iris Midgar": 4,
                            "Beta": 33,
                            "Cid Kagenou (Shadow)": 21,
                            "Natsu": 2,
                            "Bandit": 14,
                            "Yukime": 56
                        },
                        "episodes": {
                            "e6": {
                                "word_count": 2704,
                                "char_count": 14447,
                                "line_count": 379,
                                "characters": {
                                    "No. 664": 7,
                                    "Alpha": 49,
                                    "Gamma": 28,
                                    "Rose Oriana (No. 666)": 8,
                                    "No. 665": 3,
                                    "Cid Kagenou (John Smith)": 70,
                                    "Delta": 26,
                                    "Cult Member": 7,
                                    "Gettan": 25,
                                    "Garter Kikuchi": 4,
                                    "Knight": 6,
                                    "Alexia Midgar": 21,
                                    "Iris Midgar": 4,
                                    "Beta": 33,
                                    "Cid Kagenou (Shadow)": 21,
                                    "Natsu": 2,
                                    "Bandit": 14,
                                    "Yukime": 56
                                }
                            }
                        }
                    },
                    "s2e7": {
                        "line_count": 383,
                        "word_count": 2655,
                        "char_count": 14124,
                        "characters": {
                            "Alpha": 76,
                            "Civilian": 7,
                            "Gettan": 43,
                            "Garter Kikuchi": 15,
                            "Gamma": 39,
                            "Nu": 7,
                            "Beta": 14,
                            "Cid Kagenou": 68,
                            "Delta": 25,
                            "Cid Kagenou (John Smith)": 44,
                            "Natsu": 7,
                            "Kana": 5,
                            "Yukime": 38,
                            "Iris Midgar": 2,
                            "Marco Granger": 3
                        },
                        "episodes": {
                            "e7": {
                                "word_count": 2655,
                                "char_count": 14124,
                                "line_count": 383,
                                "characters": {
                                    "Alpha": 76,
                                    "Civilian": 7,
                                    "Gettan": 43,
                                    "Garter Kikuchi": 15,
                                    "Gamma": 39,
                                    "Nu": 7,
                                    "Beta": 14,
                                    "Cid Kagenou": 68,
                                    "Delta": 25,
                                    "Cid Kagenou (John Smith)": 44,
                                    "Natsu": 7,
                                    "Kana": 5,
                                    "Yukime": 38,
                                    "Iris Midgar": 2,
                                    "Marco Granger": 3
                                }
                            }
                        }
                    },
                    "s2e8": {
                        "line_count": 450,
                        "word_count": 3325,
                        "char_count": 17966,
                        "characters": {
                            "Skel Etal": 64,
                            "Po Tato": 64,
                            "Skel Etal (Skel & Po (Skel))": 6,
                            "Po Tato (Skel & Po (Po))": 6,
                            "Nu": 32,
                            "Alpha": 53,
                            "Zeta": 35,
                            "Eta": 45,
                            "Epsilon": 25,
                            "Chi (Characterised Shadow)": 8,
                            "Nu (Characterised Alpha)": 11,
                            "Chi (Characterised Eta)": 3,
                            "Chi (Characterised Cult Member)": 3,
                            "Omega (Characterised Zeta)": 2,
                            "Chi": 5,
                            "Omega (Characterised Gamma)": 2,
                            "Beta": 46,
                            "Gamma": 17,
                            "Delta": 17,
                            "Alpha (Seven Shadows (Alpha))": 1,
                            "Beta (Seven Shadows (Beta))": 2,
                            "Gamma (Seven Shadows (Gamma))": 2,
                            "Delta (Seven Shadows (Delta))": 1,
                            "Epsilon (Seven Shadows (Epsilon))": 2,
                            "Zeta (Seven Shadows (Zeta))": 2,
                            "Eta (Seven Shadows (Eta))": 1,
                            "Beta (Natsume Kafka)": 5,
                            "Zeta (Zetan)": 3,
                            "Delta (Deltan)": 1,
                            "Zeta (Zeta & Epsilon (Zeta))": 1,
                            "Epsilon (Zeta & Epsilon (Epsilon))": 1,
                            "Zeta (Beta & Zeta (Zeta))": 1,
                            "Beta (Beta & Zeta (Beta))": 1,
                            "Lambda": 27,
                            "Omega": 1
                        },
                        "episodes": {
                            "e8": {
                                "word_count": 3325,
                                "char_count": 17966,
                                "line_count": 450,
                                "characters": {
                                    "Skel Etal": 64,
                                    "Po Tato": 64,
                                    "Skel Etal (Skel & Po (Skel))": 6,
                                    "Po Tato (Skel & Po (Po))": 6,
                                    "Nu": 32,
                                    "Alpha": 53,
                                    "Zeta": 35,
                                    "Eta": 45,
                                    "Epsilon": 25,
                                    "Chi (Characterised Shadow)": 8,
                                    "Nu (Characterised Alpha)": 11,
                                    "Chi (Characterised Eta)": 3,
                                    "Chi (Characterised Cult Member)": 3,
                                    "Omega (Characterised Zeta)": 2,
                                    "Chi": 5,
                                    "Omega (Characterised Gamma)": 2,
                                    "Beta": 46,
                                    "Gamma": 17,
                                    "Delta": 17,
                                    "Alpha (Seven Shadows (Alpha))": 1,
                                    "Beta (Seven Shadows (Beta))": 2,
                                    "Gamma (Seven Shadows (Gamma))": 2,
                                    "Delta (Seven Shadows (Delta))": 1,
                                    "Epsilon (Seven Shadows (Epsilon))": 2,
                                    "Zeta (Seven Shadows (Zeta))": 2,
                                    "Eta (Seven Shadows (Eta))": 1,
                                    "Beta (Natsume Kafka)": 5,
                                    "Zeta (Zetan)": 3,
                                    "Delta (Deltan)": 1,
                                    "Zeta (Zeta & Epsilon (Zeta))": 1,
                                    "Epsilon (Zeta & Epsilon (Epsilon))": 1,
                                    "Zeta (Beta & Zeta (Zeta))": 1,
                                    "Beta (Beta & Zeta (Beta))": 1,
                                    "Lambda": 27,
                                    "Omega": 1
                                }
                            }
                        }
                    },
                    "s2e9": {
                        "line_count": 391,
                        "word_count": 2814,
                        "char_count": 14715,
                        "characters": {
                            "Marie": 42,
                            "Cid Kagenou": 83,
                            "No. 665": 20,
                            "No. 664": 35,
                            "Rose Oriana": 10,
                            "Raphael Oriana": 3,
                            "Rose Oriana (No. 666)": 20,
                            "Victoria (No. 559)": 62,
                            "Cult Member": 1,
                            "Kouadoi": 27,
                            "Reina Oriana": 8,
                            "Nu": 22,
                            "Gamma": 19,
                            "Soldier": 25,
                            "Cid Kagenou (Shadow)": 24
                        },
                        "episodes": {
                            "e9": {
                                "word_count": 2814,
                                "char_count": 14715,
                                "line_count": 391,
                                "characters": {
                                    "Marie": 42,
                                    "Cid Kagenou": 83,
                                    "No. 665": 20,
                                    "No. 664": 35,
                                    "Rose Oriana": 10,
                                    "Raphael Oriana": 3,
                                    "Rose Oriana (No. 666)": 20,
                                    "Victoria (No. 559)": 62,
                                    "Cult Member": 1,
                                    "Kouadoi": 27,
                                    "Reina Oriana": 8,
                                    "Nu": 22,
                                    "Gamma": 19,
                                    "Soldier": 25,
                                    "Cid Kagenou (Shadow)": 24
                                }
                            }
                        }
                    },
                    "s2e10": {
                        "line_count": 435,
                        "word_count": 3265,
                        "char_count": 17237,
                        "characters": {
                            "Chi": 6,
                            "Lambda": 16,
                            "Omega": 7,
                            "Civilian": 6,
                            "Cid Kagenou": 130,
                            "Epsilon (Shiron)": 41,
                            "Perv Asshat": 40,
                            "Aristocrat": 6,
                            "Parton": 5,
                            "Newwealth": 3,
                            "Margaret": 50,
                            "Kevin": 32,
                            "Rose Oriana": 40,
                            "Epsilon": 39,
                            "Victoria (No. 559)": 12,
                            "Mordred": 10,
                            "Reina Oriana": 4
                        },
                        "episodes": {
                            "e10": {
                                "word_count": 3265,
                                "char_count": 17237,
                                "line_count": 435,
                                "characters": {
                                    "Chi": 6,
                                    "Lambda": 16,
                                    "Omega": 7,
                                    "Civilian": 6,
                                    "Cid Kagenou": 130,
                                    "Epsilon (Shiron)": 41,
                                    "Perv Asshat": 40,
                                    "Aristocrat": 6,
                                    "Parton": 5,
                                    "Newwealth": 3,
                                    "Margaret": 50,
                                    "Kevin": 32,
                                    "Rose Oriana": 40,
                                    "Epsilon": 39,
                                    "Victoria (No. 559)": 12,
                                    "Mordred": 10,
                                    "Reina Oriana": 4
                                }
                            }
                        }
                    },
                    "s2e11": {
                        "line_count": 382,
                        "word_count": 2576,
                        "char_count": 13356,
                        "characters": {
                            "Zeta": 8,
                            "Cult Member": 2,
                            "Cid Kagenou": 75,
                            "Margaret": 23,
                            "Epsilon (Shiron)": 6,
                            "Epsilon": 18,
                            "Goldy Gilded": 1,
                            "Goldy (Goldy & Quinton (Goldy))": 1,
                            "Quinton (Goldy & Quinton (Quinton))": 1,
                            "Crowd": 2,
                            "Aristocrat": 17,
                            "Reina Oriana": 13,
                            "Perv Asshat": 60,
                            "Rose Oriana": 73,
                            "Cid Kagenou (Shadow)": 20,
                            "Civilian": 3,
                            "Soldier": 2,
                            "Mordred": 27,
                            "Maid": 3,
                            "Priest": 6,
                            "Raphael Oriana": 33,
                            "Aristocrats": 1
                        },
                        "episodes": {
                            "e11": {
                                "word_count": 2576,
                                "char_count": 13356,
                                "line_count": 382,
                                "characters": {
                                    "Zeta": 8,
                                    "Cult Member": 2,
                                    "Cid Kagenou": 75,
                                    "Margaret": 23,
                                    "Epsilon (Shiron)": 6,
                                    "Epsilon": 18,
                                    "Goldy Gilded": 1,
                                    "Goldy (Goldy & Quinton (Goldy))": 1,
                                    "Quinton (Goldy & Quinton (Quinton))": 1,
                                    "Crowd": 2,
                                    "Aristocrat": 17,
                                    "Reina Oriana": 13,
                                    "Perv Asshat": 60,
                                    "Rose Oriana": 73,
                                    "Cid Kagenou (Shadow)": 20,
                                    "Civilian": 3,
                                    "Soldier": 2,
                                    "Mordred": 27,
                                    "Maid": 3,
                                    "Priest": 6,
                                    "Raphael Oriana": 33,
                                    "Aristocrats": 1
                                }
                            }
                        }
                    },
                    "s2e12": {
                        "line_count": 368,
                        "word_count": 2566,
                        "char_count": 13910,
                        "characters": {
                            "Mordred": 129,
                            "Cid Kagenou (Shadow)": 62,
                            "Nu": 3,
                            "Alpha": 6,
                            "Eta": 2,
                            "Garden Members": 1,
                            "Rose Oriana": 29,
                            "Beta": 31,
                            "Epsilon": 23,
                            "Knight": 7,
                            "Margaret": 8,
                            "No. 664": 1,
                            "No. 665": 1,
                            "Knights": 1,
                            "Victoria (No. 559)": 3,
                            "Alexia Midgar": 1,
                            "Yukime": 1,
                            "Gamma": 1,
                            "Beta (Beta & Epsilon (Beta))": 2,
                            "Epsilon (Beta & Epsilon (Epsilon))": 2,
                            "Akane Nishino": 24,
                            "Kidnapper A": 21,
                            "Kidnapper B": 21
                        },
                        "episodes": {
                            "e12": {
                                "word_count": 2566,
                                "char_count": 13910,
                                "line_count": 368,
                                "characters": {
                                    "Mordred": 129,
                                    "Cid Kagenou (Shadow)": 62,
                                    "Nu": 3,
                                    "Alpha": 6,
                                    "Eta": 2,
                                    "Garden Members": 1,
                                    "Rose Oriana": 29,
                                    "Beta": 31,
                                    "Epsilon": 23,
                                    "Knight": 7,
                                    "Margaret": 8,
                                    "No. 664": 1,
                                    "No. 665": 1,
                                    "Knights": 1,
                                    "Victoria (No. 559)": 3,
                                    "Alexia Midgar": 1,
                                    "Yukime": 1,
                                    "Gamma": 1,
                                    "Beta (Beta & Epsilon (Beta))": 2,
                                    "Epsilon (Beta & Epsilon (Epsilon))": 2,
                                    "Akane Nishino": 24,
                                    "Kidnapper A": 21,
                                    "Kidnapper B": 21
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "chars": {
        "Alpha": {
            "total": 3437,
            "names": {
                "Alpha": 3395,
                "Alpha & Gamma (Alpha)": 1,
                "Alpha & Eta (Alpha)": 1,
                "Seven Shadows (Alpha)": 8,
                "Alpha & Zeta (Alpha)": 3,
                "Alpha & Nu (Alpha)": 1,
                "??? (Alpha)": 5,
                "None (Alpha)": 16,
                "Everyone (Alpha)": 5,
                "Alpha & Beta (Alpha)": 2
            }
        },
        "Beta": {
            "total": 2324,
            "names": {
                "Beta": 2086,
                "Seven Shadows (Beta)": 14,
                "Beta & Epsilon (Beta)": 28,
                "Beta & Gamma (Beta)": 5,
                "Beta & Gamma & Epsilon (Beta)": 1,
                "Beta & Zeta (Beta)": 3,
                "Fictional Zenon": 9,
                "Fictional Shadow": 6,
                "Natsume Kafka": 134,
                "Alexia Midgar & Natsume Kafka (Natsume Kafka)": 1,
                "Everyone (Beta)": 6,
                "Beta & Delta & Zeta (Beta)": 1,
                "None (Beta)": 11,
                "Alpha & Beta (Beta)": 2,
                "??? (Beta)": 3,
                "??? (Natsume)": 1,
                "Natsume": 13
            }
        },
        "Gamma": {
            "total": 2025,
            "names": {
                "Gamma": 1894,
                "Seven Shadows (Gamma)": 14,
                "Alpha & Gamma (Gamma)": 1,
                "Beta & Gamma (Gamma)": 5,
                "Beta & Gamma & Epsilon (Gamma)": 1,
                "Luna": 76,
                "Everyone (Gamma)": 6,
                "None (Gamma)": 21,
                "??? (Gamma)": 2,
                "Gamma& Epsilon & Eta (Gamma)": 1,
                "Gamma & Epsilon (Gamma)": 1,
                "Gamma & Iota (Gamma)": 3
            }
        },
        "Delta": {
            "total": 1469,
            "names": {
                "Delta": 1437,
                "Seven Shadows (Delta)": 13,
                "Delta & Zeta (Delta)": 4,
                "Deltan": 1,
                "??? (Delta)": 7,
                "Everyone (Delta)": 6,
                "Beta & Delta & Zeta (Delta)": 1
            }
        },
        "Epsilon": {
            "total": 1936,
            "names": {
                "Epsilon": 1835,
                "Seven Shadows (Epsilon)": 14,
                "Beta & Epsilon (Epsilon)": 28,
                "Beta & Gamma & Epsilon (Epsilon)": 1,
                "Zeta & Epsilon (Epsilon)": 1,
                "Shiron": 47,
                "Everyone (Epsilon)": 6,
                "Gamma& Epsilon & Eta (Epsilon)": 1,
                "Gamma & Epsilon (Epsilon)": 1,
                "??? (Epsilon)": 2
            }
        },
        "Zeta": {
            "total": 1955,
            "names": {
                "Zeta": 1917,
                "Seven Shadows (Zeta)": 14,
                "Delta & Zeta (Zeta)": 4,
                "Alpha & Zeta (Zeta)": 3,
                "Beta & Zeta (Zeta)": 3,
                "Zetan": 3,
                "Zeta & Epsilon (Zeta)": 1,
                "??? (Zeta)": 3,
                "Beta & Delta & Zeta (Zeta)": 1,
                "Everyone (Zeta)": 5,
                "Zeta & Eta (Zeta)": 1
            }
        },
        "Eta": {
            "total": 1320,
            "names": {
                "Eta": 1296,
                "Seven Shadows (Eta)": 10,
                "Alpha & Eta (Eta)": 1,
                "Everyone (Eta)": 6,
                "Gamma& Epsilon & Eta (Eta)": 1,
                "Zeta & Eta (Eta)": 1,
                "??? (Eta)": 5
            }
        },
        "Little Cuckoo-kun": {
            "total": 2,
            "names": {
                "Little Cuckoo-kun": 2
            }
        },
        "Nu": {
            "total": 462,
            "names": {
                "Nu": 409,
                "Alpha & Nu (Nu)": 1,
                "Characterised Alpha": 11,
                "93": 21,
                "??? (No. 93)": 1,
                "No. 93": 19
            }
        },
        "Chi": {
            "total": 657,
            "names": {
                "Chi": 161,
                "Chi & Omega (Chi)": 6,
                "Characterised Shadow": 8,
                "Characterised Eta": 3,
                "Characterised Cult Member": 3,
                "??? (Karen)": 13,
                "Karen": 180,
                "No. 111": 278,
                "No. 111 & No. 122 (No. 111)": 5
            }
        },
        "Omega": {
            "total": 385,
            "names": {
                "Omega": 166,
                "Chi & Omega (Omega)": 6,
                "Characterised Zeta": 2,
                "Characterised Gamma": 2,
                "Possessed (Omega)": 4,
                "No. 122": 200,
                "No. 111 & No. 122 (No. 122)": 5
            }
        },
        "Juggernaut": {
            "total": 55,
            "names": {
                "Juggernaut": 55
            }
        },
        "Subordinate": {
            "total": 2,
            "names": {
                "Subordinate": 2
            }
        },
        "Cid Kagenou": {
            "total": 5096,
            "names": {
                "Shadow": 729,
                "Minoru Kageno": 74,
                "Stylish Ruffian Slayer": 35,
                "Cid Kagenou": 1939,
                "Mundane Mann": 85,
                "Stylish Bandit Slayer": 13,
                "John Smith": 189,
                "John Smith & Yukime (John Smith)": 1,
                "Cid": 1839,
                "???? (Shadow)": 3,
                "None (Cid Kagenou)": 12,
                "??? (Stylish Bandit Slayer)": 1,
                "??? (Cid Kagenou)": 4,
                "??? (Nuru)": 7,
                "Nuru": 160,
                "??? (Minoru Kageno)": 2,
                "Sunraku & Shadow (Shadow)": 1,
                "Cid & Sunraku (Cid)": 1,
                "3 People (Cid)": 1
            }
        },
        "Akane Nishino": {
            "total": 88,
            "names": {
                "Akane Nishino": 88
            }
        },
        "Akane's Butler": {
            "total": 1,
            "names": {
                "Akane's Butler": 1
            }
        },
        "Classmate": {
            "total": 13,
            "names": {
                "Classmate": 13
            }
        },
        "Teacher": {
            "total": 16,
            "names": {
                "Teacher": 16
            }
        },
        "Student": {
            "total": 92,
            "names": {
                "Student": 92
            }
        },
        "Kidnapper A": {
            "total": 49,
            "names": {
                "Kidnapper A": 49
            }
        },
        "Kidnapper B": {
            "total": 50,
            "names": {
                "Kidnapper B": 50
            }
        },
        "News Reporter": {
            "total": 6,
            "names": {
                "News Reporter": 6
            }
        },
        "Mr. Kagenou": {
            "total": 15,
            "names": {
                "Mr. Kagenou": 15
            }
        },
        "Mrs. Kagenou": {
            "total": 12,
            "names": {
                "Mrs. Kagenou": 12
            }
        },
        "Bandit": {
            "total": 34,
            "names": {
                "Bandit": 34
            }
        },
        "Bandit Boss": {
            "total": 34,
            "names": {
                "Bandit Boss": 34
            }
        },
        "Claire Kagenou": {
            "total": 599,
            "names": {
                "Claire Kagenou": 242,
                "Claire": 352,
                "??? (Claire Kagenou)": 4,
                "Alexia & Claire (Claire)": 1
            }
        },
        "Maid": {
            "total": 6,
            "names": {
                "Maid": 6
            }
        },
        "Grease": {
            "total": 47,
            "names": {
                "Grease": 47
            }
        },
        "Soldier": {
            "total": 37,
            "names": {
                "Soldier": 37
            }
        },
        "Girl": {
            "total": 3,
            "names": {
                "Girl": 3
            }
        },
        "Skel Etal": {
            "total": 384,
            "names": {
                "Skel Etal": 335,
                "Skel & Po (Skel)": 13,
                "Skel": 36
            }
        },
        "Po Tato": {
            "total": 208,
            "names": {
                "Po Tato": 175,
                "Skel & Po (Po)": 13,
                "Po": 20
            }
        },
        "Alexia Midgar": {
            "total": 1128,
            "names": {
                "Alexia Midgar": 609,
                "Alexia Midgar & Natsume Kafka (Alexia Midgar)": 1,
                "Alexia": 513,
                "????? (Alexia Midgar)": 1,
                "Shelly and Alexia (Alexia)": 1,
                "??? (Alexia Midgar)": 2,
                "Alexia & Claire (Alexia)": 1
            }
        },
        "Zenon Griffey": {
            "total": 104,
            "names": {
                "Zenon Griffey": 104
            }
        },
        "Scientist": {
            "total": 46,
            "names": {
                "Scientist": 46
            }
        },
        "Knight": {
            "total": 122,
            "names": {
                "Knight": 122
            }
        },
        "Iris Midgar": {
            "total": 556,
            "names": {
                "Iris Midgar": 398,
                "Iris": 158
            }
        },
        "Rose Oriana": {
            "total": 956,
            "names": {
                "Rose Oriana": 500,
                "No. 666": 176,
                "Rose": 143,
                "No.666": 137
            }
        },
        "Civilian": {
            "total": 55,
            "names": {
                "Civilian": 55
            }
        },
        "Glen": {
            "total": 11,
            "names": {
                "Glen": 11
            }
        },
        "Marco Granger": {
            "total": 9,
            "names": {
                "Marco Granger": 9
            }
        },
        "Sherry Barnett": {
            "total": 291,
            "names": {
                "Sherry Barnett": 191,
                "Sherry": 99,
                "Shelly and Alexia (Sherry)": 1
            }
        },
        "Cult Member": {
            "total": 86,
            "names": {
                "Cult Member": 86
            }
        },
        "Lutheran Barnett": {
            "total": 131,
            "names": {
                "Lutheran Barnett": 113,
                "Sir Gaunt": 18
            }
        },
        "Rex": {
            "total": 50,
            "names": {
                "Rex": 50
            }
        },
        "Referee": {
            "total": 39,
            "names": {
                "Referee": 39
            }
        },
        "Bookie": {
            "total": 13,
            "names": {
                "Bookie": 13
            }
        },
        "Medic": {
            "total": 8,
            "names": {
                "Medic": 8
            }
        },
        "Garden Members": {
            "total": 8,
            "names": {
                "Garden Members": 8
            }
        },
        "Garden Member": {
            "total": 9,
            "names": {
                "Garden Member": 9
            }
        },
        "Church Member": {
            "total": 5,
            "names": {
                "Church Member": 5
            }
        },
        "Paladin": {
            "total": 16,
            "names": {
                "Paladin": 16
            }
        },
        "Jack Nelson": {
            "total": 226,
            "names": {
                "Jack Nelson": 226
            }
        },
        "Spectator": {
            "total": 54,
            "names": {
                "Spectator": 54
            }
        },
        "Announcer": {
            "total": 46,
            "names": {
                "Announcer": 46
            }
        },
        "Toppe Batterius": {
            "total": 2,
            "names": {
                "Toppe Batterius": 2
            }
        },
        "Aurora": {
            "total": 328,
            "names": {
                "Aurora": 311,
                "Massive Mound of Magic": 14,
                "??? (Aurora)": 2,
                "3 People (Aurora)": 1
            }
        },
        "Rude": {
            "total": 26,
            "names": {
                "Rude": 26
            }
        },
        "Mitsugoshi Staff": {
            "total": 1,
            "names": {
                "Mitsugoshi Staff": 1
            }
        },
        "Participant": {
            "total": 13,
            "names": {
                "Participant": 13
            }
        },
        "Boy": {
            "total": 3,
            "names": {
                "Boy": 3
            }
        },
        "Annerose Nichtsehen": {
            "total": 258,
            "names": {
                "Annerose Nichtsehen": 154,
                "Annerose": 100,
                "None (Annerose)": 4
            }
        },
        "Quinton": {
            "total": 85,
            "names": {
                "Quinton": 84,
                "Goldy & Quinton (Quinton)": 1
            }
        },
        "Heckler": {
            "total": 7,
            "names": {
                "Heckler": 7
            }
        },
        "Clerk": {
            "total": 8,
            "names": {
                "Clerk": 8
            }
        },
        "Shop Staff": {
            "total": 22,
            "names": {
                "Shop Staff": 22
            }
        },
        "Goldy Gilded": {
            "total": 143,
            "names": {
                "Goldy Gilded": 143
            }
        },
        "Beatrix": {
            "total": 169,
            "names": {
                "Beatrix": 169
            }
        },
        "Perv Asshat": {
            "total": 266,
            "names": {
                "Perv Asshat": 266
            }
        },
        "Raphael Oriana": {
            "total": 48,
            "names": {
                "Raphael Oriana": 48
            }
        },
        "Civil Servant": {
            "total": 7,
            "names": {
                "Civil Servant": 7
            }
        },
        "Civil Servants": {
            "total": 1,
            "names": {
                "Civil Servants": 1
            }
        },
        "Manager": {
            "total": 2,
            "names": {
                "Manager": 2
            }
        },
        "Duke's Second Son": {
            "total": 18,
            "names": {
                "Duke's Second Son": 18
            }
        },
        "Captain's Daughter": {
            "total": 16,
            "names": {
                "Captain's Daughter": 16
            }
        },
        "Knight Captain": {
            "total": 5,
            "names": {
                "Knight Captain": 5
            }
        },
        "Klaus Midgar": {
            "total": 22,
            "names": {
                "Klaus Midgar": 22
            }
        },
        "Aristocrat": {
            "total": 60,
            "names": {
                "Aristocrat": 60
            }
        },
        "Crowd": {
            "total": 10,
            "names": {
                "Crowd": 10
            }
        },
        "Aristocrats": {
            "total": 2,
            "names": {
                "Aristocrats": 2
            }
        },
        "Mordred": {
            "total": 169,
            "names": {
                "Mordred": 169
            }
        },
        "Sailor": {
            "total": 2,
            "names": {
                "Sailor": 2
            }
        },
        "Lambda": {
            "total": 678,
            "names": {
                "Lambda": 661,
                "Mound of Flesh (Lambda)": 1,
                "Tawny Elf (Lambda)": 15,
                "None (Lambda)": 1
            }
        },
        "No. 665": {
            "total": 37,
            "names": {
                "No. 665": 37
            }
        },
        "No. 664": {
            "total": 76,
            "names": {
                "No. 664": 76
            }
        },
        "White Demon": {
            "total": 45,
            "names": {
                "White Demon": 45
            }
        },
        "Merchant": {
            "total": 27,
            "names": {
                "Merchant": 27
            }
        },
        "Pickpocket": {
            "total": 5,
            "names": {
                "Pickpocket": 5
            }
        },
        "Mary": {
            "total": 127,
            "names": {
                "Mary": 127
            }
        },
        "Marie": {
            "total": 81,
            "names": {
                "Marie": 81
            }
        },
        "Coworker": {
            "total": 10,
            "names": {
                "Coworker": 10
            }
        },
        "Yukime": {
            "total": 230,
            "names": {
                "Yukime": 229,
                "John Smith & Yukime (Yukime)": 1
            }
        },
        "Natsu": {
            "total": 12,
            "names": {
                "Natsu": 12
            }
        },
        "Kana": {
            "total": 6,
            "names": {
                "Kana": 6
            }
        },
        "Claudia": {
            "total": 5,
            "names": {
                "Claudia": 5
            }
        },
        "Vampire": {
            "total": 8,
            "names": {
                "Vampire": 8
            }
        },
        "Crimson": {
            "total": 18,
            "names": {
                "Crimson": 18
            }
        },
        "Elisabeth": {
            "total": 98,
            "names": {
                "Elisabeth": 97,
                "3 People (Elisabeth)": 1
            }
        },
        "Customer": {
            "total": 7,
            "names": {
                "Customer": 6,
                "??? (Customer)": 1
            }
        },
        "Gettan": {
            "total": 129,
            "names": {
                "Gettan": 129
            }
        },
        "Garter Kikuchi": {
            "total": 48,
            "names": {
                "Garter Kikuchi": 48
            }
        },
        "Zabra": {
            "total": 13,
            "names": {
                "Zabra": 13
            }
        },
        "Leaf Three": {
            "total": 1,
            "names": {
                "Leaf Three": 1
            }
        },
        "Leaf Two": {
            "total": 1,
            "names": {
                "Leaf Two": 1
            }
        },
        "Leaf One": {
            "total": 37,
            "names": {
                "Leaf One": 37
            }
        },
        "Victoria": {
            "total": 207,
            "names": {
                "No. 559": 84,
                "??? (Victoria)": 10,
                "Victoria": 113
            }
        },
        "Kouadoi": {
            "total": 27,
            "names": {
                "Kouadoi": 27
            }
        },
        "Reina Oriana": {
            "total": 25,
            "names": {
                "Reina Oriana": 25
            }
        },
        "Parton": {
            "total": 5,
            "names": {
                "Parton": 5
            }
        },
        "Newwealth": {
            "total": 3,
            "names": {
                "Newwealth": 3
            }
        },
        "Margaret": {
            "total": 81,
            "names": {
                "Margaret": 81
            }
        },
        "Kevin": {
            "total": 32,
            "names": {
                "Kevin": 32
            }
        },
        "Goldy": {
            "total": 1,
            "names": {
                "Goldy & Quinton (Goldy)": 1
            }
        },
        "Priest": {
            "total": 6,
            "names": {
                "Priest": 6
            }
        },
        "Knights": {
            "total": 1,
            "names": {
                "Knights": 1
            }
        },
        "None": {
            "total": 593,
            "names": {
                "None": 593
            }
        },
        "Mysterious Captain": {
            "total": 26,
            "names": {
                "Mysterious Captain": 26
            }
        },
        "Mysterious Soldier A": {
            "total": 10,
            "names": {
                "Mysterious Soldier A": 10
            }
        },
        "Mysterious Soldier B": {
            "total": 4,
            "names": {
                "Mysterious Soldier B": 4
            }
        },
        "Mysterious Soldier C": {
            "total": 6,
            "names": {
                "Mysterious Soldier C": 6
            }
        },
        "Mysterious Soldier D": {
            "total": 4,
            "names": {
                "Mysterious Soldier D": 4
            }
        },
        "Mysterious Soldier E": {
            "total": 6,
            "names": {
                "Mysterious Soldier E": 6
            }
        },
        "Mysterious Soldiers": {
            "total": 2,
            "names": {
                "Mysterious Soldiers": 2
            }
        },
        "Cultist A": {
            "total": 8,
            "names": {
                "Cultist A": 8
            }
        },
        "Cultist B": {
            "total": 5,
            "names": {
                "Cultist B": 5
            }
        },
        "Cultist C": {
            "total": 4,
            "names": {
                "Cultist C": 4
            }
        },
        "Cultist D": {
            "total": 1,
            "names": {
                "Cultist D": 1
            }
        },
        "Cultist E": {
            "total": 1,
            "names": {
                "Cultist E": 1
            }
        },
        "Cultist F": {
            "total": 3,
            "names": {
                "Cultist F": 3
            }
        },
        "Mist Dragon": {
            "total": 102,
            "names": {
                "??? (Mist Dragon)": 1,
                "Mist Dragon": 82,
                "None (Mist Dragon)": 19
            }
        },
        "MNA Journalist": {
            "total": 14,
            "names": {
                "MNA Journalist": 14
            }
        },
        "Editor": {
            "total": 23,
            "names": {
                "Editor": 23
            }
        },
        "Cult Member A": {
            "total": 35,
            "names": {
                "Cult Member A": 32,
                "Cult Member A & B (Cult Member A)": 3
            }
        },
        "Cult Member B": {
            "total": 14,
            "names": {
                "Cult Member B": 11,
                "Cult Member A & B (Cult Member B)": 3
            }
        },
        "Cult Member C": {
            "total": 6,
            "names": {
                "Cult Member C": 6
            }
        },
        "Templar": {
            "total": 33,
            "names": {
                "????? (Templar)": 14,
                "Templar": 19
            }
        },
        "Templar B": {
            "total": 8,
            "names": {
                "Templar B": 8
            }
        },
        "Templar A": {
            "total": 17,
            "names": {
                "Templar A": 17
            }
        },
        "Templar C": {
            "total": 7,
            "names": {
                "Templar C": 7
            }
        },
        "Researcher": {
            "total": 8,
            "names": {
                "Researcher": 8
            }
        },
        "Cult Members": {
            "total": 2,
            "names": {
                "Cult Members": 2
            }
        },
        "Cult Member Boss": {
            "total": 14,
            "names": {
                "Cult Member Boss": 14
            }
        },
        "Bandit A": {
            "total": 16,
            "names": {
                "Bandit A": 16
            }
        },
        "Guard": {
            "total": 2,
            "names": {
                "Guard": 2
            }
        },
        "Basilisk": {
            "total": 4,
            "names": {
                "Basilisk": 4
            }
        },
        "Oriana Noble A": {
            "total": 1,
            "names": {
                "Oriana Noble A": 1
            }
        },
        "Oriana Noble B": {
            "total": 1,
            "names": {
                "Oriana Noble B": 1
            }
        },
        "Oriana Noble C": {
            "total": 1,
            "names": {
                "Oriana Noble C": 1
            }
        },
        "Dark Knight Trainee": {
            "total": 1,
            "names": {
                "Dark Knight Trainee": 1
            }
        },
        "Female DK Trainee": {
            "total": 2,
            "names": {
                "Female DK Trainee": 2
            }
        },
        "Mercenary A": {
            "total": 2,
            "names": {
                "??? (Mercenary A)": 1,
                "Mercenary A": 1
            }
        },
        "Mercenary Boss": {
            "total": 20,
            "names": {
                "Mercenary Boss": 20
            }
        },
        "Alpha Wolf": {
            "total": 8,
            "names": {
                "Alpha Wolf": 8
            }
        },
        "Merchant B": {
            "total": 11,
            "names": {
                "Merchant B": 11
            }
        },
        "Merchant A Secretary": {
            "total": 10,
            "names": {
                "Merchant A Secretary": 10
            }
        },
        "Merchant C": {
            "total": 2,
            "names": {
                "Merchant C": 2
            }
        },
        "Merchant A": {
            "total": 31,
            "names": {
                "Merchant A": 31
            }
        },
        "Elven Coachwoman": {
            "total": 5,
            "names": {
                "Elven Coachwoman": 5
            }
        },
        "Elven Guardswoman": {
            "total": 7,
            "names": {
                "Elven Guardswoman": 7
            }
        },
        "Mercenary B": {
            "total": 3,
            "names": {
                "Mercenary B": 3
            }
        },
        "Mercenary Veteran": {
            "total": 21,
            "names": {
                "Mercenary Veteran": 21
            }
        },
        "Mercenary C": {
            "total": 2,
            "names": {
                "Mercenary C": 2
            }
        },
        "Follower A": {
            "total": 3,
            "names": {
                "Follower A": 3
            }
        },
        "Follower B": {
            "total": 1,
            "names": {
                "Follower B": 1
            }
        },
        "Reporter": {
            "total": 29,
            "names": {
                "Reporter": 29
            }
        },
        "Dark Knight": {
            "total": 2,
            "names": {
                "Dark Knight": 2
            }
        },
        "Templar Leader": {
            "total": 11,
            "names": {
                "Templar Leader": 11
            }
        },
        "Old Man": {
            "total": 7,
            "names": {
                "Old Man": 7
            }
        },
        "Female Pilgrim": {
            "total": 1,
            "names": {
                "Female Pilgrim": 1
            }
        },
        "Veteran Paladin": {
            "total": 1,
            "names": {
                "Veteran Paladin": 1
            }
        },
        "Templar Leader A": {
            "total": 17,
            "names": {
                "Templar Leader A": 17
            }
        },
        "Templars": {
            "total": 4,
            "names": {
                "Templars": 4
            }
        },
        "Templar Leader B": {
            "total": 6,
            "names": {
                "Templar Leader B": 6
            }
        },
        "Templar Leader C": {
            "total": 6,
            "names": {
                "Templar Leader C": 6
            }
        },
        "Templar Leader D": {
            "total": 1,
            "names": {
                "Templar Leader D": 1
            }
        },
        "Cult Leader": {
            "total": 26,
            "names": {
                "Cult Leader": 26
            }
        },
        "Bishop Drake": {
            "total": 16,
            "names": {
                "Bishop of Orum": 10,
                "Bishop Drake": 6
            }
        },
        "Malak": {
            "total": 40,
            "names": {
                "Malak": 40
            }
        },
        "Sergey Gorman": {
            "total": 200,
            "names": {
                "??? (Sergey Gorman)": 1,
                "Sergey": 145,
                "Sergei": 22,
                "None (Sergey Gorman)": 32
            }
        },
        "Velgalta Soldier A": {
            "total": 2,
            "names": {
                "Velgalta Soldier A": 2
            }
        },
        "Velgalta Soldier B": {
            "total": 3,
            "names": {
                "Velgalta Soldier B": 3
            }
        },
        "Velgalta Soldier C": {
            "total": 4,
            "names": {
                "Velgalta Soldier C": 4
            }
        },
        "Mundane Mercenary": {
            "total": 9,
            "names": {
                "Mundane Mercenary": 9
            }
        },
        "Curie Oso": {
            "total": 8,
            "names": {
                "Curious Noblewoman": 8
            }
        },
        "Velgalta Soldier": {
            "total": 6,
            "names": {
                "Velgalta Soldier": 6
            }
        },
        "Cultist": {
            "total": 1,
            "names": {
                "Cultist": 1
            }
        },
        "Velgalta Soldier D": {
            "total": 1,
            "names": {
                "Velgalta Soldier D": 1
            }
        },
        "Velgalta Soldier E": {
            "total": 2,
            "names": {
                "Velgalta Soldier E": 2
            }
        },
        "Velgalta Soldiers": {
            "total": 2,
            "names": {
                "Velgalta Soldiers": 2
            }
        },
        "Malak Swarm": {
            "total": 3,
            "names": {
                "Malak Swarm": 3
            }
        },
        "Malaks": {
            "total": 1,
            "names": {
                "Malaks": 1
            }
        },
        "Olivier": {
            "total": 74,
            "names": {
                "??? (Olivier)": 12,
                "Olivier": 55,
                "Alpha Look-alike": 7
            }
        },
        "Fan Passerby": {
            "total": 9,
            "names": {
                "Fan Passerby": 9
            }
        },
        "Iota": {
            "total": 111,
            "names": {
                "None (Iota)": 16,
                "Iota": 92,
                "Gamma & Iota (Iota)": 3
            }
        },
        "Bandit?": {
            "total": 10,
            "names": {
                "Bandit?": 10
            }
        },
        "Bandits": {
            "total": 2,
            "names": {
                "Bandits": 2
            }
        },
        "Bandit B": {
            "total": 2,
            "names": {
                "Bandit B": 2
            }
        },
        "Nanigashi": {
            "total": 7,
            "names": {
                "??? (Nanigashi)": 2,
                "Nanigashi": 5
            }
        },
        "Mysterious Voice": {
            "total": 2,
            "names": {
                "Mysterious Voice": 2
            }
        },
        "Duet": {
            "total": 24,
            "names": {
                "Beta Look-alike": 3,
                "Duet": 21
            }
        },
        "Pente": {
            "total": 22,
            "names": {
                "Epsilon Look-alike": 2,
                "Pente": 20
            }
        },
        "Lili": {
            "total": 17,
            "names": {
                "Lili": 17
            }
        },
        "Freya": {
            "total": 22,
            "names": {
                "??? (Freya)": 1,
                "Freya": 21
            }
        },
        "Mysterious Man A": {
            "total": 4,
            "names": {
                "Mysterious Man A": 4
            }
        },
        "Mysterious Man B": {
            "total": 7,
            "names": {
                "Mysterious Man B": 7
            }
        },
        "Mysterious Man C": {
            "total": 4,
            "names": {
                "Mysterious Man C": 4
            }
        },
        "Mysterious Man D": {
            "total": 3,
            "names": {
                "Mysterious Man D": 3
            }
        },
        "Committee Member": {
            "total": 3,
            "names": {
                "Committee Member": 3
            }
        },
        "Committee Person": {
            "total": 5,
            "names": {
                "Committee Person": 5
            }
        },
        "Girl Cmte. Member A": {
            "total": 2,
            "names": {
                "Girl Cmte. Member A": 2
            }
        },
        "Girl Cmte. Member B": {
            "total": 2,
            "names": {
                "Girl Cmte. Member B": 2
            }
        },
        "Boy Cmte. Member A": {
            "total": 1,
            "names": {
                "Boy Cmte. Member A": 1
            }
        },
        "Boy Cmte. Member B": {
            "total": 1,
            "names": {
                "Boy Cmte. Member B": 1
            }
        },
        "Committee Members": {
            "total": 1,
            "names": {
                "Committee Members": 1
            }
        },
        "Cake Shop Assistant": {
            "total": 6,
            "names": {
                "Cake Shop Assistant": 6
            }
        },
        "Wounded Merchant": {
            "total": 6,
            "names": {
                "Wounded Merchant": 6
            }
        },
        "Monster": {
            "total": 15,
            "names": {
                "Monster": 15
            }
        },
        "Boss Monster": {
            "total": 2,
            "names": {
                "Boss Monster": 2
            }
        },
        "Rabbit T-thrope": {
            "total": 14,
            "names": {
                "Rabbit T-thrope": 14
            }
        },
        "Fox T-thrope": {
            "total": 1,
            "names": {
                "Fox T-thrope": 1
            }
        },
        "Raccoon T-thrope": {
            "total": 1,
            "names": {
                "Raccoon T-thrope": 1
            }
        },
        "Dog T-thrope Priest": {
            "total": 65,
            "names": {
                "Dog T-thrope Priest": 65
            }
        },
        "Participant A": {
            "total": 2,
            "names": {
                "Participant A": 2
            }
        },
        "Participant B": {
            "total": 2,
            "names": {
                "Participant B": 2
            }
        },
        "Participant C": {
            "total": 1,
            "names": {
                "Participant C": 1
            }
        },
        "White Horse T-thrope": {
            "total": 6,
            "names": {
                "White Horse T-thrope": 6
            }
        },
        "Red Horse T-thrope": {
            "total": 8,
            "names": {
                "Red Horse T-thrope": 8
            }
        },
        "Tiger T-thrope": {
            "total": 5,
            "names": {
                "Tiger T-thrope": 5
            }
        },
        "McKen Ro": {
            "total": 2,
            "names": {
                "McKen Ro": 2
            }
        },
        "Bearded T-thrope": {
            "total": 1,
            "names": {
                "Bearded T-thrope": 1
            }
        },
        "Pigtailed T-thrope": {
            "total": 1,
            "names": {
                "Pigtailed T-thrope": 1
            }
        },
        "T-thrope Opponent": {
            "total": 3,
            "names": {
                "T-thrope Opponent": 3
            }
        },
        "T-thrope Spectator": {
            "total": 1,
            "names": {
                "T-thrope Spectator": 1
            }
        },
        "Shishiodoshi": {
            "total": 10,
            "names": {
                "Shishi(?)": 1,
                "Shishiodoshi": 9
            }
        },
        "T-thrope Spectators": {
            "total": 4,
            "names": {
                "T-thrope Spectators": 4
            }
        },
        "Attendees": {
            "total": 2,
            "names": {
                "Attendees": 2
            }
        },
        "Rogue B": {
            "total": 3,
            "names": {
                "Rogue B": 3
            }
        },
        "Rogue A": {
            "total": 3,
            "names": {
                "Rogue A": 3
            }
        },
        "Rogue Leader": {
            "total": 11,
            "names": {
                "Rogue Leader": 11
            }
        },
        "Spectator Woman": {
            "total": 2,
            "names": {
                "Spectator Woman": 2
            }
        },
        "Female Student": {
            "total": 15,
            "names": {
                "Female Student": 15
            }
        },
        "Evil Spirit": {
            "total": 1,
            "names": {
                "Evil Spirit": 1
            }
        },
        "Margrave": {
            "total": 12,
            "names": {
                "Margrave": 12
            }
        },
        "Staff": {
            "total": 18,
            "names": {
                "Staff": 18
            }
        },
        "King": {
            "total": 40,
            "names": {
                "??? (King)": 1,
                "King": 39
            }
        },
        "Dealer": {
            "total": 33,
            "names": {
                "Dealer": 33
            }
        },
        "Joker": {
            "total": 16,
            "names": {
                "??? (Joker)": 1,
                "Joker": 15
            }
        },
        "Boar": {
            "total": 2,
            "names": {
                "Boar": 2
            }
        },
        "Nidhogg": {
            "total": 10,
            "names": {
                "Nidhogg": 10
            }
        },
        "Passerby A": {
            "total": 2,
            "names": {
                "Passerby A": 2
            }
        },
        "Passerby B": {
            "total": 2,
            "names": {
                "Passerby B": 2
            }
        },
        "Passerby C": {
            "total": 1,
            "names": {
                "Passerby C": 1
            }
        },
        "Passerby D": {
            "total": 1,
            "names": {
                "Passerby D": 1
            }
        },
        "Ghoul": {
            "total": 2,
            "names": {
                "Ghoul": 2
            }
        },
        "Branch Manager": {
            "total": 40,
            "names": {
                "Branch Manager": 40
            }
        },
        "Girl A": {
            "total": 9,
            "names": {
                "Girl A": 9
            }
        },
        "Boy A": {
            "total": 19,
            "names": {
                "Boy A": 19
            }
        },
        "Girl B": {
            "total": 3,
            "names": {
                "Girl B": 3
            }
        },
        "Boy B": {
            "total": 13,
            "names": {
                "Boy B": 13
            }
        },
        "Boy C": {
            "total": 2,
            "names": {
                "Boy C": 2
            }
        },
        "Mr. Vendy": {
            "total": 10,
            "names": {
                "Mr. Vendy": 10
            }
        },
        "Skewer Stall Owner": {
            "total": 7,
            "names": {
                "Skewer Stall Owner": 7
            }
        },
        "Quiche Stall Owner": {
            "total": 1,
            "names": {
                "Quiche Stall Owner": 1
            }
        },
        "Soup Stall Owner": {
            "total": 1,
            "names": {
                "Soup Stall Owner": 1
            }
        },
        "Mother": {
            "total": 3,
            "names": {
                "Mother": 3
            }
        },
        "Children": {
            "total": 1,
            "names": {
                "Children": 1
            }
        },
        "Knight A": {
            "total": 2,
            "names": {
                "Knight A": 2
            }
        },
        "Audience": {
            "total": 1,
            "names": {
                "Audience": 1
            }
        },
        "Spectator A": {
            "total": 6,
            "names": {
                "Spectator A": 6
            }
        },
        "Spectator B": {
            "total": 6,
            "names": {
                "Spectator B": 6
            }
        },
        "Boys": {
            "total": 1,
            "names": {
                "Boys": 1
            }
        },
        "Merry Whip": {
            "total": 6,
            "names": {
                "Merry Whip": 6
            }
        },
        "Dog T.thrope Priest": {
            "total": 50,
            "names": {
                "Dog T.thrope Priest": 50
            }
        },
        "Therianthrope A": {
            "total": 6,
            "names": {
                "Therianthrope A": 6
            }
        },
        "Therianthrope B": {
            "total": 5,
            "names": {
                "Therianthrope B": 5
            }
        },
        "Bearded Participant": {
            "total": 2,
            "names": {
                "Bearded Participant": 2
            }
        },
        "Disciple": {
            "total": 4,
            "names": {
                "Disciple": 4
            }
        },
        "Junior": {
            "total": 8,
            "names": {
                "Junior": 8
            }
        },
        "Noblewoman": {
            "total": 12,
            "names": {
                "Noblewoman": 12
            }
        },
        "Maximilian": {
            "total": 27,
            "names": {
                "Maximilian": 27
            }
        },
        "OiKatzo": {
            "total": 58,
            "names": {
                "OiKatzo": 58
            }
        },
        "Arthur Pencilgon": {
            "total": 71,
            "names": {
                "Arthur Pencilgon": 71
            }
        },
        "Sunraku": {
            "total": 73,
            "names": {
                "Sunraku": 70,
                "??? (Sunraku)": 1,
                "Sunraku & Shadow (Sunraku)": 1,
                "Cid & Sunraku (Sunraku)": 1
            }
        },
        "Wethermon": {
            "total": 12,
            "names": {
                "??? (Wethermon)": 3,
                "Wethermon": 9
            }
        },
        "Broadcast": {
            "total": 1,
            "names": {
                "Broadcast": 1
            }
        },
        "Male Student A": {
            "total": 2,
            "names": {
                "Male Student A": 2
            }
        },
        "Female Student A": {
            "total": 2,
            "names": {
                "Female Student A": 2
            }
        },
        "Deceased Man": {
            "total": 2,
            "names": {
                "Deceased Man": 2
            }
        },
        "Deceased Elderly": {
            "total": 5,
            "names": {
                "Deceased Elderly": 5
            }
        },
        "Deceased Child": {
            "total": 5,
            "names": {
                "Deceased Child": 5
            }
        },
        "Deceased Woman": {
            "total": 13,
            "names": {
                "Deceased Woman": 13
            }
        }
    }
}
// let setDoc = db.collection('data').doc('an_s2_e8').set(data['s2']);

//let setDoc = db.collection('data').doc('ssc_p2_c2-12').set(data['p2']['c2-12']);

//let setDoc = db.collection('data').doc('apo_p1_c1-1').set(data['p1']['c1-1']);

// let setDoc = db.collection('data').doc('es_dss').set(data['dss']);

// let setDoc = db.collection('data').doc('ln_v5').set(data['v5']);

// let setDoc = db.collection('data').doc('an_s101').set(data['kj1']);

// let setDoc = db.collection('data').doc('info').set(data);

let setDoc = db.collection('data').doc('info').set(data);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
