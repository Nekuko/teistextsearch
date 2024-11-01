const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "aystpm": {
        "e1": [
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Lady Alpha, we're all here.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1jxWhmeX4r0xUSc6teKnI1p8FSZEhtNvS/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Right on time. Now then\u2014",
                "line": 2,
                "url": "https://drive.google.com/file/d/1bGqX1GkOk3tvXw1ChmCNEAzYrM1KR9YT/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Let's begin our meeting of the Seven Shadows. Today's topic is how best to entertain Shadow on our upcoming day of celebration.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1Erqov9yeD3Si55VvghNaghZmymVC2BLs/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "So, it's here once again...",
                "line": 4,
                "url": "https://drive.google.com/file/d/1Xn9V7bBAtLIVani3stM2bZG3Wf1-n6d_/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Heheh. Gamma's so nervous! Weak as always!",
                "line": 5,
                "url": "https://drive.google.com/file/d/1_lcpqGpPCABBGnaZSWuVK3o5a8zl-Gbo/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "It's normal to feel nervous.",
                "line": 6,
                "url": "https://drive.google.com/file/d/13wUOSD2uNkFAL9kwH3Xsv_wwiatXbdQ1/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Yes... We must always think of new, refined ways to ensure our lord's satisfaction.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1tI4qm4FaZ4ioaKaNYssfngaCULVEQ7Au/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "We might as well aim to do something that'll catch him by complete surprise.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1T7uC56od4EYb2ohSd6J-o99AHV-H_di5/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Honestly, if we don't...I doubt he'll be satisfied...",
                "line": 9,
                "url": "https://drive.google.com/file/d/1dSVGftVJE7tdLu4DgCsh5oLljs9MzIxN/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Your concerns are all valid, which is why we're holding this meeting.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1s7wRPYv6GCu3rVQ0Y-TT-xEjM9CkJQ2g/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "First, I want to gather as many ideas as possible. Does anyone have any suggestions?",
                "line": 11,
                "url": "https://drive.google.com/file/d/145bTBUAoCrMpuQA5SJKyqEQ4GpWfBAjQ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Me! Me! Me! I've gotten super good at masking my presence! I can totally sneak up on Boss man now!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1m5o_eJvYmH16GuSaJCT7Y-RT4kZU7SCZ/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Okay, I'll bite... What exactly do you plan on doing after sneaking up?",
                "line": 13,
                "url": "https://drive.google.com/file/d/1CM3xFtSWhPgyeDo7mP9tuItJrG9ey4Yk/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I'll go, \"Boo!\"",
                "line": 14,
                "url": "https://drive.google.com/file/d/1BS5dZ7sgoCIwi5S_o-eVpK_9jH_gB0bj/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Don't you know the difference between scaring and surprising someone? The whole point is to make him happy.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1P1x5fGObyOTazzNtAwwJAqm7GHjbd-NI/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Shut up! You haven't come up with anything yourself, kitty cat!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1XGMCnbaV_Lt8YrTsmHQ0LqEJujbCh0Ia/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "That's why we're brainstorming right now. Were you even listening?",
                "line": 17,
                "url": "https://drive.google.com/file/d/1JfoxaqwIezOu4Aete7iKALK_Bjv6Jjrn/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ha-ruff!!!",
                "line": 18,
                "url": "https://drive.google.com/file/d/1cFcFVrEN1cAL8zrJEZsdrKWaUOd9a0mk/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Enough. We won't get anywhere if you two keep fighting.",
                "line": 19,
                "url": "https://drive.google.com/file/d/15fk90TS5ukpBmD7dyA0pdXnW84ArNW2G/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "But the kitty cat is the one who\u2014",
                "line": 20,
                "url": "https://drive.google.com/file/d/18nv3nbPpDrdvPX-qSxeXv6tbsqUJgSn4/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "The dumb dog is the one who\u2014",
                "line": 21,
                "url": "https://drive.google.com/file/d/1tFiSUbU91uksk0Bm9o5oTAuclH0UyGpy/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Anything else to add?",
                "line": 22,
                "url": "https://drive.google.com/file/d/17Xb8Zlm7EzEzmF28NImf-3KbDTS5Y7jq/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Grr... Nothing...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1YOBTcInRQoJthCu2NtGLquByh_O_fsKB/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Fine...",
                "line": 24,
                "url": "https://drive.google.com/file/d/1GzJH-0sAxqZtvUPJx_z4IzS948xgg79u/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Let's get back on topic. We were discussing a special kind of hospitality, something different than usual. Any ideas?",
                "line": 25,
                "url": "https://drive.google.com/file/d/1HesIBphzci-8lU26yo0zLI_F2ApzqzBD/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1aN88kIujgLtux5nawLI7JiIXrR2sFnk3/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "How about a cultural festival...?",
                "line": 27,
                "url": "https://drive.google.com/file/d/1GlN_XhhaivxGwVPdYWxX_KYfl2EHEMyK/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "A cultural festival...? I'm unfamiliar with that term... Is it more Shadow Wisdom?",
                "line": 28,
                "url": "https://drive.google.com/file/d/1L3CPNIi-3g1MLuMY-ned4V1v_UwPFK3d/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Exactly. It's supposed to be an event where everyone works together to put on a festival once a year.",
                "line": 29,
                "url": "https://drive.google.com/file/d/1lhNEG8EOMo4a-Kk5ZvHW_cGWLdWK4jhV/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Master Shadow mentioned that it's an event where various attractions and forms of hospitality are created from scratch...and then showcased.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1fenfJIW5FxCcZX1vqE-Xe47-gGz1r6BU/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "If we were to host our own cultural festival and invite Master Shadow, wouldn't that be the ultimate form of hospitality?",
                "line": 31,
                "url": "https://drive.google.com/file/d/1EBrg8-8OH2fyPBLakuy55YDLlI3-hNSQ/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "That sounds great! It would also be a nice change of pace for everyone in the Shadow Garden!",
                "line": 32,
                "url": "https://drive.google.com/file/d/1i-iOX0VML9C8vc-ZTHAaLAye5ElNuFYS/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, I agree. Let's go ahead and host this \"cultural festival.\"",
                "line": 33,
                "url": "https://drive.google.com/file/d/1gokoBC_CSp8jig2QDaLTylSTFx-ZMRxo/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "We'll need to start by assigning tasks. What sort of attractions did he mention?",
                "line": 34,
                "url": "https://drive.google.com/file/d/1ek1rYSI226s1wbQf1IP86SLEyF02T7kq/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Let's see... I believe he mentioned haunted houses, game booths, and maid caf\u00e9s as well.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1mvxDsyNlqk9scDQAuocJG2YuqUKLleOP/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "In that case, Eta, I'll leave the haunted house to you and Nu.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1SGG5C7VvN0XcnhKiiFFAZQfHYJATPT3d/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Combine your technical skills with Nu's disguise techniques to create the most terrifying attraction possible.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1nEUPBhjBf6KundjR_kG2ywJY8GCNQqE8/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "Got it. I'll make a haunted house so scary...that even Master Shadow will tremble.",
                "line": 38,
                "url": "https://drive.google.com/file/d/18CNmsr3iOZh2uN5D27Bh1o-amFp8S0Ql/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Beta, I'll leave the game booth to you. You've infiltrated a casino before, haven't you? Put that knowledge to good use.",
                "line": 39,
                "url": "https://drive.google.com/file/d/17iWSrJVI_dVG-Ul1DC-gB4dqde7QxLad/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Understood. May I ask Omega to assist me?",
                "line": 40,
                "url": "https://drive.google.com/file/d/1paFozE-nQyiNrj9D1GsCyKCkbfb4l_3e/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "She may be somewhat of a nihilist, but her calm insight makes her well suited for such games.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1aQxMjh6rXbwxUKwOCZ-udAv6WCyMo-le/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Very well then.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1r94EVJxQXlMM72cpxe-E16DFCWgr-B22/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What about me? What do I do?",
                "line": 43,
                "url": "https://drive.google.com/file/d/1HUCd4Lxbxu5a3m5Kbv_CEWcUIAuTWivX/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "How about running the maid caf\u00e9?",
                "line": 44,
                "url": "https://drive.google.com/file/d/10fv3SkeBhxiZP2RWRbdoaTiTVJCY4R8F/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Master Shadow once mentioned that the best maids have animal ears.",
                "line": 45,
                "url": "https://drive.google.com/file/d/11C1d-iq0MUfhVP7BJlxNBlbI6GVx0ide/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "If that's what he said, then it's settled. Delta, you'll handle the maid caf\u00e9.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1DbqHPXSz-ZUfr4b-IVGlyDp-Q3kn0Td4/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Wait...you sure about that? She probably doesn't even know what a maid is.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1C-q1e-dpCsIfmLHvKvpRexO808mlsbPh/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "That's why she'll have you, Zeta. You'll be running the maid caf\u00e9 with Delta.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1LeJNCnEi8a7f72sdrRbZt2_oJ_dDTowq/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "What?! With this dumb dog? Absolutely not!",
                "line": 49,
                "url": "https://drive.google.com/file/d/1GT1WlciH1lhjya9dTEPh9sRrQVztd_xO/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Right back at you! I can handle it on my own!",
                "line": 50,
                "url": "https://drive.google.com/file/d/13URl6ltjzh1FB0eLm3vQ2uR7zv_tQY1D/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "No. The two of you will run it together.",
                "line": 51,
                "url": "https://drive.google.com/file/d/15do_lSXmgW1Gcptz8w_W6Cq08fEnJfhU/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "This is a good opportunity to learn how to cooperate. I'm sure Shadow would want to see you working together.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1OXs8LSBUUxVUNcm4_72Gtr95FXJZ1gRD/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Even though I know she'll just hold me back? I wouldn't call that cooperation.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1y5XtbQE5Lfw6ZKZic3XuBI8y8x4Jx3yj/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "You're the one always holding me back and getting in my way, kitty cat!",
                "line": 54,
                "url": "https://drive.google.com/file/d/1nKvocqHMJkBMyms80FzJg04BLtsGhSPy/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...Enough, you two.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1rZY1hzVO-_QCsx0gfx3btCXd-mZReLyJ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ha-ruff...?! S-Sorry!",
                "line": 56,
                "url": "https://drive.google.com/file/d/19KSfUFjp4Qh7UNmE8hDc5B_xThS_atqe/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "*sigh*",
                "line": 57,
                "url": "https://drive.google.com/file/d/1L9DQDjlTYakvPQEsoAokuWG-0BREqnKS/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "As long as you understand.",
                "line": 58,
                "url": "https://drive.google.com/file/d/1z45cMPyy6Xem_h5gSyEAeSKP6z358QUk/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "We'll decide on the roles for me, Gamma, Epsilon, and the rest of the Garden later.",
                "line": 59,
                "url": "https://drive.google.com/file/d/1Wj30NRSb9_-63nHKHabo7SUjwqOTHSVg/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "That's all for today's meeting. Best of luck with your preparations, everyone.",
                "line": 60,
                "url": "https://drive.google.com/file/d/1kC48RmjKl2Kvp_PhJ2x6AZD1ZEJ6Sjhn/view?usp=drivesdk"
            }
        ],
        "e2": [
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "*sigh*",
                "line": 1,
                "url": "https://drive.google.com/file/d/1WMCoMyGmy6t2FofX1s8lji6DW4Jbh1I0/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "(Can't believe I'm stuck working with this dumb dog... Oh well, since it's a mission, guess I have no choice.)",
                "line": 2,
                "url": "https://drive.google.com/file/d/1wHGoKpBIDCN0ZmL-67VMAqlpDNLcMyiO/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hmm... Hmmmm...",
                "line": 3,
                "url": "https://drive.google.com/file/d/1fBgNDsWelJv1Fq8QqXD_y35ACqCzcuJP/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Quit making so much noise. What are you even groaning about?",
                "line": 4,
                "url": "https://drive.google.com/file/d/1MXK2kg9nib_J4k04h-6oT4B0cKQsDDIN/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What's a maid caf\u00e9, anyway?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1jpimf5-wflAcJyoS-1oJ_KaNPHzr0mbl/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I figured we'd have to start from there...",
                "line": 6,
                "url": "https://drive.google.com/file/d/1TjRMX6_en3FXF4fmK1iS_QVwIOARs0-h/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "Lady Zeta, I've just arrived. I hear preparations are being made for our celebration with Master Shadow. What would you like me to do?",
                "line": 7,
                "url": "https://drive.google.com/file/d/1rdl7OV5vcW7A1P8S7jXLiLLhUyoLWVx7/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Perfect timing. Could you start by explaining what a maid caf\u00e9 is to this dumb dog?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1x6lKvPHnwqe7FXTqvIl_C8u3OFQ4SW2f/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "...Of course. As far as I know...",
                "line": 9,
                "url": "https://drive.google.com/file/d/1iLIPYU8OKLopDQYix5XnFfrzOsh0ePyW/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "Simply put, it's a caf\u00e9 where waitresses dressed as maids serve customers.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1R_iQkHdZwR-pUGcbqlEnoM2ySB16P2o8/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "So, all I have to do is wear a maid outfit?",
                "line": 11,
                "url": "https://drive.google.com/file/d/1m_shV8L_3a6B0LITZq9E1EjXF6N29iGv/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "Well, yes. That's the basic idea.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1f0xR20P_ulhWbp95_ojOBHSm_C3PbQws/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "...Wait, did you call me here to assist in preparing the caf\u00e9?",
                "line": 13,
                "url": "https://drive.google.com/file/d/1AnU0cSWGB1RuHniVo-DsZhc66irikhys/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Glad you catch on quick.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1OMjJfEBbTEBp6sQ40VopFUKBvmOMTM_o/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yes, I need you to handle the outfits. Since we'll wear them to serve Master Shadow, make sure they're the best.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1gqakRxwElAOzkcStNmydoaoZQqbbsLeJ/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "For our lord...!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1xYg138gKGIkovCtTFuj9N064MGUKfbK0/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "Understood! I will pour my heart and soul into preparing the finest maid outfits, perfectly suited for the two of you!",
                "line": 17,
                "url": "https://drive.google.com/file/d/1Jbwye2JR3SzVnA4qxzzz3_LsL0d58o9v/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well, let's leave it to Victoria for now. We'll wait until the outfits are ready.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1f8t1LiVdxB4yJyZXiiS5YVirPQNubhFD/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Fine then.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1oXEPMilHLxbnJShxzBcEtDugmF-hghO7/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "How do they feel? These outfits are made from high-quality silk, so they should be comfortable.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1f7HqTwpzN932FgaTn7OxwW5fV-az5hJM/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yeah, they're great. Easy to move in as well. Thanks for getting them done so quickly.",
                "line": 21,
                "url": "https://drive.google.com/file/d/1J0rOR7eEvjVpL-OWZuc7ScOjk4tuvIpi/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Feels nice. But\u2014",
                "line": 22,
                "url": "https://drive.google.com/file/d/1aj6jRamSQG3mzguiudRHQGW5mPwwKp7M/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "I'm so glad to hear that! Now, let's focus on preparing delicious food and the best hospitality to welcome Master Shadow!",
                "line": 23,
                "url": "https://drive.google.com/file/d/1wIC7upPJEJq6CiWqQa6F4lNMI6NCuhuz/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Agreed. We'll leave those arrangements to you then.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1gW5aNaQ6xIRx8s3o5qdl-uw5VLzx3AW9/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "Understood! I'll begin preparations immediately. Excuse me!",
                "line": 25,
                "url": "https://drive.google.com/file/d/1xWwoVnpni77ktPV6Y4XOOmSV6z3BVOxf/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hmph...",
                "line": 26,
                "url": "https://drive.google.com/file/d/1O2O02kMrQBQkVXsMk-dDYVHQTDE0_Hoh/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "What's with that look? Is there something you want to say?",
                "line": 27,
                "url": "https://drive.google.com/file/d/1lXznRwqRAp9nG-ovNV8O2bUNaeWtbz30/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "We haven't done anything ourselves.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1jpHrOioRLZ2wRhi5SbSpn5WnSfDzGuSk/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Gamma said a cultural festival is something everyone creates together. You sure this is okay?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1GXjFuw6JEhzxMXS9Dh7gW_rZDlYbuIry/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Leaders delegate. Handing out orders to subordinates is also part of the job, right?",
                "line": 30,
                "url": "https://drive.google.com/file/d/1kwvFsjg57jfkl3kZoLRrywqZzfx7MGmn/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Or do you want to run around doing everything yourself? If you're feeling restless, why not go help Victoria with her tasks?",
                "line": 31,
                "url": "https://drive.google.com/file/d/1KC6qZs6VyeXezCmSbMj8v7brQf-0bJCQ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Well... I do like to do things the easy way! I'll leave everything to her!",
                "line": 32,
                "url": "https://drive.google.com/file/d/1JqZZg-OBDwUT0leWHyz8KmsFt_Qy8SVp/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Exactly. Let's just wait for Victoria to report back. We should hear something by tomorrow.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1cMNQFWVpj6cyocIcnGItP6INnRwo-LYS/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...",
                "line": 34,
                "url": "https://drive.google.com/file/d/1RbMSS2MQCnk1I11EGAyVhwCL7KotHN_3/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Where is she? She's taking forever!",
                "line": 35,
                "url": "https://drive.google.com/file/d/1L3_Qjv-v4OaWwWqTdyRFG8c_XyC4FyXU/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Maybe she had enough of dumb dogs.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1H0tqlesUI753XgYF08fn8hExrF1ZvLiM/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "No way! She got fed up with bossy kitty cats!",
                "line": 37,
                "url": "https://drive.google.com/file/d/18sIui7RmiBN5oh0AzTZDyUGsOjn_TTG7/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Sure, sure.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1madufyLe32tQD4tiJVld9CtJ21xWw3i4/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "(That said, we should've heard something by now. Something's definitely wrong...)",
                "line": 39,
                "url": "https://drive.google.com/file/d/1I1YUitfr3qIxd42BtbzSKQjr29akLGD_/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Oh well, it's fine. There are plenty of others who can handle the food and hospitality preparations.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1a7YjbCEhst1cnFcBvN-y95VEfVcEShoy/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "True! Let's go ask around!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1jWoS6bbw10VrIxBvEMI5y0ATqePtVBvj/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Got a moment? We wanted to talk to you about the cultural festival.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1rNzvkuXb28tvclLTx0YkCsSPUuZYJIph/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "...Huh?! La-Lady Zeta and Lady Delta...!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1VdUDpwh9681QS1Z7ZeqvPBWBqVPJz1bD/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Lambda, you handle the cooking for the maid caf\u00e9!",
                "line": 44,
                "url": "https://drive.google.com/file/d/1RgXqO1NH7qb3nWRTA2xnOvog09PMEPFC/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "I-I'm terribly sorry! Unfortunately, I'm a bit tied up at the moment...",
                "line": 45,
                "url": "https://drive.google.com/file/d/1ZVQuqZ1QYDgXNQU1VWfBXvY2kTcGcuhu/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Oh, really? In that case, we can come back later. When's a good time for you?",
                "line": 46,
                "url": "https://drive.google.com/file/d/14OjOluWhC2fo68ranyNciVWLOSiDuHRy/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Um, well... I-I must be going. Excuse me!",
                "line": 47,
                "url": "https://drive.google.com/file/d/11h6raJyDPvvEa2L0OTlssIvqAfe_6X33/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hey, she ran away!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1t_f8VsVROr52tThNHIS3pCTalMTNFeWf/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "She was probably just busy.",
                "line": 49,
                "url": "https://drive.google.com/file/d/11PfdlpOD2lG17Kh089tcumzPZoO97DUd/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Though, she was acting kind of odd...",
                "line": 50,
                "url": "https://drive.google.com/file/d/16dQ0rlBRb-6azd1AhpwHoaJMWDbOD1lN/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "If Lambda won't help, let's find someone else!",
                "line": 51,
                "url": "https://drive.google.com/file/d/1HlhzS2ookkxtAbNlZPNKZ2m3yLZtHvHp/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hmm... How about Nu? She's probably working on the haunted house, but I'm sure she could help out a little.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1VVQqNSKlvrJvzZNpVCjbMd3MP9ZRl6-z/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "...Apologies. I'm completely swamped with preparations for the haunted house.",
                "line": 53,
                "url": "https://drive.google.com/file/d/1TP9y2qleAMeD32-473zKyA1hTEsKCjc9/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Even just your advice would help. You used to be an aristocrat, so you must know a lot about hospitality.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1ufYuYfHbM6fQ2mOoknNWUMW3fYXand3U/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Teach me how to be hospitable!",
                "line": 55,
                "url": "https://drive.google.com/file/d/1QBH5ctxJZSP9kaLv0QBYwRusgEz6JvMV/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "But, um...",
                "line": 56,
                "url": "https://drive.google.com/file/d/147PM8YvzLkE3RN0SGZa2U8UOc5LueoUR/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "I'm truly sorry! I have to get back to Lady Eta. Excuse me!",
                "line": 57,
                "url": "https://drive.google.com/file/d/1MYWnVJyiwwVlUvLYtuWBXOAmzenkgEmO/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Another one ran away?!",
                "line": 58,
                "url": "https://drive.google.com/file/d/1qgY-aJW8zmPXQr0E0-SaJZ5CMteeRHA3/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hmm... Something feels off. Lambda and Nu both looked really awkward... Oh.",
                "line": 59,
                "url": "https://drive.google.com/file/d/1NdvbaZnJEpD-f5zOOEefOyZYn1jhIhoc/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "Oh.",
                "line": 60,
                "url": "https://drive.google.com/file/d/1vcObAhjtqKPS8SnjNYXqCdJ_cPZGF3Nr/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Found you, Victoria.",
                "line": 61,
                "url": "https://drive.google.com/file/d/1oMs4y6878pYHlsLrzSRhr04EW8M37b1y/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "L-Lady Zeta...?! I-If you'll excuse me\u2014",
                "line": 62,
                "url": "https://drive.google.com/file/d/1Wg5yZwy6zh9LSjKQ9vWZ4mugDxgRMPqU/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Nope, you're not going anywhere. You haven't submitted a single report. What's going on? You better not be shirking your duties.",
                "line": 63,
                "url": "https://drive.google.com/file/d/1-O4gBJdbkia1ES3R56ygYCxyZMByIuqw/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hear, hear!",
                "line": 64,
                "url": "https://drive.google.com/file/d/1MeKUd-0bcXhj8cqyCdJFySMF1zBgq-kJ/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "No, it's just that...",
                "line": 65,
                "url": "https://drive.google.com/file/d/1ArQNx523IyfsyndtEQ7dlNDG7aANXsB1/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "No excuses. Report.",
                "line": 66,
                "url": "https://drive.google.com/file/d/1yvNxf--HnOjHSo4KkHVAwRv_Qx2ZU_M6/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "I'm sorry! I haven't done anything!",
                "line": 67,
                "url": "https://drive.google.com/file/d/1VnJj9FDRZq5y0O_1WppFEB4TRt3MtkrH/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "What?",
                "line": 68,
                "url": "https://drive.google.com/file/d/1nStJxhxnHrVxSYzQprnDT70C7VRKBtjJ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What do you mean?",
                "line": 69,
                "url": "https://drive.google.com/file/d/13yOnlXT-hQCKTTNgZL1_Ku67rp89yJmF/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "You see... Lady Alpha strictly forbade me from helping you two...",
                "line": 70,
                "url": "https://drive.google.com/file/d/16QmJjkGDIgLaXcwRzo5HI6EM0OAxKEk6/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "She wishes for the two of you to learn to cooperate through the cultural festival, so we've been told not to assist and simply observe.",
                "line": 71,
                "url": "https://drive.google.com/file/d/1_B2yIhigi_ePuhSXL__ZOjsiZc1aL6oU/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I see... That explains why Lambda and Nu were acting so strange.",
                "line": 72,
                "url": "https://drive.google.com/file/d/11igoZkCKbBxA4mP2KbVMcTQ8hO6hmkE5/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Wait, so what does that mean?",
                "line": 73,
                "url": "https://drive.google.com/file/d/1Rj40vv0xNbJ119NNKVx1v2mI_2f3CkRD/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...It means we have to handle everything on our own.",
                "line": 74,
                "url": "https://drive.google.com/file/d/1-B0rm-YoWNgzPR6IZcG7e7fRZaB6qMM4/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Just me and you, kitty cat?! No way!",
                "line": 75,
                "url": "https://drive.google.com/file/d/14tdhNe33FK3PjfBF8ewp3O5aa0l9_u4W/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I'm not thrilled about it either, but...",
                "line": 76,
                "url": "https://drive.google.com/file/d/1Y3MsaEPnRHw1OonyKI6PAj24JxtZAOsh/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "It's for Master Shadow's sake. Let's call a truce and work together to get this maid caf\u00e9 ready.",
                "line": 77,
                "url": "https://drive.google.com/file/d/1Cz6sLmtqWNXjbzhj5oPv5oyfHDCLvWbn/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Grr... fine.",
                "line": 78,
                "url": "https://drive.google.com/file/d/1MEiV-W0mDmYPL9ozZW5jBjvZbD6DhU-p/view?usp=drivesdk"
            }
        ],
        "e3": [
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I'm back.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1cyvKFPzqrO3dWZsCOJodtqboe_Zzr89R/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Finally! You said we were gonna prepare, then you just disappeared!",
                "line": 2,
                "url": "https://drive.google.com/file/d/1NLH0O4o8HlXj6EYek4oUwLnKPoMe_k8J/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I've been out gathering information to help us prepare. I also got Lady Alpha's approval to ask for advice when necessary.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1HcQp2Wu0DhukWbh_ewjLxkWZUSi7vEMK/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Information? About what?",
                "line": 4,
                "url": "https://drive.google.com/file/d/1WPOU_ay8Hd0fVRzFrtsGJ0O8LjMZAsUh/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "About what a maid caf\u00e9 actually is. I got more specific details from Gamma and Beta since the meeting only gave us a rough idea.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1beU_otXLpd1W7DXw-KfZzRMs3AxA2lDe/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ohh! Great job. Proud of you!",
                "line": 6,
                "url": "https://drive.google.com/file/d/1Mgr3ClDm3QVtczHJT4Mza0loC43f1Fn_/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...What the\u2014? Being praised by you feels weird.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1Z6qdMfd1TW1_6_1fvidmzj8_Db2ECI7g/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Heheh! Boss man told me that you're supposed to praise your underlings to help them grow!",
                "line": 8,
                "url": "https://drive.google.com/file/d/1BWajS7qYeWzwaifSWX64qRi3rMBIRpR2/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Who're you calling an underling?",
                "line": 9,
                "url": "https://drive.google.com/file/d/1WtLC6BD6bzAQQGTWQEAf1Vnv-AEZDqQx/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Jeez... Anyway, back to what we were talking about. Turns out there are different types of maid caf\u00e9s. Some have a calm vibe, while others are more lively.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1dABKsM3no68gOJ4DhnKa0TOZf-Si5hNn/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I like lively and fun places!",
                "line": 11,
                "url": "https://drive.google.com/file/d/1eGNEch6braoTBwF66PbZm43hETMmGpLd/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yeah, didn't think the calm vibe would suit you. Looks like we'll be going with the lively approach.",
                "line": 12,
                "url": "https://drive.google.com/file/d/1Jj1ExTXajFGekWXMxvdarfDFWL2f09mN/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Alright, let's start prepping right away! We'll go \"Roar!\" and \"Boom!\" and make it a fun surprise for Boss man!",
                "line": 13,
                "url": "https://drive.google.com/file/d/1pdLXpaouJ7EDEOPEqVSAQ7IjHfds-0oq/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Sure, sure.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1a3LWxG6E7xyrW6w_A9fJ_oeEzeNVmqDe/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I'll take care of decorating the room. I got reference material from Gamma and Beta to make sure it looks like a proper maid caf\u00e9.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1LhuwncWGlINjhsHPkfPxnQxeYhIe1QH-/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What about me?",
                "line": 16,
                "url": "https://drive.google.com/file/d/1RNZTJ1I_5ADioXQ2soc7p2KsB02kWeDr/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "You prepare the ingredients. I wrote down everything we need on this list, so you just need to go get them. I've set aside the money for it.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1ZQu4VJ8Dseer0mXPe0SqayiKn62hh1U-/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Right, got it. Hmm... Eggs and chicken?",
                "line": 18,
                "url": "https://drive.google.com/file/d/1aoBmIX4CXZ4katKoMxkbPxcEdfuPbXnp/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "That's right. Get the best quality you can within the budget.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1i1qhuoIXvOn9P9-lP2XfmeghpWs4mmdV/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I'll go hunt down the best on offer! I'm great at that!",
                "line": 20,
                "url": "https://drive.google.com/file/d/1iYA7kYmBuVvhIoFIp-Xrg3U--Q3gwI9p/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Hm? Wait, do you really understand\u2014",
                "line": 21,
                "url": "https://drive.google.com/file/d/1g6nplLLHncUHsLIRdo-rMotuQS6Al3kS/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Leave it to me!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1xHQ8PVpDdnij2_KbYCbd1FCaAXB_w-ga/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...And she's gone. Well, I guess she can handle a simple shopping errand. I wrote it all down on the list anyway.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1oH5dhpQIC6zLmBDbnKfj_JV36u7-Ls9t/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I've got plenty to do on my end as well. I should get started.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1bnd41vLB1Tl3mmPWSQckl4MBdqBbN1e9/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I'm great at hunting! I've got to do my best for Boss man!",
                "line": 25,
                "url": "https://drive.google.com/file/d/18719QPSQ2fxdbmb0NnTfyAYljxrFsiBG/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "*sniff, sniff* I smell something...",
                "line": 26,
                "url": "https://drive.google.com/file/d/12bBng2W6YhCYmJlHVlWuV-17po5OOC9N/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I knew it! A bird's nest! Just look at those big eggs!",
                "line": 27,
                "url": "https://drive.google.com/file/d/1OdwzWd-VJ7mwUS4FtPXh_y4AM4vqYLR7/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "This'll impress the heck out of that kitty cat. She'll have to acknowledge my strength! Hehe!",
                "line": 28,
                "url": "https://drive.google.com/file/d/1cBRl_nnnnY4XWKMjTsMTUAAYq4iCsYiH/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I'll just grab these eggs and\u2014wait, huh?",
                "line": 29,
                "url": "https://drive.google.com/file/d/1eowM3yrkfpVupwhTF5F3wO99f26zRYp-/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "A huge bird...! Are these your eggs?",
                "line": 30,
                "url": "https://drive.google.com/file/d/1NV-XShnY0MK0KCuwvbkzBvNa4Kaxsbed/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What're you so angry about? Quit squawking so loudly.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1-_Gq9EDxupNCN3LXhiaGucHbguEbB8Ke/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Oh yeah... That kitty cat said we needed meat too! Perfect timing!",
                "line": 32,
                "url": "https://drive.google.com/file/d/1rrNUM1uWkfYj9RoGJTBvx54B7bU2mzve/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Heheh! I'm back\u2014",
                "line": 33,
                "url": "https://drive.google.com/file/d/1In0WGm2wCAHl2Drk1K7rGugJDYvf6uSw/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Whoa... So bright...!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1SO77GF6zR6hYrVs2gJcvp1i9W2KDH3Kk/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Pretty flashy, huh? This is what a proper maid caf\u00e9 is supposed to look like.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1SuxmSqpAq7nGOm-BISryxPwhVUj52zfd/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Hmph! Weird!",
                "line": 36,
                "url": "https://drive.google.com/file/d/1qCOWF0MMJT_pj18xkO0mv-ScE3M-Kh7W/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "So, where exactly did you go shopping? I don't know any stores that sell such big birds and eggs.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1tSt180VLXk3Fh1zt-xDRtrazpIWgcL14/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...Shopping?",
                "line": 38,
                "url": "https://drive.google.com/file/d/1ATtsi8h_GrG-VohUhYFn6FEpwrEygeXN/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "*sigh* I thought as much. I told you to buy it from town not go hunting.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1JmLtTOinTXl8YY9iISquij5ARoThwL5H/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Th-Then you should've explained it better!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1NSIukjO8DGOzSqPx-tMALt42NmqlmVho/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "You're the one who misunderstood.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1AALDoWV6V1Dv8WjZeCzL2LfiqK8g7WMY/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Anyway, they're fresh, and there's plenty of it. I'll make it work this time.",
                "line": 42,
                "url": "https://drive.google.com/file/d/1i7CL_HAZucLWzgdeiEeDs-IRaHGEOrlv/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "By the way, what happened to the money I gave you?",
                "line": 43,
                "url": "https://drive.google.com/file/d/1Bp8mZbqFPwPd9ZFUZeuh-Absp4SsoljA/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Didn't use it! I don't need it, so here.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1yBTfSkGrq9ZLOnRn-dylnOgNkfTxnwDI/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Wow, not a single zeni spent...",
                "line": 45,
                "url": "https://drive.google.com/file/d/1UM-q__A8TFQVx5aoq1YZOrDqF1zW4EfA/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Since we got the ingredients for free, we can use the leftover budget toward some quality tea leaves and coffee beans.",
                "line": 46,
                "url": "https://drive.google.com/file/d/10kSkkGmCDAgtp6QEtepjZtbIjxkw_Up8/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "All thanks to me! You should be grateful, kitty cat!",
                "line": 47,
                "url": "https://drive.google.com/file/d/1JjUr2bIatbPhCxz1d5CqHwARulCih8E6/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well, I guess it worked out in the end, but let's not forget...you still messed up the shopping errand.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1imCx5y9Tw_S-LxcwRUqWzVHBDs2K4lbr/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Grr... I did what I was supposed to! I got the eggs and meat! You just complain too much!",
                "line": 49,
                "url": "https://drive.google.com/file/d/11hI1A_QX7cVsFYaSGtorwAuCZ0nIIClO/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "You didn't do it as instructed.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1Cr9rIeMrtr07sh8x8jgS58MbE0hMUUTo/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ha-ruff... But, but...!",
                "line": 51,
                "url": "https://drive.google.com/file/d/1FbJE8_hdiX-cCL5hHhwb6r0zEqOBc_aC/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "*sigh* Fine. At least you got what we needed. I'll give you that.",
                "line": 52,
                "url": "https://drive.google.com/file/d/13MTyoJQSwG0VK2fXSglb7r_Q76V-5-SU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "See! You finally admit I'm the boss!",
                "line": 53,
                "url": "https://drive.google.com/file/d/1vKRIcJCPM6MkAZctLmz2ynn39zdVrMnQ/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "How did you even come to that conclusion?",
                "line": 54,
                "url": "https://drive.google.com/file/d/18Y76SGzA-68KbKkqwNQ9hhAspu-1yNp9/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Anyway, let's start carving the meat. After that, we'll move on to decorating and practicing hospitality. There's still plenty to do.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1jZHTxUm0itdqSLxth-6SphXAHbn8CLLT/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Time's limited. If we want Master Shadow to be happy, we'll need to put in the work.",
                "line": 56,
                "url": "https://drive.google.com/file/d/162e4bucEFZIsktgCLXC85QsxJXMkOcmb/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Make Boss man happy...",
                "line": 57,
                "url": "https://drive.google.com/file/d/1S2Cgl-SLkN4TgA_Rjq9eoM4tOusrmgMU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Alright! I'm gonna work hard! I'll make sure Boss man gets to eat a ton of delicious meat!",
                "line": 58,
                "url": "https://drive.google.com/file/d/12a37mVAuy5dIG0RrBMJCqH7x3z0nS8SZ/view?usp=drivesdk"
            }
        ],
        "e4": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Whoa... So this is the Shadow Garden's cultural festival, huh? They've really gone all out.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1iVcg1-vQP-6rctExK0JxNwoPCs7Wdk_r/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Why didn't they invite me to join in...? This looks like so much fun...)",
                "line": 2,
                "url": "https://drive.google.com/file/d/1YIko3K5YjgNpnoMpxOsz5jRonUgdHDHJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(The best part of events like this is the preparation! I wanted to have my moment of youthful bliss...!)",
                "line": 3,
                "url": "https://drive.google.com/file/d/1PsYnzIGJm8TnrJ6aVmpaMGT3qNxg2pvW/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Welcome, Cid. We've been waiting for you.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1T3OLHWs0Ug8Z-jrgjckzOSZJrPYZfGUL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "....Huh? You're wearing a different outfit than usual. Is that for the cultural festival?",
                "line": 5,
                "url": "https://drive.google.com/file/d/1n8SzQfawlZXxx8Lkg2eb9JbWRpGtKjQw/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Yes, it is. From what I understand, you're supposed to dress differently for a festival like this, right?",
                "line": 6,
                "url": "https://drive.google.com/file/d/1Q-PstuEN_518j7_14bQPjRqKXPMPITjV/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Well, sort of. It's not like you have to, but it definitely adds to the excitement, so good thinking there.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1zX2hCxAkRGhUrzY16IBxEj8-IDR5DveN/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Heheh. Thank you. I've been working on ways to make this special for you. Of course, the others have been too.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1wdLR16N0vlrO67gx1FepHmGnCZ9jF4ic/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Please enjoy yourself... Although, that said, I have one request.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1j6gzT_Fgqf5daI2St2297cj-KXGf9BT7/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "If you have any concerns, just let us know. It'll ultimately benefit both the Seven Shadows and the Shadow Garden.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1OdDECIdAT-hQkiwgkk8job41zNZtz4S7/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Got it. I'll speak up if I notice anything.",
                "line": 11,
                "url": "https://drive.google.com/file/d/1gJMpNjF7jBEnKOrFqJ9hG9Ym9A3BGY4R/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So, what kind of attractions do you have? When it comes to cultural festivals...there's got to be a haunted house or something, right?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1sgvGGw34crka8L36JqrkKKe2uGq_EiLq/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Sharp as always. We've got a haunted house, a casino, and even a maid caf\u00e9. You can find more details in the program.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1ZR_1mLUpfledVezyjaIsweyYOFOSSoK5/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Everyone's been working hard to prepare for you, so make sure to check everything out.",
                "line": 14,
                "url": "https://drive.google.com/file/d/1VofwvRfDe21Ne7sDCeoFCvLjUrQyRbr1/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "I'll come by later to hear your thoughts, so take your time and enjoy yourself.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1c-SFeZ5HPDZfK246jpUj5BeT5d1-mud1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "They even made a program? This is serious business. Let's see...",
                "line": 16,
                "url": "https://drive.google.com/file/d/1A92q9MBMC6j5XwqvVS1-2UCkuc6Ltal6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hmm... The haunted house is being run by Eta and Nu. This could be interesting.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1ICq7pveW9CNaYMdH5BXtKuWQ58Rvpv0v/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So this is the haunted house... The atmosphere is pretty spot-on.",
                "line": 18,
                "url": "https://drive.google.com/file/d/1yOyyaGCK1q95eaukj1O_vaYf6ziKQu4q/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "That's one plate...two plates... One's missing... Oooohhh...",
                "line": 19,
                "url": "https://drive.google.com/file/d/1wiJYObJvTaTmXo95x8H55E7e8UNyw5Rc/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(That voice... Yeah, that's just Eta's regular voice. Oh man, this isn't scary at all.)",
                "line": 20,
                "url": "https://drive.google.com/file/d/1IE-zWEnHTRf1Xi1f1OuK-Jr4Me2MdXZv/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Lady Eta, let's amp up the mood in here. We need to make it scarier...",
                "line": 21,
                "url": "https://drive.google.com/file/d/1J4hlsQX-3OXkX3XsR8zsY4Ki-vn_t0js/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "This...isn't scary? What should we do...?",
                "line": 22,
                "url": "https://drive.google.com/file/d/1sMD0Rc6pc4fZgLuOnzlioN0BxLv87gj-/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Very well then. Allow me... Ahem.",
                "line": 23,
                "url": "https://drive.google.com/file/d/1tSqns4g3YL_1zenSmOHF4WX1ORVrMFLb/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Welcome, dear guest. Thank you for visiting today... Please, relax and enjoy yourself...down to the marrow of your bones.",
                "line": 24,
                "url": "https://drive.google.com/file/d/1Qsk-rk6UcBgnZEnAYZXsAC8Ch09yMZ4E/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh...?",
                "line": 25,
                "url": "https://drive.google.com/file/d/10VZldaXTL8cWYWDs60S4mEEK6WNU_jo5/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "Allow us to extend our hospitality to the fullest. Of course, there's no charge. All you need to do is have lots of fun...okay?",
                "line": 26,
                "url": "https://drive.google.com/file/d/1BRWzLNAS8nG-9sZJkEjR3HAHsW21kTMA/view?usp=drivesdk"
            },
            {
                "name": "Eta",
                "name_variant": "Eta",
                "subtitle": "If you don't have fun...I'll use you as a test subject. I'll dissect you.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1O4OuK4pJl9wWN-pGEMPQSIotMXlq6WBQ/view?usp=drivesdk"
            },
            {
                "name": "Nu",
                "name_variant": "Nu",
                "subtitle": "We're putting everything on the line for this business...so I hope you're prepared.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1p3pygla8pRoAcoFxdxAYqSu0i1EnyoIl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(This haunted house is scary...but not for the usual reasons!)",
                "line": 29,
                "url": "https://drive.google.com/file/d/1h_RdUIYrv509DmpUqxd2fisp_p2Nu-9T/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "It wasn't what I expected, but I did experience some form of terror. Maybe this is what haunted houses in other worlds are like...",
                "line": 30,
                "url": "https://drive.google.com/file/d/1ys0VgIatgEG3B7M1_KO8hhF06TPiSYsX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright, next up... Wow, Beta and Omega are running a casino... Alright, let's check it out.",
                "line": 31,
                "url": "https://drive.google.com/file/d/12A5yyKcqhtoaQSWWDoszGQF1QImdTU6E/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "My lord! Welcome to our humble establishment.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1eZm_jHLd3EbG6DOLRB3H9oG187ug-4Mn/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Welcome.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1m4t5dxMApJYi0nBeZzFlaZb5GjLYX5EP/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "I, Epsilon, have been eagerly awaiting your arrival!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1hJRZSP9YxjAzDjlIJdfJ9m-UwBhnWR8v/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh? Epsilon, you're helping out too?",
                "line": 35,
                "url": "https://drive.google.com/file/d/1Ky6d8AVNKDayfP9kREl41yq1B8Bpq6yN/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "No, I just came by during my free time. This cultural festival also doubles as a chance for members to relax and mingle.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1U5457jcWKul5qOP5P_3EK3qT6IciPCm_/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Oh? Didn't you just come here to make a complaint? You've been whining this whole time about the system being rigged.",
                "line": 37,
                "url": "https://drive.google.com/file/d/1wYvvPPKwVgClI6P6hTeeS1brWa3vsNOS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Wait, am I interrupting something? Maybe I should just go\u2014",
                "line": 38,
                "url": "https://drive.google.com/file/d/1PKjX5wLJnQGMkV_pCwZF1fhPu_EyjPU9/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta & Epsilon (Beta)",
                "subtitle": "Not at all!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1uXM5y_9lNu-D3yIElE2wJmbnjK7z_VH5/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Beta & Epsilon (Epsilon)",
                "subtitle": "Not at all!",
                "line": 39,
                "url": "https://drive.google.com/file/d/1uXM5y_9lNu-D3yIElE2wJmbnjK7z_VH5/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "...Ahem. Apologies, my lord. Please, do take a seat. Here, you will get to experience a wonderful game we invented based on your Shadow Wisdom.",
                "line": 40,
                "url": "https://drive.google.com/file/d/1aBWYIpczCExm9VYRwiOu0cwDSM77sKna/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I-Isn't this the table for...",
                "line": 41,
                "url": "https://drive.google.com/file/d/1s9p3jIGdn2jFC7gqBtmyM17oG-8stvT_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Mahjong?!",
                "line": 42,
                "url": "https://drive.google.com/file/d/1Fz7cUkDS_veso2aIRZc50_tb7Ltmvpnx/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "I see you're already familiar with it...! In that case, we can skip the explanation. May I play as your opponent?",
                "line": 43,
                "url": "https://drive.google.com/file/d/1NFeTaNqzMBvZbZLHKVdn0T6rrVYrH_yt/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Hey, no cutting in line! I want to play with Master Shadow too.",
                "line": 44,
                "url": "https://drive.google.com/file/d/1nKjlrN_iHSb9TulXwYjP1dsIiAnSQGWB/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Heheh... In that case, I think I'll aim for a solo victory.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1dXEe-SJYcbLvOzeI4vkUFIZ7zEnzRPWW/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Always one to get ahead of yourself, Omega. Don't think you can beat the Seven Shadows so easily.",
                "line": 46,
                "url": "https://drive.google.com/file/d/148Y69VtJ8dp_sBRfLjnsf2yyvJ7iK_ig/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Indeed, that's why I'm not pulling any punches. I look forward to seeing how this match turns out.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1akmmz5ZTtXTCWQTJnzIe5r8Wm_CK60_k/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(The atmosphere just got a lot more intense... This is going to be a good match.)",
                "line": 48,
                "url": "https://drive.google.com/file/d/1W9PLZDfL7MkfiSavH1cL9npO9jPI-Pgd/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Alright, let's start the game\u2014",
                "line": 49,
                "url": "https://drive.google.com/file/d/1P1zAhBd-WyI4k30zVUCaN7u_xiPAWJt5/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Wait a minute... Beta, are you okay? You're struggling just to line up the tiles.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1PYw0NcelOEp-52f-mEN602WKbtKKEazh/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "S-Sorry... It's hard to see what I'm doing...",
                "line": 51,
                "url": "https://drive.google.com/file/d/1cvOxhZJh13hFGHw6wTAr9Sg7U4TEw2g1/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "...Huh?",
                "line": 52,
                "url": "https://drive.google.com/file/d/1NojTkcCrTGO2uFQWe2TDbza62cjDRtbF/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Having a large chest makes it really hard to move these tiles... Eeek!",
                "line": 53,
                "url": "https://drive.google.com/file/d/1CyumkiKKIyn9QQkVkJf4SApCIqVHdMrD/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "(D-Did she just...knock over the tiles with her...?!)",
                "line": 54,
                "url": "https://drive.google.com/file/d/1kzvDiulm45_J67OwRwQgGW_FWfXL2tQC/view?usp=drivesdk"
            },
            {
                "name": "Epsilon",
                "name_variant": "Epsilon",
                "subtitle": "Aaahh! That's cheating! No way! I won't forgive you!",
                "line": 55,
                "url": "https://drive.google.com/file/d/1vroF2NCvo8WZmiPJzC5ItqYXNTS9ZYC8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "Wh-Why are you coming down so hard on me?!",
                "line": 56,
                "url": "https://drive.google.com/file/d/1a7xLnfZwa2zaSAwJxrmxxOLVxvDiSvY_/view?usp=drivesdk"
            },
            {
                "name": "Omega",
                "name_variant": "Omega",
                "subtitle": "Ladies, can we just get started already?",
                "line": 57,
                "url": "https://drive.google.com/file/d/1pkNL-zDjrgDvZGjJQeJYSSvfqsOV7pem/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "How about we just play cards instead...",
                "line": 58,
                "url": "https://drive.google.com/file/d/1zLiYQorej3zlVqk8NFQb3oPL-UMHfOi8/view?usp=drivesdk"
            },
            {
                "name": "Beta",
                "name_variant": "Beta",
                "subtitle": "My lord, we've been thoroughly defeated... Please, enjoy the other attractions as well!",
                "line": 59,
                "url": "https://drive.google.com/file/d/1JMFe7bet_S8Hkg9KiJnpMfWup8IMPkhu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I had a good time. Keep up the hard work.",
                "line": 60,
                "url": "https://drive.google.com/file/d/11Fwjg-CWSZUTnncwCW91wbLwDC212Esi/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(That said, I did take advantage of it being their first time playing Card Dominoes...)",
                "line": 61,
                "url": "https://drive.google.com/file/d/1QJ5SjjH6_HWk8iDbO6k65moDnCsKd1ns/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright, where should I go next? ...They did mention a maid caf\u00e9.",
                "line": 62,
                "url": "https://drive.google.com/file/d/1IV9Hrxov6PvmJLzZ3AojaVzpUq1SeSx-/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(A maid caf\u00e9 run by the Shadow Garden... I wonder what kind of theme they went for.)",
                "line": 63,
                "url": "https://drive.google.com/file/d/1bn_0O7OlclXGdoZc8gl-NbqZ-TGapOS3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Will it be classic, pop, or perhaps something completely new... Hmm, I'm curious.)",
                "line": 64,
                "url": "https://drive.google.com/file/d/1yIijT4-EOknFd7rfHyEQiCKQX0Wba7aA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Now, where is it... Huh?",
                "line": 65,
                "url": "https://drive.google.com/file/d/1A4Sy0-x4tCKELTyWzn2CTEHaNRxdwS4o/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(That girl over there, isn't that...um...)",
                "line": 66,
                "url": "https://drive.google.com/file/d/1-euG028_q7UASA9ciJvZAEq0kG2AtM8V/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Victoria?",
                "line": 67,
                "url": "https://drive.google.com/file/d/1iFd84IBuxtf5ivpyZQ8DI6bDh03O1okc/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "Huh...? M-Master Shadow...?!",
                "line": 68,
                "url": "https://drive.google.com/file/d/1VakILKro9WLlRpGuRk5dqLzsHmK8_m2B/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So, you're joining in too?",
                "line": 69,
                "url": "https://drive.google.com/file/d/1-auYTdVKisXRBo83Ha2DGDZhdgR10sUr/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "Yes, since I don't have any training today...",
                "line": 70,
                "url": "https://drive.google.com/file/d/1OxWfhAWYXGGPTWZhCukmfwVj9HbOZ8h_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I see, it's also a chance for all the members to mingle, right? Are you having fun?",
                "line": 71,
                "url": "https://drive.google.com/file/d/1JjAXF3WXuFt8TjVrV-DuMicZNBKxlrlL/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "Y-Yes...!",
                "line": 72,
                "url": "https://drive.google.com/file/d/1KqnOa7URrO0ehJXlJfHMBF3rDeMigLGl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Good, I'm glad to hear that. Well then\u2014",
                "line": 73,
                "url": "https://drive.google.com/file/d/1jb15JK7e7FcBmzmMhy32Q9ptstOeH5Vn/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "...",
                "line": 74,
                "url": "https://drive.google.com/file/d/1Xygi_jkFXOM0KmUwZ-JrmzMm_H9KFP5K/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(She's grasping onto the hem of my shirt.)",
                "line": 75,
                "url": "https://drive.google.com/file/d/1tGjjPQFFWGkHbIsUnEA3dO-rvo3BECgS/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Um... Will you show me around?",
                "line": 76,
                "url": "https://drive.google.com/file/d/16bYCDcs2D-Mff6uUfrLlYZQv6qK7v2xw/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "Yes, of course! Leave it to me! I, Victoria, will guide you anywhere you wish! Where would you like to go?",
                "line": 77,
                "url": "https://drive.google.com/file/d/17WvX7a-yiZtKOYEUkZr7S0FQp7fPnLJI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I want to check out the maid caf\u00e9.",
                "line": 78,
                "url": "https://drive.google.com/file/d/1NImTVTrObhWRXOtkLanL5YiVbLlzUob-/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "...The maid caf\u00e9, my lord...?",
                "line": 79,
                "url": "https://drive.google.com/file/d/1ownDcavCvkkhRXpyKK9SD_7zWrcL103A/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Huh? What's with that reaction?",
                "line": 80,
                "url": "https://drive.google.com/file/d/1lpZkijPBV66hkwpNtR0AwJoM3Huc1iHP/view?usp=drivesdk"
            },
            {
                "name": "No. 559",
                "name_variant": "No. 559",
                "subtitle": "It's nothing... Very well. The maid caf\u00e9 it is. If that's what you desire, Master Shadow, I'll take you there.",
                "line": 81,
                "url": "https://drive.google.com/file/d/1nr8WAHiQHuYMcxh5EeJENnyffzZgY_gJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright, lead the way.",
                "line": 82,
                "url": "https://drive.google.com/file/d/1nmQ82PsuOPzfJxldU1uaf-mUVzB1-5ec/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Wh-What is this...?)",
                "line": 83,
                "url": "https://drive.google.com/file/d/1bjVV89MQjfZpmsBH5UMjVDY_JPOGNoHe/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Um, um... A-Awoo...? Make it yummy...?",
                "line": 84,
                "url": "https://drive.google.com/file/d/1l3sSn1J5U5cmW40aKOp4fZf8Mz53gRQy/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I told you, that's not it! *sigh* Guess you just can't teach a dumb dog new tricks.",
                "line": 85,
                "url": "https://drive.google.com/file/d/1ll5NMoUiRKfgl_QZ4ahdzbvJE3eiE6u0/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What did you say?! I'm not dumb!",
                "line": 86,
                "url": "https://drive.google.com/file/d/12n40v8ww5ubnuo5r9zAhdX21KX8vfWkK/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Then hurry up and memorize it. The caf\u00e9 is already open!",
                "line": 87,
                "url": "https://drive.google.com/file/d/1OrPwUGdslOaRLwjuqgLbm37shScELgGr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...Maybe I shouldn't have come here.)",
                "line": 88,
                "url": "https://drive.google.com/file/d/1raeZlGvyvWiY3UiEIQo296X3h_6JLLWj/view?usp=drivesdk"
            }
        ],
        "e5": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Hey, you two!",
                "line": 1,
                "url": "https://drive.google.com/file/d/1HD2Te98o7yxG3fNhRwdMYGNR6hpdz_38/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Oh, Boss man!",
                "line": 2,
                "url": "https://drive.google.com/file/d/1VSeMxLlY3_lxo_18d7dUYTndykDx1FOs/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Oh, my lord. Welcome. Your seat is over here.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1Y-YjAU2CMJGusvXeLc_8q49htRSWtwx8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Uh...sure.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1cLY6tMko8yh51nMC-cR2nGqiIt64_W6A/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Alright, stop clinging to him and show him to his seat.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1z-erDmc1x2C8Ui6g2JXQ2CYOl7tvWjoU/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I-I know! I was just about to do that!",
                "line": 6,
                "url": "https://drive.google.com/file/d/1KusVtqwBWYFOc6bW97DvxmgG96LSg5u1/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Man, it totally doesn't feel like I'm in a maid caf\u00e9...)",
                "line": 7,
                "url": "https://drive.google.com/file/d/1I8tse5E9yedHN0tXMdNqA4m6TLqy0kvh/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Oh, I almost forgot. As a maid caf\u00e9, there's a special greeting we're supposed to do.",
                "line": 8,
                "url": "https://drive.google.com/file/d/1AjQ_w0xjVful0ALxXEnyItioPavpVVod/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Yeah, that's right! A maid caf\u00e9 isn't complete without a special greeting!)",
                "line": 9,
                "url": "https://drive.google.com/file/d/1M4GihzcOJusTtCCtO6A-nvPQYPUlTegi/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Welcome back, my lord.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1YD6TtZGmq5HiytG8W025e3SZLD9L-slE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "U-Uh... That's one way to do it, I guess.",
                "line": 11,
                "url": "https://drive.google.com/file/d/13DsSOpxidmKPbGE6XtzdszEgi8oi_K1J/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Something wrong?",
                "line": 12,
                "url": "https://drive.google.com/file/d/1oYWzGBT8_4Lbh8afsrzdY2DaQEN8VU_6/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "No, it's nothing...",
                "line": 13,
                "url": "https://drive.google.com/file/d/1kvrmRYbCSSjjGrru_NaKksamVrsD0bds/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Boss man, Boss man! What do you wanna eat? I recommend the chicken and egg omurice! I hunted it myself! It's delicious!",
                "line": 14,
                "url": "https://drive.google.com/file/d/1lfDLFw7hIQHWlk_rlVpxgTxnVh1UHQaZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright, I'll have that. And some tea, too.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1YHcDlX_FhwYMXIJD0qMrgGzrXLpDwhJc/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Kitty cat! One omurice and tea!",
                "line": 16,
                "url": "https://drive.google.com/file/d/1IfExdzdIcxl8_QAL9dNotV5rbDcn12zY/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I can hear you! Keep it down a bit!",
                "line": 17,
                "url": "https://drive.google.com/file/d/1p7Y3FxAmWXs6TPCCrO_Ef4uZ7uNHwT2S/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(It really is lacking the maid caf\u00e9 vibe...)",
                "line": 18,
                "url": "https://drive.google.com/file/d/1AwIssCMUr9t5-DgCnkQvnlzQENJXz4l2/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Sorry for the wait, my lord. Here's your tea first.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1EDyHUs46pMNSNSZ92WIxAxsn0QRXkeec/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Thanks. I appreciate it... Huh?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1BUrz5pbARkP4o8nKrE7TZeOnWnKPoEuX/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(That aroma... They're using some pretty good tea leaves...but isn't that the wrong thing to focus on?)",
                "line": 21,
                "url": "https://drive.google.com/file/d/1pYFcVido6fNHgl7jrEiWUUqb9FW2pQlO/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Wait, don't drink it yet! I've got to do the special chant!",
                "line": 22,
                "url": "https://drive.google.com/file/d/1_w_QibZfXELV8dJFWMro1gnShjFTaMpI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Yeah, that's a staple. Although she totally forgot it earlier...)",
                "line": 23,
                "url": "https://drive.google.com/file/d/1ePXhU_tlGoGs3nDXH1LC7rB2tM6c1O6m/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Alright, here goes! Um, um...",
                "line": 24,
                "url": "https://drive.google.com/file/d/10v_4zZYboqO7r_WNLlpVpip2vx-Oynev/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Yum, yum, woof? Get...um...tasty? Uh...what was it again?",
                "line": 25,
                "url": "https://drive.google.com/file/d/1r9V8W8juHrWJ-1rEyU2ypTaswc4DM_Jz/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(I thought as much...)",
                "line": 26,
                "url": "https://drive.google.com/file/d/14obLRsaAb7S36FaVyM_JL68kcZhQEOhd/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Alright, move aside.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1P1R6tNo-UaoBXfWqw38MGUoVjjV1VGNj/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "My lord, your omurice is ready. I'll write something on it with ketchup.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1XVzJvWcH4xezXsSSYE1-aUP0tvXzWt0u/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Another classic... She's writing my name and hers. That's got some good penmanship.)",
                "line": 29,
                "url": "https://drive.google.com/file/d/1iQPpHH4VAvAee0_lvc-NKB-jKiblgqac/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Heheh. What do you think? I drew a heart with both our names in it.",
                "line": 30,
                "url": "https://drive.google.com/file/d/1MT0TtZ-nwdTwXYMUCAkO-u4DRsjr2Es2/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Where's my name?! Write it, too!",
                "line": 31,
                "url": "https://drive.google.com/file/d/1kz7YQBctHuHBhhPW8I6nwVBzGQran0m0/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "So sorry, there's no space left to write.",
                "line": 32,
                "url": "https://drive.google.com/file/d/1idk_8gS1Ow7cxLwQInJ0aX4-BLwBsv9I/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Gimme the ketchup! I'll write it myself!",
                "line": 33,
                "url": "https://drive.google.com/file/d/1oTIQaynzW2CXJmgaPpzSWs9Aw3g3Gxz1/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hey! You're squeezing out too much! What are you doing?!",
                "line": 34,
                "url": "https://drive.google.com/file/d/1kTbgMGEHyOjqnq9P8K8su6yQqTqWIZE0/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...This is a disaster.)",
                "line": 35,
                "url": "https://drive.google.com/file/d/1v2-SanFp4NKZOTF8AY2Uth2pKcsAIEvr/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(No, I can't give up here. Alpha said I should speak up if I notice anything!)",
                "line": 36,
                "url": "https://drive.google.com/file/d/1PEBAPukK2N5GnSbNXaOtPGRJKPaYUA-u/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(If I let this slide, this error-ridden version of a maid caf\u00e9 might become mainstream...)",
                "line": 37,
                "url": "https://drive.google.com/file/d/1P6yDBgTuTroxDDk03DqdPcOwpkTkhfhk/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(There's no way I\u2014or rather, the professionals in the maid caf\u00e9 industry would stand for that!)",
                "line": 38,
                "url": "https://drive.google.com/file/d/11n148RdrEWhPuK4AIuYFQ51THSVpKUjY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Now's the time to pass my modern knowledge and uphold the true spirit of maid!)",
                "line": 39,
                "url": "https://drive.google.com/file/d/1bAHR208BkLJlqqauPcPGtB_-IY-kM4Ys/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "You dumb dog! You totally wrecked our hospitality! Nice going!",
                "line": 40,
                "url": "https://drive.google.com/file/d/1PCkVwxU3kGLMm5TGsRg7raWLH-GaVrdG/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What?! Don't you dare blame me!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1lUlTGsZZ8aGBnwU2djlnk0dCxov9DGqI/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Ahem! You two, can I have a moment?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1LrWg7I25xmWF4pTNhvanlG-iH-QC8rzx/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Boss man! Kitty cat is blaming me for everything!",
                "line": 43,
                "url": "https://drive.google.com/file/d/1l13w_aan0i2JDiFCghPh-USNvTbqeoXm/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "My lord, please do something about this dumb dog.",
                "line": 44,
                "url": "https://drive.google.com/file/d/115dMsWwPtqmqaGsgZGT-Yu3z4vP_qwER/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Alright, alright. Calm down, both of you.",
                "line": 45,
                "url": "https://drive.google.com/file/d/1BWy9KynvSyfBqtTJN_wENCXNBd8wFvTP/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "I'll be honest. As things stand now, this maid caf\u00e9 is a total mess.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1xx0Af1Mdb2BNg4YBhhdaOZIbniqVV-05/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "And it's not about who's to blame. The fact that it's such a disaster is on both of you.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1uIo0RZTcx4MMvE1gXLtbNuPqQ-uT7_Zx/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Me too?!",
                "line": 48,
                "url": "https://drive.google.com/file/d/1aXEsZO43XVNgS4vdcuilkWRcGGzpFG2i/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...",
                "line": 49,
                "url": "https://drive.google.com/file/d/1H0wie93Wydp80sqbCfkGcWn71qFjy07c/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "If you're going to do this, you need to approach it with professionalism. You should be putting your all into this maid caf\u00e9.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1VDF4axPHRg8bYKLhmwn6Hivp73VR1-au/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well...",
                "line": 51,
                "url": "https://drive.google.com/file/d/1f0CM2Z15kZALGZOSYhRzPCRhgXJjqGB_/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "What should we do...?",
                "line": 52,
                "url": "https://drive.google.com/file/d/1EfhS2Use9k5ofizzhEyTluTLMWNTjoHp/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Starting now, I'll teach you what it really means to run a maid caf\u00e9.",
                "line": 53,
                "url": "https://drive.google.com/file/d/15rssW1_07-CTpe2e8M8Uvzp_H81i-0zO/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "...Are you both ready?",
                "line": 54,
                "url": "https://drive.google.com/file/d/1bsAd9Knw15OnSkWAV_Yo34eVj863TG1W/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ugh... If you say so, Boss man...",
                "line": 55,
                "url": "https://drive.google.com/file/d/1T3rf6KfLLt0MTiUN6XmPHHK7FiOG3O64/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Very well. Please teach us.",
                "line": 56,
                "url": "https://drive.google.com/file/d/1zDlybBpqyS1QnLuDr-RXLo6iRsrdYgtX/view?usp=drivesdk"
            }
        ],
        "e6": [
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Let's dive straight into it... First, the way you two are greeting customers is wrong\u2014totally wrong.",
                "line": 1,
                "url": "https://drive.google.com/file/d/11V-XVAB1qnJlhMGaqwMNR_zjpL9bd-Bs/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Right now, in this maid caf\u00e9, I'm neither \"Boss man\" nor \"my lord.\" You should be calling me \"Master.\" Also, when customers enter, the proper greeting is \"Welcome home!\"",
                "line": 2,
                "url": "https://drive.google.com/file/d/1PPFowb7pyYzQV9srEtPkPX9zXZ3BfLf6/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Even for you, Boss man?",
                "line": 3,
                "url": "https://drive.google.com/file/d/1VaLeL3XNZCFiO0z0G-BI9RX5fUrFBdbG/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Isn't \"my lord\" fine?",
                "line": 4,
                "url": "https://drive.google.com/file/d/10mKTMfVS-Doy_ngk5E4nt3WCe_pf0z42/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Nope. That's just how things work in maid caf\u00e9s.",
                "line": 5,
                "url": "https://drive.google.com/file/d/1aZGFHyerQHUFwdRJ1pKqUee9bV_64Epu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Next, about the magic spell to make the food taste better\u2014if Delta can't get it right, Zeta, you need to step in and help.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1rCC8ba6AHw2O106t1-xV4eZx3g9LWxdz/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Ugh... But it's so embarrassing...",
                "line": 7,
                "url": "https://drive.google.com/file/d/18z4s62aXKLjqTwwtNaybJ5VSytmvuZH_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "That attitude isn't going to cut it. A maid caf\u00e9 is all about creating unique experiences between maid and master.",
                "line": 8,
                "url": "https://drive.google.com/file/d/12rj3RDPEMlrpGB4m4SaobTjkBNcaz9Pn/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "If the maid is embarrassed, the master will feel awkward, too. The whole fantasy will be ruined.",
                "line": 9,
                "url": "https://drive.google.com/file/d/15ivgBZluQs3t1YPzLQ0kpktxW1JB1VBS/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...True.",
                "line": 10,
                "url": "https://drive.google.com/file/d/1XP2jjbRXjhPo73FozjjnTYnYdn8yB-Wj/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So just own it and fully embrace being a maid. Flash your best smile, maybe even make a heart with your hands, like this\u2014",
                "line": 11,
                "url": "https://drive.google.com/file/d/1D5510kBSeT9brTe40A4SUCbjlU9XaUeM/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Cutie, cutie, overload!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1ztDkpvIC7CsJNwIA28hbv0E2TQHSsp76/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Come on, Zeta, your turn.",
                "line": 13,
                "url": "https://drive.google.com/file/d/1lxL-H_w-MmVBYYymO5qg5Ilg5ay_XNhZ/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Ugh... Cu-cutie, cutie, overload...?",
                "line": 14,
                "url": "https://drive.google.com/file/d/1wqPxxSOYAosTKqHrF0vdf9SSko5sCATb/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "A bit stiff, but I'll let it pass. Try to have more fun with it next time.",
                "line": 15,
                "url": "https://drive.google.com/file/d/1KVxxwlP1wTjYFU-49wNMW5637VzbK2Yl/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "S-Sure...",
                "line": 16,
                "url": "https://drive.google.com/file/d/1iOtc03JYraoZcxmWa7AaRykva3vhjMSH/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "There are plenty of things I could point out, but what bothered me the most is that you're neglecting the basics of being a maid.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1fAyGVYxH20zhA2UD7H5pDoYQVO7nofkl/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "The basics of being a maid?",
                "line": 18,
                "url": "https://drive.google.com/file/d/13tjR5qtdNGjmMbTc80Dr8VkxHjILDTJ8/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "It's all about caring for others. Maids are hospitality professionals. If you neglect that, nothing else matters.",
                "line": 19,
                "url": "https://drive.google.com/file/d/1xdaV7iHGV6MZY2_hPkBY8oNTnwTj_JZ6/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hold on, I haven't been neglecting anything! I've been thinking about you the whole time, my lord.",
                "line": 20,
                "url": "https://drive.google.com/file/d/1dSCtFrGEVF864M-8MpNA-CsbjxI-o3OB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Are you sure?",
                "line": 21,
                "url": "https://drive.google.com/file/d/1YoC05-5KNsPtLFIMAKRPxC0s94r9bRKp/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Wh-What...?",
                "line": 22,
                "url": "https://drive.google.com/file/d/1MHo_gBHHLlNYxgZFG__aaDSdfusfJMvA/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Did you really think I'd enjoy watching you two bicker and fight?",
                "line": 23,
                "url": "https://drive.google.com/file/d/1JRVBxqN45Mr3D3-bh4H_q-VSaqttaxVq/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well...",
                "line": 24,
                "url": "https://drive.google.com/file/d/1Iy9OY_0vIgkqgkvIOCTGYF5PtGz80gv_/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "As a maid, your care and attention shouldn't be limited to your master. You need to show it to your fellow maids as well.",
                "line": 25,
                "url": "https://drive.google.com/file/d/1rUZkbL2trAiDUcZLGVszyvtCtpHBYQpd/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "True hospitality comes from creating a space where everyone feels comfortable.",
                "line": 26,
                "url": "https://drive.google.com/file/d/1BpHbx3pWVPpm2pv9yjpQoa3t2NNLL0u0/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...I see.",
                "line": 27,
                "url": "https://drive.google.com/file/d/1GeA4f74vwpM5ZaxnwteALBXeAbu_NwBa/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...What does that mean? Boss man, this is getting hard to follow...",
                "line": 28,
                "url": "https://drive.google.com/file/d/1qV-W34fT3efbGiZgtTkwA24l9Tzg-6Jd/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "It means neither of us was thinking about the other.",
                "line": 29,
                "url": "https://drive.google.com/file/d/16cZgSNC6-ing_cxFO5vClL1xIMPS7DQN/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "B-But that's because you\u2014!",
                "line": 30,
                "url": "https://drive.google.com/file/d/1Ly1yW-S4Dr-krJcocwlePiPVnMmJpeGb/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yeah, I was wrong. I wasn't being very kind to a teammate I should've been working together with.",
                "line": 31,
                "url": "https://drive.google.com/file/d/1Uj42pqIgge8bIDmVj7C-4IFLRZCEy8zF/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Wh-What...?! I can't believe you admitted to it so easily, kitty cat...! That means none of this is my fault\u2014",
                "line": 32,
                "url": "https://drive.google.com/file/d/18JDawb_W6Uy99kzPqpGh7vbvLx7RgFCG/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...",
                "line": 33,
                "url": "https://drive.google.com/file/d/13uHPUrL-1gUy6AusgbVQjkIvaOVSg8f-/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "No, I...messed up too.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1V6qnoIOdB-GYFIDtek0TT0pRVyJQcY3K/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Here's what I propose.",
                "line": 35,
                "url": "https://drive.google.com/file/d/1ZELErO3dDy52lPaPUBex1TEKijHUYcbG/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "For Master Shadow's sake, let's put our differences aside and work together, just for today...Delta.",
                "line": 36,
                "url": "https://drive.google.com/file/d/1tVxneZbv2OX7dGTdWuPPwbPEt7bFWp1r/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "D-Did you just call me by my name...?!",
                "line": 37,
                "url": "https://drive.google.com/file/d/1Ve_9uxEoy8-547yHcIvyrIEOfvUTCkS9/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Master Shadow's words made me realize that we have to work together if we want to provide true hospitality.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1Tqa5iAMX4ojyVCZMRJ1IuKiqcywRCvqi/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...So does that mean you're gonna be my underling now?",
                "line": 39,
                "url": "https://drive.google.com/file/d/1QRKsgDKCWR89TZk7MWTiCdws9Nm6yoKX/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Not even close. I'm saying we should stop holding each other back. No more bickering. How about it?",
                "line": 40,
                "url": "https://drive.google.com/file/d/1Sgyn1N1osfY-FBB-qlKw2B18TbWCo5kz/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Fine by me!",
                "line": 41,
                "url": "https://drive.google.com/file/d/1qUJUyL17k-SSIBK3vCGHtN0fDgv5dK3e/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Alright, let's start over. Ready, Delta?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1WhxHOJT0vf0zwDTrSen0AAvrQj1lQjsw/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Leave it to me!",
                "line": 43,
                "url": "https://drive.google.com/file/d/13vW1UezjS0W7SkhqnZgnYCv8R9XG-nqH/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Alright, let's start over\u2014",
                "line": 44,
                "url": "https://drive.google.com/file/d/1epLsA3m4binJ8flKcWlgZ3azBR1tvZmH/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Welcome home, Boss man...I mean, Master!",
                "line": 45,
                "url": "https://drive.google.com/file/d/1MI5eirPqRO5iD56rwyithRuLkA9oJWc5/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "...Did I get it right?",
                "line": 46,
                "url": "https://drive.google.com/file/d/1KsZ4rAVj51Ya_LcTScD1n5a9YT6Agxaw/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Needs a little work, but let's call it a pass. You're doing well.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1AaZcAvB01iIUFVxyaEsEzEtz0B1smwnk/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Welcome home, Master. Allow me to show you to your seat.",
                "line": 48,
                "url": "https://drive.google.com/file/d/1Y0jK2wK1dyfbznehxQtcSDceDCOpbtmK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Oh, they're both getting the hang of it. Let's see how they do from here.)",
                "line": 49,
                "url": "https://drive.google.com/file/d/1V5XzsLi27FsaPzghHYWtGcRPhuVWUuwj/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "B-Boss, I mean, Master! Here's your tea!",
                "line": 50,
                "url": "https://drive.google.com/file/d/18vVEc91SZHzNTpqlC3dyDcmJsBGGuDF3/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Thanks. It looks pretty tasty as it is, but...",
                "line": 51,
                "url": "https://drive.google.com/file/d/1Y4-uF8NcCIDaEisEM19RYgXiKmf6bByE/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I'll make it even yummier!",
                "line": 52,
                "url": "https://drive.google.com/file/d/1uE761C59URZnEzE50siZsHINfWjr4sFL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Good, good. Delta's sincere approach to hospitality is a good sign. But the issue is...)",
                "line": 53,
                "url": "https://drive.google.com/file/d/1yrnD3SW9jI6lyo5lW0AYbq0ODF24obye/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Um... Cu...Cu-Cutty...?",
                "line": 54,
                "url": "https://drive.google.com/file/d/1C2IyY5sQE0645FUiHzDHx6CbxtopMe76/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Why don't we all do it together? That'll make it taste even better.",
                "line": 55,
                "url": "https://drive.google.com/file/d/1zgd1t4VGC2QIV0oyKAqw37XertI4USAP/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Master, would you care to join us?",
                "line": 56,
                "url": "https://drive.google.com/file/d/1kPkwuoSfpyQkvSSz6mV96Sg9T3W3Bvrq/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Of course!",
                "line": 57,
                "url": "https://drive.google.com/file/d/15ExMWnWadUs7ylV9Bk_ktq8MbSLGYioj/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Alright, here we go.",
                "line": 58,
                "url": "https://drive.google.com/file/d/16lrelT4pHwPXskxOFPSU-hGp8OCsBmVJ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid & Delta & Zeta (Cid)",
                "subtitle": "Cutie, cutie, overload!",
                "line": 59,
                "url": "https://drive.google.com/file/d/1Qka0yR9eBTrcz8ibx2KXaCOM-YqB-i3y/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Cid & Delta & Zeta (Delta)",
                "subtitle": "Cutie, cutie, overload!",
                "line": 59,
                "url": "https://drive.google.com/file/d/1Qka0yR9eBTrcz8ibx2KXaCOM-YqB-i3y/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Cid & Delta & Zeta (Zeta)",
                "subtitle": "Cutie, cutie, overload!",
                "line": 59,
                "url": "https://drive.google.com/file/d/1Qka0yR9eBTrcz8ibx2KXaCOM-YqB-i3y/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Th-Thanks...",
                "line": 60,
                "url": "https://drive.google.com/file/d/1XIAPyunPub2S9FERv8rvDvusgdBcpkF0/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "You're welcome. You really held your own.",
                "line": 61,
                "url": "https://drive.google.com/file/d/1_p_P6YQO_bC-BiEEGKY8oD9b_TYtelFZ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Zeta quickly covered for Delta when she forgot the spell...)",
                "line": 62,
                "url": "https://drive.google.com/file/d/1DE2vdDd26h9b0TN6xn-jNheq7wgBOvrR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Both of them can really pull it off when they try!)",
                "line": 63,
                "url": "https://drive.google.com/file/d/1cyG3i8XBwRa2tz3Gl25aFhnjoNT_cCgr/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Sorry for the wait, Master. Here's your special omurice. I'll write your name on it.",
                "line": 64,
                "url": "https://drive.google.com/file/d/1N5pSSdHzSY4pXT5eMjQu4iIctKglZmky/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...",
                "line": 65,
                "url": "https://drive.google.com/file/d/1KN3OhTjc6kio2Ya8iNqqYMnee-V0w97C/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I'll write your name on it too, Delta. So no more messing up the food with ketchup, okay?",
                "line": 66,
                "url": "https://drive.google.com/file/d/1Q1gnuolNcg2ZeM0InvvtD9Jo4WNPb3ou/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "If you don't leave me out, I won't make a mess!",
                "line": 67,
                "url": "https://drive.google.com/file/d/1tMOQ8uSuehmtAc6uVBigpUIf-uztaRov/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Oh, I want Master's name in the middle!",
                "line": 68,
                "url": "https://drive.google.com/file/d/12Ievf6foXm21sILxvuTZuyzTcJX1ysmT/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Yeah, yeah, I know.",
                "line": 69,
                "url": "https://drive.google.com/file/d/1zWpANhRY5SVDkK-QKi6tbZyIuLor3Nw9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(They're acting much more like maids compared to earlier. Looks like they might be ready...)",
                "line": 70,
                "url": "https://drive.google.com/file/d/1YhNdkAzRwSLkjLPqJ1gStZkuIr2qPuL5/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "It seems like you two are starting to grasp what it means to be a maid. Now, I'm going to teach you the ultimate secret.",
                "line": 71,
                "url": "https://drive.google.com/file/d/1REIFxRL39RXl9gYM4N7YwkVmYEsKAAAe/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "The ultimate secret...?",
                "line": 72,
                "url": "https://drive.google.com/file/d/1TeQGmJ_9bHYESfBvAgyCP0K2zkeWGpT2/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "Yes. You could say it's the most important thing a maid needs to know. It's this...",
                "line": 73,
                "url": "https://drive.google.com/file/d/1-8c5IYZwo05mzcQ5TC8jLLkkCvHDM65V/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "A maid must be strong in a fight!",
                "line": 74,
                "url": "https://drive.google.com/file/d/10bFmLYVHPmAvMfn4S1w9QH5SchVARhjB/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Wait...really?",
                "line": 75,
                "url": "https://drive.google.com/file/d/1C0HAnI2Y8KFT5nmVhvwfop5XTipXdp5s/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(A proper maid is usually elegant and kind, but when the time comes to protect her master, she must show true strength! That's the ultimate maid trope!)",
                "line": 76,
                "url": "https://drive.google.com/file/d/1lLQrqvJmwRmZRA5anhBhk0izsE1I8kYB/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(That's another classic shadowbroker move! No way that's not impressive if they're on my team!)",
                "line": 77,
                "url": "https://drive.google.com/file/d/1YHxbnNzXmXBAn18YUe-baDLYUJ2aEzuC/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "So, with that being said...",
                "line": 78,
                "url": "https://drive.google.com/file/d/196i35-Is4RNh-tRtVym_K62QCr71dpSR/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I'll test you myself to see if you have the strength required to be a maid.",
                "line": 79,
                "url": "https://drive.google.com/file/d/1ZcykXbz0s-9aJnhHRD8jP8x92Y_0i7VG/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I see... So this is the final test. Delta, I'll back you up. Let's work together and get through this!",
                "line": 80,
                "url": "https://drive.google.com/file/d/1LIgN9T9OFrWEeGH37NdLe7EhlrhvQ9fL/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "The ultimate secret of being a maid... I'll give it my all!",
                "line": 81,
                "url": "https://drive.google.com/file/d/1c97O8fImKuTxaap2t9IhhONSO2U_ngGN/view?usp=drivesdk"
            }
        ],
        "e7": [
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Ugh, I'm done. Total defeat. I can't move anymore.",
                "line": 1,
                "url": "https://drive.google.com/file/d/1So982hOFAtSmPaf1-wWpVVF6_zbuPXBa/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I can still...huh? Why does everything feel so wobbly...?",
                "line": 2,
                "url": "https://drive.google.com/file/d/10EyvteQhHREBes1Yy1m0ibwd_JkgCRu-/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "You shouldn't push yourself. Your legs are shaking. Not surprising, given how much moving around you did.",
                "line": 3,
                "url": "https://drive.google.com/file/d/1MQzUGC_uZvFuOgSJAxKSWoDG39jyklEQ/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "As frustrating as it is... Master Shadow is incredible. He dodged your relentless attacks effortlessly.",
                "line": 4,
                "url": "https://drive.google.com/file/d/1aCOyjHNysti779FSAxTt8nOs0wfuXwHs/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Thanks to you, kitty cat, I almost had him. We were so close...",
                "line": 5,
                "url": "https://drive.google.com/file/d/127irHjudj3ZYCZJEH1KNX0uf_iC1uRBl/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Your teamwork was impressive.",
                "line": 6,
                "url": "https://drive.google.com/file/d/1N1mPNREzizawFUszfOlStK9oCR62TpRL/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "You looked out for each other and combined your strength... You've shown me the true essence of a maid.",
                "line": 7,
                "url": "https://drive.google.com/file/d/1PPiDnrc6RBTZvhT3J1m8ITM-M8snx3u6/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Then, does that mean...?",
                "line": 8,
                "url": "https://drive.google.com/file/d/1PfSP9hf4HhKngmNo4wQQGNmI5cOCDWPh/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Of course, you've passed. You both did well.",
                "line": 9,
                "url": "https://drive.google.com/file/d/1jiEyKIzZWQzes5Oarf2IZXwIBn_Q8JlL/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "We did it! Yay! Yay!",
                "line": 10,
                "url": "https://drive.google.com/file/d/1BiObVhNMPKLn7CZBNuaiLo4N3luILzVE/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Whew... Somehow, we pulled it off. So this is the ultimate secret of being a maid...",
                "line": 11,
                "url": "https://drive.google.com/file/d/13zpAqHKdwMFidr4h41YxB6ztdX4qNGHL/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Lady Alpha, Lady Gamma! Over here!",
                "line": 12,
                "url": "https://drive.google.com/file/d/1J2AXlJ2HOkozSalFwEwNSTS_uGDeeC6Q/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "...We heard a loud racket. What happened?",
                "line": 13,
                "url": "https://drive.google.com/file/d/1gmXIwWZ4ueO-ieZWL3xkKsTGuxlQf4Wi/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Isn't this room...Delta and Zeta's maid caf\u00e9? What in the world...?",
                "line": 14,
                "url": "https://drive.google.com/file/d/148CQlLulP-b7p8Ef935C7890C76cwKJF/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Alpha, Gamma, and Lambda. Perfect timing.",
                "line": 15,
                "url": "https://drive.google.com/file/d/10kyTBc0VePG3nJvU3GIZz6LQpgz4CZQY/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "I was testing Delta and Zeta's skills as maids. Their teamwork was impressive to behold. I can confidently say they've become fully-fledged battle-ready maids.",
                "line": 16,
                "url": "https://drive.google.com/file/d/1dJCMWL8RIBDcRyio16m_gJOYqR-LBPde/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "That's not the issue here.",
                "line": 17,
                "url": "https://drive.google.com/file/d/1NPpZMXPITO5HNrY6fkXZbiwzjnbbeBLy/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Wait, huh...? Alpha's giving off some intense vibes...)",
                "line": 18,
                "url": "https://drive.google.com/file/d/1e9l4g6Xxfg0TI4ruz1loqOIxLKIEtMRw/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "This room that was decorated so beautifully is completely trashed... Care to explain?",
                "line": 19,
                "url": "https://drive.google.com/file/d/1xVUx24pygmVVXfemkXcZK-5c3ywuIhnj/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "My lord, when you say you were testing their skills, do you mean you sparred in here?",
                "line": 20,
                "url": "https://drive.google.com/file/d/1JQmkhlZSTwfSFN4Lm4Oiq2l1wpX0GWIL/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "The walls...the floor...everything is in ruins. How are we going to fix all this...?",
                "line": 21,
                "url": "https://drive.google.com/file/d/1ZdjZm5H7zck44rST5iPvGePQT6ecZnmE/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(...Oh no.)",
                "line": 22,
                "url": "https://drive.google.com/file/d/19FaSGMqClqFuC261xA1qS0Bfj6SSdjIY/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Um...well...",
                "line": 23,
                "url": "https://drive.google.com/file/d/1M8WhADFs4PN7TyPUiQ2cetaEE6WYfdEE/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Uh...well...",
                "line": 24,
                "url": "https://drive.google.com/file/d/1o2t19PnRtun0GKcGzAwIAp7qgFYfrkuf/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta & Zeta (Delta)",
                "subtitle": "It's her fault! No, it's her fault!",
                "line": 25,
                "url": "https://drive.google.com/file/d/1yOrhT-3WKyepX58LtketkeABMUUplbwX/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Delta & Zeta (Zeta)",
                "subtitle": "It's her fault! No, it's her fault!",
                "line": 25,
                "url": "https://drive.google.com/file/d/1yOrhT-3WKyepX58LtketkeABMUUplbwX/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Hey, don't pin this on me. Who was the one flailing around like an idiot and smashing into the walls?",
                "line": 26,
                "url": "https://drive.google.com/file/d/1QCXKus7Q6D0IfbxPGAK71Xsm1MWAeOCK/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I'm not an idiot! You also broke a ton of stuff, kitty cat!",
                "line": 27,
                "url": "https://drive.google.com/file/d/125bdWQWV4gmGuLpiAu6lH5KtVMGWxfQf/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I was careful and strategic in my attacks. I didn't break anything important.",
                "line": 28,
                "url": "https://drive.google.com/file/d/1Bl7W4029qZLSlW-SP2uqQSEfg70Y2KS0/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "I was being careful too!",
                "line": 29,
                "url": "https://drive.google.com/file/d/1JNJj8lmkoVv03UXG2pssPrepj-0NCF38/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(A-And now the ugly blame game begins... Where did all their teamwork go...?)",
                "line": 30,
                "url": "https://drive.google.com/file/d/1-VS69gfp5xQ2uMV7mvbJw4CKAdtjdpEc/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Are you two even sorry for what you did? Honestly...",
                "line": 31,
                "url": "https://drive.google.com/file/d/1ipmSTmV4BH-J7YVwh4nh-GU2N43XOHAF/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Ha-ruff... I... I'm sorry.",
                "line": 32,
                "url": "https://drive.google.com/file/d/198pibqSeo8XXLT10VlQhYadAExSWjPHm/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "...Yeah, me too. Sorry.",
                "line": 33,
                "url": "https://drive.google.com/file/d/1IjRA11Dck_DCoLr1XAeapARExvaPGosk/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Fine, I'll let it slide this time.",
                "line": 34,
                "url": "https://drive.google.com/file/d/1V-ipARhZECTu4ETSoCnzHgXHUA_GWiy_/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Today's a special occasion. I won't spend too much time lecturing you in front of Master Shadow.",
                "line": 35,
                "url": "https://drive.google.com/file/d/17LDPwcsIIe79z1WouW-qmenYEzoykhGQ/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Whew...",
                "line": 36,
                "url": "https://drive.google.com/file/d/1EQiAGl9ZibEOUrobPSckVxx562-cPIN1/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Thank goodness...",
                "line": 37,
                "url": "https://drive.google.com/file/d/1T3EM3jgMe0B4PtR4SRTTQO-N7PtZ42Rt/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "That said, you two will be responsible for fixing up this room later, so don't think you're off the hook.",
                "line": 38,
                "url": "https://drive.google.com/file/d/1bH1B1droifBqpSXGBhXdPrW3m5Fh0cr5/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta & Zeta (Delta)",
                "subtitle": "...Yes, ma'am.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1ee3_LxmQK6-Vmy0r708CSOxmf5nZTUrq/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Delta & Zeta (Zeta)",
                "subtitle": "...Yes, ma'am.",
                "line": 39,
                "url": "https://drive.google.com/file/d/1ee3_LxmQK6-Vmy0r708CSOxmf5nZTUrq/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Now that that's settled, stop looking so glum. We still have plenty of time left to enjoy the rest of the cultural festival together.",
                "line": 40,
                "url": "https://drive.google.com/file/d/16GBnoZc0-Z8bhYlQyAem_zAzyPnK0J4-/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "There are many other events planned besides the Seven Shadows' attractions.",
                "line": 41,
                "url": "https://drive.google.com/file/d/1QTmFvlE5jAYI8bh8Hjw-g4Jz5VL9pWQ9/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Oh...?",
                "line": 42,
                "url": "https://drive.google.com/file/d/1sqoMIDAwHsGgUfmbgNtaKSPmlgeRGdKp/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Yes! We've got an idol stage, a prize raffle, an after-party...and we're wrapping it all up with a BBQ event.",
                "line": 43,
                "url": "https://drive.google.com/file/d/1pmbtJh7K2jgYPuNvxO8M-I2ZVQpcITeu/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Cid",
                "subtitle": "(Th-They're enjoying this way more than I thought...! Which makes it all the more frustrating that I wasn't called to help with the preparations!)",
                "line": 44,
                "url": "https://drive.google.com/file/d/1ivA-6o7EaSW_5khDRpEuLBk6eNyThuSm/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "BBQ! I can't wait!",
                "line": 45,
                "url": "https://drive.google.com/file/d/1ZRNNJFHDu_Es1np2NnmFWzyEjZ0jOc9H/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "I might drop by Epsilon's place. She said she was preparing sweets.",
                "line": 46,
                "url": "https://drive.google.com/file/d/1YksSDNJayZvGorXzAXN0J2pFNfltPUOd/view?usp=drivesdk"
            },
            {
                "name": "Lambda",
                "name_variant": "Lambda",
                "subtitle": "Lady Epsilon's sweets shop is under my supervision as well. Allow me to guide you there.",
                "line": 47,
                "url": "https://drive.google.com/file/d/1HYxnXbDNUufcosbmOQvjJ6iPBygKC8Hb/view?usp=drivesdk"
            },
            {
                "name": "Gamma",
                "name_variant": "Gamma",
                "subtitle": "Both of you, once you get back, make sure to keep the maid caf\u00e9 going. I'll arrange for another room.",
                "line": 48,
                "url": "https://drive.google.com/file/d/17o2HojILqEHbBL8loJ2oSSai5974rtzZ/view?usp=drivesdk"
            },
            {
                "name": "Delta",
                "name_variant": "Delta",
                "subtitle": "Yes, ma'am!",
                "line": 49,
                "url": "https://drive.google.com/file/d/1LXsv7dbGkwUAPSOL7QTub7ONmOksStNO/view?usp=drivesdk"
            },
            {
                "name": "Zeta",
                "name_variant": "Zeta",
                "subtitle": "Well, we'll take it easy. Lead the way, Lambda.",
                "line": 50,
                "url": "https://drive.google.com/file/d/1LWzXDaqZPI0-FTPKhyjW99MtK_wIBD0H/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Honestly, those two are such a handful.",
                "line": 51,
                "url": "https://drive.google.com/file/d/1pufyJq0WgrIglKyY5btzuwYsvDcEVoJy/view?usp=drivesdk"
            },
            {
                "name": "Alpha",
                "name_variant": "Alpha",
                "subtitle": "Shall we go as well? Everyone's waiting for you.",
                "line": 52,
                "url": "https://drive.google.com/file/d/1M-m5oaVKAYXZj04b1aD8eP4tQayuXUzK/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Heh... Is that so?",
                "line": 53,
                "url": "https://drive.google.com/file/d/1Rs9Brceot8JnSCFgTDLr4i0C-AktjjxQ/view?usp=drivesdk"
            },
            {
                "name": "Cid Kagenou",
                "name_variant": "Shadow",
                "subtitle": "Alright...let's go\u2014and enjoy this celebration to the fullest.",
                "line": 54,
                "url": "https://drive.google.com/file/d/1bipNrH2nUwmIuAxlDQe-qiKWsFhCc8oc/view?usp=drivesdk"
            }
        ]
    }
}

// let setDoc = db.collection('data').doc('an_s2_e8').set(data['s2']);

// let setDoc = db.collection('data').doc('ssc_p3_c3-7').set(data['p3']['c3-7']);

// let setDoc = db.collection('data').doc('apo_p1_c1-2').set(data['p1']['c1-2']);

// let setDoc = db.collection('data').doc('es_aystpm').set(data['aystpm']);

// let setDoc = db.collection('data').doc('ln_v5').set(data['v5']);

// let setDoc = db.collection('data').doc('an_s1_e1').set(data['s1']);

// let setDoc = db.collection('data').doc('info').set(data);

// let setDoc = db.collection('data').doc('characters').set(data);

// let setDoc = db.collection('data').doc('medium_images').set(data);

// let setDoc = db.collection('data').doc('dropdowns').set(data);

setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
