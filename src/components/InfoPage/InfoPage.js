// InfoPage.js
import React from 'react';
import './InfoPage.css'; // Import the CSS file
import Collapsible from 'react-collapsible';
import * as covers from '../../images/covers';
import { ESMAP } from '../../esMap';

const formatNumber = (num) => num.toLocaleString();

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const lnCoverImages = {
    "Volume 1": covers.LNV1Cover,
    "Volume 2": covers.LNV2Cover,
    "Volume 3": covers.LNV3Cover,
    "Volume 4": covers.LNV4Cover,
    "Volume 5 [Fan-Translation]": covers.LNV5Cover,
    "Volume 6 [Fan-Translation]": covers.LNV6Cover
}

const apoCoverImages = {
    "Apocrypha": covers.APOCover,
    "Requiem for Scattered Shadows": covers.APO1Cover,
    "1 | Millenium Past": covers.APO11Cover,
    "1 | Millenium Past-e1": covers.APO111Cover,
    "1 | Millenium Past-e2": covers.APO112Cover,
    "1 | Millenium Past-e3-1": covers.APO1131Cover,
    "1 | Millenium Past-e3-2": covers.APO1132Cover,
    "1 | Millenium Past-e3-3": covers.APO1133Cover,
    "1 | Millenium Past-e4-1": covers.APO1141Cover,
    "1 | Millenium Past-e4-2": covers.APO1142Cover,
    "1 | Millenium Past-e5-1": covers.APO1151Cover,
    "1 | Millenium Past-e5-2": covers.APO1152Cover,
    "1 | Millenium Past-e5-3": covers.APO1153Cover,
    "1 | Millenium Past-e6": covers.APO116Cover,
    "1 | Millenium Past-e7": covers.APO117Cover,
    "1 | Millenium Past-e8-1": covers.APO1181Cover,
    "1 | Millenium Past-e8-2": covers.APO1182Cover,
}

const esCoverImages = {
    "es-hr": covers.ESHRCover,
    "es-rog": covers.ESROGCover
}


