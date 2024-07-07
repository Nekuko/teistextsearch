const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "bmsv": {
        "e1": [
            {
                "name": "",
                "name_variant": "",
                "subtitle": "One winter day, Lambda is summoned by Alpha and heads to her office...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1n9uO9_5clPzX8sZRqcQjKeHEZDmIjSn2/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Lady Alpha, I heard you wanted to talk... Is there a problem?",
                "line": 2,
                "url": "https://drive.google.com/file/d/1R2j_8MZgeFzYl7-wXchHT1YBELUV3FWe/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Well, yes... If you can call it that...",
                "line": 3,
                "url": "https://drive.google.com/file/d/1ce77qXhsYW0Z6uBAMojoXChJ_Pwz54E2/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "(It's rare to see Lady Alpha so hesitant... The situation must be quite bad.)",
                "line": 4,
                "url": "https://drive.google.com/file/d/15o1NGrjQv8XrcLPPdK3YbFE0XLvCoDcz/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "(...All the more reason to hear what she has to say. That's my role...as one of the Numbers.)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1cJ6X9yA5SlphLU8E7g2QwWQAIdK47BxI/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Lady Alpha, please tell me anything. I promise to accept whatever the situation is.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1abkFrq1mFdBA1fX9Qr7_h--P4pZtQlEM/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Thank you. I feel you're the only one I can talk to about this.",
                "line": 7,
                "url": "https://drive.google.com/file/d/10gfbnINHtmVFsY0ZM8DeCH5U26EAugtn/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Listen. The thing is...",
                "line": 8,
                "url": "https://drive.google.com/file/d/11Ql0jRwkkd5d2sBKLEuCphPcmx7piIHm/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "*sigh* It's the Valentine season... No wonder it smells so sweet everywhere.",
                "line": 9,
                "url": "https://drive.google.com/file/d/16eQfnBJd6occx15nfpqFDHdRjy87unpy/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Says the one who's been eating chocolates. Aren't those leftovers from Mitsugoshi? Did you secretly take them...?",
                "line": 10,
                "url": "https://drive.google.com/file/d/1JvFi3zBOfY139lxbCagppWHjidXM1uFJ/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Managing stock is an important part of my job. Ah, busy, busy.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1y205g5CPyaEwMs378r4mBwP9kBrBSnq0/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Jeez, what a convenient excuse.",
                "line": 12,
                "url": "https://drive.google.com/file/d/12whQ8_4tM7bryKlwYfK7KG_FzWIlA-xV/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "...Oh, look who's here already.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1nbvT9p86f9ltsYTAUm80owwY8HvyQnxu/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Oh, Nu. Did you finish your mission?",
                "line": 14,
                "url": "https://drive.google.com/file/d/12xszqrqXec-dkqKFloGBcxTKpd6BCAB4/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Yes, I just finished reporting. ...Omega. Those chocolates you have...",
                "line": 15,
                "url": "https://drive.google.com/file/d/138orvDwAiIN7r0c5st5joSrGiIqbcNa0/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "I'm in the middle of stock disposal. We're helping Mitsugoshi today.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1V43dtbe8w0sacs-biv0FmzVjUeqi-OZx/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "I see... You must have been busy due to the Valentine season, huh?",
                "line": 17,
                "url": "https://drive.google.com/file/d/18TnDW2ywJxXZLZEtBOm8TAE4xLl2MVqA/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Yeah, absolutely. Lately, Valentine's Day has taken hold among the aristocrats. Thanks to that, Mitsugoshi's sales are sky-rocketing...",
                "line": 18,
                "url": "https://drive.google.com/file/d/1ItubhYCN6nu8a9T31rniWFyXK8k3itA0/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Even us Numbers are being pulled in as shop staff.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1JsUCPZVK4b89Uxc3RZx--Xfi5Qv9mvlI/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Sales are a source of funds for the Shadow Garden. We can't neglect it.",
                "line": 20,
                "url": "https://drive.google.com/file/d/192YfeK9pT_RZqoJxfPu8dy84GgFtPBJ5/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "All for the customers\u2014a noble cause.",
                "line": 21,
                "url": "https://drive.google.com/file/d/183rFzwmgieZRl3JtGAdhWj1X5OgStTMI/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "You say that sarcastically, but you seemed really keen on listening to the customers' concerns.",
                "line": 22,
                "url": "https://drive.google.com/file/d/13h909ojdTGiCqqjZ3nzzgqcpfD_rg-OR/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "That's...because Lady Gamma instructed us to be courteous to the customers\u2014",
                "line": 23,
                "url": "https://drive.google.com/file/d/1sq4PNtRzckYw6opSNj_z-3IMxBGH1J1X/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...",
                "line": 24,
                "url": "https://drive.google.com/file/d/1hztEn8tbTHhRMn2bggrbX7c4oFgXaJZQ/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Oh, if it isn't Instructor Lambda. It's rare to see you here.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1BkrUCzCAkX2XvarMUJQKMpM_t_d8-L19/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "*sigh*",
                "line": 26,
                "url": "https://drive.google.com/file/d/1HPNgYeNbpJ8yDEi23qDz5Yf49W-qTr43/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "You look pretty tired. Did something happen?",
                "line": 27,
                "url": "https://drive.google.com/file/d/16zGWDWn0RFUV0ycAz3WZacGau1S1LiTu/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "It's not something I can casually talk about.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1iYOa0AQzrCt7JOG8sEUz5RCxRstakI67/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Classified, huh?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1fiaq9AprKLb0JSf1ymcCu953X9xzhY5B/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "No, it's not like that...",
                "line": 30,
                "url": "https://drive.google.com/file/d/189FM2fiqDh2oOkPrdWvGelw-3DK_RVe-/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Then why not talk to someone about it? If it's worrying you this much, it might be a problem you can't solve alone.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1nPhSi7Gb06nlLBqI0N3YKzWiKAa4ZxVU/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Hmm... You may be right...",
                "line": 32,
                "url": "https://drive.google.com/file/d/1VxbHOLWwIkRW31umgMHxq65rQYq96wcz/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "You're unusually hesitant. Since it's this time of the year, is it about how to give chocolates or something?",
                "line": 33,
                "url": "https://drive.google.com/file/d/1zAq1t3XJfOoSOiEVk_iRF62abjV_iN4x/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Hey, now isn't the time for joking around\u2014",
                "line": 34,
                "url": "https://drive.google.com/file/d/1rBX1F0L8BUblYf5kZn6bOYnS_r_xoRCK/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Omega's right.",
                "line": 35,
                "url": "https://drive.google.com/file/d/11MFqby_lNMRtWI9BntJ_VBStNh_fi7AQ/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi & Omega (Chi)",
                "subtitle": "Huh?",
                "line": 36,
                "url": "https://drive.google.com/file/d/1lNJCzu_rVT7sd88LLx0K038c97JQSlb9/view?usp=drivesdk"
            },
                        {
                "name": "Omega",
                "name_variant": "Chi & Omega (Omega)",
                "subtitle": "Huh?",
                "line": 36,
                "url": "https://drive.google.com/file/d/1lNJCzu_rVT7sd88LLx0K038c97JQSlb9/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "L-Lambda, you have someone like that in your life...?!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1vr7RavEZNDFE_yJKtqLBKQiS6c564GY_/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "N-No, calm down... Maybe it's just chocolates for a friend or something\u2014",
                "line": 38,
                "url": "https://drive.google.com/file/d/1yNVSwJ_t0Xr-AuuR5zuXuoc5bwkSWhSX/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Even that would be a rarity... What is going on...?",
                "line": 39,
                "url": "https://drive.google.com/file/d/1TPJFg3DwrfGj1I4h909hvnyXbz2VHFih/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Don't misunderstand me. It's not about me.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1rmWezHySFODBAcU29KL_cSgMhIEZnJBJ/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...It's about Lady Alpha.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1RYqeGzZhZUOIiYRtUTD9Ta2j4wADFjMr/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi & Omega (Chi)",
                "subtitle": "...Lady Alpha?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1_x_BgEdSCJX78t8oEkqHCY9M9w1xTuT6/view?usp=drivesdk"
            },
                        {
                "name": "Omega",
                "name_variant": "Chi & Omega (Omega)",
                "subtitle": "...Lady Alpha?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1_x_BgEdSCJX78t8oEkqHCY9M9w1xTuT6/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Lady Alpha and chocolates...? I don't see the connection.",
                "line": 43,
                "url": "https://drive.google.com/file/d/11-Lg0IXO-IBBex4QRvp-qZaYi-Hq2hyP/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "I'll explain. This just happened a little while ago...",
                "line": 44,
                "url": "https://drive.google.com/file/d/1tIPWtjdIy47RWZMKhwwGNNnugzbIqGCd/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "The thing is, I'm having a hard time giving chocolates to Shadow.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1SR8rydP-BKLiD1rrDEPzhjpkUYyUsSXG/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Excuse me?",
                "line": 46,
                "url": "https://drive.google.com/file/d/1AeC6KWt-YUJmjtOyMfYiw9UZ48G4KlJ1/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I want to personally convey my gratitude to him this Valentine's Day.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1OeShDPNfqB0_DJcWp3iI960CZyTWYRSU/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But, considering all that he's given to me...regular chocolates just won't suffice.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1qduXPBh3PBDQW5S5BCak4T52Fg5XLXs2/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "So...you wanted to talk to me about arranging for...special chocolates?",
                "line": 49,
                "url": "https://drive.google.com/file/d/1-nKm0jXLULxmn6pyIMiEjT3atUNU7dHb/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Well...yes, but... It's not just that...",
                "line": 50,
                "url": "https://drive.google.com/file/d/1XRpMxxfYBQ8FCasWp2A14xuAwybs3JeW/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Sorry. I haven't organized my thoughts properly...",
                "line": 51,
                "url": "https://drive.google.com/file/d/1qJpT32smg8J3MLWvUeLdUYcswQaEYdRA/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "No, please don't worry. It's precisely because your feelings for Master Shadow are so strong that you are so distressed.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1bKruiQvkpUuwSlf7duFwkjzcpRXvGHla/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Maybe that's it. I'm worried he'll be disappointed that my feelings are inadequate...so I can't bring myself to give him the chocolates.",
                "line": 53,
                "url": "https://drive.google.com/file/d/108ZhiabOUxScVVmblohPReMunjs4E0Or/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Lady Alpha. If I may be so bold.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1IXkD-AGCsvSOHQfKcTZLCIbfT3yfJ69B/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Anxiety comes in many forms. If you hold back and hesitate, you will only grow more anxious.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1HabViI7Fi0dIkbfIU5JNp_tmE-9KNsOW/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Not giving it to him isn't an option, correct? If so, you must resolve yourself to do it.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1NWt8f5eYsDNk59gVbBYv3Fy6d7_PFGFe/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...You're right. I think I've become less and less confident as I've hesitated.",
                "line": 57,
                "url": "https://drive.google.com/file/d/1QIyzBL-SSabGqaGpwQVEsPlEg3CJ8G9m/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Thank you for pushing me. I'll give the chocolates to him while I still have the courage.",
                "line": 58,
                "url": "https://drive.google.com/file/d/1w8c7yQ8uR7hHONr1iK03fOGgnbgd_A5W/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "I offered as much advice as I could after that. But I can't help wondering if there was more appropriate advice I could have given her... The more time passes, the more worried I get.",
                "line": 59,
                "url": "https://drive.google.com/file/d/1Xu52UYrtbeL5l846GY2ijo8PjZZAP1mj/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "It's hard to believe someone as capable as Lady Alpha is so worried...",
                "line": 60,
                "url": "https://drive.google.com/file/d/1b8FWQX7cMq95nuPwYB-LdzI_RqVYlzPE/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "How rare. She's usually so perfectly cool about everything...",
                "line": 61,
                "url": "https://drive.google.com/file/d/1F3eodMOBoeVpqU_Qmj4oLQCoafUO4SlU/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Lady Alpha said she would finally give the chocolates to Master Shadow...today.",
                "line": 62,
                "url": "https://drive.google.com/file/d/1wIY5zDZbw2MlT5XJ2xI6vig8sspKyeM8/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Knowing today's the day makes me even more concerned... I really wonder if my advice was correct.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1h06zc6wsXSbF1JI-pvA8rOB_W1AnJ8VU/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "I still can't believe it.",
                "line": 64,
                "url": "https://drive.google.com/file/d/1LcoRb3SD8ROYKvsPoMlGV2J9S3gwcqmy/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Where will she do it? I'd like to see it with my own eyes.",
                "line": 65,
                "url": "https://drive.google.com/file/d/12l7BfW1SXOb-nioeJuPlqZNexmc_UI4I/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "It doesn't sound like you're doing it just for fun. Alright, let's observe Lady Alpha together in secret.",
                "line": 66,
                "url": "https://drive.google.com/file/d/1ZK-Ex050vtT-ARQXKeBcudUEAmbMH52F/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "The location is in the capital...",
                "line": 67,
                "url": "https://drive.google.com/file/d/1G362cIjADnDCfG6mbCf_IQjlrys1S73m/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "And so the four set off towards the capital, bathed in the Valentine's Day atmosphere...",
                "line": 68,
                "url": "https://drive.google.com/file/d/1_ORcgwEeLRxKBBfV9zLgTKK8XIDGA1NQ/view?usp=drivesdk"
            }
        ],
        "e2": [
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "*sigh*",
                "line": 1,
                "url": "https://drive.google.com/file/d/1eqkW748NkneirPSuUPuNmYkjzp0S3GWy/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...There she is. If we get too close, she'll sense our presence. Let's observe the situation from here.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1gRbeIrJQUEH2hsojgF6PZdQlFdoxqD4P/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Lady Alpha looks so nervous...",
                "line": 3,
                "url": "https://drive.google.com/file/d/1ieF-DFAxFxk6HVqsZrByjhpTKfP-Eayl/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "It's understandable since she's waiting for Master Shadow. She's planning on giving him the chocolates here.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1FkTECAa7X-iAj50FYTiF3VGhZGJrpPMz/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "(Lady Alpha... I hope it goes well...)",
                "line": 5,
                "url": "https://drive.google.com/file/d/18CVZEsmUPxGv_yctqRM31sA8sM3jIWdW/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "...Oh? It looks like Master Shadow has arrived.",
                "line": 6,
                "url": "https://drive.google.com/file/d/10U0ddbtOVq8Or22Cv7sFJdP3MJ5U1xYT/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "We should just watch quietly. We mustn't disturb them.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1A7cYbTGFhqLZHckKWRKtmizwkM7zxiDq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh, there you are. Sorry for keeping you waiting.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1DbgLKYlt5BGrQyeDCYq88MsGXvnKUoen/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No, you're on time. I just got here early...",
                "line": 9,
                "url": "https://drive.google.com/file/d/1-MULPH5yUn2TLDCKsmqVG8xZmUJ6gEsj/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Wait, Cid. That package you're holding, could it be...?",
                "line": 10,
                "url": "https://drive.google.com/file/d/1zg3PP4wUj3zRGDzNZEt8z7BvAGC25_0_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh, this? It's Valentine's Day chocolates from everyone in the Seven Shadows.",
                "line": 11,
                "url": "https://drive.google.com/file/d/19T0c8fILZlqLCMENV0eKx5HHpdZLyA9n/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I see...",
                "line": 12,
                "url": "https://drive.google.com/file/d/1baNZsfju97ASzh5qFFB0uFRzQBVhFmBl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Everyone's really enthusiastic, aren't they? Feels like they're enjoying Valentine's Day to the fullest.",
                "line": 13,
                "url": "https://drive.google.com/file/d/12IoMNz-zBHilHFJdp51NUyibF68aa4mK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Beta even read me a letter before giving it to me, although it was too poetic for my understanding.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1jLV8hikUNACK3cX1QofrsQZHez9oA3rB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Epsilon played the piano for me at a concert hall. Gamma handed it to me at Mitsugoshi.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1C29S05HpOKrxAQibZ-rSjn0cxXY4krNh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Anyway, the way everyone gave to me was pretty unique. Maybe events really are meant to be enjoyed to the fullest.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1jobkevKxF0fZyynJ6EKZxKV_2pYEbupL/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Y-Yes...right...",
                "line": 17,
                "url": "https://drive.google.com/file/d/1py5gaMLDQ8M8ejqVymrVtv4yfEL2FAkt/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(The others gave chocolates to him in such thoughtful ways. And here I am just handing them over...)",
                "line": 18,
                "url": "https://drive.google.com/file/d/1DJ6E7_YixmHQ9lSwLBh5K-B0wTrCQw4m/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(And I wasn't happy with anything handmade, so I tried to make it up with store-bought luxury chocolates from Mitsugoshi instead... I'm obviously floundering.)",
                "line": 19,
                "url": "https://drive.google.com/file/d/1zSqBPNKno-61oURHFlCSbmILH_0AD4Zg/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(I need to think more and put more effort into it...)",
                "line": 20,
                "url": "https://drive.google.com/file/d/19NEj64ec994gF3US1S2vYjg4QaCtrYUc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So, what's up today? It's rare for you to want to meet me like this.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1KLPyQnZ6Svugf1pvX8RefR6lici1LPfR/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Well... It seems like Tuna King added a limited-time sandwich to their menu. Would you like to try it together?",
                "line": 22,
                "url": "https://drive.google.com/file/d/1QO5DiQcq0Xu34yeZS_ocFa_qYTpsfBP0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Ohh. I was curious about that as well. Wow, didn't expect you to notice it, Alpha...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1LFJFy8YyALN2RNJu4rT-2tl1b9nm544Z/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(...What am I even doing...?)",
                "line": 24,
                "url": "https://drive.google.com/file/d/1RQWTlybRvK8pLoiOInYbhqVZHTiqawbN/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "A few days later...",
                "line": 25,
                "url": "https://drive.google.com/file/d/1XbkRpejI3N_VhIuwgk-ThdXfTrd5r8x9/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...No good. It's not velvety or creamy enough. There's no way I can make him happy with this chocolate...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1p3judXiYkXGMCJdhvC6D2gbkch0MsbNJ/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Lady Alpha seems to be having a tough time. How many days has it been already?",
                "line": 27,
                "url": "https://drive.google.com/file/d/1wBO74t1iI_dDFUNhadbuoc8r_wtLGLb-/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Three days. Ever since the day she couldn't give him the chocolates, she's been holed up in the kitchen whenever she's free.",
                "line": 28,
                "url": "https://drive.google.com/file/d/15uTVmo4T0zCc_X65zHdVFpzyqbeXo8nP/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Since she's so perfect at everything, her standards must be incredibly high when she's dedicated to something...",
                "line": 29,
                "url": "https://drive.google.com/file/d/1HWNPzjh0iatG02y04vui2LbcfBW0mLhQ/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "At this rate, she might fall ill... Maybe we should speak to her\u2014",
                "line": 30,
                "url": "https://drive.google.com/file/d/1N2As0Jw77ODYki9i4qLrYM7TmOzl5LQA/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What are you all doing?",
                "line": 31,
                "url": "https://drive.google.com/file/d/15SrJwicjHMsazqwZRSulSioiQ2QRrUOm/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "L-Lady Alpha?!",
                "line": 32,
                "url": "https://drive.google.com/file/d/1X_jhjY6P_nQ2O3H9V5ZOZRe0a0iz7ECP/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "...Did you notice we were here?",
                "line": 33,
                "url": "https://drive.google.com/file/d/1KiNsVyUMCXWV6EzFvQZ4nBb5Y_hCzSfl/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, some minutes ago. So? What is it?",
                "line": 34,
                "url": "https://drive.google.com/file/d/14tTsfPqCghN7KMwuHnMt-53NRBLgueSC/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "W-Well, the thing is...",
                "line": 35,
                "url": "https://drive.google.com/file/d/1PrRhH2zWYpsQzrV_sJQqjF12E9NiWnNo/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...That's why I consulted with these three. I apologize for taking such liberties without permission...",
                "line": 36,
                "url": "https://drive.google.com/file/d/1m_R3gq5-Npgnj2xmuJ4UX8IpgwhqMm1Y/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...I see. I made the four of you worry.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1-SmrGZn3AtD25yZa9UNXcNFDRjCSnfpT/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Please don't worry. But...",
                "line": 38,
                "url": "https://drive.google.com/file/d/1h7dYwyFnqmd5v9n0huTkpUCFck0Mu8YD/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Lady Alpha. Please let us help with your chocolate plan.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1I2Dj_kdhncx4qsiEmdRG3yd4zBcmCRWE/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Um, Chi?!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1zC9mwWgiXGuoPUANUTE3V_29Uf5Zcddc/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Didn't you also see Lady Alpha's earnest efforts, Omega? As her subordinate...no, as a fellow woman, I can't stand back and do nothing.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1VJYRpsdPiqLiJcLcsNKt4lmh5Xd_s1KT/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Well...I can't say I don't understand what you mean.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1KiPcPUJYYRZe0z20BSKCcXiaUo2xQK12/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I appreciate the offer, but...I can't ask that of you. You all must be busy around this time, right?",
                "line": 43,
                "url": "https://drive.google.com/file/d/15ku7iNeU4eIoWRtWH9VpVYFbrFoYECK0/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "True, we are busy...but it would be more detrimental to the Garden for you to continue being troubled.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1TMcFQW9W5XgA2Y0_-VdQKz1NAXzv_M5d/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Well... But...why would you all go to such lengths...?",
                "line": 45,
                "url": "https://drive.google.com/file/d/182o37ENHDxwgOsJIapRPpKOgs13hh2Ws/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Lady Alpha, you are always fully dedicated to overseeing the Garden.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1Fx6O4IJn8T_frdgArJ__-RkWienrriE3/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "So, the least we can do is act on your behalf this once.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1NVIvPmGSefAIzOe9hnlh3gGOqdvCXIvq/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Please, would you let us help?",
                "line": 48,
                "url": "https://drive.google.com/file/d/1AJ7FLZCD2MeWFAmii_xR8-UOiJ1bP1iT/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Actually, I knew this would happen. That if I kept making chocolates alone, I would just continue to flounder.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1Xr1UX3n-XQ39BlaaaxpN5AzqI4HB8cOV/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "So...will you lend me your strength?",
                "line": 50,
                "url": "https://drive.google.com/file/d/1ebnlHi3iZrPu3wkzB0IHKMSB1XBy6KGd/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Yes! Leave it to us!",
                "line": 51,
                "url": "https://drive.google.com/file/d/12RosA0rHm6zPyZwuliZpGUqBcYnEvVni/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "And so a Valentine's Day operation begins with Alpha and the four Numbers...",
                "line": 52,
                "url": "https://drive.google.com/file/d/16H9-GABOFqJ9Ild6lsf_fEuxkZLSz0EH/view?usp=drivesdk"
            }
        ],
        "e3": [
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Well then, let's get started. Welcome to this special crash course on how to capture Master Shadow's heart.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1VApIUPA6fLfIl6BTlLuS4mqBgNWE92rM/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Right. We must convey Lady Alpha's feelings no matter what...!",
                "line": 2,
                "url": "https://drive.google.com/file/d/1DAyduosL7BMera2St_Sq8AgnyGa7M_LY/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You all seem more enthusiastic than I am.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1LfuI9KkhDXZSw5gqQeOIGpjWv2tsXl4U/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "We start by making chocolates. Without a gift, Valentine's Day has no meaning.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1tijGW7RIk6dOEyHTCpLUwQUDuATZkflU/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "First, Lady Alpha, would you change into this, please?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1Dyiv_fORL6gsU2SxUpbsdWneGfGkQ57M/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "This is...quite the cute apron, isn't it?",
                "line": 6,
                "url": "https://drive.google.com/file/d/1XoXFUmkzVHdSLSFNln0kYb9KAxk9zv6-/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Wait. You want Lady Alpha to wear this?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1MBJrVcdiHFnx17CalpZX9RHaWrnXc9ih/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Yes, it's cute and Valentine's Day-appropriate, don't you think? Master Shadow will be pleased if you gift him chocolates wearing this.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1_zTylhGuBBAlvLo7jKKplXMruYDpeuBG/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Hmm... But it's a bit too frilly...",
                "line": 9,
                "url": "https://drive.google.com/file/d/13wDi1wC2nNEWo037Hj37D3kE2TKEtkS5/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "In that case, Lambda, how about you also join in?",
                "line": 10,
                "url": "https://drive.google.com/file/d/1TD0YxCvwS2wPmMpD4goHTcku_LN7F8pg/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "I see. If Lambda also wears it...Lady Alpha won't stand out.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1m4beXTvC-Pi4YlYtT2dz9rXjzbdMtZ11/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Wh-What...?! You want me to wear the same thing?!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1w9K9RG1_EQnhBFnYdEESrzcvsLmmM1Lx/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "I thought you'd say that, so I prepared a different design for you.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1qTA7HRqWYqj9LAbc4VtLkeWoKAvtmEoH/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "No, clothes like this are not for me... Besides, it would suit all of you so much better!",
                "line": 14,
                "url": "https://drive.google.com/file/d/1lsy3Cm9YtA_wOyYZ5zeHIeaO3fAwa0oA/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "We're used to wearing various outfits for missions, so it's not that embarrassing for us...but I guess that's not the point.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1wsmWiSWQM6ZRE9lVZefaI2b9VnmMpFCg/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "It's about sharing the embarrassment to encourage each other.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1XBP38ysjIqdJk3S8a9C8fh8DmAme1UXW/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Alright, Lambda. Are you ready?",
                "line": 17,
                "url": "https://drive.google.com/file/d/1a4-eebBBRDXlgMOVSFkw2hBIZXUii3Fd/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "B-But what does Lady Alpha have to say\u2014",
                "line": 18,
                "url": "https://drive.google.com/file/d/1IMINtSsPJ0_fx9RIwWFTp1_IbH7B1xY2/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...True, I'd like to see you in an outfit like this as well, Lambda.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1LbouhvsnzF2X9xurcmV9n95oXD3PaJoz/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...I'll go change.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1MMT0fJDyWF9PCunWQ_kGAZAJxEc1IZ2m/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I've put it on... What do you think? Does it suit me...?",
                "line": 21,
                "url": "https://drive.google.com/file/d/15xRKZKN7KaQ0OwliVNLe_bTw4kNHAcK1/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Yes, it suits you well. Now, let's start cooking.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1XkiBSgNpDjaf4GUcnPA0G-YwGgpAOen6/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Lambda is surprisingly calm about all of this.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1NJG7ldV3Z5TK6hNW-udlw_foNsetSYGe/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "She's just pretending to be calm. If you observe her closely, she's quite flustered\u2014",
                "line": 24,
                "url": "https://drive.google.com/file/d/15U_3QaftQ0dfYdzdb6Guj325T9MCwXpV/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Q-Quiet! Just get on with it already!",
                "line": 25,
                "url": "https://drive.google.com/file/d/1rMJM8x_VtiETHhEPafkTsH7P96qRORv_/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Heheh. Yelling in that outfit just makes you cuter.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1_HhHfsvwwt4RM1tDQ5bOaQS8elpiZpn6/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Urk... Enough!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1lneLnoxk7TKbVoCH91xZSxA-H4ADI-gh/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Lady Alpha, let's proceed without minding them. First, we finely chop the chocolate and then temper it.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1rziT4-X0fX9iq5USmIVb0g_YxokAjlBZ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Finely... About as thin as a thread?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1krFHHY1xy-ZZviD3htVZdvJtGTSfOlSN/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Yes, that should be fine. We'll melt it in boiling water, but the important part of tempering is the temperature.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1j1FnQ4GgbMxeWMJp-zemYMLJjDliQrFD/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "First, raise the temperature of the chocolate to 50 degrees to melt, then cool it to 27-29 degrees by placing the bowl in water. Finally, heat it back to 32 degrees in the boiling water.",
                "line": 31,
                "url": "https://drive.google.com/file/d/10gZ3lZkln-HxaDxGYQNzdwlF21Kr7bEv/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "...I'm surprised. I knew Lambda was good at cooking, but I didn't know she was knowledgeable about making desserts as well.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1mHMtGycskpKTMDVJ2FijHJPZ5L-8CZos/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "An extension of her survival cooking skills, maybe...?",
                "line": 33,
                "url": "https://drive.google.com/file/d/1-OBalbSUpZV7COGdGYT7ATC_D7vGRTWz/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "That's quite the bizarre extension.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1WPiGm8qDlIWGDXTeFO6GAAR3nW3e11Kx/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "According to the recipe, the sugar for the ganache inside should be...this much? Feels like a bit too much, though.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1IKx4XfeXoiH4A7cx9mEKnsytNGStfiU-/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Yes, it's slightly too much. Let's adjust it down to the grain.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1ZEPgLxz02eG6IBVdiYzWWytxVTkFE-Qn/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Okay. Lambda, tweezers, please.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1x0SHSDQ5TzokFMJV1nUZh8ADRB3-2SSD/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Right, here.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1XSUycmu1UTGm4SGtGHcef_hRLBpAqbhE/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "What precise chocolate making... But failure isn't an option when it comes to Lady Alpha and Lambda.",
                "line": 39,
                "url": "https://drive.google.com/file/d/13bbczJUuOMP_q8ZHAsnS9h3TmxYt3qKX/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "It's in their nature. Both are serious and uncompromising.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1L9eCJfaAAmK9ANNd1UFj83r0GcAULnAp/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "We might be better off just rooting for them without interfering...",
                "line": 41,
                "url": "https://drive.google.com/file/d/18C-TH1SMy_f4WwPN_rP2QV0JWyxnUOqO/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It's done... It looks and tastes perfect. I'm sure Shadow will like this chocolate...!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1bdcDeCq7HOc4h0dDvAfZPjtuXzkifinX/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Well done, Lady Alpha. I'm glad I could be of some assistance.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1trNJAvIm3veGmy-CBkG-TSgfNDZZQ34I/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Hold on a moment. The next part is what's important.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1rWKLnUmGpZeTqEXLQRbNEOZZXvtpCoqu/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "The crucial task of handing the chocolate to Master Shadow still remains.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1NlLK-5WhASxJp1k2tEWuB5XfpophutfE/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Right... Since this is Shadow we're talking about, I can't just hand it over to him...",
                "line": 46,
                "url": "https://drive.google.com/file/d/1jiiLqkh169RDlKM5fYfLMuf4HU7Mlzdd/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "We need a special way to deliver it to him... Nu, any ideas?",
                "line": 47,
                "url": "https://drive.google.com/file/d/1zmJRmLLIbk3Y3OS4x9x4lpO9kTyo_4K7/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "What we need to make the receiver happy is...what's called the \"element of surprise.\"",
                "line": 48,
                "url": "https://drive.google.com/file/d/1ottSkQTt1EBU5E2q5vYYyzaGlzacg__e/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "I see... What specifically do you have in mind?",
                "line": 49,
                "url": "https://drive.google.com/file/d/1HKXIqiWzL2b2XSRbCLSo0SlVj7q9YeCO/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "First, summon him for some trivial matter and then catch him off guard by handing him the chocolate. That way\u2014",
                "line": 50,
                "url": "https://drive.google.com/file/d/1Z4_5-bNXsi1F5aUntoOWGo8akPu33p1C/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "He'll be delighted by the unexpected gift... Let's put it into practice right away.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1yYxA7uaMpT0HXLP2ORsn14AjV8-ifBp8/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Thank you for joining me today, Cid. Sorry I called you on such short notice...",
                "line": 52,
                "url": "https://drive.google.com/file/d/1hnbl8Hv5AKWY6Qsqau2rYGnuRVcn10Hd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I also had things to buy. Don't worry about it.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1Ugqq2v4nx6PNd84jXGgdhL5sghcoWVzT/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "By the way, you're wearing an unusual outfit today. It's pretty cute...",
                "line": 54,
                "url": "https://drive.google.com/file/d/1PzMJ4l392e2Lh8Gv3Nixb30vNKV7UbEq/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Y-You think...? Heheh...",
                "line": 55,
                "url": "https://drive.google.com/file/d/1v8nT2S-5I4Afm7yispAZgjB5MfH4eQkC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Anyway, looks like the spring collections are already out, even though winter seems far from over.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1ipDUIe4p5tuSMD4GP2ZaHz2mpwsPxKNn/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(So far so good. He must think I'm here just to shop for clothes...)",
                "line": 57,
                "url": "https://drive.google.com/file/d/1UBgbR87Ps5nT1i2sWyRBisVKv4kfbbZB/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(Now I just need to give him the chocolate and make the surprise a success. I'll cautiously wait for the right timing...)",
                "line": 58,
                "url": "https://drive.google.com/file/d/1IJzSQulIAu61C9rM29CRrPPZNmWfvnrA/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "May I try on this dress?",
                "line": 59,
                "url": "https://drive.google.com/file/d/1-Rb_ZkBadMZKVOQ4Kla0xlKJIFqTNbrj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Sure. Oh, should I hold your stuff?",
                "line": 60,
                "url": "https://drive.google.com/file/d/1FjdvjMJ5xaA92-MBVb7JqsOD-5MEuL7u/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Would you? Thank you...",
                "line": 61,
                "url": "https://drive.google.com/file/d/1BkgjDovDjDIUa6Ho4OLn7HGad49jvaas/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "No problem. Seems like you have something important in here, so just to be safe.",
                "line": 62,
                "url": "https://drive.google.com/file/d/1wFaf676KN9LCEXnrccW8RISd-NmKNmWZ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Huh?",
                "line": 63,
                "url": "https://drive.google.com/file/d/1qr4gn3ObAR7pfhys031Qn2CTB2nege0x/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh?",
                "line": 64,
                "url": "https://drive.google.com/file/d/1AupIFsdnCfvvJrw6C7MEerCudQ6jHEp8/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "...Hold on. Does Master Shadow know about the chocola\u2014mfh?!",
                "line": 65,
                "url": "https://drive.google.com/file/d/1vOoMYJBUDp7QI837WQVwS3YFdQ0RIVVV/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Quiet. Don't give us away.",
                "line": 66,
                "url": "https://drive.google.com/file/d/199nztaV64eccdVDFWyVL5EkByBOKcix8/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Why do you think that?",
                "line": 67,
                "url": "https://drive.google.com/file/d/1kpMWTjBdlbDgho-PKhPONwN3TsM_ntSv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I felt a considerable amount of magic coming from that bag. I thought maybe you were using slime to protect something inside.",
                "line": 68,
                "url": "https://drive.google.com/file/d/1wD8r5zjyqdOgkJMjsZ9T2ChxKKo0hRy5/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "W-Well...",
                "line": 69,
                "url": "https://drive.google.com/file/d/14veJkzCK9Z0xteVnGUVehAAffYejzzcl/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Master Shadow is impressive as always. He sees through everything... A formidable individual.",
                "line": 70,
                "url": "https://drive.google.com/file/d/1CnmYIw3ryGetxHoi-4GwLDgIXCM9qONu/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "But now that he's noticed something, the element of surprise is gone.",
                "line": 71,
                "url": "https://drive.google.com/file/d/12PsbFiJuMiRN8emMMa2ebFdX-WJBPk-s/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "*sigh* Back to the drawing board then...",
                "line": 72,
                "url": "https://drive.google.com/file/d/1r9Ezj9ktC0qObNiyUqcTUHPkd6zv3u-c/view?usp=drivesdk"
            }
        ],
        "e4": [
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Nu's strategy was unsuccessful... Next, I'll offer my advice.",
                "line": 1,
                "url": "https://drive.google.com/file/d/12PI1tJxaTg6wxpbn033S6p6W2HAKWOZs/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm counting on you, Omega. Looks like surprises won't work. What's your strategy?",
                "line": 2,
                "url": "https://drive.google.com/file/d/1h6GGsXdjnN6lluLiDXII32UbefG2cVQG/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Well... This time, let's push for the vibe.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1hMODRkADoCaN1Q3AlcxopOB5FnlTzNf_/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Giving chocolates in a romantic setting will definitely make it feel special. For instance...",
                "line": 4,
                "url": "https://drive.google.com/file/d/117TKCR48spGVVEV-L0jkRipk3Y-xgwN_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Mmm, delicious! The seasoning is subtle but perfect...I think!",
                "line": 5,
                "url": "https://drive.google.com/file/d/1fHDo1xq5L_lBacFXA__4dCZmz1X1BBlQ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm glad it suits your taste. This restaurant is a favorite of mine.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1pRg3Ih-AS4CSfhS3KoAxpbWb2KgHOxd4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "But are you sure it's okay? Treating me to such a fancy place...",
                "line": 7,
                "url": "https://drive.google.com/file/d/1Rl0EYoMPiPNG__EVdhmjHY6GHzFYhoAz/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Don't worry about it. You're special.",
                "line": 8,
                "url": "https://drive.google.com/file/d/105SP3P-eUwdBsrz-KaidnKQAyLcSRMMq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yeah? I don't quite get it, but I'll take your word for it.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1E0URQDjN3XGY0S2PSKOjQ5bc_LDDDhwf/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Heheh. Feel free to order anything.",
                "line": 10,
                "url": "https://drive.google.com/file/d/13PJJZ3ciTrDPxrbGnctikG2nty7m_2cS/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(A delicious meal and a pleasant atmosphere... Everything's set. Now it's all up to me...)",
                "line": 11,
                "url": "https://drive.google.com/file/d/1PXiRwIBRqg0M_uAirVJVQjfPpsb2CHWd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "With food this good, I'm looking forward to dessert. Can I order some?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1dvnaePVeLD1Firoa5-KXA-58gc5pZ6Ft/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Before that...Cid. There's something I want to give you...",
                "line": 13,
                "url": "https://drive.google.com/file/d/1hqtochYtynb_l2jbn3H53-Eo7FmJZqgP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...I get it. I've memorized all the details of the plan.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1XdGcAwamrZ38EhpPPnm8BF6PNtyfECb6/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Huh?",
                "line": 15,
                "url": "https://drive.google.com/file/d/17eV1dLW0IiEk-REPa9F8-hPt6csOLd2y/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Find the rat hidden among us...right?",
                "line": 16,
                "url": "https://drive.google.com/file/d/174D3RIK6wOqHCfBSZCMBspjO52XoS7DG/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...You're perceptive, aren't you?",
                "line": 17,
                "url": "https://drive.google.com/file/d/1MNKto5QmF6LHtV0L_xqyQSCQaEAg1v_p/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(A rat... Someone from the Cult is here. Now's not the time for chocolates...)",
                "line": 18,
                "url": "https://drive.google.com/file/d/15aqN_UygpUrMUFRSvaD0tTb8q6wgPeJ4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'll just go freshen up my makeup.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1lhhv86jEEPGb-_kb4Gh9hd2Kp8DmxMOO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1bj-V0VVi5-LOvpEzYiPuWsjh5b8P3V_3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alpha treating me to such a fancy restaurant... That can only mean...",
                "line": 21,
                "url": "https://drive.google.com/file/d/18kMnHweQoNlkWLCe2J3Be5FJz7aDu6Nm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "She's going all out with this shadowbroker stuff... Man, she's a good sport.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1lrKVc7dkyAxCxO57b-xXzOvBJKHhKk_X/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Who would've thought there'd be someone from the Cult among the guests? Luckily, we caught them, but...",
                "line": 23,
                "url": "https://drive.google.com/file/d/150aHK2ZpYtrkKIVPzoupAPv-78rfN6WP/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "*sigh* Another failure...",
                "line": 24,
                "url": "https://drive.google.com/file/d/1Xtgiq--km98UPQeEPitB9acJjGYArBhA/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Heh... Now it's my turn.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1LHA9e4y9IYs43hqlp00pjxHE02U1-Mpk/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Oh? You seem pretty confident.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1GQhxXn_9YVnl5db3QZ2KMPtqPVfyhslx/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Yes, there's no way this will fail. After all, all you needs to do is act... Something you already do during regular missions.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1fDOIBM6TLdwKuUsAK2_pc2nnugD6ZshZ/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "You just need to create a mood not influenced by your surroundings, but by you.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1HYROuiP0RARdob-8vCwWKppkOdtGY6l3/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "I see. For Lady Alpha, that should be quite easy.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1JMz7-SdG5MahQ39Lh4i42NTKxYyln0uN/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "That would be a better way to deal with unforeseen circumstances.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1uknnh_-FXZFj_OdlDsRKcE8rvhPJiuvn/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Lure him out into the night with sweet words and give him chocolate under the moonlight... I think it's a good plan.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1sKNsegNKM4y-w2_ccpQZyn_XRkFKJZNI/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Sweet words, huh... What should I say...?",
                "line": 32,
                "url": "https://drive.google.com/file/d/1UwmECVfZX3_GtopZDYksvfKJCez59h3t/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "\"I don't want to go home yet...\" How about that? A wistful expression and an upward gaze are essential.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1Xq1ttTjU4Y7tNvXn88iFk6bGFhqm8zUY/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Maybe something more direct would be better. \"This is a token of my feelings!\" or something like that.",
                "line": 34,
                "url": "https://drive.google.com/file/d/154kPFeyB-6zb_XPqU7Adt6N9XddACepP/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Are you seriously telling Lady Alpha to do that?!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1cyEMhwcL9-jL-my36rfFbToroDbL6qmB/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It's fine, Lambda. I understand the importance of acting. They're not wrong.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1Q-hRq-O4z45TtHZ69GS3g6fV1uYxr3H1/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Alright, let's give it a try. Picture Master Shadow is right in front of you and speak.",
                "line": 37,
                "url": "https://drive.google.com/file/d/151ECe3IwBsaSXDxhg04Lprbm7DSjOCR_/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Shadow... Okay, I'll try.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1dIf8gbj_9yZunFlRzu8C3hWgcCeV5crU/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I don't...want to go...home yet...!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1_ZTgsbtUfybYJ7mxo2Eg0-_9_NHG-PPb/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi & Omega (Chi)",
                "subtitle": "...Huh?",
                "line": 40,
                "url": "https://drive.google.com/file/d/1oNb242OrOaEgMABVG1sEWW10PmEM-BBh/view?usp=drivesdk"
            },
                        {
                "name": "Omega",
                "name_variant": "Chi & Omega (Omega)",
                "subtitle": "...Huh?",
                "line": 40,
                "url": "https://drive.google.com/file/d/1oNb242OrOaEgMABVG1sEWW10PmEM-BBh/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Th-This is a token...of my feelings...!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1FZUiuEIwEtx9anyaZF0lWbUhSRtMklTS/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "That was...vocal practice, wasn't it? My apologies.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1ZckkbBXhvT9KWZhb_b5XQjUe7-_WI0HR/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No, I was saying it for real... I imagined him right in front of me.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1o0hRmFYZBt1zVjGltgjb8lhKJvDCpLRg/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "You act so effortlessly during missions, but it's so different when you're in front of Master Shadow...!",
                "line": 44,
                "url": "https://drive.google.com/file/d/1_Mgn4NwRV7F3q8pkHL0aZkmCujMStNDv/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Chi! Mind your words!",
                "line": 45,
                "url": "https://drive.google.com/file/d/1SSFG7YbtfCWxF8OVgVrWn_omuBy7x0Ju/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "But this might be a bit challenging. If a trainee acted like this, imagine what kind of harsh words Lambda would have for her.",
                "line": 46,
                "url": "https://drive.google.com/file/d/14xf65M_MQZ8_KYQHzO8tnVk-YO6eS6AZ/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Agh...! W-Well...!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1wpMfH3hUI20cXIa1aORinsvCS9yvjALx/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Was it really that bad...?",
                "line": 48,
                "url": "https://drive.google.com/file/d/12wIqFL3wCiGLk7wnr10ALz3H3sm9ALlX/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "...What's important is to keep practicing.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1GD4mCCaL6HSiJ-0lWKCjq03ujLNb_9un/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Right. It's all to make him happy...",
                "line": 50,
                "url": "https://drive.google.com/file/d/1NFWdNUZqTgCV8cQOf82LSc-hRIka_oLk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alpha asked to meet me the day after she treated me to a meal. And she's uncharacteristically late...",
                "line": 51,
                "url": "https://drive.google.com/file/d/1BatW-aSVVu-UAknGGwunrs6foW1U_PRg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...I see. So that's what this is...",
                "line": 52,
                "url": "https://drive.google.com/file/d/1haCftJsbcsSrepY8fgJyO79Qtk6h2QuG/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm sorry, Cid. Did I keep you waiting?",
                "line": 53,
                "url": "https://drive.google.com/file/d/1U7_NKG-g9OSVR0NTj4795p-UVZ8bNHzP/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "T-Today, um...I don't want to go home...!",
                "line": 54,
                "url": "https://drive.google.com/file/d/1Z3X1mFAtUO-ZAYG7WBSM0AkBc0HRqnzA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...I thought as much.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1Dd8ATc4H1G8BDCWKNc0YGA9jjxCzJDTT/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I want to convey my feelings to you...!",
                "line": 56,
                "url": "https://drive.google.com/file/d/1j7I3LUAhdDYaw0JQAqoZBgAHP03d9_bG/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "No need to say more. I understand everything.",
                "line": 57,
                "url": "https://drive.google.com/file/d/1Fq20KBvyt8guTWzygtEX7We4TSPACyJJ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Huh? What do you mean...?",
                "line": 58,
                "url": "https://drive.google.com/file/d/1xC7hFjH0z7c4I0_jDwGAnRGToinflbEu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I'm sure Alpha's motivation for her \"shadowbroker\" play is peaking just about now!)",
                "line": 59,
                "url": "https://drive.google.com/file/d/1qUzeGI3XZ1B2kzDCzvjXUbuKBoL_IKnl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Her tardiness today is probably her practicing the \"hero arrives late\" trope. It's a standard move, but it takes on a special meaning when Alpha does it. In that case...)",
                "line": 60,
                "url": "https://drive.google.com/file/d/1rFuC9YICY909JYw6sT_iaCydgDHL1a-g/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Tonight, I'll accompany you wherever you go.",
                "line": 61,
                "url": "https://drive.google.com/file/d/1l6iv4anNYWNvl-PQZSn4FssW7GS370WH/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "R-Right! Of course!",
                "line": 62,
                "url": "https://drive.google.com/file/d/1HxQq-6XQ-4fZdjTUfLMC-Az5ODu66c2h/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "*sigh* Who knew there was a Cult base in a place like this...",
                "line": 63,
                "url": "https://drive.google.com/file/d/17SccrQRx1Z2cX7xHpE19bXK9JGGNK0XY/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Following Master Shadow, overlooking the city, identifying the base...",
                "line": 64,
                "url": "https://drive.google.com/file/d/15GceUwn3G-mfUQmMVFxPMF9yjRbhLMw3/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Impressive... It's as if Master Shadow is guiding us to the right answers.",
                "line": 65,
                "url": "https://drive.google.com/file/d/17maCmr3mIXXkPZmU8v_LdZU_IARaHU1Z/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, he really is special. But\u2014",
                "line": 66,
                "url": "https://drive.google.com/file/d/1SybrRWVjR30eNyPiGkz9QYmdDVq4Y5cG/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "The mission itself failed...",
                "line": 67,
                "url": "https://drive.google.com/file/d/18yOzKZcfN4_7h-l36Y51Uf20oihDXUKB/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Lady Alpha. Please leave the rest to us and get some rest.",
                "line": 68,
                "url": "https://drive.google.com/file/d/1xPJsMqYG7g0alTNygjz42C77wRrvcFbU/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Thank you. I'll take you up on that. I'm quite exhausted today...",
                "line": 69,
                "url": "https://drive.google.com/file/d/1OKtFvNfBtMdQ3KKA7NMJ_smihHCqA3oO/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Lady Alpha...",
                "line": 70,
                "url": "https://drive.google.com/file/d/1xZWf4wpLA8NbqkKRoFaan2zpB8oNFJHE/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...How can I dispel her worries...?",
                "line": 71,
                "url": "https://drive.google.com/file/d/1goZKsofMUctjA9HY6IfGwnouqRGbJnBH/view?usp=drivesdk"
            }
        ],
        "e5": [
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "*sigh* What should I do? Nothing seems to be going right...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1nwXwjaYzRRs7aTGSBCFjSP1qZ9bWR2Ej/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "N-Next...is...Omega, any ideas?",
                "line": 2,
                "url": "https://drive.google.com/file/d/1YqssBXvhMxU5kC-Otz8MeS2GecR0rWj1/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Don't ask me. I can't think of anything right now.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1pIXf2qsxjqHYosuZsNuTFtdSrx0LoRB6/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Maybe trying to give him chocolates is annoying him. He could be warning me not to get too carried away...",
                "line": 4,
                "url": "https://drive.google.com/file/d/1Nf-_fpoqqWRRKGCVFslsBrj2XLKDjV_P/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "No. That can't be the case. It can't, but...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1jx2cjiGnGqGUWC7BJqou5kHH-JCdnpSE/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "We can't possibly fathom what he's thinking...",
                "line": 6,
                "url": "https://drive.google.com/file/d/1-fI6CwjPgcRqLEPs2keidoCtl80H-XVp/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...If I may be so bold, Lady Alpha, do you intend to give up just like that?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1cuKABRhlKUj5ZxOwlWxGjih8s6TawNa4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...",
                "line": 8,
                "url": "https://drive.google.com/file/d/1DFd9SRue1-pZmXukHQNml3rvxT-7Yldq/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Lady Alpha, I told you to do what you desire. Of course, I will spare no effort in helping you.",
                "line": 9,
                "url": "https://drive.google.com/file/d/15xCROkdP5jrgCEb8enjvvCmNJl6Lx3Y4/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "But...is your true desire really just to not disappoint or trouble him?",
                "line": 10,
                "url": "https://drive.google.com/file/d/1FiI3OFjxtXe-6j4-3cwmfGvhSucfqmxt/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Please tell us what you truly desire.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1KbTAGOB2OzZQsGX9HPFJg-zIGSqYowZQ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...What I desire is...",
                "line": 12,
                "url": "https://drive.google.com/file/d/1s856AMhj1LqJl7B0jt0uqK-71xF_6ljP/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "To express my gratitude to Cid... The debt I owe him is beyond words, but I hope to repay at least a small portion of it.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1M-yeN34b5DdTQouo2peAoeGfWkCJtOQ0/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Heheh... I feel ashamed of nearly losing sight of my own feelings.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1_OgbgHw4_EKUwNBCkGz__BuwR_k6-AmL/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "So, what do you intend to do next?",
                "line": 15,
                "url": "https://drive.google.com/file/d/1kvn5WGjYcToVDM0HH5tyhLsa_CTuCGsV/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'll keep trying until I can give it to him. After the help I've received from all of you, I can't just give up now...!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1HV6hnLCJynjzQKTf2UXxY7wGLEIScqoO/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Understood. In that case...",
                "line": 17,
                "url": "https://drive.google.com/file/d/1rvfCAoUmd0gAHgaQBvRGSY82ztusVTcE/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "It seems the time has come to use this notebook!",
                "line": 18,
                "url": "https://drive.google.com/file/d/1JgvabOa-zVnc9WbqJ9VWEnxCKEyQfuWu/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "I-Isn't that...?! Lambda, you're really going for it...!",
                "line": 19,
                "url": "https://drive.google.com/file/d/1we1Z76LaRflosSmSps33WCle00djVpzC/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What do you mean? What's so special about that notebook?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1AeLYmjwzpTMuEdQNHyB0Xh5qh4OD_cZw/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "It's a notebook on training soldiers. Inside, there are training methods, physical conditioning, and even tactics for breaking an individual's spirit. It's a terrifying item, but\u2014",
                "line": 21,
                "url": "https://drive.google.com/file/d/14Td60U8rwYRlURVJXYRrMATZRvZF3eM7/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Normally, it's not something that would ever be used on Lady Alpha. Lambda, you're fearless.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1APks7Bk2kiOK7rFEXdXBfQYjKkNGRYUd/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Normally, yes. But this is a special edition tailored to Lady Alpha.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1IDrzoFG3pc0lKtGcpE9pfxvgqRVJ5NP6/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Lady Alpha. I've been researching successful Valentine's Day strategies since hearing your concerns. I'll put you through a special training program based on my research.",
                "line": 24,
                "url": "https://drive.google.com/file/d/174CkU-_piKoWs-ms_ADh6CvJJC0KYNl_/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "It's going to be a rigorous regimen...but if you're prepared to take on the challenge, I, Lambda, will support you every step of the way!",
                "line": 25,
                "url": "https://drive.google.com/file/d/1aLaMA461nujekNyh0XDspOBx-YgDQbd8/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...I'm prepared.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1Q0s2SMZn7LfSVPZtw7yCdPlpujNg9QLY/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm now just a nameless recruit... Please train me, Instructor Lambda.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1z27UVVcoYEZfhVKY37shMQRxLK2FjIto/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Understood...I mean, fine!",
                "line": 28,
                "url": "https://drive.google.com/file/d/1hd0tGdg1K9iAsM0OGAMblrtvFeneTuCf/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "We'll conduct special training at the outdoor training center! Follow me, and no dawdling!",
                "line": 29,
                "url": "https://drive.google.com/file/d/12tZSvpiVC9os9UXaMCCjrLmivuRbVMwd/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "...They're both quite fired up, aren't they?",
                "line": 30,
                "url": "https://drive.google.com/file/d/1ULkhC8o5LJL61PFtjTBeCrrAXQtW0kEc/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Maybe what we were lacking was that intensity.",
                "line": 31,
                "url": "https://drive.google.com/file/d/11j1w4lqfhnWZlfm3AZNsrU5dOpM82X2F/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Well, uh...I guess we'll just observe quietly.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1nbm07SNSnneyTqKoUxM-n6pgEATaamDM/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "If you survive this special training, you'll be able to fulfill your true Valentine's Day desires.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1dP6TY7_sb5R7uz2-C-9LSTCvYuZ0hCaF/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "But until then, you are the lowest of all creatures! Understand?!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1VnKl_aL6Kb6k5pg-1ehLEaMcl3fz_zxr/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Ma'am, yes ma'am!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1rnMJDud8tXgkaY0XfMsepv4mf-itofIu/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Louder!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1rKkTE-UucbD_rIJGwRLL3yp1CugabvHM/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Ma'am, yes ma'am!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1uU_om7kF4s2omxQNmUKMlrOumHqqPyde/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Whether you win or lose on Valentine's Day all depends on you! If you don't want to end up a cowardly chicken, make up your mind! Say it!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1t_lNErhFI7DmruZv2dBNHnyFcK-GJPDM/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Ma'am, yes ma'am!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1qLTse0lqdPIlJM4-xWJaHqjG8lAWXP2m/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Hmph, good enough. Impressive by your standards.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1xHqNrklK10SIgdX3pxtsmfCRZTz7jj80/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Strong convictions reside in a strong body. Grab those weights and start doing squats!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1JAPUPtLaVXS2QyTunmUl5m5Nh69Gfdeb/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Ma'am, yes ma'am!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1boe-xOvoydBWLmguwNawSiiFyu3XooxA/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Good! Now shout out your feelings for Master Shadow! How do you feel toward him?!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1zej2S6Cc3jzdbafTDxbJ31abnaphNtrI/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Grateful!",
                "line": 44,
                "url": "https://drive.google.com/file/d/1PU-8bRjMW8ZaAaLsso04cGtxCvRoq5Cp/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "I can't hear you. How do you feel?!",
                "line": 45,
                "url": "https://drive.google.com/file/d/1BfaynGIobuvQcmuNvZv90pCZUvflTuTw/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Grateful!",
                "line": 46,
                "url": "https://drive.google.com/file/d/1G_0XveOxOA93RzF5kcZ3bAoZe-782Tep/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "How do you feel?!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1rTOV7b5GSEaNy_2me8L8gZpM--6m2EX4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Grateful!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1VsDGjLrIgG9L_VlgSMD690lOegOfZ-8H/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Lambda's completely in the zone, isn't she? And taking on Lady Alpha no less...",
                "line": 49,
                "url": "https://drive.google.com/file/d/1-2ycBKi-ycCmYOADEemf-2_FZCvuBPeV/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Lambda can transform into a demon for Lady Alpha's sake. There's something to learn from that level of commitment.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1GZWQ_EW70iFff_Qh2D3uF0NdfG6PoX-L/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Why am I actually impressed...?",
                "line": 51,
                "url": "https://drive.google.com/file/d/10fXpayYzbeYuU-9VkGq9wbaOmo7IRBfy/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Please accept my handmade chocolates!",
                "line": 52,
                "url": "https://drive.google.com/file/d/1kCGUAlvE0n_Gm4mudUNEWSoHna3wOusR/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Don't look away! Look at the person you're giving the chocolate to!",
                "line": 53,
                "url": "https://drive.google.com/file/d/1bm_5Gg5dfZ137u34k_hAc0kj3unwcipR/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Please accept my homemade chocolates!",
                "line": 54,
                "url": "https://drive.google.com/file/d/1LzVwF23VJbGV-B6NN-bd7MNPYMOS8k_o/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Pathetic! What're you, a piece of chocolate? Is a piece of chocolate going to hand out chocolate?! Ridiculous!",
                "line": 55,
                "url": "https://drive.google.com/file/d/14o9Kpo-VFR5uTrAwOXJrPxsCstERC-E_/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Ack... Ma'am, no ma'am!!",
                "line": 56,
                "url": "https://drive.google.com/file/d/12zU-zFPW-OVs_-Un77RzMk1sn7kcyNtu/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Frustrated? Then channel that frustration into this training! Press your arms against your body, use your upturned eyes!",
                "line": 57,
                "url": "https://drive.google.com/file/d/12Aepx9fO8zMTySVyQeofRngTn7vTdWaV/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Simulating the act of giving the chocolates, huh? If Lady Alpha gives them with that expression and pose, even the mighty Master Shadow will surely\u2014!",
                "line": 58,
                "url": "https://drive.google.com/file/d/1qYqeZhaPjEV_9TKsWWKpOr4LHaLM1WMO/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Yes, surely he will accept them...!",
                "line": 59,
                "url": "https://drive.google.com/file/d/1TUkCRgC70nDOFcz3h4suM7e5zQWxOenh/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "...Is Valentine's Day supposed to be like this...?",
                "line": 60,
                "url": "https://drive.google.com/file/d/1WgCfmLD4H5pza46g2B5TZwNoTJwvGA7H/view?usp=drivesdk"
            }
        ],
        "e6": [
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "You've finally got the right look. That marks the conclusion of all the special training!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1hsg8EYi1o6w6W4xJOLiRqGAW9C5Ydp_M/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Lady Alpha, well done. I apologize for the many indignities...even if it was for the sake of training.",
                "line": 2,
                "url": "https://drive.google.com/file/d/18A5Q25zNrKuvMf1QhLVUuwXVVWbm6r25/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No, I appreciate it. Thanks to you, I can now stand before him with confidence.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1y_UPDnIS3tb8LZSIVEr3VzYo0ICbPApS/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Lady Alpha. I've arranged for Master Shadow to come to Alexandria.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1AhqqLlbghX47m_Gr1QJphRSJCqT3lwV9/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "I've tightened the security outside the room to ensure there are no disturbances. Rest assured, we won't eavesdrop, so please don't worry.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1SyAEGp_8dSPjbIZnYhRsHwu1WzYDyrp8/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "That's about all we can do. We wish you the best of luck this time around!",
                "line": 6,
                "url": "https://drive.google.com/file/d/1395xTLLDI8bapnxt7ax0dYWi5PZDcEQm/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "All of you...thank you for everything. I'm determined to see this through, to honor your efforts as well.",
                "line": 7,
                "url": "https://drive.google.com/file/d/12WjfDWnFNUF_CUHhGIDFJLIR6Yj7dIcv/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, I promise...!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1zwT6xwTQHUOycOYVD61OMo4MzMVk5z4Y/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Both Master Shadow and Lady Alpha have entered.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1fWSglxmn5pT3oAfQPNI133pVQY5YHJGe/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Now we just have to guard this place. I'm a little curious about what's happening inside, though.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1XzyPOgfe1RYqL1qFvOE2k4DPwkv9xfzk/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "The plan is for her to give him the chocolates once they're alone... The situation is unfolding as planned. Hopefully, Master Shadow will\u2014",
                "line": 11,
                "url": "https://drive.google.com/file/d/1JZFHithAkcu7lC85QIDIDFDUsy-TTt9i/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "??? (Delta)",
                "subtitle": "Boss man is eating stew?",
                "line": 12,
                "url": "https://drive.google.com/file/d/18giTTj8okVodZ5r30SjNeor819oqFRNf/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "No, not stew, the situation\u2014",
                "line": 13,
                "url": "https://drive.google.com/file/d/1SlYoBNTNZMIivsnsOV1mTsqhoLvP4aGB/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "...Huh?! Whose voice was that...?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1W2x7Z_KXfMerDGvmHmwpGTSEuWdHkg-8/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I wanna eat stew with Boss man too! I'm so hungry!",
                "line": 15,
                "url": "https://drive.google.com/file/d/1jehgJOpJuCnut0PaB10ATTAror6ZlN3T/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "(...This is bad.)",
                "line": 16,
                "url": "https://drive.google.com/file/d/1K-Dls2oN4kZa52TazUz5yb2PI_La396Z/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "If Lady Delta enters now, the entire plan will be ruined!",
                "line": 17,
                "url": "https://drive.google.com/file/d/1-eK0HM-YQDrFA6uUcj0Mss6iM2BqCfGX/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "But we can't match her strength...",
                "line": 18,
                "url": "https://drive.google.com/file/d/1JmfoKIyJGHQcIFOyMzyawM3hqd6Ax2bH/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "We need to somehow convince her to leave peacefully...!",
                "line": 19,
                "url": "https://drive.google.com/file/d/1BlxD-V5rGGe4f5x4lj5uagIXkXoc6BV7/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "How're we supposed to do that? She's not exactly someone who listens to reason...",
                "line": 20,
                "url": "https://drive.google.com/file/d/1RtsCNzllTncxHBTY1NJqcS4YYGfSeRVD/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "*sniff sniff* I don't smell stew. But I do smell Lady Alpha. Is she with Boss man?",
                "line": 21,
                "url": "https://drive.google.com/file/d/1OLs_q_4KUnOKqtbDWYvu8NZKsIENv2wU/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Yes. Lady Alpha is inside. They are having an important discussion, so I must regretfully ask that you return at a later time.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1nzOaZ4_hFu8ZBSihi15dcJH3Cb4RCY-z/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Huh?! Did Lady Alpha say I can't enter?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1LY7w9sJulUZPg_zPM9JTHWbhb5Q_WAL7/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "W-Well...",
                "line": 24,
                "url": "https://drive.google.com/file/d/1DPKVWozQDjVxZuPSIcgplQ2vpd9m6Bpm/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Technically, Lady Alpha didn't order us to \"not let anyone enter.\"",
                "line": 25,
                "url": "https://drive.google.com/file/d/1MPP3NxuNNIw8XZmdSQ1n1tP0D1TLJBEJ/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "She may not have explicitly ordered it, but...after all the support we've given, we can't let her down at the very last moment...!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1PZCUUFXbZbmYXXTw98pn6179h49zyzHa/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "If it's not a \"no,\" then it's a \"yes\"!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1p2J-9wJIvRiwOWV7-YlsKyy_6mB0ZCmQ/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "P-Please wait! I apologize, but this time, I cannot permit it, even if it's you, Lady Delta!",
                "line": 28,
                "url": "https://drive.google.com/file/d/1VK-pxBisyoh4Bz3PCkb-tv3EDaeHWvfw/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "You're going to stand in my way?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1q4tUthT4oPNxC2tH27kjqOmLIdbyzqfj/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Yes, I will not allow anyone to pass. This is not just a matter of duty...but my own will!",
                "line": 30,
                "url": "https://drive.google.com/file/d/1P3ksBtbxPSWPl0_gJT8kD9F5bMFfXb97/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Alright... Let's play!",
                "line": 31,
                "url": "https://drive.google.com/file/d/1NaDFZcBQDBvdsQXtJpiThen9leE0NaH9/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Urk...! Lady Delta's aura has changed...!",
                "line": 32,
                "url": "https://drive.google.com/file/d/1BVing-7yifNaVN7isYWR277zrcQEYiB8/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "But we can't back down now... Looks like we have no choice but to fight.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1RP1WmznZgWA3ES_YswrHXUliO9EQK1f6/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "If the four of us work together, we might be able to buy some time. Let's hope things go well inside in the meantime.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1M83lv4qD3v1-vVKQVtG4zcBDDsPRvhS1/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Are you all really serious? Taking on one of the Seven Shadows, especially one who specializes in combat, do you realize how crazy that sounds?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1PZxlRDw5HGtS0go0FWpnyC5WQU1V2lZ0/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "But we're doing it, right?",
                "line": 36,
                "url": "https://drive.google.com/file/d/1_TKiErz6GQEzkuDIlr6AfktQ8O1gJnPN/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Hahah. Totally. Looks like we've all been caught up in the Valentine's Day spirit.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1xtbverQJWzxrigFLrw8Vsc3d2BN047hn/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Here she comes! Get ready to intercept!",
                "line": 38,
                "url": "https://drive.google.com/file/d/1o1j3E9pY5csfqhTFmehZZM9UWkgEm0Bl/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Thank you for coming today. I bet you were surprised for me to ask you here out of the blue?",
                "line": 39,
                "url": "https://drive.google.com/file/d/1Gzo4g6ZscPV4B0Sa6tl0M3mmlKRw2XNK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'm kind of used to it. You've been asking me to meet you a lot lately.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1d1F4jP7_b85dcyaG9PPX-pIrTvCsIUce/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "R-Right... So, um, today...",
                "line": 41,
                "url": "https://drive.google.com/file/d/1hnSaGr5t7wg_U1z5j0VFTNCX7KqdA-5U/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(Why...? Why am I struggling to speak properly...?)",
                "line": 42,
                "url": "https://drive.google.com/file/d/1PyR4xWWqkFKJdodky-0mT3q9GwuzMB9d/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(All that special training will go to waste if I don't give him the chocolates in the perfect way...!)",
                "line": 43,
                "url": "https://drive.google.com/file/d/1Zi3z9WUAMWUri4a9P3g2rpyCBjI3gC02/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Cid. I have something for you\u2014",
                "line": 44,
                "url": "https://drive.google.com/file/d/1BCkV08ICmJRRqv1eCZoZNQ_wpGs_w4O2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Isn't it kinda noisy outside?",
                "line": 45,
                "url": "https://drive.google.com/file/d/13TleLvCSSTO6LyoMzpuW3XGLXrR_gvm9/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Huh? Now that you mention it\u2014",
                "line": 46,
                "url": "https://drive.google.com/file/d/1NzUT2XALVINAtfEyorZGxiYrTBWtoppI/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Aagh...?!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1nOVDs8Co7GXWBoDmpH9Y-m3cA8zJLzQk/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "La-Lambda?!",
                "line": 48,
                "url": "https://drive.google.com/file/d/15Mne-Qnmc9azTa9qxjiacDk9Ka274izX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "The door just flew open. You all look beat up... What's going on?",
                "line": 49,
                "url": "https://drive.google.com/file/d/1G9JCnJBCehx_6zlpVSnbSwC2adV3dtWZ/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Agh... She's too strong...!",
                "line": 50,
                "url": "https://drive.google.com/file/d/17zPYFrNiCIxtdoESTz4yF0Io5wdkduTJ/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "*huff, huff* So much for buying time...",
                "line": 51,
                "url": "https://drive.google.com/file/d/1SUSfMDvLedg8pLHpiQ3iTi9il-QZl1od/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "A-All of you...!",
                "line": 52,
                "url": "https://drive.google.com/file/d/19tHWaryRzqEGnmXF9UkTqCMm2UvQ7Bdr/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "I'm sorry, Lady Alpha... We were no match for Lady Delta...",
                "line": 53,
                "url": "https://drive.google.com/file/d/1kGJVi3Qb3VeoRJB7ZTpTAzmJU3lqG1wo/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hehe! What weaklings!",
                "line": 54,
                "url": "https://drive.google.com/file/d/1bFzh7yyhu2HuamXxpktr3Kd-7CuAm7TW/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Delta, you're here too... What in the world...?",
                "line": 55,
                "url": "https://drive.google.com/file/d/1Iz8rHP9dOyFf9gijlas2juDHTcns8J2s/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hey, Lady Alpha! Are you hogging Boss man all to yourself? That's not fair!",
                "line": 56,
                "url": "https://drive.google.com/file/d/1GxcuKjOr0g-dMyUiJia6nfR8hba6V1IU/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(I'm not sure what's happening, but I can't just stand by and let Delta do this...)",
                "line": 57,
                "url": "https://drive.google.com/file/d/1iD1sVUHkqQYtejEZKdaNLQ83nxwEGzEp/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Everyone, step back.",
                "line": 58,
                "url": "https://drive.google.com/file/d/1H_xelLxUOCnWMDx3dx4hzNU54nQcl8bz/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "I-I can still fight! As an instructor, I must see it through to the end...!",
                "line": 59,
                "url": "https://drive.google.com/file/d/1ET1F3iQBKgYdL3OBv04aQP8WzRvmeLtt/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Lambda... Alright. Let's stop Delta together!",
                "line": 60,
                "url": "https://drive.google.com/file/d/1nehz-9tSEyCTNSB3ucLCojedGfrgqztw/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Uh, what's going on here?",
                "line": 61,
                "url": "https://drive.google.com/file/d/1NfIvWERrK9SoE6f-UF8nd0Pbj-lyEIs1/view?usp=drivesdk"
            }
        ],
        "e7": [
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ulp... Lady Alpha really is strong...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1vjRaSDAz43JBqJlwFf9f7TS4CoN8Nx3s/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Looks like you've calmed down. Make sure to arrange to repair the door you broke.",
                "line": 2,
                "url": "https://drive.google.com/file/d/11yHUsxS0VaPbS1jSUYXDAT6e4j2Io7py/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Yes, ma'am...",
                "line": 3,
                "url": "https://drive.google.com/file/d/1IWPl0f_8kjNKJSijbGq6aOKsG5lFoMn8/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Seriously...",
                "line": 4,
                "url": "https://drive.google.com/file/d/1fdx06VsU8XYjqxSwoWHy6ov5JkbKpLQf/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(The situation and mood are completely off... The atmosphere just isn't right for giving chocolates now...)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1mkGcFlH_GhbmOC9xq0Cd933j9k7iWRr5/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Lady Alpha! Now's your chance!",
                "line": 6,
                "url": "https://drive.google.com/file/d/1vdo_hAfcWq2KN0U0c-QpCF0f9qo3eYDi/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Huh?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1QnW67TYUyQp5HxaykGS8kHXG_cnw2SmN/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "If you've resolved yourself to giving it to him, then you must follow through to the end!",
                "line": 8,
                "url": "https://drive.google.com/file/d/18Qt63__MqOhGafPDALqReKXQM5uAJaxQ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Lambda... Alright.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1t3uL6AOJsoOXfD6jvtGQ9cUuQfyDpVUa/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Ci...Cid!",
                "line": 10,
                "url": "https://drive.google.com/file/d/1Q1ie-jATGfX0PljEAL-ISLPq52jx5y3H/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh? Yeah, what?",
                "line": 11,
                "url": "https://drive.google.com/file/d/1X3KKCHiVKPO_MZltcOwOQpuSWq08RL0m/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I prepared chocolates for you. Will you accept them?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1ocKet9vgQa7P0D3U18BqsI-UfGaV-PF7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "For me? Wait, did you make them yourself?",
                "line": 13,
                "url": "https://drive.google.com/file/d/1zGbcV7BWS6rqXkyE-i9WRqnsxIPGdEXj/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes. They're made with my gratitude. I may not be able to repay everything you've done for me, but...",
                "line": 14,
                "url": "https://drive.google.com/file/d/12vZ-occtHBqLMLaQ6EOrnO8SpNTHI_nu/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(This situation is far from romantic, and I haven't managed to do what I trained for. He might be disappointed, but...)",
                "line": 15,
                "url": "https://drive.google.com/file/d/1oR45d3vKdww8JfNl8Tlk9TJPZtdIJ8mP/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(I have to convey my feelings...!)",
                "line": 16,
                "url": "https://drive.google.com/file/d/1_FJvUfgoGBaLVQ2hPGExXhRS0So3ScQ0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh, thanks. I really appreciate it.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1UMfP2qFEpdE4kPI-wJRgcl3SXpeMdsif/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Really...appreciate it? Honestly...?",
                "line": 18,
                "url": "https://drive.google.com/file/d/1s0A_IdRmiNBr9k-GciSI8fTnuEbmAS95/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yeah, honestly. \"Gratitude\" sounds be a bit over the top, but since you made it yourself, I'm sure it's delicious.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1FxSRbzYaWMIunKueOeuZ_ydDEUEFKVaM/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "(He's genuinely happy... It's like he's accepting me just as I am...)",
                "line": 20,
                "url": "https://drive.google.com/file/d/13oscWX-_1Y1bEdaBfCxCj8nyEVmJVy2Z/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm happy to hear that...truly.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1sGLw7cGBlz2O9PZPho1YpJ2_q82_K47X/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ulp... Was I maybe not supposed to be here...?",
                "line": 22,
                "url": "https://drive.google.com/file/d/1soEHMQnyI5RLNPr2kkJgbDv2bg_25sD9/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Breaking into places and taking out your allies is never commendable.",
                "line": 23,
                "url": "https://drive.google.com/file/d/13uGMcbsUl6NVZY2zEl6bX0xq25Xbh6eU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "S-Sorry...",
                "line": 24,
                "url": "https://drive.google.com/file/d/1jVGR0q0OeT6ufbp4CqfqKD5-cOkpfx0e/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But, thanks to you, Delta, I've come to realize the importance of expressing my emotions honestly. So, thank you.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1hdCndoVHYTPgjdj7NEu7tAObJdluZyRK/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...Huh? A pat on the head? Even though I was just scolded?",
                "line": 26,
                "url": "https://drive.google.com/file/d/1sXbMcIF3DpWw0PkZTvmhi1UDE-9AmIJQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Right, all's well that ends well. Not that I really understand what just happened.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1VL6rVJfGYc9UsB3CqnW9cuDTIn3yjEnJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "By the way, is it okay for me to eat this chocolate now? Can I open it?",
                "line": 28,
                "url": "https://drive.google.com/file/d/1ccV14qVBYo5CthsFbMBO35PGIk7DmizM/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Of course. But it might have been crushed during the fight just now...",
                "line": 29,
                "url": "https://drive.google.com/file/d/1s1T0axOfu4aAWeG6nSV8dYPC0EKqqEzO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Nah, I think it's fine. Look\u2014",
                "line": 30,
                "url": "https://drive.google.com/file/d/1f3joqXD5N4VKKwWtTq2SS8pRLL_dKSbq/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Whew, it's okay...! It held together.",
                "line": 31,
                "url": "https://drive.google.com/file/d/12Tno01kLluGIzRCxah3Wojx8wvO7Wwmc/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Yes. It's as perfect as when it was made.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1WMz-WFz0Tp8HJxETASnKVg0tPS7Lh5QO/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "By the way, Lady Delta, you wanted to eat stew, didn't you? Lambda can make some for you just right over there.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1fPZwr1Z-KxMWBGUnaRUxOlaHl1uWuZej/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "...Heheh. I see where this is going.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1x-G5XfdNh9_4N_-xaDg3I9S5XVWKpggd/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Lambda is quite a good cook, you know. Why not try some?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1ue3q0e3CXSchXLr1XA8ls3ChH72OOuRa/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Stew! I wanna eat some!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1UFRCOg7KDtuuCzWMlDkdx5B3zj7UCJZK/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Right. Then, please come this way. ...You too, Lambda.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1sf79F6Vn0bUfo-UA0IYsCEopBk8weGQ5/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "What are you three suddenly on about\u2014",
                "line": 38,
                "url": "https://drive.google.com/file/d/1gMP9pngkD8gKfXujCcMNMFb0lXf9qzMa/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Ah, right. Back to the original plan, huh.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1Iouhkh8G8y0i2NCxED2hTMNPXJpmWnq2/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Well then, Master Shadow, Lady Alpha, we'll take our leave.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1uJjMY-3UpFTmbUuySg-TDCzBOCcg4gge/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "She wanted to eat stew that badly?",
                "line": 41,
                "url": "https://drive.google.com/file/d/19AiFlbgwjeZIYuJy03BmW_Q6NIfW9QWE/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It seems so. Well then, shall we eat the chocolates?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1snGqakmSSLpADVUfjaIxPd1Ao3_kifvE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yes, let's eat... Mmm! Delicious! It's so creamy with just the right sweetness!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1eEd3TeEtqqLff9bmaJRwIMIcm0xPYuzg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "It's more fancy than store-bought ones. As expected, Alpha, even your chocolate-making skills are impeccable.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1UHzARrHp6u8UZyvW7cQIMqfGWwsbK5fy/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Heheh... Hearing that from you makes the effort I put into making them completely worthwhile.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1kUqpD2JX0n2MalmthsMzzavTAgMyE7eW/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Hey, Cid, is it really delicious?",
                "line": 46,
                "url": "https://drive.google.com/file/d/1UcNubEdQtF_J3Dn9PUc-TFLrONrYejcP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yes, delicious... Wait, didn't I just say that?",
                "line": 47,
                "url": "https://drive.google.com/file/d/1cvGutdq7qIdv5pZoS8oC5hDGzuMAg_Yf/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Heheh. Maybe. I like hearing it again.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1jGEHL5pbjLqUfC_XEr9ZQZeZ9PxM0pGj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I ended up spending quite a bit of time with Alpha. Hmm, the quality of those chocolates... I wonder if it could be commercialized.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1br-2wdgCd8iu7i6ygGKSvAn2YoQvbSPo/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "That said, it seems no one noticed. Alpha seemed happy as well, so that's a relief.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1ONcivKZwuYHcGbVaKBuv1oFDtR2FwHbM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "The moment Delta charged, I secretly protected the chocolate with a slime barrier! It's one of my secret techniques\u2014\"Seriously Hard Coating\"!",
                "line": 51,
                "url": "https://drive.google.com/file/d/143ilOBQl6_X-RfWJ7lKEos9oMFjYmwEL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(And to think, the chocolate I protected was for me. Well, I'll make it up to her gradually over time.)",
                "line": 52,
                "url": "https://drive.google.com/file/d/1Uc_e4iyulwR2QJ4c1JLQdYAcMwJdO1Un/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "After all, I want to continue playing these shadowbroker games with Alpha!",
                "line": 53,
                "url": "https://drive.google.com/file/d/1DuZt4z_OoV-2CFa0kGP4MjDBsLRmGIH-/view?usp=drivesdk"
            },
            {
                "name": "",
                "name_variant": "",
                "subtitle": "Nodding with a content expression, he mutters slightly bizarre things as he vanishes into the darkness of the night...",
                "line": 54,
                "url": "https://drive.google.com/file/d/1fTp3t2gXyCbxaPauKnjlOflvPU8e92R4/view?usp=drivesdk"
            }
        ]
    }
}

let setDoc = db.collection('data').doc('es_tghms').set(data['tghms']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
