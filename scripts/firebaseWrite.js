const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "p1": {
        "c1-2": {
            "e1": [
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...Okay! Next!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1BBkkUmYnrJun8y7AXNRJHRcaZ704zSA3/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...Alright! Let's take a 30-minute break! Don't forget to stay hydrated!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/17LldR1uRk8NxyTqGPQ1RK6A-11boKhfO/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1V7S_41GKBMyl2BiTmNuw0DPcGDloegzf/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "If the Shadow Garden grows any larger, securing enough training space will be a real challenge!",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1eGcAup2BGs3jKoAHHq5gtcyXt9NCwrFL/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Village...is cramped...",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1iXcU1965ouUT3ArpStgahregObUjyV9N/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "That's right! Cramped!",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/12kZUK49qUy8PBiGbl-NoaqlON0VAoa1r/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I'm happy our pack is growing! Not happy it's getting cramped!",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1X9jbGYdXkEee2jyuW7vmFtMSQAhKNZp7/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "True, I'm not happy about it either. It's starting to interfere with Lambda's training of our members.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/16dG8YpEwZR8OLWVWkkLM1mMEMpz-pDjz/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Hey, Epsilon! Don't copy what I said!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/139mCttnC2fFwr18yFRu_jkYbXwpCij3k/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Huhhh...?!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1gMasvxcus_h_r-1TKNobUSuhNV07BvyW/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Based on my calculations, this ghost town will become a fully thriving village in a month...if our numbers continue to increase at the current rate.",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1bbkufOrO2mPXTtjF0Gllp6Py54cxAcKs/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Available living spaces are also running out. We're fast approaching a situation where we can't keep our presence here a secret any longer.",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1Y8Ofp6vXmx8aJ3K3ymYnZ1Q9EbRJCRi2/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1YPPE-J-undjbTkQCv8Iy8n1hDUwF2sdx/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Lady Alpha!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/16MqTKVmSafvp5LS5ysI_lTvncIqc5MmE/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It looks like we can't wait for Zeta any longer. She'll return today, so we'll narrow down the list of potential new locations for our base when she gets here.",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1lWbHTYRco53Hx91js57qyoNdLVuw1bjl/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Well then, let's adjourn the meeting until Zeta returns.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1wE_nbCaiDkLleiDznRtjMHZ6FICVi3Mt/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "...Fine...I'll sleep...",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1Xw87d1mlw3FTV9flkUnTwunkAw9VLksI/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Always asleep like a log, aren't you?",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1eQEUlvjvZEzjjPJg23KTFnWQMm29m-_J/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "But Delta, you usually sleep through meetings too...",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1jQMIUJFtNuoHt9p0aADTe2rIfRz094MQ/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "If you're so jealous, why don't you copy me?",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1HfjG4VW4OpBH2_8YPGLkKPKmK2Ou8Eyj/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I hate people copying what I say, but I don't mind if you copy what I do! I'd be honored!",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1c7w2gwF-Bo9XSZOmJ9EtAB56D8FCP9Dl/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Um, well... I think I'll pass on both!",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1Sru4h4bhWq2_uw8zaeCwiL7wmkbVAokQ/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...I'm home.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1DI0AhuqwlYNOBQZQrXry5nmFxyOzeWsb/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Oh, the cat returns.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1hRxTrsmOmO8NPtHXtlTy7aODc14OVaN8/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Were you in the middle of a meeting?",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1AWnedvzYXFH06EaIbx-1YaGbr9PSakNp/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Welcome back, Zeta. We were just taking a break.",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/19KfBdWZWbQnB0HxSGObX7PJsW5XqF46Y/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The plan was to reconvene as soon as you returned. It's up to you\u2014would you like to rest up first?",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1mOcgvjlK2BPYruLDEy14VdpJGC9cR68R/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "No, we can get started immediately. With all the time I had, I managed to find a promising location.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/13AkuKVx1sPqMTFkxAQkIceCvKtJ84TRR/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "Good house...where?!",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1QgRMp3dfYRIiywHnDsoLamey80HJBicY/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Well then, shall we resume the meeting, Lady Alpha?",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/11Pw0JtJbQGiWboJbhC_T5OBmQao7xMeE/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Very well. So Zeta, where is this promising place?",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1wHOhqYYoSNiCw5Zk3VfDeA4-hlVokAXx/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...The ancient city of Alexandria.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1TZ5qdsRiwTv_Omnfewlj6Tqe5HWcZVHh/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Alexandria? I've never heard of such a place.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/15gIvgf8yhMHZs4z7Wr_-rQTOqosEY_Mf/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Neither have I. Have you, Beta?",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1WgcO3CReo6Za1WQCXQJWJr5IoQjDm_on/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Um...yes, to some extent.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1fndLPN-3BHhCBQCrX749MnJ_i2zA47pZ/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "It's described in ancient legends as a city that exists far to the east of the Sacred Land of Lindwurm, beyond the Abyss Woods.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1tJ1_A_sbPJ9RZtBVE9EQkOfmhYftDDg5/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "However, it only appears in legends and folklore\u2014its existence is yet to be confirmed.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1GohHDkKjjUdEXdp-U9VbLT3ST4UYDEt5/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "This is because the Abyss Woods itself is said to be filled with a deadly mist, and those who enter never return.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1d3Q2sOY3FjG2nddhH5SEdFdoOdZmivl8/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "But that makes it the perfect place where no one will disturb us. Even if there is no ancient city, I think it's the best candidate for our base.",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1dYBYKbFpftXGanfz-hpEd7Zp9SES-USg/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Of course, it's important we find a place where we won't be disturbed, but...",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1GSRqviblctqnwdBmLZDdl6Gh6R5hiAq-/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1Ro8IKp6oNKfOiUE-eZitfMFWldespaMA/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Lady Alpha?",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1ut8fqpdq0xz-Ue1g-tv8MR69ykMB5-s8/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "\"Beyond that heavy mist lies the land of shadows where we must rise\"\u2014that's what he told me.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/17Apg6WYXY3U61N79kS1VAyZmUhgcvymP/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Wait, did Master Shadow...reveal to us that the ancient city of Alexandria is a suitable location for our base?!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1NJTj2pi-dzaf69rVUt865lspMW3WQUm_/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "So...Alexandria really does exist!",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1eBwDZXMBMx9iD2TT5UjeuckcckJCwjY-/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Then the choice has been made for us.",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1gmD6rY0PHd1ZElhwtsDG9b_CxflcOE3G/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "We'll need to prepare to travel through the Abyss Woods and investigate the ancient city of Alexandria beyond.",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1kNDuCZfSA1ORhTaRP6QUlO2o6XvOn_75/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Agreed. In the following days, let's gather our battle-ready members and prepare for travel.",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/11x984xixTEGbutpAD3IND_I7N4ZwrRnz/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Ooh! I know! That's what they call a \"picnic\"!",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1GhyEne8tYn2sHuU1LaWO6q0TeAYQO2RB/view?usp=drivesdk"
                },
                {
                    "name": "Eta",
                    "name_variant": "Eta",
                    "subtitle": "I'll...pass...",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/19zMqYAygmyHXvfP5YpWO9C0YMQrZJ7-6/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Delta mentioned something about everyone going on a picnic when she dropped by the other day.",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1Ys7BHHblFVZNNy2bUzPbwofbD36Mwq2J/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "A picnic? Oh, she means investigating our new base.",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1NDlqFHtxdZ-Tmu-XY1fHM15qUNCk2R4i/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "If the Garden is always by your side as we begin to launch full-scale operations, we may inadvertently reveal your existence to the world\u2014and to the Cult of Diablos.",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1Eu7ZVKg-LZTXDkiRaLutXjSI4EAWTrwJ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We plan to prevent this by moving the Shadow Garden's base to a secluded location...deep within the Abyss Woods.",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/10XBseraIHYNMh9DTNLS9wXVVCun_821D/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "So that's the excuse you're going with just to exclude me...",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1z6SCGIcrcNO15zEJhSPjeM8u0_s_AT1h/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Cid? Is something wrong?",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/13JWTyxycfYr7p7HIoYVuFNwE7Y68w4o4/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Nope, nothing.",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1TeZK9wsIksqc1htqaijeO0QI53y8y4Nk/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Our one concern is the folklore surrounding the Abyss Woods. It speaks of a transcendent being known as the Mist Dragon.",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1kxnHS7B4xR0jmkrF4AdFBbc-gtk8vTCO/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I doubt we'll encounter an actual dragon...",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1lPA4CQFiDwT3is8rNF-sgvtp9nVYqzN1/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "But it may be a metaphor for some powerful monster, so we intend to proceed with caution.",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1ZNFO5WBaAENjKYXN8nGmAcjCXPCHMPPV/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "A dragon, huh...",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1uaFIH7vSh15B7vWAgNx5JraxclJV76e4/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Sounds like things might get interesting. Think I'll check what Alpha and the others get up to without crashing their girls\u2019 picnic.)",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1RCmck6iIYeXibw5eVCkdYMqRl_3xOxUV/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Not that I don't understand why they wouldn't want to bring a boy into the mix at a girls-only picnic...)",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1gCimCm_97msiI4u1GFZ6DZLMVuC0BXZF/view?usp=drivesdk"
                }
            ],
            "e2": [
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Take this!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1W6WTPprygzWkxc5uOiD51sSTdnnN09sh/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Whew... We did it!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1VWmhmSYbnJ_eibnE6cblSOAPAC4HpjH1/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Jeez, what a weakling!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1ZBPU4kLe2T1R-JTExQtIkRfyBYc5zdTQ/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Thought they'd have more backbone living in such a dangerous forest.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1nninQl6YzRGwgACtfpqP6xHqSGRu0SQO/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "True, the monsters are displaying fewer signs of mutation than I anticipated.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/10yuAjRbZmuix43x-4yiX0U_AJ0r0T7Ju/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Mutation?",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1tXpzKjMAkHHt3Cs49WE7s5d9FqoRb1_l/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "...Um, explain it a little simpler!",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1gqgmwVuyLOSeDAwx_iBHV8el9J2Qo-lq/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Let's see... The Abyss Woods is overflowing with poisonous fog.",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1iSQJEZ5Fh-DEk-ZFqUmbEM1G8BED-f45/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "We've been trying to avoid it as we make our way through the woods.",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1KI05Fn_WrtOFbCMwCGZTIGIYD8-5z1vo/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "But the monsters we've encountered haven't adapted to the fog and live their lives avoiding its poison.",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1JTubQNTZqcxqPa42FiGcxQuGL0xcS1bm/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "In other words, the fog hasn't been around for long since the monsters haven't had enough time to adapt to it.",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1HnYYMFy4P00NDKRSwdMK49EIDxYuk9ES/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "If the monsters haven't adapted...does that mean the fog isn't natural?!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1Y9nIWdEH1T74QxpDByoVLQKwkL5URo6G/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "How unusually perceptive of you, Delta. Yes, that's most likely the case.",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1cYiS69lPKreZA4NIoCfWcIbV6oDnpaNy/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Course I am, Gamma! Can't hunt without knowing the ways of nature!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1t6DmB_HcglrSc6d3EpGIlZgPOz0uY_TT/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "You didn't even know that being so smart? No wonder you're still a weakling.",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1f6UBB1AilVnVnBbF0YeqhiwMkITyWyV2/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Ouch... Anyway, we should assume some singular entity deliberately created this fog.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1JYoNWUqyOMd6IzMLwwSjF-uoZPXGU5y9/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Are you suggesting this singular entity is the Mist Dragon described in folklore?",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1kPwxNmT7yUu25rEdeB4rjBqB-4xcsMYU/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "I'm not so sure about that one. Legends are just legends, and folklore is no different from gossip until proven otherwise.",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/11ZaGLjOjuCGHoXAAssX0FwAglx_ZV9vq/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "But the fact is there are records, and we're witnessing the poison fog first-hand...",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1XMv9VOOK_pIGV-Wg7LbxZMCLs9v1xfK6/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "It's pretty clear that whatever lives in this forest is no joke.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1mj5V6r_X3X2GXv1M8G1D-W9xAKQIz14-/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "All the more reason to use these woods as our hideout.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/15AXMYScRvcTeVwIkls2DB_MR-fPFFh8B/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1se2K4lCQeU99Ox7lZT1r0EnN1QkpIJq8/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Even the Seven Shadows seem to be on high alert.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1QQ-_3mGhEFm3jVm8boKG-LACONBSGu2w/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Far better than treating this as an excursion.",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1O7n6AsqiQuxb4a9NfI_ClekuykkatS-9/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Especially Delta... She instantly perceived these woods to be dangerous. I'm sure her sharp intuition will be invaluable here.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1UALVN92sxbGYBwDcPgAqxPHXN722Ztwr/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Based on Lady Zeta's preliminary investigation, I've made all possible preparations, bringing along enough members to the extent they won't get in the way. But\u2014",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1-_DA72GFNQR8eIT0XfeFfPM9CY9xN-q1/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Heh... Are you uncertain, Lambda?",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1Vpdhfn44mIjRxUcHBFBDTnOTgkCN5fmD/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "It's my job to tackle uncertainties and prepare for eventualities by training members and organizing our units.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1GPsizVJoXraRitJ2BAaok9-UT6Q6NBd1/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I know this is slightly off topic, but may I ask you a difficult question?",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/101vcElMf368CJ5_6q3x0xNZA2GwSd4a4/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Difficult or not, I'll answer any question you have.",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1ATDRrJCWURK9DoYf_EY2C2QX59rBBqRl/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1p9YnHiZPCS5oNX-4HTJcZO-Me6PtsMCF/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "As someone likely once involved in high-ranking military service, what do you think of the Seven Shadows' swordsmanship?",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1aC-nP5OzGGUUa_ERF_8sdM3rykG-csWU/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...Well.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1JyZZdVCnbEy0F7dXHc0ylS3EneOVJbxy/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "If I can give my honest opinion, putting aside individual abilities, I feel there is some imbalance.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1cl3SegSWRYyPnsov3dQerEmwkDqgZ8OD/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "I'm told Master Shadow originally trained each of the Seven Shadows in the sword.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1j2C58tSxZH_hhrkAHGkgUEjGU4FqcXRG/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Shadow had me and Beta train in his own style of swordsmanship using a blade similar to his own.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1xhjgZ-4mvswXW34dkio5VupKB6TQTVHp/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "But after training Gamma and Delta for some time, he changed his instructions and had each of us develop our unique styles, and then stopped actively teaching the sword.",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1a-YQas17eec1zjTfOH9VmOUTOZid45uC/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Because of that, each of us has come to use our preferred weapon.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1TFdUQk5WmJ9MtiwTxyROYxvEJJNd0ZH7/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "I see... I don't know if that's the cause, but I have some concerns, especially regarding Lady Epsilon's swordsmanship.",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1zpJcwNt4IFFpnc2Uk-fvwNrqG3A2LyMg/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Perhaps it's due to her creativity...but unlike the swordsmanship Master Shadow taught the other Seven Shadows, her style appears self-taught, with an emphasis on magic control.",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1OMOq6BVZPgLerq60nKI6BQYfe8F3XPmI/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Lady Epsilon's swordsmanship is unique to the point that anyone knowledgeable in the sword can recognize it at a glance.",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/13SiGk5jfbYDpJdwLnU_Gkq65R0QFv0sb/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "As for Lady Gamma and Lady Delta, their swordsmanship is far too primitive and reliant on brute force. They could both use some form of retraining...at least in my opinion.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/11JrYDlSGqoqieu0-bR56xiBFah8wXBcd/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Shadow must have anticipated and factored in such stylistic deviations in their sword technique. After all, everything he does is part of a greater design.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1qexuF1pNCPY9KpKYuyr8GXMTSpKfTwXF/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Still, as members of the Shadow Garden, it\u2019s an absolute requirement that the Seven Shadows train in Shadow's swordsmanship.",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1A42ov_ip-o3ygvw9SJljJ4rFax6rLq2W/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Thank you, Lambda. I'll continue to rely on you for such matters.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1uZtZv0JrAE1imSqN8kdfX0xW2CAGkw8s/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Of course. That is what I'm here for...",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1PUsXU9LlrCoHp7Nvh88BGTRKhMz3dA5c/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "To serve Master Shadow and the Shadow Garden.",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1V9HuN-dEwx46A4EsVuJVde7As2a8IJCo/view?usp=drivesdk"
                }
            ],
            "e3": [
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "I'm picking up on something strange.",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/14PV-O7xK85zMbmVKuStyRwt2b2d-GMej/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Epsilon?",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1_vpc-rjvXUvLCLkQCYZ4v3kmA05N0mnx/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I can faintly sense it as well.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/19Rn_nR6T_KpG9IsRC3yEZUeYeM78kWVL/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It feels as if...something is bending space. Epsilon, can you pick up on anything more?",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1xBpTBsGNyTKzV-7fBuvuYS5HF68iO9-i/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "I'll give it a try.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/10KGB5opQ-PkQQfFxTsgr4mp5vja6Iedf/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "...",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1EVhEMJFTp11okydqaYcCTbSnjib9F3cX/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "It seems a powerful magic barrier is obstructing our sense of direction.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1V3A2BAleR32aJvtj2FwDPuee_8ARMS6G/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "You're saying someone is blocking us from advancing?!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1TBReDqO0cNWxkJWEZLituV_ROXjzlP7S/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "...Guess that means we're getting closer to the center of the Abyss Woods.",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1Zonh2UOMsJIecKsw7DVROQ7k7USyurlG/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Zeta's right. We're on the right path, and someone or something out there is trying to stop us.",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1kkC113E-1QxzMsR-qzq_0BS96x5iDi0z/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "I smell something strong over this way.",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1lnf7DA9yB4OBaKiFndKDg-zc5dQGTeN_/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Doggo, quit breaking formation\u2014",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1kfHWBKbfXGifpNNf4gpe4HNQhsIEy8BJ/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "You really can't smell it, cat?!",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1LQimVuk1XH9YcHUN1IFuoVr0_OS_KwCs/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Hmph!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/13w5q4PMihXT-31lYBEQjNPhtjm220wom/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "She's right! There's something up ahead!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/17QKZv8twkCzbzqEVsO4wtA1fFVqesDP3/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "But what immense power... Alpha!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1sHb6cVt2cc4WUUcICU6FBGUdNkv0Fhe0/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It must be something considerably dangerous if it's enough to unsettle you.",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1ZqFHkHuP2uUkF2B-h0GPWqo3pKdw1xhu/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Let's get closer and take it out! Whatever \"it\" is!",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1imVd1fYA5vn3-nQGa0wzhEy2LljjhgrX/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Dumb dog! Quit prancing ahead on your own!",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1gibl-xQiJqCkkEIgJLXvo_A8Uus3RBq-/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Both of you! Come back\u2014",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1L8UAx6AswmiW0GwHQiw2TVBXsEwtAKqQ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "No, let's have them go first.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1GsiCRwwifg6484WcMi48qIwsGSx70WoN/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We should trust their wild instincts rather than rely on our distorted sense of direction.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1WoP8HFFGUUyo1jix0yTJauGkHGxtA4AN/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "But we don't know what awaits us ahead!",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1PSrywbKf7U2WIsrGBxEodHXykP11URF5/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We seek the Garden's new home\u2014turning back is not an option. However...",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1mWPdqIv-yDlR9-LYAYFaZD9ygG9lB1Yh/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Lambda, you take the other Garden members and head back. If we don't return within three days, inform Shadow.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/13mcOMHb0XhkM4apjC1-93sAqvQGRINmI/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Lady Alpha...",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1tUIwC5-zBotcuvcXFtWG_FIjix0tlzNh/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We face an opponent with unimaginable power. We can't be certain the others will stand a chance.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1_FRh2HNJxGAmWteBa1eFP0AqRijurX_p/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "...Very well. We'll withdraw immediately.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1x70B82cUUBx4o1MT51viadkQz4JX-xKP/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Travel safe, and give Eta my regards. We'll pursue Delta and Zeta!",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1ESJTApu6xwBdczTEmL4W-xap14of-Ruw/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "May you prevail!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/19nMY9cyZjKs0JR29srPnuAgelfZu6Jt7/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "That thing...is huge!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/13wj0qTlasCuoagT6NO4jtGuGPRfHQEiA/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "So...it is real!",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1Qbf19CGAmBuFYBbWUQDWXJ_cFFipMGRB/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Delta! Zeta!",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1yoiBE_tKy1mZqoJEEpszQKDx1BbCffy-/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Oh!",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1CubcgdvII8YgeXhQUc1oU7_onsBpB2hi/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "??? (Mist Dragon)",
                    "subtitle": "Who awakens me from my slumber...",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1aHVodu00IFIYvsBf8sXK2oX7HSAni_I2/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Whoa!",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/15E-Att9bddroJtEc6E6U_vcH9iPJzmBN/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Wh-What incredible magic force!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1mFiTlHd2FHVNXPI6FEfx1tbpO7CR73Fu/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "A surprising turn of events. They all look stunned, not that I blame them.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1rIkizzZmMhYnnxEc5Z6A0c95TduFGaYg/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The Mist Dragon!",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1K1UFtlWo9ZLch5GyJZ4tXSemUy8Uotkx/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "There were those who once called me that...",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1XbdHQQ1FtaPn7PnJxCFxOA5kFu7bDzA0/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "But all have perished with the passing of time and within the mist.",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1AELc4vkgjC4lb1BJl24bvptdElLJFjY2/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "The ancient city of Alexandria as well?",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1i68vfzKLahzl5jWgNePZqc1DbMWiIoVZ/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Beta?!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1_fSiMcFLnXUNaR7LBB-Mt8QfWdzDxRua/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "...",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1xI2dfg5_1Zl5s8wrDNftlZd37N6_bgAb/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "You would rather seek the truth of a city lost to the shadows of history than the fate that awaits you?",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1hwgrKtW-HSsEXnI8qiGa-3gQMoN-Hl9M/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Even if you were to know, you would still die here without ever having told a soul.",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1jfC1wk5pJZeLIsu4udaN6x7oMp7l9nh3/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Still, I'm so curious!",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1QThxzfYGxZEMww1x7G-14PLrAVLE-Bl8/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "I couldn't gather much intel, but I'd like to use this opportunity to confirm if what I do have is correct!",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1lpAVTt-ZSCWLST8VZTwD008Qaodg4QX0/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "You would prefer that I corroborate your information? Haha! Fascinating!",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/10CDSjKOqgAq9az3r17_-DcZH2J9tDi1I/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Very well... I suggest using the time I speak to figure out a way to outsmart me!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1r1hQv5mM7CSE7cVk7sg8_vuq6wIdtrAb/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "What the heck? Turns out they both just like chit-chatting.",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/15N4xKP4jvqFLhkB913Fs0LCM9G2EXhnC/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Shh! Keep quiet, you dumb dog!",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1w8vZD_lj53tO_fvsmkOkbE6ClNtPBiCI/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Some legends say the Mist Dragon ravaged the prosperous city of Alexandria, laying waste to it in a single night.",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1xqTL46MWaa_znQhz-lUMmF-aOfyR-RoE/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Others say it was the guardian of Alexandria who made a pact with its king before betraying him and engulfing the city in poison mist.",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1VhMQ9vvmbC0Ew-M7wCTOP9qEL_80KZqC/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "How's she conducting this mock interview under these circumstances?",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1lOMZOawmCk_2oV3jAi4aRZaEYlVhXM_o/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "One of Beta's strengths is intellectual curiosity that surpasses her own fears.",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1dmc0KBqIgFNxYYTDqlDGyMdzJJKHLI9X/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "...",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1z0OaChlPvccguv3n0n4Io7wtvLpCq2um/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "There's a degree of truth to that, but it hardly represents all the facts.",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1m9-UuZprAvYXAD3BvmvfQVp35jk_VOI1/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Then what actually happened?!",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1ixC0K8spdYZCsatRNtNdWCM6VEuuakzv/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "In ancient times, I made a pact with the king of Alexandria. It was a pact between two mighty forces, promising prosperity for the city he had established.",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1ZEY42Rts5vkDg4n9Oi6hsLIKgs56V5Om/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "But the pact was eventually forgotten\u2014its details, its meaning, even my very existence.",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/159-nRrEs9HEIoMUOVfThda0MVlrgLsAj/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Not only the people, no, but even the descendants of the king whose kingdom I had continued to protect beneath my fog had also all forgotten.",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1yG23r6cxKD_k2FlWra_mBTybsVSV87cz/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "You were forgotten from their history? A considerable amount of time must have passed then.",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1dYbJgGwAa7UIDGlWUvYj6tCRExVksYIb/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "It was likely less than a millennium, which is a fraction of time in terms of the existence of life and the history of civilization.",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/10XS_p_MyHYMqAcHGgiyakjZ2zPuMIVpN/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Still, you could say that's a long, long time for a human.",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1y4lqB9SSIkRNif_XV3DPKruhGSRDGzO3/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Indeed, it is the ephemeral nature of those whose lives are mortal to be buried in the flow of time...",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1A3JVvKDXuCyaBxXx6fSa5ue956dkHCNn/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Did Alexandria's prosperity transform into corruption over time?",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1nDZZPs5GfNpRjgYSpzGIVVqiOBsY8f_s/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Clever girl. You seem to have quite the imagination.",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1J79NOTE3wngSoq2tZG3eETyHoUkSmW4T/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Yes, as the people of Alexandria grew jaded over their prosperity, they lost the virtues of their leaders who followed the ancient pact.",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/1c5JY3iSR4abs5C_b3REizWzJLzFzc0mZ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "So...that's why you destroyed them?",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/18G9hHYPqVOQzgoPbkZzo_KR8k39kmDZ2/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "With great power comes the need to prove one is worthy of such power.",
                    "line": 71,
                    "url": "https://drive.google.com/file/d/1I1gbra5Hvqumiwiuwh5N1WA4yarGQ5-D/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "One such way is a ruler's virtue...along with dreams, ambitions, determination, and a noble spirit.",
                    "line": 72,
                    "url": "https://drive.google.com/file/d/1H4OPjsywSEIilP_IP6hb80-Ao8_M1N_c/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "A noble spirit...",
                    "line": 73,
                    "url": "https://drive.google.com/file/d/1O2hz5Roo5iJbqWSyO-5ITpm-Jt269x43/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "So you sought a spirit worthy of power from the king of Alexandria and its people?",
                    "line": 74,
                    "url": "https://drive.google.com/file/d/12Fk8ifKyUwfubuwEV63KzoCh9T0MyZqA/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "I seek it not just from humans but from all life!",
                    "line": 75,
                    "url": "https://drive.google.com/file/d/1MFEgcuXZ2EazgGpOFg1v4Mx1Qmvu2XsG/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Those who lose their spirits and pursue only the comforts of prosperity are not worthy of the blessings such power bestows.",
                    "line": 76,
                    "url": "https://drive.google.com/file/d/1IgXMtWcA6Z89G86Hz3N_2-SgazuJtZPr/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The lives and histories of other races pass in the blink of an eye for dragons...",
                    "line": 77,
                    "url": "https://drive.google.com/file/d/1KMb8ZRTr0H3vfuzJVe4qaj_mwlWGz1r2/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "So because of how slowly time passes for dragons, you place value in the spirit's relationship to power?",
                    "line": 78,
                    "url": "https://drive.google.com/file/d/1LMttgLvigBsYjGZ24RVb6zl5eqHu_w8Q/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "I had hoped the wisdom brought to this new city by the ancient king would transform the world and the lives of those in it.",
                    "line": 79,
                    "url": "https://drive.google.com/file/d/1fGXg66saSEngJn4quVEJO2-oRFW_2DwY/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "And I had hoped for the manifestation of spirit\u2014the power to stand up to the strong, to nurture one's will, and to ascend higher as living beings!",
                    "line": 80,
                    "url": "https://drive.google.com/file/d/1ho7bXIofRITifJjye99mILsnh1MrAREd/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "You know what I mean, don't you, therianthrope? That exhilarating moment you sense the presence of someone powerful.",
                    "line": 81,
                    "url": "https://drive.google.com/file/d/1sWpNdsRrDJHIpUtRbvdnUdN7oQGMLK6T/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "What're they talking about? Can't hear from this distance...",
                    "line": 82,
                    "url": "https://drive.google.com/file/d/1o9CRbmddV984Y9SaaIxqketrg_FLfy7H/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Oh-woof, I do! Fighting against strong folk is super exciting!",
                    "line": 83,
                    "url": "https://drive.google.com/file/d/18j2FsKKpHyRNR-QowQYMFJARZExmiEne/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...So the city of Alexandria no longer sought strength and fell into corruption\u2014that's why you destroyed it?!",
                    "line": 84,
                    "url": "https://drive.google.com/file/d/1bvJTijEKPZxll-zBLfrqYiWeGqsqWnos/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Precisely!",
                    "line": 85,
                    "url": "https://drive.google.com/file/d/1P7ySr30gZ1xqHnNUJo2xyXXhikBTYmEr/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Graarrr!!!",
                    "line": 86,
                    "url": "https://drive.google.com/file/d/1b5Yd0IWyA_LGSbtWlJ0WYbIBKYYzyKEa/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Eeeek?!",
                    "line": 87,
                    "url": "https://drive.google.com/file/d/1SSmEyldMBOqW4Jhty0f0OuijpGHztMin/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Their end was swift and unceremonious. That city, once so prosperous, was destroyed by a simple change in the direction of the billowing fog.",
                    "line": 88,
                    "url": "https://drive.google.com/file/d/1DrUh4PsF7Vbe62MpkpszS-5FmMvk1fB5/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "So you helped the city prosper and then destroyed it with your own hands?",
                    "line": 89,
                    "url": "https://drive.google.com/file/d/1pn_mX3rCP2fneDNwSghPdGswaiGbaaNj/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "All that giving and taking just makes you one selfish bastard...",
                    "line": 90,
                    "url": "https://drive.google.com/file/d/1DB1cdOfkzWq28Ueiy0R-JNLC4xMW2NIo/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Give and take... Exactly, therianthrope! Ultimately, those are the only two things that move this world!",
                    "line": 91,
                    "url": "https://drive.google.com/file/d/1H5CUHl1JVoZRAI8XFvCX5_-sEZw_3uyV/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "And you...who have ventured.deep into this forest will be given nothing...and have your lives taken from you!",
                    "line": 92,
                    "url": "https://drive.google.com/file/d/16ShzhG7w0UmTLOwFt7oCtOEPKgzsVlTb/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Yikes, looks like they've upset it.",
                    "line": 93,
                    "url": "https://drive.google.com/file/d/1smKQ90bC8HA6GVmIma3WFR-6d6Z4ABPQ/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Lady Alpha! What's our strategy\u2014",
                    "line": 94,
                    "url": "https://drive.google.com/file/d/1ehEVAl2f9ZMtk-t3ef0ecsAcil4ti1cw/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It never let its guard down the whole time we were talking. We'll have to work together to defeat the dragon while avoiding its poison fog!",
                    "line": 95,
                    "url": "https://drive.google.com/file/d/1tyiNlHXDHlAFl8MYM7NJXYWqpVEzOMsT/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "You mean fight it head-on?!",
                    "line": 96,
                    "url": "https://drive.google.com/file/d/1IxQMFYD5dR5hd1uZySL0AkxRCLqiaUpR/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Tricks are not likely to work on it\u2014this will be a pure battle of strength!",
                    "line": 97,
                    "url": "https://drive.google.com/file/d/1kpGHDrKqPJR3ax8G2NSjJtpNzwqTMSDt/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "A face-off and not a hunt... I'm getting excited!",
                    "line": 98,
                    "url": "https://drive.google.com/file/d/1kWyKrbB9--BQhnV19TI3tBzqA9b0aYuM/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Another passage soon to be added to the legend of my existence!",
                    "line": 99,
                    "url": "https://drive.google.com/file/d/16suIDmnMMS9qgyTiIGtolDegiOBsAW6x/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Curiosity killed...the elves and therianthropes!",
                    "line": 100,
                    "url": "https://drive.google.com/file/d/15h3cmKYZCuNLmEfC7gog96IDZ_zi0Q6g/view?usp=drivesdk"
                }
            ],
            "e4": [
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Tsk!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1PNHx_XgpBDmfTtQZevAmXZkwse_qrbcp/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "I see you've aimed for the arteries leading to my heart...but you've missed!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1MGrKUYUotOoB_7TGlQrfmieF2AXUsCr-/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Aghh... Its attacks are super strong...!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1KCmuV8GC62tynSNUvqIBPCz5BVwLIugp/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Zeta!",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1SVhAEmzfR6Eb0EIvLReiYwkuQpIHuoJq/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Do better, cat!",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1EHr2b1VJu1wi-JLF8ZXw1lsIcfZgL-xi/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "You dumb dog! You can't attack it head-on\u2014",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1517zxK3B8BgMGrFO3aEK3teKbfwl2z4-/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Graaaarrrr!!!",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1sBAENPrlraG45-oNWTYW-bvTXFrH2sPC/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Brute force stands no chance. against a dragon!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1GyciQTc4PvUQhbSV2xUQHh7ogxOe692A/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "It blocked it?!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1ldMJAtpV_RmAYyaiSTKDOxISsnJN5_NG/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Hey Beta! Haven't you done some research on this bastard's weak points?!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1Lb0Rwl81wj4bzrhbJv5vM97LsoEy6rHK/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Don't look at me! I didn't expect there to be an actual dragon in the woods!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1vxHwilcBwmKKmX3jbUroM_E381oGjX6f/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Then what about dragons in general?! They're living creatures, so they can be killed, right?",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1ZUVCD6RIvbLV_D-MBkQVL6f1MMVVa_PF/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "...",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/19mUfz3_EJaDdOWjfF6qY6WAl2BAbEnNz/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "They don't...have weak points... None whatsoever as far as I know!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/18n_Vl1S5PgibgiNZeT_9BCvK6zroWEc0/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Whaaat?!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1_DOo5FvVjrjOWOob51L2IQZLbsu7Y5j1/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "In fact, it's said that slaying a dragon is impossible using standard attacks\u2014",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1MRxFp599XmMnblWHaRS2ikEEydUqjrsJ/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "What?! But that's cheating!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1Qhf_96LSIi8xP08iBCuVFqwvirRiMke3/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "That thing's on another level. Sounds like humans don't stand a chance.",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/17NJmvmP-5P29wf7xQ4-B6PMWrbWbktVU/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Definitely not your run-of-the-mill monster. Not that I'd expect anything less from a dragon.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1C1s4nHucyA0Rd3E6i7u1uHfTjsmtVSNv/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Now then...guess it's a matter of when to show up to the party.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1F9ULg2fSKYag-xWQD4WciDlaBOAmQdOH/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Welcome to the real world, little elf, where here be dragons!",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1pn6WDBwfEkghtiBZp_2vMhLTbTKm6cCQ/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Eeeek!!!",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1h_L5TLzFloax0Q4ACJlFnJdfl8XHNwvX/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Epsilon!",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1OQZdOQOVAXlrUMYCH8A4oJSPPcaVP9Om/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "D-Dodged it...just barely!",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/10iDtkcF_bG877j7_KtgEOankzZ54gAvM/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Not sure what you're defending, but it seems you're struggling to dodge my attacks.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1CXOWsWj6dDagdO1EZBQESaDsuZa3TQ43/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "No one asked you! Your turn, Beta!",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1TXwnglCHPZoVgmp9psvIUjUCPqQOm9Oe/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Got it!",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1VGmr2r_HLzy3uXNtppA8UTzsidHdzDbk/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "That was a definite hit, but it had zero effect...What should I do?!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1T32a2uPEzrFNutGhIWMCHI3uko6LOjpZ/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Aaah!!!",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1dpkvfy2S2nYMC1p-EU7-AUSACECAM65f/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Beta!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1LORk5HqhBAfY8apqrn79sMj7LuDn2dBp/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Take this!!!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/16EDBcl2clb21D05xOicvWKHKqC_dzCEi/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Gamma!",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1bLG-xMB-Z4vsmZNnD7mdTwCtYk-0FMK2/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Beta! Epsilon! Stand back!",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1av0IDvKgzcKhBJkUcpTN36l-odfo8uv0/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Don't have to worry about missing when the target's this big, but...",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1vCF4fhWgUz6iMzb0SqJer6pLZgvc7pZI/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Hitting your target is not the same as defeating it. Indeed, the wiser are quicker to despair!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1j2MYAU-WZziyNHtYSGE882f8W4Ww8H6Y/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Heh. We'll see about that...",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1X_r1oVypUZ1g3EHj29lUf43b9AHNY-JD/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Hmph?!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1pdHFvNJ7wEG7wHjtKj4AAIv3MpKCvP84/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...With this single blow!",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/17o-0Wre3Jiwa43dBmQUKS6yKDaXMSqRU/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "It worked!",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1OBgo5BNBrUcQTIwRTQPwaN-YiNpMWGt9/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "A deep blow to the spine! That would take out any living creature\u2014",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1F97gCR0D_2JYv53GpHwROR41Typ38Pup/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Cleverly done, noble one!",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1Xr5OYCZF172J2g0oQKHXCA-IrH8rYawC/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Huh?!",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1rwEUJEn9RJit6Gv3hJcx6w-nmwqpg3Gj/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Agh...",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1-kI2WwGZ1W-zrvXHOEeTjUJMoKwoEUxZ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Lady Alpha!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1aFjyUiTPbmSWI1YXyma6JjyEUkCqkASU/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...What strength!",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1TKKMnzsWiu3_z2Bsnei8xfOap_aPWFhV/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Well then, time to get started!)",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/19YJiHSAKrDFY_EDrME_YUn0XQZf-EfIl/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Indeed, I am strong.",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1GAUkkxaEoVpRt2n0OYgwnksqEAXM54q8/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "And so are all of you\u2014so strong, in fact, no ordinary being would stand a chance against you.",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1fb9Jqvhb6f1he3WwHjkfHqbT9ZZjd5YJ/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "However, in this world, there is always someone higher up in the food chain...",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1-3b9-zEt2AD0L_iP1dFAHVtwVXqhh1ro/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "???? (Shadow)",
                    "subtitle": "Indeed.",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1UPyL8iNhJsBIE9bNf-4NaDOtlNmsfq81/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Huh?!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1al7bbAbLJCaQT71BjmsLsnVfbwINdSHY/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That voice...!",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/16nmXMrtWHRF3atA_24frr4QkkDdmBWe1/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "???? (Shadow)",
                    "subtitle": "The same can be said of a pathetic dragon who carves its idle history in the shadows of this sleeping forest.",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1yZsLX_WJ5__2te-zFMwpTwY3sHiWB-T-/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Who's there?!",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1F5WSM7AEKMq-pPji0lnjduaEeYt56XaK/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "???? (Shadow)",
                    "subtitle": "...",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1jUPY_Vaw0R2qNBiz_8IPdYp62mZf89n_/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "My name is Shadow. I lurk in the darkness and hunt down shadows.",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1CeMUXC9vuy7f9wqmoEdsmhxY_5bKucqP/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "You wretched creature, playing games to relieve the boredom of your perpetual existence. I shall cut you down with my blade.",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1odU7nyHtSmVZqrq9fCKHUOUWZd6lhdEU/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Shadow! You came all this way to save us?!",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1k6EreK4jwN-XAxpaRhbJ9D1IzoJMiGtN/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Heh... Nailed it! Did my intro and called out the dragon. Total isekai move!)",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/16aEoC4CQhlbsqIQM9m_nEwQzq4Z3LOrN/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...I got it! All of you, block the dragon's retreat! Take care to avoid the fog! We'll encircle the beast and gradually close in!",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1FOPSBLwgd0I7d_MmI6hxYoGJa6OREkiy/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "...",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1Igf8G6EkCPoVMtx_kMfBH99-qM9sj66E/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Hmm. Pretty sure I also nailed that pose, but Alpha's ad-libs are always the chef's kiss!)",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/14RzUDp0nqUGVSfv1eV5moos9SzV2Skk3/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Shadow! Your orders for the Seven Shadows!",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1xGHJfrbA1x6Lus0laKwP28mjekzffepV/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Alpha\u2014all of you, stand back. This is my battle to fight.",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1EkIM9HL3ZE1rjL_n_idm6378IQ5hw1_h/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Master Shadow... Understood!",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1wTNidjrBqZKjN-YjPw_Q295eOLBBOH-d/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Ahhh! Master Shadow! How divine! I must write down every detail of his majestic visage!",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1D_ESj8njqjGPhxj2gJyLlYaZCEmxtktc/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Beta...how're you taking notes during an emergency like this?",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1HzCpCS1lrD3ulo9sYUokUmCVR8RQDlJv/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Not that I'm any less excited Master Shadow is here! I'm so happy I could sing!",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1zXashFsLdEZDKLphM7np97ugX7XNPpc-/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "C'mon, boss man! Kill it!",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/177CEQfOzi-QIdS5IoVbP0Zr6f0batQ4B/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "Will he perform another miracle...against our most formidable foe yet?",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/1uwMFdfn0FSnUUwRtcVCRih2yzEs62t-b/view?usp=drivesdk"
                }
            ],
            "e5": [
                {
                    "name": "Alpha",
                    "name_variant": "Seven Shadows (Alpha)",
                    "subtitle": "Master Shadow!!!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/18mAUEwZ80ffoI1QB98XcETkUGr68Cg3s/view?usp=drivesdk"
                },
                                {
                    "name": "Beta",
                    "name_variant": "Seven Shadows (Beta)",
                    "subtitle": "Master Shadow!!!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/18mAUEwZ80ffoI1QB98XcETkUGr68Cg3s/view?usp=drivesdk"
                },
                                {
                    "name": "Gamma",
                    "name_variant": "Seven Shadows (Gamma)",
                    "subtitle": "Master Shadow!!!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/18mAUEwZ80ffoI1QB98XcETkUGr68Cg3s/view?usp=drivesdk"
                },
                                {
                    "name": "Delta",
                    "name_variant": "Seven Shadows (Delta)",
                    "subtitle": "Master Shadow!!!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/18mAUEwZ80ffoI1QB98XcETkUGr68Cg3s/view?usp=drivesdk"
                },
                                {
                    "name": "Epsilon",
                    "name_variant": "Seven Shadows (Epsilon)",
                    "subtitle": "Master Shadow!!!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/18mAUEwZ80ffoI1QB98XcETkUGr68Cg3s/view?usp=drivesdk"
                },
                                {
                    "name": "Zeta",
                    "name_variant": "Seven Shadows (Zeta)",
                    "subtitle": "Master Shadow!!!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/18mAUEwZ80ffoI1QB98XcETkUGr68Cg3s/view?usp=drivesdk"
                },
                                {
                    "name": "Eta",
                    "name_variant": "Seven Shadows (Eta)",
                    "subtitle": "Master Shadow!!!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/18mAUEwZ80ffoI1QB98XcETkUGr68Cg3s/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "You've grown tired of your own power and perpetual existence",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1Li2au8fyZXw6yQ1NlKBeavbBERvdK6QK/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "while you idly gorge on the flow of time\u2014",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1GGVJG5_JpabVAPKolVWKeAzmGHXOWnOS/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Ancient dragon...what is it you desire?",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1dZ6eotla_1_YwnmK3MT93Y5oFMVFJbsd/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "You...are no ordinary human.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1PDx1zz8SUu8Q761JRPyINUTxgU9bLzrt/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Indeed, I am!",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1osoF7jd-_ARtRwsThymXyA4tibZ_Qn-2/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "But I'm a human far beyond your pitiful imagination!",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1EzY1Q-m0Z-ljyA41R8tE8-5hkfXLx185/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "His attacks are clearly working!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1oTLHBR0v70MgPruCnAbKLja3a3hwMo4-/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Master Shadow! None of us stood a chance against the dragon, and yet...",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1gkfQw1KDxhHWmvARaiUpJCiSCaU-wJc6/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "He's got it in the palm of his hand. Incredible!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1ltj-DwL_cpoAf82MCWHiYOH8PoiYTw1Q/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "Boss man's the strongest! That's why Boss man's the leader of our pack!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1qYmkcKR_AqTyi0AtFfu2yOhquIHPU9TI/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "When did you last experience the arrogance and hubris of the mighty?",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1MKpzRwwE2rQPQCia37QnpcibE4ohgo6F/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "In any case, it seems I will be the first to shatter your unchallenged indulgences head-on.",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1Gqxrn_z-FDusp_5pCBc-DHuY63NgbTce/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Heh heh heh... You think...you can slay me?!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1cDsdUc5RhFSt4SMUhefDeYIKpiZVZBqf/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "This fear...it brings me immense pleasure!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/18TqfukcdtxO--s5OWK_TLPZT0kOE9UdO/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "My ancient pact was once discarded...but the world has returned it to me!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1hJXX0q4VYqtPSzpVzS4HOGCEEN8cg_6H/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Yes, perhaps you may be the one... However! You make far too many unnecessary moves!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1mZr5oF-R1SbgnjLmw_-k2Bx6tXNeZSKf/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Master Shadow!",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1F9NBmHRi3QrVA9-ZqDya5hKuzLWOK0o9/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...No, those moves weren't unnecessary!",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1CIagDm73OXjPlvr_lo6d0gjtRHnsUSB9/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Huh?!",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1Y6eCQ7ZEkbWNNPaVubskYN2pzyS0IW4m/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "Unnecessary moves, huh?",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1Trunibq6XLSsEH_mQi_Pf_EwQvX-qUAX/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "If only your power-obsessed, arrogant mind did not cloud your judgment...",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1CWz9g3YWDPJTEJzCRsqDrh29wy90VAcp/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "...you would not have betrayed yourself to an unknown foe.",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1NYpsYww7ANtaj2vCdOuyh9AXmhLRAgOZ/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "My blade shall always take the honorable path!",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1C7cIGwwfBpBU5PcNcy1n14OwnG8pLz_c/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Im-Impossible...! Your moves were no arrogant display of strength\u2014you calculated them!",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1fJLSdLUgqYxQtvsyyYj0b7GGOM3daXfS/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "I may be strong, but more than that...",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1ch_yrzsZ7LINePbfo46GOBfEBrs2YF4_/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "I am strength incarnate!",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1IhtnawSOlVmWsPzJ3MK_RydsT_EpTkIq/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(A bit too simple of a closer, maybe?)",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1pavacI7CQZEa4z-Mn9DdBvCNGqyF038u/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Might've been my straightforward handling of the dragon's fatal error caused by typical impatience, which resulted in it overreacting to a simple space adjustment on my part.)",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1btu0zbjIGIxPveWPwaqmRAtXY9l5dLnp/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Oh well, guess there'll always be plenty of other opportunities.)",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1SxZEWfUpDraBrIV-QhlHSpq7-FHY-2tS/view?usp=drivesdk"
                },
                {
                    "name": "Epsilon",
                    "name_variant": "Epsilon",
                    "subtitle": "Yes!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1geU84uHe2dc_XrlCvmCkLNm50KSsxTY9/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Hold on, wait!",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1ZNBQ4dBRuE3kxXwaaCQkaZDgTTIJtq8W/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Grarrr...rarrr...rarrr!",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1QW-U5Tu0IoqI6VigmZIMOhKHiCBwoza4/view?usp=drivesdk"
                },
                {
                    "name": "Zeta",
                    "name_variant": "Zeta",
                    "subtitle": "It's still alive?!",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1_CHUtwuOrzt-ln-B4B2Akay9QpAB8uji/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Something a mere mortal like you...is unlikely to comprehend!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1U3lDj2Oc_Be_abL6qZhgyL8la7ZmXPl2/view?usp=drivesdk"
                },
                {
                    "name": "Delta",
                    "name_variant": "Delta",
                    "subtitle": "But you've got blood gushing outta you! Do dragons not die?!",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1BrNLkuLKOEEoo5GUe3dt7u9Os2S8pXr0/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Really good question.)",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1daDwpfrleBzS1MJSIBG16uqOeVEMzhM7/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Doesn't seem like an undead, and I doubt it's a number of \"lives\" left thing, a \"defeat using a special method\" deal, or even one of those glitched unbeatable bosses.)",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/18hhEQ8rols0-Zuq_GJkSJeButHEs0IoQ/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "This world is cursed...so that no dragon...is allowed...a conventional death!",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1d2uuORcjVsA50UQA6TB-3L0iCCaCpG6Z/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Hence...true victory over a dragon...is gained by having the power...to take its life!",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1jniMNc1o06eeq0-gIVmXLui7NHQ7vfnT/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "My ancient pact...is to obey those who possess that power...on the condition that one day I will be given death.",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1ZP9gJ0c6TUP_9WZqxDvcwbIcR37L3kEu/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "I see... Interesting magic.",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/17TA3QC31IO_nhqCxgVnzS1I-ZMNVUyMI/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Is this...some sort of marking? Just wish it hadn't breathed on me directly. I mean, it probably hasn't brushed its teeth, right? Anyway...)",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1tm8gzQdwUjF6U6XP0Wgn7GVC0edklrGX/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "My power will be with you always! You, who shall one day end my life...what is it you desire?",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1uQst7pGARGxVGTFaCA9yotvEoyr14dny/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "...",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/12zWL3-z88eYszuTArdUSmrgh63AMBGhZ/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "...I couldn't kill you off, which means I still have more training to do.",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1qML8qMtQ7a7PZv5i4DPpHjtbW-NszSJh/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "H-Hmph... It's not that simple!",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1kbRMOKdDTdcqEQrDXrFMBrzTFDBWlajc/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Well, that's what it comes down to. Besides, my physique is still lacking in a lot of ways. Should resolve itself with time, but it's a little annoying.)",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1Nkk9HW4WB2S0F8VKefo-oaav6yAEEYQl/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Oh, looks like I'm outta time. I'll miss my sister's curfew if I don't dash home.)",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1cRBq4LPl2WysH6OIfthYjjcTktLCFH3S/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Shadow",
                    "subtitle": "I have personal matters to deal with. I'll leave the rest to you, Alpha.",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1D0Lif5Tly1OqC0tife3PK9rgmmpzE2TL/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Understood!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1a50TaePtFoXcahm7FVeqDQEKPLJOqXvl/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "...",
                    "line": 52,
                    "url": ""
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Hah hah hah... This Shadow\u2014he's quite the extraordinary individual!",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1gKW1aXIiTBiMA_zwzemXefCuRK878nEi/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "So you are the allies who follow him. Why do you travel through these woods to the ancient city of Alexandria?",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1pK5i8T100Q2MQBamfgUrvWU3fSJQqhQX/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We seek a new land worthy of Shadow and the Shadow Garden he leads.",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/14_bvRmtJ73Np1IYcPFN3kH3WpE7yq1eE/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Shadow and the rest of us have work to do. We'll need a place to lay low and build our strength for this.",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1GPYgYUL3QOhBbv9iiWksIt-yDgeG0GWy/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "A new land... I see!",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1hRTrMbD-bfK5TtmDkmC4V3SHo8O8CVYE/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Increasing your strength will help him come closer to uncovering the truth of this world.",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1hc43Ah5osAm1XmRpHLHmC1Ad_4bXGh5R/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Very well. Let the ancient city of Alexandria, combined with my power, belong to Shadow and the Shadow Garden!",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/19PWD9onBl8XlAYGCPCrPaHMG2NI0Nsbt/view?usp=drivesdk"
                },
                {
                    "name": "Beta",
                    "name_variant": "Beta",
                    "subtitle": "Ohh!",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1bO5JiMNvhR_W0-WMmJjbUxDnOVz6L_Ch/view?usp=drivesdk"
                },
                {
                    "name": "Mist Dragon",
                    "name_variant": "Mist Dragon",
                    "subtitle": "Henceforth, this ancient city will be your stronghold. My mist will be the veil that hides you from the world!",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1bcVePIH4DOk8PC87UrCDcNtT79MFJIEm/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "The fog is clearing!",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1_kaqxrQSYcHPYcLRvqF7x7qswMtspRlQ/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "So...this is the ancient city of Alexandria!",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1nJ8czgCZ3EJVDUEqkmQ_CGmoB5KhRf8z/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Lady Alpha...",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1_o3FwxkiDC2G9v_gm0Dy-8t8GLE-3l47/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Gamma, return immediately, and inform Eta and Lambda.",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1_e8kO555tlW8X5wEUue2FfJtsYcxWh6n/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Our base relocation begins now!",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1tJi_GyKE91EqrF7_55mLtWogaK0omJ_E/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Here to report\u2014eeek!",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1hvxcMoGNVBEaOUl-Pqa61nae8cmmurYg/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(As usual, she manages to trip on nothing. Is there any way to utilize this talent of hers?)",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/14Le9VFlvCUaaeDyMXEn2Wv9jbHsA59Wr/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "S-So sorry... I'm here to report.",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/1mtjpfDWvkntR3EbRNdIUdY7X-Nm8UwGy/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Your nose is bleeding.",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/18pEXURf5NYgSqfUFzUdtvMREX3Dom-eA/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Oh! Excuse\u2014me we've commandeered a new base.",
                    "line": 71,
                    "url": "https://drive.google.com/file/d/1WyvWWrz7V7vjFe9pZa-BX7xtbWkXqi1c/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "The relocation of personnel and supplies is nearly complete, and the new base should be fully operational by the start of next week.",
                    "line": 72,
                    "url": "https://drive.google.com/file/d/11XDturKBLhTInAC5ONGRPoAuCn22zUxf/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(She's got mad administrative talent. Bet she's the type who'd be amazing at simulation games.)",
                    "line": 73,
                    "url": "https://drive.google.com/file/d/17tdouUeZgZYTN8WDwaunyloj0Y7KQI_I/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Keep it up, Gamma. Always strive to improve yourself, and don't get complacent at the new base. Upholding that mindset will strengthen your foundation.",
                    "line": 74,
                    "url": "https://drive.google.com/file/d/19QOFOJ151h025RuFmee-WOCskATueluV/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(If only she could channel her talents to take on a little more action. Well, I guess people like Alpha and Zeta, who can handle everything, are the rare ones.)",
                    "line": 75,
                    "url": "https://drive.google.com/file/d/1BW3Q1bOqbEG3OWHAd5TQ_nL6SmlxGRaa/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Understood, Master Shadow! By the way, regarding our new base\u2014",
                    "line": 76,
                    "url": "https://drive.google.com/file/d/1cFWmp2JH3Gv4YUM0f3ER9z9uZA0TJc3H/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "Hey, Cid! Everything okay?!",
                    "line": 77,
                    "url": "https://drive.google.com/file/d/1WcN3YD9FEDuWYQn5MHFlpOXDT44SvhIA/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Aaah!!!",
                    "line": 78,
                    "url": "https://drive.google.com/file/d/19262trNBCz4Efnj_-4w4u4bzvgZNCmg9/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Wow, she didn't trip this time.",
                    "line": 79,
                    "url": "https://drive.google.com/file/d/1jwvKyD6bu-1eL7UOLGftqhQH2aKdPdFN/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "Cid?! I just heard a loud crash",
                    "line": 80,
                    "url": "https://drive.google.com/file/d/1KpS6pmcILOY7VcFrNIKfACDC8wFxVL4n/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Hm? I'm fine. Not like I tripped and fell or anything.",
                    "line": 81,
                    "url": "https://drive.google.com/file/d/1HsiRNs2w73kFUxJq7nuyKXzSQFW8TRt4/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "Really? Well, as long as you're okay. Jeez...you scared me.",
                    "line": 82,
                    "url": "https://drive.google.com/file/d/11lSXgKwyih_uuLTjeJMOsL0nrvEwknuX/view?usp=drivesdk"
                },
                {
                    "name": "Claire Kagenou",
                    "name_variant": "Claire",
                    "subtitle": "Anyway, I just got back, so hurry on out here don't stay cooped up in your room!",
                    "line": 83,
                    "url": "https://drive.google.com/file/d/1QZHqgYf7O32LW8_88mDj4q7v-Kp8fZ37/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Got it. I'll be right there.",
                    "line": 84,
                    "url": "https://drive.google.com/file/d/1X5DXdEK06q3ScVA5g8j9pkitrXVQG9oX/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "What a day secretly spying on the girls' merry picnic, fighting an enemy of enormous strength, and taking care of everything here at home...",
                    "line": 85,
                    "url": "https://drive.google.com/file/d/1SGmM45whhBYFbnhlLZTkkTH86xc0H-gg/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "It's not easy being a shadowbroker.",
                    "line": 86,
                    "url": "https://drive.google.com/file/d/1sTVyt_iDVbGIOWgX_3KEC2GqENEuEilJ/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Looks like Gamma's gone. Wonder where this new base she mentioned is, anyway.",
                    "line": 87,
                    "url": "https://drive.google.com/file/d/1xuz7QajxqBoTKEJQk3TFfkVSjGeo-lgG/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Well, knowing Gamma, I guess she just wanted to chat about all the fine details.",
                    "line": 88,
                    "url": "https://drive.google.com/file/d/1tglTNZxq9c_Scc3Rriy1kVzc8SXFdR1M/view?usp=drivesdk"
                }
            ]
        }
    }
}

let setDoc = db.collection('data').doc('ssc_p1_c1-3').set(data['p1']['c1-3']);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
