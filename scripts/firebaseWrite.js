const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "s2": {
        "e5": [
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "We are succeeding in minimizing the attacks against our transport trains.",
                "line": 1,
                "start_time": "0-00-07.750000",
                "end_time": "0-00-11.040000",
                "url": "https://drive.google.com/file/d/1VS0ghTctJC_N3h0DAdFnMsDzSlaWxJ0J/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "And we are dominating in the marketplace.",
                "line": 2,
                "start_time": "0-00-11.670000",
                "end_time": "0-00-13.710000",
                "url": "https://drive.google.com/file/d/1NOGhjI9w0-zizarLwh_52qWUsYanYxG0/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "The Major Corporate Alliance lacks the Wisdom of the Shadows.",
                "line": 3,
                "start_time": "0-00-13.710000",
                "end_time": "0-00-16.250000",
                "url": "https://drive.google.com/file/d/1rD1xt1dDooBqN5uMbqWjYapgJ81Kd9kb/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "So their attempts to supply paper money and create credit will be more than they can handle.",
                "line": 4,
                "start_time": "0-00-16.250000",
                "end_time": "0-00-19.580000",
                "url": "https://drive.google.com/file/d/1EHBHR_XJm_w20hRhzhjfN1WDzDHMv3WG/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "If these circumstances continue,",
                "line": 5,
                "start_time": "0-00-19.580000",
                "end_time": "0-00-21.420000",
                "url": "https://drive.google.com/file/d/1k9kpDeN2CbEQ0oEWcSSds8NfqB97jUVQ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I believe they will be crushed under the weight of their own ambition.",
                "line": 6,
                "start_time": "0-00-21.420000",
                "end_time": "0-00-24.620000",
                "url": "https://drive.google.com/file/d/1eWFR4eXqqXuy6CNeh37N0wo5APjBRPll/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Just as we predicted.",
                "line": 7,
                "start_time": "0-00-24.830000",
                "end_time": "0-00-26.250000",
                "url": "https://drive.google.com/file/d/13mEE0lBxBCs-W7siTjCVV7laTz2GzfJ1/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But remember, as I'm sure you know...",
                "line": 8,
                "start_time": "0-00-26.250000",
                "end_time": "0-00-28.500000",
                "url": "https://drive.google.com/file/d/1H0HwVH_P53lJAjzmXw7yBF_6BYCmtWCr/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "We will not take any actions that would imply Mitsugoshi has a connection to Shadow Garden.",
                "line": 9,
                "start_time": "0-00-29.120000",
                "end_time": "0-00-33.580000",
                "url": "https://drive.google.com/file/d/16rIu48KTft87m_aZ3s7SFVtbXDACAEK_/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Of course, that will force us to rely on passive measures...",
                "line": 10,
                "start_time": "0-00-34",
                "end_time": "0-00-38.120000",
                "url": "https://drive.google.com/file/d/1jVQkwYpFbFieM8cAHho15YrsOa3p3J46/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It only takes a moment for trust to be destroyed.",
                "line": 11,
                "start_time": "0-00-38.460000",
                "end_time": "0-00-41",
                "url": "https://drive.google.com/file/d/1wd0cKN4rd1ximfy2Wjw5x1VAaf5QAnrj/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "We must devote the utmost care to maintaining that trust.",
                "line": 12,
                "start_time": "0-00-41",
                "end_time": "0-00-44.380000",
                "url": "https://drive.google.com/file/d/19aADR07LqSEJY4dFzq68xvE44wuzBVRN/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Surely he taught you that, as well.",
                "line": 13,
                "start_time": "0-00-44.620000",
                "end_time": "0-00-46.290000",
                "url": "https://drive.google.com/file/d/1oD6cAO8rQTk5n9gRs1wN2ZULgcr-nznw/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Indeed.",
                "line": 14,
                "start_time": "0-00-46.290000",
                "end_time": "0-00-47.290000",
                "url": "https://drive.google.com/file/d/1lkLr2iV8Xa8YxpOdonaeBDzaO2oDNoDp/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "For now, we must refrain from any brash behavior.",
                "line": 15,
                "start_time": "0-00-47.290000",
                "end_time": "0-00-50.080000",
                "url": "https://drive.google.com/file/d/1JiE7X8tqVFK7n0RO17oWIh20X7kGikLt/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "I beg your pardon.",
                "line": 16,
                "start_time": "0-00-52.710000",
                "end_time": "0-00-54.120000",
                "url": "https://drive.google.com/file/d/1irzQT0s0ezGwwXeso6fXJikkkH4jTJ4D/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "But we have guests.",
                "line": 17,
                "start_time": "0-00-54.120000",
                "end_time": "0-00-55.500000",
                "url": "https://drive.google.com/file/d/1y7JiSC4QG6kdp64maANAQsonriNwXMLa/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Unlike Garter Kikuchi, it seems this man has little patience.",
                "line": 18,
                "start_time": "0-00-55.500000",
                "end_time": "0-00-59.500000",
                "url": "https://drive.google.com/file/d/14xfrKLpa1uhzEHce24tRSdsZfZ4KwBnx/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "He's young.",
                "line": 19,
                "start_time": "0-00-59.500000",
                "end_time": "0-01-00.960000",
                "url": "https://drive.google.com/file/d/1xZn4QfKI1w0U6V4G3Z9lYO0VHwevPa_k/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "He can't suppress his warrior- or rather, his therianthrope nature.",
                "line": 20,
                "start_time": "0-01-01.170000",
                "end_time": "0-01-04.580000",
                "url": "https://drive.google.com/file/d/128-fzCf8GPiWiwah862V518okGXV8emi/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "In any case, Nu.",
                "line": 21,
                "start_time": "0-01-04.920000",
                "end_time": "0-01-06.210000",
                "url": "https://drive.google.com/file/d/1Lf2S2_xuDJkGmkpeq2ORc_GYtQFp7HFB/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I know it's late, but treat our guests with the proper-",
                "line": 22,
                "start_time": "0-01-06.210000",
                "end_time": "0-01-08.170000",
                "url": "https://drive.google.com/file/d/1KVfHleCH-9Fp5oJlIuTwISkCXORd9Wox/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Lady Alpha...",
                "line": 23,
                "start_time": "0-01-08.170000",
                "end_time": "0-01-09.380000",
                "url": "https://drive.google.com/file/d/1pE5xOHhBbQHkYMYdUjNx-phBfY03vkPj/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Please allow me to handle this.",
                "line": 24,
                "start_time": "0-01-10.420000",
                "end_time": "0-01-12.830000",
                "url": "https://drive.google.com/file/d/1iMNXMRS7sYP1lwbJYlLGYHp8iSatq5Jd/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What?",
                "line": 25,
                "start_time": "0-01-12.830000",
                "end_time": "0-01-13.030000",
                "url": "https://drive.google.com/file/d/1Bh1xjhOxKEeIKz_lm3kMTemfYDYKekGB/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What?",
                "line": 26,
                "start_time": "0-01-13.120000",
                "end_time": "0-01-14.830000",
                "url": "https://drive.google.com/file/d/1GXjMcGUcB9ag_t0BcQYihpnFslK27xBr/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "In any case, Nu...",
                "line": 27,
                "start_time": "0-01-18.750000",
                "end_time": "0-01-20.120000",
                "url": "https://drive.google.com/file/d/11LMJBILSCmnxpUWjmiwl20Kmr_SQgev1/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I know it's late, but treat our guests with the proper-",
                "line": 28,
                "start_time": "0-01-20.120000",
                "end_time": "0-01-22.170000",
                "url": "https://drive.google.com/file/d/1QcvHkqJTz6c9g481rSHLUqImfdhWpQdy/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Lady Alpha...",
                "line": 29,
                "start_time": "0-01-22.170000",
                "end_time": "0-01-23.380000",
                "url": "https://drive.google.com/file/d/18AkSy3ZFy90AxVlrlwReWHavXFhfZ9yh/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Please allow me to handle this.",
                "line": 30,
                "start_time": "0-01-23.790000",
                "end_time": "0-01-25.880000",
                "url": "https://drive.google.com/file/d/1phOTdMQATAOF0QevqKjjLzequ4lbpQwd/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You?",
                "line": 31,
                "start_time": "0-01-27.920000",
                "end_time": "0-01-29.120000",
                "url": "https://drive.google.com/file/d/1Il8rieAEJ4RdxC0Bmg7-kjWP0F3No9Ch/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes, Lady Alpha.",
                "line": 32,
                "start_time": "0-01-29.750000",
                "end_time": "0-01-30.750000",
                "url": "https://drive.google.com/file/d/1YsgbZHvrpUYUmsdR8E2wugt69aMSVyVj/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I will teach our visitors a lesson.",
                "line": 33,
                "start_time": "0-01-30.750000",
                "end_time": "0-01-32.580000",
                "url": "https://drive.google.com/file/d/1rTHp1-I0iHHJCVhAYpE5nDP-FF_fN3WA/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Really...",
                "line": 34,
                "start_time": "0-01-33.080000",
                "end_time": "0-01-34.290000",
                "url": "https://drive.google.com/file/d/1tvfTZJ-IGZw4PtbGgBaksACYbcKyETlk/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "You two, go with her.",
                "line": 35,
                "start_time": "0-01-34.620000",
                "end_time": "0-01-36.750000",
                "url": "https://drive.google.com/file/d/19Sx9ePMMFgkzjlgfUG6mowSMH08Lxseh/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Well, I'm sure it will be fine.",
                "line": 36,
                "start_time": "0-01-41.420000",
                "end_time": "0-01-43",
                "url": "https://drive.google.com/file/d/12BoQ1latfpjNSapEToJN_kJLVthdGxAB/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "She is seventeen years old, after all.",
                "line": 37,
                "start_time": "0-01-43.380000",
                "end_time": "0-01-45.460000",
                "url": "https://drive.google.com/file/d/1qrwC8vhoSXqvi2tT4rcDAgDWG1abVDE3/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "What?",
                "line": 38,
                "start_time": "0-01-45.620000",
                "end_time": "0-01-46.520000",
                "url": "https://drive.google.com/file/d/1jVc8aMYSxra4_WrZqfnJgD54Bc9khgAu/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "What?",
                "line": 39,
                "start_time": "0-01-46.530000",
                "end_time": "0-01-48.040000",
                "url": "https://drive.google.com/file/d/1eIiaovvAvg8ud_WvERaZb3ykKJ5_wV3e/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha & Nu (Alpha)",
                "subtitle": "What?",
                "line": 40,
                "start_time": "0-01-51.120000",
                "end_time": "0-01-52.330000",
                "url": "https://drive.google.com/file/d/1SpjAeJ5rxcrgwNXMfEbBuCttiXILmh5h/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Alpha & Nu (Nu)",
                "subtitle": "What?",
                "line": 40,
                "start_time": "0-01-51.120000",
                "end_time": "0-01-52.330000",
                "url": "https://drive.google.com/file/d/1SpjAeJ5rxcrgwNXMfEbBuCttiXILmh5h/view?usp=drivesdk"
            },
            {
                "name": "Leaf Three",
                "name_variant": "Leaf Three",
                "subtitle": "It was awfully easy to get in.",
                "line": 41,
                "start_time": "0-03-32.250000",
                "end_time": "0-03-33.920000",
                "url": "https://drive.google.com/file/d/1W7U_1Qa5sG_yzF-YuM8uNoTWkxpiA1aw/view?usp=drivesdk"
            },
            {
                "name": "Leaf Two",
                "name_variant": "Leaf Two",
                "subtitle": "They're probably using all their security to guard their transports.",
                "line": 42,
                "start_time": "0-03-34.250000",
                "end_time": "0-03-36.880000",
                "url": "https://drive.google.com/file/d/1FhngAlzmFvVH3W7X1b5dGV_8HDa9r4MZ/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Our target is the manager, an elf woman known as Luna.",
                "line": 43,
                "start_time": "0-03-37.790000",
                "end_time": "0-03-41.210000",
                "url": "https://drive.google.com/file/d/1Pmm-hr32YK2Q6FQAHdHg0YFPwa1l_Ysg/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Let's find her office.",
                "line": 44,
                "start_time": "0-03-41.620000",
                "end_time": "0-03-43.040000",
                "url": "https://drive.google.com/file/d/1kvo6pUU_9y5GYrrbS30iQ2F6Bic5H4vR/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Is that...",
                "line": 45,
                "start_time": "0-03-45.210000",
                "end_time": "0-03-46.420000",
                "url": "https://drive.google.com/file/d/1k-acqJYQ4KLtm-lqWlHDhp1fuwNkvHEl/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Thank you for coming to Mitsugoshi.",
                "line": 46,
                "start_time": "0-03-47.170000",
                "end_time": "0-03-49.380000",
                "url": "https://drive.google.com/file/d/1WKW3ESpXIzBSor0GNbG1VpmkHL142HB5/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "I am the manager, Luna.",
                "line": 47,
                "start_time": "0-03-49.380000",
                "end_time": "0-03-51.880000",
                "url": "https://drive.google.com/file/d/1VoyUbKKCzONg2n5iGyyGRPq7KI9it3OL/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "And I am here to welcome you.",
                "line": 48,
                "start_time": "0-03-51.880000",
                "end_time": "0-03-54.210000",
                "url": "https://drive.google.com/file/d/1O2DDCPB2iOTmR0zm2YYFyzv2a-QkJZdg/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "What?!",
                "line": 49,
                "start_time": "0-03-56.750000",
                "end_time": "0-03-57.960000",
                "url": "https://drive.google.com/file/d/1a2WpRaTKJ6CLOO33ltVaziEO8ee0JdyY/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "But there's no sign of any bodyguard.",
                "line": 50,
                "start_time": "0-03-59.380000",
                "end_time": "0-04-02.790000",
                "url": "https://drive.google.com/file/d/1jredGXvNwOXacGetU9Hh9er4XKl2tLk_/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Her confidence is a bluff.",
                "line": 51,
                "start_time": "0-04-02.790000",
                "end_time": "0-04-04.920000",
                "url": "https://drive.google.com/file/d/1847gfgNXoWy8C3Ud2wv824pd2AYGfT61/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "I am the man who earned the title of Leaf One, strongest of the Clovers.",
                "line": 52,
                "start_time": "0-04-05.330000",
                "end_time": "0-04-09.120000",
                "url": "https://drive.google.com/file/d/1q10xRN4hNozinyou8pAZabEJAJyAjH0T/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "No one has engaged me in battle and come out unscathed!",
                "line": 53,
                "start_time": "0-04-09.120000",
                "end_time": "0-04-11.960000",
                "url": "https://drive.google.com/file/d/1L5O1109pDeBmz2figATWOt23QQ60EvtG/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "If you don't want to die, then be a good girl and say goodnight!",
                "line": 54,
                "start_time": "0-04-13.250000",
                "end_time": "0-04-16.580000",
                "url": "https://drive.google.com/file/d/15GqvNdkjYe8FxhXH8SYgoX5THFk8ApVt/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "That hurts!",
                "line": 55,
                "start_time": "0-04-17.250000",
                "end_time": "0-04-20.830000",
                "url": "https://drive.google.com/file/d/1c8yOWteF-8GS2ehWjlxPuN7owf0H6stz/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Y-you...",
                "line": 56,
                "start_time": "0-04-23.120000",
                "end_time": "0-04-24.330000",
                "url": "https://drive.google.com/file/d/1WDCbNTtF0QzdOdkDGnfH29IBDs9qaDDG/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Huh?",
                "line": 57,
                "start_time": "0-04-24.710000",
                "end_time": "0-04-25.920000",
                "url": "https://drive.google.com/file/d/1rfijkiSM3qsBdpmK8H_wsyWVc1FShyw1/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Ugh!",
                "line": 58,
                "start_time": "0-04-25.920000",
                "end_time": "0-04-26.960000",
                "url": "https://drive.google.com/file/d/1s8cjIVHida3QWIysD9L6Dz-tqFUG2qzl/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "In these situations, you start with a powerful frontal attack and then just play it by ear!",
                "line": 59,
                "start_time": "0-04-26.960000",
                "end_time": "0-04-29.830000",
                "url": "https://drive.google.com/file/d/1ewmABlMWVAfeB-XlT44-rCUFhapnKUUZ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Don't you know that?",
                "line": 60,
                "start_time": "0-04-29.830000",
                "end_time": "0-04-31.880000",
                "url": "https://drive.google.com/file/d/1ZX41iC61cWW3jWvL73q8vECeoIZGSIdW/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "This is the trouble with entitled customers!",
                "line": 61,
                "start_time": "0-04-33.250000",
                "end_time": "0-04-35.460000",
                "url": "https://drive.google.com/file/d/1VZx9qIlF7N3a3a6wPZuOC6L1Ff29jqmP/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "That black artifact...",
                "line": 62,
                "start_time": "0-04-37.330000",
                "end_time": "0-04-39.830000",
                "url": "https://drive.google.com/file/d/1SjtUZmSOe9_TouHdxd0L-_MrZE7U9Z0z/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "It can't be!",
                "line": 63,
                "start_time": "0-04-39.830000",
                "end_time": "0-04-41.040000",
                "url": "https://drive.google.com/file/d/1AlissyR2rTKeAC6IL5ACaaI7bJ-tLWJ0/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "She's fast!",
                "line": 64,
                "start_time": "0-04-44.540000",
                "end_time": "0-04-45.750000",
                "url": "https://drive.google.com/file/d/118p_ZD3sGzVoH1pOYnxJ2nJRvzFwI6c1/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "But...",
                "line": 65,
                "start_time": "0-04-46.040000",
                "end_time": "0-04-47.040000",
                "url": "https://drive.google.com/file/d/1qMIlHyXeiykhDvHeNcu6yOTbc5vQd47N/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Take that and that and that and that and that!",
                "line": 66,
                "start_time": "0-04-47.040000",
                "end_time": "0-04-48",
                "url": "https://drive.google.com/file/d/1rufpMdw0hbpdHnn5hA7soebgwbpF4uvy/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "That's all she is.",
                "line": 67,
                "start_time": "0-04-48",
                "end_time": "0-04-50",
                "url": "https://drive.google.com/file/d/147XFnGdM6cY2nDVvk0uwuauHxF4C7PyX/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Take that and that and that and that and that!",
                "line": 67,
                "start_time": "0-04-48",
                "end_time": "0-04-50",
                "url": "https://drive.google.com/file/d/147XFnGdM6cY2nDVvk0uwuauHxF4C7PyX/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "She's fast, but she's a total amateur!",
                "line": 68,
                "start_time": "0-04-50.120000",
                "end_time": "0-04-52.790000",
                "url": "https://drive.google.com/file/d/1Ri8vr1iz02GTqZJUnCMWOiDHpLiu16hu/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Take that and that and that and that and that!",
                "line": 68,
                "start_time": "0-04-50.120000",
                "end_time": "0-04-52.790000",
                "url": "https://drive.google.com/file/d/1Ri8vr1iz02GTqZJUnCMWOiDHpLiu16hu/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "And that!",
                "line": 69,
                "start_time": "0-04-52.790000",
                "end_time": "0-04-54",
                "url": "https://drive.google.com/file/d/1kBbjDBAmGgO4tNaTgPmWeQien8hwkx1y/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "That footwork, you're a student of the Western Liechtenroi style of fencing, aren't you?",
                "line": 70,
                "start_time": "0-04-57.170000",
                "end_time": "0-05-01.380000",
                "url": "https://drive.google.com/file/d/1C_GBXUwR5qkZMOHawvuBqp5abmrjWD1p/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "What?",
                "line": 71,
                "start_time": "0-05-01.380000",
                "end_time": "0-05-02.380000",
                "url": "https://drive.google.com/file/d/1quQWecILCY_r3whgYXlviO5dJ3KuIamn/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "In just a few seconds, she identified my fighting style?",
                "line": 72,
                "start_time": "0-05-02.380000",
                "end_time": "0-05-04.620000",
                "url": "https://drive.google.com/file/d/1YGTBlcrzZa_bQRDW5Fp8Kv_AbagY1wSL/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Now that I know your style, I can easily counter it!",
                "line": 73,
                "start_time": "0-05-04.620000",
                "end_time": "0-05-07.290000",
                "url": "https://drive.google.com/file/d/1GTKmsGdzhfvI6oagkGBQlzbMHyoCJ5XV/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Take that and that and that!",
                "line": 74,
                "start_time": "0-05-07.290000",
                "end_time": "0-05-08.790000",
                "url": "https://drive.google.com/file/d/1hUlRMw6xQUWI2-qyhbcBjaqTkMrgcP4E/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "She should be able to predict my every move now,",
                "line": 75,
                "start_time": "0-05-08.790000",
                "end_time": "0-05-12.210000",
                "url": "https://drive.google.com/file/d/1mEQc-w9UF8kzQSWScaCR_wAfnLl3VoFn/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Take that and that and that and that and that!",
                "line": 75,
                "start_time": "0-05-08.790000",
                "end_time": "0-05-12.210000",
                "url": "https://drive.google.com/file/d/1mEQc-w9UF8kzQSWScaCR_wAfnLl3VoFn/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "but her approach is still exactly the same!",
                "line": 76,
                "start_time": "0-05-12.210000",
                "end_time": "0-05-14.290000",
                "url": "https://drive.google.com/file/d/1xD7sO4Omrw8OhgsNPh0DjE2Kge0O1SvO/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Take that and that and that and that and that!",
                "line": 76,
                "start_time": "0-05-12.210000",
                "end_time": "0-05-14.290000",
                "url": "https://drive.google.com/file/d/1xD7sO4Omrw8OhgsNPh0DjE2Kge0O1SvO/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "She is an amateur!",
                "line": 77,
                "start_time": "0-05-14.290000",
                "end_time": "0-05-15.710000",
                "url": "https://drive.google.com/file/d/1xhuxluODp9Zby-CEUJ7_96pV2qoyG-wK/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Take that and that and that and that and that!",
                "line": 77,
                "start_time": "0-05-14.290000",
                "end_time": "0-05-15.710000",
                "url": "https://drive.google.com/file/d/1xhuxluODp9Zby-CEUJ7_96pV2qoyG-wK/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "That hurts!",
                "line": 78,
                "start_time": "0-05-18.790000",
                "end_time": "0-05-21.750000",
                "url": "https://drive.google.com/file/d/1fdurW3XK9yeNnV9szb3wL9woHmDjdTc7/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "I was absolutely sure that was a direct hit!",
                "line": 79,
                "start_time": "0-05-25.790000",
                "end_time": "0-05-27.830000",
                "url": "https://drive.google.com/file/d/1SVfQdMBfHzDF_Xz_ZFKx2Bslr1WYZh79/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "So why? What in blue blazes is going on?!",
                "line": 80,
                "start_time": "0-05-27.830000",
                "end_time": "0-05-30.120000",
                "url": "https://drive.google.com/file/d/1yGGw91H8sbdv3OK9YByDzeheiRoz2PNk/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "You are a skilled warrior to land a hit on me!",
                "line": 81,
                "start_time": "0-05-31.460000",
                "end_time": "0-05-34.790000",
                "url": "https://drive.google.com/file/d/1yd4o4KS8m_liyCTCochwO6hR5ufBgK_v/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Very well.",
                "line": 82,
                "start_time": "0-05-34.790000",
                "end_time": "0-05-36",
                "url": "https://drive.google.com/file/d/19w3k4i1aE4BdV3Hxv9vdzrW7jCbR--ZG/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "I grant you the honor of facing my full fury for that!",
                "line": 83,
                "start_time": "0-05-36",
                "end_time": "0-05-39.750000",
                "url": "https://drive.google.com/file/d/1FxFu5hunOGQBiGKOWoTR6c4kzYiXMNCS/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Dammit!",
                "line": 84,
                "start_time": "0-05-43.290000",
                "end_time": "0-05-44.500000",
                "url": "https://drive.google.com/file/d/1TGj03oi2AWAz_FwShvhrRr9YAXWzLJxJ/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "What is with all that excessive magical energy?!",
                "line": 85,
                "start_time": "0-05-44.500000",
                "end_time": "0-05-46.620000",
                "url": "https://drive.google.com/file/d/1wMmbjL262KqTbptkFQpI1xO95GXatav5/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "And that battle cry!",
                "line": 86,
                "start_time": "0-05-46.620000",
                "end_time": "0-05-48.040000",
                "url": "https://drive.google.com/file/d/1uK5JBfao4gNrlscwXFzVU7nof9hZV4a4/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Hear what my great lord and master taught me.",
                "line": 87,
                "start_time": "0-05-50.330000",
                "end_time": "0-05-53.040000",
                "url": "https://drive.google.com/file/d/1wG5xWcdiLtxlEl9KRpEvkPKQ3EJ3LBA0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Yeah, lemme think...",
                "line": 88,
                "start_time": "0-05-54.380000",
                "end_time": "0-05-56.170000",
                "url": "https://drive.google.com/file/d/1YaiWyXV4OUywwihvvVExuBBVdccBVIaE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "For you, Gamma...",
                "line": 89,
                "start_time": "0-05-56.170000",
                "end_time": "0-05-57.830000",
                "url": "https://drive.google.com/file/d/12TyOaPcwxXYfR_2N4OTOrzysHlCpfd_p/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Your stats are ridiculously high, so...",
                "line": 90,
                "start_time": "0-05-58.380000",
                "end_time": "0-06-01.580000",
                "url": "https://drive.google.com/file/d/1zpDzJbX_CtAKzpsdNsuUIwAGsvJ1bc4l/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "To start with...",
                "line": 91,
                "start_time": "0-06-01.580000",
                "end_time": "0-06-03.250000",
                "url": "https://drive.google.com/file/d/1GVEla8PV6wAKa1TfT9cVP0Ct54UESQoZ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "\"Jam a lot of magical energy into it and hack away!\"",
                "line": 92,
                "start_time": "0-06-03.830000",
                "end_time": "0-06-06.880000",
                "url": "https://drive.google.com/file/d/1wL4qFRJwcijUVuNrFXfD7sEyv-ucQNAf/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "\"And when you slash, make sure to look intimidating!\"",
                "line": 93,
                "start_time": "0-06-09.460000",
                "end_time": "0-06-12.830000",
                "url": "https://drive.google.com/file/d/1PsFRo7zlnsSL8VUg6VOY93CZWoCWdZC0/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Take that and-",
                "line": 94,
                "start_time": "0-06-12.830000",
                "end_time": "0-06-14.040000",
                "url": "https://drive.google.com/file/d/1Tid64lq-bk9cPY3Gc6jVk5moi4Xpw6XN/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Huh?",
                "line": 95,
                "start_time": "0-06-23.750000",
                "end_time": "0-06-24.960000",
                "url": "https://drive.google.com/file/d/1tJ6RBn_SyJJtdnuII2SSgusmkINBtUuD/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Well played, my good sir.",
                "line": 96,
                "start_time": "0-06-27.880000",
                "end_time": "0-06-29.420000",
                "url": "https://drive.google.com/file/d/1OWWuGttRSS_qL1q8vnc3mWY7-xvDYXk2/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Acting as though you were only evading my attack",
                "line": 97,
                "start_time": "0-06-29.420000",
                "end_time": "0-06-31.960000",
                "url": "https://drive.google.com/file/d/1juAlltmZpp7h9eo89Ndykxmnmr-li0A0/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "while using the lay of the land to set a clever trap.",
                "line": 98,
                "start_time": "0-06-31.960000",
                "end_time": "0-06-34.920000",
                "url": "https://drive.google.com/file/d/1RAwYMeuS-bIlX0GTIl2aToUF1ReWBd4P/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "I'd expect nothing less of a grand master of the Liechtenroi style.",
                "line": 99,
                "start_time": "0-06-36.170000",
                "end_time": "0-06-39.080000",
                "url": "https://drive.google.com/file/d/1rhdxB0pZOir_ro6t4nxV-OtYaYI9BPd1/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Your nose is bleeding.",
                "line": 100,
                "start_time": "0-06-39.580000",
                "end_time": "0-06-41",
                "url": "https://drive.google.com/file/d/1m2cgWEe0wwhmDi8TVLJraBn2jewf52nv/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Uh, anyway, I don't want anything more to do with this woman-",
                "line": 101,
                "start_time": "0-06-41.880000",
                "end_time": "0-06-45.040000",
                "url": "https://drive.google.com/file/d/1JkoscHAXp2XRVr1pjycLbztek-zru6Xv/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "I mean!",
                "line": 102,
                "start_time": "0-06-45.040000",
                "end_time": "0-06-46.250000",
                "url": "https://drive.google.com/file/d/1BhaaJrEwIvKRMfQyO6vV2D3OQ6xNBdfU/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Apparently, this woman is too much for me to handle.",
                "line": 103,
                "start_time": "0-06-46.250000",
                "end_time": "0-06-50.040000",
                "url": "https://drive.google.com/file/d/1L-a56iqxSYhZKoy1d5QjsBUEBG5s1iS5/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Men! It's time you quit messing around! We need to beat a tactical-",
                "line": 104,
                "start_time": "0-06-50.710000",
                "end_time": "0-06-53.620000",
                "url": "https://drive.google.com/file/d/17PTF2GrpOBqC8_CzKVuTYvhL4qe7Parl/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "As for your missing children...",
                "line": 105,
                "start_time": "0-06-53.620000",
                "end_time": "0-06-55.250000",
                "url": "https://drive.google.com/file/d/1vcwGk-uXwQJ6YNZbgHQtnGD369w-W0Zo/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "We have been looking after them for you.",
                "line": 106,
                "start_time": "0-06-56.420000",
                "end_time": "0-06-58.290000",
                "url": "https://drive.google.com/file/d/1HtAw_jgxws0zM01nKKIq9wFm9ZMSs5N0/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Be careful, you two!",
                "line": 107,
                "start_time": "0-07-00.920000",
                "end_time": "0-07-02.620000",
                "url": "https://drive.google.com/file/d/1q1s1DLr80Fz7tsKq3ox7WfZFQHgGYci2/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "That man has mastered the Liechtenroi technique.",
                "line": 108,
                "start_time": "0-07-03.670000",
                "end_time": "0-07-06.750000",
                "url": "https://drive.google.com/file/d/1UeUONFc2PF4g8K9gwhEJKVLPSjmNBWY1/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "He's most likely one of the greatest fencers in the entire world!",
                "line": 109,
                "start_time": "0-07-06.750000",
                "end_time": "0-07-09.420000",
                "url": "https://drive.google.com/file/d/17Izr_zdast6J_soQkYFUqDgUuv4tRnkM/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "That is impressive.",
                "line": 110,
                "start_time": "0-07-09.710000",
                "end_time": "0-07-11.380000",
                "url": "https://drive.google.com/file/d/1Mrxdfymrkt75-MfXUOMi4x-z9qMwoPJ8/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "No, I'm not! I'm just...",
                "line": 111,
                "start_time": "0-07-12.420000",
                "end_time": "0-07-15",
                "url": "https://drive.google.com/file/d/1S4sIAGd-uKnYMlI67Zw4_v3goivGd2fC/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "But I have seen the secret behind your eminent power.",
                "line": 112,
                "start_time": "0-07-16.460000",
                "end_time": "0-07-19.880000",
                "url": "https://drive.google.com/file/d/1adwa2_ruMUkAqJJHwEbSFNWPuTB57eMF/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "From now on, I will show you my full strength!",
                "line": 113,
                "start_time": "0-07-19.880000",
                "end_time": "0-07-22.250000",
                "url": "https://drive.google.com/file/d/1EGv0JWfPv5CTXMmkyAcoikSpiLjlTu7q/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Please make it stop...",
                "line": 114,
                "start_time": "0-07-23.580000",
                "end_time": "0-07-25.210000",
                "url": "https://drive.google.com/file/d/1xvnAteIXsEgahPxm3Z2SPd_Ka9JpSgjd/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Damn it all!",
                "line": 115,
                "start_time": "0-07-26.620000",
                "end_time": "0-07-27.620000",
                "url": "https://drive.google.com/file/d/1cKStOweHA94cyuqsQq2mTQjZgK2TDF9j/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "You won't get away from me!",
                "line": 116,
                "start_time": "0-07-27.620000",
                "end_time": "0-07-29.290000",
                "url": "https://drive.google.com/file/d/1_XKLd_XA19WI2SKukmRL4avElK_FXiuK/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "Taaake tha-",
                "line": 117,
                "start_time": "0-07-29.290000",
                "end_time": "0-07-30.790000",
                "url": "https://drive.google.com/file/d/1Evufplp9aImdspG1LMq_I3XoTDrG-ldj/view?usp=drivesdk"
            },
            {
                "name": "Leaf One",
                "name_variant": "Leaf One",
                "subtitle": "Hup!",
                "line": 118,
                "start_time": "0-07-32.790000",
                "end_time": "0-07-34",
                "url": "https://drive.google.com/file/d/1DAIYZgYR7z9YBg1Pmx491ve9yB10X3tJ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "That was my secret technique:",
                "line": 119,
                "start_time": "0-08-01.040000",
                "end_time": "0-08-02.880000",
                "url": "https://drive.google.com/file/d/1MlJ5FLYJB_iWfyWyRW6Mj2onONeAIYlD/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Luna",
                "subtitle": "the Self Sacrifice Spinning Wheel.",
                "line": 120,
                "start_time": "0-08-03.880000",
                "end_time": "0-08-05.920000",
                "url": "https://drive.google.com/file/d/1pBDBEuE7h1STsTnDuZ4V1DkhEGbiCmsT/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi & Omega (Chi)",
                "subtitle": "Your nose is bleeding.",
                "line": 121,
                "start_time": "0-08-07.540000",
                "end_time": "0-08-09.210000",
                "url": "https://drive.google.com/file/d/17bR5sBMPj3frqjpaYXD42IaD3VuyEr1K/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Chi & Omega (Omega)",
                "subtitle": "Your nose is bleeding.",
                "line": 121,
                "start_time": "0-08-07.540000",
                "end_time": "0-08-09.210000",
                "url": "https://drive.google.com/file/d/17bR5sBMPj3frqjpaYXD42IaD3VuyEr1K/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "The Clovers haven't returned, you say?",
                "line": 122,
                "start_time": "0-08-11.080000",
                "end_time": "0-08-13.420000",
                "url": "https://drive.google.com/file/d/1T_H6VswMOy4Xky9sC0wghHwPb7G6npl4/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "Y-yes, sir.",
                "line": 123,
                "start_time": "0-08-13.880000",
                "end_time": "0-08-15.420000",
                "url": "https://drive.google.com/file/d/1N4YatUvMfcLS8FC4pom8sCexcfF2AH8b/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "Neither have the reinforcements we sent.",
                "line": 124,
                "start_time": "0-08-15.420000",
                "end_time": "0-08-18",
                "url": "https://drive.google.com/file/d/1t2TY2nnmqu_sA26PYWf8pZcCCey80R8G/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "And we even lost contact with the lookout team.",
                "line": 125,
                "start_time": "0-08-18",
                "end_time": "0-08-21.120000",
                "url": "https://drive.google.com/file/d/1gHtaaxEwAq5jRjlXRJXyjiXtob82Eq1_/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "Mr. Gettan, there are members of the MCA that have ties with Mitsugoshi.",
                "line": 126,
                "start_time": "0-08-22.330000",
                "end_time": "0-08-27.290000",
                "url": "https://drive.google.com/file/d/1A5yKNapmV_QnBBzV_emwm_qpKpKHv0ef/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "I'm afraid this failure-",
                "line": 127,
                "start_time": "0-08-27.290000",
                "end_time": "0-08-28.540000",
                "url": "https://drive.google.com/file/d/1rwwjNnkPd_kSEwX_utCEJFLHrmuZLAC-/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "I mean, this incident will get them talking again.",
                "line": 128,
                "start_time": "0-08-28.540000",
                "end_time": "0-08-32.120000",
                "url": "https://drive.google.com/file/d/1CHkbe8LMenhtR5invZ0gduAi0_5gdn8I/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Then shut them up.",
                "line": 129,
                "start_time": "0-08-32.120000",
                "end_time": "0-08-33.330000",
                "url": "https://drive.google.com/file/d/1zaAserdlEKjBx27HRGcRaf8Q0jRXhw_Y/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "Y-yes, sir.",
                "line": 130,
                "start_time": "0-08-35.420000",
                "end_time": "0-08-36.750000",
                "url": "https://drive.google.com/file/d/1mbOUkKjdBYUUcsbStp_cfDvigS9YCPtT/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "I should have known that naming them Clovers",
                "line": 131,
                "start_time": "0-08-42.330000",
                "end_time": "0-08-44.830000",
                "url": "https://drive.google.com/file/d/1XaX2UjmEILlTb11FI1fCtJWyNxI5SLy-/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "wouldn't make those sorry excuses for bandits equal to the Knights.",
                "line": 132,
                "start_time": "0-08-44.830000",
                "end_time": "0-08-48.170000",
                "url": "https://drive.google.com/file/d/1fGpra-nKFWguHxdjoOEMcW7y_nYxQneM/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "I would have liked to use some of the Children,",
                "line": 133,
                "start_time": "0-08-48.790000",
                "end_time": "0-08-51.500000",
                "url": "https://drive.google.com/file/d/1kZ0tHA69kdh9DwtVZ4R0fS8Aw_Feg2Ba/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "but the Cult is running low on resources, as well.",
                "line": 134,
                "start_time": "0-08-51.500000",
                "end_time": "0-08-53.580000",
                "url": "https://drive.google.com/file/d/1jijemWhmL7a3Q4zpUO0-BHGPEsQuXRH1/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "First Zenon, then that old fossil.",
                "line": 135,
                "start_time": "0-08-54",
                "end_time": "0-08-56.420000",
                "url": "https://drive.google.com/file/d/1yH4U1qW1ou4eP0X2frfd5UT5pnxhNg3w/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "They're both dead, but they're still getting in my way.",
                "line": 136,
                "start_time": "0-08-56.420000",
                "end_time": "0-08-59.380000",
                "url": "https://drive.google.com/file/d/170FyfAB7S493xm044oER9N4wF1FHdpee/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "But that is exactly why this is the perfect opportunity for me to demonstrate my power.",
                "line": 137,
                "start_time": "0-08-59.380000",
                "end_time": "0-09-03.960000",
                "url": "https://drive.google.com/file/d/131jDswIqYoAishZJ_z7oGeU9fbZ9Id-C/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "The Major Corporate Alliance is nothing more than a disposable pawn.",
                "line": 138,
                "start_time": "0-09-04.580000",
                "end_time": "0-09-07.460000",
                "url": "https://drive.google.com/file/d/1b1x0FX-xPFCG-X1QVpDLnaXAxsFOOHTe/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "I only need them to stay afloat long enough for me to complete my preparations.",
                "line": 139,
                "start_time": "0-09-07.790000",
                "end_time": "0-09-11.420000",
                "url": "https://drive.google.com/file/d/1Ae4PphDHifdr3-TF8Yvi4C8TbBtmKCKR/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Just a little while longer.",
                "line": 140,
                "start_time": "0-09-12.710000",
                "end_time": "0-09-14.830000",
                "url": "https://drive.google.com/file/d/1is8IX0NgCpQkYYASc5YdwEmOm_Lkzu8f/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Soon...",
                "line": 141,
                "start_time": "0-09-16.120000",
                "end_time": "0-09-17.670000",
                "url": "https://drive.google.com/file/d/1eWFyhx1yrJsYjGjdgeO39qeN7t6VahVN/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "I will have power.",
                "line": 142,
                "start_time": "0-09-21.120000",
                "end_time": "0-09-22.790000",
                "url": "https://drive.google.com/file/d/17HxR-a0XibqL8Qg4Bp1i3AYbB-LYVI5q/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Power that no one will be able to take from me!",
                "line": 143,
                "start_time": "0-09-22.790000",
                "end_time": "0-09-26.290000",
                "url": "https://drive.google.com/file/d/1iV2aPEIIE9UFhiPYXhRFRRG5EVRBgTw1/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Well?",
                "line": 144,
                "start_time": "0-09-58.960000",
                "end_time": "0-10-00.170000",
                "url": "https://drive.google.com/file/d/1i_ho-gOzQ3NeErDeEEXKoduOeCIxvqXb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "I think you did well.",
                "line": 145,
                "start_time": "0-10-00.170000",
                "end_time": "0-10-01.420000",
                "url": "https://drive.google.com/file/d/1tttSB0_WpRYMmObTsYsPLF44_QbbZM50/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "And I think you'll probably just keep getting better.",
                "line": 146,
                "start_time": "0-10-01.710000",
                "end_time": "0-10-03.710000",
                "url": "https://drive.google.com/file/d/1KsZKhy_HQkOT1wYbszUGFXInr2K1Cu6m/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Really?",
                "line": 147,
                "start_time": "0-10-05.120000",
                "end_time": "0-10-06.330000",
                "url": "https://drive.google.com/file/d/1eLJMDKtW6qZ3ZENjzuwkTRH7DTOsr3VC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Was it a change of mindset?",
                "line": 148,
                "start_time": "0-10-06.960000",
                "end_time": "0-10-09.500000",
                "url": "https://drive.google.com/file/d/1co0Dtp08tu2gmhYatzpYe7ba1HVhNFLS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Or did she figure something out?",
                "line": 149,
                "start_time": "0-10-09.500000",
                "end_time": "0-10-12.040000",
                "url": "https://drive.google.com/file/d/1TllOseKMvOatjoQyTjVLDvr5IeZxBbLk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "When a character suddenly gets a lot better, it's usually one of those things.",
                "line": 150,
                "start_time": "0-10-12.620000",
                "end_time": "0-10-15.880000",
                "url": "https://drive.google.com/file/d/11Qkz4z8_gF31vyF6foqaF3W5YA16owPY/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "But it's not enough.",
                "line": 151,
                "start_time": "0-10-16.670000",
                "end_time": "0-10-18.210000",
                "url": "https://drive.google.com/file/d/17KuuUHTyC5Wefg6pGGJzJrxYCeWhjOsq/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I need more power.",
                "line": 152,
                "start_time": "0-10-18.960000",
                "end_time": "0-10-20.830000",
                "url": "https://drive.google.com/file/d/1ph5LnTrm-zETnEa3rCutwsGeqmEWWaSd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Cool...",
                "line": 153,
                "start_time": "0-10-21.170000",
                "end_time": "0-10-22.170000",
                "url": "https://drive.google.com/file/d/1LWZ78CzpyhINFWLbmx58STu_oDoqJC8p/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Ask me why.",
                "line": 154,
                "start_time": "0-10-23.710000",
                "end_time": "0-10-25.380000",
                "url": "https://drive.google.com/file/d/1iO_tFK_cyKmkJTCBOhIQave_e7H2bsi2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Why?",
                "line": 155,
                "start_time": "0-10-25.920000",
                "end_time": "0-10-27.120000",
                "url": "https://drive.google.com/file/d/1_KTtGk-4FNjHkGHENTUULSsjQRvHtX7M/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Because all I could do was watch.",
                "line": 156,
                "start_time": "0-10-27.540000",
                "end_time": "0-10-31.040000",
                "url": "https://drive.google.com/file/d/1m23xLy8A3rwy6dz5dwPxolo1Z0gmGz82/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Now Rose has gone off alone.",
                "line": 157,
                "start_time": "0-10-31.920000",
                "end_time": "0-10-34.210000",
                "url": "https://drive.google.com/file/d/1OjLpyK_-bQUYheOpSBG7Oe_aCDTnT0Xl/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Oriana has lost its king.",
                "line": 158,
                "start_time": "0-10-35.080000",
                "end_time": "0-10-37.290000",
                "url": "https://drive.google.com/file/d/1Le0zNaIKXm6JmhZOcU_05kwzrATKIRMY/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "It's a real mess right now, and she's...",
                "line": 159,
                "start_time": "0-10-37.290000",
                "end_time": "0-10-40.670000",
                "url": "https://drive.google.com/file/d/17F0yQoCyOPg5nFuoxetfscCMO5wsMJS2/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "My friend is suffering, and I...",
                "line": 160,
                "start_time": "0-10-42.250000",
                "end_time": "0-10-44.710000",
                "url": "https://drive.google.com/file/d/1Te2BJPHQq0I5QJTO_9p0p0H7tv-2YjR0/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I need more power,",
                "line": 161,
                "start_time": "0-10-46.170000",
                "end_time": "0-10-48.880000",
                "url": "https://drive.google.com/file/d/13JplWNZPy9i0RI9VjpqHsgRHX6MWjQtG/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "and there are a lot of other things that I'm lacking, too.",
                "line": 162,
                "start_time": "0-10-48.880000",
                "end_time": "0-10-51.120000",
                "url": "https://drive.google.com/file/d/1nPv9hZ_ZmyOOOMcWKiTDOmZ3URj3HMde/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "While we lead our everyday lives, the world keeps moving forward in secret.",
                "line": 163,
                "start_time": "0-10-51.540000",
                "end_time": "0-10-55.080000",
                "url": "https://drive.google.com/file/d/1DcYoZi7XIhDG5ox7Ldlh0IvoHQvAz4cL/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "If I don't move with it, I'll be left behind.",
                "line": 164,
                "start_time": "0-11-01.170000",
                "end_time": "0-11-04.620000",
                "url": "https://drive.google.com/file/d/1NB-VI8ctpAgpqA_PINz_zaPUuXLQQ2Zj/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I don't want to be an outsider anymore.",
                "line": 165,
                "start_time": "0-11-06.750000",
                "end_time": "0-11-09.170000",
                "url": "https://drive.google.com/file/d/1pHaHMLweg7dq8woJpTOjbQObMoTvQqtK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "Uh-huh...",
                "line": 166,
                "start_time": "0-11-10.040000",
                "end_time": "0-11-11.250000",
                "url": "https://drive.google.com/file/d/1M1Jx3O4KDd6OXxtA8wLGSqNFC1DVmAWA/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "It's strange.",
                "line": 167,
                "start_time": "0-11-13.580000",
                "end_time": "0-11-14.790000",
                "url": "https://drive.google.com/file/d/16o7IK6HJ2uORFudja3O2cPSR8XNCkd2g/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "Since I started actively choosing to move forward, time has started to move faster.",
                "line": 168,
                "start_time": "0-11-15.580000",
                "end_time": "0-11-20.380000",
                "url": "https://drive.google.com/file/d/19tzaHun7PThfVurN0zBSVR3ASAQWvA6Z/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid Kagenou",
                "subtitle": "That's just how it is.",
                "line": 169,
                "start_time": "0-11-20.880000",
                "end_time": "0-11-22.290000",
                "url": "https://drive.google.com/file/d/1d8vs-i7Jf5CIN9JqKwvvOdGKP4Vqe3D3/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "You're so carefree. That must be nice.",
                "line": 170,
                "start_time": "0-11-23.420000",
                "end_time": "0-11-25.460000",
                "url": "https://drive.google.com/file/d/1FUMjoKEStNBVieIDAVrAsGTnAAYqN1xw/view?usp=drivesdk"
            },
            {
                "name": "Alexia Midgar",
                "name_variant": "Alexia Midgar",
                "subtitle": "I sincerely hope you can be that carefree your whole life.",
                "line": 171,
                "start_time": "0-11-30.080000",
                "end_time": "0-11-33.500000",
                "url": "https://drive.google.com/file/d/1nd-s4gVW94gLwBWz7DYjFKLv3OVM9Gg-/view?usp=drivesdk"
            },
            {
                "name": "Natsu",
                "name_variant": "Natsu",
                "subtitle": "Extra large char siu, with extra veggies, no back fat or garlic.",
                "line": 172,
                "start_time": "0-12-00.790000",
                "end_time": "0-12-04.420000",
                "url": "https://drive.google.com/file/d/10r8gVBsaSCqdIDpMZGYPghrZifz5aL8B/view?usp=drivesdk"
            },
            {
                "name": "Shop Staff",
                "name_variant": "Shop Staff",
                "subtitle": "Coming up.",
                "line": 173,
                "start_time": "0-12-04.420000",
                "end_time": "0-12-05.620000",
                "url": "https://drive.google.com/file/d/1YUwqQLTqNuL2XNmsNwn-aEh3EJM4sR1v/view?usp=drivesdk"
            },
            {
                "name": "Natsu",
                "name_variant": "Natsu",
                "subtitle": "Production is complete.",
                "line": 174,
                "start_time": "0-12-10.040000",
                "end_time": "0-12-12.120000",
                "url": "https://drive.google.com/file/d/1mQ16DAxxcdcbwMmYxLLjF06M7NSkSvvF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Then it's time.",
                "line": 175,
                "start_time": "0-12-16.290000",
                "end_time": "0-12-17.500000",
                "url": "https://drive.google.com/file/d/1wnej5dI8c042RnBnHO1wuPOcK4TXfBT0/view?usp=drivesdk"
            },
            {
                "name": "Shop Staff",
                "name_variant": "Shop Staff",
                "subtitle": "Here you go, enjoy.",
                "line": 176,
                "start_time": "0-12-22.460000",
                "end_time": "0-12-23.460000",
                "url": "https://drive.google.com/file/d/1k6JUiPByT43V-g9xPSyBRSXEuzT0dzdJ/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "The domain formerly ruled by Viscount Grease...",
                "line": 177,
                "start_time": "0-12-24.250000",
                "end_time": "0-12-26.620000",
                "url": "https://drive.google.com/file/d/1_rEneJi91AKWRkZXxfKK83BsP3MhFlCy/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "It is currently run by a disinterested local magistrate,",
                "line": 178,
                "start_time": "0-12-26.620000",
                "end_time": "0-12-29.380000",
                "url": "https://drive.google.com/file/d/1nFVNzzrnPJWf9kaTKmYQR80tSESnFkIV/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "and law enforcement is less than thorough.",
                "line": 179,
                "start_time": "0-12-29.380000",
                "end_time": "0-12-31.500000",
                "url": "https://drive.google.com/file/d/1WmK3ysF6cXy4CfWxy7HYMI8V-oO9TFIl/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Naturally, they wouldn't bother sparing any personnel",
                "line": 180,
                "start_time": "0-12-32.210000",
                "end_time": "0-12-35.040000",
                "url": "https://drive.google.com/file/d/1jyQhNG6uM_9uWnzNXk-j12HfjepfeHUl/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "to inspect the abandoned mine at the edge of the domain.",
                "line": 181,
                "start_time": "0-12-35.040000",
                "end_time": "0-12-37.080000",
                "url": "https://drive.google.com/file/d/1cwi8s7M4XhEhWz7FU0vrLkJIV5MnXMTR/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "I am truly happy that this place has been brought to my attention.",
                "line": 182,
                "start_time": "0-12-37.620000",
                "end_time": "0-12-40.540000",
                "url": "https://drive.google.com/file/d/186nORAVcDM_a7OQmUAueE2hYmholHoe4/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "We produce our counterfeit bills here,",
                "line": 183,
                "start_time": "0-12-41.330000",
                "end_time": "0-12-43.540000",
                "url": "https://drive.google.com/file/d/1aImp-U9NLtuduhsSpe6z9k3MR_Soea3I/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "and transport them temporarily to the Lawless City.",
                "line": 184,
                "start_time": "0-12-43.540000",
                "end_time": "0-12-45.750000",
                "url": "https://drive.google.com/file/d/1_y_clzewtzFPvCQo6Y9vOa0OYe131IBM/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Then, we disguise our distribution channels",
                "line": 185,
                "start_time": "0-12-45.750000",
                "end_time": "0-12-48.330000",
                "url": "https://drive.google.com/file/d/1cvonM-GrIvw4_BxasxNl8_r5VSH8caJf/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "and introduce them to the Royal Capital of Midgar.",
                "line": 186,
                "start_time": "0-12-48.330000",
                "end_time": "0-12-50.500000",
                "url": "https://drive.google.com/file/d/1ZHFSJV2YdLtO-Pd5Ukwwdu6TCQ1Bq_7b/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "What do you think, Mr. Smith?",
                "line": 187,
                "start_time": "0-12-52.380000",
                "end_time": "0-12-54.250000",
                "url": "https://drive.google.com/file/d/1kX3ojbxPq3WmKypmSVwFXJawYF24d7bi/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "For all the time we devoted to creating the printing plates,",
                "line": 188,
                "start_time": "0-12-54.960000",
                "end_time": "0-12-57.750000",
                "url": "https://drive.google.com/file/d/1NQYEmEyH9x6jRFIFehkiy7-KrrsZsgrt/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "I believe the finished product is quite good, don't you?",
                "line": 189,
                "start_time": "0-12-57.750000",
                "end_time": "0-12-59.880000",
                "url": "https://drive.google.com/file/d/11ijiHeMtxHs1d6d82vw17_TQyMJalOPI/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Of the two, can you tell which is the authentic bill?",
                "line": 190,
                "start_time": "0-13-01.120000",
                "end_time": "0-13-05.710000",
                "url": "https://drive.google.com/file/d/1Ma2dIaDfIKBZ5o8w2NI_otOgNrTXBwRN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "The answer goes without saying.",
                "line": 191,
                "start_time": "0-13-10.460000",
                "end_time": "0-13-11.920000",
                "url": "https://drive.google.com/file/d/1_b9sUCh3hb0MmZFZOIcaPf_lwb0kqTwR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "On comparison, one of them uses paper of slightly coarser quality.",
                "line": 192,
                "start_time": "0-13-14.330000",
                "end_time": "0-13-17.500000",
                "url": "https://drive.google.com/file/d/1_CHkl7XGsDTq2pr5YAjOoiCV0orn4cHn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "There are differences in the bleed of the ink.",
                "line": 193,
                "start_time": "0-13-18.080000",
                "end_time": "0-13-20.580000",
                "url": "https://drive.google.com/file/d/1KHiNjTOXl2hfNpABBjqpiJl5cNE8mSZb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "And surely I don't need to describe the distortions in the print?",
                "line": 194,
                "start_time": "0-13-20.580000",
                "end_time": "0-13-23.290000",
                "url": "https://drive.google.com/file/d/1yHYXsRHJoqlqOOgyyoEasASphoz2cbpx/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "It's true!",
                "line": 195,
                "start_time": "0-13-23.290000",
                "end_time": "0-13-24.750000",
                "url": "https://drive.google.com/file/d/1tKCeh0HqCfHU2MwQLHl9BVX81FMpK4yB/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "But we double- and triple-checked!",
                "line": 196,
                "start_time": "0-13-24.750000",
                "end_time": "0-13-26.830000",
                "url": "https://drive.google.com/file/d/18gJM1Ruc0KzqUT8N_USs-4jW_ajD3gHv/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "I don't need to bullsh-",
                "line": 197,
                "start_time": "0-13-27.290000",
                "end_time": "0-13-28.710000",
                "url": "https://drive.google.com/file/d/1ktYDyio_Xx75fAqMfnW14av8SyZYDZLJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "...point out any more than that, do I?",
                "line": 198,
                "start_time": "0-13-29",
                "end_time": "0-13-30.880000",
                "url": "https://drive.google.com/file/d/16qZC58Lbsa2mmQBA768GFJ5N7epQ4m0K/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "You do not.",
                "line": 199,
                "start_time": "0-13-32.330000",
                "end_time": "0-13-33.620000",
                "url": "https://drive.google.com/file/d/1GBakEMAOri_D10oaC1AMBE-wL1iyUoZs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith & Yukime (John Smith)",
                "subtitle": "Obviously the bill of lesser quality...",
                "line": 200,
                "start_time": "0-13-33.620000",
                "end_time": "0-13-35.710000",
                "url": "https://drive.google.com/file/d/1lj7Wy9xccZTa9jnUpclNNAgvQkW75hHQ/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "John Smith & Yukime (Yukime)",
                "subtitle": "Obviously the bill of lesser quality...",
                "line": 200,
                "start_time": "0-13-33.620000",
                "end_time": "0-13-35.710000",
                "url": "https://drive.google.com/file/d/1lj7Wy9xccZTa9jnUpclNNAgvQkW75hHQ/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "...is the real one.",
                "line": 201,
                "start_time": "0-13-35.710000",
                "end_time": "0-13-37.210000",
                "url": "https://drive.google.com/file/d/1lzmt91eCk_6pQRd6nUflyrzJvF-HIyhV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "...is the fake.",
                "line": 201,
                "start_time": "0-13-35.710000",
                "end_time": "0-13-37.210000",
                "url": "https://drive.google.com/file/d/1lzmt91eCk_6pQRd6nUflyrzJvF-HIyhV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "What?",
                "line": 202,
                "start_time": "0-13-37.420000",
                "end_time": "0-13-38.420000",
                "url": "https://drive.google.com/file/d/1OGyPtgH2ysfTTqa2CefdUH5mY17wTBsK/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "What?",
                "line": 203,
                "start_time": "0-13-38.430000",
                "end_time": "0-13-39.420000",
                "url": "https://drive.google.com/file/d/1KQ-1tKSQ7PLqFMIyAdQvqw2CoEbshpcm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "It appears that you perfected it to such a high degree",
                "line": 204,
                "start_time": "0-13-44.880000",
                "end_time": "0-13-46.670000",
                "url": "https://drive.google.com/file/d/1AUzzITGdKbYLLxb8Z9-SfrtHMwXinjsg/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "that you have surpassed the authentic article.",
                "line": 205,
                "start_time": "0-13-46.670000",
                "end_time": "0-13-48.960000",
                "url": "https://drive.google.com/file/d/1YEAoqxZw1yEsNjXR40JwR_EhBEwshsuz/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "I had not foreseen that possibility.",
                "line": 206,
                "start_time": "0-13-49.460000",
                "end_time": "0-13-51.210000",
                "url": "https://drive.google.com/file/d/1PDz6uzNY0nZxtJoREWJWORs7ckGhsn64/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Shall we start over and make new ones?",
                "line": 207,
                "start_time": "0-13-52.040000",
                "end_time": "0-13-53.920000",
                "url": "https://drive.google.com/file/d/1B7wbesGJHn24zsYbj_AV9WVxosDi07rh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "That won't be necessary.",
                "line": 208,
                "start_time": "0-13-54.170000",
                "end_time": "0-13-55.580000",
                "url": "https://drive.google.com/file/d/1N7OOVLGnBkK78rMhVCBFfwOm8zajiXTa/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "I doubt anyone other than myself will be able to tell the difference.",
                "line": 209,
                "start_time": "0-13-55.960000",
                "end_time": "0-13-58.540000",
                "url": "https://drive.google.com/file/d/17GPDXAT4jk4S-6acD9GAwax33wNmG__g/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "I am no match for your intellect, Mr. Smith.",
                "line": 210,
                "start_time": "0-13-59",
                "end_time": "0-14-01.040000",
                "url": "https://drive.google.com/file/d/1u0fDi2uRwcytiMLhhcHmnEbnPOELNxD-/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "I was thinking we would begin distribution right away.",
                "line": 211,
                "start_time": "0-14-01.670000",
                "end_time": "0-14-04.170000",
                "url": "https://drive.google.com/file/d/12gDuFKxO2gs2R8BXF15YHXlEqdPUsOkG/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Does that suit you?",
                "line": 212,
                "start_time": "0-14-04.170000",
                "end_time": "0-14-05.460000",
                "url": "https://drive.google.com/file/d/1cZEPhehHnb7Hhwkr-vKqxeQKHFPEFjk8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Yes.",
                "line": 213,
                "start_time": "0-14-05.460000",
                "end_time": "0-14-06.460000",
                "url": "https://drive.google.com/file/d/1AE1_zlvKrEF9ojjmqwUKyWqjl9pW6Wla/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Once there are more bills in circulation, the authorities will look for the source.",
                "line": 214,
                "start_time": "0-14-07.580000",
                "end_time": "0-14-11.120000",
                "url": "https://drive.google.com/file/d/1aicsBzjoNmv1zj-sRb3D_rYD2U9uqqWf/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "I am counting on you, Mr. Smith, to handle that situation as planned.",
                "line": 215,
                "start_time": "0-14-11.420000",
                "end_time": "0-14-15.290000",
                "url": "https://drive.google.com/file/d/1MEK5RAP1t6QXxGn--bLTjO7_inJNarH2/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "But that man Gettan is mine.",
                "line": 216,
                "start_time": "0-14-16.960000",
                "end_time": "0-14-22.500000",
                "url": "https://drive.google.com/file/d/1ce6GIgC-CjNwGPWstjiZqg_WYaqnCHxa/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Revenge?",
                "line": 217,
                "start_time": "0-14-22.960000",
                "end_time": "0-14-24.460000",
                "url": "https://drive.google.com/file/d/16RZc1-Nnt2wyAqnM9O0eJsBjrD9PtReF/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Gettan took everything from me.",
                "line": 218,
                "start_time": "0-14-26.290000",
                "end_time": "0-14-29.330000",
                "url": "https://drive.google.com/file/d/1C80nhojjX158Ewr1C6GjPO47t6yCluwg/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "My mother, my friends, my entire village...",
                "line": 219,
                "start_time": "0-14-31",
                "end_time": "0-14-35.250000",
                "url": "https://drive.google.com/file/d/1hCDp3ark9E1wj4NZOUm6201mYeYpMW0U/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "Now it's my turn.",
                "line": 220,
                "start_time": "0-14-36.380000",
                "end_time": "0-14-37.920000",
                "url": "https://drive.google.com/file/d/15asB-gnGnwPWCtC8mYl7Lslw2LfDDiCY/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "I will take everything from him.",
                "line": 221,
                "start_time": "0-14-38.500000",
                "end_time": "0-14-41.830000",
                "url": "https://drive.google.com/file/d/1W1KJmnxvcqvKr1XgTuVlYSp7ifjZOLot/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "I will kill him,",
                "line": 222,
                "start_time": "0-14-42.830000",
                "end_time": "0-14-44.330000",
                "url": "https://drive.google.com/file/d/1FvGpU54c7iYpUQ3dyJbFh3obAKo_gqP3/view?usp=drivesdk"
            },
            {
                "name": "Yukime",
                "name_variant": "Yukime",
                "subtitle": "but not until after I have taken it all.",
                "line": 223,
                "start_time": "0-14-44.330000",
                "end_time": "0-14-46.710000",
                "url": "https://drive.google.com/file/d/1MfRNXLClc1MtTBlB4gu4AmtV6l9Dnzyk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Have it your way.",
                "line": 224,
                "start_time": "0-14-51.580000",
                "end_time": "0-14-53",
                "url": "https://drive.google.com/file/d/1uc3VAHteDkjpxwZ7F4B4J1ap0YnoH_3F/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "But take care that you don't turn down the wrong path.",
                "line": 225,
                "start_time": "0-14-53.420000",
                "end_time": "0-14-57.290000",
                "url": "https://drive.google.com/file/d/1kPLoBgjH7rMme5DVb1cL189HbTxmKvaX/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Counterfeit bills?",
                "line": 226,
                "start_time": "0-15-02.960000",
                "end_time": "0-15-04.170000",
                "url": "https://drive.google.com/file/d/1HjjJP4P41qKqVUzx8a95wkfZFvSvxDfc/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes, of the Major Corporate Alliance's currency.",
                "line": 227,
                "start_time": "0-15-04.170000",
                "end_time": "0-15-07.620000",
                "url": "https://drive.google.com/file/d/1WF82d9Zje2qEs7GHQP17klNbhSTvsh37/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "We found them in several of our stores throughout the Royal Capital.",
                "line": 228,
                "start_time": "0-15-07.620000",
                "end_time": "0-15-10.380000",
                "url": "https://drive.google.com/file/d/1obMb83FHdBvqh6G4d1UeQAB81CxGSrei/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Then our decision to accept our competitor's bills has borne fruit.",
                "line": 229,
                "start_time": "0-15-10.920000",
                "end_time": "0-15-15.380000",
                "url": "https://drive.google.com/file/d/1uhKhklR0wFWz1L_oCI58d1Z26Z1n1ba3/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Although originally that was so we could take credit away from their currency.",
                "line": 230,
                "start_time": "0-15-15.920000",
                "end_time": "0-15-20.380000",
                "url": "https://drive.google.com/file/d/1Lpz8qZN8AZ7maGk5Xyt6veLT3dxjz387/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "How much is in circulation?",
                "line": 231,
                "start_time": "0-15-21.380000",
                "end_time": "0-15-22.920000",
                "url": "https://drive.google.com/file/d/1HR9LyO-nSJ8a9npKBHtDX2oJLOZ55ezQ/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Not much yet.",
                "line": 232,
                "start_time": "0-15-22.920000",
                "end_time": "0-15-24.290000",
                "url": "https://drive.google.com/file/d/1pFfYALiKKI0nQJO8x4FH-BjkcUZ8GZ7b/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "The customers who paid with them are unaware that the bills were counterfeit,",
                "line": 233,
                "start_time": "0-15-24.830000",
                "end_time": "0-15-28.330000",
                "url": "https://drive.google.com/file/d/1S2diBVvILs0vEXtx7vQTX3Ozn77Gh-ls/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "so we haven't determined where they snuck in from.",
                "line": 234,
                "start_time": "0-15-28.330000",
                "end_time": "0-15-30.330000",
                "url": "https://drive.google.com/file/d/1WXFiRCy4Wi0IlGRFphVbSTk-KVjZ-R2H/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Does the Major Corporate Alliance know about this?",
                "line": 235,
                "start_time": "0-15-30.960000",
                "end_time": "0-15-33.380000",
                "url": "https://drive.google.com/file/d/1APNjcj13_r5lB7_83i5SoIA3W_uDdA3g/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "They don't seem to have realized yet.",
                "line": 236,
                "start_time": "0-15-33.380000",
                "end_time": "0-15-35.290000",
                "url": "https://drive.google.com/file/d/1fMTZlI0Pwjx8Bwkbm51wnwLosJ6Dnk_E/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "They're working to issue more bills, without a care in the world.",
                "line": 237,
                "start_time": "0-15-35.670000",
                "end_time": "0-15-38.750000",
                "url": "https://drive.google.com/file/d/1WnPdghFcgSH953RouBeNbbChKL6O2HpZ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "See to it that they do realize.",
                "line": 238,
                "start_time": "0-15-39.330000",
                "end_time": "0-15-41.080000",
                "url": "https://drive.google.com/file/d/1dDr6OWtEpgVV0Dw7dCvvnK0RRrRdgk5P/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "If the citizens find out that their money is counterfeit, we'll have a crisis on our hands.",
                "line": 239,
                "start_time": "0-15-41.080000",
                "end_time": "0-15-45.460000",
                "url": "https://drive.google.com/file/d/1XRDzXKx1mJKbriaszttD0GhtF1Yl6sJi/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "If anything happens to inspire doubt in the value of paper money,",
                "line": 240,
                "start_time": "0-15-45.460000",
                "end_time": "0-15-49.380000",
                "url": "https://drive.google.com/file/d/1ujGVnBC_rkiSYAg2e8-Fxba1VkrQeaY8/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "it will hurt our business, as well.",
                "line": 241,
                "start_time": "0-15-49.380000",
                "end_time": "0-15-51",
                "url": "https://drive.google.com/file/d/1D_ZorQy6XglMkNSte2oi4Npf1dkeuLdt/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No, impossible.",
                "line": 242,
                "start_time": "0-15-51.750000",
                "end_time": "0-15-52.960000",
                "url": "https://drive.google.com/file/d/1m73RetNj8qNoo-5cd8cdaDw-zXY5iDO0/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Was that their plan all along?",
                "line": 243,
                "start_time": "0-15-53.670000",
                "end_time": "0-15-55.330000",
                "url": "https://drive.google.com/file/d/1ErvIAhH1gFp9m7Bviw05fEOUXOT0-Ks5/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "To instigate a credit collapse?",
                "line": 244,
                "start_time": "0-15-56.210000",
                "end_time": "0-15-58.290000",
                "url": "https://drive.google.com/file/d/1RFiosiPpTtUwBJL_rfx46ra9zIqmg1R4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "But they would bring about their own downfall.",
                "line": 245,
                "start_time": "0-15-59",
                "end_time": "0-16-01.380000",
                "url": "https://drive.google.com/file/d/1-iwzDsDzXfnQGThru5SmlTu_leWwbWc0/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Lady Alpha?",
                "line": 246,
                "start_time": "0-16-01.670000",
                "end_time": "0-16-02.880000",
                "url": "https://drive.google.com/file/d/1TeK-_JGAtp29HwBaB_0Whj3Ceh-45eVM/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "It's nothing.",
                "line": 247,
                "start_time": "0-16-03.750000",
                "end_time": "0-16-05.080000",
                "url": "https://drive.google.com/file/d/1L-t3KATY55Vvpxwyh5r5W58wgAjDcu32/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Find out where the counterfeit bills are coming from.",
                "line": 248,
                "start_time": "0-16-05.080000",
                "end_time": "0-16-07.380000",
                "url": "https://drive.google.com/file/d/1wFkNZvzwt-u_aFoKZprGwi6SnHCt7Uln/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "That's our top priority.",
                "line": 249,
                "start_time": "0-16-07.380000",
                "end_time": "0-16-08.670000",
                "url": "https://drive.google.com/file/d/1o259u_TYFM5Zxg7hL39hwir_EZRViG4t/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes, Lady Alpha.",
                "line": 250,
                "start_time": "0-16-09.120000",
                "end_time": "0-16-10.330000",
                "url": "https://drive.google.com/file/d/15X0j5S1Gewz0cpTLtd-0OTExefpDSbUN/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "If this turns out to be more than a minor cash grab...",
                "line": 251,
                "start_time": "0-16-11.830000",
                "end_time": "0-16-14.670000",
                "url": "https://drive.google.com/file/d/1qQdEiTro2rqw8kyC78C7F2nFu9JHEhnb/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Then who could be behind it?",
                "line": 252,
                "start_time": "0-16-15.290000",
                "end_time": "0-16-16.790000",
                "url": "https://drive.google.com/file/d/1f0o6Nzwg_68b88_9TQpMmBtICXET8vTU/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "And why?",
                "line": 253,
                "start_time": "0-16-17.290000",
                "end_time": "0-16-18.710000",
                "url": "https://drive.google.com/file/d/1XjJZPWfVsn_HGZyszf2LHHbPF3GRodLc/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "A counterfeit bill, you say?",
                "line": 254,
                "start_time": "0-16-19.620000",
                "end_time": "0-16-21.290000",
                "url": "https://drive.google.com/file/d/13VltF_VJvlxPrPPjmG1hTHW3vZlwblkW/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "Yes, sir.",
                "line": 255,
                "start_time": "0-16-21.290000",
                "end_time": "0-16-22.290000",
                "url": "https://drive.google.com/file/d/1WL20PxDuzAprW50iiZnrDY_MSwI9d0FL/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "A cashier at one of our corporate stores found it just a little while ago.",
                "line": 256,
                "start_time": "0-16-22.290000",
                "end_time": "0-16-25.500000",
                "url": "https://drive.google.com/file/d/1GJ_xFD21wBwM6JsQOAAKPcXw9VSgrz8d/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Which is it?",
                "line": 257,
                "start_time": "0-16-31.790000",
                "end_time": "0-16-33",
                "url": "https://drive.google.com/file/d/160-IduJS7EZ-mtESB9-Q1oRHbFHJnrDl/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "Sir?",
                "line": 258,
                "start_time": "0-16-33",
                "end_time": "0-16-34",
                "url": "https://drive.google.com/file/d/1w0EAduspzS8h_Py3b_5c7TNAff6uTh6m/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "Oh, yes, of course, it was...",
                "line": 259,
                "start_time": "0-16-34",
                "end_time": "0-16-36.460000",
                "url": "https://drive.google.com/file/d/1x3TPZ7V784Jrr9oJR1q6VHAT-5sskhFM/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "The poorly made one...",
                "line": 260,
                "start_time": "0-16-37.170000",
                "end_time": "0-16-39.540000",
                "url": "https://drive.google.com/file/d/1Q9H4SKj3xM17lsu4nMCUSOduJeZrkfe8/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "I think, maybe?",
                "line": 261,
                "start_time": "0-16-39.540000",
                "end_time": "0-16-41.170000",
                "url": "https://drive.google.com/file/d/1YxSkUTH7ybkF5LB_JUQb0wyNLVRqzdKQ/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "No matter.",
                "line": 262,
                "start_time": "0-16-44.420000",
                "end_time": "0-16-45.670000",
                "url": "https://drive.google.com/file/d/1ZA9srZJ_jHENzaJzrL2qtpnoBhiRpWZZ/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Find out where it came from.",
                "line": 263,
                "start_time": "0-16-45.670000",
                "end_time": "0-16-47",
                "url": "https://drive.google.com/file/d/1j4uwWW-eegHY44Wap89zSSDoMfYHtHtN/view?usp=drivesdk"
            },
            {
                "name": "Garter Kikuchi",
                "name_variant": "Garter Kikuchi",
                "subtitle": "Yes, sir. Right away, sir!",
                "line": 264,
                "start_time": "0-16-47",
                "end_time": "0-16-49.620000",
                "url": "https://drive.google.com/file/d/1BSWrpu3yV-vvMrOp8YBFm112A9xIHgHS/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "The number of banknotes we have in circulation",
                "line": 265,
                "start_time": "0-16-54",
                "end_time": "0-16-56.960000",
                "url": "https://drive.google.com/file/d/1_fzYEL20v_Tmn5HNwoI06RaSsRkexZAl/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "already exceeds the total value of the MCA assets that give them their credit.",
                "line": 266,
                "start_time": "0-16-56.960000",
                "end_time": "0-17-00.920000",
                "url": "https://drive.google.com/file/d/15d6HCzFleuV4rwDTGUa2v3ZCHBBiHvaz/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "The same should be true for Mitsugoshi.",
                "line": 267,
                "start_time": "0-17-01.750000",
                "end_time": "0-17-05.250000",
                "url": "https://drive.google.com/file/d/1hWXz1ofkWSF9YJTbqHmKJGA5HcRazTSU/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "The only thing that can guarantee the value of paper money anymore",
                "line": 268,
                "start_time": "0-17-05.580000",
                "end_time": "0-17-08.120000",
                "url": "https://drive.google.com/file/d/1YIZLzbrNytLPMXrpBR7Ise4LMaei6MOu/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "is the vague concept of the \"credit\" given to it by the unenlightened masses.",
                "line": 269,
                "start_time": "0-17-08.120000",
                "end_time": "0-17-12.420000",
                "url": "https://drive.google.com/file/d/1kIRKvzphZM1f_4lJlV-dAvl_RLl4LqYd/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "A counterfeit bill...",
                "line": 270,
                "start_time": "0-17-13.210000",
                "end_time": "0-17-14.620000",
                "url": "https://drive.google.com/file/d/1hLJH4pJU-ZizYWviqFHh03rL0yRlL6ZV/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "A piece of paper like the banknotes,",
                "line": 271,
                "start_time": "0-17-15",
                "end_time": "0-17-16.960000",
                "url": "https://drive.google.com/file/d/1iue_elDm9jfmGDkM13Hh-rGfXLpx1gMl/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "but without the guaranteed value promised to the real ones,",
                "line": 272,
                "start_time": "0-17-16.960000",
                "end_time": "0-17-19.500000",
                "url": "https://drive.google.com/file/d/1XlVXFd-URFosEAUC_y2W6R3_eRBUtflA/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "it is a genuine, bona fide, worthless scrap of paper.",
                "line": 273,
                "start_time": "0-17-19.500000",
                "end_time": "0-17-21.580000",
                "url": "https://drive.google.com/file/d/1arqqmBHdzrGXOv_9J7wm7-SC5UzZvyUt/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "If the world were to learn of their existence,",
                "line": 274,
                "start_time": "0-17-22.080000",
                "end_time": "0-17-24.120000",
                "url": "https://drive.google.com/file/d/1118cPvl42l_OT7uZXvYROUUjdMIF5qZG/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "every citizen would simultaneously begin to harbor doubts.",
                "line": 275,
                "start_time": "0-17-24.120000",
                "end_time": "0-17-27.330000",
                "url": "https://drive.google.com/file/d/16bETHVaw2ygDtSLkzBNGxaSr1TOrLjiB/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "They will fear that even the real bills in their own wallets",
                "line": 276,
                "start_time": "0-17-27.830000",
                "end_time": "0-17-30.830000",
                "url": "https://drive.google.com/file/d/1bgjW5YDrV-_NC_fUB5jMIKgTyo1mF1Cy/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "may be nothing more than paper.",
                "line": 277,
                "start_time": "0-17-30.830000",
                "end_time": "0-17-33.500000",
                "url": "https://drive.google.com/file/d/1dzbwQqyT7jPE-byiJ5_9AxJ5paa3MtJ0/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Those offhand feelings, that vague ideation...",
                "line": 278,
                "start_time": "0-17-34.170000",
                "end_time": "0-17-37.620000",
                "url": "https://drive.google.com/file/d/1SFO8QVEC4LWtfZvZm6eNFpiFGgxSVut-/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "that is what will cause the collapse of the credit given to paper money.",
                "line": 279,
                "start_time": "0-17-37.620000",
                "end_time": "0-17-40.170000",
                "url": "https://drive.google.com/file/d/1vmE4L04-b1R4TzNqrhT-Rvb-a8_z0ccg/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "That is why we had been preparing to begin circulating our own counterfeit paper bills.",
                "line": 280,
                "start_time": "0-17-40.920000",
                "end_time": "0-17-46.290000",
                "url": "https://drive.google.com/file/d/1rkIB-000B-G6RL3r502oReVrfWfJsdZ4/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "By intentionally bringing about the downfall of credit,",
                "line": 281,
                "start_time": "0-17-47.040000",
                "end_time": "0-17-49.880000",
                "url": "https://drive.google.com/file/d/1OdK8GVTD5XFaLUAcwdEbVWO7bjoQzKfv/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "we would bankrupt the Major Corporate Alliance, and the abominable Mitsugoshi company with it.",
                "line": 282,
                "start_time": "0-17-49.880000",
                "end_time": "0-17-54.460000",
                "url": "https://drive.google.com/file/d/1UoKLSQg7BxpeZzWzlUPs2QK7eAiZS8jC/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "That was the mission given to me by the Cult.",
                "line": 283,
                "start_time": "0-17-54.710000",
                "end_time": "0-17-57.380000",
                "url": "https://drive.google.com/file/d/1YNGy7a1CUxoDTMsS7-tM0ApQf4QKvJK6/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "But the plan wasn't supposed to go into effect",
                "line": 284,
                "start_time": "0-17-57.830000",
                "end_time": "0-18-01.170000",
                "url": "https://drive.google.com/file/d/1zwbtEH1jrD5OKYGYuZkDV61zzOZsG51o/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "until after we had recovered all the Cult assets that were hidden within the MCA.",
                "line": 285,
                "start_time": "0-18-01.170000",
                "end_time": "0-18-04.460000",
                "url": "https://drive.google.com/file/d/1vH0tyRVa9MOCtqovwvQBELYbr0R-kuz7/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Those assets are mixed up in those of our more public businesses and organizations.",
                "line": 286,
                "start_time": "0-18-05",
                "end_time": "0-18-09.540000",
                "url": "https://drive.google.com/file/d/1Qew8wFSzRenyBSzqq8wSazZAq9CzkNuX/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "It should take time and effort to retrieve them.",
                "line": 287,
                "start_time": "0-18-10.170000",
                "end_time": "0-18-12.790000",
                "url": "https://drive.google.com/file/d/15VUDCC2ZmVQPiQkDbo4Mh1Yu_ad9_Rk4/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "Did they not understand that when they enacted this plan?",
                "line": 288,
                "start_time": "0-18-13.330000",
                "end_time": "0-18-16.120000",
                "url": "https://drive.google.com/file/d/1SGl9izJy2biF7BoL-yI7--wgPtEJWf_K/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "If we sit back and watch as the counterfeit bills go into circulation,",
                "line": 289,
                "start_time": "0-18-16.960000",
                "end_time": "0-18-21",
                "url": "https://drive.google.com/file/d/1hrlN6-USwwyh9v2-PRE7aoMEP17DodP0/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "the Cult could end up losing enormous amounts of money.",
                "line": 290,
                "start_time": "0-18-21",
                "end_time": "0-18-25.290000",
                "url": "https://drive.google.com/file/d/1dccFlUlWLIZl9fd4nohVmcrd4xGZdp4S/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "What is this?",
                "line": 291,
                "start_time": "0-18-26.080000",
                "end_time": "0-18-27.670000",
                "url": "https://drive.google.com/file/d/1wriRjhHwJn7SeRri_yJU1E6woHkDT6uX/view?usp=drivesdk"
            },
            {
                "name": "Gettan",
                "name_variant": "Gettan",
                "subtitle": "What is happening?",
                "line": 292,
                "start_time": "0-18-27.670000",
                "end_time": "0-18-29.170000",
                "url": "https://drive.google.com/file/d/1ooi-qf4ikjvhqt13LbJBL6BQwSTa_Dhh/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "Confirming target.",
                "line": 293,
                "start_time": "0-18-41.960000",
                "end_time": "0-18-43.420000",
                "url": "https://drive.google.com/file/d/1OjxIhBa8HmQN81JJQaiG_QwDs02Xll4E/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "We know that this train is carrying cargo from the Lawless City.",
                "line": 294,
                "start_time": "0-18-44",
                "end_time": "0-18-46.880000",
                "url": "https://drive.google.com/file/d/1INvfMw5D3Y_5kRvh39FwpzRYxtWgpcx5/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "And that cargo includes the counterfeit bills mingled with other stolen goods.",
                "line": 295,
                "start_time": "0-18-46.880000",
                "end_time": "0-18-50.250000",
                "url": "https://drive.google.com/file/d/1na05--Msc8G-Q-lUoB2u6nh1QehqC_wK/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "We will let other teams search for the counterfeiters",
                "line": 296,
                "start_time": "0-18-50.540000",
                "end_time": "0-18-52.960000",
                "url": "https://drive.google.com/file/d/19jjGL8c8FGve2GiOZFNS8CqoqmPd3nQf/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "while we move to recover the bills in question.",
                "line": 297,
                "start_time": "0-18-52.960000",
                "end_time": "0-18-55.170000",
                "url": "https://drive.google.com/file/d/1JnYXdoBhYloj-dDqbW7Tk2cBtlW5_A7T/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "Number 666, you do not make any decisions.",
                "line": 298,
                "start_time": "0-18-55.750000",
                "end_time": "0-18-58.170000",
                "url": "https://drive.google.com/file/d/1UgCkqdT0AgwJ6vPyy-nixFdD6MZZ_IC4/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "I am the leader, and you will follow my orders.",
                "line": 299,
                "start_time": "0-18-58.790000",
                "end_time": "0-19-00.960000",
                "url": "https://drive.google.com/file/d/1E5XtP56BxEEZpClvVlwsH_jXBv4H3XQk/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "I understand that.",
                "line": 300,
                "start_time": "0-19-01.670000",
                "end_time": "0-19-03.040000",
                "url": "https://drive.google.com/file/d/1NF727ODb-9BFpstHBVnGM7XMQd9o3RY3/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "No, you don't. That's why I'm reminding you.",
                "line": 301,
                "start_time": "0-19-03.750000",
                "end_time": "0-19-06.170000",
                "url": "https://drive.google.com/file/d/1-AajfjdxwxkRZcdPt2B-T1lLAKQpNZv4/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "The last mission, the one before that...",
                "line": 302,
                "start_time": "0-19-06.170000",
                "end_time": "0-19-08.460000",
                "url": "https://drive.google.com/file/d/1yKB0rzDuFfOxY7QmuIM4gZ0NZxVsEhDC/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "What are you so panicked about?",
                "line": 303,
                "start_time": "0-19-08.460000",
                "end_time": "0-19-10.710000",
                "url": "https://drive.google.com/file/d/1v_f7BLrVFd6CAgDgH5fs0Z0Mhy9ikwm0/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "I am not panicked.",
                "line": 304,
                "start_time": "0-19-11.040000",
                "end_time": "0-19-13.210000",
                "url": "https://drive.google.com/file/d/1oNfAGj4SqsLI1VHgWsqTjmO2uPsfNs8G/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "There you go, keeping everything bottled up.",
                "line": 305,
                "start_time": "0-19-13.210000",
                "end_time": "0-19-15.460000",
                "url": "https://drive.google.com/file/d/1m638nPLhqrF39UdSWA5uLYnV_54cHRuw/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "We can't understand you if you don't talk to us.",
                "line": 306,
                "start_time": "0-19-15.880000",
                "end_time": "0-19-17.960000",
                "url": "https://drive.google.com/file/d/148hgz9boXafzzRwfGD7BysYNX7IO4ROx/view?usp=drivesdk"
            },
            {
                "name": "No. 665",
                "name_variant": "No. 665",
                "subtitle": "That's enough, you two.",
                "line": 307,
                "start_time": "0-19-18.790000",
                "end_time": "0-19-20.580000",
                "url": "https://drive.google.com/file/d/1WzbKpbvx4RNRJ_LehP4GNrsNKN9l1FfZ/view?usp=drivesdk"
            },
            {
                "name": "No. 665",
                "name_variant": "No. 665",
                "subtitle": "Right now we need to focus on the mission.",
                "line": 308,
                "start_time": "0-19-20.580000",
                "end_time": "0-19-23.080000",
                "url": "https://drive.google.com/file/d/1Plqcy0JFPaFX9QkAhG8YenFNyB8QAyoh/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "You're right.",
                "line": 309,
                "start_time": "0-19-23.080000",
                "end_time": "0-19-24.120000",
                "url": "https://drive.google.com/file/d/1JPQFnXMGkS-AIPiw0IGVB70GqoklZzQB/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "Hey, you just ate something!",
                "line": 310,
                "start_time": "0-19-24.120000",
                "end_time": "0-19-26",
                "url": "https://drive.google.com/file/d/1M5cJan-VMPaNriSBmEBpxTx8UfBFDxpG/view?usp=drivesdk"
            },
            {
                "name": "No. 665",
                "name_variant": "No. 665",
                "subtitle": "I'm eating nothing.",
                "line": 311,
                "start_time": "0-19-26",
                "end_time": "0-19-27.040000",
                "url": "https://drive.google.com/file/d/1-iFkyBwJYi-6QNa6SSiec9eKu6k2EU3W/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "You put something in your mouth! I know you did!",
                "line": 312,
                "start_time": "0-19-27.040000",
                "end_time": "0-19-29.120000",
                "url": "https://drive.google.com/file/d/1N0_Xf8EOnQbXbFFYnIjsDo72WrVTCM0f/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "We're on the job! You can at least wait until...",
                "line": 313,
                "start_time": "0-19-29.120000",
                "end_time": "0-19-30.620000",
                "url": "https://drive.google.com/file/d/1asgJbW8oBzepUi6KiUcYqih2_1TZBC4G/view?usp=drivesdk"
            },
            {
                "name": "No. 665",
                "name_variant": "No. 665",
                "subtitle": "There aren't any passengers.",
                "line": 314,
                "start_time": "0-19-44.080000",
                "end_time": "0-19-45.710000",
                "url": "https://drive.google.com/file/d/1NYRwRGXadW0WBbsFfD51Chl9onidKqRQ/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "This train is transporting contraband, so it makes sense, but...",
                "line": 315,
                "start_time": "0-19-45.710000",
                "end_time": "0-19-49.580000",
                "url": "https://drive.google.com/file/d/1cuAG0tzzSVnjv7rF2idtZ_XQI2ZLkVEO/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "But we're not seeing any guards, either.",
                "line": 316,
                "start_time": "0-19-50.080000",
                "end_time": "0-19-52.710000",
                "url": "https://drive.google.com/file/d/1c8nVpCk_sz_3VbimYSKqYTfkUwYXwwUO/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Be careful!",
                "line": 317,
                "start_time": "0-19-54.960000",
                "end_time": "0-19-56.170000",
                "url": "https://drive.google.com/file/d/1NBMVRGg61s7LlFqgP1gh23177nYK_uF-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Now then...",
                "line": 318,
                "start_time": "0-20-05.880000",
                "end_time": "0-20-07.080000",
                "url": "https://drive.google.com/file/d/1di8Dso6bHrsO5gQw18nUFY0KK8wpLkkr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Might I see your tickets?",
                "line": 319,
                "start_time": "0-20-08.080000",
                "end_time": "0-20-10.500000",
                "url": "https://drive.google.com/file/d/1oRwS1r8OSkA9_pBYhsJht0w_kTmCdui6/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "Oh, please! You think this will...",
                "line": 320,
                "start_time": "0-20-12.420000",
                "end_time": "0-20-15.380000",
                "url": "https://drive.google.com/file/d/1PS262bsW_N6DWyf1DwLelynEmJZOUydT/view?usp=drivesdk"
            },
            {
                "name": "No. 665",
                "name_variant": "No. 665",
                "subtitle": "It's kind of unbreakable!",
                "line": 321,
                "start_time": "0-20-16.670000",
                "end_time": "0-20-19.210000",
                "url": "https://drive.google.com/file/d/1-QAQYp8T0Onqfv0nTh8EZMAmeBRbgi9r/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Magically reinforced thread!",
                "line": 322,
                "start_time": "0-20-19.880000",
                "end_time": "0-20-21.750000",
                "url": "https://drive.google.com/file/d/1cR4JOvtZzyPM1UVNuPwAHwqDKb1Vqb19/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Who are you?",
                "line": 323,
                "start_time": "0-20-21.830000",
                "end_time": "0-20-23.040000",
                "url": "https://drive.google.com/file/d/1vFyca7GpztpCy4uiMA45u-o5PvSb17mB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "John Smith.",
                "line": 324,
                "start_time": "0-20-23.040000",
                "end_time": "0-20-24.960000",
                "url": "https://drive.google.com/file/d/139p9c3jGyO_DToF6YqqNbG28YK8kAF5W/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "You voluntarily put yourself within death's reach",
                "line": 325,
                "start_time": "0-20-31.290000",
                "end_time": "0-20-33.120000",
                "url": "https://drive.google.com/file/d/1N2PaeE8JrUyEadDZolu6NrC1XPfwxcbV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "to eliminate the distance between yourself and your enemy.",
                "line": 326,
                "start_time": "0-20-33.120000",
                "end_time": "0-20-35.290000",
                "url": "https://drive.google.com/file/d/1Kbvck3M4xVawwTm7M6JpEPnP1dmD99Zh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "That was the correct choice.",
                "line": 327,
                "start_time": "0-20-35.290000",
                "end_time": "0-20-36.960000",
                "url": "https://drive.google.com/file/d/17NgHKdie4OzOnhqe7cGkaXUtCLlTT2vJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "However...",
                "line": 328,
                "start_time": "0-20-36.960000",
                "end_time": "0-20-38.170000",
                "url": "https://drive.google.com/file/d/1542gsqKnQnvif0aq-7y6HWnVZI4dFNNN/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "You're too inexperienced to risk it all on a single attack.",
                "line": 329,
                "start_time": "0-20-39.040000",
                "end_time": "0-20-41.460000",
                "url": "https://drive.google.com/file/d/11VX8i0GOc4waWcOMNjS7TQXVwe_Gt1Fw/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "Number 666!",
                "line": 330,
                "start_time": "0-20-41.960000",
                "end_time": "0-20-43.170000",
                "url": "https://drive.google.com/file/d/1QcPQRswkCAd_IMgopjFd61ui3Z0DX5dS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "I knew you people would be the first to figure it out.",
                "line": 331,
                "start_time": "0-20-43.790000",
                "end_time": "0-20-47.380000",
                "url": "https://drive.google.com/file/d/13fct21j4KWMaq4TVqP8PcR6V7l-RNBF9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "But it's too soon.",
                "line": 332,
                "start_time": "0-20-47.880000",
                "end_time": "0-20-49.460000",
                "url": "https://drive.google.com/file/d/1S-NlPG_wO2hPGD3tgRU9MDx1Qcng_8RM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "You do not need...",
                "line": 333,
                "start_time": "0-20-50.920000",
                "end_time": "0-20-52.330000",
                "url": "https://drive.google.com/file/d/1DRqNa8O75wkeq4WxIc-TXJO0fQPN_LIm/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "...to learn any more.",
                "line": 334,
                "start_time": "0-20-52.580000",
                "end_time": "0-20-54.380000",
                "url": "https://drive.google.com/file/d/1DyBDgSnmYxoox0H9DbBecS8gvc1E2b0L/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "John Smith",
                "subtitle": "Not yet!",
                "line": 335,
                "start_time": "0-20-54.750000",
                "end_time": "0-20-55.960000",
                "url": "https://drive.google.com/file/d/1_01GzuRIHZvk5n5jHHWs_fPfpanHYFNX/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Stop! I still haven't-",
                "line": 336,
                "start_time": "0-21-11.420000",
                "end_time": "0-21-13",
                "url": "https://drive.google.com/file/d/1gl0JNwtiXwsh4JGfyPBJMoGNRxgB2Lyj/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "Number 666!",
                "line": 337,
                "start_time": "0-21-13",
                "end_time": "0-21-14.250000",
                "url": "https://drive.google.com/file/d/18nrlYIALFRy8gpmNo4QOyfuTLSknxvvj/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "It's over, Number 666.",
                "line": 338,
                "start_time": "0-21-15.420000",
                "end_time": "0-21-17.750000",
                "url": "https://drive.google.com/file/d/1yh1rtPwXx_wTXoNOfbs07GfdAECdBuQ9/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "But...",
                "line": 339,
                "start_time": "0-21-17.750000",
                "end_time": "0-21-19",
                "url": "https://drive.google.com/file/d/1RsBQb70uzr7i_2I6_DXrHJ_r4v1dBKF9/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "If we go after him without a plan, we'll fall into the exact same trap.",
                "line": 340,
                "start_time": "0-21-19",
                "end_time": "0-21-21.620000",
                "url": "https://drive.google.com/file/d/1b1L_U6qPbmSKm42Y1SE8hgrWqHz5GI-p/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "Surely you're smart enough to understand that.",
                "line": 341,
                "start_time": "0-21-22.170000",
                "end_time": "0-21-24.500000",
                "url": "https://drive.google.com/file/d/1pjcYtSZJ93yzM9blIApbcJXs6617plLt/view?usp=drivesdk"
            },
            {
                "name": "No. 665",
                "name_variant": "No. 665",
                "subtitle": "Aww, they started speeding up.",
                "line": 342,
                "start_time": "0-21-26.830000",
                "end_time": "0-21-29.580000",
                "url": "https://drive.google.com/file/d/1rQHBvQDEy3kZ6wdnbv7btdBLvH-T7XAj/view?usp=drivesdk"
            },
            {
                "name": "No. 665",
                "name_variant": "No. 665",
                "subtitle": "I don't think we can catch up now, even if we run.",
                "line": 343,
                "start_time": "0-21-30.040000",
                "end_time": "0-21-32.750000",
                "url": "https://drive.google.com/file/d/1ULu0hAWGNgzTtKfNXl3P-r91V2F0IYpm/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "We go back and report to Lady Gamma.",
                "line": 344,
                "start_time": "0-21-34.830000",
                "end_time": "0-21-37.120000",
                "url": "https://drive.google.com/file/d/1dRneu1RExcdjmtXeuhUyhNzLaen75l4H/view?usp=drivesdk"
            },
            {
                "name": "No. 664",
                "name_variant": "No. 664",
                "subtitle": "Understood?",
                "line": 345,
                "start_time": "0-21-37.120000",
                "end_time": "0-21-38.330000",
                "url": "https://drive.google.com/file/d/15wPrRLy_PCG7xK2Nv9sYjouAVGFGyRPy/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Yes...",
                "line": 346,
                "start_time": "0-21-39.420000",
                "end_time": "0-21-40.620000",
                "url": "https://drive.google.com/file/d/1q8auMeTj0Hxhp9kbY7027GZZb38adp_p/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "John Smith...",
                "line": 347,
                "start_time": "0-21-45.540000",
                "end_time": "0-21-47",
                "url": "https://drive.google.com/file/d/1U5NDjOMq2CqbrS7V5iCMEZiYiShArKck/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "That power...",
                "line": 348,
                "start_time": "0-21-48.380000",
                "end_time": "0-21-49.920000",
                "url": "https://drive.google.com/file/d/1cYXPbXpPwUsMHzgyp7WRi-PLqE5jmxyX/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Why?",
                "line": 349,
                "start_time": "0-21-52.250000",
                "end_time": "0-21-53.500000",
                "url": "https://drive.google.com/file/d/1jbnIfN8sLZ0Ut4zS9LgKgO1M-r7SZRMe/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Why am I so...",
                "line": 350,
                "start_time": "0-21-54.210000",
                "end_time": "0-21-56.960000",
                "url": "https://drive.google.com/file/d/1oXlwg-H8J_zwzBud_g7j9uqktjF3IJ9U/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Why...",
                "line": 351,
                "start_time": "0-21-58.290000",
                "end_time": "0-21-59.500000",
                "url": "https://drive.google.com/file/d/1b85JvfZBKCXyJ2yO2vqpPQAoNKoErOGl/view?usp=drivesdk"
            },
            {
                "name": "Rose Oriana",
                "name_variant": "No. 666",
                "subtitle": "Why am I so weak?",
                "line": 352,
                "start_time": "0-22-00.880000",
                "end_time": "0-22-02.710000",
                "url": "https://drive.google.com/file/d/1smGcXRHtl43Wda0bA5GjyCcELOFBekbq/view?usp=drivesdk"
            }
        ]
    }
}
let setDoc = db.collection('data').doc('an_s2_e5').set(data['s2']);

//let setDoc = db.collection('data').doc('ssc_p2_c2-5').set(data['p2']['c2-5']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

//let setDoc = db.collection('data').doc('ln_v5').set(data['v5']);

// let setDoc = db.collection('data').doc('an_s101').set(data['kj1']);
setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