const ln_info = {
    "total": {
        "line_count": 26002,
        "word_count": 337323,
        "char_count": 1887497
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
            "line_count": 662,
            "word_count": 6750,
            "char_count": 37081,
            "title": "Prologue | The Darkness that Lurks in the Academy, Cases of Missing Students!"
        },
        "c2": {
            "line_count": 875,
            "word_count": 9448,
            "char_count": 51316,
            "title": "Chapter 1 | Nee-san's Return and the Progress of her Illness...!"
        },
        "c3": {
            "line_count": 883,
            "word_count": 7941,
            "char_count": 44769,
            "title": "Chapter 2 | On a Shocking Morning, the School Murder Case!"
        },
        "c4": {
            "line_count": 747,
            "word_count": 7063,
            "char_count": 39372,
            "title": "Chapter 3 | Case Closed, Let's Talk About Old Tales!"
        },
        "c5": {
            "line_count": 285,
            "word_count": 3525,
            "char_count": 19613,
            "title": "Chapter 4 | Today the World is at Peace Again!"
        },
        "c6": {
            "line_count": 812,
            "word_count": 8481,
            "char_count": 48056,
            "title": "Chapter 5 | An Unexpected Terrorists Attack in the Academy Again!!!"
        },
        "c7": {
            "line_count": 790,
            "word_count": 7183,
            "char_count": 40880,
            "title": "Epilogue | If I Could Get it, I Wouldn't Hesitate to Destroy the World."
        },
        "c8": {
            "line_count": 23,
            "word_count": 492,
            "char_count": 2813,
            "title": "Appendix | Eta's Research Journal"
        },
        "total": {
            "line_count": 5077,
            "word_count": 50883,
            "char_count": 283900,
            "title": "Volume 5 [Fan-Translation]"
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
}

const wn_info = {
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
}

const apo_info = {
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
        "Diablos (Massive Mound of Magic)": 14,
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
        "Requiem for Scattered Shadows": {
            "line_count": 793,
            "word_count": 6645,
            "char_count": 38195,
            "chapters": {
                "1 | Millenium Past": {
                    "line_count": 793,
                    "word_count": 6645,
                    "char_count": 38195,
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
                            "line_count": 59,
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
                                "Diablos (Massive Mound of Magic)": 8,
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
                                "Diablos (Massive Mound of Magic)": 6,
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
                            "line_count": 50,
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
                            "line_count": 89,
                            "word_count": 946,
                            "char_count": 5416,
                            "characters": {
                                "Alexia Midgar (Alexia)": 12,
                                "Alpha": 35,
                                "Olivier": 6,
                                "Beta": 9,
                                "Epsilon": 9,
                                "Beta (Beta & Epsilon)": 1,
                                "Epsilon (Beta & Epsilon)": 1,
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
                            "line_count": 39,
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
                            "line_count": 38,
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
                    },
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
                        "Beta (Everyone)": 1,
                        "Gamma (Everyone)": 1,
                        "Delta (Everyone)": 1,
                        "Epsilon (Everyone)": 1,
                        "Zeta (Everyone)": 1,
                        "Eta (Everyone)": 1,
                        "Duet (Beta Look-alike (Duet))": 3,
                        "Pente (Epsilon Look-alike (Pente))": 2,
                        "Diablos (Massive Mound of Magic)": 14,
                        "Olivier (Alpha Look-alike (Olivier))": 7,
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
                        "Beta (Beta & Epsilon)": 1,
                        "Epsilon (Beta & Epsilon)": 1,
                        "Pente": 20,
                        "Mysterious Man A": 1,
                        "Mysterious Man B": 1,
                        "Mysterious Man C": 1,
                        "Mysterious Man D": 1
                    }
                }
            },
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
                "Beta (Everyone)": 1,
                "Gamma (Everyone)": 1,
                "Delta (Everyone)": 1,
                "Epsilon (Everyone)": 1,
                "Zeta (Everyone)": 1,
                "Eta (Everyone)": 1,
                "Duet (Beta Look-alike (Duet))": 3,
                "Pente (Epsilon Look-alike (Pente))": 2,
                "Diablos (Massive Mound of Magic)": 14,
                "Olivier (Alpha Look-alike (Olivier))": 7,
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
                "Beta (Beta & Epsilon)": 1,
                "Epsilon (Beta & Epsilon)": 1,
                "Pente": 20,
                "Mysterious Man A": 1,
                "Mysterious Man B": 1,
                "Mysterious Man C": 1,
                "Mysterious Man D": 1
            }
        }
    }
}

const es_info = {
    "stories": 2,
    "line_count": 748,
    "word_count": 8321,
    "char_count": 45234,
    "characters": {
        "Alexia Midgar (Alexia)": 176,
        "Committee Member": 3,
        "Sherry Barnett (Sherry)": 99,
        "Committee Person": 1,
        "Po Tato (Po)": 8,
        "Skel Etal (Skel)": 6,
        "Cid Kagenou (Cid)": 60,
        "None": 53,
        "Alexia Midgar (????? (Alexia Midgar))": 1,
        "Rose Oriana (Rose)": 45,
        "Girl Cmte. Member A": 2,
        "Girl Cmte. Member B": 2,
        "Boy Cmte. Member A": 1,
        "Boy Cmte. Member B": 1,
        "Committee Members": 1,
        "Cake Shop Assistant": 6,
        "Wounded Merchant": 6,
        "Monster": 5,
        "Boss Monster": 2,
        "Sherry Barnett (Shelly and Alexia)": 1,
        "Alexia Midgar (Shelly and Alexia)": 1,
        "Gamma": 2,
        "Rose Oriana (No.666)": 137,
        "Lambda": 83,
        "Alpha": 15,
        "Cid Kagenou (??? (Stylish Bandit Slayer))": 1,
        "Cid Kagenou (Shadow)": 1,
        "Nu": 27,
        "??? (Cid Kagenou)": 3
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
                "Sherry Barnett (Shelly and Alexia)": 1,
                "Alexia Midgar (Shelly and Alexia)": 1,
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
                        "Sherry Barnett (Shelly and Alexia)": 1,
                        "Alexia Midgar (Shelly and Alexia)": 1,
                        "Gamma": 2
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
                "??? (Cid Kagenou)": 3
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
                        "??? (Cid Kagenou)": 3
                    }
                }
            }
        }
    }
}


