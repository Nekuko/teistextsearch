const admin = require('firebase-admin');

// You need to download your Firebase Admin SDK service account key and specify the path here
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let data = {
    "p3": {
        "c3-4": {
            "e1": [
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "Another day, and the soft sound of the waves catches the pale glow of the horizon, gently ushering the fresh sea breeze to the beach.",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/14k1zi4pQOjA18z4G6CxidsfhC1iDcmwE/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "That's right, just like when you saw the ocean spread as far as the eye can see during your first visit to the this town, when you learned of the serene natural beauty overlooking the lively people.",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1a2zUuLwEswWOW3-60hpCq5r4raZ58Ll1/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "Like when the lapping blue waters soothed your heart for no reason in particular, leaving your mind free and open.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1TGLg_t6iObdLQmq8TxXnp4-MgyAnrvVG/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "This is Grazheim, the city of trade.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/17Q81fE7QZKNIFnPhLfNhaXRrfnjlYjSO/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "An island where summer never ends, where your heart dances to the rich rumble of the waves, the wind whispering through the trees, and the song of gulls in the sky.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/16S8bg_HHSk2ri_6XVt3TWgkageNl1nBx/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "Mistsugoshi presents...Splash Marina.",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1pDxgFVFohTeKKft9KwK0vd51kpe63-29/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "Beaches for going out, leisure for days in. Allow us to navigate your stay on the island\u2014",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1viZuIeB5vLi5Bh8uckgQgyJ-W7lfccFc/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Ciao! Novem Silva here! It's time for Splash Marina's March matin\u00e9e!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/10aNNQUB0TwsBZ-Be0FQcgJ2eI5FOPXVa/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "In this info program, your intrepid Mitsugoshi influencer will fill you in on all the latest trends in Grazheim, the city of trade!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1gSWGt04BU4unk2Q4C0R1IRABBbQISLOA/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "You can view this program at six locations around the city in day and evening showings, with two updates each month!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1sIFoZ4F9aZQUxhIofDP6a7eqn1gtdKz-/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Now, let's have a look at the can't-miss trends for March!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1nzMiwltaykVbS3F9FIufWehWX1Xh2DSg/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Oh. My. Gosh. Get this! The Grazheim Beach Tuna King now has an exclusive Midgar root beer!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1GrN3RYBqcLWjD5OuO0dtflllzmmcjahr/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Made with tons of herbs and natural remedies straight from Midgar, this fizzy delight pairs perfectly with the shop's other exclusive, the Real Tuna Burger!",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/11Y6QUx91fphBYxrb1Ws2jHW6dl_5ue5m/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "I recommend adding a huuuuge scoop of vanilla ice cream! It is, seriously, the BEST thing ever!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/121Wg_JAmhXCa319HLJzJRAsZDMaq2e8X/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Soak up the sound of the waves with a root beer float in hand to make those boujee beachside vibes even more lit!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1Fm7wFeuE4OcI0Six2RWZucSPOkjviGsJ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "B-Boujee beachside vibes...? Lit...?!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1lcZExXZBenu-ZTHPAQVQ7GNb1sskUqFm/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I think I get what she's trying to say... This is certainly in line with Iota's way of doing things.",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1DrZiR0PjMxprhREslLLg9-FYxq7iehxQ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Even so, this is too over the top... Perhaps I should ask Beta to write the product introductions, too.",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1L8-cYQOYkLEvID-oig1zyAqtb1z8EuCe/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Oh, and here I was thinking it's fine as-is. It makes for a fun little ad that'll get tourists in the spirit, no?",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1RnyNMprXNtOq1y-SCyZPOYXCnnePZAvg/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Well, yes, you're correct there, but we at Mitsugoshi have our dignity to consider!",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1JVg-o9RpNl2T6gd5p_p5PQahDcWH1sXJ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "This endeavor is optimal for expanding into resort locales, I doubt continuing with these \"vibes\" is best for\u2014",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/13wvLp13V9pi9orZunEIcU8rwMMgJ2KMR/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Gammyyyyy!!!",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/17uCfbu0UMQ4cC-WvAkgQ9c9-nEaZSiYx/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Ciao! What's the haps, Gammy?",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1WWMkWXe5JvuV5SMzTo9k-pw38Z0wN0RT/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1emBOXCccbMT9L4rwEqQtxiyH59I79DIy/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Oh, I've been very well, thank you, but\u2014",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1Zuq_iUxXgjwUyVVUGjriJfN95oOTUkAw/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Please, stop calling me \"Gammy\"!",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1zgvF3aeuvKhnCjK9tREaBupnMococNXI/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "...Why?",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1MP7wpVtGDa2HecyyrY2ADFxQ22UG66L3/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "\"Why\"? \"WHY\"?! Are you serious?",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1CIweFv9Qliu3ATFG8GISK77R1vP81w9m/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "I mean, it's not like there's anybody else around to hear, right? I totally get all that stuff.",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1cPoPcIrqI4qWOp16paANntdqi3oWEoKG/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "And I'd be sure to call you \"Luna\" if anybody was around.",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1BwNm44z-dpXixdS9xATf4copal6ulIKv/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We're counting on you today, Iota.",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1lGj1CQdF4vSH1j-VCgBiCm_KCiOISN0G/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Yes, ma'am! You can leave it to me, Lady Alpha. I shall be your guide around the sites of the trade city.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1hZnx4rHPM5QjAWG-gDarXzTu4zyAvBJd/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Now hold on, Iota! Why don't you address me with that same level of respect?!",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1X73mKmCaVhDEdsnh6KEqFLzTaJpXV_Sf/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Well...were we not best friends forever since before you became Luna the CEO?",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1a0j_oHrnEGbYVsgZCKNvSMq37ORWCUSN/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "We were, yes, but our relationship as superior and subordinate takes precedence!",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1-eVtEsCJW6Upi7-SRmCJxSajvReV3svu/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Heehee, it's been a while since I saw the two of you going at it like this.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1te9knhPNbBpbMUd7ruJA3gTjoaFiO0Tq/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Lady Alpha?!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1XUx_wpOeFYFkuDHiM4DHN2P-MLvEvoTT/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Now then, Iota, let's get down to business. I'd like to hear your report.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1L3MmczX5_djSkXD0rNsTgqgJnp3VQ3gp/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Understood! By request of Lady Eta, I conducted an investigation of potential sites for purchase in Grazheim as investments.",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1_-l74vRw85qxfWIrVLm-HQq-5MdgDK5K/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "I proceeded cautiously in my selection, adhering to the letter of what had been asked of me. You will find my investigation of the paperwork equally flawless.",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1GrBkBYZnIUIXrWjQ6A2AQyewa4njl0cb/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Well, I'm glad to hear you're taking your work so seriously. So, what sort of sites did you find?",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/16pCsZwtMZWV_Mq-46Hq3e12im9-PpG2g/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Wow, you really wanna know, Gammy?",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1espdEEtSaBnUVQu58L7mhNIdO-CuL2_7/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Of course I do! That's why I came all the way here! And please, stop calling me \"Gammy\"!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1HJeHAOFEf79G4S6LJJs5nUXpP1_YvSHR/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Huhhh...?!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1YqyciVlWwsWw3JqtIN-aY2X8vfOiK7cs/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "...Aha, I got it! How about \"Gamms\"?",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1Bv_xzQdrgWbI_1Qp9l1vP88vhO_fr1Hb/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Pfft...",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1qRPL4c1uVLkPu87_YdmOrY-UXW4dAB4v/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "How is that any different?! You're completely missing the point!!!",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1c3O4uNxt_TxNdelKNznNm3bHC3Avy-xG/view?usp=drivesdk"
                }
            ],
            "e2": [
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "You should be able to see it from here! That's the mansion. It's got its own private beach, even.",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1eV12mEmZseHi_BZE71NrFveT_l2buJV9/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "A beautiful home with its own beach and excellent access to the city... How is it that such an amazing property is still available?",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1OOeNkO_DFbyDxaM5cyscYzZg2oyGGCE-/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "I totally get what you mean, Gammy. So, allow me to explain!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1VpTp3JYR1VqwBtOmYPQXPT33kBXPNgDl/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "This is the Youth Manor House.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1YvTipcxznuQ3JCzUtJtZMhqRYueZOPex/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "The self-governing territory of Altena, one of the members of the City-State Alliance, built this residence for the young people of its nation!",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1jJcXuhjRMpWSoE8gc-8H9ecSQDT-2R3m/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "This means it was mainly used as nationally-run lodging where young Altenans could stay at an affordable rate!",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1i12_2QRZKyy-l6tEJCI6x4Vh6n7FPVTI/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "A reasonably-priced manor resort... Altena was encouraging the social experience of its next generation, I see.",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/14JQcsLZFP8puDjf-u-uRwzpunlg6b_Qq/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "No matter the era, leisure is the bread and butter of the trade city! But something HUGE was about to rock the foundations of this peaceful house!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1yHhfFGaAzshMGBAxN0VFCrckYw1GX16v/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "The elf-governing territory of Altena got invaded by the Velgalta Empire!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1Cr4tE_qy-TUhFeF3L_63ZW1vcEAQDPvk/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "As a small nation and member of the City States, Altena always kept a cautious eye on what Velgalta was up to!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1xQ9DAMG-YWDOU63ru2Dh8kOuA2-pQuJi/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "But Velgalta poked away at a political divide and eventually got the excuse it needed to attack... With no means of resisting, Altena had no choice but to surrender and become a vassal state! None at all!",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1SrOLb1LtNrM5ahPTGHU91lvNaROkt1uJ/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "The emperor of Velgalta sent some aristocrats from his mother's side to rule the new territory in place of its former lords\u2014and thus the Altena Empire was born as a full-fledged domain of Velgalta!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/15eMdjehel1TwACQeK6vhYbLURjyyKx_m/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "As property of the formerly self-governing territory, the Youth Manor House should have become the property of Velgalta as well... BUT!",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1eDlEiR3mg4FSwsF2YMe3ZVxrVHo-WgYf/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Velgalta ignored this mansion and its beach!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1EdxSVz4YVdmbnwhufX2Q4THQLrS8vzsr/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Oh, why is that?",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1CCRvZOwLCn0lk9sTYjttVZrTuoGIr7RD/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "...It's said Velgalta invaded Altena to use as a launch point for a future invasion of Midgar.",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1zr_ePCqPxKHgXwqncP-h557zWFLYHl9m/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Though Orum would still be in between, having Altena as a base in the City States would allow Velgalta to attack Midgar with ease.",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1P4Sham0BjmoA9EZEClAsRCKwyrN3m1G1/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "On the other hand, while Velgalta's actions were overt, they had skirted away from amassing components of what could be seen as an obvious intent to invade\u2014",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1zyRyApzE77MAJcDlo9lwjYW_fOg-K8Mf/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "And so Velgalta has let the Youth Manor House be, making no moves to seize it.",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1UFi_9r2DN9pY54UrMUyIAIsYKiOfTV0C/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "It's true. Officially annexing this location would be tantamount to creating an economic bridgehead right on Midgar's doorstep.",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1dPbHGW42UcVLT4ZEgWVHBOhz-YKJ2qMl/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Furthermore, it also has a beach that can be used freely. That means this location could be used even as a military transport base.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1igf3KYMdQjLJmxkxuf9BHhUStWxFxNQ4/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Exactly. Nothing gets by you, Gammy!",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1s8BIDLKdXg5StR4G0YHix9Oo_6cprq97/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "So long story short, Velgalta has been kind enough to put Youth Manor House up for sale!",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1gjrO8eXpi__glrTE3-ipyF0-Cs5UIFem/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...Who oversees the residence and private beach?",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1Cmoh1ETnCR29dgJsuMJFve7NZ4gnrl_Q/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "The real estate guild that handles public properties in the trade city. But with the place being what it is, it's been sitting without a buyer for quite a while now.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/168NZKgNWe5ZFdUOYNsUUBm0VpKtyeDtw/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Velgalta's own aristocrats and merchants are prohibited from purchasing it, and that of course applies to their counterparts from Oriana, too, due to frosty relations between the two countries\u2014",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/19bFELvl2Abx05wNcz2cj6-mSaUTnqL_Q/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "And one can't imagine any potential buyers in Midgar wanting to spend so much for the house and beach just to earn the kingdom's ire either, huh?",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1VrxETFjk68v8pYqi0c_FPIiHgufCl5CU/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "The price being super insanely high is one thing, but anyone who does buy the place is going to be assumed to be in cahoots with Velgalta!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/18L6_hw4QxouRdBMa_qDjr8RcqdJXqCZy/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "No Orianan buyers either, eh... Now that you mention it, relations between the two have been effectively suspended since the war...",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1tJDa-bkAefwkqgQNhD3QJzsT_obFb6Z8/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "And as if the bad luck couldn't get any worse, since around two years ago there's even been some trouble with a ghost hitting the price tag.",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1AAKFPP4fsqLlVyvxAsAayBOJWOJNKsY5/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "A ghost...?!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1yUQ0u_cYNUMzr5s6-XqBKvj6Z8rJwWXS/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Yes. Rumor says that it's haunted by the spirit of an old Altenan lord, perhaps tormented by the loss of their nation to Velgalta.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1VMMOCPE0d8S6E4FbsNpZ1JbZUnmG9a8q/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Perhaps aided by the fact that the property comes with a lot of political baggage, word of the haunting has spread among relevant parties in Grazheim, making for quite the headache for the real estate guild.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1xIx7078WKa5RICqdKYBPLjnYSubFlEsS/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Attempting to remedy the situation would end up benefiting Velgalta, but this would anger Midgar...and so the property continues to go untouched.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1dHtkifpXcFwZAU-g7Xk_ZvTgGmtrNiev/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "So, any misstep could also threaten Grazheim's position as a trade city built on international business dealings...",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1vM0B9Ki-fO32MJQWv2jrHKQUAVQJmt-4/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Diplomatic situation of the manor aside, it seems there's a ghost situation that is more than meets the eye. Any thoughts, Gamma?",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1R-gC4pVM4B18_dCba_9KjYsusekw00jB/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1p9kyWhlYM39hdcPbMi3FfCxx0FjqBpS5/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "It all seems like a hoax to me... I'm not convinced.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1LaSGZEev_8I1QAgPKdVfRLuY8wh6BtNo/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "So let's say this lord really did come back as a restless spirit. Shouldn't he be haunting a location within the Altena Empire?",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/18uBHgOHP_ZG-SWp_-wZ-NoNMzkpcBzK3/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Totally! He's in the wrong spot!",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1XBBZgouQJH0xRpmxwEFM5C30CQCu_bVl/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Exactly! The causal relationship doesn't add up!",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1zTJzEBzHGUKUW1fAcyoEyR8jvXwIorhp/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "What if the empire and real estate guild are spreading these rumors intentionally, hoping to lower the property value gently and entice a buyer?",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1zXCAKhokaUzX8iF324huxImK4hVbwRE7/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "If that's the scheme they're running in the background, then all of this would make a lot more sense!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/142z3OiphcOq4Eutxdtr_3avNNJlmb_BW/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "I sooo get what you're saying. This definitely feels cooked up!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1pKkv48jF9dBcyEfJn_EUIvsi5aJXNsT_/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Yeah, it feels like they have to be up to something!",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1zJChS9FKR3fyAPhda30NT9hRZMNrLHUL/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...Hey, hold on, Iota! Don't go roping me into your nonsense!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1syegVkoMk0L4QMBmDjJUxjh1F3kA4Lep/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Wha?! Oh, c'mon, Gammy! You're the one who said it first!",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1jVp3Oxph0t-kDUujSeQXHalxqvPf1Ow9/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Heehee, if we're all in agreement, then our course is clear. Let's move on to something a little more forceful, as is our style.",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1eMC2g0pzi0F3Mmguorccs5w72nQuTcjC/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We'll wait until the dead of night and then have a look at this manor house. Gamma, Iota, prepare for a stealth mission!",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1p6V9gbmbOfiHBZW08knDrXirAEMVNsQV/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma & Iota (Gamma)",
                    "subtitle": "Yes, ma'am!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1LSXloF-kSvhStYxn5gPg-RzonFk9-PE6/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Gamma & Iota (Iota)",
                    "subtitle": "Yes, ma'am!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1LSXloF-kSvhStYxn5gPg-RzonFk9-PE6/view?usp=drivesdk"
                }
            ],
            "e3": [
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1YHisv6m2xVOg4XzNZdVbXAMX6uLj2W6m/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "There doesn't seem to be anyone here.",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1fki4Ufi0dMpYUxL9lyT6dSbY2K38DZbM/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "No. I've been observing foot traffic in the area for the past three days, and there are no regular visitors.",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1u7tsTkx56-zdR_Ez3H4YAJghFl1UWcfO/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Even without the haunting, everyone in the city knows that this place is under the watch of the real estate guild\u2014",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1D7Lx3fgCY7sQwBPvag-ZY18qyYvcKksL/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "I doubt anyone wants to go trespassing in a place that already seems like it's mired in trouble.",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1Enjr87P8zXLv4eZ5WrlJKYvh2UqzVqWk/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...You really are thorough, aren't you.",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1AOjaBteCLWuiKMsduUvaI3ynPt2jhTrr/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Well, that's because I'm a gal who knows how to get things done, just like you!",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1_ZqaWc499tgIvRJs_562QRau9aTx7Y94/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Oh, yes, of course...",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1qakRvMoqDKyVGOsTYcVQBaBhojxVqs2t/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "She's complimenting you, Gamma.",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/16fPOycfwpzsbSpG4yp1Dd-Ce_mDqyLXN/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "No, Lady Alpha. This is base flattery.",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1_R7fhC-LjQ4XHO2mRvdYrowQFeUfeXp7/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Oh really?",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1_h90u9R0l1DBMm-8YoVq7g2vQXHXEIV_/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Iota is quite skilled at buttering me up.",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1lF6rtHh51BQNzYNAdVgqVId4UFztEbuh/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "She always smooth-talks me when she wants something. That's why she said it.",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1sVN3PsF1ECWtc537in3uvtmy8UnjXekb/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Aw, c'mon. You do like compliments, though, right?",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1KQiOCUv7NFjWpmUpRQ4KTZI31D_UsZMI/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...Yes, I suppose they aren't entirely displeasing.",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1FJWoD3pi0GDhKBjWzEEcbeuEE9CyMtjW/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "But more importantly! Do you really intend to wear that when we sneak in?",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/16jXG_l5GqQ64dBmKwAU_iRgwzaybzUQ9/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Uh, yeah?",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1vo_BGDdDkvdyur2kpBDIZ0MdTfTlgoei/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Now hold on\u2014",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1WvMcQcpd-P6Std3CxRcdO1YzxvlEC_Py/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Look, what we're doing is illegal, but it's also pretty much the same as a private viewing of a new home, see? In that case, wouldn't it be best to get a feel for it in our normal clothes, too?",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1KQ2C6_8RafXIC2lybDrmO3n6TyUm7JkA/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Well, yes, I suppose checking such things is important... What do you think, Lady Alpha?",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1Dtz3-MNhyBdjdJ1YsK9QZpNktGGfMcJO/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I don't see any problem. If the interior doesn't prove ideal for regular use, it can provide insight for judging the value of the property.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/18NIqmGlwLOu_gtNddhfml_Jv24LBWKfM/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Now then, let's head inside. Gamma, Iota, you watch our flank.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1kHcoNtulHv53gV5kSOfBtWMjxmzHv5m9/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma &  (Gamma)",
                    "subtitle": "Yes, ma'am!",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1YGlnWjfssd3iyeCI5REBwJudlecwjadw/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Gamma & Iota (Iota)",
                    "subtitle": "Yes, ma'am!",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1YGlnWjfssd3iyeCI5REBwJudlecwjadw/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "This...",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1TB24h6Rbq0egZARKmwgv8ELhhQHCAe5p/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "What the...?",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/15paUcBQvHu6Sr92DNwvOllpqYrg2HLgV/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/18pYwjRC013a1OEPGcm07APaUps_X-cRq/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "N-No way... They call this haunted?!",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1aLpfF0wV3V0F6yG8kBv1v9SfRZ6HGb2C/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "It's a little messy, but this isn't ruined at all!",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1zrT9qGeBP4fMUyUvcu8yCB438LGBuNhO/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "There are Tuna King wrappers, half-empty bottles... Basically a bunch of trash\u2014",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1aYSjl9MOiEQT3-LXtReOuRv1JV57epTq/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "No way can you call a place that sees this much use a haunted house! Somebody, no, make that a royal doofus, is using this as their hangout!",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1kQ4JWVw_VS7XeaCK_r4c7wYumSgQFkvY/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...This is a puzzle, isn't it. If someone is indeed taking up residence this place, they certainly are leaving it defenseless.",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1OkPpHtwbdj1TKxXpJMqo9mUJnlEo8yVc/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Just to reconfirm, Iota, you're certain there's no one here?",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1GmawsxuETDU0MDxRRjrb64lQ75Zpk9FI/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Y-Yes, of course...! I haven't seen a soul for three entire days!",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/19XEsF_VIoHsu50LaMyUyZBwp_JLFCZM4/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Though waiting for our arrival seems to have backfired...there's no reason to be upset, Iota.",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1y58uemjuA1A7VIwcNKUPVb2vth1g4RAo/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "...Thank you, Lady Alpha.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1A9-m7vdwEEs0LKDCzgBCSt-ci-z1Jdf8/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "This could mean that someone is staying here illegally at irregular intervals.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1WLq3gh5LanERwUvJC9Ubq332a-K-M4rL/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "But this is all rather bold, or maybe thoughtless... Dare I say that our unlawful tenant doesn't know what sort of place this is?",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1SoPgxcRRFJG0w2tsdW6t8pZaHEztPgsm/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Iota. This haunting...what kind of phenomena are we talking about? Just noises and shadows?",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1gDXBu4CRJBSMbA52FZ3ymUcJFEWdK977/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "No...! There are actual eyewitness accounts of the ghost!",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1_kiLrfD3BqVbEdkEqXalv9QMa8xciQLF/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "In that case, this \"unlawful tenant\" as Gamma puts it, may be no ordinary squatter.",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/17vNUh5BGy79QZvwK1Vm0Y_DWwIah8gqO/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Oh...!",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1zyXmYBXQsZUelstuUHbcHwL45u2_s6JF/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...You mean to say someone with the ability to control the spirits of the dead?!",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1-VbMPcclcp0dV6nFndlKpSrIL5_E_IG8/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That's one possibility, but it's only that. A possibility.",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/10pwecrCK0RrTio79Hu0n-XWC8HfwGNrV/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Is this lack of any sort of defenses simple carelessness? Or is it indicative of a certain sort of daring?",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/102BmIaFQXaabIz62n2k3pmdp8wRKSNp4/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Let's stay on our toes and continue the investigation.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1bzutv62NdEccndx9kbHk_OHJxc5rtN2h/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma & Iota (Gamma)",
                    "subtitle": "Yes, ma'am!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1-k3boc-aL8ATEIb4fvjr8DlXeal9a1Gz/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Gamma & Iota (Iota)",
                    "subtitle": "Yes, ma'am!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1-k3boc-aL8ATEIb4fvjr8DlXeal9a1Gz/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...There doesn't seem to be anyone here.",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1FLWJfJmWitDxGkNjKmHiN12P2svb5cDH/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It doesn't appear that this dungeon saw any use at all. This place must have been removed from any strife even during its time as a manor house.",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1HHrHDDwoLirfPEBNzwLV5tz-1kYwzEyt/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Looks more like it was used for storage... Hmm?",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1AWGr07QQZ6hpdFY6cPHJ5ox9vkqICuhg/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "What is it, lota? Did you find something?",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1-BXGaafnS1SM_-BFVEh6iDXej87JVdg0/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Well, it's just this crate doesn't have any dust on it, see.",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1fGJ8jz1r9UfkVigr4AhZpSiZAMCd8BQF/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "No signs of magic or traps, either... What do you think, Lady Alpha?",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1jzOlB0i2SVN9uBXYdr4bGofw3HRMTC56/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Open it, but be careful.",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1NDJOwVLzPISxtWvmf1NDUcGlqr7fxsMk/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Understood\u2014",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/17PT4_23v_EEZWxoUrlwRZe0Pdylh_Xr8/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "...Hmm?",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/18007caHr6YmOIMRlqzTCrGvCcg0MHXwN/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Are these...bundles of documents?",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1KLnEWbJtjajzmd5NKSBs1ZuTHStaSHGl/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "...Whoa! Gammy, get a load of this!",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/147b8wceuckY7KBOus-ppRXo_wY7hxnap/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Now what's gotten into you\u2014",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1gaeOaqbtv56RxVfy8r4d3s93SH2V6NzU/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...Oh my! This is incredible!",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1AFZWekpKj3sY7IclWf4WpSgAlG2_cfyW/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Did you find something?",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1Nt4OmJVorDIRHYYAi43NKVFUDD0IgjfA/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "It appears to be some kind of registry of names!",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1epvzuTwBDfQgRZzB_AS4km81aMdEdNV6/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "A registry of names?",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/15Nhf534edw35sh7CL-crpBu8NqfjI4Zq/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Yes...!",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1atAe_ff1UJE6sF31CyWCN-bVRP8dM6u2/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Baron Babyman...Baron Kidman...Baron Youngman...Baron Grownman...Count Oldman\u2014wait, Count Oldman?!",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1KwEdNeantnQhYo5oZZOIZgWf6C757N3W/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "You know him?",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1mS78Q71sQmXj2SmP1d7_5PreY2cRFw_U/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Do I know him? He's only the prime minister of the Altena Empire! You should at least know the names of the major political figures of our neighboring nations!",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1guxnJB0lj_TgZQqr8qfIn7nehiJEDoRf/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "A-Aw, c'mon... I mean, duh, I knew that, but just thought I'd go with the flow and ask!",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1XYw_idR8XqmadPZ6VasImRsoIaSjLVbr/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Count Oldman...point of note...\"wears a toupee.\" So that outlandishly thick head of hair really is fake\u2014",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1_HLEf0xX_WBmekVi368vng2JSquSQuN9/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "What we may have here is a list of highly classified information about the aristocracy of the Altena Empire!",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/1kTTQT1gdsUPnsx1qVc0k335Y-jyhNvi3/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/1f8OOyQQCCZgd_LsdDfu9D_oRoAnTV182/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Gamma. Check the documents to see if there's anything with markings of the Cult of Diablos.",
                    "line": 71,
                    "url": "https://drive.google.com/file/d/1oblIqpIE7qRuzbmFwrI6gJsG5T_fP1_h/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "On it!",
                    "line": 72,
                    "url": "https://drive.google.com/file/d/1nowSC9n-kEENv7p01fO3hPk1z3BAtRPF/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...",
                    "line": 73,
                    "url": "https://drive.google.com/file/d/1XSCfobRI6lLUe2RhDiaJIkn0pYGusw86/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...There!",
                    "line": 74,
                    "url": "https://drive.google.com/file/d/1RfEvw4AiBSFlQ-d4_PKIoiMUxcWZRlYb/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I think it's safe to consider this a list of personal information on aristocrats compiled by the Cult in absolute secrecy!",
                    "line": 75,
                    "url": "https://drive.google.com/file/d/17VKvhkBHPn5P2q7VE5J7JxH7-yMV9B8w/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "As I suspected... What does it say about other aristocrats?",
                    "line": 76,
                    "url": "https://drive.google.com/file/d/1749XCn7bze8Gp9Ow2I0JEK8P6k_djED2/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Let's see... There are notes saying \"bad drunk,\" \"avid gambler,\" \"disinherited unworthy eldest son,\" and \"accidental death in own mithril mine was concealed.\"",
                    "line": 77,
                    "url": "https://drive.google.com/file/d/14V1CtSScjRrA55jeVRPd6wK32LRSdOp8/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "The personal information columns on the other pages all generally contain something.",
                    "line": 78,
                    "url": "https://drive.google.com/file/d/1vvxGzf6l8924Gujc4ZTfwIDQ__L87xwY/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "All useful clues to help the Cult exploit the weaknesses of the aristocrat in question, I'm sure.",
                    "line": 79,
                    "url": "https://drive.google.com/file/d/1AS6900mu_N4CQSnYDKYljcV5CZWgKml3/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Why would they keep crazy documents full of super secret stuff all bundled up in a place like this?",
                    "line": 80,
                    "url": "https://drive.google.com/file/d/1KmxVEYxMtWOFcbBmGt8DPC0upUF4P-Ea/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "That's a good question... Why would a location with nearly no defenses house vital intel of a sort not often found elsewhere?",
                    "line": 81,
                    "url": "https://drive.google.com/file/d/1QcoFaI55y81IVDB6gH_dVkZjT99hEURc/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "It'd make more sense if it dated back to the days of Altena's independence, but this is about the empire in its current state.",
                    "line": 82,
                    "url": "https://drive.google.com/file/d/1O15xmRN-UY52yFW15XGV3UTUWFOvktl2/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Normally we would never obtain information on the Cult this easily, though!",
                    "line": 83,
                    "url": "https://drive.google.com/file/d/1TU8nJbFkH4rx35oGNLBjWfKKEhI65dRP/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Then let's confirm what's going on here using a more direct method.",
                    "line": 84,
                    "url": "https://drive.google.com/file/d/1P5QBabqr1Y5MH3EZ_Xlwcu0lgZMww55R/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Direct...?",
                    "line": 85,
                    "url": "https://drive.google.com/file/d/1gZo9wY1KxuhXCBjG2PCU7g5dUskZoRyh/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "That is to say, we wait here for someone to come\u2014",
                    "line": 86,
                    "url": "https://drive.google.com/file/d/1LtJ3vTM-cKU8XUHqthMEm-xcNicC1hQe/view?usp=drivesdk"
                }
            ],
            "e4": [
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "...",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1u53ul8rSGsBTD97AhCqgggMIE88lyaub/view?usp=drivesdk"
                },
                {
                    "name": "",
                    "name_variant": "",
                    "subtitle": "...",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/16HeMfLmxhFtlDfU-7bSTPfgqhefMrscQ/view?usp=drivesdk"
                },
                {
                    "name": "Bandit?",
                    "name_variant": "Bandit?",
                    "subtitle": "Dammit... Those Tuna King turds should stay open later... I missed out on getting a nice tuna burger again today...",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1hXElxasBt-SBsq9Nl_OHWI-YmR7H-UKG/view?usp=drivesdk"
                },
                {
                    "name": "Bandit?",
                    "name_variant": "Bandit?",
                    "subtitle": "Ah, whatever, this is the last round, anyway... We got a good amount of stuff, so the time's almost here... Hee-hee!",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1TB7Erl7lAjE3SSw1oYxKkdUPeUZmYf3F/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "The time's almost here for what, exactly?",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1mDBsaIpFFFvoLIgIJ0gdgsC9RNYMuVwE/view?usp=drivesdk"
                },
                {
                    "name": "Bandit?",
                    "name_variant": "Bandit?",
                    "subtitle": "What?! Is someone there?",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/13Cq55GfKQFuNYWu9W0cUb4ZGfMQh1Msm/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "By \"good amount of stuff,\" are you referring to the documents in the basement?",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1BOO8DK3cr5HqXtro4bBX4p40E2aMQ26E/view?usp=drivesdk"
                },
                {
                    "name": "Bandit?",
                    "name_variant": "Bandit?",
                    "subtitle": "Who the hell are you?!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1t3JHn-Gvu8sJmDpLnhLv590zzXWajNCu/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Um, I think it goes...we have no names to waste on the likes of you!",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1Cizaeq9A9NdGOELHJuhk8DCvtCzvchKk/view?usp=drivesdk"
                },
                {
                    "name": "Bandit?",
                    "name_variant": "Bandit?",
                    "subtitle": "Even after spreading all those rumors, there's still dunces trying to get in here... Die!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1C1CMpfAtkgfLW09V7Bo4OYKe3gt3SAn5/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Heh... You think you can hurt us with such shoddy swordsmanship?",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1kCOAEHLChcJQ7s2oQilQpypy9kebD1mu/view?usp=drivesdk"
                },
                {
                    "name": "Bandit?",
                    "name_variant": "Bandit?",
                    "subtitle": "Wh-What?! B-But you're just a girl!",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1Rm4zRXiVO2CgNacWsVpMMyrAab5Buiav/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Now, accept this fight and tell us everything! Fail to do so, and you'll taste my blade!",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1ALnu2fXB9POeIF-gZcaGSH7KTa3X4awb/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Stooooop! That's enough!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1qTGOQdAVuwpOFfCI2mcaAnVc0gOjdDni/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Hey! Why are you stopping me?!",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1efUc3qVb3PkgXU2BjkoxpxWgnRGQuq88/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Because we'll never learn the truth if you slip up and kill him, duh!",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/1Hpbpmh-Eu12u4D0btk1R3bvRAqatbmsL/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I'd never slip up and kill someone!",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1u1QjVnzrq5VNrsMpbQVFuWICbbBKjAij/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Uh...you might think that, but there's no telling with you when things get real, Gammy!",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1D-K0i4ys32jjaLX0G_0cEwQmTkAYxhPp/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Aha! You just said something mean, didn't you! Do you really think I'm so incompetent?!",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1RaebWnZjZWXsZTpvmj22IfyjmbwA5Mxx/view?usp=drivesdk"
                },
                {
                    "name": "Bandit?",
                    "name_variant": "Bandit?",
                    "subtitle": "Eeep!",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/1zo75j-n76oYo7YQPWhhwjNyxesxvik10/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "You hold the key to the mystery here. I want you to tell us everything, and leave nothing out, are we clear?",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1EygVSEDsjY33i_B2Vr9gE6kh-2h5nWWo/view?usp=drivesdk"
                },
                {
                    "name": "Bandit?",
                    "name_variant": "Bandit?",
                    "subtitle": "Yikes...! F-Fine... J-Just don't kill me!",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1UichOO5rFBRaIBGIJuPuKwLCTX4kSK7S/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Who are you?",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1gIj2-x3cWLP2WHoKGam8CKD2Nj0rdoSl/view?usp=drivesdk"
                },
                {
                    "name": "Bandit?",
                    "name_variant": "Bandit?",
                    "subtitle": "J-Just an...o-ordinary citizen, n-no one special\u2014",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1AYmsG-a97chPbkhR8br3MfE46jIDgkXp/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We found your Cult robes. So this will go better for you if you dispense with the petty lies.",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1w0Kl6tfUWoh0WQWcptgrNd78a10TDZeR/view?usp=drivesdk"
                },
                {
                    "name": "Bandit?",
                    "name_variant": "Bandit?",
                    "subtitle": "What...?!",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1167pU84taC8eFCdUfvtSBR0qSbi1h7Ku/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "How... How do you know about the Cult?!",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1S17ZgZuVFQtkSQEhUZ_YBJUVscPZdYkF/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "We're the ones asking the questions.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1YF8g2DChXpAPtm6v2D9ggkKQvLg7VpDK/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "Eeep...!",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1lqHUly_iTWzUb3hatYnWVLR3XM3tFC78/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Where did you get this list of names?",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1IUTKqa23o1FjWuDWpcXUSU0ejLpHG-rE/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "O-Oh, the list...!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1Dq7be2k4VGhIK3Hqga7ZAJPpoPrM-aCe/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "It's...a secret document of the Cult.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1zoFEUSX_CAq2spjKjOlooucN2IPxuEsn/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "And why would a lowly member such as yourself have access to such a thing?",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/16Mt_1vAsgIOor4sBECP99hWz2grGWXqE/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "U-Uh, well, you see...",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1vO2mnbE_qo9bNw21Sl0EKwErQuc2Zeo8/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "If you're having trouble understanding the question, perhaps I can start by helping your hearing.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1SsYcgHvUn6gLpABVTgqDsPvb82qIVGc_/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "O-Okay, okay, I get it... Just stop, please!",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1kdG_OQv6ORNMr2b3z7Ge2He3hKc3yYSF/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "I...took it! I stole it!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1vQqJTwI8yyuTKQtBHG_5movNVpXt4Mj4/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "You stole it?!",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1JBKSxS5TKjoF6Cb6g2Hnd2kJLBBPdU8Y/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Was it that easy to steal?",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1gcEiDNvdQ6R34Zncc9E91YrcH-p0QmmY/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "S-So...normally I guard the Cult's archives\u2014",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1Z5ueax8OymPWebyzzQbjOiIKeoZj_WWo/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "And you stole this on the job while no one was watching.",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/1kRUs9DUNXu2xUwGpl_AqQjY8aMAB_K78/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Why did you hide what you stole in this manor house?",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/1Ezd0SY4WxcoB_JDyZ1RpZCy3KhlBSQiM/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "W-Well, because word gets around in the trade city! No one comes around this place at least on account of all the trouble...!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/13VbYns9WNv6faSDDBOGdT3McCCNEK5tZ/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "The guild's got it on lockdown, there's the ghost... Yeah, nothing's gone right here, because of the haunting!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/1HZjHW8tEJuqYfSLe6ri9tSFyc354izKG/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "No one noticed what you took was gone? Even if they didn't know who did it, the stuff'd still be missing.",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1ccF5QNlKmkBOQZ15ZUPPotkadx_9Lwlz/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "N-No... The archives only get inventoried every two years, and we relocate them, too!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1k_3BI7tObcYGUdz1gWvdOA4Z_Oa2g0t7/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "As long as I made my escape before then...I'd have nothin' to worry about, see?",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1LFwj2_4C9a8H0-mD9R0gfQ7X37B9NK8t/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Two years?! That lines up with when all the haunting stuff started.",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/1I93v2WMTRSIo1Hq2YxxfzfOqSOeozYcA/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "That's why today's the last day... Heheheh...hahaha!",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1T68fBzR1NdU73GUUJhOh3AvZky1G4iXE/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Why are you laughing?!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1maqQj1Ne80sfJw9zR7OHw7BUMmiHF0Ca/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "Ahahahahaha! Thanks for the extra time, ladies! You shouldn't have been so chatty!",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1T_UjlNXwL0jLWpEKSnHA4qTMxUl6O8pK/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "If you knew about the ghost, you should've been on guard against me summoning it!",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/15qWuL-edAowUaVe_lhxcj388MARYT0uG/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "Now this here, is a spirit used by those creeps from Orum to take out heretics!",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/1KOZAcdP6WZCHfrURwyuwtUiCkY8lzNCg/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "I've almost got everything going my way, so no way am I letting a few kids stop me!",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1m9QjBINfoOkJW8YM7i2_Wp7ef4P171Bm/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "I'm gonna sell that list for a ton of cash and then party the rest of my life away!",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1FwEZVwD8w1514Nw0-X9mxfVfh8G8EQrO/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "You're going to sell it? What about your loyalty to the Cult?!",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1SPxOJyJ6uERwNw7DkoTl5nILMzSB0ymt/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "As if I have any! Who wants to spend forever toiling at the very bottom for scraps?",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1G6PGOQnLLsEmtzUeqvj1aUukZMsVFK6n/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "A rank-and-file cultist, not skilled enough to be made into one of the Children, and too lowly to even know who we are\u2014",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1jtkRUuvKwaFWhvHIB_Z0iPfyPRORyFvt/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "And an organization so bloated it fails to notice the decay and corruption at its extremities.",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1i9_rUGg0e05FcrjorGnHUY2jK5fJxSkR/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "What's so funny?!",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1uOw-teTLz9JFwr6yj5SK2FhmElezV-Ki/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Nothing. I simply find it laughable.",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1Dmh1prF0mwWAR-LEqDx2f5fsh3_Azifj/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Now, let's get this battle underway. We have the information we need.",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1DpKhPIvC1I5ceKYCQFm9msYD_pl3VY7E/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Allow me to dispose of the ghost!",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1MQVPsXA_m_QeD1rZL0Umjd_uRVqdL2D-/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "And once that's done, shall we send him to the bottom of the sea?",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1TbP3nmc5psPesjydLNlf5ToHOQUnbxeo/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Yes, by all means. Just make sure to get the location of the archives out of him before you do.",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1uAHivQiBlVQhN8NPkgdxI0F2LgJG5u0K/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "In the meantime, I'll deal with the minor spirits the ghost calls forth.",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1TgYebLFaP1in5z5sPZERw6h6Kdw2ks1t/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "What?! I dunno who the hell you girls are, but don't think you've got me beat!",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1-tM-rqyDFLB6LGG2FtTlEanQ73BJObG2/view?usp=drivesdk"
                }
            ],
            "e5": [
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Hyaaaaaah!!! Swish, swish, swish, swish, swiiiiish!!!",
                    "line": 1,
                    "url": "https://drive.google.com/file/d/1oX0Vmi3QKq_HCK6LzVpvmIgatZZTwaek/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I got it!!!",
                    "line": 2,
                    "url": "https://drive.google.com/file/d/1JxeW361htFEgKV7WstXSPEzoVSzRvpta/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "When you land a hit, you sure hit big, Gammy!",
                    "line": 3,
                    "url": "https://drive.google.com/file/d/1t3ZKzDszp-P-C8t2s_WfyAJsOVNMwbc_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "It seems that your ghostly support is gone.",
                    "line": 4,
                    "url": "https://drive.google.com/file/d/1zp3Jdms0umwHdDFEHm41qQe_SuL-owDL/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "Dammit! This...this wasn't how it was supposed to go!",
                    "line": 5,
                    "url": "https://drive.google.com/file/d/1ujqdZd2BGzeuE6EMdWiyEW9ourFoibmr/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "I was just gonna spend the rest of my life havin' fun! What the hell did I ever do to you guys\u2014",
                    "line": 6,
                    "url": "https://drive.google.com/file/d/1rbzCowe1Oc1XgACxug9xj4mOwLU36RRN/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "It's nothing personal!",
                    "line": 7,
                    "url": "https://drive.google.com/file/d/1f45sEcREyLhDZDitgkaOol7IbcXKZdnr/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "Gyaaaaah!!!",
                    "line": 8,
                    "url": "https://drive.google.com/file/d/1PaDcWE9W45E6PqloIY-r6XtQ1KuJl_no/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "But there's plenty of reasons why we'd wanna take you out. Now, about those Cult archives...where in the trade city are they?",
                    "line": 9,
                    "url": "https://drive.google.com/file/d/1myHCM-_F7IieAK5JSZR4jhpxb_UV9SNq/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "...B-Below the...hot dog stand...!",
                    "line": 10,
                    "url": "https://drive.google.com/file/d/1iuDMj2C109jUnmC5HRaHx-znFDPq01aZ/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Oh, what, there? The place where the bread and meat's all dry and nasty?",
                    "line": 11,
                    "url": "https://drive.google.com/file/d/1_5Nj9LIPLJ42sUBcSI0W02zLGX8SkwdT/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "Y-Yeah... Their...dogs really suck...! They could learn a few things from...Tuna King\u2014",
                    "line": 12,
                    "url": "https://drive.google.com/file/d/1k63cucHm4MNtasLA4J5XCcgtSv8GuY6L/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "\u2014H-Hey...! I-I know you! You're Novem Silv\u2014",
                    "line": 13,
                    "url": "https://drive.google.com/file/d/1a1MLv6u20WpMBZl8RJ1sZR512rSBTSn4/view?usp=drivesdk"
                },
                {
                    "name": "Cult Member",
                    "name_variant": "Cult Member",
                    "subtitle": "Gehah...!",
                    "line": 14,
                    "url": "https://drive.google.com/file/d/1iw6mg3S6_yQXfoxzXoqKryUqenCW1PqS/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "...It's finished, Lady Alpha.",
                    "line": 15,
                    "url": "https://drive.google.com/file/d/1nqJ50U-l53hlee5XVsAfwiDsDdxpzYYh/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Nicely done. Can I entrust you with raiding and collecting information from the archives?",
                    "line": 16,
                    "url": "https://drive.google.com/file/d/17_2vpCfedfe25mm0KAv8ONRTuT_NOlbu/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Judging by what the thief said, it seems time is of the essence. I'll see it done, Lady Alpha.",
                    "line": 17,
                    "url": "https://drive.google.com/file/d/1u9Cy_KYLXp5jUlEgAxVNhb3lEYGuYafz/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Now that I know this list of aristocrats is circulating throughout the Cult, I'll pay attention to trends in Altena in even more detail.",
                    "line": 18,
                    "url": "https://drive.google.com/file/d/1YzB38d44X_2fhQQQOk_0ImR9tS372dU_/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "...So, Gammy, how about this property? With the little issue of the haunting out of the way, shouldn't it be okay to buy now?",
                    "line": 19,
                    "url": "https://drive.google.com/file/d/1zhD03MqRYPXxlJHeMh39-3juCtgqgMAU/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Well...",
                    "line": 20,
                    "url": "https://drive.google.com/file/d/13e6ulSEHSn9XRg3-jUF_3rXc0MOC3PgH/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "If Mitsugoshi were to purchase the manor house now, it would free the property from its political entanglements.",
                    "line": 21,
                    "url": "https://drive.google.com/file/d/1l6qwwZR0cBnOeWzeDx6uB2KLtWl1dL_W/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "It's value would then rise greatly, making it an ideal subject for the kind of real estate speculation Eta hopes to see.",
                    "line": 22,
                    "url": "https://drive.google.com/file/d/1ukjw0N_MtbPtNm74R1P8n6Ah5K1sEVq0/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "The manor house would then become the focal point of increasingly regular political calculations between Velgalta and Midgar...",
                    "line": 23,
                    "url": "https://drive.google.com/file/d/1XHoKt4zFWVmKDgbB4sFPpGUQHDPsKJCJ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "...Say, Lady Alpha! Could this location not perhaps be used for anything else?",
                    "line": 24,
                    "url": "https://drive.google.com/file/d/1UHU45P5pfRZ_YG6lREhaJSQiLWhhXJmx/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "I'm guessing you already have some ideas, Gamma?",
                    "line": 25,
                    "url": "https://drive.google.com/file/d/1ZQWCUy5sQu-adiA9hmhqb9EnF3r2abEu/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Indeed. This place...the Youth Manor House...was once an affordable lodging facility for Altena's young\u2014",
                    "line": 26,
                    "url": "https://drive.google.com/file/d/1d3LVbzrwyM8uiRcGVvwsT33k-O05iey_/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "So...I think it would be good if Mitsugoshi were to do the same thing.",
                    "line": 27,
                    "url": "https://drive.google.com/file/d/1JjzVNej0LxJJEUP0iV8kt9IBi24-SAZJ/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "We could open a portion of the residence to intrepid young globetrotters, while also operating it as a place of respite for our own Shadow Garden members.",
                    "line": 28,
                    "url": "https://drive.google.com/file/d/1nNuxRbCt9q_AbqME7pC_JLbGJBbzS4zS/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "I believe it would better serve us not as a vehicle for speculation, but as an investment, as the Mitsugoshi Youth Manor House.",
                    "line": 29,
                    "url": "https://drive.google.com/file/d/1g5PL1LoKImCt_nxE5fOAoyjhoexFyVeG/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "It would both enrich Mitsugoshi's service and benefits program as well as us a location to investigate symptoms of possession among the youth.",
                    "line": 30,
                    "url": "https://drive.google.com/file/d/1xJiu91vFhcBHPyR11UBHBZ-z5M0IW7LB/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Ah yeah, I get it! You're really sharp, Gammy! Guess it pays to take the long view of things, huh!",
                    "line": 31,
                    "url": "https://drive.google.com/file/d/1z6FuwVEEkL4bfYSo-NNw5l1tkJ3lbxjH/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...The question of whether every member of the organization is happy with their lot in life is one not even Shadow Garden can afford to ignore.",
                    "line": 32,
                    "url": "https://drive.google.com/file/d/1OQEhD46Sx1fBCiXWAepadfK16O8XGK2W/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "While we don't have thieves like the one we just dealt with, as our forces grow, it will become increasingly difficult to keep a grasp of all of our ranks.",
                    "line": 33,
                    "url": "https://drive.google.com/file/d/1ugM68oHHvZAmNAqh9oxXzmxV2wCmJBE_/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Still, we should find ways to show that the thoughts of Shadow and the rest of us lie with all of our members...",
                    "line": 34,
                    "url": "https://drive.google.com/file/d/1hW0bnWyHn_ftDYZeWIMCRwvql-AJ4NrH/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "...Very well, Gamma.",
                    "line": 35,
                    "url": "https://drive.google.com/file/d/1Yps8YJIbRN0JS1QgO5Kuv-klf89TS7DK/view?usp=drivesdk"
                },
                {
                    "name": "Alpha",
                    "name_variant": "Alpha",
                    "subtitle": "Though I feel bad for Eta, this property will be reborn as a youth manor house under the operation of Mitsugoshi.",
                    "line": 36,
                    "url": "https://drive.google.com/file/d/1MjH30eHCv6nnSzAwDD67jIr9ojS-Tldb/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "Lady Alpha... You have my humble thanks!",
                    "line": 37,
                    "url": "https://drive.google.com/file/d/1PalHyEO3lgNmxCELq5mR5OmhUlTxPwcg/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "Yep, Gammy is gonna Gammy.",
                    "line": 38,
                    "url": "https://drive.google.com/file/d/1RMj-XxXfMqDlx4ZxHyLUrqGtshlJ31TY/view?usp=drivesdk"
                },
                {
                    "name": "Gamma",
                    "name_variant": "Gamma",
                    "subtitle": "What, Iota? Is there something you'd like to say?",
                    "line": 39,
                    "url": "https://drive.google.com/file/d/1kFHJt2Aen4acchiKCaQJ0hMB-esQ6nau/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "No, just noticing that Lady Alpha's got her way of doing things, and you got yours\u2014",
                    "line": 40,
                    "url": "https://drive.google.com/file/d/1ZANTy2rRdGa4GOdKUmZyFMEAhwo7r_1-/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "Iota",
                    "subtitle": "And I got mine! And that's totally cool!",
                    "line": 41,
                    "url": "https://drive.google.com/file/d/12DdbwVd6DCJfbNbIpTOR7HEXWa3O2990/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "Ciao! Novem Silva here! It's time for Splash Marina's April evening show!",
                    "line": 42,
                    "url": "https://drive.google.com/file/d/17wZe0RTz-ZhwVEQRLCjtMFahkqoRQuQS/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "In this info program, your intrepid Mitsugoshi influencer will fill you in on all the latest trends in Grazheim, the city of trade!",
                    "line": 43,
                    "url": "https://drive.google.com/file/d/1yPIDy1pk5Z7J-fWgkW-zbY57MEXzOTyB/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "You can view this program at six locations around the city in day and evening showings, with two updates each month!",
                    "line": 44,
                    "url": "https://drive.google.com/file/d/18TYUBMcHvHrpESl4VuxyVbJwvskUStV1/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "Now, let's have a look at the big news for April!",
                    "line": 45,
                    "url": "https://drive.google.com/file/d/1p34-xXGQAKMJtT4GkTcWllDvoU2lVD9q/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "The Youth Manor House owned by Velgalta in Grazheim...has been sold to Midgar's own Mitsugoshi for the sum of eight billion zeni!",
                    "line": 46,
                    "url": "https://drive.google.com/file/d/1Qiw2ZRR0Cr5bC12z6GuJerkOxJfhOyn0/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "Mitsugoshi plans to use the location as a recreation spot for employees, but that's not all...",
                    "line": 47,
                    "url": "https://drive.google.com/file/d/1T7noCEUp4YsDyaPN540SOYVNdQZh7txt/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "Parts of the manor and grounds will made available as accommodations for young travelers and open for business to sightseers!",
                    "line": 48,
                    "url": "https://drive.google.com/file/d/16SbUaYXEV80YxVuBDdx80Ct9THrJ0T8v/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "No matter who you are or where pause from, you can get a room for 5,000 zeni per night, breakfast and each access included\u2014just as long as you're 25 or under, that is!",
                    "line": 49,
                    "url": "https://drive.google.com/file/d/1XpeELbNJTYm5fBdukz9-VP01qr-qfPD_/view?usp=drivesdk"
                },
                {
                    "name": "Iota",
                    "name_variant": "None (Iota)",
                    "subtitle": "Kids need to travel, and we say let 'em!",
                    "line": 50,
                    "url": "https://drive.google.com/file/d/1z3zuvbSu2lkDoehbruAjHHKncKK1gJje/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Master Shadow, do you remember an operative by the name of Iota?",
                    "line": 51,
                    "url": "https://drive.google.com/file/d/1yQKbkxZC1MGV5fVXgM-gTv_lsHS5jVNz/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Iota... Iota...",
                    "line": 52,
                    "url": "https://drive.google.com/file/d/1C4kbR5YUuDVMptnz_eiL1pMP8a8z5hXP/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "...",
                    "line": 53,
                    "url": "https://drive.google.com/file/d/14qfpEdlmVouu6i9nwIVKtnShxfxwECX9/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Oh yeah. The forest girl.",
                    "line": 54,
                    "url": "https://drive.google.com/file/d/1JPn629DhPUFXNwrt_Yb1h71nVzn1HB-o/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Yes, the rabbit therianthrope with a taste for forest bathing and the lush nature of the Kagenou fiefdom.",
                    "line": 55,
                    "url": "https://drive.google.com/file/d/1S7c01neqDqQdvkJdEW60M8jXCihz7bae/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Oh, right, her! The fairytale girl with bunny ears and a sorta organic vibe to her that Alpha found somewhere.)",
                    "line": 56,
                    "url": "https://drive.google.com/file/d/1-lLWikMoUPwTzSHBdvqkznxX_C5x7wjc/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "I had a face-to-face meeting with Iota for the first time in quite a while, and from the look of things, she's become a vapid girl who acts like she's perpetually on vacation!",
                    "line": 57,
                    "url": "https://drive.google.com/file/d/1ndserwYETxNk2lrZtypG_WvV8wJVzKXH/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Um...so wait...you're saying she's a party girl?",
                    "line": 58,
                    "url": "https://drive.google.com/file/d/1dWxAXlWf5TCwVujAGiRKq1MS4xhBGxIW/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "A party girl...?!",
                    "line": 59,
                    "url": "https://drive.google.com/file/d/1XJJmlWJKU78JzEIMojtjP8q5j_l_JC0p/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Uh, so what I mean is like when a simple kid comes to the city and gets a real glow up.",
                    "line": 60,
                    "url": "https://drive.google.com/file/d/1avK9cYOtad4Wl-70kwT8fnZ6OTM1odWY/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Yes, sir! That's exactly it! I simply never expected her to blend in so completely with her surroundings!",
                    "line": 61,
                    "url": "https://drive.google.com/file/d/1PQH-2qUOarcWxlU-EStxG5VIh4_qUtSJ/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Hiding behind a bright, bubbly outer persona... That's one option for playing the part of a side character.)",
                    "line": 62,
                    "url": "https://drive.google.com/file/d/1SC54t9Iqr3lJD0adZzvM3k66rG85Qf0O/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Iota probably avoided copying the exact same traits, but if even one of our resident actors is shocked...)",
                    "line": 63,
                    "url": "https://drive.google.com/file/d/1vOyCwC9BnYz-ZHbPbqJIn9DLR-OQZ4tZ/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(...maybe she underwent a serious transformation, like totally beyond just playing the part!)",
                    "line": 64,
                    "url": "https://drive.google.com/file/d/1l-S89tP1CMlfElJO9m9sETsmTWTEIcFD/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "The \"party people\" look, those \"put your hands up\" mannerisms... Perhaps the time will come when I, too, must master such things...",
                    "line": 65,
                    "url": "https://drive.google.com/file/d/1Znn9Gem3b9_SrD4jVDSkckkvHr28zk8D/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "What?! My lord, you would immerse yourself in such culture?!",
                    "line": 66,
                    "url": "https://drive.google.com/file/d/1k8MmI-1kygK6sz_InGWRJChGEcxbq80N/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Nah, let's not start going off on tangents before I've even mastered the basics of being a side character... Best forget the party route for now.)",
                    "line": 67,
                    "url": "https://drive.google.com/file/d/1AIkNSQ08XJ6hiMESHLM5cow1I90iKr_N/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "At any rate, there is no denying that Iota has assimilated fully with her urban environs. Perhaps there is much to learn from her skills of mimicry!",
                    "line": 68,
                    "url": "https://drive.google.com/file/d/1joAqll-Pgvow5DTTaOJzUdKrJuj9bZqS/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(Much to learn... Could Lambda become a party girl?)",
                    "line": 69,
                    "url": "https://drive.google.com/file/d/17N2JgJfujtHFZ2DVhqDZ26pkiSzt2Cr3/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Hmm...",
                    "line": 70,
                    "url": "https://drive.google.com/file/d/1knLwr-QPFghF5QmETtQixYR8hLvn2Rao/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Master Shadow...?",
                    "line": 71,
                    "url": "https://drive.google.com/file/d/14WXDo749Q9qHC4SRUf6S67fPs3Rg1kKW/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "(...Actually, it might not-be such a bad fit. I bet an actress like her could pull it off no problem.)",
                    "line": 72,
                    "url": "https://drive.google.com/file/d/11_XGMtE1VIKlNcMa-v9sAFB-CsylSkBn/view?usp=drivesdk"
                },
                {
                    "name": "Cid Kagenou",
                    "name_variant": "Cid",
                    "subtitle": "Yes... Exercise your abilities to the fullest.",
                    "line": 73,
                    "url": "https://drive.google.com/file/d/18dx9QiHGLA1EVWVyN-AolLW7cRxumJMp/view?usp=drivesdk"
                },
                {
                    "name": "Lambda",
                    "name_variant": "Lambda",
                    "subtitle": "Sir! Yes sir!",
                    "line": 74,
                    "url": "https://drive.google.com/file/d/1Bm1-9YzUYzfX7I_jKg9PsSSm_QCz00XO/view?usp=drivesdk"
                }
            ]
        }
    }
}

//let setDoc = db.collection('data').doc('an_s2_e6').set(data['s2']);

let setDoc = db.collection('data').doc('ssc_p3_c3-4').set(data['p3']['c3-4']);

//let setDoc = db.collection('data').doc('es_ssitw').set(data['ssitw']);

//let setDoc = db.collection('data').doc('ln_v5').set(data['v5']);

// let setDoc = db.collection('data').doc('an_s101').set(data['kj1']);
setDoc.then(() => {
  console.log('Document successfully written!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
