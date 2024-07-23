const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "p2": {
        "c2-5": {
            "e1": [
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1qqkEqTnUESptGrarz6flhqt-t7jRmVu1/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/12FuCyf_skpWcpfG0lGg99iNor3iQt91d/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Hehehe... I can't wait...",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1hGnUFjS5PrDmyNbD5kQ97ogp3V7gOd_T/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Enter.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1UGIpokFAzMWuJbO6cI1vsp0t3BcpEiQ7/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Pardon me.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1qp-3f80ZXDZ8msdOkQ-Sglskdjcv3SKq/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Lambda...?",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1dc5bdjis_dZs28bqllB6Z9jk1QEYILux/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Aah! I knew it! Just as Lady Gamma feared...",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1TORB7j48nrfJXpv4Hv8Atbsd3MuWQi_U/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Jeez... I haven't even started any experiments yet.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1e_XlwJnYnzE-W1TbQ3HhpMEcjy-JAjF_/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "I've just brought her to my lab and let her sleep here...so that I can start at any time!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1eaw0XgBcQV27rcIQFvHd8yX5kMLwhNQU/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Ulp... That may be so, but please at least wait for Lady Alpha's decision!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1XZnuV2RzRaq4VyUJbmSXxWNhGoFhgQvs/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Ugh...",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1x_TLpQDXaWR1eSvupOIOXFwK6dTV7Ixv/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Even if this possessed turns out to be one of the Cult's pawns\u2014",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1Klh8oZxb34ISZKT6vI6x0pX6LUUW3aCE/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...Hmm?!",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1CLFXPnCOe1d847TBFC4nefew_s3l7tkU/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Lambda...?",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1G-AnPHQNUoQhCwAl_cfggl_2j5YJ6lEu/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "This woman... It can't be!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1774aYMjksDawkxyh3HJ_AhqMiUomvtZ3/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "You know her?",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1yCVt2vYg_n8hdkiPldWgYXUpcYtM9vv-/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "N-No...not personally, but...!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1XVSxXZXOkMeIRKw6pQRdzyhF2frRdOSK/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Anyway, I must report to the other Seven Shadows immediately!",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1GsqRFfvIoY_-xUKNDG6FEUpwhztNPgAX/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...They're all at a meeting in the castle.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1KtjWN6WGi3QMASkXwUheDAEEbQxiaacJ/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1zf_-Lu1Qz84wVa7cCUDsi5kC_0srObVX/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Lady Eta...please, I implore you, don't do anything just yet!",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/19zha7SUgeQAVmK4K7cb9VooG_bd0_rze/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Jeez...",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1KgfvF6huJg0LIdlFfJXBj3rRlpDFG3zO/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Please! At least until we can confirm the necessary details!",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/12gJMShwTvlAprgT-YYOXf5f-N1rJ8pkK/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...You sound just like Gamma...",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1sycfgJcVHhEGcoAbUrGDmh12cJkvRVr-/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Fine... I'll hold off for a bit longer.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1Ic8sKCeWR15BpK_MwkO7gOI3h5PGeDvC/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "I am eternally grateful! Well then, if you'll excuse me!",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1Zo2K2nMwkaWaSBiuOk9J2oE-RNcKzli-/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1cci-FrV24eQDV_C8-AOFKaF4ze5kz8o4/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1IeeSjUtep0N4JeqWbeBHC5BKVo_rYCFt/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...I might not get to...experiment on you...",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1F80V9sZtUnlbIY9QPMjcfGLcJwNM_UUY/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...Karen von Herzog's condition has stabilized. She's currently in a deep sleep due to exhaustion.",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/16C5jSUoKb2JBirxBP21rB2CY1mgK-g9z/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Her right leg is back to normal, but her right eye injury appears unrelated to the sarcoma from the possession...",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1tz9jCIuUqJp5Tvykpc8qksgKKKydenhX/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "If Lord Shadow were here, he could heal her old wounds as well...but I lack the ability!",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/11MscsArENFFHeEiBXs2taYDPcDwddXaV/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Don't be too hard on yourself, Epsilon. Even I can't heal without leaving any marks, especially if it's a deep scar.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1sJqTC1Ou4D0dk2jjQLJF74ku_tZzT-lu/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "According to Gamma's report, she used her afflicted right leg as a shield to block the greatsword thrown at her... So long as the leg carries no residual effects, then it was a great success.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1Z4UQ0QTtpa33hszkBNMGYELIIXG_3NzG/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Lady Alpha... Thank you.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1p5D5iFtN2SmJQCDtjghJBfdskciIides/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...That said, a possessed leader from the Cult of Diablos, huh?",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1uCN7xZ3ddtZTK4DkFswhN8YtkxEW9HjE/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "We could extract intel from her and prevent her from leaking our secrets by...",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1wM_GD2kBWcfZ22q2FIT0h5-CLawEgwD8/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Hold on, Beta! She defended me in a life-or-death situation!",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1YYxYePYuxfia0KIrWm_7E0CsACybO2e5/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "We can't just kill her without a second thought!",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1wuk9jwzK9TlI_bWzjr2F0yvyhLcI0Wqj/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "I-I'm just talking hypothetically...and I never said we should kill her! But the Cult is our enemy, so we need to consider other scenarios\u2014",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1QG94goKpjGT0uPbt5XP1peK5f5tCjizz/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Maybe so, but we shouldn't be talking like that when we're still unsure if she really is the enemy!",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1tT_rFQPpUku4eFk0rJFnmhhrd-pCR0aC/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "The other swordsman...Sergey knew about the Shadow Garden, didn't he?",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1JFbIMzrelfnNDJrhT1Mg7GLLRa1UprKZ/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Perhaps it's a ploy to send a spy into the Garden under the pretense of a falling out...",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1o7-M_aPqSG7ld92crVOtilbn8GbOrGSS/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Absolutely not, Beta!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1F2SYH4O04C0Y00knpQsLntYAqK-n4dpC/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Both of you, calm down.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/15mpd-ioAdfU6OQjqLycDh9O_ZVo4CMGM/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I was the one who ultimately instructed Gamma to bring her to Alexandria to recover.",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1Y27iM8H4K8y3kJPO4yrwY86fPu8rYVQa/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Lady Alpha...",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1nB-BRiqNG5BEhnQ8YzC38KOEjOSXggER/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Now that I think about it, curing the possessed can be done anywhere so long as Lady Alpha or I am there.",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1wuSqt_n5Jj2PkJi09DJlBVI6kvz3a8ug/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That's right, but I brought her here to the Garden for a specific reason.",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1N4AiYIwNzvWsNdQbR78grdjGORbwi5eu/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "A reason...specific to the Garden?",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1OTzrWl0mvPtVXciYXRrims1ThooqPDfk/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "If she's indeed a leader abandoned by the Cult for becoming possessed... We, the Shadow Garden, will present ourselves openly and provide her with a choice.",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1Zvt0okGCUJlCO5QdkzlusBAbINzYgYSn/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "If we obtain secret intel on the Cult along with a competent subordinate as a result...that will further clarify the Garden's position.",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1nA2vZUQ35fEQ_nP39W46rouA7lGY3vSm/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Should the Cult not tolerate the possessed under any circumstances, then it carries great significance for the Shadow Garden to show the opposite path.",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/12JO_UyV6Vn06Q2jsGOcv9DcHv52Xg5_w/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Lady Alpha\u2014",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1QJwyZ-_ivgMt29p6L39fz8rXB_ZXLcB4/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...But it will be her decision whether to follow the path shown to her by the Shadow Garden.",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1Z59KMuUo1xdwHQIEzYI6GJX94bRbFPUi/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "If necessary, I am prepared to take responsibility and dispose of her with my own hands.",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1cjc8ExsBcy6kAcHJ0NR-9Tq3umJV8D-k/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta & Gamma (Beta)",
                    "subtitle": "Whaaat?!",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1K6CHQU3LuPRdeLymuTBxpgPEQUWKeadI/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Beta & Gamma (Gamma)",
                    "subtitle": "Whaaat?!",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1K6CHQU3LuPRdeLymuTBxpgPEQUWKeadI/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Heheh. Even you seem surprised, Beta.",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1HuvVoMfDMRRDj2DCoENOg-qYUKz6OCHW/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "N-No... It's just that...if that's the case, then you won't hear anything more from me for now.",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1iZSPLxlfhXTUVqOP9ITobquLjgoqqBEq/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "In other words, even if they're saying the same thing, Lady Alpha's words carry much more weight than Beta's!",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/19IBObmgEaN_-lnAc44b7co18gPDkiw_G/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Members of the Seven Shadows! Excuse me for interrupting your meeting!",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/193WEx0_6OPMJMmFC3yXwGxDD5CLAS_Yx/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Lambda? I thought I asked you to check on Eta\u2014",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1JgBHp2NjykU-HhpJhVS0y1C1JlMARkUF/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Indeed! I've come to report urgent intel regarding the possessed Cult leader!",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1b2U8lq3-T5V0NxDGJLp1-TpVX0zOQkfE/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...You know something about her?",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1aJMANwP0I3OzJMxFk7iows7KCbo2XWJs/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Indeed! I do!",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1cnk8lW3Wdv9LPlCTYJKCmdq6NvqFmEfI/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "She is Karen von Herzog!",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/18H3iGlwIr1DAJ76QpxBJVV4T5ODC1k72/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Heiress to the Herzog Family, one of the oldest and most prestigious aristocratic families in Velgalta...with territories in the Empire since ancient times, and she is also one of Velgalta's Seven Blades!",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1FRENKld4QJTkLpUTbmM3Uu2Xmq2t7wdz/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...If only it were just that...",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1FRGdn897tGOrLxybelaBgmi29YwlHko2/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Lady Gamma?",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/1rVRSjU7_22f2I3JI7DYoHevWWdesoB36/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Lambda. Can you tell us what you know about Karen von Herzog and the Herzog Family from your perspective as a former soldier of the Velgalta Empire?",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/1c7VzkRtN4JUwlNAv2KRFIO7Mk2FzYk6p/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "And I would also like to hear your opinion on what we are up against.",
                    "line": 71,
                    "url": "https://drive.google.com/file/d/10q8WeqGDjaLiDGxaFfJTKjiPCF-Oc2Wo/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Sir! Yes sir!",
                    "line": 72,
                    "url": "https://drive.google.com/file/d/1PZwv3qK9qY8FlOG6QcOGAFYVzsJGXUfl/view?usp=drivesdk"
                }
            ],
            "e2": [
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Unbelievable! Are you saying that not only Lady Karen but also Sergey of the Seven Blades are leaders within the Cult?!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1oHHF665IDioRZXRCeWbusJJEhhYHhF0E/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "It's just speculation based on our exchange during the rescue mission. Nothing is confirmed yet, but...",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1Q1aV2Ag0RLvQtpA2muzVQ627IO57a0qM/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "At the very least, Sergey knew about the Garden, and was trying to kill Lady Karen.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1aykodRQ97q5Y315wCxMs0sHvLt66PYk3/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "And Lady Karen, on her part, seemed unable to accept she had been abandoned by the Cult after becoming possessed.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1K4kKaDdZdo81aQW_o3HrcMqHj3FIVl4d/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...I understand the Herzog Family comes from a prestigious and longstanding noble lineage within the Empire, known for their virtue and fairness, but...",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1zMlbcH8f68HUELXf5QlgU98OVA8qlD0e/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Specifically, what aspects of their conduct are highly regarded?",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1o3TgUIMxJbHgR-sU6DCtoT0H3vFcLHMx/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Indeed! The governance of the territories by the aristocrats who are vassals to the Empire varies significantly from region to region.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1p_X04N1XjeWKSZvLU6nEBieis_HycahW/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Yet the Herzog Family has maintained stability over their governed lands.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1xqKbfrtSGP0hGqdfaPO7Xjf7PG8cFVav/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "They are proactive in addressing the petitions of their residents, and although small in size, their army is highly disciplined... Not to mention, each successor has been a skilled dark knight.",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1uB-MDgyLUowumvOHFQbxevgCklolQsaP/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "As for Lady Karen, she was chosen as one of Velgalta's Seven Blades because of her skill not only with the sword but also with the spear.",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1u2TyO83XLlE2Zb95N1eN4GK9gdPMlzv9/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Externally, they seem like exemplary rulers in both war and peace.",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1sSfqcgvMyac0YeP3yt68db1fS_nAuL0i/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Such admirable rulers, yet behind the scenes... Their people are unwittingly being controlled by the Cult.",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1Ou_56fcwcecXFVS2LROhvGvZFP9mUw0b/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It seems we'll need to get more details directly from her, including the truth of this matter...",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1b7AuF57G1PBCngmT9xVmJRj4rCx6RhBL/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1vEsj4yL4iWonVThKlqfeozldQW-goNnr/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...Why haven't you killed me?",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1Inj-BFTcT21FIfAt6CdkILms3C29_9uk/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Oh, would you like us to kill you?",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1GqJlz5wl8R-5McyWuKwjC0yfqGQoGHe1/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "*gasp*",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1nVUVcB4sypmRbDTFRlzWjHDyunkmp24-/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Wait, if we're going to kill her anyway, I wanna use her as a test subject...",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1vLX-PVugnMCU_lQ4Z4ASwybMj-YUxkYb/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Um, Eta?!",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/13GMCOivPefoxleQ5EumlN3ORtPO7ulVP/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Test subject... Test subject...",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1JpZqlGBDjA7kj2tTGvgIoq8M4QydUlgl/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Eta.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1Z6SyW5zOZMf44BRMEsBD_gGpcV-xVfkp/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Mnhh...",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1ptXNQqVly8nIuPqrOQHQ8uLb2VEkabz0/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...There are so many things I don't understand about this place and all of you.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1r1NcXyNQv3HHiuyVO5TikrlVhAbDeO9k/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "And...I still can't believe my symptoms of possession have actually been cured!",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1AJWmfDXXRtYKn7774fleUjZ5MhBDEP2Y/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Heheh... You know it better than anyone, don't you?",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/17ENs3lqO2GNcK_cacTRq3ujRjk76g9TE/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Lady Karen von Herzog.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1maKn6sqHTN8BiGw15cVr5JNg8YfF9L8Q/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "If you are indeed a leader of the Cult of Diablos, two paths are laid out before you.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1C1Ca4MOZpH600Ap_dagP3zdSWsevOf2S/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "One is to tell us everything you know about the Cult, leave it all behind, and join us...the Shadow Garden.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1kYVs5hJjkchRQ6PQ-3cbQKpknUn5-k1h/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "And the other...is to tell us everything you know about the Cult\u2014right here, right now. And then...",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/19dw4-ZQgQLc00nM_XfbFJHFBMF3vaOcW/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That life of yours that was saved from possession will be ended by my sword.",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1wa17bblsUVgxHI5kzKcCDUC-ZQWmyMfj/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1lBB_Asn68GPKj7TDeX5hdC8SV5ZFdpV2/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Have you not considered a third path, where I become a martyr for the Cult and take my own life?",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1BWrzwItQvmB5_ZI5SCOd2l1iMuEHRT7A/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You were fleeing from your pursuers. You used your spear as a walking stick, even as you were consumed by the symptoms of possession.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/17uhMp0my4Z9Z1OjlNDXGE4NJwah9TOCh/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It was because you wanted to survive. Because you wanted to rebel against your fate.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1sIx-MtN1GE0oN8sPQ0GkpIcu9ssKTYAQ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "While you risked being killed by those chasing you, would you really take your own life?",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1w2CpBhWb76dDK9DrxR0-VjJxket7sieD/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It's unlikely, even if you weren't unarmed right now. If you'd like, I can lend you a spear to stab yourself with.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/18bzCFjH_sroYEt6ufbv-Ky4XbXS3sB1U/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Y-You...",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1hjYStcMGcoO__0oIqObHCfgyGsx5ff64/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Lady Karen, do not underestimate this individual despite her childlike appearance.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/18NzLar5242Ps48hwN92EMZI-j3Y2whVQ/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "That stance... Are you a Velgalta soldier?",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1-usYjqDmRwBhsyI-_1Vg4OOx9v50KNqb/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "And also a former possessed, just like you, who has lost everything but her life.",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1lcnk-nNyk-cc-VIBOWHbYCkBNvmwmjjY/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Mnhh!",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/11nignt0Ou9kCer2ZyOORvvFT0K9z-2JQ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Lady Karen...I don't believe you're evil.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1On6qMNCK65KuAis2A7XAPqS5FZKB1OBp/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "For you to defend me in a situation like that, it's not something anyone could do, even if they wanted to.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/17mzWMMHJsqsPTZ0Y-ipjHfeuFSVOd3Mw/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "You may have been working for the Cult...but I feel you have a sense of duty and pride toward your position as an aristocrat.",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1bXxi6tOFa6ffp3PyKlN3CVjqo1NDwOrw/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Could you explain it to us?",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1VCLm2jrtQbPCNvKSgY_A6OlzC5BzIbsQ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "About who you were to the Cult and the role you played?",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1iBRjsQmHq8decuqEIvDfou7lvWD4blr7/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...Even if it means torturing it out of me or resorting to drugging me...?",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1kDZPEJfIHgpRuaXmJDbdzIggKPhbNH6f/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I would prefer those to be final resorts. Let's try to make this a positive encounter for both of us.",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1T-HZOqwNPH25vBQ8mqfSXDBjJL52n1HI/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "After all, we may have a long relationship ahead of us, although it would be that of a superior and her subordinate.",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1yGp9AZCnXxiod_01BrZ8WJTu2ILlP5xb/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "What a sales pitch!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1NIcOGDycNoVO77FbUjT_ZEQXvkI8gSCY/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Alpha applies pressure, and Gamma appeases... I see.",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1RV7qVeHMfEYG9_2A54C7Ybs-OzYu7MZt/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1UA6JVmLZ7Pw8OC1YKcxxiyo_0T8d7VWz/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...Very well.",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1nIQCp1GgDm5VdvXz0sMc8pyrKonmNzOo/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "There is nothing left for me anymore. It might be worth relinquishing everything, pride and all.",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1Og2wBbZwMXEsRhI8HlYbCJFnwHtofwML/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "There's always something left.",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1b39ZkBVtAdjnEGlNHnxFmgAo1ad9RPiu/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Because we are also here. And you are here too...aren't you?",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1RIXq01UrPReY6jkbJ4PR9yk8OIg8sl0Q/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Wait... Were all of you also once possessed?!",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1pMejQDCZG_q6ATs0pS_dUBOfbwdeq4IV/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That's right.",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1tSM7ietjgUetTZijB2n5yFqlmByPFXqU/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "And the Shadow Garden operates all across the world with a mission to save the possessed.",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1JGX6wrY2NsVD8b8xbdx0s1Pd2ICYSc7M/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...And to destroy the Cult of Diablos while we're at it.",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1qsgoqBmE_Xxt7zLPy79BvLrG-OWc9IbX/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1hEwgtNnyURboTKG_B2NvQ1fmkyA3p-Hl/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "I see...",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1KGOB5BafCvpJS_3RiQLSU1yVAHC9pOH7/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "If that's the case...",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/19NL5oBg90UTBjMb-Bf56WzbKEK4UezIW/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...I'll tell you everything I know. After that, you can do what you want with my life.",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1vaD9uE0n7JXcoWhs3IXE0hykP_GetNcX/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Then...be my test subject...later...",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1xkxgkb2r_9AiXctizrNaQtSRA4GQadjk/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "That...I'll have to turn down. I've got an incredibly bad feeling about agreeing to that.",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1bJfnp4AuDUNJhftnNdztxS8sw2J_2MCw/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Jeez...",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1UhPE-nUQ-r-pM1LKZVOw8ljSYWz7KH4-/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Heheh.",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1yspAAoDzTF519awzwUifeLfBVu3FV02K/view?usp=drivesdk"
                }
            ],
            "e3": [
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "First...I'd like you to briefly tell me what you know about the Cult of Diablos.",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1sCl81zzpmnO6ZB8Kdo5ZhPIYS1_HxkH8/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "So you won't need to reiterate what we already know?",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1HlanASI8GJVD4Ob-zPmXhjR0j-3M-aNL/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...They control this world from the shadows.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1eyTdPigv2pY6V0bxecHlZynBLaJh33nR/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "They abduct those who are possessed and use them as test subjects, to serve some purpose.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1GHP6ceTfA1L_mzXnCdEs3RlZ5hszULPy/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "They have deep ties with the Church and a tenuous relationship with the Templars, who serve as the Church's inquisitors.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1qFk5XGbg0o_FWpkEyHN0wNMP8unJIBrv/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Above all, the Cult's structural powers are so vast that even their subordinates cannot obtain satisfactory intel on its workings... Something along those lines.",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1AEiTgBw1f110jnucvsbjXSTg7mcPajQR/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...If you know all that, it wouldn't be a stretch to say you're more knowledgeable than any other outsider concerning the Cult.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1kQ3GDQ4bbFItmi5Fj26EohMw0Oyu7z-P/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Even more so than those of the aristocracy, which the Cult has deeply infiltrated!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/16xGJjsMEzvEIUvvl98-gZXIEre0d_3xD/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Who told you all of this?",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/14IWtHYf8zrVJDbtVsKr46rUT-iYD6wrO/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We're the ones asking the questions.",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1W5tvwwpIg9JBZiCZa1BZigFQyahHNR-v/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "A slime sword!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1ZQaNtxkFymO1LAu7Mli6Y7G3aYDi1VTY/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "The Cult of Diablos has been active in the shadows of history since ancient times.",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1uZCSDld53eMbL34G4f-YPuIj-cCg-XFz/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "They even played a significant role in the formation of the Velgalta Empire.",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1jt9L0iREVAVnH9M7Hb37e5bau0H_WO8K/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "As I recall, until the unification of the Empire, many local lords were vying for power.",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1jWEV58MnimuTEqVpK0z-F57EjT9uhMfe/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "They say there were frequent skirmishes between the lords throughout the continent.",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1bNay7MwQAYe9huDEeNGTGz5clhMpYY20/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "That's right. And none of the hidden details have been recorded in the history passed down amongst the people.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/12oLZkx9hhLuUH-x6Ek5qvpgAsSik__rp/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...For example, the fact that aristocrats like the Herzog Family, who became pawns of the Cult, played an important role?",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1dL-9yoAM1BRs2vTezrhGH7N6OUf_O3ly/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Everyone was exhausted by the wars that raged on across the continent...until the land was finally unified under the Velgalta Empire.",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1Vtq_lU3saSXgAy-grn8sqr2bAVAz_QcX/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "And most of the lords lacked ambition, willing to serve any ruler so long as they were guaranteed autonomy.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/19Cf_2llhwC9EzLYmn5APPKlbUMeDAX3A/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "The Cult effortlessly infiltrated the inner circles of such aristocrats.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1741kkUy3TSyiqbdP3CTbLeCfbHJ0-PuM/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "The Herzogs were one of the aristocratic families who accepted the power of the Cult and submitted to them.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1ZcFaNz643oFeu4zreOsJTUptd4k55Fnf/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "So, as the head of such an aristocratic family, you were born a member of the Cult?",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1WZYyFZmdzMPye757GfK8SE-z3y4JT9p3/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...Control works best when it goes undetected.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1_lf2FYVKPl6mnsNUsAc-N-uAIyBFPh-B/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Besides, when war breaks out, the common folk of the land are the first to suffer.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/11lFJ4QxcZNXBLHjZZRG7RSndGvdAksKE/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "My ancestors understood what needed to be done to avoid unnecessary bloodshed.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/18DOHEOEHpInWFxUFes5BNBK3nCg-91Dj/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "That's why the Herzog Family has long played their part in maintaining peace within the Velgalta Empire, restraining those brash individuals who only seek conflict, and protecting the lives of their people.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1pJ69Y36qkIKNNtPoCGxGFymyHSy8IU9F/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1XgKffCJlp_8xoTRoZ2Ru-eAsVSnfI9LR/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That's the typical arrogant mentality of those who control others.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/11bBbgDth_8LFPgZ5TyFGiQAX_WgIL-LA/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Arrogant, you say?!",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1KEKAcDpaxx_07V-X4LY7GO9oJqXAUR8D/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I'm not wrong, am I? You're depriving the people you claim to protect...the opportunity to walk on their own two feet and grow.",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1wEyVkWev3SgN5D3RJtO4tnLlRaDxt2OO/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "The opportunity to grow? That's nothing more than an idealistic notion! Not everyone can possess power and lead the lives they desire!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1aB3x4b2H2O_sYewLDZ0SDyzPVRmzx4e7/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "So you'll deny people the chance to fail? Surely that's the epitome of \"controlling\" them.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1OBhedK4pPH7e3JfJsUnZLAZ8bzMwN2QU/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "And you yourself are being \"controlled.\" After all, you're acting out the will of the Cult.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1tJZnMfaos2_omWPHpsCKLCcfO36EGm4E/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Not only that. Despite being fully aware of what is happening, you genuinely believe you are correct in your thinking...",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1eqI0bpLj6mdkNi30v0xNdUGIjHtTtnIE/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You've turned your back on your beliefs and boast about the shackles that bind you, urging others to wear them as well... You are a slave to power.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/17cDfUkW-2xTRL9DcO3ifvGP6nX33lS_I/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...Say what you will.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1NfMO7lZlmh3aJiVh0tm5rI7njJZ4qsFq/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "I...my family...believed it was the best way, and we have fulfilled our duty as the Herzog Family until now.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1biXK-jU_R75TJJJvqjJjAuWvYjhY1pMi/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "But that duty no longer exists, does it? I heard Sergey annihilated your entire family.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/15QZLfjsTxvV0apRl5754gYsAZjQa9VuJ/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1FxAQyl3gXQYqaaWnvzYNCGW3UO8fbQ0Y/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Who is this Sergey? Is Velgalta's Seven Blades itself an organization of the Cult?",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1b6mD2APXEkbLF8J4A5_RxKnZ672EUHm6/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "No, that's not the case.",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1BYEN7z4cLw_B42xLeTJqXSitA-KJl5U7/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Velgalta's Seven Blades is a title given to knights highly regarded in the Empire for their pure martial prowess and ability to utilize it.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1AWCen6cqJ8iU1aLEdqioURMNR1Hf5uJ0/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...And Sergey Gorman is a knight who dueled and defeated one of Velgalta's Seven Blades, who also was one of the \"Children,\" earning him both titles.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1nR9ntX7pWXE5rGcsgDlDVQ4AI9CZdhbQ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "One of the \"Children\"! You also called him that.",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1QmIF4jMOB5SPnkwly__CuauyiMJy1zDI/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Being a large organization, I guess it's natural for the Cult to have words indicating positions within its hierarchal structure.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1SYLKz1p9TS9BqJy-InwK801qvanYMkPM/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I'll be blunt. Do you know who is at the head of the Cult?",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1OpTwy7i2eJ4PtFGkqnJLpIOlzthJZo4T/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1Yz0ev66ohO5_nP3P5Y7E-z9ZlrqWJDO-/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "There are individuals who are known as the \"Knights of Rounds,\" or simply the \"Rounds,\" who are members of the Round Table Committee...",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1sxZ3VpGsHdn9fLzP6BaeSGIyuju5LMgD/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...in charge of determining the Cult of Diablos\u2019 policies and governing its central operations.",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1i3O4_suHTFYsJDXryVQN4IPKJrHlC44p/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The Rounds! So you're saying the Cult is controlled by a collective, not an individual?",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1VvHE3bsSahnYcMUt_sqczbwRkhLzy913/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Even my long-standing aristocratic family lacked knowledge about who the Rounds are, how many there are, or the details of their hierarchal structure.",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1PSbsZ31zExWp8YHQe8fOnrD0sg6J7xEl/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "It's a secret organization where even aristocrats are treated as underlings...",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1WJK9NcC3lLG3HAJz87eSHbNfNb9wFUWZ/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "The four Rounds known to the Herzog Family are \"Fenrir,\" \"Loki,\" \"Hel,\" and \"Jormungandr.\"",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/13_BN1Lkj7d--JGZPP-Hy6F4OW2dUy6t1/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "It seems they each hold a specific rank, but I am only aware that Fenrir is ranked \"Sixth of the Round Table.\"",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1GqDyvw9XNA0VOeyBBCCxrDJwymTD3s27/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "They all match the names of the factions of the Cult in Midgar Kingdom.",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1dOMUiOc8Mhh7E06xDmyLaohjvidOcBte/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Perhaps because of conflicts between the Cult's factions in Midgar, even many of their subordinates know their names.",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/112W0QdCswQeKairQXztTRvuSCYVB2t-T/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "I heard you were called a \"Child.\" Is that also some sort of title within the Cult?",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1B2hLxoR53KQ6mH1EMshRFIvviu2eE50G/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...Those of us who possess power and serve the Cult, such as I did, are generally called the \"Children of Diablos.\"",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1AocGZW_PDtyuFCHPE8zW4l3NPNQsLyXB/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Children!",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/11Q9kWmEp8SPgb-MDZDZfeS9uvly570XX/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "There are distinctions between the First, Second, and Third. Those below the Third are treated as ordinary members or foot soldiers of the Cult.",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1_Kml00rfUQv157nugmH1m9uaesnLWcyP/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Those who were born and raised Children, like me, and those who joined the Cult and became Children, like Sergey, are rare.",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1QoL8ib-oNxmcNMUoKzolTjUNtRr7mxsP/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "More common is finding orphans with no relatives or children of poor commoners with high magic aptitude and raising them in special facilities.",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1tCTTVs04oknjbsjkyDm0G3J51r9Bq9D0/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "This is because they undergo rigorous combat training, educated as members of the Cult, and administered drugs to enhance them.",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1PzgY2H-nuzQrGEyA3q6Tqj_XdiOt7qL0/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Well, that's one way of putting it. In other words, the orphans and children are abducted from their homes and brainwashed through education and drugs, correct?",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1BpJiip_7HUuB0I2OSSz06qITDKd0Aq9c/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Th-That may be true...but we're not like other aristocratic families and subordinate organizations!",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1-mHObNkOYDtUlMFnpuFGCBf7AC0y5e4T/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "The Herzog Family merely offers a means of escape from poverty by becoming a Child\u2014",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1rx-8akHCYxyvSuaRE6UG4qBvOmTrdxB0/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Let's give you the benefit of the doubt and say it was all done out of the goodness of your heart. You're still essentially saying you only save those with talent.",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1-3SGcmss1p8AMHuE4WaM0VaeRed1sNyK/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You're selecting lives to be saved based on practical conditions before even considering whether they want to be saved.",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1F8wQS_EJhY4CfA44fANhTZZpZTShvrlo/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Tsk... You're thinking in ideals yourself! People are not that intelligent!",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/1evdJ22vNtgq7tW9z4YBDIZpZE1w4dR9N/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Now, now... So what do the different ranks for the Children mean?",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/13EYenfe6wQzhvNZk0U-nqgUcDNv4kLqA/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "......The Third is a general term for Children whose minds couldn't withstand the enhancements. They are soley used for basic combat.",
                    "line": 71,
                    "url": "https://drive.google.com/file/d/1kxCf155F9jrFPq8IFPYFqP_I11wRB_pO/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "You mean, because they're mentally broken, there's no risk of them leaking intel?",
                    "line": 72,
                    "url": "https://drive.google.com/file/d/1-6fZrbamHbM0JIy0DUkzUJnIBqagnVss/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Still, even those Children possess combat abilities far surpassing your standard knight.",
                    "line": 73,
                    "url": "https://drive.google.com/file/d/1iPRFp-fKfD_02Om15tNnuihhPhY8AoST/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "The Second Children are those with stable mental states. Most of the Cult's leaders belong to these Second Children.",
                    "line": 74,
                    "url": "https://drive.google.com/file/d/1hy2-XzAI7IfLOegahJ6Ly9z6qibzDMOZ/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "And the First distinguishes Children like me...who possess undeniable strength.",
                    "line": 75,
                    "url": "https://drive.google.com/file/d/1ur_GdNN_NSZDB859TSDNLGPCuuhq4GCX/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Are there any individuals among these Children who become, for example, members of the Rounds?",
                    "line": 76,
                    "url": "https://drive.google.com/file/d/1ncUifVGxqqSNKdpTWM0uphyeCXBRshYq/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...It is said there are.",
                    "line": 77,
                    "url": "https://drive.google.com/file/d/1W_DmZf0vs9v7mbjQNEAcEnUPvnPYkUsz/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Children who show promise or make significant contributions to the Cult are given two titles and are referred to as \"Named\" individuals.",
                    "line": 78,
                    "url": "https://drive.google.com/file/d/1mHLzLTBtbrYxD6of_ab1m-wXo4UdFSC9/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Most are First Children, but some are Second Children who become Named.",
                    "line": 79,
                    "url": "https://drive.google.com/file/d/1kSVnxQTa7szwjtRFtyOT-ODA5Xlt0rT9/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Within the Cult, becoming Named is said to be a gateway to joining the Rounds...",
                    "line": 80,
                    "url": "https://drive.google.com/file/d/11VbKFjb_aTpXo-anH4hr_CbMXg3R0Zfj/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Wait...is Sergey...? But he can't be!",
                    "line": 81,
                    "url": "https://drive.google.com/file/d/1Xi7k1PhfxEIpp2KvMnnrDKjAIPBk7iK9/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Training Children while dangling the position of power known as the Rounds... It's precisely what those in control would do.",
                    "line": 82,
                    "url": "https://drive.google.com/file/d/1y9C305M3zPok2fMTnZbOYDUIYdUbIp4f/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You've been raised in an environment that blinded you to the contradictions inherent in those actions...",
                    "line": 83,
                    "url": "https://drive.google.com/file/d/1WQJtC-jOOl1OsmZtVRTC9J4mXnIxTAMd/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Or perhaps you knew how distorted that hierarchical structure was but turned a blind eye in order to reap its benefits.",
                    "line": 84,
                    "url": "https://drive.google.com/file/d/1GuufeKgA5yrQAe1uwh81eznCIpcfimSE/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...!",
                    "line": 85,
                    "url": "https://drive.google.com/file/d/1g0Tu-zMFr4QzfldrJhLUpdp67f0pf-Bu/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Karen, First Child of Diablos, the Shooting Star.",
                    "line": 86,
                    "url": "https://drive.google.com/file/d/1cn4FMyIfF1e62kAPf-9H4BsJExSxux8h/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "As a token of appreciation for sharing intel with us, we'll give you time to reflect on yourself.",
                    "line": 87,
                    "url": "https://drive.google.com/file/d/1MsYHOGGQmxuw2WRkTaAQ6SdBXaI2I0y1/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I'm sure your experience as a possessed has helped you understand the reality that the Cult's domination of the world is built on lies and deception.",
                    "line": 88,
                    "url": "https://drive.google.com/file/d/1CB0lE28W6MjDOrMblDAq_J3FtMxDgmzm/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...",
                    "line": 89,
                    "url": "https://drive.google.com/file/d/15Vv1n6Du3W0ADKDCX4QfMj4m3VeuBJSP/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "If you're willing to discard everything that has made you who you are until now, then we're ready to welcome you as a member of the Garden.",
                    "line": 90,
                    "url": "https://drive.google.com/file/d/176TuH3-_AMd5ymN0axUrSLShIPzAkKYG/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...That is if you really can discard everything.",
                    "line": 91,
                    "url": "https://drive.google.com/file/d/1bbnFSzNHuLOU8U7ZvOlQccCASUY0pCUq/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Um!",
                    "line": 92,
                    "url": "https://drive.google.com/file/d/12BtJmqRrT82KLmvmYyktxW2QCVM39W90/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Lambda. While she remains our guest here, treat her accordingly.",
                    "line": 93,
                    "url": "https://drive.google.com/file/d/14KfArvP7w66w6ICfx0zAvfRWWibHpeON/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Yes sir!",
                    "line": 94,
                    "url": "https://drive.google.com/file/d/1IiZvhI2Utm6bs0URJr0MhU6oBZ3n-SOK/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Come along now, you who were once Lady Karen. If you're going to do any thinking, you'll need a place to sleep, won't you?",
                    "line": 95,
                    "url": "https://drive.google.com/file/d/1pR-AYsdzEcXqYE2glKHtML_IREFMmNN5/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Mnhh...",
                    "line": 96,
                    "url": "https://drive.google.com/file/d/1itjbrFX_YoBXn-lGfGLll4-qDP6UaRpn/view?usp=drivesdk"
                }
            ],
            "e4": [
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Well then, if you could fill me in on the report.",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1oWx3q-WtxA6Z6TlZJ0Ap5OIQb0Vhor7U/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Sir! Yes sir!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1rPCAe2BJXevtC_b1VfM58IUSa6UYP0vY/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...There have been no significant movements from Lady Karen.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1yCRV0ypp9WuV0mHoIjmmqkQiutLaQXqz/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Following your instructions, she's been wandering around Alexandria, but there are no signs of any internal reconnaissance.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1DB4Hxn1jp99odkfq5Y0S_EViRNW4sGOv/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I see... How does she usually spend her time?",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1_d7vvNYtxYiEWEeAO-C7aq0PfNCiYU6U/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Right. Lady Eta mostly has her tag along on her experiments. I'm closely monitoring her to ensure she doesn't lose her life during one of them.",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1KkqzcMgohTSIXlqO1LRk5ImyMZZMW3Mq/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Heheh... Classic Eta.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1wd9h3zpDrbi2aIADvoi5-0OuHVDrxlDL/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Once Lady Karen becomes our ally, Eta won't be able to use her as a test subject so openly. That's why she's putting her through the rounds now.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/15qYx3X0XCoW34XYzysUIFJMhhiak1Ahv/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1OOqcHSAn8T8Tjo4Om-Bj2ROxhpUY3vsc/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Lady Alpha?",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/19_7bVDjMs0vuGOUnm8K-gcJUsI55kQZ7/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Say, Lambda, was my approach to Lady Karen the right one?",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1AQTNgVlArMeu3oPeJ52LtYu_Q98mOSjp/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Looking back, it might not have been the best choice to confront her with the Garden's interests and then outright deny her way of life up to that point.",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1jcq790gD2ovtPUxKp_WuVUYMP_LvvsBi/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "At the very least, I think there could have been a better way to handle it.",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1Rlpv-A07pLyKeySu2j6wnlZ5uv8IvUlA/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Lady Alpha...",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1p_kJ4PGPF_Aujje4jo7qs_b3QFKtmkeH/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...If I may be so bold, I believe your actions at that time were the right ones.",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1DE_dktNIojdZbwL2q4a6rHTRTnp3Is7E/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "The Shadow Garden is an organization that ultimately aims to destroy the Cult of Diablos.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1r870nJcx_L7uEoEbJuhFTKurI8BwUVAR/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Showing kindness and bending your iron will to display compassion is unnecessary, even to pacify the enemy. And besides\u2014",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1qnAs11GGfPuXYdeocf5-Xm1h4hTKlIxL/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Besides?",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1_bmYaBVomWBjALqcyT-h3fAdWdvtpIEC/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Lady Gamma is looking after Lady Karen.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1745sA9kgUxAh4DWMS0G1wq1PDHPxV0fU/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "The harsher your words, Lady Alpha, the more effective Lady Gamma's gentle words sound.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1-3Oyo6nI4KBhD_qH2qv-RTk1MeeGHQ01/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "So you're saying, for Lady Karen, Gamma and I are like the carrot and stick.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/14RNS9X5bGP2HzOaktE9m0PNg5JGCuJ3I/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "As an aristocrat of the Velgalta Empire with a fundamental understanding of reason, Lady Karen should already know logically...",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1qKZGwT4W3KMPzx3QDz6yZJX0bzx4Mq3r/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...that her current situation proves your words.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1Yp9Tio0DIziaNxHb7xAKeHdQUl9TU97q/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I guess it's part of a leader's responsibility to play the role of a tough egg to crack.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1YJgokGe0Hw24sm-MC5Uw3LolXo4IvoL_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "If Lady Karen is unsure of how to cast off her past self...",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1IwlLLMicMf6QRKc8SH-luVM0pUdke9ZX/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I must help her. Of course, in a way appropriate to my position.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1t13reoNvmABehYVmIOp201LCwevKaEiO/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Faster... Peddle...faster!",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1Z6kBRjMtK9qrnXrdCkCQDmQuCzazU1nJ/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Huff...huff...huff...huff!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1G13oM29cZSHCt6-7aY28Ge-KTde8Lu1K/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Come on, faster... Pedal to the metal! Or it won't generate power!",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1J08oRPyO0TzUUxhhV7zauQsM5pU7vap1/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Wh-Why am I doing...such grueling work?!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1T9Of0Huf4UWmtjP4NU_PA46c8MtJDZWB/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Pedal...or you'll become a test subject!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1BKYbEJnpjtoroxJ8Quvtugk28-GuTyFz/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "How is this any different from already being a test subject?!",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1vRt6Ma1mV1xI31ButWeWgYiTOs6qAaIT/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Wha?! The machine is spewing fire!",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1_WVjEuijJs9bkwtJtHTiURqEf2IGVnxO/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Doesn't matter. Keep going.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1uTbRCec01ixSC1mwLCjKH_2fgE8R-EDa/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "It matters to me!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1urdidBJeTQpq7nu3ZL6lvMkWpf-BSEiL/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Don't worry about it\u2014",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/13LXKK8lThQUCyVddcjzu6a7ToiBKhLly/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Wh-What's this?! Hey, Eta!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1be3fxxJVHIR9xyE4dKKXo0kw5eHsfAxv/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Hmph... We've been interrupted...",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1yyhmSigePPOE474RDvZA8n5kZPtj56pJ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "What are you making our guest do? Stop this now!",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1ep8srxQmlZCuV8k_V-m5O2kbJ6COY2zB/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Fine... Stop pedaling.",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/15ZVqssqrH8YCldlA1QXDCk3U6CM1Go9i/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Huff...huff...",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1tPjvsB0p2CQDq4vEfhlZIt_KEKN1zB5W/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Are you okay, Lady Karen?",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1hNliDrsj3kpwS_IbLY5d0CA454FKO3AM/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Y-Yes... I'm unharmed...",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/12vie1MFmrNYARxwtiLYF7Ou8vi2dCpNK/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1cyRarmpQlnle_prVQVlpkEcv1JqODQwZ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "How about we step outside for some fresh air?",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1koA1CS1rNxC7ZlR6wijRoZrbAM_Qehwr/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1-uXWVOdnrzdXiE6vt4FfuTgDHx8Iw5Bi/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1LAgdCKjh1bXa-AMicYsfqTPv_8N7z08S/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...Aren't you going to ask me anything?",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1SHGpaGxwiKL7GjzYmBqjOrcZjxhWY7xx/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "What would you like me to ask?",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1E4p3vdqJQag_612suzQSmSEyU6SyVrr-/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Well...",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1dCSqrkDvx_kCivnttuPPcRjkh9HjX8nj/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...Why do you keep treating me as a guest?",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1UK28L99UBE64Kn_t8zoqMDIX9OdPcWai/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "That's because you are a guest, Lady Karen.",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1v2Pw7FLBQUb9zVR9YOR8wDnpKJy6BHlf/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "That's not what I'm asking. The fact remains that I'm your enemy.",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1yF6ORYy5kWIpqeG_U-K3fHIBPYBxel-u/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Yes, but you became possessed and lost everything. Your status, honor, family, and your future... Everything but your life.",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/15ftQ7r8cQ-wM9obeOtJLXh5sVpArtz8J/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "While the Shadow Garden's objective is to destroy the Cult of Diablos...",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1DZysXHwHE5VH7WNfk1HL0HSNCCueUD8u/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Rescuing and protecting the possessed is an equally important mission.",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1Mipb0fZRupYX2Ty303Re4Ij_dojP9SuL/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...And what if I collect intel and bring it back to the Cult?",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1SxpjoilYdRUQtLhqFt8t7xgUglmS-3od/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "If you planned to do that, you wouldn't be crazy enough to go along with Eta's experiments, would you?",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1YBJevnNJOHk_8Yd-cR_HxwFeTk_Td0eU/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "With all due respect, Lady Karen, you seem to care little for your own well-being.",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1o9rJ_zMh6pmhq1clCB0kx241AwhoPlP_/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "On the other hand, you also want to transform yourself.",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/18MvWAKBSM6Qp2aoJL8mD9gTOvh1Y_4s5/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "That is why you've gone along with Eta's dangerous invitations without a second thought...",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1jXaitKMAkY9BrMaX-sVSgZmSpkjPVHBQ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "When you get involved in her experiments, your desire to survive naturally emerges...doesn't it?",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1nO0KVDe67HlxnecX3x7VMbFfS8SfXrNA/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1xY929EhMbjNGLa7h1xG1KjkKaYC_E3Bp/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...I'm speechless. You seem to know me better than I know myself.",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1lMK_mALDxL0jma5fFwf7Unvsii6RicgV/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...I have no idea what I'm supposed to do.",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1NfpM2EZTWot_WDtJleClih79JUmJ_7Jb/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "I feel resentment and sadness over my fate and a sense of retribution for the Herzog Family turning a blind eye to reality.",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1DZxq5SWcrSxm917aVzr7l8Zd7kFit5dq/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "But...more than anything, my heart just feels empty.",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1BMMSsYUKgI55bxfC6h5Wwrrcw5Hnb4Wg/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "If you've come to that realization, then you can rise again and start anew.",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1s9F2epG6mxy8Q5CLSLLjO987JKIwvkoU/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...You're quite articulate.",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/1yQ8L557PzCKX7fqN54zdu1JDGqZ5419Y/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Well, I am a merchant, after all. I can be quite convincing. And now, rather than trying to convince you, I'll make you a proposal.",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/1bMHWrmPRLVNQTmNjeZt0YHhIkQS2aOPU/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Lady Karen. You must live.",
                    "line": 71,
                    "url": "https://drive.google.com/file/d/1bIZy4Bcbm3XY-jvDuxvFXbiumUE8NNg-/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "I must...live?!",
                    "line": 72,
                    "url": "https://drive.google.com/file/d/14fuH1_2bLCgzCl37jVPU5PUbwY1whsus/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "You saved my life, so I ask you to witness how the future of this world unfolds...and the pivotal role that the Shadow Garden will play.",
                    "line": 73,
                    "url": "https://drive.google.com/file/d/1XoS5vTFxZ4UvarL4h1qyjWc6Ck279IIi/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Witness, you say?",
                    "line": 74,
                    "url": "https://drive.google.com/file/d/14HS4CSu7UtYimvGW-mCjr0iiDqSmAJBe/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Yes, and to do that, you would be best served joining the Shadow Garden.",
                    "line": 75,
                    "url": "https://drive.google.com/file/d/1FuOLd4QHINaSkID4D0WibzaVUf1zQMaH/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...",
                    "line": 76,
                    "url": "https://drive.google.com/file/d/1sfoa8dKOEaQCBQMXKxHH_uH9g7Y01Ifq/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Are you talking me into it by making it sound so matter-of-fact?",
                    "line": 77,
                    "url": "https://drive.google.com/file/d/168Qj-o8ZBYPEBIDP_bOk1rOKLB1BV5xh/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Yes, exactly.",
                    "line": 78,
                    "url": "https://drive.google.com/file/d/1QPexiNAkXybtb4u0Z91vq0ILfP5-Pa4b/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "And it's not just a matter of fact. It's the truth.",
                    "line": 79,
                    "url": "https://drive.google.com/file/d/1tJCv19mgDM4Ob1PxrMp03XRL2sIzRUhE/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Heh...",
                    "line": 80,
                    "url": "https://drive.google.com/file/d/1gYCWRFdufTrB_pAiXlUb_08IUX1z8V1K/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...It's true that I lost everything.",
                    "line": 81,
                    "url": "https://drive.google.com/file/d/1DeIawH8rlKPrbRIDc6UZdibxlPHkUj_Z/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "But there is still something that defines me which I have yet to lose!",
                    "line": 82,
                    "url": "https://drive.google.com/file/d/1mQc1QE2F-Q-NrlMoOzbFepIdxeonY5hM/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...I see. So that one thing is your skill with the spear.",
                    "line": 83,
                    "url": "https://drive.google.com/file/d/1EVpa1Y8ytuBLukt_O0kOsfdNX4t3-tCM/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Yes. If I were ever defeated head-on in spear combat, it would truly mean I have lost everything.",
                    "line": 84,
                    "url": "https://drive.google.com/file/d/12YW4vGpQxAh3EbEbQwwrBX-mUrYPL910/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "I am no longer the person I was when pursued by Sergey. I am now in perfect condition...thanks to all of you.",
                    "line": 85,
                    "url": "https://drive.google.com/file/d/1RdHzdQ3LkibWQ9LZc3Pu1FSfs3AFxgM6/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "I thank you for that. And while accepting your kindness, I also ask your forgiveness for pointing my spear at you.",
                    "line": 86,
                    "url": "https://drive.google.com/file/d/1lq4GcGIK7VnoTuTcMqJzlbYBfsKZYA6b/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It's alright. Don't worry about it.",
                    "line": 87,
                    "url": "https://drive.google.com/file/d/12Zow21ya94irFE3FFZbF3oLAeMp3XxXX/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It seems this is your way to find and resurrect yourself, and start anew.",
                    "line": 88,
                    "url": "https://drive.google.com/file/d/1JlLySSI4oGJKLepMfO0-EMFBKGcKVf2G/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "But, Lady Karen...let me tell you the conclusion up front.",
                    "line": 89,
                    "url": "https://drive.google.com/file/d/1jjkyBLjZ0hPUVdaI-DtSxZjF_KobT1VX/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "If I defeat you, and you truly lose everything, you'll pledge your loyalty to the Shadow Garden.",
                    "line": 90,
                    "url": "https://drive.google.com/file/d/1nlQJ58RrM0JnAZigSMbaPh3JbgCE3w_I/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "*gasp*",
                    "line": 91,
                    "url": "https://drive.google.com/file/d/1AfmEl0hK2JvrypiA4fF31GpMBEdHOqHH/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Former member of Velgata's Seven Blades. Former First Child.",
                    "line": 92,
                    "url": "https://drive.google.com/file/d/1es6wflgMUEtpsWhTSIGLA19RCoSW6Gqk/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Now witness the spear of Karen the \"Shooting Star\"... Witness the proof of my life!",
                    "line": 93,
                    "url": "https://drive.google.com/file/d/19HCZxk6r3ElN1B8QuO6X99KQQiVj1CYd/view?usp=drivesdk"
                }
            ],
            "e5": [
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...Hyah!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1RkUNmzNfdfRw6IoQy4Mn_kCKuRQF6X-G/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "A feint, huh?",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1fpzSufkhYdmFxyIYoMdjWzGRWa2RqxsX/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You seem to be using your spear's range to reduce my awareness...but it's pointless.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/13ZBcPsAbWQSn-0MDK6t9vfKTZfLiNcRJ/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "You're ignoring my feints and narrowly evading my actual strikes!",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/18aD8KI-vMccNbA0PR5ImHuDB6MXeUmGy/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Indeed, you are strong\u2014far beyond the level of an ordinary swordsman or knight.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1LYILQfYDoLAcjG-_6RhGeEVwjX8ym0Hh/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You've mastered exceptional techniques, and your combat instincts allow you to wield those techniques with precision, earning you the title of one of \"Velgalta's Seven Blades\"...",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1lqGC5JeoHEJ7AjUsBbQ3-3Xh9MTS1kFj/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "But such an assessment is only surface deep...",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1Fjsl51OEMNtbuWQ7GZp4IKN-qEv7SmHL/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Ack!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1zbFZygdEUjLOvsmagH295UusDB5I5euW/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Tsk!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1dd62iTbUP6XlTcl5repzKCmUfax6vhl4/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "She dodged that?!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/15RGlH7NynDbQMTwCvbI5MzIlOux1Apxc/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "No, Alpha must have let her.",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1GsHE1RCSiwKHc3PEz8uzRgAuU71f1UYm/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "An opening!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1ayM65_NQ6nWBxv7C-tw6Y2iw1x1Gzjep/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Sure about that?",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1TaHoogiKZtNaw2C855FlQ8a3ZuMoQxRz/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Huh?!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1LFGR0fChVuTTk0MOL82NMW2YPF7WEyxq/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Aghh?!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1vQf-vP0ESpuKlDtKnXsITkqVJcT7V53q/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Lady Alpha using a head butt?!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1TDosqTofOtYyXi08s7yKkNnfXZu0euqh/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "She intentionally hit her right eye... Well played...",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1klc2vziXlsNJRQRC_uEVaE63pnMO-tih/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Lady Karen knew about the slime sword's properties. She anticipated Lady Alpha would throw her sword and follow it with a melee attack.",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/12n081SNYqLY6towdcSOGDFgAqsoYz1CV/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "But Lady Alpha instantly picked up on Lady Karen's response, closed their distance past sword range, and countered with a close-quarter physical attack...",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1b6R1BAwfyIFmf9_TY7fBIFq8qt2i90it/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "When push comes to shove, even Lady Alpha can resort to close-quarter combat like Lady Delta, using brute force to overpower her opponent!",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1R3gIgV0REzbC7pi1q82DaoRfdgHnvMSu/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...The fight is over.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1as4H3SzZgXs-DfgL0DvHnNAN5zaN4Tc5/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/10zSm3L_O-WVMF9Cg_qOEAr6r4pNuyYdf/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "How did this happen?! I...was powerless!",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1g2VRhv3eDHNPUWDj9CTKSqNHFuCwYmHS/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "So long as you're \"Karen,\" you won't be able to defeat me, the other Seven Shadows, or even the Garden's Numbers.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1dIAk7xluNb-NYHGnThxin9si2l2kb0fo/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "This disparity in skill will make you face reality, as will our slime swords and slime suits...",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1ZlpLtLxO_iZ6G9sahNbMuJCXH-vDfRhP/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The Garden's swordsmanship utilizes not just blades but also fists, kicks, elbows, and knees as part of a comprehensive attack...",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1nQc6I2uIQyo1O7T8AJ0vrp1EkGX8MXs1/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "And we also have the power to heal the possessed, as we did with you...",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1MEMIoBzi03OvEMgqDFTX61wCK-W-Xcvk/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "All of this is due to the \"Shadow Wisdom,\" bestowed upon us by Shadow, the leader of the Shadow Garden.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1slvxRu84MDlz1iYssqo1nmyUa_Z9JBdb/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Shadow...!",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1H48z9nV2JEK9H8TBx9Y9Q2S6pD_Or2i2/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The Shadow Garden exists to carry out his will...by destroying the Cult of Diablos and restoring this world to its natural form.",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1tgVCAB_hncLqarOrzxZKzuE7m66EcS_M/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Lady Karen von Herzog. Discard your name, join the Shadow Garden, and pledge your allegiance to Shadow.",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1SSWmbW75JQxAZ1q1wzIk9rVbYPBMAyP1/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "For there is nothing left of what made you who you were.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1cSiAu_uhuzy_Ae6LOoQSqqG_YNXrVWnT/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/14dc6rS2LEgErF921whSwZn4acED4YK7Z/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "...Aah...",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1RNBpqw3l8XPObKjVRytnk1LYvcC2kH5A/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Uaaaaaagghh!!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1SyI_iLLfNTCrEC7ak5ZyK_Kl1TDI9ZTF/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Oh, now she's crying...",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/14nJFluBmPq5tF2q5B1MyTTrbjMJq5UFB/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Alpha really beat her through and through!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1IbPvsXMtcIj1_LtpH7ItSDLMyg-5y_Uu/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...But I think it was for the best.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1E7IwpiluVQAGuc8qnN3tZmGcvM-exuWK/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Lady Gamma...",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1tE-JiEgORnRk2cNMI-QQtDUWPqod09Lb/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "If you know there is something within you that you just can't let go of, and it's hindering you from progressing...",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1Oagt_52ZOUq61jQeJpmZ6L4FVCDSaHA9/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Then having someone else sever that connection you're clinging to can allow you to move forward...",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1txlDMKcHWaqMDHiEHeM5lu-C18CpkJnG/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Lambda. I leave the rest to you.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1oaYxR6hEwmzesYPgQaarBj57UB3V1GZf/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Sir! Yes sir! I'll start preparing immediately!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1wA8NO9rqyZg4Gk645skrvkTD2deu6--f/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Now get up, maggot! Your time as a guest is over!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1gzAVyi7SFcBLM4OtHfJXdEj580fbZ4p4/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "Agh!",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1xrfbDMDMC2b2enzKBySEYnxgEAk7D3R4/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "From now on, you're \"No. 111\"! Discard everything and become an honest soldier!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1_C4cH9iqmZQA3IDmDP0qRygRXhTWe_oJ/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "U-Understood... I haven't been treated like this since I was a Velgalta infantry trainee... How I've fallen...",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1rkNlBxHiKsNg8NhZ4YYsVVNIkZtcMZ0u/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "We'll see how long that attitude lasts. You'll come to realize your days as an infantry recruit were heaven compared to what's in store for you.",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1Xk0KjnuvQB3xbLLuY8cTRy3gphdDE566/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "After three days, you'll forget all about laughing and crying.",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1AhcOyHDJT5DffdMI-IoD9mPLmqTSi0yx/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "After a week, you'll likely regret having survived!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1MtrtmsUm-wDVAFb1rdfzQp_WcL_LLyW3/view?usp=drivesdk"
                },
                {
                    "name": "Chi",
                    "name_variant": "Karen",
                    "subtitle": "I... I have a bad feeling about this! What are you going to do to me?!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/116nwN60Jc2r8viNv1j2nXydNfbfRzFOZ/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...And so, this former Cult of Diablos leader joined the Shadow Garden...",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1PpTacEp1NHTLk0r71F0KT_9bE_91zI55/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Um...my lord. Did I read too much into it?",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1YW8-tkkf-Lrr4emagZo2yNAK0S-8aQkg/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "...",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1hOBaHRUO_A4aQBuzn02gQ67LrVU5EGrI/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Um... Beta... This is definitely, um, one of those classic cases of going overboard!)",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1fVIs7Jkn6MGesFxFnilwam9T-4hwiAnj/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Where delusions and storylines get all mixed up, making things more and more complex, resulting in a severe case of self-delusion where every idea turns into some kind of conspiracy theory!)",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1fS5KbekJ1fp4fVpBvAi1UNSSqRmYQT4o/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(How do you go from some random bandits falling out to it actually being an undercover infiltration mission? It's way too unrealistic!)",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1bG3cBf_CU5XKn5BAbyuPEtCPuWzSIZTG/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(It's only natural to panic and backpedal after things progress into such a grand spectacle epic saga with intricate storylines and foreshadowing!)",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1K0x5YeW3wa3eugwpvcnwvqf6eD1Zovw2/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(I mean, come on! The Shadow Garden's actual battles are really just against bandits and random armed groups!)",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1U6GUjhEBWVyinbbIikYKG8wrIJJlmaNU/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "...Beta.",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1zP7a4G72Xdf1UiRe-T-7S6DP2okN0NA9/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Yes!",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1HwqnvGo2JTee4gRKEMwNqR-I2R6ZYlAa/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Try to keep things simple.",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1fmgJ9pVuIfURxNt900kp8NtpW17doKal/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Simple, my lord?",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1aKImPwNAcadioIMwd3P29a2AM0Qg4x8A/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "That's right. Simple. It's essential to be straight-forward and keep to the basics, just like with my sword technique.",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1SUw2KEbdu1MXtOrVoer3T2swMcQeDnrV/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Well...aren't there two sides to every coin?",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1jJ836_Yxerjnv9837At4sO-lojR-jZQh/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "The reverse of tails is ultimately heads, and the reverse of heads is ultimately tails.",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1uWyw4SPj0qaZQW-yI8YEhFoN0kGSjc0L/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "In other words, no matter how much you overanalyze something, the outcome will always be one or the other. Either heads or tails...",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/16srJ0zMw9NJUfg3TAwofMFdC23xlpw9q/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "And yet, why try to see beyond the reverse of tails? Ultimately, it will still be heads or tails, nothing more.",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1iOJeHoI5ZhyWhWBdWe96hCisZapoLUKm/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Oh!",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/11IN9GsWqhz5sn5Gxafi8-h-7pj3CN9mT/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Isn't it nonsensical to needlessly complicate the interpretation of things and lose sight of their essence?",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/1gwQQYguGs0NdEI-nmc-4ugNhfddQ2Zz2/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...Tr-True!",
                    "line": 71,
                    "url": "https://drive.google.com/file/d/1FCSegobRBOlLDkvdZ-mrVH7Z9rG6U00G/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "To obtain closure, you can't obsess over something endlessly... It's essential to firmly draw the line at the initial point of division!",
                    "line": 72,
                    "url": "https://drive.google.com/file/d/1-YSta1CEFG0KqsOXz-dIluMKcfHXFXhA/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(I just blurted out a bunch of matter-of-fact lines to make it sound convincing, but it seems like she somehow managed to get my point.)",
                    "line": 73,
                    "url": "https://drive.google.com/file/d/11BKrl0jmVmvBP1G_2GJgNbV1pYwjhTU-/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(When self-delusions like this are left unchecked, they can become the \"I get it now... The world is... Magic is...\" sort of nonsense. And things start spiraling out of control in your head.)",
                    "line": 74,
                    "url": "https://drive.google.com/file/d/1f0x5Q-wTaq1Uwq3RBVoJr3HGoSNcmauy/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Yeah, I learned the hard way from my previous life before reincarnation. It's definitely worth avoiding certain thoughts!)",
                    "line": 75,
                    "url": "https://drive.google.com/file/d/16znv8yW4UmY1YY5JmNupDbTYM7NN_1Sn/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Ooh... I could even apply this when coming up with storylines for my novels!",
                    "line": 76,
                    "url": "https://drive.google.com/file/d/1hgiWmboeDFqx2CMTKje9vO8DS5is64Ju/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Exactly. Keep things simple, Beta.",
                    "line": 77,
                    "url": "https://drive.google.com/file/d/1M_BzzsCRK4dMfnu9myA7rgxsjai6E1oC/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Yes, my lord!",
                    "line": 78,
                    "url": "https://drive.google.com/file/d/199f37JEZ8JVZz_GwT7-o7desznAMFuzz/view?usp=drivesdk"
                }
            ]
        }
    }
}
//let setDoc = db.collection('data').doc('an_s1_e20').set(data['s1']);

let setDoc = db.collection('data').doc('ssc_p2_c2-5').set(data['p2']['c2-5']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