const generateCollapsiblesLN = (all_counts) => {
    const volumes = Object.keys(all_counts).filter(key => key !== 'total'); // Exclude the 'total' key
    return (
        <Collapsible trigger="Light Novel">
            <p>Volumes: {formatNumber(volumes.length)}</p>
            <p>Approximate Paragraphs: {formatNumber(all_counts.total.line_count)}</p>
            <p>Approximate Word Count: {formatNumber(all_counts.total.word_count)}</p>
            <p>Approximate Character Count: {formatNumber(all_counts.total.char_count)}</p>
            {volumes.map(volume => (
                <Collapsible key={volume} trigger={
                    <>
                        <div className="volume-trigger">
                            {lnCoverImages[all_counts[volume].total.title] && <img className="cover-image" src={lnCoverImages[all_counts[volume].total.title]} alt={all_counts[volume].total.title} />}
                            {`${all_counts[volume].total.title}`}
                        </div>
                    </>
                }>
                    <p>Chapters: {formatNumber(Object.keys(all_counts[volume]).length - 1)}</p> {/* Exclude the 'total' key */}
                    <p>Approximate Paragraphs: {formatNumber(all_counts[volume].total.line_count)}</p>
                    <p>Approximate Word Count: {formatNumber(all_counts[volume].total.word_count)}</p>
                    <p>Approximate Character Count: {formatNumber(all_counts[volume].total.char_count)}</p>
                    {Object.keys(all_counts[volume]).filter(key => key !== 'total').map(chapter => (
                        <Collapsible key={chapter} trigger={`${all_counts[volume][chapter].title}`}>
                            <p>Approximate Paragraphs: {formatNumber(all_counts[volume][chapter].line_count)}</p>
                            <p>Approximate Word Count: {formatNumber(all_counts[volume][chapter].word_count)}</p>
                            <p>Approximate Character Count: {formatNumber(all_counts[volume][chapter].char_count)}</p>
                        </Collapsible>
                    ))}
                </Collapsible>
            ))}
        </Collapsible>
    );
};

const generateCollapsiblesWN = (all_counts) => {
    const volumes = Object.keys(all_counts).filter(key => key !== 'total'); // Exclude the 'total' key
    return (
        <Collapsible trigger="Web Novel">
            <p>Volumes: {formatNumber(volumes.length)}</p>
            <p>Approximate Paragraphs: {formatNumber(all_counts.total.line_count)}</p>
            <p>Approximate Word Count: {formatNumber(all_counts.total.word_count)}</p>
            <p>Approximate Character Count: {formatNumber(all_counts.total.char_count)}</p>
            {volumes.map(volume => (
                <Collapsible key={volume} trigger={`${all_counts[volume].total.title}`}>
                    <p>Chapters: {formatNumber(Object.keys(all_counts[volume]).length - 1)}</p> {/* Exclude the 'total' key */}
                    <p>Approximate Paragraphs: {formatNumber(all_counts[volume].total.line_count)}</p>
                    <p>Approximate Word Count: {formatNumber(all_counts[volume].total.word_count)}</p>
                    <p>Approximate Character Count: {formatNumber(all_counts[volume].total.char_count)}</p>
                    {Object.keys(all_counts[volume]).filter(key => key !== 'total').map(chapter => (
                        <Collapsible key={chapter} trigger={`${all_counts[volume][chapter].title}`}>
                            <p>Approximate Paragraphs: {formatNumber(all_counts[volume][chapter].line_count)}</p>
                            <p>Approximate Word Count: {formatNumber(all_counts[volume][chapter].word_count)}</p>
                            <p>Approximate Character Count: {formatNumber(all_counts[volume][chapter].char_count)}</p>
                        </Collapsible>
                    ))}
                    <br />
                </Collapsible>
            ))}
            <br />
        </Collapsible>
    );
};

