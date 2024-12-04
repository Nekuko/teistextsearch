const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "fthasg": {
        "e1": [
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "S-So cold... It really feels like winter...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1uXgFoXDejtoMzWtL2_HqQp_n6LpXEWGJ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Which means it must almost be the holiday season. That's something I definitely look forward to.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1L7IdKZ3GRMf0KRjM_bdInM4F9eIQKzr5/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Heehee, what kind of sweets shall I make this year? Maybe I'll even try for some hot chocolate and cookies to keep Master Shadow warm\u2014",
                "line": 3,
                "url": "https://drive.google.com/file/d/1IPclODXzE0RIisQE01Hod7fHPN-bPNop/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Huh? Is that Chi, Omega, and...Eta? What're they doing over there?",
                "line": 4,
                "url": "https://drive.google.com/file/d/1ZGMP_B6PqwtrXQw-Dxd13Rs_kdSqbZv5/view?usp=drivesdk"
            },
            {
                "name": "Chi",
                "name_variant": "Chi",
                "subtitle": "Please accept our sincere apology, Lady Eta. We're in a great hurry...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1SmEj90xT9miePVYTBQLwJfGuI3W1ofS_/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "And this is a very important errand, so we'll be taking our leave now.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1kFnUQoRu3ZEG_LZrFkFpctoz1498Z-pm/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...And off they go.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1Ej_tJumGhqcPRcXG1_XTpLj3BAySQ443/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What's wrong?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1RusXsAlhr35ahRfZb2Yu08jV5K8Ak59x/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I wanted them to help with an experiment... But it looks like they're busy...",
                "line": 9,
                "url": "https://drive.google.com/file/d/124ATEsbbveD7AeI-AM6uIw6rWVoambmA/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(...\"Busy\" might not be the real reason.)",
                "line": 10,
                "url": "https://drive.google.com/file/d/1N2ZNjj7Wbu0OYNOAMgjcQduK5kl4vVLf/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Lately...when I need helpers for my experiments...everyone suddenly remembers they have something to do...",
                "line": 11,
                "url": "https://drive.google.com/file/d/1Gwv6CITEKNT_vbbLZn9EFYnseXOKH0YB/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(In other words, they're obviously avoiding you.)",
                "line": 12,
                "url": "https://drive.google.com/file/d/1M4x6iJwSItA5d_F5xxII2sB-KkyLrqap/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...",
                "line": 13,
                "url": "https://drive.google.com/file/d/1NLaTOb8qW1s0L1esOCBFJI59quFynMaX/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Uh, Eta?",
                "line": 14,
                "url": "https://drive.google.com/file/d/19cynjdipLkyYzDY6Ci7wnekaINsaINd6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Yeah, I guess even she'd feel hurt by that...)",
                "line": 15,
                "url": "https://drive.google.com/file/d/1DdGbdRWA6RJ-cNuMc3Nd4Wvq8b92S6zS/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "At this rate...I won't be able to secure any subjects... A grave situation indeed...",
                "line": 16,
                "url": "https://drive.google.com/file/d/1R9Mzm1zIMrmWTAdxUf5xZIxkeMtpjHGp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You see, that's your problem right there, Eta.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1njjKM5rbrHBQu2pUU5vcevtrqNgWBLhr/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...What do you mean?",
                "line": 18,
                "url": "https://drive.google.com/file/d/1gS0A6qaKkyNrC1Pba1_XpgZaufCjFCQi/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You're seriously set in your ways. Try thinking of how you interact with others once in a while.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1RhkzME3R_bbJKG59ogFDljsqiPao70go/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Eta might be fine with that...but I'm not.)",
                "line": 20,
                "url": "https://drive.google.com/file/d/1b5ssxNAIm2p5ENH5gsyNdv1b5geg-2tM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Use this as an opportunity to improve your relationship with everyone.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1fPCdYSIzjCczsRVf2Falar2uxCVyxc9H/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Why?",
                "line": 22,
                "url": "https://drive.google.com/file/d/1FAWYW0Kh-YZpU8L1j-7irOu7kYY3I0F1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "\"Why?\" ...Ugh, come on, no questions\u2014you need to do it, and that's that!",
                "line": 23,
                "url": "https://drive.google.com/file/d/1LveRagbYADFP3E5-z9nJpVnb6sveXM0h/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Too much work... Besides, how do I do it...?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1Ocxt8Q2SxA-iwLn2pzvgUAiheauzAyQ5/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "\"How\"? Well...",
                "line": 25,
                "url": "https://drive.google.com/file/d/1fwpoAYR2pOnexu9_jRiI9zYdpPpmshV8/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Aha, I know! It's almost the holiday season, right? What about giving presents to everyone?",
                "line": 26,
                "url": "https://drive.google.com/file/d/1oQXYBfmJ3cvluXqw9Ij8hgDMt8XijWQg/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "The holiday season...? Presents...?",
                "line": 27,
                "url": "https://drive.google.com/file/d/1cEH4AN3umjZuUMCyWeiy2rixRJwHcGA4/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You know, the new custom Mitsugoshi spread, about giving gifts to those you're close to.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1Qx1Iij1DYFkoCFoFL7iChctArsr_guhl/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "So, you're going to give presents to the people who helped you along the way or took part in your experiments. As a way of expressing gratitude and apologizing for everything.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1BVq2LMsuRYHjtEL23uzUXvmXNAHtyBqJ/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Just saying thanks isn't enough?",
                "line": 30,
                "url": "https://drive.google.com/file/d/14kjsJgX-RhNUHtfIFzqQfo2VTHccJUu2/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "No. These need to be gifts from the heart.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1QvIAxOk8x7dLngWAsTOSV4sEbfYb0Oz1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That's how you show consideration for the other person's feelings. Then they'll be sure to show you some understanding, too.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1VSGvKSZnWy8pXtYzX_ZYtvlv9JQ-14fG/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Definitely too much work...",
                "line": 33,
                "url": "https://drive.google.com/file/d/1k_OdqbicySnLMITcmKQEsec76YJuo589/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Don't say that... What if everyone keeps on avoiding you like the plague?",
                "line": 34,
                "url": "https://drive.google.com/file/d/15Zpms-9ngYjaecPNmxDxrBSdQ60l5Xee/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "That...would be problematic.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1pYukaSF9oNb-_VMt72GQ5LKwieLUepz0/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Honestly, I get why people are wary of Eta's experiments. Even I try not to get sucked into them if at all possible.)",
                "line": 36,
                "url": "https://drive.google.com/file/d/1UJja5FFTeeE9ajMrv8xAzfOe72PR503P/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(But it still hurts to see people avoiding her like that... I really hope we can do something to remedy the situation.)",
                "line": 37,
                "url": "https://drive.google.com/file/d/1zVg7Yt10JNKKx2uLL3M5DjOXf2R8F-g4/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Ugh...",
                "line": 38,
                "url": "https://drive.google.com/file/d/1UCTNahmVh3aNA-p0xYOz9IybpMBf0SQt/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Fine. I'll do it.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1Z86QNG5w_EOxe60SoQa9NOsklbDSw_nX/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That's the spirit!",
                "line": 40,
                "url": "https://drive.google.com/file/d/19SUzsShEXLycEgfsBqy3yDIdpNLv5gMw/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Otherwise, they'll keep their guard up...and that will hinder future experiments...",
                "line": 41,
                "url": "https://drive.google.com/file/d/1bRtIFJ1qT7xYSa-X3gEwTVG9R3P5zVwh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Huh? Did you say something?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1lbFa2jozrok9ht1levGGA6x0Quu2qy-o/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "No.",
                "line": 43,
                "url": "https://drive.google.com/file/d/15m1dCpc2Ui-CO5QJ4ELna7CJnSkLvXUj/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "So...what do I need to do?",
                "line": 44,
                "url": "https://drive.google.com/file/d/1q54tgfNvz3CHJkBOfLX8nBT8Y9FhRFQ-/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well. If we're being serious about it, we may as well dress the part by changing into something seasonal.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1diD5oRxsf3v8VxPcdVm8B4ElDGOYO3Y8/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "And given this particular holiday...it's gotta be a saint outfit!",
                "line": 46,
                "url": "https://drive.google.com/file/d/1L1GjFItR0wFprhEXtH3tPMSURfTdpxC-/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...What's that?",
                "line": 47,
                "url": "https://drive.google.com/file/d/1Ehb4gJX4UKgP4MXUVamwiLyqIr1fceon/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "This...might be a little too sexy for you. Let's go with something cuter...but then are we getting too contrived? How about we try this top to give the outfit a little more maturity...",
                "line": 48,
                "url": "https://drive.google.com/file/d/1dkGU_iCPJE2i56FIIYIbFh-Xv36q1a4-/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Not like it matters.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1em5Tm0DkVGtvpEueVw3Hx9CMCDTjd5cR/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Heehee, oh, just humor me. It's not like we get to do this every day. This should be where the fun starts.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1MsNbjHAPQJVQqNbKnuuRpLchY7JLDkX6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Besides, you need to have more fun with fashion in general. You NEVER put any work into your appearance.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1TP73iZu7eq_c0ZdT4AZpNYK2ackRZjPZ/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "All that matters is doing my research...",
                "line": 52,
                "url": "https://drive.google.com/file/d/1exo1LhekO8yvHoyfIrayadh3bo6kgeSh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Then a holiday saint outfit won't do you any harm.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1kUMyOa7pIeS11-tvP_PGtu2afdIE5YDy/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Yep, this is way better. Now, let's get changed.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1Qq_idVzPa79JzU3gAzjP_q2P8I8YBSQ0/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "*sigh* Fine...",
                "line": 55,
                "url": "https://drive.google.com/file/d/1YvsJAvg5eif1vUTLzkn7kYkfGO4ab6nr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "There we go! You look amazing. My eye for fashion never fails.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1QdADROpczAnpH_6O9dgZnKcDdkTsspet/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Really? But why did you change too?",
                "line": 57,
                "url": "https://drive.google.com/file/d/1skxRaH4mqnoBeWkYraKey-btibNI_rQ_/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Because I also want to dress cute\u2014uh, no, it's so I can help you. I'm not sure you can pull this off on your own.",
                "line": 58,
                "url": "https://drive.google.com/file/d/1-fXcTHrrk3K-EyK6Hm8BRB0-k_fNeeJC/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "But...I'd be fine...alone...",
                "line": 59,
                "url": "https://drive.google.com/file/d/1vC4UTvn63_h3abMFhm1Cmu5B6xv7qgVQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, yes. Spare me the grumbling, and let's get to work!",
                "line": 60,
                "url": "https://drive.google.com/file/d/1K0I261sxl8gQe8OmLWnhs-rUguSml7FP/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "We'll call this \"Operation Gift-Giver\"! Now, time to go find out what everyone wants!",
                "line": 61,
                "url": "https://drive.google.com/file/d/1OjDKmLQJo63yCSQaT_lPO4QqIn94jnfI/view?usp=drivesdk"
            }
        ],
        "e2": [
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Now, who to start with... Oh?",
                "line": 1,
                "url": "https://drive.google.com/file/d/16zR4xd-lP1QYq-i-KN3HofpdFryA-k-G/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Hm?",
                "line": 2,
                "url": "https://drive.google.com/file/d/12TGffhpKgSMDvJZ076Imx9hYpDDbJ5fo/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Zeta! Perfect timing! Do you have a second?",
                "line": 3,
                "url": "https://drive.google.com/file/d/1dbUwUqoLjl6m_EjEtM9l-y99RssopLB0/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "What's up?",
                "line": 4,
                "url": "https://drive.google.com/file/d/1JqnhXkI0BKvTUPvKS8ENrAvyKgUPRsYh/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I need...to ask you something...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1Gtbg_H1eNNLOTzRyXesprrTUMs2c8eTt/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Eta, too, huh.",
                "line": 6,
                "url": "https://drive.google.com/file/d/15l32gEqKjkareI6L0Ws2zIjuXBcZkxjS/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...So, what's the experiment this time?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1L0avv_Df2PpYkufqWODmjtpPd0Oezei3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(...Yeah, she's definitely got her guard up. Time for me to step in and smooth this over.)",
                "line": 8,
                "url": "https://drive.google.com/file/d/1axOb1gg3TTYD-JxRbxsZpc4HszYzK2vU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Relax, there's no experiment. Today is different. Right, Eta?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1Er6C3zSolQ4aAdKGiSe65tvooKYweEFo/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "If you want something...I'll get it... So tell me.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1GwB0LTFl4gYVp2WuF4rT4BXS7ZCllieC/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Uh...why?",
                "line": 11,
                "url": "https://drive.google.com/file/d/16ITz0RF5cBfnVTiSkZdvtPyQXIHc_DaQ/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Um... Because I...need to do this...?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1Uv8lYzu3AQ7YzX226y4mChGA9oS4SmC8/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Wait, don't tell me this is so scheme to sucker me in with a bribe\u2014",
                "line": 13,
                "url": "https://drive.google.com/file/d/1anhLxbRw-jPvEe7b3RIgmAELgqgvB5gv/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "No, no. This has nothing to do with science. No one is going to do anything to you.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1HG9htANjS7WOyW8_Gjgi3Gs4e3UKCb8f/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Yeah. So tell me.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1c2bISTh27ajUzEvpTz8hnPm7rujm-j8l/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well, I guess it won't hurt.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1LI5iKgZwGuF4z6kHDY9ciE-in94SpLHl/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "But still...what do I want... Hmm, maybe some tasty fish?",
                "line": 17,
                "url": "https://drive.google.com/file/d/1YUC3mnxnPTS0eihCPbGUo7hh6g2fwzM9/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Thanks, that was very informative. Let's go, Eta!",
                "line": 18,
                "url": "https://drive.google.com/file/d/1VGqJAWfRW2DzUVBQBMkppGB2PAOPGdlu/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Informative how...?",
                "line": 19,
                "url": "https://drive.google.com/file/d/1m2CX-UAqVwsb86JhSOO_LpTcFHek2T-C/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "A little chilly, but Mr. Sunny Sun is warm... Perfect for a nap.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1-ci64nOGwLC7xgfgDeh2Amg9pk2mWVkt/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "There she is... Hey Delta, do you have a moment? We need to ask you something.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1bieOeud_k8DMD4Y8CAwVRTfRUWjCdY4W/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ask me something?",
                "line": 22,
                "url": "https://drive.google.com/file/d/1sowm6qd6GQvyDMzU062FP0mG2SiNKP_9/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Tell me what you want...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1k2dVyCCWfdEza25I7gEO-yJS7Z24Tp_S/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Eep?! She's gonna pluck my tail again!",
                "line": 24,
                "url": "https://drive.google.com/file/d/1uV3yXh7gwsa9yDIo3pR1nNF74LNtLE__/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Pluck her tail...? Eta, what in the world have you been up to?)",
                "line": 25,
                "url": "https://drive.google.com/file/d/1tzetVOXzWe2qrbhF_J6UGdzK7Lg3X6T4/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "That was to study...therianthrope fur... A necessary sacrifice... But don't worry... I'm not here to pluck today...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1UvFpR7yaLZ-cxTHE2p9I783RxuBVAoxx/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Really...? Then why did you talk to me? I'm not gonna help with any experiments!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1B2W_iE9idffo1raPb13Db8mAul0Wwsdd/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Calm down, this isn't an experiment. We just have a question.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1Cj1OZymofezPLXdxYjfqZleDxRGb3o2n/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...And it won't hurt? It's not scary?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1R8jkcIxh5tmrv3u9aPcr7SkkUBznHQOj/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "No. Just tell me what you want...and I'll get it for you...",
                "line": 30,
                "url": "https://drive.google.com/file/d/14pvm4gLWxM2S0bnpeTXAUmhJu4lRu1Yk/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Huh, you will? Okay, then meat! I want yummy meat!",
                "line": 31,
                "url": "https://drive.google.com/file/d/19b08DQBrUYCdSPInio3oaHtRsyt9WAs7/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well, I suppose that covers the Seven Shadows and the Numbers...",
                "line": 32,
                "url": "https://drive.google.com/file/d/1KJao9jefxyaKDpk0JsnepPsR_m0QMs7O/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Luckily it's pretty much all candy and little stuff. A few items might take some effort...but we can start with the easy ones.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1qLRblvJx63Ntl52W2fxKqTxWhblr24as/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Is that...really enough...?",
                "line": 34,
                "url": "https://drive.google.com/file/d/1Uo5UbSRfY2mDxGaPbqzri_QRt-eb0scc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Why the serious face?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1WnYim42qC1hfYxfdmPzmCJZ8vMgHEIoC/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Holiday gifts...are special.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1rkDX2euKqMX5WI15jJ4_oIlrLj-RyGOX/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What...?",
                "line": 37,
                "url": "https://drive.google.com/file/d/1aPNZVJpaSAMO3i8gCmTMstmUxlsmwvIM/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "People want...something special on holidays. Regular items...don't work.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1MYzLRknxfUcuuOhd-nGH3NGTs02Gv1Rr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What exactly do you mean by \"special\"?",
                "line": 39,
                "url": "https://drive.google.com/file/d/1rIAzB3ahynBdahD_jS_bY6M6jY_1Imzh/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Zeta said fish, Delta said meat... But regular fish and meat...are unacceptable.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1joU0G1wvxoI5OgB3TVduwgguQ-vwoBX7/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "The holiday season...demands legendary quality... Anything else...will be a disappointment.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1EUPcuEcFOEpQMfeWcW9j78dX1RyT55ZX/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Legendary quality... Are we talking like platinum salmon or Cobay beef? Shadow Wisdom says those are super hard to come by.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1YjslNuQl_LEWsZZn45T1wvH3TGzU9kYq/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Exactly. Things of that caliber...are sure to make everyone happy.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1Q-xRxmWpoAKm4UcLdow9Ue6HWS4_u61x/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What's this about legendary quality?",
                "line": 44,
                "url": "https://drive.google.com/file/d/1fMQij0C2LmOwX8Li56J9kc7Cr5QKz1wB/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Oh, Gamma, amazing timing... Do you happen to have any legendary foods?",
                "line": 45,
                "url": "https://drive.google.com/file/d/1WpsJ5SC5X8SszveujRsaaoI2V7GX31AX/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "As in the two just mentioned? I'm sad to say that both are currently out of stock.",
                "line": 46,
                "url": "https://drive.google.com/file/d/189OepKxkcgL6rOo76RxYNX_TQdnqp-_R/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Really? And here I thought Mitsugoshi never ran out of anything.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1WjcgYYy5TkUogvfgg6CS2P6KziXI61VY/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What did you expect? Platinum salmon and Cobay beef are both delicacies from appropriately rare beasts...",
                "line": 48,
                "url": "https://drive.google.com/file/d/141GtGNfs5RtZUBaZgNcacL9MaaPjdmro/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Demand for them increases this time of year. We can hardly keep any on the shelves, they sell so fast. And the reserve orders for more just keep coming in.",
                "line": 49,
                "url": "https://drive.google.com/file/d/1iT5pnh9mfr-TBV21wxGcDegDSJ6WV_CC/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Wow, so they're that popular... I had no idea.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1rTNb1gGIAolQYTNXdPOjto4FtV93bVqj/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Then I'll go catch some myself... That's the only option...",
                "line": 51,
                "url": "https://drive.google.com/file/d/1BQA7pKKfOxo18ht6PhNJ510n3lChhasR/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Are you serious?",
                "line": 52,
                "url": "https://drive.google.com/file/d/1sKLJ6qloW92Ojb7GmiHd5om3Qn3W_FQD/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Of course.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1lKfwiO0i45-rMhcsp80mRGBURnIZ5VaS/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Zeta and Delta only said fish and meat, and would probably even be fine with something else.)",
                "line": 54,
                "url": "https://drive.google.com/file/d/1eqHii1gu5UBegcRqtcCk5x_zQzUFcfWc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(But Eta being Eta, this is probably her way of demonstrating good faith. In which case...)",
                "line": 55,
                "url": "https://drive.google.com/file/d/1RxpD-EiR4r5jz59TvKdnHW-9M9tgw4ik/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Understood. I'll help with the hunt.",
                "line": 56,
                "url": "https://drive.google.com/file/d/12RmdF5hzGMH2BDqjZjf_rzilzpzUzNXi/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Thanks.",
                "line": 57,
                "url": "https://drive.google.com/file/d/1ToRPgENeEZ49ph8W3LqCl_q2S1KjQiwF/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "And then if it comes to a fight...I can harvest your data, too... I can hardly wait...",
                "line": 58,
                "url": "https://drive.google.com/file/d/1jMa7PaRzKqMHn0xrpuy1iRZcQBxSwF3s/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Did you say something?",
                "line": 59,
                "url": "https://drive.google.com/file/d/1pT3HOyC6rf_X02YI9-yL87xcDORsaQw1/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "No.",
                "line": 60,
                "url": "https://drive.google.com/file/d/1oli7Zqemaq4-i5qiEU-40jIgmoYChtJe/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well, whatever. Now that that's settled, we'd better keep the momentum going. Let's hurry to the forest.",
                "line": 61,
                "url": "https://drive.google.com/file/d/1el75t7RQJ2gh4aeQlzdw8GgBp2lWAJT_/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Oh, wait. I have a question before you go... Have you seen Chi and Omega, by chance?",
                "line": 62,
                "url": "https://drive.google.com/file/d/1yEvPSiQWlzMa1bwcPmD4dSUn1j4hQ5Vv/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...We did. They said they had an errand...and ran off somewhere.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1XeF0XJDvBLtxLDdibQCSKYyW6CyaKiBL/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "An errand? But I don't recall asking them to do anything... Maybe it's for someone else.",
                "line": 64,
                "url": "https://drive.google.com/file/d/12GTt9RBguL2BfMPH0DV-5o4mt36-p2bb/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Thank you. I'll wait a bit longer while I finish things up here. I'm sure they'll be back soon enough.",
                "line": 65,
                "url": "https://drive.google.com/file/d/1T_Hua-dhHIRONWf19NzmprljJG9Ckv3d/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Did you need them for something? Seems like everyone is short on help this time of year.",
                "line": 66,
                "url": "https://drive.google.com/file/d/1rdeAiw6CHzSqy7micFoSfPvD4xu3XvYd/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But we'd better be on our way, too. Now\u2014time to hunt some monsters!",
                "line": 67,
                "url": "https://drive.google.com/file/d/1ilv57q1I5WYprmrq8lFGdU7dEl6u5Hoi/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Heheh, let the fun begin...",
                "line": 68,
                "url": "https://drive.google.com/file/d/1teUe8l5CPz8rknjO7-Cl4gK-3wopshvW/view?usp=drivesdk"
            }
        ],
        "e3": [
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "*pant, gasp*...!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1PTZpKOpJd_t0JwBasL21XrdXg3vu9vIo/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Good work.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1Ui8uTh7zpLiebHKC2orwu4BT6ELaiZcD/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "J-Just how many am I supposed to catch?!",
                "line": 3,
                "url": "https://drive.google.com/file/d/1kqPt7qIuf8F1lY7nPQGPvsZySBKcEIyu/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "One, two, three...ten? But I think we could still use two more...",
                "line": 4,
                "url": "https://drive.google.com/file/d/1-zsMzs6m5XjT6AzO59UwlsbXAIt6n6Fj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "No, this is enough! *pant, wheeze*...",
                "line": 5,
                "url": "https://drive.google.com/file/d/1pXK1kHtuArqrhgIzyxixfD_-7AM0vH5N/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Seriously... I can't believe you made me fight so many monsters on my own.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1e1UPr1YnztDOB9OU7Cay2IJ8XUDrO9cL/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "And no sooner do I down one than you call over more. This isn't a \"hunt one, get one free,\" so stop already!",
                "line": 7,
                "url": "https://drive.google.com/file/d/14oyDzKPn67X7ZBONiZCPrrtRoizf31kA/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...\"Hunt one, get one free\"?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1pa1SpJ1rqmemoU00Ty3I1hnfsRLzuRvk/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You know, like the Shadow Wisdom where you get something for free after purchase...?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1rSJ7qsRH4wScuDcDEjKmHV0_dMgWXQoh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Besides all you're doing is standing there watching. It wouldn't kill you to lend a hand, you know!",
                "line": 10,
                "url": "https://drive.google.com/file/d/124ZjjZVy0KkURsjL1UZdO8YC3Vu1Ikmn/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "But you can handle this much on your own...or am I wrong?",
                "line": 11,
                "url": "https://drive.google.com/file/d/1eIYIqyrpzROLbs2-H6zNM0EsFgyipFzL/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Ugh... Well, yeah, of course I can. I can...but even I get tired.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1YTtHslMemUEWVMBLZtrB-sSGg18C24Xq/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Thanks to you...we have plenty of Cobay beef. And I got my data... And I was able to test the effectiveness of my pheromone beast lures...",
                "line": 13,
                "url": "https://drive.google.com/file/d/1-M4xb5BSPbvRBN2Xz_8meMnncuCleNM5/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Three birds with one stone... Heheheh...",
                "line": 14,
                "url": "https://drive.google.com/file/d/1GzrSvLeMd3Kw7Rhwy-fcOEeIUqVG_12R/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Data...? Wait, what are you talking about\u2014",
                "line": 15,
                "url": "https://drive.google.com/file/d/1_KtzicoeTFypjulqZfQog1do3hbNR6zr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...No, I get it. I'm onto your scheme now.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1uv3WftrxUZ6KUc0JNSXusTwVYTm6PU2u/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You just wanted to collect my combat data while trying out your synthetic pheromones, didn't you! All that talk about Cobay beef was nothing but a lie...!",
                "line": 17,
                "url": "https://drive.google.com/file/d/1_aU_SIHaxpRbIoIihzz9jnsiqmjVjOjd/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "The part about me wanting to give something special for the holidays...is true. Also...",
                "line": 18,
                "url": "https://drive.google.com/file/d/1Sk37T0W-D1pVa6z32vbXU5CWUJEFk7ZF/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "If this research goes well...I'll let you be the first to test my pheromone perfume.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1xf0h1_gjUYxEUQb87RKvPR3Cf7vBS4Sc/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well, that's a first I'm not interested in. That stuff is meant to attract monsters, right?",
                "line": 20,
                "url": "https://drive.google.com/file/d/122HD9AWNfPiMcB4VlATebw8KqUq96lxK/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Yes...for now. But pheromones...are originally intended to attract the opposite sex.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1eqPMO2exZQvt8xz6f39mt0h2lgpsT-W0/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "If I apply my research...I may be able to make perfumes that captivate someone specific...",
                "line": 22,
                "url": "https://drive.google.com/file/d/1OSyqyRMooJWgxZqPRsisdB-UQlAwCUGN/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Wha...?!",
                "line": 23,
                "url": "https://drive.google.com/file/d/13iw2bTV1mRRIqIEjVx_jTiKKo3FLZJ0E/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Is she saying what I think she is...?! That I might be able to seduce Master Shadow?!)",
                "line": 24,
                "url": "https://drive.google.com/file/d/1joNECg2vaSMTBTRKbBZ4KnYenEO0tj7h/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "So...will you help?",
                "line": 25,
                "url": "https://drive.google.com/file/d/1VI2DrrJhrYamUKmhmpF-3F90emhHvhLK/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Heehee, if that's the case, then Epsilon is on the job! I'll help you every step of the way!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1BQAyCiAtlwW3fs0Q-9sPZUO634lLJyyq/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Okay, then next I want to test it on...platinum salmon.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1RZ5nZSMvQNgMj6fXy96CG9iN0AwOGHe3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "By all means! Just leave it to me!",
                "line": 28,
                "url": "https://drive.google.com/file/d/1gQP2PV-g7_hy_aXi6bznZrPE9X_SuH-0/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "No way...! Is this...platinum salmon?!",
                "line": 29,
                "url": "https://drive.google.com/file/d/19fSjlbrJRh3mD5mBCCtE44-kBECrCOdD/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Wow! Huge chunks of meat! Look at all that yummy fat!",
                "line": 30,
                "url": "https://drive.google.com/file/d/1tnbNiL0Zpzf9tFTUaDATXI5I58a3m9Je/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "We got what both of you wanted...",
                "line": 31,
                "url": "https://drive.google.com/file/d/14Ji_I1EEhjQTBg5aTXhBEVXJKpr-A5MH/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Thanks. But I really wasn't expecting platinum salmon... All I asked for was some tasty fish.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1KGZQ90qyhXh-H3u8N9hZVDN2PRAaY4bJ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I'm surprised too! Never thought you'd give me this much tasty-looking meat!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1ctCbMZrmYnTg0E1GIBPdWts3LV51Ya_2/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It was Eta's idea. She said that if you're going to give a gift, it needs to be special.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1RjleJpjsYBLivvE_LUpEBWdu3MEQAkcy/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Do you like it?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1EtyHjQH76OwPmI22yY5gzRsPaF9IisyO/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Of course I do. I'm happy. Really.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1ZZPnN_wRF4xcNmbntXiMRjkgWYBnMcMW/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I wanna eat this big meat now! Thanks, Eta!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1mVQLP7E402yDfnorKsL4_zZ-KH69en4v/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Good.",
                "line": 38,
                "url": "https://drive.google.com/file/d/15ZLsTfitvTAChCUZKJOuCtcVzmv7EYsY/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Um...hey.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1JZszyHS0F5VSyoWR-umsDuwRQnl5Nm-s/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Hm?",
                "line": 40,
                "url": "https://drive.google.com/file/d/1jFHeu4zvISvSspDcKYH59AmfWC38xPtL/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I'm...sorry. For giving you the slip before you even have the chance to talk lately...",
                "line": 41,
                "url": "https://drive.google.com/file/d/1Km5F9_xwiQIfKlzTqiH866qdCeTBakSA/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...Me, too. Sorry for always running away.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1J0rj6Ohn-_ywsQAx6VGncFToWUPQoTDs/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...I wasn't expecting apologies.",
                "line": 43,
                "url": "https://drive.google.com/file/d/16fzePD2WNVXAtLfHyKr1_TEyNxJiyKYA/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well, I just felt it wasn't very good of me to act that way.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1SYe5Jyma_9MfG4K7NGSwGmES6nhYvm6G/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "But you do need to ease up on the experimenting. We should hang out together sometimes instead of you staying cooped up in your lab.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1C7mqSJsfjiMfnka7K9NTSMtHxpWuE0B1/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Together...?",
                "line": 46,
                "url": "https://drive.google.com/file/d/10oOTtBJQvWWkGdbDriyFH6k7BUTa-G6G/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yeah. It'll make for a good change of pace.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1tAOHbm8t4LAzo_wwDoIpSthmpT15CUS3/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Me too! I wanna hang out too!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1bEFrqZ_2iL_LKlJAu3UaezN0tkuu-3NN/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What an excellent idea. If we leave you to your own devices, we'd hardly ever see your face.",
                "line": 49,
                "url": "https://drive.google.com/file/d/17YMoAUX0r4QjdGzD-HndzhVEd0Ox9nwr/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "But I don't know...what we'd do.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1iQTORkD2vFtQGC-5WXxsV2-mvnljkuvF/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Then for starters...let's eat this platinum salmon together.",
                "line": 51,
                "url": "https://drive.google.com/file/d/16VkzHB1f6nixVW1iX6RUcEetaOwBs8Zc/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Are you sure...?",
                "line": 52,
                "url": "https://drive.google.com/file/d/1m-5dLEzoBE1XMbnjzl0wiRe_43tG7M13/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "It's not like we don't have plenty of it. Besides, foods like this taste better when shared with others than they do alone.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1VhYhY2kx7JBjsHxt1SCHW3dB2hOf4JCF/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I wanna eat with everyone, too! It'll be more yummy that way!",
                "line": 54,
                "url": "https://drive.google.com/file/d/1GrlTM13-NTZhMIdyGijmpkr-HdEZlUah/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Thank you.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1rWTqY_u20QSWmPz7KP4LPZ9gjNCR6YuG/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Sure. I'll hit you up with an invite soon.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1WjX9VfXk6EcAAMRfbDV7C5GmW_5iDdFP/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "It's gonna be tons of fun!",
                "line": 57,
                "url": "https://drive.google.com/file/d/1zerUy81Eq4aJ87jAexYQuotD7nwcW_XY/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Heehee, that went well, huh?",
                "line": 58,
                "url": "https://drive.google.com/file/d/1-MHwFTIoX-DbeVtaPMlZYajyoHX_4m0S/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...I'll make sure the next time does, too.",
                "line": 59,
                "url": "https://drive.google.com/file/d/11tjuAfaG3n1-YgWuKBG03TDMukz5xCFM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Seems that my little plan to bridge the gap between Eta and the others with presents was the right call.)",
                "line": 60,
                "url": "https://drive.google.com/file/d/15YlHJxqGul2zolgsv6oTQpvomBkqXOTP/view?usp=drivesdk"
            }
        ],
        "e4": [
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Next is a present for Lady Alpha. I'm not sure what to get, though...",
                "line": 1,
                "url": "https://drive.google.com/file/d/1LLWEXTwaNFsyMEzDIbwbqphuHQrHKOab/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yeah... She said that she's \"fine with anything as long as it comes from the heart.\"",
                "line": 2,
                "url": "https://drive.google.com/file/d/1CSdXKIA-TkF9E9oJld3unnSmDSawUpP4/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "All the more reason we can't just give her some random gift.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1RVodyoCNEvyhhaIPEvpnFcaB6uKFIKgX/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(And...Eta being Eta, there's no guarantee she won't use the gift as a pretext for some weird experiment.)",
                "line": 4,
                "url": "https://drive.google.com/file/d/1gBXXfhF9HFZOhd3mJR03T5LaGklKMqHF/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(I gotta be ready to stop her if she does!)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1F9nVJdMUqFt83x56NS0Kq3no8mvOuc82/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Something that would make Lady Alpha happy... Something she would like... Hmm... I don't know...",
                "line": 6,
                "url": "https://drive.google.com/file/d/1mc-bsxbCRXVqOq7I-vy3_sspDpVMQfVD/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Huh.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1zGnW5OUUGy5_hBKuEaNc3JcaKgfZbcWL/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Honestly, I didn't think you'd give it so much serious thought.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1xcT9TbQ4S-r2TlhJQT9E_ZJmaup2uFvu/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...I didn't either.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1gimW7ojlpGAjUOfnQjkDxqt-PSfJMyqR/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "But seeing Zeta and Delta so happy...wasn't bad.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1brIDx39JsnDvpfzpsVcwDx4W-sm01B2y/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "So, I want to make Lady Alpha happy, too... Is that strange?",
                "line": 11,
                "url": "https://drive.google.com/file/d/1WQMYQxy9wq_blRhA-ZosCpcPjI9Eed1C/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "No, not at all. In fact, it's a really good mindset.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1LMAeWce5aQP_cuB7zpjOVe3oQNSwLCty/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "That's...good, I guess.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1UuEXmnsF6eiKIPyLwMShrPfGMEEX9gZG/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "What do you think, Epsilon? What can I give Lady Alpha to make her happy...?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1BFr3YebWkotPy-v6E8Ed3GMiM6TRgfXu/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well, let's see...",
                "line": 15,
                "url": "https://drive.google.com/file/d/1vFP-3pWmueO5_tpYU-5HjH3h28x-uoAM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "How about we look at this from another angle? As in, give Lady Alpha something to help her loosen up...that eases her fatigue.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1SKcta8IBc7zzwOblLMPhv4PjjtyVWRyW/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Her duties as leader of the Seven Shadows mean she's always busy, right? So, we want to give her a bit of respite.",
                "line": 17,
                "url": "https://drive.google.com/file/d/14qG99--_SIJl4MahCygaqNBUvekAiHnU/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Loosen up... Ease fatigue... So...relaxation items?",
                "line": 18,
                "url": "https://drive.google.com/file/d/1l_Ou-_ANevu4Qn4CGP779Du46mQlUrtX/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, exactly. Like what about some bodycare products that she can use during bath time?",
                "line": 19,
                "url": "https://drive.google.com/file/d/1vB-KJkZLPiao0no0oLzv2tsZyQ_iQ2rq/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Maybe... Bath salts with stress-relieving effects?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1jQp3nkYHLSnFbjhD65_An2mJOQEpREO7/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Nice idea. I think she'd definitely like that!",
                "line": 21,
                "url": "https://drive.google.com/file/d/145f1QgZkZfAPYRJcGjbyM5hLAxq0FSna/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Then...I'll make some immediately. And you're going to help.",
                "line": 22,
                "url": "https://drive.google.com/file/d/1ErFz_EM-PVjblP_hR-jUZEpQdxJyHWNB/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Okay, Eta. I finished mincing these herbs. Can't say much for the smell, though... Are you really going to use these?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1K1ojk2v2O7T0o2bpTU5JB19WiMGy2GEK/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "The odor is not ideal...but they ease fatigue. We'll fix the fragrance later...so it's not an issue. Now it's time to add the rock salt...for a detox effect.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1bpTaFMWPwDtGZVXzdWGzhyUYvcH-MyAd/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(...She isn't playing around here. I bet she's going to cook up something good\u2014)",
                "line": 25,
                "url": "https://drive.google.com/file/d/1ISbSDwKj7tk2DeSXiuIZzOA-B-KbB0xd/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "And while we're at it...let's try some lemon...",
                "line": 26,
                "url": "https://drive.google.com/file/d/19TAsvx9hv0lAHFhWMcqUFUmR5CXrIRon/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Wait. Did she just add lemon for no real reason?)",
                "line": 27,
                "url": "https://drive.google.com/file/d/1qURmIfUVc4EB_dQbaFeTvR0rH1jsWzxb/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Heheheh... I want her to try this as soon as it's finished...! I'm so excited...!",
                "line": 28,
                "url": "https://drive.google.com/file/d/1b_elqVOLUvGEP3HFLnCesake2sRhxojd/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Well? I rubbed different medicines on your left and right arms. Can you feel the effects?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1pMWrp5x1Gu_lTXfbSS4WDgBNg1_zlMb0/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, I can. The skin where you put it on my right arm is visibly improved...while my left arm feels warm and refreshed.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1SI19LT1TlUhZ_eXg-62N9D6vQhF6maJD/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "The right arm...is a solution that makes skin smoother. The left...supplements magic energy and recovers fatigue.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1_990asgJ5iCnGGN1nvzrW3YQT47gBic5/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "The experiment...was a big success... Yay me.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1eI-uktJBeiWd9OaqNfi09NLK-j4TDom1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Yeah. They definitely work. The only thing is\u2014",
                "line": 33,
                "url": "https://drive.google.com/file/d/1kIP6ppYZbMf1BoV7fZeHbmh3o5goWQnv/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "My right arm is going numb...and my left arm is glowing!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1PT16LHu9368VEXf1vvuANblXkvqQGEuo/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "So, it's a failure...?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1UmokDzbgbAl47iUk9vU4GAVqMN2FzT5f/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Explain to me exactly why it wouldn't be a failure!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1XjwREpn_RP9chfNY9vMHujdTUDG__Xjc/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...They make your skin smoother and relieve fatigue, but have some...no, a fair amount of side effects... It's just a byproduct of prioritizing efficiency.",
                "line": 37,
                "url": "https://drive.google.com/file/d/16aTko4qkdLWRXxfs-nFoPokxmx_yLWug/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well, there's no denying that your concoctions work. The skin on my right arm is smooth as silk, and my left arm feels light as a feather.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1HngaPw-ABrObnBp9wWBG7XABgGTl-7zz/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "So...a huge success after all.",
                "line": 39,
                "url": "https://drive.google.com/file/d/19k3aJW8BQPjylLf2r0y5kaXHHVWq4rhx/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I just have to wonder if Lady Alpha will actually like these. I mean, once she takes a bath, she's either going to lose all feeling in her body, or be shining bright as a torch!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1iRc6ggfAX9WFfYo2BnQaGHAtMbDG-bzu/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Is that a problem?",
                "line": 41,
                "url": "https://drive.google.com/file/d/16Xa8rdgGkTSI0eeos_FSpx8QrmcUtz_1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, it is. Any way you look at it.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1slIZlBxmckmYSz1YUPStYP0u5xFMnMfp/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Hmm...",
                "line": 43,
                "url": "https://drive.google.com/file/d/1Jz-JY-rKVNM_93Y_D2_LNC4-pI6cH8Rz/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Then what if I made bath salts with moderate fatigue relief and skin softening properties...but no side effects...?",
                "line": 44,
                "url": "https://drive.google.com/file/d/1dttU86fFoLI5DVOsRj_P6MXIpCXq3uAi/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That'd be good. At least in my opinion.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1tA4Q_xc9hy680EDA7TrYADGHVrstZeZg/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Heehee... And so, you made two kinds of bath salts. How very like you, Eta.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1JRgzts1qHHiYvKqZqVYWjsGvOzU7uLFl/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Only because Epsilon said no side effects.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1XTrlMl5vR_x8paYYim8O5vdmmnJNpKj3/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "But...the first version I made was more effective. So there may be times when you want to use it instead...",
                "line": 48,
                "url": "https://drive.google.com/file/d/1ziaKij1bgR6Cy0vx_6wJuxf7FZhJiraQ/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I see. But\u2014",
                "line": 49,
                "url": "https://drive.google.com/file/d/1-iblZ-DhA1XfY3Iou6MOlQpjsfUtALzd/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I would be even happier if next time, you created a bath salt that made my skin very soft and got rid of fatigue...and was also completely free of side effects.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1El2L_nMgusbD6_O3Zw4jeENFmByCkjCR/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Understood. I'll make something better next time.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1pPx4NeMk5J_RPjnNQ_mPRYgd1tHwMAVz/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'm sure you will. And thank you, too, Epsilon.",
                "line": 52,
                "url": "https://drive.google.com/file/d/19xonT4dAHx37U2U_EL-Eznop4-L_DYTJ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh, all I did was help. But I'm glad you like it all the same. Isn't that right, Eta?",
                "line": 53,
                "url": "https://drive.google.com/file/d/1STSgcCud4PDUIVAJd2zcOpJfqN0hWLjn/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Yeah. It...feels nice.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1UIxvR0Opp6-enTznYqrESH661qhX-4Ej/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "So, we've given presents to Zeta, Delta, and now Lady Alpha...so I suppose Beta is next.",
                "line": 55,
                "url": "https://drive.google.com/file/d/18ntmtiO7wxE_7W2zi0UpjZ-fceX0BDVH/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I know what Beta wants... A photograph of Master Shadow. So...let's go take one.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1SKB-y4Ty9jcpF-Nt7YPmV0od9zWywAJy/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Right, I know. I know, but...",
                "line": 57,
                "url": "https://drive.google.com/file/d/1sMZJ_eavOISnH0g9B2I75kNrpeEaOWOh/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Why does it have to be a photo of Master Shadow? I can't even think of what he'd say...)",
                "line": 58,
                "url": "https://drive.google.com/file/d/1VaEdxiwXcl92X2LGcuv8L1E-tFaoi_pI/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(And it's all the worse that we'll be doing it for that miserable airhead...!)",
                "line": 59,
                "url": "https://drive.google.com/file/d/1psHP0QARr9DkeQR1GBxS6YapPpWCN-zl/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...You don't want to? Then I'll do it by myself\u2014",
                "line": 60,
                "url": "https://drive.google.com/file/d/10d5Yxdo1V9ZGMcWjR4E9n44GlA72P_Mu/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "W-Wait!",
                "line": 61,
                "url": "https://drive.google.com/file/d/1sSUYOy1J6gZjiqnDhkkUunXgFXc1dRhI/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I-I'll go, I'll go. This is all part of helping you, after all.",
                "line": 62,
                "url": "https://drive.google.com/file/d/1iN9H1BM7IzborMdEww-e4nJS55QSciSg/view?usp=drivesdk"
            }
        ],
        "e5": [
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...And that's why we're doing this holiday gift plan...",
                "line": 1,
                "url": "https://drive.google.com/file/d/15CbYVfYQJPZk9p1Y65mtPg--kb8UmoI3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Gotcha. That explains your outfits. Sounds like a pretty good plan to me.",
                "line": 2,
                "url": "https://drive.google.com/file/d/10FITLFHtXP6f9tQmzyFeije4wlRdCTr5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(People tend to look at doing things for appearance as \"jumping on the bandwagon,\" but what really counts is getting out there on the starting line at all. I applaud your spirit, girls!)",
                "line": 3,
                "url": "https://drive.google.com/file/d/1CiXzuUT7Sydfrtn_ODh_bVA6v-XAxPvt/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Your praise is most unexpected, my lord! I am overcome with emotion!",
                "line": 4,
                "url": "https://drive.google.com/file/d/18VaM6_FaMgo9NJQwM6t6PT15sB627Py1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(There goes Epsilon and her dramatics. But I know she's just leaning into her role.)",
                "line": 5,
                "url": "https://drive.google.com/file/d/1ClOc5TUm1KHNkNrLV9CYIDNgIC2w3DJJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So, what brings you here to me?",
                "line": 6,
                "url": "https://drive.google.com/file/d/1HLHq0c40NyOgjGfkRtHFh6GsJSSGFmGn/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Truth be told, we were hoping to take a few photographs of you, my lord.",
                "line": 7,
                "url": "https://drive.google.com/file/d/19y5AgWeTym5bXkNPF3Vww37MtOUA4Yyk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh? Pictures of me? Why?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1LQlb4tiu2ma2OVn_c2H_mv8bonifJpt0/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Well...Beta says she just has to have one...",
                "line": 9,
                "url": "https://drive.google.com/file/d/1u5V1TIDqT6tqnpQDdZgkXuXIbpMEpfoB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Are you're sure you heard her right? There's gotta be a better present than that. Nobody'd want a photo of me.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1BliOe9Ufowcr9nbtLrlUPWPLm8Y3L3NP/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I-I would! I'd be delighted to have one! I'd keep it shut away so no one else could see it, and treasure it for the rest of my life! Don't you agree, Eta?",
                "line": 11,
                "url": "https://drive.google.com/file/d/1F3jyt4MbrW_HiPK2DIpPle0pYtCV8XHk/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Maybe...if it was a picture of his insides.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1TANDC_72ZSozExYex6kAhLGYOWNpAOG5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Line an anatomy photo?! Freaky!)",
                "line": 13,
                "url": "https://drive.google.com/file/d/1MTeUHvUOB9WC_74NmuvsYvF-IZxG7Jy3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Anyway, a photo of me isn't worth anything. And I find having my picture taken kinda embarrassing.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1m6lTslctCKTqO_1ybaVhyStvm3JkUbfS/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Then what if you think of it as a present to me? Please let me take your picture!",
                "line": 15,
                "url": "https://drive.google.com/file/d/1fAvrcJ6zZHrRXkEQbRmBmgqFC2kjM9rx/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hmm, well, since you put it that way... I'll let you have your photos...if you can take them.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1qhVL1iAF1lJBB_Art3-sQj3c19QEo9ku/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Really?!",
                "line": 17,
                "url": "https://drive.google.com/file/d/15KiH4KPzmXvku3O_hAcGV5OmkHnYKQAU/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Really. Now, let's get started.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1mS2SHPtzbhovpFpbR92ufR6tOeNgJ0B8/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Ack, please wait...! Um, let me get the Rolapoid\u2014",
                "line": 19,
                "url": "https://drive.google.com/file/d/1vJq64bHdFddHqvywvWrAYBZbe1eCakAR/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Use this... A new and improved Rolapoid. It has ultra high image quality and corrects camera shake...",
                "line": 20,
                "url": "https://drive.google.com/file/d/1W1SLByIzPsxB2PilGnJnzM5SrfltIZN0/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Amazing, Eta! You really are prepared for everything!",
                "line": 21,
                "url": "https://drive.google.com/file/d/1LghthPe9mUckwQXns6iIKV0Ed3XKTbr-/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Now, here goes... Okay, say \"cheese\"!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1LRirgdZ7T2oTT-Ba2KrgbgBVxOfOwnD0/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Huh? He's gone! But I'm sure I took the photo right\u2014",
                "line": 23,
                "url": "https://drive.google.com/file/d/1ONnSHOVPrKLIwk-9V2g3fI3RI-zlHeoy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Aren't you going to take a photo of me?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1J6Y6JSR_NRjLjLqbNWUZKiBsQ2VgKt2I/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "My lord?! When did you get behind me...",
                "line": 25,
                "url": "https://drive.google.com/file/d/1ErQFPvQqLqoc2YPIVY3wOD2QqBVRPm6P/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I-I'll try again! Okay...say \"cheese\"!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1gsGjAV1IQCmrQY_O3Oi22MMheigk40Q2/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...He disappeared again.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1_ZebN3rYfPf4pHgRoo7FwSXFjwHLwdyt/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hey, over here.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1R3QCKln2vsUl5fpiE6Z8eeLDcy8JNBlt/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Now he's all the way over there...!",
                "line": 29,
                "url": "https://drive.google.com/file/d/1oxW2xDHqaq_86YTRH1-SHlDKlnTdXaDU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Aha, I think I understand what Master Shadow actually meant now...",
                "line": 30,
                "url": "https://drive.google.com/file/d/1rNMFI56KiLYn9vPnRbwR0RilkD7QfngA/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...What he actually meant?",
                "line": 31,
                "url": "https://drive.google.com/file/d/12ftg6YGQM54jxLU0HV6u7-EsADh9Pg7b/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Master Shadow said the photos are ours IF we can take them.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1vSmYimi0pwCb69fhA-8rYeKay5aUANRo/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "In other words, our lord doesn't intend to let himself be photographed so easily. We were too naive.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1BDy3w9HxsdAeW1si95IiVr-i8YHJ-z50/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "It'll be good training. Think of it like killing two birds with one stone.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1PptslTHOHL86N5TN6GE9JdshELBo9jHp/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "But isn't this too difficult...?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1PTdG468Mz8AW0QzoutzRv5YkQcmnejzW/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hey, sometimes you gotta try new things. So, what'll it be? You giving up?",
                "line": 36,
                "url": "https://drive.google.com/file/d/1dlhqHxTTI7tY4EPOD-Yg2FD7Aysofl2U/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "No! We will never give up!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1EK4bnrtz2ekvUCHHxDOhLTBnXqa0iOn3/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...But may we have a little time to strategize?",
                "line": 38,
                "url": "https://drive.google.com/file/d/10mdfUO9MgTgAKWyKkg7FQ1KLbcbUpFT4/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Sure, be my guest.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1qp0nY3Ah_OWv33L0hUq21JxmAFC1FjL9/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "We need to work together here, Eta. I'll act like I'm readying the camera to take a shot while you figure out where Master Shadow is going to reappear after he vanishes.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1Zp8Iy33g1LVafYmUzz5nCse50xq6jZA0/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...And then you'll snap the photo when he reappears?",
                "line": 41,
                "url": "https://drive.google.com/file/d/1P1BhLzFXAaH_KtoDHkv2MaW5kuwV11rj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes. And then...*whisper, whisper*",
                "line": 42,
                "url": "https://drive.google.com/file/d/1jzak4MyNOzvYQSH5osG57_zT33uYZLGS/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Ahh, I see. Understood...!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1qHb0ArGPO4vQg5max66p4rH7GQ-WttHV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Finished with your little meeting yet? Let's get back to the game.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1j5ObNF4GIigS5andKPaaUn2KAE3F8QSs/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Okay, here goes! Say \"cheese\"!",
                "line": 45,
                "url": "https://drive.google.com/file/d/1JJB4X0PCOKxmsQpkSnuBysD6EoHPubqn/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Epsilon. Six o'clock.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1wcTTrVoxpVQev1Y2p7E6_TONvUD8XvHK/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Here!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1_d3hlpY_tdR_gDqMkIbuVN0NB5TUN8Bd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Whoa, good looking out. But\u2014",
                "line": 48,
                "url": "https://drive.google.com/file/d/1F-SGxSw3Gh-CVLl5glZhR9Bi60nX_ppM/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Grr... He's so fast! Keep on him, Eta! Where's he going next?!",
                "line": 49,
                "url": "https://drive.google.com/file/d/1YxVYLG-AQO9dTGM2_-EpMs6ny-ITe_2k/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Now he's headed to eleven o'clock.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1frkwASQCuHjhsUInAxBVBKl0Adirq6Nk/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "There!",
                "line": 51,
                "url": "https://drive.google.com/file/d/12GOQejVFeYMcNTXqsT0KTXSBUHCrOuJe/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Too bad. That was just an afterimage.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1567kU2AR-RR2hsU1sCJQM32TRmu3V-xZ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "This isn't working. I can't even catch his shadow! But...I'm not through yet!",
                "line": 53,
                "url": "https://drive.google.com/file/d/1HDYP0li6ykxKUoJCBsy8fNklP3szZhQ2/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "*pant, pant*... It's just no use... All those shots, and I haven't managed to get even a bit of him in frame...",
                "line": 54,
                "url": "https://drive.google.com/file/d/1_mW4InzTysJblBNBCFTJDZRUliX-C9Bb/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...We're almost out of film. This may be a lost cause...",
                "line": 55,
                "url": "https://drive.google.com/file/d/1zIKt1XX3soaPpA3FHTKT3T6P6XAJVg4N/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yeah, though I do feel bad for Beta... We were fools to think we could ever take a photo of Master Shadow.",
                "line": 56,
                "url": "https://drive.google.com/file/d/16VaqN0fs77c5WV-7Cc63UDDMzh6VSqj9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh, are you throwing in the towel?",
                "line": 57,
                "url": "https://drive.google.com/file/d/1D1yFC3scBXabxDw4jN67OZxyu9zBIxn-/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes... I apologize for the unreasonable request. Let's go, Eta.",
                "line": 58,
                "url": "https://drive.google.com/file/d/1pwUTNV-Gyrm1AXyHt_VqW9qEY1Pt8X3a/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Okay...",
                "line": 59,
                "url": "https://drive.google.com/file/d/1zwlyAMqeP7mfEVKeWQMF9iE8HmZhrw-5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...They actually left.",
                "line": 60,
                "url": "https://drive.google.com/file/d/11RP6MT-diarwv6YmU7_IsDWd-atyt229/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(They tried so hard, though... But if they say they're giving up, then so be it.)",
                "line": 61,
                "url": "https://drive.google.com/file/d/1tHNKs96T63M_eWu_PtljpHaE3KpflikB/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...NOW!!!",
                "line": 62,
                "url": "https://drive.google.com/file/d/1bK82FcswA14pa5cpz9ujghHoS5ROT8qv/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Say \"cheese\"...",
                "line": 63,
                "url": "https://drive.google.com/file/d/1y7lQjXc9tURIdsCu7Yb8j4aBoh_ZuseC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh?! Both of you...? But I saw you walk off that way...",
                "line": 64,
                "url": "https://drive.google.com/file/d/161SBR7o9xKRaBwX8qbM1_lm6xHfKemuO/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Heheheh... We fooled you, my lord! The magic presence you felt moving away was a fake created by me!",
                "line": 65,
                "url": "https://drive.google.com/file/d/17Ab7TdguHigYRv0M6mAjcm0f4muhNyMp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Oh...so that's how you did it. All that coming at me head-on was just to make me think you'd given up completely....",
                "line": 66,
                "url": "https://drive.google.com/file/d/1lQaurlh1rBWKJLxihv8ZYV3yZhRnzoP9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "But in truth, you were placing your bets on this final deception. I see, I see. Not bad.",
                "line": 67,
                "url": "https://drive.google.com/file/d/1Ts-fSCvOBbjHEmClkxYn6WOmea-RItmP/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "S-So,...will you allow us to keep the photo?",
                "line": 68,
                "url": "https://drive.google.com/file/d/15i_5j5KRmbF2k4W443f_KF0JmU3uPWyF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "A promise is a promise. Okay. The photo is yours.",
                "line": 69,
                "url": "https://drive.google.com/file/d/1QFVZV6zndPXABpNY1mOrCh3gqJNZfCPT/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Thank you very much! We did it, Eta!",
                "line": 70,
                "url": "https://drive.google.com/file/d/1LcPcqquw7gMUKxodtIAPca0dd4Ymvp9p/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Let's get this to Beta...",
                "line": 71,
                "url": "https://drive.google.com/file/d/14romHgEwjyqPmbGvZgP9VyJ73R0LzDMj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Yes, I'm sure she'll love it! If you'll excuse us, my lord!",
                "line": 72,
                "url": "https://drive.google.com/file/d/1pBue_LvOaZkY1ooflZFJliVBsnocMhl6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...Good grief. They were trying so hard that I'd feel bad not letting them snap at least one shot.)",
                "line": 73,
                "url": "https://drive.google.com/file/d/1xYiAvyoxKC0iBam2VHItghhzItQ55020/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I-Is this really a picture of Master Shadow...?!",
                "line": 74,
                "url": "https://drive.google.com/file/d/1fWxm5gIU6JK1begHdveNX-1x_i6MFhi4/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You should be grateful. We went to a lot of trouble to get that.",
                "line": 75,
                "url": "https://drive.google.com/file/d/1d-Z862Rl6vVn2HmT6dRa9E31spu34bdS/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh my... A photo taken just for me, a Master Shadow who's mine and mine alone... *sigh* It's wonderful...",
                "line": 76,
                "url": "https://drive.google.com/file/d/1C5wS-YFEJ7hSVANUmJA90l4MTMbsNSN4/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...J-Just so you know, I'm the one who took it! ME!",
                "line": 77,
                "url": "https://drive.google.com/file/d/1es1O0g3wC3xImmfRjg6FjYMDolrqt6lF/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Okay, and?",
                "line": 78,
                "url": "https://drive.google.com/file/d/1CoNlAHHMD_G9Wdo5JN8KsZtq8NuxfM21/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That means it was ME he was looking at when I took the photo! Those eyes were locked on ME!",
                "line": 79,
                "url": "https://drive.google.com/file/d/1DNVThKi1d99ltfD3x-VJiu5398XW1QVK/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Blah, blah, blah! I can't hear you!",
                "line": 80,
                "url": "https://drive.google.com/file/d/1U3VWk5uWx9G8ntRambcape6ntXoggRJH/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hey! Listen when I'm talking to you!",
                "line": 81,
                "url": "https://drive.google.com/file/d/18KEoAY4g0ChXLeEE8kS2cxnPC88UhdYq/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Heheh... I must make note of this glorious occasion in the Chronicles of Master Shadow right away...",
                "line": 82,
                "url": "https://drive.google.com/file/d/1RW4_Oi8kBaQqdQWwYRtfJ6PtJ7m7FdSV/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Don't you dare ignore me!",
                "line": 83,
                "url": "https://drive.google.com/file/d/1TS2lyhvzHSoMq257U1ea3ij9NEVAesdl/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "All this over a simple picture...",
                "line": 84,
                "url": "https://drive.google.com/file/d/1HzfNLndGkBVdvOjhVXRnE9DTI3MOSXTN/view?usp=drivesdk"
            }
        ],
        "e6": [
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Whew. We've given gifts to pretty much all the Numbers to thank them for their help.",
                "line": 1,
                "url": "https://drive.google.com/file/d/17EYxl_c7LEGvc2ssbSwMMlOt19-L5bZE/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I'm exhausted... This might be the first time I've talked to this many people in a day...",
                "line": 2,
                "url": "https://drive.google.com/file/d/1Z_nLnfkPbcbFyHpgAlVoRxTvFzpq7n1y/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But it doesn't feel bad, right? We made everyone so happy with just some sweets and little knickknacks.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1JUF6RlThic2t1Ku1KGUGyuQ3P6Cadl6V/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "You...may be right.",
                "line": 4,
                "url": "https://drive.google.com/file/d/10EtdNbZ5HOnlEe6_p1Cn_Yg46TQvc3Ex/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Nicely done, you two. Why not have a tea break?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1JuuT4I7ZfGMNghRF_G7r0RO-wNzcMWvb/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh, Beta. Did you brew some for us? How kind of you.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1IBbHKIoGSJ9ReE6Q9QMhwrJRVtHM4F-0/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I did, as thanks for the photo. And to celebrate Eta getting out of her lab for once.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1kJqVJuzUaqsRDRPHDRW8llW795Y_samh/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "What...?",
                "line": 8,
                "url": "https://drive.google.com/file/d/11VS7SLI5tnZf0hyoszCS3aiz7NNEo0sF/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Oh, you're here too, Beta? I had something to ask these two... It seems my timing was perfect.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1ZbJvTCmpOpkW1Tkf6H2FfwTk-iv8Xohl/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Now even Lady Alpha is here...",
                "line": 10,
                "url": "https://drive.google.com/file/d/1IC04kCBMG0dGAYpceIJj57KgzobUtlLE/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Do you mind if I join you? I brought some sweets by as a gift.",
                "line": 11,
                "url": "https://drive.google.com/file/d/140BaEF0X6hYlhbJE80-T2At746X0PTXn/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Th-These are cookies from that famous confectionary in the capital! Not even Mitsugoshi could get ahold of these beauties!",
                "line": 12,
                "url": "https://drive.google.com/file/d/12kojnrcWGdEZ5vv__O4WWDt3SQhfNG3u/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I've heard of them before, too. Art in cookie form, all baked by one elderly shop owner.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1Lwo9xb5Kxn4QmImYOu41h72RFNQD2QnN/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Why?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1ziQSTLIH9Z-_N5CVyoM543c9AKsOyWQ9/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Oh, just as a little thank-you. Besides...sweets are best enjoyed in the company of others.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1bGChNXTI2clshaGnSsxS-vkkGxMuI8-X/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Hmm... Everything...has been strange today.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1hl0QTce--9COk5uWMF089hSP51b7bgMV/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Everyone seemed to be busy lately...and would run off whenever I tried to talk to them...",
                "line": 17,
                "url": "https://drive.google.com/file/d/1aKsd7_zsb0dXDk5ckG-sNa05Ce0hx5e4/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "But today...everyone is coming to talk to me...",
                "line": 18,
                "url": "https://drive.google.com/file/d/1azZEA224MOOW25l9Zh8Qcq332g6JaG1Q/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Indeed. But...can you think of any reason why this might be?",
                "line": 19,
                "url": "https://drive.google.com/file/d/1RK5m0grrV7J4aAd_PcilI-4I_Ucn7kKQ/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...I used to not care about anything...so long as I could research whatever I wanted...",
                "line": 20,
                "url": "https://drive.google.com/file/d/1JPgAuEZoyXHdCJMWWuzdIn9AoqcRLHHA/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "But seeing everyone so happy...and thinking of me...is not a bad thing. It...feels kind of nice.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1-EGEVrnvtBvmALqiX0ll6Kc1946PqK_b/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Heehee... You've made a very good discovery, then.",
                "line": 22,
                "url": "https://drive.google.com/file/d/16nIrsrk8gmxHY-GbWqg72LotzR-_Zuxv/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I hope this marks the beginning of you getting closer to everyone, Eta.",
                "line": 23,
                "url": "https://drive.google.com/file/d/12xzSSxpj6GYO_4_1BJRlk9hXon0E2u_C/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...My, my. Everyone here together. Are you having a tea party?",
                "line": 24,
                "url": "https://drive.google.com/file/d/1Iv3p4kAkb4pFy_qi9jo3D0F3Al0ZTNbv/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Perfect timing, Gamma. Won't you join us? I have some excellent cookies.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1Z9gqbmxkC2q4HcXTVDZ9tOjkSmmjz8l_/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "What?! These...are from that stubborn mule of a shopkeeper who never says anything but \"No\"!",
                "line": 26,
                "url": "https://drive.google.com/file/d/1mKrKWxkz8MyLb7ARmWTX-s1KpSoO1vMk/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "L-Lady Alpha! Did you bring these to motivate me to negotiate harder?!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1dgdeL3nw1P4klFtz91cn3l4jmrVTd8v4/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Heehee, no. They're a reward for Eta.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1nj9AUVRp9OjoNfTDFF_GmxCRkZ-IkX3U/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...Which means?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1UFDqA64YixeBecif9TeUYBIZFCMxFKcm/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Eta asked everyone what they wanted and then got presents for them.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1Xibjxr3nq7Vc1yM9MCgbDWO9HOamL2-7/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Then Lady Alpha and Beta...invited us to have tea.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1BfWbQOE2o30I0fSEKrZQoBLXJyyrxsko/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Ah, so that's what happened.",
                "line": 32,
                "url": "https://drive.google.com/file/d/13KHR51Z_SXCTXQHMRNgQcsbegAwE49uv/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "By the way...I didn't have a chance to ask you yet, Gamma. Do you...want anything for the holidays?",
                "line": 33,
                "url": "https://drive.google.com/file/d/1DsiND3uu56cCt1QeZeodqsCI09lcldb0/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Well... I want the rights to sell these cookies!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1R9BV2Z9xvJJa1Tr6pqlyq0yb5KKOMkEU/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I-I think we just got the toughest request of the day...",
                "line": 35,
                "url": "https://drive.google.com/file/d/1j8RHM_lYVQmvDkn-5r-Xq8kUyq7MQ0mN/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Should I create a brainwashing serum?",
                "line": 36,
                "url": "https://drive.google.com/file/d/10Ms2iKyZZukSe6LfZIFYuabb5plIxke3/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I was merely joking. So...can I ask for something besides a physical object?",
                "line": 37,
                "url": "https://drive.google.com/file/d/1MjjK_hpSFIc9ymdMULeAXLvsbcT2l0XH/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I guess so...as long as it's something I can do...",
                "line": 38,
                "url": "https://drive.google.com/file/d/1-Gibz5ZAP4Ic7Lnxo3Fx-hhTP1LhDOpI/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Excellent! Then will you be my training partners?",
                "line": 39,
                "url": "https://drive.google.com/file/d/1AusvIT1gWCCN6P2W2C9FKv8HMMx0Rxiw/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I normally ask Chi and Omega...but for some reason I can't find them today.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1hTcsY53GUfMAULYcUxInrd-5dkRolUqB/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "O-Oh, I see...",
                "line": 41,
                "url": "https://drive.google.com/file/d/15toaNrLYQsu3F-DJGY1gplEo5xKC_B-D/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(So those two really were in a hurry...a hurry to get away from Gamma.)",
                "line": 42,
                "url": "https://drive.google.com/file/d/1MAkkeGu9QcoWxufzqfIn63aILxdsSV5G/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "All right. If we become your training partners, that should count as a gift for three people.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1UYLDU7AK6daF8gXq1W3rNin2vC3iLMHn/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Why three people...?",
                "line": 44,
                "url": "https://drive.google.com/file/d/1hcnM0pjdhfQXqztI5EAZ-h4X8sY05C9W/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I don't know either...",
                "line": 45,
                "url": "https://drive.google.com/file/d/1gtphSY96uGWlEDJMNc2EXrX8a0p14iMq/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "At any rate, I'll be eternally grateful if you accept!",
                "line": 46,
                "url": "https://drive.google.com/file/d/1_3VZz1wsDJ63MjMi7ZDfLyuAgU7BJNzf/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Heheheh... My mighty blade yearns for action! Training or no, it burns all the same!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1JNa-5MkfR_5AoDqZCb9qeqOJcM2idPkS/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "This will be annoying...but I have to do it. Since it's a holiday gift...",
                "line": 48,
                "url": "https://drive.google.com/file/d/1GpI8ngNxs_kklqKmk144hPYiCQ3HzOBX/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Right, then let's head outside. We'll train with you until you've had your fill!",
                "line": 49,
                "url": "https://drive.google.com/file/d/12jbusd2-O-Rt3ge1fb0mp56Zavkve38h/view?usp=drivesdk"
            }
        ],
        "e7": [
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...Okay. That seems like enough for today!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1JCzextsnBL88c0pRFSR8O6i0Sg553lzb/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Whew... So? Are you satisfied.",
                "line": 2,
                "url": "https://drive.google.com/file/d/1_wMS7gOnTAY6tTG7gUvoG-A48oNDhHeU/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Yes, that was a productive training session thanks to the two of you. Thank you for the wonderful gift.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1lBNOKX6wciTq8-ikofKIeFUfPZmVww3l/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Glad to hear it...",
                "line": 4,
                "url": "https://drive.google.com/file/d/1TsJV4Fq0tueyq4Lawf6rb77lf_fd05ns/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "This isn't me returning the favor...but I'll speak with Lady Alpha about increasing your research budget.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1Zp5JMJ-mSrzX1iryC6JGJEU8MbX1xU_K/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "What...?! But you're always such a miser about it...! Are you sure...?",
                "line": 6,
                "url": "https://drive.google.com/file/d/1cwBeYnqf4vt4v-LhzW_No7ZBIw3EEuR6/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I had a feeling you would say that...",
                "line": 7,
                "url": "https://drive.google.com/file/d/1LdD6IwVe_GhIvy1ScnkUFKq_2CBwD17S/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "But, no matter. I'd like you to keep in mind that our funds are finite, however.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1APivDTL84Z82nZCz14zH1cQKkEGXGb19/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "And as for you, Epsilon... Hmm. If I come across any good tea leaves, they're yours.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1KickZ0mY_lC-TVOhNjpTFJoJ7xXZJAQO/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That would be amazing! Thank you, Gamma!",
                "line": 10,
                "url": "https://drive.google.com/file/d/13YjuMDlGJMesT4WQUDJqhTVHrr3ZrYz1/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "I'm the one who should be thanking you. Now, I need to redo the budget sheets. But first I should glance over the relevant data...",
                "line": 11,
                "url": "https://drive.google.com/file/d/11OYA3S_tzYyI4bcTxBiLrkmb1TzRkdrD/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "You do know that walking while thinking too much is what makes you trip, right? Not like she heard me, though.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1ldEiwPjNWItTRBQAAT_-o9or1GUTi1iI/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Guess the president of Mitsugoshi always has a million things to do.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1cbkdMFxK2jIJMZyU_IFakSHccWY6BKAd/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Strange.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1J4Mqir19C23RiX_J2D2eGPXd6hNv84Bx/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "We spent all day...doing things for others. And yet, the outcome was good for me as well...",
                "line": 15,
                "url": "https://drive.google.com/file/d/1gs1UqvUZYiHGF4DZkr5w6E58Ew98WN2g/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That's because we're friends who look out for each other.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1E-uimxHYi57m_UJpbXQHdnzoZDZdRog1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "When someone's nice to you, it makes you want to return the favor, right? Everybody was happy about what you did for them. That's what being friends is all about.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1t3_BHmnBPWZYkHgVwyw2C6HnxjgAuiy0/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Friends...",
                "line": 18,
                "url": "https://drive.google.com/file/d/1vJChSVGe2Q4gBTQ1OzHzRZJZ05Ktv-IQ/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...Thank you for today, Epsilon.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1OkAjowX4eE0-KkBJsUdK17os4KFCb7LN/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Why say that now?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1ne4GF0GZgqY4q4kJenYHCdNKnOG85Sz2/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Today was...a new experience for me. Giving presents to others...and receiving things...happy feelings...in return...",
                "line": 21,
                "url": "https://drive.google.com/file/d/1l1S9BuKPbsY0h0CfUBzjlt6KFvW42Swy/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I would never have thought of either...on my own. This was a very valuable experience...and it was all your idea.",
                "line": 22,
                "url": "https://drive.google.com/file/d/17VrNCF3qrlByTvykp4518h8MQ8NlETGk/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Heehee, you're welcome. Hearing that makes it all worth it. \"Operation Gift-Giver\" was a success!",
                "line": 23,
                "url": "https://drive.google.com/file/d/1ML4cBIgfrwn-Jbcv4sZLsrOtVzJpqMS7/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I have...one last gift to give...",
                "line": 24,
                "url": "https://drive.google.com/file/d/1bBisTAEBvbsXRt_j4bllR6RZrynWjJvq/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What?! Wait, don't tell me we forgot someone...?",
                "line": 25,
                "url": "https://drive.google.com/file/d/1XR9mSQ1rARwXDJJ7gchWvKK67TwGj5_f/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "We did, and she's right here...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1HKZ72Vl7dAZziYrkVvrmcF9w2fdGaNeZ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "What...?",
                "line": 27,
                "url": "https://drive.google.com/file/d/1pkZp9A7n-VugfyyAKQOwC0ZDKw6I41kP/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "The last person...is you, Epsilon.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1E2b-4cSk59wh--kdFmPTymqCK1KaWMcI/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Here... This is your gift. Take it...",
                "line": 29,
                "url": "https://drive.google.com/file/d/1TuO4LkZJ6tWK9eywpGmaI5VHrlx3znHe/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Really? Thanks... I never expected a surprise like this here at the very end.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1xRELRIhLzpLEc_4fHO-t9eJuDJK2rosr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But wait... Is this the pheromone perfume I used when I was hunting?",
                "line": 31,
                "url": "https://drive.google.com/file/d/13WZXSbaCTimXhxjCc7-bwB7jjqCk4klB/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Yeah.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1zHxqApMVUQFbXGQar7T4n1pQUzYXDSi6/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But doesn't it attract monsters...?",
                "line": 33,
                "url": "https://drive.google.com/file/d/1ijNq6kul6D1EszVIHUhl18KcYV4W1eJT/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Don't worry. I've tweaked the recipe so it works on people... Now all eyes will be on you...",
                "line": 34,
                "url": "https://drive.google.com/file/d/1bDlhx9X3oTtyCHKwk0JmH5MkiMvOFoqp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Really?! Master Shadow will be fixated on me?!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1G9byO5jPD-OzX712fjVIaXu28vGfx8vN/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Heehee, thank you, Eta! I'll put this to good use. With this, I can... Heehee, heeheehee... Eeheehee!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1eb_5MCJ-EceXc0FnU1fMJT0eUC1jJr6I/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Glad you like it...",
                "line": 37,
                "url": "https://drive.google.com/file/d/1Nf9HEzfLgic7ItdwDtHRYzIPpsCpcETQ/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Make a report on how it feels to use and its efficacy afterwards. I look forward to reading it...",
                "line": 38,
                "url": "https://drive.google.com/file/d/1ldvql0nzxTp9Ap-OAoZbkrFVlCNY3zwG/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Uh...okay. Guess that part of you will never change.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1uLrNH1YztHBEpyba4B6efVKV6fcxh1dY/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "But whatever. I think I'll try it right away. Now, let's see here\u2014",
                "line": 40,
                "url": "https://drive.google.com/file/d/1tWzUii35s7xDo1QDq7Bjt6_UmiEZ1Ojq/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh... This smells pretty nice. Like actually usable\u2014",
                "line": 41,
                "url": "https://drive.google.com/file/d/1ghrQQswa-bUyxOXX-RpHwDaeJFwEsSgH/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Hm?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1sEpsLXHOpcxCULjhXIGSDlPS1cB0xzU7/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "...",
                "line": 43,
                "url": "https://drive.google.com/file/d/1Mx6UAv8ufJccfcGTn0zPRr5eP4oy8hWr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...What's with the hug?",
                "line": 44,
                "url": "https://drive.google.com/file/d/10R-Ph3-XVu_XfAO7Ezmab4KJILfPUHEc/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "I can't say... But I...don't want to let go.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1eOriIdJUnljssbMhQuVNaOxSCaNOxMXo/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Wh-What gives\u2014",
                "line": 46,
                "url": "https://drive.google.com/file/d/1eN-7nnranw26Wi5fuzG8OqiHZNeWVKMT/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "There! I knew someone smelled good!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1PSuXU2lhGuNdC7Af4vy4-7AK1gwNPj_1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Wait, Delta? What's gotten into you, now?!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1DmspJFriHDTbip256pCDMbuxZJ7rQX8p/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "*sniff, sniff* Huh? Epsilon?",
                "line": 49,
                "url": "https://drive.google.com/file/d/1vZ0jKprXnop-l7ouGsFGXTyznDXtYxS4/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "You look cute all of the sudden! Can I hug you? Give you a big squeeze?",
                "line": 50,
                "url": "https://drive.google.com/file/d/1t3CLs7Y-oS7QE9XWUnlCdlQsGy6lhFLn/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Y-You already are...! Urgh... Can't breathe...!",
                "line": 51,
                "url": "https://drive.google.com/file/d/12UDJez9Ds2rKU5OV1T3LowdRUp_-O6nn/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Make room, you stupid mutt. I want some Epsilon, too.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1tXICrFfo9lIYZ8o2G0U1U7cKqshXRtmG/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I-I don't understand... My head is spinning... But Epsilon seems so...dreamy...",
                "line": 53,
                "url": "https://drive.google.com/file/d/1ajJKcCTQ6GNXkvLWZ6UNPJNHx4bel-Fp/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh, no way! Zeta and Beta, too...?!",
                "line": 54,
                "url": "https://drive.google.com/file/d/1kTsalyFsDsTFpZtKfUl_-BqESK7tYeOj/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(What the heck?! Is it because of the pheromone perfume...?)",
                "line": 55,
                "url": "https://drive.google.com/file/d/1HYJLzPSGCgX_tvXqsPVJCYGI06HoIWMr/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(Eta said she changed it so it works on people...but maybe it works on everyone, not just the opposite sex!)",
                "line": 56,
                "url": "https://drive.google.com/file/d/15C3-ma3K5rtpVXwYhHsZtEoasjBcjmXV/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Just calm down, everyone! Let's just take a breath and step back, okay? Okay?!",
                "line": 57,
                "url": "https://drive.google.com/file/d/1bFRnE4veCBgMg9J5P4ut1y5SnfIqHs-d/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "No... I'm never going to let you go...!",
                "line": 58,
                "url": "https://drive.google.com/file/d/1PjAn3YBWNPdCcBmStTU3_lPkPJ3wmzIt/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Oh, come on! You invented this stuff, Eta! Do something!",
                "line": 59,
                "url": "https://drive.google.com/file/d/1gogwQV3-sl-aqRxa8uGSMa02EXKXsdYZ/view?usp=drivesdk"
            }
        ]
    }
}

