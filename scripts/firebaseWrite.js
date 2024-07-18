const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "s1": {
        "e14": [
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "Are you so stupid that you don't know what's going on here?",
                "line": 1,
                "start_time": "0-00-02.040000",
                "end_time": "0-00-05.540000",
                "url": "https://drive.google.com/file/d/1Ng9Ge0MqDH63DzGt60bp5OTZyirSrU9U/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "We're trying to tell you that if you're a good boy and do what the grownups say,",
                "line": 2,
                "start_time": "0-00-05.670000",
                "end_time": "0-00-08.710000",
                "url": "https://drive.google.com/file/d/1eCQv9aslJpmXDFMFNK-Z0aV5L8OsGBYq/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "we'll let you go!",
                "line": 3,
                "start_time": "0-00-08.710000",
                "end_time": "0-00-09.920000",
                "url": "https://drive.google.com/file/d/1wYnsyV1VWxqlT2_yrovrw6M_rlxRgGrc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And I'm saying, I don't need your help.",
                "line": 4,
                "start_time": "0-00-09.920000",
                "end_time": "0-00-11.960000",
                "url": "https://drive.google.com/file/d/1KsHpxyCUgQg2tzSqAuUkcrNu_3Kz6yOS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Both of you, just watch.",
                "line": 5,
                "start_time": "0-00-11.960000",
                "end_time": "0-00-13.540000",
                "url": "https://drive.google.com/file/d/1i-pUiMdMdi6pFoZhYw8aA2JJzFbUyOfb/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Wait!",
                "line": 6,
                "start_time": "0-00-13.540000",
                "end_time": "0-00-14.540000",
                "url": "https://drive.google.com/file/d/1YGRjJAMx4I5amf7qbmfE01Nx4czf7tun/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "Fine then!",
                "line": 7,
                "start_time": "0-00-14.750000",
                "end_time": "0-00-15.960000",
                "url": "https://drive.google.com/file/d/1mCscDAF0xfNOmun3RlkRp76V8h2Tox5e/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "Kill him!",
                "line": 8,
                "start_time": "0-00-15.960000",
                "end_time": "0-00-18.170000",
                "url": "https://drive.google.com/file/d/1lvnKubIkWFQ_jQuoQ_SDit0rkvLwuowa/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Gotcha.",
                "line": 9,
                "start_time": "0-00-33.250000",
                "end_time": "0-00-34.630000",
                "url": "https://drive.google.com/file/d/1sNFnwKBaB4LNbhk41KeMhZJ-jmJqgmTA/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "How are you alive?",
                "line": 10,
                "start_time": "0-02-53.210000",
                "end_time": "0-02-54.420000",
                "url": "https://drive.google.com/file/d/1Im1_8uviLsOPBiHr948qdClk_L73biOG/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "She stabbed you through the gut!",
                "line": 11,
                "start_time": "0-02-54.420000",
                "end_time": "0-02-56.460000",
                "url": "https://drive.google.com/file/d/1zEsNrOreEA7ktd7fMx04C0TJDySbMfPs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "As long as you protect the vitals, the human body is surprisingly sturdy.",
                "line": 12,
                "start_time": "0-02-56.460000",
                "end_time": "0-03-00.040000",
                "url": "https://drive.google.com/file/d/10XpY-dCZRIyDY4qB2_Q-6m3quB3HAiDw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Even if you get stabbed through the gut,",
                "line": 13,
                "start_time": "0-03-00.420000",
                "end_time": "0-03-01.710000",
                "url": "https://drive.google.com/file/d/1qgT6-DpoE785Xh985U2QA3tVpK_B632e/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "keep your arteries and important organs safe, and it won't kill you.",
                "line": 14,
                "start_time": "0-03-01.710000",
                "end_time": "0-03-04.830000",
                "url": "https://drive.google.com/file/d/1_jhJNFE6H6J3dYfHr7xfTMKZvwtm2jeI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Don't you think that's just such a beautiful thing?",
                "line": 15,
                "start_time": "0-03-05.130000",
                "end_time": "0-03-07.920000",
                "url": "https://drive.google.com/file/d/1hcmSoBd4N2SDuQHkbJXj9wIZyXSMDnqT/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "Beautiful thing?",
                "line": 16,
                "start_time": "0-03-08.250000",
                "end_time": "0-03-10.830000",
                "url": "https://drive.google.com/file/d/1J1bB4JXqKR7pILNRvmerHyL_4X9fYlTh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yes!",
                "line": 17,
                "start_time": "0-03-10.830000",
                "end_time": "0-03-11.830000",
                "url": "https://drive.google.com/file/d/1syXmR8nwvkl6m3HMLbyAOJosRC-JH6aY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You just protect your vitals,",
                "line": 18,
                "start_time": "0-03-11.830000",
                "end_time": "0-03-13.040000",
                "url": "https://drive.google.com/file/d/1u8QRxJlFr4N5PMRTvDao9JgsAH-Hc0XT/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "and it saves you all the trouble of dodging your enemy's attack.",
                "line": 19,
                "start_time": "0-03-13.040000",
                "end_time": "0-03-15.500000",
                "url": "https://drive.google.com/file/d/1OY7AZnEO5BpMFQnaNV1ZnDuTOtkbJQgU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Then, once you've been impaled through the belly,",
                "line": 20,
                "start_time": "0-03-15.830000",
                "end_time": "0-03-17.460000",
                "url": "https://drive.google.com/file/d/1sRtdnNVHAI6fWytkPz9UL_wWu6-hSVL0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "you can bite right into the other guy's neck.",
                "line": 21,
                "start_time": "0-03-17.460000",
                "end_time": "0-03-19.130000",
                "url": "https://drive.google.com/file/d/1ML_K7MLos9Lg4TemQKsH68Nw8V05EuOi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You're in position for a nigh-inescapable counter attack.",
                "line": 22,
                "start_time": "0-03-19.130000",
                "end_time": "0-03-21.420000",
                "url": "https://drive.google.com/file/d/1SqyED1IlNPa4NmDHAs83G7IwF5iSbDps/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "Are you sure you're all right upstairs?",
                "line": 23,
                "start_time": "0-03-21.830000",
                "end_time": "0-03-24.830000",
                "url": "https://drive.google.com/file/d/11Z9r-XjGVf8xUymyfwLbUq0FlPsrXxyw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So now what?",
                "line": 24,
                "start_time": "0-03-24.830000",
                "end_time": "0-03-26.040000",
                "url": "https://drive.google.com/file/d/1k4zhAUZ036WYzjNRDVQu5QgonAIrgWNM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Your elf friend is gone.",
                "line": 25,
                "start_time": "0-03-26.250000",
                "end_time": "0-03-27.960000",
                "url": "https://drive.google.com/file/d/1Xz3ZkV3FfysfG4VlmLrFIsKEXTX9pOAO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Is it safe to assume I'll be fighting you next?",
                "line": 26,
                "start_time": "0-03-27.960000",
                "end_time": "0-03-30.130000",
                "url": "https://drive.google.com/file/d/1hGAjmfyLT4l5DuYAU84vzAyTkmtfdS1u/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "W-Wait!",
                "line": 27,
                "start_time": "0-03-30.330000",
                "end_time": "0-03-32.130000",
                "url": "https://drive.google.com/file/d/18ZxyEZFAVwpLE30d2BP4poXEHsf6Vuug/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "I give up!",
                "line": 28,
                "start_time": "0-03-32.130000",
                "end_time": "0-03-33.540000",
                "url": "https://drive.google.com/file/d/1C34jxD5DC4TeJ0ALfWLGZ3vxiYcKiycM/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "I was wrong!",
                "line": 29,
                "start_time": "0-03-33.540000",
                "end_time": "0-03-35.250000",
                "url": "https://drive.google.com/file/d/1O6aDqtrMQgQg2jayQUkjJZU55vTKnhsp/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "I'm sorry.",
                "line": 30,
                "start_time": "0-03-35.250000",
                "end_time": "0-03-36.290000",
                "url": "https://drive.google.com/file/d/1UkTpyLm9xoPZs_g5d9enMSX8Hr_2B3A7/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "Let's all just calm down, and we can talk it out.",
                "line": 31,
                "start_time": "0-03-36.290000",
                "end_time": "0-03-39",
                "url": "https://drive.google.com/file/d/1kJOS_97A-S1JJwVqiR2tv7bTq2GZz_PI/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "Is that what you thought I'd say?!",
                "line": 32,
                "start_time": "0-03-39.290000",
                "end_time": "0-03-41.330000",
                "url": "https://drive.google.com/file/d/1LCEnlNMPT9ztT8jihh4ATiUMnzbGHsMN/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "I admit, I was surprised to see Olivier defeated",
                "line": 33,
                "start_time": "0-03-42.960000",
                "end_time": "0-03-46",
                "url": "https://drive.google.com/file/d/149XOA4XX47ueUDYSMQa_peziGDip6VlV/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "by some punk kid who can't use his magic.",
                "line": 34,
                "start_time": "0-03-46",
                "end_time": "0-03-48.750000",
                "url": "https://drive.google.com/file/d/1aktqAX34tSgY8KRFbpZdFiUQ_P2usqsD/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "You were probably just lucky, but nevertheless, a win is a win.",
                "line": 35,
                "start_time": "0-03-48.750000",
                "end_time": "0-03-53",
                "url": "https://drive.google.com/file/d/1Y6PekpzcQb5wEbEQGSSzMRndm4AQQUrU/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "Congratulations!",
                "line": 36,
                "start_time": "0-03-53",
                "end_time": "0-03-54.630000",
                "url": "https://drive.google.com/file/d/1jYZt7DoLEnyOAQz02Js8GCIKiS1vld4x/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Thank you!",
                "line": 37,
                "start_time": "0-03-54.880000",
                "end_time": "0-03-56.330000",
                "url": "https://drive.google.com/file/d/1R9qsA0IvMiUWWzP4BGEYRSauUGUZwMIv/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "But all you did was beat one shoddy copy,",
                "line": 38,
                "start_time": "0-03-57.960000",
                "end_time": "0-04-01.960000",
                "url": "https://drive.google.com/file/d/1d0Jrag4sR1qSiMe_FxMNDjx6t-9LqVRU/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "so don't pat yourself on the back too hard just yet.",
                "line": 39,
                "start_time": "0-04-01.960000",
                "end_time": "0-04-03.830000",
                "url": "https://drive.google.com/file/d/1Z_u-3Cf3zV0V3YRW-oLWJZWNUKcIljdy/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "There is so much magical energy lying dormant in the Sanctuary",
                "line": 40,
                "start_time": "0-04-03.830000",
                "end_time": "0-04-06.750000",
                "url": "https://drive.google.com/file/d/1OZrbsbvSCx0frq0vC3_AmncEPZjzHYpf/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "that not even we can fathom it.",
                "line": 41,
                "start_time": "0-04-06.750000",
                "end_time": "0-04-08.290000",
                "url": "https://drive.google.com/file/d/1iQje-aAwVu9a30uOn0PuHxWoBKmsHOdx/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "That means we can even...",
                "line": 42,
                "start_time": "0-04-08.960000",
                "end_time": "0-04-11.040000",
                "url": "https://drive.google.com/file/d/18NIR2i-uuKXbo24SZ524beVqwqU66GM3/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "do this!",
                "line": 43,
                "start_time": "0-04-11.040000",
                "end_time": "0-04-12.960000",
                "url": "https://drive.google.com/file/d/1FIWHksXTljVQ_jIJW_wRpOnolATa086R/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "O-Oh no...",
                "line": 44,
                "start_time": "0-04-21.250000",
                "end_time": "0-04-22.250000",
                "url": "https://drive.google.com/file/d/1LfqPJPKoyPgtjhrliiwisB9U8YHRZAvx/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "This is the power of the Sanctuary!",
                "line": 45,
                "start_time": "0-04-24.710000",
                "end_time": "0-04-28",
                "url": "https://drive.google.com/file/d/1V-tT8bPd9sg0AZe7jE-Ktm2F7aO3aG0z/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "A resurrected superhuman army, eh?",
                "line": 46,
                "start_time": "0-04-30.290000",
                "end_time": "0-04-32.460000",
                "url": "https://drive.google.com/file/d/1YWtqLdVwySnB5tBzqVUpQ8pETDK6DfWe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Sorry...",
                "line": 47,
                "start_time": "0-04-34.630000",
                "end_time": "0-04-35.830000",
                "url": "https://drive.google.com/file/d/1AwwCrM4zQDsUUVK3hb9nWocCcdoPaRQL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "your time's up.",
                "line": 48,
                "start_time": "0-04-36.460000",
                "end_time": "0-04-38",
                "url": "https://drive.google.com/file/d/1PpUFOsjWM1Syyyed8sQMITFfgvtlU8rK/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "What...",
                "line": 49,
                "start_time": "0-04-53.830000",
                "end_time": "0-04-55.040000",
                "url": "https://drive.google.com/file/d/1JH7gxhDBF68ch3Rsfno4DW4OKIDwziTe/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "What is that?",
                "line": 50,
                "start_time": "0-04-55.040000",
                "end_time": "0-04-56.580000",
                "url": "https://drive.google.com/file/d/1GnCdtrmS-Vqb18oG4WxmWt7SVNqzaLDg/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "A solid mass of magical energy?",
                "line": 51,
                "start_time": "0-04-56.920000",
                "end_time": "0-04-58.960000",
                "url": "https://drive.google.com/file/d/1oGb291EX5OX-pBBR0MPhiT4Uqk40dqF6/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "An artifact?",
                "line": 52,
                "start_time": "0-04-58.960000",
                "end_time": "0-05-00.290000",
                "url": "https://drive.google.com/file/d/1CA5miPS5I9C6rT82bgTvTGDg5AZ8WgG8/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "No, don't tell me it's slime?",
                "line": 53,
                "start_time": "0-05-00.290000",
                "end_time": "0-05-03.750000",
                "url": "https://drive.google.com/file/d/1EB8oy87UWyLk2l5-KCYtVbPbdgj9j5Iz/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "But how?",
                "line": 54,
                "start_time": "0-05-04.130000",
                "end_time": "0-05-05.580000",
                "url": "https://drive.google.com/file/d/1hafUaitZUayvT0HaeyIcQBwutq3BOQRA/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "How can you use magic?",
                "line": 55,
                "start_time": "0-05-05.580000",
                "end_time": "0-05-07.830000",
                "url": "https://drive.google.com/file/d/1RBsjriZ6plFUltnRkyjb70eMbQU07Kmh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "If trying to use magic gets it absorbed,",
                "line": 56,
                "start_time": "0-05-08.710000",
                "end_time": "0-05-10.790000",
                "url": "https://drive.google.com/file/d/13n2ouoI-FRpBddpOnbzeWOGqP-I40XYj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "then I just have to temper the magic until it's too solid to be absorbed.",
                "line": 57,
                "start_time": "0-05-10.790000",
                "end_time": "0-05-13.540000",
                "url": "https://drive.google.com/file/d/1Fx6Apf68JxbOdKTVmcfzNnuq2ob00oOD/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It took a bit of time,",
                "line": 58,
                "start_time": "0-05-14.040000",
                "end_time": "0-05-15.750000",
                "url": "https://drive.google.com/file/d/1d9u4hu4Y55OCg35eJMcEfDQOfcGwdRFs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "but it's really quite simple.",
                "line": 59,
                "start_time": "0-05-15.750000",
                "end_time": "0-05-17.290000",
                "url": "https://drive.google.com/file/d/1cZs0pisYiz7HaIPC7bwSC-s0BeVdLLaG/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Simple?",
                "line": 60,
                "start_time": "0-05-18.130000",
                "end_time": "0-05-19.330000",
                "url": "https://drive.google.com/file/d/1XLEKIe8H65OH5ssgeoFJ9sm6Luq5Ds3c/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "But that's not possible for any human being!",
                "line": 61,
                "start_time": "0-05-20.040000",
                "end_time": "0-05-23.210000",
                "url": "https://drive.google.com/file/d/1zn2x9I2WEzViqJ-zg9CpG1T-cgTyN89r/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Olivier! Kill him now!",
                "line": 62,
                "start_time": "0-05-23.460000",
                "end_time": "0-05-27.080000",
                "url": "https://drive.google.com/file/d/17WuoQKxhTDgcIfxItS_njQf7FCUBPiit/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Your moves are even more tedious than before.",
                "line": 63,
                "start_time": "0-05-27.960000",
                "end_time": "0-05-29.880000",
                "url": "https://drive.google.com/file/d/1cWL2BIFiOyNI7UyKjB0bKnhYnDSXM4aE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It's like fighting a bunch of scarecrows.",
                "line": 64,
                "start_time": "0-05-29.880000",
                "end_time": "0-05-31.790000",
                "url": "https://drive.google.com/file/d/1wMUtRkyHILE30youlPKdoSoLTFhz_HU4/view?usp=drivesdk"
            },
            {
                "name": "Jack Nelson",
                "name_variant": "Jack Nelson",
                "subtitle": "Just like that! Kill him!",
                "line": 65,
                "start_time": "0-05-31.880000",
                "end_time": "0-05-34.380000",
                "url": "https://drive.google.com/file/d/1FjLK3EKXQeiTAGgdqa7lFLef9h7pO41B/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I guess playtime's over.",
                "line": 66,
                "start_time": "0-05-34.710000",
                "end_time": "0-05-36.420000",
                "url": "https://drive.google.com/file/d/1gYUEa6iy4I0x_WBltyvbk5Ausknn0QKm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "So you said we draw the holy sword,",
                "line": 67,
                "start_time": "0-05-37.250000",
                "end_time": "0-05-38.790000",
                "url": "https://drive.google.com/file/d/1CpOvG32tcKbtP_Uy8LosmMAFTtOLVsVq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "cut the chains, and destroy the magical core.",
                "line": 68,
                "start_time": "0-05-38.790000",
                "end_time": "0-05-41.830000",
                "url": "https://drive.google.com/file/d/1ywOcYOmnkNt-7fgOC3_O1whTLLlrimi5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Is that right?",
                "line": 69,
                "start_time": "0-05-41.830000",
                "end_time": "0-05-43.170000",
                "url": "https://drive.google.com/file/d/15KwqrxeoSaPPnN3_MYVT-c6ywDGS6-kT/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Um, yes...",
                "line": 70,
                "start_time": "0-05-43.750000",
                "end_time": "0-05-45.460000",
                "url": "https://drive.google.com/file/d/1qswOUqC8jvDZW6hhzb6akWiFo9317erN/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Wait, you're not going to...",
                "line": 71,
                "start_time": "0-05-46.920000",
                "end_time": "0-05-48.250000",
                "url": "https://drive.google.com/file/d/1q507Q_r60-dobkGEZsiSwL83p_DAaskN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "It's such a pain to go through each individual step.",
                "line": 72,
                "start_time": "0-05-48.250000",
                "end_time": "0-05-50.380000",
                "url": "https://drive.google.com/file/d/1M_eJNcgisMZe5tPdtWQ4YPHwZ74SbIQv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "We could just blast through all of them at once.",
                "line": 73,
                "start_time": "0-05-50.830000",
                "end_time": "0-05-53.170000",
                "url": "https://drive.google.com/file/d/13HHCx_SqbSn-LyLgklNwslCRialLKqHV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Same result, right?",
                "line": 74,
                "start_time": "0-05-53.750000",
                "end_time": "0-05-55.130000",
                "url": "https://drive.google.com/file/d/1b8_7mi8lAniCTlniL0y-_xUDxuX3VFio/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "How could anyone be allowed this much power?",
                "line": 75,
                "start_time": "0-06-06",
                "end_time": "0-06-09",
                "url": "https://drive.google.com/file/d/1lWSUUIkWyAhbbK2T9Y6BWt3DdTx-ZrOq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I am...",
                "line": 76,
                "start_time": "0-06-11.960000",
                "end_time": "0-06-15.170000",
                "url": "https://drive.google.com/file/d/1Qxa1vVTnEwOueh7tdByz-r6Zso0cxPFN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "...the All-Range...",
                "line": 77,
                "start_time": "0-06-16.500000",
                "end_time": "0-06-19.580000",
                "url": "https://drive.google.com/file/d/1lZZHlVNGo4MjfOxt7dErvXvlMylSyo_u/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "...Atomic.",
                "line": 78,
                "start_time": "0-06-26.790000",
                "end_time": "0-06-28.210000",
                "url": "https://drive.google.com/file/d/14F0zwO-qbdBihB_cJhu3eXxnZhhFAFGy/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "You even survived being stabbed through the heart.",
                "line": 79,
                "start_time": "0-08-02.750000",
                "end_time": "0-08-05.420000",
                "url": "https://drive.google.com/file/d/1aJOJxT5xxsYmqMVuiJAUw0N0gnxCBInR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Oh, I used magic to pull my heart over to the side.",
                "line": 80,
                "start_time": "0-08-05.710000",
                "end_time": "0-08-08.170000",
                "url": "https://drive.google.com/file/d/1bdkMvBuU6LTKys-XzhYXz6qAi40tj5LK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And now I'm extra tired.",
                "line": 81,
                "start_time": "0-08-08.880000",
                "end_time": "0-08-10.580000",
                "url": "https://drive.google.com/file/d/1C_oid9Sez7tMfLW8YtOVfNJAn0Kdpkxr/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "You're just full of surprises.",
                "line": 82,
                "start_time": "0-08-11.330000",
                "end_time": "0-08-12.960000",
                "url": "https://drive.google.com/file/d/1pjxOgN8Y5-aJ-1oFPIQZOJd4EVg7ZjBc/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I'm nowhere near as...",
                "line": 83,
                "start_time": "0-08-14.170000",
                "end_time": "0-08-15.920000",
                "url": "https://drive.google.com/file/d/1JiSFIhrq5wBBgf6UlGffe790sjTMJalG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You're disappearing?",
                "line": 84,
                "start_time": "0-08-20.170000",
                "end_time": "0-08-21.380000",
                "url": "https://drive.google.com/file/d/1J5zY1oXm47tjlFhJ6qHI1t6xnGNMymO_/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I suppose so.",
                "line": 85,
                "start_time": "0-08-23.500000",
                "end_time": "0-08-24.710000",
                "url": "https://drive.google.com/file/d/1_9YQTzReX1ibccd34kT6iMKW2uWylG1q/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I am the one who called you here.",
                "line": 86,
                "start_time": "0-08-29.420000",
                "end_time": "0-08-31.460000",
                "url": "https://drive.google.com/file/d/1XP48EqU1-5_rg65hUSL8N4k30r_B2VaI/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I'm sorry for lying to you.",
                "line": 87,
                "start_time": "0-08-31.790000",
                "end_time": "0-08-33.540000",
                "url": "https://drive.google.com/file/d/1kaAn_gtA4DebKuDVBMEjdp6xONrW2rFq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That's okay.",
                "line": 88,
                "start_time": "0-08-33.880000",
                "end_time": "0-08-35.080000",
                "url": "https://drive.google.com/file/d/1eHpcxlmCIG8yWVquodBbdaupJasV8xnx/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "That's not the only thing I lied about.",
                "line": 89,
                "start_time": "0-08-36.290000",
                "end_time": "0-08-38.330000",
                "url": "https://drive.google.com/file/d/1abJjYmp7yGQjt9GnHu9e627VA5nliZ5J/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That's okay.",
                "line": 90,
                "start_time": "0-08-38.540000",
                "end_time": "0-08-39.750000",
                "url": "https://drive.google.com/file/d/1nlIDo9TPbe2u7v4yktBA7Q72VYQpshJQ/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "For so long, all I wanted was to fade into nothing.",
                "line": 91,
                "start_time": "0-08-40.710000",
                "end_time": "0-08-44.080000",
                "url": "https://drive.google.com/file/d/11DXgY6h6Xc9w54l09nEQJKYUXRkyWNwL/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I wanted to forget everything.",
                "line": 92,
                "start_time": "0-08-44.750000",
                "end_time": "0-08-46.670000",
                "url": "https://drive.google.com/file/d/1kZV75Hr39u1gRXqL6SXWaW3eBFuqZby-/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "But now,",
                "line": 93,
                "start_time": "0-08-50.330000",
                "end_time": "0-08-51.580000",
                "url": "https://drive.google.com/file/d/1ETrPd6iXKrCYV6b_PZXT0yWg9beR2WjY/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I've made one memory that I don't want to forget.",
                "line": 94,
                "start_time": "0-08-51.580000",
                "end_time": "0-08-54.210000",
                "url": "https://drive.google.com/file/d/1VQKF6Bq8XD5jzG8ewSTWX1QRN0ykQTuN/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Even if I disappear,",
                "line": 95,
                "start_time": "0-08-55.080000",
                "end_time": "0-08-56.880000",
                "url": "https://drive.google.com/file/d/1IXrpk1YD--2WWTxwm97ntTF64_OJ_m4V/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "I want to hold on to this experience, and never let it go.",
                "line": 96,
                "start_time": "0-08-57.210000",
                "end_time": "0-08-59.750000",
                "url": "https://drive.google.com/file/d/1lYOOxpoC7aXfzO7DPsuUAbfsSHoM37l9/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Thank you for the precious memory.",
                "line": 97,
                "start_time": "0-09-01.790000",
                "end_time": "0-09-04.630000",
                "url": "https://drive.google.com/file/d/1evm7v_3fnDNDMhOUdL4XLjfRGzwrgIz6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I had a good time, too.",
                "line": 98,
                "start_time": "0-09-05.670000",
                "end_time": "0-09-07.130000",
                "url": "https://drive.google.com/file/d/1-oSZVU3uc7nLVGsBqwGixWxQ0y4SpP_P/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Thanks.",
                "line": 99,
                "start_time": "0-09-07.460000",
                "end_time": "0-09-08.670000",
                "url": "https://drive.google.com/file/d/1Gt_kvjQ_sWiG4I7ccm_FdLdI-zcN2qww/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "If you ever find the real me...",
                "line": 100,
                "start_time": "0-09-15.580000",
                "end_time": "0-09-19.380000",
                "url": "https://drive.google.com/file/d/1oZKX8o2GXWHC03Fzn9iGqSa7iBRsILjp/view?usp=drivesdk"
            },
            {
                "name": "Aurora",
                "name_variant": "Aurora",
                "subtitle": "Please...",
                "line": 101,
                "start_time": "0-09-20.380000",
                "end_time": "0-09-21.580000",
                "url": "https://drive.google.com/file/d/1rCgGUXQcGqPstlTHUwxSCPVzmlYvnmdx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Please?",
                "line": 102,
                "start_time": "0-09-45",
                "end_time": "0-09-46.210000",
                "url": "https://drive.google.com/file/d/1qH8bNrYt5bW4j7aZprAIELLKiOmmJDof/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "What we saw back there...",
                "line": 103,
                "start_time": "0-09-55.040000",
                "end_time": "0-09-56.580000",
                "url": "https://drive.google.com/file/d/1SsPkpWOtAHLWDaloxPCqfosoEuWmnuub/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "It was probably Shadow's...",
                "line": 104,
                "start_time": "0-09-57.210000",
                "end_time": "0-09-59.210000",
                "url": "https://drive.google.com/file/d/1CvG9JBI6Aun6Y3vGNf94w0imFbEpJv5P/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Alexia?",
                "line": 105,
                "start_time": "0-10-02.710000",
                "end_time": "0-10-03.960000",
                "url": "https://drive.google.com/file/d/1aSlVVDVXx0gdOvQ1hzlBSb3Oc-Ay_NKI/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Doesn't it just kill you?",
                "line": 106,
                "start_time": "0-10-05.330000",
                "end_time": "0-10-06.920000",
                "url": "https://drive.google.com/file/d/1K4koD5-9YyLuS4FXvpe6dbzs-eXyrn92/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Kill me?",
                "line": 107,
                "start_time": "0-10-07.250000",
                "end_time": "0-10-08.460000",
                "url": "https://drive.google.com/file/d/1SkaZNM3HSfDWF1ZRBCyBYCTK04rfTyI2/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "We couldn't do anything.",
                "line": 108,
                "start_time": "0-10-10.670000",
                "end_time": "0-10-12.830000",
                "url": "https://drive.google.com/file/d/1f7hIjvE46F49ccUtqgdMnWpVmUQLzv3a/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I thought I had accepted the fact that I'm powerless.",
                "line": 109,
                "start_time": "0-10-14.040000",
                "end_time": "0-10-16.630000",
                "url": "https://drive.google.com/file/d/1tfrA5Rprv4LJ7ooqCw2x7fRXCgbaMXZl/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "But there's more to it than that.",
                "line": 110,
                "start_time": "0-10-16.920000",
                "end_time": "0-10-18.500000",
                "url": "https://drive.google.com/file/d/1hJCnS5GW82wDMtmqiw7StA9s_f_Pl-ok/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Who was right and who was wrong?",
                "line": 111,
                "start_time": "0-10-18.750000",
                "end_time": "0-10-21.330000",
                "url": "https://drive.google.com/file/d/1-RbLFzF6M9EbI7u3BjRZfBJVRLyhlBS4/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I couldn't even judge between good and evil.",
                "line": 112,
                "start_time": "0-10-21.790000",
                "end_time": "0-10-24.210000",
                "url": "https://drive.google.com/file/d/1p8Wg-HCtRW0cIPrH7dELJcmil5sHyYnQ/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "All I could do was stand there as a helpless spectator.",
                "line": 113,
                "start_time": "0-10-24.210000",
                "end_time": "0-10-26.710000",
                "url": "https://drive.google.com/file/d/1qJyPOZGXIWrlpEmIBeF7rjfqmeoxCH5m/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "If things stay this way, if I never learn anything,",
                "line": 114,
                "start_time": "0-10-27.420000",
                "end_time": "0-10-29.630000",
                "url": "https://drive.google.com/file/d/1SlqfcDNRsyXwcpCHve20lgUqG5T8-YF9/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "then I'm going to lose all the things I care about before I even know they're in danger.",
                "line": 115,
                "start_time": "0-10-29.630000",
                "end_time": "0-10-32.540000",
                "url": "https://drive.google.com/file/d/1IWumi8Pj74IrENyVxTsLsrPIQ7_12XrC/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "That's the feeling I get.",
                "line": 116,
                "start_time": "0-10-33.040000",
                "end_time": "0-10-34.460000",
                "url": "https://drive.google.com/file/d/1cNnFSNwb-ieRIPs6kmyHovc0qs0wKwyU/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I've been thinking, too.",
                "line": 117,
                "start_time": "0-10-35.960000",
                "end_time": "0-10-37.830000",
                "url": "https://drive.google.com/file/d/1hi0K2J6kyfDNTjYn_jPJbmk6u7RwdtmX/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Ever since the Academy was attacked the other day,",
                "line": 118,
                "start_time": "0-10-38.630000",
                "end_time": "0-10-40.920000",
                "url": "https://drive.google.com/file/d/1Cl1NIG-mdr3fZGX8YKzwPGvdDRtx2u0J/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I've felt there are massive organizations working in the shadows.",
                "line": 119,
                "start_time": "0-10-40.920000",
                "end_time": "0-10-43.330000",
                "url": "https://drive.google.com/file/d/1XKIJ79rqrJI8h534hzIc8ywhKC05Ftad/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "But we don't know anything,",
                "line": 120,
                "start_time": "0-10-43.580000",
                "end_time": "0-10-46.080000",
                "url": "https://drive.google.com/file/d/1PvB4q4ZY-ssT-HEooCuB28O4AK9jeDKw/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "not about Shadow Garden, or about the organization they're at war with.",
                "line": 121,
                "start_time": "0-10-46.080000",
                "end_time": "0-10-49.790000",
                "url": "https://drive.google.com/file/d/1i9H1R5CpXKpXLApcfiCt4eI1F7hFXvxd/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "Then what are you going to do about it, Princess Alexia Midgar?",
                "line": 122,
                "start_time": "0-10-50.170000",
                "end_time": "0-10-53.920000",
                "url": "https://drive.google.com/file/d/1zOAVktHBlXtEacr7FH-irQBywZlom_-j/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "We're weak, and we're ignorant.",
                "line": 123,
                "start_time": "0-10-54.330000",
                "end_time": "0-10-56.420000",
                "url": "https://drive.google.com/file/d/1FyQ8eh6qa0FH_d1_Hz0HCiSUN9hRIeB0/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "But if the three of us work together, we should be able to do something.",
                "line": 124,
                "start_time": "0-10-57.290000",
                "end_time": "0-10-59.920000",
                "url": "https://drive.google.com/file/d/1Vxo3Jm14eatqE5sLG-kQGgsvOUbc3Lbt/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "After all, I'm the princess of the Midgar Kingdom,",
                "line": 125,
                "start_time": "0-11-00.250000",
                "end_time": "0-11-02.540000",
                "url": "https://drive.google.com/file/d/1y7JaNgzPCnXwd9IixXCMk7gOyGVFxg1g/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "and Rose is the princess of the Oriana Kingdom,",
                "line": 126,
                "start_time": "0-11-02.710000",
                "end_time": "0-11-05.250000",
                "url": "https://drive.google.com/file/d/1VcPU3yVh80txiZszrlY5PLC0Ouxlptlb/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "and you, Natsume Kafka.",
                "line": 127,
                "start_time": "0-11-05.420000",
                "end_time": "0-11-06.630000",
                "url": "https://drive.google.com/file/d/1UrDPnuOs6W2rTZf3vmIBNwTeFbOsL0pt/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "As an author, surely you have a network of connections you can use.",
                "line": 128,
                "start_time": "0-11-06.630000",
                "end_time": "0-11-09.670000",
                "url": "https://drive.google.com/file/d/1BIN8wV0NnLeic3hmKmjKrVYEu-H6PaW-/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "We'll work together to gather information.",
                "line": 129,
                "start_time": "0-11-10.330000",
                "end_time": "0-11-13.080000",
                "url": "https://drive.google.com/file/d/16FZpvlQbfrBFV_ohlfE8XwUHCQFsTlyY/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "And what will you do with the information you find?",
                "line": 130,
                "start_time": "0-11-13.080000",
                "end_time": "0-11-15.750000",
                "url": "https://drive.google.com/file/d/1GJn1MkrqYXGWdrV0wdoT0517bkYo-gHE/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "That depends on what it is.",
                "line": 131,
                "start_time": "0-11-16.250000",
                "end_time": "0-11-17.830000",
                "url": "https://drive.google.com/file/d/1aeB4eHeybbOyzbBKGMn2F4c-Mm_VXQGs/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "But I'm thinking maybe the three of us can join forces and fight back?",
                "line": 132,
                "start_time": "0-11-17.830000",
                "end_time": "0-11-20.540000",
                "url": "https://drive.google.com/file/d/1QVhuOQM4_OGljTd0FL8XAn-JJYS4uXDJ/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "We'll recruit allies, establish a base of operations...",
                "line": 133,
                "start_time": "0-11-20.960000",
                "end_time": "0-11-24.040000",
                "url": "https://drive.google.com/file/d/1tQQeZKil1P8ZGcQ-0vYJzFiZAL4ETzCq/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Would that work?",
                "line": 134,
                "start_time": "0-11-24.960000",
                "end_time": "0-11-26.210000",
                "url": "https://drive.google.com/file/d/1CTHOvb006FBO_MzV5WxREPe5K-EZL0W6/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "Not even a shred of a solid plan.",
                "line": 135,
                "start_time": "0-11-28",
                "end_time": "0-11-30.250000",
                "url": "https://drive.google.com/file/d/1o76HBS1gtrGLogKh_HFUe7r9sPtau4if/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Well, I said we'll gather information first!",
                "line": 136,
                "start_time": "0-11-30.630000",
                "end_time": "0-11-32.920000",
                "url": "https://drive.google.com/file/d/1iP8MXsY6ujV-HBmPnJ2RYi7WwNVGKy1W/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "We'll analyze it and then decide!",
                "line": 137,
                "start_time": "0-11-32.920000",
                "end_time": "0-11-35.330000",
                "url": "https://drive.google.com/file/d/1ztegSju64mm-l9qTH-JJOuM_xYuUxAR2/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "That would be nice, if you had the intellect to analyze anything.",
                "line": 138,
                "start_time": "0-11-35.630000",
                "end_time": "0-11-38.420000",
                "url": "https://drive.google.com/file/d/1A4ACyhprQ9oK6qCVowCnIicOq9Ig5olo/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Did you say something?",
                "line": 139,
                "start_time": "0-11-38.750000",
                "end_time": "0-11-40.210000",
                "url": "https://drive.google.com/file/d/1-xnXHgUHpaDvssgjWliHeEV8hn3dMSRQ/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "No, nothing at all.",
                "line": 140,
                "start_time": "0-11-40.210000",
                "end_time": "0-11-41.710000",
                "url": "https://drive.google.com/file/d/1Qv19Di8NKTQgCN5nkhOdX5EAvAIcdOe_/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "So what do you say?",
                "line": 141,
                "start_time": "0-11-42.290000",
                "end_time": "0-11-43.750000",
                "url": "https://drive.google.com/file/d/1s9OEJ5dNVaK1R0TVhOtTtw_84PcN_sID/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Are you with me, or aren't you?",
                "line": 142,
                "start_time": "0-11-43.750000",
                "end_time": "0-11-45.290000",
                "url": "https://drive.google.com/file/d/1IU-4cmZ-ruvv6xH6Lvl_wkv9godIxjZu/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I'll join you.",
                "line": 143,
                "start_time": "0-11-46.380000",
                "end_time": "0-11-47.630000",
                "url": "https://drive.google.com/file/d/1BkiL76U0g2bGiP6v7_U1MOaorNVU6XEe/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "I don't have much to offer,",
                "line": 144,
                "start_time": "0-11-47.630000",
                "end_time": "0-11-49.040000",
                "url": "https://drive.google.com/file/d/14OCSPdH3EQflUHnmdaSYNEElyMNezhpv/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "but I do have a bit of influence.",
                "line": 145,
                "start_time": "0-11-49.040000",
                "end_time": "0-11-50.580000",
                "url": "https://drive.google.com/file/d/16eRKLW1t5YQsmMocsx5iCPywsODqKvyi/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "I'm in, too.",
                "line": 146,
                "start_time": "0-11-50.580000",
                "end_time": "0-11-51.580000",
                "url": "https://drive.google.com/file/d/1aqjLcMp0H9YKTn8w7wH7DjtAPgi6Dc4h/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "I'll use my writing connections to do some research.",
                "line": 147,
                "start_time": "0-11-51.580000",
                "end_time": "0-11-54.080000",
                "url": "https://drive.google.com/file/d/1ZFc5PyRLYdvQgSqxhWl49AQaeyVclZ6V/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "That settles it.",
                "line": 148,
                "start_time": "0-11-57.380000",
                "end_time": "0-11-58.580000",
                "url": "https://drive.google.com/file/d/1JXzmsEXvcaN5zLAjZjmW-7K5y85orvB5/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "We're now officially a team.",
                "line": 149,
                "start_time": "0-12-00.040000",
                "end_time": "0-12-01.960000",
                "url": "https://drive.google.com/file/d/1TT6TXqRS8PDsOmfOvhXobmgsHXnmRwgw/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Even if one of us is from a different kingdom and social standing,",
                "line": 150,
                "start_time": "0-12-02.210000",
                "end_time": "0-12-04.330000",
                "url": "https://drive.google.com/file/d/1FrybyJBJkv2KetZxnf0cM-MfnydREJtP/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "and there's absolutely no telling what's going on deep in her heart,",
                "line": 151,
                "start_time": "0-12-04.330000",
                "end_time": "0-12-07.170000",
                "url": "https://drive.google.com/file/d/1xwQs8qQc-gEZARWARQ43YDuzda4tVSjD/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I choose to believe we're on the same side.",
                "line": 152,
                "start_time": "0-12-07.670000",
                "end_time": "0-12-09.670000",
                "url": "https://drive.google.com/file/d/1HmOFoZgfHxWUtLIYYzgGVrUhWm8zSKhW/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "Joining forces to expose the truth of the world...",
                "line": 153,
                "start_time": "0-12-10.250000",
                "end_time": "0-12-12.540000",
                "url": "https://drive.google.com/file/d/1r8B_eYHhArNyMGdH88blHjmoLuyEhwD0/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "It's like the start of a legend.",
                "line": 154,
                "start_time": "0-12-12.750000",
                "end_time": "0-12-14.670000",
                "url": "https://drive.google.com/file/d/1L8pbgRgmgmjs8G6sT3d2_rOVDN4QUqAD/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "We have the hero, the wise woman,",
                "line": 155,
                "start_time": "0-12-14.960000",
                "end_time": "0-12-16.500000",
                "url": "https://drive.google.com/file/d/1fBXsSeZ2JaeTW1So3Oz9gSXY-mYKthxr/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Natsume Kafka",
                "subtitle": "and the deadweight, all present and accounted for.",
                "line": 156,
                "start_time": "0-12-16.500000",
                "end_time": "0-12-18.880000",
                "url": "https://drive.google.com/file/d/1GRRRHP9MzXyPSOb-DlqgP8u8RXU08TRe/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "You're the deadweight, right?",
                "line": 157,
                "start_time": "0-12-19.630000",
                "end_time": "0-12-21.580000",
                "url": "https://drive.google.com/file/d/1xbHkVsr80DQgFRDPFzf7lZ4MbthH-WSU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "The Sanctuary has been obliterated.",
                "line": 158,
                "start_time": "0-12-28.960000",
                "end_time": "0-12-30.790000",
                "url": "https://drive.google.com/file/d/1gNhZc8PIMChk8_CQ3C94ytcQxmuUr8Jn/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes.",
                "line": 159,
                "start_time": "0-12-31.170000",
                "end_time": "0-12-32.170000",
                "url": "https://drive.google.com/file/d/1GCEeoXcSr1zCEwVza0stxRj8vU-I93Uk/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Has the holy sword been recovered?",
                "line": 160,
                "start_time": "0-12-32.630000",
                "end_time": "0-12-34.170000",
                "url": "https://drive.google.com/file/d/1kOYppwMjNd0ZjEmU4z76aR5IG7wVPRYI/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "The holy sword was vaporized.",
                "line": 161,
                "start_time": "0-12-34.170000",
                "end_time": "0-12-36.040000",
                "url": "https://drive.google.com/file/d/1KRA0_BCWE-qtX8Hs5IzBpDZflG7uGcHS/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Any samples from the magical core?",
                "line": 162,
                "start_time": "0-12-36.630000",
                "end_time": "0-12-38.500000",
                "url": "https://drive.google.com/file/d/1DjV-s8pwHLgYl9Q_P49diDuQY4lf-Otn/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Also vaporized.",
                "line": 163,
                "start_time": "0-12-38.960000",
                "end_time": "0-12-40.380000",
                "url": "https://drive.google.com/file/d/1rgI8u-eSyDCCAgQeupPJ78HCT-8UE9En/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "The simplest and most reliable solution to the matter.",
                "line": 164,
                "start_time": "0-12-41.130000",
                "end_time": "0-12-44.960000",
                "url": "https://drive.google.com/file/d/1nsWNrYHevAhZNHiAPtHIjzux7JshZaOt/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "That's so like him.",
                "line": 165,
                "start_time": "0-12-45.290000",
                "end_time": "0-12-46.500000",
                "url": "https://drive.google.com/file/d/1lsIgn-tLv3A5x_nHmKelWJvpGFef-uGX/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "After all, Lord Shadow is the only one who could have accomplished it.",
                "line": 166,
                "start_time": "0-12-46.830000",
                "end_time": "0-12-49.960000",
                "url": "https://drive.google.com/file/d/1ZUaZbjjke3Q-jMik9TnPm6WgtmIrh9V5/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "The path he treads is the path we walk, as well.",
                "line": 167,
                "start_time": "0-12-50.210000",
                "end_time": "0-12-54.830000",
                "url": "https://drive.google.com/file/d/1li4_Qd_gAEAMSn0uNj-RvkmXwtei3Ezb/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "And what of Beta?",
                "line": 168,
                "start_time": "0-12-55.880000",
                "end_time": "0-12-57.080000",
                "url": "https://drive.google.com/file/d/1MIYXcPUgFvHicyimDQzm_oGANIx0-t45/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "She is guiding the princesses.",
                "line": 169,
                "start_time": "0-12-57.080000",
                "end_time": "0-12-59.130000",
                "url": "https://drive.google.com/file/d/176Lu0K2-LDuAxd8zOWPDo8GsEKOrWW3Q/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "If she plays her cards right, she may be able to infiltrate their inner circles.",
                "line": 170,
                "start_time": "0-12-59.130000",
                "end_time": "0-13-01.630000",
                "url": "https://drive.google.com/file/d/1KG7rL6qve8hXbsu2gwTddD9BWze7AS6k/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Then it's going well?",
                "line": 171,
                "start_time": "0-13-01.630000",
                "end_time": "0-13-02.830000",
                "url": "https://drive.google.com/file/d/1TrDdpQv4_9lnC93EKUYEbtnShCGjrehQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes.",
                "line": 172,
                "start_time": "0-13-02.830000",
                "end_time": "0-13-03.830000",
                "url": "https://drive.google.com/file/d/1HAUuRDishDRazrm44btXzSSZuTl603WA/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Now, about the other matter...",
                "line": 173,
                "start_time": "0-13-04.040000",
                "end_time": "0-13-05.580000",
                "url": "https://drive.google.com/file/d/1e16hbCBBXb6EhIIHmof2WblE63Xo8a7h/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Go on.",
                "line": 174,
                "start_time": "0-13-05.710000",
                "end_time": "0-13-06.920000",
                "url": "https://drive.google.com/file/d/1KGu18Wsh1eF4uoJpqnAkxlAKAmHDV1Xt/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It appears our theory was correct.",
                "line": 175,
                "start_time": "0-13-06.920000",
                "end_time": "0-13-08.790000",
                "url": "https://drive.google.com/file/d/1D33cDIcqiLwfQXt_9604zDKTZU3r5fpR/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Aurora, the Witch of Calamity, has another name:",
                "line": 176,
                "start_time": "0-13-09.130000",
                "end_time": "0-13-12.210000",
                "url": "https://drive.google.com/file/d/1ja00PYE6HMye2HPRXY5SnH7PoA9hUBlk/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "the Demon Diablos.",
                "line": 177,
                "start_time": "0-13-12.540000",
                "end_time": "0-13-14.130000",
                "url": "https://drive.google.com/file/d/1B8j5696veaHdJVBIgHHa-A9yXcYOM-1i/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I see.",
                "line": 178,
                "start_time": "0-13-15.710000",
                "end_time": "0-13-16.710000",
                "url": "https://drive.google.com/file/d/1tOb2LGfikYog4NdTbBsMmT0xLtCIh5fj/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So that's why he...",
                "line": 179,
                "start_time": "0-13-16.920000",
                "end_time": "0-13-18.210000",
                "url": "https://drive.google.com/file/d/1ts4BnjAgrpNh7zUzz6prHoEaLzVyPuyC/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "The stage for our next performance will be the Royal Capital of Midgar.",
                "line": 180,
                "start_time": "0-13-19.380000",
                "end_time": "0-13-21.630000",
                "url": "https://drive.google.com/file/d/1uFBpWdfAK-R7Bgys5FBSTCvhgzNIk2dG/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Make sure to be ready.",
                "line": 181,
                "start_time": "0-13-21.630000",
                "end_time": "0-13-23.330000",
                "url": "https://drive.google.com/file/d/1VsSh74d7eNhYSpLzNj5af3pbYcicYG_u/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes!",
                "line": 182,
                "start_time": "0-13-23.540000",
                "end_time": "0-13-24.670000",
                "url": "https://drive.google.com/file/d/1wMBflnJKWeF66PYh2e2JdcEOB_FIDVQk/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Shall I report to Lord Shadow?",
                "line": 183,
                "start_time": "0-13-24.670000",
                "end_time": "0-13-26.080000",
                "url": "https://drive.google.com/file/d/1XZ3V_JdNG5c1nWwA5FeQLxW8TsM8uZG6/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No need.",
                "line": 184,
                "start_time": "0-13-26.080000",
                "end_time": "0-13-27.290000",
                "url": "https://drive.google.com/file/d/1fx5QsA3_gghbT9E3U4fcJWDW5Lq50VZ7/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "He knows everything.",
                "line": 185,
                "start_time": "0-13-27.290000",
                "end_time": "0-13-29.040000",
                "url": "https://drive.google.com/file/d/1LClo6vy87aPcZlgrIvh0NXBXz5ra0qUu/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "I personally recommend this property, Ms. Luna.",
                "line": 186,
                "start_time": "0-13-42.130000",
                "end_time": "0-13-45",
                "url": "https://drive.google.com/file/d/1-wnTGOVvaOKtQKNIuFE4L6lB4l6DO6m-/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "It faces out onto the main road,",
                "line": 187,
                "start_time": "0-13-45.710000",
                "end_time": "0-13-47.290000",
                "url": "https://drive.google.com/file/d/1NUIqwuN9eNdNUKaAyTkAZ_tyuA_nIgcb/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "it gets plenty of sunlight, and it boasts a wide frontage.",
                "line": 188,
                "start_time": "0-13-47.290000",
                "end_time": "0-13-49.580000",
                "url": "https://drive.google.com/file/d/1G6v5wDErYGD129kftIQp64wq55oaIZxk/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "Including the land, it's all worth 140 million zeni,",
                "line": 189,
                "start_time": "0-13-49.580000",
                "end_time": "0-13-52.460000",
                "url": "https://drive.google.com/file/d/1qzYHJ4SN7BQ_PwUSCwkFIF32cD0JU9Ld/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "but I will give you a special discount and let you have it for only 120 million.",
                "line": 190,
                "start_time": "0-13-52.460000",
                "end_time": "0-13-56.250000",
                "url": "https://drive.google.com/file/d/1iTK_ZdHKNEC8PtEptxRmsxZ4gn5Ic8Lu/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "We would very much love to have Mitsugoshi, Ltd.",
                "line": 191,
                "start_time": "0-13-56.250000",
                "end_time": "0-13-59.540000",
                "url": "https://drive.google.com/file/d/1mxv8mWBvhBHMfKTXQpkd7lLSuKs6Bkpi/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "open a second store here in the Velgalta Empire.",
                "line": 192,
                "start_time": "0-13-59.540000",
                "end_time": "0-14-02.170000",
                "url": "https://drive.google.com/file/d/1EFvI9yLItQxopIxzoTO5yk0hXm3ktuLS/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "I can see that.",
                "line": 193,
                "start_time": "0-14-02.670000",
                "end_time": "0-14-03.880000",
                "url": "https://drive.google.com/file/d/1MnoVo8-0-RHd8-xM16at_gpnaU8sVemr/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "But we do have to consider the reconstruction projects in the Sacred Land after that disaster...",
                "line": 194,
                "start_time": "0-14-04.040000",
                "end_time": "0-14-08.330000",
                "url": "https://drive.google.com/file/d/1RRLFeGHteMBRnNy2nc2j2_lgfw_ws6tw/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "But look at it! Prime property for only 120 million!",
                "line": 195,
                "start_time": "0-14-08.330000",
                "end_time": "0-14-11.920000",
                "url": "https://drive.google.com/file/d/1XWOZsqLJZtxKT4JkHuN7HD4NLpvGKrpG/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Yes, prime property, still on the market despite its exceptionally low price.",
                "line": 196,
                "start_time": "0-14-12.500000",
                "end_time": "0-14-16.960000",
                "url": "https://drive.google.com/file/d/1Uc8sgZFTUZVbxbW9WLnaxxroIeObOkDH/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "B-but that's only in the short term!",
                "line": 197,
                "start_time": "0-14-16.960000",
                "end_time": "0-14-20.710000",
                "url": "https://drive.google.com/file/d/1QufHZtHy0NZMI8WN-IusHY4Q3Wqrm7J0/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "All we need is for a shopping center like Mitsugoshi to open,",
                "line": 198,
                "start_time": "0-14-20.710000",
                "end_time": "0-14-23.170000",
                "url": "https://drive.google.com/file/d/1Vb1BE-yfrLOHr14FeqWw6Yr81irhQH4a/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "and the city of Madlid will thrive!",
                "line": 199,
                "start_time": "0-14-23.170000",
                "end_time": "0-14-25.420000",
                "url": "https://drive.google.com/file/d/1dKQKvMV37_D7EIDBMSXy7QnX4Bf6_2kw/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Even I've heard about the Mitsugoshi in the Velgalta Imperial Capital,",
                "line": 200,
                "start_time": "0-14-25.880000",
                "end_time": "0-14-28.750000",
                "url": "https://drive.google.com/file/d/1dqlfGfA2cMk9r0LpRCfjfTfMluRcm2Q5/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "and my humble domain is out in the middle of nowhere!",
                "line": 201,
                "start_time": "0-14-28.750000",
                "end_time": "0-14-32.040000",
                "url": "https://drive.google.com/file/d/1e1JqwPjF4vL1k5mYpF5lZagmsMIzGD50/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "We need a Mitsugoshi here in Madlid!",
                "line": 202,
                "start_time": "0-14-32.040000",
                "end_time": "0-14-35.330000",
                "url": "https://drive.google.com/file/d/1S7zizhKOBscNyw0EJksuVnkaIkKEt4uc/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Our future depends on it!",
                "line": 203,
                "start_time": "0-14-35.330000",
                "end_time": "0-14-36.540000",
                "url": "https://drive.google.com/file/d/1P1PRl1_u4UsuAFHf8X-DIzZ77aqkBwzi/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "Oh, I know! I'll make it a hundred million zeni!",
                "line": 204,
                "start_time": "0-14-36.710000",
                "end_time": "0-14-39.250000",
                "url": "https://drive.google.com/file/d/1tCSIEqIHSKIAeZcCbt1WXsRCwnSlaT9u/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "And I'll throw in priority use of the warehouses,",
                "line": 205,
                "start_time": "0-14-39.250000",
                "end_time": "0-14-41.170000",
                "url": "https://drive.google.com/file/d/16Hx3FJ-JbhrOIweM-il2NwOe7bcRM_hw/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "and temporary reduction measures on all forms of taxes.",
                "line": 206,
                "start_time": "0-14-41.170000",
                "end_time": "0-14-42.460000",
                "url": "https://drive.google.com/file/d/1B4u_ks-PHpOijIWjqVb5o8R4tFhTX3jO/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "The survey is complete",
                "line": 207,
                "start_time": "0-14-42.460000",
                "end_time": "0-14-43.670000",
                "url": "https://drive.google.com/file/d/1oHkHLiafLOEU87Sg15niV0sALnXz-3_l/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "and temporary reduction measures on all forms of taxes.",
                "line": 207,
                "start_time": "0-14-42.460000",
                "end_time": "0-14-43.670000",
                "url": "https://drive.google.com/file/d/1oHkHLiafLOEU87Sg15niV0sALnXz-3_l/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Conclusion",
                "line": 208,
                "start_time": "0-14-43.670000",
                "end_time": "0-14-45",
                "url": "https://drive.google.com/file/d/1R4bQXELSVAY7GXri-xe4CWyNqQjMHCpG/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "Of course, in the event that you choose to construct a storefront,",
                "line": 208,
                "start_time": "0-14-43.670000",
                "end_time": "0-14-45",
                "url": "https://drive.google.com/file/d/1R4bQXELSVAY7GXri-xe4CWyNqQjMHCpG/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "It will work",
                "line": 209,
                "start_time": "0-14-45",
                "end_time": "0-14-46.040000",
                "url": "https://drive.google.com/file/d/1gZGo7HykSU2dXklrxICrbtSwv_k5tQLk/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "Of course, in the event that you choose to construct a storefront,",
                "line": 209,
                "start_time": "0-14-45",
                "end_time": "0-14-46.040000",
                "url": "https://drive.google.com/file/d/1gZGo7HykSU2dXklrxICrbtSwv_k5tQLk/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "And the liquid",
                "line": 210,
                "start_time": "0-14-46.040000",
                "end_time": "0-14-47.250000",
                "url": "https://drive.google.com/file/d/1VnjSA_eGDCJAzRBd-cRB3MDN25ECRrAv/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "I'll rally my entire domain and make it our top priority.",
                "line": 210,
                "start_time": "0-14-46.040000",
                "end_time": "0-14-47.250000",
                "url": "https://drive.google.com/file/d/1VnjSA_eGDCJAzRBd-cRB3MDN25ECRrAv/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "No doubt about it",
                "line": 211,
                "start_time": "0-14-47.250000",
                "end_time": "0-14-48.670000",
                "url": "https://drive.google.com/file/d/1USTNiigrq1hVHW84XvA6pegXDKrxcNNQ/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "I'll rally my entire domain and make it our top priority.",
                "line": 211,
                "start_time": "0-14-47.250000",
                "end_time": "0-14-48.670000",
                "url": "https://drive.google.com/file/d/1USTNiigrq1hVHW84XvA6pegXDKrxcNNQ/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "The feudal lord committee has already authorized me",
                "line": 212,
                "start_time": "0-14-48.790000",
                "end_time": "0-14-49.290000",
                "url": "https://drive.google.com/file/d/1JJJ9eot-nJM-YzBW1FujehRgDw5wCyMe/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "It's petroleum",
                "line": 213,
                "start_time": "0-14-49.290000",
                "end_time": "0-14-50.750000",
                "url": "https://drive.google.com/file/d/1X-AKLsb43Q2-w0-bzfhE58aHxZry5421/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "The feudal lord committee has already authorized me",
                "line": 213,
                "start_time": "0-14-49.290000",
                "end_time": "0-14-50.750000",
                "url": "https://drive.google.com/file/d/1X-AKLsb43Q2-w0-bzfhE58aHxZry5421/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "to conscript the citizens for forced labor should you so desire.",
                "line": 214,
                "start_time": "0-14-50.750000",
                "end_time": "0-14-52.750000",
                "url": "https://drive.google.com/file/d/1HBCIy3C4PWimk36B5mpHHJ-LHO786kdE/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "So I humbly beg you! Please, turn our slum-",
                "line": 215,
                "start_time": "0-14-52.880000",
                "end_time": "0-14-54.750000",
                "url": "https://drive.google.com/file/d/1JO-qfX8opQRVKXzHHoG1BpBQK-oqJXam/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "I mean, our shopping district into-",
                "line": 216,
                "start_time": "0-14-54.750000",
                "end_time": "0-14-56.420000",
                "url": "https://drive.google.com/file/d/1I8OJ2N4mN4IvVXcKT3OIgC6guxPK3ePc/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "I'll take it.",
                "line": 217,
                "start_time": "0-14-56.420000",
                "end_time": "0-14-57.630000",
                "url": "https://drive.google.com/file/d/1_uzojw0x1PGIyzeGtXyP-s_prB36_NoP/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "Yes?",
                "line": 218,
                "start_time": "0-14-59.630000",
                "end_time": "0-15-00.630000",
                "url": "https://drive.google.com/file/d/1oX8OVWwjuE4Ey9kQA2KonbtdBYw0gn3m/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Our company will buy every property on this street.",
                "line": 219,
                "start_time": "0-15-00.630000",
                "end_time": "0-15-04.290000",
                "url": "https://drive.google.com/file/d/1BwWRS2pq7Hc9P8gja2e-S-wvCMc5dcKh/view?usp=drivesdk"
            },
            {
                "name": "Rude",
                "name_variant": "Rude",
                "subtitle": "I'm sorry, what did you say?",
                "line": 220,
                "start_time": "0-15-04.710000",
                "end_time": "0-15-07.330000",
                "url": "https://drive.google.com/file/d/18YBlB6LD3d2Y_v6CWwWWXOuDIvt6Ig8o/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "If you will accept our terms,",
                "line": 221,
                "start_time": "0-15-07.710000",
                "end_time": "0-15-09.960000",
                "url": "https://drive.google.com/file/d/13JecqUoiFW1uJyW2YDXN1O4JGBK6uz_4/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "then we will redevelop this city, and make it the greatest city in Velgalta.",
                "line": 222,
                "start_time": "0-15-09.960000",
                "end_time": "0-15-14.790000",
                "url": "https://drive.google.com/file/d/10LHlZW7t3VOL5yz8Nb9E1THoMvXZbvaj/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "That is what I said.",
                "line": 223,
                "start_time": "0-15-14.790000",
                "end_time": "0-15-16",
                "url": "https://drive.google.com/file/d/1DJW8edwz0Iu1trlyQflWBSdDGUC0XAu6/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Are you willing to expand the Nyle River's tributaries and build a canal?",
                "line": 224,
                "start_time": "0-15-16",
                "end_time": "0-15-20",
                "url": "https://drive.google.com/file/d/1jKPmWQ__dYnTlyDRx5y2kXm6LysDcXgU/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Buy up every notable property along the tributaries of the Nyle River.",
                "line": 225,
                "start_time": "0-15-20.790000",
                "end_time": "0-15-23.880000",
                "url": "https://drive.google.com/file/d/1T9TB9zMbvhHz0Piufd_Wu8k_-30MmHvz/view?usp=drivesdk"
            },
            {
                "name": "Mitsugoshi Staff",
                "name_variant": "Mitsugoshi Staff",
                "subtitle": "Right away!",
                "line": 226,
                "start_time": "0-15-23.880000",
                "end_time": "0-15-25.080000",
                "url": "https://drive.google.com/file/d/1czYR3V1qf-WaS6KM5QROnTyB6BvTszl6/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Get ready.",
                "line": 227,
                "start_time": "0-15-25.080000",
                "end_time": "0-15-26.290000",
                "url": "https://drive.google.com/file/d/1dpqe7mi7355fSaTZlQxbdbv_e4UgBLT0/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "It's time for the real estate bubble.",
                "line": 228,
                "start_time": "0-15-26.830000",
                "end_time": "0-15-28.580000",
                "url": "https://drive.google.com/file/d/1WrKA3lM_21XeOJgujlhgCN9c4rEWQrp4/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "That reminds me, where's Delta?",
                "line": 229,
                "start_time": "0-15-40.710000",
                "end_time": "0-15-42.130000",
                "url": "https://drive.google.com/file/d/1Sqrjp5QHg0IaZkCsm4YJGywIZS9XSPvx/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "She hasn't come back yet.",
                "line": 230,
                "start_time": "0-15-42.670000",
                "end_time": "0-15-44.500000",
                "url": "https://drive.google.com/file/d/11M9EJ1BGDn-ZHGdpt7XHf7U2Ws1mTT8j/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Do you think she's still in the Sacred Land?",
                "line": 231,
                "start_time": "0-15-45.130000",
                "end_time": "0-15-47.040000",
                "url": "https://drive.google.com/file/d/1eDEgnn3_YIPMhAS3fh2A64zFy7gSXtke/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Should we send someone to get her?",
                "line": 232,
                "start_time": "0-15-50.500000",
                "end_time": "0-15-52.460000",
                "url": "https://drive.google.com/file/d/14GY4jywusLQgmZRGEfqX1d5bP5x7Zy13/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I wouldn't worry about it. She'll be back when it gets cold.",
                "line": 233,
                "start_time": "0-15-52.830000",
                "end_time": "0-15-55.830000",
                "url": "https://drive.google.com/file/d/1s8YptZ2fTXOx3pTZiZmiWGAhjsGD3O_u/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What do you think?",
                "line": 234,
                "start_time": "0-16-10.580000",
                "end_time": "0-16-11.790000",
                "url": "https://drive.google.com/file/d/1soTcIWcuGsvgfzoJx6sZlkR5xFwxouz-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yeah...",
                "line": 235,
                "start_time": "0-16-11.790000",
                "end_time": "0-16-12.790000",
                "url": "https://drive.google.com/file/d/1vonHrbO4w5WMZ-KICUa2zSUllePzZuOh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "A very familiar architectural style, right here in another world.",
                "line": 236,
                "start_time": "0-16-13.330000",
                "end_time": "0-16-16.380000",
                "url": "https://drive.google.com/file/d/1cshVjoRhvXybpruK7GKcl0CMtqIRORNX/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Wood frame construction...",
                "line": 237,
                "start_time": "0-16-16.920000",
                "end_time": "0-16-18.170000",
                "url": "https://drive.google.com/file/d/1IPwyuxziw1K1ous4kUSRD5liUSOWee9C/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "We couldn't have done it without the building techniques you taught us.",
                "line": 238,
                "start_time": "0-16-18.380000",
                "end_time": "0-16-21.170000",
                "url": "https://drive.google.com/file/d/1d79pC0tCAExJHBgCLPaYHiZANXkEs6cc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Is that so...",
                "line": 239,
                "start_time": "0-16-21.630000",
                "end_time": "0-16-23.040000",
                "url": "https://drive.google.com/file/d/1wryfRVMTKXkP5zzSRr2X2caraaEPUtp0/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Our temporary base is complete.",
                "line": 240,
                "start_time": "0-16-23.670000",
                "end_time": "0-16-25.500000",
                "url": "https://drive.google.com/file/d/1YjRGifzwrQ4aZcQ1AF8R5NpjKmsBhDdf/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Now the girls can begin their training in earnest.",
                "line": 241,
                "start_time": "0-16-25.790000",
                "end_time": "0-16-29.040000",
                "url": "https://drive.google.com/file/d/1gkTVD1yEOM7J_LSDIZ1M8plZLyyKdA-2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "You're really going to train them, too?",
                "line": 242,
                "start_time": "0-16-29.830000",
                "end_time": "0-16-32.080000",
                "url": "https://drive.google.com/file/d/1kS22XMTwzc9V6oYHpql3Ql-orhW5lMWO/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, it's bound to be necessary.",
                "line": 243,
                "start_time": "0-16-32.460000",
                "end_time": "0-16-34.880000",
                "url": "https://drive.google.com/file/d/1EugseMz4g-knOCCaZwfrMhNZP376Z4SM/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "If we're going to fight the Cult of Diablos,",
                "line": 244,
                "start_time": "0-16-35.330000",
                "end_time": "0-16-37.580000",
                "url": "https://drive.google.com/file/d/1n3lD0iXpmA67095MvWzOETSJEjEhpLt2/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "we're going to need to enhance our individual strengths as we expand our operations.",
                "line": 245,
                "start_time": "0-16-37.580000",
                "end_time": "0-16-41.710000",
                "url": "https://drive.google.com/file/d/1xa-OUlaN1Zn1lc8e2MpC-pG0CeDiIpHj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yeah, I guess that is how the story would work.",
                "line": 246,
                "start_time": "0-16-42.290000",
                "end_time": "0-16-45",
                "url": "https://drive.google.com/file/d/1BmfhjKS6pAE1cZZ388diP_pgHlsGwu3f/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Besides, they want the power to fight against the cult.",
                "line": 247,
                "start_time": "0-16-45.170000",
                "end_time": "0-16-48.880000",
                "url": "https://drive.google.com/file/d/1C2EZJ8-DXZP2yNQEl6hK2c69dhvIxjEd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Really?",
                "line": 248,
                "start_time": "0-16-49.080000",
                "end_time": "0-16-50.290000",
                "url": "https://drive.google.com/file/d/1tUvGTqUymd56XipCqUfoR1h7_2YeXko2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Then allow me to impart a portion of my wisdom to them.",
                "line": 249,
                "start_time": "0-16-50.290000",
                "end_time": "0-16-53.130000",
                "url": "https://drive.google.com/file/d/1-CFvtaSXzsLsTIcVAb4w9t0VKTjJoaOA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I will give them the power to stay true to their convictions in the darkest of shadows.",
                "line": 250,
                "start_time": "0-16-53.500000",
                "end_time": "0-16-57.250000",
                "url": "https://drive.google.com/file/d/11GDS13ExfgvAlXfWB3k8H_7FRos4KvCQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "After all, kids living all on their own will at least need to know some self-defense techniques.",
                "line": 251,
                "start_time": "0-16-58.170000",
                "end_time": "0-17-02.500000",
                "url": "https://drive.google.com/file/d/1Jn4oiTPD7odtFkfUan6tMI_sTlqrcQhh/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Lady Alpha...",
                "line": 252,
                "start_time": "0-17-11.170000",
                "end_time": "0-17-12.380000",
                "url": "https://drive.google.com/file/d/1Cc6b6c2_RY916OVwsyAl8XPgov_r2VVs/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "We've received a message from the Oriana Kingdom.",
                "line": 253,
                "start_time": "0-17-13.790000",
                "end_time": "0-17-15.790000",
                "url": "https://drive.google.com/file/d/174qUaYelUNk89l-kip50kS0AYYE5baaV/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "They have informed us that the Royal Chancellor Perv Asshat",
                "line": 254,
                "start_time": "0-17-16.210000",
                "end_time": "0-17-18.380000",
                "url": "https://drive.google.com/file/d/1BDyXKvgvCvSWBhEwuL_Z5E2R6wioJj5y/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "has set out to visit the Royal Capital of Midgar.",
                "line": 255,
                "start_time": "0-17-18.380000",
                "end_time": "0-17-21.580000",
                "url": "https://drive.google.com/file/d/1wYc4DK1Rv0tYZLJ-x7P0yw5w2HFMLY_J/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Perv Asshat...",
                "line": 256,
                "start_time": "0-17-22.130000",
                "end_time": "0-17-23.580000",
                "url": "https://drive.google.com/file/d/1niGZPqVRC2UfVS9Gf_QpcJSJn6QUBL17/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So it begins.",
                "line": 257,
                "start_time": "0-17-25",
                "end_time": "0-17-26.290000",
                "url": "https://drive.google.com/file/d/1oGz5lpSl8vvkkuDyE1QxXmI1YkEdn3Hh/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Then it's true.",
                "line": 258,
                "start_time": "0-17-33.960000",
                "end_time": "0-17-35.250000",
                "url": "https://drive.google.com/file/d/1xnuBmMEN8F9v2EhqVGUxrCarOKz4tnUh/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Yes, we have no choice but to place the entire Church of the Divine Teachings under suspicion.",
                "line": 259,
                "start_time": "0-17-35.630000",
                "end_time": "0-17-39.460000",
                "url": "https://drive.google.com/file/d/1rpFeZxHqWG_vFf2GA7boLSDBTPQZold5/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "The murdered archbishop, the man who killed him and took his place as acting archbishop-",
                "line": 260,
                "start_time": "0-17-40.130000",
                "end_time": "0-17-44.170000",
                "url": "https://drive.google.com/file/d/1aIzut3Wkb_jpWSlGKALIdcAAewmUz4op/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "they both belonged to the Cult.",
                "line": 261,
                "start_time": "0-17-44.170000",
                "end_time": "0-17-46.170000",
                "url": "https://drive.google.com/file/d/15T7-bpcX34kDCI9IrqtQ6CTcYojqgA4x/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "But I don't know any more than that.",
                "line": 262,
                "start_time": "0-17-46.920000",
                "end_time": "0-17-48.830000",
                "url": "https://drive.google.com/file/d/1F6CJ630Lts3rCGJZSgwpZp99Yq9Qqqj3/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "The evidence has been covered up.",
                "line": 263,
                "start_time": "0-17-49.210000",
                "end_time": "0-17-50.750000",
                "url": "https://drive.google.com/file/d/1KIBsptRGlcB5WUM5pWmHNeHzfK8f7nZ-/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "And we can't even find a way to get back into the place they call the Sanctuary.",
                "line": 264,
                "start_time": "0-17-50.750000",
                "end_time": "0-17-54.960000",
                "url": "https://drive.google.com/file/d/1SpZ0GkYniQZNX-zUpFqBWQd7-9hUVST2/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "A facility of that size and scale",
                "line": 265,
                "start_time": "0-17-55.750000",
                "end_time": "0-17-57.540000",
                "url": "https://drive.google.com/file/d/1-d-aZFUH_SPs-rfNtbtfvLa_XBMSODZE/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "couldn't possibly be kept hidden without considerable influence in the public sphere.",
                "line": 266,
                "start_time": "0-17-57.540000",
                "end_time": "0-18-01",
                "url": "https://drive.google.com/file/d/1hKlmVbHCjNr5ZMDnGLqkBZcle-mD429c/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "And if we were looking for an organization that actually has that kind of power and influence...",
                "line": 267,
                "start_time": "0-18-01.460000",
                "end_time": "0-18-06.040000",
                "url": "https://drive.google.com/file/d/1d4rlMMHikbH4C0xnRVXyOQ9XZESGm8z7/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Forget diplomacy!",
                "line": 268,
                "start_time": "0-18-06.380000",
                "end_time": "0-18-07.580000",
                "url": "https://drive.google.com/file/d/1UxZbq7jCoaTYrnNPt97CtwZll6_53LPe/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "We need to investigate the Divine Teachings!",
                "line": 269,
                "start_time": "0-18-07.580000",
                "end_time": "0-18-09.500000",
                "url": "https://drive.google.com/file/d/1dkMcFdAHg4_xEm1RZv77vW7CEW5aHLY9/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "If we tie this to the incident at the capital and say we're trying to find the cause of it,",
                "line": 270,
                "start_time": "0-18-09.500000",
                "end_time": "0-18-12.790000",
                "url": "https://drive.google.com/file/d/1L9tGHd36v-7WyE6XSLbIVRO_2g2RcEoK/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "even they can't brush us off-",
                "line": 271,
                "start_time": "0-18-12.790000",
                "end_time": "0-18-14.130000",
                "url": "https://drive.google.com/file/d/19UoAoyRcr6XcIMZxWhJQTGJw0S6TMmCo/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I have suggested the same thing to Father-",
                "line": 272,
                "start_time": "0-18-14.500000",
                "end_time": "0-18-16.630000",
                "url": "https://drive.google.com/file/d/18AmvwNIH5wdvYcElJp3bAwYr3KCTGVrk/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I mean, His Majesty.",
                "line": 273,
                "start_time": "0-18-16.630000",
                "end_time": "0-18-18.500000",
                "url": "https://drive.google.com/file/d/1yjkBvjPrg1YfsZGGvuLUrUOe0uB2QXHf/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "But he always gives me the same answer: \"Don't make a move.\"",
                "line": 274,
                "start_time": "0-18-19.500000",
                "end_time": "0-18-22.420000",
                "url": "https://drive.google.com/file/d/1TfYAFVtstaXiEtsb7HsrEoZRa2iabu6b/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "What?",
                "line": 275,
                "start_time": "0-18-22.420000",
                "end_time": "0-18-23.630000",
                "url": "https://drive.google.com/file/d/10iUbxjSZwavl13VXREV-0qGfZMSezib9/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "It's what I expect from him and his \"don't rock the boat\" policies.",
                "line": 276,
                "start_time": "0-18-23.710000",
                "end_time": "0-18-26.040000",
                "url": "https://drive.google.com/file/d/1HMGN8Ri5yoleU08kKWH3WURLjmAPj7tA/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Considering the upcoming visit of King Oriana, ruler over one of our allied nations,",
                "line": 277,
                "start_time": "0-18-26.500000",
                "end_time": "0-18-30.380000",
                "url": "https://drive.google.com/file/d/1vesw9m5kqzHdQSX54dtrw9MN3VNS3sNb/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "he probably doesn't want to cause undue trouble, especially not against the Church.",
                "line": 278,
                "start_time": "0-18-30.380000",
                "end_time": "0-18-33.750000",
                "url": "https://drive.google.com/file/d/1pIJuI79BmeNDiownOEMSRgku2yOcrFrK/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Undue trouble?",
                "line": 279,
                "start_time": "0-18-34.420000",
                "end_time": "0-18-35.830000",
                "url": "https://drive.google.com/file/d/1o50Wk-CesNbOUv5SQYVapUDat9Qu8tc5/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "If we're going to spur him to action, we'll need to either find definitive evidence,",
                "line": 280,
                "start_time": "0-18-35.830000",
                "end_time": "0-18-39.420000",
                "url": "https://drive.google.com/file/d/1uFLzv7RFNqV4nJhk6ixJ6Py2c5yvHqNr/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "or show him that we have the power to overcome any difficulty that comes to the kingdom.",
                "line": 281,
                "start_time": "0-18-39.420000",
                "end_time": "0-18-43.920000",
                "url": "https://drive.google.com/file/d/1Ic_TBuAF5dERX7aOUGg8E0S15UDqkONC/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "In that sense, it's fortunate that the Bushin Festival is being held this year.",
                "line": 282,
                "start_time": "0-18-44.420000",
                "end_time": "0-18-48.880000",
                "url": "https://drive.google.com/file/d/1dU6PGP2qBVCvIjGS2vpByD2YrPcVpjQU/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "The Bushin Festival...",
                "line": 283,
                "start_time": "0-18-48.880000",
                "end_time": "0-18-50.210000",
                "url": "https://drive.google.com/file/d/1keN5Rvexa9hiIeKdbHfiNXZYQwCpHfor/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "The title of repeat winner of the Bushin Festival",
                "line": 284,
                "start_time": "0-18-50.710000",
                "end_time": "0-18-52.880000",
                "url": "https://drive.google.com/file/d/109HrHniGeFsCkzUqoHkQ7LgHfVJDHdEW/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "will be the best thing to win more backing from the Knight Order.",
                "line": 285,
                "start_time": "0-18-52.880000",
                "end_time": "0-18-55.880000",
                "url": "https://drive.google.com/file/d/1D-pGrUIEh-ivedtLuKDNi_qxdbCgnynx/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "And if I bring our nation the glory of victory in an international tournament,",
                "line": 286,
                "start_time": "0-18-56.420000",
                "end_time": "0-19-00.210000",
                "url": "https://drive.google.com/file/d/1i6skm_U8YoE6BAY97JIAT-w16pMhlL3_/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "then the people's support will be rock solid.",
                "line": 287,
                "start_time": "0-19-00.210000",
                "end_time": "0-19-02.460000",
                "url": "https://drive.google.com/file/d/1r_vdEjFDTIAeSjh6y8Jh8ASZ7QAHjhvH/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "And when that happens,",
                "line": 288,
                "start_time": "0-19-03",
                "end_time": "0-19-04.210000",
                "url": "https://drive.google.com/file/d/1nMPfGxQQHq0WkSomqLLCXXUudhm-v0Or/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "then His Majesty and his entire council will be forced to hear what I have to say.",
                "line": 289,
                "start_time": "0-19-04.210000",
                "end_time": "0-19-08.380000",
                "url": "https://drive.google.com/file/d/1jD4zccZEsdZEcHKNKu_tv5JO1UIzfEsS/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "But, Iris...",
                "line": 290,
                "start_time": "0-19-09",
                "end_time": "0-19-10.330000",
                "url": "https://drive.google.com/file/d/1h0GqLWqjsx-An3VUneA1ydhYzZIajvpn/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "what if Shadow Garden or the Cult of Diablos starts plotting something again?",
                "line": 291,
                "start_time": "0-19-10.630000",
                "end_time": "0-19-14.540000",
                "url": "https://drive.google.com/file/d/1MGhKWjJ4bZZOXwVZFlNgroudAzQ-7zWI/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "They have been operating behind the scenes at every major event.",
                "line": 292,
                "start_time": "0-19-15.540000",
                "end_time": "0-19-19.290000",
                "url": "https://drive.google.com/file/d/11OogwOamBao-W8Fn37_9Io5C6MWxiesI/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "They could be at the Bushin Festival, too.",
                "line": 293,
                "start_time": "0-19-19.710000",
                "end_time": "0-19-21.330000",
                "url": "https://drive.google.com/file/d/1VBkQkZl8ULS2hrDu7K6n_1GpCxxMjH2n/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Alexia...",
                "line": 294,
                "start_time": "0-19-21.330000",
                "end_time": "0-19-22.540000",
                "url": "https://drive.google.com/file/d/1_Jp4Z_qyNaa4mU-XhMNF90rqc6qhf9aO/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "You have nothing to worry about.",
                "line": 295,
                "start_time": "0-19-23.580000",
                "end_time": "0-19-25.330000",
                "url": "https://drive.google.com/file/d/1SJaRnyWr4Kiliq-z_zA2FBYlMlGO7z8_/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I don't care what kind of powerful artifacts they have at their disposal.",
                "line": 296,
                "start_time": "0-19-25.750000",
                "end_time": "0-19-29",
                "url": "https://drive.google.com/file/d/1ufCBSho8heZDSSiEUyCWgE2_yKPjfcGn/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "My sword will not be defeated.",
                "line": 297,
                "start_time": "0-19-29.710000",
                "end_time": "0-19-31.540000",
                "url": "https://drive.google.com/file/d/1QGVyJbB_EJYBVj56zIdukejLFDQO30Qv/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Iris, artifacts aren't the only weapons they have in their arsenal!",
                "line": 298,
                "start_time": "0-19-32.040000",
                "end_time": "0-19-35.420000",
                "url": "https://drive.google.com/file/d/150Igbidza4zwOGVosuj_q51hjsMxG4La/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "You were there, magical light engulfed the capital.",
                "line": 299,
                "start_time": "0-19-35.420000",
                "end_time": "0-19-37.630000",
                "url": "https://drive.google.com/file/d/1XAdyCAzThDWiwzymCyEdoW2Og3uq4nvz/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "You saw it.",
                "line": 300,
                "start_time": "0-19-37.630000",
                "end_time": "0-19-39.080000",
                "url": "https://drive.google.com/file/d/1CddQCoU_K6Yz9op5nmToQfdQIt2zgKmO/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "No human being can produce that kind of power.",
                "line": 301,
                "start_time": "0-19-40",
                "end_time": "0-19-42.250000",
                "url": "https://drive.google.com/file/d/1YjthCBtgqnHGw9AR3X1FmpvFSH9V6HAV/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "As with what happened at the Academy,",
                "line": 302,
                "start_time": "0-19-42.790000",
                "end_time": "0-19-44.460000",
                "url": "https://drive.google.com/file/d/1ECDBmtkR5HanKPFJAD7A7-ZZ1lmSZanF/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "the only explanation is that it was caused by an artifact housing enormous magical energy.",
                "line": 303,
                "start_time": "0-19-44.460000",
                "end_time": "0-19-48.330000",
                "url": "https://drive.google.com/file/d/1VZDGavB0C0LYpSM1pEQ84GIIwWPeATp6/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Iris, Shadow's power is..",
                "line": 304,
                "start_time": "0-19-48.920000",
                "end_time": "0-19-51.330000",
                "url": "https://drive.google.com/file/d/1QtG27Tv2T0UT5GBBLEmYRjL-LW6Q5qTF/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Besides, I saw it.",
                "line": 305,
                "start_time": "0-19-51.330000",
                "end_time": "0-19-53.170000",
                "url": "https://drive.google.com/file/d/10FUkpUqdwQpb3zy7mQz4Ph6qpNd4nHlN/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I saw them sending an artifact out of control.",
                "line": 306,
                "start_time": "0-19-53.750000",
                "end_time": "0-19-56.830000",
                "url": "https://drive.google.com/file/d/1__v2gd26N6i6fcKtBl8fXnGX3I6jYUSJ/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Yes, I saw it.",
                "line": 307,
                "start_time": "0-19-57.830000",
                "end_time": "0-19-59.960000",
                "url": "https://drive.google.com/file/d/1k3SkzmeHax13F6JamWXeqcC9-BQOp6Rc/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Iris...",
                "line": 308,
                "start_time": "0-20-02.750000",
                "end_time": "0-20-03.750000",
                "url": "https://drive.google.com/file/d/11uMiunRebgIkPVeT8VQm5Q5un69l4w9C/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Either way, I cannot run from this.",
                "line": 309,
                "start_time": "0-20-04.500000",
                "end_time": "0-20-06.710000",
                "url": "https://drive.google.com/file/d/19BRj_1y9wWG6DsD5E_g3YXGdhDtdhfJK/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "If they appear at the Bushin Festival, we merely have to defeat them:",
                "line": 310,
                "start_time": "0-20-07.540000",
                "end_time": "0-20-11",
                "url": "https://drive.google.com/file/d/1HcC784xFA5SLprWwh507_8zp9eXrkbc1/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "the Cult, and Shadow Garden.",
                "line": 311,
                "start_time": "0-20-11",
                "end_time": "0-20-13.710000",
                "url": "https://drive.google.com/file/d/17H7P4Gvshm-tIcc_MkvfhTr2QeWx8fNR/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "By the way, Alexia.",
                "line": 312,
                "start_time": "0-20-16.170000",
                "end_time": "0-20-17.540000",
                "url": "https://drive.google.com/file/d/1RiUG17BjumuTQ_-VMY281NfBpe6vsiE6/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Might I ask why you went after them in the Sacred Land?",
                "line": 313,
                "start_time": "0-20-17.790000",
                "end_time": "0-20-20.460000",
                "url": "https://drive.google.com/file/d/12WySfRrOX-F0HbuRVbOH42c04tBrt2r0/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I only authorized you to audit the archbishop.",
                "line": 314,
                "start_time": "0-20-21.170000",
                "end_time": "0-20-23.710000",
                "url": "https://drive.google.com/file/d/1ErvsXVePJPPB6CbPeIBXaKhJNGBQeuf_/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Nothing else.",
                "line": 315,
                "start_time": "0-20-23.710000",
                "end_time": "0-20-25",
                "url": "https://drive.google.com/file/d/10pzNJ7q7b-coXHrNf_LwlSnL0NuegZxV/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "When did I tell you to follow a suspicious organization and barge into questionable locations?",
                "line": 316,
                "start_time": "0-20-25.210000",
                "end_time": "0-20-30.380000",
                "url": "https://drive.google.com/file/d/1ax_d0TMA0HCH7EeiuddcZHe4IoqRajcZ/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "W-well, I didn't exactly follow them because I wanted to.",
                "line": 317,
                "start_time": "0-20-30.710000",
                "end_time": "0-20-34.460000",
                "url": "https://drive.google.com/file/d/1jiDra6OdErhapvQ095nHcJPe9JIdjn3z/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "It was an emergency evacuation, or...",
                "line": 318,
                "start_time": "0-20-35",
                "end_time": "0-20-36.920000",
                "url": "https://drive.google.com/file/d/1lztVo7twL3f4alaNWmJmInc-5d2_06OC/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Willful negligence...",
                "line": 319,
                "start_time": "0-20-37.170000",
                "end_time": "0-20-39",
                "url": "https://drive.google.com/file/d/1STu5bVjl0jNuCUZXEEwT9sXj7nesVEpI/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Oops! I think I'm getting lightheaded!",
                "line": 320,
                "start_time": "0-20-39.630000",
                "end_time": "0-20-41.420000",
                "url": "https://drive.google.com/file/d/1MOyNOo62VeSYCIncoh6Ua8TVKzmsiS2x/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I'm off to the cold water bath!",
                "line": 321,
                "start_time": "0-20-41.420000",
                "end_time": "0-20-43.080000",
                "url": "https://drive.google.com/file/d/1brQU75slU_kFLePkDt0scqnAnEf4klRk/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "My Crimson Knights lost their strongest members so soon after they were organized,",
                "line": 322,
                "start_time": "0-20-47.880000",
                "end_time": "0-20-51.500000",
                "url": "https://drive.google.com/file/d/1zcaZ8e-uy5dTRtow0Y_cGmWkHVJklwoz/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "and I see no hope of rebuilding.",
                "line": 323,
                "start_time": "0-20-51.500000",
                "end_time": "0-20-53.130000",
                "url": "https://drive.google.com/file/d/16QK3K3Yp8_aT4G9oOd0M3dWnORoGz4lg/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "The Knight Order used to give me their support,",
                "line": 324,
                "start_time": "0-20-53.790000",
                "end_time": "0-20-56.290000",
                "url": "https://drive.google.com/file/d/1py4qGYGJNtOUrN4gY_XEmY47ODHKbVMl/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "but even they are skeptical of me now.",
                "line": 325,
                "start_time": "0-20-56.290000",
                "end_time": "0-20-58",
                "url": "https://drive.google.com/file/d/1d7SD7VuWKQ9LHsK_zwDgBYNnp-nPXkBe/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I insisted on taking their best knights and then just let them die.",
                "line": 326,
                "start_time": "0-20-58.880000",
                "end_time": "0-21-02.710000",
                "url": "https://drive.google.com/file/d/1aQs-xNTS_60UiU7mzKpwx1diwrVw_DFY/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Of course they hate me.",
                "line": 327,
                "start_time": "0-21-03.040000",
                "end_time": "0-21-04.250000",
                "url": "https://drive.google.com/file/d/16dZkHTcl3RbdyUDIYWuWdZjvpFSsPyot/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I have to win the tournament.",
                "line": 328,
                "start_time": "0-21-05.080000",
                "end_time": "0-21-06.500000",
                "url": "https://drive.google.com/file/d/1C2q7SJ2zK8stE-v-BfeB67V2W2ZiVPoW/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "I'll show them my power and cut open a path.",
                "line": 329,
                "start_time": "0-21-06.960000",
                "end_time": "0-21-09.540000",
                "url": "https://drive.google.com/file/d/1sz-wUHxf7itQwBKZowiWfjUTKTBN8FVd/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "Just like before.",
                "line": 330,
                "start_time": "0-21-09.880000",
                "end_time": "0-21-11.170000",
                "url": "https://drive.google.com/file/d/11HUZILFULZfQKnvV0z5qNrc7HdJ9g1lW/view?usp=drivesdk"
            },
            {
                "name": "Iris Midgar",
                "name_variant": "Iris Midgar",
                "subtitle": "It's my only choice.",
                "line": 331,
                "start_time": "0-21-11.580000",
                "end_time": "0-21-12.750000",
                "url": "https://drive.google.com/file/d/1_CJoTu9kBLq1zrszQZF57kvbI_cd_KWL/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "No...",
                "line": 332,
                "start_time": "0-21-42.290000",
                "end_time": "0-21-43.290000",
                "url": "https://drive.google.com/file/d/1CqxJMijOAOqdXBG059WzRpCZJEH-CeYX/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "His fencing that day...",
                "line": 333,
                "start_time": "0-21-44.040000",
                "end_time": "0-21-45.460000",
                "url": "https://drive.google.com/file/d/1hOdPin4LWQTXFIASrj27FRxJYvEX7IP1/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "Rose Oriana",
                "subtitle": "That beautiful fencing...",
                "line": 334,
                "start_time": "0-21-47.210000",
                "end_time": "0-21-49.210000",
                "url": "https://drive.google.com/file/d/1mQwOSw0067gsUXFLD585bS-aQ4rnzc4n/view?usp=drivesdk"
            }
        ]
    }
}
let setDoc = db.collection('data').doc('an_s1_e14').set(data['s1']);

//let setDoc = db.collection('data').doc('ssc_p2_c3-4').set(data['p3']['c3-4']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