const generateCollapsiblesAPO = (all_counts) => {
    const parts = Object.keys(all_counts.parts); // Get all part keys
    return (
        <Collapsible trigger="Apocrypha">
            <p>Paragraphs: {formatNumber(all_counts.line_count)}</p>
            <p>Approximate Word Count: {formatNumber(all_counts.word_count)}</p>
            <p>Character Count: {formatNumber(all_counts.char_count)}</p>
            <Collapsible trigger="Characters">
                {Object.keys(all_counts.characters).sort().map(character => (
                    <div key={character}>
                        <span>{character}: </span>
                        <span>{all_counts.characters[character]}</span>
                    </div>
                ))}
            </Collapsible>
            {parts.map(part => (
                <Collapsible key={part} trigger={`${part}`}>
                    <p>Chapters: {Object.keys(all_counts.parts[part].chapters).length}</p>
                    <p>Paragraphs:{formatNumber(all_counts.parts[part].line_count)}</p>
                    <p>Approximate Word Count: {formatNumber(all_counts.parts[part].word_count)}</p>
                    <p>Character Count: {formatNumber(all_counts.parts[part].char_count)}</p>
                    <Collapsible trigger="Characters">
                        {Object.keys(all_counts.parts[part].characters).sort().map(character => (
                            <div key={character}>
                                <span>{character}: </span>
                                <span>{all_counts.parts[part].characters[character]}</span>
                            </div>
                        ))}
                    </Collapsible>
                    {Object.keys(all_counts.parts[part].chapters).sort().map(chapter => (
                        <Collapsible key={chapter} trigger={
                            <>
                                <div className="volume-trigger">
                                    {apoCoverImages[`${chapter}`] && <img className="cover-image-apo-chapter-small" src={apoCoverImages[`${chapter}`]} alt={`${part}-${chapter}`} />}
                                    {`${chapter}`}
                                </div>
                            </>
                        }>
                            <p>Episodes: {Object.keys(all_counts.parts[part].chapters[chapter].episodes).length}</p>
                            <p>Paragraphs: {formatNumber(all_counts.parts[part].chapters[chapter].line_count)}</p>
                            <p>Approximate Word Count: {formatNumber(all_counts.parts[part].chapters[chapter].word_count)}</p>
                            <p>Character Count: {formatNumber(all_counts.parts[part].chapters[chapter].char_count)}</p>
                            <Collapsible trigger="Characters">
                                {Object.keys(all_counts.parts[part].chapters[chapter].characters).map(character => (
                                    <div key={character}>
                                        <span>{character}: </span>
                                        <span>{all_counts.parts[part].chapters[chapter].characters[character]}</span>
                                    </div>
                                ))}
                            </Collapsible>
                            {Object.keys(all_counts.parts[part].chapters[chapter].episodes).sort().map(episode => (
                                <Collapsible key={episode} trigger={
                                    <>
                                        <div className="volume-trigger">
                                            {esCoverImages[`${chapter}-${episode}`] && <img className="cover-image-apo-small" src={apoCoverImages[`${chapter}-${episode}`]} alt={`${chapter}-${episode}`} />}
                                            {`Episode ${episode.replace("e", "")}`}
                                        </div>
                                    </>
                                }>
                                    <p>Paragraphs: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].line_count)}</p>
                                    <p>Approximate Word Count: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].word_count)}</p>
                                    <p>Character Count: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].char_count)}</p>
                                    <Collapsible trigger="Characters">
                                        {Object.keys(all_counts.parts[part].chapters[chapter].episodes[episode].characters).sort().map(character => (
                                            <div key={character}>
                                                <span>{character}: </span>
                                                <span>{all_counts.parts[part].chapters[chapter].episodes[episode].characters[character]}</span>
                                            </div>
                                        ))}
                                    </Collapsible>
                                </Collapsible>
                            ))}
                        </Collapsible>
                    ))}
                </Collapsible>
            ))}
        </Collapsible>
    );
};