let info = {
    "ln": {
        "volume_count": 6,
        "line_count": 24986,
        "word_count": 344034,
        "char_count": 1923912,
        "characters": {
            "Cid Kagenou (Minoru Kageno)": 52,
            "Cid Kagenou": 4510,
            "Cid Kagenou (Shadow)": 812,
            "Bandit": 58,
            "Bandit Boss": 15,
            "Alpha": 353,
            "Mr. Kagenou": 3,
            "Mrs. Kagenou": 2,
            "Beta": 510,
            "Narrator": 8818,
            "Grease": 55,
            "Soldier": 39,
            "Claire Kagenou": 639,
            "Garden Member": 1,
            "Alexia Midgar": 807,
            "Skel Etal": 151,
            "Po Tato": 102,
            "Student": 51,
            "Zenon Griffey": 71,
            "Knight": 113,
            "Iris Midgar": 193,
            "Scientist": 36,
            "Cult Member": 35,
            "Mitsugoshi Staff": 4,
            "Gamma (Luna)": 28,
            "Sherry Barnett": 143,
            "Lutheran Barnett": 86,
            "Glen": 13,
            "Nu": 75,
            "Gamma": 139,
            "Referee": 11,
            "Rose Oriana": 303,
            "Teacher": 9,
            "Marco Granger": 7,
            "Rex": 42,
            "Lutheran Barnett (Sir Gaunt)": 10,
            "Medic": 3,
            "Beta (Natsume Kafka)": 78,
            "Epsilon": 112,
            "Announcer": 2,
            "Jack Nelson": 98,
            "Aurora": 209,
            "Delta": 149,
            "Rude": 9,
            "Cid Kagenou (Mundane Mann)": 134,
            "Annerose Nichtsehen": 74,
            "Quinton": 70,
            "Heckler": 10,
            "Goldy Gilded": 46,
            "Spectator": 3,
            "Supervisor": 2,
            "Perv Asshat": 108,
            "Captain's Daughter": 9,
            "Duke's Second Son": 8,
            "Beatrix": 43,
            "Clerk": 1,
            "Aristocrat": 15,
            "Klaus Midgar": 1,
            "Raphael Oriana": 9,
            "Cid Kagenou (Stylish Bandit Slayer)": 20,
            "Lambda": 12,
            "No. 665": 15,
            "No. 664": 53,
            "Rose Oriana (No. 666)": 38,
            "Ghoul": 3,
            "White Demon": 30,
            "Merchant": 12,
            "Civilian": 12,
            "Mary": 104,
            "Coworker": 8,
            "Marie": 48,
            "Claudia": 15,
            "Vampire": 8,
            "Crimson": 22,
            "Juggernaut": 59,
            "Yukime": 151,
            "Elisabeth": 3,
            "No. 664 (No. 664 & No. 665 & No. 666 (No. 664))": 2,
            "No. 665 (No. 664 & No. 665 & No. 666 (No. 665))": 2,
            "Rose Oriana (No. 664 & No. 665 & No. 666 (No. 666))": 2,
            "Aurora (Witch Claire)": 15,
            "Scarface": 14,
            "Natsu (Natsu & Kana (Natsu))": 2,
            "Kana (Natsu & Kana (Kana))": 2,
            "Cid Kagenou (John Smith)": 403,
            "Shop Staff": 1,
            "Zabra": 9,
            "Gettan": 91,
            "Garter Kikuchi": 15,
            "Leaf One": 12,
            "Natsu": 7,
            "Kana": 2,
            "Victoria (No. 559)": 81,
            "No. 664 (No. 664 & No. 665 (No. 664))": 1,
            "No. 665 (No. 664 & No. 665 (No. 665))": 1,
            "Kouadoi": 24,
            "Reina Oriana": 9,
            "Epsilon (Shiron)": 36,
            "Margaret": 64,
            "Maid": 1,
            "Kevin": 18,
            "Mordred": 98,
            "Priest": 1,
            "Beta (Beta & Epsilon (Beta))": 2,
            "Epsilon (Beta & Epsilon (Epsilon))": 2,
            "Akane Nishino": 231,
            "Kidnapper A": 27,
            "Kidnapper B": 2,
            "Cid Kagenou (Stylish Ruffian Slayer)": 3,
            "Akira Nishino": 52,
            "Yuuka": 102,
            "Yuudai Saejima": 44,
            "Haitani": 37,
            "Fatty McSpecs": 6,
            "Forum User": 32,
            "Skel Etal (Skel & Po (Skel))": 1,
            "Po Tato (Skel & Po (Po))": 1,
            "Zeta": 145,
            "Spirit": 1,
            "Delta (Delta & Zeta (Delta))": 2,
            "Zeta (Delta & Zeta (Zeta))": 2,
            "Nina": 108,
            "Jean": 15,
            "Dark Spider": 17,
            "Willow": 99,
            "Fenrir": 129,
            "Issac": 66,
            "Alexia Midgar (Alexia & Claire (Alexia))": 3,
            "Claire Kagenou (Alexia & Claire (Claire))": 3,
            "Forbidden Stacks": 13,
            "Adder": 10,
            "Zeta's Father": 32,
            "Zeta (Lilim)": 70,
            "Zeta's Mother": 20,
            "Chief": 17,
            "Petos": 54,
            "Eta": 57,
            "Suzuki Hope": 4,
            "Cid Kagenou (Suzuki Hope)": 84,
            "Christina Hope": 82,
            "Eliza Dakuaikan": 28
        },
        "volumes": {
            "v1": {
                "line_count": 3565,
                "word_count": 57770,
                "char_count": 323998,
                "characters": {
                    "Cid Kagenou (Minoru Kageno)": 44,
                    "Cid Kagenou": 1075,
                    "Cid Kagenou (Shadow)": 183,
                    "Bandit": 2,
                    "Bandit Boss": 10,
                    "Alpha": 77,
                    "Mr. Kagenou": 3,
                    "Mrs. Kagenou": 2,
                    "Beta": 63,
                    "Narrator": 1423,
                    "Grease": 55,
                    "Soldier": 7,
                    "Claire Kagenou": 23,
                    "Garden Member": 1,
                    "Alexia Midgar": 262,
                    "Skel Etal": 49,
                    "Po Tato": 41,
                    "Student": 19,
                    "Zenon Griffey": 71,
                    "Knight": 23,
                    "Iris Midgar": 107,
                    "Scientist": 20,
                    "Cult Member": 27,
                    "Mitsugoshi Staff": 1,
                    "Gamma (Luna)": 18,
                    "Sherry Barnett": 143,
                    "Lutheran Barnett": 86,
                    "Glen": 13,
                    "Nu": 49,
                    "Gamma": 26,
                    "Referee": 4,
                    "Rose Oriana": 32,
                    "Teacher": 1,
                    "Marco Granger": 5,
                    "Rex": 42,
                    "Lutheran Barnett (Sir Gaunt)": 10,
                    "Medic": 3
                },
                "chapters": {
                    "c1": {
                        "word_count": 5900,
                        "char_count": 32378,
                        "line_count": 219,
                        "characters": {
                            "Cid Kagenou (Minoru Kageno)": 42,
                            "Cid Kagenou": 101,
                            "Cid Kagenou (Shadow)": 59,
                            "Bandit": 2,
                            "Bandit Boss": 10,
                            "Alpha": 14
                        }
                    },
                    "c2": {
                        "word_count": 7418,
                        "char_count": 41873,
                        "line_count": 399,
                        "characters": {
                            "Cid Kagenou": 78,
                            "Mr. Kagenou": 3,
                            "Mrs. Kagenou": 2,
                            "Beta": 29,
                            "Narrator": 203,
                            "Grease": 55,
                            "Soldier": 7,
                            "Claire Kagenou": 17,
                            "Alpha": 18,
                            "Cid Kagenou (Shadow)": 45,
                            "Garden Member": 1
                        }
                    },
                    "c3": {
                        "word_count": 5761,
                        "char_count": 31721,
                        "line_count": 357,
                        "characters": {
                            "Cid Kagenou": 272,
                            "Alexia Midgar": 77,
                            "Skel Etal": 15,
                            "Po Tato": 12,
                            "Student": 9,
                            "Zenon Griffey": 14,
                            "Narrator": 1
                        }
                    },
                    "c4": {
                        "word_count": 12084,
                        "char_count": 68528,
                        "line_count": 838,
                        "characters": {
                            "Cid Kagenou": 72,
                            "Knight": 23,
                            "Alpha": 35,
                            "Narrator": 490,
                            "Iris Midgar": 65,
                            "Zenon Griffey": 57,
                            "Claire Kagenou": 6,
                            "Alexia Midgar": 111,
                            "Scientist": 20,
                            "Cid Kagenou (Shadow)": 34,
                            "Beta": 12,
                            "Cult Member": 5,
                            "Cid Kagenou (Minoru Kageno)": 2,
                            "Mitsugoshi Staff": 1,
                            "Gamma (Luna)": 18
                        }
                    },
                    "c5": {
                        "word_count": 7593,
                        "char_count": 42368,
                        "line_count": 476,
                        "characters": {
                            "Cid Kagenou": 179,
                            "Skel Etal": 24,
                            "Po Tato": 21,
                            "Narrator": 149,
                            "Iris Midgar": 42,
                            "Sherry Barnett": 7,
                            "Lutheran Barnett": 10,
                            "Glen": 2,
                            "Alexia Midgar": 53,
                            "Nu": 12,
                            "Gamma": 23,
                            "Cid Kagenou (Shadow)": 26,
                            "Cult Member": 8
                        }
                    },
                    "c6": {
                        "word_count": 5371,
                        "char_count": 30174,
                        "line_count": 391,
                        "characters": {
                            "Cid Kagenou": 155,
                            "Student": 7,
                            "Skel Etal": 5,
                            "Po Tato": 6,
                            "Sherry Barnett": 65,
                            "Narrator": 132,
                            "Lutheran Barnett": 27,
                            "Nu": 12,
                            "Referee": 4,
                            "Rose Oriana": 2,
                            "Alexia Midgar": 21
                        }
                    },
                    "c7": {
                        "word_count": 7705,
                        "char_count": 43290,
                        "line_count": 529,
                        "characters": {
                            "Cid Kagenou": 188,
                            "Teacher": 1,
                            "Skel Etal": 5,
                            "Po Tato": 2,
                            "Student": 1,
                            "Cult Member": 12,
                            "Rose Oriana": 13,
                            "Narrator": 230,
                            "Sherry Barnett": 55,
                            "Glen": 11,
                            "Marco Granger": 5,
                            "Rex": 42,
                            "Lutheran Barnett (Sir Gaunt)": 10,
                            "Nu": 20
                        }
                    },
                    "c8": {
                        "word_count": 5225,
                        "char_count": 29558,
                        "line_count": 334,
                        "characters": {
                            "Narrator": 218,
                            "Rose Oriana": 17,
                            "Cult Member": 2,
                            "Cid Kagenou (Shadow)": 19,
                            "Nu": 5,
                            "Student": 2,
                            "Cid Kagenou": 30,
                            "Lutheran Barnett": 49,
                            "Sherry Barnett": 16,
                            "Medic": 3,
                            "Alpha": 10,
                            "Gamma": 3
                        }
                    },
                    "c9": {
                        "word_count": 713,
                        "char_count": 4108,
                        "line_count": 22,
                        "characters": {
                            "Beta": 22
                        }
                    }
                }
            },
            "v2": {
                "line_count": 4073,
                "word_count": 58035,
                "char_count": 325229,
                "characters": {
                    "Cid Kagenou": 857,
                    "Alpha": 100,
                    "Rose Oriana": 144,
                    "Beta (Natsume Kafka)": 78,
                    "Alexia Midgar": 106,
                    "Narrator": 2018,
                    "Cid Kagenou (Shadow)": 125,
                    "Epsilon": 53,
                    "Announcer": 2,
                    "Jack Nelson": 98,
                    "Aurora": 86,
                    "Delta": 24,
                    "Rude": 9,
                    "Gamma (Luna)": 10,
                    "Nu": 12,
                    "Beta": 62,
                    "Mitsugoshi Staff": 3,
                    "Gamma": 16,
                    "Cid Kagenou (Mundane Mann)": 134,
                    "Annerose Nichtsehen": 74,
                    "Quinton": 46,
                    "Heckler": 10,
                    "Skel Etal": 42,
                    "Goldy Gilded": 31,
                    "Referee": 7,
                    "Spectator": 3,
                    "Supervisor": 2,
                    "Perv Asshat": 48,
                    "Claire Kagenou": 21,
                    "Iris Midgar": 78,
                    "Captain's Daughter": 9,
                    "Duke's Second Son": 8,
                    "Beatrix": 43,
                    "Clerk": 1,
                    "Aristocrat": 11,
                    "Klaus Midgar": 1,
                    "Raphael Oriana": 2,
                    "Bandit Boss": 5,
                    "Bandit": 7,
                    "Cid Kagenou (Stylish Bandit Slayer)": 10,
                    "Lambda": 12,
                    "No. 665": 1,
                    "No. 664": 4,
                    "Rose Oriana (No. 666)": 4
                },
                "chapters": {
                    "c1": {
                        "word_count": 5362,
                        "char_count": 29052,
                        "line_count": 271,
                        "characters": {
                            "Cid Kagenou": 174,
                            "Alpha": 5,
                            "Rose Oriana": 31,
                            "Beta (Natsume Kafka)": 4,
                            "Alexia Midgar": 17,
                            "Narrator": 14,
                            "Cid Kagenou (Shadow)": 33,
                            "Epsilon": 6
                        }
                    },
                    "c2": {
                        "word_count": 4995,
                        "char_count": 28174,
                        "line_count": 246,
                        "characters": {
                            "Narrator": 129,
                            "Beta (Natsume Kafka)": 11,
                            "Cid Kagenou": 37,
                            "Announcer": 2,
                            "Cid Kagenou (Shadow)": 63,
                            "Alexia Midgar": 6,
                            "Rose Oriana": 5,
                            "Jack Nelson": 12
                        }
                    },
                    "c3": {
                        "word_count": 9287,
                        "char_count": 52575,
                        "line_count": 641,
                        "characters": {
                            "Narrator": 372,
                            "Rose Oriana": 18,
                            "Jack Nelson": 53,
                            "Cid Kagenou": 147,
                            "Alexia Midgar": 14,
                            "Alpha": 57,
                            "Epsilon": 11,
                            "Beta (Natsume Kafka)": 4,
                            "Cid Kagenou (Shadow)": 1,
                            "Aurora": 44,
                            "Delta": 12
                        }
                    },
                    "c4": {
                        "word_count": 8208,
                        "char_count": 46512,
                        "line_count": 604,
                        "characters": {
                            "Cid Kagenou": 101,
                            "Aurora": 42,
                            "Jack Nelson": 33,
                            "Narrator": 380,
                            "Epsilon": 27,
                            "Alpha": 17,
                            "Rose Oriana": 8,
                            "Beta (Natsume Kafka)": 11,
                            "Alexia Midgar": 11,
                            "Rude": 9,
                            "Gamma (Luna)": 10,
                            "Nu": 3,
                            "Delta": 12,
                            "Cid Kagenou (Shadow)": 4,
                            "Beta": 15
                        }
                    },
                    "c5": {
                        "word_count": 5666,
                        "char_count": 31110,
                        "line_count": 376,
                        "characters": {
                            "Narrator": 117,
                            "Rose Oriana": 17,
                            "Cid Kagenou": 74,
                            "Mitsugoshi Staff": 3,
                            "Gamma": 16,
                            "Nu": 9,
                            "Cid Kagenou (Mundane Mann)": 97,
                            "Annerose Nichtsehen": 13,
                            "Quinton": 10,
                            "Heckler": 10,
                            "Skel Etal": 2,
                            "Alexia Midgar": 20,
                            "Beta (Natsume Kafka)": 20
                        }
                    },
                    "c6": {
                        "word_count": 4000,
                        "char_count": 22975,
                        "line_count": 303,
                        "characters": {
                            "Cid Kagenou": 28,
                            "Skel Etal": 28,
                            "Goldy Gilded": 31,
                            "Cid Kagenou (Mundane Mann)": 28,
                            "Narrator": 126,
                            "Referee": 4,
                            "Spectator": 3,
                            "Quinton": 36,
                            "Annerose Nichtsehen": 44
                        }
                    },
                    "c7": {
                        "word_count": 5155,
                        "char_count": 28773,
                        "line_count": 384,
                        "characters": {
                            "Cid Kagenou": 100,
                            "Skel Etal": 12,
                            "Supervisor": 2,
                            "Alexia Midgar": 38,
                            "Beta (Natsume Kafka)": 28,
                            "Narrator": 181,
                            "Epsilon": 9,
                            "Perv Asshat": 1,
                            "Rose Oriana": 28,
                            "Cid Kagenou (Shadow)": 8
                        }
                    },
                    "c8": {
                        "word_count": 5561,
                        "char_count": 30656,
                        "line_count": 446,
                        "characters": {
                            "Cid Kagenou": 153,
                            "Claire Kagenou": 21,
                            "Iris Midgar": 46,
                            "Captain's Daughter": 8,
                            "Duke's Second Son": 7,
                            "Beatrix": 17,
                            "Narrator": 165,
                            "Perv Asshat": 30,
                            "Referee": 2,
                            "Annerose Nichtsehen": 17,
                            "Cid Kagenou (Mundane Mann)": 4
                        }
                    },
                    "c9": {
                        "word_count": 4275,
                        "char_count": 24097,
                        "line_count": 329,
                        "characters": {
                            "Cid Kagenou": 43,
                            "Iris Midgar": 21,
                            "Clerk": 1,
                            "Aristocrat": 11,
                            "Narrator": 227,
                            "Beatrix": 13,
                            "Duke's Second Son": 1,
                            "Captain's Daughter": 1,
                            "Perv Asshat": 13,
                            "Klaus Midgar": 1,
                            "Referee": 1,
                            "Cid Kagenou (Mundane Mann)": 4,
                            "Rose Oriana": 6,
                            "Raphael Oriana": 2
                        }
                    },
                    "c10": {
                        "word_count": 4565,
                        "char_count": 25738,
                        "line_count": 426,
                        "characters": {
                            "Narrator": 307,
                            "Rose Oriana": 31,
                            "Cid Kagenou (Mundane Mann)": 1,
                            "Bandit Boss": 5,
                            "Bandit": 7,
                            "Cid Kagenou (Stylish Bandit Slayer)": 10,
                            "Cid Kagenou (Shadow)": 16,
                            "Perv Asshat": 4,
                            "Beatrix": 13,
                            "Iris Midgar": 11,
                            "Alpha": 21,
                            "Lambda": 12,
                            "No. 665": 1,
                            "No. 664": 4,
                            "Rose Oriana (No. 666)": 4
                        }
                    },
                    "c11": {
                        "word_count": 961,
                        "char_count": 5567,
                        "line_count": 47,
                        "characters": {
                            "Beta": 47
                        }
                    }
                }
            },
            "v3": {
                "line_count": 4376,
                "word_count": 59219,
                "char_count": 333214,
                "characters": {
                    "Cid Kagenou": 444,
                    "Claire Kagenou": 231,
                    "Ghoul": 3,
                    "Cid Kagenou (Shadow)": 218,
                    "Beta": 170,
                    "Narrator": 2132,
                    "Quinton": 24,
                    "Goldy Gilded": 15,
                    "White Demon": 30,
                    "Merchant": 12,
                    "Civilian": 12,
                    "Mary": 104,
                    "Coworker": 8,
                    "Marie": 25,
                    "Knight": 6,
                    "Claudia": 15,
                    "Vampire": 8,
                    "Crimson": 22,
                    "Juggernaut": 59,
                    "Yukime": 151,
                    "Rose Oriana (No. 666)": 17,
                    "No. 664": 27,
                    "No. 665": 9,
                    "Elisabeth": 3,
                    "No. 664 (No. 664 & No. 665 & No. 666 (No. 664))": 1,
                    "No. 665 (No. 664 & No. 665 & No. 666 (No. 665))": 1,
                    "Rose Oriana (No. 664 & No. 665 & No. 666 (No. 666))": 1,
                    "Aurora": 22,
                    "Aurora (Witch Claire)": 12,
                    "Bandit": 25,
                    "Scarface": 14,
                    "Natsu (Natsu & Kana (Natsu))": 2,
                    "Kana (Natsu & Kana (Kana))": 2,
                    "Alpha": 101,
                    "Cid Kagenou (John Smith)": 403,
                    "Shop Staff": 1,
                    "Po Tato": 9,
                    "Skel Etal": 3,
                    "Delta": 90,
                    "Zabra": 9,
                    "Gettan": 91,
                    "Garter Kikuchi": 15,
                    "Gamma": 75,
                    "Nu": 14,
                    "Leaf One": 12,
                    "Alexia Midgar": 12,
                    "Natsu": 7,
                    "Soldier": 6,
                    "Cid Kagenou (Stylish Bandit Slayer)": 1,
                    "Kana": 2
                },
                "chapters": {
                    "c1": {
                        "word_count": 4491,
                        "char_count": 25183,
                        "line_count": 322,
                        "characters": {
                            "Cid Kagenou": 112,
                            "Claire Kagenou": 46,
                            "Ghoul": 2,
                            "Cid Kagenou (Shadow)": 51,
                            "Beta": 21,
                            "Narrator": 64,
                            "Quinton": 22,
                            "Goldy Gilded": 13,
                            "White Demon": 17
                        }
                    },
                    "c2": {
                        "word_count": 6905,
                        "char_count": 38730,
                        "line_count": 479,
                        "characters": {
                            "Cid Kagenou": 112,
                            "Claire Kagenou": 47,
                            "Merchant": 12,
                            "Goldy Gilded": 2,
                            "Quinton": 2,
                            "Narrator": 204,
                            "Civilian": 12,
                            "Ghoul": 1,
                            "Mary": 33,
                            "Coworker": 8,
                            "Marie": 25,
                            "Cid Kagenou (Shadow)": 27,
                            "Knight": 6,
                            "Claudia": 15,
                            "Vampire": 6,
                            "Crimson": 11
                        }
                    },
                    "c3": {
                        "word_count": 7070,
                        "char_count": 39593,
                        "line_count": 489,
                        "characters": {
                            "Narrator": 327,
                            "Juggernaut": 34,
                            "Yukime": 15,
                            "Cid Kagenou (Shadow)": 6,
                            "White Demon": 13,
                            "Claire Kagenou": 67,
                            "Mary": 45,
                            "Beta": 25,
                            "Rose Oriana (No. 666)": 4,
                            "No. 664": 2,
                            "No. 665": 1,
                            "Vampire": 2,
                            "Elisabeth": 2
                        }
                    },
                    "c4": {
                        "word_count": 9047,
                        "char_count": 50831,
                        "line_count": 726,
                        "characters": {
                            "Cid Kagenou (Shadow)": 50,
                            "Crimson": 11,
                            "Narrator": 469,
                            "Claire Kagenou": 38,
                            "Mary": 26,
                            "Beta": 42,
                            "No. 665": 2,
                            "No. 664 (No. 664 & No. 665 & No. 666 (No. 664))": 1,
                            "No. 665 (No. 664 & No. 665 & No. 666 (No. 665))": 1,
                            "Rose Oriana (No. 664 & No. 665 & No. 666 (No. 666))": 1,
                            "No. 664": 3,
                            "Yukime": 21,
                            "Juggernaut": 25,
                            "Rose Oriana (No. 666)": 4,
                            "Aurora": 22,
                            "Aurora (Witch Claire)": 12,
                            "Elisabeth": 1,
                            "Cid Kagenou": 41
                        }
                    },
                    "c5": {
                        "word_count": 2467,
                        "char_count": 13686,
                        "line_count": 216,
                        "characters": {
                            "Narrator": 125,
                            "Cid Kagenou": 40,
                            "Claire Kagenou": 33,
                            "Bandit": 17,
                            "Scarface": 14
                        }
                    },
                    "c6": {
                        "word_count": 7310,
                        "char_count": 41169,
                        "line_count": 501,
                        "characters": {
                            "Narrator": 149,
                            "Yukime": 40,
                            "Natsu (Natsu & Kana (Natsu))": 1,
                            "Kana (Natsu & Kana (Kana))": 1,
                            "Cid Kagenou (Shadow)": 70,
                            "Beta": 3,
                            "Alpha": 10,
                            "Bandit": 8,
                            "Cid Kagenou (John Smith)": 76,
                            "Cid Kagenou": 103,
                            "Shop Staff": 1,
                            "Po Tato": 9,
                            "Skel Etal": 3,
                            "Delta": 41,
                            "Zabra": 9
                        }
                    },
                    "c7": {
                        "word_count": 4478,
                        "char_count": 25241,
                        "line_count": 331,
                        "characters": {
                            "Narrator": 150,
                            "Gettan": 16,
                            "Garter Kikuchi": 5,
                            "Gamma": 27,
                            "Alpha": 6,
                            "Nu": 9,
                            "Leaf One": 12,
                            "Cid Kagenou": 36,
                            "Alexia Midgar": 12,
                            "Cid Kagenou (John Smith)": 64,
                            "Natsu": 2,
                            "Yukime": 16
                        }
                    },
                    "c8": {
                        "word_count": 7211,
                        "char_count": 41117,
                        "line_count": 573,
                        "characters": {
                            "Narrator": 330,
                            "Gamma": 21,
                            "Alpha": 50,
                            "Gettan": 10,
                            "Garter Kikuchi": 3,
                            "Cid Kagenou (John Smith)": 95,
                            "No. 664": 22,
                            "Rose Oriana (No. 666)": 9,
                            "No. 665": 6,
                            "Delta": 19,
                            "Cid Kagenou (Shadow)": 13,
                            "Beta": 21,
                            "Soldier": 6
                        }
                    },
                    "c9": {
                        "word_count": 9039,
                        "char_count": 50750,
                        "line_count": 690,
                        "characters": {
                            "Cid Kagenou (John Smith)": 168,
                            "Yukime": 59,
                            "Narrator": 314,
                            "Gettan": 65,
                            "Cid Kagenou (Stylish Bandit Slayer)": 1,
                            "Garter Kikuchi": 7,
                            "Gamma": 27,
                            "Alpha": 35,
                            "Nu": 5,
                            "Beta": 9,
                            "Cid Kagenou (Shadow)": 1,
                            "Delta": 30,
                            "Natsu (Natsu & Kana (Natsu))": 1,
                            "Kana (Natsu & Kana (Kana))": 1,
                            "Natsu": 5,
                            "Kana": 2
                        }
                    },
                    "c10": {
                        "word_count": 1201,
                        "char_count": 6914,
                        "line_count": 49,
                        "characters": {
                            "Beta": 49
                        }
                    }
                }
            },
            "v4": {
                "line_count": 4353,
                "word_count": 59256,
                "char_count": 327505,
                "characters": {
                    "Narrator": 1810,
                    "Raphael Oriana": 7,
                    "Rose Oriana": 102,
                    "No. 664": 20,
                    "Rose Oriana (No. 666)": 17,
                    "No. 665": 3,
                    "Victoria (No. 559)": 65,
                    "No. 664 (No. 664 & No. 665 (No. 664))": 1,
                    "No. 665 (No. 664 & No. 665 (No. 665))": 1,
                    "No. 664 (No. 664 & No. 665 & No. 666 (No. 664))": 1,
                    "No. 665 (No. 664 & No. 665 & No. 666 (No. 665))": 1,
                    "Rose Oriana (No. 664 & No. 665 & No. 666 (No. 666))": 1,
                    "Kouadoi": 24,
                    "Reina Oriana": 9,
                    "Cid Kagenou": 1147,
                    "Marie": 23,
                    "Soldier": 26,
                    "Cid Kagenou (Shadow)": 227,
                    "Epsilon (Shiron)": 36,
                    "Perv Asshat": 60,
                    "Aristocrat": 4,
                    "Margaret": 64,
                    "Maid": 1,
                    "Kevin": 18,
                    "Epsilon": 59,
                    "Cult Member": 1,
                    "Mordred": 98,
                    "Priest": 1,
                    "Beta": 215,
                    "Beta (Beta & Epsilon (Beta))": 2,
                    "Epsilon (Beta & Epsilon (Epsilon))": 2,
                    "Akane Nishino": 231,
                    "Cid Kagenou (Minoru Kageno)": 8,
                    "Kidnapper A": 27,
                    "Kidnapper B": 2,
                    "Cid Kagenou (Stylish Bandit Slayer)": 9,
                    "Cid Kagenou (Stylish Ruffian Slayer)": 3,
                    "Knight": 77,
                    "Akira Nishino": 52,
                    "Yuuka": 102,
                    "Yuudai Saejima": 44,
                    "Scientist": 13,
                    "Haitani": 37,
                    "Fatty McSpecs": 6,
                    "Forum User": 32,
                    "Bandit": 24,
                    "Alpha": 16
                },
                "chapters": {
                    "c1": {
                        "word_count": 5597,
                        "char_count": 30820,
                        "line_count": 449,
                        "characters": {
                            "Narrator": 248,
                            "Raphael Oriana": 1,
                            "Rose Oriana": 2,
                            "No. 664": 20,
                            "Rose Oriana (No. 666)": 17,
                            "No. 665": 3,
                            "Victoria (No. 559)": 42,
                            "No. 664 (No. 664 & No. 665 (No. 664))": 1,
                            "No. 665 (No. 664 & No. 665 (No. 665))": 1,
                            "No. 664 (No. 664 & No. 665 & No. 666 (No. 664))": 1,
                            "No. 665 (No. 664 & No. 665 & No. 666 (No. 665))": 1,
                            "Rose Oriana (No. 664 & No. 665 & No. 666 (No. 666))": 1,
                            "Kouadoi": 24,
                            "Reina Oriana": 1,
                            "Cid Kagenou": 44,
                            "Marie": 23,
                            "Soldier": 25,
                            "Cid Kagenou (Shadow)": 47
                        }
                    },
                    "c2": {
                        "word_count": 5123,
                        "char_count": 27559,
                        "line_count": 369,
                        "characters": {
                            "Cid Kagenou": 188,
                            "Epsilon (Shiron)": 21,
                            "Perv Asshat": 18,
                            "Narrator": 101,
                            "Aristocrat": 4,
                            "Margaret": 33,
                            "Maid": 1,
                            "Kevin": 18,
                            "Rose Oriana": 25
                        }
                    },
                    "c3": {
                        "word_count": 5703,
                        "char_count": 31157,
                        "line_count": 442,
                        "characters": {
                            "Epsilon": 49,
                            "Narrator": 143,
                            "Victoria (No. 559)": 17,
                            "Cid Kagenou": 171,
                            "Margaret": 26,
                            "Epsilon (Shiron)": 15,
                            "Reina Oriana": 7,
                            "Perv Asshat": 7,
                            "Rose Oriana": 30,
                            "Cid Kagenou (Shadow)": 12
                        }
                    },
                    "c4": {
                        "word_count": 9102,
                        "char_count": 50577,
                        "line_count": 653,
                        "characters": {
                            "Narrator": 375,
                            "Perv Asshat": 35,
                            "Cult Member": 1,
                            "Mordred": 98,
                            "Priest": 1,
                            "Rose Oriana": 45,
                            "Raphael Oriana": 6,
                            "Reina Oriana": 1,
                            "Soldier": 1,
                            "Margaret": 5,
                            "Beta": 55,
                            "Epsilon": 7,
                            "Cid Kagenou (Shadow)": 87,
                            "Beta (Beta & Epsilon (Beta))": 2,
                            "Epsilon (Beta & Epsilon (Epsilon))": 2
                        }
                    },
                    "c5": {
                        "word_count": 3221,
                        "char_count": 17817,
                        "line_count": 224,
                        "characters": {
                            "Narrator": 163,
                            "Akane Nishino": 25,
                            "Cid Kagenou (Minoru Kageno)": 8,
                            "Kidnapper A": 27,
                            "Kidnapper B": 2,
                            "Cid Kagenou (Stylish Bandit Slayer)": 9,
                            "Cid Kagenou (Stylish Ruffian Slayer)": 3
                        }
                    },
                    "c6": {
                        "word_count": 6716,
                        "char_count": 37329,
                        "line_count": 517,
                        "characters": {
                            "Cid Kagenou (Shadow)": 33,
                            "Beta": 77,
                            "Cid Kagenou": 233,
                            "Narrator": 130,
                            "Akane Nishino": 35,
                            "Knight": 44
                        }
                    },
                    "c7": {
                        "word_count": 10044,
                        "char_count": 55005,
                        "line_count": 605,
                        "characters": {
                            "Narrator": 176,
                            "Akira Nishino": 28,
                            "Akane Nishino": 123,
                            "Yuuka": 46,
                            "Cid Kagenou": 238,
                            "Beta": 13,
                            "Yuudai Saejima": 29,
                            "Scientist": 13
                        }
                    },
                    "c8": {
                        "word_count": 6610,
                        "char_count": 36842,
                        "line_count": 559,
                        "characters": {
                            "Narrator": 156,
                            "Akane Nishino": 33,
                            "Yuudai Saejima": 15,
                            "Haitani": 22,
                            "Knight": 18,
                            "Cid Kagenou (Shadow)": 1,
                            "Cid Kagenou": 255,
                            "Yuuka": 27,
                            "Fatty McSpecs": 6,
                            "Forum User": 32,
                            "Beta": 7,
                            "Bandit": 24
                        }
                    },
                    "c9": {
                        "word_count": 6125,
                        "char_count": 34700,
                        "line_count": 503,
                        "characters": {
                            "Narrator": 318,
                            "Akira Nishino": 24,
                            "Yuuka": 29,
                            "Beta": 32,
                            "Knight": 15,
                            "Haitani": 15,
                            "Cid Kagenou (Shadow)": 46,
                            "Cid Kagenou": 18,
                            "Akane Nishino": 15,
                            "Alpha": 16,
                            "Epsilon": 3,
                            "Victoria (No. 559)": 6
                        }
                    },
                    "c10": {
                        "word_count": 1015,
                        "char_count": 5699,
                        "line_count": 32,
                        "characters": {
                            "Beta": 31,
                            "Cid Kagenou (Shadow)": 1
                        }
                    }
                }
            },
            "v5": {
                "line_count": 4061,
                "word_count": 57565,
                "char_count": 320145,
                "characters": {
                    "Cid Kagenou": 987,
                    "Skel Etal": 57,
                    "Po Tato": 52,
                    "Skel Etal (Skel & Po (Skel))": 1,
                    "Po Tato (Skel & Po (Po))": 1,
                    "Zeta": 145,
                    "Claire Kagenou": 364,
                    "Narrator": 1435,
                    "Aurora": 101,
                    "Spirit": 1,
                    "Alexia Midgar": 427,
                    "Delta": 35,
                    "Delta (Delta & Zeta (Delta))": 2,
                    "Zeta (Delta & Zeta (Zeta))": 2,
                    "Knight": 7,
                    "Cid Kagenou (Shadow)": 59,
                    "Nina": 108,
                    "Jean": 15,
                    "Victoria (No. 559)": 16,
                    "Teacher": 8,
                    "Dark Spider": 17,
                    "Willow": 99,
                    "Fenrir": 129,
                    "Student": 32,
                    "Issac": 66,
                    "Scientist": 3,
                    "Alexia Midgar (Alexia & Claire (Alexia))": 3,
                    "Claire Kagenou (Alexia & Claire (Claire))": 3,
                    "Forbidden Stacks": 13,
                    "Iris Midgar": 8,
                    "Adder": 10,
                    "Marco Granger": 2,
                    "Zeta's Father": 32,
                    "Zeta (Lilim)": 70,
                    "Zeta's Mother": 20,
                    "Chief": 17,
                    "Petos": 54,
                    "Cult Member": 7,
                    "Alpha": 59,
                    "Rose Oriana": 25,
                    "No. 665": 2,
                    "No. 664": 2,
                    "Gamma": 22,
                    "Eta": 57,
                    "Suzuki Hope": 4,
                    "Cid Kagenou (Suzuki Hope)": 84,
                    "Christina Hope": 82,
                    "Eliza Dakuaikan": 28,
                    "Aurora (Witch Claire)": 3
                },
                "chapters": {
                    "c1": {
                        "word_count": 7119,
                        "char_count": 39167,
                        "line_count": 552,
                        "characters": {
                            "Cid Kagenou": 280,
                            "Skel Etal": 27,
                            "Po Tato": 20,
                            "Skel Etal (Skel & Po (Skel))": 1,
                            "Po Tato (Skel & Po (Po))": 1,
                            "Zeta": 35,
                            "Claire Kagenou": 44,
                            "Narrator": 72,
                            "Aurora": 26,
                            "Spirit": 1,
                            "Alexia Midgar": 56,
                            "Delta": 35,
                            "Delta (Delta & Zeta (Delta))": 2,
                            "Zeta (Delta & Zeta (Zeta))": 2,
                            "Knight": 7,
                            "Cid Kagenou (Shadow)": 8
                        }
                    },
                    "c2": {
                        "word_count": 10452,
                        "char_count": 57098,
                        "line_count": 714,
                        "characters": {
                            "Cid Kagenou": 215,
                            "Po Tato": 12,
                            "Skel Etal": 11,
                            "Zeta": 31,
                            "Nina": 39,
                            "Claire Kagenou": 133,
                            "Narrator": 165,
                            "Aurora": 29,
                            "Jean": 15,
                            "Victoria (No. 559)": 6,
                            "Teacher": 8,
                            "Alexia Midgar": 82,
                            "Dark Spider": 17,
                            "Willow": 23,
                            "Fenrir": 23
                        }
                    },
                    "c3": {
                        "word_count": 9177,
                        "char_count": 51350,
                        "line_count": 731,
                        "characters": {
                            "Cid Kagenou": 183,
                            "Alexia Midgar": 145,
                            "Student": 6,
                            "Issac": 5,
                            "Claire Kagenou": 83,
                            "Aurora": 28,
                            "Scientist": 3,
                            "Narrator": 207,
                            "Alexia Midgar (Alexia & Claire (Alexia))": 3,
                            "Claire Kagenou (Alexia & Claire (Claire))": 3,
                            "Forbidden Stacks": 13,
                            "Willow": 76,
                            "Cid Kagenou (Shadow)": 6,
                            "Iris Midgar": 8,
                            "Adder": 10,
                            "Marco Granger": 2,
                            "Zeta": 32,
                            "Nina": 27
                        }
                    },
                    "c4": {
                        "word_count": 8008,
                        "char_count": 44804,
                        "line_count": 591,
                        "characters": {
                            "Cid Kagenou": 163,
                            "Claire Kagenou": 23,
                            "Skel Etal": 19,
                            "Po Tato": 20,
                            "Zeta": 38,
                            "Narrator": 220,
                            "Zeta's Father": 32,
                            "Zeta (Lilim)": 70,
                            "Zeta's Mother": 20,
                            "Chief": 17,
                            "Petos": 26,
                            "Cult Member": 7,
                            "Cid Kagenou (Shadow)": 19,
                            "Alpha": 11,
                            "Victoria (No. 559)": 7,
                            "Nina": 3
                        }
                    },
                    "c5": {
                        "word_count": 4090,
                        "char_count": 22677,
                        "line_count": 210,
                        "characters": {
                            "Narrator": 94,
                            "Fenrir": 31,
                            "Petos": 28,
                            "Alpha": 48,
                            "Rose Oriana": 25,
                            "No. 665": 2,
                            "No. 664": 2,
                            "Gamma": 22,
                            "Eta": 16
                        }
                    },
                    "c6": {
                        "word_count": 9746,
                        "char_count": 54385,
                        "line_count": 613,
                        "characters": {
                            "Narrator": 323,
                            "Alexia Midgar": 97,
                            "Claire Kagenou": 53,
                            "Student": 26,
                            "Cid Kagenou": 99,
                            "Suzuki Hope": 4,
                            "Cid Kagenou (Suzuki Hope)": 54,
                            "Nina": 27,
                            "Issac": 29,
                            "Christina Hope": 35,
                            "Eliza Dakuaikan": 28
                        }
                    },
                    "c7": {
                        "word_count": 8273,
                        "char_count": 46843,
                        "line_count": 609,
                        "characters": {
                            "Narrator": 354,
                            "Christina Hope": 47,
                            "Issac": 32,
                            "Cid Kagenou (Suzuki Hope)": 30,
                            "Aurora": 18,
                            "Claire Kagenou": 28,
                            "Alexia Midgar": 47,
                            "Fenrir": 75,
                            "Aurora (Witch Claire)": 3,
                            "Cid Kagenou (Shadow)": 26,
                            "Nina": 12,
                            "Victoria (No. 559)": 3,
                            "Zeta": 9,
                            "Cid Kagenou": 45
                        }
                    },
                    "c8": {
                        "word_count": 700,
                        "char_count": 3821,
                        "line_count": 41,
                        "characters": {
                            "Eta": 41,
                            "Cid Kagenou": 2
                        }
                    }
                }
            },
            "v6": {
                "line_count": 4558,
                "word_count": 52189,
                "char_count": 293821,
                "characters": {},
                "chapters": {
                    "c1": {
                        "word_count": 4001,
                        "char_count": 22543,
                        "line_count": 376,
                        "characters": {}
                    },
                    "c2": {
                        "word_count": 7151,
                        "char_count": 40308,
                        "line_count": 600,
                        "characters": {}
                    },
                    "c3": {
                        "word_count": 7939,
                        "char_count": 44798,
                        "line_count": 769,
                        "characters": {}
                    },
                    "c4": {
                        "word_count": 10339,
                        "char_count": 58077,
                        "line_count": 802,
                        "characters": {}
                    },
                    "c5": {
                        "word_count": 7007,
                        "char_count": 39937,
                        "line_count": 615,
                        "characters": {}
                    },
                    "c6": {
                        "word_count": 890,
                        "char_count": 4926,
                        "line_count": 86,
                        "characters": {}
                    },
                    "c7": {
                        "word_count": 4180,
                        "char_count": 22721,
                        "line_count": 447,
                        "characters": {}
                    },
                    "c8": {
                        "word_count": 8385,
                        "char_count": 47513,
                        "line_count": 726,
                        "characters": {}
                    },
                    "c9": {
                        "word_count": 1730,
                        "char_count": 9694,
                        "line_count": 117,
                        "characters": {}
                    },
                    "c10": {
                        "word_count": 567,
                        "char_count": 3304,
                        "line_count": 20,
                        "characters": {}
                    }
                }
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
        "line_count": 1978,
        "word_count": 16573,
        "char_count": 93649,
        "characters": {
            "Bandit Boss": 6,
            "Bandit A": 1,
            "Bandits": 2,
            "Cid Kagenou (Cid)": 35,
            "Bandit B": 2,
            "Alpha": 496,
            "Nanigashi (??? (Nanigashi))": 2,
            "Nanigashi": 5,
            "Mysterious Voice": 2,
            "Delta": 100,
            "Eta": 44,
            "Epsilon": 93,
            "Beta": 174,
            "Gamma": 84,
            "Zeta": 89,
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
            "Lili": 67,
            "Freya (??? (Freya))": 1,
            "Freya": 133,
            "Yukime": 10,
            "Claire Kagenou (Claire)": 62,
            "Victoria (No. 559)": 40,
            "Rose Oriana (Rose)": 8,
            "Alexia Midgar (Alexia)": 116,
            "Narrator": 13,
            "Duet": 24,
            "Olivier": 138,
            "Alpha (None (Alpha))": 4,
            "Beta (Beta & Epsilon (Beta))": 1,
            "Epsilon (Beta & Epsilon (Epsilon))": 1,
            "Pente": 22,
            "Mysterious Man A": 2,
            "Mysterious Man B": 2,
            "Mysterious Man C": 2,
            "Mysterious Man D": 3,
            "Beta (Beta & Eta (Beta))": 1,
            "Eta (Beta & Eta (Eta))": 1,
            "Zeta (Zeta & Beta (Zeta))": 1,
            "Beta (Zeta & Beta (Beta))": 1,
            "Rose Oriana (Rose & Alexia (Rose))": 1,
            "Alexia Midgar (Rose & Alexia (Alexia))": 1,
            "Beta (Fictional Gamma)": 11,
            "Beta (Fictional Delta)": 2,
            "Beta (Fictional Olivier)": 4,
            "Beta (Fictional Lili)": 1,
            "Beta (Fictional Freya)": 1,
            "Beta (Fictional Shadow)": 17,
            "Beta (Fictional Alpha)": 1,
            "Beta (Fictional Epsilon)": 1,
            "Beta (Fictional Eta)": 1,
            "Sarasa": 24,
            "Alpha (Alpha & Freya (Alpha))": 1,
            "Freya (Alpha & Freya (Freya))": 1,
            "Rouge": 21,
            "Nonna": 46,
            "Villager A": 16,
            "Villager B": 2,
            "Villager C": 2,
            "Vampire": 4
        },
        "parts": {
            "p1": {
                "chapter_count": 2,
                "line_count": 1978,
                "word_count": 16573,
                "char_count": 93649,
                "characters": {
                    "Bandit Boss": 6,
                    "Bandit A": 1,
                    "Bandits": 2,
                    "Cid Kagenou (Cid)": 35,
                    "Bandit B": 2,
                    "Alpha": 496,
                    "Nanigashi (??? (Nanigashi))": 2,
                    "Nanigashi": 5,
                    "Mysterious Voice": 2,
                    "Delta": 100,
                    "Eta": 44,
                    "Epsilon": 93,
                    "Beta": 174,
                    "Gamma": 84,
                    "Zeta": 89,
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
                    "Lili": 67,
                    "Freya (??? (Freya))": 1,
                    "Freya": 133,
                    "Yukime": 10,
                    "Claire Kagenou (Claire)": 62,
                    "Victoria (No. 559)": 40,
                    "Rose Oriana (Rose)": 8,
                    "Alexia Midgar (Alexia)": 116,
                    "Narrator": 13,
                    "Duet": 24,
                    "Olivier": 138,
                    "Alpha (None (Alpha))": 4,
                    "Beta (Beta & Epsilon (Beta))": 1,
                    "Epsilon (Beta & Epsilon (Epsilon))": 1,
                    "Pente": 22,
                    "Mysterious Man A": 2,
                    "Mysterious Man B": 2,
                    "Mysterious Man C": 2,
                    "Mysterious Man D": 3,
                    "Beta (Beta & Eta (Beta))": 1,
                    "Eta (Beta & Eta (Eta))": 1,
                    "Zeta (Zeta & Beta (Zeta))": 1,
                    "Beta (Zeta & Beta (Beta))": 1,
                    "Rose Oriana (Rose & Alexia (Rose))": 1,
                    "Alexia Midgar (Rose & Alexia (Alexia))": 1,
                    "Beta (Fictional Gamma)": 11,
                    "Beta (Fictional Delta)": 2,
                    "Beta (Fictional Olivier)": 4,
                    "Beta (Fictional Lili)": 1,
                    "Beta (Fictional Freya)": 1,
                    "Beta (Fictional Shadow)": 17,
                    "Beta (Fictional Alpha)": 1,
                    "Beta (Fictional Epsilon)": 1,
                    "Beta (Fictional Eta)": 1,
                    "Sarasa": 24,
                    "Alpha (Alpha & Freya (Alpha))": 1,
                    "Freya (Alpha & Freya (Freya))": 1,
                    "Rouge": 21,
                    "Nonna": 46,
                    "Villager A": 16,
                    "Villager B": 2,
                    "Villager C": 2,
                    "Vampire": 4
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
                            "Narrator": 13,
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
                                    "Narrator": 3,
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
                                    "Narrator": 1
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
                                    "Narrator": 2
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
                                    "Narrator": 2
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
                                    "Narrator": 1
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
                                    "Narrator": 2,
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
                                    "Narrator": 2
                                }
                            }
                        }
                    },
                    "c1-2": {
                        "episode_count": 16,
                        "line_count": 1185,
                        "word_count": 9928,
                        "char_count": 55454,
                        "characters": {
                            "Gamma": 43,
                            "Epsilon": 46,
                            "Delta": 18,
                            "Alpha": 261,
                            "Claire Kagenou (Claire)": 51,
                            "Rose Oriana (Rose)": 6,
                            "Zeta": 60,
                            "Beta (Beta & Eta (Beta))": 1,
                            "Eta (Beta & Eta (Eta))": 1,
                            "Beta": 130,
                            "Eta": 15,
                            "Duet": 3,
                            "Pente": 2,
                            "Olivier": 93,
                            "Alexia Midgar (Alexia)": 92,
                            "Freya": 112,
                            "Lili": 50,
                            "Zeta (Zeta & Beta (Zeta))": 1,
                            "Beta (Zeta & Beta (Beta))": 1,
                            "Rose Oriana (Rose & Alexia (Rose))": 1,
                            "Alexia Midgar (Rose & Alexia (Alexia))": 1,
                            "Beta (Fictional Gamma)": 11,
                            "Beta (Fictional Delta)": 2,
                            "Beta (Fictional Olivier)": 4,
                            "Beta (Fictional Lili)": 1,
                            "Beta (Fictional Freya)": 1,
                            "Beta (Fictional Shadow)": 17,
                            "Beta (Fictional Alpha)": 1,
                            "Beta (Fictional Epsilon)": 1,
                            "Beta (Fictional Eta)": 1,
                            "Yukime": 3,
                            "Sarasa": 24,
                            "Alpha (Alpha & Freya (Alpha))": 1,
                            "Freya (Alpha & Freya (Freya))": 1,
                            "Rouge": 21,
                            "Victoria (No. 559)": 33,
                            "Nonna": 46,
                            "Mysterious Man A": 1,
                            "Mysterious Man B": 1,
                            "Mysterious Man C": 1,
                            "Mysterious Man D": 2,
                            "Villager A": 16,
                            "Villager B": 2,
                            "Villager C": 2,
                            "Vampire": 4
                        },
                        "episodes": {
                            "eA1": {
                                "line_count": 175,
                                "word_count": 1276,
                                "char_count": 7131,
                                "characters": {
                                    "Gamma": 42,
                                    "Epsilon": 14,
                                    "Delta": 15,
                                    "Alpha": 43,
                                    "Claire Kagenou (Claire)": 8,
                                    "Rose Oriana (Rose)": 5,
                                    "Zeta": 9,
                                    "Beta (Beta & Eta (Beta))": 1,
                                    "Eta (Beta & Eta (Eta))": 1,
                                    "Beta": 3,
                                    "Eta": 4,
                                    "Duet": 3,
                                    "Pente": 2,
                                    "Olivier": 15,
                                    "Alexia Midgar (Alexia)": 4,
                                    "Freya": 1,
                                    "Lili": 4,
                                    "Zeta (Zeta & Beta (Zeta))": 1,
                                    "Beta (Zeta & Beta (Beta))": 1,
                                    "Rose Oriana (Rose & Alexia (Rose))": 1,
                                    "Alexia Midgar (Rose & Alexia (Alexia))": 1
                                }
                            },
                            "eA2": {
                                "line_count": 116,
                                "word_count": 1299,
                                "char_count": 7310,
                                "characters": {
                                    "Beta (Fictional Gamma)": 11,
                                    "Beta (Fictional Delta)": 2,
                                    "Beta": 21,
                                    "Beta (Fictional Olivier)": 4,
                                    "Beta (Fictional Lili)": 1,
                                    "Beta (Fictional Freya)": 1,
                                    "Beta (Fictional Shadow)": 7,
                                    "Beta (Fictional Alpha)": 1,
                                    "Beta (Fictional Epsilon)": 1,
                                    "Beta (Fictional Eta)": 1,
                                    "Alpha": 22,
                                    "Claire Kagenou (Claire)": 3,
                                    "Zeta": 6,
                                    "Epsilon": 3,
                                    "Yukime": 1,
                                    "Freya": 14,
                                    "Lili": 5,
                                    "Sarasa": 3,
                                    "Alpha (Alpha & Freya (Alpha))": 1,
                                    "Freya (Alpha & Freya (Freya))": 1,
                                    "Olivier": 4,
                                    "Rouge": 2,
                                    "Delta": 1,
                                    "Alexia Midgar (Alexia)": 1
                                }
                            },
                            "eA3": {
                                "line_count": 95,
                                "word_count": 817,
                                "char_count": 4455,
                                "characters": {
                                    "Olivier": 20,
                                    "Freya": 19,
                                    "Alexia Midgar (Alexia)": 17,
                                    "Claire Kagenou (Claire)": 8,
                                    "Rose Oriana (Rose)": 1,
                                    "Victoria (No. 559)": 1,
                                    "Yukime": 1,
                                    "Alpha": 21,
                                    "Epsilon": 1,
                                    "Delta": 2,
                                    "Rouge": 1,
                                    "Nonna": 1,
                                    "Zeta": 2
                                }
                            },
                            "eA4": {
                                "line_count": 70,
                                "word_count": 693,
                                "char_count": 4003,
                                "characters": {
                                    "Alpha": 26,
                                    "Eta": 2,
                                    "Epsilon": 2,
                                    "Rouge": 11,
                                    "Victoria (No. 559)": 1,
                                    "Alexia Midgar (Alexia)": 3,
                                    "Nonna": 25
                                }
                            },
                            "eA5": {
                                "line_count": 74,
                                "word_count": 501,
                                "char_count": 2910,
                                "characters": {
                                    "Alexia Midgar (Alexia)": 21,
                                    "Alpha": 24,
                                    "Rouge": 7,
                                    "Nonna": 9,
                                    "Eta": 2,
                                    "Victoria (No. 559)": 5,
                                    "Epsilon": 6
                                }
                            },
                            "eA6-1": {
                                "line_count": 30,
                                "word_count": 214,
                                "char_count": 1169,
                                "characters": {
                                    "Alexia Midgar (Alexia)": 1,
                                    "Alpha": 14,
                                    "Nonna": 2,
                                    "Victoria (No. 559)": 1,
                                    "Eta": 1,
                                    "Epsilon": 2,
                                    "Beta": 8,
                                    "Olivier": 1
                                }
                            },
                            "eA6-2": {
                                "line_count": 19,
                                "word_count": 194,
                                "char_count": 1105,
                                "characters": {
                                    "Alexia Midgar (Alexia)": 3,
                                    "Alpha": 11,
                                    "Eta": 1,
                                    "Victoria (No. 559)": 4,
                                    "Epsilon": 1
                                }
                            },
                            "eA7-1": {
                                "line_count": 38,
                                "word_count": 285,
                                "char_count": 1478,
                                "characters": {
                                    "Alpha": 10,
                                    "Victoria (No. 559)": 11,
                                    "Alexia Midgar (Alexia)": 10,
                                    "Epsilon": 3,
                                    "Nonna": 1,
                                    "Beta": 2,
                                    "Eta": 1
                                }
                            },
                            "eA7-2": {
                                "line_count": 82,
                                "word_count": 535,
                                "char_count": 2954,
                                "characters": {
                                    "Victoria (No. 559)": 3,
                                    "Alpha": 27,
                                    "Beta": 19,
                                    "Epsilon": 4,
                                    "Freya": 3,
                                    "Sarasa": 1,
                                    "Olivier": 13,
                                    "Lili": 2,
                                    "Alexia Midgar (Alexia)": 10
                                }
                            },
                            "eA6-3": {
                                "line_count": 48,
                                "word_count": 424,
                                "char_count": 2342,
                                "characters": {
                                    "Alexia Midgar (Alexia)": 9,
                                    "Alpha": 27,
                                    "Nonna": 3,
                                    "Eta": 1,
                                    "Victoria (No. 559)": 5,
                                    "Epsilon": 3
                                }
                            },
                            "eA7-3": {
                                "line_count": 53,
                                "word_count": 559,
                                "char_count": 2942,
                                "characters": {
                                    "Alexia Midgar (Alexia)": 5,
                                    "Beta": 7,
                                    "Olivier": 7,
                                    "Zeta": 4,
                                    "Alpha": 4,
                                    "Freya": 10,
                                    "Claire Kagenou (Claire)": 3,
                                    "Epsilon": 3,
                                    "Sarasa": 1,
                                    "Eta": 1,
                                    "Lili": 8
                                }
                            },
                            "eA8": {
                                "line_count": 47,
                                "word_count": 344,
                                "char_count": 1961,
                                "characters": {
                                    "Zeta": 3,
                                    "Alpha": 15,
                                    "Epsilon": 2,
                                    "Alexia Midgar (Alexia)": 4,
                                    "Claire Kagenou (Claire)": 1,
                                    "Victoria (No. 559)": 1,
                                    "Eta": 1,
                                    "Beta": 12,
                                    "Olivier": 3,
                                    "Sarasa": 2,
                                    "Lili": 1,
                                    "Freya": 2
                                }
                            },
                            "eA9": {
                                "line_count": 52,
                                "word_count": 413,
                                "char_count": 2341,
                                "characters": {
                                    "Eta": 1,
                                    "Alpha": 16,
                                    "Epsilon": 2,
                                    "Zeta": 4,
                                    "Lili": 5,
                                    "Freya": 7,
                                    "Nonna": 5,
                                    "Olivier": 3,
                                    "Sarasa": 1,
                                    "Yukime": 1,
                                    "Victoria (No. 559)": 1,
                                    "Gamma": 1,
                                    "Mysterious Man A": 1,
                                    "Mysterious Man B": 1,
                                    "Mysterious Man C": 1,
                                    "Mysterious Man D": 2
                                }
                            },
                            "eB1": {
                                "line_count": 163,
                                "word_count": 1469,
                                "char_count": 8305,
                                "characters": {
                                    "Beta": 32,
                                    "Beta (Fictional Shadow)": 4,
                                    "Sarasa": 11,
                                    "Freya": 43,
                                    "Zeta": 13,
                                    "Lili": 15,
                                    "Olivier": 9,
                                    "Claire Kagenou (Claire)": 16,
                                    "Villager A": 16,
                                    "Villager B": 2,
                                    "Villager C": 2
                                }
                            },
                            "eB2": {
                                "line_count": 64,
                                "word_count": 514,
                                "char_count": 2849,
                                "characters": {
                                    "Beta (Fictional Shadow)": 4,
                                    "Beta": 13,
                                    "Zeta": 8,
                                    "Freya": 10,
                                    "Lili": 7,
                                    "Olivier": 8,
                                    "Claire Kagenou (Claire)": 8,
                                    "Sarasa": 2,
                                    "Vampire": 4
                                }
                            },
                            "eB3": {
                                "line_count": 54,
                                "word_count": 391,
                                "char_count": 2199,
                                "characters": {
                                    "Freya": 3,
                                    "Zeta": 11,
                                    "Olivier": 10,
                                    "Beta": 13,
                                    "Beta (Fictional Shadow)": 2,
                                    "Claire Kagenou (Claire)": 4,
                                    "Lili": 3,
                                    "Sarasa": 3,
                                    "Alexia Midgar (Alexia)": 4,
                                    "Alpha": 1
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "es": {
        "stories": 25,
        "line_count": 11110,
        "word_count": 123541,
        "char_count": 687288,
        "characters": {
            "Alexia Midgar (Alexia)": 489,
            "Committee Member": 3,
            "Sherry Barnett (Sherry)": 99,
            "Committee Person": 5,
            "Po Tato (Po)": 19,
            "Skel Etal (Skel)": 36,
            "Cid Kagenou (Cid)": 1438,
            "Narrator": 527,
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
            "Gamma": 341,
            "Eta": 627,
            "Zeta": 950,
            "Alpha": 1221,
            "Delta": 625,
            "Beta": 657,
            "Nu": 207,
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
            "Epsilon": 738,
            "Alpha (Everyone (Alpha))": 4,
            "Beta (Everyone (Beta))": 4,
            "Gamma (Everyone (Gamma))": 4,
            "Delta (Everyone (Delta))": 4,
            "Epsilon (Everyone (Epsilon))": 4,
            "Zeta (Everyone (Zeta))": 4,
            "Eta (Everyone (Eta))": 4,
            "Beta (None (Beta))": 3,
            "Cid Kagenou (None (Cid Kagenou))": 5,
            "Beta (Beta & Epsilon (Beta))": 18,
            "Epsilon (Beta & Epsilon (Epsilon))": 18,
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
            "Lambda": 234,
            "Cid Kagenou (??? (Stylish Bandit Slayer))": 1,
            "Cid Kagenou (Shadow)": 83,
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
            "Aurora": 88,
            "Maximilian": 27,
            "Aurora (??? (Witch Claire))": 2,
            "Aurora (Witch Claire)": 12,
            "Omega": 48,
            "Chi": 50,
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
            "Elisabeth (3 People (Elisabeth))": 1,
            "Shinra": 79,
            "Tamaki": 52,
            "Benimaru": 74,
            "Shinra (Shinra & Tamaki (Shinra))": 2,
            "Tamaki (Shinra & Tamaki (Tamaki))": 2,
            "Woman A": 3,
            "Man A": 3,
            "Chuvi (??? (Chuvi))": 1,
            "Kanen (??? (Kanen))": 4,
            "Kanen": 50,
            "Cid Kagenou (Cid & Beta & Epsilon (Cid))": 1,
            "Beta (Cid & Beta & Epsilon (Beta))": 1,
            "Epsilon (Cid & Beta & Epsilon (Epsilon))": 1,
            "Chuvi": 12,
            "Cid Kagenou (Shadow&Benimaru (Shadow))": 1,
            "Benimaru (Shadow&Benimaru (Benimaru))": 1,
            "No. 559": 23,
            "Cid Kagenou (Cid & Delta & Zeta (Cid))": 1,
            "Delta (Cid & Delta & Zeta (Delta))": 1,
            "Zeta (Cid & Delta & Zeta (Zeta))": 1,
            "Delta (Delta & Zeta (Delta))": 2,
            "Zeta (Delta & Zeta (Zeta))": 2
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
                    "Narrator": 22,
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
                            "Narrator": 4
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
                            "Narrator": 2,
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
                            "Narrator": 4,
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
                            "Narrator": 4,
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
                            "Narrator": 8,
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
                    "Narrator": 3,
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
                            "Narrator": 1,
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
                            "Narrator": 2,
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
                    "Narrator": 8,
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
                            "Narrator": 3,
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
                            "Narrator": 1
                        }
                    },
                    "e4": {
                        "word_count": 690,
                        "char_count": 3788,
                        "line_count": 53,
                        "characters": {
                            "Epsilon": 22,
                            "Gamma": 16,
                            "Narrator": 1,
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
                            "Narrator": 1,
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
                            "Narrator": 2
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
                    "Narrator": 31,
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
                            "Narrator": 5,
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
                            "Narrator": 4,
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
                            "Narrator": 5,
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
                            "Narrator": 8,
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
                            "Narrator": 1,
                            "Rose Oriana (No.666)": 14,
                            "Nu": 13
                        }
                    },
                    "e6": {
                        "word_count": 274,
                        "char_count": 1461,
                        "line_count": 24,
                        "characters": {
                            "Narrator": 1,
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
                            "Narrator": 7,
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
                    "Narrator": 58,
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
                            "Narrator": 7,
                            "Classmate": 2,
                            "Zeta": 15
                        }
                    },
                    "e2": {
                        "word_count": 1190,
                        "char_count": 6569,
                        "line_count": 108,
                        "characters": {
                            "Narrator": 8,
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
                            "Narrator": 8,
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
                            "Narrator": 7,
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
                            "Narrator": 6,
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
                            "Narrator": 11,
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
                            "Narrator": 11,
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
                    "Narrator": 6,
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
                            "Narrator": 1,
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
                            "Narrator": 1
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
                            "Narrator": 1
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
                            "Narrator": 3
                        }
                    }
                }
            },
            "sulp": {
                "line_count": 525,
                "word_count": 5614,
                "char_count": 30889,
                "characters": {
                    "Narrator": 33,
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
                            "Narrator": 4,
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
                            "Narrator": 3,
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
                            "Narrator": 5,
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
                            "Narrator": 3,
                            "Beta (Beta & Epsilon (Beta))": 1,
                            "Epsilon (Beta & Epsilon (Epsilon))": 1
                        }
                    },
                    "e5": {
                        "word_count": 1127,
                        "char_count": 6148,
                        "line_count": 101,
                        "characters": {
                            "Narrator": 9,
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
                            "Narrator": 4,
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
                            "Narrator": 5,
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
                    "Narrator": 75,
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
                            "Narrator": 9,
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
                            "Narrator": 12,
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
                            "Narrator": 10,
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
                            "Narrator": 11,
                            "Eta": 46,
                            "Zeta": 47
                        }
                    },
                    "e5": {
                        "word_count": 1121,
                        "char_count": 6398,
                        "line_count": 94,
                        "characters": {
                            "Narrator": 8,
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
                            "Narrator": 11,
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
                            "Narrator": 14,
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
                    "Narrator": 43,
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
                            "Narrator": 9,
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
                            "Narrator": 6,
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
                            "Narrator": 2
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
                            "Narrator": 7
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
                            "Narrator": 11,
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
                            "Narrator": 3,
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
                            "Narrator": 5,
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
                    "Narrator": 61,
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
                            "Narrator": 15,
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
                            "Narrator": 6,
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
                            "Narrator": 6,
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
                            "Narrator": 7,
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
                            "Narrator": 3,
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
                            "Narrator": 7,
                            "Epsilon": 14
                        }
                    },
                    "e7": {
                        "word_count": 1149,
                        "char_count": 6343,
                        "line_count": 98,
                        "characters": {
                            "Narrator": 17,
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
                    "Narrator": 19,
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
                            "Narrator": 4,
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
                            "Narrator": 2,
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
                            "Narrator": 2
                        }
                    },
                    "e4": {
                        "word_count": 605,
                        "char_count": 3338,
                        "line_count": 52,
                        "characters": {
                            "Narrator": 6,
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
                            "Narrator": 2,
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
                            "Narrator": 2,
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
                            "Narrator": 1,
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
                    "Narrator": 69,
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
                            "Narrator": 8,
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
                            "Narrator": 6,
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
                            "Narrator": 15,
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
                            "Narrator": 9,
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
                            "Narrator": 6,
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
                            "Narrator": 12,
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
                            "Narrator": 13,
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
                    "Narrator": 71,
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
                            "Narrator": 9,
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
                            "Narrator": 10,
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
                            "Narrator": 17,
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
                            "Narrator": 7,
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
                            "Narrator": 8,
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
                            "Narrator": 13,
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
                            "Narrator": 7,
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
                    "Narrator": 10,
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
                            "Narrator": 3,
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
                            "Narrator": 1,
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
                            "Narrator": 3
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
                            "Narrator": 1
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
                            "Narrator": 2,
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
                    "Narrator": 5,
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
                            "Narrator": 1,
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
                            "Narrator": 1,
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
                            "Narrator": 1,
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
                            "Narrator": 2,
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
                    "Narrator": 3,
                    "Noblewoman": 12,
                    "Aurora": 2,
                    "Cid Kagenou (Cid)": 1,
                    "Claire Kagenou (??? (Claire Kagenou))": 1,
                    "Maximilian": 27,
                    "Aurora (??? (Witch Claire))": 2,
                    "Aurora (Witch Claire)": 12
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
                            "Narrator": 1,
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
                            "Narrator": 1,
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
                            "Aurora (??? (Witch Claire))": 2,
                            "Aurora (Witch Claire)": 5
                        }
                    },
                    "e7": {
                        "word_count": 446,
                        "char_count": 2503,
                        "line_count": 45,
                        "characters": {
                            "Maximilian": 2,
                            "Aurora (Witch Claire)": 7,
                            "Nu": 13,
                            "Claire Kagenou (Claire)": 22,
                            "Narrator": 1
                        }
                    }
                }
            },
            "bmsv": {
                "line_count": 438,
                "word_count": 4710,
                "char_count": 26728,
                "characters": {
                    "Narrator": 5,
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
                            "Narrator": 2,
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
                            "Narrator": 2
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
                            "Narrator": 1
                        }
                    }
                }
            },
            "tghms": {
                "line_count": 449,
                "word_count": 5006,
                "char_count": 27152,
                "characters": {
                    "Narrator": 3,
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
                            "Narrator": 2,
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
                            "Narrator": 1,
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
                    "Narrator": 1
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
                            "Narrator": 1
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
                    "Narrator": 1
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
                            "Narrator": 1
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
            },
            "bheif": {
                "line_count": 485,
                "word_count": 4774,
                "char_count": 27225,
                "characters": {
                    "Cid Kagenou (Cid)": 100,
                    "Zeta": 7,
                    "Eta": 8,
                    "Shinra": 79,
                    "Tamaki": 52,
                    "Benimaru": 74,
                    "Shinra (Shinra & Tamaki (Shinra))": 2,
                    "Tamaki (Shinra & Tamaki (Tamaki))": 2,
                    "Woman A": 3,
                    "Man A": 3,
                    "Chuvi (??? (Chuvi))": 1,
                    "Kanen (??? (Kanen))": 4,
                    "Kanen": 50,
                    "Alpha": 9,
                    "Beta": 33,
                    "Epsilon": 33,
                    "Cid Kagenou (Cid & Beta & Epsilon (Cid))": 1,
                    "Beta (Cid & Beta & Epsilon (Beta))": 1,
                    "Epsilon (Cid & Beta & Epsilon (Epsilon))": 1,
                    "Chuvi": 12,
                    "Beta (Beta & Epsilon (Beta))": 1,
                    "Epsilon (Beta & Epsilon (Epsilon))": 1,
                    "Cid Kagenou (Shadow)": 12,
                    "Cid Kagenou (Shadow&Benimaru (Shadow))": 1,
                    "Benimaru (Shadow&Benimaru (Benimaru))": 1
                },
                "episodes": {
                    "e1": {
                        "word_count": 756,
                        "char_count": 4382,
                        "line_count": 78,
                        "characters": {
                            "Cid Kagenou (Cid)": 9,
                            "Zeta": 2,
                            "Eta": 6,
                            "Shinra": 19,
                            "Tamaki": 11,
                            "Benimaru": 18,
                            "Shinra (Shinra & Tamaki (Shinra))": 1,
                            "Tamaki (Shinra & Tamaki (Tamaki))": 1,
                            "Woman A": 2,
                            "Man A": 2,
                            "Chuvi (??? (Chuvi))": 1,
                            "Kanen (??? (Kanen))": 2,
                            "Kanen": 5
                        }
                    },
                    "e2": {
                        "word_count": 1069,
                        "char_count": 6183,
                        "line_count": 83,
                        "characters": {
                            "Alpha": 9,
                            "Eta": 2,
                            "Cid Kagenou (Cid)": 21,
                            "Zeta": 5,
                            "Beta": 14,
                            "Epsilon": 9,
                            "Shinra": 10,
                            "Benimaru": 5,
                            "Tamaki": 5,
                            "Cid Kagenou (Cid & Beta & Epsilon (Cid))": 1,
                            "Beta (Cid & Beta & Epsilon (Beta))": 1,
                            "Epsilon (Cid & Beta & Epsilon (Epsilon))": 1,
                            "Kanen (??? (Kanen))": 2
                        }
                    },
                    "e3": {
                        "word_count": 711,
                        "char_count": 4022,
                        "line_count": 66,
                        "characters": {
                            "Beta": 6,
                            "Shinra": 6,
                            "Epsilon": 5,
                            "Tamaki": 11,
                            "Benimaru": 6,
                            "Cid Kagenou (Cid)": 14,
                            "Kanen": 13,
                            "Chuvi": 4,
                            "Shinra (Shinra & Tamaki (Shinra))": 1,
                            "Tamaki (Shinra & Tamaki (Tamaki))": 1
                        }
                    },
                    "e4": {
                        "word_count": 431,
                        "char_count": 2458,
                        "line_count": 57,
                        "characters": {
                            "Benimaru": 24,
                            "Cid Kagenou (Cid)": 17,
                            "Beta": 2,
                            "Epsilon": 3,
                            "Shinra": 5,
                            "Beta (Beta & Epsilon (Beta))": 1,
                            "Epsilon (Beta & Epsilon (Epsilon))": 1,
                            "Cid Kagenou (Shadow)": 3,
                            "Tamaki": 2
                        }
                    },
                    "e5": {
                        "word_count": 789,
                        "char_count": 4472,
                        "line_count": 82,
                        "characters": {
                            "Tamaki": 11,
                            "Benimaru": 6,
                            "Epsilon": 9,
                            "Beta": 6,
                            "Shinra": 13,
                            "Cid Kagenou (Cid)": 16,
                            "Kanen": 13,
                            "Chuvi": 8
                        }
                    },
                    "e6": {
                        "word_count": 451,
                        "char_count": 2494,
                        "line_count": 48,
                        "characters": {
                            "Tamaki": 6,
                            "Shinra": 8,
                            "Epsilon": 3,
                            "Beta": 1,
                            "Kanen": 12,
                            "Benimaru": 8,
                            "Cid Kagenou (Shadow)": 5,
                            "Cid Kagenou (Cid)": 4,
                            "Cid Kagenou (Shadow&Benimaru (Shadow))": 1,
                            "Benimaru (Shadow&Benimaru (Benimaru))": 1
                        }
                    },
                    "e7": {
                        "word_count": 567,
                        "char_count": 3214,
                        "line_count": 71,
                        "characters": {
                            "Kanen": 7,
                            "Shinra": 18,
                            "Benimaru": 7,
                            "Cid Kagenou (Shadow)": 4,
                            "Cid Kagenou (Cid)": 19,
                            "Tamaki": 6,
                            "Epsilon": 4,
                            "Beta": 4,
                            "Man A": 1,
                            "Woman A": 1
                        }
                    }
                }
            },
            "aystpm": {
                "line_count": 475,
                "word_count": 4955,
                "char_count": 27421,
                "characters": {
                    "Beta": 15,
                    "Alpha": 39,
                    "Gamma": 11,
                    "Delta": 110,
                    "Epsilon": 11,
                    "Zeta": 132,
                    "Eta": 5,
                    "No. 559": 23,
                    "Lambda": 7,
                    "Nu": 8,
                    "Cid Kagenou (Cid)": 97,
                    "Omega": 4,
                    "Beta (Beta & Epsilon (Beta))": 1,
                    "Epsilon (Beta & Epsilon (Epsilon))": 1,
                    "Cid Kagenou (Cid & Delta & Zeta (Cid))": 1,
                    "Delta (Cid & Delta & Zeta (Delta))": 1,
                    "Zeta (Cid & Delta & Zeta (Zeta))": 1,
                    "Cid Kagenou (Shadow)": 9,
                    "Delta (Delta & Zeta (Delta))": 2,
                    "Zeta (Delta & Zeta (Zeta))": 2
                },
                "episodes": {
                    "e1": {
                        "word_count": 647,
                        "char_count": 3653,
                        "line_count": 60,
                        "characters": {
                            "Beta": 7,
                            "Alpha": 21,
                            "Gamma": 7,
                            "Delta": 11,
                            "Epsilon": 2,
                            "Zeta": 10,
                            "Eta": 2
                        }
                    },
                    "e2": {
                        "word_count": 755,
                        "char_count": 4203,
                        "line_count": 78,
                        "characters": {
                            "Zeta": 34,
                            "Delta": 22,
                            "No. 559": 16,
                            "Lambda": 3,
                            "Nu": 3
                        }
                    },
                    "e3": {
                        "word_count": 660,
                        "char_count": 3525,
                        "line_count": 58,
                        "characters": {
                            "Zeta": 28,
                            "Delta": 30
                        }
                    },
                    "e4": {
                        "word_count": 1005,
                        "char_count": 5592,
                        "line_count": 88,
                        "characters": {
                            "Cid Kagenou (Cid)": 39,
                            "Alpha": 8,
                            "Eta": 3,
                            "Nu": 5,
                            "Beta": 8,
                            "Omega": 4,
                            "Epsilon": 9,
                            "Beta (Beta & Epsilon (Beta))": 1,
                            "Epsilon (Beta & Epsilon (Epsilon))": 1,
                            "No. 559": 7,
                            "Delta": 2,
                            "Zeta": 2
                        }
                    },
                    "e5": {
                        "word_count": 501,
                        "char_count": 2704,
                        "line_count": 56,
                        "characters": {
                            "Cid Kagenou (Cid)": 25,
                            "Delta": 14,
                            "Zeta": 17
                        }
                    },
                    "e6": {
                        "word_count": 835,
                        "char_count": 4586,
                        "line_count": 81,
                        "characters": {
                            "Cid Kagenou (Cid)": 29,
                            "Delta": 21,
                            "Zeta": 29,
                            "Cid Kagenou (Cid & Delta & Zeta (Cid))": 1,
                            "Delta (Cid & Delta & Zeta (Delta))": 1,
                            "Zeta (Cid & Delta & Zeta (Zeta))": 1,
                            "Cid Kagenou (Shadow)": 1
                        }
                    },
                    "e7": {
                        "word_count": 552,
                        "char_count": 3158,
                        "line_count": 54,
                        "characters": {
                            "Zeta": 12,
                            "Delta": 10,
                            "Cid Kagenou (Shadow)": 8,
                            "Lambda": 4,
                            "Alpha": 10,
                            "Gamma": 4,
                            "Cid Kagenou (Cid)": 4,
                            "Delta (Delta & Zeta (Delta))": 2,
                            "Zeta (Delta & Zeta (Zeta))": 2
                        }
                    }
                }
            },
            "fthasg": {
                "line_count": 443,
                "word_count": 4731,
                "char_count": 26163,
                "characters": {
                    "Epsilon": 188,
                    "Chi": 1,
                    "Omega": 1,
                    "Eta": 143,
                    "Zeta": 21,
                    "Delta": 16,
                    "Gamma": 26,
                    "Alpha": 11,
                    "Cid Kagenou (Cid)": 26,
                    "Beta": 10
                },
                "episodes": {
                    "e1": {
                        "word_count": 637,
                        "char_count": 3616,
                        "line_count": 61,
                        "characters": {
                            "Epsilon": 36,
                            "Chi": 1,
                            "Omega": 1,
                            "Eta": 23
                        }
                    },
                    "e2": {
                        "word_count": 671,
                        "char_count": 3793,
                        "line_count": 68,
                        "characters": {
                            "Epsilon": 25,
                            "Zeta": 9,
                            "Eta": 21,
                            "Delta": 6,
                            "Gamma": 7
                        }
                    },
                    "e3": {
                        "word_count": 628,
                        "char_count": 3406,
                        "line_count": 60,
                        "characters": {
                            "Epsilon": 20,
                            "Eta": 22,
                            "Zeta": 11,
                            "Delta": 7
                        }
                    },
                    "e4": {
                        "word_count": 772,
                        "char_count": 4245,
                        "line_count": 62,
                        "characters": {
                            "Eta": 28,
                            "Epsilon": 30,
                            "Alpha": 4
                        }
                    },
                    "e5": {
                        "word_count": 884,
                        "char_count": 4730,
                        "line_count": 84,
                        "characters": {
                            "Epsilon": 39,
                            "Cid Kagenou (Cid)": 26,
                            "Eta": 14,
                            "Beta": 5
                        }
                    },
                    "e6": {
                        "word_count": 546,
                        "char_count": 3027,
                        "line_count": 49,
                        "characters": {
                            "Epsilon": 10,
                            "Eta": 16,
                            "Beta": 4,
                            "Alpha": 7,
                            "Gamma": 12
                        }
                    },
                    "e7": {
                        "word_count": 593,
                        "char_count": 3346,
                        "line_count": 59,
                        "characters": {
                            "Gamma": 7,
                            "Epsilon": 28,
                            "Eta": 19,
                            "Delta": 3,
                            "Zeta": 1,
                            "Beta": 1
                        }
                    }
                }
            }
        }
    },
    "ssc": {
        "part_count": 3,
        "line_count": 11288,
        "word_count": 120133,
        "char_count": 686525,
        "characters": {
            "Alpha": 1370,
            "Narrator": 59,
            "Mysterious Captain": 26,
            "Mysterious Soldier A": 10,
            "Alpha (??? (Alpha))": 5,
            "Mysterious Soldier B": 4,
            "Delta": 556,
            "Eta": 645,
            "Mysterious Soldier C": 6,
            "Epsilon": 1039,
            "Mysterious Soldier D": 4,
            "Zeta": 1122,
            "Gamma": 1283,
            "Mysterious Soldier E": 6,
            "Beta": 1042,
            "Mysterious Soldiers": 2,
            "Cultist A": 8,
            "Cultist B": 5,
            "Cultist C": 4,
            "Cultist D": 1,
            "Cultist E": 1,
            "Cultist F": 3,
            "Lambda (Mound of Flesh (Lambda))": 1,
            "Lambda (Tawny Elf (Lambda))": 15,
            "Cid Kagenou (Cid)": 657,
            "Lambda": 384,
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
            "Victoria": 120,
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
            "Alpha (None (Alpha))": 22,
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
            "Annerose Nichtsehen (Annerose)": 215,
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
            "Chi": 136,
            "Omega": 142,
            "Malaks": 1,
            "Sergey Gorman (None (Sergey Gorman))": 32,
            "Gamma (Gamma & Epsilon (Gamma))": 1,
            "Epsilon (Gamma & Epsilon (Epsilon))": 1,
            "Olivier (??? (Olivier))": 12,
            "Bishop Drake (Bishop of Orum)": 10,
            "Bishop Drake": 15,
            "Gamma (None (Gamma))": 26,
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
            "Nu (93)": 22,
            "Beta (None (Beta))": 8,
            "Fan Passerby": 9,
            "Alpha (Alpha & Beta (Alpha))": 1,
            "Beta (Alpha & Beta (Beta))": 1,
            "Olivier": 10,
            "Garden Members": 3,
            "Nu (??? (No. 93))": 1,
            "Nu (No. 93)": 19,
            "Garden Member": 2,
            "Chi (Chi & Omega (Chi))": 8,
            "Omega (Chi & Omega (Omega))": 8,
            "Lambda (None (Lambda))": 1,
            "Iota (None (Iota))": 16,
            "Iota": 92,
            "Gamma (Gamma & Iota (Gamma))": 3,
            "Iota (Gamma & Iota (Iota))": 3,
            "Bandit?": 10,
            "Epsilon (Epsilon & Chi & Omega (Epsilon))": 1,
            "Chi (Epsilon & Chi & Omega (Chi))": 1,
            "Omega (Epsilon & Chi & Omega (Omega))": 1,
            "Villager A": 23,
            "Villager B": 17,
            "Villager C": 15,
            "Saurva": 7,
            "Villagers": 1,
            "Zeta (None (Zeta))": 15,
            "Archbishop Teinen": 4,
            "Audience": 1,
            "Announcer": 12,
            "Ichi Van Dasher (Ichi)": 2,
            "Goldy Gilded (??? (Goldy))": 1,
            "Goldy Gilded (Goldy)": 22,
            "Spectator A": 3,
            "Spectator B": 3,
            "Eta (Eta & Epsilon (Eta))": 1,
            "Epsilon (Eta & Epsilon (Epsilon))": 1,
            "Zeta (Zeta & 93 (Zeta))": 1,
            "Nu (Zeta & 93 (93))": 1,
            "Beta (Beta & ??? (Sigma) (Beta))": 1,
            "Sigma (Beta & ??? (Sigma) (Sigma))": 1,
            "Sigma": 133,
            "Orianan Paladin A": 2,
            "Orianan Paladin B": 2
        },
        "parts": {
            "p1": {
                "chapter_count": 15,
                "line_count": 4626,
                "word_count": 47753,
                "char_count": 270458,
                "characters": {
                    "Alpha": 764,
                    "Narrator": 39,
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
                            "Narrator": 8,
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
                                    "Narrator": 8,
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
                            "Narrator": 4,
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
                                    "Narrator": 2,
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
                                    "Narrator": 2,
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
                            "Narrator": 13,
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
                                    "Narrator": 8,
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
                                    "Narrator": 5
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
                            "Narrator": 4,
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
                                    "Narrator": 3,
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
                                    "Narrator": 1,
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
                            "Narrator": 1,
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
                                    "Narrator": 1,
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
                            "Narrator": 5,
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
                                    "Narrator": 5,
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
                            "Narrator": 4,
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
                                    "Narrator": 4
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
                    "Narrator": 12,
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
                            "Narrator": 2,
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
                                    "Narrator": 1
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
                                    "Narrator": 1
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
                            "Narrator": 10,
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
                                    "Narrator": 10
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
                "chapter_count": 8,
                "line_count": 2525,
                "word_count": 28006,
                "char_count": 158487,
                "characters": {
                    "Olivier (??? (Olivier))": 10,
                    "Alpha": 267,
                    "Beta": 216,
                    "Gamma": 284,
                    "Epsilon": 178,
                    "Zeta": 240,
                    "Delta": 50,
                    "Eta": 118,
                    "Alpha (Seven Shadows (Alpha))": 2,
                    "Beta (Seven Shadows (Beta))": 2,
                    "Gamma (Seven Shadows (Gamma))": 2,
                    "Delta (Seven Shadows (Delta))": 2,
                    "Epsilon (Seven Shadows (Epsilon))": 2,
                    "Zeta (Seven Shadows (Zeta))": 2,
                    "Eta (Seven Shadows (Eta))": 2,
                    "Lambda": 77,
                    "Omega": 134,
                    "Chi": 125,
                    "Nu (93)": 22,
                    "Cid Kagenou (Cid)": 139,
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
                    "Chi (Chi & Omega (Chi))": 8,
                    "Omega (Chi & Omega (Omega))": 8,
                    "Alpha (??? (Alpha))": 1,
                    "Lambda (None (Lambda))": 1,
                    "Iota (None (Iota))": 16,
                    "Iota": 92,
                    "Gamma (Gamma & Iota (Gamma))": 3,
                    "Iota (Gamma & Iota (Iota))": 3,
                    "Narrator": 8,
                    "Bandit?": 10,
                    "Cult Member": 28,
                    "Epsilon (Epsilon & Chi & Omega (Epsilon))": 1,
                    "Chi (Epsilon & Chi & Omega (Chi))": 1,
                    "Omega (Epsilon & Chi & Omega (Omega))": 1,
                    "Villager A": 23,
                    "Villager B": 17,
                    "Villager C": 15,
                    "Saurva": 7,
                    "Villagers": 1,
                    "Zeta (None (Zeta))": 15,
                    "Alpha (None (Alpha))": 10,
                    "Victoria": 7,
                    "Bishop Drake": 9,
                    "Annerose Nichtsehen (Annerose)": 115,
                    "Gamma (None (Gamma))": 5,
                    "Archbishop Teinen": 4,
                    "Audience": 1,
                    "Announcer": 12,
                    "Ichi Van Dasher (Ichi)": 2,
                    "Goldy Gilded (??? (Goldy))": 1,
                    "Goldy Gilded (Goldy)": 22,
                    "Spectator A": 3,
                    "Spectator B": 3,
                    "Eta (Eta & Epsilon (Eta))": 1,
                    "Epsilon (Eta & Epsilon (Epsilon))": 1,
                    "Zeta (Zeta & 93 (Zeta))": 1,
                    "Nu (Zeta & 93 (93))": 1,
                    "Beta (Beta & ??? (Sigma) (Beta))": 1,
                    "Sigma (Beta & ??? (Sigma) (Sigma))": 1,
                    "Sigma": 133,
                    "Orianan Paladin A": 2,
                    "Orianan Paladin B": 2
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
                            "Narrator": 2,
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
                                    "Narrator": 2,
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
                    },
                    "c3-5": {
                        "episode_count": 5,
                        "line_count": 369,
                        "word_count": 3466,
                        "char_count": 19034,
                        "characters": {
                            "Epsilon": 124,
                            "Chi": 62,
                            "Omega": 54,
                            "Eta": 37,
                            "Epsilon (Epsilon & Chi & Omega (Epsilon))": 1,
                            "Chi (Epsilon & Chi & Omega (Chi))": 1,
                            "Omega (Epsilon & Chi & Omega (Omega))": 1,
                            "Chi (Chi & Omega (Chi))": 4,
                            "Omega (Chi & Omega (Omega))": 4,
                            "Zeta": 13,
                            "Delta": 5,
                            "Gamma": 10,
                            "Beta": 14,
                            "Cid Kagenou (Cid)": 24,
                            "Alpha": 15
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 76,
                                "word_count": 774,
                                "char_count": 4484,
                                "characters": {
                                    "Epsilon": 28,
                                    "Chi": 20,
                                    "Omega": 21,
                                    "Eta": 6,
                                    "Epsilon (Epsilon & Chi & Omega (Epsilon))": 1,
                                    "Chi (Epsilon & Chi & Omega (Chi))": 1,
                                    "Omega (Epsilon & Chi & Omega (Omega))": 1
                                }
                            },
                            "e2": {
                                "line_count": 58,
                                "word_count": 453,
                                "char_count": 2616,
                                "characters": {
                                    "Eta": 22,
                                    "Chi (Chi & Omega (Chi))": 2,
                                    "Omega (Chi & Omega (Omega))": 2,
                                    "Epsilon": 19,
                                    "Omega": 6,
                                    "Chi": 9
                                }
                            },
                            "e3": {
                                "line_count": 64,
                                "word_count": 710,
                                "char_count": 3835,
                                "characters": {
                                    "Chi": 22,
                                    "Omega": 17,
                                    "Epsilon": 24,
                                    "Chi (Chi & Omega (Chi))": 1,
                                    "Omega (Chi & Omega (Omega))": 1
                                }
                            },
                            "e4": {
                                "line_count": 79,
                                "word_count": 746,
                                "char_count": 4005,
                                "characters": {
                                    "Zeta": 13,
                                    "Epsilon": 24,
                                    "Omega": 8,
                                    "Chi": 9,
                                    "Delta": 5,
                                    "Eta": 9,
                                    "Gamma": 10,
                                    "Chi (Chi & Omega (Chi))": 1,
                                    "Omega (Chi & Omega (Omega))": 1
                                }
                            },
                            "e5": {
                                "line_count": 86,
                                "word_count": 783,
                                "char_count": 4094,
                                "characters": {
                                    "Beta": 14,
                                    "Epsilon": 29,
                                    "Omega": 2,
                                    "Chi": 2,
                                    "Cid Kagenou (Cid)": 24,
                                    "Alpha": 15
                                }
                            }
                        }
                    },
                    "c3-6": {
                        "episode_count": 5,
                        "line_count": 285,
                        "word_count": 3529,
                        "char_count": 19276,
                        "characters": {
                            "Zeta": 170,
                            "Villager A": 23,
                            "Villager B": 17,
                            "Villager C": 15,
                            "Saurva": 7,
                            "Narrator": 2,
                            "Villagers": 1,
                            "Alpha": 9,
                            "Zeta (None (Zeta))": 15,
                            "Alpha (None (Alpha))": 10,
                            "Victoria": 7,
                            "Bishop Drake": 9
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 31,
                                "word_count": 447,
                                "char_count": 2452,
                                "characters": {
                                    "Zeta": 31
                                }
                            },
                            "e2": {
                                "line_count": 76,
                                "word_count": 940,
                                "char_count": 5040,
                                "characters": {
                                    "Villager A": 19,
                                    "Zeta": 43,
                                    "Villager B": 14
                                }
                            },
                            "e3": {
                                "line_count": 53,
                                "word_count": 523,
                                "char_count": 2929,
                                "characters": {
                                    "Zeta": 35,
                                    "Villager C": 11,
                                    "Saurva": 7
                                }
                            },
                            "e4": {
                                "line_count": 62,
                                "word_count": 714,
                                "char_count": 3791,
                                "characters": {
                                    "Villager A": 4,
                                    "Villager B": 3,
                                    "Villager C": 4,
                                    "Narrator": 2,
                                    "Zeta": 48,
                                    "Villagers": 1
                                }
                            },
                            "e5": {
                                "line_count": 63,
                                "word_count": 905,
                                "char_count": 5064,
                                "characters": {
                                    "Alpha": 9,
                                    "Zeta": 13,
                                    "Zeta (None (Zeta))": 15,
                                    "Alpha (None (Alpha))": 10,
                                    "Victoria": 7,
                                    "Bishop Drake": 9
                                }
                            }
                        }
                    },
                    "c3-7": {
                        "episode_count": 5,
                        "line_count": 327,
                        "word_count": 3586,
                        "char_count": 21209,
                        "characters": {
                            "Annerose Nichtsehen (Annerose)": 115,
                            "Gamma": 133,
                            "Gamma (None (Gamma))": 5,
                            "Archbishop Teinen": 4,
                            "Audience": 1,
                            "Announcer": 12,
                            "Ichi Van Dasher (Ichi)": 2,
                            "Narrator": 4,
                            "Goldy Gilded (??? (Goldy))": 1,
                            "Goldy Gilded (Goldy)": 22,
                            "Spectator A": 3,
                            "Spectator B": 3,
                            "Cid Kagenou (Cid)": 22
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 56,
                                "word_count": 627,
                                "char_count": 3716,
                                "characters": {
                                    "Annerose Nichtsehen (Annerose)": 27,
                                    "Gamma": 29
                                }
                            },
                            "e2": {
                                "line_count": 55,
                                "word_count": 728,
                                "char_count": 4257,
                                "characters": {
                                    "Gamma (None (Gamma))": 5,
                                    "Gamma": 28,
                                    "Annerose Nichtsehen (Annerose)": 22
                                }
                            },
                            "e3": {
                                "line_count": 63,
                                "word_count": 698,
                                "char_count": 4162,
                                "characters": {
                                    "Archbishop Teinen": 4,
                                    "Audience": 1,
                                    "Announcer": 2,
                                    "Gamma": 27,
                                    "Ichi Van Dasher (Ichi)": 2,
                                    "Narrator": 4,
                                    "Annerose Nichtsehen (Annerose)": 16,
                                    "Goldy Gilded (??? (Goldy))": 1,
                                    "Goldy Gilded (Goldy)": 6
                                }
                            },
                            "e4": {
                                "line_count": 82,
                                "word_count": 790,
                                "char_count": 4646,
                                "characters": {
                                    "Gamma": 22,
                                    "Annerose Nichtsehen (Annerose)": 37,
                                    "Announcer": 6,
                                    "Goldy Gilded (Goldy)": 13,
                                    "Spectator A": 2,
                                    "Spectator B": 2
                                }
                            },
                            "e5": {
                                "line_count": 71,
                                "word_count": 743,
                                "char_count": 4428,
                                "characters": {
                                    "Announcer": 4,
                                    "Annerose Nichtsehen (Annerose)": 13,
                                    "Spectator A": 1,
                                    "Spectator B": 1,
                                    "Gamma": 27,
                                    "Goldy Gilded (Goldy)": 3,
                                    "Cid Kagenou (Cid)": 22
                                }
                            }
                        }
                    },
                    "c3-8": {
                        "episode_count": 5,
                        "line_count": 331,
                        "word_count": 3338,
                        "char_count": 18697,
                        "characters": {
                            "Eta (Eta & Epsilon (Eta))": 1,
                            "Epsilon (Eta & Epsilon (Epsilon))": 1,
                            "Chi (Chi & Omega (Chi))": 3,
                            "Omega (Chi & Omega (Omega))": 3,
                            "Zeta (Zeta & 93 (Zeta))": 1,
                            "Nu (Zeta & 93 (93))": 1,
                            "Delta": 6,
                            "Lambda": 5,
                            "Beta (Beta & ??? (Sigma) (Beta))": 1,
                            "Sigma (Beta & ??? (Sigma) (Sigma))": 1,
                            "Alpha": 26,
                            "Eta": 2,
                            "Epsilon": 32,
                            "Zeta": 3,
                            "Nu (93)": 1,
                            "Beta": 85,
                            "Sigma": 133,
                            "Orianan Paladin A": 2,
                            "Orianan Paladin B": 2,
                            "Cid Kagenou (Cid)": 22
                        },
                        "episodes": {
                            "e1": {
                                "line_count": 59,
                                "word_count": 638,
                                "char_count": 3626,
                                "characters": {
                                    "Eta (Eta & Epsilon (Eta))": 1,
                                    "Epsilon (Eta & Epsilon (Epsilon))": 1,
                                    "Chi (Chi & Omega (Chi))": 3,
                                    "Omega (Chi & Omega (Omega))": 3,
                                    "Zeta (Zeta & 93 (Zeta))": 1,
                                    "Nu (Zeta & 93 (93))": 1,
                                    "Delta": 6,
                                    "Lambda": 5,
                                    "Beta (Beta & ??? (Sigma) (Beta))": 1,
                                    "Sigma (Beta & ??? (Sigma) (Sigma))": 1,
                                    "Alpha": 26,
                                    "Eta": 2,
                                    "Epsilon": 3,
                                    "Zeta": 3,
                                    "Nu (93)": 1,
                                    "Beta": 4,
                                    "Sigma": 3
                                }
                            },
                            "e2": {
                                "line_count": 61,
                                "word_count": 693,
                                "char_count": 3713,
                                "characters": {
                                    "Beta": 26,
                                    "Epsilon": 29,
                                    "Sigma": 6
                                }
                            },
                            "e3": {
                                "line_count": 71,
                                "word_count": 565,
                                "char_count": 3211,
                                "characters": {
                                    "Sigma": 34,
                                    "Beta": 37
                                }
                            },
                            "e4": {
                                "line_count": 65,
                                "word_count": 675,
                                "char_count": 3890,
                                "characters": {
                                    "Sigma": 61,
                                    "Beta": 4
                                }
                            },
                            "e5": {
                                "line_count": 69,
                                "word_count": 767,
                                "char_count": 4257,
                                "characters": {
                                    "Sigma": 29,
                                    "Orianan Paladin A": 2,
                                    "Orianan Paladin B": 2,
                                    "Beta": 14,
                                    "Cid Kagenou (Cid)": 22
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
            "total": 4171,
            "names": {
                "Alpha": 4118,
                "Alpha & Gamma (Alpha)": 1,
                "Alpha & Eta (Alpha)": 1,
                "Seven Shadows (Alpha)": 8,
                "Alpha & Zeta (Alpha)": 3,
                "Alpha & Nu (Alpha)": 1,
                "??? (Alpha)": 5,
                "None (Alpha)": 26,
                "Everyone (Alpha)": 5,
                "Alpha & Beta (Alpha)": 2,
                "Alpha & Freya (Alpha)": 1
            }
        },
        "Beta": {
            "total": 3246,
            "names": {
                "Beta": 2883,
                "Seven Shadows (Beta)": 14,
                "Beta & Epsilon (Beta)": 32,
                "Beta & Gamma (Beta)": 5,
                "Beta & Gamma & Epsilon (Beta)": 1,
                "Beta & Zeta (Beta)": 3,
                "Fictional Zenon": 9,
                "Fictional Shadow": 23,
                "Natsume Kafka": 212,
                "Alexia Midgar & Natsume Kafka (Natsume Kafka)": 1,
                "Everyone (Beta)": 6,
                "Beta & Delta & Zeta (Beta)": 1,
                "None (Beta)": 11,
                "Alpha & Beta (Beta)": 2,
                "Beta & ??? (Sigma) (Beta)": 1,
                "Beta & Eta (Beta)": 1,
                "Zeta & Beta (Beta)": 1,
                "Fictional Gamma": 11,
                "Fictional Delta": 2,
                "Fictional Olivier": 4,
                "Fictional Lili": 1,
                "Fictional Freya": 1,
                "Fictional Alpha": 1,
                "Fictional Epsilon": 1,
                "Fictional Eta": 1,
                "??? (Beta)": 3,
                "??? (Natsume)": 1,
                "Natsume": 13,
                "Cid & Beta & Epsilon (Beta)": 1
            }
        },
        "Gamma": {
            "total": 2420,
            "names": {
                "Gamma": 2256,
                "Seven Shadows (Gamma)": 14,
                "Alpha & Gamma (Gamma)": 1,
                "Beta & Gamma (Gamma)": 5,
                "Beta & Gamma & Epsilon (Gamma)": 1,
                "Luna": 104,
                "Everyone (Gamma)": 6,
                "None (Gamma)": 26,
                "??? (Gamma)": 2,
                "Gamma& Epsilon & Eta (Gamma)": 1,
                "Gamma & Epsilon (Gamma)": 1,
                "Gamma & Iota (Gamma)": 3
            }
        },
        "Delta": {
            "total": 1778,
            "names": {
                "Delta": 1741,
                "Seven Shadows (Delta)": 13,
                "Delta & Zeta (Delta)": 8,
                "Deltan": 1,
                "??? (Delta)": 7,
                "Everyone (Delta)": 6,
                "Beta & Delta & Zeta (Delta)": 1,
                "Cid & Delta & Zeta (Delta)": 1
            }
        },
        "Epsilon": {
            "total": 2525,
            "names": {
                "Epsilon": 2381,
                "Seven Shadows (Epsilon)": 14,
                "Beta & Epsilon (Epsilon)": 32,
                "Beta & Gamma & Epsilon (Epsilon)": 1,
                "Zeta & Epsilon (Epsilon)": 1,
                "Shiron": 83,
                "Everyone (Epsilon)": 6,
                "Gamma& Epsilon & Eta (Epsilon)": 1,
                "Gamma & Epsilon (Epsilon)": 1,
                "Epsilon & Chi & Omega (Epsilon)": 1,
                "Eta & Epsilon (Epsilon)": 1,
                "??? (Epsilon)": 2,
                "Cid & Beta & Epsilon (Epsilon)": 1
            }
        },
        "Zeta": {
            "total": 2598,
            "names": {
                "Zeta": 2468,
                "Seven Shadows (Zeta)": 14,
                "Delta & Zeta (Zeta)": 8,
                "Alpha & Zeta (Zeta)": 3,
                "Beta & Zeta (Zeta)": 3,
                "Zetan": 3,
                "Zeta & Epsilon (Zeta)": 1,
                "??? (Zeta)": 3,
                "Beta & Delta & Zeta (Zeta)": 1,
                "None (Zeta)": 15,
                "Zeta & 93 (Zeta)": 1,
                "Everyone (Zeta)": 5,
                "Zeta & Beta (Zeta)": 1,
                "Zeta & Eta (Zeta)": 1,
                "Cid & Delta & Zeta (Zeta)": 1,
                "Lilim": 70
            }
        },
        "Eta": {
            "total": 1589,
            "names": {
                "Eta": 1563,
                "Seven Shadows (Eta)": 10,
                "Alpha & Eta (Eta)": 1,
                "Everyone (Eta)": 6,
                "Gamma& Epsilon & Eta (Eta)": 1,
                "Eta & Epsilon (Eta)": 1,
                "Beta & Eta (Eta)": 1,
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
            "total": 547,
            "names": {
                "Nu": 492,
                "Alpha & Nu (Nu)": 1,
                "Characterised Alpha": 11,
                "93": 22,
                "??? (No. 93)": 1,
                "No. 93": 19,
                "Zeta & 93 (93)": 1
            }
        },
        "Chi": {
            "total": 728,
            "names": {
                "Chi": 224,
                "Chi & Omega (Chi)": 13,
                "Characterised Shadow": 8,
                "Characterised Eta": 3,
                "Characterised Cult Member": 3,
                "??? (Karen)": 13,
                "Karen": 180,
                "No. 111": 278,
                "No. 111 & No. 122 (No. 111)": 5,
                "Epsilon & Chi & Omega (Chi)": 1
            }
        },
        "Omega": {
            "total": 452,
            "names": {
                "Omega": 225,
                "Chi & Omega (Omega)": 13,
                "Characterised Zeta": 2,
                "Characterised Gamma": 2,
                "Possessed (Omega)": 4,
                "No. 122": 200,
                "No. 111 & No. 122 (No. 122)": 5,
                "Epsilon & Chi & Omega (Omega)": 1
            }
        },
        "Juggernaut": {
            "total": 114,
            "names": {
                "Juggernaut": 114
            }
        },
        "Subordinate": {
            "total": 2,
            "names": {
                "Subordinate": 2
            }
        },
        "Cid Kagenou": {
            "total": 11429,
            "names": {
                "Shadow": 1562,
                "Minoru Kageno": 126,
                "Stylish Ruffian Slayer": 38,
                "Cid Kagenou": 6449,
                "Mundane Mann": 219,
                "Stylish Bandit Slayer": 33,
                "John Smith": 592,
                "John Smith & Yukime (John Smith)": 1,
                "Cid": 2130,
                "???? (Shadow)": 3,
                "None (Cid Kagenou)": 12,
                "??? (Stylish Bandit Slayer)": 1,
                "??? (Cid Kagenou)": 4,
                "??? (Nuru)": 7,
                "Nuru": 160,
                "??? (Minoru Kageno)": 2,
                "Sunraku & Shadow (Shadow)": 1,
                "Cid & Sunraku (Cid)": 1,
                "3 People (Cid)": 1,
                "Cid & Beta & Epsilon (Cid)": 1,
                "Shadow&Benimaru (Shadow)": 1,
                "Cid & Delta & Zeta (Cid)": 1,
                "Suzuki Hope": 84
            }
        },
        "Akane Nishino": {
            "total": 319,
            "names": {
                "Akane Nishino": 319
            }
        },
        "Butler": {
            "total": 1,
            "names": {
                "Butler": 1
            }
        },
        "Classmate": {
            "total": 13,
            "names": {
                "Classmate": 13
            }
        },
        "Teacher": {
            "total": 25,
            "names": {
                "Teacher": 25
            }
        },
        "Student": {
            "total": 143,
            "names": {
                "Student": 143
            }
        },
        "Kidnapper A": {
            "total": 76,
            "names": {
                "Kidnapper A": 76
            }
        },
        "Kidnapper B": {
            "total": 52,
            "names": {
                "Kidnapper B": 52
            }
        },
        "News Reporter": {
            "total": 6,
            "names": {
                "News Reporter": 6
            }
        },
        "Mr. Kagenou": {
            "total": 18,
            "names": {
                "Mr. Kagenou": 18
            }
        },
        "Mrs. Kagenou": {
            "total": 14,
            "names": {
                "Mrs. Kagenou": 14
            }
        },
        "Bandit": {
            "total": 92,
            "names": {
                "Bandit": 92
            }
        },
        "Bandit Boss": {
            "total": 49,
            "names": {
                "Bandit Boss": 49
            }
        },
        "Claire Kagenou": {
            "total": 1292,
            "names": {
                "Claire Kagenou": 881,
                "Claire": 403,
                "??? (Claire Kagenou)": 4,
                "Alexia & Claire (Claire)": 4
            }
        },
        "Maid": {
            "total": 7,
            "names": {
                "Maid": 7
            }
        },
        "Grease": {
            "total": 102,
            "names": {
                "Grease": 102
            }
        },
        "Soldier": {
            "total": 76,
            "names": {
                "Soldier": 76
            }
        },
        "Girl": {
            "total": 3,
            "names": {
                "Girl": 3
            }
        },
        "Skel Etal": {
            "total": 536,
            "names": {
                "Skel Etal": 486,
                "Skel & Po (Skel)": 14,
                "Skel": 36
            }
        },
        "Po Tato": {
            "total": 311,
            "names": {
                "Po Tato": 277,
                "Skel & Po (Po)": 14,
                "Po": 20
            }
        },
        "Alexia Midgar": {
            "total": 2031,
            "names": {
                "Alexia Midgar": 1416,
                "Alexia Midgar & Natsume Kafka (Alexia Midgar)": 1,
                "Alexia": 605,
                "Rose & Alexia (Alexia)": 1,
                "????? (Alexia Midgar)": 1,
                "Shelly and Alexia (Alexia)": 1,
                "??? (Alexia Midgar)": 2,
                "Alexia & Claire (Alexia)": 4
            }
        },
        "Zenon Griffey": {
            "total": 175,
            "names": {
                "Zenon Griffey": 175
            }
        },
        "Scientist": {
            "total": 82,
            "names": {
                "Scientist": 82
            }
        },
        "Knight": {
            "total": 235,
            "names": {
                "Knight": 235
            }
        },
        "Iris Midgar": {
            "total": 749,
            "names": {
                "Iris Midgar": 591,
                "Iris": 158
            }
        },
        "Rose Oriana": {
            "total": 1306,
            "names": {
                "Rose Oriana": 803,
                "No. 666": 214,
                "Rose": 149,
                "Rose & Alexia (Rose)": 1,
                "No.666": 137,
                "No. 664 & No. 665 & No. 666 (No. 666)": 2
            }
        },
        "Civilian": {
            "total": 67,
            "names": {
                "Civilian": 67
            }
        },
        "Glen": {
            "total": 24,
            "names": {
                "Glen": 24
            }
        },
        "Marco Granger": {
            "total": 16,
            "names": {
                "Marco Granger": 16
            }
        },
        "Sherry Barnett": {
            "total": 434,
            "names": {
                "Sherry Barnett": 334,
                "Sherry": 99,
                "Shelly and Alexia (Sherry)": 1
            }
        },
        "Cult Member": {
            "total": 121,
            "names": {
                "Cult Member": 121
            }
        },
        "Lutheran Barnett": {
            "total": 227,
            "names": {
                "Lutheran Barnett": 199,
                "Sir Gaunt": 28
            }
        },
        "Rex": {
            "total": 92,
            "names": {
                "Rex": 92
            }
        },
        "Referee": {
            "total": 50,
            "names": {
                "Referee": 50
            }
        },
        "Bookie": {
            "total": 13,
            "names": {
                "Bookie": 13
            }
        },
        "Medic": {
            "total": 11,
            "names": {
                "Medic": 11
            }
        },
        "Garden Members": {
            "total": 8,
            "names": {
                "Garden Members": 8
            }
        },
        "Garden Member": {
            "total": 10,
            "names": {
                "Garden Member": 10
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
            "total": 324,
            "names": {
                "Jack Nelson": 324
            }
        },
        "Spectator": {
            "total": 57,
            "names": {
                "Spectator": 57
            }
        },
        "Announcer": {
            "total": 60,
            "names": {
                "Announcer": 60
            }
        },
        "Toppe Batterius": {
            "total": 2,
            "names": {
                "Toppe Batterius": 2
            }
        },
        "Aurora": {
            "total": 552,
            "names": {
                "Aurora": 480,
                "Witch Claire": 55,
                "Massive Mound of Magic": 14,
                "??? (Witch Claire)": 2,
                "3 People (Aurora)": 1
            }
        },
        "Rude": {
            "total": 35,
            "names": {
                "Rude": 35
            }
        },
        "Mitsugoshi Staff": {
            "total": 5,
            "names": {
                "Mitsugoshi Staff": 5
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
            "total": 447,
            "names": {
                "Annerose Nichtsehen": 228,
                "Annerose": 215,
                "None (Annerose)": 4
            }
        },
        "Quinton": {
            "total": 155,
            "names": {
                "Quinton": 154,
                "Goldy & Quinton (Quinton)": 1
            }
        },
        "Heckler": {
            "total": 17,
            "names": {
                "Heckler": 17
            }
        },
        "Clerk": {
            "total": 9,
            "names": {
                "Clerk": 9
            }
        },
        "Shop Staff": {
            "total": 23,
            "names": {
                "Shop Staff": 23
            }
        },
        "Goldy Gilded": {
            "total": 212,
            "names": {
                "Goldy Gilded": 189,
                "??? (Goldy)": 1,
                "Goldy": 22
            }
        },
        "Beatrix": {
            "total": 212,
            "names": {
                "Beatrix": 212
            }
        },
        "Perv Asshat": {
            "total": 374,
            "names": {
                "Perv Asshat": 374
            }
        },
        "Raphael Oriana": {
            "total": 57,
            "names": {
                "Raphael Oriana": 57
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
            "total": 26,
            "names": {
                "Duke's Second Son": 26
            }
        },
        "Captain's Daughter": {
            "total": 25,
            "names": {
                "Captain's Daughter": 25
            }
        },
        "Knight Captain": {
            "total": 5,
            "names": {
                "Knight Captain": 5
            }
        },
        "Klaus Midgar": {
            "total": 23,
            "names": {
                "Klaus Midgar": 23
            }
        },
        "Aristocrat": {
            "total": 75,
            "names": {
                "Aristocrat": 75
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
            "total": 267,
            "names": {
                "Mordred": 267
            }
        },
        "Sailor": {
            "total": 2,
            "names": {
                "Sailor": 2
            }
        },
        "Lambda": {
            "total": 702,
            "names": {
                "Lambda": 685,
                "Mound of Flesh (Lambda)": 1,
                "Tawny Elf (Lambda)": 15,
                "None (Lambda)": 1
            }
        },
        "No. 665": {
            "total": 55,
            "names": {
                "No. 665": 52,
                "No. 664 & No. 665 & No. 666 (No. 665)": 2,
                "No. 664 & No. 665 (No. 665)": 1
            }
        },
        "No. 664": {
            "total": 132,
            "names": {
                "No. 664": 129,
                "No. 664 & No. 665 & No. 666 (No. 664)": 2,
                "No. 664 & No. 665 (No. 664)": 1
            }
        },
        "White Demon": {
            "total": 75,
            "names": {
                "White Demon": 75
            }
        },
        "Merchant": {
            "total": 39,
            "names": {
                "Merchant": 39
            }
        },
        "Pickpocket": {
            "total": 5,
            "names": {
                "Pickpocket": 5
            }
        },
        "Mary": {
            "total": 231,
            "names": {
                "Mary": 231
            }
        },
        "Marie": {
            "total": 129,
            "names": {
                "Marie": 129
            }
        },
        "Coworker": {
            "total": 18,
            "names": {
                "Coworker": 18
            }
        },
        "Yukime": {
            "total": 384,
            "names": {
                "Yukime": 383,
                "John Smith & Yukime (Yukime)": 1
            }
        },
        "Natsu": {
            "total": 21,
            "names": {
                "Natsu": 19,
                "Natsu & Kana (Natsu)": 2
            }
        },
        "Kana": {
            "total": 10,
            "names": {
                "Kana": 8,
                "Natsu & Kana (Kana)": 2
            }
        },
        "Claudia": {
            "total": 20,
            "names": {
                "Claudia": 20
            }
        },
        "Vampire": {
            "total": 20,
            "names": {
                "Vampire": 20
            }
        },
        "Crimson": {
            "total": 40,
            "names": {
                "Crimson": 40
            }
        },
        "Elisabeth": {
            "total": 101,
            "names": {
                "Elisabeth": 100,
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
            "total": 220,
            "names": {
                "Gettan": 220
            }
        },
        "Garter Kikuchi": {
            "total": 63,
            "names": {
                "Garter Kikuchi": 63
            }
        },
        "Zabra": {
            "total": 22,
            "names": {
                "Zabra": 22
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
            "total": 49,
            "names": {
                "Leaf One": 49
            }
        },
        "Victoria": {
            "total": 328,
            "names": {
                "No. 559": 198,
                "??? (Victoria)": 10,
                "Victoria": 120
            }
        },
        "Kouadoi": {
            "total": 51,
            "names": {
                "Kouadoi": 51
            }
        },
        "Reina Oriana": {
            "total": 34,
            "names": {
                "Reina Oriana": 34
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
            "total": 145,
            "names": {
                "Margaret": 145
            }
        },
        "Kevin": {
            "total": 50,
            "names": {
                "Kevin": 50
            }
        },
        "Goldy": {
            "total": 1,
            "names": {
                "Goldy & Quinton (Goldy)": 1
            }
        },
        "Priest": {
            "total": 7,
            "names": {
                "Priest": 7
            }
        },
        "Knights": {
            "total": 1,
            "names": {
                "Knights": 1
            }
        },
        "Narrator": {
            "total": 9417,
            "names": {
                "Narrator": 9417
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
            "total": 25,
            "names": {
                "Bishop of Orum": 10,
                "Bishop Drake": 15
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
            "total": 167,
            "names": {
                "??? (Olivier)": 12,
                "Olivier": 148,
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
        "Villager A": {
            "total": 39,
            "names": {
                "Villager A": 39
            }
        },
        "Villager B": {
            "total": 19,
            "names": {
                "Villager B": 19
            }
        },
        "Villager C": {
            "total": 17,
            "names": {
                "Villager C": 17
            }
        },
        "Saurva": {
            "total": 7,
            "names": {
                "Saurva": 7
            }
        },
        "Villagers": {
            "total": 1,
            "names": {
                "Villagers": 1
            }
        },
        "Archbishop Teinen": {
            "total": 4,
            "names": {
                "Archbishop Teinen": 4
            }
        },
        "Audience": {
            "total": 2,
            "names": {
                "Audience": 2
            }
        },
        "Ichi Van Dasher": {
            "total": 2,
            "names": {
                "Ichi": 2
            }
        },
        "Spectator A": {
            "total": 9,
            "names": {
                "Spectator A": 9
            }
        },
        "Spectator B": {
            "total": 9,
            "names": {
                "Spectator B": 9
            }
        },
        "Sigma": {
            "total": 134,
            "names": {
                "Beta & ??? (Sigma) (Sigma)": 1,
                "Sigma": 133
            }
        },
        "Orianan Paladin A": {
            "total": 2,
            "names": {
                "Orianan Paladin A": 2
            }
        },
        "Orianan Paladin B": {
            "total": 2,
            "names": {
                "Orianan Paladin B": 2
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
            "total": 27,
            "names": {
                "Beta Look-alike": 3,
                "Duet": 24
            }
        },
        "Pente": {
            "total": 24,
            "names": {
                "Epsilon Look-alike": 2,
                "Pente": 22
            }
        },
        "Lili": {
            "total": 67,
            "names": {
                "Lili": 67
            }
        },
        "Freya": {
            "total": 135,
            "names": {
                "??? (Freya)": 1,
                "Freya": 133,
                "Alpha & Freya (Freya)": 1
            }
        },
        "Mysterious Man A": {
            "total": 5,
            "names": {
                "Mysterious Man A": 5
            }
        },
        "Mysterious Man B": {
            "total": 8,
            "names": {
                "Mysterious Man B": 8
            }
        },
        "Mysterious Man C": {
            "total": 5,
            "names": {
                "Mysterious Man C": 5
            }
        },
        "Mysterious Man D": {
            "total": 5,
            "names": {
                "Mysterious Man D": 5
            }
        },
        "Sarasa": {
            "total": 24,
            "names": {
                "Sarasa": 24
            }
        },
        "Rouge": {
            "total": 21,
            "names": {
                "Rouge": 21
            }
        },
        "Nonna": {
            "total": 46,
            "names": {
                "Nonna": 46
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
            "total": 5,
            "names": {
                "Ghoul": 5
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
        },
        "Shinra": {
            "total": 81,
            "names": {
                "Shinra": 79,
                "Shinra & Tamaki (Shinra)": 2
            }
        },
        "Tamaki": {
            "total": 54,
            "names": {
                "Tamaki": 52,
                "Shinra & Tamaki (Tamaki)": 2
            }
        },
        "Benimaru": {
            "total": 75,
            "names": {
                "Benimaru": 74,
                "Shadow&Benimaru (Benimaru)": 1
            }
        },
        "Woman A": {
            "total": 3,
            "names": {
                "Woman A": 3
            }
        },
        "Man A": {
            "total": 3,
            "names": {
                "Man A": 3
            }
        },
        "Chuvi": {
            "total": 13,
            "names": {
                "??? (Chuvi)": 1,
                "Chuvi": 12
            }
        },
        "Kanen": {
            "total": 54,
            "names": {
                "??? (Kanen)": 4,
                "Kanen": 50
            }
        },
        "No. 559": {
            "total": 23,
            "names": {
                "No. 559": 23
            }
        },
        "Supervisor": {
            "total": 2,
            "names": {
                "Supervisor": 2
            }
        },
        "Scarface": {
            "total": 14,
            "names": {
                "Scarface": 14
            }
        },
        "Akira Nishino": {
            "total": 52,
            "names": {
                "Akira Nishino": 52
            }
        },
        "Yuuka": {
            "total": 102,
            "names": {
                "Yuuka": 102
            }
        },
        "Yuudai Saejima": {
            "total": 44,
            "names": {
                "Yuudai Saejima": 44
            }
        },
        "Haitani": {
            "total": 37,
            "names": {
                "Haitani": 37
            }
        },
        "Fatty McSpecs": {
            "total": 6,
            "names": {
                "Fatty McSpecs": 6
            }
        },
        "Forum User": {
            "total": 32,
            "names": {
                "Forum User": 32
            }
        },
        "Spirit": {
            "total": 1,
            "names": {
                "Spirit": 1
            }
        },
        "Nina": {
            "total": 108,
            "names": {
                "Nina": 108
            }
        },
        "Jean": {
            "total": 15,
            "names": {
                "Jean": 15
            }
        },
        "Dark Spider": {
            "total": 17,
            "names": {
                "Dark Spider": 17
            }
        },
        "Willow": {
            "total": 99,
            "names": {
                "Willow": 99
            }
        },
        "Fenrir": {
            "total": 129,
            "names": {
                "Fenrir": 129
            }
        },
        "Issac": {
            "total": 66,
            "names": {
                "Issac": 66
            }
        },
        "Forbidden Stacks": {
            "total": 13,
            "names": {
                "Forbidden Stacks": 13
            }
        },
        "Adder": {
            "total": 10,
            "names": {
                "Adder": 10
            }
        },
        "Zeta's Father": {
            "total": 32,
            "names": {
                "Zeta's Father": 32
            }
        },
        "Zeta's Mother": {
            "total": 20,
            "names": {
                "Zeta's Mother": 20
            }
        },
        "Chief": {
            "total": 17,
            "names": {
                "Chief": 17
            }
        },
        "Petos": {
            "total": 54,
            "names": {
                "Petos": 54
            }
        },
        "Suzuki Hope": {
            "total": 4,
            "names": {
                "Suzuki Hope": 4
            }
        },
        "Christina Hope": {
            "total": 82,
            "names": {
                "Christina Hope": 82
            }
        },
        "Eliza Dakuaikan": {
            "total": 28,
            "names": {
                "Eliza Dakuaikan": 28
            }
        }
    }
}

let dropdowns = {
    "anime": {
        "mainChecked": false,
        "filter": "",
        "openSeasons": {},
        "seasonsChecked": {
            "Season 1": {
                "s1e1": {
                    "title": "1 | The Hated Classmate",
                    "checked": false
                },
                "s1e2": {
                    "title": "2 | Shadow Garden is Born",
                    "checked": false
                },
                "s1e3": {
                    "title": "3 | Fencer Ordinaire",
                    "checked": false
                },
                "s1e4": {
                    "title": "4 | Sadism's Rewards",
                    "checked": false
                },
                "s1e5": {
                    "title": "5 | I Am...",
                    "checked": false
                },
                "s1e6": {
                    "title": "6 | Pretenders",
                    "checked": false
                },
                "s1e7": {
                    "title": "7 | A Fencing Tournament of Intrigue & Bloodshed",
                    "checked": false
                },
                "s1e8": {
                    "title": "8 | Dark Knight Academy Under Attack",
                    "checked": false
                },
                "s1e9": {
                    "title": "9 | The End of a Lie",
                    "checked": false
                },
                "s1e10": {
                    "title": "10 | The Sacred Land, City of Deception",
                    "checked": false
                },
                "s1e11": {
                    "title": "11 | The Goddess's Trial",
                    "checked": false
                },
                "s1e12": {
                    "title": "12 | The Truth Within the Memories",
                    "checked": false
                },
                "s1e13": {
                    "title": "13 | A Bloody Showdown as an Offering to Annihilation",
                    "checked": false
                },
                "s1e14": {
                    "title": "14 | Your Lie, Your Wish",
                    "checked": false
                },
                "s1e15": {
                    "title": "15 | The Strongest Weakest Man",
                    "checked": false
                },
                "s1e16": {
                    "title": "16 | Unseen Intentions",
                    "checked": false
                },
                "s1e17": {
                    "title": "17 | Moonlight That Pierces the Darkness",
                    "checked": false
                },
                "s1e18": {
                    "title": "18 | Betting on a Moment",
                    "checked": false
                },
                "s1e19": {
                    "title": "19 | Dancing Puppet",
                    "checked": false
                },
                "s1e20": {
                    "title": "20 | Advent of the Demon",
                    "checked": false
                },
                "checked": false
            },
            "Season 2": {
                "s2e1": {
                    "title": "1 | The Lawless City",
                    "checked": false
                },
                "s2e2": {
                    "title": "2 | The Haven",
                    "checked": false
                },
                "s2e3": {
                    "title": "3 | The Hour Of Awakening",
                    "checked": false
                },
                "s2e4": {
                    "title": "4 | Mask of Falsehood",
                    "checked": false
                },
                "s2e5": {
                    "title": "5 | He Who Pulls the Strings",
                    "checked": false
                },
                "s2e6": {
                    "title": "6 | John Smith",
                    "checked": false
                },
                "s2e7": {
                    "title": "7 | Something Precious",
                    "checked": false
                },
                "s2e8": {
                    "title": "8 | Tears of the Dragon",
                    "checked": false
                },
                "s2e9": {
                    "title": "9 | The Key",
                    "checked": false
                },
                "s2e10": {
                    "title": "10 | The Caged Bird",
                    "checked": false
                },
                "s2e11": {
                    "title": "11 | Determination",
                    "checked": false
                },
                "s2e12": {
                    "title": "12 | Highest",
                    "checked": false
                },
                "checked": false
            },
            "Kage-Jitsu!": {
                "s101e1": {
                    "title": "1 | The Seven Shadows want their operation to succeed!",
                    "checked": false
                },
                "s101e2": {
                    "title": "2 | The Seven Shadows want to finish up an amazing war chronicle!",
                    "checked": false
                },
                "s101e3": {
                    "title": "3 | The Seven Shadows want to make delicious chocolate!",
                    "checked": false
                },
                "s101e4": {
                    "title": "4 | The Seven Shadows want to procure the legendary coffee!",
                    "checked": false
                },
                "s101e5": {
                    "title": "5 | The Seven Shadows want to create an Artifact!",
                    "checked": false
                },
                "s101e6": {
                    "title": "6 | The Seven Shadows want to recommend cute underwear!",
                    "checked": false
                },
                "s101e7": {
                    "title": "7 | The Seven Shadows want to select cute underwear!",
                    "checked": false
                },
                "s101e8": {
                    "title": "8 | The Seven Shadows want to bathe in the finest hot spa!",
                    "checked": false
                },
                "s101e9": {
                    "title": "9 | The Seven Shadows want to get along together!",
                    "checked": false
                },
                "s101e10": {
                    "title": "10 | The Seven Shadows want to gain awesome muscles!",
                    "checked": false
                },
                "s101e11": {
                    "title": "11 | The Seven Shadows want to understand what \"Bubble\" means!",
                    "checked": false
                },
                "s101e12": {
                    "title": "12 | The Seven Shadows want to create a new taste!",
                    "checked": false
                },
                "s101e13": {
                    "title": "13 | The Seven Shadows want to see friendliness being displayed!",
                    "checked": false
                },
                "s101e14": {
                    "title": "14 | The Seven Shadows want to receive words of praise!",
                    "checked": false
                },
                "s101e15": {
                    "title": "15 | The Seven Shadows want to enjoy pleasant music!",
                    "checked": false
                },
                "s101e16": {
                    "title": "16 | The Seven Shadows want to put on amazing underwear!",
                    "checked": false
                },
                "s101e17": {
                    "title": "17 | The Seven Shadows want to continue this operation!",
                    "checked": false
                },
                "checked": false
            },
            "Kage-Jitsu! 2nd": {
                "s102e1": {
                    "title": "1 | The Seven Shadows want to improve their branding!",
                    "checked": false
                },
                "s102e2": {
                    "title": "2 | The Seven Shadows wants to develop cute clothes!",
                    "checked": false
                },
                "s102e3": {
                    "title": "3 | The Seven Shadows want to create a trend!",
                    "checked": false
                },
                "s102e4": {
                    "title": "4 | The Seven Shadows want to make awesome banknotes!",
                    "checked": false
                },
                "s102e5": {
                    "title": "5 | The Seven Shadows want to be praised for their success!",
                    "checked": false
                },
                "s102e6": {
                    "title": "6 | The Seven Shadows want to hunt in the Lawless City!",
                    "checked": false
                },
                "s102e7": {
                    "title": "7 | The Seven Shadows want to follow the Lord they believe in!",
                    "checked": false
                },
                "s102e8": {
                    "title": "8 | The Seven Shadows want to blather on once in a while!",
                    "checked": false
                },
                "s102e9": {
                    "title": "9 | The Seven Shadows want to be seen as a bit smarter!",
                    "checked": false
                },
                "s102e10": {
                    "title": "10 | The Seven Shadows want to get more familiar with music!",
                    "checked": false
                },
                "s102e11": {
                    "title": "11 | The Seven Shadows want to show off their growth!",
                    "checked": false
                },
                "s102e12": {
                    "title": "12 | The Seven Shadows won't be shaken no matter what!",
                    "checked": false
                },
                "checked": false
            }
        },
        "episodeFilters": {}
    },
    "mog": {
        "mogMainChecked": false,
        "filter": "",
        "openParts": {},
        "categoryFilters": {},
        "sectionFilters": {},
        "partsChecked": {
            "Seven Shadows Chronicles": {
                "Part 1 | Rise of Garden": {
                    "1-1 | Shadow Garden, Mobilize!": {
                        "e1": {
                            "checked": false,
                            "title": "Prelude"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Garden Policy"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Shadow Garden Covert Op"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Possessed Search"
                        },
                        "e5": {
                            "checked": false,
                            "title": "After the Rescue"
                        },
                        "checked": false
                    },
                    "1-2 | Ancient Dragon of Alexandria": {
                        "e1": {
                            "checked": false,
                            "title": "The Lost City"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Abyss Woods"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Tale of Ruin"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Shadow's Sword"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Future Unlocked"
                        },
                        "checked": false
                    },
                    "1-3 | Have Mercy! Eta's Protocol": {
                        "e1": {
                            "checked": false,
                            "title": "Eta's Scheme"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Defense System"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Magic Gear"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Try, Try Again"
                        },
                        "e5": {
                            "checked": false,
                            "title": "The Gear's Value"
                        },
                        "checked": false
                    },
                    "1-4 | Behold! Tuna Chaos": {
                        "e1": {
                            "checked": false,
                            "title": "Day Off Together"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Going Fishing"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Tasty Tuna Sammy"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Victory Formula"
                        },
                        "e5": {
                            "checked": false,
                            "title": "A King is Born"
                        },
                        "checked": false
                    },
                    "1-5 | Here Comes Trouble": {
                        "e1": {
                            "checked": false,
                            "title": "News Beginnings"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Open the Door"
                        },
                        "e3": {
                            "checked": false,
                            "title": "N. Kafka is Born"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Mystery Paladin"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Point Blank"
                        },
                        "checked": false
                    },
                    "1-6 | Intense! Unstoppable Alpha": {
                        "e1": {
                            "checked": false,
                            "title": "Poking the Bear"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Re-Infiltration"
                        },
                        "e3": {
                            "checked": false,
                            "title": "BBQ Provocation"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Merciless Probe"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Grace Thy Blade"
                        },
                        "checked": false
                    },
                    "1-7 | Brutal! Delta's Night Hunt": {
                        "e1": {
                            "checked": false,
                            "title": "Mountaineering"
                        },
                        "e2": {
                            "checked": false,
                            "title": "As Cats and Dogs"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Begin the Hunt"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Brutal Diplomacy"
                        },
                        "e5": {
                            "checked": false,
                            "title": "My Fangs Rejoice"
                        },
                        "checked": false
                    },
                    "1-8 | She is Beauty, She is Grace!": {
                        "e1": {
                            "checked": false,
                            "title": "Inspired by Ire"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Presentation Row"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Shadow Power!"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Epsilon's Justice"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Pianist Shiron"
                        },
                        "checked": false
                    },
                    "1-9 | Watch Out, Gamma!": {
                        "e1": {
                            "checked": false,
                            "title": "Morning Shopping"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Luna's Past"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Luna: The Truth"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Gamma Capriccio"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Shadow World Foe"
                        },
                        "checked": false
                    },
                    "1-10 | Mitsugoshi, Ltd. is Open!": {
                        "e1": {
                            "checked": false,
                            "title": "Info Wars Begin"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Plot at A-Okay Co."
                        },
                        "e3": {
                            "checked": false,
                            "title": "Deception Op"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Mitsugoshi Credo"
                        },
                        "e5": {
                            "checked": false,
                            "title": "No Shadows Left"
                        },
                        "checked": false
                    },
                    "1-11 | Deal! Arranged Booking": {
                        "e1": {
                            "checked": false,
                            "title": "Beta Reminisces"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Harsh Happenings"
                        },
                        "e3": {
                            "checked": false,
                            "title": "2 Birds 1 Stone"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Sponsor's Intent"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Ebony Swirl"
                        },
                        "checked": false
                    },
                    "1-12 | Natsume & Shiron Hang Out!": {
                        "e1": {
                            "checked": false,
                            "title": "City-State Duo"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Fleeting Vacance"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Jugang Ruins"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Beta—Behind You!"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Great Collapse"
                        },
                        "checked": false
                    },
                    "1-13 | Visions... Zeta and the Prophet": {
                        "e1": {
                            "checked": false,
                            "title": "Spy Request"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Saintly Prayer"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Secret Cathedral"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Wonky Background"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Victoria—Prophet"
                        },
                        "checked": false
                    },
                    "1-14 | The Garden on the Eve of Battle!": {
                        "e1": {
                            "checked": false,
                            "title": "Can You Lift?"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Research & Hair"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Garden's Enemy"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Cherish Shadow"
                        },
                        "e5": {
                            "checked": false,
                            "title": "To the Prelude"
                        },
                        "checked": false
                    },
                    "1 Final | Final Battle! Templar Fanatics": {
                        "e1": {
                            "checked": false,
                            "title": "Battlefront: Part 1"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Battlefront: Part 2"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Battlefront: Part 3"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Reunion in Flame"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Prelude to a New Battle"
                        },
                        "checked": false
                    },
                    "checked": false
                },
                "Part 2 | Sturm of Velgalta": {
                    "2-1 | Operation: Rescue & Recover": {
                        "e1": {
                            "checked": false,
                            "title": "Zeta's Departure"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Lurk in Darkness, Hunt Down Shadows"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Possessed Heiress"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Nicoletta Marquez"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Opeartion: Rescue"
                        },
                        "checked": false
                    },
                    "2-2 | A Brilliant Mission!": {
                        "e1": {
                            "checked": false,
                            "title": "Slow and Slay"
                        },
                        "e2": {
                            "checked": false,
                            "title": "The Weakest Link"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Pitfall Experiments"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Prophetess' Doubt"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Destined Numbers"
                        },
                        "checked": false
                    },
                    "2-3 | Investigation! In Search of Oil": {
                        "e1": {
                            "checked": false,
                            "title": "Buried Black Gold"
                        },
                        "e2": {
                            "checked": false,
                            "title": "The Land of Madlid"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Nyle River Trouble"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Malak the Malevolent"
                        },
                        "e5": {
                            "checked": false,
                            "title": "The Perfect Base"
                        },
                        "checked": false
                    },
                    "2-4 | Possessed Cult Leader": {
                        "e1": {
                            "checked": false,
                            "title": "Keep Investigating"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Two \"Seven Blades\""
                        },
                        "e3": {
                            "checked": false,
                            "title": "Confronting Sergey"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Not Even a Scratch"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Glorious Escape"
                        },
                        "checked": false
                    },
                    "2-5 |  Cult Secrets Revealed!": {
                        "e1": {
                            "checked": false,
                            "title": "Possessed Lady Karen"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Two Ruthless Choices"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Cult Secrets Unveiled"
                        },
                        "e4": {
                            "checked": false,
                            "title": "To Know Thyself"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Loss and Rebirth"
                        },
                        "checked": false
                    },
                    "2-6 | The Garden Heads North": {
                        "e1": {
                            "checked": false,
                            "title": "Mysterious \"Tears\""
                        },
                        "e2": {
                            "checked": false,
                            "title": "Countering Regeneration"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Altered History"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Vengeance is Mine"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Journey to the North"
                        },
                        "checked": false
                    },
                    "2-7 | Blood Pact! Unlikely Pair": {
                        "e1": {
                            "checked": false,
                            "title": "Secret Villa Seizure"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Secret Fund in Laugus"
                        },
                        "e3": {
                            "checked": false,
                            "title": "RIP Mundane Man"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Authorized Savagery"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Without Loyalties"
                        },
                        "checked": false
                    },
                    "2-8 | Seven Blades Swordswoman": {
                        "e1": {
                            "checked": false,
                            "title": "Her Name is Annerose"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Naive Swordswoman"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Luna & Annerose"
                        },
                        "e4": {
                            "checked": false,
                            "title": "A Knight's Honor"
                        },
                        "e5": {
                            "checked": false,
                            "title": "What is Passed Down"
                        },
                        "checked": false
                    },
                    "2-9 | The Ones We Protect": {
                        "e1": {
                            "checked": false,
                            "title": "Fallout"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Painted Lies"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Reason to Fight"
                        },
                        "e4": {
                            "checked": false,
                            "title": "The Ones We Protect"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Embarkment"
                        },
                        "checked": false
                    },
                    "2-10 | Duel! Defeat Malak!": {
                        "e1": {
                            "checked": false,
                            "title": "Path of the Dragon"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Evolutionary Dead-End"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Muscles Are Stored"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Break Apart!"
                        },
                        "e5": {
                            "checked": false,
                            "title": "White Diamond"
                        },
                        "checked": false
                    },
                    "2-11 | Faith and Conviction": {
                        "e1": {
                            "checked": false,
                            "title": "People in the Stands"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Shadow Actress"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Trust's Companion"
                        },
                        "e4": {
                            "checked": false,
                            "title": "A Saint Gone Mad"
                        },
                        "e5": {
                            "checked": false,
                            "title": "False Oracles"
                        },
                        "checked": false
                    },
                    "2-12 | Evil Ambition's End": {
                        "e1": {
                            "checked": false,
                            "title": "The First Child"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Numbers Advantage"
                        },
                        "e3": {
                            "checked": false,
                            "title": "\"He\" is Here"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Dragon Awakes"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Summit of Strength"
                        },
                        "checked": false
                    },
                    "2-13 | Hero...... Lured by Illusions": {
                        "e1": {
                            "checked": false,
                            "title": "A New Journey"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Sergey's Hideout"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Artificial Dragons"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Ambition's End"
                        },
                        "e5": {
                            "checked": false,
                            "title": "A Mysterious Elf"
                        },
                        "checked": false
                    },
                    "checked": false
                },
                "Part 3 | Secret of Sacra": {
                    "3-1 | Shadow Garden Revamp": {
                        "e1": {
                            "checked": false,
                            "title": "A Bitter Retreat"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Reorganizing"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Girls Reshuffled"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Lambda's Favorite"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Take No One Lightly"
                        },
                        "checked": false
                    },
                    "3-2 | The Hero Revealed!": {
                        "e1": {
                            "checked": false,
                            "title": "Secret of the Heroes"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Church and Heroes"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Truth Amidst Lies"
                        },
                        "e4": {
                            "checked": false,
                            "title": "The Lost Tribe"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Olivier's Face"
                        },
                        "checked": false
                    },
                    "3-3 | Alexandria Rebellion": {
                        "e1": {
                            "checked": false,
                            "title": "The Situation Begins"
                        },
                        "e2": {
                            "checked": false,
                            "title": "I Won't Hurt You..."
                        },
                        "e3": {
                            "checked": false,
                            "title": "Override Experiment"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Outcome of the Duel"
                        },
                        "e5": {
                            "checked": false,
                            "title": "End of Scenario"
                        },
                        "checked": false
                    },
                    "3-4 | Influencers Ahoy!": {
                        "e1": {
                            "checked": false,
                            "title": "A Bodacious Debut"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Problematic Property"
                        },
                        "e3": {
                            "checked": false,
                            "title": "An Aristocratic List"
                        },
                        "e4": {
                            "checked": false,
                            "title": "A Thief of the Cult"
                        },
                        "e5": {
                            "checked": false,
                            "title": "A Manor House Reborn"
                        },
                        "checked": false
                    },
                    "3-5 | Snaps of the Seven": {
                        "e1": {
                            "checked": false,
                            "title": "Going Nowhere"
                        },
                        "e2": {
                            "checked": false,
                            "title": "The Rolapoid Mk. 1"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Pictures of Us?!"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Check it!"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Memories in Photos"
                        },
                        "checked": false
                    },
                    "3-6 | Beast Gods & Fake Legends": {
                        "e1": {
                            "checked": false,
                            "title": "A Hero's Traces"
                        },
                        "e2": {
                            "checked": false,
                            "title": "The Lakshmi Clan"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Saurva the Beast God"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Grave-robbing"
                        },
                        "e5": {
                            "checked": false,
                            "title": "A Hero's Confession"
                        },
                        "checked": false
                    },
                    "3-7 | Wandering Warrior": {
                        "e1": {
                            "checked": false,
                            "title": "Former Seven Blades"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Waters of Lindwurm"
                        },
                        "e3": {
                            "checked": false,
                            "title": "The Goddess' Trial"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Gold Dragon Showdown"
                        },
                        "e5": {
                            "checked": false,
                            "title": "The Victorious Myth"
                        },
                        "checked": false
                    },
                    "3-8 | Shadow Ninja Girl": {
                        "e1": {
                            "checked": false,
                            "title": "Wide-range Investigation"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Cool Ninja Girl"
                        },
                        "e3": {
                            "checked": false,
                            "title": "Tunnels of Midgar"
                        },
                        "e4": {
                            "checked": false,
                            "title": "Hardcore Fan"
                        },
                        "e5": {
                            "checked": false,
                            "title": "Garden Ninjustu"
                        },
                        "checked": false
                    },
                    "checked": false
                },
                "checked": false
            },
            "Event Stories": {
                "Holiday Rhapsody": {
                    "e1": {
                        "checked": false,
                        "title": "Holiday Rhapsody Ep.1"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Holiday Rhapsody Ep.2"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Holiday Rhapsody Ep.3"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Holiday Rhapsody Ep.4"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Holiday Rhapsody Ep.5"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Holiday Rhapsody Ep.6"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Holiday Rhapsody Ep.7"
                    },
                    "checked": false
                },
                "Fantastic! The Great Ize-athelon!": {
                    "e1": {
                        "checked": false,
                        "title": "Fantastic! The Great Ize-athelon! Ep.1"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Fantastic! The Great Ize-athelon! Ep.2"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Fantastic! The Great Ize-athelon! Ep.3"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Fantastic! The Great Ize-athelon! Ep.4"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Fantastic! The Great Ize-athelon! Ep.5"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Fantastic! The Great Ize-athelon! Ep.6"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Fantastic! The Great Ize-athelon! Ep.7"
                    },
                    "checked": false
                },
                "Natural vs. Artificial: Chocolate Showdown!": {
                    "e1": {
                        "checked": false,
                        "title": "Natural vs. Artificial: Chocolate Showdown!"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Natural vs. Artificial: Chocolate Showdown!"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Natural vs. Artificial: Chocolate Showdown!"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Natural vs. Artificial: Chocolate Showdown!"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Natural vs. Artificial: Chocolate Showdown!"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Natural vs. Artificial: Chocolate Showdown!"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Natural vs. Artificial: Chocolate Showdown!"
                    },
                    "checked": false
                },
                "Rose of Garden": {
                    "e1": {
                        "checked": false,
                        "title": "Rose of Garden"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Rose of Garden"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Rose of Garden"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Rose of Garden"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Rose of Garden"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Rose of Garden"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Rose of Garden"
                    },
                    "checked": false
                },
                "HIGHEST DREAM": {
                    "e1": {
                        "checked": false,
                        "title": "HIGHEST DREAM"
                    },
                    "e2": {
                        "checked": false,
                        "title": "HIGHEST DREAM"
                    },
                    "e3": {
                        "checked": false,
                        "title": "HIGHEST DREAM"
                    },
                    "e4": {
                        "checked": false,
                        "title": "HIGHEST DREAM"
                    },
                    "e5": {
                        "checked": false,
                        "title": "HIGHEST DREAM"
                    },
                    "e6": {
                        "checked": false,
                        "title": "HIGHEST DREAM"
                    },
                    "e7": {
                        "checked": false,
                        "title": "HIGHEST DREAM"
                    },
                    "checked": false
                },
                "Clever & Lucky Bunny Girls!": {
                    "e1": {
                        "checked": false,
                        "title": "Clever & Lucky Bunny Girls!"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Clever & Lucky Bunny Girls!"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Clever & Lucky Bunny Girls!"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Clever & Lucky Bunny Girls!"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Clever & Lucky Bunny Girls!"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Clever & Lucky Bunny Girls!"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Clever & Lucky Bunny Girls!"
                    },
                    "checked": false
                },
                "Shadows Unite! Let's party!": {
                    "e1": {
                        "checked": false,
                        "title": "Shadows Unite! Let's party!"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Shadows Unite! Let's party!"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Shadows Unite! Let's party!"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Shadows Unite! Let's party!"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Shadows Unite! Let's party!"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Shadows Unite! Let's party!"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Shadows Unite! Let's party!"
                    },
                    "checked": false
                },
                "Truth Seekers": {
                    "e1": {
                        "checked": false,
                        "title": "Truth Seekers"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Truth Seekers"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Truth Seekers"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Truth Seekers"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Truth Seekers"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Truth Seekers"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Truth Seekers"
                    },
                    "checked": false
                },
                "Midsummer Triangle": {
                    "e1": {
                        "checked": false,
                        "title": "Midsummer Triangle"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Midsummer Triangle"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Midsummer Triangle"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Midsummer Triangle"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Midsummer Triangle"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Midsummer Triangle"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Midsummer Triangle"
                    },
                    "checked": false
                },
                "Dreamy Summer Sunset": {
                    "e1": {
                        "checked": false,
                        "title": "Dreamy Summer Sunset"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Dreamy Summer Sunset"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Dreamy Summer Sunset"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Dreamy Summer Sunset"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Dreamy Summer Sunset"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Dreamy Summer Sunset"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Dreamy Summer Sunset"
                    },
                    "checked": false
                },
                "Interlude": {
                    "e1": {
                        "checked": false,
                        "title": "Interlude"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Interlude"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Interlude"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Interlude"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Interlude"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Interlude"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Interlude"
                    },
                    "checked": false
                },
                "Let's Smile! Halloween Night!": {
                    "e1": {
                        "checked": false,
                        "title": "Let's Smile! Halloween Night!"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Let's Smile! Halloween Night!"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Let's Smile! Halloween Night!"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Let's Smile! Halloween Night!"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Let's Smile! Halloween Night!"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Let's Smile! Halloween Night!"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Let's Smile! Halloween Night!"
                    },
                    "checked": false
                },
                "Amnesia?! Noob Again!": {
                    "e1": {
                        "checked": false,
                        "title": "Amnesia?! Noob Again!"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Amnesia?! Noob Again!"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Amnesia?! Noob Again!"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Amnesia?! Noob Again!"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Amnesia?! Noob Again!"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Amnesia?! Noob Again!"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Amnesia?! Noob Again!"
                    },
                    "checked": false
                },
                "A Gift from Miss Santa!": {
                    "e1": {
                        "checked": false,
                        "title": "A Gift from Miss Santa!"
                    },
                    "e2": {
                        "checked": false,
                        "title": "A Gift from Miss Santa!"
                    },
                    "e3": {
                        "checked": false,
                        "title": "A Gift from Miss Santa!"
                    },
                    "e4": {
                        "checked": false,
                        "title": "A Gift from Miss Santa!"
                    },
                    "e5": {
                        "checked": false,
                        "title": "A Gift from Miss Santa!"
                    },
                    "e6": {
                        "checked": false,
                        "title": "A Gift from Miss Santa!"
                    },
                    "e7": {
                        "checked": false,
                        "title": "A Gift from Miss Santa!"
                    },
                    "checked": false
                },
                "Run! The Great Ize-athlon 2.0!": {
                    "e1": {
                        "checked": false,
                        "title": "Run! The Great Ize-athlon 2.0!"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Run! The Great Ize-athlon 2.0!"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Run! The Great Ize-athlon 2.0!"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Run! The Great Ize-athlon 2.0!"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Run! The Great Ize-athlon 2.0!"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Run! The Great Ize-athlon 2.0!"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Run! The Great Ize-athlon 2.0!"
                    },
                    "checked": false
                },
                "Masquerade": {
                    "e1": {
                        "checked": false,
                        "title": "Masquerade"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Masquerade"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Masquerade"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Masquerade"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Masquerade"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Masquerade"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Masquerade"
                    },
                    "checked": false
                },
                "Be Mine! Sweet Valentine": {
                    "e1": {
                        "checked": false,
                        "title": "Be Mine! Sweet Valentine"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Be Mine! Sweet Valentine"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Be Mine! Sweet Valentine"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Be Mine! Sweet Valentine"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Be Mine! Sweet Valentine"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Be Mine! Sweet Valentine"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Be Mine! Sweet Valentine"
                    },
                    "checked": false
                },
                "Trash-Game Hunter Meets Shadow": {
                    "e1": {
                        "checked": false,
                        "title": "Trash-Game Hunter Meets Shadow"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Trash-Game Hunter Meets Shadow"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Trash-Game Hunter Meets Shadow"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Trash-Game Hunter Meets Shadow"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Trash-Game Hunter Meets Shadow"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Trash-Game Hunter Meets Shadow"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Trash-Game Hunter Meets Shadow"
                    },
                    "checked": false
                },
                "HIGHEST DREAM II": {
                    "e1": {
                        "checked": false,
                        "title": "HIGHEST DREAM II"
                    },
                    "e2": {
                        "checked": false,
                        "title": "HIGHEST DREAM II"
                    },
                    "e3": {
                        "checked": false,
                        "title": "HIGHEST DREAM II"
                    },
                    "e4": {
                        "checked": false,
                        "title": "HIGHEST DREAM II"
                    },
                    "e5": {
                        "checked": false,
                        "title": "HIGHEST DREAM II"
                    },
                    "e6": {
                        "checked": false,
                        "title": "HIGHEST DREAM II"
                    },
                    "e7": {
                        "checked": false,
                        "title": "HIGHEST DREAM II"
                    },
                    "checked": false
                },
                "The Producer in Shadow!": {
                    "e1": {
                        "checked": false,
                        "title": "The Producer in Shadow!"
                    },
                    "e2": {
                        "checked": false,
                        "title": "The Producer in Shadow!"
                    },
                    "e3": {
                        "checked": false,
                        "title": "The Producer in Shadow!"
                    },
                    "e4": {
                        "checked": false,
                        "title": "The Producer in Shadow!"
                    },
                    "e5": {
                        "checked": false,
                        "title": "The Producer in Shadow!"
                    },
                    "e6": {
                        "checked": false,
                        "title": "The Producer in Shadow!"
                    },
                    "e7": {
                        "checked": false,
                        "title": "The Producer in Shadow!"
                    },
                    "checked": false
                },
                "Stranded! Summer in the Wild?!": {
                    "e1": {
                        "checked": false,
                        "title": "Stranded! Summer in the Wild?!"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Stranded! Summer in the Wild?!"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Stranded! Summer in the Wild?!"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Stranded! Summer in the Wild?!"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Stranded! Summer in the Wild?!"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Stranded! Summer in the Wild?!"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Stranded! Summer in the Wild?!"
                    },
                    "checked": false
                },
                "A Dreamy Summer with You": {
                    "e1": {
                        "checked": false,
                        "title": "A Dreamy Summer with You"
                    },
                    "e2": {
                        "checked": false,
                        "title": "A Dreamy Summer with You"
                    },
                    "e3": {
                        "checked": false,
                        "title": "A Dreamy Summer with You"
                    },
                    "e4": {
                        "checked": false,
                        "title": "A Dreamy Summer with You"
                    },
                    "e5": {
                        "checked": false,
                        "title": "A Dreamy Summer with You"
                    },
                    "e6": {
                        "checked": false,
                        "title": "A Dreamy Summer with You"
                    },
                    "e7": {
                        "checked": false,
                        "title": "A Dreamy Summer with You"
                    },
                    "checked": false
                },
                "Blazing Hero! Eminence in Flames!": {
                    "e1": {
                        "checked": false,
                        "title": "Blazing Hero! Eminence in Flames!"
                    },
                    "e2": {
                        "checked": false,
                        "title": "Blazing Hero! Eminence in Flames!"
                    },
                    "e3": {
                        "checked": false,
                        "title": "Blazing Hero! Eminence in Flames!"
                    },
                    "e4": {
                        "checked": false,
                        "title": "Blazing Hero! Eminence in Flames!"
                    },
                    "e5": {
                        "checked": false,
                        "title": "Blazing Hero! Eminence in Flames!"
                    },
                    "e6": {
                        "checked": false,
                        "title": "Blazing Hero! Eminence in Flames!"
                    },
                    "e7": {
                        "checked": false,
                        "title": "Blazing Hero! Eminence in Flames!"
                    },
                    "checked": false
                },
                "At Your Service! The Perfect Maid!": {
                    "e1": {
                        "checked": false,
                        "title": "At Your Service! The Perfect Maid!"
                    },
                    "e2": {
                        "checked": false,
                        "title": "At Your Service! The Perfect Maid!"
                    },
                    "e3": {
                        "checked": false,
                        "title": "At Your Service! The Perfect Maid!"
                    },
                    "e4": {
                        "checked": false,
                        "title": "At Your Service! The Perfect Maid!"
                    },
                    "e5": {
                        "checked": false,
                        "title": "At Your Service! The Perfect Maid!"
                    },
                    "e6": {
                        "checked": false,
                        "title": "At Your Service! The Perfect Maid!"
                    },
                    "e7": {
                        "checked": false,
                        "title": "At Your Service! The Perfect Maid!"
                    },
                    "checked": false
                },
                "From the Heart! A Sage's Gift": {
                    "e1": {
                        "checked": false,
                        "title": "From the Heart! A Sage's Gift"
                    },
                    "e2": {
                        "checked": false,
                        "title": "From the Heart! A Sage's Gift"
                    },
                    "e3": {
                        "checked": false,
                        "title": "From the Heart! A Sage's Gift"
                    },
                    "e4": {
                        "checked": false,
                        "title": "From the Heart! A Sage's Gift"
                    },
                    "e5": {
                        "checked": false,
                        "title": "From the Heart! A Sage's Gift"
                    },
                    "e6": {
                        "checked": false,
                        "title": "From the Heart! A Sage's Gift"
                    },
                    "e7": {
                        "checked": false,
                        "title": "From the Heart! A Sage's Gift"
                    },
                    "checked": false
                },
                "checked": false
            },
            "Apocrypha": {
                "1 | Requiem for Scattered Shadows": {
                    "1 | Millennium Past": {
                        "e1": {
                            "checked": false,
                            "title": "Episode 1"
                        },
                        "e2": {
                            "checked": false,
                            "title": "Episode 2"
                        },
                        "e3-1": {
                            "checked": false,
                            "title": "Episode 3-1"
                        },
                        "e3-2": {
                            "checked": false,
                            "title": "Episode 3-2"
                        },
                        "e3-3": {
                            "checked": false,
                            "title": "Episode 3-3"
                        },
                        "e4-1": {
                            "checked": false,
                            "title": "Episode 4-1"
                        },
                        "e4-2": {
                            "checked": false,
                            "title": "Episode 4-2"
                        },
                        "e5-1": {
                            "checked": false,
                            "title": "Episode 5-1"
                        },
                        "e5-2": {
                            "checked": false,
                            "title": "Episode 5-2"
                        },
                        "e5-3": {
                            "checked": false,
                            "title": "Episode 5-3"
                        },
                        "e6": {
                            "checked": false,
                            "title": "Episode 6"
                        },
                        "e7": {
                            "checked": false,
                            "title": "Episode 7"
                        },
                        "e8-1": {
                            "checked": false,
                            "title": "Episode 8-1"
                        },
                        "e8-2": {
                            "checked": false,
                            "title": "Episode 8-2"
                        }
                    },
                    "2 | Heroes of Time": {
                        "eA1": {
                            "checked": false,
                            "title": "Episode A1"
                        },
                        "eA2": {
                            "checked": false,
                            "title": "Episode A2"
                        },
                        "eA3": {
                            "checked": false,
                            "title": "Episode A3"
                        },
                        "eA4": {
                            "checked": false,
                            "title": "Episode A4"
                        },
                        "eA5": {
                            "checked": false,
                            "title": "Episode A5"
                        },
                        "eA6-1": {
                            "checked": false,
                            "title": "Episode A6-1"
                        },
                        "eA6-2": {
                            "checked": false,
                            "title": "Episode A6-2"
                        },
                        "eA6-3": {
                            "checked": false,
                            "title": "Episode A6-3"
                        },
                        "eA7-1": {
                            "checked": false,
                            "title": "Episode A7-1"
                        },
                        "eA7-2": {
                            "checked": false,
                            "title": "Episode A7-2"
                        },
                        "eA7-3": {
                            "checked": false,
                            "title": "Episode A7-3"
                        },
                        "eA8": {
                            "checked": false,
                            "title": "Episode A8"
                        },
                        "eA9": {
                            "checked": false,
                            "title": "Episode A9"
                        },
                        "eB1": {
                            "checked": false,
                            "title": "Episode B1"
                        },
                        "eB2": {
                            "checked": false,
                            "title": "Episode B2"
                        },
                        "eB3": {
                            "checked": false,
                            "title": "Episode B3"
                        }
                    },
                    "checked": false
                },
                "checked": false
            }
        }
    },
    "ln": {
        "lnMainChecked": false,
        "lnFilter": "",
        "openVolumes": {},
        "volumesChecked": {
            "Volume 1": {
                "checked": false,
                "v1c1": {
                    "checked": false,
                    "title": "P | Preparing the Perfect Stage!"
                },
                "v1c2": {
                    "checked": false,
                    "title": "1 | Starting the Shadowbroker Tutorial!"
                },
                "v1c3": {
                    "checked": false,
                    "title": "2 | Assuming the Role of a Side Character at School!"
                },
                "v1c4": {
                    "checked": false,
                    "title": "3 | My Official Beginning as a Mastermind in Action!"
                },
                "v1c5": {
                    "checked": false,
                    "title": "4 | The Two Sides of the Shadow Garden?!"
                },
                "v1c6": {
                    "checked": false,
                    "title": "5 | Mastering the Peaceful Life of a Nobody!"
                },
                "v1c7": {
                    "checked": false,
                    "title": "6 | That Scene Where Terrorists Take Over the School"
                },
                "v1c8": {
                    "checked": false,
                    "title": "F | My Idea of the Ultimate Shadow Commander!"
                },
                "v1c9": {
                    "checked": false,
                    "title": "A | The Chronicles of Master Shadow Complete Version: Volume 1"
                }
            },
            "Volume 2": {
                "checked": false,
                "v2c1": {
                    "checked": false,
                    "title": "P | To Lindwurm, the Sacred Land!"
                },
                "v2c2": {
                    "checked": false,
                    "title": "1 | Fun Times at the Goddess's Trial!"
                },
                "v2c3": {
                    "checked": false,
                    "title": "2 | Investigating the Sanctuary!"
                },
                "v2c4": {
                    "checked": false,
                    "title": "3 | When Things Get Boring, It's Time for Explosives!"
                },
                "v2c5": {
                    "checked": false,
                    "title": "4 | This Situation Calls for a \"Who Is That Guy?!\""
                },
                "v2c6": {
                    "checked": false,
                    "title": "5 | A Battle to Attract Only MVPs!"
                },
                "v2c7": {
                    "checked": false,
                    "title": "6 | A Mastermind Always Plays Piano Under Moonlight!"
                },
                "v2c8": {
                    "checked": false,
                    "title": "7 | Showing Off a Smidgen of My Strength!"
                },
                "v2c9": {
                    "checked": false,
                    "title": "8 | Lay Your Eyes on My True Powers!"
                },
                "v2c10": {
                    "checked": false,
                    "title": "F | Just Who Is This Mysterious Badass?!"
                },
                "v2c11": {
                    "checked": false,
                    "title": "A | The Chronicles of Master Shadow Complete Version: Volume II"
                }
            },
            "Volume 3": {
                "checked": false,
                "v3c1": {
                    "checked": false,
                    "title": "P | Heading to the Lawless City over Fall Break!"
                },
                "v3c2": {
                    "checked": false,
                    "title": "1 | Lawless City Bandit Hunting!"
                },
                "v3c3": {
                    "checked": false,
                    "title": "2 | Storming the Crimson Tower!"
                },
                "v3c4": {
                    "checked": false,
                    "title": "3 | Pursuing the Blood Queen!"
                },
                "v3c5": {
                    "checked": false,
                    "title": "X | Field Notes on a Little Brother—by Young Claire!"
                },
                "v3c6": {
                    "checked": false,
                    "title": "4 | I'll Destroy It All and Start from Scratch!"
                },
                "v3c7": {
                    "checked": false,
                    "title": "5 | Printing Fake Money as Mitsugoshi Throws Down with the Major Corporate Alliance!"
                },
                "v3c8": {
                    "checked": false,
                    "title": "6 | Circulating Counterfeit Cash!"
                },
                "v3c9": {
                    "checked": false,
                    "title": "E | The One to Destroy It All and Start from Scratch—with Fake Bills!"
                },
                "v3c10": {
                    "checked": false,
                    "title": "A | The Chronicles of Master Shadow Complete Version: Volume III"
                }
            },
            "Volume 4": {
                "checked": false,
                "v4c1": {
                    "checked": false,
                    "title": "P | It's Time for a War in the Oriana Kingdom!"
                },
                "v4c2": {
                    "checked": false,
                    "title": "1 | Putting the Kibosh on Rose Oriana's Wedding!"
                },
                "v4c3": {
                    "checked": false,
                    "title": "2 | Begin Operation: Obstruction!"
                },
                "v4c4": {
                    "checked": false,
                    "title": "3 | Crashing the Ceremony!"
                },
                "v4c5": {
                    "checked": false,
                    "title": "X | Rise of the Fancy Hoodlum Slayer!"
                },
                "v4c6": {
                    "checked": false,
                    "title": "4 | Lurking in the Darkness in Fantastical Japan!"
                },
                "v4c7": {
                    "checked": false,
                    "title": "5 | Sneaking Around in Japan, Just Like the Old Days!!"
                },
                "v4c8": {
                    "checked": false,
                    "title": "6 | Something Smells Fishy... But an Eminence in Shadow Always Cracks the Case!"
                },
                "v4c9": {
                    "checked": false,
                    "title": "E | Behold, a Full-Fledged Eminence in Shadow!"
                },
                "v4c10": {
                    "checked": false,
                    "title": "A | The Chronicles of Master Shadow Complete Edition: Volume IV"
                }
            },
            "Volume 5": {
                "checked": false,
                "v5c1": {
                    "checked": false,
                    "title": "P | The Case of the Missing Students and the Not-So-Peaceful Academy!"
                },
                "v5c2": {
                    "checked": false,
                    "title": "1 | Claire's Back, and Her Symptoms Are Worse Than Ever!"
                },
                "v5c3": {
                    "checked": false,
                    "title": "2 | Morning Comes, and There's an Impaler on the Loose!!"
                },
                "v5c4": {
                    "checked": false,
                    "title": "3 | The Case Is Closed, So It's Time for a Flashback!"
                },
                "v5c5": {
                    "checked": false,
                    "title": "4 | Peace in Our Time!"
                },
                "v5c6": {
                    "checked": false,
                    "title": "5 | Terrorists Attack the School...Again!!"
                },
                "v5c7": {
                    "checked": false,
                    "title": "E | I'd Let the Whole World Burn, If That's What It Took!"
                },
                "v5c8": {
                    "checked": false,
                    "title": "A | Eta's Research Journal"
                }
            },
            "Volume 6": {
                "checked": false,
                "v6c1": {
                    "checked": false,
                    "title": "P | The Clandestine Ruler of the Midgar Kingdom...I'm so Jealous!"
                },
                "v6c2": {
                    "checked": false,
                    "title": "1 | Enter \"Jack The Rippler\"!"
                },
                "v6c3": {
                    "checked": false,
                    "title": "2 | Surprise Assassins at the Sleepover!"
                },
                "v6c4": {
                    "checked": false,
                    "title": "3 | Let's Decipher the Crime Announcement!"
                },
                "v6c5": {
                    "checked": false,
                    "title": "4 | And then a Monster becomes a Legend!"
                },
                "v6c6": {
                    "checked": false,
                    "title": "I | The Monster's Successor!"
                },
                "v6c7": {
                    "checked": false,
                    "title": "X | Oath of the Plains"
                },
                "v6c8": {
                    "checked": false,
                    "title": "5 | Welcome to Shadow Garden!"
                },
                "v6c9": {
                    "checked": false,
                    "title": "E | The Scent of That Day"
                },
                "v6c10": {
                    "checked": false,
                    "title": "A | Alpha's Organizational Management Diary."
                }
            }
        },
        "chapterFilters": {}
    },
    "wn": {
        "wnMainChecked": false,
        "wnFilter": "",
        "openVolumes": {},
        "volumesChecked": {
            "Volume 1": {
                "checked": false,
                "v1c1": {
                    "checked": false,
                    "title": "Remaining Within the Limits of Being Human Means You Would Be Vaporized By a Nuke"
                },
                "v1c2": {
                    "checked": false,
                    "title": "Bandits Are Basically Just Walking Bonus Stages"
                },
                "v1c3": {
                    "checked": false,
                    "title": "Sudden Emergence of the Order of Diabolos?!"
                },
                "v1c4": {
                    "checked": false,
                    "title": "If Only He Had Hair......"
                },
                "v1c5": {
                    "checked": false,
                    "title": "Real Member of the Order, and Real Person of the Curse"
                },
                "v1c6": {
                    "checked": false,
                    "title": "Your Drug Test Result is 'Positive'"
                },
                "v1c7": {
                    "checked": false,
                    "title": "A Simple Fighting Lesson, Power in Shadows Style (With Only This Much, You Are Also a Power in the Shadows?!)"
                },
                "v1c8": {
                    "checked": false,
                    "title": "Powers in the Shadows are Lonely"
                },
                "v1c9": {
                    "checked": false,
                    "title": "The Frolicking of Those Who Know Nothing of the World of Shadows"
                },
                "v1c10": {
                    "checked": false,
                    "title": "Apparently He Discovered Her Secret And Is Blackmailing Her......"
                },
                "v1c11": {
                    "checked": false,
                    "title": "Conflict is Entertaining When You Are Uninvolved"
                },
                "v1c12": {
                    "checked": false,
                    "title": "Hi, My Name Is Pochi! Nice to Meet You, Everyone!"
                },
                "v1c13": {
                    "checked": false,
                    "title": "Incidentally, I'm In the Zenon Faction"
                },
                "v1c14": {
                    "checked": false,
                    "title": "It Would Take Serious Effort To Make Me Truly Flip Out"
                },
                "v1c15": {
                    "checked": false,
                    "title": "Oh Wow, What a Wonderful Idea (In a Monotone Voice)"
                },
                "v1c16": {
                    "checked": false,
                    "title": "Currently Writing the Complete Version of 'The War Chronicles of Shadow-sama'"
                },
                "v1c17": {
                    "checked": false,
                    "title": "Fragment of Diabolos! Squish!"
                },
                "v1c18": {
                    "checked": false,
                    "title": "Keep Watching from Below the Stage"
                },
                "v1c19": {
                    "checked": false,
                    "title": "Far Off Memory"
                },
                "v1c20": {
                    "checked": false,
                    "title": "\"I AM......\""
                },
                "v1c21": {
                    "checked": false,
                    "title": "[Urgent Question] The Way to Dispose of a Dead Body on Campus [Anon]"
                }
            },
            "Volume 2": {
                "checked": false,
                "v2c22": {
                    "checked": false,
                    "title": "That Which Anyone Would Overlook"
                },
                "v2c23": {
                    "checked": false,
                    "title": "Otherworld General Trading Company Mitsugoshi Co."
                },
                "v2c24": {
                    "checked": false,
                    "title": "7 Girls and 1 Guy. Obviously Someone's Going to Be Left Out"
                },
                "v2c25": {
                    "checked": false,
                    "title": "Respite in an Alleyway"
                },
                "v2c26": {
                    "checked": false,
                    "title": "Ugh, My Head..."
                },
                "v2c27": {
                    "checked": false,
                    "title": "High Heels & One Piece & White Legs"
                },
                "v2c28": {
                    "checked": false,
                    "title": "Otherworld-Style Valentine's Day"
                },
                "v2c29": {
                    "checked": false,
                    "title": "A Mob Can Tell"
                },
                "v2c30": {
                    "checked": false,
                    "title": "Bastard"
                },
                "v2c31": {
                    "checked": false,
                    "title": "Can You Keep Up With Me?"
                },
                "v2c32": {
                    "checked": false,
                    "title": "The Undying Magic Swordsman"
                },
                "v2c33": {
                    "checked": false,
                    "title": "What Every Boy in the Universe Dreams Of"
                },
                "v2c34": {
                    "checked": false,
                    "title": "There Are Times When A Mob Has to Act"
                },
                "v2c35": {
                    "checked": false,
                    "title": "The Romance of Looking Down From a Rooftop"
                },
                "v2c36": {
                    "checked": false,
                    "title": "Relieved That It's More Decent Than Expected"
                },
                "v2c37": {
                    "checked": false,
                    "title": "The Course of an Advanced Psychological Battle"
                },
                "v2c38": {
                    "checked": false,
                    "title": "Lending Just a Tiny Bit of Help"
                },
                "v2c39": {
                    "checked": false,
                    "title": "Wanting to Live for Just One More Day"
                },
                "v2c40": {
                    "checked": false,
                    "title": "That Which is Truly Important"
                },
                "v2c41": {
                    "checked": false,
                    "title": "Arrival of the Summer Rain"
                }
            },
            "Volume 3": {
                "checked": false,
                "v3c42": {
                    "checked": false,
                    "title": "Proposing the Leech-style Mob Life"
                },
                "v3c43": {
                    "checked": false,
                    "title": "That Thing That's As Enigmatic as Wooden Swords At Tourist Spots"
                },
                "v3c44": {
                    "checked": false,
                    "title": "Holy Sword Excalibur"
                },
                "v3c45": {
                    "checked": false,
                    "title": "Plan A Has Failed, Shift to Plan B"
                },
                "v3c46": {
                    "checked": false,
                    "title": "A Woman Who Seems Shady and A Woman Who Seems Cheap and A Woman Who Seems Blissful"
                },
                "v3c47": {
                    "checked": false,
                    "title": "The Theory That When a Bomb Goes Off It Can Erase Everything Else That Had Happened"
                },
                "v3c48": {
                    "checked": false,
                    "title": "Please Believe That There Really Are Times When Those Who Have No Intention of Looking Still End up Seeing"
                },
                "v3c49": {
                    "checked": false,
                    "title": "Those That Don't Understand Are Boring"
                },
                "v3c50": {
                    "checked": false,
                    "title": "The Heroine Who Directed and Acted in Her Own Production"
                },
                "v3c51": {
                    "checked": false,
                    "title": "The Birth of 'Precise'"
                },
                "v3c52": {
                    "checked": false,
                    "title": "The Truth Within Memories"
                },
                "v3c53": {
                    "checked": false,
                    "title": "The Escape Plan of a Fragile, Dainty Girl"
                },
                "v3c54": {
                    "checked": false,
                    "title": "Gratz for Taking First Place in the 'Humans Who Can't Use Magic' Tournament"
                },
                "v3c55": {
                    "checked": false,
                    "title": "Just Look at What You Want to Look At Then"
                },
                "v3c56": {
                    "checked": false,
                    "title": "Genes, Age, or Stress?"
                },
                "v3c57": {
                    "checked": false,
                    "title": "Everything Is Within His Expectations"
                },
                "v3c58": {
                    "checked": false,
                    "title": "That Which Can Only Be Drawn By the Chosen"
                },
                "v3c59": {
                    "checked": false,
                    "title": "Inescapable Attack"
                },
                "v3c60": {
                    "checked": false,
                    "title": "Puzzle Piece"
                }
            },
            "Volume 4": {
                "checked": false,
                "v4c61": {
                    "checked": false,
                    "title": "The Girl and the Sound of Rain"
                },
                "v4c62": {
                    "checked": false,
                    "title": "I Am a Man Who Rides the Waves"
                },
                "v4c63": {
                    "checked": false,
                    "title": "The Mysterious Young Swordsman Jimina"
                },
                "v4c64": {
                    "checked": false,
                    "title": "Spartan Hazing From a Festival Regular!"
                },
                "v4c65": {
                    "checked": false,
                    "title": "No Need to Rush, Youngster, For Life is Long"
                },
                "v4c66": {
                    "checked": false,
                    "title": "The Harmless Poyoyon and Mole"
                },
                "v4c67": {
                    "checked": false,
                    "title": "Sure-Win Golden Dragon's Sure-Win Formula"
                },
                "v4c68": {
                    "checked": false,
                    "title": "The Match Where The Stronger One Gets All the Attention"
                },
                "v4c69": {
                    "checked": false,
                    "title": "Evil ** Kill ** Dragon!!"
                },
                "v4c70": {
                    "checked": false,
                    "title": "In Expectation of This Happening"
                },
                "v4c71": {
                    "checked": false,
                    "title": "Beta's Job"
                },
                "v4c72": {
                    "checked": false,
                    "title": "A Power in the Shadows Playing Under the Moonlight"
                },
                "v4c73": {
                    "checked": false,
                    "title": "The Girl Who Dreams a Dream and the Boy Who Walks a Dream"
                },
                "v4c74": {
                    "checked": false,
                    "title": "The Single Ray of Light Shining Into the Darkness"
                },
                "v4c75": {
                    "checked": false,
                    "title": "The Girls' Paths, and His Decision"
                },
                "v4c76": {
                    "checked": false,
                    "title": "The Basics of Human Relationships Is Abandonment Play"
                },
                "v4c77": {
                    "checked": false,
                    "title": "And Who Are You?"
                },
                "v4c78": {
                    "checked": false,
                    "title": "What Always Ends up Happening from Stopping at the Last Instant"
                },
                "v4c79": {
                    "checked": false,
                    "title": "I've Won! (Assured)"
                },
                "v4c80": {
                    "checked": false,
                    "title": "Exactly Who Are You?"
                },
                "v4c81": {
                    "checked": false,
                    "title": "Breakfast at the Special Seating NAO"
                },
                "v4c82": {
                    "checked": false,
                    "title": "The Smelly Man is Part of the Plan"
                },
                "v4c83": {
                    "checked": false,
                    "title": "From A Far Away Height..."
                },
                "v4c84": {
                    "checked": false,
                    "title": "Final Duty"
                },
                "v4c85": {
                    "checked": false,
                    "title": "Mysterious Masked Swordsman Slayer, At Your Service!!"
                },
                "v4c86": {
                    "checked": false,
                    "title": "Summit of the Path of the Sword"
                },
                "v4c87": {
                    "checked": false,
                    "title": "Your Real Enemy"
                },
                "v4c88": {
                    "checked": false,
                    "title": "Ashes of a Dream"
                }
            },
            "Volume 5": {
                "checked": false,
                "v5c89": {
                    "checked": false,
                    "title": "Being Gatekeeper A is Great!"
                },
                "v5c90": {
                    "checked": false,
                    "title": "It's Already Completely Healed"
                },
                "v5c91": {
                    "checked": false,
                    "title": "What Belongs to Bandits Also Belongs to Me"
                },
                "v5c92": {
                    "checked": false,
                    "title": "Two Loser (Dogs) and a Watchdog"
                },
                "v5c93": {
                    "checked": false,
                    "title": "Shockingly Huge Bargain Sale, Only in Outlaw City!!"
                },
                "v5c94": {
                    "checked": false,
                    "title": "Stop Throbbing..."
                },
                "v5c95": {
                    "checked": false,
                    "title": "From Mob Escape to Mob Revenge"
                },
                "v5c96": {
                    "checked": false,
                    "title": "For the Sake of This Day, I Have Prepared This... Hole!!"
                },
                "v5c97": {
                    "checked": false,
                    "title": "Rampage... The Streets are... Blood... Run..."
                },
                "v5c98": {
                    "checked": false,
                    "title": "Tough Lady"
                },
                "v5c99": {
                    "checked": false,
                    "title": "The Three Currents"
                },
                "v5c100": {
                    "checked": false,
                    "title": "War of Monsters"
                },
                "v5c101": {
                    "checked": false,
                    "title": "The Rumored Shadow Garden"
                },
                "v5c102": {
                    "checked": false,
                    "title": "Two Lasses"
                },
                "v5c103": {
                    "checked": false,
                    "title": "What are you doi-?!"
                },
                "v5c104": {
                    "checked": false,
                    "title": "Don't You Dare Steal My Role, Girl"
                },
                "v5c105": {
                    "checked": false,
                    "title": "The Man Who Was Too Early"
                },
                "v5c106": {
                    "checked": false,
                    "title": "What Do YOU Understand About This Pain?! (Blood Pressure)"
                },
                "v5c107": {
                    "checked": false,
                    "title": "Her Duty"
                },
                "v5c108": {
                    "checked": false,
                    "title": "Overwhelmingly Terrible at Explanations"
                },
                "v5c109": {
                    "checked": false,
                    "title": "The Queen of Blood"
                },
                "v5c110": {
                    "checked": false,
                    "title": "Her Master"
                },
                "v5c111": {
                    "checked": false,
                    "title": "Mission Complete"
                },
                "v5c112": {
                    "checked": false,
                    "title": "There's No Helping It When the Left Hand Begins to Ache"
                }
            },
            "Volume 6": {
                "checked": false,
                "v6c113": {
                    "checked": false,
                    "title": "Kyaaa! Not so rough!"
                },
                "v6c114": {
                    "checked": false,
                    "title": "Super Elite Agent, Whose Name Is"
                },
                "v6c115": {
                    "checked": false,
                    "title": "The World Is Whispering To Me"
                },
                "v6c116": {
                    "checked": false,
                    "title": "Do You Really Think So?"
                },
                "v6c117": {
                    "checked": false,
                    "title": "The smell of wood."
                },
                "v6c118": {
                    "checked": false,
                    "title": "Golden retriever"
                },
                "v6c119": {
                    "checked": false,
                    "title": "Ol, Its Ol!!"
                },
                "v6c120": {
                    "checked": false,
                    "title": "Blind Big Wolf"
                },
                "v6c121": {
                    "checked": false,
                    "title": "Great Trading Alliance"
                },
                "v6c122": {
                    "checked": false,
                    "title": "The Malaise Of Mitsugoshi"
                },
                "v6c123": {
                    "checked": false,
                    "title": "Sample"
                },
                "v6c124": {
                    "checked": false,
                    "title": "The Power of a Super Elite Agent"
                },
                "v6c125": {
                    "checked": false,
                    "title": "The First To Notice The Change"
                },
                "v6c126": {
                    "checked": false,
                    "title": "Don't Get In The Way"
                },
                "v6c127": {
                    "checked": false,
                    "title": "Black Jaguar"
                },
                "v6c128": {
                    "checked": false,
                    "title": "The Supreme Code"
                },
                "v6c129": {
                    "checked": false,
                    "title": "It's All That Fool's Fault"
                },
                "v6c130": {
                    "checked": false,
                    "title": "Goodbye, John Smith"
                },
                "v6c131": {
                    "checked": false,
                    "title": "His Back"
                },
                "v6c132": {
                    "checked": false,
                    "title": "Finally, This Day Has Come"
                },
                "v6c133": {
                    "checked": false,
                    "title": "Yukime and Gettan"
                },
                "v6c134": {
                    "checked": false,
                    "title": "Rumor of the counterfeit bills"
                },
                "v6c135": {
                    "checked": false,
                    "title": "John Smith was their esteemed master."
                },
                "v6c136": {
                    "checked": false,
                    "title": "You made me angry... . ."
                },
                "v6c137": {
                    "checked": false,
                    "title": "The man who is burning with revenge"
                },
                "v6c138": {
                    "checked": false,
                    "title": "Those who lost their eyes"
                },
                "v6c139": {
                    "checked": false,
                    "title": "Even if we talk, it will be a waste of time"
                },
                "v6c140": {
                    "checked": false,
                    "title": "Gettan......"
                },
                "v6c141": {
                    "checked": false,
                    "title": "Everything is his"
                },
                "v6c142": {
                    "checked": false,
                    "title": "The bloody Demon King who betrayed his dream"
                }
            },
            "Volume 7": {
                "checked": false,
                "v7c143": {
                    "checked": false,
                    "title": "That Ordinary Boy is Revealed to be—!"
                },
                "v7c145": {
                    "checked": false,
                    "title": "His name is Kageno Minoru [Cid's Past Life]"
                },
                "v7c146": {
                    "checked": false,
                    "title": "Mystery Man"
                },
                "v7c147": {
                    "checked": false,
                    "title": "Not Enough Calories At All"
                },
                "v7c148": {
                    "checked": false,
                    "title": "When it's All Over"
                },
                "v7c149": {
                    "checked": false,
                    "title": "Code 0"
                },
                "v7c150": {
                    "checked": false,
                    "title": "Who Do You Think You're Dealing With?"
                },
                "v7c151": {
                    "checked": false,
                    "title": "The Princess's Mob Friend"
                },
                "v7c152": {
                    "checked": false,
                    "title": "Evil Encroaching"
                },
                "v7c153": {
                    "checked": false,
                    "title": "Looks like We're Done"
                },
                "v7c154": {
                    "checked": false,
                    "title": "Soul Searching"
                },
                "v7c155": {
                    "checked": false,
                    "title": "Sorry, Ya Lost Me."
                },
                "v7c156": {
                    "checked": false,
                    "title": "Action Spy"
                },
                "v7c157": {
                    "checked": false,
                    "title": "Cut Down Anything!"
                },
                "v7c158": {
                    "checked": false,
                    "title": "Beacon of Revolt"
                },
                "v7c159": {
                    "checked": false,
                    "title": "I Can Hear Him But From Where..."
                },
                "v7c160": {
                    "checked": false,
                    "title": "My Time to Shine?"
                },
                "v7c161": {
                    "checked": false,
                    "title": "The Ringleader is Here!?"
                },
                "v7c162": {
                    "checked": false,
                    "title": "Sigh, really didn't want to make a scene, man~"
                },
                "v7c163": {
                    "checked": false,
                    "title": "The Power of Diabolos"
                },
                "v7c164": {
                    "checked": false,
                    "title": "Where is He?"
                },
                "v7c165": {
                    "checked": false,
                    "title": "Demon Lord Unleashed"
                },
                "v7c166": {
                    "checked": false,
                    "title": "Mordred"
                },
                "v7c167": {
                    "checked": false,
                    "title": "What Were Ideal Powers in Shadows in My Mind?"
                }
            },
            "Volume 8": {
                "checked": false,
                "v8c168": {
                    "checked": false,
                    "title": "In This Troop You Will Earn A Lot of Money"
                },
                "v8c169": {
                    "checked": false,
                    "title": "The Dream Of Two Men"
                },
                "v8c170": {
                    "checked": false,
                    "title": "Mob Character's Field Trip"
                },
                "v8c171": {
                    "checked": false,
                    "title": "Three Ojisans"
                },
                "v8c172": {
                    "checked": false,
                    "title": "Vow of Black Rose"
                },
                "v8c173": {
                    "checked": false,
                    "title": "Don't Upstage Me"
                },
                "v8c174": {
                    "checked": false,
                    "title": "Do Not Kick the Platform"
                },
                "v8c175": {
                    "checked": false,
                    "title": "Evil God・Instant Kill・Sword"
                },
                "v8c176": {
                    "checked": false,
                    "title": "Died On the Spot"
                },
                "v8c177": {
                    "checked": false,
                    "title": "So-called Master"
                },
                "v8c178": {
                    "checked": false,
                    "title": "The End of Mob Character"
                },
                "v8c179": {
                    "checked": false,
                    "title": "A Small Part of the Abyss-like Plan"
                },
                "v8c180": {
                    "checked": false,
                    "title": "She's the Type of Person Who Always Exaggerates"
                },
                "v8c181": {
                    "checked": false,
                    "title": "The Other Side Connecting the Past, Present and Future"
                },
                "v8c182": {
                    "checked": false,
                    "title": "Infatuated with That Courage and Insight"
                },
                "v8c183": {
                    "checked": false,
                    "title": "We Are Friends After All!"
                },
                "v8c184": {
                    "checked": false,
                    "title": "If He Was Born Before A Thousand Years Ago"
                },
                "v8c185": {
                    "checked": false,
                    "title": "Terrible Interests"
                },
                "v8c186": {
                    "checked": false,
                    "title": "Two People with Social Phobia"
                },
                "v8c187": {
                    "checked": false,
                    "title": "Epsilon's Secret Recipe"
                },
                "v8c188": {
                    "checked": false,
                    "title": "Epsilon in Gorgeous Disguise"
                },
                "v8c189": {
                    "checked": false,
                    "title": "Take A Walk in the Forest"
                },
                "v8c190": {
                    "checked": false,
                    "title": "Everything Is Connected, All of Which Meets His Expectations"
                },
                "v8c191": {
                    "checked": false,
                    "title": "Let Me Show You Perfect Magic Control"
                },
                "v8c192": {
                    "checked": false,
                    "title": "It's Not My Fault The Shot Went Awry"
                },
                "v8c193": {
                    "checked": false,
                    "title": "Great Sacrifice for World Peace and Science"
                },
                "v8c194": {
                    "checked": false,
                    "title": "The Secret One Wants to Hide the Most"
                },
                "v8c195": {
                    "checked": false,
                    "title": "A Natural Phenomenon of Unknown Cause or A Paranormal Phenomenon"
                },
                "v8c196": {
                    "checked": false,
                    "title": "Battle of Darkness"
                },
                "v8c197": {
                    "checked": false,
                    "title": "Forget to Close the Door"
                },
                "v8c198": {
                    "checked": false,
                    "title": "It's All The Americans' Fault"
                },
                "v8c199": {
                    "checked": false,
                    "title": "Mysterious Architect Eta Lloyd Wright"
                },
                "v8c200": {
                    "checked": false,
                    "title": "The Only Food Left Is DX"
                },
                "v8c201": {
                    "checked": false,
                    "title": "Fraudulent Company"
                },
                "v8c202": {
                    "checked": false,
                    "title": "Seems Like Never Coming Back"
                }
            }
        },
        "chapterFilters": {}
    }
}

let mediums = {
    "lnCoverImages": {
        "v1": "LNV1Cover.webp",
        "v2": "LNV2Cover.webp",
        "v3": "LNV3Cover.webp",
        "v4": "LNV4Cover.webp",
        "v5": "LNV5Cover.webp",
        "v6": "LNV6Cover.webp"
    },
    "animeCoverImages": {
        "s1": "ANS1Cover.webp",
        "s2": "ANS2Cover.webp",
        "Kage-Jitsu!": "KJ1Cover.webp",
        "Kage-Jitsu! 2nd": "KJ2Cover.webp",
        "s101": "KJ1Cover.webp",
        "s102": "KJ2Cover.webp"
    },
    "sscCoverImages": {
        "ssc": "SSCCover.webp",
        "1-1": "SSC1-1Cover.webp",
        "1-2": "SSC1-2Cover.webp",
        "1-3": "SSC1-3Cover.webp",
        "1-4": "SSC1-4Cover.webp",
        "1-5": "SSC1-5Cover.webp",
        "1-6": "SSC1-6Cover.webp",
        "1-7": "SSC1-7Cover.webp",
        "1-8": "SSC1-8Cover.webp",
        "1-9": "SSC1-9Cover.webp",
        "1-10": "SSC1-10Cover.webp",
        "1-11": "SSC1-11Cover.webp",
        "1-12": "SSC1-12Cover.webp",
        "1-13": "SSC1-13Cover.webp",
        "1-14": "SSC1-14Cover.webp",
        "1-15": "SSC1-FCover.webp",
        "2-1": "SSC2-1Cover.webp",
        "2-2": "SSC2-2Cover.webp",
        "2-3": "SSC2-3Cover.webp",
        "2-4": "SSC2-4Cover.webp",
        "2-5": "SSC2-5Cover.webp",
        "2-6": "SSC2-6Cover.webp",
        "2-7": "SSC2-7Cover.webp",
        "2-8": "SSC2-8Cover.webp",
        "2-9": "SSC2-9Cover.webp",
        "2-10": "SSC2-10Cover.webp",
        "2-11": "SSC2-11Cover.webp",
        "2-12": "SSC2-12Cover.webp",
        "2-13": "SSC2-13Cover.webp",
        "3-1": "SSC3-1Cover.webp",
        "3-2": "SSC3-2Cover.webp",
        "3-3": "SSC3-3Cover.webp",
        "3-4": "SSC3-4Cover.webp",
        "3-5": "SSC3-5Cover.webp",
        "3-6": "SSC3-6Cover.webp",
        "3-7": "SSC3-7Cover.webp",
        "3-8": "SSC3-8Cover.webp"
    },
    "esCoverImages": {
        "Event Stories": "ESCover.webp",
        "hr": "ESHRCover.webp",
        "ftgi": "ESFTGICover.webp",
        "nvacs": "ESNVACSCover.webp",
        "rog": "ESROGCover.webp",
        "hd": "ESHDCover.webp",
        "clbg": "ESCLBGCover.webp",
        "sulp": "ESSULPCover.webp",
        "ts": "ESTSCover.webp",
        "mt": "ESMTCover.webp",
        "dss": "ESDSSCover.webp",
        "i": "ESICover.webp",
        "lshn": "ESLSHNCover.webp",
        "ana": "ESANACover.webp",
        "agfms": "ESAGFMSCover.webp",
        "rtgi2": "ESRTGI2Cover.webp",
        "m": "ESMCover.webp",
        "bmsv": "ESBMSVCover.webp",
        "tghms": "ESTGHMSCover.webp",
        "hd2": "ESHD2Cover.webp",
        "tpis": "ESTPISCover.webp",
        "ssitw": "ESSSITWCover.webp",
        "adswy": "ESADSWYCover.webp",
        "bheif": "ESBHEIFCover.webp",
        "aystpm": "ESAYSTPMCover.webp",
        "fthasg": "ESFTHASGCover.webp"
    },
    "apoCoverImages": {
        "Apocrypha": "APOCover.webp",
        "1": "APO1Cover.webp",
        "1-1": "APO1-1Cover.webp",
        "1-1-1": "APO1-1-1Cover.webp",
        "1-1-2": "APO1-1-2Cover.webp",
        "1-1-3-1": "APO1-1-3-1Cover.webp",
        "1-1-3-2": "APO1-1-3-2Cover.webp",
        "1-1-3-3": "APO1-1-3-3Cover.webp",
        "1-1-4-1": "APO1-1-4-1Cover.webp",
        "1-1-4-2": "APO1-1-4-2Cover.webp",
        "1-1-5-1": "APO1-1-5-1Cover.webp",
        "1-1-5-2": "APO1-1-5-2Cover.webp",
        "1-1-5-3": "APO1-1-5-3Cover.webp",
        "1-1-6": "APO1-1-6Cover.webp",
        "1-1-7": "APO1-1-7Cover.webp",
        "1-1-8-1": "APO1-1-8-1Cover.webp",
        "1-1-8-2": "APO1-1-8-2Cover.webp",
        "1-2": "APO1-2Cover.webp",
        "1-2-A1": "APO1-2-A1Cover.webp",
        "1-2-A2": "APO1-2-A2Cover.webp",
        "1-2-A3": "APO1-2-A3Cover.webp",
        "1-2-A4": "APO1-2-A4Cover.webp",
        "1-2-A5": "APO1-2-A5Cover.webp",
        "1-2-A6-1": "APO1-2-A6-1Cover.webp",
        "1-2-A6-2": "APO1-2-A6-2Cover.webp",
        "1-2-A6-3": "APO1-2-A6-3Cover.webp",
        "1-2-A7-1": "APO1-2-A7-1Cover.webp",
        "1-2-A7-2": "APO1-2-A7-2Cover.webp",
        "1-2-A7-3": "APO1-2-A7-3Cover.webp",
        "1-2-A8": "APO1-2-A8Cover.webp",
        "1-2-A9": "APO1-2-A9Cover.webp",
        "1-2-B1": "APO1-2-B1Cover.webp",
        "1-2-B2": "APO1-2-B2Cover.webp",
        "1-2-B3": "APO1-2-B3Cover.webp"
    }
}

function writeData(setDoc) {
    setDoc.then(() => {
        console.log('Document successfully written!');
      }).catch((error) => {
        console.error('Error writing document: ', error);
      });
}
/*
let setDoc;
setDoc = db.collection('data').doc('info').set(info);
writeData(setDoc)

setDoc = db.collection('data').doc('dropdowns').set(dropdowns);
writeData(setDoc)

setDoc = db.collection('data').doc('medium_images').set(mediums);
writeData(setDoc)*/

// let setDoc = db.collection('data').doc('an_s2_e8').set(data['s2']);

// let setDoc = db.collection('data').doc('ssc_p3_c3-8').set(data['p3']['c3-8']);

// let setDoc = db.collection('data').doc('apo_p1_c1-2').set(data['p1']['c1-2']);

let setDoc = db.collection('data').doc('es_fthasg').set(data['fthasg']);

// let setDoc = db.collection('data').doc('ln_v2').set(data['v2']);

// let setDoc = db.collection('data').doc('an_s1_e1').set(data['s1']);

// let setDoc = db.collection('data').doc('info').set(data);

// let setDoc = db.collection('data').doc('characters').set(data);

// let setDoc = db.collection('data').doc('medium_images').set(data);

// let setDoc = db.collection('data').doc('dropdowns').set(data);

// let setDoc = db.collection('data').doc('media').set(data);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
