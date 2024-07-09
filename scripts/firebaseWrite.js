const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "p1": {
        "c1-7": {
            "e1": [
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "I'll now give my investigation report on our recent encounter with the templars in the Sacred Land of Lindwurm.",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1OBm_j_72gRwOqsfW85NYrVN-l1rW_iS5/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "*yawn* Tempuraaa... I wanna eat with Boss man again!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/14_OHkwGAUk_8kObu8P20PFqOicPOGqeo/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1qnH8syfoOUhNgZ5N4ADjyGJDnsK7Ltr5/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Please go ahead, Epsilon.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/14Lnr5TaIZ_SNB8E5-CArU0uorAmR6do5/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "First, regarding the paladins known as templars, believed to be part of the Church's armed faction...",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1zC1xvhN9uy28xE3BKt21PT3Hs_d7j2ir/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "We couldn't find any identifiable clues on the two corpses killed in combat.",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1vT3eaGTO3cCiOki2UsO29dzPlREe5dZ0/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "However, since they were carrying suicide pills, I asked Beta to trace the contents and Eta to run a composition analysis.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1UjNdUlMOa88hJXBnSMPisWk_71zwSs-d/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "We've determined that it's a ritualistic poison used by royals, nobles, and those in high-ranking positions to bestow death for acts of heresy recognized by the Church.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1uwO8lKUTwb9veKAjwIY1lbGyp3FfivW6/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "According to Eta, it's a potent drug that uses magic as a trigger and is a valuable piece that takes time to refine.",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1Sr5O6B8JePWT5ahM4CgKv55d5kU1PZGo/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "It's dark knowledge that has been passed down by the Church to eradicate disgraceful impurities from this world.",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1SosO-X56lqiMKXSGYnkgi0qFLXidLT-6/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "The completely brainwashed templars use it on themselves without hesitation.",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/10o9HlPDQatxvKBLLqnlTe-RL9hIF3MzT/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "These people smell to high heaven.",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1yHv0VZsbQgtHcGo43MGiKZf3CnrZDItw/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "You mean they're smellier than you, kitty cat?",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1lIFAKxrmyQwgfWLTwhLQ-PTh9duMhfSH/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Can't beat the combined stench of doggie and boar.",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1cYZmbF1p_PWqHh3vaqU-FBmcAPc1HLqH/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "What'd you say!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1E75DN-J3jMew_69fGfJX3vf-iE_m5pI3/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We're in a meeting, you two! If you want to fight, go outside and take on the golem.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1E_wr2RNJTSfh1kfE4Yx2fAyGoG5g0rgi/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Nghh...",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1uBDoqWcgXJvYjHsaqdgNFrPxA3XQJYug/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Heh...",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1ZLeStaqJGbVRYtz6yr85hcvPVkd4UUbK/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...So Epsilon, any clues from the Cult members' corpses?",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1QVYl3F9Uc9bzItrdje14ZUsZXc9SGHD_/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Yes. This is the main topic of this meeting and why I asked Zeta to attend.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1Yxusiaso-PxlzG2dNCQPxiun7L7EgTL5/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "We obtained intel from the clues left on the Cult members' bodies, which has allowed us to infer the location of their hideout.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/17PsJ6W7lZCPoFYz4CFAIGOXhcBLHNaFA/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "The location...is the mountainous region, north of Midgar.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1LTLxHFQ3rM5Yhjc3AD2nGanP--w94kE3/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That region is pretty vast. Were you able to discover any clues to further narrow it down?",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/17XCOLPJCo30ZNaryIk1V8nV90gH_gDNK/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Indeed. Some of the Cult members wore amulets made of rabbits' feet.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1gwnn5oBf4afWkjCvCOexmCNoZuYDdyO3/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Zeta's research has revealed that these rabbits belong to a rare species found only in specific mountainous areas.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1h6mqx1VGVkj1XXGNjifUauj0R7VCXDIk/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Turning the body parts of rare creatures into lucky charms to carry around\u2014sounds like something that would incur the wrath of the Church.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/14Eyu0zUg6MWpCx2dlzdaD5p8CiV88ozT/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Is that why the tempura killed off the Cult members?",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1PveTFMn9xGrvNDSIblfB29OdB_tX9mCE/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Who knows...",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/13VoUPXqunhnFm8m-fZS_AfVtDwVE1cyN/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I can't say for certain. It's difficult to measure what an individual's fanatic faith can do to their psyche.",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1HDCkBEdPWAe4pBUabkAwo8bC5gJaZzMt/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1ADdsK_44j-7GYaXvg3rM-IPN9V5kFWDq/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "I asked Eta to run a comparative analysis of the soil in the mountainous area where the rabbits live, using mud stains on two Cult members' clothing.",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/17znjNwlBY6dPMEp-lzYFRI0V_IY8kjHa/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "The two samples have an extremely high match rate.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/11uNW7I_90KSvkM_4TGF4wbirNxk1ocUx/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "In other words, it's likely the Cult members crafted these amulets using what they had at hand instead of items in circulation.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1CJWR5oCbI-xt-yH5P4v4vYfXGxKSZT-Z/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Exactly. It's worth looking into. They may havea hidden facility there meant to avoid detection.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1SzQHysCXW4nz7Jo7NoXjriQcW6wJvmwn/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "We can retrace their steps even if there's nothing there, so it'll be worth it.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/195-nbwCfs05tSuDm8mquU9a_D6OXuzce/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Either way, we kill all the Cult of Diablos bad guys!",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1SRFKStC44nIHKWoT_L4Qif171rGY0mcZ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You're both right. Now that we have a lead, we must hunt them down at all costs.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1B1Ho4kKPh60q7PSTo2FbrJAM3KiCSyyf/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta, Zeta, and I will immediately set out to conduct a search and destroy.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/14honHZuEpDpkVjbfuJlZs0CYkFZ9ZDUm/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Wha\u2014?! Me with this kitty cat?!",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1C90EWS6sfd1MUV5LMSgcThME-8_ijIET/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "I'm supposed to go with this dumb dog?! You've got to be kidding!",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1p4ULza14eHIMN-sBOVaUjO6jT0WRPFBb/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "What'd you say?!",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1t4SUfL86vSkGiYL5MZ25WNtuldn6HepF/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Tsk...!",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1rNlHdEpzqj8wNzboq3W4pM0Wew6b0k-6/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Are you sure it's okay to put the two of them together, Lady Alpha?",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1tyYeV0l17rREk3aMRbzLM1tb6KTwB6bk/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1sGuEkHhuRUDI_1pCJAnUYWMPm1TZNwdr/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "With their keen therianthropic instincts, they could make a surprisingly effective duo in an emergency.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1FHAsEmdmIFy65a7SsRWEWq3XYkakJzV9/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Just like you and Beta. Don't you think it's worth a try?",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1Dbc456nwCKggmXEkTVAgvQs9Ia-Rm9C3/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Hey, kitty cat, quit ignoring me!",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1NvRiKynxUhG0EdYoFDcxFU7JIuHREmmr/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "I can't even bother making the effort to ignore you.",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1DGKHV37BxzAHRB23-ZPArHEEXm5-kk5a/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1MaE-LEsVTSijwZXAvUmwWauCy6nh3Ije/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Are you sure about this, Lady Alpha?!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1hYGJnpiSmCQxVEeWt5tG2CrQXSf9nzID/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "An expedition to a remote area requires scouting skills and a formidable force that can swiftly eliminate any opponents who show up.",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1m62HzDET7K7vgLyEbf49R1JsvC2zmL9t/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "In that sense, this operation is the perfect battlefield for Delta.",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1gwW9XorDq_XqQ16VqWJMMcz4rTDfb29c/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Well then, I have a scouting trip I need to prepare for.",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1CWm1oqY0DL0_0twkq8_DiOueMJYIlw5K/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Graarf! Where do you think you're going? Get back here! Awooo!!!",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/10t2RjTzaFDiQJobZuuskvfkoZelceKMz/view?usp=drivesdk"
                }
            ],
            "e2": [
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Mmf! This smell...!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1706fOerVMBa19C7o3SSqIp8CzqYjTxR8/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Bingo. Found it\u00e2\u20ac\u201da set of fresh footprints in such a remote area.",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/16-wvSQgIhE7gPM3-Vdk_2vHXwJW1rD6C/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Hey, kitty cat! I found it first! It takes less than a second to sniff out humans in a place like this!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1mSc3xECiEt1DuriO1dDyA62_U3FGqrlc/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Well, there's always room for error.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/17D_SpzptkYvFbv9IOseuH8hdwkO68Pqx/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Besides, I don't obsess over who found what first.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1_JZRlThlLx2uJu04_BkELj2UvTZHYaOP/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "...You're making fun of me again!",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1eNpQ7hDfhmyYEqvEZLhitrLbvFiuLiZi/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "I'm not making fun of you, doggie. I'm just not interested.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1W_dgNounc209hO2bWS58c4k0vjjtuIZW/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Then quit commenting on everything!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1qU_V6oESfUrgMNWMjxSEfqZLStq_QEzk/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "...You know what? I think I know why you butt into everything I do.",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1XJX-tYcFV4le91tC2haanC5jJA61lJqC/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Ha-haaa! You're scared of me, aren't you, kitty cat!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/12MPlYdzbmpeALOv6kjdiBkBf_AuxwqTt/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Huh\u00e2\u20ac\u201d?! How'd you reach that conclusion, stupid doggie?!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1MEADS1UJ7gxS6mfF6WFrMdxagh4Pg0dc/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Well, if you really didn't care, you'd leave me alone.",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/14C3RG41Ou3SG-4ORznJxOeMX6ivwwiKI/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "And yet you keep on provoking me. Which means...you're scared of me!",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1zokAtZJ1C5chxSkIf3XQamivPkxcTOn9/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Says the dog whose bark is worse than her bite! Why the hell would I be scared of you?!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1vyzfzjt2RO8L1poWl_z88tifqe4HD8yK/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Hm-hmmm!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/19T0ZCnY7qNW-HogD7kKJ45dhDEfgGgED/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...I seriously can't with you!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/10xOAt5BUZMgQiMkoIBOQXdQ7JcpVyKoE/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "There you go\u00e2\u20ac\u201drunning away again. What a scaredy-cat!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1RoPhYmPu30YtA2PLlGGg-2YDVtp7VHfV/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "I'm neither running away nor scared of you! I just don't want to be a part of this conversation.",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/10UoK29vnPm7u47dnChD6j6Qe9t_LU1aq/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1Cfxd-HVNwEP3T9qn8xtoL1l-MfjS9ben/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I wonder if I picked the wrong pair...",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1QHX4bavHqO24W-X9rq_Xe0awMuxfeYsG/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I thought once we got to the site, they would put aside their differences and work off each other's strengths, but...",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1sERyyFrUl1IV8HfmyrrN7x6vhabj-siT/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "*sigh* I have only myself to blame.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1Ho_VYOmsp_2DUmw9o_PEzOT7yD964lPL/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I guess I overestimated how much I knew about Zeta, or Delta for that matter.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/172tKoAwAXfRlusNLbIFvPF80BI5B-O6X/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "What's the matter, Lady Alpha? It's not gonna rain today.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1Gcq5_Uelw7bMKUCwoeKR2dcNxOmcdpYl/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "The sun doesn't seem that harsh either\u00e2\u20ac\u201ddid you drink enough fluids during our break earlier?",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1j-CUAhgHZogSoE93CbH1Og3lQN3Z_ena/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Don't worry...it's nothing. Let's follow the trail.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1yw20oLz173S-7IFH1k9qQuH6nH4lfsx-/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Ngh... I'm starving. I wanna go hunting, Lady Alpha.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1tIMkYn9w6BaPo2JEQX2HrIjWRX9q_hui/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "No hunting for food today.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1PWrrptSJIWSje_GQwp4kSBMfQIUE7YKq/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We've brought enough supplies, and overeating will dull your hunting skills.",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1fGWmtRv8LeAofuL6P3zTZwjWiMOeXTuh/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Actually...you've got a point!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1XHzJIH2fMqUj1ZIoCxG2hjgzSefQylua/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I can't muster up much strength when I'm starving...but a little bit of hunger can actually motivate me!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1rekovnrcrR_Kp9XfyaljFoUc8o1cVwEs/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Never thought of it like that, even though it always happens... You're a genius, Lady Alpha!",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/19SMixTltSAqwR8QCmuH3yx-daSozxdYa/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Heh... Thanks.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1joAWw5SnJtqHBNeBaT6pTd4zzYslzGzM/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Zeta should return soon with intel on the area surrounding their hideout. It's important that we know not only what we're hunting, but where we're hunting.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1vwToDRmrizEcd_CKRiy0ZJdzCqmNDmQ3/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "...That's something the kitty cat is good at.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1vxaRf44SNpcddGsPxSquPgtqDm5lOi_W/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "And something you're not.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1GY453W44b3h-ox8t6KFsLttQY6EmgOfv/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I wish you could learn...to respect others who can do the important things you can't do yourself.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1rPPwr0u0IUhgF1MqcJR9tJS9BXI3VHFt/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "...",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1JLXSQqx7v55fPbdzTl2doCNfxNreEfPF/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I can't play spy, write things, open a store, play musical instruments, or invent...but it doesn't bother me.",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1THmJ9oQOBxICJHm42_EzfGbf_oQlLtEt/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I can hunt better than anyone, and that's all that matters!",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1-ITU4KJPlaI57XAcIp4vAyyr-VdtOXt6/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Well, sure...",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/16PuvqlCaPsNhBTeldrVoZozLrB_um9FY/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "There currently aren't many advantages for everyone in the Seven Shadow to possess the same skill sets.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1e3a4I7bEg81ylsdk2mjywOItMUpZdZjt/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "That's why I don't think I need that sword training you mentioned!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/10P1wr_41LxIaff3-dFM-bqm5z3AhxlfZ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You're definitely doing that.",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1m_I9fX6l7cHGCcG1Pjw-_4T47lIcZoLn/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Ugh...",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/100xhnPT6ag6Qkk-1dJV7AU4HlqLJCmPy/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Well, I'll do it if you let me eat something!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1KdEdGl-yptMZYTxUSpAbd8IukfKCYRJ9/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Really?",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1bcqiiMkAVRUDt_jgqEaxn72DeIK3sjSh/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "...Maybe!",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1Kjltw-AlGxiQddWQe63tng9UOnCOaefW/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "*sigh* Here.",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/186bc67erV9aN0I4hrMYScPWTHjsiQXzy/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Whoa! Wait, this is tiny.",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1HQOgUM7U9ciVth3xCTpLm5biKU8jAA6R/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It's a Tuna Tempura Burger from Tuna King. This one's a prototype we haven't released yet.",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1nE0D1-Z0xYpC68SQyYy7sZ_wRsKbTHdX/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I'll give it a try! *munch*",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1XyNmBDs5DUH9JbgS8UwHXJcATdYpDQIi/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Goodness, Delta, how can you taste it if you gobble it down in one bite?!",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1dEkkreO6i-m2eYwq8rPTC2iRBG9kRnvd/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "...",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1A0YMyDbTIIT7Ln1sDw9JgwQx5xRoxiyc/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "This would definitely go better with rice than bread.",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1boSnsJaWjW55jioL6Lqh3Bo0f7rINpaL/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That would make it more of a rice ball than a burger.",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1uXzfcH-UfJ9dR3txigJMjIG6ABYdWKNJ/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Why don't you make it a rice sandwich?",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1zHuSddhAKZQ4yB-nX0OlhBtFd_1zp1nR/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "How are we supposed to sandwich anything between rice\u00e2\u20ac\u201d?",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1ouNohv9mEGioN26N_0eVtDdW6JmhXGBw/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/17dZ89HzIljDVVngC5PcUQQCZbpszBdRA/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Wait, hold on... We could harden the rice by flattening it and grilling the sides.",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/10qbQGtELOKfuhI4Y14rAuqVn0KscsvlQ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "A Tuna Tempura Rice Burger\u00e2\u20ac\u201dit might be worth pitching to Gamma.",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1ic2f1U8q5M699e-yPbyuh1Nzezee1p9-/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Thank you for the unexpected inspiration, Delta. I would never have come up with that idea on my own.",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1dInaflbSG9trf6pB-ApWopejJIMYojWl/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Really?",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/19t3MB60KRWffXc9h0s_ZEwfJXTwYFguf/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Yes, it's down to your uniqueness of not being bound by common sense.",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1bAMKoWzLDUqF4M9P5dEugsbT4gdEy1aA/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You know what? Maybe there's more to all seven of us having different abilities.",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1C0Q8JHFGLZVgzd1Ois68W1N3oecgjCGn/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Not really sure what you're on about, but if my uniqueness means I don't have to sword train\u00e2\u20ac\u201d",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1GWmzzQrSXqtRpMs75FpTGqrJRjTwP1xY/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You're definitely still doing that.",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1l-sxCDCVQhXjQyDL0JKFejzEVpeF-yid/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Awooo...",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1w2D5Kl3HHBaRUDngUyFr1Hb9eKHmW0bx/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Heheh.",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/1F_DHJ_6h45b-0KTyd3FkIhnRusseDcIa/view?usp=drivesdk"
                }
            ],
            "e3": [
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "How was it?",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/19JcPCC8-tFoTiMndSPnRCTXSf72Ir6hw/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "I've found the Cult's hideout. But it's a little more complicated than that.",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1J-hJCuZFhyzACgYvr94MMqMwe0FSZ3Oo/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Quit being all mysterious and spill the beans.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1q76gzcGwfCDpPrr8NMXGG24NgrZrsLkI/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...Is the little doggie impatient?",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/107rIWq-vDyLXCj43f1FiGN21tg_TXjQ2/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrr...woof!",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1jwazx7v-iGVJqWWuQLE4VGC2iTOIsre5/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Easy, Delta. So what are the complications?",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/13DfkKSCSu7KR09ToYaFrFbL31aNDPV9k/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "A powerful monster seized the cave the Cult was using as a hideout.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/16Cdc8O-xvFQnC0DR_63Y1F76DkKyiA0-/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "They lost to a monster? I knew they were weaklings, but that's pathetic, even by their standards!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/179wbxTYwujO1btzgMpjiTg1KJYqg0Gx_/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Or the monster\u00e2\u20ac\u201dwhich happens to be a giant bird\u00e2\u20ac\u201dis way stronger than your average creature.",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1QufyFgpnt5gfHfquU1UYKUlybZcrx5gw/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "So what happened to the Cult bastards? Don't tell me they all got slaughtered.",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/11oIngDqZ6uqnHEPDU1oWt3QpJdY4tlj5/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "No, they've encamped nearby the cave and are trying to regain their hideout.",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1xvnxmT4Vd0yurZA6u48TYWv8bOmYJWB8/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "They could be mistaken for bandits at a glance...but there's no way a bunch of bandits would be hanging around such a remote area.",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/17N_EpFZF_S78-g-UcNsWYSUvfkqSYj4d/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Merchants rarely travel around these parts, so I guess they've applied the minimum disguise.",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1JD7HbSwrmUXhJmNx8_wO_PHKoCzF74Zt/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Which means this must be a valuable base for the Cult and that's likely why they're trying to get it back.",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1OPv8_IzXTEkXnTM4fC173kr3bI2bblVW/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "What're we gonna do, Lady Alpha?!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/14pWwZxV6nZMrwimOMbfbrW9OMg6kiNiV/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Let's see... Zeta, is there only one way into the cave?",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1LgnLcz4mVZNm0pBE5X2GKfRveCBl3wBg/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "No, there are two entrances.",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1-T6rO6e332V9sK_eN5edS-W2bCX3n7ee/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "In that case, could you lie in wait at one of the entrances in case the Cult members breach the monster?",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1bBbVNdx7amjtiTRtcuDvijaM8m_INPZO/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "A pincer attack, huh? I like it. Understood.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/13tiKLiGv1IXbESuQy-iaR53aqgN7PgZ_/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "What about me?!",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1EXQhLDDEkFbtV97TXBqVv6I8MVMsFf-k/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We'll hunt them down in the way that drives them into the cave\u00e2\u20ac\u201dthat includes the monster occupying the hideout.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1AIlDWHFk9SltUP3RfjxJ95EMSqC1Trnr/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I'll act as your backup. Go ahead and run wild to your heart's content.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/13073nld46_15xP8DfsBmvd4hUe_CT8Aw/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Woohoo! Hunting! Let's go!",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1fW1YKJZFmq9jS_L4xtAbsT4wqCpQpEes/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I'm gonna hunt them all down! The Cult bastards, the big bird\u00e2\u20ac\u201deveryone! Awooo!",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1gotZr8NIVps62DwVxjUNwB6igVOHTbwO/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Rein in your howling a little, Delta. This won't work if you alert them to our presence before we even get started.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/14kuJoY8kE5hMXCFUMcMI81iTthG6QOW5/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Mnfff...! I-I'm reining it in...! I lurk in the darkness and hunt down shadows!",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1fN6oUp9gaWQYO4SQAZ29y7FdOp1qWVPO/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...I hope you'll make my work easy for me, doggie.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1-uY-1D4foFxWbeOsIw5-uat0wBCQl7Ql/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Hm-hmmm! You can just sit in the corner twiddling your thumbs, kitty cat!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/15jqjzo8KZyBDonO4QOVQK8na6lR3lbfb/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Look... You know what, never mind...",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1t9VfTV1GGo2nn4B3dVinS1hGueDeB19o/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You two... Could you at least try and get along during active missions?",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1q0oIYpbDE33-5qDAQN9GIaPWp9FV0Tls/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta & Zeta (Delta)",
                    "subtitle": "No way! Not happening.",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1oLQ8couWQS2K4viTg1Sl3WcLfiqyjun6/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Delta & Zeta (Zeta)",
                    "subtitle": "No way! Not happening.",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1oLQ8couWQS2K4viTg1Sl3WcLfiqyjun6/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Why is this the one time you're perfectly in sync?!",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1WwCQOaSWF_H-TE0JCtCBriwyLrKNy8zh/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Ack... Did I really miscalculate when pairing them together? If I can just get the mission to succeed by splitting them up...!",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/18gy9RO-5VQpoONk_j9aqwf798tfKxLWl/view?usp=drivesdk"
                },
                {
                    "name": "Researcher",
                    "name_variant": "Researcher",
                    "subtitle": "...Nghh. Unbelievable... Just when we got our research facility up and running... Now we're stuck out here in the boonies!",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1TlAbCaMfRk61mvwikwC0d5h9h_zIZYIE/view?usp=drivesdk"
                },
                {
                    "name": "Researcher",
                    "name_variant": "Researcher",
                    "subtitle": "Hey! When are the reinforcements coming to take out that bird monster? We've been waiting for three days!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1ZZdEpHE5E46IdqphWFCqiTVzfHZHQAha/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member A",
                    "name_variant": "Cult Member A",
                    "subtitle": "Don't ask us... We're just regular guards...",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/17W39gG4vH8WjUY1XiVnWMublNx78Az46/view?usp=drivesdk"
                },
                {
                    "name": "Researcher",
                    "name_variant": "Researcher",
                    "subtitle": "This facility will play a vital role in the future! What are those idiots at Lindwurm doing?!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1WmZhcRUkDgIhOuNiJKGbOZTyPt-Nk7GN/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member B",
                    "name_variant": "Cult Member B",
                    "subtitle": "I hear there's plenty of chaos and confusion in Lindwurm as well after the hideout there was attacked.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/10R2TqQ-JJJo4B83oGNjZgHxC4kUqdE7G/view?usp=drivesdk"
                },
                {
                    "name": "Researcher",
                    "name_variant": "Researcher",
                    "subtitle": "All the more reason to send reinforcements here!",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1GUOtZv5zlRfGRo9kJIBG68Jb1LUo948U/view?usp=drivesdk"
                },
                {
                    "name": "Researcher",
                    "name_variant": "Researcher",
                    "subtitle": "This is a critical, cutting-edge research facility! It's not just a dumping ground for all compatible candidates!",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1uNuapjinA1-j9zNRntDn736K2M3vJVOP/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member B",
                    "name_variant": "Cult Member B",
                    "subtitle": "...I heard there was fighting amongst the researchers. I wonder if they exiled this guy here from the Sacred Land to get rid of him...",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1uLJKWY5YGP_bWOR4qszxF_WNpKmreY2S/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member A",
                    "name_variant": "Cult Member A",
                    "subtitle": "Shhh! He can hear you!",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1vN2j2Bb85ROYrhUR4HpY8C8tIHswklte/view?usp=drivesdk"
                },
                {
                    "name": "Researcher",
                    "name_variant": "Researcher",
                    "subtitle": "Hey! You! If there's something you want to say\u00e2\u20ac\u201d",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/18g1MPrpsOy49UPSj_urW3ADGSq_H92ju/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member B",
                    "name_variant": "Cult Member B",
                    "subtitle": "B-B-B-Behind you! Behind!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1qgxC9Z-2O6fUJb9SmDa6JdFo0kgIZnMr/view?usp=drivesdk"
                },
                {
                    "name": "Researcher",
                    "name_variant": "Researcher",
                    "subtitle": "My behind? Stooping to body shaming now\u00e2\u20ac\u201d",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1JS3mhqWTdjJcwbUoJWn6nvHlWvgmG0Fd/view?usp=drivesdk"
                },
                {
                    "name": "Researcher",
                    "name_variant": "Researcher",
                    "subtitle": "Agh...hhh...!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/11X0KGN3obIktBSc_XuXMhVm9mTp9i87a/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Hunting gets pretty boring when you leave the weakest for last.",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1m3R4FADFspXVP6zzb6ctDGKWWWp5DePC/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "That's why I hunt the weaklings down first!",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1-R2e-nbBgA7jSnnErGr_c5HW9nBd1UWm/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member A",
                    "name_variant": "Cult Member A",
                    "subtitle": "E-Eeeek...!",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1Yn4mR5StXw6Ersw-x_GQfXCi7WY9LAHd/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Who's the second weakest? You? Or you?",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1eJYKyassJbEBudbbhQAhPezUsa5R6XhQ/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member A",
                    "name_variant": "Cult Member A & B (Cult Member A)",
                    "subtitle": "Him!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1l6x42WpNQcUfFzsZLJEP5MNRRBJxnWpX/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member B",
                    "name_variant": "Cult Member A & B (Cult Member B)",
                    "subtitle": "Him!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1l6x42WpNQcUfFzsZLJEP5MNRRBJxnWpX/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member A",
                    "name_variant": "Cult Member A & B (Cult Member A)",
                    "subtitle": "...Seriously?!",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1p2yNBFRBuUIQxvMLunmQafMe01L1ifpF/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member B",
                    "name_variant": "Cult Member A & B (Cult Member B)",
                    "subtitle": "...Seriously?!",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1p2yNBFRBuUIQxvMLunmQafMe01L1ifpF/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "You both look puny, so I'll hunt you down together!",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1JczA0tOENy7YG1XwcFHYE4Rvxhe8KmhZ/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member A",
                    "name_variant": "Cult Member A & B (Cult Member A)",
                    "subtitle": "Gyaaaahhh!!!",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/13vP6XUOeXPpBPzKv7viFNJ2-2BplqeAE/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member B",
                    "name_variant": "Cult Member A & B (Cult Member B)",
                    "subtitle": "Gyaaaahhh!!!",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/13vP6XUOeXPpBPzKv7viFNJ2-2BplqeAE/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...The night of carnage begins.",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1MTd7qRg0dRBLT4C3iMSW9zeq56FRG1VK/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Ha-ruff... Time to get hunting!",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1csIKw3BZOUcoS6UjU1XqoI2lEmLxrZf9/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Awoooooo!!!",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1tnsDmRxCyOx-lpRl2QTABkYV09CX_-vW/view?usp=drivesdk"
                }
            ],
            "e4": [
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Nothing against Delta's extreme attack power, but her claws won't work as effectively in some scenarios.",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1Io1Glk6pHDnstZv2VvdPUs-nirwQp6Pz/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta. Try using your slime sword.",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/15nPtwnnq2cyipYu1vnfGUhuYZslxKSwE/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Why? I can hunt without it!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/19wBkaryjiefCFyOqs9O5REN7CqYIAnSr/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That's precisely why it's an excellent opportunity to give it a go. Try engaging in a fight with three or more opponents. Think you can handle it?",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1eMmgBaV3UzHPeInI70HiguRiTYkaq1_w/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "...Fine! I'll give it a try!",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1H8ca_zPm93LMXGWjzPHYGsinQsdJO8Qb/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrraaaarrrr!!!",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1jKJM3DxeLU8Uy_aNDtzr1KmIhA31m8qT/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta. You might want to use something a little more compact\u00e2\u20ac\u201d",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1OWLfIgfZs3u2C6b6INvjqO1g3atijTFN/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "If I'm gonna take them out together, the bigger the sword, the better!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1jzTEn6FupQah3QwRI8HQQJIxWcH9wx4B/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Well\u00e2\u20ac\u201d",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1dGQOVGVy8Bfb4oqP28WOE_qyXLtDpxFw/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Swoooooshhh!!!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1O7iG1pEz-hl9hOYrJ625Ldb7Hpz5mCS-/view?usp=drivesdk"
                },
                {
                    "name": "Cult Members",
                    "name_variant": "Cult Members",
                    "subtitle": "Aaaaaghhhh!!!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/12f368Ox7Ex4ofObWJxyyfCBB4rATvAg0/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1Is81_X-GThR1wL4RAe6R_weYkgSpoA9l/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta's current fighting style doesn't resemble Shadow's swordsmanship in any shape or form.",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1dXMqOK6O96aP1V6VrFB__tFSJVt8ONZS/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "But this should give her an opportunity to experience the versatility and usefulness of a sword firsthand.",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1jDAr9qm6sdgtltqCuImjBzRXNmM0yBiX/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Huraaaaaaahhh!!!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1QxnOzhKrR3FeP0kKRFdXuk99ye_J03pS/view?usp=drivesdk"
                },
                {
                    "name": "Cult Members",
                    "name_variant": "Cult Members",
                    "subtitle": "Gyaaaargghhhh!!!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1uzohubjD121q-42ClfA-aFEvvxHRCe6R/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Oooohhh!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/182RMtvrTZDoZuxhFrvHS5ozEV-nQ3-FC/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Lady Alpha! Swords are actually pretty cool! Makes it easier to hunt a bunch of them at the same time!",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1Zmnu0L6MV-i-7QcpEnOpQDU2-Ma7N4X-/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...At least that's the idea. But she's wielding it more as an iron blob than a sword.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1SRi0vvRwHKi3VFSBwYdQUQdu6ATqOYUx/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Well, I guess it'll do for now.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/18p8_Wmvc_CvqtU-v7YHLgAJC8071dozT/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member Boss",
                    "name_variant": "Cult Member Boss",
                    "subtitle": "There's no way we're beating this beast! Fall back!",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1sEH00ch7WqaTHZLzPWCjImPuKvM7gGhG/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member C",
                    "name_variant": "Cult Member C",
                    "subtitle": "Fall back to where, sir?",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1Bnj65CGNM7m4Y-rVSXyW0OtOJ-7l9rNh/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member Boss",
                    "name_variant": "Cult Member Boss",
                    "subtitle": "Back to the cave, you idiot!",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1sCCWHozJIKZIDAxFFNQM--hUJSUEvKbX/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member C",
                    "name_variant": "Cult Member C",
                    "subtitle": "But the bird is in there\u00e2\u20ac\u201d",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1rn-Xb_Fyc7hvuL6Wv2_qHLarNDObezmq/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member Boss",
                    "name_variant": "Cult Member Boss",
                    "subtitle": "I'll take my chances with the bird over this monster any day! Besides, if we're lucky, maybe they'll kill each other.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1Pz8xNIdVnePJ3QhNBqDCCZcoHtRUrBRt/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "If you run, I'll hunt you down!",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1ndZjVXTRowyatH_HllLo9DgXWhLNzwU9/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member C",
                    "name_variant": "Cult Member C",
                    "subtitle": "Agghhh!",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1FUOfGAOi_7DwHRZ8Gvq2L4uiNXz7ixQA/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member Boss",
                    "name_variant": "Cult Member Boss",
                    "subtitle": "Ahh...!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1smogF1gjheYaKCGQHLUOG7zK-w3TsSmS/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You should've spent more time running instead of talking.",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1gOl21RDhyQMQy_fdTgItF7H5qvOudL3H/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grarrr... One left to go!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1AH0JuzibY9wgMgwP_oqX7Fg9xafQPGDx/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta. Wait.",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/14D4bc_FuxRmmXbypRrS_ZOQZYhO5xCug/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Wait...?!",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/15_B5JE4g4vrL5WRmtT5u6A4aS7sDCQHh/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "This one seems to know a thing or two. I'd like to talk to him first.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1kaCcwYcvqDEjuOfQlQurqMoRafeJl5A5/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "There's nothing to talk about! Kill the weakling!",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1LWdEQU4DoMpLk94GZDZLx_4yj3P11Yez/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1ruyN8edpDGpwGVlv5SEW3Fz3KXRVnlht/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Eeek...!",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1lcSdO4oq8a2lKSWkMo4UrzavNndXIKbW/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member Boss",
                    "name_variant": "Cult Member Boss",
                    "subtitle": "Eep...!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/18PznqFXRglS92aQg0WFYeyxVi6TFW8nS/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "What're you getting scared for?!",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1utBAtNU481G8D2mMQfSYCrMgnY73rxcZ/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member Boss",
                    "name_variant": "Cult Member Boss",
                    "subtitle": "W-Well...you're pretty terrifying...!",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1P3wRTWAQMDSaaYSqGmFJrco2gF-QjqrR/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Then you'd best stay on my good side by answering my questions.",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1RC8y2-Cs6EaZVHY8aPmWCQf-qg8cfMp1/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member Boss",
                    "name_variant": "Cult Member Boss",
                    "subtitle": "What...! You mean you'll spare my life?",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1_I7UH63njP-QOBXMo4-fIjzUX0Mo9zYg/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That all depends on you.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1xZ8i2wjyyfWWiXgapeGev2fGeG6wXUxo/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Well, no matter what you say, you'll end up dead anyway!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1UpYJq-CzlKjWAnGASTpm830pC7mStmK6/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member Boss",
                    "name_variant": "Cult Member Boss",
                    "subtitle": "Wha\u00e2\u20ac\u201d?!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1MUicNpEPfe2HV5vvLqDhns9X8mXtzEf_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta?!",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1bIolp8R3H-C_c3BKXdbwwNasDkiI-deg/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I'm not wrong, am I? We always finish them off once we get them to talk!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1cmOAcz32i6u39WbR5ZO26b8A2NQvwghw/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Besides, the intel they give us is usually useless anyway. It's faster to just kill him now...",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1QfYs2z9d73QPWdqs2-1A0JOmAAzaddnK/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "*sigh*",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1dkjdmgpH1DEKkgxwTmaWFTR-nFdf4_D8/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member Boss",
                    "name_variant": "Cult Member Boss",
                    "subtitle": "Wait a minute! Then I'm dead either way!",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1wR6GgrIL_W44F3EYbdGlMAOApFQyBt2t/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member Boss",
                    "name_variant": "Cult Member Boss",
                    "subtitle": "I don't know who you people are, but how could you kill someone in cold blood without a second thought?!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1nygQKhtvh2ZOy2QTG8ayaBeUdSdy4tYr/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "A Cult of Diablos scum like you lecturing me on morality? You're really starting to anger me!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1vFeC91z-2dj5ZYC19kW_tjG3mDE83CZC/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Considering what you bastards are doing to the possessed children, killing you would be too kind a fate.",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1tGqJ03_kty3NM2aH5KAi4uKVQnOWZydS/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member Boss",
                    "name_variant": "Cult Member Boss",
                    "subtitle": "What! How the hell do you know about the Cult and the possessed?! Who are you people...? Wait, were you the ones who attacked the hideout in the Sacred Land?!",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/16bR6a_8Wrongqqh5xm7OzyxHNxsYNrLA/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "You really don't know?! We're the\u00e2\u20ac\u201d",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1or8V9NvLZusAZb7hWxcXb4EmE-LyYkS1/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Zip it!",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1wPH2L9be3DU1a5V-jWzbOKYFjD2mKvgT/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Eek!",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1Iu_5Nksd4ILZzhmRbXTemqtKTqxS3ARE/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta. As one-sided as this is, it's still a \"negotiation.\"",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1SR6Vxa-gw_7-8JLff5vCqN1qaG9heRVs/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We're supposed to gain useful intel, not inadvertently give the other party intel on us.",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1HcdlBx96NXFuN5YUW29uQ27PmV1O7eC4/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "F-Fine...!",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1yGcus9bgj9Ge2QQeVsGzmLOPgKMlPXNN/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Um...let's see...",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1PoNqzM2xk7tezkCXNMcwmjslR5gPOh64/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Gimme intel! Or I kill you now! If you gimme intel, I'll kill you later!",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1KRzvJNnpALLLxIJ7U7ipjeSSU7Wzv3O_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That's not called \"negotiating\"...",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1OglahbYUTRsnxs7eEw79kd2V--Vm11lz/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member Boss",
                    "name_variant": "Cult Member Boss",
                    "subtitle": "If I'm dead whether I talk or not, then\u00e2\u20ac\u201d!",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1allo-WJ48IJO3SMhk6MauKwVGWkjCZOa/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Then? Then what?",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1PQAi9y8EmVTTpvX4nKO-6lHe8DA_gRt7/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Looks like it was lured here by the scent of blood.",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1xaH9RRXn2q4aG6MAZcH18xwsGMDUn440/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member Boss",
                    "name_variant": "Cult Member Boss",
                    "subtitle": "I-I may have a chance\u00e2\u20ac\u201d",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/13qVXNc8Z22Ai5Zkhhdxq8vqMi0LlgfqF/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member Boss",
                    "name_variant": "Cult Member Boss",
                    "subtitle": "Gyahhhh!!!",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1Bpu_1x4GJnjltnGiwWARbnrYxpCmJHGR/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Heyyy! It ate my prey! You sneaky bird! How dare you steal from me!",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1wqnOU7zYZHZJRMM3BVyvuI6qcBhC4KQb/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Fine... You're my next prey!",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/1KblN8PbeFWpt-4OM38PxVO_PZ5EPTP3X/view?usp=drivesdk"
                }
            ],
            "e5": [
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Whoaaa...!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1cNvtDxEq_01HV8yhvgwAAqDtKMTcvg6S/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1ypTSATN6RX4VF8N8YHmh5_gTmy-_zu29/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I-I'm fine! I won't get blown away so easily!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/12gIdolmWbV9VET0zdz90aMglpiYzXTC-/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I'll show it...that I'm the stronger one!",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1EkUdAV-HQStqy1a7fBhQIiURHyIvLjv-/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Hahh?!",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1eeZivzM75DsCG-ZLDrSJLaU9XIMUdGKd/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Tch... I can't get close enough!",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/14sbumwDV9JnUkpkAToo0P14a5eI7beuT/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Ack...!",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1yHWmyXOXygLiahWDTivMvYhESuIgib55/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Looks like its strategy is to use the force of the wind to prevent its opponents from getting near.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/152C6Xb7prSDlEfYNmCsfvZD8PsGL_KGZ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Then it lets countless feathers fly like arrows, weakening its opponent to the point of exhaustion before crushing them.",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1z_MZH2e1n1BsEf_VcRBvVK_gNsIOmqeB/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta! Observe your opponent closely!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/17OvkxZ9MTV6NejRsmVAJRDx5hsT7vuwl/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Observe...closely...!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1jMh4O8SwcVWkSx--GfenRGFOydBM-lhi/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "...It's a big bird!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/16QgvE5p2SCMioZo_mDsH7VEWVz-4ORYC/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Not quite what I was getting at...",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1IYX-nFFVKsPp_u6PaMJa85_4cHc62v4c/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "And...it's got skinny legs!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/191fjHy7G301Bc7iOZBpKVYizCiu2fk92/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Indeed. It might be a good strategy to aim for its limbs.",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1uYUg85B5hmNwJFbZmVV75iyHdmvD1t3i/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "But that only goes for when it's on the ground. You'll need to finish it before it flies off.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1Aq8gOARvnHxLw5Sh1Gp0MXmcmsaWiTnn/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "It can't hit me anymore!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1OzjeyUBmMsESctkneqRmFuIT0HlPaML6/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You've actually got a pretty sharp eye, Delta!",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1-1QNp6vyxqv9BGmMDabhd4Eht7s9Vvas/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Observing prey is a fundamental part of hunting. My guess is she knows what to do out of pure instinct.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1AuTIi0g_LBI2LTXV0zBOKYoRWuhkaIar/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "It doesn't want me to get close...so that's exactly...what I'm gonna do!",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1Bba5D4xbcGlaKzCSsqJRnWiaC13-Nxdh/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Hyaaaah!",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1enWI_niKKboGJNwHUP3RJS0bFwpCjKgF/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Bwaaahh! *cough* Ngh... You stupid bird!",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/13G0Q-UDfFR5-f1sYcaPMx3p9-7rr3j9d/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "She thrust her claws into the ground and is closing the distance to avoid getting blown back. It's a primitive tactic, but it could work\u2014",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1w08VA7_VPp19IfiN4aGVsWi4LIaTurlH/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Hrrrrahh... You can't...blow me...away!",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1rXQP-4DH_9bWygrRodcGEaGSka-CCvhB/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "But keeping one hand stuck to the ground makes her an easy target. What're you going to do, Delta\u2014?",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/14YvBem3hXM5f37k6v2l6BajNKBIYPtXV/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "...Grarrrrr!",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1aIElUhPIPmAAqUNXckEEsC0Z41yclHNL/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Well played. She's thought this one out, or perhaps she's relying on her hunter's instincts.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1mwS49H4S_zCTeDYM8EWXRZorgnWyWBaK/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "She's amongst the best in the Seven Shadows when it comes to her split-second fighting instincts and her firepower when delivering a decisive blow.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1jyab6NLV9eUFaBV5CALQO5qCYfiefCTg/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Shadow once described Delta as...",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1oOev3tw0Jk3WVbZdtRzTcA2P2JSs2Lrz/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...a \"suicide weapon\"!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1aDKRbbxpRRrwS1yEkkB02qT705m-FbK2/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Eat...thiiiis...!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1KwO6udxgmR7JdHl3-xn2uWlGYh7-R06Q/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It can't fly properly now that you've taken out its legs\u2014you've beat it.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1H_aarDhvFrdZFLs21NBZNQIKiZ6P-Wie/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Grrraaaaarrr!!!",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1nZw5F4fXoQOqr_dJngfyvL0Yu69WtVsC/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Wow...looks like you really went all out.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1aHkyGUrqRP8L9IGY59-eqDxbr3_n4DoJ/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Hey, you're late, kitty cat! I already hunted down all the prey!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1_PGPbnb4iNRr80ObUgoegJME0FztJizr/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "I see... Good job.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1AkZTNk42vLU1ExPrD0G5Hy_eh_GxyY5k/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You too, Zeta. I'm guessing you made your way through the cave. What was it like inside?",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/12_1iWlxEpkQqcIuPnsxEzAe9o-Ns1gKp/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Looks like that dead bird ravaged the place\u2014it's a wreck. Well, we may still find something if we spend enough time looking.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1BA6kL-qIhvKgZmIuJRShOQxHQdoQqOwt/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Ahahah! You were useless for this mission, kitty cat!",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1QGRibz0lFvp_BFpBggsV9DJg9YvYIQ8F/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Look...I was responsible for blocking the enemy's escape route.",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1t2BAo2q3sRaS0Koh7nqSf48QSq1Y9ctn/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Still, you didn't hunt down a single prey! Which means I'm stronger than you!",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1hWYGy0Ok2M5T48nWmYxmRxHL-qEwWcsP/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Yup, sure, let's go with that\u2014although the same definitely can't be said about your mental capacity.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1pV6ojzt999l10G4XGJpxWDYwBeQnZYCo/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Hey! You're making fun of me again!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1tkFIMI1EQvwj1AYS16bc1ZKBKwpyqcYB/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "This is why I don't bother with you, doggie. Alpha, I'll leave it to the Garden members to investigate the hideout. See you around.",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/13M4F23MPsDjJUni5VT4MewvYVO1xPaju/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Hold on, Zeta!",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1wzZxa_wjw6BZrvtBdEShf2v92FA4F02Y/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Hey! You get back here, kitty cat!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/12_J_SGXc7vG0YRqVxc66iDBPdOQnfjUH/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/10lXbjTgV_5yYKvnfsdpdF4nb1su6NfAz/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Make sure you're both back by dinner the day after tomorrow!",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1QE9HGrK5JRycOv9v7Ba_t4zBPzFq20pU/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Yeah, they definitely didn't hear that... I've still got a long way to go as a leader.",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1BBJ6T0ke--d0auCwyXNlJB4g-Ppm1spA/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Anyway, that damn kitty cat ended up getting away...But I hunted down all the prey all by myself! I'm the best, right?!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1nVPzOOGx8-IZufFm9DYhX9846BFZg4LA/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Heh... So you bared your fangs against the darkness.",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1RkLHIdiDYSQrDpUD11UrGS88VKuho_qP/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Yup! Not sure what that means, but that's exactly what I did!",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1_6xrPEdcYJwrVBYzYyAP_XJHEh-phyD2/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Delta doesn't really understand how to play the whole shadowbroker scenario.)",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1OL9jMWIsKUC8zsiupOWbgfg1f3yANDPC/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(She seems to enjoy herself, even if she doesn't get what's happening, but honestly, it can get a little awkward on my part.)",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/17jlVQcFDVSBL-52P9xfSSmQiLdwzgwDq/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Reward time, Boss man!",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1ZtLdwvORAeMfvbfJvu5U-YsECybE6u36/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Hmm, let's see...",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1voChOHUZBPADAJ3yO9Eop59hpDaSgy3g/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Let's try deep frying tempura with this magic fryer Eta gave me.",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1hnYiuM-0KoxQXnLqrG-tXHfWWOHns_SW/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "This should turn out even better than last time. You want to be the taste tester again, Delta?",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1rL3KjXaCN7vnGI8TK61O5vygZtCpf8JS/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Yeah, I wanna be the tempura taster!",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1Q-uQPNSKmjsXud07vbwZ-MV1OfPjna3K/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(That said, Alpha and the others are really getting into their pretend Shadow Garden roles these days.)",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1tOrQFDorfs7qDg9IBgSuzPFR0b-jQpTN/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Alright, it's almost done frying.",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1P4rgKESd8dEPDcH3y9rFAj5xWmfeJmp5/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Sooo excited...",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1iLmfmysTVIUMvun-mqZCpRbLHRueMpEi/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "This fryer is incredible\u2014it hardly produces any smoke.",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1wrJMHaAj3OXQ1sJeS1bTXhmvkwTHAr8t/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(In that sense, it's a nice breather having Delta here who doesn't seem to think much about anything.)",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1GM1IMGcCudvfcH8ZNWOWvKY2mugoQNYb/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Time to eeeat!",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1qrBt5vnQ2z9zSUnEp6bZ3vpxREmhMHzh/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Hold on, Delta!",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1Ch90SzrVG6x-0ekRQzNlTQzdjbcwB91v/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "*munch*",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/18TEYvIp1xrft8xZGxl_AL6OOM28yCsOr/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "It's so crispy and delicious!",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1qHy2CIsMH3ghemDtT3dgdER_hGgWAerE/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(I just took it out of the boiling hot oil. How the hell is she able to pick it up and eat it so casually?)",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/1yj6m7qVhb3K1_d2xw9UvLijqfa5SuYaz/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Geez, you therianthropes are on another level.",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/1CD4c-ObHA4QZmAHu5zUS2yhZ_Z552CG7/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Yup! We're super strong! Especially me\u2014I've got boundless energy!",
                    "line": 71,
                    "url": "https://drive.google.com/file/d/1LLadeoN-_XJ4bGcQ2MhbnoTa2CQTjg2E/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "...",
                    "line": 72,
                    "url": "https://drive.google.com/file/d/13Kk__ApQPM753MfDgO7kn7UkoRVwAUWs/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "...Here, open wide.",
                    "line": 73,
                    "url": "https://drive.google.com/file/d/1BC59H-XxRJZn7viarfW8T88UJbqtbbtP/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "*munch*",
                    "line": 74,
                    "url": "https://drive.google.com/file/d/1dlcwBUIozyj4c00H9Jl9pJH0y1yqArKs/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "C'mon, don't eat the chopsticks! And quit chewing on my wrist!",
                    "line": 75,
                    "url": "https://drive.google.com/file/d/1nb7MpNyDyGrpOdFZ7MwZPMbJ-cTWT96p/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Heheh.... I'll be careful not to eat you, Boss man!",
                    "line": 76,
                    "url": "https://drive.google.com/file/d/1BsYLxINlRH2KwurxpBH2Pp2FK972Q217/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(...Delta reminds me of the dog I had in my previous life.)",
                    "line": 77,
                    "url": "https://drive.google.com/file/d/1RcITzmU5Vr-Pv--uMPqu_NIm4VH4eaPo/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "...Good puppy.",
                    "line": 78,
                    "url": "https://drive.google.com/file/d/1zBlOtkkfEUarFuK47FeYmLCjedDlnYY-/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Boss man?",
                    "line": 79,
                    "url": "https://drive.google.com/file/d/1oA_yy9eT9hgQEuF2ALkx5kMfb8I2HupO/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Want some more tempura, Delta?",
                    "line": 80,
                    "url": "https://drive.google.com/file/d/125HGys6RpAQLAmA9T8xKgU-0IML89_h5/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Sure, Boss man! Let's eat until our bellies are stuffed!",
                    "line": 81,
                    "url": "https://drive.google.com/file/d/16UizIT51e3hSjQEvR6kzzWKhT3ORBeN-/view?usp=drivesdk"
                }
            ]
        }
    }
}

let setDoc = db.collection('data').doc('ssc_p1_c1-7').set(data['p1']['c1-7']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