const generateCollapsiblesES = (all_counts) => {
    const parts = Object.keys(all_counts.parts); // Get all part keys
    return (
        <Collapsible trigger="Event Stories">
            <p>Stories: {formatNumber(all_counts.stories)}</p>
            <p>Paragraphs: {formatNumber(all_counts.line_count)}</p>
            <p>Approximate Word Count: {formatNumber(all_counts.word_count)}</p>
            <p>Character Count: {formatNumber(all_counts.char_count)}</p>
            <Collapsible trigger="Characters">
                {Object.keys(all_counts.characters).sort().map(character => (
                    <div key={character}>
                        <span>{character}: </span>
                        <span>{all_counts.characters[character]}</span>
                    </div>
                ))}
            </Collapsible>
            {parts.map(part => (
                <Collapsible key={part} trigger={
                    <>
                        <div className="volume-trigger">
                            {esCoverImages[`es-${part}`] && <img className="cover-image-es" src={esCoverImages[`es-${part}`]} alt={`es-${part}`} />}
                            {ESMAP[part]}
                        </div>
                    </>
                }>
                    <p>Episodes: {Object.keys(all_counts.parts[part].episodes).length}</p>
                    <p>Paragraphs: {formatNumber(all_counts.parts[part].line_count)}</p>
                    <p>Approximate Word Count: {formatNumber(all_counts.parts[part].word_count)}</p>
                    <p>Character Count: {formatNumber(all_counts.parts[part].char_count)}</p>
                    <Collapsible trigger="Characters">
                        {Object.keys(all_counts.parts[part].characters).sort().map(character => (
                            <div key={character}>
                                <span>{character}: </span>
                                <span>{all_counts.parts[part].characters[character]}</span>
                            </div>
                        ))}
                    </Collapsible>
                    {Object.keys(all_counts.parts[part].episodes).sort().map(episode => (
                        <Collapsible key={episode} trigger={
                            <>
                                <div className="volume-trigger">
                                    {`Episode ${episode.replace("e", "")}`}
                                </div>
                            </>
                        }>
                            <p>Paragraphs: {formatNumber(all_counts.parts[part].episodes[episode].line_count)}</p>
                            <p>Approximate Word Count: {formatNumber(all_counts.parts[part].episodes[episode].word_count)}</p>
                            <p>Character Count: {formatNumber(all_counts.parts[part].episodes[episode].char_count)}</p>
                            <Collapsible trigger="Characters">
                                {Object.keys(all_counts.parts[part].episodes[episode].characters).sort().map(character => (
                                    <div key={character}>
                                        <span>{character}: </span>
                                        <span>{all_counts.parts[part].episodes[episode].characters[character]}</span>
                                    </div>
                                ))}
                            </Collapsible>
                        </Collapsible>
                    ))}
                </Collapsible>
            ))}
        </Collapsible>
    );
};



function InfoPage() {
    return (
        <div className="info-page">
            <h1 className="filters-header">INFORMATION</h1>
            <div className="info-content">
                <h1 className="info-header">MEDIUMS</h1>
                {generateCollapsiblesLN(ln_info)}
                <br />
                {generateCollapsiblesWN(wn_info)}
                <br />
                <Collapsible trigger="Master of Garden">
                    {generateCollapsiblesES(es_info)}
                    <br />
                    {generateCollapsiblesAPO(apo_info)}
                </Collapsible>
                {/* ... Other mediums ... */}
                <h1 className="info-header">CHARACTERS</h1>
                {/* ... Character information ... */}
                <button title={"To Top"} className="scroll-top-button" onClick={scrollToTop}>UP</button>
            </div>

        </div>
    );
}

export default InfoPage;
